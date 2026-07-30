# /product/publishPreCheck

> 中文说明：商品发布前置校验接口  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/6503>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/publishPreCheck |
| 中文名称 | 商品发布前置校验接口 |
| 文档目录 | 商品API |
| Article ID | 6503 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/7/6 17:49:30 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3600 |

## 使用说明

前置校验商品发布逻辑，目前主要包含店铺发品门槛校验、店铺使用类目门槛校验

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.publishPreCheck | 调用的API接口名称 | - | - |
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
| 0 | check_types | check_types | true | 3 | ["shop_publish_product_access","shop_use_category_access","shop_out_product_id_unique"] | 校验类型，需要进行哪些校验，可以支持部分校验。<br>店铺发品门槛校验：shop_publish_product_access，不需要传其他字段；店铺使用类目权限校验：shop_use_category_access，需要传category_id字段；商品标题校验product_title_illegal_check，需要传title、title_prefix、title_suffix | - | - |
| 0 | category_id | category_id | false | 99 | 20219 | 叶子类目id | - | - |
| 0 | out_product_id | out_product_id | false | 2 | 123456678 | 外部商品编码，对应商品outer_product_id字段 | - | - |
| 0 | title | title | false | 2 | 标题前缀我是个标题标题后缀 | 完整的标题，需要包含前后缀 | - | - |
| 0 | title_prefix | title_prefix | false | 2 | 标题前缀 | 标题前缀 | - | - |
| 0 | title_suffix | title_suffix | false | 2 | 标题后缀 | 标题后缀 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | common_check_results | common_check_results | - | 3 | - | 校验 | - | R1 |
| 1 | common_check_results.check_type | check_type | - | 2 | shop_publish_product_access | 校验类型 | - | - |
| 1 | common_check_results.check_result_code | check_result_code | - | 99 | 0 | 校验结果code，0：通过，其他：拦截 | - | - |
| 1 | common_check_results.check_result_msg | check_result_msg | - | 2 | success | 文案提示 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/publishPreCheck?app_key=your_appkey_here&method=product.publishPreCheck&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/publishPreCheck?app_key=your_appkey_here&method=product.publishPreCheck&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductPublishPreCheckRequest request = new ProductPublishPreCheckRequest();
ProductPublishPreCheckParam param = request.getParam();
param.setCheckTypes(["shop_publish_product_access","shop_use_category_access","shop_out_product_id_unique"]);
param.setCategoryId(20219L);
param.setOutProductId("123456678");
param.setTitle("标题前缀我是个标题标题后缀");
param.setTitlePrefix("标题前缀");
param.setTitleSuffix("标题后缀");
ProductPublishPreCheckResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductPublishPreCheckRequest();
$param = new ProductPublishPreCheckParam();
$request->setParam($param);
$param->check_types = ["shop_publish_product_access","shop_use_category_access","shop_out_product_id_unique"];
$param->category_id = 20219;
$param->out_product_id = "123456678";
$param->title = "标题前缀我是个标题标题后缀";
$param->title_prefix = "标题前缀";
$param->title_suffix = "标题后缀";
$response = $request->execute(accessToken);

```

### python

```python
request = ProductPublishPreCheckRequest()
param = request.getParams()
param.check_types = ["shop_publish_product_access","shop_use_category_access","shop_out_product_id_unique"]
param.category_id = 20219
param.out_product_id = "123456678"
param.title = "标题前缀我是个标题标题后缀"
param.title_prefix = "标题前缀"
param.title_suffix = "标题后缀"
response = request.execute(accessToken)

```

### go

```go
request := product_publishPreCheck_request.New()
param := request.GetParams()
param.CheckTypes = ["shop_publish_product_access","shop_use_category_access","shop_out_product_id_unique"]
param.CategoryId = 20219
param.OutProductId = "123456678"
param.Title = "标题前缀我是个标题标题后缀"
param.TitlePrefix = "标题前缀"
param.TitleSuffix = "标题后缀"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductPublishPreCheckRequest();
var param = request.BuildParam();
param.CheckTypes = ["shop_publish_product_access","shop_use_category_access","shop_out_product_id_unique"];
param.CategoryId = 20219;
param.OutProductId = "123456678";
param.Title = "标题前缀我是个标题标题后缀";
param.TitlePrefix = "标题前缀";
param.TitleSuffix = "标题后缀";
var response = request.Execute<ProductPublishPreCheckResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:校验类目使用权限需要类目id参数 | 2010004:校验类目使用权限需要类目id参数 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:系统异常,请重试 | 2010001:系统异常,请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
