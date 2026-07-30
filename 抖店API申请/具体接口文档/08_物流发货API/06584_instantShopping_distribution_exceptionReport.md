# /instantShopping/distribution/exceptionReport

> 中文说明：骑手上报异常  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/6584>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /instantShopping/distribution/exceptionReport |
| 中文名称 | 骑手上报异常 |
| 文档目录 | 物流发货API |
| Article ID | 6584 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/6/14 17:40:14 |
| 授权主体 | [] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

骑手配送过程中上报异常

## 权限包

- 即配平台 / 平台配送发单（packageType=1）；适用应用类目：即配配送商-平台物流

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | instantShopping.distribution/exceptionReport | 调用的API接口名称 | - | - |
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
| 0 | rider_name | RiderName | true | 2 | "朱涛" | 骑手姓名 | - | - |
| 0 | rider_phone | RiderPhone | true | 2 | "13168887777" | 骑手电话 | - | - |
| 0 | rider_lat | RiderLat | true | 9 | 39.980042 | 骑手位置纬度 （火星坐标系GCJ02） | - | - |
| 0 | rider_lng | RiderLng | true | 9 | 116.374061 | 骑手位置经度 （火星坐标系GCJ02） | - | - |
| 0 | exception_time | ExceptionTime | true | 99 | 1716538402 | 骑手上报运单异常的时间，时间戳(秒) | - | - |
| 0 | audit_time | AuditTime | false | 99 | 1716538420 | 异常上报审核通过时间，时间戳(秒) | - | - |
| 0 | exception_code | ExceptionCode | true | 99 | 30000 | 骑手选择的异常场景code，详见：F07:  配送商异常CODE | - | - |
| 0 | exception_name | ExceptionName | true | 2 | "车辆故障/没电/事故" | 骑手选择的异常场景 | - | - |
| 0 | exception_descr | ExceptionDescr | false | 2 | "电瓶车故障" | 骑手填写的异常描述 | - | - |
| 0 | exception_images | ExceptionImages | false | 2 | "https://loc-1258916733.cos.ap-shanghai.myqcloud.com/orderpic/6bc5fb1d13f43c565245a2c3d7e87882.jpeg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDBJfrpaDPUWLxOb7qdCYswpVxI2d08FB9%26q-sign-time%3D1717376767%3B1719968827%26q-key-time%3D1717376767%3B1719968827%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D4eb4639571763578fb52aacc118099d515b3cf77" | 骑手上传的图片url-list，特定异常场景下，必传(逗号分割的字符串，list先传进来时骑手第一张发布的图片) | - | - |
| 0 | expect_time | ExpectTime | false | 99 | 1716539958 | 新的预计送达时间，时间戳(秒) | - | - |
| 0 | notify_time | NotifyTime | true | 99 | 1716538423 | 系统通知时间，时间戳(秒) | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | delivery_id | DeliveryId | - | 2 | "a_7372453214286987305" | 抖音运单id | - | - |
| 0 | distributor_delivery_id | DistributorDeliveryId | - | 2 | "DH2024052459066015" | 配送商运单id | - | - |
| 0 | notify_time | NotifyTime | - | 99 | 1716538423 | 通知时间 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/instantShopping/distribution/exceptionReport?app_key=your_appkey_here&method=instantShopping.distribution.exceptionReport&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/instantShopping/distribution/exceptionReport?app_key=your_appkey_here&method=instantShopping.distribution.exceptionReport&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
InstantShoppingDistributionExceptionReportRequest request = new InstantShoppingDistributionExceptionReportRequest();
InstantShoppingDistributionExceptionReportParam param = request.getParam();
param.setDeliveryId("\"a_7372453214286987305\"");
param.setDistributorDeliveryId("\"DH2024052459066015\"");
param.setDistributorCode("\"MOCK_DELIVERY\"");
param.setStatus(102L);
param.setRiderName("\"朱涛\"");
param.setRiderPhone("\"13168887777\"");
param.setRiderLat(39.980042);
param.setRiderLng(116.374061);
param.setExceptionTime(1716538402L);
param.setAuditTime(1716538420L);
param.setExceptionCode(30000L);
param.setExceptionName("\"车辆故障/没电/事故\"");
param.setExceptionDescr("\"电瓶车故障\"");
param.setExceptionImages("\"https://loc-1258916733.cos.ap-shanghai.myqcloud.com/orderpic/6bc5fb1d13f43c565245a2c3d7e87882.jpeg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDBJfrpaDPUWLxOb7qdCYswpVxI2d08FB9%26q-sign-time%3D1717376767%3B1719968827%26q-key-time%3D1717376767%3B1719968827%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D4eb4639571763578fb52aacc118099d515b3cf77\"");
param.setExpectTime(1716539958L);
param.setNotifyTime(1716538423L);
InstantShoppingDistributionExceptionReportResponse response = request.execute(accessToken);

