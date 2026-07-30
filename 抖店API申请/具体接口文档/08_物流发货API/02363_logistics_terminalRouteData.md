# /logistics/terminalRouteData

> 中文说明：末端操作数据回传  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2363>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/terminalRouteData |
| 中文名称 | 末端操作数据回传 |
| 文档目录 | 物流发货API |
| Article ID | 2363 |
| 文档版本 | V1.06 |
| 官方更新时间 | 2026/1/30 14:09:32 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 15000 |

## 使用说明

末端操作数据回传。

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）
- 物流连接平台 / 末端系统（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.terminalRouteData | 调用的API接口名称 | - | - |
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
| 0 | track_operation | trackOperation | true | 2 | Arrival | 轨迹操作（Arrival - 入站；InStore - 在库；Departure - 出站；DepartureException - 异常出站；SignReject - 拒收；AgentSign-暂存；AwaitingDelivery-待驿站上门派送；Delivering-驿站派送中） | - | - |
| 0 | sign_by | signBy | false | 2 | SignedByMyself | 签收人（SignedByMyself - 本人签收；SignedByOthers - 他人签收；PostStationSigned - 驿站代签） | - | - |
| 0 | longitude | longitude | false | 2 | 11.123456 | 经度 | - | - |
| 0 | latitude | latitude | false | 2 | 11.123456 | 纬度 | - | - |
| 0 | standard | standard | false | 2 | GaoDe | 经纬度标准（GaoDe - 高德；BaiDu - 百度；Tencent - 腾讯；Google - 谷歌） | - | - |
| 0 | pick_up_address | pickUpAddress | true | 5 | - | 取件地址 | - | - |
| 1 | pick_up_address.province_code | provinceCode | false | 2 | 44 | 省编码 | - | - |
| 1 | pick_up_address.city_name | cityName | false | 2 | 广州市 | 市 | - | - |
| 1 | pick_up_address.street_name | streetName | false | 2 | 沙东街道 | 街道 | - | - |
| 1 | pick_up_address.city_code | cityCode | false | 2 | 440100 | 市编码 | - | - |
| 1 | pick_up_address.longitude | longitude | false | 2 | 11.123456 | 经度 | - | - |
| 1 | pick_up_address.district_code | districtCode | false | 2 | 440106 | 区编码 | - | - |
| 1 | pick_up_address.street_code | streetCode | false | 2 | 440106007 | 街道编码 | - | - |
| 1 | pick_up_address.detail_address | detailAddress | false | 2 | 范屋街37号菜鸟驿站 | 详细地址 | - | - |
| 1 | pick_up_address.country_code | countryCode | false | 2 | CHN | 国家编码 | - | - |
| 1 | pick_up_address.latitude | latitude | false | 2 | 11.123456 | 纬度 | - | - |
| 1 | pick_up_address.province_name | provinceName | false | 2 | 广东省 | 省 | - | - |
| 1 | pick_up_address.district_name | districtName | false | 2 | 天河区 | 区 | - | - |
| 0 | courier_name | courierName | false | 2 | 张三 | 快递员姓名 | - | - |
| 0 | courier_tel | courierTel | false | 2 | 1234567711 | 快递员电话 | - | - |
| 0 | service_type | serviceType | true | 2 | HomeDelivery | 服务类型（HomeDelivery - 送货上门；PostStationSelfDelivery - 驿站自提；other - 其他） | - | - |
| 0 | waybill_code | waybillCode | true | 2 | 12345678 | 运单号 | - | - |
| 0 | express_company | expressCompany | true | 2 | jd | 快递公司（联调时提供枚举） | - | - |
| 0 | pick_code | pickCode | false | 2 | 123 | 取件码 | - | - |
| 0 | pick_site_type | pickSiteType | true | 2 | 1 | 取件点类型（1 - 驿站；2 - 自提柜） | - | - |
| 0 | pick_site_name | pickSiteName | true | 2 | 仙颐园小区熊猫快收 | 取件点名称 | - | - |
| 0 | pick_site_code | pickSiteCode | true | 2 | 服务商侧柜子/驿站编码 | 取件点编码 | - | - |
| 0 | pick_site_phone | pickSitePhone | true | 2 | 17812345678 | 取件点联系方式 | - | - |
| 0 | operation_time | operationTime | true | 2 | 2021-03-29 09:39:03 | 操作时间 | - | - |
| 0 | extend | extend | false | 8 | - | 拓展字段 | - | - |
| 0 | exception_code | exceptionCode | false | 2 | C001 | 异常编码（联调时提供枚举） | - | - |
| 0 | exception_description | exceptionDescription | false | 2 | 包裹长时间未出库，滞留超时 | 异常描述，服务商回传原始异常文案 | - | - |
| 0 | business_end_time | businessEndTime | false | 2 | 19:00 | 营业结束时间，格式：xx:xx；例如：19:00 | - | - |
| 0 | pickup_method | pickupMethod | false | 2 | PickupCode | 取件方式，枚举值：PickupCode-取件码取件；Scanning-扫码取件；WaybillNumber-运单号取件；PhoneNumber-手机号取件；VirtualNumber-虚拟号取件。（service_type=PostStationSelfDelivery-驿站自提时，需要同步用户取件的方式） | - | - |
| 0 | pick_site_contactor | pickSiteContactor | false | 2 | 张三 | 驿站/快递柜联系人 | - | - |
| 0 | business_type | businessType | false | 2 | Collection,Sending | 支持的业务类型，枚举值：Collection-代收；Sending-寄件。（两个同时支持时使用英文逗号隔开）例如：Collection,Sending | - | - |
| 0 | business_start_time | businessStartTime | false | 2 | 09:00 | 营业开始时间，格式：xx:xx；例如：09:00 | - | - |
| 0 | order_scale | orderScale | false | 2 | 0-100 | 单量规模，代收点日均单量，同步区间值，格式为x-x。例如：0-100 | - | - |
| 0 | brand_code | brandCode | false | 2 | xx | 品牌编码（联调时提供） | - | - |
| 0 | cabinet_no | cabinetNo | false | 2 | 2 | 自提柜柜号 | - | - |
| 0 | cabinet_box_no | cabinetBoxNo | false | 2 | 5 | 自提柜格口号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | result | result | - | 4 | true | 是否成功 | - | R1 |
| 0 | return_code | returnCode | - | 2 | 0 | 响应编码 | - | R1 |
| 0 | message | message | - | 2 | 成功 | 响应描述 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/address/getAreasByProvince?app_key=your_appkey_here&method=address.getAreasByProvince&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/address/getAreasByProvince?app_key=your_appkey_here&method=address.getAreasByProvince&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsTerminalRouteDataRequest request = new LogisticsTerminalRouteDataRequest();
LogisticsTerminalRouteDataParam param = request.getParam();
param.setTrackOperation("Arrival");
param.setSignBy("SignedByMyself");
param.setLongitude("11.123456");
param.setLatitude("11.123456");
param.setStandard("GaoDe");
param.setCourierName("张三");
param.setCourierTel("1234567711");
param.setServiceType("HomeDelivery");
param.setWaybillCode("12345678");
param.setExpressCompany("jd");
param.setPickCode("123");
param.setPickSiteType("1");
param.setPickSiteName("仙颐园小区熊猫快收");
param.setPickSiteCode("服务商侧柜子/驿站编码");
param.setPickSitePhone("17812345678");
param.setOperationTime("2021-03-29 09:39:03");
param.setExtend(-);
param.setExceptionCode("C001");
param.setExceptionDescription("包裹长时间未出库，滞留超时");
param.setBusinessEndTime("19:00");
param.setPickupMethod("PickupCode");
param.setPickSiteContactor("张三");
param.setBusinessType("Collection,Sending");
param.setBusinessStartTime("09:00");
param.setOrderScale("0-100");
param.setBrandCode("xx");
param.setCabinetNo("2");
param.setCabinetBoxNo("5");
LogisticsTerminalRouteDataResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsTerminalRouteDataRequest();
$param = new LogisticsTerminalRouteDataParam();
$request->setParam($param);
$param->track_operation = "Arrival";
$param->sign_by = "SignedByMyself";
$param->longitude = "11.123456";
$param->latitude = "11.123456";
$param->standard = "GaoDe";
$param->courier_name = "张三";
$param->courier_tel = "1234567711";
$param->service_type = "HomeDelivery";
$param->waybill_code = "12345678";
$param->express_company = "jd";
$param->pick_code = "123";
$param->pick_site_type = "1";
$param->pick_site_name = "仙颐园小区熊猫快收";
$param->pick_site_code = "服务商侧柜子/驿站编码";
$param->pick_site_phone = "17812345678";
$param->operation_time = "2021-03-29 09:39:03";
$param->extend = -;
$param->exception_code = "C001";
$param->exception_description = "包裹长时间未出库，滞留超时";
$param->business_end_time = "19:00";
$param->pickup_method = "PickupCode";
$param->pick_site_contactor = "张三";
$param->business_type = "Collection,Sending";
$param->business_start_time = "09:00";
$param->order_scale = "0-100";
$param->brand_code = "xx";
$param->cabinet_no = "2";
$param->cabinet_box_no = "5";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsTerminalRouteDataRequest()
param = request.getParams()
param.track_operation = "Arrival"
param.sign_by = "SignedByMyself"
param.longitude = "11.123456"
param.latitude = "11.123456"
param.standard = "GaoDe"
param.courier_name = "张三"
param.courier_tel = "1234567711"
param.service_type = "HomeDelivery"
param.waybill_code = "12345678"
param.express_company = "jd"
param.pick_code = "123"
param.pick_site_type = "1"
param.pick_site_name = "仙颐园小区熊猫快收"
param.pick_site_code = "服务商侧柜子/驿站编码"
param.pick_site_phone = "17812345678"
param.operation_time = "2021-03-29 09:39:03"
param.extend = -
param.exception_code = "C001"
param.exception_description = "包裹长时间未出库，滞留超时"
param.business_end_time = "19:00"
param.pickup_method = "PickupCode"
param.pick_site_contactor = "张三"
param.business_type = "Collection,Sending"
param.business_start_time = "09:00"
param.order_scale = "0-100"
param.brand_code = "xx"
param.cabinet_no = "2"
param.cabinet_box_no = "5"
response = request.execute(accessToken)

