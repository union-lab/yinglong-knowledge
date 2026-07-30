# /power/courierStationUpdate

> 中文说明：末端资源更新（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1572>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/courierStationUpdate |
| 中文名称 | 末端资源更新（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1572 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2021/12/27 21:12:54 |
| 授权主体 | ["店铺"] |
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
| 0 | method | - | true | 2 | power.courierStationUpdate | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | site_code | siteCode | true | 2 | 0 | - | - | - |
| 0 | site_name | siteName | true | 2 | 0 | - | - | - |
| 0 | site_type | siteType | true | 7 | 0 | - | - | - |
| 0 | site_address | siteAddress | true | 5 | - | - | - | - |
| 1 | site_address.country_code | countryCode | true | 2 | 0 | - | - | - |
| 1 | site_address.province_code | provinceCode | false | 2 | 0 | - | - | - |
| 1 | site_address.province_name | provinceName | true | 2 | 0 | - | - | - |
| 1 | site_address.city_code | cityCode | false | 2 | 0 | - | - | - |
| 1 | site_address.city_name | cityName | true | 2 | 0 | - | - | - |
| 1 | site_address.district_code | districtCode | false | 2 | 0 | - | - | - |
| 1 | site_address.district_name | districtName | true | 2 | 0 | - | - | - |
| 1 | site_address.street_code | streetCode | false | 2 | 0 | - | - | - |
| 1 | site_address.street_name | streetName | false | 2 | 0 | - | - | - |
| 1 | site_address.detail_address | detailAddress | true | 2 | 0 | - | - | - |
| 1 | site_address.address_id | addressId | false | 1 | 0 | - | - | - |
| 1 | site_address.longitude | longitude | false | 2 | 0 | - | - | - |
| 1 | site_address.latitude | latitude | false | 2 | 0 | - | - | - |
| 0 | site_contact | siteContact | true | 5 | - | - | - | - |
| 1 | site_contact.name | name | true | 2 | 0 | - | - | - |
| 1 | site_contact.phone | phone | false | 2 | 0 | - | - | - |
| 1 | site_contact.mobile | mobile | false | 2 | 0 | - | - | - |
| 1 | site_contact.email | email | false | 2 | 0 | - | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/courierStationUpdate?app_key=your_appkey_here&method=power.courierStationUpdate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/courierStationUpdate?app_key=your_appkey_here&method=power.courierStationUpdate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerCourierStationUpdateRequest request = new PowerCourierStationUpdateRequest();
PowerCourierStationUpdateParam param = request.getParam();
param.setSiteCode("0");
param.setSiteName("0");
param.setSiteType(0);
PowerCourierStationUpdateResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerCourierStationUpdateRequest();
$param = new PowerCourierStationUpdateParam();
$request->setParam($param);
$param->site_code = "0";
$param->site_name = "0";
$param->site_type = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = PowerCourierStationUpdateRequest()
param = request.getParams()
param.site_code = "0"
param.site_name = "0"
param.site_type = 0
response = request.execute(accessToken)

```

### go

```go
request := power_courierStationUpdate_request.New()
param := request.GetParams()
param.SiteCode = "0"
param.SiteName = "0"
param.SiteType = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerCourierStationUpdateRequest();
var param = request.BuildParam();
param.SiteCode = "0";
param.SiteName = "0";
param.SiteType = 0;
var response = request.Execute<PowerCourierStationUpdateResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:-10113 | -10113:地址匹配错误 | -10113:地址匹配错误 |
| 50002 | 业务处理失败 | isv.business-failed:-10002 | -10002:系统错误 | -10002:系统错误 |
| 50002 | 业务处理失败 | isv.business-failed:-10115 | -10115:联系方式不正确 | -10115:联系方式不正确 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
