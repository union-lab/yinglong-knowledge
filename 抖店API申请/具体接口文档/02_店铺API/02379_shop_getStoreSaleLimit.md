# /shop/getStoreSaleLimit

> 中文说明：获取门店绑定的限售模版  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2379>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/getStoreSaleLimit |
| 中文名称 | 获取门店绑定的限售模版 |
| 文档目录 | 店铺API |
| Article ID | 2379 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/2/26 16:31:39 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

获取门店绑定的限售模版

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 抖店超市 / 门店限售模板管理（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 到家餐饮 / 配送信息（外卖）（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.getStoreSaleLimit | 调用的API接口名称 | - | - |
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

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | store_sale_limits | storeSaleLimits | - | 3 | - | 门店关联的限售模版 | - | R1 |
| 1 | store_sale_limits.store_id | storeId | - | 99 | 123 | 门店id | - | R1 |
| 1 | store_sale_limits.sale_limit_id | SaleLimitId | - | 99 | 123 | 模版id | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shop/getStoreSaleLimit?app_key=your_appkey_here&method=shop.getStoreSaleLimit&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shop/getStoreSaleLimit?app_key=your_appkey_here&method=shop.getStoreSaleLimit&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopGetStoreSaleLimitRequest request = new ShopGetStoreSaleLimitRequest();
ShopGetStoreSaleLimitParam param = request.getParam();
param.setStoreId(123L);
ShopGetStoreSaleLimitResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopGetStoreSaleLimitRequest();
$param = new ShopGetStoreSaleLimitParam();
$request->setParam($param);
$param->store_id = 123;
$response = $request->execute(accessToken);

```

### python

```python
request = ShopGetStoreSaleLimitRequest()
param = request.getParams()
param.store_id = 123
response = request.execute(accessToken)

```

### go

```go
request := shop_getStoreSaleLimit_request.New()
param := request.GetParams()
param.StoreId = 123
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopGetStoreSaleLimitRequest();
var param = request.BuildParam();
param.StoreId = 123;
var response = request.Execute<ShopGetStoreSaleLimitResponse>(accessToken);

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

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