```

### php

```php
$request = new InstantShoppingDistributionExceptionReportRequest();
$param = new InstantShoppingDistributionExceptionReportParam();
$request->setParam($param);
$param->delivery_id = "\"a_7372453214286987305\"";
$param->distributor_delivery_id = "\"DH2024052459066015\"";
$param->distributor_code = "\"MOCK_DELIVERY\"";
$param->status = 102;
$param->rider_name = "\"朱涛\"";
$param->rider_phone = "\"13168887777\"";
$param->rider_lat = 39.980042;
$param->rider_lng = 116.374061;
$param->exception_time = 1716538402;
$param->audit_time = 1716538420;
$param->exception_code = 30000;
$param->exception_name = "\"车辆故障/没电/事故\"";
$param->exception_descr = "\"电瓶车故障\"";
$param->exception_images = "\"https://loc-1258916733.cos.ap-shanghai.myqcloud.com/orderpic/6bc5fb1d13f43c565245a2c3d7e87882.jpeg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDBJfrpaDPUWLxOb7qdCYswpVxI2d08FB9%26q-sign-time%3D1717376767%3B1719968827%26q-key-time%3D1717376767%3B1719968827%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D4eb4639571763578fb52aacc118099d515b3cf77\"";
$param->expect_time = 1716539958;
$param->notify_time = 1716538423;
$response = $request->execute(accessToken);

```

### python

```python
request = InstantShoppingDistributionExceptionReportRequest()
param = request.getParams()
param.delivery_id = "\"a_7372453214286987305\""
param.distributor_delivery_id = "\"DH2024052459066015\""
param.distributor_code = "\"MOCK_DELIVERY\""
param.status = 102
param.rider_name = "\"朱涛\""
param.rider_phone = "\"13168887777\""
param.rider_lat = 39.980042
param.rider_lng = 116.374061
param.exception_time = 1716538402
param.audit_time = 1716538420
param.exception_code = 30000
param.exception_name = "\"车辆故障/没电/事故\""
param.exception_descr = "\"电瓶车故障\""
param.exception_images = "\"https://loc-1258916733.cos.ap-shanghai.myqcloud.com/orderpic/6bc5fb1d13f43c565245a2c3d7e87882.jpeg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDBJfrpaDPUWLxOb7qdCYswpVxI2d08FB9%26q-sign-time%3D1717376767%3B1719968827%26q-key-time%3D1717376767%3B1719968827%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D4eb4639571763578fb52aacc118099d515b3cf77\""
param.expect_time = 1716539958
param.notify_time = 1716538423
response = request.execute(accessToken)

```

### go

```go
request := instantShopping_distribution_exceptionReport_request.New()
param := request.GetParams()
param.DeliveryId = "\"a_7372453214286987305\""
param.DistributorDeliveryId = "\"DH2024052459066015\""
param.DistributorCode = "\"MOCK_DELIVERY\""
param.Status = 102
param.RiderName = "\"朱涛\""
param.RiderPhone = "\"13168887777\""
param.RiderLat = 39.980042
param.RiderLng = 116.374061
param.ExceptionTime = 1716538402
param.AuditTime = 1716538420
param.ExceptionCode = 30000
param.ExceptionName = "\"车辆故障/没电/事故\""
param.ExceptionDescr = "\"电瓶车故障\""
param.ExceptionImages = "\"https://loc-1258916733.cos.ap-shanghai.myqcloud.com/orderpic/6bc5fb1d13f43c565245a2c3d7e87882.jpeg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDBJfrpaDPUWLxOb7qdCYswpVxI2d08FB9%26q-sign-time%3D1717376767%3B1719968827%26q-key-time%3D1717376767%3B1719968827%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D4eb4639571763578fb52aacc118099d515b3cf77\""
param.ExpectTime = 1716539958
param.NotifyTime = 1716538423
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new InstantShoppingDistributionExceptionReportRequest();
var param = request.BuildParam();
param.DeliveryId = "\"a_7372453214286987305\"";
param.DistributorDeliveryId = "\"DH2024052459066015\"";
param.DistributorCode = "\"MOCK_DELIVERY\"";
param.Status = 102;
param.RiderName = "\"朱涛\"";
param.RiderPhone = "\"13168887777\"";
param.RiderLat = 39.980042;
param.RiderLng = 116.374061;
param.ExceptionTime = 1716538402;
param.AuditTime = 1716538420;
param.ExceptionCode = 30000;
param.ExceptionName = "\"车辆故障/没电/事故\"";
param.ExceptionDescr = "\"电瓶车故障\"";
param.ExceptionImages = "\"https://loc-1258916733.cos.ap-shanghai.myqcloud.com/orderpic/6bc5fb1d13f43c565245a2c3d7e87882.jpeg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDBJfrpaDPUWLxOb7qdCYswpVxI2d08FB9%26q-sign-time%3D1717376767%3B1719968827%26q-key-time%3D1717376767%3B1719968827%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D4eb4639571763578fb52aacc118099d515b3cf77\"";
param.ExpectTime = 1716539958;
param.NotifyTime = 1716538423;
var response = request.Execute<InstantShoppingDistributionExceptionReportResponse>(accessToken);

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
