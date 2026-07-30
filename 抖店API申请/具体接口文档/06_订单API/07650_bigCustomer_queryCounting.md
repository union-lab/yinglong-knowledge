# /bigCustomer/queryCounting

> 中文说明：查询统计销量结果  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/7650>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /bigCustomer/queryCounting |
| 中文名称 | 查询统计销量结果 |
| 文档目录 | 订单API |
| Article ID | 7650 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/7/31 12:08:07 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

查询统计销量结果

## 权限包

- 行业产品 / wukong（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | bigCustomer.queryCounting | 调用的API接口名称 | - | - |
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
| 0 | items | Items | true | 3 | - | 查询列表（size <= 200） | - | - |
| 1 | items.product_id | ProductId | true | 1 | 3672279718683607404 | 平台商品ID | - | - |
| 1 | items.sku_id | SkuId | true | 1 | 3453363154713090 | 平台SkuId | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | items | Items | - | 3 | - | 计数返回结果 | - | R1 |
| 1 | items.start_time | StartTime | - | 1 | 1752076800 | 计数开始时间（秒级别时间戳） | - | - |
| 1 | items.end_time | EndTime | - | 1 | 1752940800 | 计数结束时间（秒级别时间戳） | - | - |
| 1 | items.product_id | ProductId | - | 1 | 3672279718683607404 | 平台商品ID | - | - |
| 1 | items.sku_id | SkuId | - | 1 | 3453363154713090 | 平台SkuId | - | - |
| 1 | items.commit_code | CommitCode | - | 2 | 9123 | 库存批次编码 | - | - |
| 1 | items.active_commit_code | ActiveCommitCode | - | 2 | 9123 | 生效中的库存批次编码（如果sku下架会返回空） | - | - |
| 1 | items.reserved_quantity | ReservedQuantity | - | 1 | 120 | 待支付订单库存数量 | - | - |
| 1 | items.paid_quantity | PaidQuantity | - | 1 | 3400 | 已付款订单库存数量 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/callback?app_key=your_appkey_here&method=logistics.callback&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/callback?app_key=your_appkey_here&method=logistics.callback&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BigCustomerQueryCountingRequest request = new BigCustomerQueryCountingRequest();
BigCustomerQueryCountingParam param = request.getParam();
BigCustomerQueryCountingResponse response = request.execute(accessToken);

```

### php

```php
$request = new BigCustomerQueryCountingRequest();
$param = new BigCustomerQueryCountingParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = BigCustomerQueryCountingRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := bigCustomer_queryCounting_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BigCustomerQueryCountingRequest();
var param = request.BuildParam();
var response = request.Execute<BigCustomerQueryCountingResponse>(accessToken);

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
