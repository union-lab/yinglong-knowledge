# /order/queryOrderLogistics

> 中文说明：查询订单包裹物流  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/7170>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/queryOrderLogistics |
| 中文名称 | 查询订单包裹物流 |
| 文档目录 | 物流发货API |
| Article ID | 7170 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/12/23 10:30:52 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 4800 |

## 使用说明

查询订单包裹物流

## 权限包

- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.queryOrderLogistics | 调用的API接口名称 | - | - |
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
| 0 | order_id | ShopOrderId | true | 2 | 123456789 | 店铺单号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | order_package_info | OrderPackageInfo | - | 5 | - | 订单包裹数据 | - | R1 |
| 1 | order_package_info.shop_order_id | ShopOrderId | - | 2 | 12334455666 | 店铺单号 | 31 | - |
| 1 | order_package_info.order_status | OrderStatus | - | 99 | 2 | 订单状态 | 31 | - |
| 1 | order_package_info.package_info | PackageInfo | - | 3 | - | 包裹数据 | - | R1 |
| 2 | order_package_info.package_info.product_info | ProductInfo | - | 3 | - | 商品信息 | - | R1 |
| 3 | order_package_info.package_info.product_info.num | Num | - | 99 | 1 | sku件数 | 64 | - |
| 3 | order_package_info.package_info.product_info.actual_sub_sku | ActualSubSku | - | 3 | - | 子品信息 | - | R1 |
| 4 | order_package_info.package_info.product_info.actual_sub_sku.sku_id | SkuId | - | 99 | 12345 | 商品ID | 64 | - |
| 4 | order_package_info.package_info.product_info.actual_sub_sku.sku_img | SkuImg | - | 2 | 1 | sku图片 | 64 | - |
| 4 | order_package_info.package_info.product_info.actual_sub_sku.num | Num | - | 99 | 1 | sku件数 | 64 | - |
| 4 | order_package_info.package_info.product_info.actual_sub_sku.is_free | IsFree | - | 4 | true | 是否是赠品，true赠品 | 64 | - |
| 4 | order_package_info.package_info.product_info.actual_sub_sku.product_id | ProductId | - | 99 | 1 | 商品ID | 64 | - |
| 4 | order_package_info.package_info.product_info.actual_sub_sku.product_name | ProductName | - | 2 | 1 | 商品名称 | 64 | - |
| 3 | order_package_info.package_info.product_info.sku_order_id | SkuOrderId | - | 2 | 1 | 商品单ID | 64 | - |
| 3 | order_package_info.package_info.product_info.product_id | ProductId | - | 99 | 1 | 商品ID | 64 | - |
| 3 | order_package_info.package_info.product_info.product_name | ProductName | - | 2 | 1 | 商品名称 | 64 | - |
| 3 | order_package_info.package_info.product_info.sku_id | SkuId | - | 99 | 1 | 商品ID | 64 | - |
| 3 | order_package_info.package_info.product_info.sku_img | SkuImg | - | 2 | 1 | sku图片 | 64 | - |
| 3 | order_package_info.package_info.product_info.is_free | IsFree | - | 4 | 1 | 是否是赠品，true赠品false主品 | 64 | - |
| 3 | order_package_info.package_info.product_info.sub_sku_desc | SubSkuDesc | - | 3 | - | 子品规格信息 | - | R1 |
| 4 | order_package_info.package_info.product_info.sub_sku_desc.product_id | ProductId | - | 2 | 1 | 商品单ID | 64 | - |
| 4 | order_package_info.package_info.product_info.sub_sku_desc.unit_num | UnitNum | - | 99 | 1 | 标准数量 | 64 | - |
| 4 | order_package_info.package_info.product_info.sub_sku_desc.sku_id | SkuId | - | 2 | 1 | 子品 | 64 | - |
| 2 | order_package_info.package_info.delivery_info | DeliveryInfo | - | 3 | - | 快递轨迹信息 | - | R1 |
| 3 | order_package_info.package_info.delivery_info.deliver_id | DeliverId | - | 2 | 1 | deliverId | 64 | - |
| 3 | order_package_info.package_info.delivery_info.deliver_type | DeliverType | - | 99 | 1 | 仓包、发货包裹、补发包裹等等 | 64 | - |
| 3 | order_package_info.package_info.delivery_info.send_to | SendTo | - | 99 | 1 | 发货至, 1用户,2BIC,3商户, 默认1 | 64 | - |
| 3 | order_package_info.package_info.delivery_info.transit_merge_type | TransitMergeType | - | 2 | 1 | 新疆中转B段合单类型 | 64 | - |
| 3 | order_package_info.package_info.delivery_info.track_info | TrackInfo | - | 3 | - | 快递轨迹信息 | - | R1 |
| 4 | order_package_info.package_info.delivery_info.track_info.context | Context | - | 2 | 1 | 轨迹文案 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.track_info.time_stamp | TimeStamp | - | 99 | 1 | 状态变更时间 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.track_info.site | Site | - | 2 | 1 | 站点信息 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.track_info.state | State | - | 2 | 1 | 物流状态 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.track_info.state_desc | StateDesc | - | 2 | 1 | 物流状态描述 | 64 | - |
| 3 | order_package_info.package_info.delivery_info.reverse_express_info | ReverseExpressInfo | - | 5 | - | 当前段拒收退回的包裹信息 | - | R1 |
| 4 | order_package_info.package_info.delivery_info.reverse_express_info.express_info | ExpressInfo | - | 5 | - | 快递信息 | - | R1 |
| 5 | order_package_info.package_info.delivery_info.reverse_express_info.express_info.express_no | ExpressNo | - | 2 | 1 | 快递单号 | 64 | - |
| 5 | order_package_info.package_info.delivery_info.reverse_express_info.express_info.company_name | CompanyName | - | 2 | 1 | 快递公司中文名称：顺丰快递 | 64 | - |
| 5 | order_package_info.package_info.delivery_info.reverse_express_info.express_info.express_company | ExpressCompany | - | 2 | 1 | 快递公司：shunfeng | 64 | - |
| 5 | order_package_info.package_info.delivery_info.reverse_express_info.express_info.telephone | Telephone | - | 2 | 1 | 快递公司电话 | 64 | - |
| 5 | order_package_info.package_info.delivery_info.reverse_express_info.express_info.icon | Icon | - | 2 | 1 | 快递公司图标 | 64 | - |
| 5 | order_package_info.package_info.delivery_info.reverse_express_info.express_info.url | Url | - | 2 | 1 | 快递公司官网地址 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.reverse_express_info.deliver_id | DeliverId | - | 2 | 1 | 包裹ID | 64 | - |
| 4 | order_package_info.package_info.delivery_info.reverse_express_info.logistics_no | LogisticsNo | - | 2 | 1 | 物流单号 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.reverse_express_info.track_no | TrackNo | - | 2 | 1 | 快递单号 | 64 | - |
| 3 | order_package_info.package_info.delivery_info.track_no | TrackNo | - | 2 | 1 | 快递单号 | 64 | - |
| 3 | order_package_info.package_info.delivery_info.send_from | SendFrom | - | 99 | 1 | 发货来源 1用户,2BIC,3商户, 默认3 | 64 | - |
| 3 | order_package_info.package_info.delivery_info.company_info | CompanyInfo | - | 5 | - | 快递公司信息 | - | R1 |
| 4 | order_package_info.package_info.delivery_info.company_info.express_no | ExpressNo | - | 2 | 1 | 快递单号 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.company_info.company_name | CompanyName | - | 2 | 1 | 快递公司中文名称：顺丰快递 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.company_info.express_company | ExpressCompany | - | 2 | 1 | 快递公司：shunfeng | 64 | - |
| 4 | order_package_info.package_info.delivery_info.company_info.telephone | Telephone | - | 2 | 1 | 快递公司电话 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.company_info.icon | Icon | - | 2 | 1 | 快递公司图标 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.company_info.url | Url | - | 2 | 1 | 快递公司官网地址 | 64 | - |
| 3 | order_package_info.package_info.delivery_info.pre_deliver_info | PreDeliverInfo | - | 5 | - | 上一段的包裹信息 | - | R1 |
| 4 | order_package_info.package_info.delivery_info.pre_deliver_info.express_info | ExpressInfo | - | 5 | - | 快递信息 | - | R1 |
| 5 | order_package_info.package_info.delivery_info.pre_deliver_info.express_info.express_no | ExpressNo | - | 2 | 1 | 快递单号 | 64 | - |
| 5 | order_package_info.package_info.delivery_info.pre_deliver_info.express_info.company_name | CompanyName | - | 2 | 1 | 快递公司中文名称：顺丰快递 | 64 | - |
| 5 | order_package_info.package_info.delivery_info.pre_deliver_info.express_info.express_company | ExpressCompany | - | 2 | 1 | 快递公司：shunfeng | 64 | - |
| 5 | order_package_info.package_info.delivery_info.pre_deliver_info.express_info.telephone | Telephone | - | 2 | 1 | 快递公司电话 | 64 | - |
| 5 | order_package_info.package_info.delivery_info.pre_deliver_info.express_info.icon | Icon | - | 2 | 1 | 快递公司图标 | 64 | - |
| 5 | order_package_info.package_info.delivery_info.pre_deliver_info.express_info.url | Url | - | 2 | 1 | 快递公司官网地址 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.pre_deliver_info.deliver_id | DeliverId | - | 2 | 1 | 包裹ID | 64 | - |
| 4 | order_package_info.package_info.delivery_info.pre_deliver_info.logistics_no | LogisticsNo | - | 2 | 1 | 物流单号 | 64 | - |
| 4 | order_package_info.package_info.delivery_info.pre_deliver_info.track_no | TrackNo | - | 2 | 1 | 快递单号 | 64 | - |
| 2 | order_package_info.package_info.track_state | TrackState | - | 2 | 1 | 快递状态 | 64 | - |
| 2 | order_package_info.package_info.is_complement_deliver | IsComplementDeliver | - | 4 | 1 | 是否补发包裹:正向补发包裹 | 64 | - |
| 2 | order_package_info.package_info.send_type | SendType | - | 99 | 1 | 发货类型 1手动，2csv,3电子面单，4erp，5线下发货 | 64 | - |
| 2 | order_package_info.package_info.ship_time | ShipTime | - | 99 | 1 | 发货时间 | 64 | - |
| 1 | order_package_info.shop_id | ShopId | - | 99 | 1 | 店铺Id | 31 | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/queryOrderLogistics?app_key=your_appkey_here&method=order.queryOrderLogistics&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/queryOrderLogistics?app_key=your_appkey_here&method=order.queryOrderLogistics&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderQueryOrderLogisticsRequest request = new OrderQueryOrderLogisticsRequest();
OrderQueryOrderLogisticsParam param = request.getParam();
param.setOrderId("123456789");
OrderQueryOrderLogisticsResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderQueryOrderLogisticsRequest();
$param = new OrderQueryOrderLogisticsParam();
$request->setParam($param);
$param->order_id = "123456789";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderQueryOrderLogisticsRequest()
param = request.getParams()
param.order_id = "123456789"
response = request.execute(accessToken)

```

### go

```go
request := order_queryOrderLogistics_request.New()
param := request.GetParams()
param.OrderId = "123456789"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderQueryOrderLogisticsRequest();
var param = request.BuildParam();
param.OrderId = "123456789";
var response = request.Execute<OrderQueryOrderLogisticsResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:201 | 查询订单数据为空 | 请检查订单号是否正确 |
| 20000 | 系统错误 | isp.service-error:503 | 调用下游接口失败 | 稍后重试 |
| 20001 | 内部服务超时 | isp.service-timeout-error:1204 | 服务超时 | 服务超时，请稍后重试 |
| 20000 | 系统错误 | isp.service-error:505 | 内部处理失败 | 稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:501 | 查询订单数据为空 | 请检查订单号是否正确 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
