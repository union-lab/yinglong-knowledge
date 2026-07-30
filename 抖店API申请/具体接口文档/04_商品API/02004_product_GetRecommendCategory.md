# /product/GetRecommendCategory

> 中文说明：商品类目预测  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2004>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/GetRecommendCategory |
| 中文名称 | 商品类目预测 |
| 文档目录 | 商品API |
| Article ID | 2004 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/3/12 19:33:09 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3150 |

## 使用说明

1、基于商品图片进行类目预测，可以用于商品发布辅助
2、基于商品内容，包括商品类目、属性等，推荐出商品合理的类目，可用于类目信息错填判断。

## 权限包

- 商品 / 商品尺码模板（packageType=1）；适用应用类目：撮合服务商、AI拼图-微应用、营销管理-小程序定制、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、互动营销定制、短信营销、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼
- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.GetRecommendCategory | 调用的API接口名称 | - | - |
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
| 0 | scene | scene | true | 2 | product_info | category_infer: 基于标题、图片等推断商品类目；predict_by_title_and_img：基于标题、图片等推断商品类目（图片必传）； | - | - |
| 0 | pic | pic | false | 3 | - | 商品主图图片url，scene为predict_by_title_and_img时必传 | - | - |
| 1 | pic.url | url | true | 2 | https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_GhxlaZ_70852585116381186630419_c55b8401b00e96e4114431a1dbd7c99c_sx_582346_www1000-1000 | 图片链接，必须是素材中心的url | - | - |
| 0 | category_leaf_id | cid | false | 99 | 20415 | 商品类目id，无需传递 | - | - |
| 0 | name | title | false | 2 | 商品标题 | 商品标题 | - | - |
| 0 | product_format_new | product_format_new | false | 8 | {} | 商品类目属性 | - | - |
| 1 | product_format_new.value | value | false | 99 | 32314111111 | 属性id | - | - |
| 1 | product_format_new.name | name | false | 2 | 衣长1 | 属性名称 | - | - |
| 0 | standard_brand_id | brand_id | false | 99 | 30241 | 品牌id | - | - |
| 0 | async_task_id | async_task_id | false | 2 | task-123 | 深度思考异步任务ID，命中深度思考时返回，用于轮询深度思考结果 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | categoryDetails | categoryDetails | - | 3 | - | 推荐类目结果 | - | R1 |
| 1 | categoryDetails.category_detail | category_detail | - | 5 | - | 类目详情 | - | R1 |
| 2 | categoryDetails.category_detail.first_cid | first_cid | - | 99 | 20131 | 一级类目id | - | R1 |
| 2 | categoryDetails.category_detail.first_cname | first_cname | - | 2 | 一级类目名称 | 一级类目名称 | - | R1 |
| 2 | categoryDetails.category_detail.second_cid | second_cid | - | 99 | 34234 | 二级类目id | - | R1 |
| 2 | categoryDetails.category_detail.second_cname | second_cname | - | 2 | 二级类目名称 | 二级类目名称 | - | R1 |
| 2 | categoryDetails.category_detail.third_cid | third_cid | - | 99 | 13144 | 三级类目id | - | R1 |
| 2 | categoryDetails.category_detail.third_cname | third_cname | - | 2 | 三级类目名称 | 三级类目名称 | - | R1 |
| 2 | categoryDetails.category_detail.fourth_cid | fourth_cid | - | 99 | 154325 | 四级类目id | - | R1 |
| 2 | categoryDetails.category_detail.fourth_cname | fourth_cname | - | 2 | 四级类目名称 | 四级类目名称 | - | R1 |
| 1 | categoryDetails.qualification_status | qualification_status | - | 99 | 1 | 类目资质状态，0有资质；1资质过期；2无资质 | - | R1 |
| 0 | recommend_id | recommend_id | - | 2 | qwertyui123456 | 类目预测记录id | - | - |
| 0 | async_task_id | async_task_id | - | 2 | task-123 | 深度思考异步任务ID，命中深度思考时返回，用于轮询深度思考结果 | - | - |
| 0 | async_task_status | async_task_status | - | 99 | 2 | 深度思考任务状态，命中深度思考时返回。0-init 1-running 2-success 3-failed | - | - |
| 0 | timeout | timeout | - | 99 | 10000 | 深度思考超时时间，单位：ms，命中深度思考时返回，用于轮询深度思考结果 | - | - |
| 0 | interval | interval | - | 99 | 1000 | 深度思考轮询间隔，单位：ms，命中深度思考时返回，用于轮询深度思考结果 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/GetRecommendCategory?app_key=your_appkey_here&method=product.GetRecommendCategory&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/GetRecommendCategory?app_key=your_appkey_here&method=product.GetRecommendCategory&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductGetRecommendCategoryRequest request = new ProductGetRecommendCategoryRequest();
ProductGetRecommendCategoryParam param = request.getParam();
param.setScene("product_info");
param.setCategoryLeafId(20415L);
param.setName("商品标题");
param.setProductFormatNew({});
param.setStandardBrandId(30241L);
param.setAsyncTaskId("task-123");
ProductGetRecommendCategoryResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetRecommendCategoryRequest();
$param = new ProductGetRecommendCategoryParam();
$request->setParam($param);
$param->scene = "product_info";
$param->category_leaf_id = 20415;
$param->name = "商品标题";
$param->product_format_new = {};
$param->standard_brand_id = 30241;
$param->async_task_id = "task-123";
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetRecommendCategoryRequest()
param = request.getParams()
param.scene = "product_info"
param.category_leaf_id = 20415
param.name = "商品标题"
param.product_format_new = {}
param.standard_brand_id = 30241
param.async_task_id = "task-123"
response = request.execute(accessToken)

```

### go

```go
request := product_GetRecommendCategory_request.New()
param := request.GetParams()
param.Scene = "product_info"
param.CategoryLeafId = 20415
param.Name = "商品标题"
param.ProductFormatNew = {}
param.StandardBrandId = 30241
param.AsyncTaskId = "task-123"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetRecommendCategoryRequest();
var param = request.BuildParam();
param.Scene = "product_info";
param.CategoryLeafId = 20415;
param.Name = "商品标题";
param.ProductFormatNew = {};
param.StandardBrandId = 30241;
param.AsyncTaskId = "task-123";
var response = request.Execute<ProductGetRecommendCategoryResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:2010001 | 系统错误 | 重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 参数错误 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 2010013:获取账号信息失败 | 获取账号信息失败，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
