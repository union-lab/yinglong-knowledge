# /order/getCrossBorderFulfillInfo

> 中文说明：获取跨境承运单信息  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1837>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/getCrossBorderFulfillInfo |
| 中文名称 | 获取跨境承运单信息 |
| 文档目录 | 订单API |
| Article ID | 1837 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2021/6/9 13:18:10 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

获取跨境承运单信息
获取跨境承运单信息

## 权限包

- 跨境 / 跨境履约清关服务包（仓服务商）（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储物流-跨境4PL服务商
- 跨境 / 跨境履约清关服务包（商家）（packageType=1）；适用应用类目：商家后台系统

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.getCrossBorderFulfillInfo | 调用的API接口名称 | - | - |
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
| 0 | shop_order_id | ShopOrderId | true | 2 | 4795451507070928840 | 主订单号(不带A) | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | shop_order_id | ShopOrderId | - | 2 | 4790307922954771917 | 主订单号 | - | R1 |
| 0 | company | CompanyName | - | 2 | 顺丰 | 物流公司名称 | - | R1 |
| 0 | company_code | CompanyCode | - | 2 | shunfeng | 物流公司Code | - | R1 |
| 0 | sku_order_ids | SkuOrderIds | - | 3 | ["4790307922954771917"] | 商品单id列表 | - | - |
| 0 | logistics_code | LogisticsCode | - | 2 | SF12345 | 物流单号 | - | R1 |
| 0 | way_bill_url | WayBillUrl | - | 2 | https://sf6-ttcdn-tos.pstatp.com/obj/temai/xxx | 电子面单链接 | - | R1 |
| 0 | mark | Mark | - | 2 | 1 | 大头笔 | - | R1 |
| 0 | product_num | ProductNum | - | 1 | 1 | 商品件数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/getCrossBorderFulfillInfo?app_key=your_appkey_here&method=order.getCrossBorderFulfillInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/getCrossBorderFulfillInfo?app_key=your_appkey_here&method=order.getCrossBorderFulfillInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderGetCrossBorderFulfillInfoRequest request = new OrderGetCrossBorderFulfillInfoRequest();
OrderGetCrossBorderFulfillInfoParam param = request.getParam();
param.setShopOrderId("4795451507070928840");
OrderGetCrossBorderFulfillInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderGetCrossBorderFulfillInfoRequest();
$param = new OrderGetCrossBorderFulfillInfoParam();
$request->setParam($param);
$param->shop_order_id = "4795451507070928840";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderGetCrossBorderFulfillInfoRequest()
param = request.getParams()
param.shop_order_id = "4795451507070928840"
response = request.execute(accessToken)

```

### go

```go
request := order_getCrossBorderFulfillInfo_request.New()
param := request.GetParams()
param.ShopOrderId = "4795451507070928840"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderGetCrossBorderFulfillInfoRequest();
var param = request.BuildParam();
param.ShopOrderId = "4795451507070928840";
var response = request.Execute<OrderGetCrossBorderFulfillInfoResponse>(accessToken);

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
