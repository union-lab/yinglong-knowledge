# /address/listAftersaleStrategy

> 中文说明：地址策略列表接口  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/6907>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /address/listAftersaleStrategy |
| 中文名称 | 地址策略列表接口 |
| 文档目录 | 售后退款API |
| Article ID | 6907 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/10/8 11:00:59 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

通过翻页方式获取商家已创建的地址策略，当前最多支持获取1000条。

## 权限包

- 售后 / 售后地址退货策略（packageType=1）；适用应用类目：售后管理、商家后台系统、订单管理、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | address.listAftersaleStrategy | 调用的API接口名称 | - | - |
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
| 0 | order_by_field | OrderByField | false | 2 | create_time | 排序的字段;create_time-创建时间; update_time-更新时间; | - | - |
| 0 | size | Size | false | 99 | 20 | 每页的条数, 每页最大不超过20个。当前单个商家只允许创建1000条策略，page * size > 1000会被拦截。 | - | - |
| 0 | order_by | OrderBy | false | 2 | asc | 升序还是排序；asc-升序；desc-降序; | - | - |
| 0 | page | Page | false | 99 | 1 | 页码， 从1开始,表示第1页; | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | size | Size | - | 99 | 2 | 每页数量; | - | - |
| 0 | strategy_list | StrategyList | - | 3 | - | 策略列表; | - | R1 |
| 1 | strategy_list.strategy_id | StrategyId | - | 2 | AFS7418493389946110223 | 策略id; | - | - |
| 1 | strategy_list.address_list | AddressList | - | 3 | - | 售后策略绑定的地址列表; | - | R1 |
| 2 | strategy_list.address_list.address | Address | - | 5 | - | 具体地址信息; | - | R1 |
| 3 | strategy_list.address_list.address.update_time | UpdateTime | - | 2 | 2024-09-25 16:38:47 | 地址更新时间; | - | - |
| 3 | strategy_list.address_list.address.company_phone | CompanyPhone | - | 5 | - | 企业座机; | - | R1 |
| 4 | strategy_list.address_list.address.company_phone.phone_num | PhoneNum | - | 2 | 40088881111234 | 联系方式号码; | - | - |
| 4 | strategy_list.address_list.address.company_phone.num | Num | - | 2 | 40088881111234 | 拼接之后的联系方式; | - | - |
| 3 | strategy_list.address_list.address.id | Id | - | 99 | 32693731 | 自增ID, 也是地址的ID; | - | - |
| 3 | strategy_list.address_list.address.is_default | IsDefault | - | 99 | 1 | 是否是默认地址，0-不是默认地址，1-是默认地址; | - | - |
| 3 | strategy_list.address_list.address.city_name | CityName | - | 2 | 北京市 | 城市名称; | - | - |
| 3 | strategy_list.address_list.address.mobile | Mobile | - | 2 | 0635-5781308 | 默认联系方式，如果是手机，这里展示手机号；如果默认联系方式选择固定电话，这里是固定电话; | - | - |
| 3 | strategy_list.address_list.address.province_id | ProvinceId | - | 99 | 11 | 省ID; | - | - |
| 3 | strategy_list.address_list.address.error_type | ErrorType | - | 99 | 0 | 地址异常信息 | - | - |
| 3 | strategy_list.address_list.address.biz_type | BizType | - | 99 | 0 | 业务类型 0:抖店店铺 1:门店 | - | - |
| 3 | strategy_list.address_list.address.phone | Phone | - | 2 | 13288889999 | 手机号，商家后台填写的手机号; | - | - |
| 3 | strategy_list.address_list.address.after_sale_note | AfterSaleNote | - | 2 | 拒绝到付 | 售后备注 | - | - |
| 3 | strategy_list.address_list.address.shop_id | ShopId | - | 99 | 77977 | 店铺ID; | - | - |
| 3 | strategy_list.address_list.address.address | Address | - | 2 | 北京市北京市海淀区海淀街道花园路牡丹园中兴大厦 | 地址,详细地址; | - | - |
| 3 | strategy_list.address_list.address.street_id | StreetId | - | 99 | 110108012 | 街道ID; | - | - |
| 3 | strategy_list.address_list.address.street_name | StreetName | - | 2 | 海淀街道 | 街道名称; | - | - |
| 3 | strategy_list.address_list.address.town_id | TownId | - | 99 | 110108 | 区\县ID; | - | - |
| 3 | strategy_list.address_list.address.biz_id | BizId | - | 99 | 0 | 业务id，如门店ID | - | - |
| 3 | strategy_list.address_list.address.is_send_default | IsSendDefault | - | 99 | 1 | 是否是默认发货地址;0-不是，1-是 | - | - |
| 3 | strategy_list.address_list.address.create_time | CreateTime | - | 2 | 2024-09-25 16:33:15 | 地址创建时间; | - | - |
| 3 | strategy_list.address_list.address.province_name | ProvinceName | - | 2 | 北京市 | 省的名称; | - | - |
| 3 | strategy_list.address_list.address.town_name | TownName | - | 2 | 海淀区 | 区\县名称; | - | - |
| 3 | strategy_list.address_list.address.link_type | LinkType | - | 99 | 1 | 联系方式类型;0-手机，1-普通座机，2-企业座机 | - | - |
| 3 | strategy_list.address_list.address.user_name | UserName | - | 2 | xiaoming | 售后地址联系人; | - | - |
| 3 | strategy_list.address_list.address.city_id | CityId | - | 99 | 110000 | 城市ID; | - | - |
| 3 | strategy_list.address_list.address.detail | Detail | - | 2 | 花园路牡丹园中兴大厦 | 详细地址; | - | - |
| 3 | strategy_list.address_list.address.common_phone | CommonPhone | - | 5 | - | 普通座机;22: CommonPhone Comm | - | R1 |
| 4 | strategy_list.address_list.address.common_phone.area_num | AreaNum | - | 2 | 0635 | 区号; | - | - |
| 4 | strategy_list.address_list.address.common_phone.main_num | MainNum | - | 2 | 5781308 | 主机号; | - | - |
| 4 | strategy_list.address_list.address.common_phone.auxiliary_num | AuxiliaryNum | - | 2 | 1111 | 分机号; | - | - |
| 4 | strategy_list.address_list.address.common_phone.num | Num | - | 2 | 0635-5781308-1111 | 拼接之后的联系方式; | - | - |
| 1 | strategy_list.related_product_count | related_product_count | - | 99 | 1 | 已关联商品数量 | - | - |
| 1 | strategy_list.strategy_name | StrategyName | - | 2 | 静态策略-1 | 策略名称 | - | - |
| 1 | strategy_list.createtime | Createtime | - | 99 | 1727252654 | 策略创建时间; | - | - |
| 1 | strategy_list.update_time | UpdateTime | - | 99 | 1727253300 | 策略更新时间; | - | - |
| 1 | strategy_list.shop_id | ShopId | - | 99 | 77977 | 店铺ID; | - | - |
| 1 | strategy_list.strategy_type | StrategyType | - | 99 | 1 | 策略类型;1-固定退货地址，2-动态退货地址 | - | - |
| 1 | strategy_list.strategy_type_name | StrategyTypeName | - | 2 | 固定退货地址 | 策略类型描述; | - | - |
| 1 | strategy_list.strategy_description | StrategyDescription | - | 2 | 所有收货地区使用同一个退货地址 | 策略描述; | - | - |
| 0 | total | Total | - | 99 | 12 | 总量; | - | - |
| 0 | page | Page | - | 99 | 1 | 页数; | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/address/listAftersaleStrategy?app_key=your_appkey_here&method=address.listAftersaleStrategy&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/address/listAftersaleStrategy?app_key=your_appkey_here&method=address.listAftersaleStrategy&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AddressListAftersaleStrategyRequest request = new AddressListAftersaleStrategyRequest();
AddressListAftersaleStrategyParam param = request.getParam();
param.setOrderByField("create_time");
param.setSize(20L);
param.setOrderBy("asc");
param.setPage(1L);
AddressListAftersaleStrategyResponse response = request.execute(accessToken);

