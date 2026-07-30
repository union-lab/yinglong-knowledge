# /order/getSettleBillDetailV3

> 中文说明：商家结算账单  
> 所属类别：账单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/46/7226>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/getSettleBillDetailV3 |
| 中文名称 | 商家结算账单 |
| 文档目录 | 账单API |
| Article ID | 7226 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/1/22 10:18:28 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

已结算的订单才会有数据，数据T+1生成，建议第二天10点之后查询。如因任务积压导致延迟的情况，建议重试。
1、推荐使用start_index方式查询

## 权限包

- 账单 / 账单明细查询（packageType=1）；适用应用类目：创新应用大赛_软件服务、商家后台系统、即时零售ERP、即时零售商家自研、电商ERP
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.getSettleBillDetailV3 | 调用的API接口名称 | - | - |
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
| 0 | size | size | false | 1 | 5011 | 页数，支持范围1~100 | - | - |
| 0 | start_time | start_time | false | 2 | 2021-05-18 00:00:00 | 查询开始时间，格式为：yyyy-MM-dd HH:mm:ss，订单号未传的情况下，开始时间必须传，注意：分页查询时，除首次查询外，应填入上一次返回的next_start_time | - | - |
| 0 | end_time | end_time | false | 2 | 2021-05-18 00:00:00 | 查询结束时间，和end_time的时间间隔建议不超过7天，格式为：yyyy-MM-dd HH:mm:ss，订单号未传的情况下，结束时间必须传 | - | - |
| 0 | order_id | order_id | false | 2 | 4778345176320227200 | SKU单，子订单号，支持通过英文逗号分隔传入多个参数 | - | - |
| 0 | product_id | product_id | false | 2 | 123456 | 商品id | - | - |
| 0 | pay_type | pay_type | false | 2 | 1 | 结算账户，不传则默认为全部，枚举： 1（微信：升级前）、 2（微信）、 3（支付宝）、 4（合众支付）、 5（聚合账户），支持通过英文逗号分隔传入多个参数 | - | - |
| 0 | flow_type | flow_type | false | 2 | 1 | 业务类型，不传则默认为全部，枚举： 1（巨量千川）、2（值点商城）, 3（精选联盟）、 4（小店自卖） | - | - |
| 0 | time_type | time_type | false | 2 | 0 | 时间类型 ，不传则默认为结算时间，枚举： 0（结算时间） 1（下单时间） | - | - |
| 0 | start_index | start_index | false | 2 | 123445 | 查询开始索引，注意：分页查询时，除首次查询可不填外，应填入上一次返回的next_start_index | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | code | code | - | 2 | 1000001 | 返回code 100000为成功，其他为失败 | - | R1 |
| 0 | code_msg | code_msg | - | 2 | success | 返回信息描述，失败状态下会有失败描述 | - | R1 |
| 0 | data | data | - | 3 | - | 订单流水明细列表 | - | R1 |
| 1 | data.settle_time | settle_time | - | 2 | 2021-05-17 11:05:56 | 结算时间 | - | R1 |
| 1 | data.request_no | request_no | - | 2 | 6945807072718045454 | 结算单号 | - | R1 |
| 1 | data.shop_order_id | shop_order_id | - | 2 | 4778345176320227200 | 订单号 | - | R1 |
| 1 | data.order_id | order_id | - | 2 | 4778345176320227200 | 子订单号 | - | R1 |
| 1 | data.settle_amount | settle_amount | - | 1 | 950 | 商家实收（分） | - | R1 |
| 1 | data.pay_type_desc | pay_type_desc | - | 2 | 支付宝 | 货款结算对应的账户类型： “聚合账户”“微信”“支付宝”“微信升级前”“合众支付”等 | - | R1 |
| 1 | data.trade_type | trade_type | - | 7 | 0 | 结算单类型 0 ：已结算 1 ：结算后退款-原路退回 2： 保证金退款-支出退回 3： 结算后退款-非原路退回 | - | R1 |
| 1 | data.is_contains_refund_before_settle | is_contains_refund_before_settle | - | 7 | 0 | 是否包含结算前退款 0：不包含 1：包含 | - | R1 |
| 1 | data.order_time | order_time | - | 2 | 2021-04-07 11:05:56 | 下单时间 | - | R1 |
| 1 | data.product_id | product_id | - | 2 | 3461567267249244016 | 商品id | - | R1 |
| 1 | data.goods_count | goods_count | - | 7 | 10 | 商品数量 | - | R1 |
| 1 | data.flow_type_desc | flow_type_desc | - | 2 | 小店自卖 | 业务类型: 巨量千川、商城、精选联盟、小店自卖等 | - | R1 |
| 1 | data.order_type | order_type | - | 2 | 普通订单 | 订单类型：普通订单、尾款(尾款已支付)、尾款(已退款)、定金(已退款)、定金(尾款已支付)、定金(尾款未支付) | - | R1 |
| 1 | data.total_amount | total_amount | - | 1 | 950 | 订单总价（分） | - | R1 |
| 1 | data.total_goods_amount | total_goods_amount | - | 1 | 5 | 商品总价（分） | - | R1 |
| 1 | data.post_amount | post_amount | - | 1 | 0 | 运费（分） | - | R1 |
| 1 | data.shop_coupon | shop_coupon | - | 1 | 0 | 店铺券（分） | - | R1 |
| 1 | data.refund_before_settle | refund_before_settle | - | 1 | 0 | 结算前退款金额（分） （结算前退货+运费-店铺券） | - | R1 |
| 1 | data.platform_coupon | platform_coupon | - | 1 | 0 | 平台补贴（分） | - | R1 |
| 1 | data.author_coupon | author_coupon | - | 1 | 0 | 达人补贴（分） | - | R1 |
| 1 | data.zt_pay_promotion | zt_pay_promotion | - | 1 | 0 | 抖音支付补贴（分） | - | R1 |
| 1 | data.zr_pay_promotion | zr_pay_promotion | - | 1 | 0 | DOU分期营销补贴（分） | - | R1 |
| 1 | data.real_pay_amount | real_pay_amount | - | 1 | 0 | 用户实付（分） | - | R1 |
| 1 | data.total_income | total_income | - | 1 | 10 | 收入合计（分） | - | R1 |
| 1 | data.platform_service_fee | platform_service_fee | - | 1 | 0 | 平台服务费（分） | - | R1 |
| 1 | data.commission | commission | - | 1 | 0 | 达人佣金（分） | - | R1 |
| 1 | data.good_learn_channel_fee | good_learn_channel_fee | - | 1 | 0 | 渠道分成（分） | - | R1 |
| 1 | data.colonel_service_fee | colonel_service_fee | - | 1 | 0 | 团长服务费（分） | - | R1 |
| 1 | data.channel_promotion_fee | channel_promotion_fee | - | 1 | 0 | 直播间站外推广（分） | - | R1 |
| 1 | data.other_sharing_amount | other_sharing_amount | - | 1 | 0 | 其他分成（分） | - | R1 |
| 1 | data.total_outcome | total_outcome | - | 1 | 0 | 合计支出 | - | R1 |
| 1 | data.remark | remark | - | 2 | "" | 备注 | - | R1 |
| 1 | data.packing_amount | packing_amount | - | 1 | 0 | 打包费，单位：分 | - | R1 |
| 1 | data.free_commission_flag | free_commission_flag | - | 2 | 是 | 是否免佣，枚举值为“是/否”或为空 | - | - |
| 1 | data.real_free_commission_amount | real_free_commission_amount | - | 1 | 0 | 免佣金额，单位：分 | - | - |
| 1 | data.partner_commission | partner_commission | - | 1 | 0 | 服务商佣金（分） | - | - |
| 1 | data.old_for_new_promotion | old_for_new_promotion | - | 1 | 0 | 以旧换新抵扣（分） | - | - |
| 1 | data.bank_promotion | bank_promotion | - | 1 | 0 | 银行补贴（分） | - | - |
| 1 | data.post_promotion_amount | post_promotion_amount | - | 1 | 0 | 平台补贴运费（分） | - | - |
| 1 | data.gov_promotion_amount | gov_promotion_amount | - | 1 | 0 | 政府补贴平台垫资（分） | - | - |
| 1 | data.product_name | product_name | - | 2 | 商品名称示例 | 商品名称 | - | - |
| 1 | data.author_id | author_id | - | 2 | 1231231231 | 达人id | - | - |
| 1 | data.author_name | author_name | - | 2 | 达人名称示例 | 达人名称 | - | - |
| 1 | data.gov_promotion_shop_reduce_amount | gov_promotion_shop_reduce_amount | - | 1 | 0 | 政府补贴商家垫资（分） | - | - |
| 1 | data.other_platform_promotion_amount | other_platform_promotion_amount | - | 1 | 0 | 其他平台补贴（分） | - | - |
| 0 | size | size | - | 1 | 100 | 请求的size | - | R1 |
| 0 | next_start_index | next_start_index | - | 2 | 12345678 | 下一次查询start_index | - | R1 |
| 0 | next_start_time | next_start_time | - | 2 | 2021-05-18 03:00:00 | 下一次查询start_time | - | R1 |
| 0 | is_end | is_end | - | 7 | 0 | 判断查询是否结束。0 未结束, 1 结束。未结束时，需要把next_start_index作为下一次请求的start_index,next_start_time作为下一次请求的start_time | - | R1 |
| 0 | data_size | data_size | - | 1 | 100 | 结果data的大小 | - | R1 |

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
OrderGetSettleBillDetailV3Request request = new OrderGetSettleBillDetailV3Request();
OrderGetSettleBillDetailV3Param param = request.getParam();
param.setSize(5011L);
param.setStartTime("2021-05-18 00:00:00");
param.setEndTime("2021-05-18 00:00:00");
param.setOrderId("4778345176320227200");
param.setProductId("123456");
param.setPayType("1");
param.setFlowType("1");
param.setTimeType("0");
param.setStartIndex("123445");
OrderGetSettleBillDetailV3Response response = request.execute(accessToken);

