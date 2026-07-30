# /logistics/resourceAbilityServiceArea

> 中文说明：服务商能力的服务范围同步  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2147>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/resourceAbilityServiceArea |
| 中文名称 | 服务商能力的服务范围同步 |
| 文档目录 | 物流发货API |
| Article ID | 2147 |
| 文档版本 | V2.02 |
| 官方更新时间 | 2025/5/9 15:51:13 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

比如服务商送货上门的服务范围

## 权限包

- 测试 / 临时权限包（packageType=1）
- 物流连接平台 / 送货上门/上门回收（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.resourceAbilityServiceArea | 调用的API接口名称 | - | - |
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
| 0 | ability_code | abilityCode | true | 2 | AC_INT_HOME_TEST0000001 | 服务商能力编码，例如送货上门能力的编码，由抖音电商侧提供 | - | - |
| 0 | service_areas | serviceAreas | true | 3 | - | 能力服务范围列表 | - | - |
| 1 | service_areas.country_code | countryCode | false | 2 | CN | 国家编码，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.country_name | countryName | false | 2 | 中华人民共和国 | 国家名称，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.province_code | provinceCode | false | 2 | 44 | 省份编码，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.province_name | provinceName | false | 2 | 广东省 | 省份名称，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.city_code | cityCode | false | 2 | 440300 | 城市编码，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.city_name | cityName | false | 2 | 深圳市 | 城市名称，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.district_code | districtCode | false | 2 | 440306 | 区县编码，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.district_name | districtName | false | 2 | 宝安区 | 区县名称，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.street_code | streetCode | false | 2 | 440306024 | 街道编码，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.street_name | streetName | false | 2 | 松岗街道 | 街道名称，serviceAreaType=REGION时有效，且必填 | - | - |
| 1 | service_areas.service_fence | serviceFence | false | 2 | {} | 电子围栏serviceAreaType=EFENCE时有效，且必填 | - | - |
| 1 | service_areas.service_area_express | serviceAreaExpress | false | 1 | 1 | 能力表达：1-能(送货上门)，2-不能(送货上门) | - | - |
| 1 | service_areas.service_area_type | serviceAreaType | false | 2 | REGION | 服务范围定义类型： REGION（行政区划4级地址）  EFENCE（电子围栏）——暂不支持 2种之一。 | - | - |
| 0 | extend_dimension_code | extendDimensionCode | false | 2 | 扩展维度 | 针对上门拆旧是【一级-二级-三级回收类目编码】 | - | - |
| 0 | busines_sense | businessSense | false | 2 | 业务场景 | douchao：抖超 | - | - |

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
LogisticsResourceAbilityServiceAreaRequest request = new LogisticsResourceAbilityServiceAreaRequest();
LogisticsResourceAbilityServiceAreaParam param = request.getParam();
param.setAbilityCode("AC_INT_HOME_TEST0000001");
param.setExtendDimensionCode("扩展维度");
param.setBusinesSense("业务场景");
LogisticsResourceAbilityServiceAreaResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsResourceAbilityServiceAreaRequest();
$param = new LogisticsResourceAbilityServiceAreaParam();
$request->setParam($param);
$param->ability_code = "AC_INT_HOME_TEST0000001";
$param->extend_dimension_code = "扩展维度";
$param->busines_sense = "业务场景";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsResourceAbilityServiceAreaRequest()
param = request.getParams()
param.ability_code = "AC_INT_HOME_TEST0000001"
param.extend_dimension_code = "扩展维度"
param.busines_sense = "业务场景"
response = request.execute(accessToken)

```

### go

```go
request := logistics_resourceAbilityServiceArea_request.New()
param := request.GetParams()
param.AbilityCode = "AC_INT_HOME_TEST0000001"
param.ExtendDimensionCode = "扩展维度"
param.BusinesSense = "业务场景"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsResourceAbilityServiceAreaRequest();
var param = request.BuildParam();
param.AbilityCode = "AC_INT_HOME_TEST0000001";
param.ExtendDimensionCode = "扩展维度";
param.BusinesSense = "业务场景";
var response = request.Execute<LogisticsResourceAbilityServiceAreaResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:-10000 | 传入参数错误 | 修正参数之后，再次调用接口 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
