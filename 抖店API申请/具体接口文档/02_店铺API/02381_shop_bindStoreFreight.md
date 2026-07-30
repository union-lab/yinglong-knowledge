# /shop/bindStoreFreight

> 中文说明：门店绑定运费模版  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2381>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/bindStoreFreight |
| 中文名称 | 门店绑定运费模版 |
| 文档目录 | 店铺API |
| Article ID | 2381 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/2/26 16:34:58 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

门店绑定运费模版，运费模版必须属于门店关联的抖店，且门店与运费模版是一对一关系

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 抖店超市 / 门店运费模板管理（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.bindStoreFreight | 调用的API接口名称 | - | - |
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
| 0 | freight_id | freightId | true | 99 | 123 | 运费模版ID | - | - |

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
ShopBindStoreFreightRequest request = new ShopBindStoreFreightRequest();
ShopBindStoreFreightParam param = request.getParam();
param.setStoreId(123L);
param.setFreightId(123L);
ShopBindStoreFreightResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopBindStoreFreightRequest();
$param = new ShopBindStoreFreightParam();
$request->setParam($param);
$param->store_id = 123;
$param->freight_id = 123;
$response = $request->execute(accessToken);

```

### python

```python
request = ShopBindStoreFreightRequest()
param = request.getParams()
param.store_id = 123
param.freight_id = 123
response = request.execute(accessToken)

```

### go

```go
request := shop_bindStoreFreight_request.New()
param := request.GetParams()
param.StoreId = 123
param.FreightId = 123
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopBindStoreFreightRequest();
var param = request.BuildParam();
param.StoreId = 123;
param.FreightId = 123;
var response = request.Execute<ShopBindStoreFreightResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1 | 参数异常 | 检查下参数 |
| 50002 | 业务处理失败 | isv.business-failed:2 | 2:获取模版信息失败 | 2:获取模版信息失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
