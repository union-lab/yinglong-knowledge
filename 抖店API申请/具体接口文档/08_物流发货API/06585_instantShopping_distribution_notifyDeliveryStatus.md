# /instantShopping/distribution/notifyDeliveryStatus

> 中文说明：抖音侧订单状态变更回调  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/6585>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /instantShopping/distribution/notifyDeliveryStatus |
| 中文名称 | 抖音侧订单状态变更回调 |
| 文档目录 | 物流发货API |
| Article ID | 6585 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/6/14 17:40:33 |
| 授权主体 | [] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

抖音侧订单状态变更回调

## 权限包

- 即配平台 / 平台配送发单（packageType=1）；适用应用类目：即配配送商-平台物流

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | instantShopping.distribution/notifyDeliveryStatus | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | false | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | delivery_id | DeliveryId | true | 2 | "a_7372453214286987305" | 抖音运单id(以此id为主) | - | - |
| 0 | distributor_delivery_id | DistributorDeliveryId | true | 2 | "DH2024052459066015" | 配送商运单id | - | - |
| 0 | distributor_code | DistributorCode | true | 2 | "MOCK_DELIVERY" | 抖音为每个配送商分配的标识信息 | - | - |
| 0 | status | Status | true | 99 | 102 | 运单状态，见附录F02 | - | - |
| 0 | update_time | UpdateTime | true | 99 | 1716537685 | 状态变更时间，格式为秒时间戳 | - | - |
| 0 | rider_name | RiderName | false | 2 | "朱涛" | 骑手姓名 | - | - |
| 0 | rider_phone | RiderPhone | false | 2 | "13684541145" | 骑手电话 | - | - |
| 0 | rider_lat | RiderLat | false | 9 | 39.973390 | 骑手当前所在纬度（火星坐标系GCJ02） | - | - |
| 0 | rider_lng | RiderLng | false | 9 | 116.347004 | 骑手当前所在经度（火星坐标系GCJ02） | - | - |
| 0 | cancel_code | CancelCode | false | 99 | 0 | 取消原因code，取消态必填 | - | - |
| 0 | cancel_reason | CancelReason | false | 2 | "" | 取消原因描述，取消态必填 | - | - |
| 0 | notify_time | NotifyTime | true | 99 | 1716537685 | 通知时间 | - | - |
| 0 | distributor_rider_id | DistributorRiderId | false | 2 | "4575457" | 配送商骑手id | - | - |
| 0 | cancel_price | CancelPrice | false | 99 | 0 | 取消费用，单位：分，取消运单时必填 | - | - |
| 0 | delivery_reverse | DeliveryReverse | false | 5 | - | 返件相关信息 | - | - |
| 1 | delivery_reverse.reverse_id | ReverseId | false | 99 | 7257267285 | 返件单ID | - | - |
| 1 | delivery_reverse.status | Status | false | 99 | 900 | 返件状态枚举：<br>- 返件初始化：100<br>- 返件中：200<br>- 返件完成：300<br>- 返件取消：400<br>- 无需返件：900 | - | - |
| 0 | delivered_images | DeliveredImages | false | 2 | "https://media-order-jd.imdada.cn/order-finish/d640f142063a40ccb919439fc413d221.jpeg,https://media-order-jd.imdada.cn/order-finish/031652144dcf4ff6be0e15f3ab5078ee.jpeg" | 妥投举证图片；（图片url，如果是多个，通过逗号分隔） | - | - |
| 0 | delivered_desc | DeliveredDesc | false | 2 | "放在家门口" | 妥投描述 | - | - |
| 0 | rider_im_open_status | RiderIMOpenStatus | false | 99 | 1 | 骑手IM功能开启标记，0：未知；1：开启；2：不开启 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | delivery_id | DeliveryId | - | 2 | "DHT46816515646" | 抖音运单id | - | - |
| 0 | distributor_delivery_id | DistributorDeliveryId | - | 2 | "ecom_732542145416" | 配送商运单id | - | - |
| 0 | notify_time | NotifyTime | - | 99 | 1717397898 | 通知时间 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/getCatePropertyV2?app_key=your_appkey_here&method=product.getCatePropertyV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/getCatePropertyV2?app_key=your_appkey_here&method=product.getCatePropertyV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
InstantShoppingDistributionNotifyDeliveryStatusRequest request = new InstantShoppingDistributionNotifyDeliveryStatusRequest();
InstantShoppingDistributionNotifyDeliveryStatusParam param = request.getParam();
param.setDeliveryId("\"a_7372453214286987305\"");
param.setDistributorDeliveryId("\"DH2024052459066015\"");
param.setDistributorCode("\"MOCK_DELIVERY\"");
param.setStatus(102L);
param.setUpdateTime(1716537685L);
param.setRiderName("\"朱涛\"");
param.setRiderPhone("\"13684541145\"");
param.setRiderLat(39.973390);
param.setRiderLng(116.347004);
param.setCancelCode(0L);
param.setCancelReason("\"\"");
param.setNotifyTime(1716537685L);
param.setDistributorRiderId("\"4575457\"");
param.setCancelPrice(0L);
param.setDeliveredImages("\"https://media-order-jd.imdada.cn/order-finish/d640f142063a40ccb919439fc413d221.jpeg,https://media-order-jd.imdada.cn/order-finish/031652144dcf4ff6be0e15f3ab5078ee.jpeg\"");
param.setDeliveredDesc("\"放在家门口\"");
param.setRiderImOpenStatus(1L);
InstantShoppingDistributionNotifyDeliveryStatusResponse response = request.execute(accessToken);

