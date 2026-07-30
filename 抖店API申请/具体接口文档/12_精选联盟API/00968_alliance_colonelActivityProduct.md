# /alliance/colonelActivityProduct

> 中文说明：活动商品查询接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/968>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/colonelActivityProduct |
| 中文名称 | 活动商品查询接口 |
| 文档目录 | 精选联盟API |
| Article ID | 968 |
| 文档版本 | V10.01 |
| 官方更新时间 | 2026/4/21 17:15:15 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 900 |

## 使用说明

获取专属团长活动商品列表，需团长百应授权

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.colonelActivityProduct | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | true | 99 | 11111 | 活动ID | - | - |
| 0 | search_type | search_type | false | 99 | 4 | 召回结果排序条件，[推荐按更新时间倒序查]。0：报名时间；1：活动价格排序；2：活动佣金比例排序；4：更新时间排序 | - | - |
| 0 | sort_type | sort_type | false | 99 | 0 | 排序顺序。0：升序；1：降序 | - | - |
| 0 | page | page | false | 99 | 1 | 页码，从1开始。分页模式下生效，超过10000条会被限制，推荐使用游标模式 retrieve_mode=1 | - | - |
| 0 | count | count | true | 99 | 20 | 每页数量（每页最多20） | - | - |
| 0 | cooperation_info | cooperation_info | false | 2 | 23412312 | 商家ID or 商家名称 or 一级团长名称 or 一级团长ID | - | - |
| 0 | cooperation_type | cooperation_type | false | 99 | 0 | 合作类型. 0: 不限; 1: 商家; 2: 团长 | - | - |
| 0 | product_info | product_info | false | 2 | 一个商品 | 商品ID/名称（支持根据商品id或者商品名称搜索，商品ID精准匹配，商品名称模糊匹配） | - | - |
| 0 | status | status | false | 99 | 0 | 活动商品状态，不传查所有状态。0：待审核；1：推广中；2：申请未通过；3：合作已终止；6：合作已到期 | - | - |
| 0 | retrieve_mode | retrieve_mode | false | 99 | 1 | 获取模式。0: 分页模式（默认），最多返回10000条数据；1: 游标模式（推荐），返回条数无限制 | - | - |
| 0 | cursor | cursor | false | 2 | cefe2r3r2332dcd2/ddf32 | 游标。首页不需要传，请求下一页时需传入上一次请求响应的next_cursor值 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 活动商品列表 | - | R1 |
| 1 | data.exclusion_duration | exclusion_duration | - | 99 | 2 | 团长保护期，单位：月<br>} | - | - |
| 1 | data.can_promote | can_promote | - | 4 | true | 能否推广（true:可推广） | - | - |
| 1 | data.product_id | product_id | - | 99 | 11111 | 商品ID | - | R1 |
| 1 | data.title | title | - | 2 | 商品111 | 商品名称 | - | R1 |
| 1 | data.price | price | - | 99 | 100 | 商品售价（单位为分） | - | R1 |
| 1 | data.cos_ratio | cos_ratio | - | 9 | 10 | 佣金比例（10表示佣金率为10%） | - | R1 |
| 1 | data.cos_fee | cos_fee | - | 99 | 1 | 佣金金额，单位分 | - | R1 |
| 1 | data.first_cid | first_cid | - | 99 | 1 | 商品一级类目 | - | R1 |
| 1 | data.second_cid | second_cid | - | 99 | 1 | 商品二级类目 | - | R1 |
| 1 | data.third_cid | third_cid | - | 99 | 1 | 商品三级类目 | - | R1 |
| 1 | data.in_stock | in_stock | - | 4 | true | 是否有库存 | - | R1 |
| 1 | data.sales | sales | - | 99 | 11111 | 销量 | - | R1 |
| 1 | data.cover | cover | - | 2 | fdsaf | 商品主图 | - | R1 |
| 1 | data.detail_url | detail_url | - | 2 | https://haohuo.jinritemai.com/views/product/detail?id=34782428681388176\u0026ins_activity_param=Rpd9L\u0026pick_source=jCS47 | 商品团长活动链接 | - | R1 |
| 1 | data.shop_id | shop_id | - | 99 | 111 | 店铺ID | - | R1 |
| 1 | data.shop_name | shop_name | - | 2 | 店铺111 | 店铺名称 | - | R1 |
| 1 | data.activity_price | activity_price | - | 9 | 111 | 活动售价（单位元，保留两位小数）--废弃 | - | R1 |
| 1 | data.activity_cos_ratio | activity_cos_ratio | - | 9 | 1000 | 活动佣金比例(1000 表示佣金比例为10%) | - | R1 |
| 1 | data.activity_cos_fee | activity_cos_fee | - | 9 | 1 | 活动佣金金额（单位元，保留两位小数）--废弃 | - | R1 |
| 1 | data.status | status | - | 99 | 1 | 商品审核状态。0：待审核；1：推广中；2：申请未通过；3：合作已终止；4:合作前取消；6：合作已到期 | - | R1 |
| 1 | data.reason | reason | - | 2 | dfsadf | 审核原因 | - | R1 |
| 1 | data.shop_contact | shop_contact | - | 2 | 6UNGOWt5MkBIgEDQ1I31w== | 商家联系方式，返回的是密文，不支持解密 | - | R1 |
| 1 | data.activity_start_time | activity_start_time | - | 2 | 2021-09-02 | 活动开始时间 | - | R1 |
| 1 | data.activity_end_time | activity_end_time | - | 2 | 2021-09-02 | 活动结束时间 | - | R1 |
| 1 | data.promotion_start_time | promotion_start_time | - | 2 | 2021-09-02 | 商品活动推广开始时间 | - | R1 |
| 1 | data.promotion_end_time | promotion_end_time | - | 2 | 2021-09-02 | 商品活动推广结束时间（未延期时与活动结束时间相同） | - | R1 |
| 1 | data.service_ratio | service_ratio | - | 2 | 11 | 招商团长服务费率 | - | R1 |
| 1 | data.apply_id | apply_id | - | 99 | 11111 | 审核ID，是专属团长活动商品审核接口必传参数，status=0 时返回 | - | R1 |
| 1 | data.category_id | category_id | - | 99 | 2 | 行业类目ID | - | R1 |
| 1 | data.category_name | category_name | - | 2 | 玩具乐器 | 行业类目名称 | - | R1 |
| 1 | data.product_stock | product_stock | - | 2 | 100 | 商品库存 | - | R1 |
| 1 | data.colonel_coupon_info | colonel_coupon_info | - | 2 | 满1000减100 | 团长优惠券信息 | - | R1 |
| 1 | data.is_new_shop | is_new_shop | - | 4 | true | 是否为新手店铺 | - | R1 |
| 1 | data.shop_score | shop_score | - | 2 | 4.45 | 店铺分 | - | R1 |
| 1 | data.promotion_stock | promotion_stock | - | 2 | 100 | 活动库存--废弃 | - | R1 |
| 1 | data.gift_info | gift_info | - | 2 | 一个小礼物 | 赠品信息--废弃 | - | R1 |
| 1 | data.promotion_step | promotion_step | - | 2 | 买就送一个小礼物 | 活动实现方式--废弃 | - | R1 |
| 1 | data.origin_institution_id | origin_institution_id | - | 99 | 0 | 原始团长 id | - | R1 |
| 1 | data.origin_institution_name | origin_institution_name | - | 2 | 团长的名称 | 原始团长名称 | - | R1 |
| 1 | data.origin_institution_phone | origin_institution_phone | - | 2 | 010-22209090 | 原始团长电话 | - | R1 |
| 1 | data.origin_activity_start_time | origin_activity_start_time | - | 2 | 2023/01/02 | 原始团长活动有效期生效开始时间 | - | R1 |
| 1 | data.origin_activity_end_time | origin_activity_end_time | - | 2 | 2023/04/02 | 原始团长活动有效期生效结束时间 | - | R1 |
| 1 | data.origin_activity_id | origin_activity_id | - | 99 | 0 | 原始活动id | - | R1 |
| 1 | data.is_trusteeship_product | is_trusteeship_product | - | 4 | true | 托管商品标识（true:托管商品，该字段仅在团长报团长时生效） | - | R1 |
| 1 | data.update_time | update_time | - | 2 | 2006-01-02 15:04:05 | 更新时间 | - | R1 |
| 1 | data.origin_colonel_buyin_id | origin_colonel_buyin_id | - | 99 | 4312346713451234 | 团长百应 id | - | R1 |
| 1 | data.months_of_protection | months_of_protection | - | 99 | 6 | 团长保护期（月数） | - | R1 |
| 1 | data.ad_service_ratio | ad_service_ratio | - | 2 | 10 | 招商团长双佣金投放期服务费率，只有cos_type是1时值生效 | - | - |
| 1 | data.activity_ad_cos_ratio | activity_ad_cos_ratio | - | 9 | 8 | 活动双佣金投放期佣金率，只有cos_type是1时值生效 | - | - |
| 1 | data.cos_type | cos_type | - | 99 | 1 | 佣金类型，0:固定佣金 1:双佣金 | - | - |
| 1 | data.has_douin_goods_tag | has_douin_goods_tag | - | 4 | true | 是否有【抖in好物】标签 | - | - |
| 0 | total | total | - | 99 | 10 | 活动商品条数，游标模式下不返回 | - | R1 |
| 0 | institution_id | institution_id | - | 99 | 111111 | 机构id | - | R1 |
| 0 | next_cursor | next_cursor | - | 2 | ee2k23i492njwtio5j435ij34n5n34 | 下一页游标。游标模式下返回，最后一页返回空 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/colonelActivityProduct?app_key=your_appkey_here&method=alliance.colonelActivityProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/colonelActivityProduct?app_key=your_appkey_here&method=alliance.colonelActivityProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceColonelActivityProductRequest request = new AllianceColonelActivityProductRequest();
AllianceColonelActivityProductParam param = request.getParam();
param.setActivityId(11111L);
param.setSearchType(4L);
param.setSortType(0L);
param.setPage(1L);
param.setCount(20L);
param.setCooperationInfo("23412312");
param.setCooperationType(0);
param.setProductInfo("一个商品");
param.setStatus(0L);
param.setRetrieveMode(1);
param.setCursor("cefe2r3r2332dcd2/ddf32");
AllianceColonelActivityProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceColonelActivityProductRequest();
$param = new AllianceColonelActivityProductParam();
$request->setParam($param);
$param->activity_id = 11111;
$param->search_type = 4;
$param->sort_type = 0;
$param->page = 1;
$param->count = 20;
$param->cooperation_info = "23412312";
$param->cooperation_type = 0;
$param->product_info = "一个商品";
$param->status = 0;
$param->retrieve_mode = 1;
$param->cursor = "cefe2r3r2332dcd2/ddf32";
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceColonelActivityProductRequest()
param = request.getParams()
param.activity_id = 11111
param.search_type = 4
param.sort_type = 0
param.page = 1
param.count = 20
param.cooperation_info = "23412312"
param.cooperation_type = 0
param.product_info = "一个商品"
param.status = 0
param.retrieve_mode = 1
param.cursor = "cefe2r3r2332dcd2/ddf32"
response = request.execute(accessToken)

