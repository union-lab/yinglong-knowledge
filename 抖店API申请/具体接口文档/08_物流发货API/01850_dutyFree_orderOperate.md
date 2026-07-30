# /dutyFree/orderOperate

> 中文说明：海南项目服务商回传实操节点  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1850>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /dutyFree/orderOperate |
| 中文名称 | 海南项目服务商回传实操节点 |
| 文档目录 | 物流发货API |
| Article ID | 1850 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/12/14 20:44:08 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5500 |

## 使用说明

海南项目服务商回传实操节点

## 权限包

- 跨境 / 免税订单处理（packageType=1）；适用应用类目：跨境供应链服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | dutyFree.orderOperate | 调用的API接口名称 | - | - |
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
| 0 | order_id | order_id | true | 2 | 3214321413241 | 订单id | - | - |
| 0 | occurrence_time | occurrence_time | true | 2 | 2021-06-18 11:00:00 | 物流状态的真实发生时间，yyyy-MM-dd hh:mm:ss | - | - |
| 0 | status | status | true | 1 | 1 | 节点状态：1 出库异常，2 已出库 ， 3  提货公司揽收异常，4 提货公司已揽收，5 已送达自提点， 6 消费者已提货，7 提货异常，8已核销，9 核销异常 | - | - |
| 0 | verification_info | verification_info | false | 5 | - | 核销信息，status传入8时必填 | - | - |
| 1 | verification_info.leave_type | leave_type | true | 1 | 1 | 离岛工具：1 飞机，2 火车， 3 轮船 | - | - |
| 1 | verification_info.leave_ticket_no | leave_ticket_no | true | 2 | 21413241 | 离岛工具票号 | - | - |
| 1 | verification_info.leave_time | leave_time | true | 2 | 2021-06-18 11:00:00 | 用户所填交通工具离岛时间 yyyy-MM-dd hh:mm:ss | - | - |
| 0 | transportation | transportation | false | 5 | - | 发货信息，邮寄模式或会员购模式下，status传入2时必填 | - | - |
| 1 | transportation.domestic_carrier | domestic_carrier | true | 2 | JD | 国内快递公司编码 按字节定义的编码推送 | - | - |
| 1 | transportation.domestic_trans_no | domestic_trans_no | true | 2 | JD321413241 | 运单号 | - | - |
| 0 | error_info | error_info | false | 5 | - | 节点异常，status传入1、3、7、9时必填 | - | - |
| 1 | error_info.error_code | errorCode | true | 2 | 1001 | 返回失败编码，商家只回传不可逆转的失败 | - | - |
| 1 | error_info.error_msg | errorMsg | true | 2 | 核销失败 | 返回详细失败原因 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/dutyFree/orderOperate?app_key=your_appkey_here&method=dutyFree.orderOperate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/dutyFree/orderOperate?app_key=your_appkey_here&method=dutyFree.orderOperate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
DutyFreeOrderOperateRequest request = new DutyFreeOrderOperateRequest();
DutyFreeOrderOperateParam param = request.getParam();
VerificationInfo verificationInfo = new VerificationInfo();
param.setVerificationInfo(verificationInfo);
Transportation transportation = new Transportation();
param.setTransportation(transportation);
ErrorInfo errorInfo = new ErrorInfo();
param.setErrorInfo(errorInfo);
param.setOrderId("3214321413241");
param.setOccurrenceTime("2021-06-18 11:00:00");
param.setStatus(1L);
verificationInfo.setLeaveType(1L);
verificationInfo.setLeaveTicketNo("21413241");
verificationInfo.setLeaveTime("2021-06-18 11:00:00");
transportation.setDomesticCarrier("JD");
transportation.setDomesticTransNo("JD321413241");
errorInfo.setErrorCode("1001");
errorInfo.setErrorMsg("核销失败");
DutyFreeOrderOperateResponse response = request.execute(accessToken);

```

### php

```php
$request = new DutyFreeOrderOperateRequest();
$param = new DutyFreeOrderOperateParam();
$request->setParam($param);
$verificationInfo = new VerificationInfo();
$param->verification_info = $verificationInfo;
$transportation = new Transportation();
$param->transportation = $transportation;
$errorInfo = new ErrorInfo();
$param->error_info = $errorInfo;
$param->order_id = "3214321413241";
$param->occurrence_time = "2021-06-18 11:00:00";
$param->status = 1;
$verificationInfo->leave_type = 1;
$verificationInfo->leave_ticket_no = "21413241";
$verificationInfo->leave_time = "2021-06-18 11:00:00";
$transportation->domestic_carrier = "JD";
$transportation->domestic_trans_no = "JD321413241";
$errorInfo->error_code = "1001";
$errorInfo->error_msg = "核销失败";
$response = $request->execute(accessToken);

```

### python

```python
request = DutyFreeOrderOperateRequest()
param = request.getParams()
verificationInfo = VerificationInfo()
param.verification_info = verificationInfo
transportation = Transportation()
param.transportation = transportation
errorInfo = ErrorInfo()
param.error_info = errorInfo
param.order_id = "3214321413241"
param.occurrence_time = "2021-06-18 11:00:00"
param.status = 1
verificationInfo.leave_type = 1
verificationInfo.leave_ticket_no = "21413241"
verificationInfo.leave_time = "2021-06-18 11:00:00"
transportation.domestic_carrier = "JD"
transportation.domestic_trans_no = "JD321413241"
errorInfo.error_code = "1001"
errorInfo.error_msg = "核销失败"
response = request.execute(accessToken)

```

### go

```go
request := dutyFree_orderOperate_request.New()
param := request.GetParams()
verificationInfo := new(VerificationInfo)
param.VerificationInfo = verificationInfo
transportation := new(Transportation)
param.Transportation = transportation
errorInfo := new(ErrorInfo)
param.ErrorInfo = errorInfo
param.OrderId = "3214321413241"
param.OccurrenceTime = "2021-06-18 11:00:00"
param.Status = 1
verificationInfo.LeaveType = 1
verificationInfo.LeaveTicketNo = "21413241"
verificationInfo.LeaveTime = "2021-06-18 11:00:00"
transportation.DomesticCarrier = "JD"
transportation.DomesticTransNo = "JD321413241"
errorInfo.ErrorCode = "1001"
errorInfo.ErrorMsg = "核销失败"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new DutyFreeOrderOperateRequest();
var param = request.BuildParam();
var verificationInfo = new VerificationInfo();
param.VerificationInfo = verificationInfo;
var transportation = new Transportation();
param.Transportation = transportation;
var errorInfo = new ErrorInfo();
param.ErrorInfo = errorInfo;
param.OrderId = "3214321413241";
param.OccurrenceTime = "2021-06-18 11:00:00";
param.Status = 1;
verificationInfo.LeaveType = 1;
verificationInfo.LeaveTicketNo = "21413241";
verificationInfo.LeaveTime = "2021-06-18 11:00:00";
transportation.DomesticCarrier = "JD";
transportation.DomesticTransNo = "JD321413241";
errorInfo.ErrorCode = "1001";
errorInfo.ErrorMsg = "核销失败";
var response = request.Execute<DutyFreeOrderOperateResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:99999 | 接口调用异常，请重试，多次失败请人工反馈 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 回告节点时序有误，当前节点为【出库完成】 | 请检查当前节点 |
| 50002 | 业务处理失败 | isv.business-failed:10001 | 订单不存在，请联系履约确认是否已推单成功 | 请核实订单信息 |
| 50002 | 业务处理失败 | isv.business-failed:10003 | 交易单已关闭，请核实交易单状态 | 请核实交易单状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
