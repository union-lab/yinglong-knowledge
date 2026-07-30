# /logistics/getDistrict

> 中文说明：四级地址查询接口  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2905>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/getDistrict |
| 中文名称 | 四级地址查询接口 |
| 文档目录 | 物流发货API |
| Article ID | 2905 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2023/9/15 11:00:45 |
| 授权主体 | ["物流商","云仓","","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

1、根据行政区划code，查询上下级相关区划信息，支持四级地址
2、版本号请传入version=ecom，获取当前最新版本；如需历史版本请联系字节接口人。

## 权限包

- 物流发货 / 行政区划查询（packageType=1）
- 物流连接平台 / 地理中台（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.getDistrict | 调用的API接口名称 | - | - |
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
| 0 | code | code | false | 2 | CN | 行政区划code | - | - |
| 0 | subdistrict | subdistrict | false | 7 | 2 | 返回下级层级 | - | - |
| 0 | version | version | false | 2 | ecom | 版本号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | district | district | - | 5 | - | 区划信息 | - | R1 |
| 1 | district.par_regions | par_regions | - | 3 | - | 上级区划 | - | R1 |
| 2 | district.par_regions.code | code | - | 2 | 110000 | 编码 | - | - |
| 2 | district.par_regions.name | name | - | 2 | 北京 | 名称 | - | - |
| 2 | district.par_regions.level | level | - | 7 | 1 | 级别 | - | - |
| 2 | district.par_regions.description | description | - | 2 | 市 | 描述 | - | - |
| 2 | district.par_regions.centroid | centroid | - | 3 | 1.0,2.0 | 中心点信息 | - | R1 |
| 1 | district.code | code | - | 2 | 110000 | 编码 | - | - |
| 1 | district.name | name | - | 2 | 北京 | 名称 | - | - |
| 1 | district.level | level | - | 7 | 1 | 级别 | - | - |
| 1 | district.description | description | - | 2 | 市 | 描述 | - | - |
| 1 | district.sub_region | sub_region | - | 3 | - | 下级区划信息 | - | R1 |
| 2 | district.sub_region.code | code | - | 2 | 110000 | 编码 | - | - |
| 2 | district.sub_region.name | name | - | 2 | 北京 | 名称 | - | - |
| 2 | district.sub_region.level | level | - | 7 | 1 | 级别 | - | R1 |
| 2 | district.sub_region.sub_region | sub_region | - | 3 | - | 参考上级 | - | R1 |
| 3 | district.sub_region.sub_region.code | code | - | 2 | 1 | # | - | - |
| 3 | district.sub_region.sub_region.name | name | - | 2 | 1 | # | - | - |
| 3 | district.sub_region.sub_region.level | level | - | 7 | 1 | # | - | - |
| 3 | district.sub_region.sub_region.description | description | - | 2 | 1 | # | - | - |
| 3 | district.sub_region.sub_region.sub_region | sub_region | - | 3 | - | 参考上级 | - | R1 |
| 4 | district.sub_region.sub_region.sub_region.code | code | - | 2 | 1 | # | - | - |
| 4 | district.sub_region.sub_region.sub_region.name | name | - | 2 | 1 | # | - | - |
| 4 | district.sub_region.sub_region.sub_region.level | level | - | 7 | 1 | # | - | - |
| 4 | district.sub_region.sub_region.sub_region.description | description | - | 2 | 1 | # | - | - |
| 4 | district.sub_region.sub_region.sub_region.sub_region | sub_region | - | 3 | - | 参考上级 | - | R1 |
| 5 | district.sub_region.sub_region.sub_region.sub_region.code | code | - | 2 | 1 | # | - | - |
| 5 | district.sub_region.sub_region.sub_region.sub_region.name | name | - | 2 | 1 | # | - | - |
| 5 | district.sub_region.sub_region.sub_region.sub_region.level | level | - | 7 | 1 | # | - | - |
| 5 | district.sub_region.sub_region.sub_region.sub_region.description | description | - | 2 | 1 | # | - | - |
| 5 | district.sub_region.sub_region.sub_region.sub_region.centroid | centroid | - | 3 | 1 | # | - | R1 |
| 4 | district.sub_region.sub_region.sub_region.centroid | centroid | - | 3 | [1.0,2.0] | 中心点 | - | R1 |
| 3 | district.sub_region.sub_region.centroid | centroid | - | 3 | 1 | # | - | R1 |
| 2 | district.sub_region.description | description | - | 2 | 1 | # | - | - |
| 2 | district.sub_region.centroid | centroid | - | 3 | 1 | # | - | R1 |
| 1 | district.pre_region | pre_region | - | 5 | - | 上级区划信息，详情参考district其他字段 | - | R1 |
| 2 | district.pre_region.code | code | - | 2 | 1 | 2 | - | - |
| 2 | district.pre_region.name | name | - | 2 | 1 | 1 | - | - |
| 2 | district.pre_region.level | level | - | 7 | 1 | 1 | - | - |
| 2 | district.pre_region.description | description | - | 2 | 1 | 2 | - | - |
| 2 | district.pre_region.centroid | centroid | - | 3 | 1 | 1 | - | R1 |
| 1 | district.centroid | centroid | - | 3 | 1.0,2.0 | 中心点经纬度 | - | R1 |
| 0 | version | version | - | 2 | 1.0.0 | 版本号 | - | - |
| 0 | update_time | update_time | - | 2 | 123456789 | 更新时间戳 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/getDistrict?app_key=your_appkey_here&method=logistics.getDistrict&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/getDistrict?app_key=your_appkey_here&method=logistics.getDistrict&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsGetDistrictRequest request = new LogisticsGetDistrictRequest();
LogisticsGetDistrictParam param = request.getParam();
param.setCode("CN");
param.setSubdistrict(2);
param.setVersion("ecom");
LogisticsGetDistrictResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsGetDistrictRequest();
$param = new LogisticsGetDistrictParam();
$request->setParam($param);
$param->code = "CN";
$param->subdistrict = 2;
$param->version = "ecom";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsGetDistrictRequest()
param = request.getParams()
param.code = "CN"
param.subdistrict = 2
param.version = "ecom"
response = request.execute(accessToken)

```

### go

```go
request := logistics_getDistrict_request.New()
param := request.GetParams()
param.Code = "CN"
param.Subdistrict = 2
param.Version = "ecom"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsGetDistrictRequest();
var param = request.BuildParam();
param.Code = "CN";
param.Subdistrict = 2;
param.Version = "ecom";
var response = request.Execute<LogisticsGetDistrictResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:400 | 参数错误 | 修改参数重新调用 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
