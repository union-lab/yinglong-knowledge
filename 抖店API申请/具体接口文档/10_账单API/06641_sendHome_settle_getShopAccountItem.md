# /sendHome/settle/getShopAccountItem

> 中文说明：资金流水明细接口(境内,关联门店ID门店自编码)  
> 所属类别：账单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/46/6641>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sendHome/settle/getShopAccountItem |
| 中文名称 | 资金流水明细接口(境内,关联门店ID门店自编码) |
| 文档目录 | 账单API |
| Article ID | 6641 |
| 文档版本 | V1.04 |
| 官方更新时间 | 2024/6/19 19:56:02 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

查询资金流水明细，查询方式为时间轮训方式，数据T+1生成，建议第二天15点之后查询。如因任务积压导致延迟的情况，建议重试。
如果流水明细为订单相关，会关联门店ID与门店商家自编码。

## 权限包

- 到家开放 / 到家账单（packageType=1）；适用应用类目：即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sendHome.settle/getShopAccountItem | 调用的API接口名称 | - | - |
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
| 0 | end_time | end_time | false | 2 | 2021-10-01 23:59:59 | 查询结束时间 | - | - |
| 0 | order_id | order_id | false | 2 | 4847151209529677080 | 子订单ID(如果订单号未传，则时间必须传) | - | - |
| 0 | time_type | time_type | false | 7 | 0 | 时间类型 0 动账时间 1 下单时间 | - | - |
| 0 | product_id | product_id | false | 2 | 33323233 | 产品id | - | - |
| 0 | start_time | start_time | false | 2 | 2021-10-01 00:00:00 | 查询开始时间 | - | - |
| 0 | size | size | false | 7 | 100 | 查询数量(不传默认100，最大为1000) | - | - |
| 0 | account_type | account_type | false | 7 | 0 | 动账账户 0: 所有 1: 微信 2:支付宝 3:合众支付 4:聚合支付 | - | - |
| 0 | biz_type | biz_type | false | 7 | 0 | 计费类型 0:全部 1:巨量千川 2:精选联盟 3:值点商城 4:小店自卖 5:橙子建站 6:POI 7:抖+ 8:穿山甲 9:服务市场 10:服务市场外包客服 11:学浪 | - | - |
| 0 | start_index | start_index | false | 2 | d746da31eee45e65d07b20f87d6844bbf72041350acc66af1711408070b62428 | 开始下标 请求值为上一次响应参数的next_index，第一次请求不传 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 资金流水明细 | - | R1 |
| 1 | data.refund_amount | refund_amount | - | 1 | 0 | 订单退款(分) | - | - |
| 1 | data.account_trade_no | account_trade_no | - | 2 | AS202110050707321602785799467_IN | 动账流水号(唯一) | - | - |
| 1 | data.trans_scene_tag | trans_scene_tag | - | 7 | 1 | 动账场景 0:其他 1:消费者赔付 2:小额打款 3:处置扣款 4:物流赔付 5:充值保证金 6:权益保险 7:欠票扣款-商家开票 8:公益捐款 9:上门取件运费 10:供应链QIC费用 11:抖音支付与商家联合补贴营销活动 12:抖音月付与商家联合补贴营销活动 13:抖音月付与商家联合贴息活动 14:放心借·贷款还款 15:人工调账 16:提前收款 17:充值千川广告费 18:营销费用-评价有礼 19:年框返点 20:抖店货款充值云仓服务账户 21:供应链平台代发费用 22:退款-结算后退款-退用户 23:退款-订单退款触发-退补贴 24:退款-价保补差退回 25:退款-退转付扣减商家货款 26: 退款-极速退二阶段商家资金回补 27:退款-商家赔付扣减商家货款 28:退款-极速退二次售后-退用户 29:上门取件平台分佣 30:货款结算入账 31:货款完结分账-执照注销场景 32:保证金垫付退款结算分账 33:福袋业务结算入账 34:退款-订单退款触发-分账 35:退款-订单退款触发-退分账 36:退款-价保补差 37:退款-退款失败资金退回 38:退款-赔付失败资金退回 39:上门取件结算入账 40:上门取件保司理赔金 41:上门取件平台激励金 42:上门取件平台改派补贴 43:佣金入账 44:提现 45:提现退票 46:买贵赔-平台转账 47:买贵赔-退回平台 48:以旧换新补贴追缴用户退回平台 49:以旧换新商户红包补贴发放 50:以旧换新商户红包补贴退回 | - | - |
| 1 | data.bill_time | bill_time | - | 2 | 2021-10-01 10:10:11 | 动账时间 | - | - |
| 1 | data.fund_flow_desc | fund_flow_desc | - | 2 | 出账 | 动账方向描述 出账、入账 | - | - |
| 1 | data.business_order_create_time | business_order_create_time | - | 2 | 2021-09-26 20:46:16 | 下单时间 | - | - |
| 1 | data.author_coupon_subsidy | author_coupon_subsidy | - | 1 | 0 | 实际达人补贴(分) | - | - |
| 1 | data.order_type_desc | order_type_desc | - | 2 | 普通订单 | 订单类型描述 | - | - |
| 1 | data.partner_commission | partner_commission | - | 1 | 0 | 服务商佣金(分) | - | - |
| 1 | data.shop_order_id | shop_order_id | - | 2 | 4847151209529677080 | 店铺单号 | - | - |
| 1 | data.pay_amount | pay_amount | - | 1 | 100 | 订单实付应结，单位：分；只包含用户实际支付的金额，不含各类补贴（如：平台补贴、达人补贴、支付补贴等） | - | - |
| 1 | data.account_amount | account_amount | - | 1 | 96 | 动账金额(分) | - | - |
| 1 | data.account_bill_desc | account_bill_desc | - | 2 | 订单结算 | 动账摘要 | - | - |
| 1 | data.commission | commission | - | 1 | -1 | 佣金(分) | - | - |
| 1 | data.channel_promotion_fee | channel_promotion_fee | - | 1 | 0 | 直播间站外推广(分) | - | - |
| 1 | data.recycler_amount | recycler_amount | - | 1 | 0 | 以旧换新抵扣(分) | - | - |
| 1 | data.account_bill_desc_tag | account_bill_desc_tag | - | 7 | 3 | 动账摘要 0：其他 1：达人带货佣金 2：达人佣金退款 3：订单结算 4：部分结算 5：运费单结算 6：服务费返还 7：平台补贴扣回 8：退款失败退票 9：结算重复扣款调账 10：保证金退款 11：提现 12：提现退票 13：极速退款分账 14：小额打款(原因:补差价) 15：小额打款(原因:其他) 16：小额打款(原因:商品补偿) 17：小额打款(原因:运费补偿) 18：小额打款退票 19：已退款 20：运费险扣减货款 21：支付BIC服务费 22：BIC服务费退票 23: 原路退 | - | - |
| 1 | data.order_type | order_type | - | 7 | 0 | 订单类型 0：普通订单 1：定金(已退款) 2：定金(尾款已支付) 3：定金(尾款未支付) 4：尾款(尾款已支付) 5：尾款(已退款) | - | - |
| 1 | data.real_free_commission_amount | real_free_commission_amount | - | 1 | 0 | 免佣金额(分) | - | - |
| 1 | data.bank_pay_promotion_amount | bank_pay_promotion_amount | - | 1 | 0 | 银行补贴(分) | - | - |
| 1 | data.post_promotion_amount | post_promotion_amount | - | 1 | 0 | 平台补贴运费(分) | - | - |
| 1 | data.outer_store_id | outer_store_id | - | 2 | fasdfasd | 订单关联的门店商家自编码 | - | - |
| 1 | data.account_type | account_type | - | 7 | 1 | 动账账户 1: 微信 2:支付宝 3:合众支付 4:聚合支付 | - | - |
| 1 | data.fund_flow | fund_flow | - | 7 | 1 | 动账方向 0:入账 1:出账 | - | - |
| 1 | data.biz_type | biz_type | - | 7 | 1 | 计费类型 0:全部 1:巨量千川 2:精选联盟 3:值点商城 4:小店自卖 5:橙子建站 6:POI 7:抖+ 8:穿山甲 9:服务市场 10:服务市场外包客服 11:学浪 | - | - |
| 1 | data.biz_type_desc | biz_type_desc | - | 2 | 鲁班广告 | 计费类型描述 | - | - |
| 1 | data.product_id | product_id | - | 2 | 3494738440426276563 | 商品ID | - | - |
| 1 | data.channel_fee | channel_fee | - | 1 | 0 | 渠道分成(分) | - | - |
| 1 | data.colonel_service_fee | colonel_service_fee | - | 1 | 0 | 招商服务费(分) | - | - |
| 1 | data.actual_zr_pay_promotion | actual_zr_pay_promotion | - | 1 | 0 | 实际DOU分期营销补贴(分) | - | - |
| 1 | data.remark | remark | - | 2 | 无 | 备注 | - | - |
| 1 | data.trans_scene | trans_scene | - | 2 | 消费者赔付 | 动账场景 | - | - |
| 1 | data.free_commission_flag | free_commission_flag | - | 2 | 是 | 是否免佣, 枚举值为"是/否"或为空 | - | - |
| 1 | data.store_id | store_id | - | 1 | 149300267 | 订单关联的门店ID | - | - |
| 1 | data.after_sale_service_no | after_sale_service_no | - | 2 | SS7015036721667375372 | 【商家无需使用】售后编号非售后接口的售后单id；该字段为账单售后编号id； | - | - |
| 1 | data.promotion_amount | promotion_amount | - | 1 | 0 | 实际平台补贴(分) | - | - |
| 1 | data.platform_service_fee | platform_service_fee | - | 1 | -3 | 平台服务费(分) | - | - |
| 1 | data.shop_id | shop_id | - | 2 | 12344 | 店铺id | - | - |
| 1 | data.order_id | order_id | - | 2 | 4847151209529677080 | 订单号 | - | - |
| 1 | data.account_type_desc | account_type_desc | - | 2 | 微信 | 动账账户 | - | - |
| 1 | data.post_amount | post_amount | - | 1 | 0 | 运费(分) | - | - |
| 1 | data.actual_zt_pay_promotion | actual_zt_pay_promotion | - | 1 | 0 | 实际抖音支付补贴(分) | - | - |
| 1 | data.other_sharing_amount | other_sharing_amount | - | 1 | 0 | 其他分成金额(分) | - | - |
| 0 | next_start_index | next_start_index | - | 2 | d746da31eee45e65d07b20f87d6844bbf72041350acc66af1711408070b62428 | 下一次请求参数start_index 的值 | - | - |
| 0 | next_start_time | next_start_time | - | 2 | 2021-10-01 06:00:00 | 下一次请求参数start_time的值 | - | - |
| 0 | size | size | - | 7 | 100 | 查询数量，请求参数size传了值得话为请求参数传的值，未传的话，值为100 | - | - |
| 0 | data_size | data_size | - | 7 | 100 | 返回结果data的数量 | - | - |
| 0 | is_end | is_end | - | 7 | 1 | 判断查询是否结束。0 未结束, 1 结束。未结束时，需要把next_start_index作为下一次请求的start_index,next_start_time作为下一次请求的start_time。 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/shopOperate/getSkuReviewResult?app_key=your_appkey_here&method=order.shopOperate.getSkuReviewResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/shopOperate/getSkuReviewResult?app_key=your_appkey_here&method=order.shopOperate.getSkuReviewResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SendHomeSettleGetShopAccountItemRequest request = new SendHomeSettleGetShopAccountItemRequest();
SendHomeSettleGetShopAccountItemParam param = request.getParam();
param.setEndTime("2021-10-01 23:59:59");
param.setOrderId("4847151209529677080");
param.setTimeType(0);
param.setProductId("33323233");
param.setStartTime("2021-10-01 00:00:00");
param.setSize(100);
param.setAccountType(0);
param.setBizType(0);
param.setStartIndex("d746da31eee45e65d07b20f87d6844bbf72041350acc66af1711408070b62428");
SendHomeSettleGetShopAccountItemResponse response = request.execute(accessToken);