```

### go

```go
request := alliance_colonelActivityProduct_request.New()
param := request.GetParams()
param.ActivityId = 11111
param.SearchType = 4
param.SortType = 0
param.Page = 1
param.Count = 20
param.CooperationInfo = "23412312"
param.CooperationType = 0
param.ProductInfo = "一个商品"
param.Status = 0
param.RetrieveMode = 1
param.Cursor = "cefe2r3r2332dcd2/ddf32"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceColonelActivityProductRequest();
var param = request.BuildParam();
param.ActivityId = 11111;
param.SearchType = 4;
param.SortType = 0;
param.Page = 1;
param.Count = 20;
param.CooperationInfo = "23412312";
param.CooperationType = 0;
param.ProductInfo = "一个商品";
param.Status = 0;
param.RetrieveMode = 1;
param.Cursor = "cefe2r3r2332dcd2/ddf32";
var response = request.Execute<AllianceColonelActivityProductResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4097 | 无效分页大小 | 每页最多20条数据 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:8197 | 不允许继续翻页，请使用游标模式加载更多数据 | 请使用游标模式加载更多数据，详情：https://op.jinritemai.com/docs/notice-docs/5/3237 |
| 50002 | 业务处理失败 | isv.business-failed:4200 | 4200:账号状态异常，请检查账号状态 | 4200:账号状态异常，请检查账号状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
