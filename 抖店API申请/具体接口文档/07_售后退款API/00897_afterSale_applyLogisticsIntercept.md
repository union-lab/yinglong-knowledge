# /afterSale/applyLogisticsIntercept

> 中文说明：申请物流拦截  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/897>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/applyLogisticsIntercept |
| 中文名称 | 申请物流拦截 |
| 文档目录 | 售后退款API |
| Article ID | 897 |
| 文档版本 | V2.02 |
| 官方更新时间 | 2022/11/25 17:31:21 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

快递状态处于已揽收未派送之间时，由于各种原因，无需寄送后，进行拦截，将货物原路返还给寄件人

## 权限包

- 售后 / 售后管理（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、售后管理、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.applyLogisticsIntercept | 调用的API接口名称 | - | - |
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
| 0 | after_sale_id | AfterSaleID | true | 1 | 12345 | 售后单ID | - | - |
| 0 | op_from | OpFrom | true | 7 | 1 | 操作来源（1:商家  3:客服） | - | - |
| 0 | intercept_targets | InterceptTargets | true | 3 | - | 要拦截的包裹 | - | - |
| 1 | intercept_targets.company_code | CompanyCode | true | 2 | yuantong | 物流公司编码 | - | - |
| 1 | intercept_targets.tracking_no | TrackingNo | true | 2 | YT1387990014325 | 物流单号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | intercept_results | InterceptResults | - | 3 | - | 物流拦截结果 | - | R1 |
| 1 | intercept_results.company_code | CompanyCode | - | 2 | powertestexpress | 物流公司编码 | - | R1 |
| 1 | intercept_results.company_name | CompanyName | - | 2 | 物流测试快递 | 物流公司名称 | - | R1 |
| 1 | intercept_results.tracking_no | TrackingNo | - | 2 | 3213123123 | 物流单号 | - | R1 |
| 1 | intercept_results.value_amount | ValueAmount | - | 1 | 400 | 包裹价值（分） | - | R1 |
| 1 | intercept_results.can_intercept | CanIntercept | - | 4 | false | 是否可拦截（拦截详情时返回） | - | R1 |
| 1 | intercept_results.is_success | IsSuccess | - | 4 | false | 是否拦截成功（发起拦截时返回） | - | R1 |
| 1 | intercept_results.unavailable_reason_code | UnavailableReasonCode | - | 1 | -10006 | 不可拦截原因编码 | - | R1 |
| 1 | intercept_results.unavailable_reason | UnavailableReason | - | 2 | 服务器开了小差，请稍后重试 | 不可拦截原因文案 | - | R1 |
| 1 | intercept_results.intercept_cost | InterceptCost | - | 1 | 400 | 拦截费用（分），（拦截详情时返回，不可拦截时无意义） | - | R1 |
| 1 | intercept_results.cur_product | CurProduct | - | 5 | - | 当前售后商品信息 | - | R1 |
| 2 | intercept_results.cur_product.order_id | OrderID | - | 1 | 1706063166401591 | 商品单订单号 | - | R1 |
| 2 | intercept_results.cur_product.product_image | ProductImage | - | 2 | https://tosv.boe.byted.org/obj/temai/5a10d8cfc3747b2862fb72090fd976a3www660-660 | 商品图片 | - | R1 |
| 2 | intercept_results.cur_product.product_name | ProductName | - | 2 | 云达人测试单裙 | 商品名称 | - | R1 |
| 2 | intercept_results.cur_product.product_spec | ProductSpec | - | 2 | 红色系 | 商品规格 | - | R1 |
| 2 | intercept_results.cur_product.tags | Tags | - | 3 | null | 商品标签 | - | R1 |
| 2 | intercept_results.cur_product.price | Price | - | 1 | 200 | 单价 | - | R1 |
| 2 | intercept_results.cur_product.amount | Amount | - | 1 | 1 | 数量 | - | R1 |
| 1 | intercept_results.other_products | OtherProducts | - | 3 | - | 其它商品列表 | - | R1 |
| 2 | intercept_results.other_products.order_id | OrderID | - | 1 | 1706063166401575 | 商品单订单号 | - | R1 |
| 2 | intercept_results.other_products.product_image | ProductImage | - | 2 | https://tosv.boe.byted.org/obj/temai/5a10d8cfc3747b2862fb72090fd976a3www660-660 | 商品图片 | - | R1 |
| 2 | intercept_results.other_products.product_name | ProductName | - | 2 | 云达人测试单裙 | 商品名称 | - | R1 |
| 2 | intercept_results.other_products.product_spec | ProductSpec | - | 2 | 白色系 | 商品规格 | - | R1 |
| 2 | intercept_results.other_products.tags | Tags | - | 3 | null | 商品标签 | - | R1 |
| 2 | intercept_results.other_products.price | Price | - | 1 | 200 | 单价 | - | R1 |
| 2 | intercept_results.other_products.amount | Amount | - | 1 | 1 | 数量 | - | R1 |
| 1 | intercept_results.other_product_amount | OtherProductAmount | - | 1 | 1 | 其他商品件数 | - | R1 |
| 1 | intercept_results.settlement_mode | SettlementMode | - | 7 | 0 | 结算方式 0是线上结算 1是线下结算 | - | R1 |
| 0 | success_count | SuccessCount | - | 1 | 0 | 拦截成功次数 | - | R1 |
| 0 | failed_count | FailedCount | - | 1 | 1 | 拦截失败次数 | - | R1 |
| 0 | unavailable_reason_code | UnavailableReasonCode | - | 1 | -10006 | 不可拦截编码(failed_count=1时有意义) | - | R1 |
| 0 | unavailable_reason | UnavailableReason | - | 2 | 服务器开了小差，请稍后重试 | 不可拦截原因(failed_count=1时有意义) | - | R1 |
| 0 | refund_amount | RefundAmount | - | 1 | 1 | 售后单退款总金额 | - | R1 |

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
AfterSaleApplyLogisticsInterceptRequest request = new AfterSaleApplyLogisticsInterceptRequest();
AfterSaleApplyLogisticsInterceptParam param = request.getParam();
param.setAfterSaleId(12345L);
param.setOpFrom(1);
AfterSaleApplyLogisticsInterceptResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleApplyLogisticsInterceptRequest();
$param = new AfterSaleApplyLogisticsInterceptParam();
$request->setParam($param);
$param->after_sale_id = 12345;
$param->op_from = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleApplyLogisticsInterceptRequest()
param = request.getParams()
param.after_sale_id = 12345
param.op_from = 1
response = request.execute(accessToken)

```

### go

```go
request := afterSale_applyLogisticsIntercept_request.New()
param := request.GetParams()
param.AfterSaleId = 12345
param.OpFrom = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleApplyLogisticsInterceptRequest();
var param = request.BuildParam();
param.AfterSaleId = 12345;
param.OpFrom = 1;
var response = request.Execute<AfterSaleApplyLogisticsInterceptResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10000 | 信息获取失败，请稍后重试 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:12001 | 12001:售后类型不支持快递拦截 | 12001:售后类型不支持快递拦截 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
