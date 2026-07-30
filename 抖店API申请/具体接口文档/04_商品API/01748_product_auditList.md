# /product/auditList

> 中文说明：审核记录列表  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1748>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/auditList |
| 中文名称 | 审核记录列表 |
| 文档目录 | 商品API |
| Article ID | 1748 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/1/7 19:46:48 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

1、查询审核记录列表，以及审核被驳回的原因；
2、只支持查询近15天提交审核的记录 ；

## 权限包

- 商品 / 商品信息查询（packageType=1）；适用应用类目：跨境金服、装修设计、客服工具-微应用、微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、跨境供应链服务、商家自研模版、商家自研组件、撮合服务商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、数据应用、打单发货-微应用、自研微组件、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、虚拟充值、即时零售商家自研、直播工具、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.auditList | 调用的API接口名称 | - | - |
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
| 0 | publish_status | publish_status | true | 99 | 0 | 指定审核状态返回商品列表：0-审核中 1-审核通过 2-审核拒绝 | - | - |
| 0 | page | page | true | 99 | 0 | 第几页（第一页为0，最大为99） | - | - |
| 0 | size | size | true | 99 | 20 | 每页返回条数，最多支持100条 | - | - |
| 0 | product_id | product_id | false | 99 | 11 | 商品id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | records | records | - | 3 | - | 审核记录列表 | - | R1 |
| 1 | records.audit_reason_details | audit_reason_details | - | 3 | - | 驳回原因列表 | - | R1 |
| 2 | records.audit_reason_details.reject_reason_list | reject_reason_list | - | 3 | - | 详细的驳回明细原因 | - | R1 |
| 3 | records.audit_reason_details.reject_reason_list.sku_infos | sku_infos | - | 3 | - | 明细sku | - | R1 |
| 4 | records.audit_reason_details.reject_reason_list.sku_infos.sku_id | sku_id | - | 99 | skuid | skuid | - | - |
| 4 | records.audit_reason_details.reject_reason_list.sku_infos.sku_title | sku_title | - | 2 | 规格名 | 规格名 | - | - |
| 3 | records.audit_reason_details.reject_reason_list.reject_img_list | reject_img_list | - | 3 | - | 驳回图片 | - | R1 |
| 4 | records.audit_reason_details.reject_reason_list.reject_img_list.url | url | - | 2 | url | 图片url | - | - |
| 3 | records.audit_reason_details.reject_reason_list.reason_text | reason_text | - | 2 | 驳回原因 | 驳回原因 | - | - |
| 2 | records.audit_reason_details.title | title | - | 2 | 驳回模块名称 | 驳回模块名称 | - | - |
| 2 | records.audit_reason_details.type | type | - | 2 | 驳回模块类型 | 驳回模块类型 | - | - |
| 1 | records.product_id | product_id | - | 99 | 111 | 商品id | - | R1 |
| 1 | records.title | title | - | 2 | 测试商品 | 商品名称 | - | R1 |
| 1 | records.img_url | img_url | - | 2 | http://aaa | 商品主图 | - | R1 |
| 1 | records.publish_status | publish_status | - | 99 | 0 | 0-审核中 1-审核通过 2-审核拒绝 | - | R1 |
| 1 | records.publish_time | publish_time | - | 99 | 1668135600 | 提审时间，单位为秒 | - | R1 |
| 1 | records.audit_time | audit_time | - | 99 | 1668135600 | 审核通过/拒绝时间，单位为秒 | - | R1 |
| 1 | records.audit_reason | audit_reason | - | 8 | 审核未通过理由 | 审核未通过理由 | - | R1 |
| 0 | total | total | - | 99 | 11 | 总数量 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/auditList?app_key=your_appkey_here&method=product.auditList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/auditList?app_key=your_appkey_here&method=product.auditList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductAuditListRequest request = new ProductAuditListRequest();
ProductAuditListParam param = request.getParam();
param.setPublishStatus(0L);
param.setPage(0L);
param.setSize(20L);
param.setProductId(11L);
ProductAuditListResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductAuditListRequest();
$param = new ProductAuditListParam();
$request->setParam($param);
$param->publish_status = 0;
$param->page = 0;
$param->size = 20;
$param->product_id = 11;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductAuditListRequest()
param = request.getParams()
param.publish_status = 0
param.page = 0
param.size = 20
param.product_id = 11
response = request.execute(accessToken)

```

### go

```go
request := product_auditList_request.New()
param := request.GetParams()
param.PublishStatus = 0
param.Page = 0
param.Size = 20
param.ProductId = 11
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductAuditListRequest();
var param = request.BuildParam();
param.PublishStatus = 0;
param.Page = 0;
param.Size = 20;
param.ProductId = 11;
var response = request.Execute<ProductAuditListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:系统异常,请重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:page or size is invalid | page or size is invalid |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
