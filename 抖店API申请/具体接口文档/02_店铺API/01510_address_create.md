# /address/create

> 中文说明：创建店铺地址库  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/1510>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /address/create |
| 中文名称 | 创建店铺地址库 |
| 文档目录 | 店铺API |
| Article ID | 1510 |
| 文档版本 | V2.03 |
| 官方更新时间 | 2023/10/19 10:42:43 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

创建店铺地址库

## 权限包

- 店铺 / 商家地址列表查询（packageType=1）；适用应用类目：独立部署、COD服务、售后管理、打单发货-微应用、创新应用大赛_软件服务、厂商代发、云仓本地部署、仓储管理、商家后台系统、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、商品供应链、电商ERP
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | address.create | 调用的API接口名称 | - | - |
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
| 0 | address | Address | true | 5 | - | 地址信息 | - | - |
| 1 | address.user_name | UserName | true | 2 | 张三 | 联系人姓名 | - | - |
| 1 | address.mobile | Mobile | false | 2 | 18012345678 | 手机号码 | - | - |
| 1 | address.province_id | ProvinceId | true | 1 | 32 | 省份ID | - | - |
| 1 | address.city_id | CityId | true | 1 | 330700 | 城市ID | - | - |
| 1 | address.town_id | TownId | true | 1 | 330782 | 区ID | - | - |
| 1 | address.detail | Detail | true | 2 | xxxxx | 详细地址 | - | - |
| 1 | address.street_id | StreetId | true | 1 | 330782003 | 街道ID | - | - |
| 1 | address.link_type | LinkType | true | 7 | 0-手机,1-普通座机,2-企业座机 | 联系方式类型(0-手机,1-普通座机,2-企业座机) | - | - |
| 1 | address.fixed_phone | FixedPhone | false | 2 | 普通座机：400-12345678-1234，企业座机：40012345 | 普通座机格式：区号-座机号-分机号(分机号选填)、区号3~4位、座机号7~8位、分机号不超过5位。企业座机：400/800开头不超过10位、95开头在5~8we | - | - |
| 1 | address.remark | AfterSaleNote | false | 2 | 拒收到付 | 售后备注，限制200字符 | - | - |
| 0 | store_id | StoreId | false | 1 | 123 | 门店ID（新建地址绑定在该门店下，非门店场景无需填写） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | address_id | AddressId | - | 1 | 10000 | 新建地址ID | 102 | R1 |

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
AddressCreateRequest request = new AddressCreateRequest();
AddressCreateParam param = request.getParam();
param.setStoreId(123L);
AddressCreateResponse response = request.execute(accessToken);

```

### php

```php
$request = new AddressCreateRequest();
$param = new AddressCreateParam();
$request->setParam($param);
$param->store_id = 123;
$response = $request->execute(accessToken);

```

### python

```python
request = AddressCreateRequest()
param = request.getParams()
param.store_id = 123
response = request.execute(accessToken)

```

### go

```go
request := address_create_request.New()
param := request.GetParams()
param.StoreId = 123
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AddressCreateRequest();
var param = request.BuildParam();
param.StoreId = 123;
var response = request.Execute<AddressCreateResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:100003 | 已达到50条新建地址上限 | 删除多余 |
| 40004 | 非法的参数 | isv.parameter-invalid:100002 | 已有对应的记录:${address_id} | 可获取错误信息中已存在的address_id |
| 40004 | 非法的参数 | isv.parameter-invalid:6000 | 系统繁忙，请稍后重试 | 系统繁忙，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4000 | 联系人不能超过32字 | 请修改联系人信息 |
| 50002 | 业务处理失败 | isv.business-failed:100001 | 操作过于频繁，请稍后重试 | 操作过于频繁，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:100009 | 暂不支持该区号 | 暂不支持该区号 |
| 50002 | 业务处理失败 | isv.business-failed:5001 | 系统繁忙，请稍后重试 | 系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:4002 | 4002:地址详细信息中存在冗余内容【(开了扣眼修改过吊牌损坏以及穿过洗过等影响二次销售不予退换货)转】，需将地址详细信息精简为【暄悦东街24号1楼T2】后再重新提交 | 4002:地址详细信息中存在冗余内容【(开了扣眼修改过吊牌损坏以及穿过洗过等影响二次销售不予退换货)转】，需将地址详细信息精简为【暄悦东街24号1楼T2】后再重新提交 |
| 50002 | 业务处理失败 | isv.business-failed:4001 | 4001:当前输入的地址未精确到村、组、门牌号、楼栋、支路等，请核查修改后提交。 | 4001:当前输入的地址未精确到村、组、门牌号、楼栋、支路等，请核查修改后提交。 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
