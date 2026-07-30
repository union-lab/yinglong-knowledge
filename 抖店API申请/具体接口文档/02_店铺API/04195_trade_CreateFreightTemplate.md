# /trade/CreateFreightTemplate

> 中文说明：小时达创建运费模板  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/4195>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /trade/CreateFreightTemplate |
| 中文名称 | 小时达创建运费模板 |
| 文档目录 | 店铺API |
| Article ID | 4195 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/6/19 12:15:19 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

小时达创建运费模板

## 权限包

- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | trade.CreateFreightTemplate | 调用的API接口名称 | - | - |
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
| 0 | freight_template_vo | FreightTemplateVO | true | 5 | - | 运费模板模型 | - | - |
| 1 | freight_template_vo.template_shop_id | ShopId | - | 99 | 904191 | 店铺ID | - | - |
| 1 | freight_template_vo.name | Name | true | 2 | 模板名称 | 模板名称 | - | - |
| 1 | freight_template_vo.base | Base | true | 3 | - | 基础运费 | - | - |
| 2 | freight_template_vo.base.price | Price | true | 99 | 100 | 基础运费值 | - | - |
| 1 | freight_template_vo.weight | Weight | true | 3 | - | 重量规则 | - | - |
| 2 | freight_template_vo.weight.first_weight | FirstWeight | true | 99 | 1000 | 起始重量 单位mg | - | - |
| 2 | freight_template_vo.weight.add_weight | AddWeight | true | 99 | 2000 | 增加重量 | - | - |
| 2 | freight_template_vo.weight.add_price | AddPrice | true | 99 | 100 | 加价 单位分 | - | - |
| 1 | freight_template_vo.distance | Distance | true | 3 | - | 距离规则 | - | - |
| 2 | freight_template_vo.distance.first_distance | FirstDistance | true | 99 | 1000 | 起始距离 单位m | - | - |
| 2 | freight_template_vo.distance.add_distance | AddDistance | true | 99 | 2000 | 增加距离 | - | - |
| 2 | freight_template_vo.distance.add_price | AddPrice | true | 99 | 100 | 加价 | - | - |
| 1 | freight_template_vo.interval | Interval | true | 3 | - | 时段规则 | - | - |
| 2 | freight_template_vo.interval.time_start | TimeStart | true | 99 | 0 | 起始时间 单位秒 比如00:00就是0 | - | - |
| 2 | freight_template_vo.interval.time_end | TimeEnd | true | 99 | 36000 | 结束时间 单位秒 比如10:00 就是36000 | - | - |
| 2 | freight_template_vo.interval.add_price | AddPrice | true | 99 | 100 | 加价 | - | - |
| 1 | freight_template_vo.free | Free | true | 3 | - | 包邮规则 | - | - |
| 2 | freight_template_vo.free.amount | Amount | true | 99 | 10000 | 满xx包邮 单位分 | - | - |
| 1 | freight_template_vo.shipping_address | ShippingAddress | true | 5 | - | 发货地址 | - | - |
| 2 | freight_template_vo.shipping_address.province_id | ProvinceId | true | 2 | 11 | 省 | - | - |
| 2 | freight_template_vo.shipping_address.city_id | CityId | true | 2 | 110000 | 市 | - | - |
| 2 | freight_template_vo.shipping_address.town_id | TownId | false | 2 | 110114 | 区 | - | - |
| 2 | freight_template_vo.shipping_address.street_id | StreetId | false | 2 | 110114007 | 街道 | - | - |
| 2 | freight_template_vo.shipping_address.coordinate | Coordinate | false | 5 | - | 经纬度 | - | - |
| 3 | freight_template_vo.shipping_address.coordinate.latitude | Latitude | true | 2 | 23.103084 | 纬度 | - | - |
| 3 | freight_template_vo.shipping_address.coordinate.longitude | Longitude | true | 2 | 114.455865 | 经度 | - | - |
| 3 | freight_template_vo.shipping_address.coordinate.geo_hash | GeoHash | false | 2 | geo_hash | GeoHash | - | - |
| 3 | freight_template_vo.shipping_address.coordinate.expire_time | expireTime | false | 99 | 1 | 过期时间 | - | - |
| 1 | freight_template_vo.freight_mode | FreightMode | true | 99 | 4 | 模板类型 仅4和5 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | template_id | template_id | - | 99 | 29877897 | 模板ID | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/trade/CreateFreightTemplate?app_key=your_appkey_here&method=trade.CreateFreightTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/trade/CreateFreightTemplate?app_key=your_appkey_here&method=trade.CreateFreightTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
TradeCreateFreightTemplateRequest request = new TradeCreateFreightTemplateRequest();
TradeCreateFreightTemplateParam param = request.getParam();
TradeCreateFreightTemplateResponse response = request.execute(accessToken);

```

### php

```php
$request = new TradeCreateFreightTemplateRequest();
$param = new TradeCreateFreightTemplateParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = TradeCreateFreightTemplateRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := trade_CreateFreightTemplate_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new TradeCreateFreightTemplateRequest();
var param = request.BuildParam();
var response = request.Execute<TradeCreateFreightTemplateResponse>(accessToken);

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
