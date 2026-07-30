# /second/volcengineRetainOrder

> 中文说明：核心入口，用于对单一退货的订单进行全面评估  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/8135>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/volcengineRetainOrder |
| 中文名称 | 核心入口，用于对单一退货的订单进行全面评估 |
| 文档目录 | 售后退款API |
| Article ID | 8135 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/5/8 15:47:12 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3000 |

## 使用说明

输入订单及店铺支持权益，同步返回该订单的挽回概率、薅羊毛概率以及挽回策略建议

## 权限包

- 火山 / 火山AI挽单（packageType=1）；适用应用类目：智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.volcengineRetainOrder | 调用的API接口名称 | - | - |
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
| 0 | shop_order_id | shop_order_id | false | 2 | 123456789012345 | 店铺退货的订单ID | - | - |
| 0 | shop_config | shop_config | false | 5 | - | 商家自定义配置 | - | - |
| 1 | shop_config.roi_threshold | roi_threshold | false | 9 | 1.2 | 商家期望的最小ROI | - | - |
| 1 | shop_config.profit_rate | profit_rate | false | 9 | 0.45 | 自定义毛利率 | - | - |
| 1 | shop_config.supported_benefits | supported_benefits | false | 3 | - | 商家支持的挽单权益，用于策略模型挑选最合适的权益类型 | - | - |
| 2 | shop_config.supported_benefits.type | type | false | 2 | coupon | 权益类型，枚举值为：<br>- coupon：优惠券（高面额低成本）<br>- gift：礼品/小样（利用高感知价值/低成本的价格差，以小博大）<br>- cash：现金红包（直接有效，适合低客单价商品）<br>- partial_refund：订单部分退款（无需额外营销预算，走售后逆向流程） | - | - |
| 2 | shop_config.supported_benefits.cash_range | cash_range | false | 3 | [1.0. 10.0] | 现金红包范围，如：[1, 10]，1元到10元<br>若type=cash，则必填 | - | - |
| 2 | shop_config.supported_benefits.gift_sku_id | gift_sku_id | false | 99 | 12222 | 小样SKu ID | - | - |
| 2 | shop_config.supported_benefits.gift_market_value | gift_market_value | false | 9 | 89.0 | 礼品/小样的市场价格<br>若type=gift必填 | - | - |
| 2 | shop_config.supported_benefits.refund_amount | refund_amount | false | 9 | 50.0 | 退款金额上限<br>type=partial_refund必填 | - | - |
| 2 | shop_config.supported_benefits.coupon_face_value | coupon_face_value | false | 9 | 5.0 | 券面额， 如20<br>若type=coupon必填 | - | - |
| 2 | shop_config.supported_benefits.coupon_threshold | coupon_threshold | false | 9 | 100.0 | 优惠券使用门槛金额 (0 代表无门槛)，如100<br>若type=coupon必填 | - | - |
| 2 | shop_config.supported_benefits.refund_ratio | refund_ratio | false | 9 | 0.3 | 订单金额退款比例<br>type=partial_refund必填 | - | - |
| 2 | shop_config.supported_benefits.benefit_id | benefit_id | false | 2 | 123 | 权益ID，唯一标识当前商家配置的权益，若有的话，可以选择传递过来 | - | - |
| 2 | shop_config.supported_benefits.gift_cost | gift_cost | false | 9 | 15.0 | 礼品/小样的实际成本<br>若type=gift必填 | - | - |
| 2 | shop_config.supported_benefits.name | name | false | 2 | SK-II神仙水小样(10ml) | 权益名称，如：type=gift，name=SK-II神仙水小样(10ml)<br>type=coupon，name=满100减10券 | - | - |
| 0 | after_sale_id | after_sale_id | false | 2 | 123456789012345 | 售后单ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | wool_prob | wool_prob | - | 9 | 0.12 | 薅羊毛概率 (0.0 - 1.0) | - | - |
| 0 | strategy | strategy | - | 5 | - | 权益建议，若商家入参配置了权益列表，策略引擎会从中选出最优的选项并返回<br>否则，会按照策略引擎自己的理解返回建议 | - | R1 |
| 1 | strategy.benefit | benefit | - | 5 | - | 权益建议，若商家入参配置了权益列表，策略引擎会从中选出最优的选项并返回<br>否则，会按照策略引擎自己的理解返回建议 | - | R1 |
| 2 | strategy.benefit.condition | condition | - | 2 | on_receipt | 发放条件，<br>- immediate：立即给予<br>- on_receipt：确认收货后给予<br>- on_review：评价后给予 | - | - |
| 2 | strategy.benefit.name | name | - | 2 | SK-II神仙水小样(10ml) | 权益名称，如：type=gift，name=SK-II神仙水小样(10ml)<br>type=coupon，name=满100减10券 | - | - |
| 2 | strategy.benefit.benefit_id | benefit_id | - | 2 | 123 | 权益ID，唯一标识当前商家配置的权益<br>入参若有才会透传返回，否则不会返回该参数 | - | - |
| 2 | strategy.benefit.type | type | - | 2 | coupon | 权益类型，枚举值为：<br>- coupon：优惠券（高面额低成本）<br>- gift：礼品/小样（利用高感知价值/低成本的价格差，以小博大）<br>- cash：现金红包（直接有效，适合低客单价商品）<br>- partial_refund：订单部分退款（无需额外营销预算，走售后逆向流程） | - | - |
| 2 | strategy.benefit.value | value | - | 2 | SK-II神仙水小样(10ml) | 权益额度，<br>- type=cash，返回金额，如10.0<br>- type=coupon，与name一致，如满100减10券<br>- type=gift，与name一致，如SK-II神仙水小样(10ml)<br>- type=partial_refund，返回金额，如20.0 | - | - |
| 2 | strategy.benefit.display_name | display_name | - | 2 | 满100减10券 | 权益展示名称 | - | - |
| 1 | strategy.touch | touch | - | 5 | - | 触达时机建议 | - | R1 |
| 2 | strategy.touch.timing | timing | - | 2 | scheduled | 触达时机 <br>- immediate：立即触达(争分夺秒，趁热打铁)<br>- scheduled：固定时段自动触达(避开打扰，精准命中)<br>- auto：全时段自动触达(系统托管，资源最优) | - | - |
| 2 | strategy.touch.scheduled_time | scheduled_time | - | 3 | ["10:00-12:00",  "14:00-14:30"] | 当timing为scheduled时的建议时段，如：["10:00-12:00",  "14:00-14:30"] | - | R1 |
| 0 | is_hit_strategy | is_hit_strategy | - | 2 | 1 | 是否命中策略，用于做A/B实验<br>“0”: 未命中，下方字段返回默认值，不要使用<br>“1”：命中，可使用下方数据用于挽单决策 | - | - |
| 0 | retention_prob | retention_prob | - | 9 | 0.7 | 挽回概率 (0.0 - 1.0) | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/volcengineRetainOrder?app_key=your_appkey_here&method=second.volcengineRetainOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/volcengineRetainOrder?app_key=your_appkey_here&method=second.volcengineRetainOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondVolcengineRetainOrderRequest request = new SecondVolcengineRetainOrderRequest();
SecondVolcengineRetainOrderParam param = request.getParam();
param.setShopOrderId("123456789012345");
param.setAfterSaleId("123456789012345");
SecondVolcengineRetainOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondVolcengineRetainOrderRequest();
$param = new SecondVolcengineRetainOrderParam();
$request->setParam($param);
$param->shop_order_id = "123456789012345";
$param->after_sale_id = "123456789012345";
$response = $request->execute(accessToken);

```

### python

```python
request = SecondVolcengineRetainOrderRequest()
param = request.getParams()
param.shop_order_id = "123456789012345"
param.after_sale_id = "123456789012345"
response = request.execute(accessToken)

```

### go

```go
request := second_volcengineRetainOrder_request.New()
param := request.GetParams()
param.ShopOrderId = "123456789012345"
param.AfterSaleId = "123456789012345"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondVolcengineRetainOrderRequest();
var param = request.BuildParam();
param.ShopOrderId = "123456789012345";
param.AfterSaleId = "123456789012345";
var response = request.Execute<SecondVolcengineRetainOrderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:40001 | 参数不对，请检查 | 缺少必要的参数或订单号不存在，请检查 |
| 50002 | 业务处理失败 | isv.business-failed:50201 | 业务处理失败 | 请反馈平台开发 |
| 20001 | 内部服务超时 | isp.service-timeout-error:50401 | 业务请求超时 | 业务请求超时，请重试 |
| 20000 | 系统错误 | isp.service-error:50000 | 业务处理失败 | 请反馈平台开发 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
