# /shop/editStore

> 中文说明：编辑门店  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2383>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/editStore |
| 中文名称 | 编辑门店 |
| 文档目录 | 店铺API |
| Article ID | 2383 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/2/26 16:33:59 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

编辑门店

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 抖店超市 / 门店管理（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.editStore | 调用的API接口名称 | - | - |
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
| 0 | store_id | storeId | true | 99 | 123 | 门店ID | - | - |
| 0 | name | name | false | 2 | xx门店 | 门店名 | - | - |
| 0 | store_code | storeCode | false | 2 | 123 | 自用编码 | - | - |
| 0 | longitude | longitude | false | 2 | 123 | 经度 | - | - |
| 0 | latitude | latitude | false | 2 | 123 | 纬度 | - | - |
| 0 | province | province | false | 2 | 四川省 | 省 | - | - |
| 0 | city | city | false | 2 | 成都市 | 市 | - | - |
| 0 | district | district | false | 2 | 高新区 | 区 | - | - |
| 0 | address | address | false | 2 | 天府小区12号 | 详细地址 | - | - |
| 0 | contact | contact | false | 2 | 123 | 电话 | - | - |
| 0 | open_time | openTime | false | 5 | - | 营业时间 | - | - |
| 1 | open_time.day_map | dayMap | true | 8 | {"1":"00:00-24:00","2":"00:00-24:00","3":"00:00-24:00","4":"00:00-24:00","5":"00:00-24:00","6":"00:00-24:00","7":"00:00-24:00"} | 营业时间 | - | - |

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
ShopEditStoreRequest request = new ShopEditStoreRequest();
ShopEditStoreParam param = request.getParam();
param.setStoreId(123L);
param.setName("xx门店");
param.setStoreCode("123");
param.setLongitude("123");
param.setLatitude("123");
param.setProvince("四川省");
param.setCity("成都市");
param.setDistrict("高新区");
param.setAddress("天府小区12号");
param.setContact("123");
ShopEditStoreResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopEditStoreRequest();
$param = new ShopEditStoreParam();
$request->setParam($param);
$param->store_id = 123;
$param->name = "xx门店";
$param->store_code = "123";
$param->longitude = "123";
$param->latitude = "123";
$param->province = "四川省";
$param->city = "成都市";
$param->district = "高新区";
$param->address = "天府小区12号";
$param->contact = "123";
$response = $request->execute(accessToken);

```

### python

```python
request = ShopEditStoreRequest()
param = request.getParams()
param.store_id = 123
param.name = "xx门店"
param.store_code = "123"
param.longitude = "123"
param.latitude = "123"
param.province = "四川省"
param.city = "成都市"
param.district = "高新区"
param.address = "天府小区12号"
param.contact = "123"
response = request.execute(accessToken)

```

### go

```go
request := shop_editStore_request.New()
param := request.GetParams()
param.StoreId = 123
param.Name = "xx门店"
param.StoreCode = "123"
param.Longitude = "123"
param.Latitude = "123"
param.Province = "四川省"
param.City = "成都市"
param.District = "高新区"
param.Address = "天府小区12号"
param.Contact = "123"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopEditStoreRequest();
var param = request.BuildParam();
param.StoreId = 123;
param.Name = "xx门店";
param.StoreCode = "123";
param.Longitude = "123";
param.Latitude = "123";
param.Province = "四川省";
param.City = "成都市";
param.District = "高新区";
param.Address = "天府小区12号";
param.Contact = "123";
var response = request.Execute<ShopEditStoreResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:8 | 8:门店不存在 | 请检查门店id |
| 50002 | 业务处理失败 | isv.business-failed:9 | 9:已有审核中的记录 | 请等待当前审核记录审核完成 |
| 50002 | 业务处理失败 | isv.business-failed:1 | 1:参数错误 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:19 | 19:每天营业时长不得低于4小时 | 修改营业时间 |
| 50002 | 业务处理失败 | isv.business-failed:2 | 2:资质送审失败,原因是：时间格式不正确，或时间刻度不为15min | 2:资质送审失败,原因是：时间格式不正确，或时间刻度不为15min |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
