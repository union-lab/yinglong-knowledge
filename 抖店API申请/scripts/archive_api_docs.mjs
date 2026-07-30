import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.dirname(scriptDir);
const outputDir = path.join(projectDir, "具体接口文档");
const rawDir = path.join(outputDir, "_原始JSON");
const manifestPath = process.argv[2];
const ARCHIVE_DATE = "2026-07-14";
const DETAIL_API =
  "https://op.jinritemai.com/doc/external/open/queryDocArticleDetail?articleId=";
const DOC_ORIGIN = "https://op.jinritemai.com";
const CONCURRENCY = 10;

if (!manifestPath) {
  throw new Error("用法：node archive_api_docs.mjs <接口目录JSON路径>");
}

const catalog = JSON.parse(await readFile(manifestPath, "utf8"));
const categories = Object.entries(catalog);

function escapeCell(value) {
  if (value === undefined || value === null || value === "") return "-";
  const text = typeof value === "string" ? value : JSON.stringify(value);
  return text.replaceAll("|", "\\|").replaceAll("\r", "").replaceAll("\n", "<br>");
}

function fence(value, language = "text") {
  if (value === undefined || value === null || value === "") return "";
  const body = typeof value === "string" ? value : JSON.stringify(value, null, 2);
  return `\n\`\`\`${language}\n${body}\n\`\`\`\n`;
}

function safeName(value) {
  return value
    .replace(/^\/+/, "")
    .replaceAll("/", "_")
    .replace(/[^a-zA-Z0-9._-]+/g, "_")
    .replace(/^_+|_+$/g, "") || "api";
}

function articleIdFromHref(href) {
  const match = href.match(/\/(\d+)(?:\?.*)?$/);
  if (!match) throw new Error(`无法从链接提取 articleId：${href}`);
  return match[1];
}

function flattenParams(params, parent = "", depth = 0, rows = []) {
  if (!Array.isArray(params)) return rows;
  for (const param of params) {
    const field =
      param.requestName ?? param.responseName ?? param.fromName ?? param.toName ?? param.name ?? "-";
    const fieldPath = parent && field !== "-" ? `${parent}.${field}` : field;
    rows.push({ ...param, fieldPath, depth });
    if (Array.isArray(param.children) && param.children.length > 0) {
      flattenParams(param.children, fieldPath === "-" ? parent : fieldPath, depth + 1, rows);
    }
  }
  return rows;
}

