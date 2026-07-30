# /power/HandleVirtualTelConnect

> 中文说明：虚拟号服务商回传虚拟号接通事件  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2011>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/HandleVirtualTelConnect |
| 中文名称 | 虚拟号服务商回传虚拟号接通事件 |
| 文档目录 | 物流发货API |
| Article ID | 2011 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/12/9 11:25:25 |
| 授权主体 | ["云仓","物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

虚拟号服务商回传虚拟号接通事件

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）
- 物流连接平台 / 虚拟号（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.HandleVirtualTelConnect | 调用的API接口名称 | - | - |
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
| 0 | request_id | RequestId | true | 2 | 1 | 请求id | - | - |
| 0 | service_code | ServiceCode | true | 2 | 1 | 服务商code | - | - |
| 0 | callid | Callid | false | 2 | 1 | 通话id | - | - |
| 0 | tel_a | TelA | false | 2 | 1 | A号码 | - | - |
| 0 | tel_x | TelX | false | 2 | 1 | X号码 | - | - |
| 0 | tel_b | TelB | false | 2 | 1 | B号码 | - | - |
| 0 | tel_y | TelY | false | 2 | 1 | Y号码 | - | - |
| 0 | subid | Subid | false | 2 | 1 | 绑定id | - | - |
| 0 | calltype | Calltype | false | 2 | 1 | 呼叫类型 | - | - |
| 0 | calltime | Calltime | false | 2 | 1 | 呼叫时间（已废弃，请传下方的eventTime字段） | - | - |
| 0 | remark | Remark | false | 2 | 1 | 备注 | - | - |
| 0 | tel_xext | TelXext | false | 2 | 1 | 分机号 | - | - |
| 0 | collect_num_time | collectNumTime | false | 2 | 1 | 时间(可不传，废弃字段) | - | - |
| 0 | ext | Ext | false | 2 | 1 | 拓展字段 | - | - |
| 0 | event_type | eventType | false | 7 | 1 | 事件类型（1开始呼叫、2被叫方振铃、3呼叫建立、4呼叫结束） | - | - |
| 0 | all_event_type | allEventType | false | 3 | 1,3,4 | 本次通话全部的通话事件（正常接通挂断的情况下） | - | - |
| 0 | event_time | eventTime | false | 1 | 1669344970 | 事件发生时间的时间戳（单位：秒） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | Success | - | 4 | true | 成功 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/HandleVirtualTelConnect?app_key=your_appkey_here&method=power.HandleVirtualTelConnect&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/HandleVirtualTelConnect?app_key=your_appkey_here&method=power.HandleVirtualTelConnect&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerHandleVirtualTelConnectRequest request = new PowerHandleVirtualTelConnectRequest();
PowerHandleVirtualTelConnectParam param = request.getParam();
param.setRequestId("1");
param.setServiceCode("1");
param.setCallid("1");
param.setTelA("1");
param.setTelX("1");
param.setTelB("1");
param.setTelY("1");
param.setSubid("1");
param.setCalltype("1");
param.setCalltime("1");
param.setRemark("1");
param.setTelXext("1");
param.setCollectNumTime("1");
param.setExt("1");
param.setEventType(1);
param.setAllEventType(1,3,4);
param.setEventTime(1669344970L);
PowerHandleVirtualTelConnectResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerHandleVirtualTelConnectRequest();
$param = new PowerHandleVirtualTelConnectParam();
$request->setParam($param);
$param->request_id = "1";
$param->service_code = "1";
$param->callid = "1";
$param->tel_a = "1";
$param->tel_x = "1";
$param->tel_b = "1";
$param->tel_y = "1";
$param->subid = "1";
$param->calltype = "1";
$param->calltime = "1";
$param->remark = "1";
$param->tel_xext = "1";
$param->collect_num_time = "1";
$param->ext = "1";
$param->event_type = 1;
$param->all_event_type = 1,3,4;
$param->event_time = 1669344970;
$response = $request->execute(accessToken);

```

### python

```python
request = PowerHandleVirtualTelConnectRequest()
param = request.getParams()
param.request_id = "1"
param.service_code = "1"
param.callid = "1"
param.tel_a = "1"
param.tel_x = "1"
param.tel_b = "1"
param.tel_y = "1"
param.subid = "1"
param.calltype = "1"
param.calltime = "1"
param.remark = "1"
param.tel_xext = "1"
param.collect_num_time = "1"
param.ext = "1"
param.event_type = 1
param.all_event_type = 1,3,4
param.event_time = 1669344970
response = request.execute(accessToken)

```

### go

```go
request := power_HandleVirtualTelConnect_request.New()
param := request.GetParams()
param.RequestId = "1"
param.ServiceCode = "1"
param.Callid = "1"
param.TelA = "1"
param.TelX = "1"
param.TelB = "1"
param.TelY = "1"
param.Subid = "1"
param.Calltype = "1"
param.Calltime = "1"
param.Remark = "1"
param.TelXext = "1"
param.CollectNumTime = "1"
param.Ext = "1"
param.EventType = 1
param.AllEventType = 1,3,4
param.EventTime = 1669344970
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerHandleVirtualTelConnectRequest();
var param = request.BuildParam();
param.RequestId = "1";
param.ServiceCode = "1";
param.Callid = "1";
param.TelA = "1";
param.TelX = "1";
param.TelB = "1";
param.TelY = "1";
param.Subid = "1";
param.Calltype = "1";
param.Calltime = "1";
param.Remark = "1";
param.TelXext = "1";
param.CollectNumTime = "1";
param.Ext = "1";
param.EventType = 1;
param.AllEventType = 1,3,4;
param.EventTime = 1669344970;
var response = request.Execute<PowerHandleVirtualTelConnectResponse>(accessToken);

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

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
