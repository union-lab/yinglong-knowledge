# /crossborder/orderLogisticsTrace

> 中文说明：服务商回传国际干线作业节点  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/528>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /crossborder/orderLogisticsTrace |
| 中文名称 | 服务商回传国际干线作业节点 |
| 文档目录 | 物流发货API |
| Article ID | 528 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2021/5/18 15:27:37 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

服务商回传国际干线作业节点

## 权限包

- 跨境 / 跨境履约清关服务包（仓服务商）（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储物流-跨境4PL服务商

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | crossborder.orderLogisticsTrace | 调用的API接口名称 | - | - |
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
| 0 | order_id | order_id | true | 2 | 4789910161734698899 | 字节电商平台的交易订单号 | - | - |
| 0 | vendor | vendor | true | 2 | QS | 字节给供应链服务商定义的编码 | - | - |
| 0 | status | status | true | 1 | 1 | 国际物流状态：1干线提货完成  2干线发运完成  3实物到港 | - | - |
| 0 | occurrence_time | occurrence_time | true | 2 | 2020-03-21 11:22:33 | 物流状态的真实发生时间，yyyy-MM-dd hh:mi:ss | - | - |
| 0 | origin | origin | true | 2 | 505 | 始发地（国/港口） | - | - |
| 0 | destination | destination | true | 2 | 505 | 目的地（国/港口） | - | - |
| 0 | transportation | transportation | false | 5 | - | 国际物流信息（【干线发运完成】状态时，必须提供） | - | - |
| 1 | transportation.oversea_trans_no | oversea_trans_no | false | 2 | 12345 | 国际运单号（CC/UPU）"一单到底"该单号同国内运单号 | - | - |
| 1 | transportation.bill_no | bill_no | false | 2 | 12345 | 提单号（BC） | - | - |
| 1 | transportation.voyage_no | voyage_no | false | 2 | 12346 | 航司航班班次号（BC） | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/crossborder/orderLogisticsTrace?app_key=your_appkey_here&method=crossborder.orderLogisticsTrace&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/crossborder/orderLogisticsTrace?app_key=your_appkey_here&method=crossborder.orderLogisticsTrace&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
CrossborderOrderLogisticsTraceRequest request = new CrossborderOrderLogisticsTraceRequest();
CrossborderOrderLogisticsTraceParam param = request.getParam();
Transportation transportation = new Transportation();
param.setTransportation(transportation);
param.setOrderId("4789910161734698899");
param.setVendor("QS");
param.setStatus(1L);
param.setOccurrenceTime("2020-03-21 11:22:33");
param.setOrigin("505");
param.setDestination("505");
transportation.setOverseaTransNo("12345");
transportation.setBillNo("12345");
transportation.setVoyageNo("12346");
CrossborderOrderLogisticsTraceResponse response = request.execute(accessToken);

```

### php

```php
$request = new CrossborderOrderLogisticsTraceRequest();
$param = new CrossborderOrderLogisticsTraceParam();
$request->setParam($param);
$transportation = new Transportation();
$param->transportation = $transportation;
$param->order_id = "4789910161734698899";
$param->vendor = "QS";
$param->status = 1;
$param->occurrence_time = "2020-03-21 11:22:33";
$param->origin = "505";
$param->destination = "505";
$transportation->oversea_trans_no = "12345";
$transportation->bill_no = "12345";
$transportation->voyage_no = "12346";
$response = $request->execute(accessToken);

```

### python

```python
request = CrossborderOrderLogisticsTraceRequest()
param = request.getParams()
transportation = Transportation()
param.transportation = transportation
param.order_id = "4789910161734698899"
param.vendor = "QS"
param.status = 1
param.occurrence_time = "2020-03-21 11:22:33"
param.origin = "505"
param.destination = "505"
transportation.oversea_trans_no = "12345"
transportation.bill_no = "12345"
transportation.voyage_no = "12346"
response = request.execute(accessToken)

```

### go

```go
request := crossborder_orderLogisticsTrace_request.New()
param := request.GetParams()
transportation := new(Transportation)
param.Transportation = transportation
param.OrderId = "4789910161734698899"
param.Vendor = "QS"
param.Status = 1
param.OccurrenceTime = "2020-03-21 11:22:33"
param.Origin = "505"
param.Destination = "505"
transportation.OverseaTransNo = "12345"
transportation.BillNo = "12345"
transportation.VoyageNo = "12346"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new CrossborderOrderLogisticsTraceRequest();
var param = request.BuildParam();
var transportation = new Transportation();
param.Transportation = transportation;
param.OrderId = "4789910161734698899";
param.Vendor = "QS";
param.Status = 1;
param.OccurrenceTime = "2020-03-21 11:22:33";
param.Origin = "505";
param.Destination = "505";
transportation.OverseaTransNo = "12345";
transportation.BillNo = "12345";
transportation.VoyageNo = "12346";
var response = request.Execute<CrossborderOrderLogisticsTraceResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:1005 | 1005:接口调用异常，请重试，多次失败请人工反馈 | 调用方重试，多次重试失败请联系运营人员 |
| 50002 | 业务处理失败 | isv.business-failed:1002 | 1002:【干线发运完成】时,transportation信息overseaTransNo\|billNo不能缺失！ | 请根据提示回传正确的参数 |
| 50002 | 业务处理失败 | isv.business-failed:1000 | 1000:节点时序状态有误 | 请检查节点时序状态 |
| 50002 | 业务处理失败 | isv.business-failed:1004 | 1004:当前状态节点的时间不能早于平台推单成功时间、不能早于上一个状态操作时间，不能晚于系统当前时间 | 请检查当前状态节点的时间参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
