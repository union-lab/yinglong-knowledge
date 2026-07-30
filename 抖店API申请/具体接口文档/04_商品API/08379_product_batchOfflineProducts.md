# /product/batchOfflineProducts

> 中文说明：批量下架商品接口  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/8379>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/batchOfflineProducts |
| 中文名称 | 批量下架商品接口 |
| 文档目录 | 商品API |
| Article ID | 8379 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/6/25 11:39:17 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

批量下架商品接口，一次请求最多不要超过100个商品。

## 权限包

- 商品 / 商品上下架（packageType=1）；适用应用类目：选品铺货-微应用、卡券商工具、撮合服务商、AI拼图-微应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、测试类目、即时零售商家自研、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.batchOfflineProducts | 调用的API接口名称 | - | - |
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
| 0 | product_ids | productIds | true | 3 | [123456,777888] | 商品id列表 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | resp_list | respList | - | 3 | - | 下架结果列表 | - | R1 |
| 1 | resp_list.product_id | productId | - | 2 | 111222 | 商品id | - | - |
| 1 | resp_list.code | code | - | 99 | 0 | 错误码（0为成功） | - | - |
| 1 | resp_list.msg | msg | - | 2 | 成功 | 错误信息 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/batchOfflineProducts?app_key=your_appkey_here&method=product.batchOfflineProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/batchOfflineProducts?app_key=your_appkey_here&method=product.batchOfflineProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductBatchOfflineProductsRequest request = new ProductBatchOfflineProductsRequest();
ProductBatchOfflineProductsParam param = request.getParam();
param.setProductIds([123456,777888]);
ProductBatchOfflineProductsResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductBatchOfflineProductsRequest();
$param = new ProductBatchOfflineProductsParam();
$request->setParam($param);
$param->product_ids = [123456,777888];
$response = $request->execute(accessToken);

```

### python

```python
request = ProductBatchOfflineProductsRequest()
param = request.getParams()
param.product_ids = [123456,777888]
response = request.execute(accessToken)

```

### go

```go
request := product_batchOfflineProducts_request.New()
param := request.GetParams()
param.ProductIds = [123456,777888]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductBatchOfflineProductsRequest();
var param = request.BuildParam();
param.ProductIds = [123456,777888];
var response = request.Execute<ProductBatchOfflineProductsResponse>(accessToken);

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
