# /open/getOrderRecoveryRecommendation

> 中文说明：查询挽单策略  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/8096>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /open/getOrderRecoveryRecommendation |
| 中文名称 | 查询挽单策略 |
| 文档目录 | 售后退款API |
| Article ID | 8096 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/2/13 14:42:34 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

一期暂无平台推荐策略能力，需三方自行制定。

## 权限包

- 开放平台 / 售后挽单（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、订单管理、AI智能客服-微应用、电商ERP、商品基础工具、AI售后挽单、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | open.getOrderRecoveryRecommendation | 调用的API接口名称 | - | - |
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
| 0 | execute_condition | executeCondition | true | 2 | send_immediately | 挽单执行时机：send_immediately 立即触发，send_after_sign 签收后触发，send_7_days_after_sign 签收后7天触发，send_after_evaluation 评价后触发 | - | - |
| 0 | compensation_info | compensationInfo | false | 3 | - | 补偿信息 | - | - |
| 1 | compensation_info.compensation_sub_type | compensationSubType | false | 2 | cash_small_payment | 补偿方式细分：<br>现金类：cash_small_payment 小额打款; cash_alipay 支付宝打款; cash_wechat 微信打款<br>实物商品类：physical_gift_item 赠品，如商品小样、周边等; physical_present 礼品 如额外采购、定制礼品<br>虚拟权益类：rights_coupon 优惠券；rights_private_point 私域积分；rights_extended_warranty 延保卡；rights_extended_trial 延长试用周期 | - | - |
| 1 | compensation_info.compensation_type | compensationType | false | 2 | cash | 补偿方式：cash 现金类; physical 实物商品; rights 虚拟权益 | - | - |
| 1 | compensation_info.compensation_name | compensationName | false | 2 | 玩偶 | 若难以计算补偿金额，可填写名称（如：为消费者购买礼品的场景，可填写礼品名） | - | - |
| 1 | compensation_info.extra | extra | false | 8 | {"extraInfo":"test"} | 用于上报补偿方式扩展信息 | - | - |
| 1 | compensation_info.compensation_amount | compensationAmount | false | 1 | 1000 | 补偿权益金额，单位为分 | - | - |
| 0 | extra | extra | false | 8 | test | 用于上报挽单场景扩展信息 | - | - |
| 0 | shop_order_id | shopOrderID | true | 2 | 123 | 订单号 | - | - |
| 0 | after_sale_id | afterSaleID | false | 2 | 123 | 售后单号 | - | - |
| 0 | recover_type | recoverType | true | 2 | sms | 挽单类型：customer_service_human 人工客服; customer_service_robot 智能客服; sms 短信; outbound_call外呼; after_sales_tool售后工具 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | can_recover | canRecover | - | 4 | true | 是否可挽 | - | - |
| 0 | recover_trace_id | recoverTraceId | - | 2 | 123456 | 挽单ID，用于追踪全链路挽单动作 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OpenGetOrderRecoveryRecommendationRequest request = new OpenGetOrderRecoveryRecommendationRequest();
OpenGetOrderRecoveryRecommendationParam param = request.getParam();
param.setExecuteCondition("send_immediately");
param.setExtra(test);
param.setShopOrderId("123");
param.setAfterSaleId("123");
param.setRecoverType("sms");
OpenGetOrderRecoveryRecommendationResponse response = request.execute(accessToken);

```

### php

```php
$request = new OpenGetOrderRecoveryRecommendationRequest();
$param = new OpenGetOrderRecoveryRecommendationParam();
$request->setParam($param);
$param->execute_condition = "send_immediately";
$param->extra = test;
$param->shop_order_id = "123";
$param->after_sale_id = "123";
$param->recover_type = "sms";
$response = $request->execute(accessToken);

```

### python

```python
request = OpenGetOrderRecoveryRecommendationRequest()
param = request.getParams()
param.execute_condition = "send_immediately"
param.extra = test
param.shop_order_id = "123"
param.after_sale_id = "123"
param.recover_type = "sms"
response = request.execute(accessToken)

```

### go

```go
request := open_getOrderRecoveryRecommendation_request.New()
param := request.GetParams()
param.ExecuteCondition = "send_immediately"
param.Extra = test
param.ShopOrderId = "123"
param.AfterSaleId = "123"
param.RecoverType = "sms"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OpenGetOrderRecoveryRecommendationRequest();
var param = request.BuildParam();
param.ExecuteCondition = "send_immediately";
param.Extra = test;
param.ShopOrderId = "123";
param.AfterSaleId = "123";
param.RecoverType = "sms";
var response = request.Execute<OpenGetOrderRecoveryRecommendationResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:10010 | 参数非法 | 请检查上报接口穿传参 |
| 40004 | 非法的参数 | isv.parameter-invalid:605090052 | 订单与店铺不匹配 | 请检查订单ID |
| 40004 | 非法的参数 | isv.parameter-invalid:605090053 | 订单与售后单不匹配 | 请检查订单与售后单ID |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
