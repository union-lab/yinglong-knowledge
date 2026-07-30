# /buyin/originColonelUnappliedProductList

> 中文说明：团长获取可提报二级团长活动的商品列表  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1677>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/originColonelUnappliedProductList |
| 中文名称 | 团长获取可提报二级团长活动的商品列表 |
| 文档目录 | 精选联盟API |
| Article ID | 1677 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2026/4/21 17:15:48 |
| 授权主体 | ["团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

本接口用于团长获取自身可提报二级团长活动的商品列表（需业务方自行筛选出不符合活动限制条件的商品）

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.originColonelUnappliedProductList | 调用的API接口名称 | - | - |
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
| 0 | page | page | false | 99 | 1 | 页码，从1开始 | - | - |
| 0 | page_size | page_size | true | 99 | 20 | 每页条数，最大20 | - | - |
| 0 | activity_id | activity_id | true | 99 | 54321 | 活动ID | - | - |
| 0 | product_info | product_info | false | 2 | 一个商品 | 商品名称 or 商品ID | - | - |
| 0 | retrieve_mode | retrieve_mode | false | 99 | 1 | 获取模式。0: 分页模式（默认），最多返回10000条数据；1: 游标模式（推荐），返回条数无限制 | - | - |
| 0 | cursor | cursor | false | 2 | cefe2r3r2332dcd2/ddf32 | 游标。首页不需要传，请求下一页时需传入上一次请求响应的next_cursor值 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 数据 | - | R1 |
| 1 | data.update_time | update_time | - | 99 | 1688356428 | 更新时间 | - | - |
| 1 | data.cannot_apply_reason | cannot_apply_activity_reason | - | 2 | 商品未开启普通计划，暂不支持报名 | 如果不能报名活动，则返回不能报名活动的原因 | - | - |
| 1 | data.can_apply | can_apply_activity | - | 4 | true | 能否报名当前活动。true-能报名活动；false-不能报名活动 | - | - |
| 1 | data.product_id | product_id | - | 99 | 73618234123 | 商品ID | - | R1 |
| 1 | data.product_name | product_name | - | 2 | 一个商品 | 商品名称 | - | R1 |
| 1 | data.product_img | product_img | - | 2 | https:www.baidu.com | 商品图片 | - | R1 |
| 1 | data.product_price | product_price | - | 9 | 100 | 商品售价（单位：分） | - | R1 |
| 1 | data.product_stock | product_stock | - | 99 | 100 | 库存 | - | R1 |
| 1 | data.commission_rate | commission_rate | - | 9 | 10.5 | 佣金率（10.11%返回1011） | - | R1 |
| 1 | data.service_rate | service_rate | - | 9 | 10.5 | 服务费率（10.11%返回1011） | - | R1 |
| 1 | data.category_id | category_id | - | 99 | 1 | 类目ID | - | R1 |
| 1 | data.category_name | category_name | - | 2 | 1对应的类目名称 | 类目名称 | - | R1 |
| 1 | data.promote_start_time | promote_start_time | - | 2 | 2022-01-10 | 推广开始时间 | - | R1 |
| 1 | data.promote_end_time | promote_end_time | - | 2 | 2022-02-20 | 推广结束时间 | - | R1 |
| 1 | data.origin_activity_id | origin_activity_id | - | 2 | 51261 | 原始活动id —— 团长招商活动商品 | - | R1 |
| 1 | data.origin_activity_name | origin_activity_name | - | 2 | 原始团长名称 | 原始活动名称 —— 团长招商活动商品 | - | R1 |
| 1 | data.applied_by_others | applied_by_others | - | 4 | true | 其他人是否已在此活动提报了该商品：ture-商品已被其他人提报，当前团长不能报名；false-商品未被其他人提报，当前团长能报名 | - | R1 |
| 1 | data.can_promote | can_promot | - | 4 | true | 能否推广 | - | R1 |
| 1 | data.ad_commission_rate | ad_commission_rate | - | 9 | 10.5 | 双佣金投放期佣金率 | - | - |
| 1 | data.ad_service_rate | ad_service_rate | - | 9 | 5.5 | 双佣金投放期服务费率 | - | - |
| 1 | data.cos_type | cos_type | - | 99 | 1 | 佣金类型 0:固定佣金， 1:双佣金 | - | - |
| 0 | total | total | - | 99 | 100 | 总数 | - | R1 |
| 0 | next_cursor | next_cursor | - | 2 | ee2k23i492njwtio5j435ij34n5n34 | 下一页游标。游标模式下返回，最后一页返回空 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/originColonelUnappliedProductList?app_key=your_appkey_here&method=buyin.originColonelUnappliedProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/originColonelUnappliedProductList?app_key=your_appkey_here&method=buyin.originColonelUnappliedProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinOriginColonelUnappliedProductListRequest request = new BuyinOriginColonelUnappliedProductListRequest();
BuyinOriginColonelUnappliedProductListParam param = request.getParam();
param.setPage(1L);
param.setPageSize(20L);
param.setActivityId(54321L);
param.setProductInfo("一个商品");
param.setRetrieveMode(1);
param.setCursor("cefe2r3r2332dcd2/ddf32");
BuyinOriginColonelUnappliedProductListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinOriginColonelUnappliedProductListRequest();
$param = new BuyinOriginColonelUnappliedProductListParam();
$request->setParam($param);
$param->page = 1;
$param->page_size = 20;
$param->activity_id = 54321;
$param->product_info = "一个商品";
$param->retrieve_mode = 1;
$param->cursor = "cefe2r3r2332dcd2/ddf32";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinOriginColonelUnappliedProductListRequest()
param = request.getParams()
param.page = 1
param.page_size = 20
param.activity_id = 54321
param.product_info = "一个商品"
param.retrieve_mode = 1
param.cursor = "cefe2r3r2332dcd2/ddf32"
response = request.execute(accessToken)

```

### go

```go
request := buyin_originColonelUnappliedProductList_request.New()
param := request.GetParams()
param.Page = 1
param.PageSize = 20
param.ActivityId = 54321
param.ProductInfo = "一个商品"
param.RetrieveMode = 1
param.Cursor = "cefe2r3r2332dcd2/ddf32"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinOriginColonelUnappliedProductListRequest();
var param = request.BuildParam();
param.Page = 1;
param.PageSize = 20;
param.ActivityId = 54321;
param.ProductInfo = "一个商品";
param.RetrieveMode = 1;
param.Cursor = "cefe2r3r2332dcd2/ddf32";
var response = request.Execute<BuyinOriginColonelUnappliedProductListResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:4200 | 4200:账号状态异常，请检查账号状态 | 4200:账号状态异常，请检查账号状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
