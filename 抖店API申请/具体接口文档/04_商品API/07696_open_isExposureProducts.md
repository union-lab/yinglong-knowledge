# /open/isExposureProducts

> 中文说明：是否曝光商品  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/7696>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /open/isExposureProducts |
| 中文名称 | 是否曝光商品 |
| 文档目录 | 商品API |
| Article ID | 7696 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/8/14 14:56:20 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5 |

## 使用说明

是否曝光商品

## 权限包

- 商品 / 商品曝光（主图视频）（packageType=1）；适用应用类目：AIGC视频洞察、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | open.isExposureProducts | 调用的API接口名称 | - | - |
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
| 0 | product_id_list | productIdList | true | 3 | [1234,567] | 商品id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | is_exposure_map | isExposureMap | - | 8 | {"123":0, "456":1} | 结果集，key商品id；value结果 0-没有曝光 1-有曝光 2-高曝光 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/open/isExposureProducts?app_key=your_appkey_here&method=open.isExposureProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/open/isExposureProducts?app_key=your_appkey_here&method=open.isExposureProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OpenIsExposureProductsRequest request = new OpenIsExposureProductsRequest();
OpenIsExposureProductsParam param = request.getParam();
param.setProductIdList([1234,567]);
OpenIsExposureProductsResponse response = request.execute(accessToken);

```

### php

```php
$request = new OpenIsExposureProductsRequest();
$param = new OpenIsExposureProductsParam();
$request->setParam($param);
$param->product_id_list = [1234,567];
$response = $request->execute(accessToken);

```

### python

```python
request = OpenIsExposureProductsRequest()
param = request.getParams()
param.product_id_list = [1234,567]
response = request.execute(accessToken)

```

### go

```go
request := open_isExposureProducts_request.New()
param := request.GetParams()
param.ProductIdList = [1234,567]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OpenIsExposureProductsRequest();
var param = request.BuildParam();
param.ProductIdList = [1234,567];
var response = request.Execute<OpenIsExposureProductsResponse>(accessToken);

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
