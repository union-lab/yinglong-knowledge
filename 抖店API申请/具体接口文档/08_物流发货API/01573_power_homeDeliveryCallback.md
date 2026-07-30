# /power/homeDeliveryCallback

> 中文说明：送货上门履约结果推送（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1573>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/homeDeliveryCallback |
| 中文名称 | 送货上门履约结果推送（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1573 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2022/11/8 15:28:15 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

略

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.homeDeliveryCallback | 调用的API接口名称 | - | - |
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
| 0 | resource_code | resourceCode | false | 2 | 0 | - | - | - |
| 0 | waybill_no | waybillNo | false | 2 | 0 | - | - | - |
| 0 | number_calls | numberCalls | false | 2 | 0 | - | - | - |
| 0 | is_connected | isConnected | false | 2 | 0 | - | - | - |
| 0 | connect_result | connectResult | false | 2 | 0 | - | - | - |
| 0 | time_ring_list | timeRingList | false | 3 | - | - | - | - |
| 1 | time_ring_list.is_connected | isConnected | false | 2 | 0 | - | - | - |
| 1 | time_ring_list.time_ring | timeRing | false | 2 | 0 | - | - | - |
| 0 | is_home_delivery | isHomeDelivery | false | 2 | 0 | - | - | - |
| 0 | home_delivery_remark | homeDeliveryRemark | false | 2 | 0 | - | - | - |
| 0 | photograph | photograph | false | 2 | 1 | 签收图片 | - | - |
| 0 | biz_type | bizType | false | 2 | SignAndReturn | 业务类型 | - | - |

## 响应参数

无。

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
PowerHomeDeliveryCallbackRequest request = new PowerHomeDeliveryCallbackRequest();
PowerHomeDeliveryCallbackParam param = request.getParam();
param.setResourceCode("0");
param.setWaybillNo("0");
param.setNumberCalls("0");
param.setIsConnected("0");
param.setConnectResult("0");
param.setIsHomeDelivery("0");
param.setHomeDeliveryRemark("0");
param.setPhotograph("1");
param.setBizType("SignAndReturn");
PowerHomeDeliveryCallbackResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerHomeDeliveryCallbackRequest();
$param = new PowerHomeDeliveryCallbackParam();
$request->setParam($param);
$param->resource_code = "0";
$param->waybill_no = "0";
$param->number_calls = "0";
$param->is_connected = "0";
$param->connect_result = "0";
$param->is_home_delivery = "0";
$param->home_delivery_remark = "0";
$param->photograph = "1";
$param->biz_type = "SignAndReturn";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerHomeDeliveryCallbackRequest()
param = request.getParams()
param.resource_code = "0"
param.waybill_no = "0"
param.number_calls = "0"
param.is_connected = "0"
param.connect_result = "0"
param.is_home_delivery = "0"
param.home_delivery_remark = "0"
param.photograph = "1"
param.biz_type = "SignAndReturn"
response = request.execute(accessToken)

```

### go

```go
request := power_homeDeliveryCallback_request.New()
param := request.GetParams()
param.ResourceCode = "0"
param.WaybillNo = "0"
param.NumberCalls = "0"
param.IsConnected = "0"
param.ConnectResult = "0"
param.IsHomeDelivery = "0"
param.HomeDeliveryRemark = "0"
param.Photograph = "1"
param.BizType = "SignAndReturn"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerHomeDeliveryCallbackRequest();
var param = request.BuildParam();
param.ResourceCode = "0";
param.WaybillNo = "0";
param.NumberCalls = "0";
param.IsConnected = "0";
param.ConnectResult = "0";
param.IsHomeDelivery = "0";
param.HomeDeliveryRemark = "0";
param.Photograph = "1";
param.BizType = "SignAndReturn";
var response = request.Execute<PowerHomeDeliveryCallbackResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10003 | 10003:系统异常 | 10003:系统异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
