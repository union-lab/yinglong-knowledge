# /alliance/colonelGetOfficialSelectionProductList

> 中文说明：团长拉取爆品合伙人选品库商品  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/8361>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/colonelGetOfficialSelectionProductList |
| 中文名称 | 团长拉取爆品合伙人选品库商品 |
| 文档目录 | 精选联盟API |
| Article ID | 8361 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/6/9 21:46:43 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

团长拉取爆品合伙人选品库商品

## 权限包

- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.colonelGetOfficialSelectionProductList | 调用的API接口名称 | - | - |
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
| 0 | commission_rate | commission_rate | false | 2 | 10 | - 佣金率筛选，可指定佣金范围，支持如下格式<br>  - 0,5<br>  - 10,20<br>  - 20,30<br>  - 30,40<br>  - 40,50<br>  - 50,-1 | - | - |
| 0 | order_by | order_by | false | 2 | desc | asc:升序，desc:降序，默认desc | - | - |
| 0 | month_sales | month_sales | false | 99 | -1 | - 月销筛选，可筛选月销满足要求的商品，支持如下格式<br>  - 1  含义是>=5千<br>  - 2  含义是>=1万<br>  - 3  含义是>=2万<br>  - 4  含义是>=3万<br>  - 5  含义是>=5万 | - | - |
| 0 | query_info | query_info | false | 2 | 衣服 | 可指定商品信息/店铺信息查询 | - | - |
| 0 | shop_score | shop_score | false | 99 | -1 | - 店铺分筛选，可筛选店铺分达标的商品，支持如下格式<br>  - 1  含义是>=80分<br>  - 2  含义是>=85分<br>  - 3  含义是>=90分<br>  - 4  含义是>=95分<br>  - 5  含义是=100分 | - | - |
| 0 | cat_id | cat_id | false | 99 | -1 | 行业类目筛选，可指定电商行业大类id | - | - |
| 0 | order_field | order_field | false | 2 | product_price | - 排序字段，支持如下四种排序<br>  - product_price<br>  - commission_rate<br>  - month_sales<br>  - promoters_count | - | - |
| 0 | page | page | false | 99 | 1 | 默认1 | - | - |
| 0 | product_price | product_price | false | 2 | -1 | - 商品价格筛选，可指定价格范围，支持如下格式<br>  - 0,10<br>  - 10,30<br>  - 30,50<br>  - 50,100<br>  - 100,500<br>  - 500,-1 | - | - |
| 0 | service_rate | service_rate | false | 2 | -1 | - 服务费率筛选，可指定服务费范围，支持如下格式<br>  - 0,3<br>  - 3,5<br>  - 5,8<br>  - 10,-1 | - | - |
| 0 | promote_time | promote_time | false | 99 | -1 | - 可合作时间筛选，可指定合作到期时间范围，支持如下格式<br>  - 0  含义是>=7天<br>  - 1  含义是>=30天<br>  - 2  含义是>=90天<br>  - 3  含义是>=180天<br>  - 4  含义是>=360天 | - | - |
| 0 | promoters_count | promoters_count | false | 2 | -1 | - 带货达人数筛选，可筛选商品的带货达人数量，支持如下格式<br>  - 100 含义是>=100个达人<br>  - 200 含义是>=200个达人<br>  - 500 含义是>=500个达人<br>  - 1000 含义是>=1000个达人 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | has_more | has_more | - | 4 | true | 是否有更多 | - | - |
| 0 | base_resp | base_resp | - | 5 | - | 接触返回 | - | R1 |
| 1 | base_resp.status_message | status_message | - | 2 | 成功 | 返回错误信息 | - | - |
| 1 | base_resp.status_code | status_code | - | 99 | 0 | 返回码 | - | - |
| 0 | total | total | - | 99 | 100 | 商品总数 | - | - |
| 0 | product_list | product_list | - | 3 | - | 商品列表 | - | R1 |
| 1 | product_list.common_ad_commission_rate | common_ad_commission_rate | - | 2 | 10 | 全部达人投广佣金率 | - | - |
| 1 | product_list.shop_score | shop_score | - | 2 | 85 | 店铺体验分 | - | - |
| 1 | product_list.cos_type | cos_type | - | 99 | 1 | 佣金类型 1:双佣 | - | - |
| 1 | product_list.ad_service_rate | ad_service_rate | - | 2 | 10 | 投广服务费率 | - | - |
| 1 | product_list.shop_name | shop_name | - | 2 | 测试商家 | 商家名称 | - | - |
| 1 | product_list.views | views | - | 99 | 100 | 近30日浏览量 | - | - |
| 1 | product_list.ad_commission_rate | ad_commission_rate | - | 2 | 10 | 投广佣金率 | - | - |
| 1 | product_list.common_commission_rate | common_commission_rate | - | 2 | 10 | 全部达人佣金率 | - | - |
| 1 | product_list.origin_institution_name | origin_institution_name | - | 2 | 团长A | 原始机构名称 | - | - |
| 1 | product_list.alliance_month_sales | alliance_month_sales | - | 99 | 1234 | 近30日联盟销量 | - | - |
| 1 | product_list.channel_type_percent | channel_type_percent | - | 3 | [15,85] | 带货类型，第一个值表示直播占比，第二个值表示视频占比 | - | R1 |
| 1 | product_list.common_cos_type | common_cos_type | - | 99 | 1 | 全部达人佣金类型 | - | - |
| 1 | product_list.promotion_end_time_desc | promotion_end_time_desc | - | 2 | >=30天 | 投放结束时间描述 | - | - |
| 1 | product_list.origin_institution_id | origin_institution_id | - | 99 | 12345123512 | 原始机构id（投放商品该字段不为空） | - | - |
| 1 | product_list.promoters_count | promoters_count | - | 99 | 123 | 推广达人数 | - | - |
| 1 | product_list.shop_id | shop_id | - | 99 | 1234 | 商家id | - | - |
| 1 | product_list.promotion_end_time | promotion_end_time | - | 2 | 2026/06/01 | 投放结束时间 | - | - |
| 1 | product_list.product_img | product_img | - | 2 | https://product.img | 商品图片 | - | - |
| 1 | product_list.commission_rate | commission_rate | - | 2 | 10 | 佣金率 | - | - |
| 1 | product_list.product_id | product_id | - | 99 | 13251235123 | 商品id | - | - |
| 1 | product_list.origin_activity_id | origin_activity_id | - | 99 | 1234 | 活动id（如果是托管商品则活动id为0） | - | - |
| 1 | product_list.service_rate | service_rate | - | 2 | 10 | 服务费率 | - | - |
| 1 | product_list.product_name | product_name | - | 2 | 测试商品 | 商品名称 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/colonelGetOfficialSelectionProductList?app_key=your_appkey_here&method=alliance.colonelGetOfficialSelectionProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/colonelGetOfficialSelectionProductList?app_key=your_appkey_here&method=alliance.colonelGetOfficialSelectionProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceColonelGetOfficialSelectionProductListRequest request = new AllianceColonelGetOfficialSelectionProductListRequest();
AllianceColonelGetOfficialSelectionProductListParam param = request.getParam();
param.setCommissionRate("10");
param.setOrderBy("desc");
param.setMonthSales(-1L);
param.setQueryInfo("衣服");
param.setShopScore(-1L);
param.setCatId(-1L);
param.setOrderField("product_price");
param.setPage(1L);
param.setProductPrice("-1");
param.setServiceRate("-1");
param.setPromoteTime(-1L);
param.setPromotersCount("-1");
AllianceColonelGetOfficialSelectionProductListResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceColonelGetOfficialSelectionProductListRequest();
$param = new AllianceColonelGetOfficialSelectionProductListParam();
$request->setParam($param);
$param->commission_rate = "10";
$param->order_by = "desc";
$param->month_sales = -1;
$param->query_info = "衣服";
$param->shop_score = -1;
$param->cat_id = -1;
$param->order_field = "product_price";
$param->page = 1;
$param->product_price = "-1";
$param->service_rate = "-1";
$param->promote_time = -1;
$param->promoters_count = "-1";
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceColonelGetOfficialSelectionProductListRequest()
param = request.getParams()
param.commission_rate = "10"
param.order_by = "desc"
param.month_sales = -1
param.query_info = "衣服"
param.shop_score = -1
param.cat_id = -1
param.order_field = "product_price"
param.page = 1
param.product_price = "-1"
param.service_rate = "-1"
param.promote_time = -1
param.promoters_count = "-1"
response = request.execute(accessToken)

```

### go

```go
request := alliance_colonelGetOfficialSelectionProductList_request.New()
param := request.GetParams()
param.CommissionRate = "10"
param.OrderBy = "desc"
param.MonthSales = -1
param.QueryInfo = "衣服"
param.ShopScore = -1
param.CatId = -1
param.OrderField = "product_price"
param.Page = 1
param.ProductPrice = "-1"
param.ServiceRate = "-1"
param.PromoteTime = -1
param.PromotersCount = "-1"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceColonelGetOfficialSelectionProductListRequest();
var param = request.BuildParam();
param.CommissionRate = "10";
param.OrderBy = "desc";
param.MonthSales = -1;
param.QueryInfo = "衣服";
param.ShopScore = -1;
param.CatId = -1;
param.OrderField = "product_price";
param.Page = 1;
param.ProductPrice = "-1";
param.ServiceRate = "-1";
param.PromoteTime = -1;
param.PromotersCount = "-1";
var response = request.Execute<AllianceColonelGetOfficialSelectionProductListResponse>(accessToken);

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
