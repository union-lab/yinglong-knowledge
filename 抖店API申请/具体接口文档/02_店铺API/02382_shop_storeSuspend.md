# /shop/storeSuspend

> 中文说明：暂停营业  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2382>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/storeSuspend |
| 中文名称 | 暂停营业 |
| 文档目录 | 店铺API |
| Article ID | 2382 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/2/26 16:30:13 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

暂停营业

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 抖店超市 / 门店管理（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.storeSuspend | 调用的API接口名称 | - | - |
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
| 0 | reason | reason | false | 2 | 123 | 停业原因 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | ret_code | retCode | - | 99 | 0 | 返回错误码 | - | R1 |
| 0 | ret_msg | retMsg | - | 2 | - | - | - | R1 |

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
ShopStoreSuspendRequest request = new ShopStoreSuspendRequest();
ShopStoreSuspendParam param = request.getParam();
param.setStoreId(123L);
param.setReason("123");
ShopStoreSuspendResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopStoreSuspendRequest();
$param = new ShopStoreSuspendParam();
$request->setParam($param);
$param->store_id = 123;
$param->reason = "123";
$response = $request->execute(accessToken);

```

### python

```python
request = ShopStoreSuspendRequest()
param = request.getParams()
param.store_id = 123
param.reason = "123"
response = request.execute(accessToken)

```

### go

```go
request := shop_storeSuspend_request.New()
param := request.GetParams()
param.StoreId = 123
param.Reason = "123"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopStoreSuspendRequest();
var param = request.BuildParam();
param.StoreId = 123;
param.Reason = "123";
var response = request.Execute<ShopStoreSuspendResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:8 | 8:门店不存在 | 检查id |
| 50002 | 业务处理失败 | isv.business-failed:13 | 13:非正常营业或停业的门店不可暂停营业 | 非正常营业或停业的门店不可暂停营业 |
| 50002 | 业务处理失败 | isv.business-failed:2 | 2:操作太频繁，请稍后重试~ | 2:操作太频繁，请稍后重试~ |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
