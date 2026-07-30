# /second/ecomInsight/getAigcTaskResult

> 中文说明：获取任务结果  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/8353>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/ecomInsight/getAigcTaskResult |
| 中文名称 | 获取任务结果 |
| 文档目录 | 短视频API |
| Article ID | 8353 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/6/24 11:19:50 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20 |

## 使用说明

获取任务结果

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.ecomInsight/getAigcTaskResult | 调用的API接口名称 | - | - |
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
| 0 | task_id | task_id | false | 99 | 123 | 主任务id | - | - |
| 0 | id | id | false | 99 | 1 | 子任务id | - | - |
| 0 | task_type | task_type | false | 2 | VideoRecommending | 任务类型：<br>VideoRecommending、VideoSearch、VideoUnderstand | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | video_recommending | video_recommending | - | 5 | - | 视频推荐结果 | - | R1 |
| 1 | video_recommending.page | page | - | 99 | 1 | 页码 | - | - |
| 1 | video_recommending.page_size | page_size | - | 99 | 20 | 页面条数 | - | - |
| 1 | video_recommending.status | status | - | 99 | 3 | 任务状态：<br>0 失败，1 创建，2 执行中，3 执行失败 | - | - |
| 1 | video_recommending.msg | msg | - | 2 | xxxx | 消息 | - | - |
| 1 | video_recommending.task_id | task_id | - | 99 | 123 | 主任务id | - | - |
| 1 | video_recommending.video_list | video_list | - | 3 | - | 视频列表 | - | R1 |
| 2 | video_recommending.video_list.video_id | video_id | - | 2 | 123123 | 视频id | - | - |
| 2 | video_recommending.video_list.video_title | video_title | - | 2 | xxxx | 视频标题 | - | - |
| 2 | video_recommending.video_list.video_url | video_url | - | 2 | xxxxx | 视频链接 | - | - |
| 2 | video_recommending.video_list.product_id | product_id | - | 2 | xxxxx | 商品id | - | - |
| 2 | video_recommending.video_list.product_name | product_name | - | 2 | xxxxx | 商品名 | - | - |
| 1 | video_recommending.total | total | - | 99 | 123 | 总条数 | - | - |
| 0 | video_search | video_search | - | 5 | - | 视频搜索 | - | R1 |
| 1 | video_search.task_id | task_id | - | 99 | 123 | 主任务id | - | - |
| 1 | video_search.video_list | video_list | - | 3 | - | 任务列表 | - | R1 |
| 2 | video_search.video_list.video_id | video_id | - | 2 | 123123 | 视频id | - | - |
| 2 | video_search.video_list.video_title | video_title | - | 2 | xxxxxx | 视频标题 | - | - |
| 2 | video_search.video_list.video_url | video_url | - | 2 | xxxxxx | 视频链接 | - | - |
| 2 | video_search.video_list.product_id | product_id | - | 2 | 12313 | 商品id | - | - |
| 2 | video_search.video_list.product_name | product_name | - | 2 | xxxxxx | 商品名 | - | - |
| 1 | video_search.total | total | - | 99 | 12313 | 总数 | - | - |
| 1 | video_search.page | page | - | 99 | 1 | 页码 | - | - |
| 1 | video_search.page_size | page_size | - | 99 | 20 | 页面条数 | - | - |
| 1 | video_search.status | status | - | 99 | 3 | 任务状态：<br>0 失败，1 创建，2 执行中，3 执行失败 | - | - |
| 1 | video_search.msg | msg | - | 2 | xxxx | 消息 | - | - |
| 0 | video_understand | video_understand | - | 5 | - | 视频理解 | - | R1 |
| 1 | video_understand.full_voiceover_script | full_voiceover_script | - | 2 | xxxxx | 全部的口播脚本 | - | - |
| 1 | video_understand.storyboard_list | storyboard_list | - | 3 | - | 分镜列表 | - | R1 |
| 2 | video_understand.storyboard_list.index | index | - | 99 | 1 | 分镜序号 | - | - |
| 2 | video_understand.storyboard_list.duration | duration | - | 9 | 3 | 分镜时长 | - | - |
| 2 | video_understand.storyboard_list.screenshot_url | screenshot_url | - | 2 | xxxxx | 分镜截图 | - | - |
| 2 | video_understand.storyboard_list.scene_description | scene_description | - | 2 | xxxxx | 分镜描述 | - | - |
| 2 | video_understand.storyboard_list.voiceover_text | voiceover_text | - | 2 | xxxx | 分镜对应文案 | - | - |
| 1 | video_understand.status | status | - | 99 | 3 | 任务状态：<br>0 失败，1 创建，2 执行中，3 执行失败 | - | - |
| 1 | video_understand.msg | msg | - | 2 | xxx | 消息 | - | - |
| 1 | video_understand.task_id | task_id | - | 99 | 2 | 主任务id | - | - |
| 0 | msg | msg | - | 2 | xxxx | 消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |
| 0 | video_search_top_short | video_search_top_short | - | 5 | - | 短视频top榜单数据 | - | R1 |
| 1 | video_search_top_short.data | data | - | 5 | - | 数据 | - | R1 |
| 2 | video_search_top_short.data.page_size | page_size | - | 99 | 30 | 条数 | - | - |
| 2 | video_search_top_short.data.task_id | task_id | - | 99 | 123 | 任务id | - | - |
| 2 | video_search_top_short.data.records | records | - | 3 | - | 具体数据 | - | R1 |
| 3 | video_search_top_short.data.records.product_name | product_name | - | 2 | xxxx | 商品名 | - | - |
| 3 | video_search_top_short.data.records.product_leaf_cat_name | product_leaf_cat_name | - | 2 | xx | 商品三级类目 | - | - |
| 3 | video_search_top_short.data.records.video_url | video_url | - | 2 | xxxx | 视频url | - | - |
| 3 | video_search_top_short.data.records.like_cnt_all | like_cnt_all | - | 99 | xxxx | 总点赞数 | - | - |
| 3 | video_search_top_short.data.records.shop_name | shop_name | - | 2 | xxxxx | 店铺名 | - | - |
| 3 | video_search_top_short.data.records.product_first_cat_name | product_first_cat_name | - | 2 | xxxx | 商品一级类目 | - | - |
| 3 | video_search_top_short.data.records.product_second_cat_name | product_second_cat_name | - | 2 | xxxx | 商品二级类目 | - | - |
| 3 | video_search_top_short.data.records.video_title | video_title | - | 2 | xxxx | 视频标题 | - | - |
| 3 | video_search_top_short.data.records.video_first_tag_name | video_first_tag_name | - | 2 | xxxxx | 视频一级标签 | - | - |
| 3 | video_search_top_short.data.records.comment_cnt_all | comment_cnt_all | - | 99 | xxx | 评论 | - | - |
| 3 | video_search_top_short.data.records.id | id | - | 99 | xxx | id | - | - |
| 3 | video_search_top_short.data.records.video_id | video_id | - | 2 | xxx | 视频id | - | - |
| 3 | video_search_top_short.data.records.video_second_tag_name | video_second_tag_name | - | 2 | xxxx | 视频二级标签 | - | - |
| 3 | video_search_top_short.data.records.video_third_tag_name | video_third_tag_name | - | 2 | xxxx | 视频三级标签 | - | - |
| 3 | video_search_top_short.data.records.video_create_date | video_create_date | - | 2 | xxxx | 视频创建时间 | - | - |
| 3 | video_search_top_short.data.records.share_cnt_all | share_cnt_all | - | 99 | xxxx | 分享 | - | - |
| 3 | video_search_top_short.data.records.favourite_cnt_all | favourite_cnt_all | - | 99 | xxxx | 总收藏 | - | - |
| 2 | video_search_top_short.data.total | total | - | 99 | xxx | 总数 | - | - |
| 2 | video_search_top_short.data.page | page | - | 99 | xxxx | 页码 | - | - |
| 1 | video_search_top_short.msg | msg | - | 2 | xxxx | 消息 | - | - |
| 1 | video_search_top_short.code | code | - | 99 | 0 | 状态码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/ecomInsight/getAigcTaskResult?app_key=your_appkey_here&method=second.ecomInsight.getAigcTaskResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/ecomInsight/getAigcTaskResult?app_key=your_appkey_here&method=second.ecomInsight.getAigcTaskResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondEcomInsightGetAigcTaskResultRequest request = new SecondEcomInsightGetAigcTaskResultRequest();
SecondEcomInsightGetAigcTaskResultParam param = request.getParam();
param.setTaskId(123L);
param.setId(1L);
param.setTaskType("VideoRecommending");
SecondEcomInsightGetAigcTaskResultResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondEcomInsightGetAigcTaskResultRequest();
$param = new SecondEcomInsightGetAigcTaskResultParam();
$request->setParam($param);
$param->task_id = 123;
$param->id = 1;
$param->task_type = "VideoRecommending";
$response = $request->execute(accessToken);

```

### python

```python
request = SecondEcomInsightGetAigcTaskResultRequest()
param = request.getParams()
param.task_id = 123
param.id = 1
param.task_type = "VideoRecommending"
response = request.execute(accessToken)

```

### go

```go
request := second_ecomInsight_getAigcTaskResult_request.New()
param := request.GetParams()
param.TaskId = 123
param.Id = 1
param.TaskType = "VideoRecommending"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondEcomInsightGetAigcTaskResultRequest();
var param = request.BuildParam();
param.TaskId = 123;
param.Id = 1;
param.TaskType = "VideoRecommending";
var response = request.Execute<SecondEcomInsightGetAigcTaskResultResponse>(accessToken);

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
