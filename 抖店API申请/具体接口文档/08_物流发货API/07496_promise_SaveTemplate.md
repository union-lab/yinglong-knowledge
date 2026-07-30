# /promise/SaveTemplate

> 中文说明：创建时效规则  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/7496>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /promise/SaveTemplate |
| 中文名称 | 创建时效规则 |
| 文档目录 | 物流发货API |
| Article ID | 7496 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/6/5 19:30:56 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

用于创建、修改时效规则模板的接口。

## 权限包

- 物流发货 / 预约发货时效（packageType=1）；适用应用类目：商家后台系统

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | promise.SaveTemplate | 调用的API接口名称 | - | - |
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
| 0 | template_info | TemplateInfo | true | 5 | - | 模板信息 | - | - |
| 1 | template_info.c_shop_id | shopId | false | 99 | 0 | 传0即可 | - | - |
| 1 | template_info.template_id | templateId | false | 2 | "" | 模板ID。创建时效规则模板时，该参数不填。修改时效规则模板时，该参数为对应时效规则模板的template_id。 | - | - |
| 1 | template_info.time_type | timeType | false | 99 | 1 | 模板时效类型 1-承诺发货 2-承诺送达 | - | - |
| 1 | template_info.is_support_appointment | isSupportAppointment | false | 4 | true | 是否支持预约 | - | - |
| 1 | template_info.is_support_modify_appointment | isSupportModifyAppointment | false | 4 | true | 是否支持修改预约时间 | - | - |
| 1 | template_info.status | status | false | 99 | 1 | 状态 1-生效中；2-已停用；3-删除 | - | - |
| 1 | template_info.template_name | templateName | true | 2 | 大家电预约发货时效模板 | 模板名称（必填） | - | - |
| 1 | template_info.warehouse_info | warehouseInfo | false | 5 | - | 仓库信息。warehouse_id和warehouse_name可以同时不填。若不填，则该模板的生效范围为全店生效。如果填写了仓库信息，则该模板的生效范围为按仓生效。 | - | - |
| 2 | template_info.warehouse_info.warehouse_id | warehouseId | false | 2 | 736029680619 | 仓id | - | - |
| 2 | template_info.warehouse_info.warehouse_name | warehouseName | false | 2 | 杭州测试仓 | 仓名称 | - | - |
| 1 | template_info.support_appoinment_day | supportAppoinmentDay | false | 99 | 15 | 允许用户预约的最大天数。目前支持15-90范围内的整数。例如，15表示用户最大可约天数为15天。 | - | - |
| 1 | template_info.shop_name | shopName | false | 2 | 测试店铺 | 商家名称 | - | - |
| 1 | template_info.biz_tag | bizTag | false | 2 | "Home" | 业务身份 | - | - |
| 1 | template_info.min_hour_for_modify_appointment | minHourForModifyAppointment | false | 99 | 12 | 支持修改预约时效的最小buffer时间。目前支持1-72范围内的整数。例如，12表示订单发货的12小时之前，允许用户修改订单发货时间。 | - | - |
| 0 | wave_rule_configs | WaveRuleConfigs | false | 3 | - | 波次规则配置。 | - | - |
| 1 | wave_rule_configs.time_type | timeType | false | 99 | 1 | 波次时效类型。1-承诺发货 2-承诺送达 | - | - |
| 1 | wave_rule_configs.wave_id | waveId | false | 2 | 864 | 波次id。如果是创建新的波次，则该参数不填。如果是修改波次，则该参数为对应的修改的波次的id。 | - | - |
| 1 | wave_rule_configs.day | day | false | 2 | 1D | 发货/送达时间: 天数。如果time_type = 1, wave_type = 0, 则可选0D/1D/2D。如果time_type = 2, wave_type = 0, 则可选0D/1D/2D/3D/4D/5D/6D/7D。 | - | - |
| 1 | wave_rule_configs.detail_id | detailId | false | 2 | "" | 波次对应产能id。如果是创建新的波次，则该参数不填。如果是修改波次，则该参数为对应的修改的波次的产能id。 | - | - |
| 1 | wave_rule_configs.capacity | Capacity | false | 3 | - | 可在这里配置制定日期的产能。如果is_default为true，则date和capacity都不填，表示常规产能。如果is_default为false，填写date和capacity，表示指定日期的产能。例子，表示2024-07-17产能为111。 | - | - |
| 2 | wave_rule_configs.capacity.date | date | false | 2 | 2024-07-17 | 日期 | - | - |
| 2 | wave_rule_configs.capacity.capacity | capacity | false | 99 | 111 | 容量 | - | - |
| 2 | wave_rule_configs.capacity.is_default | isDefault | false | 4 | false | 指定日期还是default | - | - |
| 1 | wave_rule_configs.warehouse_info | warehouseInfo | false | 5 | - | 仓库信息。warehouse_id和warehouse_name可以同时不填。若不填，则该模板的生效范围为全店生效。如果填写了仓库信息，则该模板按仓生效。 | - | - |
| 2 | wave_rule_configs.warehouse_info.warehouse_id | warehouseId | false | 2 | 736029680619 | 仓id | - | - |
| 2 | wave_rule_configs.warehouse_info.warehouse_name | warehouseName | false | 2 | 杭州测试仓 | 仓name | - | - |
| 1 | wave_rule_configs.cutoff_time_hms | cutoffTimeHms | false | 2 | 16:00:00 | 截单时间：时分秒。（精确到秒） | - | - |
| 1 | wave_rule_configs.wave_type | waveType | false | 99 | 0 | 波次类型 0-默认波次 1-特殊类目波次 2-不可达地址波次 | - | - |
| 1 | wave_rule_configs.address_list | addressList | false | 3 | - | 地址列表。当time_type = 2时，可以填写address_list，表示承诺送达的地址列表。当time_type = 1时，该参数不填。 | - | - |
| 2 | wave_rule_configs.address_list.province_code | ProvinceCode | false | 2 | 31 | 省编码 | - | - |
| 2 | wave_rule_configs.address_list.province_name | ProvinceName | false | 2 | 上海市 | 省名称 | - | - |
| 2 | wave_rule_configs.address_list.city_code | CityCode | false | 2 | 310000 | 城市编码 | - | - |
| 2 | wave_rule_configs.address_list.city_name | CityName | false | 2 | 上海市 | 城市名称 | - | - |
| 2 | wave_rule_configs.address_list.district_code | DistrictCode | false | 2 | 310113 | 地区编码 | - | - |
| 2 | wave_rule_configs.address_list.district_name | DistrictName | false | 2 | 宝山区 | 地区名称 | - | - |
| 2 | wave_rule_configs.address_list.street_code | StreetCode | false | 2 | 310113501 | 街道编码 | - | - |
| 2 | wave_rule_configs.address_list.street_name | StreetName | false | 2 | 宝山城市工业园区 | 街道名称 | - | - |
| 0 | extra_info | ExtraInfo | false | 5 | - | 其他信息 | - | - |
| 1 | extra_info.is_protocol_accepted | IsProtocolAccepted | false | 4 | true | 是否同意了协议 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | template_id | templateId | - | 2 | 18588559 | 模板ID | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/promise/SaveTemplate?app_key=your_appkey_here&method=promise.SaveTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/promise/SaveTemplate?app_key=your_appkey_here&method=promise.SaveTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PromiseSaveTemplateRequest request = new PromiseSaveTemplateRequest();
PromiseSaveTemplateParam param = request.getParam();
PromiseSaveTemplateResponse response = request.execute(accessToken);

```

### php

```php
$request = new PromiseSaveTemplateRequest();
$param = new PromiseSaveTemplateParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = PromiseSaveTemplateRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := promise_SaveTemplate_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PromiseSaveTemplateRequest();
var param = request.BuildParam();
var response = request.Execute<PromiseSaveTemplateResponse>(accessToken);

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
