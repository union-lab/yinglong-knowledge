# /open/reportOrderRecoveryResult

> 中文说明：上报挽单执行结果  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/8095>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /open/reportOrderRecoveryResult |
| 中文名称 | 上报挽单执行结果 |
| 文档目录 | 售后退款API |
| Article ID | 8095 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/2/13 14:42:12 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

上报挽单执行结果

## 权限包

- 开放平台 / 售后挽单（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、订单管理、AI智能客服-微应用、电商ERP、商品基础工具、AI售后挽单、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | open.reportOrderRecoveryResult | 调用的API接口名称 | - | - |
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
| 0 | is_reach_consumer | isReachConsumer | true | 4 | true | 是否触达消费者 | - | - |
| 0 | reach_failed_reason | reachFailedReason | false | 2 | 外呼未接通 | 未触达原因 | - | - |
| 0 | recover_result | recoverResult | false | 2 | success | 挽单结果，枚举如下：success 挽单成功; no_reach_consumer 未能触达消费者；consumer_refuse 已触达但消费者拒绝；merchant_following 商家跟进中；merchant_abandon_recover 商家放弃挽单<br>挽单失败原因 | - | - |
| 0 | recover_failed_reason | recoverFailedReason | false | 2 | 消费者认为补偿金额较少，拒绝挽单 | 挽单失败原因 | - | - |
| 0 | outbound_id | outboundID | false | 3 | ["123"] | 外呼ID | - | - |
| 0 | recover_trace_id | recoverTraceId | true | 2 | 123456 | 挽单ID | - | - |
| 0 | message_id | messageID | false | 3 | ["123"] | 短信ID | - | - |
| 0 | conversation_id | conversationID | false | 3 | ["123"] | 会话ID | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/open/reportOrderRecoveryResult?app_key=your_appkey_here&method=open.reportOrderRecoveryResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/open/reportOrderRecoveryResult?app_key=your_appkey_here&method=open.reportOrderRecoveryResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OpenReportOrderRecoveryResultRequest request = new OpenReportOrderRecoveryResultRequest();
OpenReportOrderRecoveryResultParam param = request.getParam();
param.setIsReachConsumer(true);
param.setReachFailedReason("外呼未接通");
param.setRecoverResult("success");
param.setRecoverFailedReason("消费者认为补偿金额较少，拒绝挽单");
param.setOutboundId(["123"]);
param.setRecoverTraceId("123456");
param.setMessageId(["123"]);
param.setConversationId(["123"]);
OpenReportOrderRecoveryResultResponse response = request.execute(accessToken);

```

### php

```php
$request = new OpenReportOrderRecoveryResultRequest();
$param = new OpenReportOrderRecoveryResultParam();
$request->setParam($param);
$param->is_reach_consumer = true;
$param->reach_failed_reason = "外呼未接通";
$param->recover_result = "success";
$param->recover_failed_reason = "消费者认为补偿金额较少，拒绝挽单";
$param->outbound_id = ["123"];
$param->recover_trace_id = "123456";
$param->message_id = ["123"];
$param->conversation_id = ["123"];
$response = $request->execute(accessToken);

```

### python

```python
request = OpenReportOrderRecoveryResultRequest()
param = request.getParams()
param.is_reach_consumer = true
param.reach_failed_reason = "外呼未接通"
param.recover_result = "success"
param.recover_failed_reason = "消费者认为补偿金额较少，拒绝挽单"
param.outbound_id = ["123"]
param.recover_trace_id = "123456"
param.message_id = ["123"]
param.conversation_id = ["123"]
response = request.execute(accessToken)

```

### go

```go
request := open_reportOrderRecoveryResult_request.New()
param := request.GetParams()
param.IsReachConsumer = true
param.ReachFailedReason = "外呼未接通"
param.RecoverResult = "success"
param.RecoverFailedReason = "消费者认为补偿金额较少，拒绝挽单"
param.OutboundId = ["123"]
param.RecoverTraceId = "123456"
param.MessageId = ["123"]
param.ConversationId = ["123"]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OpenReportOrderRecoveryResultRequest();
var param = request.BuildParam();
param.IsReachConsumer = true;
param.ReachFailedReason = "外呼未接通";
param.RecoverResult = "success";
param.RecoverFailedReason = "消费者认为补偿金额较少，拒绝挽单";
param.OutboundId = ["123"];
param.RecoverTraceId = "123456";
param.MessageId = ["123"];
param.ConversationId = ["123"];
var response = request.Execute<OpenReportOrderRecoveryResultResponse>(accessToken);

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

| code | msg | sub_code | sub_msg | 处理建议 |
|---|---|---|---|---|
| 10000 | success | - | - | - |
| 40004 | 非法的参数 | isv.parameter-invalid:10010 | recoverTraceID不合法 | 请使用/open/getOrderRecoveryRecommendation接口返回的recoverTraceID |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
