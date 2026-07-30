# /spu/QuerySpu

> 中文说明：检索SPU  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/6206>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /spu/QuerySpu |
| 中文名称 | 检索SPU |
| 文档目录 | 商品API |
| Article ID | 6206 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/2/2 17:11:13 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

基于关键属性（品牌/型号/货号等）和标识属性（备案/批准文号/ISBN等）检索SPU

## 权限包

- 商品 / 商品信息查询（packageType=1）；适用应用类目：跨境金服、装修设计、客服工具-微应用、微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、跨境供应链服务、商家自研模版、商家自研组件、撮合服务商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、数据应用、打单发货-微应用、自研微组件、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、虚拟充值、即时零售商家自研、直播工具、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | spu.QuerySpu | 调用的API接口名称 | - | - |
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
| 0 | page | page | true | 99 | 0 | 【必填】从第0页开始 | - | - |
| 0 | size | size | true | 99 | 20 | 【必填】最大值为20 | - | - |
| 0 | category_id | category_id | false | 99 | 31860 | 【选填】叶子类目ID | - | - |
| 0 | properties | properties | false | 5 | - | 【选填】属性 | - | - |
| 1 | properties.product_name | product_name | false | 2 | 美容护肤面霜 | 【选填】产品名称 | - | - |
| 1 | properties.ccc | ccc | false | 2 | 2023011606593938 | 【选填】CCC证书编号 | - | - |
| 1 | properties.isbn | isbn | false | 2 | 9787544847346 | 【选填】ISBN | - | - |
| 1 | properties.model | model | false | 2 | F911 | 【选填】型号 | - | - |
| 1 | properties.book_name | book_name | false | 2 | 童话世界 | 【选填】书名 | - | - |
| 1 | properties.goods_number | goods_number | false | 2 | W91216040101 | 【选填】货号 | - | - |
| 1 | properties.brand_id | brand_id | false | 99 | 2078711068 | 【选填】品牌 | - | - |
| 1 | properties.series | series | false | 2 | JAMES 系列 | 【选填】系列 | - | - |
| 1 | properties.registration_approval | registration_approval | false | 2 | 粤G妆网备字2023292746 | 【选填】备案/批准文号 | - | - |
| 0 | status | status | false | 3 | [1,2] | 【选填】SPU状态：1-上线，2-下线，3-审核中，4-审核不通过 | - | - |
| 0 | channel | channel | false | 99 | 0 | 0：门捷列夫，1：标准类目2.0 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 80 | 查询到的总数据量 | - | - |
| 0 | spuList | spuList | - | 3 | - | SPU信息 | - | R1 |
| 1 | spuList.spuId | spuId | - | 99 | 7340298802504761650 | SPUID | - | - |
| 1 | spuList.spuName | spuName | - | 2 | 9787561139684/红点奖:全球最佳视觉传达设计年鉴 | SPU名称 | - | - |
| 1 | spuList.categoryId | categoryId | - | 99 | 23072 | 类目ID | - | - |
| 1 | spuList.brandId | brandId | - | 99 | 437716142 | 品牌ID | - | - |
| 1 | spuList.status | status | - | 99 | 1 | SPU状态 | - | - |
| 1 | spuList.spuPropertyInfos | spuPropertyInfos | - | 3 | - | 属性信息 | - | R1 |
| 2 | spuList.spuPropertyInfos.propertyId | propertyId | - | 99 | 1479 | 属性项ID | - | - |
| 2 | spuList.spuPropertyInfos.propertyName | propertyName | - | 2 | 产品名称 | 属性项名称 | - | - |
| 2 | spuList.spuPropertyInfos.propertyValues | propertyValues | - | 3 | - | 属性值信息 | - | R1 |
| 3 | spuList.spuPropertyInfos.propertyValues.valueId | valueId | - | 99 | 0 | 属性值ID | - | - |
| 3 | spuList.spuPropertyInfos.propertyValues.valueName | valueName | - | 2 | 神经酰胺修护霜 | 属性值名称 | - | - |
| 2 | spuList.spuPropertyInfos.propertyType | propertyType | - | 99 | 1 | 属性类型：0-绑定属性 1-关键属性 2-销售属性 | - | - |
| 1 | spuList.barcodes | barcodes | - | 3 | - | 条码 | - | R1 |
| 2 | spuList.barcodes.barcode | barcode | - | 2 | 6973971701655 | 条码值 | - | - |
| 1 | spuList.materials | materials | - | 3 | - | 素材 | - | R1 |
| 2 | spuList.materials.type | type | - | 99 | 1 | 类型: 1-主图 | - | - |
| 2 | spuList.materials.content | content | - | 3 | - | 内容 | - | R1 |
| 3 | spuList.materials.content.content | content | - | 2 | https://p3-ecom-spu.byteimg.com/tos-cn-i-89jsre2ap7/2feb661390654869ab35a2d05fea5472~tplv-89jsre2ap7-image.image | 内容 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/spu/QuerySpu?app_key=your_appkey_here&method=spu.QuerySpu&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/spu/QuerySpu?app_key=your_appkey_here&method=spu.QuerySpu&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SpuQuerySpuRequest request = new SpuQuerySpuRequest();
SpuQuerySpuParam param = request.getParam();
param.setPage(0L);
param.setSize(20L);
param.setCategoryId(31860L);
param.setStatus([1,2]);
param.setChannel(0);
SpuQuerySpuResponse response = request.execute(accessToken);

```

### php

```php
$request = new SpuQuerySpuRequest();
$param = new SpuQuerySpuParam();
$request->setParam($param);
$param->page = 0;
$param->size = 20;
$param->category_id = 31860;
$param->status = [1,2];
$param->channel = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = SpuQuerySpuRequest()
param = request.getParams()
param.page = 0
param.size = 20
param.category_id = 31860
param.status = [1,2]
param.channel = 0
response = request.execute(accessToken)

```

### go

```go
request := spu_QuerySpu_request.New()
param := request.GetParams()
param.Page = 0
param.Size = 20
param.CategoryId = 31860
param.Status = [1,2]
param.Channel = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SpuQuerySpuRequest();
var param = request.BuildParam();
param.Page = 0;
param.Size = 20;
param.CategoryId = 31860;
param.Status = [1,2];
param.Channel = 0;
var response = request.Execute<SpuQuerySpuResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:40004 | 传入参数错误 | 请检查传入参数 |
| 20000 | 系统错误 | isp.service-error:50002 | 系统异常 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2012004 | 2012004:传入参数异常，该商家无类目[29196]资质 | 2012004:传入参数异常，该商家无类目[29196]资质 |
| 50002 | 业务处理失败 | isv.business-failed:2012013 | 2012013:获取品牌信息失败 | 2012013:获取品牌信息失败 |
| 50002 | 业务处理失败 | isv.business-failed:2012001 | 2012001:查询商家类目资质异常 | 2012001:查询商家类目资质异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