```

### php

```php
$request = new OrderGetSettleBillDetailV3Request();
$param = new OrderGetSettleBillDetailV3Param();
$request->setParam($param);
$param->size = 5011;
$param->start_time = "2021-05-18 00:00:00";
$param->end_time = "2021-05-18 00:00:00";
$param->order_id = "4778345176320227200";
$param->product_id = "123456";
$param->pay_type = "1";
$param->flow_type = "1";
$param->time_type = "0";
$param->start_index = "123445";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderGetSettleBillDetailV3Request()
param = request.getParams()
param.size = 5011
param.start_time = "2021-05-18 00:00:00"
param.end_time = "2021-05-18 00:00:00"
param.order_id = "4778345176320227200"
param.product_id = "123456"
param.pay_type = "1"
param.flow_type = "1"
param.time_type = "0"
param.start_index = "123445"
response = request.execute(accessToken)

```

### go

```go
request := order_getSettleBillDetailV3_request.New()
param := request.GetParams()
param.Size = 5011
param.StartTime = "2021-05-18 00:00:00"
param.EndTime = "2021-05-18 00:00:00"
param.OrderId = "4778345176320227200"
param.ProductId = "123456"
param.PayType = "1"
param.FlowType = "1"
param.TimeType = "0"
param.StartIndex = "123445"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderGetSettleBillDetailV3Request();
var param = request.BuildParam();
param.Size = 5011;
param.StartTime = "2021-05-18 00:00:00";
param.EndTime = "2021-05-18 00:00:00";
param.OrderId = "4778345176320227200";
param.ProductId = "123456";
param.PayType = "1";
param.FlowType = "1";
param.TimeType = "0";
param.StartIndex = "123445";
var response = request.Execute<OrderGetSettleBillDetailV3Response>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:100026 | 请检查参数 | 请检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:100010 | 100010:DB异常 | 请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
