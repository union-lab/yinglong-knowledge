# /power/notifyRelationTicket

> 中文说明：物流商关联工单推送（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1560>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/notifyRelationTicket |
| 中文名称 | 物流商关联工单推送（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1560 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2021/12/27 21:08:36 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

略

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.notifyRelationTicket | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | bp_ticket_id | bpTicketId | true | 2 | 0 | - | - | - |
| 0 | track_no | trackNo | true | 2 | 0 | - | - | - |
| 0 | ticket_create_first_type | ticketCreateFirstType | false | 2 | 0 | - | - | - |
| 0 | ticket_create_second_type | ticketCreateSecondType | false | 2 | 0 | - | - | - |
| 0 | ticket_create_third_type | ticketCreateThirdType | false | 2 | 0 | - | - | - |
| 0 | ticket_create_description | ticketCreateDescription | true | 2 | 0 | - | - | - |
| 0 | ticket_status | ticketStatus | true | 7 | 0 | - | - | - |
| 0 | ticket_close_first_type | ticketCloseFirstType | false | 2 | 0 | - | - | - |
| 0 | ticket_close_second_type | ticketCloseSecondType | false | 2 | 0 | - | - | - |
| 0 | ticket_close_third_type | ticketCloseThirdType | false | 2 | 0 | - | - | - |
| 0 | ticket_close_description | ticketCloseDescription | false | 2 | 0 | - | - | - |
| 0 | compensate_state | compensateState | false | 7 | 0 | - | - | - |
| 0 | compensate_amount | compensateAmount | false | 1 | 0 | - | - | - |
| 0 | product_volume | productVolume | false | 1 | 0 | - | - | - |
| 0 | attachment | attachment | false | 3 | 0 | - | - | - |
| 0 | extension | extension | false | 2 | 0 | - | - | - |
| 0 | request_time | requestTime | true | 1 | 0 | - | - | - |
| 0 | ticket_create_time | ticketCreateTime | true | 1 | 0 | - | - | - |
| 0 | ticket_close_time | ticketCloseTime | false | 1 | 0 | - | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/notifyRelationTicket?app_key=your_appkey_here&method=power.notifyRelationTicket&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/notifyRelationTicket?app_key=your_appkey_here&method=power.notifyRelationTicket&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerNotifyRelationTicketRequest request = new PowerNotifyRelationTicketRequest();
PowerNotifyRelationTicketParam param = request.getParam();
param.setBpTicketId("0");
param.setTrackNo("0");
param.setTicketCreateFirstType("0");
param.setTicketCreateSecondType("0");
param.setTicketCreateThirdType("0");
param.setTicketCreateDescription("0");
param.setTicketStatus(0);
param.setTicketCloseFirstType("0");
param.setTicketCloseSecondType("0");
param.setTicketCloseThirdType("0");
param.setTicketCloseDescription("0");
param.setCompensateState(0);
param.setCompensateAmount(0L);
param.setProductVolume(0L);
param.setAttachment(0);
param.setExtension("0");
param.setRequestTime(0L);
param.setTicketCreateTime(0L);
param.setTicketCloseTime(0L);
PowerNotifyRelationTicketResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerNotifyRelationTicketRequest();
$param = new PowerNotifyRelationTicketParam();
$request->setParam($param);
$param->bp_ticket_id = "0";
$param->track_no = "0";
$param->ticket_create_first_type = "0";
$param->ticket_create_second_type = "0";
$param->ticket_create_third_type = "0";
$param->ticket_create_description = "0";
$param->ticket_status = 0;
$param->ticket_close_first_type = "0";
$param->ticket_close_second_type = "0";
$param->ticket_close_third_type = "0";
$param->ticket_close_description = "0";
$param->compensate_state = 0;
$param->compensate_amount = 0;
$param->product_volume = 0;
$param->attachment = 0;
$param->extension = "0";
$param->request_time = 0;
$param->ticket_create_time = 0;
$param->ticket_close_time = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = PowerNotifyRelationTicketRequest()
param = request.getParams()
param.bp_ticket_id = "0"
param.track_no = "0"
param.ticket_create_first_type = "0"
param.ticket_create_second_type = "0"
param.ticket_create_third_type = "0"
param.ticket_create_description = "0"
param.ticket_status = 0
param.ticket_close_first_type = "0"
param.ticket_close_second_type = "0"
param.ticket_close_third_type = "0"
param.ticket_close_description = "0"
param.compensate_state = 0
param.compensate_amount = 0
param.product_volume = 0
param.attachment = 0
param.extension = "0"
param.request_time = 0
param.ticket_create_time = 0
param.ticket_close_time = 0
response = request.execute(accessToken)

```

### go

```go
request := power_notifyRelationTicket_request.New()
param := request.GetParams()
param.BpTicketId = "0"
param.TrackNo = "0"
param.TicketCreateFirstType = "0"
param.TicketCreateSecondType = "0"
param.TicketCreateThirdType = "0"
param.TicketCreateDescription = "0"
param.TicketStatus = 0
param.TicketCloseFirstType = "0"
param.TicketCloseSecondType = "0"
param.TicketCloseThirdType = "0"
param.TicketCloseDescription = "0"
param.CompensateState = 0
param.CompensateAmount = 0
param.ProductVolume = 0
param.Attachment = 0
param.Extension = "0"
param.RequestTime = 0
param.TicketCreateTime = 0
param.TicketCloseTime = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerNotifyRelationTicketRequest();
var param = request.BuildParam();
param.BpTicketId = "0";
param.TrackNo = "0";
param.TicketCreateFirstType = "0";
param.TicketCreateSecondType = "0";
param.TicketCreateThirdType = "0";
param.TicketCreateDescription = "0";
param.TicketStatus = 0;
param.TicketCloseFirstType = "0";
param.TicketCloseSecondType = "0";
param.TicketCloseThirdType = "0";
param.TicketCloseDescription = "0";
param.CompensateState = 0;
param.CompensateAmount = 0;
param.ProductVolume = 0;
param.Attachment = 0;
param.Extension = "0";
param.RequestTime = 0;
param.TicketCreateTime = 0;
param.TicketCloseTime = 0;
var response = request.Execute<PowerNotifyRelationTicketResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10000 | 10000:工单已完结 | 10000:工单已完结 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
