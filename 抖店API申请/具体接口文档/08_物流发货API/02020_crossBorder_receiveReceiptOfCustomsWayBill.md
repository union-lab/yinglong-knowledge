# /crossBorder/receiveReceiptOfCustomsWayBill

> 中文说明：快递服务商将运单申报的回执回告至平台  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2020>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /crossBorder/receiveReceiptOfCustomsWayBill |
| 中文名称 | 快递服务商将运单申报的回执回告至平台 |
| 文档目录 | 物流发货API |
| Article ID | 2020 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/6/17 11:05:15 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 560 |

## 使用说明

快递服务商将运单申报的回执回告至字节平台

## 权限包

- 跨境 / 跨境履约清关服务包（配服务商）（packageType=1）；适用应用类目：跨境电商

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | crossBorder.receiveReceiptOfCustomsWayBill | 调用的API接口名称 | - | - |
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
| 0 | order_no | order_no | true | 2 | 7682364686334 | 字节平台的订单号 | - | - |
| 0 | logistics_code | logistics_code | true | 2 | 68836464628 | 物流企业代码 | - | - |
| 0 | logistics_no | logistics_no | true | 2 | 8798372957359 | 物流运单编号 | - | - |
| 0 | return_status | return_status | true | 2 | 2 | 海关的回执状态 | - | - |
| 0 | return_time | return_time | true | 1 | 1655086821 | 回执时间，精确到秒 | - | - |
| 0 | return_info | return_info | true | 2 | - | 具体海关回执错误信息。如无，请填空字符串 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/crossBorder/receiveReceiptOfCustomsWayBill?app_key=your_appkey_here&method=crossBorder.receiveReceiptOfCustomsWayBill&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/crossBorder/receiveReceiptOfCustomsWayBill?app_key=your_appkey_here&method=crossBorder.receiveReceiptOfCustomsWayBill&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
CrossBorderReceiveReceiptOfCustomsWayBillRequest request = new CrossBorderReceiveReceiptOfCustomsWayBillRequest();
CrossBorderReceiveReceiptOfCustomsWayBillParam param = request.getParam();
param.setOrderNo("7682364686334");
param.setLogisticsCode("68836464628");
param.setLogisticsNo("8798372957359");
param.setReturnStatus("2");
param.setReturnTime(1655086821L);
CrossBorderReceiveReceiptOfCustomsWayBillResponse response = request.execute(accessToken);

```

### php

```php
$request = new CrossBorderReceiveReceiptOfCustomsWayBillRequest();
$param = new CrossBorderReceiveReceiptOfCustomsWayBillParam();
$request->setParam($param);
$param->order_no = "7682364686334";
$param->logistics_code = "68836464628";
$param->logistics_no = "8798372957359";
$param->return_status = "2";
$param->return_time = 1655086821;
$response = $request->execute(accessToken);

```

### python

```python
request = CrossBorderReceiveReceiptOfCustomsWayBillRequest()
param = request.getParams()
param.order_no = "7682364686334"
param.logistics_code = "68836464628"
param.logistics_no = "8798372957359"
param.return_status = "2"
param.return_time = 1655086821
response = request.execute(accessToken)

```

### go

```go
request := crossBorder_receiveReceiptOfCustomsWayBill_request.New()
param := request.GetParams()
param.OrderNo = "7682364686334"
param.LogisticsCode = "68836464628"
param.LogisticsNo = "8798372957359"
param.ReturnStatus = "2"
param.ReturnTime = 1655086821
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new CrossBorderReceiveReceiptOfCustomsWayBillRequest();
var param = request.BuildParam();
param.OrderNo = "7682364686334";
param.LogisticsCode = "68836464628";
param.LogisticsNo = "8798372957359";
param.ReturnStatus = "2";
param.ReturnTime = 1655086821;
var response = request.Execute<CrossBorderReceiveReceiptOfCustomsWayBillResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1002 | 非法参数，如参数格式错误、参数数据错误 | 请检查参数是否正确，若认为正确请联系工作人员 |
| 50002 | 业务处理失败 | isv.business-failed:1005 | 接口调用异常，请重试；多次仍失败，请联系工作人员 | 重试，多次失败请人工反馈 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