```

### php

```php
$request = new InstantShoppingDistributionNotifyDeliveryStatusRequest();
$param = new InstantShoppingDistributionNotifyDeliveryStatusParam();
$request->setParam($param);
$param->delivery_id = "\"a_7372453214286987305\"";
$param->distributor_delivery_id = "\"DH2024052459066015\"";
$param->distributor_code = "\"MOCK_DELIVERY\"";
$param->status = 102;
$param->update_time = 1716537685;
$param->rider_name = "\"朱涛\"";
$param->rider_phone = "\"13684541145\"";
$param->rider_lat = 39.973390;
$param->rider_lng = 116.347004;
$param->cancel_code = 0;
$param->cancel_reason = "\"\"";
$param->notify_time = 1716537685;
$param->distributor_rider_id = "\"4575457\"";
$param->cancel_price = 0;
$param->delivered_images = "\"https://media-order-jd.imdada.cn/order-finish/d640f142063a40ccb919439fc413d221.jpeg,https://media-order-jd.imdada.cn/order-finish/031652144dcf4ff6be0e15f3ab5078ee.jpeg\"";
$param->delivered_desc = "\"放在家门口\"";
$param->rider_im_open_status = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = InstantShoppingDistributionNotifyDeliveryStatusRequest()
param = request.getParams()
param.delivery_id = "\"a_7372453214286987305\""
param.distributor_delivery_id = "\"DH2024052459066015\""
param.distributor_code = "\"MOCK_DELIVERY\""
param.status = 102
param.update_time = 1716537685
param.rider_name = "\"朱涛\""
param.rider_phone = "\"13684541145\""
param.rider_lat = 39.973390
param.rider_lng = 116.347004
param.cancel_code = 0
param.cancel_reason = "\"\""
param.notify_time = 1716537685
param.distributor_rider_id = "\"4575457\""
param.cancel_price = 0
param.delivered_images = "\"https://media-order-jd.imdada.cn/order-finish/d640f142063a40ccb919439fc413d221.jpeg,https://media-order-jd.imdada.cn/order-finish/031652144dcf4ff6be0e15f3ab5078ee.jpeg\""
param.delivered_desc = "\"放在家门口\""
param.rider_im_open_status = 1
response = request.execute(accessToken)

```

### go

```go
request := instantShopping_distribution_notifyDeliveryStatus_request.New()
param := request.GetParams()
param.DeliveryId = "\"a_7372453214286987305\""
param.DistributorDeliveryId = "\"DH2024052459066015\""
param.DistributorCode = "\"MOCK_DELIVERY\""
param.Status = 102
param.UpdateTime = 1716537685
param.RiderName = "\"朱涛\""
param.RiderPhone = "\"13684541145\""
param.RiderLat = 39.973390
param.RiderLng = 116.347004
param.CancelCode = 0
param.CancelReason = "\"\""
param.NotifyTime = 1716537685
param.DistributorRiderId = "\"4575457\""
param.CancelPrice = 0
param.DeliveredImages = "\"https://media-order-jd.imdada.cn/order-finish/d640f142063a40ccb919439fc413d221.jpeg,https://media-order-jd.imdada.cn/order-finish/031652144dcf4ff6be0e15f3ab5078ee.jpeg\""
param.DeliveredDesc = "\"放在家门口\""
param.RiderImOpenStatus = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new InstantShoppingDistributionNotifyDeliveryStatusRequest();
var param = request.BuildParam();
param.DeliveryId = "\"a_7372453214286987305\"";
param.DistributorDeliveryId = "\"DH2024052459066015\"";
param.DistributorCode = "\"MOCK_DELIVERY\"";
param.Status = 102;
param.UpdateTime = 1716537685;
param.RiderName = "\"朱涛\"";
param.RiderPhone = "\"13684541145\"";
param.RiderLat = 39.973390;
param.RiderLng = 116.347004;
param.CancelCode = 0;
param.CancelReason = "\"\"";
param.NotifyTime = 1716537685;
param.DistributorRiderId = "\"4575457\"";
param.CancelPrice = 0;
param.DeliveredImages = "\"https://media-order-jd.imdada.cn/order-finish/d640f142063a40ccb919439fc413d221.jpeg,https://media-order-jd.imdada.cn/order-finish/031652144dcf4ff6be0e15f3ab5078ee.jpeg\"";
param.DeliveredDesc = "\"放在家门口\"";
param.RiderImOpenStatus = 1;
var response = request.Execute<InstantShoppingDistributionNotifyDeliveryStatusResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2075000311 | 2075000311:取货码同步失败 | 2075000311:取货码同步失败 |
| 50002 | 业务处理失败 | isv.business-failed:1075020309 | 1075020309:UpdateDelivery lock err | 1075020309:UpdateDelivery lock err |
| 50002 | 业务处理失败 | isv.business-failed:999001001 | 999001001:RPCError{PSM:[life.distribution.call_delivery] Method:[NotifyCallStatus] ErrType:[RPC_STATUS_CODE_NOT_ZERO] OriginalErr:[<nil>] BizStatusCode:[1000021001] BizStatusMessage:[呼单锁定失败]} | 999001001:RPCError{PSM:[life.distribution.call_delivery] Method:[NotifyCallStatus] ErrType:[RPC_STATUS_CODE_NOT_ZERO] OriginalErr:[<nil>] BizStatusCode:[1000021001] BizStatusMessage:[呼单锁定失败]} |
| 50002 | 业务处理失败 | isv.business-failed:1075039998 | 1075039998:服务异常，请稍后再试# | 1075039998:服务异常，请稍后再试# |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
