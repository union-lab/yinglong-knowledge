# /address/getAftersaleStrategy

> 中文说明：根据策略ID获取单个策略信息  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/6908>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /address/getAftersaleStrategy |
| 中文名称 | 根据策略ID获取单个策略信息 |
| 文档目录 | 售后退款API |
| Article ID | 6908 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/8/25 15:21:43 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 490 |

## 使用说明

根据策略ID获取单个策略的详细信息。

## 权限包

- 售后 / 售后地址退货策略（packageType=1）；适用应用类目：售后管理、商家后台系统、订单管理、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | address.getAftersaleStrategy | 调用的API接口名称 | - | - |
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
| 0 | strategy_id | StrategyId | false | 2 | 必填，策略ID | 策略ID; | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | Data | - | 5 | - | 返回数据 | - | R1 |
| 1 | data.strategy_type_name | StrategyTypeName | - | 2 | 固定退货地址 | 策略类型描述; | - | - |
| 1 | data.strategy_name | StrategyName | - | 2 | 测试策略-13 | 策略名称; | - | - |
| 1 | data.address_list | AddressList | - | 3 | - | 售后策略绑定的地址列表; | - | R1 |
| 2 | data.address_list.bind_address_list | BindAddress | - | 3 | - | 动态退货地址策略类型下，该地址绑定的用户收货地址 | - | R1 |
| 3 | data.address_list.bind_address_list.province_id | ProvinceId | - | 99 | 11 | 用户收货地址的省Id | - | - |
| 3 | data.address_list.bind_address_list.province_name | ProvinceName | - | 2 | 北京市 | 用户收货地址的省名称 | - | - |
| 3 | data.address_list.bind_address_list.city_id | CityId | - | 99 | 110000 | 用户收货地址的市ID | - | - |
| 3 | data.address_list.bind_address_list.city_name | CityName | - | 2 | 北京市 | 用户收货地址的市名称 | - | - |
| 2 | data.address_list.address | Address | - | 5 | - | 具体地址信息; | - | R1 |
| 3 | data.address_list.address.id | Id | - | 99 | 32693731 | 自增ID, 也是地址的ID; | - | - |
| 3 | data.address_list.address.street_name | StreetName | - | 2 | 海淀街道 | 街道名称; | - | - |
| 3 | data.address_list.address.is_default | IsDefault | - | 99 | 1 | 是否是默认地址，0-不是默认地址，1-是默认地址; | - | - |
| 3 | data.address_list.address.province_name | ProvinceName | - | 2 | 北京市 | 省的名称; | - | - |
| 3 | data.address_list.address.street_id | StreetId | - | 99 | 110108012 | 街道ID; | - | - |
| 3 | data.address_list.address.link_type | LinkType | - | 99 | 2 | 联系方式类型; | - | - |
| 3 | data.address_list.address.common_phone | CommonPhone | - | 5 | - | 普通座机;22: CommonPhone Comm | - | R1 |
| 4 | data.address_list.address.common_phone.area_num | AreaNum | - | 2 | 400 | 区号; | - | - |
| 4 | data.address_list.address.common_phone.main_num | MainNum | - | 2 | 8888111 | 主机号; | - | - |
| 4 | data.address_list.address.common_phone.auxiliary_num | AuxiliaryNum | - | 2 | 1234 | 分机号; | - | - |
| 4 | data.address_list.address.common_phone.num | Num | - | 2 | 40088881111234 | 拼接之后的联系方式; | - | - |
| 3 | data.address_list.address.create_time | CreateTime | - | 2 | 2024-09-25 16:33:15 | 创建时间; | - | - |
| 3 | data.address_list.address.city_id | CityId | - | 99 | 110000 | 城市ID; | - | - |
| 3 | data.address_list.address.biz_type | BizType | - | 99 | 0 | 业务类型 0:抖店店铺 1:门店 | - | - |
| 3 | data.address_list.address.user_name | UserName | - | 2 | xiaoming | 售后地址联系人; | - | - |
| 3 | data.address_list.address.mobile | Mobile | - | 2 | 400-8888111-1234 | 默认联系方式，如果是手机，这里展示手机号；如果默认联系方式选择固定电话，这里是固定电话; | - | - |
| 3 | data.address_list.address.city_name | CityName | - | 2 | 北京市 | 城市名称; | - | - |
| 3 | data.address_list.address.after_sale_note | AfterSaleNote | - | 2 | 测试备注 | 售后备注 | - | - |
| 3 | data.address_list.address.shop_id | ShopId | - | 99 | 77977 | 店铺ID; | - | - |
| 3 | data.address_list.address.is_send_default | IsSendDefault | - | 99 | 1 | 是否是默认发货地址; | - | - |
| 3 | data.address_list.address.update_time | UpdateTime | - | 2 | 2024-09-25 22:04:14 | 更新时间; | - | - |
| 3 | data.address_list.address.detail | Detail | - | 2 | 花园路牡丹园中兴大厦 | 详细地址; | - | - |
| 3 | data.address_list.address.province_id | ProvinceId | - | 99 | 11 | 省ID; | - | - |
| 3 | data.address_list.address.town_id | TownId | - | 99 | 110108 | 区\县ID; | - | - |
| 3 | data.address_list.address.town_name | TownName | - | 2 | 海淀区 | 区\县名称; | - | - |
| 3 | data.address_list.address.biz_id | BizId | - | 99 | 0 | 业务id，如门店ID | - | - |
| 3 | data.address_list.address.address | Address | - | 2 | 北京市北京市海淀区海淀街道花园路牡丹园中兴大厦 | 地址,详细地址; | - | - |
| 3 | data.address_list.address.company_phone | CompanyPhone | - | 5 | - | 企业座机; | - | R1 |
| 4 | data.address_list.address.company_phone.phone_num | PhoneNum | - | 2 | 40088881111234 | 联系方式号码; | - | - |
| 4 | data.address_list.address.company_phone.num | Num | - | 2 | 40088881111234 | 拼接之后的联系方式; | - | - |
| 3 | data.address_list.address.phone | Phone | - | 2 | 13288889999 | 手机号，商家后台填写的手机号; | - | - |
| 1 | data.update_time | UpdateTime | - | 99 | 1727271436 | 更新时间; | - | - |
| 1 | data.shop_id | ShopId | - | 99 | 77977 | 店铺ID; | - | - |
| 1 | data.strategy_id | StrategyId | - | 2 | AFS7418493389946110223 | 策略id; | - | - |
| 1 | data.createtime | Createtime | - | 99 | 1727252654 | 创建时间; | - | - |
| 1 | data.related_product_count | related_product_count | - | 99 | 1 | 已关联商品数量 | - | - |
| 1 | data.strategy_type | StrategyType | - | 99 | 1 | 策略类型; | - | - |
| 1 | data.strategy_description | StrategyDescription | - | 2 | 所有收货地区使用同一个退货地址 | 策略描述; | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/address/getAftersaleStrategy?app_key=your_appkey_here&method=address.getAftersaleStrategy&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/address/getAftersaleStrategy?app_key=your_appkey_here&method=address.getAftersaleStrategy&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AddressGetAftersaleStrategyRequest request = new AddressGetAftersaleStrategyRequest();
AddressGetAftersaleStrategyParam param = request.getParam();
param.setStrategyId("必填，策略ID");
AddressGetAftersaleStrategyResponse response = request.execute(accessToken);

