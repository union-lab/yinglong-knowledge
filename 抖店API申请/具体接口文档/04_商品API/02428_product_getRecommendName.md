# /product/getRecommendName

> 中文说明：根据商品信息推荐商品标题相关信息  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2428>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getRecommendName |
| 中文名称 | 根据商品信息推荐商品标题相关信息 |
| 文档目录 | 商品API |
| Article ID | 2428 |
| 文档版本 | V1.06 |
| 官方更新时间 | 2024/2/29 14:14:26 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

调用该接口前，请先使用【/product/getProductUpdateRule】接口查询类目id响应结果recommend_name_rule.satisfy_prefix是否=true，当类目id为true时，再使用该接口查询类目id的推荐结果，当类目id为false时该接口查询结果会为空。

## 权限包

- 商品 / 商品信息查询（packageType=1）；适用应用类目：跨境金服、装修设计、客服工具-微应用、微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、跨境供应链服务、商家自研模版、商家自研组件、撮合服务商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、数据应用、打单发货-微应用、自研微组件、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、虚拟充值、即时零售商家自研、直播工具、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getRecommendName | 调用的API接口名称 | - | - |
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
| 0 | scene | scene | true | 3 | ["product_name_prefix"] | 暂时仅开放一种场景：1. product_name_prefix，表示基于 命中的商品类目属性 推荐 商品标题前缀 | - | - |
| 0 | category_leaf_id | category_leaf_id | true | 99 | 26150 | 商品叶子类目id，请先使用【/product/getProductUpdateRule】接口查询类目id查看recommend_name_rule. satisfy_prefix是否=true | - | - |
| 0 | first_cid | first_cid | true | 99 | 20080 | 一级类目id，scene为product_name_prefix时必传，没有时传0 | - | - |
| 0 | first_cid_name | first_cid_name | true | 2 | 时尚饰品 | 一级类目名，scene为product_name_prefix时必传 | - | - |
| 0 | second_cid | second_cid | true | 99 | 20998 | 二级类目id，scene为product_name_prefix时必传，没有时传0 | - | - |
| 0 | second_cid_name | second_cid_name | true | 2 | 耳饰 | 二级类目名，scene为product_name_prefix时必传 | - | - |
| 0 | third_cid | third_cid | true | 99 | 26150 | 三级类目id，scene为product_name_prefix时必传，没有时传0 | - | - |
| 0 | third_cid_name | third_cid_name | true | 2 | 耳钉 | 三级类目名，scene为product_name_prefix时必传 | - | - |
| 0 | select_property | select_property | true | 8 | {"1687":[{"value":0,"name":"填入品牌名"}],"3320":[{"value":18972,"name":"99新"}]} | 商品类目属性，参考"select_property":{"1687":[{"value":0,"name":"填入品牌名"}],"3320":[{"value":18972,"name":"99新"}]} | - | - |
| 1 | select_property.value | value | true | 99 | 27182 | 属性id | - | - |
| 1 | select_property.name | name | true | 2 | 钛钢 | 属性名称 | - | - |
| 0 | use_brand_name | use_brand_name | - | 4 | false | 是否勾选使用品牌名 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | recommend_name | recommend_name | - | 3 | - | 商品标题推荐结果，当返回值为空时，使用【/product/getProductUpdateRule】接口查询类目id查看recommend_name_rule.satisfy_prefix是否=true | - | R1 |
| 1 | recommend_name.recommend_scene | recommend_scene | - | 2 | product_name_prefix | 推荐场景：<br>1. product_name_prefix 前缀场景，需要将返回的recommend_value拼接在name标题自动的最前面<br>2. product_name_suffix 后缀场景，需要将返回的recommend_value拼接在name标题自动的最后面 | - | R1 |
| 1 | recommend_name.recommend_value | recommend_value | - | 2 | 钛钢耳饰 | 推荐结果，推荐结果需要根据recommend_scene判断前缀或者后缀，拼接在name字段的最前面或者最后面 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductGetRecommendNameRequest request = new ProductGetRecommendNameRequest();
ProductGetRecommendNameParam param = request.getParam();
param.setScene(["product_name_prefix"]);
param.setCategoryLeafId(26150L);
param.setFirstCid(20080L);
param.setFirstCidName("时尚饰品");
param.setSecondCid(20998L);
param.setSecondCidName("耳饰");
param.setThirdCid(26150L);
param.setThirdCidName("耳钉");
param.setSelectProperty({"1687":[{"value":0,"name":"填入品牌名"}],"3320":[{"value":18972,"name":"99新"}]});
param.setUseBrandName(false);
ProductGetRecommendNameResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetRecommendNameRequest();
$param = new ProductGetRecommendNameParam();
$request->setParam($param);
$param->scene = ["product_name_prefix"];
$param->category_leaf_id = 26150;
$param->first_cid = 20080;
$param->first_cid_name = "时尚饰品";
$param->second_cid = 20998;
$param->second_cid_name = "耳饰";
$param->third_cid = 26150;
$param->third_cid_name = "耳钉";
$param->select_property = {"1687":[{"value":0,"name":"填入品牌名"}],"3320":[{"value":18972,"name":"99新"}]};
$param->use_brand_name = false;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetRecommendNameRequest()
param = request.getParams()
param.scene = ["product_name_prefix"]
param.category_leaf_id = 26150
param.first_cid = 20080
param.first_cid_name = "时尚饰品"
param.second_cid = 20998
param.second_cid_name = "耳饰"
param.third_cid = 26150
param.third_cid_name = "耳钉"
param.select_property = {"1687":[{"value":0,"name":"填入品牌名"}],"3320":[{"value":18972,"name":"99新"}]}
param.use_brand_name = false
response = request.execute(accessToken)

```

### go

```go
request := product_getRecommendName_request.New()
param := request.GetParams()
param.Scene = ["product_name_prefix"]
param.CategoryLeafId = 26150
param.FirstCid = 20080
param.FirstCidName = "时尚饰品"
param.SecondCid = 20998
param.SecondCidName = "耳饰"
param.ThirdCid = 26150
param.ThirdCidName = "耳钉"
param.SelectProperty = {"1687":[{"value":0,"name":"填入品牌名"}],"3320":[{"value":18972,"name":"99新"}]}
param.UseBrandName = false
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetRecommendNameRequest();
var param = request.BuildParam();
param.Scene = ["product_name_prefix"];
param.CategoryLeafId = 26150;
param.FirstCid = 20080;
param.FirstCidName = "时尚饰品";
param.SecondCid = 20998;
param.SecondCidName = "耳饰";
param.ThirdCid = 26150;
param.ThirdCidName = "耳钉";
param.SelectProperty = {"1687":[{"value":0,"name":"填入品牌名"}],"3320":[{"value":18972,"name":"99新"}]};
param.UseBrandName = false;
var response = request.Execute<ProductGetRecommendNameResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2010342 | 不存在有效的标题推荐类场景 | 检查scene参数 |
| 50002 | 业务处理失败 | isv.business-failed:110101049 | 110101049:没有品牌使用权限，不能加到标题前缀中 | 110101049:没有品牌使用权限，不能加到标题前缀中 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
