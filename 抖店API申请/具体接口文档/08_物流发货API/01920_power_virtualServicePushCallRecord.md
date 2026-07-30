# /power/virtualServicePushCallRecord

> 中文说明：虚拟号服务商通话记录回传（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1920>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/virtualServicePushCallRecord |
| 中文名称 | 虚拟号服务商通话记录回传（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1920 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/12/9 11:20:32 |
| 授权主体 | ["物流商"] |
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
| 0 | method | - | true | 2 | power.virtualServicePushCallRecord | 调用的API接口名称 | - | - |
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
| 0 | request_id | RequestId | true | 2 | 0 | - | - | - |
| 0 | service_code | ServiceCode | true | 2 | 0 | - | - | - |
| 0 | tel_a | TelA | true | 2 | 0 | - | - | - |
| 0 | tel_x | TelX | true | 2 | 0 | - | - | - |
| 0 | tel_b | TelB | true | 2 | 0 | - | - | - |
| 0 | tel_y | TelY | false | 2 | 0 | - | - | - |
| 0 | subid | SubId | false | 2 | 0 | - | - | - |
| 0 | calltype | CallType | true | 2 | 0 | - | - | - |
| 0 | calltime | CallTime | true | 2 | 0 | - | - | - |
| 0 | ringingtime | RingingTime | true | 2 | 0 | - | - | - |
| 0 | starttime | StartTime | true | 2 | 0 | - | - | - |
| 0 | releasetime | ReleaseTime | true | 2 | 0 | - | - | - |
| 0 | call_duration | CallDuration | false | 7 | 0 | - | - | - |
| 0 | ringing_duration | RingingDuration | false | 7 | 0 | - | - | - |
| 0 | callid | CallId | true | 2 | 0 | - | - | - |
| 0 | releasedir | ReleaseDir | false | 2 | 0 | - | - | - |
| 0 | releasecause | ReleaseCause | false | 2 | 0 | - | - | - |
| 0 | calldisplay | CallDisplay | false | 2 | 0 | - | - | - |
| 0 | callrecording | CallRecording | false | 2 | 0 | - | - | - |
| 0 | recordurl | RecordUrl | false | 2 | 0 | - | - | - |
| 0 | ringingrecordurl | RingingRecordUrl | false | 2 | 0 | - | - | - |
| 0 | areacode | AreaCode | false | 2 | 0 | - | - | - |
| 0 | remark | Remark | false | 2 | 0 | - | - | - |
| 0 | tel_xext | TelXext | false | 2 | 0 | - | - | - |
| 0 | collect_num_time | CollectNumTime | false | 2 | 0 | - | - | - |
| 0 | callstate | CallState | false | 2 | 0 | - | - | - |
| 0 | ext | Ext | false | 2 | 0 | - | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | Success | - | 4 | false | - | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/virtualServicePushCallRecord?app_key=your_appkey_here&method=power.virtualServicePushCallRecord&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/virtualServicePushCallRecord?app_key=your_appkey_here&method=power.virtualServicePushCallRecord&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerVirtualServicePushCallRecordRequest request = new PowerVirtualServicePushCallRecordRequest();
PowerVirtualServicePushCallRecordParam param = request.getParam();
param.setRequestId("0");
param.setServiceCode("0");
param.setTelA("0");
param.setTelX("0");
param.setTelB("0");
param.setTelY("0");
param.setSubid("0");
param.setCalltype("0");
param.setCalltime("0");
param.setRingingtime("0");
param.setStarttime("0");
param.setReleasetime("0");
param.setCallDuration(0);
param.setRingingDuration(0);
param.setCallid("0");
param.setReleasedir("0");
param.setReleasecause("0");
param.setCalldisplay("0");
param.setCallrecording("0");
param.setRecordurl("0");
param.setRingingrecordurl("0");
param.setAreacode("0");
param.setRemark("0");
param.setTelXext("0");
param.setCollectNumTime("0");
param.setCallstate("0");
param.setExt("0");
PowerVirtualServicePushCallRecordResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerVirtualServicePushCallRecordRequest();
$param = new PowerVirtualServicePushCallRecordParam();
$request->setParam($param);
$param->request_id = "0";
$param->service_code = "0";
$param->tel_a = "0";
$param->tel_x = "0";
$param->tel_b = "0";
$param->tel_y = "0";
$param->subid = "0";
$param->calltype = "0";
$param->calltime = "0";
$param->ringingtime = "0";
$param->starttime = "0";
$param->releasetime = "0";
$param->call_duration = 0;
$param->ringing_duration = 0;
$param->callid = "0";
$param->releasedir = "0";
$param->releasecause = "0";
$param->calldisplay = "0";
$param->callrecording = "0";
$param->recordurl = "0";
$param->ringingrecordurl = "0";
$param->areacode = "0";
$param->remark = "0";
$param->tel_xext = "0";
$param->collect_num_time = "0";
$param->callstate = "0";
$param->ext = "0";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerVirtualServicePushCallRecordRequest()
param = request.getParams()
param.request_id = "0"
param.service_code = "0"
param.tel_a = "0"
param.tel_x = "0"
param.tel_b = "0"
param.tel_y = "0"
param.subid = "0"
param.calltype = "0"
param.calltime = "0"
param.ringingtime = "0"
param.starttime = "0"
param.releasetime = "0"
param.call_duration = 0
param.ringing_duration = 0
param.callid = "0"
param.releasedir = "0"
param.releasecause = "0"
param.calldisplay = "0"
param.callrecording = "0"
param.recordurl = "0"
param.ringingrecordurl = "0"
param.areacode = "0"
param.remark = "0"
param.tel_xext = "0"
param.collect_num_time = "0"
param.callstate = "0"
param.ext = "0"
response = request.execute(accessToken)

```

### go

```go
request := power_virtualServicePushCallRecord_request.New()
param := request.GetParams()
param.RequestId = "0"
param.ServiceCode = "0"
param.TelA = "0"
param.TelX = "0"
param.TelB = "0"
param.TelY = "0"
param.Subid = "0"
param.Calltype = "0"
param.Calltime = "0"
param.Ringingtime = "0"
param.Starttime = "0"
param.Releasetime = "0"
param.CallDuration = 0
param.RingingDuration = 0
param.Callid = "0"
param.Releasedir = "0"
param.Releasecause = "0"
param.Calldisplay = "0"
param.Callrecording = "0"
param.Recordurl = "0"
param.Ringingrecordurl = "0"
param.Areacode = "0"
param.Remark = "0"
param.TelXext = "0"
param.CollectNumTime = "0"
param.Callstate = "0"
param.Ext = "0"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerVirtualServicePushCallRecordRequest();
var param = request.BuildParam();
param.RequestId = "0";
param.ServiceCode = "0";
param.TelA = "0";
param.TelX = "0";
param.TelB = "0";
param.TelY = "0";
param.Subid = "0";
param.Calltype = "0";
param.Calltime = "0";
param.Ringingtime = "0";
param.Starttime = "0";
param.Releasetime = "0";
param.CallDuration = 0;
param.RingingDuration = 0;
param.Callid = "0";
param.Releasedir = "0";
param.Releasecause = "0";
param.Calldisplay = "0";
param.Callrecording = "0";
param.Recordurl = "0";
param.Ringingrecordurl = "0";
param.Areacode = "0";
param.Remark = "0";
param.TelXext = "0";
param.CollectNumTime = "0";
param.Callstate = "0";
param.Ext = "0";
var response = request.Execute<PowerVirtualServicePushCallRecordResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:-1 | 业务处理失败 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