function renderParamTable(title, params) {
  const rows = flattenParams(params);
  if (rows.length === 0) return `## ${title}\n\n无。\n`;
  const lines = [
    `## ${title}`,
    "",
    "| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |",
    "|---:|---|---|---|---|---|---|---|---|",
  ];
  for (const row of rows) {
    lines.push(
      `| ${row.depth} | ${escapeCell(row.fieldPath)} | ${escapeCell(row.toName ?? row.fromName)} | ${escapeCell(row.mustNeed)} | ${escapeCell(row.type)} | ${escapeCell(row.example)} | ${escapeCell(row.description)} | ${escapeCell(row.tagId)} | ${escapeCell(row.securityLevel)} |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function renderExamples(title, examples) {
  if (!examples || typeof examples !== "object" || Object.keys(examples).length === 0) {
    return `## ${title}\n\n无。\n`;
  }
  const lines = [`## ${title}`, ""];
  for (const [language, example] of Object.entries(examples)) {
    lines.push(`### ${language}`);
    if (example && typeof example === "object" && !Array.isArray(example)) {
      if (example.reqUrl) lines.push(`请求地址：${example.reqUrl}`);
      const body = example.code ?? example.demo ?? example;
      lines.push(fence(body, language === "curl" ? "bash" : language));
    } else {
      lines.push(fence(example, language));
    }
  }
  return `${lines.join("\n")}\n`;
}

function renderErrors(error) {
  const errors = error?.errCodeList;
  if (!Array.isArray(errors) || errors.length === 0) return "## 错误码\n\n无。\n";
  const lines = [
    "## 错误码",
    "",
    "| code | msg | sub_code | sub_msg | 处理建议 |",
    "|---|---|---|---|---|",
  ];
  for (const item of errors) {
    lines.push(
      `| ${escapeCell(item.code)} | ${escapeCell(item.msg)} | ${escapeCell(item.subCode ?? item.sub_code)} | ${escapeCell(item.subMsg ?? item.sub_msg)} | ${escapeCell(item.solution)} |`,
    );
  }
  return `${lines.join("\n")}\n`;
}

function renderAuths(auths) {
  if (!Array.isArray(auths) || auths.length === 0) return "无";
  return auths
    .map((auth) => {
      const categories = Array.isArray(auth.categoryList) && auth.categoryList.length
        ? `；适用应用类目：${auth.categoryList.join("、")}`
        : "";
      return `- ${auth.groupName ?? "未分组"} / ${auth.packageName ?? "未命名权限包"}（packageType=${auth.packageType ?? "-"}）${categories}`;
    })
    .join("\n");
}

function renderEndpoint({ category, href, menuTitle, menuDescription, articleId, article }) {
  const info = article.info ?? {};
  let content = {};
  let parseError = "";
  try {
    content = typeof article.content === "string" ? JSON.parse(article.content) : article.content ?? {};
  } catch (error) {
    parseError = String(error);
  }
  const sourceUrl = `${DOC_ORIGIN}${href}`;
  const updateTime = info.updateTime
    ? new Date(Number(info.updateTime) * 1000).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai", hour12: false })
    : "-";
  const request = content.request ?? {};
  const response = content.response ?? {};
  const demo = content.demo ?? {};
  const lines = [
    `# ${info.title ?? menuTitle}`,
    "",
    `> 中文说明：${info.subTitle ?? menuDescription ?? "-"}  `,
    `> 所属类别：${category}  `,
    `> 官方文档：<${sourceUrl}>  `,
    `> 本地归档日期：${ARCHIVE_DATE}`,
    "",
    "## 接口元数据",
    "",
    "| 项目 | 内容 |",
    "|---|---|",
    `| 接口路径 | ${escapeCell(info.title ?? menuTitle)} |`,
    `| 中文名称 | ${escapeCell(info.subTitle ?? menuDescription)} |`,
    `| 文档目录 | ${escapeCell(info.dirName ?? category)} |`,
    `| Article ID | ${articleId} |`,
    `| 文档版本 | ${escapeCell(info.version)} |`,
    `| 官方更新时间 | ${escapeCell(updateTime)} |`,
    `| 授权主体 | ${escapeCell(info.authSubjectIdList)} |`,
    `| 收费类型（官方原值） | ${escapeCell(info.apiChargeType)} |`,
    `| 限流等级（官方原值） | ${escapeCell(info.apiLimitLevel)} |`,
    `| 限流值（官方原值） | ${escapeCell(info.apiLimitValue)} |`,
    "",
    "## 使用说明",
    "",
    info.description || "无。",
    "",
    "## 权限包",
    "",
    renderAuths(info.auths),
    "",
    renderParamTable("公共请求参数", request.publicParam),
    renderParamTable("业务请求参数", request.requestParam),
    renderParamTable("响应参数", response.responseData),
    renderExamples("请求示例", demo.requestDemo),
    renderExamples("响应示例", demo.responseDemo),
    renderErrors(content.error),
    "## 原始资料",
    "",
    "归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。",
  ];
  if (parseError) {
    lines.push("", `> 内容 JSON 解析失败：${parseError}`, fence(article.content, "json"));
  }
  return `${lines.join("\n").replace(/\n{4,}/g, "\n\n\n")}\n`;
}

async function fetchJson(url, retries = 3) {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, { headers: { accept: "application/json" } });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      if (payload.code !== 0 || !payload.data?.article) {
        throw new Error(`官方接口返回异常：${JSON.stringify(payload).slice(0, 300)}`);
      }
      return payload;
    } catch (error) {
      lastError = error;
      if (attempt < retries) await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
    }
  }
  throw lastError;
}