```

### go

```go
request := logistics_terminalRouteData_request.New()
param := request.GetParams()
param.TrackOperation = "Arrival"
param.SignBy = "SignedByMyself"
param.Longitude = "11.123456"
param.Latitude = "11.123456"
param.Standard = "GaoDe"
param.CourierName = "张三"
param.CourierTel = "1234567711"
param.ServiceType = "HomeDelivery"
param.WaybillCode = "12345678"
param.ExpressCompany = "jd"
param.PickCode = "123"
param.PickSiteType = "1"
param.PickSiteName = "仙颐园小区熊猫快收"
param.PickSiteCode = "服务商侧柜子/驿站编码"
param.PickSitePhone = "17812345678"
param.OperationTime = "2021-03-29 09:39:03"
param.Extend = -
param.ExceptionCode = "C001"
param.ExceptionDescription = "包裹长时间未出库，滞留超时"
param.BusinessEndTime = "19:00"
param.PickupMethod = "PickupCode"
param.PickSiteContactor = "张三"
param.BusinessType = "Collection,Sending"
param.BusinessStartTime = "09:00"
param.OrderScale = "0-100"
param.BrandCode = "xx"
param.CabinetNo = "2"
param.CabinetBoxNo = "5"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsTerminalRouteDataRequest();
var param = request.BuildParam();
param.TrackOperation = "Arrival";
param.SignBy = "SignedByMyself";
param.Longitude = "11.123456";
param.Latitude = "11.123456";
param.Standard = "GaoDe";
param.CourierName = "张三";
param.CourierTel = "1234567711";
param.ServiceType = "HomeDelivery";
param.WaybillCode = "12345678";
param.ExpressCompany = "jd";
param.PickCode = "123";
param.PickSiteType = "1";
param.PickSiteName = "仙颐园小区熊猫快收";
param.PickSiteCode = "服务商侧柜子/驿站编码";
param.PickSitePhone = "17812345678";
param.OperationTime = "2021-03-29 09:39:03";
param.Extend = -;
param.ExceptionCode = "C001";
param.ExceptionDescription = "包裹长时间未出库，滞留超时";
param.BusinessEndTime = "19:00";
param.PickupMethod = "PickupCode";
param.PickSiteContactor = "张三";
param.BusinessType = "Collection,Sending";
param.BusinessStartTime = "09:00";
param.OrderScale = "0-100";
param.BrandCode = "xx";
param.CabinetNo = "2";
param.CabinetBoxNo = "5";
var response = request.Execute<LogisticsTerminalRouteDataResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:11004 | rpc调用失败 | 找研发确认 |
| 40004 | 非法的参数 | isv.parameter-invalid:11000 | 参数错误 | 修改参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
