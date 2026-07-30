# /product/getCascadeValue

> 中文说明：获取级联属性  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4276>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getCascadeValue |
| 中文名称 | 获取级联属性 |
| 文档目录 | 商品API |
| Article ID | 4276 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2023/8/11 14:33:21 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

获取级联属性，当前属性有下级属性值，选中当前属性值，通过此接口请求下级级联属性值；

## 权限包

- 商品 / 商品属性值（packageType=1）；适用应用类目：创新应用大赛_微应用、创新应用大赛_软件服务、商家后台系统、即时零售商品服务、即时零售ebill订单管理（临时）、即时零售ERP、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getCascadeValue | 调用的API接口名称 | - | - |
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
| 0 | category_id | category_id | true | 1 | 31860 | 类目id | - | - |
| 0 | property_id | property_id | true | 1 | 123 | 属性id | - | - |
| 0 | cascade_info | cascade_info | true | 3 | - | 级联参数，传当前属性属性值 | - | - |
| 1 | cascade_info.value_id | value_id | true | 1 | 111 | 属性值id | - | - |
| 1 | cascade_info.value_name | value_name | true | 2 | 华为 | 属性值名称 | - | - |
| 1 | cascade_info.cascade_id | cascade_id | true | 1 | 122 | 级联id，第一次传0，后续查询使用上一次的查询结果中的cascade_id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | properties | properties | - | 3 | - | 级联属性 | - | R1 |
| 1 | properties.property_id | property_id | - | 1 | 134 | 属性id | - | - |
| 1 | properties.property_values | property_values | - | 3 | - | 属性内容 | - | R1 |
| 2 | properties.property_values.property_value_id | property_value_id | - | 1 | 153 | 属性值id | - | - |
| 2 | properties.property_values.property_value_name | property_value_name | - | 2 | 华为P40 | 属性值名称 | - | - |
| 2 | properties.property_values.cascade_id | cascade_id | - | 1 | 1234 | 级联id | - | - |
| 1 | properties.has_sub_property | has_sub_property | - | 4 | false | 是否有下级属性 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.commengru/test/encrypt/v1?app_key=your_appkey_here&method=mengru.test.encrypt.v1&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.commengru/test/encrypt/v1?app_key=your_appkey_here&method=mengru.test.encrypt.v1&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductGetCascadeValueRequest request = new ProductGetCascadeValueRequest();
ProductGetCascadeValueParam param = request.getParam();
param.setCategoryId(31860L);
param.setPropertyId(123L);
ProductGetCascadeValueResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetCascadeValueRequest();
$param = new ProductGetCascadeValueParam();
$request->setParam($param);
$param->category_id = 31860;
$param->property_id = 123;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetCascadeValueRequest()
param = request.getParams()
param.category_id = 31860
param.property_id = 123
response = request.execute(accessToken)

```

### go

```go
request := product_getCascadeValue_request.New()
param := request.GetParams()
param.CategoryId = 31860
param.PropertyId = 123
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetCascadeValueRequest();
var param = request.BuildParam();
param.CategoryId = 31860;
param.PropertyId = 123;
var response = request.Execute<ProductGetCascadeValueResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:查询级联信息失败 | 2010001:查询级联信息失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