```

### php

```php
$request = new AddressGetAftersaleStrategyRequest();
$param = new AddressGetAftersaleStrategyParam();
$request->setParam($param);
$param->strategy_id = "必填，策略ID";
$response = $request->execute(accessToken);

```

### python

```python
request = AddressGetAftersaleStrategyRequest()
param = request.getParams()
param.strategy_id = "必填，策略ID"
response = request.execute(accessToken)

```

### go

```go
request := address_getAftersaleStrategy_request.New()
param := request.GetParams()
param.StrategyId = "必填，策略ID"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AddressGetAftersaleStrategyRequest();
var param = request.BuildParam();
param.StrategyId = "必填，策略ID";
var response = request.Execute<AddressGetAftersaleStrategyResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4000 | 请输入正确的参数 | 根据返回信息调整输入参数，如果多次调整后无法对接，可以寻求抖店帮助 |
| 50002 | 业务处理失败 | isv.business-failed:3000 | 系统繁忙，请稍后重试 | 重试，如果多次重试无法对接，可以通过提开放平台工单。 |
| 50002 | 业务处理失败 | isv.business-failed:5001 | 系统繁忙，请稍后重试 | 重试，如果多次重试无法对接，可以通过提开放平台工单。 |
| 50002 | 业务处理失败 | isv.business-failed:100011 | 系统繁忙，请稍后重试 | 重试，如果多次重试无法对接，可以通过提开放平台工单。 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
