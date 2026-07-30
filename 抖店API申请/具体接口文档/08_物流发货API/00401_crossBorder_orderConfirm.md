# /crossBorder/orderConfirm

> 中文说明：服务商接单  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/401>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /crossBorder/orderConfirm |
| 中文名称 | 服务商接单 |
| 文档目录 | 物流发货API |
| Article ID | 401 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2021/4/23 11:20:52 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

服务商接单

## 权限包

- 跨境 / 跨境履约清关服务包（仓服务商）（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储物流-跨境4PL服务商

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | crossBorder.orderConfirm | 调用的API接口名称 | - | - |
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
| 0 | vendor | vendor | true | 2 | NBNXYB | 字节给供应链服务商定义的编码 | - | - |
| 0 | order_id | order_id | true | 2 | 4752902481541269011 | 字节电商平台的交易订单号 | - | - |
| 0 | status | status | true | 7 | 0 | 接单状态 | - | - |
| 0 | occurrence_time | occurrence_time | true | 2 | 2020-12-15 17:20:46 | 物流状态的真实发生时间 | - | - |
| 0 | error_info | error_info | false | 5 | - | 接单失败 | - | - |
| 1 | error_info.error_code | error_code | false | 2 | 1 | 错误码 | - | - |
| 1 | error_info.error_msg | error_msg | false | 2 | test | 错误信息 | - | - |
| 0 | deliver_info | deliver_info | false | 5 | - | 运单信息 | - | - |
| 1 | deliver_info.carrier | carrier | false | 2 | yunda | 快递公司编码 | - | - |
| 1 | deliver_info.trans_no | trans_no | false | 2 | 123334543 | 运单号 | - | - |
| 1 | deliver_info.ship_address | ship_address | false | 2 | {"city":{"name":"仁川广域市","id":""},"detail":"仁川广域市西区正西津2路32"} | 发货地址 | - | - |
| 1 | deliver_info.waybill | waybill | false | 2 | https://sf6-ttcdn-tos.pstatp.com/obj/temai/%E6%96%87%E5%AD%97%E6%96%87%E7%A8%BF1.pdf | 电子面单url(pdf格式) | - | - |
| 1 | deliver_info.product_num | product_num | false | 1 | 1 | 商品件数 | - | - |
| 1 | deliver_info.mark | mark | false | 2 | YD | 大头笔 | - | - |
| 1 | deliver_info.delivery_name | delivery_name | false | 2 | 小明 | 发货人姓名 | - | - |
| 1 | deliver_info.delivery_tel | delivery_tel | false | 2 | 13160111111 | 发货人电话 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/crossBorder/orderConfirm?app_key=your_appkey_here&method=crossBorder.orderConfirm&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/crossBorder/orderConfirm?app_key=your_appkey_here&method=crossBorder.orderConfirm&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
CrossBorderOrderConfirmRequest request = new CrossBorderOrderConfirmRequest();
CrossBorderOrderConfirmParam param = request.getParam();
ErrorInfo errorInfo = new ErrorInfo();
param.setErrorInfo(errorInfo);
DeliverInfo deliverInfo = new DeliverInfo();
param.setDeliverInfo(deliverInfo);
param.setVendor("NBNXYB");
param.setOrderId("4752902481541269011");
param.setStatus(0);
param.setOccurrenceTime("2020-12-15 17:20:46");
errorInfo.setErrorCode("1");
errorInfo.setErrorMsg("test");
deliverInfo.setCarrier("yunda");
deliverInfo.setTransNo("123334543");
deliverInfo.setShipAddress("{\"city\":{\"name\":\"仁川广域市\",\"id\":\"\"},\"detail\":\"仁川广域市西区正西津2路32\"}");
deliverInfo.setWaybill("https://sf6-ttcdn-tos.pstatp.com/obj/temai/%E6%96%87%E5%AD%97%E6%96%87%E7%A8%BF1.pdf");
deliverInfo.setProductNum(1L);
deliverInfo.setMark("YD");
deliverInfo.setDeliveryName("小明");
deliverInfo.setDeliveryTel("13160111111");
CrossBorderOrderConfirmResponse response = request.execute(accessToken);

