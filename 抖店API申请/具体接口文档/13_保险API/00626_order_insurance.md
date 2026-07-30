# /order/insurance

> 中文说明：根据订单ID，获取该订单对应的运费险保单的详细信息； 1、status<=1&status=5的情况下ins_ensured_time_begin、ins_ensured_time_end没有意义（返回的是默认时间"1754-08-31 06:49:25"  
> 所属类别：保险API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/32/626>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/insurance |
| 中文名称 | 根据订单ID，获取该订单对应的运费险保单的详细信息； 1、status<=1&status=5的情况下ins_ensured_time_begin、ins_ensured_time_end没有意义（返回的是默认时间"1754-08-31 06:49:25" |
| 文档目录 | 保险API |
| Article ID | 626 |
| 文档版本 | V1.05 |
| 官方更新时间 | 2021/6/23 16:10:57 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 800 |

## 使用说明

根据订单ID，获取该订单对应的运费险保单的详细信息；
1、status<=1&status=5的情况下ins_ensured_time_begin、ins_ensured_time_end没有意义（返回的是默认时间"1754-08-31 06:49:25"）忽略即可，status其他情况下都会返回正确的时间。

## 权限包

- 运费险 / 运费险信息查询（packageType=1）；适用应用类目：COD服务、售后管理、财务管理、商家后台系统、即时零售ebill订单管理（临时）、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.insurance | 调用的API接口名称 | - | - |
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
| 0 | order_id | OrderId | true | 2 | 6496679971677798670 | 订单id(可以加A也可以不加） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | policy_info_list | PolicyInfoList | - | 3 | - | 保单详情列表 | - | - |
| 1 | policy_info_list.ins_policy_no | InsPolicyNo | - | 2 | "10202009171446081711854084111" | 保单号 | - | R1 |
| 1 | policy_info_list.approximate_return_fee | ApproximateReturnFee | - | 1 | 1200 | 预计退保费用，单位分 | - | R1 |
| 1 | policy_info_list.total_premium | TotalPremium | - | 1 | 60 | 总保费，单位分 | - | R1 |
| 1 | policy_info_list.user_premium | UserPremium | - | 1 | 0 | 用户支付的保费，单位分 | - | R1 |
| 1 | policy_info_list.merchant_premium | MerchantPremium | - | 1 | 60 | 商家支付的保费，单位分 | - | R1 |
| 1 | policy_info_list.platform_premium | PlatformPremium | - | 1 | 0 | 平台承担的保费，单位分 | - | R1 |
| 1 | policy_info_list.status | Status | - | 7 | 2 | 保单状态 0: 初始化 1: 待生效 2: 保障中 3: 赔付完成 4: 保单失效 5: 已经取消 31:理赔成功待赔付 | - | R1 |
| 1 | policy_info_list.appeal_status | AppealStatus | - | 7 | 0 | 申述状态 0: 初始化 1: 申诉处理中 2: 申诉成功 3: 申诉失败 | - | R1 |
| 1 | policy_info_list.claim_status | ClaimStatus | - | 7 | 0 | 理赔状态 0: 初始化 1: 理赔中 2: 理赔成功 3: 理赔失败 | - | R1 |
| 1 | policy_info_list.company_name | CompanyName | - | 2 | "中国人民财产保险股份有限公司" | 保险公司名称 | - | R1 |
| 1 | policy_info_list.is_allow_appeal | IsAllowAppeal | - | 4 | false | 只有在保单状态为赔付失败的时候并允许申诉 true，其他情况 false | - | R1 |
| 1 | policy_info_list.goods_info_list | GoodsInfoList | - | 3 | - | 商品列表 | - | - |
| 2 | policy_info_list.goods_info_list.product_name | ProductName | - | 2 | "商品名称" | 商品名称 | - | R1 |
| 2 | policy_info_list.goods_info_list.product_id | ProductId | - | 1 | 3436088998672617334 | 商品id | - | R1 |
| 2 | policy_info_list.goods_info_list.category_id | CategoryId | - | 2 | "13-3004-3006" | 类目 | - | R1 |
| 2 | policy_info_list.goods_info_list.show_page_url | ShowPageUrl | - | 2 | "https://sf1-ttcdn-tos.pstatp.com/obj/temai/6535e88c983f735cabb99f5b00f6212awww800-800", | url | - | R1 |
| 2 | policy_info_list.goods_info_list.amount | Amount | - | 7 | 1 | 数量 | - | R1 |
| 1 | policy_info_list.fail_reason | FailReason | - | 2 | "失败原因" | 理赔或申述失败原因 | - | R1 |
| 1 | policy_info_list.insurance_hotline | InsuranceHotline | - | 2 | "400-188-1949转1" | 保险客服电话 | - | R1 |
| 1 | policy_info_list.premium_status | PremiumStatus | - | 7 | 2 | 保费状态 1：待扣减 2：已扣减 3：已退还 4：已垫付 5：已关闭 | - | R1 |
| 1 | policy_info_list.ins_ensured_time_begin | InsEnsuredTimeBeginStr | - | 2 | "2020-09-17 14:48:08" | 出保时间，status<=1&status=5的情况下ins_ensured_time_begin、ins_ensured_time_end没有意义（返回的是默认时间"1754-08-31 06:49:25"）忽略即可，status其他情况下都会返回正确的时间。 | - | R1 |
| 1 | policy_info_list.ins_ensured_time_end | InsEnsuredTimeEndStr | - | 2 | "2020-12-16 14:48:08" | 保险过期时间，status<=1&status=5的情况下ins_ensured_time_begin、ins_ensured_time_end没有意义（返回的是默认时间"1754-08-31 06:49:25"）忽略即可，status其他情况下都会返回正确的时间。 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/insurance?app_key=your_appkey_here&method=order.insurance&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/insurance?app_key=your_appkey_here&method=order.insurance&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderInsuranceRequest request = new OrderInsuranceRequest();
OrderInsuranceParam param = request.getParam();
param.setOrderId("6496679971677798670");
OrderInsuranceResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderInsuranceRequest();
$param = new OrderInsuranceParam();
$request->setParam($param);
$param->order_id = "6496679971677798670";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderInsuranceRequest()
param = request.getParams()
param.order_id = "6496679971677798670"
response = request.execute(accessToken)

```

### go

```go
request := order_insurance_request.New()
param := request.GetParams()
param.OrderId = "6496679971677798670"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderInsuranceRequest();
var param = request.BuildParam();
param.OrderId = "6496679971677798670";
var response = request.Execute<OrderInsuranceResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:9999 | 查询保单信息失败 | 业务处理失败，尝试重试 |
| 50002 | 业务处理失败 | isv.business-failed:2 | 参数错误,订单不存在 | 请检查order_id字段 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
