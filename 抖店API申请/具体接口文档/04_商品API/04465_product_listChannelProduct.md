# /product/listChannelProduct

> 中文说明：检索渠道商品  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4465>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/listChannelProduct |
| 中文名称 | 检索渠道商品 |
| 文档目录 | 商品API |
| Article ID | 4465 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/5/13 13:49:59 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

检索渠道商品

## 权限包

- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.listChannelProduct | 调用的API接口名称 | - | - |
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
| 0 | main_product_id | main_product_id | true | 1 | 3232323232323232 | 主商品ID。不需要此查询条件可传0 | - | - |
| 0 | channel_id | channel_id | false | 3 | 1771739938745351 | 渠道ID | - | - |
| 0 | channel_type | channel_type | false | 3 | 3 | 渠道类型：3商家自卖，4达人带货 | - | - |
| 0 | kol_id | kol_id | false | 3 | 1111 | 绑定的达人ID | - | - |
| 0 | status | status | false | 1 | 2 | 渠道品状态：0下架，2上架，3封禁 | - | - |
| 0 | start_time | start_time | false | 2 | 2023-07-01 00:00:00 | 有效期开始时间 | - | - |
| 0 | end_time | end_time | false | 2 | 2023-07-21 00:00:00 | 有效期结束时间 | - | - |
| 0 | page | page | true | 1 | 1 | 第几页，从1开始 | - | - |
| 0 | size | size | true | 1 | 10 | 每页数量，默认20，最多50 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 渠道品列表 | - | R1 |
| 1 | data.detail_brief_material | detailBrief | - | 5 | - | 渠道品详情图信息 | - | R1 |
| 2 | data.detail_brief_material.material_type | material_type | - | 1 | 28 | 素材类型，详情图为28 | - | - |
| 2 | data.detail_brief_material.reject_reason | reject_reason | - | 2 | 图片不清晰 | 审核驳回原因 | - | - |
| 2 | data.detail_brief_material.material_status | material_status | - | 1 | 0 | 素材状态<br>0：草稿 | - | - |
| 1 | data.main_img_material | material | - | 5 | - | 渠道品主图信息 | - | R1 |
| 2 | data.main_img_material.material_status | material_status | - | 1 | 0 | 素材状态<br>0：草稿 | - | - |
| 2 | data.main_img_material.reject_reason | reject_reason | - | 2 | 图片不清晰 | 审核驳回原因 | - | - |
| 2 | data.main_img_material.material_type | material_type | - | 1 | 18 | 素材类型，主图为18 | - | - |
| 1 | data.sku_code_follow_main | sku_code_follow_main | - | 4 | false | 商家编码与主品保持一致配置，true-保持一致，false-自定义 | - | - |
| 1 | data.name | name | - | 2 | 半身裙 | 渠道品标题 | 39 | - |
| 1 | data.main_product_id | main_product_id | - | 1 | 3232323232323232 | 主商品ID | 39 | - |
| 1 | data.channel_id | channel_id | - | 1 | 1771739938745351 | 渠道ID | 39 | - |
| 1 | data.channel_type | channel_type | - | 1 | 3 | 渠道类型 | 39 | - |
| 1 | data.start_time | start_time | - | 2 | 2023-02-21 16:46:21 | 有效期开始时间 | 39 | - |
| 1 | data.end_time | end_time | - | 2 | 2023-02-21 16:46:21 | 有效期结束时间 | 39 | - |
| 1 | data.status | status | - | 1 | 2 | 渠道品状态<br>0：下架<br>2：上架<br>3：封禁 | 39 | - |
| 1 | data.kol_info | kol_info | - | 5 | - | 绑定达人信息 | - | R1 |
| 2 | data.kol_info.bind_kol_num | bind_kol_num | - | 1 | 11 | 绑定达人数量 | 39 | - |
| 2 | data.kol_info.bind_all | bind_all | - | 4 | true | 绑定所有 | 39 | - |
| 0 | total | total | - | 1 | 12 | 总数 | 39 | - |
| 0 | page | page | - | 1 | 1 | 当前页面数 | 39 | - |
| 0 | size | size | - | 1 | 10 | 每页数目大小 | 39 | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.comyunc/erp/inbound/callback?app_key=your_appkey_here&method=yunc.erp.inbound.callback&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.comyunc/erp/inbound/callback?app_key=your_appkey_here&method=yunc.erp.inbound.callback&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductListChannelProductRequest request = new ProductListChannelProductRequest();
ProductListChannelProductParam param = request.getParam();
param.setMainProductId(3232323232323232L);
param.setChannelId(1771739938745351);
param.setChannelType(3);
param.setKolId(1111);
param.setStatus(2L);
param.setStartTime("2023-07-01 00:00:00");
param.setEndTime("2023-07-21 00:00:00");
param.setPage(1L);
param.setSize(10L);
ProductListChannelProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductListChannelProductRequest();
$param = new ProductListChannelProductParam();
$request->setParam($param);
$param->main_product_id = 3232323232323232;
$param->channel_id = 1771739938745351;
$param->channel_type = 3;
$param->kol_id = 1111;
$param->status = 2;
$param->start_time = "2023-07-01 00:00:00";
$param->end_time = "2023-07-21 00:00:00";
$param->page = 1;
$param->size = 10;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductListChannelProductRequest()
param = request.getParams()
param.main_product_id = 3232323232323232
param.channel_id = 1771739938745351
param.channel_type = 3
param.kol_id = 1111
param.status = 2
param.start_time = "2023-07-01 00:00:00"
param.end_time = "2023-07-21 00:00:00"
param.page = 1
param.size = 10
response = request.execute(accessToken)

```

### go

```go
request := product_listChannelProduct_request.New()
param := request.GetParams()
param.MainProductId = 3232323232323232
param.ChannelId = 1771739938745351
param.ChannelType = 3
param.KolId = 1111
param.Status = 2
param.StartTime = "2023-07-01 00:00:00"
param.EndTime = "2023-07-21 00:00:00"
param.Page = 1
param.Size = 10
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductListChannelProductRequest();
var param = request.BuildParam();
param.MainProductId = 3232323232323232;
param.ChannelId = 1771739938745351;
param.ChannelType = 3;
param.KolId = 1111;
param.Status = 2;
param.StartTime = "2023-07-01 00:00:00";
param.EndTime = "2023-07-21 00:00:00";
param.Page = 1;
param.Size = 10;
var response = request.Execute<ProductListChannelProductResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010003 | 商家不在开放名单内 | 商家不在开放名单内 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 系统异常,请重试 | 系统异常,请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | pageSize不可超过50 | pageSize不可超过50 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
