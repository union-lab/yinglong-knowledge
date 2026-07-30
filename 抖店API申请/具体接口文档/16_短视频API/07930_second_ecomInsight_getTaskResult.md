# /second/ecomInsight/getTaskResult

> 中文说明：获取任务结果  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7930>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/ecomInsight/getTaskResult |
| 中文名称 | 获取任务结果 |
| 文档目录 | 短视频API |
| Article ID | 7930 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/4/2 14:44:40 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

通过任务id获取对应任务结果，明细文档https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.ecomInsight/getTaskResult | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | id | id | true | 99 | 1 | 任务id | - | - |
| 0 | task_type | task_type | true | 2 | VideoByText | 任务类型 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | msg | msg | - | 2 | success | 消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |
| 0 | video_by_text_response | videoByTextResponse | - | 5 | - | 文生视频返回值 | - | R1 |
| 1 | video_by_text_response.file_url | file_url | - | 2 | xxxx | 文件url | - | - |
| 1 | video_by_text_response.video_url | video_url | - | 2 | xxx | 视频url | - | - |
| 1 | video_by_text_response.last_frame_url | last_frame_url | - | 2 | xxx | 尾帧url | - | - |
| 0 | video_by_pic_first_frame_response | videoByPicFirstFrameResponse | - | 5 | - | 视频生成-基于首帧 | - | R1 |
| 1 | video_by_pic_first_frame_response.file_url | file_url | - | 2 | xxx | 文件url | - | - |
| 1 | video_by_pic_first_frame_response.video_url | video_url | - | 2 | xxx | 视频url | - | - |
| 1 | video_by_pic_first_frame_response.last_frame_url | last_frame_url | - | 2 | xxx | 尾帧url | - | - |
| 0 | video_by_pic_first_last_frame_response | videoByPicFirstLastFrameResponse | - | 5 | - | 视频生成-基于首尾帧 | - | R1 |
| 1 | video_by_pic_first_last_frame_response.file_url | file_url | - | 2 | xxx | 文件url | - | - |
| 1 | video_by_pic_first_last_frame_response.video_url | video_url | - | 2 | xxx | 视频url | - | - |
| 1 | video_by_pic_first_last_frame_response.last_frame_url | last_frame_url | - | 2 | xxx | 尾帧url | - | - |
| 0 | video_understand_response | videoUnderstandResponse | - | 5 | - | 视频理解 | - | R1 |
| 1 | video_understand_response.usage | usage | - | 5 | - | 请求花费 | - | R1 |
| 2 | video_understand_response.usage.total_tokens | total_tokens | - | 99 | 1231 | 总token数 | - | - |
| 2 | video_understand_response.usage.prompt_tokens | prompt_tokens | - | 99 | 123123 | 提示token数 | - | - |
| 2 | video_understand_response.usage.completion_tokens | completion_tokens | - | 99 | 123123 | 完成token数 | - | - |
| 2 | video_understand_response.usage.prompt_tokens_details | prompt_tokens_details | - | 5 | - | prompt_tokens详情 | - | R1 |
| 3 | video_understand_response.usage.prompt_tokens_details.cached_tokens | cached_tokens | - | 99 | 123123 | 缓存tokens | - | - |
| 3 | video_understand_response.usage.prompt_tokens_details.reasoning_tokens | reasoning_tokens | - | 99 | 123123 | reason tokens | - | - |
| 2 | video_understand_response.usage.completion_tokens_details | completion_tokens_details | - | 5 | - | 完成token详情 | - | R1 |
| 3 | video_understand_response.usage.completion_tokens_details.cached_tokens | cached_tokens | - | 99 | 123213 | 缓存tokens | - | - |
| 3 | video_understand_response.usage.completion_tokens_details.reasoning_tokens | reasoning_tokens | - | 99 | 123123 | reason tokens | - | - |
| 1 | video_understand_response.object | object | - | 2 | xxx | 预留对象 | - | - |
| 1 | video_understand_response.choices | choices | - | 3 | - | 结果信息 | - | R1 |
| 2 | video_understand_response.choices.index | index | - | 99 | 1 | 结果在列表中的索引 | - | - |
| 2 | video_understand_response.choices.message | message | - | 5 | - | 消息体 | - | R1 |
| 3 | video_understand_response.choices.message.content | content | - | 2 | xxxx | 内容 | - | - |
| 3 | video_understand_response.choices.message.reasoning_content | reasoning_content | - | 2 | xxxx | 原因内容 | - | - |
| 3 | video_understand_response.choices.message.role | role | - | 2 | xxxx | 角色 | - | - |
| 2 | video_understand_response.choices.logprobs | logprobs | - | 2 | null | 对数概率信息（通常为 null） | - | - |
| 2 | video_understand_response.choices.finish_reason | finish_reason | - | 2 | stop | 生成停止的原因，例如 "stop" | - | - |
| 1 | video_understand_response.created | created | - | 99 | 12312312312 | 创建时间 | - | - |
| 1 | video_understand_response.service_tier | service_tier | - | 2 | default | 默认值 | - | - |
| 1 | video_understand_response.id | id | - | 2 | 1 | 任务id | - | - |
| 1 | video_understand_response.model | model | - | 2 | xxxx | 任务模型 | - | - |
| 0 | video_by_pic_ref_and_video_response | videoByPicRefAndVideoResponse | - | 5 | - | VideoPilot返回结构 | - | R1 |
| 1 | video_by_pic_ref_and_video_response.file_url | file_url | - | 2 | xxx | 文件url | - | - |
| 1 | video_by_pic_ref_and_video_response.video_url | video_url | - | 2 | xxx | 视频url | - | - |
| 1 | video_by_pic_ref_and_video_response.last_frame_url | last_frame_url | - | 2 | xxx | 尾帧url | - | - |
| 0 | pic_by_text_response | picByTextResponse | - | 5 | - | 文生图结构 | - | R1 |
| 1 | pic_by_text_response.data | data | - | 3 | - | 详细信息 | - | R1 |
| 2 | pic_by_text_response.data.url | url | - | 2 | xxx | 图片url | - | - |
| 2 | pic_by_text_response.data.size | size | - | 2 | xxxx | 图片大小 | - | - |
| 1 | pic_by_text_response.model | model | - | 2 | xxxx | 模型 | - | - |
| 1 | pic_by_text_response.usage | usage | - | 5 | - | 花费token信息 | - | R1 |
| 2 | pic_by_text_response.usage.completion_tokens | completion_tokens | - | 99 | 212123 | 对话tokens数 | - | - |
| 2 | pic_by_text_response.usage.prompt_tokens_details | prompt_tokens_details | - | 5 | - | prompt使用token详情 | - | R1 |
| 3 | pic_by_text_response.usage.prompt_tokens_details.cached_tokens | cached_tokens | - | 99 | 123123 | 缓存 | - | - |
| 3 | pic_by_text_response.usage.prompt_tokens_details.reasoning_tokens | reasoning_tokens | - | 99 | 123123 | 预测 | - | - |
| 2 | pic_by_text_response.usage.completion_tokens_details | completion_tokens_details | - | 5 | - | 对话使用token详情 | - | R1 |
| 3 | pic_by_text_response.usage.completion_tokens_details.cached_tokens | cached_tokens | - | 99 | 123123 | 缓存 | - | - |
| 3 | pic_by_text_response.usage.completion_tokens_details.reasoning_tokens | reasoning_tokens | - | 99 | 123123 | 预测 | - | - |
| 2 | pic_by_text_response.usage.total_tokens | total_tokens | - | 99 | 123123 | 总花费 | - | - |
| 2 | pic_by_text_response.usage.prompt_tokens | prompt_tokens | - | 99 | 123123 | 输出tokens | - | - |
| 1 | pic_by_text_response.created | created | - | 99 | 123123 | 创建时间 | - | - |
| 0 | deep_think_response | deepThinkResponse | - | 5 | - | 深度思考 | - | R1 |
| 1 | deep_think_response.error | error | - | 5 | - | 错误信息结构 | - | R1 |
| 2 | deep_think_response.error.code | code | - | 2 | 0 | 错误码 | - | - |
| 2 | deep_think_response.error.message | message | - | 2 | xxxx | 错误描述 | - | - |
| 1 | deep_think_response.usage | usage | - | 5 | - | Token 用量统计 | - | R1 |
| 2 | deep_think_response.usage.input_tokens | input_tokens | - | 99 | xxx | 输入Token数 | - | - |
| 2 | deep_think_response.usage.total_tokens | total_tokens | - | 99 | xxx | 总Token数 | - | - |
| 2 | deep_think_response.usage.output_tokens | output_tokens | - | 99 | xxx | 输出Token数 | - | - |
| 2 | deep_think_response.usage.input_tokens_details | input_tokens_details | - | 5 | - | 输入Token详情 | - | R1 |
| 3 | deep_think_response.usage.input_tokens_details.cached_tokens | cached_tokens | - | 99 | xxx | 缓存Token数 | - | - |
| 2 | deep_think_response.usage.output_tokens_details | output_tokens_details | - | 5 | - | 输出Token详情 | - | R1 |
| 3 | deep_think_response.usage.output_tokens_details.reasoning_tokens | reasoning_tokens | - | 99 | xxx | 推理Token数 | - | - |
| 1 | deep_think_response.object | object | - | 2 | response | 响应类型（固定为response） | - | - |
| 1 | deep_think_response.output | output | - | 3 | - | 输出内容列表 | - | R1 |
| 2 | deep_think_response.output.status | status | - | 2 | completed | 输出项状态 | - | - |
| 2 | deep_think_response.output.summary | summary | - | 3 | - | 总结内容（可选，仅reasoning类型有值） | - | R1 |
| 3 | deep_think_response.output.summary.text | text | - | 2 | xxxx | 总结文本 | - | - |
| 3 | deep_think_response.output.summary.type | type | - | 2 | summary_text | 总结类型（summary_text） | - | - |
| 2 | deep_think_response.output.role | role | - | 2 | assistant | 角色（可选，仅message类型有值） | - | - |
| 2 | deep_think_response.output.content | content | - | 3 | - | 消息内容（可选，仅message类型有值） | - | R1 |
| 3 | deep_think_response.output.content.text | text | - | 2 | xxxx | 消息文本 | - | - |
| 3 | deep_think_response.output.content.type | type | - | 2 | output_text | 消息类型（output_text） | - | - |
| 2 | deep_think_response.output.id | id | - | 2 | xxxx | 输出项唯一标识 | - | - |
| 2 | deep_think_response.output.type | type | - | 2 | message | 输出类型（reasoning/message等） | - | - |
| 1 | deep_think_response.model | model | - | 2 | xxxxx | 模型名称 | - | - |
| 1 | deep_think_response.status | status | - | 2 | completed | 响应状态（completed等） | - | - |
| 1 | deep_think_response.caching | caching | - | 5 | - | 缓存配置 | - | R1 |
| 2 | deep_think_response.caching.type | type | - | 2 | disabled | 缓存类型（disabled等） | - | - |
| 1 | deep_think_response.thinking | thinking | - | 5 | - | 思考过程配置 | - | R1 |
| 2 | deep_think_response.thinking.type | type | - | 2 | enabled | 思考类型（enabled等） | - | - |
| 1 | deep_think_response.expire_at | expire_at | - | 99 | xxxx | 过期时间戳（秒级） | - | - |
| 1 | deep_think_response.created_at | created_at | - | 99 | xxxx | 创建时间戳（秒级） | - | - |
| 1 | deep_think_response.service_tier | service_tier | - | 2 | xxxx | 服务等级 | - | - |
| 1 | deep_think_response.max_output_tokens | max_output_tokens | - | 99 | xxxx | 最大输出Token数 | - | - |
| 1 | deep_think_response.id | id | - | 2 | xxxxx | 响应唯一标识 | - | - |
| 1 | deep_think_response.text | text | - | 5 | - | 文本内容结构 | - | R1 |
| 2 | deep_think_response.text.format | format | - | 5 | - | 文件格式 | - | R1 |
| 3 | deep_think_response.text.format.type | type | - | 2 | xxx | 文本格式类型 | - | - |
| 0 | speech_by_text_response | speechByTextResponse | - | 5 | - | 语音生成 | - | R1 |
| 1 | speech_by_text_response.tos_path | tos_path | - | 2 | xxxx | 语音文件url | - | - |
| 1 | speech_by_text_response.words | words | - | 3 | - | 词明细数据 | - | R1 |
| 2 | speech_by_text_response.words.word | word | - | 2 | 三 | 对应词 | - | - |
| 2 | speech_by_text_response.words.start_time | start_time | - | 9 | 0.1 | 开始时间戳 | - | - |
| 2 | speech_by_text_response.words.end_time | end_time | - | 9 | 0.2 | 结束时间戳 | - | - |
| 2 | speech_by_text_response.words.confidence | confidence | - | 9 | 0.55 | 准确度 | - | - |
| 0 | pic_understand_response | picUnderstandResponse | - | 5 | - | 图片理解 | - | R1 |
| 1 | pic_understand_response.id | id | - | 2 | xxxx | 响应唯一标识ID | - | - |
| 1 | pic_understand_response.model | model | - | 2 | xxxx | 使用的模型名称 | - | - |
| 1 | pic_understand_response.object | object | - | 2 | chat.completion | 响应类型（如chat.completion） | - | - |
| 1 | pic_understand_response.choices | choices | - | 3 | - | 结果选项列表 | - | R1 |
| 2 | pic_understand_response.choices.index | index | - | 99 | 1 | 选项索引 | - | - |
| 2 | pic_understand_response.choices.message | message | - | 5 | - | 消息内容体 | - | R1 |
| 3 | pic_understand_response.choices.message.name | name | - | 2 | xxxx | 名称（可为空） | - | - |
| 3 | pic_understand_response.choices.message.role | role | - | 2 | assistant | 角色（如assistant） | - | - |
| 3 | pic_understand_response.choices.message.content | content | - | 2 | xxxxx | 核心回复内容 | - | - |
| 3 | pic_understand_response.choices.message.reasoning_content | reasoning_content | - | 2 | xxxxxx | 推理过程内容 | - | - |
| 2 | pic_understand_response.choices.finish_reason | finish_reason | - | 2 | stop | 结束原因（如stop） | - | - |
| 1 | pic_understand_response.created | created | - | 99 | xxxxxx | 创建时间戳（秒级） | - | - |
| 1 | pic_understand_response.service_tier | serviceTier | - | 2 | xxxxx | 服务等级（驼峰命名兼容JSON） | - | - |
| 0 | pic_edit_response | picEditResponse | - | 5 | - | 图片修改 | - | R1 |
| 1 | pic_edit_response.usage | usage | - | 5 | - | 资源使用统计 | - | R1 |
| 2 | pic_edit_response.usage.generated_images | generated_images | - | 99 | 1 | 生成的图片数量 | - | - |
| 1 | pic_edit_response.created | created | - | 99 | xxxxx | 创建时间戳（秒级） | - | - |
| 1 | pic_edit_response.data | data | - | 3 | - | 生成的图片列表 | - | R1 |
| 2 | pic_edit_response.data.url | url | - | 2 | xxxxx | 图片访问URL | - | - |
| 2 | pic_edit_response.data.size | size | - | 2 | xxxxx | 图片尺寸（如864x1152） | - | - |
| 2 | pic_edit_response.data.b64_json | b64_json | - | 2 | xxxxxx | Base64编码的图片JSON（可为空） | - | - |
| 1 | pic_edit_response.error | error | - | 5 | - | 错误信息结构体 | - | R1 |
| 2 | pic_edit_response.error.code | code | - | 2 | xx | 错误码（可为空） | - | - |
| 2 | pic_edit_response.error.message | message | - | 2 | xxxxx | 错误描述（可为空） | - | - |
| 1 | pic_edit_response.model | model | - | 2 | xxxxx | 使用的模型名称 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/ecomInsight/getTaskResult?app_key=your_appkey_here&method=second.ecomInsight.getTaskResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/ecomInsight/getTaskResult?app_key=your_appkey_here&method=second.ecomInsight.getTaskResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondEcomInsightGetTaskResultRequest request = new SecondEcomInsightGetTaskResultRequest();
SecondEcomInsightGetTaskResultParam param = request.getParam();
param.setId(1L);
param.setTaskType("VideoByText");
SecondEcomInsightGetTaskResultResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondEcomInsightGetTaskResultRequest();
$param = new SecondEcomInsightGetTaskResultParam();
$request->setParam($param);
$param->id = 1;
$param->task_type = "VideoByText";
$response = $request->execute(accessToken);

```

### python

```python
request = SecondEcomInsightGetTaskResultRequest()
param = request.getParams()
param.id = 1
param.task_type = "VideoByText"
response = request.execute(accessToken)

```

### go

```go
request := second_ecomInsight_getTaskResult_request.New()
param := request.GetParams()
param.Id = 1
param.TaskType = "VideoByText"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondEcomInsightGetTaskResultRequest();
var param = request.BuildParam();
param.Id = 1;
param.TaskType = "VideoByText";
var response = request.Execute<SecondEcomInsightGetTaskResultResponse>(accessToken);

```

### js

```js
{}
```


## 响应示例

### responseSuccess

```responseSuccess
10000
```

### responseError

```responseError
{
  "sub_code": "",
  "sub_msg": ""
}
```


## 错误码

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
