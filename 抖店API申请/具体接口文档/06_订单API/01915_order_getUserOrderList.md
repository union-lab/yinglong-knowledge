# /order/getUserOrderList

> 中文说明：按用户id查询订单简要信息  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1915>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/getUserOrderList |
| 中文名称 | 按用户id查询订单简要信息 |
| 文档目录 | 订单API |
| Article ID | 1915 |
| 文档版本 | V2.02 |
| 官方更新时间 | 2022/5/12 11:20:28 |
| 授权主体 | ["小程序","店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3000 |

## 使用说明

支持按抖音小程序open_id查询订单简要信息，仅电商小程序在C端面向用户呈现订单任务类场景使用

## 权限包

- 小程序 / 电商小程序（packageType=1）；适用应用类目：售后/其他品牌服务、线下服务/线下活动、C2B定制、创意互动、推荐导购、测试类目、商品展示、特殊交易、任务玩法、权益营销、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电
- 小程序 / 用户信息管理（packageType=1）
- 小程序 / 用户信息管理（小程序）（packageType=1）
- 开放平台 / 盲盒互动（服务商）（packageType=1）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.getUserOrderList | 调用的API接口名称 | - | - |
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
| 0 | create_time_start | CreateTimeStart | false | 1 | 1617355413 | 下单时间：开始，秒级时间戳 | - | - |
| 0 | create_time_end | CreateTimeEnd | false | 1 | 1617355413 | 下单时间：截止，秒级时间戳 | - | - |
| 0 | size | Size | true | 1 | 20 | 单页大小，限制100以内 | - | - |
| 0 | page | Page | true | 1 | 0 | 页码，0页开始 | - | - |
| 0 | open_id | UserId | true | 2 | 3b829624-67bc-5c26-93be-32d9bc7c1922 | 用户openId | - | - |
| 0 | open_id_type | BType | true | 2 | douyin | 用户openId类型，固定为 douyin 抖音 | - | - |
| 0 | order_status | OrderStatusDesc | false | 2 | under_sure | 订单状态：all-全部，under_sure-待确认，unpaid-待支付，stock_up-待发货，on_delivery-已发货，received-已完成，closed-已关闭，to_groups-待成团 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | page | Page | - | 1 | 0 | 页数，从0开始 | - | R1 |
| 0 | total | Total | - | 1 | 1000 | 总订单数 | - | R1 |
| 0 | size | Size | - | 1 | 20 | 单页大小 | - | R1 |
| 0 | shop_order_list | ShopOrderList | - | 3 | - | 订单信息 | - | R1 |
| 1 | shop_order_list.order_id | ShopOrderId | - | 2 | 4781320682406083640 | 店铺订单号 | - | R1 |
| 1 | shop_order_list.order_status | OrderStatus | - | 1 | 3 | 订单状态;1 待确认/待支付-订单创建完毕;105-已支付; 2-备货中； 101-部分发货; 3-已发货（全部发货）;4- 已取消;5 已完成（已收货）; | - | R1 |
| 1 | shop_order_list.pay_amount | PayAmount | - | 1 | 500 | 支付金额（分） | - | R1 |
| 1 | shop_order_list.create_time | CreateTime | - | 1 | 1617355413 | 下单时间 | - | R1 |
| 1 | shop_order_list.sku_order_list | SkuOrderList | - | 3 | - | 商品单信息 | - | R1 |
| 2 | shop_order_list.sku_order_list.sku_info | SkuInfo | - | 5 | - | 商品单信息 | - | R1 |
| 3 | shop_order_list.sku_order_list.sku_info.product_name | ProductName | - | 2 | 衣服 | 商品名称 | - | R1 |
| 3 | shop_order_list.sku_order_list.sku_info.sku_id | SkuId | - | 1 | 3254535 | 商品skuId | - | R1 |
| 3 | shop_order_list.sku_order_list.sku_info.product_id | ProductId | - | 1 | 3473196049974326153 | 商品ID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/getUserOrderList?app_key=your_appkey_here&method=order.getUserOrderList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/getUserOrderList?app_key=your_appkey_here&method=order.getUserOrderList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderGetUserOrderListRequest request = new OrderGetUserOrderListRequest();
OrderGetUserOrderListParam param = request.getParam();
param.setCreateTimeStart(1617355413L);
param.setCreateTimeEnd(1617355413L);
param.setSize(20L);
param.setPage(0L);
param.setOpenId("3b829624-67bc-5c26-93be-32d9bc7c1922");
param.setOpenIdType("douyin");
param.setOrderStatus("under_sure");
OrderGetUserOrderListResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderGetUserOrderListRequest();
$param = new OrderGetUserOrderListParam();
$request->setParam($param);
$param->create_time_start = 1617355413;
$param->create_time_end = 1617355413;
$param->size = 20;
$param->page = 0;
$param->open_id = "3b829624-67bc-5c26-93be-32d9bc7c1922";
$param->open_id_type = "douyin";
$param->order_status = "under_sure";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderGetUserOrderListRequest()
param = request.getParams()
param.create_time_start = 1617355413
param.create_time_end = 1617355413
param.size = 20
param.page = 0
param.open_id = "3b829624-67bc-5c26-93be-32d9bc7c1922"
param.open_id_type = "douyin"
param.order_status = "under_sure"
response = request.execute(accessToken)

```

### go

```go
request := order_getUserOrderList_request.New()
param := request.GetParams()
param.CreateTimeStart = 1617355413
param.CreateTimeEnd = 1617355413
param.Size = 20
param.Page = 0
param.OpenId = "3b829624-67bc-5c26-93be-32d9bc7c1922"
param.OpenIdType = "douyin"
param.OrderStatus = "under_sure"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderGetUserOrderListRequest();
var param = request.BuildParam();
param.CreateTimeStart = 1617355413;
param.CreateTimeEnd = 1617355413;
param.Size = 20;
param.Page = 0;
param.OpenId = "3b829624-67bc-5c26-93be-32d9bc7c1922";
param.OpenIdType = "douyin";
param.OrderStatus = "under_sure";
var response = request.Execute<OrderGetUserOrderListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20022 | 订单查询只支持查询最近90天内的数据 | 把下单开始时间设置为最近90天内 |
| 40004 | 非法的参数 | isv.parameter-invalid:20013 | 订单查询最多支持查询5万 | 缩短查询时间范围 |
| 40004 | 非法的参数 | isv.parameter-invalid:20012 | 订单查询状态条件超过限制，只支持1个元素 | 状态查询条件是list，但现在只支持传入一个元素，重新组装参数查询 |
| 40004 | 非法的参数 | isv.parameter-invalid:20008 | 单次查询订单数超过限制 | 单页最大支持100，size设置需要 u003c= 100 |
| 40004 | 非法的参数 | isv.parameter-invalid:20005 | 系统繁忙，请稍后重试 | 如遇到该报错，建议再30秒内重试3~5次，如还是报错可提交工单咨询 |
| 40004 | 非法的参数 | isv.parameter-invalid:20004 | 系统繁忙，请稍后重试 | 如遇到该报错，建议再30秒内重试3~5次，如还是报错可提交工单咨询 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
