# /logistics/virtualServicePushCallRecord

> 中文说明：虚拟号服务商通话记录回传  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/2735>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/virtualServicePushCallRecord |
| 中文名称 | 虚拟号服务商通话记录回传 |
| 文档目录 | 订单API |
| Article ID | 2735 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/11/14 17:06:28 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

虚拟号服务商通话记录回传

## 权限包

- 物流连接平台 / 虚拟号服务（packageType=1）
- 物流连接平台 / 虚拟号（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.virtualServicePushCallRecord | 调用的API接口名称 | - | - |
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
| 0 | request_id | RequestId | true | 2 | 0 | 业务id | - | - |
| 0 | service_code | ServiceCode | true | 2 | 0 | 服务商标识 | - | - |
| 0 | tel_a | TelA | true | 2 | 0 | 被叫号码 | - | - |
| 0 | tel_x | TelX | true | 2 | 0 | 虚拟主号 | - | - |
| 0 | tel_b | TelB | true | 2 | 0 | 主叫号码 | - | - |
| 0 | tel_y | TelY | false | 2 | 0 | 来显号码 | - | - |
| 0 | sub_id | SubId | false | 2 | 0 | 绑定id | - | - |
| 0 | call_type | CallType | true | 2 | 0 | 10：A号主叫，即A回呼 11：A号被叫，即A呼入 12：未输入分机号放弃呼叫 20：无绑定关系，即Xx无绑定号码 | - | - |
| 0 | call_time | CallTime | true | 2 | 0 | 发起呼叫时间 格式: yyyy-MM-dd HH:mm:ss | - | - |
| 0 | ringing_time | RingingTime | true | 2 | 0 | 振铃开始时间格式: yyyy-MM-dd HH:mm:ss | - | - |
| 0 | start_time | StartTime | true | 2 | 0 | 通话开始时间格式: yyyy-MM-dd HH:mm:ss | - | - |
| 0 | release_time | ReleaseTime | true | 2 | 0 | 通话结束时间格式: yyyy-MM-dd HH:mm:ss | - | - |
| 0 | call_duration | CallDuration | true | 7 | 0 | 通话时长 | - | - |
| 0 | ringing_duration | RingingDuration | true | 7 | 0 | 振铃时长 | - | - |
| 0 | call_id | CallId | true | 2 | 0 | 通话标识 | - | - |
| 0 | release_dir | ReleaseDir | true | 2 | 0 | 释放方向1表示主叫, 2表示被叫，0表示平台释放 | - | - |
| 0 | release_cause | ReleaseCause | false | 2 | 0 | 释放原因 | - | - |
| 0 | call_display | CallDisplay | true | 2 | 0 | 来显控制当其他号码为主叫时，是否在被叫上显示其他号码的真实号码。 0：不显示真实号码；1：显示真实号码。默认是0不显示真实号码 | - | - |
| 0 | call_recording | CallRecording | true | 2 | 0 | 录音控制 | - | - |
| 0 | record_url | RecordUrl | false | 2 | 0 | 通话录音地址 | - | - |
| 0 | ringing_record_url | RingingRecordUrl | false | 2 | 0 | 振铃录音地址 | - | - |
| 0 | area_code | AreaCode | false | 2 | 0 | 对应绑定请求中areacode | - | - |
| 0 | remark | Remark | false | 2 | 0 | 接入商自有字段 | - | - |
| 0 | tel_xext | TelXext | false | 2 | 0 | 四位分机号 | - | - |
| 0 | collect_num_time | CollectNumTime | false | 2 | 0 | 发起收号时获取的时间。格式YYYY-MM-DD HH:mm:SS | - | - |
| 0 | call_state | CallState | true | 2 | 0 | 呼叫状态 ANSWERED通话成功，被叫接通，双方成功建立通话 BUSY被叫正忙 NO_ANSWER被叫无应答 REJECT被叫拒接 HANGUP主叫放弃 INVALID_NUMBER空号，话务平台返回的号码是空号，非返回字段为空 POWER_OFF被叫关机 UNAVAILABLE被叫暂时无法接听，不在服务区、暂时无法接通（不关机拔电池）等SUSPEND被叫停机 NO_BINDING无绑定关系 BANNED无权呼叫 OTHER其他失败情形 | - | - |
| 0 | ext | Ext | false | 2 | 0 | 额外字段 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | Success | - | 4 | true | 是否成功 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/orienPlanAuthors?app_key=your_appkey_here&method=buyin.orienPlanAuthors&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/orienPlanAuthors?app_key=your_appkey_here&method=buyin.orienPlanAuthors&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsVirtualServicePushCallRecordRequest request = new LogisticsVirtualServicePushCallRecordRequest();
LogisticsVirtualServicePushCallRecordParam param = request.getParam();
param.setRequestId("0");
param.setServiceCode("0");
param.setTelA("0");
param.setTelX("0");
param.setTelB("0");
param.setTelY("0");
param.setSubId("0");
param.setCallType("0");
param.setCallTime("0");
param.setRingingTime("0");
param.setStartTime("0");
param.setReleaseTime("0");
param.setCallDuration(0);
param.setRingingDuration(0);
param.setCallId("0");
param.setReleaseDir("0");
param.setReleaseCause("0");
param.setCallDisplay("0");
param.setCallRecording("0");
param.setRecordUrl("0");
param.setRingingRecordUrl("0");
param.setAreaCode("0");
param.setRemark("0");
param.setTelXext("0");
param.setCollectNumTime("0");
param.setCallState("0");
param.setExt("0");
LogisticsVirtualServicePushCallRecordResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsVirtualServicePushCallRecordRequest();
$param = new LogisticsVirtualServicePushCallRecordParam();
$request->setParam($param);
$param->request_id = "0";
$param->service_code = "0";
$param->tel_a = "0";
$param->tel_x = "0";
$param->tel_b = "0";
$param->tel_y = "0";
$param->sub_id = "0";
$param->call_type = "0";
$param->call_time = "0";
$param->ringing_time = "0";
$param->start_time = "0";
$param->release_time = "0";
$param->call_duration = 0;
$param->ringing_duration = 0;
$param->call_id = "0";
$param->release_dir = "0";
$param->release_cause = "0";
$param->call_display = "0";
$param->call_recording = "0";
$param->record_url = "0";
$param->ringing_record_url = "0";
$param->area_code = "0";
$param->remark = "0";
$param->tel_xext = "0";
$param->collect_num_time = "0";
$param->call_state = "0";
$param->ext = "0";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsVirtualServicePushCallRecordRequest()
param = request.getParams()
param.request_id = "0"
param.service_code = "0"
param.tel_a = "0"
param.tel_x = "0"
param.tel_b = "0"
param.tel_y = "0"
param.sub_id = "0"
param.call_type = "0"
param.call_time = "0"
param.ringing_time = "0"
param.start_time = "0"
param.release_time = "0"
param.call_duration = 0
param.ringing_duration = 0
param.call_id = "0"
param.release_dir = "0"
param.release_cause = "0"
param.call_display = "0"
param.call_recording = "0"
param.record_url = "0"
param.ringing_record_url = "0"
param.area_code = "0"
param.remark = "0"
param.tel_xext = "0"
param.collect_num_time = "0"
param.call_state = "0"
param.ext = "0"
response = request.execute(accessToken)

