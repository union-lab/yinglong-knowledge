# /product/recommendProperties

> 中文说明：商品属性推荐  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/6866>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/recommendProperties |
| 中文名称 | 商品属性推荐 |
| 文档目录 | 商品API |
| Article ID | 6866 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/11/28 11:39:37 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

建品前调用，根据类目、标题、图片等用户提供的数据为商品提供属性推荐值。

## 权限包

- 商品 / 即时零售商品发布（新）（packageType=1）；适用应用类目：客服便签、教育服务、即时零售商品服务、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.recommendProperties | 调用的API接口名称 | - | - |
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
| 0 | category_id | category_id | true | 99 | 20172 | 叶子类目ID | - | - |
| 0 | material_ids | material_ids | false | 3 | ["72986162310573755150419"] | 素材ID列表，用于属性预测。material_ids与img_urls选传其中一个即可。 | - | - |
| 0 | img_urls | img_urls | false | 3 | ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_GhxlaZ_72986162310573755150419_6fcc92a698215567a8963cb1861e1945_sx_818278_www2143-2143"] | 图片URL列表，用于属性预测。material_ids与img_urls选传其中一个即可。 | - | - |
| 0 | name | name | false | 2 | 商品标题 | 商品标题 | - | - |
| 0 | product_format | product_format | false | 8 | - | 商家自填属性；传入可以触发对自填属性值的判准 | - | - |
| 1 | product_format.value | value | false | 99 | 1024 | 属性值id | - | - |
| 1 | product_format.name | name | false | 2 | 短款 | 属性值名称 | - | - |
| 1 | product_format.diy_type | diy_type | false | 99 | 0 | 是否为商家自定义属性值，1为是，0为不是 | - | - |
| 1 | product_format.measure_info | measure_info | false | 5 | - | 度量衡信息，对本接口暂时不需要传 | - | - |
| 2 | product_format.measure_info.template_id | template_id | false | 99 | 1 | 度量衡模板id | - | - |
| 2 | product_format.measure_info.values | values | false | 3 | - | 度量衡内容 | - | - |
| 3 | product_format.measure_info.values.extra | extra | false | 8 | {"":""} | 自定义度量衡扩展信息 | - | - |
| 3 | product_format.measure_info.values.module_id | module_id | false | 99 | 1 | 模块id | - | - |
| 3 | product_format.measure_info.values.value | value | false | 2 | 值内容 | 值内容 | - | - |
| 3 | product_format.measure_info.values.unit_id | unit_id | false | 99 | 1 | 度量衡单位id | - | - |
| 3 | product_format.measure_info.values.unit_name | unit_name | false | 2 | 度量衡单位名称 | 度量衡单位名称 | - | - |
| 3 | product_format.measure_info.values.prefix | prefix | false | 2 | 前缀 | 前缀 | - | - |
| 3 | product_format.measure_info.values.suffix | suffix | false | 2 | 后缀 | 后缀 | - | - |
| 3 | product_format.measure_info.values.value_required | value_required | false | 4 | false | 是否必填 | - | - |
| 2 | product_format.measure_info.extra | extra | false | 8 | {"":""} | 自定义度量衡扩展信息 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | properties | properties | - | 3 | - | 推荐的属性列表 | - | R1 |
| 1 | properties.property_name | property_name | - | 2 | 厚度 | 属性项名称 | - | - |
| 1 | properties.property_values | property_values | - | 3 | - | 推荐的属性值列表 | - | R1 |
| 2 | properties.property_values.value_id | value_id | - | 99 | 195685 | 属性值ID | - | - |
| 2 | properties.property_values.value_name | value_name | - | 2 | 厚款 | 属性值名称 | - | - |
| 1 | properties.recommend_source | recommend_source | - | 2 | SimilarProductRecommend | 属性推荐来源：<br>SimilarProductRecommend表示同款属性推荐<br>DescPredictRecommend表示来自信息实时预测 | - | - |
| 1 | properties.property_id | property_id | - | 99 | 241 | 属性项ID | - | - |
| 0 | check_result | check_result | - | 8 | - | 属性判准结果；如果存在判准结果，且is_right为false，可以在properties找到对应建议结果 | - | R1 |
| 1 | check_result.property_id | property_id | - | 99 | 1 | 属性id | - | - |
| 1 | check_result.is_right | is_right | - | 4 | false | 判准正确 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/recommendProperties?app_key=your_appkey_here&method=product.recommendProperties&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/recommendProperties?app_key=your_appkey_here&method=product.recommendProperties&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductRecommendPropertiesRequest request = new ProductRecommendPropertiesRequest();
ProductRecommendPropertiesParam param = request.getParam();
param.setCategoryId(20172L);
param.setMaterialIds(["72986162310573755150419"]);
param.setImgUrls(["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_GhxlaZ_72986162310573755150419_6fcc92a698215567a8963cb1861e1945_sx_818278_www2143-2143"]);
param.setName("商品标题");
ProductRecommendPropertiesResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductRecommendPropertiesRequest();
$param = new ProductRecommendPropertiesParam();
$request->setParam($param);
$param->category_id = 20172;
$param->material_ids = ["72986162310573755150419"];
$param->img_urls = ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_GhxlaZ_72986162310573755150419_6fcc92a698215567a8963cb1861e1945_sx_818278_www2143-2143"];
$param->name = "商品标题";
$response = $request->execute(accessToken);

```

### python

```python
request = ProductRecommendPropertiesRequest()
param = request.getParams()
param.category_id = 20172
param.material_ids = ["72986162310573755150419"]
param.img_urls = ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_GhxlaZ_72986162310573755150419_6fcc92a698215567a8963cb1861e1945_sx_818278_www2143-2143"]
param.name = "商品标题"
response = request.execute(accessToken)

```

### go

```go
request := product_recommendProperties_request.New()
param := request.GetParams()
param.CategoryId = 20172
param.MaterialIds = ["72986162310573755150419"]
param.ImgUrls = ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_GhxlaZ_72986162310573755150419_6fcc92a698215567a8963cb1861e1945_sx_818278_www2143-2143"]
param.Name = "商品标题"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductRecommendPropertiesRequest();
var param = request.BuildParam();
param.CategoryId = 20172;
param.MaterialIds = ["72986162310573755150419"];
param.ImgUrls = ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_GhxlaZ_72986162310573755150419_6fcc92a698215567a8963cb1861e1945_sx_818278_www2143-2143"];
param.Name = "商品标题";
var response = request.Execute<ProductRecommendPropertiesResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:素材ID和图片URL至少要传一个 | 2010004:素材ID和图片URL至少要传一个 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:图片预测类目属性异常 | 2010001:图片预测类目属性异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
