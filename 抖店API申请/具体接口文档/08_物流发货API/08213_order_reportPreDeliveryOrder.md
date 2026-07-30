# /order/reportPreDeliveryOrder

> 中文说明：上报预发货订单  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/8213>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/reportPreDeliveryOrder |
| 中文名称 | 上报预发货订单 |
| 文档目录 | 物流发货API |
| Article ID | 8213 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/4/22 15:21:15 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

上报预发货订单

## 权限包

- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.reportPreDeliveryOrder | 调用的API接口名称 | - | - |
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
| 0 | shop_order_id | shopOrderID | false | 2 | 112233 | 订单ID | - | - |
| 0 | extra | extra | false | 8 | {} | 扩展信息 | - | - |
| 0 | daily_audit_times | dailyAuditTimes | false | 99 | 3 | 商家每日审单次数 | - | - |
| 0 | ware_mode | wareMode | false | 2 | cloud | 仓模式, 枚举值：self 自有仓 cloud 云仓 hybrid 混合仓 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | success | - | 4 | false | 是否上报成功 | - | - |
| 0 | reason | reason | - | 2 | 订单中包含预售商品 | 原因说明 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/reportPreDeliveryOrder?app_key=your_appkey_here&method=order.reportPreDeliveryOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/reportPreDeliveryOrder?app_key=your_appkey_here&method=order.reportPreDeliveryOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderReportPreDeliveryOrderRequest request = new OrderReportPreDeliveryOrderRequest();
OrderReportPreDeliveryOrderParam param = request.getParam();
param.setShopOrderId("112233");
param.setExtra({});
param.setDailyAuditTimes(3);
param.setWareMode("cloud");
OrderReportPreDeliveryOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderReportPreDeliveryOrderRequest();
$param = new OrderReportPreDeliveryOrderParam();
$request->setParam($param);
$param->shop_order_id = "112233";
$param->extra = {};
$param->daily_audit_times = 3;
$param->ware_mode = "cloud";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderReportPreDeliveryOrderRequest()
param = request.getParams()
param.shop_order_id = "112233"
param.extra = {}
param.daily_audit_times = 3
param.ware_mode = "cloud"
response = request.execute(accessToken)

```

### go

```go
request := order_reportPreDeliveryOrder_request.New()
param := request.GetParams()
param.ShopOrderId = "112233"
param.Extra = {}
param.DailyAuditTimes = 3
param.WareMode = "cloud"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderReportPreDeliveryOrderRequest();
var param = request.BuildParam();
param.ShopOrderId = "112233";
param.Extra = {};
param.DailyAuditTimes = 3;
param.WareMode = "cloud";
var response = request.Execute<OrderReportPreDeliveryOrderResponse>(accessToken);

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
