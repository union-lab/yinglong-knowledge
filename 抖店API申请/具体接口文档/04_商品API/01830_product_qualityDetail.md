# /product/qualityDetail

> 中文说明：商品信息质量分查询API  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1830>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/qualityDetail |
| 中文名称 | 商品信息质量分查询API |
| 文档目录 | 商品API |
| Article ID | 1830 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2024/5/24 14:17:21 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2400 |

## 使用说明

根据商品ID查询商品质量分

## 权限包

- 商品 / 商品成长中心（packageType=1）；适用应用类目：选品铺货-微应用、卡券商工具、撮合服务商、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.qualityDetail | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 99 | 3502384918913228300 | 商品ID | - | - |
| 0 | quality_score_version | quality_score_version | - | 2 | middle_score | 质量分版本 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | field_problem | field_problem | - | 3 | - | 可优化问题项 | - | R1 |
| 1 | field_problem.field_key | field_key | - | 2 | product_name | 字段key，category-类目、props-属性、product_name-标题、pic-主图、desc_pic-详情图片、desc_text-详情文字 | - | R1 |
| 1 | field_problem.field_name | field_name | - | 2 | 标题 | 字段名 | - | R1 |
| 1 | field_problem.problem_key | problem_key | - | 99 | 501 | 问题编码 | - | R1 |
| 1 | field_problem.problem_name | problem_name | - | 2 | 详情页图片较少 | 问题名 | - | R1 |
| 1 | field_problem.suggestion | suggestion | - | 2 | 商品素材缺少，详情页的图片说明较少。促进商品购买的决策性信息过少，影响购买，建议丰富商品信息，上传不少于5张详情图片，将商品优势展示出来 | 问题建议 | - | R1 |
| 1 | field_problem.problem_type | problem_type | - | 99 | 1 | 问题类型编码 | - | R1 |
| 0 | product_id | product_id | - | 99 | 3469673915587121070 | 商品ID | - | R1 |
| 0 | product_name | product_name | - | 2 | 奈克牌大皮鞋 | 商品名字 | - | R1 |
| 0 | quality_score | quality_score | - | 5 | - | 质量分 | - | R1 |
| 1 | quality_score.version | version | - | 2 | middle_score | 质量分版本 | - | - |
| 1 | quality_score.level | level | - | 2 | lv3 | 质量分等级 | - | - |
| 1 | quality_score.score | score | - | 99 | 100 | 质量分数值 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/qualityDetail?app_key=your_appkey_here&method=product.qualityDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/qualityDetail?app_key=your_appkey_here&method=product.qualityDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductQualityDetailRequest request = new ProductQualityDetailRequest();
ProductQualityDetailParam param = request.getParam();
param.setProductId(3502384918913228300L);
param.setQualityScoreVersion("middle_score");
ProductQualityDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductQualityDetailRequest();
$param = new ProductQualityDetailParam();
$request->setParam($param);
$param->product_id = 3502384918913228300;
$param->quality_score_version = "middle_score";
$response = $request->execute(accessToken);

```

### python

```python
request = ProductQualityDetailRequest()
param = request.getParams()
param.product_id = 3502384918913228300
param.quality_score_version = "middle_score"
response = request.execute(accessToken)

```

### go

```go
request := product_qualityDetail_request.New()
param := request.GetParams()
param.ProductId = 3502384918913228300
param.QualityScoreVersion = "middle_score"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductQualityDetailRequest();
var param = request.BuildParam();
param.ProductId = 3502384918913228300;
param.QualityScoreVersion = "middle_score";
var response = request.Execute<ProductQualityDetailResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2030001 | 2030001:读取商品失败 | 系统繁忙，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2030013 | 2030013:读取商品失败 | 系统繁忙，请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
