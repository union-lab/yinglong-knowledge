# /member/getShopShortLink

> 中文说明：获取商家推广链接接口  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/1455>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /member/getShopShortLink |
| 中文名称 | 获取商家推广链接接口 |
| 文档目录 | 店铺API |
| Article ID | 1455 |
| 文档版本 | V5.01 |
| 官方更新时间 | 2026/5/12 15:16:09 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20 |

## 使用说明

根据商家传入的链接类型，返回对应页面的跳转链接（短链），链接可发放于站外触达工具（如：短信&微信），召回用户 1.会员中心页，商家会员中心页，查看用户积分和会员可用权益 2.达人主页，与店铺人店一体绑定的达人账号主页 3.店铺首页，商家抖店店铺的首页 4.商品详情页-需额外传入商品id，进入对应商详 5.订单详情页-需额外传入订单id，用户只可查看自己账号下单的订单详情页 6.优惠券链接-需额外传入优惠券id 7.商城首页店铺7分屏id 8.直播间链接

## 权限包

- 店铺 / 获取商家推广链接（packageType=1）；适用应用类目：营销管理-小程序定制、互动营销定制、短信营销、订单管理、电商ERP、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | member.getShopShortLink | 调用的API接口名称 | - | - |
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
| 0 | link_type | linkType | true | 99 | 1 | 链接类型（1-会员中心，2-达人主页，3-店铺首页, 4-商品详情页，5-订单详情页，6-优惠券领取, 7-店铺七分屏 8-直播间） | - | - |
| 0 | product_id | productId | false | 2 | 123456 | 商品id，生成商品详情页链接需要 | - | - |
| 0 | order_id | orderId | false | 2 | 123456 | 订单id，生成订单详情页链接需要 | - | - |
| 0 | coupon_meta_id | couponMetaId | false | 2 | 123456 | 优惠券id，生成领取优惠券链接需要 | - | - |
| 0 | aweme_uid | awemeUid | false | 2 | PROYA_STORE | 抖音号（仅当linkType为8时选填） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | short_link | shortLink | - | 2 | z.douyin.com/9xNklYc | 对应类型的链接，有效时间60天，长度21~24 | - | R1 |
| 0 | link_id | taskId | - | 99 | 7402147984902783282 | 短链唯一链接id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/member/getShopShortLink?app_key=your_appkey_here&method=member.getShopShortLink&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/member/getShopShortLink?app_key=your_appkey_here&method=member.getShopShortLink&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MemberGetShopShortLinkRequest request = new MemberGetShopShortLinkRequest();
MemberGetShopShortLinkParam param = request.getParam();
param.setLinkType(1L);
param.setProductId("123456");
param.setOrderId("123456");
param.setCouponMetaId("123456");
param.setAwemeUid("PROYA_STORE");
MemberGetShopShortLinkResponse response = request.execute(accessToken);

```

### php

```php
$request = new MemberGetShopShortLinkRequest();
$param = new MemberGetShopShortLinkParam();
$request->setParam($param);
$param->link_type = 1;
$param->product_id = "123456";
$param->order_id = "123456";
$param->coupon_meta_id = "123456";
$param->aweme_uid = "PROYA_STORE";
$response = $request->execute(accessToken);

```

### python

```python
request = MemberGetShopShortLinkRequest()
param = request.getParams()
param.link_type = 1
param.product_id = "123456"
param.order_id = "123456"
param.coupon_meta_id = "123456"
param.aweme_uid = "PROYA_STORE"
response = request.execute(accessToken)

```

### go

```go
request := member_getShopShortLink_request.New()
param := request.GetParams()
param.LinkType = 1
param.ProductId = "123456"
param.OrderId = "123456"
param.CouponMetaId = "123456"
param.AwemeUid = "PROYA_STORE"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MemberGetShopShortLinkRequest();
var param = request.BuildParam();
param.LinkType = 1;
param.ProductId = "123456";
param.OrderId = "123456";
param.CouponMetaId = "123456";
param.AwemeUid = "PROYA_STORE";
var response = request.Execute<MemberGetShopShortLinkResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:-300002 | 当前店铺未开通会员服务 | 检查类型参数，未开通店铺会员的商家无会员中心链接 |
| 20000 | 系统错误 | isp.service-error:-500 | 服务器开小差了，请稍后重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:628145000 | 网络错误，请稍后重试 | 请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:628002001 | 抖音号错误 | 确认输入的抖音号 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