const jobs = [];
for (const [categoryIndex, [category, entries]] of categories.entries()) {
  for (const entry of entries) {
    const [menuTitle, ...descriptionParts] = entry.text.split("\n");
    jobs.push({
      category,
      categoryIndex,
      href: entry.href,
      menuTitle: menuTitle.trim(),
      menuDescription: descriptionParts.join(" ").trim(),
      articleId: articleIdFromHref(entry.href),
    });
  }
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await mkdir(rawDir, { recursive: true });

const results = new Array(jobs.length);
let cursor = 0;
async function worker() {
  while (true) {
    const index = cursor;
    cursor += 1;
    if (index >= jobs.length) return;
    const job = jobs[index];
    const payload = await fetchJson(`${DETAIL_API}${job.articleId}`);
    const article = payload.data.article;
    const sequence = String(job.categoryIndex + 1).padStart(2, "0");
    const categoryFolder = `${sequence}_${job.category}`;
    const filename = `${String(job.articleId).padStart(5, "0")}_${safeName(article.info?.title ?? job.menuTitle)}.md`;
    const categoryPath = path.join(outputDir, categoryFolder);
    const rawCategoryPath = path.join(rawDir, categoryFolder);
    await mkdir(categoryPath, { recursive: true });
    await mkdir(rawCategoryPath, { recursive: true });
    await Promise.all([
      writeFile(
        path.join(categoryPath, filename),
        renderEndpoint({ ...job, article }),
        "utf8",
      ),
      writeFile(
        path.join(rawCategoryPath, `${job.articleId}.json`),
        `${JSON.stringify(payload, null, 2)}\n`,
        "utf8",
      ),
    ]);
    results[index] = { ...job, filename, categoryFolder, info: article.info ?? {} };
    if ((index + 1) % 25 === 0 || index + 1 === jobs.length) {
      process.stdout.write(`已归档 ${index + 1}/${jobs.length}\n`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

const rootLines = [
  "# 抖店 API 具体接口文档",
  "",
  `> 官方目录：<https://op.jinritemai.com/docs/api-docs/162/6060>  `,
  `> 本地归档日期：${ARCHIVE_DATE}  `,
  `> 归档范围：${categories.length} 个 API 类别，共 ${results.length} 个当前目录可见接口。`,
  "",
  "## 类别索引",
  "",
  "| 序号 | API 类别 | 接口数 | 申请口径 | 具体接口索引 |",
  "|---:|---|---:|---|---|",
];

for (const [categoryIndex, [category, entries]] of categories.entries()) {
  const sequence = String(categoryIndex + 1).padStart(2, "0");
  const categoryResults = results.filter((item) => item.category === category);
  const categoryIndexName = `${sequence}_${category}.md`;
  const categoryLines = [
    `# ${category} 具体接口索引`,
    "",
    `> 官方目录：<${DOC_ORIGIN}${entries[0]?.href ?? ""}>  `,
    `> 本地归档日期：${ARCHIVE_DATE}  `,
    `> 当前目录可见接口：${categoryResults.length} 个。`,
    "",
    "| 序号 | 接口路径 | 中文说明 | 版本 | 官方更新时间 | 本地文档 | 官方文档 |",
    "|---:|---|---|---|---|---|---|",
  ];
  categoryResults.forEach((item, index) => {
    const updateTime = item.info.updateTime
      ? new Date(Number(item.info.updateTime) * 1000).toLocaleDateString("zh-CN", { timeZone: "Asia/Shanghai" })
      : "-";
    categoryLines.push(
      `| ${index + 1} | ${escapeCell(item.info.title ?? item.menuTitle)} | ${escapeCell(item.info.subTitle ?? item.menuDescription)} | ${escapeCell(item.info.version)} | ${escapeCell(updateTime)} | [查看](./${item.categoryFolder}/${item.filename}) | [官方](${DOC_ORIGIN}${item.href}) |`,
    );
  });
  await writeFile(path.join(outputDir, categoryIndexName), `${categoryLines.join("\n")}\n`, "utf8");
  let applicationScope = "必申请";
  if (category === "工具API") applicationScope = "原则上不申请（鉴权必需接口例外）";
  if (category === "短信API") applicationScope = "不申请";
  rootLines.push(
    `| ${categoryIndex + 1} | ${category} | ${categoryResults.length} | ${applicationScope} | [查看](./${categoryIndexName}) |`,
  );
}

rootLines.push(
  "",
  "## 使用说明",
  "",
  "- 每个接口均有独立 Markdown，包含接口元数据、说明、权限包、请求参数、响应参数、示例和错误码。",
  "- `_原始JSON/` 保存官方明细接口的原始返回，作为无损复核材料。",
  "- 本归档反映归档日官方目录当前可见状态；正式申请和开发前仍应复核在线文档。",
  "- 友联申请口径：短信 API 不申请；工具 API 原则上不申请，Token、授权查询等接入必需能力除外；其余归档类别均为必申请。",
  "",
);

await Promise.all([
  writeFile(path.join(outputDir, "README.md"), rootLines.join("\n"), "utf8"),
  writeFile(
    path.join(outputDir, "接口目录快照.json"),
    `${JSON.stringify(catalog, null, 2)}\n`,
    "utf8",
  ),
]);

process.stdout.write(`完成：${categories.length} 类，${results.length} 个接口。\n`);
