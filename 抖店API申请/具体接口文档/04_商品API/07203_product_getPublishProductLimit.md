# /product/getPublishProductLimit

> 中文说明：获取店铺发品限额  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/7203>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getPublishProductLimit |
| 中文名称 | 获取店铺发品限额 |
| 文档目录 | 商品API |
| Article ID | 7203 |
| 文档版本 | V1.06 |
| 官方更新时间 | 2025/1/10 18:31:35 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

获取店铺发品限额，当前包括单店铺、单日发品限额

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getPublishProductLimit | 调用的API接口名称 | - | - |
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
| 0 | first_category_id | first_category_id | false | 1 | 20017 | 一级类目id，可选 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_limit_result | productLimitResult | - | 3 | - | 返回校验结果列表 | - | R1 |
| 1 | product_limit_result.limit_type | limit_type | - | 1 | 1 | 1：店铺每天发品总数，2：一级类目发品数（已作废），3：在线商品数，4：open店铺发品数，5：mock店铺发品数（已作废），6：店铺每日草稿发品数 | - | - |
| 1 | product_limit_result.has_limit | has_limit | - | 4 | true | 是否有限制 | - | - |
| 1 | product_limit_result.hit_limit | hit_limit | - | 4 | true | 是否命中限制 | - | - |
| 1 | product_limit_result.remain_count | remain_count | - | 1 | 0 | 剩余数量 | - | - |

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
ProductGetPublishProductLimitRequest request = new ProductGetPublishProductLimitRequest();
ProductGetPublishProductLimitParam param = request.getParam();
param.setFirstCategoryId(20017L);
ProductGetPublishProductLimitResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetPublishProductLimitRequest();
$param = new ProductGetPublishProductLimitParam();
$request->setParam($param);
$param->first_category_id = 20017;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetPublishProductLimitRequest()
param = request.getParams()
param.first_category_id = 20017
response = request.execute(accessToken)

```

### go

```go
request := product_getPublishProductLimit_request.New()
param := request.GetParams()
param.FirstCategoryId = 20017
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetPublishProductLimitRequest();
var param = request.BuildParam();
param.FirstCategoryId = 20017;
var response = request.Execute<ProductGetPublishProductLimitResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:2010001 | 系统错误 | 请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
