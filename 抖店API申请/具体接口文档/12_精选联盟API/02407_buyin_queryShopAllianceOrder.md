# /buyin/queryShopAllianceOrder

> 中文说明：获取商家的联盟订单  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2407>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/queryShopAllianceOrder |
| 中文名称 | 获取商家的联盟订单 |
| 文档目录 | 精选联盟API |
| Article ID | 2407 |
| 文档版本 | V1.04 |
| 官方更新时间 | 2023/4/18 15:47:23 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

获取商家的联盟订单

## 权限包

- 定向API / 定向权限（packageType=1）
- 精选联盟 / 商家联盟订单&账单（packageType=1）；适用应用类目：撮合服务商、创新应用大赛_软件服务、商家商品推广、商家后台系统、店铺管理、电商ERP
- 精选联盟 / 联盟商家-获取联盟订单（packageType=1）
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.queryShopAllianceOrder | 调用的API接口名称 | - | - |
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
| 0 | size | size | false | 1 | 20 | 每页订单数目，取值区间： [1, 20] | - | - |
| 0 | cursor | cursor | true | 2 | 0 | 下一页索引(第一页传"0") | - | - |
| 0 | start_time | start_time | false | 2 | 2022-08-23 00:00:00 | 支付时间开始，最早支持2021年01月01日 | - | - |
| 0 | end_time | end_time | false | 2 | 2022-08-23 23:59:59 | 支付时间结束，该时间不能超过start_time+90天 | - | - |
| 0 | order_ids | order_ids | false | 2 | 12345678,8765432 | 订单号列表，"," 分隔, 最多20个订单号 | - | - |
| 0 | time_type | time_type | false | 2 | update | 查询时间类型。pay: 支付时间（默认）; update：联盟侧更新时间，非订单状态更新时间 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 返回数据 | - | R1 |
| 1 | data.orders | orders | - | 3 | - | 订单列表 | - | R1 |
| 2 | data.orders.distributor_name | distributor_name | - | 2 | 独立抖客 | 独立抖客昵称 | - | - |
| 2 | data.orders.distributor_buyin_id | distributor_buyin_id | - | 2 | 12345678 | 独立抖客百应ID | - | - |
| 2 | data.orders.ads_real_commission | ads_real_commission | - | 2 | 100 | 独立抖客实际推广费 | - | - |
| 2 | data.orders.ads_estimated_commission | ads_estimated_commission | - | 2 | 100 | 独立抖客预估推广费 | - | - |
| 2 | data.orders.ads_promotion_rate | ads_promotion_rate | - | 2 | 1000 | 独立抖客推广费率，此处保存为真实数据x1万之后 | - | - |
| 2 | data.orders.buyer_app_id | buyer_app_id | - | 2 | 1128 | 购买端APP ID(1128:抖音，2329:抖音极速版，1112: 火山，32: 西瓜， 13: 头条) | - | - |
| 2 | data.orders.order_id | order_id | - | 2 | 4737996432465788974 | 订单号 | - | R1 |
| 2 | data.orders.product_id | product_id | - | 2 | 3450632721376902816 | 商品id | - | R1 |
| 2 | data.orders.product_name | product_name | - | 2 | 测试商品 | 商品名称 | - | R1 |
| 2 | data.orders.product_img | product_img | - | 2 | https://sf6-ttcdn-tos.pstatp.com/obj/temai/2ecb018ec3f3a1b414a4dfake | 商品图片URL | - | R1 |
| 2 | data.orders.author_account | author_account | - | 2 | 作者账号 | 作者账号昵称(抖音/火山作者) | - | R1 |
| 2 | data.orders.shop_name | shop_name | - | 2 | 我的店铺 | 商家名称 | - | R1 |
| 2 | data.orders.total_pay_amount | total_pay_amount | - | 1 | 11000 | 订单支付金额，单位分 | - | R1 |
| 2 | data.orders.commission_rate | commission_rate | - | 1 | 3500 | 达人佣金率，此处保存为真实数据x1万之后，如真实是0.35，这里是3500 | - | R1 |
| 2 | data.orders.estimated_commission | estimated_commission | - | 1 | 3500 | 达人预估佣金收入，单位分，机构和达人有绑定关系时返回 | - | R1 |
| 2 | data.orders.real_commission | real_commission | - | 1 | 3000 | 达人实际佣金收入，单位分 | - | R1 |
| 2 | data.orders.flow_point | flow_point | - | 2 | SETTLE | 订单状态(PAY_SUCC:支付完成 REFUND:退款 SETTLE:结算 CONFIRM:确认收货) | - | R1 |
| 2 | data.orders.app | app | - | 2 | 抖音 | App名称（抖音，火山，西瓜，头条） | - | R1 |
| 2 | data.orders.update_time | update_time | - | 2 | 2006-01-02 15:04:05 | 联盟侧订单更新时间 | - | R1 |
| 2 | data.orders.pay_success_time | pay_success_time | - | 2 | 2006-01-02 15:03:05 | 付款时间 | - | R1 |
| 2 | data.orders.settle_time | settle_time | - | 2 | 2006-01-17 15:04:05 | 结算时间，结算前为空字符串 | - | R1 |
| 2 | data.orders.pay_goods_amount | pay_goods_amount | - | 1 | 10000 | 预估参与结算金额，单位分 | - | R1 |
| 2 | data.orders.settled_goods_amount | settled_goods_amount | - | 1 | 10000 | 实际参与结算金额，单位分 | - | R1 |
| 2 | data.orders.shop_id | shop_id | - | 1 | 1100 | 店铺ID | - | R1 |
| 2 | data.orders.shop_estimated_commission | shop_estimated_commission | - | 1 | 3600 | 商家预估佣金支出，单位分 | - | R1 |
| 2 | data.orders.shop_real_commission | shop_real_commission | - | 1 | 3600 | 商家实际佣金支出，单位分 | - | R1 |
| 2 | data.orders.colonel_order_info | colonel_order_info | - | 5 | - | 团长信息 | - | R1 |
| 3 | data.orders.colonel_order_info.commission_rate | commission_rate | - | 1 | 10 | 团长服务费率，此处保存为真实数据x1万之后，如真实是0.35，这里是3500 | - | R1 |
| 3 | data.orders.colonel_order_info.activity_id | activity_id | - | 1 | 10102 | 团长活动ID | - | R1 |
| 3 | data.orders.colonel_order_info.estimated_commission | estimated_commission | - | 1 | 100 | 团长预估服务费，单位分 | - | R1 |
| 3 | data.orders.colonel_order_info.real_commission | real_commission | - | 1 | 100 | 团长结算服务费，单位分 | - | R1 |
| 3 | data.orders.colonel_order_info.institution_id | institution_id | - | 1 | 3556634532443 | 团长机构ID | - | R1 |
| 3 | data.orders.colonel_order_info.institution_name | institution_name | - | 2 | 头条测试机构 | 团长机构名称 | - | R1 |
| 3 | data.orders.colonel_order_info.colonel_buyin_id | colonel_buyin_id | - | 1 | 7998090343434332 | 团长百应ID | - | R1 |
| 2 | data.orders.settled_tech_service_fee | settled_tech_service_fee | - | 1 | 0 | 平台结算技术服务费，单位分 | - | R1 |
| 2 | data.orders.item_num | item_num | - | 1 | 1 | 商品数目 | - | R1 |
| 2 | data.orders.refund_time | refund_time | - | 2 | 2006-01-02 15:03:05 | 退款时间 | - | R1 |
| 2 | data.orders.estimated_total_commission | estimated_total_commission | - | 1 | 3600 | 总佣金（预估），对应百应订单明细中的总佣金，单位分 | - | R1 |
| 2 | data.orders.author_short_id | author_short_id | - | 2 | HELEoo11 | 作者抖音号 | - | R1 |
| 2 | data.orders.author_buyin_id | author_buyin_id | - | 2 | 790820901290193 | 达人百应ID | - | R1 |
| 2 | data.orders.media_type | media_type | - | 2 | shop_list | 带货体裁。shop_list：橱窗；video：视频；live：直播；others：其他 | - | R1 |
| 2 | data.orders.app_id | app_id | - | 7 | 1128 | APP ID(1128:抖音，1112: 火山，32: 西瓜， 13: 头条) | - | R1 |
| 2 | data.orders.media_id | media_id | - | 1 | 0 | 视频/直播间 id | - | R1 |
| 2 | data.orders.confirm_time | confirm_time | - | 2 | 2006-01-02 15:03:05 | 确认收货时间 | - | R1 |
| 2 | data.orders.extra | extra | - | 8 | "" | 其他 | - | R1 |
| 1 | data.cursor | cursor | - | 2 | 4737996432465788974 | 下一页的索引，结束时返回"cursor":"" | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinQueryShopAllianceOrderRequest request = new BuyinQueryShopAllianceOrderRequest();
BuyinQueryShopAllianceOrderParam param = request.getParam();
param.setSize(20L);
param.setCursor("0");
param.setStartTime("2022-08-23 00:00:00");
param.setEndTime("2022-08-23 23:59:59");
param.setOrderIds("12345678,8765432");
param.setTimeType("update");
BuyinQueryShopAllianceOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinQueryShopAllianceOrderRequest();
$param = new BuyinQueryShopAllianceOrderParam();
$request->setParam($param);
$param->size = 20;
$param->cursor = "0";
$param->start_time = "2022-08-23 00:00:00";
$param->end_time = "2022-08-23 23:59:59";
$param->order_ids = "12345678,8765432";
$param->time_type = "update";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinQueryShopAllianceOrderRequest()
param = request.getParams()
param.size = 20
param.cursor = "0"
param.start_time = "2022-08-23 00:00:00"
param.end_time = "2022-08-23 23:59:59"
param.order_ids = "12345678,8765432"
param.time_type = "update"
response = request.execute(accessToken)

