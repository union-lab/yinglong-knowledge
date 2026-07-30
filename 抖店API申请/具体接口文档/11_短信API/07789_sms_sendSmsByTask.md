# /sms/sendSmsByTask

> 中文说明：通过父任务发起新的短信发送任务  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7789>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/sendSmsByTask |
| 中文名称 | 通过父任务发起新的短信发送任务 |
| 文档目录 | 短信API |
| Article ID | 7789 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/9/19 11:05:49 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

通过父任务发起新的短信发送任务

## 权限包

- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.sendSmsByTask | 调用的API接口名称 | - | - |
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
| 0 | audience_send_task_id | audienceSendTaskId | false | 99 | 123 | 短信发送任务id, /sms/audience/send的响应参数 | - | - |
| 0 | part_send_config | partSendConfig | false | 5 | - | 入参 | - | - |
| 1 | part_send_config.target_send_count | targetSendCount | false | 99 | 123 | 目标发送数量，优先级较高 | - | - |
| 1 | part_send_config.target_send_percent | targetSendPercent | false | 99 | 34 | 目标发送百分比范围(0,100]，若目标发送数量>0，则以目标发送数量为准 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | sub_task_id | subTaskId | - | 2 | 123 | 子任务id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/sendSmsByTask?app_key=your_appkey_here&method=sms.sendSmsByTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/sendSmsByTask?app_key=your_appkey_here&method=sms.sendSmsByTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsSendSmsByTaskRequest request = new SmsSendSmsByTaskRequest();
SmsSendSmsByTaskParam param = request.getParam();
param.setAudienceSendTaskId(123L);
SmsSendSmsByTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsSendSmsByTaskRequest();
$param = new SmsSendSmsByTaskParam();
$request->setParam($param);
$param->audience_send_task_id = 123;
$response = $request->execute(accessToken);

```

### python

```python
request = SmsSendSmsByTaskRequest()
param = request.getParams()
param.audience_send_task_id = 123
response = request.execute(accessToken)

```

### go

```go
request := sms_sendSmsByTask_request.New()
param := request.GetParams()
param.AudienceSendTaskId = 123
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsSendSmsByTaskRequest();
var param = request.BuildParam();
param.AudienceSendTaskId = 123;
var response = request.Execute<SmsSendSmsByTaskResponse>(accessToken);

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
