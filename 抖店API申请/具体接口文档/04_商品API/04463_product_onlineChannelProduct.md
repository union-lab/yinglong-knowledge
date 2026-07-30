# /product/onlineChannelProduct

> 中文说明：上架渠道品  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4463>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/onlineChannelProduct |
| 中文名称 | 上架渠道品 |
| 文档目录 | 商品API |
| Article ID | 4463 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/8/29 17:00:22 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

上架渠道品

## 权限包

- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.onlineChannelProduct | 调用的API接口名称 | - | - |
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
| 0 | main_product_id | main_product_id | true | 1 | 3631537689540566918 | 主商品ID | - | - |
| 0 | channel_id | channel_id | true | 1 | 1775544218362132 | 渠道ID | - | - |
| 0 | channel_type | channel_type | true | 1 | 3 | 渠道类型。不支持修改。<br>3：商家自卖<br>4：达人带货 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/onlineChannelProduct?app_key=your_appkey_here&method=product.onlineChannelProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/onlineChannelProduct?app_key=your_appkey_here&method=product.onlineChannelProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductOnlineChannelProductRequest request = new ProductOnlineChannelProductRequest();
ProductOnlineChannelProductParam param = request.getParam();
param.setMainProductId(3631537689540566918L);
param.setChannelId(1775544218362132L);
param.setChannelType(3L);
ProductOnlineChannelProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductOnlineChannelProductRequest();
$param = new ProductOnlineChannelProductParam();
$request->setParam($param);
$param->main_product_id = 3631537689540566918;
$param->channel_id = 1775544218362132;
$param->channel_type = 3;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductOnlineChannelProductRequest()
param = request.getParams()
param.main_product_id = 3631537689540566918
param.channel_id = 1775544218362132
param.channel_type = 3
response = request.execute(accessToken)

```

### go

```go
request := product_onlineChannelProduct_request.New()
param := request.GetParams()
param.MainProductId = 3631537689540566918
param.ChannelId = 1775544218362132
param.ChannelType = 3
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductOnlineChannelProductRequest();
var param = request.BuildParam();
param.MainProductId = 3631537689540566918;
param.ChannelId = 1775544218362132;
param.ChannelType = 3;
var response = request.Execute<ProductOnlineChannelProductResponse>(accessToken);

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
