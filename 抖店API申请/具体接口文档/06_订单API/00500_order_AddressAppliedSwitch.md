# /order/AddressAppliedSwitch

> 中文说明：支持调用后打开（或关闭）卖家针对买家收货地址变更的审核流程  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/500>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/AddressAppliedSwitch |
| 中文名称 | 支持调用后打开（或关闭）卖家针对买家收货地址变更的审核流程 |
| 文档目录 | 订单API |
| Article ID | 500 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/6/24 14:06:49 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

支持调用后打开（或关闭）卖家针对买家收货地址变更的审核流程

## 权限包

- 订单 / 订单编辑（packageType=1）；适用应用类目：卡券商工具、COD服务、跨境供应链服务、跨境电商、售后管理、打单发货-微应用、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.AddressAppliedSwitch | 调用的API接口名称 | - | - |
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
| 0 | is_allowed | Switch | true | 99 | 1 | 0代表关闭，不需要审核 1代表开启审核，买家变更需要审核 | - | - |
| 0 | review_type | ReviewType | false | 99 | 1 | 0代表异步审核，1表示实时审核 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/AddressAppliedSwitch?app_key=your_appkey_here&method=order.AddressAppliedSwitch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/AddressAppliedSwitch?app_key=your_appkey_here&method=order.AddressAppliedSwitch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderAddressAppliedSwitchRequest request = new OrderAddressAppliedSwitchRequest();
OrderAddressAppliedSwitchParam param = request.getParam();
param.setIsAllowed(1L);
param.setReviewType(1L);
OrderAddressAppliedSwitchResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderAddressAppliedSwitchRequest();
$param = new OrderAddressAppliedSwitchParam();
$request->setParam($param);
$param->is_allowed = 1;
$param->review_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderAddressAppliedSwitchRequest()
param = request.getParams()
param.is_allowed = 1
param.review_type = 1
response = request.execute(accessToken)

```

### go

```go
request := order_AddressAppliedSwitch_request.New()
param := request.GetParams()
param.IsAllowed = 1
param.ReviewType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderAddressAppliedSwitchRequest();
var param = request.BuildParam();
param.IsAllowed = 1;
param.ReviewType = 1;
var response = request.Execute<OrderAddressAppliedSwitchResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:20003 | 系统异常，请重试 | - |
| 50002 | 业务处理失败 | isv.business-failed:30002 | 开通失败，当前应用未接入spi接口 | - |
| 50002 | 业务处理失败 | isv.business-failed:50044 | 关闭失败，无权关闭该权限 | - |
| 50002 | 业务处理失败 | isv.business-failed:50045 | 开启失败，已存在有权限审核改地址的应用 | - |
| 50002 | 业务处理失败 | isv.business-failed:20001 | 服务器开小差了，请稍后重试 | 请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