```

### php

```php
$request = new CrossBorderOrderConfirmRequest();
$param = new CrossBorderOrderConfirmParam();
$request->setParam($param);
$errorInfo = new ErrorInfo();
$param->error_info = $errorInfo;
$deliverInfo = new DeliverInfo();
$param->deliver_info = $deliverInfo;
$param->vendor = "NBNXYB";
$param->order_id = "4752902481541269011";
$param->status = 0;
$param->occurrence_time = "2020-12-15 17:20:46";
$errorInfo->error_code = "1";
$errorInfo->error_msg = "test";
$deliverInfo->carrier = "yunda";
$deliverInfo->trans_no = "123334543";
$deliverInfo->ship_address = "{\"city\":{\"name\":\"仁川广域市\",\"id\":\"\"},\"detail\":\"仁川广域市西区正西津2路32\"}";
$deliverInfo->waybill = "https://sf6-ttcdn-tos.pstatp.com/obj/temai/%E6%96%87%E5%AD%97%E6%96%87%E7%A8%BF1.pdf";
$deliverInfo->product_num = 1;
$deliverInfo->mark = "YD";
$deliverInfo->delivery_name = "小明";
$deliverInfo->delivery_tel = "13160111111";
$response = $request->execute(accessToken);

```

### python

```python
request = CrossBorderOrderConfirmRequest()
param = request.getParams()
errorInfo = ErrorInfo()
param.error_info = errorInfo
deliverInfo = DeliverInfo()
param.deliver_info = deliverInfo
param.vendor = "NBNXYB"
param.order_id = "4752902481541269011"
param.status = 0
param.occurrence_time = "2020-12-15 17:20:46"
errorInfo.error_code = "1"
errorInfo.error_msg = "test"
deliverInfo.carrier = "yunda"
deliverInfo.trans_no = "123334543"
deliverInfo.ship_address = "{\"city\":{\"name\":\"仁川广域市\",\"id\":\"\"},\"detail\":\"仁川广域市西区正西津2路32\"}"
deliverInfo.waybill = "https://sf6-ttcdn-tos.pstatp.com/obj/temai/%E6%96%87%E5%AD%97%E6%96%87%E7%A8%BF1.pdf"
deliverInfo.product_num = 1
deliverInfo.mark = "YD"
deliverInfo.delivery_name = "小明"
deliverInfo.delivery_tel = "13160111111"
response = request.execute(accessToken)

```

### go

```go
request := crossBorder_orderConfirm_request.New()
param := request.GetParams()
errorInfo := new(ErrorInfo)
param.ErrorInfo = errorInfo
deliverInfo := new(DeliverInfo)
param.DeliverInfo = deliverInfo
param.Vendor = "NBNXYB"
param.OrderId = "4752902481541269011"
param.Status = 0
param.OccurrenceTime = "2020-12-15 17:20:46"
errorInfo.ErrorCode = "1"
errorInfo.ErrorMsg = "test"
deliverInfo.Carrier = "yunda"
deliverInfo.TransNo = "123334543"
deliverInfo.ShipAddress = "{\"city\":{\"name\":\"仁川广域市\",\"id\":\"\"},\"detail\":\"仁川广域市西区正西津2路32\"}"
deliverInfo.Waybill = "https://sf6-ttcdn-tos.pstatp.com/obj/temai/%E6%96%87%E5%AD%97%E6%96%87%E7%A8%BF1.pdf"
deliverInfo.ProductNum = 1
deliverInfo.Mark = "YD"
deliverInfo.DeliveryName = "小明"
deliverInfo.DeliveryTel = "13160111111"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new CrossBorderOrderConfirmRequest();
var param = request.BuildParam();
var errorInfo = new ErrorInfo();
param.ErrorInfo = errorInfo;
var deliverInfo = new DeliverInfo();
param.DeliverInfo = deliverInfo;
param.Vendor = "NBNXYB";
param.OrderId = "4752902481541269011";
param.Status = 0;
param.OccurrenceTime = "2020-12-15 17:20:46";
errorInfo.ErrorCode = "1";
errorInfo.ErrorMsg = "test";
deliverInfo.Carrier = "yunda";
deliverInfo.TransNo = "123334543";
deliverInfo.ShipAddress = "{\"city\":{\"name\":\"仁川广域市\",\"id\":\"\"},\"detail\":\"仁川广域市西区正西津2路32\"}";
deliverInfo.Waybill = "https://sf6-ttcdn-tos.pstatp.com/obj/temai/%E6%96%87%E5%AD%97%E6%96%87%E7%A8%BF1.pdf";
deliverInfo.ProductNum = 1;
deliverInfo.Mark = "YD";
deliverInfo.DeliveryName = "小明";
deliverInfo.DeliveryTel = "13160111111";
var response = request.Execute<CrossBorderOrderConfirmResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:1005 | 订单状态不支持当前行为，请刷新后重试 | 请检查订单状态 |
| 50002 | 业务处理失败 | isv.business-failed:1004 | 推送的物流状态不对，请查证后重试, 当前状态是 跨境履约单创建成功 | 请检查物流状态 |
| 50002 | 业务处理失败 | isv.business-failed:1002 | 请求太频繁 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:1006 | 1006:record not found | 请检查后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
