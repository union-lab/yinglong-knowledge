# /spu/queryBookNameByISBN

> 中文说明：根据ISBN查询书名  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2373>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /spu/queryBookNameByISBN |
| 中文名称 | 根据ISBN查询书名 |
| 文档目录 | 商品API |
| Article ID | 2373 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/2/28 11:36:57 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

根据ISBN查询书名，主要用于图书SPU类目

## 权限包

- 商品 / 商品信息查询（packageType=1）；适用应用类目：跨境金服、装修设计、客服工具-微应用、微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、跨境供应链服务、商家自研模版、商家自研组件、撮合服务商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、数据应用、打单发货-微应用、自研微组件、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、虚拟充值、即时零售商家自研、直播工具、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | spu.queryBookNameByISBN | 调用的API接口名称 | - | - |
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
| 0 | category_leaf_id | category_id | false | 99 | 23362 | 类目ID | - | - |
| 0 | isbn | isbn | true | 2 | 9787555289227 | ISBN编号 | - | - |
| 0 | page_no | page | true | 99 | 0 | 当前页数。默认从0开始 | - | - |
| 0 | page_size | size | true | 99 | 10 | 页大小。范围1-100 | - | - |
| 0 | channel | channel | false | 99 | 1/0 | 获取数据的类目版本。0:门捷列夫类目；1:标准类目 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 查询到的数据 | - | R1 |
| 1 | data.spu_id | spu_id | - | 2 | 7130665982338597159 | spu id | - | R1 |
| 1 | data.book_name | book_name | - | 2 | 小王子 | 图书的书名 | - | R1 |
| 1 | data.category_leaf_id | category_id | - | 99 | 23362 | 类目ID | - | R1 |
| 0 | total | total | - | 99 | 12 | 总数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/spu/queryBookNameByISBN?app_key=your_appkey_here&method=spu.queryBookNameByISBN&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/spu/queryBookNameByISBN?app_key=your_appkey_here&method=spu.queryBookNameByISBN&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SpuQueryBookNameByISBNRequest request = new SpuQueryBookNameByISBNRequest();
SpuQueryBookNameByISBNParam param = request.getParam();
param.setCategoryLeafId(23362L);
param.setIsbn("9787555289227");
param.setPageNo(0L);
param.setPageSize(10L);
param.setChannel(1/0);
SpuQueryBookNameByISBNResponse response = request.execute(accessToken);

```

### php

```php
$request = new SpuQueryBookNameByISBNRequest();
$param = new SpuQueryBookNameByISBNParam();
$request->setParam($param);
$param->category_leaf_id = 23362;
$param->isbn = "9787555289227";
$param->page_no = 0;
$param->page_size = 10;
$param->channel = 1/0;
$response = $request->execute(accessToken);

```

### python

```python
request = SpuQueryBookNameByISBNRequest()
param = request.getParams()
param.category_leaf_id = 23362
param.isbn = "9787555289227"
param.page_no = 0
param.page_size = 10
param.channel = 1/0
response = request.execute(accessToken)

```

### go

```go
request := spu_queryBookNameByISBN_request.New()
param := request.GetParams()
param.CategoryLeafId = 23362
param.Isbn = "9787555289227"
param.PageNo = 0
param.PageSize = 10
param.Channel = 1/0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SpuQueryBookNameByISBNRequest();
var param = request.BuildParam();
param.CategoryLeafId = 23362;
param.Isbn = "9787555289227";
param.PageNo = 0;
param.PageSize = 10;
param.Channel = 1/0;
var response = request.Execute<SpuQueryBookNameByISBNResponse>(accessToken);

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
