# /buyin/activityProductList

> 中文说明：一级团长查询提报活动商品  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1926>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/activityProductList |
| 中文名称 | 一级团长查询提报活动商品 |
| 文档目录 | 精选联盟API |
| Article ID | 1926 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2026/4/21 16:59:27 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

接口用于一级团长查询自身提报了二级团长的商品及商品审核状态

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.activityProductList | 调用的API接口名称 | - | - |
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
| 0 | page | page | true | 99 | 1 | 页数，从1开始 | - | - |
| 0 | size | size | true | 99 | 20 | 每页条数（最大20） | - | - |
| 0 | activity_id | activity_id | true | 99 | 54321 | 活动ID | - | - |
| 0 | applied_sub_status | applied_sub_status | false | 99 | 0 | 报名商品子状态。0:待审核； 1:合作中； 2:拒绝合作； 4:未合作取消； 5:合作中取消 | - | - |
| 0 | product_info | product_info | false | 2 | 1237623814243 | 商品信息（支持传商品id或者商品名称，传商品id精确匹配，传商品名称模糊匹配） | - | - |
| 0 | sort_field | sort_field | false | 99 | 1 | 排序字段。0：默认（同百应）；1：更新时间 | - | - |
| 0 | sort_direction | sort_direction | false | 99 | 1 | 排序方式。1：升序；2：倒序，sort_field为1时有效 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | products | products | - | 3 | - | 活动商品 | - | R1 |
| 1 | products.product_id | product_id | - | 99 | 4172957616417246 | 商品ID | - | R1 |
| 1 | products.product_name | product_name | - | 2 | 一个商品 | 商品名称 | - | R1 |
| 1 | products.product_price | product_price | - | 9 | 1000 | 售价（单位：分） | - | R1 |
| 1 | products.product_stock | product_stock | - | 99 | 100 | 库存 | - | R1 |
| 1 | products.commission_rate | commission_rate | - | 9 | 1000 | 佣金率（1000表示佣金率10%） | - | R1 |
| 1 | products.service_rate | service_rate | - | 9 | 1000 | 服务费率（1000表示佣金率10%） | - | R1 |
| 1 | products.product_img | product_img | - | 2 | https://p6-aio.ecombdimg.com/obj/temai/a7f0a0f3b3f0140dbafe239a94301f83www800-800 | 商品主图 | - | R1 |
| 1 | products.promote_start_time | promote_start_time | - | 2 | 2022-09-09 | 商品推广开始时间 | - | R1 |
| 1 | products.promote_end_time | promote_end_time | - | 2 | 2022-10-09 | 商品推广结束时间 | - | R1 |
| 1 | products.origin_activity_id | origin_activity_id | - | 99 | 54632 | 原始活动ID | - | R1 |
| 1 | products.origin_activity_name | origin_activity_name | - | 2 | 原始活动 | 原始活动名称 | - | R1 |
| 1 | products.is_trusteeship_product | is_trusteeship_product | - | 4 | true | 是否为托管商品 | - | R1 |
| 1 | products.apply_id | apply_id | - | 99 | 2368541234412 | 申请唯一标识 | - | R1 |
| 1 | products.update_time | update_time | - | 2 | 2006-01-02 15:04:05 | 更新时间 | - | R1 |
| 1 | products.ad_commission_rate | ad_commission_rate | - | 9 | 1000 | 提报双佣金投放期佣金率 | - | - |
| 1 | products.ad_service_rate | ad_service_rate | - | 9 | 500 | 提报双佣金投放期服务费率 | - | - |
| 1 | products.cos_type | cos_type | - | 99 | 1 | 提报佣金类型 0:固定佣金 1:双佣金 | - | - |
| 0 | total | total | - | 99 | 100 | 商品总数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/activityProductList?app_key=your_appkey_here&method=buyin.activityProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/activityProductList?app_key=your_appkey_here&method=buyin.activityProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinActivityProductListRequest request = new BuyinActivityProductListRequest();
BuyinActivityProductListParam param = request.getParam();
param.setPage(1L);
param.setSize(20L);
param.setActivityId(54321L);
param.setAppliedSubStatus(0);
param.setProductInfo("1237623814243");
param.setSortField(1L);
param.setSortDirection(1L);
BuyinActivityProductListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinActivityProductListRequest();
$param = new BuyinActivityProductListParam();
$request->setParam($param);
$param->page = 1;
$param->size = 20;
$param->activity_id = 54321;
$param->applied_sub_status = 0;
$param->product_info = "1237623814243";
$param->sort_field = 1;
$param->sort_direction = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinActivityProductListRequest()
param = request.getParams()
param.page = 1
param.size = 20
param.activity_id = 54321
param.applied_sub_status = 0
param.product_info = "1237623814243"
param.sort_field = 1
param.sort_direction = 1
response = request.execute(accessToken)

```

### go

```go
request := buyin_activityProductList_request.New()
param := request.GetParams()
param.Page = 1
param.Size = 20
param.ActivityId = 54321
param.AppliedSubStatus = 0
param.ProductInfo = "1237623814243"
param.SortField = 1
param.SortDirection = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinActivityProductListRequest();
var param = request.BuildParam();
param.Page = 1;
param.Size = 20;
param.ActivityId = 54321;
param.AppliedSubStatus = 0;
param.ProductInfo = "1237623814243";
param.SortField = 1;
param.SortDirection = 1;
var response = request.Execute<BuyinActivityProductListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:4200 | 4200:账号状态异常，请检查账号状态 | 4200:账号状态异常，请检查账号状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