```

### go

```go
request := logistics_virtualServicePushCallRecord_request.New()
param := request.GetParams()
param.RequestId = "0"
param.ServiceCode = "0"
param.TelA = "0"
param.TelX = "0"
param.TelB = "0"
param.TelY = "0"
param.SubId = "0"
param.CallType = "0"
param.CallTime = "0"
param.RingingTime = "0"
param.StartTime = "0"
param.ReleaseTime = "0"
param.CallDuration = 0
param.RingingDuration = 0
param.CallId = "0"
param.ReleaseDir = "0"
param.ReleaseCause = "0"
param.CallDisplay = "0"
param.CallRecording = "0"
param.RecordUrl = "0"
param.RingingRecordUrl = "0"
param.AreaCode = "0"
param.Remark = "0"
param.TelXext = "0"
param.CollectNumTime = "0"
param.CallState = "0"
param.Ext = "0"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsVirtualServicePushCallRecordRequest();
var param = request.BuildParam();
param.RequestId = "0";
param.ServiceCode = "0";
param.TelA = "0";
param.TelX = "0";
param.TelB = "0";
param.TelY = "0";
param.SubId = "0";
param.CallType = "0";
param.CallTime = "0";
param.RingingTime = "0";
param.StartTime = "0";
param.ReleaseTime = "0";
param.CallDuration = 0;
param.RingingDuration = 0;
param.CallId = "0";
param.ReleaseDir = "0";
param.ReleaseCause = "0";
param.CallDisplay = "0";
param.CallRecording = "0";
param.RecordUrl = "0";
param.RingingRecordUrl = "0";
param.AreaCode = "0";
param.Remark = "0";
param.TelXext = "0";
param.CollectNumTime = "0";
param.CallState = "0";
param.Ext = "0";
var response = request.Execute<LogisticsVirtualServicePushCallRecordResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:-1 | -1:获取分布式锁失败 | -1:获取分布式锁失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