```

### php

```php
$request = new SendHomeSettleGetShopAccountItemRequest();
$param = new SendHomeSettleGetShopAccountItemParam();
$request->setParam($param);
$param->end_time = "2021-10-01 23:59:59";
$param->order_id = "4847151209529677080";
$param->time_type = 0;
$param->product_id = "33323233";
$param->start_time = "2021-10-01 00:00:00";
$param->size = 100;
$param->account_type = 0;
$param->biz_type = 0;
$param->start_index = "d746da31eee45e65d07b20f87d6844bbf72041350acc66af1711408070b62428";
$response = $request->execute(accessToken);

```

### python

```python
request = SendHomeSettleGetShopAccountItemRequest()
param = request.getParams()
param.end_time = "2021-10-01 23:59:59"
param.order_id = "4847151209529677080"
param.time_type = 0
param.product_id = "33323233"
param.start_time = "2021-10-01 00:00:00"
param.size = 100
param.account_type = 0
param.biz_type = 0
param.start_index = "d746da31eee45e65d07b20f87d6844bbf72041350acc66af1711408070b62428"
response = request.execute(accessToken)

```

### go

```go
request := sendHome_settle_getShopAccountItem_request.New()
param := request.GetParams()
param.EndTime = "2021-10-01 23:59:59"
param.OrderId = "4847151209529677080"
param.TimeType = 0
param.ProductId = "33323233"
param.StartTime = "2021-10-01 00:00:00"
param.Size = 100
param.AccountType = 0
param.BizType = 0
param.StartIndex = "d746da31eee45e65d07b20f87d6844bbf72041350acc66af1711408070b62428"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SendHomeSettleGetShopAccountItemRequest();
var param = request.BuildParam();
param.EndTime = "2021-10-01 23:59:59";
param.OrderId = "4847151209529677080";
param.TimeType = 0;
param.ProductId = "33323233";
param.StartTime = "2021-10-01 00:00:00";
param.Size = 100;
param.AccountType = 0;
param.BizType = 0;
param.StartIndex = "d746da31eee45e65d07b20f87d6844bbf72041350acc66af1711408070b62428";
var response = request.Execute<SendHomeSettleGetShopAccountItemResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:4100001 | 缺少必填参数 | 请参考能力文档传入必填参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:4100002 | 参数类型错误 | 请参考能力文档传入合法参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:4100003 | 参数非法 | 请参考能力文档传入合法参数 |
| 50002 | 业务处理失败 | isv.business-failed:5000001 | 业务系统异常-不可重试的错误 | 业务处理失败 |
| 20000 | 系统错误 | isp.service-error:5100002 | 系统异常-可重试 | 系统异常，可尝试重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