```

### go

```go
request := buyin_queryShopAllianceOrder_request.New()
param := request.GetParams()
param.Size = 20
param.Cursor = "0"
param.StartTime = "2022-08-23 00:00:00"
param.EndTime = "2022-08-23 23:59:59"
param.OrderIds = "12345678,8765432"
param.TimeType = "update"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinQueryShopAllianceOrderRequest();
var param = request.BuildParam();
param.Size = 20;
param.Cursor = "0";
param.StartTime = "2022-08-23 00:00:00";
param.EndTime = "2022-08-23 23:59:59";
param.OrderIds = "12345678,8765432";
param.TimeType = "update";
var response = request.Execute<BuyinQueryShopAllianceOrderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:1031 | 无效size | 无效size |
| 40004 | 非法的参数 | isv.parameter-invalid:1032 | 无效order_ids | 无效order_ids |
| 40004 | 非法的参数 | isv.parameter-invalid:4168 | 起始查询时间超过了最久查询限制 | 起始查询时间超过了最久查询限制 |
| 40004 | 非法的参数 | isv.parameter-invalid:1039 | 无效时间区间（开始时间不能大于结束时间，并且不能小于t-90d） | 无效时间区间（开始时间不能大于结束时间，并且不能小于t-90d） |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:1033 | 请指定时间范围或订单号 | 请指定时间范围或订单号 |
| 50002 | 业务处理失败 | isv.business-failed:4497 | 4497:仅支持查询支付时间近1年的订单数据 | 4497:仅支持查询支付时间近1年的订单数据 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
