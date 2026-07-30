# /buyin/kolProductsDetail

> 中文说明：1、本接口用于查询达人视角下单个或批量推广商品的详情； 2、如商品推广不可推广（如下架、清退、封禁等情况下），接口会返回为空；商品状态查询接口：/buyin/materialsProductStatus 3、调用接口前，请先获取精选联盟业务权限：https  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2866>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/kolProductsDetail |
| 中文名称 | 1、本接口用于查询达人视角下单个或批量推广商品的详情； 2、如商品推广不可推广（如下架、清退、封禁等情况下），接口会返回为空；商品状态查询接口：/buyin/materialsProductStatus 3、调用接口前，请先获取精选联盟业务权限：https |
| 文档目录 | 精选联盟API |
| Article ID | 2866 |
| 文档版本 | V1.07 |
| 官方更新时间 | 2026/4/21 17:04:54 |
| 授权主体 | ["达人","抖客"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

1、本接口用于查询达人视角下单个或批量推广商品的详情；
2、如商品推广不可推广（如下架、清退、封禁等情况下），接口会返回为空；商品状态查询接口：/buyin/materialsProductStatus
3、调用接口前，请先获取精选联盟业务权限：https://bytedance.feishu.cn/docs/doccnTpYgYuMug26RbiD92VB5Xb ；
4、数据请按需获取，获取的数据越少接口性能越高。

## 权限包

- 精选联盟 / 达人商品物料（packageType=1）；适用应用类目：联盟抖客分销、联盟抖客直播间分销、达人选品、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 精选联盟商品物料（packageType=1）；适用应用类目：联盟抖客分销、联盟抖客直播间分销、团长商品推广、团长管理、达人选品、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 商品分销物料（packageType=1）；适用应用类目：创新应用大赛_微应用、联盟抖客分销
- 精选联盟 / 精选联盟物料查询（packageType=1）；适用应用类目：联盟自研、微应用-标题优化、创新应用大赛_微应用、联盟抖客分销、撮合服务商、联盟抖客直播间分销、直播间AI导购、团长管理、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研、直播间导购-微应用
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.kolProductsDetail | 调用的API接口名称 | - | - |
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
| 0 | product_ids | product_ids | true | 3 | [7234818347981234] | 商品 ID 列表 | - | - |
| 0 | fields | fields | false | 2 | base_info, promotion_info | 需要获取的字段（取products字段下的一级字段，多个用英文逗号隔开，如果不传默认只返回商品基础信息。强烈建议数据按需获取） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | products | products | - | 3 | - | 商品列表 | - | R1 |
| 1 | products.detail_brief | detail_brief | - | 5 | - | 装修详情信息 | - | R1 |
| 2 | products.detail_brief.success | success | - | 4 | true | 数据是否可用 | - | - |
| 2 | products.detail_brief.component_info | component_info | - | 3 | - | 组件列表 | - | R1 |
| 3 | products.detail_brief.component_info.image | image | - | 5 | - | 图片组件 | - | R1 |
| 4 | products.detail_brief.component_info.image.pic_url | pic_url | - | 2 | https://p3-aio.ecombdimg.com/obj/ecom-shop-material/EMNEddDN_m_ffdc4638f14893f98a41a76173528_sx_113ww750-1000 | 图片URL | - | - |
| 4 | products.detail_brief.component_info.image.width | width | - | 6 | 400 | 图片宽度 | - | - |
| 4 | products.detail_brief.component_info.image.height | height | - | 6 | 400 | 图片高度 | - | - |
| 1 | products.base_info | base_info | - | 5 | - | 基础信息 | - | R1 |
| 2 | products.base_info.product_id | product_id | - | 1 | 21878462384413 | 商品 ID | - | - |
| 2 | products.base_info.title | title | - | 2 | 测试商品 | 商品标题 | - | - |
| 2 | products.base_info.price | price | - | 1 | 100 | 商品价格（单位：分） | - | - |
| 2 | products.base_info.first_cid | first_cid | - | 1 | 11 | 商品一级类目 | - | - |
| 2 | products.base_info.second_cid | second_cid | - | 1 | 2011 | 商品二级类目 | - | - |
| 2 | products.base_info.third_cid | third_cid | - | 1 | 3040 | 商品三级类目 | - | - |
| 2 | products.base_info.in_stock | in_stock | - | 4 | true | 是否有库存 | - | - |
| 2 | products.base_info.sales | sales | - | 1 | 1000 | 总销量 | - | - |
| 2 | products.base_info.cover | cover | - | 2 | https://sf1-ttcdn-tos.pstatp.com/img/temai/Fpt8famR3twTGYz09e25nz5PbTRuwww800-800~1125x1125_q50.webp | 商品主图 | - | - |
| 2 | products.base_info.imgs | imgs | - | 3 | [商品轮播图] | 商品轮播图 | - | R1 |
| 2 | products.base_info.detail_url | detail_url | - | 2 | https://haohuo.jinritemai.com/views/product/item2?id=3400312511185213726 | 商品链接 | - | - |
| 2 | products.base_info.category_name | category_name | - | 2 | 玩具乐器 | 行业类目名称 | - | - |
| 2 | products.base_info.category_id | category_id | - | 1 | 2 | 行业类目 ID | - | - |
| 2 | products.base_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.promotion_info | promotion_info | - | 5 | - | 推广信息 | - | R1 |
| 2 | products.promotion_info.cos_ratio | cos_ratio | - | 9 | 10 | 普通佣金比例（10%返回10） | - | - |
| 2 | products.promotion_info.cos_fee | cos_fee | - | 1 | 100 | 普通佣金金额（单位为分） | - | - |
| 2 | products.promotion_info.kol_cos_ratio | kol_cos_ratio | - | 9 | 10 | 达人佣金比例 | - | - |
| 2 | products.promotion_info.kol_cos_fee | kol_cos_fee | - | 1 | 100 | 达人佣金金额（单位为分） | - | - |
| 2 | products.promotion_info.commission_type | commission_type | - | 7 | 1 | 佣金类型（1-团长普通模式，2-团长竞价模式，3-普通佣金，4-商品定向佣金，5-店铺定向佣金，6-提报活动，7-招募佣金，8-托管团长，9-阶梯佣金） | - | - |
| 2 | products.promotion_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.comment_info | comment_info | - | 5 | - | 评论信息 | - | R1 |
| 2 | products.comment_info.comment_score | comment_score | - | 9 | 3 | 商品评分（5分制，保留一位） | - | - |
| 2 | products.comment_info.comment_num | comment_num | - | 1 | 231 | 商品评价数目 | - | - |
| 2 | products.comment_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.month_sale_data | month_sale_data | - | 5 | - | 月售信息 | - | R1 |
| 2 | products.month_sale_data.order_num | order_num | - | 1 | 100 | 近30天商品总销量 | - | - |
| 2 | products.month_sale_data.view_num | view_num | - | 1 | 1000 | 近30天商品总浏览量 | - | - |
| 2 | products.month_sale_data.kol_num | kol_num | - | 1 | 100 | 近30天推广总达人数 | - | - |
| 2 | products.month_sale_data.daily_statistics | daily_statistics | - | 3 | - | 近30天推广达人数、浏览量、和订单量明细 | - | R1 |
| 3 | products.month_sale_data.daily_statistics.date | date | - | 2 | 20210101 | 日期 | - | - |
| 3 | products.month_sale_data.daily_statistics.order_num | order_num | - | 1 | 100 | 单日商品销量 | - | - |
| 3 | products.month_sale_data.daily_statistics.view_num | view_num | - | 1 | 100 | 单日商品浏览量 | - | - |
| 3 | products.month_sale_data.daily_statistics.kol_num | kol_num | - | 1 | 100 | 单日推广达人数 | - | - |
| 2 | products.month_sale_data.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.share_info | share_info | - | 5 | - | 分销信息 | - | R1 |
| 2 | products.share_info.sharable | sharable | - | 4 | true | 是否可分销 | - | - |
| 2 | products.share_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.brand_info | brand_info | - | 5 | - | 品牌信息 | - | R1 |
| 2 | products.brand_info.brand_id | brand_id | - | 1 | 36721 | 品牌 ID | - | - |
| 2 | products.brand_info.brand_name_cn | brand_name_cn | - | 2 | 品牌名称 | 品牌名称 | - | - |
| 2 | products.brand_info.brand_name_en | brand_name_en | - | 2 | english_name | 品牌英文名 | - | - |
| 2 | products.brand_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.tags | tags | - | 5 | - | 商品标签 | - | R1 |
| 2 | products.tags.has_supermarket_tag | has_supermarket_tag | - | 4 | true | 是否抖音超市(次日达)商品 | - | - |
| 2 | products.tags.has_subsidy_tag | has_subsidy_tag | - | 4 | true | 是否超值购商品 | - | - |
| 2 | products.tags.has_douin_goods_tag | has_douin_goods_tag | - | 2 | true | 是否有【抖in好物】标签 | - | - |
| 2 | products.tags.has_shop_brand_tag | has_shop_brand_tag | - | 4 | true | 是否有品牌旗舰店标签（[品牌]黑标） | - | - |
| 2 | products.tags.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.activity_info | activity_info | - | 5 | - | 【废弃】推荐使用tags字段 | - | R1 |
| 2 | products.activity_info.activity_type | activity_type | - | 1 | 1 | 活动类型。0：未参加活动；1：超值购 | - | - |
| 2 | products.activity_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.coupon_info | coupon_info | - | 5 | - | 券信息 | - | R1 |
| 2 | products.coupon_info.available_coupons | available_coupons | - | 3 | - | 优惠券列表 | - | R1 |
| 3 | products.coupon_info.available_coupons.coupon_type | coupon_type | - | 7 | 1 | 优惠券类型。1： 平台券 2： 店铺券 3： 主播券 | - | - |
| 3 | products.coupon_info.available_coupons.type_desc | type_desc | - | 2 | 平台券 | 优惠券类型描述：平台券/主播券/店铺券 | - | - |
| 3 | products.coupon_info.available_coupons.discount_desc | discount_desc | - | 2 | 满20减1 | 优惠券内容描述 | - | - |
| 3 | products.coupon_info.available_coupons.apply_start_time | apply_start_time | - | 2 | 2016-01-01 12:00:00 | 优惠券领取开始时间 | - | - |
| 3 | products.coupon_info.available_coupons.apply_end_time | apply_end_time | - | 2 | 2016-01-01 12:00:00 | 优惠券领取结束时间 | - | - |
| 3 | products.coupon_info.available_coupons.validity_type | validity_type | - | 1 | 1 | 优惠券有效期类型：1固定有效期类型，2浮动有效期类型 | - | - |
| 3 | products.coupon_info.available_coupons.use_start_time | use_start_time | - | 2 | 2016-01-01 12:00:00 | 1固定有效期类型，优惠券使用开始时间 | - | - |
| 3 | products.coupon_info.available_coupons.use_end_time | use_end_time | - | 2 | 2016-01-01 12:00:00 | 1固定有效期类型，优惠券使用结束时间 | - | - |
| 3 | products.coupon_info.available_coupons.valid_period | valid_period | - | 1 | 3600 | 2浮动有效期类型，领取优惠券后有效期，单位s | - | - |
| 2 | products.coupon_info.coupon_price | coupon_price | - | 1 | 100 | 券后价（单位：分） | - | - |
| 2 | products.coupon_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.presell_info | presell_info | - | 5 | - | 预售信息 | - | R1 |
| 2 | products.presell_info.presell_type | presell_type | - | 1 | 1 | 预售类型。0:非预售，1;全款预售，2:阶梯库存 | - | - |
| 2 | products.presell_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.rights_info | rights_info | - | 5 | - | 权益信息 | - | R1 |
| 2 | products.rights_info.is_assured | is_assured | - | 4 | true | 是否提供安心购服务 | - | - |
| 2 | products.rights_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.logistics_info | logistics_info | - | 5 | - | 物流信息 | - | R1 |
| 2 | products.logistics_info.text | text | - | 2 | 48小时内从浙江省发货 运费3元起 | 商品物流说明 | - | - |
| 2 | products.logistics_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.qualification_info | qualification_info | - | 5 | - | 资质信息 | - | R1 |
| 2 | products.qualification_info.has_sxt | has_sxt | - | 4 | true | 是否具有短视频随心推资质 | - | - |
| 2 | products.qualification_info.success | success | - | 4 | true | 数据是否可用 | - | - |
| 1 | products.shop_info | shop_info | - | 5 | - | 店铺信息 | - | R1 |
| 2 | products.shop_info.shop_id | shop_id | - | 1 | 51234 | 店铺 ID | - | - |
| 2 | products.shop_info.shop_name | shop_name | - | 2 | 店铺名称 | 店铺名称 | - | - |
| 2 | products.shop_info.shop_total_score | shop_total_score | - | 5 | - | 商家得分 | - | R1 |
| 3 | products.shop_info.shop_total_score.shop_score | shop_score | - | 5 | - | 商家体验分 | - | R1 |
| 4 | products.shop_info.shop_total_score.shop_score.text | text | - | 2 | 商家体验分 | 文本 | - | - |
| 4 | products.shop_info.shop_total_score.shop_score.score | score | - | 2 | 4.92 | 得分 | - | - |
| 4 | products.shop_info.shop_total_score.shop_score.level | level | - | 6 | 1 | 等级。1:高 2:中 3:低 | - | - |
| 3 | products.shop_info.shop_total_score.product_score | product_score | - | 5 | - | 商品体验分 | - | R1 |
| 4 | products.shop_info.shop_total_score.product_score.text | text | - | 2 | 商品体验分 | 文本 | - | - |
| 4 | products.shop_info.shop_total_score.product_score.score | score | - | 2 | 4.92 | 得分 | - | - |
| 4 | products.shop_info.shop_total_score.product_score.level | level | - | 6 | 1 | 等级。1:高； 2:中； 3:低; 4: 暂无等级 | - | - |
| 3 | products.shop_info.shop_total_score.logistics_score | logistics_score | - | 5 | - | 物流体验分 | - | R1 |
| 4 | products.shop_info.shop_total_score.logistics_score.text | text | - | 2 | 物流体验分 | 文本 | - | - |
| 4 | products.shop_info.shop_total_score.logistics_score.score | score | - | 2 | 4.92 | 得分 | - | - |
| 4 | products.shop_info.shop_total_score.logistics_score.level | level | - | 6 | 1 | 等级。1:高； 2:中； 3:低; 4: 暂无等级 | - | - |
| 3 | products.shop_info.shop_total_score.service_score | service_score | - | 5 | - | 商家服务分 | - | R1 |
| 4 | products.shop_info.shop_total_score.service_score.text | text | - | 2 | 商家服务分 | 文本 | - | - |
| 4 | products.shop_info.shop_total_score.service_score.score | score | - | 2 | 4.92 | 得分 | - | - |
| 4 | products.shop_info.shop_total_score.service_score.level | level | - | 6 | 1 | 等级。1:高； 2:中； 3:低; 4: 暂无等级 | - | - |
| 2 | products.shop_info.success | success | - | 4 | true | 数据是否可用 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/opptyProduct/apply?app_key=your_appkey_here&method=opptyProduct.apply&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/opptyProduct/apply?app_key=your_appkey_here&method=opptyProduct.apply&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinKolProductsDetailRequest request = new BuyinKolProductsDetailRequest();
BuyinKolProductsDetailParam param = request.getParam();
param.setProductIds([7234818347981234]);
param.setFields("base_info, promotion_info");
BuyinKolProductsDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinKolProductsDetailRequest();
$param = new BuyinKolProductsDetailParam();
$request->setParam($param);
$param->product_ids = [7234818347981234];
$param->fields = "base_info, promotion_info";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinKolProductsDetailRequest()
param = request.getParams()
param.product_ids = [7234818347981234]
param.fields = "base_info, promotion_info"
response = request.execute(accessToken)

```

### go

```go
request := buyin_kolProductsDetail_request.New()
param := request.GetParams()
param.ProductIds = [7234818347981234]
param.Fields = "base_info, promotion_info"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinKolProductsDetailRequest();
var param = request.BuildParam();
param.ProductIds = [7234818347981234];
param.Fields = "base_info, promotion_info";
var response = request.Execute<BuyinKolProductsDetailResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4099 | 商品数过多 | 参数校验失败: 商品数过多 |
| 50002 | 业务处理失败 | isv.business-failed:4348 | 查询用户信息失败，需要正确的授权角色 | 查询用户信息失败，需要正确的授权角色 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
