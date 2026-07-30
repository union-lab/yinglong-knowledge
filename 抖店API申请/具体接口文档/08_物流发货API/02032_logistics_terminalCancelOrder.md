# /logistics/terminalCancelOrder

> 中文说明：物流商取消  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2032>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/terminalCancelOrder |
| 中文名称 | 物流商取消 |
| 文档目录 | 物流发货API |
| Article ID | 2032 |
| 文档版本 | V2.02 |
| 官方更新时间 | 2024/3/1 14:30:03 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

物流商取消

## 权限包

- 物流连接平台 / 快递柜寄件（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.terminalCancelOrder | 调用的API接口名称 | - | - |
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
| 0 | waybillCode | waybillCode | false | 2 | 12345677 | 运单号 | - | - |
| 0 | orderId | orderId | false | 2 | lfo1234567 | 订单号 | - | - |
| 0 | operationType | operationType | false | 2 | 1 | 取消类型 | - | - |
| 0 | backCode | backCode | false | 2 | 1234 | 取回码 | - | - |
| 0 | operatorName | operatorName | false | 2 | 张三 | 操作人姓名 | - | - |
| 0 | operatorTel | operatorTel | false | 2 | 12345678 | 操作人号码 | - | - |
| 0 | cancelCode | cancelCode | false | 2 | 1234 | 取消编码 | - | - |
| 0 | cancelReason | cancelReason | false | 2 | 柜子无货 | 取消原因 | - | - |
| 0 | isConnected | isConnected | false | 4 | true | 是否接通 | - | - |
| 0 | call | call | false | 4 | true | 是否电联 | - | - |
| 0 | callNums | callNums | false | 2 | 2 | 电联次数 | - | - |
| 0 | callInfo | callInfo | false | 3 | - | 电联明细 | - | - |
| 1 | callInfo.callNumber | callNumber | false | 2 | 15161052766 | 电联号码（快递员） | - | - |
| 1 | callInfo.callerName | callerName | false | 2 | 张三 | 电联人姓名（快递员） | - | - |
| 1 | callInfo.receiveNumber | receiveNumber | false | 2 | 15161052766 | 用户号码 | - | - |
| 1 | callInfo.isConnected | isConnected | false | 4 | true | 是否接通 | - | - |
| 1 | callInfo.callTime | callTime | false | 2 | 2021-01-19 10:00:00 | 电联时间 | - | - |
| 1 | callInfo.callDuration | callDuration | false | 2 | 10 | 通话时长 | - | - |
| 0 | needConnect | needConnect | false | 4 | true | 是否需要电联 | - | - |

## 响应参数

无。

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
LogisticsTerminalCancelOrderRequest request = new LogisticsTerminalCancelOrderRequest();
LogisticsTerminalCancelOrderParam param = request.getParam();
param.setWaybillCode("12345677");
param.setOrderId("lfo1234567");
param.setOperationType("1");
param.setBackCode("1234");
param.setOperatorName("张三");
param.setOperatorTel("12345678");
param.setCancelCode("1234");
param.setCancelReason("柜子无货");
param.setIsConnected(true);
param.setCall(true);
param.setCallNums("2");
param.setNeedConnect(true);
LogisticsTerminalCancelOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsTerminalCancelOrderRequest();
$param = new LogisticsTerminalCancelOrderParam();
$request->setParam($param);
$param->waybillCode = "12345677";
$param->orderId = "lfo1234567";
$param->operationType = "1";
$param->backCode = "1234";
$param->operatorName = "张三";
$param->operatorTel = "12345678";
$param->cancelCode = "1234";
$param->cancelReason = "柜子无货";
$param->isConnected = true;
$param->call = true;
$param->callNums = "2";
$param->needConnect = true;
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsTerminalCancelOrderRequest()
param = request.getParams()
param.waybillCode = "12345677"
param.orderId = "lfo1234567"
param.operationType = "1"
param.backCode = "1234"
param.operatorName = "张三"
param.operatorTel = "12345678"
param.cancelCode = "1234"
param.cancelReason = "柜子无货"
param.isConnected = true
param.call = true
param.callNums = "2"
param.needConnect = true
response = request.execute(accessToken)

```

### go

```go
request := logistics_terminalCancelOrder_request.New()
param := request.GetParams()
param.WaybillCode = "12345677"
param.OrderId = "lfo1234567"
param.OperationType = "1"
param.BackCode = "1234"
param.OperatorName = "张三"
param.OperatorTel = "12345678"
param.CancelCode = "1234"
param.CancelReason = "柜子无货"
param.IsConnected = true
param.Call = true
param.CallNums = "2"
param.NeedConnect = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsTerminalCancelOrderRequest();
var param = request.BuildParam();
param.WaybillCode = "12345677";
param.OrderId = "lfo1234567";
param.OperationType = "1";
param.BackCode = "1234";
param.OperatorName = "张三";
param.OperatorTel = "12345678";
param.CancelCode = "1234";
param.CancelReason = "柜子无货";
param.IsConnected = true;
param.Call = true;
param.CallNums = "2";
param.NeedConnect = true;
var response = request.Execute<LogisticsTerminalCancelOrderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:11000 | 参数错误 | 修改参数 |
| 20000 | 系统错误 | isp.service-error:11005 | 订单不存在 | 联系技术 |
| 20000 | 系统错误 | isp.service-error:12001 | 状态机初始化失败 | 联系技术 |
| 20000 | 系统错误 | isp.service-error:12002 | 当前状态不允许取消 | 联系技术 |
| 20000 | 系统错误 | isp.service-error:11002 | mq异常 | 可重试 |
| 20000 | 系统错误 | isp.service-error:11001 | 数据库异常 | 可重试 |
| 20000 | 系统错误 | isp.service-error:11017 | 并发异常 | 可重试 |
| 50002 | 业务处理失败 | isv.business-failed:14001 | 支付成功29天后不允许取消 | 联系技术 |
| 50002 | 业务处理失败 | isv.business-failed:14002 | 不满足电联条件 | 请电联 |
| 50002 | 业务处理失败 | isv.business-failed:14003 | 用户未还款不允许取消 | 通知用户还款 |
| 50002 | 业务处理失败 | isv.business-failed:11003 | 11003:系统异常 | 11003:系统异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
