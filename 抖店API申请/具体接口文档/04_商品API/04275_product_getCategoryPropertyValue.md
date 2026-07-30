# /product/getCategoryPropertyValue

> 中文说明：查询属性项的属性值  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4275>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getCategoryPropertyValue |
| 中文名称 | 查询属性项的属性值 |
| 文档目录 | 商品API |
| Article ID | 4275 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2023/8/11 14:10:32 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

查询属性项的属性值信息

## 权限包

- 商品 / 商品属性值（packageType=1）；适用应用类目：创新应用大赛_微应用、创新应用大赛_软件服务、商家后台系统、即时零售商品服务、即时零售ebill订单管理（临时）、即时零售ERP、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getCategoryPropertyValue | 调用的API接口名称 | - | - |
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
| 0 | property_id | property_id | true | 1 | 2176 | 属性项id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | property | property | - | 5 | - | 属性 | - | R1 |
| 1 | property.property_values | property_values | - | 3 | - | 属性值 | - | R1 |
| 2 | property.property_values.value_pic | value_pic | - | 5 | - | 规格值图片 | - | R1 |
| 3 | property.property_values.value_pic.pic_value | pic_value | - | 2 | #FFF | 图片，url链接或rgb内容 | - | - |
| 3 | property.property_values.value_pic.pic_type | pic_type | - | 2 | rgb | 属性值图片类型<br>url或rgb | - | - |
| 2 | property.property_values.property_value_name | property_value_name | - | 2 | 红色 | 属性值名称 | - | - |
| 2 | property.property_values.property_value_id | property_value_id | - | 1 | 111 | 属性值id | - | - |
| 1 | property.property_id | property_id | - | 1 | 123 | 属性id | - | - |

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
ProductGetCategoryPropertyValueRequest request = new ProductGetCategoryPropertyValueRequest();
ProductGetCategoryPropertyValueParam param = request.getParam();
param.setCategoryId(31860L);
param.setPropertyId(2176L);
ProductGetCategoryPropertyValueResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetCategoryPropertyValueRequest();
$param = new ProductGetCategoryPropertyValueParam();
$request->setParam($param);
$param->category_id = 31860;
$param->property_id = 2176;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetCategoryPropertyValueRequest()
param = request.getParams()
param.category_id = 31860
param.property_id = 2176
response = request.execute(accessToken)

```

### go

```go
request := product_getCategoryPropertyValue_request.New()
param := request.GetParams()
param.CategoryId = 31860
param.PropertyId = 2176
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetCategoryPropertyValueRequest();
var param = request.BuildParam();
param.CategoryId = 31860;
param.PropertyId = 2176;
var response = request.Execute<ProductGetCategoryPropertyValueResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:系统异常,请重试 | 2010001:系统异常,请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
