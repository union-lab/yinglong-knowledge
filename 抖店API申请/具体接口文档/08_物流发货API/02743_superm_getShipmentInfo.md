# /superm/getShipmentInfo

> 中文说明：运力配送状态查询接口  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2743>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /superm/getShipmentInfo |
| 中文名称 | 运力配送状态查询接口 |
| 文档目录 | 物流发货API |
| Article ID | 2743 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2023/9/19 15:36:54 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

小时达运力平台运力配送状态查询接口

## 权限包

- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | superm.getShipmentInfo | 调用的API接口名称 | - | - |
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
| 0 | shop_order_id | shopOrderID | true | 1 | 4993668078886578045 | 店铺父订单号 | - | - |
| 0 | aftersale_id | afterSaleID | false | 1 | 3668078886578045 | 上门取运力对应售后单号 | - | - |
| 0 | shipment_type | shipmentType | true | 7 | 1 | 配送类型，1 表示发货单，需要传入店铺订单号 2 表示上门取件，需要传入店铺订单号和售后单编号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | shipment_info | shipmentInfo | - | 5 | - | 配送状态信息 | - | R1 |
| 1 | shipment_info.shop_order_id | shopOrderID | - | 1 | 4993668078886578045 | 店铺父订单号 | - | R1 |
| 1 | shipment_info.aftersale_id | afterSaleID | - | 1 | 3668078886578045 | 上门取运力对应售后单号 | - | R1 |
| 1 | shipment_info.track_no | trackNO | - | 2 | YD3668078886578045 | 骑手配送运单号 | - | R1 |
| 1 | shipment_info.shop_id | shopID | - | 1 | 886578045 | 抖店店铺ID | - | R1 |
| 1 | shipment_info.shipment_status | shipmentStatus | - | 7 | 1 | 配送状态：    CALLING   = 1 // 骑手呼叫中     RECEIVED  = 2 //骑手已接单     ARRIVED   = 3 //骑手已到取货点     PICKUPPED = 4 //骑手已取货     DELIVERING= 5 //骑手配送中     REJECTED  = 6 //收货人已拒收     RETURNING = 7 //返回中     RETURNED  = 8 //返回完成     CANCELED = 9 //取消配送 | - | R1 |
| 1 | shipment_info.shipment_error | shipmentError | - | 7 | 0 | 配送异常：    MERCHANT_DELIVER_SLOW   = 1001  // 商家出货慢,     MERCHANT_DELIVER_ERROR  = 1002  // 商家出错货,     MERCHANT_STOCKOUT       = 1003  // 商家缺货,     GOODS_DAMAGED           = 2001  // 破损,     GOODS_LOST              = 2002  // 丢失,     RIDER_WRONG_GOODS       = 2003  // 骑手取错货,     RIDER_UNDELIVERABLE     = 2004  // 骑手无法送达     WRONG_RECEIPT_CODE      = 3001  // 小票码错误,     MERCHANT_WRONG_ADDRESS  = 3002  // 商家地址错误,     CONSUMER_WRONG_ADDRESS  = 3003  // 消费者地址错误,     WEIGHT_DEVIATION_TOO_LARGE = 3004  //  订单重量偏差过大,     CONSUMER_CALL_NO_ANSWER = 4002  // 消费者电话未接通,     CONSUMER_STAY_OUT       = 4003  // 消费者不在家,     CONSUMER_MODIFY_ADDRESS = 4004  // 消费者线下联系修改地址,     OTHER                   = 5001  // 其他 | - | R1 |
| 1 | shipment_info.rider_name | riderName | - | 2 | 小张 | 配送骑手名称 | - | R1 |
| 1 | shipment_info.rider_phone | riderPhone | - | 2 | 18601501355 | 配送骑手联系方式 | - | R1 |
| 1 | shipment_info.rider_longitude | riderLongitude | - | 2 | 120.2 | 配送骑手经度；地图坐标GCJ02 | - | R1 |
| 1 | shipment_info.rider_latitude | riderLatitude | - | 2 | 30.3 | 配送骑手维度；地图坐标GCJ02 | - | R1 |
| 1 | shipment_info.occurred_time | occurredTime | - | 2 | 2022-10-26 17:05:16 | 当前状态的变更时间；时间格式：yyyy-MM-dd HH:mm:ss | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shop/status?app_key=your_appkey_here&method=shop.status&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shop/status?app_key=your_appkey_here&method=shop.status&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SupermGetShipmentInfoRequest request = new SupermGetShipmentInfoRequest();
SupermGetShipmentInfoParam param = request.getParam();
param.setShopOrderId(4993668078886578045L);
param.setAftersaleId(3668078886578045L);
param.setShipmentType(1);
SupermGetShipmentInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new SupermGetShipmentInfoRequest();
$param = new SupermGetShipmentInfoParam();
$request->setParam($param);
$param->shop_order_id = 4993668078886578045;
$param->aftersale_id = 3668078886578045;
$param->shipment_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = SupermGetShipmentInfoRequest()
param = request.getParams()
param.shop_order_id = 4993668078886578045
param.aftersale_id = 3668078886578045
param.shipment_type = 1
response = request.execute(accessToken)

```

### go

```go
request := superm_getShipmentInfo_request.New()
param := request.GetParams()
param.ShopOrderId = 4993668078886578045
param.AftersaleId = 3668078886578045
param.ShipmentType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SupermGetShipmentInfoRequest();
var param = request.BuildParam();
param.ShopOrderId = 4993668078886578045;
param.AftersaleId = 3668078886578045;
param.ShipmentType = 1;
var response = request.Execute<SupermGetShipmentInfoResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:40100 | 非法的请求参数 | 请确认请求参数是否正确 |
| 50002 | 业务处理失败 | isv.business-failed:20111 | 查询不到对应的物流订单 | 请确认订单状态是否正常 |
| 20000 | 系统错误 | isp.service-error:20100 | 系统错误 | 请参考错误信息解决 |
| 50002 | 业务处理失败 | isv.business-failed:20115 | 物流轨迹展示异常 | 请参考物流轨迹展示异常信息 |
| 20001 | 内部服务超时 | isp.service-timeout-error:90000 | 未知服务异常 | 请参考错误信息解决 |
| 50002 | 业务处理失败 | isv.business-failed:50312 | 物流履约单当前状态无法取消运力信息 | 请确认运单状态 |
| 20000 | 系统错误 | isp.service-error:20201 | 系统异常：系统异常 | 请检查代码逻辑 |
| 50002 | 业务处理失败 | isv.business-failed:100009 | 请输入正确的订单号 | 请输入正确的订单号 |
| 50002 | 业务处理失败 | isv.business-failed:70009 | 订单不是该店铺下的订单，无权查询 | 订单不是该店铺下的订单，无权查询 |
| 50002 | 业务处理失败 | isv.business-failed:20113 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
