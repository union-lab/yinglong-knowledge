# /second/ecomInsight/deleteTask

> 中文说明：删除task  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7934>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/ecomInsight/deleteTask |
| 中文名称 | 删除task |
| 文档目录 | 短视频API |
| Article ID | 7934 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/12/9 20:01:51 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

删除task取消task任务（videoPilot任务无法使用）

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.ecomInsight/deleteTask | 调用的API接口名称 | - | - |
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
| 0 | id | id | false | 99 | 1 | 任务id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | msg | msg | - | 2 | xxxx | 消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |
| 0 | data | data | - | 5 | - | 结构体 | - | R1 |
| 1 | data.pilot_task_id | pilot_task_id | - | 2 | xxx | pilot任务id | - | - |
| 1 | data.update_time | update_time | - | 2 | xxx | 更新时间 | - | - |
| 1 | data.id | id | - | 99 | 1 | 任务id | - | - |
| 1 | data.name | name | - | 2 | xxxx | 任务名 | - | - |
| 1 | data.status | status | - | 99 | 4 | 任务状态 | - | - |
| 1 | data.task_type | task_type | - | 2 | xxxx | 任务类型 | - | - |
| 1 | data.create_info | create_info | - | 2 | xxx | JSON string | - | - |
| 1 | data.task_result | task_result | - | 2 | xxx | JSON string | - | - |
| 1 | data.create_time | create_time | - | 2 | xxxx | 创建时间 | - | - |
| 1 | data.msg | msg | - | 2 | xxxx | 消息 | - | - |
| 1 | data.model_task_id | model_task_id | - | 2 | xxxx | 模型任务id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/ecomInsight/deleteTask?app_key=your_appkey_here&method=second.ecomInsight.deleteTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/ecomInsight/deleteTask?app_key=your_appkey_here&method=second.ecomInsight.deleteTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondEcomInsightDeleteTaskRequest request = new SecondEcomInsightDeleteTaskRequest();
SecondEcomInsightDeleteTaskParam param = request.getParam();
param.setId(1L);
SecondEcomInsightDeleteTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondEcomInsightDeleteTaskRequest();
$param = new SecondEcomInsightDeleteTaskParam();
$request->setParam($param);
$param->id = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = SecondEcomInsightDeleteTaskRequest()
param = request.getParams()
param.id = 1
response = request.execute(accessToken)

```

### go

```go
request := second_ecomInsight_deleteTask_request.New()
param := request.GetParams()
param.Id = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondEcomInsightDeleteTaskRequest();
var param = request.BuildParam();
param.Id = 1;
var response = request.Execute<SecondEcomInsightDeleteTaskResponse>(accessToken);

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
