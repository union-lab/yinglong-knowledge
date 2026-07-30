# /instantShopping/getDeliveryListByOrderId

> 中文说明：商家查询抖音配送信息。  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/4776>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /instantShopping/getDeliveryListByOrderId |
| 中文名称 | 商家查询抖音配送信息。 |
| 文档目录 | 物流发货API |
| Article ID | 4776 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/9/20 17:55:26 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3000 |

## 使用说明

商家查询抖音配送信息。

## 权限包

- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 到家开放 / 平台配送（外卖）（packageType=1）；适用应用类目：到家外卖商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | instantShopping.getDeliveryListByOrderId | 调用的API接口名称 | - | - |
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
| 0 | shop_order_id | ShopOrderId | true | 2 | 6917539978356459031 | 抖音电商shop order单id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | shop_order_id | ShopOrderId | - | 2 | 6917539978356459031 | 抖音订单id | - | - |
| 0 | status | Status | - | 1 | 102 | 运力状态，枚举：<br>101:待骑手接单<br>102:骑手已接单<br>103:骑手已到店<br>104:骑手已取货<br>200:已送达<br>300:已取消 | - | - |
| 0 | predict_delivery_time_start | PredictDeliveryTimeStart | - | 1 | 1693478310 | 抖音配送的该单预计送达开始时间，为时间戳格式，单位为秒 | - | - |
| 0 | predict_delivery_time_end | PredictDeliveryTimeEnd | - | 1 | 1693478310 | 抖音配送的该单预计送达结束时间，为时间戳格式，单位为秒 | - | - |
| 0 | rider_name | RiderName | - | 2 | 张三 | 骑手名称 | - | - |
| 0 | rider_phone | RiderPhone | - | 2 | 18263494857 | 骑手手机号 | - | - |
| 0 | rider_lng | RiderLng | - | 2 | 119.21 | 骑手经度，高德坐标系 | - | - |
| 0 | rider_lat | RiderLat | - | 2 | 39.23 | 骑手纬度，高德坐标系 | - | - |
| 0 | cancel_code | CancelCode | - | 1 | 102 | 取消code | - | - |
| 0 | cancel_reason | CancelReason | - | 2 | 取消 | 取消原因 | - | - |
| 0 | delivery_distance | DelivertDistance | - | 1 | 38468 | 订单配送距离，单位为米 | - | - |
| 0 | delivery_fee | DeliveryFee | - | 1 | 38457 | 订单配送价格，单位为分 | - | - |
| 0 | pickup_goods_code | PickopGoodsCode | - | 2 | 1231 | 取件码 | - | - |
| 0 | delivery_goods_code | DeliveryFoodsCode | - | 2 | 2386 | 收件码 | - | - |
| 0 | delivery_status_history | DeliveryStatusHistory | - | 3 | - | 配送状态历史列表 | - | R1 |
| 1 | delivery_status_history.rider_lat | RiderLat | - | 2 | 27392 | 骑手纬度 | - | - |
| 1 | delivery_status_history.rider_lng | RiderLng | - | 2 | 3728 | 骑手经度 | - | - |
| 1 | delivery_status_history.rider_name | RiderName | - | 2 | 张三 | 骑手姓名 | - | - |
| 1 | delivery_status_history.operate_time | OperateTime | - | 1 | 1827356 | 状态发送时间，时间戳s | - | - |
| 1 | delivery_status_history.status | Status | - | 1 | 101 | 运力状态，枚举：<br>101:待骑手接单<br>102:骑手已接单<br>103:骑手已到店<br>104:骑手已取货<br>200:已送达<br>300:已取消 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.comcrossborder/msg/push?app_key=your_appkey_here&method=crossborder.msg.push&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.comcrossborder/msg/push?app_key=your_appkey_here&method=crossborder.msg.push&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
InstantShoppingGetDeliveryListByOrderIdRequest request = new InstantShoppingGetDeliveryListByOrderIdRequest();
InstantShoppingGetDeliveryListByOrderIdParam param = request.getParam();
param.setShopOrderId("6917539978356459031");
InstantShoppingGetDeliveryListByOrderIdResponse response = request.execute(accessToken);

```

### php

```php
$request = new InstantShoppingGetDeliveryListByOrderIdRequest();
$param = new InstantShoppingGetDeliveryListByOrderIdParam();
$request->setParam($param);
$param->shop_order_id = "6917539978356459031";
$response = $request->execute(accessToken);

```

### python

```python
request = InstantShoppingGetDeliveryListByOrderIdRequest()
param = request.getParams()
param.shop_order_id = "6917539978356459031"
response = request.execute(accessToken)

```

### go

```go
request := instantShopping_getDeliveryListByOrderId_request.New()
param := request.GetParams()
param.ShopOrderId = "6917539978356459031"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new InstantShoppingGetDeliveryListByOrderIdRequest();
var param = request.BuildParam();
param.ShopOrderId = "6917539978356459031";
var response = request.Execute<InstantShoppingGetDeliveryListByOrderIdResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:50312 | 当前状态获取不到运力信息 | 当前状态获取不到运力信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:100009 | 请输入正确的订单号 | 请输入正确的订单号 |
| 50002 | 业务处理失败 | isv.business-failed:20111 | 查询不到对应的运力订单 | 查询不到对应的运力订单 |
| 40004 | 非法的参数 | isv.parameter-invalid:40100 | 请求确认请求参数是否正确 | 请求确认请求参数是否正确 |
| 20000 | 系统错误 | isp.service-error:20100 | 系统错误 | 请求参考错误信息解决 |
| 50002 | 业务处理失败 | isv.business-failed:20115 | 物流轨迹展示异常 | 请参考物流轨迹展示异常信息 |
| 20001 | 内部服务超时 | isp.service-timeout-error:90000 | 未知服务异常 | 请参考错误信息解决 |
| 50002 | 业务处理失败 | isv.business-failed:702 | 702:新建数据失败，请稍后重试 | 702:新建数据失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10005 | 10005:数据查询异常，请稍后重试 | 10005:数据查询异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
