# /address/getAreasByProvince

> 中文说明：根据省获取全量四级地址  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1844>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /address/getAreasByProvince |
| 中文名称 | 根据省获取全量四级地址 |
| 文档目录 | 物流发货API |
| Article ID | 1844 |
| 文档版本 | V2.02 |
| 官方更新时间 | 2022/8/8 17:13:45 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查询最新的四级地址用于订单售后处理

## 权限包

- 物流发货 / 地址信息基础包（packageType=1）；适用应用类目：跨境电商、直播话术-微应用、打单发货-微应用、创新应用大赛_软件服务、厂商代发、订单处理-供应商、仓储管理、商家后台系统、即时零售商品服务、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、订单管理、商品供应链、电商ERP
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP
- 订单 / 省市区地址管理（packageType=1）；适用应用类目：商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | address.getAreasByProvince | 调用的API接口名称 | - | - |
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
| 0 | province_id | ProvId | true | 1 | 41 | 省ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | DistrictInfo | - | 3 | - | 响应结果 | - | R1 |
| 1 | data.code | Code | - | 1 | 41 | 省ID | 32 | R1 |
| 1 | data.father_code | FatherCode | - | 1 | 8 | 父ID | 32 | R1 |
| 1 | data.name | Name | - | 2 | 河南省 | 省名称 | 32 | R1 |
| 1 | data.level | Level | - | 2 | Province | 地址等级 | 32 | R1 |
| 1 | data.sub_districts | SubDistricts | - | 3 | - | 响应结果 | 32 | R1 |
| 2 | data.sub_districts.code | Code | - | 1 | 410500 | 市ID | 32 | R1 |
| 2 | data.sub_districts.father_code | FatherCode | - | 1 | 41 | 父ID | 32 | R1 |
| 2 | data.sub_districts.name | Name | - | 2 | 安阳市 | 市名 | 32 | R1 |
| 2 | data.sub_districts.level | Level | - | 2 | City | 地址等级 | 32 | R1 |
| 2 | data.sub_districts.sub_districts | SubDistricts | - | 3 | - | 响应结果 | 32 | R1 |
| 3 | data.sub_districts.sub_districts.code | Code | - | 1 | 410522 | 区县ID | 32 | R1 |
| 3 | data.sub_districts.sub_districts.father_code | FatherCode | - | 1 | 410500 | 父ID | 32 | R1 |
| 3 | data.sub_districts.sub_districts.name | Name | - | 2 | 安阳县 | 区县名称 | 32 | R1 |
| 3 | data.sub_districts.sub_districts.level | Level | - | 2 | District | 地址等级 | 32 | R1 |
| 3 | data.sub_districts.sub_districts.sub_districts | SubDistricts | - | 3 | - | 响应结果 | 32 | R1 |
| 4 | data.sub_districts.sub_districts.sub_districts.code | Code | - | 1 | 410522107 | 镇或者街道ID | 32 | R1 |
| 4 | data.sub_districts.sub_districts.sub_districts.father_code | FatherCode | - | 1 | 410522 | 父ID | 32 | R1 |
| 4 | data.sub_districts.sub_districts.sub_districts.level | Level | - | 2 | Street | 地址等级 | 32 | R1 |
| 4 | data.sub_districts.sub_districts.sub_districts.name | Name | - | 2 | 伦掌镇 | 镇或者街道名称 | 32 | R1 |

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
AddressGetAreasByProvinceRequest request = new AddressGetAreasByProvinceRequest();
AddressGetAreasByProvinceParam param = request.getParam();
param.setProvinceId(41L);
AddressGetAreasByProvinceResponse response = request.execute(accessToken);

```

### php

```php
$request = new AddressGetAreasByProvinceRequest();
$param = new AddressGetAreasByProvinceParam();
$request->setParam($param);
$param->province_id = 41;
$response = $request->execute(accessToken);

```

### python

```python
request = AddressGetAreasByProvinceRequest()
param = request.getParams()
param.province_id = 41
response = request.execute(accessToken)

```

### go

```go
request := address_getAreasByProvince_request.New()
param := request.GetParams()
param.ProvinceId = 41
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AddressGetAreasByProvinceRequest();
var param = request.BuildParam();
param.ProvinceId = 41;
var response = request.Execute<AddressGetAreasByProvinceResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:422 | 422:provId invalid | 参数传入有问题，请检查后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