```

### php

```php
$request = new AddressListAftersaleStrategyRequest();
$param = new AddressListAftersaleStrategyParam();
$request->setParam($param);
$param->order_by_field = "create_time";
$param->size = 20;
$param->order_by = "asc";
$param->page = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = AddressListAftersaleStrategyRequest()
param = request.getParams()
param.order_by_field = "create_time"
param.size = 20
param.order_by = "asc"
param.page = 1
response = request.execute(accessToken)

```

### go

```go
request := address_listAftersaleStrategy_request.New()
param := request.GetParams()
param.OrderByField = "create_time"
param.Size = 20
param.OrderBy = "asc"
param.Page = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AddressListAftersaleStrategyRequest();
var param = request.BuildParam();
param.OrderByField = "create_time";
param.Size = 20;
param.OrderBy = "asc";
param.Page = 1;
var response = request.Execute<AddressListAftersaleStrategyResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:5001 | 系统繁忙，请稍后重试 | 根据返回的错误信息调整参数进行重试，确认参数无问题并且重试不成功，在开放平台提工单咨询 |
| 40004 | 非法的参数 | isv.parameter-invalid:4000 | 请输入正确的参数 | 根据返回的错误信息调整参数进行重试，确认参数无问题并且重试不成功，在开放平台提工单咨询 |
| 50002 | 业务处理失败 | isv.business-failed:3000 | 系统繁忙，请稍后重试 | 根据返回的错误信息调整参数进行重试，确认参数无问题并且重试不成功，在开放平台提工单咨询 |
| 50002 | 业务处理失败 | isv.business-failed:7000 | 系统繁忙，请稍后重试 | 根据返回的错误信息调整参数进行重试，确认参数无问题并且重试不成功，在开放平台提工单咨询 |
| 50002 | 业务处理失败 | isv.business-failed:100011 | 系统繁忙，请稍后重试 | 根据返回的错误信息调整参数进行重试，确认参数无问题并且重试不成功，在开放平台提工单咨询 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
