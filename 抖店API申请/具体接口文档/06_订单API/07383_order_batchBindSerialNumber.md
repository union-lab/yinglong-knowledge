# /order/batchBindSerialNumber

> 中文说明：上传序列号  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/7383>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/batchBindSerialNumber |
| 中文名称 | 上传序列号 |
| 文档目录 | 订单API |
| Article ID | 7383 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/3/27 15:34:43 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

上传序列号

## 权限包

- 订单 / 订单编辑（packageType=1）；适用应用类目：卡券商工具、COD服务、跨境供应链服务、跨境电商、售后管理、打单发货-微应用、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.batchBindSerialNumber | 调用的API接口名称 | - | - |
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
| 0 | bind_list | BindList | false | 3 | - | 绑定列表; | - | - |
| 1 | bind_list.shop_order_id | ShopOrderId | false | 2 | "6940658920780535662" | 订单号; | - | - |
| 1 | bind_list.sku_order_id | SkuOrderId | false | 2 | "6940658920780535662" | Sku单号; | - | - |
| 1 | bind_list.serial_no_list | SerialNoList | false | 3 | - | 序列号信息; | - | - |
| 2 | bind_list.serial_no_list.value | Value | false | 3 | {"1","2"} | 序列号相关的信息; | - | - |
| 2 | bind_list.serial_no_list.key | Key | false | 2 | "SN" | 序列号类型,SN - SN码，69 - 69码，IMEI - IMEI码;<br>对于空调国补，内机SN对应SN_INDOOR，外机SN对应SN_OUTDOOR | - | - |
| 0 | bind_scene | BindScene | false | 7 | 1 | 绑定场景 <br>1 // 发货后<br> 2 // 发货前 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total_fail_bind_cnt | TotalFailBindCnt | - | 1 | 1 | 绑定失败的数量; | - | - |
| 0 | success_bind_list | SuccessBindList | - | 3 | - | 成功绑定的列表; | - | R1 |
| 1 | success_bind_list.shop_order_id | ShopOrderId | - | 2 | "6940658920780535662" | 店铺单单号： | - | - |
| 1 | success_bind_list.sku_order_id | SkuOrderId | - | 2 | "6940658920780535662" | sku单单号; | - | - |
| 1 | success_bind_list.fail_reason | FailReason | - | 2 | "参数错误" | 失败原因; | - | - |
| 1 | success_bind_list.fail_code | FailCode | - | 2 | "2001" | 失败原因的code; | - | - |
| 0 | fail_bind_list | FailBindList | - | 3 | - | 绑定失败的列表; | - | R1 |
| 1 | fail_bind_list.fail_code | FailCode | - | 2 | "2001" | 失败原因的code; | - | - |
| 1 | fail_bind_list.shop_order_id | ShopOrderId | - | 2 | "6940658920780535662" | 店铺单单号： | - | - |
| 1 | fail_bind_list.sku_order_id | SkuOrderId | - | 2 | "6940658920780535662" | sku单单号; | - | - |
| 1 | fail_bind_list.fail_reason | FailReason | - | 2 | "参数错误" | 失败原因; | - | - |
| 0 | total_request_bind_cnt | TotalRequestBindCnt | - | 1 | 10 | 请求绑定的数量; | - | - |
| 0 | total_success_bind_cnt | TotalSuccessBindCnt | - | 1 | 5 | 成功绑定的数量; | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/addV2?app_key=your_appkey_here&method=product.addV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/addV2?app_key=your_appkey_here&method=product.addV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderBatchBindSerialNumberRequest request = new OrderBatchBindSerialNumberRequest();
OrderBatchBindSerialNumberParam param = request.getParam();
param.setBindScene(1);
OrderBatchBindSerialNumberResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderBatchBindSerialNumberRequest();
$param = new OrderBatchBindSerialNumberParam();
$request->setParam($param);
$param->bind_scene = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderBatchBindSerialNumberRequest()
param = request.getParams()
param.bind_scene = 1
response = request.execute(accessToken)

```

### go

```go
request := order_batchBindSerialNumber_request.New()
param := request.GetParams()
param.BindScene = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderBatchBindSerialNumberRequest();
var param = request.BuildParam();
param.BindScene = 1;
var response = request.Execute<OrderBatchBindSerialNumberResponse>(accessToken);

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
