# /power/queryPaymentStatus

> 中文说明：逆向支付信息查询  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1774>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/queryPaymentStatus |
| 中文名称 | 逆向支付信息查询 |
| 文档目录 | 物流发货API |
| Article ID | 1774 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/12/26 16:56:52 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3000 |

## 使用说明

逆向支付信息查询

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）
- 物流连接平台 / 上门取件对接（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.queryPaymentStatus | 调用的API接口名称 | - | - |
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
| 0 | order_id | orderId | false | 2 | LBF123 | 订单号 | - | - |
| 0 | biz_type | bizType | false | 2 | ReversePickUp | 业务类型 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | payment_status | paymentStatus | - | 2 | 1 | 1--已支付 0--核重未支付 2--未核重 | - | R1 |
| 0 | payment_fee | paymentFee | - | 1 | 1 | 用户支付金额（分） | - | R1 |
| 0 | insurance_claim_fee | insuranceClaimFee | - | 1 | 1 | 应理赔金额（分）= 激励金额 + 保险理赔金额 | - | R1 |
| 0 | encourage_fee | encourageFee | - | 1 | 1 | 激励金额（分） | - | R1 |
| 0 | platform_allowance | platformAllowance | - | 1 | 1 | 平台补贴金额(分) | - | R1 |
| 0 | insure_claim_fee | insureClaimFee | - | 1 | 1 | 保险理赔金额(分) | - | R1 |
| 0 | operation_time | operationTime | - | 2 | 2022-09-06 10:00:00 | 状态对应的操作时间 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/queryPaymentStatus?app_key=your_appkey_here&method=power.queryPaymentStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/queryPaymentStatus?app_key=your_appkey_here&method=power.queryPaymentStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerQueryPaymentStatusRequest request = new PowerQueryPaymentStatusRequest();
PowerQueryPaymentStatusParam param = request.getParam();
param.setOrderId("LBF123");
param.setBizType("ReversePickUp");
PowerQueryPaymentStatusResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerQueryPaymentStatusRequest();
$param = new PowerQueryPaymentStatusParam();
$request->setParam($param);
$param->order_id = "LBF123";
$param->biz_type = "ReversePickUp";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerQueryPaymentStatusRequest()
param = request.getParams()
param.order_id = "LBF123"
param.biz_type = "ReversePickUp"
response = request.execute(accessToken)

```

### go

```go
request := power_queryPaymentStatus_request.New()
param := request.GetParams()
param.OrderId = "LBF123"
param.BizType = "ReversePickUp"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerQueryPaymentStatusRequest();
var param = request.BuildParam();
param.OrderId = "LBF123";
param.BizType = "ReversePickUp";
var response = request.Execute<PowerQueryPaymentStatusResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10000 | 10000:不存在对应的取件信息 | 输入的订单不存在，不可重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
