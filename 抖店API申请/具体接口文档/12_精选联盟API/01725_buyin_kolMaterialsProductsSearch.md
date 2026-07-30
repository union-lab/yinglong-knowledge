# /buyin/kolMaterialsProductsSearch

> 中文说明：检索精选联盟商品，需达人/抖客授权  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1725>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/kolMaterialsProductsSearch |
| 中文名称 | 检索精选联盟商品，需达人/抖客授权 |
| 文档目录 | 精选联盟API |
| Article ID | 1725 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/4/21 17:08:44 |
| 授权主体 | ["达人","抖客","MCN机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 600 |

## 使用说明

本接口用于检索小店联盟商品。可根据筛选条件过滤出满足条件的商品，也可根据排序条件对检索出来的商品进行排序。接口返回的商品列表会受授权达人推荐策略的影响，同时响应结果增加了达人佣金率和佣金/抖客推广费率和推广费。

## 权限包

- 精选联盟 / 达人商品物料（packageType=1）；适用应用类目：联盟抖客分销、联盟抖客直播间分销、达人选品、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 商品分销物料（packageType=1）；适用应用类目：创新应用大赛_微应用、联盟抖客分销
- 精选联盟 / 精选联盟物料查询（packageType=1）；适用应用类目：联盟自研、微应用-标题优化、创新应用大赛_微应用、联盟抖客分销、撮合服务商、联盟抖客直播间分销、直播间AI导购、团长管理、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研、直播间导购-微应用
- 精选联盟 / 精选联盟商品物料（packageType=1）；适用应用类目：联盟抖客分销、联盟抖客直播间分销、团长商品推广、团长管理、达人选品、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 二方定制 / 穿山甲定制权限包（packageType=1）
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.kolMaterialsProductsSearch | 调用的API接口名称 | - | - |
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
| 0 | title | title | false | 2 | 测试商品名称 | 商品标题，返回标题中包含某个关键词的商品 | - | - |
| 0 | first_cids | first_cids | false | 3 | [1,2,3,4] | 筛选商品一级类目 | - | - |
| 0 | second_cids | second_cids | false | 3 | [22] | 筛选商品二级类目 | - | - |
| 0 | third_cids | third_cids | false | 3 | [333] | 筛选商品三级类目 | - | - |
| 0 | price_min | price_min | false | 99 | 1 | 筛选价格区间-最小值（单位为分） | - | - |
| 0 | price_max | price_max | false | 99 | 1000 | 筛选价格区间-最大值（单位为分） | - | - |
| 0 | sell_num_min | sell_num_min | false | 99 | 0 | 筛选历史销量区间-最小值 | - | - |
| 0 | sell_num_max | sell_num_max | false | 99 | 1000 | 筛选历史销量区间-最大值 | - | - |
| 0 | search_type | search_type | true | 99 | 0 | 召回结果排序条件，0默认排序1历史销量排序2价格排序3佣金金额排序4佣金比例排序； | - | - |
| 0 | sort_type | sort_type | true | 99 | 0 | 排序顺序（0升序1降序） | - | - |
| 0 | cos_fee_min | cos_fee_min | false | 99 | 1 | 筛选普通佣金区间-最小值（单位为分） | - | - |
| 0 | cos_fee_max | cos_fee_max | false | 99 | 50 | 筛选普通佣金区间-最大值（单位为分） | - | - |
| 0 | cos_ratio_min | cos_ratio_min | false | 99 | 1 | 筛选普通佣金率区间-最小值 （乘100，例如1.1%为110） | - | - |
| 0 | cos_ratio_max | cos_ratio_max | false | 99 | 15 | 筛选普通佣金率区间-最大值（乘100，例如1.1%为110） | - | - |
| 0 | page | page | true | 99 | 1 | 分页（从1开始） | - | - |
| 0 | page_size | page_size | true | 99 | 10 | 每页的数量（小于等于20） | - | - |
| 0 | share_status | share_status | false | 99 | 1 | 获取商品分销状态。1: 仅返回可分销商品；0:返回全量商品 | - | - |
| 0 | activity_id | activity_id | false | 99 | 1 | 【废弃】推荐使用tag字段。 | - | - |
| 0 | tag | tag | false | 99 | 1 | 商品标签。 0:返回全量商品; 1:返回超值购商品; 2:返回抖音超市(次日达)商品 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 1000 | 商品总数 | - | R1 |
| 0 | products | products | - | 3 | - | 商品列表 | - | R1 |
| 1 | products.commission_type | commission_type | - | 99 | 1 | 佣金类型（1-团长普通模式，2-团长竞价模式，3-普通佣金，4-商品定向佣金，5-店铺定向佣金，6-提报活动，7-招募佣金，8-托管团长，9-阶梯佣金） | - | - |
| 1 | products.product_id | product_id | - | 0 | 3400312511185213726 | 商品id | 39 | R1 |
| 1 | products.title | title | - | 2 | 测试商品 | 商品标题 | 39 | R1 |
| 1 | products.price | price | - | 99 | 100 | 商品售价（单位为分） | 123 | R1 |
| 1 | products.cos_ratio | cos_ratio | - | 9 | 10 | 普通佣金比例（乘100，例如10%为10） | 125 | R1 |
| 1 | products.cos_fee | cos_fee | - | 99 | 1 | 普通佣金金额（单位为分） | 125 | R1 |
| 1 | products.first_cid | first_cid | - | 99 | 1206 | 商品一级类目 | 39 | R1 |
| 1 | products.second_cid | second_cid | - | 99 | 1402 | 商品二级类目 | 39 | R1 |
| 1 | products.third_cid | third_cid | - | 99 | 2634 | 商品三级类目 | 39 | R1 |
| 1 | products.in_stock | in_stock | - | 4 | 1 | 是否有库存 | - | R1 |
| 1 | products.sales | sales | - | 99 | 1234 | 历史总销量 | - | R1 |
| 1 | products.cover | cover | - | 2 | https://sf1-ttcdn-tos.pstatp.com/img/temai/Fpt8famR3twTGYz09e25nz5PbTRuwww800-800~1125x1125_q50.webp | 商品主图 | 39 | R1 |
| 1 | products.detail_url | detail_url | - | 2 | https://haohuo.jinritemai.com/views/product/item2?id=3400312511185213726 | 商品链接（普通计划链接） | 39 | R1 |
| 1 | products.shop_id | shop_id | - | 99 | 2232 | 店铺ID | - | R1 |
| 1 | products.shop_name | shop_name | - | 2 | maggie测试小铺 | 店铺名称 | - | R1 |
| 1 | products.coupon_price | coupon_price | - | 99 | 92 | 券后价（单位：分） | - | R1 |
| 1 | products.sharable | sharable | - | 4 | true | 是否可分销 | - | R1 |
| 1 | products.kol_cos_ratio | kol_cos_ratio | - | 9 | 10.00 | 达人佣金比例 | 125 | R1 |
| 1 | products.kol_cos_fee | kol_cos_fee | - | 99 | 10 | 达人佣金金额（单位为分） | 125 | R1 |
| 1 | products.activity_id | activity_id | - | 99 | 1 | 商品参与活动id。0:未参加活动；1: 超值购 | - | R1 |
| 1 | products.presell_type | presell_type | - | 99 | 0 | 预售类型。0:非预售，1;全款预售，2:阶梯库存 | - | R1 |
| 1 | products.available_coupons | available_coupons | - | 3 | - | 优惠券列表 | - | R1 |
| 2 | products.available_coupons.coupon_type | coupon_type | - | 99 | 1 | 优惠券类型：1 平台券 2 店铺券 3 主播券 | - | R1 |
| 2 | products.available_coupons.type_desc | type_desc | - | 2 | 平台券 | 优惠券类型描述：平台券/主播券/店铺券 | - | R1 |
| 2 | products.available_coupons.discount_desc | discount_desc | - | 2 | 满20减1 | 优惠券内容描述 | - | R1 |
| 2 | products.available_coupons.apply_start_time | apply_start_time | - | 2 | 2016-01-01 12:00:00 | 优惠券领取开始时间 | - | R1 |
| 2 | products.available_coupons.apply_end_time | apply_end_time | - | 2 | 2016-01-01 13:00:00 | 优惠券领取结束时间 | - | R1 |
| 2 | products.available_coupons.validity_type | validity_type | - | 99 | 1 | 优惠券有效期类型：1固定有效期类型，2浮动有效期类型 | - | R1 |
| 2 | products.available_coupons.use_start_time | use_start_time | - | 2 | 2016-01-01 12:00:00 | 1固定有效期类型，优惠券使用开始时间 | - | R1 |
| 2 | products.available_coupons.use_end_time | use_end_time | - | 2 | 2016-01-01 13:00:00 | 1固定有效期类型，优惠券使用结束时间 | - | R1 |
| 2 | products.available_coupons.valid_period | valid_period | - | 99 | 3600 | 2浮动有效期类型，领取优惠券后有效期，单位s | - | R1 |
| 1 | products.post_free | post_free | - | 4 | true | 是否包邮（不包含阶梯计价） | - | - |
| 1 | products.limit_min_sale | limit_min_sale | - | 4 | false | 是否多件起购 | - | - |
| 1 | products.kol_ad_cos_ratio | kol_ad_cos_ratio | - | 9 | 10.00 | 达人双佣金 佣金比例 | - | - |
| 1 | products.kol_ad_cos_fee | kol_ad_cos_fee | - | 99 | 10 | 达人双佣金 投放期佣金金额（单位为分） | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/kolMaterialsProductsSearch?app_key=your_appkey_here&method=buyin.kolMaterialsProductsSearch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/kolMaterialsProductsSearch?app_key=your_appkey_here&method=buyin.kolMaterialsProductsSearch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinKolMaterialsProductsSearchRequest request = new BuyinKolMaterialsProductsSearchRequest();
BuyinKolMaterialsProductsSearchParam param = request.getParam();
param.setTitle("测试商品名称");
param.setFirstCids([1,2,3,4]);
param.setSecondCids([22]);
param.setThirdCids([333]);
param.setPriceMin(1);
param.setPriceMax(1000);
param.setSellNumMin(0);
param.setSellNumMax(1000);
param.setSearchType(0);
param.setSortType(0);
param.setCosFeeMin(1);
param.setCosFeeMax(50);
param.setCosRatioMin(1);
param.setCosRatioMax(15);
param.setPage(1L);
param.setPageSize(10L);
param.setShareStatus(1);
param.setActivityId(1L);
param.setTag(1L);
BuyinKolMaterialsProductsSearchResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinKolMaterialsProductsSearchRequest();
$param = new BuyinKolMaterialsProductsSearchParam();
$request->setParam($param);
$param->title = "测试商品名称";
$param->first_cids = [1,2,3,4];
$param->second_cids = [22];
$param->third_cids = [333];
$param->price_min = 1;
$param->price_max = 1000;
$param->sell_num_min = 0;
$param->sell_num_max = 1000;
$param->search_type = 0;
$param->sort_type = 0;
$param->cos_fee_min = 1;
$param->cos_fee_max = 50;
$param->cos_ratio_min = 1;
$param->cos_ratio_max = 15;
$param->page = 1;
$param->page_size = 10;
$param->share_status = 1;
$param->activity_id = 1;
$param->tag = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinKolMaterialsProductsSearchRequest()
param = request.getParams()
param.title = "测试商品名称"
param.first_cids = [1,2,3,4]
param.second_cids = [22]
param.third_cids = [333]
param.price_min = 1
param.price_max = 1000
param.sell_num_min = 0
param.sell_num_max = 1000
param.search_type = 0
param.sort_type = 0
param.cos_fee_min = 1
param.cos_fee_max = 50
param.cos_ratio_min = 1
param.cos_ratio_max = 15
param.page = 1
param.page_size = 10
param.share_status = 1
param.activity_id = 1
param.tag = 1
response = request.execute(accessToken)

```

### go

```go
request := buyin_kolMaterialsProductsSearch_request.New()
param := request.GetParams()
param.Title = "测试商品名称"
param.FirstCids = [1,2,3,4]
param.SecondCids = [22]
param.ThirdCids = [333]
param.PriceMin = 1
param.PriceMax = 1000
param.SellNumMin = 0
param.SellNumMax = 1000
param.SearchType = 0
param.SortType = 0
param.CosFeeMin = 1
param.CosFeeMax = 50
param.CosRatioMin = 1
param.CosRatioMax = 15
param.Page = 1
param.PageSize = 10
param.ShareStatus = 1
param.ActivityId = 1
param.Tag = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinKolMaterialsProductsSearchRequest();
var param = request.BuildParam();
param.Title = "测试商品名称";
param.FirstCids = [1,2,3,4];
param.SecondCids = [22];
param.ThirdCids = [333];
param.PriceMin = 1;
param.PriceMax = 1000;
param.SellNumMin = 0;
param.SellNumMax = 1000;
param.SearchType = 0;
param.SortType = 0;
param.CosFeeMin = 1;
param.CosFeeMax = 50;
param.CosRatioMin = 1;
param.CosRatioMax = 15;
param.Page = 1;
param.PageSize = 10;
param.ShareStatus = 1;
param.ActivityId = 1;
param.Tag = 1;
var response = request.Execute<BuyinKolMaterialsProductsSearchResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4098 | 参数校验失败: 无效搜索类型 | 无效搜索类型 |
| 40004 | 非法的参数 | isv.parameter-invalid:4097 | 参数校验失败: 无效分页大小 | 无效分页大小 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4173 | 无效百应ID | 请重新授权 |
| 50002 | 业务处理失败 | isv.business-failed:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:4195 | 今日访问商品数已达上限 | 今日访问商品数已达上限 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
