# /order/orderCancel

> 中文说明：商家取消待支付订单  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/3381>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/orderCancel |
| 中文名称 | 商家取消待支付订单 |
| 文档目录 | 订单API |
| Article ID | 3381 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/3/30 10:40:23 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

1、订单为买家待支付状态时，支持商家主动取消待支付订单。该接口规则同抖店【订单管理-批量取消-取消订单】功能，主要解决：避免多渠道商家超卖和提升商家取消恶意预占库存订单效率 2、仅主订单维度取消订单 3、注意：确认取消订单后，取消原因将以短信的形式发送至买家，请确保已和买家协商达成一致，否则您将面临投诉或赔偿 4、cancel_reason请填写枚举值中的中文描述必须一模一样，请勿自定义信息，否则无法通过接口校验；

## 权限包

- 订单 / 订单编辑（packageType=1）；适用应用类目：卡券商工具、COD服务、跨境供应链服务、跨境电商、售后管理、打单发货-微应用、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.orderCancel | 调用的API接口名称 | - | - |
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
| 0 | shop_order_id | ShopOrderId | true | 2 | 5050438739367795793 | 店铺主订单号 | - | - |
| 0 | cancel_reason | CancelReason | true | 2 | 用户不想买了 | 取消原因必须是如下枚举之一：①：用户重复下单②：用户不想买了③：用户买错了/信息填错了④重新下单、联系不上用户⑥：快递无法配送至用户地址⑦：其他；注意请使用枚举值信息，如“用户重复下单”必须要一致，开发者请勿自定义或带有空格等信息，否则无法通过接口校验； | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/orderCancel?app_key=your_appkey_here&method=order.orderCancel&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/orderCancel?app_key=your_appkey_here&method=order.orderCancel&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderOrderCancelRequest request = new OrderOrderCancelRequest();
OrderOrderCancelParam param = request.getParam();
param.setShopOrderId("5050438739367795793");
param.setCancelReason("用户不想买了");
param.setCancelReasonRemark("尺寸买小了");
OrderOrderCancelResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderOrderCancelRequest();
$param = new OrderOrderCancelParam();
$request->setParam($param);
$param->shop_order_id = "5050438739367795793";
$param->cancel_reason = "用户不想买了";
$param->cancel_reason_remark = "尺寸买小了";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderOrderCancelRequest()
param = request.getParams()
param.shop_order_id = "5050438739367795793"
param.cancel_reason = "用户不想买了"
param.cancel_reason_remark = "尺寸买小了"
response = request.execute(accessToken)

```

### go

```go
request := order_orderCancel_request.New()
param := request.GetParams()
param.ShopOrderId = "5050438739367795793"
param.CancelReason = "用户不想买了"
param.CancelReasonRemark = "尺寸买小了"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderOrderCancelRequest();
var param = request.BuildParam();
param.ShopOrderId = "5050438739367795793";
param.CancelReason = "用户不想买了";
param.CancelReasonRemark = "尺寸买小了";
var response = request.Execute<OrderOrderCancelResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:50005 | 订单已取消 | 订单已取消，无需重试 |
| 50002 | 业务处理失败 | isv.business-failed:50007 | 距用户下单时间未超过1分钟，请稍后再试 | 距用户下单时间未超过1分钟，请稍后再试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:50001 | 订单id不能为空 | 订单id不能为空 |
| 40002 | 缺少必选参数 | isv.missing-parameter:50002 | 缺少必选参数 | 请检查参数 |
| 40002 | 缺少必选参数 | isv.missing-parameter:50003 | 缺少必选参数 | 请检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:50004 | 业务处理失败 | 业务处理失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:70007 | 业务处理失败 | 业务处理失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:50021 | 业务处理失败 | 业务处理失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:50060 | 业务处理失败 | 业务处理失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:50047 | 定金预售订单不支持取消 | 定金预售订单不支持取消 |
| 50002 | 业务处理失败 | isv.business-failed:50061 | 当前订单为竞拍订单，不允许取消 | 当前订单为竞拍订单，不允许取消 |
| 50002 | 业务处理失败 | isv.business-failed:50048 | 当前订单使用了跨店优惠，仅允许买家主动取消 | 当前订单使用了跨店优惠，仅允许买家主动取消 |
| 50002 | 业务处理失败 | isv.business-failed:50046 | 保险类订单不支持取消 | 保险类订单不支持取消 |
| 50002 | 业务处理失败 | isv.business-failed:50057 | 拍卖类订单不支持取消 | 拍卖类订单不支持取消 |
| 50002 | 业务处理失败 | isv.business-failed:50058 | 拍卖保证金订单不支持取消 | 拍卖保证金订单不支持取消 |
| 50002 | 业务处理失败 | isv.business-failed:50059 | 货到付款订单已完成后不允许取消 | 货到付款订单已完成后不允许取消 |
| 50002 | 业务处理失败 | isv.business-failed:50008 | 货到付款订单已发货后不允许取 | 货到付款订单已发货后不允许取 |
| 80000 | 风控拦截 | isv.risk-control-failed:50999 | 业务处理失败 | 业务处理失败，请检查取消原因 |
| 50002 | 业务处理失败 | isv.business-failed:20003 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:50009 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:50006 | 已付款订单不允许取消 | 已付款订单不允许取消 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
