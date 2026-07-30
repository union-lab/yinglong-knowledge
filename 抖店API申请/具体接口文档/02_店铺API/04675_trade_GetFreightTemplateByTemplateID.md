# /trade/GetFreightTemplateByTemplateID

> 中文说明：小时达查询运费模板  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/4675>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /trade/GetFreightTemplateByTemplateID |
| 中文名称 | 小时达查询运费模板 |
| 文档目录 | 店铺API |
| Article ID | 4675 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/12/15 14:11:05 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

小时达查询运费模板

## 权限包

- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | trade.GetFreightTemplateByTemplateID | 调用的API接口名称 | - | - |
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
| 0 | template_id | TemplateId | true | 99 | 29877897 | 模板ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | freight_template_vo_list | FreightTemplateVOList | - | 3 | - | 运费模板列表 | - | R1 |
| 1 | freight_template_vo_list.id | Id | - | 99 | 100000 | 模板ID | - | - |
| 1 | freight_template_vo_list.name | Name | - | 2 | 测试模板名称 | 模板名称 | - | - |
| 1 | freight_template_vo_list.base | Base | - | 3 | - | 基础运费 | - | R1 |
| 2 | freight_template_vo_list.base.price | Price | - | 99 | 100 | 基础运费值 | - | - |
| 1 | freight_template_vo_list.weight | Weight | - | 3 | - | 重量规则 | - | R1 |
| 2 | freight_template_vo_list.weight.first_weight | FirstWeight | - | 99 | 1000 | 起始重量 单位mg | - | - |
| 2 | freight_template_vo_list.weight.add_weight | AddWeight | - | 99 | 1000 | 增加重量 | - | - |
| 2 | freight_template_vo_list.weight.add_price | AddPrice | - | 99 | 100 | 加价 单位分 | - | - |
| 1 | freight_template_vo_list.distance | Distance | - | 3 | - | 距离规则 | - | R1 |
| 2 | freight_template_vo_list.distance.first_distance | FirstDistance | - | 99 | 1000 | 起始距离 单位m | - | - |
| 2 | freight_template_vo_list.distance.add_distance | AddDistance | - | 99 | 1000 | 增加距离 | - | - |
| 2 | freight_template_vo_list.distance.add_price | AddPrice | - | 99 | 100 | 加价 | - | - |
| 1 | freight_template_vo_list.interval | Interval | - | 3 | - | 时段规则 | - | R1 |
| 2 | freight_template_vo_list.interval.time_start | TimeStart | - | 99 | 0 | 起始时间 单位秒 比如00:00就是0 | - | - |
| 2 | freight_template_vo_list.interval.time_end | TimeEnd | - | 99 | 36000 | 结束时间 单位秒 比如10:00 就是36000 | - | - |
| 2 | freight_template_vo_list.interval.add_price | AddPrice | - | 99 | 100 | 加价 | - | - |
| 1 | freight_template_vo_list.free | Free | - | 3 | - | 包邮规则 | - | R1 |
| 2 | freight_template_vo_list.free.amount | Amount | - | 99 | 100 | 满xx包邮 单位分 | - | - |
| 1 | freight_template_vo_list.shipping_address | ShippingAddress | - | 5 | - | 发货地址 | - | R1 |
| 2 | freight_template_vo_list.shipping_address.province_id | ProvinceId | - | 2 | 11 | 省 | - | - |
| 2 | freight_template_vo_list.shipping_address.city_id | CityId | - | 2 | 110000 | 市 | - | - |
| 2 | freight_template_vo_list.shipping_address.town_id | TownId | - | 2 | 110108 | 区 | - | - |
| 2 | freight_template_vo_list.shipping_address.street_id | StreetId | - | 2 | 110108011 | 街道 | - | - |
| 2 | freight_template_vo_list.shipping_address.coordinate | Coordinate | - | 5 | - | 经纬度 | - | R1 |
| 3 | freight_template_vo_list.shipping_address.coordinate.latitude | Latitude | - | 2 | 10.000 | 纬度 | - | - |
| 3 | freight_template_vo_list.shipping_address.coordinate.longitude | Longitude | - | 2 | 10.000 | 经度 | - | - |
| 3 | freight_template_vo_list.shipping_address.coordinate.geo_hash | GeoHash | - | 2 | 1000 | GeoHash | - | - |
| 1 | freight_template_vo_list.freight_mode | FreightMode | - | 99 | 4 | 模板类型 仅4和5 | - | - |
| 1 | freight_template_vo_list.create_time | CreateTime | - | 99 | 1694088422 | 创建时间 | - | - |
| 1 | freight_template_vo_list.update_time | UpdateTime | - | 99 | 1694088422 | 更新时间 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/trade/GetFreightTemplateByTemplateID?app_key=your_appkey_here&method=trade.GetFreightTemplateByTemplateID&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/trade/GetFreightTemplateByTemplateID?app_key=your_appkey_here&method=trade.GetFreightTemplateByTemplateID&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
TradeGetFreightTemplateByTemplateIDRequest request = new TradeGetFreightTemplateByTemplateIDRequest();
TradeGetFreightTemplateByTemplateIDParam param = request.getParam();
param.setTemplateId(29877897L);
TradeGetFreightTemplateByTemplateIDResponse response = request.execute(accessToken);

```

### php

```php
$request = new TradeGetFreightTemplateByTemplateIDRequest();
$param = new TradeGetFreightTemplateByTemplateIDParam();
$request->setParam($param);
$param->template_id = 29877897;
$response = $request->execute(accessToken);

```

### python

```python
request = TradeGetFreightTemplateByTemplateIDRequest()
param = request.getParams()
param.template_id = 29877897
response = request.execute(accessToken)

```

### go

```go
request := trade_GetFreightTemplateByTemplateID_request.New()
param := request.GetParams()
param.TemplateId = 29877897
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new TradeGetFreightTemplateByTemplateIDRequest();
var param = request.BuildParam();
param.TemplateId = 29877897;
var response = request.Execute<TradeGetFreightTemplateByTemplateIDResponse>(accessToken);

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
