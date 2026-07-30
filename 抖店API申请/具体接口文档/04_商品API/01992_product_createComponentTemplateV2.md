# /product/createComponentTemplateV2

> 中文说明：创建尺码模板  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1992>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/createComponentTemplateV2 |
| 中文名称 | 创建尺码模板 |
| 文档目录 | 商品API |
| Article ID | 1992 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2022/6/11 12:29:29 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 800 |

## 使用说明

创建尺码模板

## 权限包

- 商品 / 商品尺码模板（packageType=1）；适用应用类目：撮合服务商、AI拼图-微应用、营销管理-小程序定制、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、互动营销定制、短信营销、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.createComponentTemplateV2 | 调用的API接口名称 | - | - |
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
| 0 | template_type | template_type | true | 2 | size_info | 模板类型：尺码模板 | - | - |
| 0 | template_sub_type | template_sub_type | true | 2 | clothing | 模板子类型: clothing(服装)、undies(内衣)、shoes(鞋靴类)、children_clothing(童装) | - | - |
| 0 | template_name | template_name | true | 2 | 模板名称1 | 模板名称 | - | - |
| 0 | component_front_data | component_front_data | true | 2 | {"title":"测试模板3","desc":"测试","tempName":"测试模板3副本1副本1","configTable":[{"size":"XS","specMap":{"身高（cm）":"1","体重（斤）":"2","胸围（cm）":"3"}},{"size":"M","specMap":{"身高（cm）":"10","体重（斤）":"10","胸围（cm）":"10"}}],"selectedSpecs":["身高（cm）","体重（斤）","胸围（cm）"],"specOptions":["身高（cm）","体重（斤）","胸围（cm）"],"selectedSize":["XS","M"]} | 商品组件数据 json，表格行列顺序以selectedSize和selectedSpecs的顺序为准 | - | - |
| 0 | shareable | shareable | false | 4 | true | 是否设置为公有模板(多个商品可共用)。true-是，false-不是；不传默认fasle | - | - |
| 0 | category_id | category_id | false | 1 | 214691 | 类目id，用来确定模板类型 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | template_id | template_id | - | 1 | 101 | 模板ID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/createComponentTemplateV2?app_key=your_appkey_here&method=product.createComponentTemplateV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/createComponentTemplateV2?app_key=your_appkey_here&method=product.createComponentTemplateV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductCreateComponentTemplateV2Request request = new ProductCreateComponentTemplateV2Request();
ProductCreateComponentTemplateV2Param param = request.getParam();
param.setTemplateType("size_info");
param.setTemplateSubType("clothing");
param.setTemplateName("模板名称1");
param.setComponentFrontData("{\"title\":\"测试模板3\",\"desc\":\"测试\",\"tempName\":\"测试模板3副本1副本1\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"1\",\"体重（斤）\":\"2\",\"胸围（cm）\":\"3\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"10\",\"体重（斤）\":\"10\",\"胸围（cm）\":\"10\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"XS\",\"M\"]}");
param.setShareable(true);
param.setCategoryId(214691L);
ProductCreateComponentTemplateV2Response response = request.execute(accessToken);

```

### php

```php
$request = new ProductCreateComponentTemplateV2Request();
$param = new ProductCreateComponentTemplateV2Param();
$request->setParam($param);
$param->template_type = "size_info";
$param->template_sub_type = "clothing";
$param->template_name = "模板名称1";
$param->component_front_data = "{\"title\":\"测试模板3\",\"desc\":\"测试\",\"tempName\":\"测试模板3副本1副本1\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"1\",\"体重（斤）\":\"2\",\"胸围（cm）\":\"3\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"10\",\"体重（斤）\":\"10\",\"胸围（cm）\":\"10\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"XS\",\"M\"]}";
$param->shareable = true;
$param->category_id = 214691;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductCreateComponentTemplateV2Request()
param = request.getParams()
param.template_type = "size_info"
param.template_sub_type = "clothing"
param.template_name = "模板名称1"
param.component_front_data = "{\"title\":\"测试模板3\",\"desc\":\"测试\",\"tempName\":\"测试模板3副本1副本1\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"1\",\"体重（斤）\":\"2\",\"胸围（cm）\":\"3\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"10\",\"体重（斤）\":\"10\",\"胸围（cm）\":\"10\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"XS\",\"M\"]}"
param.shareable = true
param.category_id = 214691
response = request.execute(accessToken)

```

### go

```go
request := product_createComponentTemplateV2_request.New()
param := request.GetParams()
param.TemplateType = "size_info"
param.TemplateSubType = "clothing"
param.TemplateName = "模板名称1"
param.ComponentFrontData = "{\"title\":\"测试模板3\",\"desc\":\"测试\",\"tempName\":\"测试模板3副本1副本1\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"1\",\"体重（斤）\":\"2\",\"胸围（cm）\":\"3\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"10\",\"体重（斤）\":\"10\",\"胸围（cm）\":\"10\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"XS\",\"M\"]}"
param.Shareable = true
param.CategoryId = 214691
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductCreateComponentTemplateV2Request();
var param = request.BuildParam();
param.TemplateType = "size_info";
param.TemplateSubType = "clothing";
param.TemplateName = "模板名称1";
param.ComponentFrontData = "{\"title\":\"测试模板3\",\"desc\":\"测试\",\"tempName\":\"测试模板3副本1副本1\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"1\",\"体重（斤）\":\"2\",\"胸围（cm）\":\"3\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"10\",\"体重（斤）\":\"10\",\"胸围（cm）\":\"10\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"XS\",\"M\"]}";
param.Shareable = true;
param.CategoryId = 214691;
var response = request.Execute<ProductCreateComponentTemplateV2Response>(accessToken);

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
