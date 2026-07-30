# /supplyChain/CouponZoneFeeds

> 中文说明：二级承接页初始化  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2854>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /supplyChain/CouponZoneFeeds |
| 中文名称 | 二级承接页初始化 |
| 文档目录 | 店铺API |
| Article ID | 2854 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/3/9 16:13:02 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

二级承接页初始化

## 权限包

- 店铺 / 跨境店铺装修（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | supplyChain.CouponZoneFeeds | 调用的API接口名称 | - | - |
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
| 0 | coupon_meta_id | couponMetaId | true | 2 | 7173718548748321035 | 优惠券id | - | - |
| 0 | scene | scene | true | 7 | 1 | 场景，根据时新客还是老客，调用不同的Feed策略。1-新客 2-老客 | - | - |
| 0 | enter_time | enterTime | true | 2 | 16721287591 | 进入页面的时间，单位：秒 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | tab_list | tabList | - | 3 | - | tab列表 | - | R1 |
| 1 | tab_list.tab_code | tabCode | - | 7 | 1 | tab编码 | - | - |
| 1 | tab_list.tab_name | tabName | - | 2 | 100元好物 | tab名称 | - | - |
| 1 | tab_list.is_tab_name_show | isTabNameShow | - | 4 | true | 是否显示tab | - | - |
| 1 | tab_list.goods_feed | goodsFeed | - | 5 | - | 商品卡片feed流 | - | R1 |
| 2 | tab_list.goods_feed.goods_cards | goodsCards | - | 3 | - | 商品卡片列表 | - | R1 |
| 3 | tab_list.goods_feed.goods_cards.is_activity_price | isActivityPrice | - | 4 | false | 是否是惠后价 | - | - |
| 3 | tab_list.goods_feed.goods_cards.promotion_source | PromotionSource | - | 1 | 1 | 商品来源 | - | - |
| 3 | tab_list.goods_feed.goods_cards.product_id | ProductId | - | 2 | 略 | 商品ID | - | - |
| 3 | tab_list.goods_feed.goods_cards.promotion_id | PromotionId | - | 2 | 略 | 商品promotionId | - | - |
| 3 | tab_list.goods_feed.goods_cards.img_url | imgUrl | - | 2 | 略 | 商品展示图片地址 | - | - |
| 3 | tab_list.goods_feed.goods_cards.sell_num | sellNum | - | 1 | 123 | 销量 | - | - |
| 3 | tab_list.goods_feed.goods_cards.show_price | showPrice | - | 1 | 123 | 展示价格 | - | - |
| 3 | tab_list.goods_feed.goods_cards.title | title | - | 2 | 略 | 标题 | - | - |
| 3 | tab_list.goods_feed.goods_cards.show_new_user_tag | showNewUserTag | - | 4 | true | 是否展示新用户专享tag（新客卡片场景） | - | - |
| 3 | tab_list.goods_feed.goods_cards.show_hot_sell_tag | showHotSellTag | - | 4 | true | 是否展示热卖tag | - | - |
| 3 | tab_list.goods_feed.goods_cards.is_live_product | isLiveProduct | - | 4 | true | 是否是当前直播中商品（直播卡片场景） | - | - |
| 3 | tab_list.goods_feed.goods_cards.tags | tags | - | 3 | 略 | 商品标 | - | R1 |
| 3 | tab_list.goods_feed.goods_cards.detail_url | detailUrl | - | 2 | 略 | 商详跳转URL | - | - |
| 2 | tab_list.goods_feed.cursor | Cursor | - | 1 | 1 | feeds游标 | - | - |
| 2 | tab_list.goods_feed.feed_end | feedEnd | - | 4 | false | 是否已到底 | - | - |
| 0 | coupon_info | couponInfo | - | 5 | - | 优惠券信息 | - | R1 |
| 1 | coupon_info.coupon_meta_id | couponMetaId | - | 2 | 7173718548748321036 | 优惠券id | - | - |
| 1 | coupon_info.start_time | startTime | - | 1 | 1675094400 | 券开始生效时间 | - | - |
| 1 | coupon_info.expire_time | expireTime | - | 1 | 1675180799 | 券过期时间 | - | - |
| 1 | coupon_info.credit | credit | - | 1 | 400 | 金额（by分） | - | - |
| 1 | coupon_info.threshold | threshold | - | 1 | 4000 | 门槛（by分） | - | - |
| 1 | coupon_info.status | status | - | 7 | 2 | 优惠券批次状态：0：未知 1：新建；2：生效；3：已过期；4：禁用；5：已删除 | - | - |
| 1 | coupon_info.apply_token | applyToken | - | 2 | 164b615fef5d56f453e7b80c32e23990e02d003dd65d9e30db7d4541d95baec5 | 领券要用的token | - | - |
| 1 | coupon_info.coupon_apply_status | couponApplyStatus | - | 7 | 1 | 券领取按钮状态 - 0-不可领/1-可领取/2-已领取/4-已过使用期限 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/supplyChain/CouponZoneFeeds?app_key=your_appkey_here&method=supplyChain.CouponZoneFeeds&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/supplyChain/CouponZoneFeeds?app_key=your_appkey_here&method=supplyChain.CouponZoneFeeds&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SupplyChainCouponZoneFeedsRequest request = new SupplyChainCouponZoneFeedsRequest();
SupplyChainCouponZoneFeedsParam param = request.getParam();
param.setCouponMetaId("7173718548748321035");
param.setScene(1);
param.setEnterTime("16721287591");
SupplyChainCouponZoneFeedsResponse response = request.execute(accessToken);

```

### php

```php
$request = new SupplyChainCouponZoneFeedsRequest();
$param = new SupplyChainCouponZoneFeedsParam();
$request->setParam($param);
$param->coupon_meta_id = "7173718548748321035";
$param->scene = 1;
$param->enter_time = "16721287591";
$response = $request->execute(accessToken);

```

### python

```python
request = SupplyChainCouponZoneFeedsRequest()
param = request.getParams()
param.coupon_meta_id = "7173718548748321035"
param.scene = 1
param.enter_time = "16721287591"
response = request.execute(accessToken)

```

### go

```go
request := supplyChain_CouponZoneFeeds_request.New()
param := request.GetParams()
param.CouponMetaId = "7173718548748321035"
param.Scene = 1
param.EnterTime = "16721287591"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SupplyChainCouponZoneFeedsRequest();
var param = request.BuildParam();
param.CouponMetaId = "7173718548748321035";
param.Scene = 1;
param.EnterTime = "16721287591";
var response = request.Execute<SupplyChainCouponZoneFeedsResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:300 | 网络错误，请稍后重试 | 网络错误，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
