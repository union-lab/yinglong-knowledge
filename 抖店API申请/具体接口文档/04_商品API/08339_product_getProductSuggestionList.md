# /product/getProductSuggestionList

> 中文说明：查询诊断商品列表及其处理建议  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/8339>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getProductSuggestionList |
| 中文名称 | 查询诊断商品列表及其处理建议 |
| 文档目录 | 商品API |
| Article ID | 8339 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/6/26 15:08:51 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

查询诊断商品列表及其处理建议

## 权限包

- 商品 / 商品流量效率优化（packageType=1）；适用应用类目：商品供应链、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getProductSuggestionList | 调用的API接口名称 | - | - |
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
| 0 | page_no | pageNo | true | 99 | 1 | 页码，从1开始 | - | - |
| 0 | page_size | pageSize | true | 99 | 20 | 每页数量。一页最多不超过100。 | - | - |
| 0 | suggestion | suggestion | false | 2 | force_offline | 与suggestion_list两个参数必传一个。商品处理建议：force_offline强制下架, suggest_offline建议下架, optimize牵引优化 | - | - |
| 0 | suggestion_list | suggestion_list | false | 3 | [optimize,force_offline] | 与suggestion两个参数必传一个。支持批量查询商品处理建议 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_list | productList | - | 3 | - | 商品列表 | - | R1 |
| 1 | product_list.product_id | productId | - | 99 | 3539925204033339668 | 商品ID | - | - |
| 1 | product_list.product_name | productName | - | 2 | 夏季男生白色短袖 | 商品标题 | - | - |
| 1 | product_list.main_url | mainUrl | - | 2 | https://p9-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153427046487984750183_661ff1f563801d97f382e0ac114a09e6_sx_805824_www933-933 | 商品主图 | - | - |
| 1 | product_list.suggestion | suggestion | - | 2 | force_offline | 商品处理建议：force_offline强制下架, suggest_offline建议下架, optimize牵引优化 | - | - |
| 1 | product_list.suggestion_reason | needOfflineReason | - | 2 | 长期低效品 | 建议下架的原因 | - | - |
| 1 | product_list.first_publish_time | firstPublishTime | - | 2 | 2026-04-23 10:17:48 | 商品首次上架时间 | - | - |
| 0 | total | total | - | 99 | 300 | 商品总条数 | - | - |
| 0 | total_exposure_lower_cnt | totalExposureLowerCnt | - | 99 | 0 | 预计释放曝光收益-最小值 | - | - |
| 0 | total_exposure_upper_cnt | totalExposureUpperCnt | - | 99 | 1000 | 预计释放曝光收益-最大值 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/getProductSuggestionList?app_key=your_appkey_here&method=product.getProductSuggestionList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/getProductSuggestionList?app_key=your_appkey_here&method=product.getProductSuggestionList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductGetProductSuggestionListRequest request = new ProductGetProductSuggestionListRequest();
ProductGetProductSuggestionListParam param = request.getParam();
param.setPageNo(1);
param.setPageSize(20);
param.setSuggestion("force_offline");
param.setSuggestionList([optimize,force_offline]);
ProductGetProductSuggestionListResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetProductSuggestionListRequest();
$param = new ProductGetProductSuggestionListParam();
$request->setParam($param);
$param->page_no = 1;
$param->page_size = 20;
$param->suggestion = "force_offline";
$param->suggestion_list = [optimize,force_offline];
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetProductSuggestionListRequest()
param = request.getParams()
param.page_no = 1
param.page_size = 20
param.suggestion = "force_offline"
param.suggestion_list = [optimize,force_offline]
response = request.execute(accessToken)

```

### go

```go
request := product_getProductSuggestionList_request.New()
param := request.GetParams()
param.PageNo = 1
param.PageSize = 20
param.Suggestion = "force_offline"
param.SuggestionList = [optimize,force_offline]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetProductSuggestionListRequest();
var param = request.BuildParam();
param.PageNo = 1;
param.PageSize = 20;
param.Suggestion = "force_offline";
param.SuggestionList = [optimize,force_offline];
var response = request.Execute<ProductGetProductSuggestionListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:605023002 | 605023002:调用商品服务异常 | 请稍后重试，若持续报错请提工单咨询。 |
| 50002 | 业务处理失败 | isv.business-failed:10010 | 10010:参数异常，suggestion和suggestion_list两个参数必传一个 | suggestion和suggestion_list两个参数必传一个 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
