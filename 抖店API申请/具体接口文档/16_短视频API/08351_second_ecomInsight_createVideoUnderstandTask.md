# /second/ecomInsight/createVideoUnderstandTask

> 中文说明：创建视频理解子任务  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/8351>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/ecomInsight/createVideoUnderstandTask |
| 中文名称 | 创建视频理解子任务 |
| 文档目录 | 短视频API |
| Article ID | 8351 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/6/2 20:41:43 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

创建视频理解子任务

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.ecomInsight/createVideoUnderstandTask | 调用的API接口名称 | - | - |
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
| 0 | task_id | task_id | false | 99 | 1 | 主任务id | - | - |
| 0 | video_id | video_id | false | 2 | 222221312313 | 抖音视频id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 数据 | - | R1 |
| 1 | data.task_id | task_id | - | 99 | 123 | 主任务id | - | - |
| 1 | data.task_type | task_type | - | 2 | VideoUnderstand | 任务类型-VideoUnderstand | - | - |
| 1 | data.id | id | - | 99 | 12 | 子任务id | - | - |
| 0 | msg | msg | - | 2 | xxx | 消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/ecomInsight/createVideoUnderstandTask?app_key=your_appkey_here&method=second.ecomInsight.createVideoUnderstandTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/ecomInsight/createVideoUnderstandTask?app_key=your_appkey_here&method=second.ecomInsight.createVideoUnderstandTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondEcomInsightCreateVideoUnderstandTaskRequest request = new SecondEcomInsightCreateVideoUnderstandTaskRequest();
SecondEcomInsightCreateVideoUnderstandTaskParam param = request.getParam();
param.setTaskId(1L);
param.setVideoId("222221312313");
SecondEcomInsightCreateVideoUnderstandTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondEcomInsightCreateVideoUnderstandTaskRequest();
$param = new SecondEcomInsightCreateVideoUnderstandTaskParam();
$request->setParam($param);
$param->task_id = 1;
$param->video_id = "222221312313";
$response = $request->execute(accessToken);

```

### python

```python
request = SecondEcomInsightCreateVideoUnderstandTaskRequest()
param = request.getParams()
param.task_id = 1
param.video_id = "222221312313"
response = request.execute(accessToken)

```

### go

```go
request := second_ecomInsight_createVideoUnderstandTask_request.New()
param := request.GetParams()
param.TaskId = 1
param.VideoId = "222221312313"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondEcomInsightCreateVideoUnderstandTaskRequest();
var param = request.BuildParam();
param.TaskId = 1;
param.VideoId = "222221312313";
var response = request.Execute<SecondEcomInsightCreateVideoUnderstandTaskResponse>(accessToken);

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
