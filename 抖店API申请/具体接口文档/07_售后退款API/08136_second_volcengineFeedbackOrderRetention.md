# /second/volcengineFeedbackOrderRetention

> 中文说明：AI挽单回调接口  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/8136>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/volcengineFeedbackOrderRetention |
| 中文名称 | AI挽单回调接口 |
| 文档目录 | 售后退款API |
| Article ID | 8136 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/3/12 19:04:49 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3000 |

## 使用说明

服务商调用回调接口，将订单的挽回情况回写

## 权限包

- 火山 / 火山AI挽单（packageType=1）；适用应用类目：智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.volcengineFeedbackOrderRetention | 调用的API接口名称 | - | - |
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
| 0 | order_amount | order_amount | false | 99 | 19000 | 订单挽回的金额，单位为分，如19000。如果status=success，则order_amount和order_retention_cost必填。 | - | - |
| 0 | failed_reason | failed_reason | false | 2 | 外呼未接通 | 挽回失败原因，如：外呼未接通、客户买错了等 | - | - |
| 0 | shop_order_id | shop_order_id | true | 2 | 123456789012345 | 必填, String, 订单号 | - | - |
| 0 | status | status | false | 2 | success | 挽回状态，success/fail。如果is_outbound=1，则status和call_status必填。 | - | - |
| 0 | is_outbound | is_outbound | true | 2 | 1 | 必填，是否进行外呼，0: 否；1: 是 | - | - |
| 0 | order_retention_cost | order_retention_cost | false | 99 | 1000 | 挽单的成本，单位为分，口径需要和服务商保持一致，比如：外呼成本。如果status=success，则order_amount和order_retention_cost必填。 | - | - |
| 0 | call_status | call_status | false | 2 | answered | 接通状态，answered/unanswered。如果is_outbound=1，则status和call_status必填 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/volcengineFeedbackOrderRetention?app_key=your_appkey_here&method=second.volcengineFeedbackOrderRetention&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/volcengineFeedbackOrderRetention?app_key=your_appkey_here&method=second.volcengineFeedbackOrderRetention&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondVolcengineFeedbackOrderRetentionRequest request = new SecondVolcengineFeedbackOrderRetentionRequest();
SecondVolcengineFeedbackOrderRetentionParam param = request.getParam();
param.setOrderAmount(19000L);
param.setFailedReason("外呼未接通");
param.setShopOrderId("123456789012345");
param.setStatus("success");
param.setIsOutbound("1");
param.setOrderRetentionCost(1000L);
param.setCallStatus("answered");
SecondVolcengineFeedbackOrderRetentionResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondVolcengineFeedbackOrderRetentionRequest();
$param = new SecondVolcengineFeedbackOrderRetentionParam();
$request->setParam($param);
$param->order_amount = 19000;
$param->failed_reason = "外呼未接通";
$param->shop_order_id = "123456789012345";
$param->status = "success";
$param->is_outbound = "1";
$param->order_retention_cost = 1000;
$param->call_status = "answered";
$response = $request->execute(accessToken);

```

### python

```python
request = SecondVolcengineFeedbackOrderRetentionRequest()
param = request.getParams()
param.order_amount = 19000
param.failed_reason = "外呼未接通"
param.shop_order_id = "123456789012345"
param.status = "success"
param.is_outbound = "1"
param.order_retention_cost = 1000
param.call_status = "answered"
response = request.execute(accessToken)

```

### go

```go
request := second_volcengineFeedbackOrderRetention_request.New()
param := request.GetParams()
param.OrderAmount = 19000
param.FailedReason = "外呼未接通"
param.ShopOrderId = "123456789012345"
param.Status = "success"
param.IsOutbound = "1"
param.OrderRetentionCost = 1000
param.CallStatus = "answered"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondVolcengineFeedbackOrderRetentionRequest();
var param = request.BuildParam();
param.OrderAmount = 19000;
param.FailedReason = "外呼未接通";
param.ShopOrderId = "123456789012345";
param.Status = "success";
param.IsOutbound = "1";
param.OrderRetentionCost = 1000;
param.CallStatus = "answered";
var response = request.Execute<SecondVolcengineFeedbackOrderRetentionResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:40001 | 参数不对，请检查 | 缺少必要的参数 |
| 20000 | 系统错误 | isp.service-error:50000 | 业务处理失败 | 请反馈平台开发 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
