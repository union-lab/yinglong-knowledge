# /logistics/ind/aoi/push

> 中文说明：门店入驻后，自动/手动向承运商同步门店信息  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2455>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/ind/aoi/push |
| 中文名称 | 门店入驻后，自动/手动向承运商同步门店信息 |
| 文档目录 | 物流发货API |
| Article ID | 2455 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/11/2 12:34:15 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

门店入驻后，自动/手动向承运商同步门店信息

## 权限包

- 抖店超市 / 抖超小时达-4l（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.ind/aoi/push | 调用的API接口名称 | - | - |
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
| 0 | store_code | storeCode | true | 2 | 123456 | 门店编码，由字节在门店创建/更新时同步给抖音平台 | - | - |
| 0 | instant_delivery_code | instantDeliveryCode | true | 2 | 外部公司入驻时的code码 | 外部运力公司业务身份 | - | - |
| 0 | aoi_id | aoiId | true | 2 | 123456 | 电子围栏的id,运力公司保障一个电子围栏id唯一性 | - | - |
| 0 | aoi_type | aoiType | true | 2 | circle,polygon | 回传的电子围栏是标准圆形还是多边形 | - | - |
| 0 | aoi_area_circle | aoiAreaCircle | false | 3 | - | 若aoi_type=circle，必填 单位: m 圆心+半径 | - | - |
| 1 | aoi_area_circle.location | location | false | 5 | - | 圆心经纬度 | - | - |
| 2 | aoi_area_circle.location.longitude | longitude | true | 2 | 111.23 | 经度 | - | - |
| 2 | aoi_area_circle.location.latitude | latitude | true | 2 | 111.23 | 维度 | - | - |
| 2 | aoi_area_circle.location.standard | standard | true | 2 | GaoDe | 地图标准 | - | - |
| 1 | aoi_area_circle.circle_radius | circleRadius | true | 1 | 10000 | 半径 | - | - |
| 0 | aoi_area_polygon_list | aoiAreaPolygonList | false | 2 | {{   经度A,纬度A;    经度B,纬度B;   经度C,纬度C; }} | 若aoi_category=polygon，则回传经纬度点集合 构成的电子围栏多边形的经纬度坐标(高德体系经纬度) 例如: {   经度A,纬度A;    经度B,纬度B;   经度C,纬度C; } | - | - |
| 0 | aoi_op_type | aoiOpType | true | 6 | {aoi_type=1,新增门店可达电子围栏} {aoi_type=2,修改门店可达电子围栏} {aoi_type=3,启用门店可达电子围栏} {aoi_type=4,停用门店可达电子围栏} | 变更类型 | - | - |
| 0 | fulfill_service | fulfillService | false | 3 | 无接触派送 | 门店到此电子围栏的服务 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | return_code | returnCode | - | 2 | 0 | 错误码，0 - 成功 | - | R1 |
| 0 | message | message | - | 2 | xx错了 | 错误信息，失败时填写 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/ind/aoi/push?app_key=your_appkey_here&method=logistics.ind.aoi.push&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/ind/aoi/push?app_key=your_appkey_here&method=logistics.ind.aoi.push&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsIndAoiPushRequest request = new LogisticsIndAoiPushRequest();
LogisticsIndAoiPushParam param = request.getParam();
param.setStoreCode("123456");
param.setInstantDeliveryCode("外部公司入驻时的code码");
param.setAoiId("123456");
param.setAoiType("circle,polygon");
param.setAoiAreaPolygonList("{{   经度A,纬度A;    经度B,纬度B;   经度C,纬度C; }}");
param.setAoiOpType({aoi_type=1,新增门店可达电子围栏} {aoi_type=2,修改门店可达电子围栏} {aoi_type=3,启用门店可达电子围栏} {aoi_type=4,停用门店可达电子围栏});
param.setFulfillService(无接触派送);
LogisticsIndAoiPushResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsIndAoiPushRequest();
$param = new LogisticsIndAoiPushParam();
$request->setParam($param);
$param->store_code = "123456";
$param->instant_delivery_code = "外部公司入驻时的code码";
$param->aoi_id = "123456";
$param->aoi_type = "circle,polygon";
$param->aoi_area_polygon_list = "{{   经度A,纬度A;    经度B,纬度B;   经度C,纬度C; }}";
$param->aoi_op_type = {aoi_type=1,新增门店可达电子围栏} {aoi_type=2,修改门店可达电子围栏} {aoi_type=3,启用门店可达电子围栏} {aoi_type=4,停用门店可达电子围栏};
$param->fulfill_service = 无接触派送;
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsIndAoiPushRequest()
param = request.getParams()
param.store_code = "123456"
param.instant_delivery_code = "外部公司入驻时的code码"
param.aoi_id = "123456"
param.aoi_type = "circle,polygon"
param.aoi_area_polygon_list = "{{   经度A,纬度A;    经度B,纬度B;   经度C,纬度C; }}"
param.aoi_op_type = {aoi_type=1,新增门店可达电子围栏} {aoi_type=2,修改门店可达电子围栏} {aoi_type=3,启用门店可达电子围栏} {aoi_type=4,停用门店可达电子围栏}
param.fulfill_service = 无接触派送
response = request.execute(accessToken)

```

### go

```go
request := logistics_ind_aoi_push_request.New()
param := request.GetParams()
param.StoreCode = "123456"
param.InstantDeliveryCode = "外部公司入驻时的code码"
param.AoiId = "123456"
param.AoiType = "circle,polygon"
param.AoiAreaPolygonList = "{{   经度A,纬度A;    经度B,纬度B;   经度C,纬度C; }}"
param.AoiOpType = {aoi_type=1,新增门店可达电子围栏} {aoi_type=2,修改门店可达电子围栏} {aoi_type=3,启用门店可达电子围栏} {aoi_type=4,停用门店可达电子围栏}
param.FulfillService = 无接触派送
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsIndAoiPushRequest();
var param = request.BuildParam();
param.StoreCode = "123456";
param.InstantDeliveryCode = "外部公司入驻时的code码";
param.AoiId = "123456";
param.AoiType = "circle,polygon";
param.AoiAreaPolygonList = "{{   经度A,纬度A;    经度B,纬度B;   经度C,纬度C; }}";
param.AoiOpType = {aoi_type=1,新增门店可达电子围栏} {aoi_type=2,修改门店可达电子围栏} {aoi_type=3,启用门店可达电子围栏} {aoi_type=4,停用门店可达电子围栏};
param.FulfillService = 无接触派送;
var response = request.Execute<LogisticsIndAoiPushResponse>(accessToken);

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
