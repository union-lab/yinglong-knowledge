# /product/getSchema

> 中文说明：商品发布schema-渲染接口  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/6361>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getSchema |
| 中文名称 | 商品发布schema-渲染接口 |
| 文档目录 | 商品API |
| Article ID | 6361 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/5/22 17:05:33 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

商品发布组件化-渲染接口
https://bytedance.larkoffice.com/docx/EjmSdsKvqoxCJkxAaAxcJz4Pnvf

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getSchema | 调用的API接口名称 | - | - |
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
| 0 | category_id | category_id | false | 99 | 31860 | 类目Id | - | - |
| 0 | product_id | product_id | false | 99 | 1232 | 商品Id | - | - |
| 0 | spu_id | spu_id | false | 99 | 1232 | SPU id | - | - |
| 0 | model | model | false | 2 | {} | schem数据、json格式 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | model | model | - | 2 | {} | schem数据、json格式 | - | - |
| 0 | product_data | product_data | - | 5 | - | 商品数据 | - | R1 |
| 1 | product_data.status | status | - | 99 | 3 | 商品在店铺中状态: 0-在线；1-下线；2-删除；详见商品状态机：https://op.jinritemai.com/docs/question-docs/92/2070 | - | - |
| 1 | product_data.check_status | check_status | - | 99 | 3 | 商品审核状态: 1-未提交；2-待审核；3-审核通过；4-审核未通过；5-封禁；7-审核通过待上架；详见商品状态机：https://op.jinritemai.com/docs/question-docs/92/2070 | - | - |
| 1 | product_data.draft_status | draft_status | - | 99 | 0 | 草稿状态；0-无草稿,1-未提审,2-待审核,3-审核通过,4-审核未通过。详见：https://op.jinritemai.com/docs/question-docs/92/2070 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/getSchema?app_key=your_appkey_here&method=product.getSchema&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/getSchema?app_key=your_appkey_here&method=product.getSchema&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductGetSchemaRequest request = new ProductGetSchemaRequest();
ProductGetSchemaParam param = request.getParam();
param.setCategoryId(31860L);
param.setProductId(1232L);
param.setSpuId(1232L);
param.setModel("{}");
ProductGetSchemaResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetSchemaRequest();
$param = new ProductGetSchemaParam();
$request->setParam($param);
$param->category_id = 31860;
$param->product_id = 1232;
$param->spu_id = 1232;
$param->model = "{}";
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetSchemaRequest()
param = request.getParams()
param.category_id = 31860
param.product_id = 1232
param.spu_id = 1232
param.model = "{}"
response = request.execute(accessToken)

```

### go

```go
request := product_getSchema_request.New()
param := request.GetParams()
param.CategoryId = 31860
param.ProductId = 1232
param.SpuId = 1232
param.Model = "{}"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetSchemaRequest();
var param = request.BuildParam();
param.CategoryId = 31860;
param.ProductId = 1232;
param.SpuId = 1232;
param.Model = "{}";
var response = request.Execute<ProductGetSchemaResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:获取店铺标签失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:类目ID必传 | 2010004:类目ID必传 |
| 50002 | 业务处理失败 | isv.business-failed:110105006 | 110105006:不支持操作奖品商品，请前往电脑端进行管理 | 110105006:不支持操作奖品商品，请前往电脑端进行管理 |
| 50002 | 业务处理失败 | isv.business-failed:110105001 | 110105001:不支持操作质检信息相关商品，请前往电脑端进行管理 | 110105001:不支持操作质检信息相关商品，请前往电脑端进行管理 |
| 50002 | 业务处理失败 | isv.business-failed:110201001 | 110201001:未查询到该类目 | 110201001:未查询到该类目 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
