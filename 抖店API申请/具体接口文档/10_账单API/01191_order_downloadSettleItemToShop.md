# /order/downloadSettleItemToShop

> 中文说明：结算账单下载请求（境内)  
> 所属类别：账单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/46/1191>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/downloadSettleItemToShop |
| 中文名称 | 结算账单下载请求（境内) |
| 文档目录 | 账单API |
| Article ID | 1191 |
| 文档版本 | V2.07 |
| 官方更新时间 | 2023/1/12 20:11:23 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

1、通过url方式，下载文件生成结算账单下单接口，调用接口生成个download_id ，通过返回的download_id调用【/order/downloadToShop】查询下载url文件链接。如果当天账单数据未完全生成会拦截下载请求。
2、如需非url下载方式请调用【/order/getSettleBillDetailV3】

## 权限包

- 账单 / 账单明细查询（packageType=1）；适用应用类目：创新应用大赛_软件服务、商家后台系统、即时零售ERP、即时零售商家自研、电商ERP
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.downloadSettleItemToShop | 调用的API接口名称 | - | - |
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
| 0 | start_time | start_time | true | 2 | 2021-02-01 17:06:49 | 开始时间 | - | - |
| 0 | end_time | end_time | true | 2 | 2021-03-21 17:06:49 | 结束时间 | - | - |
| 0 | time_type | time_type | true | 2 | 0 | 时间类型 0:结算时间 1：下单时间 | - | - |
| 0 | order_id | order_id | false | 2 | 1222333333 | 订单ID | - | - |
| 0 | bill_id | bill_id | false | 2 | 1234555 | 字段已作废,勿填 | - | - |
| 0 | product_id | product_id | false | 2 | 123456 | 商品ID | - | - |
| 0 | pay_type | pay_type | false | 2 | 0 | 结算账户 0:全部 1:微信（升级前） 2:微信 3:支付宝 4:合众支付 5:聚合账户 | - | - |
| 0 | flow_type | flow_type | false | 2 | 0 | 业务类型，不传则默认为0 0:全部 1:巨量千川, 2:值点商城, 3:精选联盟  4:小店自卖 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | download_id | download_id | - | 2 | DL202108191056192174226975 | 下载id，通过返回的download_id调用【/order/downloadToShop】查询下载url文件链接。 | - | R1 |
| 0 | code | code | - | 2 | 100000 | 状态码 | - | R1 |
| 0 | code_msg | code_msg | - | 2 | success | 状态信息 | - | R1 |

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
OrderDownloadSettleItemToShopRequest request = new OrderDownloadSettleItemToShopRequest();
OrderDownloadSettleItemToShopParam param = request.getParam();
param.setStartTime("2021-02-01 17:06:49");
param.setEndTime("2021-03-21 17:06:49");
param.setTimeType("0");
param.setOrderId("1222333333");
param.setBillId("1234555");
param.setProductId("123456");
param.setPayType("0");
param.setFlowType("0");
OrderDownloadSettleItemToShopResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderDownloadSettleItemToShopRequest();
$param = new OrderDownloadSettleItemToShopParam();
$request->setParam($param);
$param->start_time = "2021-02-01 17:06:49";
$param->end_time = "2021-03-21 17:06:49";
$param->time_type = "0";
$param->order_id = "1222333333";
$param->bill_id = "1234555";
$param->product_id = "123456";
$param->pay_type = "0";
$param->flow_type = "0";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderDownloadSettleItemToShopRequest()
param = request.getParams()
param.start_time = "2021-02-01 17:06:49"
param.end_time = "2021-03-21 17:06:49"
param.time_type = "0"
param.order_id = "1222333333"
param.bill_id = "1234555"
param.product_id = "123456"
param.pay_type = "0"
param.flow_type = "0"
response = request.execute(accessToken)

```

### go

```go
request := order_downloadSettleItemToShop_request.New()
param := request.GetParams()
param.StartTime = "2021-02-01 17:06:49"
param.EndTime = "2021-03-21 17:06:49"
param.TimeType = "0"
param.OrderId = "1222333333"
param.BillId = "1234555"
param.ProductId = "123456"
param.PayType = "0"
param.FlowType = "0"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderDownloadSettleItemToShopRequest();
var param = request.BuildParam();
param.StartTime = "2021-02-01 17:06:49";
param.EndTime = "2021-03-21 17:06:49";
param.TimeType = "0";
param.OrderId = "1222333333";
param.BillId = "1234555";
param.ProductId = "123456";
param.PayType = "0";
param.FlowType = "0";
var response = request.Execute<OrderDownloadSettleItemToShopResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:100027 | 账单明细未完全生成，暂不支持下载，避免下载的明细数据不全 | 等5分钟之后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
