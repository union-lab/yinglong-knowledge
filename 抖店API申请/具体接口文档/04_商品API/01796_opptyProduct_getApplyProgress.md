# /opptyProduct/getApplyProgress

> 中文说明：机会品提报进度查询  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1796>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /opptyProduct/getApplyProgress |
| 中文名称 | 机会品提报进度查询 |
| 文档目录 | 商品API |
| Article ID | 1796 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2021/9/13 16:15:42 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

机会品提报进度查询
获取平台商机，发布机会商品，指定商品有机会获得平台流量扶持、头部达人带货等多种权益。

该接口可以获取机会品提报的进度。

## 权限包

- 商品 / 机会品管理（packageType=1）；适用应用类目：选品铺货-微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | opptyProduct.getApplyProgress | 调用的API接口名称 | - | - |
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
| 0 | product_id | ProductId | true | 1 | 123 | 商品ID | - | - |
| 0 | origin | Origin | true | 2 | ISV | 机会品来源。ISV代表服务商 | - | - |
| 0 | type | Type | true | 2 | NEW | 机会品类型。NEW代表新品 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | status | Status | - | 2 | NEW_PRODUCT | 机会品提报状态编码 | - | R1 |
| 0 | status_desc | StatusDesc | - | 2 | 新品 | 机会品提报状态中文描述 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/opptyProduct/getApplyProgress?app_key=your_appkey_here&method=opptyProduct.getApplyProgress&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/opptyProduct/getApplyProgress?app_key=your_appkey_here&method=opptyProduct.getApplyProgress&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OpptyProductGetApplyProgressRequest request = new OpptyProductGetApplyProgressRequest();
OpptyProductGetApplyProgressParam param = request.getParam();
param.setProductId(123L);
param.setOrigin("ISV");
param.setType("NEW");
OpptyProductGetApplyProgressResponse response = request.execute(accessToken);

```

### php

```php
$request = new OpptyProductGetApplyProgressRequest();
$param = new OpptyProductGetApplyProgressParam();
$request->setParam($param);
$param->product_id = 123;
$param->origin = "ISV";
$param->type = "NEW";
$response = $request->execute(accessToken);

```

### python

```python
request = OpptyProductGetApplyProgressRequest()
param = request.getParams()
param.product_id = 123
param.origin = "ISV"
param.type = "NEW"
response = request.execute(accessToken)

```

### go

```go
request := opptyProduct_getApplyProgress_request.New()
param := request.GetParams()
param.ProductId = 123
param.Origin = "ISV"
param.Type = "NEW"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OpptyProductGetApplyProgressRequest();
var param = request.BuildParam();
param.ProductId = 123;
param.Origin = "ISV";
param.Type = "NEW";
var response = request.Execute<OpptyProductGetApplyProgressResponse>(accessToken);

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
