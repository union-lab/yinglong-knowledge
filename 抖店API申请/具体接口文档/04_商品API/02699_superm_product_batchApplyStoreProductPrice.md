# /superm/product/batchApplyStoreProductPrice

> 中文说明：将店铺主品的价格应用至门店子品 (异步执行)  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2699>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /superm/product/batchApplyStoreProductPrice |
| 中文名称 | 将店铺主品的价格应用至门店子品 (异步执行) |
| 文档目录 | 商品API |
| Article ID | 2699 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/11/2 16:45:18 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

将店铺主品的价格应用至门店子品 (异步执行)

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | superm.product/batchApplyStoreProductPrice | 调用的API接口名称 | - | - |
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
| 0 | task_params | apply_price_param | true | 5 | - | 异步任务参数 | - | - |
| 1 | task_params.main_product_id | main_product_id | true | 1 | 3576410646054571500 | 店铺主商品ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | root_task_id | root_task_id | - | 1 | 7158439918014824735 | 异步任务根任务ID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/superm/product/batchApplyStoreProductPrice?app_key=your_appkey_here&method=superm.product.batchApplyStoreProductPrice&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/superm/product/batchApplyStoreProductPrice?app_key=your_appkey_here&method=superm.product.batchApplyStoreProductPrice&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SupermProductBatchApplyStoreProductPriceRequest request = new SupermProductBatchApplyStoreProductPriceRequest();
SupermProductBatchApplyStoreProductPriceParam param = request.getParam();
SupermProductBatchApplyStoreProductPriceResponse response = request.execute(accessToken);

```

### php

```php
$request = new SupermProductBatchApplyStoreProductPriceRequest();
$param = new SupermProductBatchApplyStoreProductPriceParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = SupermProductBatchApplyStoreProductPriceRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := superm_product_batchApplyStoreProductPrice_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SupermProductBatchApplyStoreProductPriceRequest();
var param = request.BuildParam();
var response = request.Execute<SupermProductBatchApplyStoreProductPriceResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:功能尚未开放 | 联系运营开通为抖音超市二期商家 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
