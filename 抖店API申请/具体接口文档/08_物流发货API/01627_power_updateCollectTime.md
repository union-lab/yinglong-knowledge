# /power/updateCollectTime

> 中文说明：物流商推送改约时间  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1627>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/updateCollectTime |
| 中文名称 | 物流商推送改约时间 |
| 文档目录 | 物流发货API |
| Article ID | 1627 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2026/1/6 18:50:50 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

物流商改约同步修改接口

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）
- 物流连接平台 / 上门取件对接（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.updateCollectTime | 调用的API接口名称 | - | - |
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
| 0 | waybill_no | waybillNo | false | 2 | 1 | 1 | - | - |
| 0 | start_collect_time | startCollectTime | false | 2 | 1 | 1 | - | - |
| 0 | end_collect_time | endCollectTime | false | 2 | 1 | 1 | - | - |
| 0 | operation_time | operationTime | false | 2 | 1 | 1 | - | - |
| 0 | logistics_fulfill_order_no | logisticsFulfillOrderNo | false | 2 | 1 | 1 | - | - |
| 0 | call | call | false | 4 | 1 | 1 | - | - |
| 0 | call_nums | callNums | false | 2 | 1 | 1 | - | - |
| 0 | is_connected | isConnected | false | 4 | 1 | 1 | - | - |
| 0 | call_info | callInfo | false | 3 | - | 1 | - | - |
| 1 | call_info.call_number | callNumber | false | 2 | 1 | 1 | - | - |
| 1 | call_info.call_duration | callDuration | false | 2 | 1 | 1 | - | - |
| 1 | call_info.receive_number | receiveNumber | false | 2 | 1 | 1 | - | - |
| 1 | call_info.caller_name | callerName | false | 2 | 1 | 1 | - | - |
| 1 | call_info.is_connected | isConnected | false | 4 | 1 | 1 | - | - |
| 1 | call_info.call_time | callTime | false | 2 | 1 | 1 | - | - |
| 0 | reason | reason | false | 2 | UNABLE_TO_CONTACT_CONSUMER | 改约原因 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/updateCollectTime?app_key=your_appkey_here&method=power.updateCollectTime&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/updateCollectTime?app_key=your_appkey_here&method=power.updateCollectTime&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerUpdateCollectTimeRequest request = new PowerUpdateCollectTimeRequest();
PowerUpdateCollectTimeParam param = request.getParam();
param.setWaybillNo("1");
param.setStartCollectTime("1");
param.setEndCollectTime("1");
param.setOperationTime("1");
param.setLogisticsFulfillOrderNo("1");
param.setCall(1);
param.setCallNums("1");
param.setIsConnected(1);
param.setReason("UNABLE_TO_CONTACT_CONSUMER");
PowerUpdateCollectTimeResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerUpdateCollectTimeRequest();
$param = new PowerUpdateCollectTimeParam();
$request->setParam($param);
$param->waybill_no = "1";
$param->start_collect_time = "1";
$param->end_collect_time = "1";
$param->operation_time = "1";
$param->logistics_fulfill_order_no = "1";
$param->call = 1;
$param->call_nums = "1";
$param->is_connected = 1;
$param->reason = "UNABLE_TO_CONTACT_CONSUMER";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerUpdateCollectTimeRequest()
param = request.getParams()
param.waybill_no = "1"
param.start_collect_time = "1"
param.end_collect_time = "1"
param.operation_time = "1"
param.logistics_fulfill_order_no = "1"
param.call = 1
param.call_nums = "1"
param.is_connected = 1
param.reason = "UNABLE_TO_CONTACT_CONSUMER"
response = request.execute(accessToken)

```

### go

```go
request := power_updateCollectTime_request.New()
param := request.GetParams()
param.WaybillNo = "1"
param.StartCollectTime = "1"
param.EndCollectTime = "1"
param.OperationTime = "1"
param.LogisticsFulfillOrderNo = "1"
param.Call = 1
param.CallNums = "1"
param.IsConnected = 1
param.Reason = "UNABLE_TO_CONTACT_CONSUMER"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerUpdateCollectTimeRequest();
var param = request.BuildParam();
param.WaybillNo = "1";
param.StartCollectTime = "1";
param.EndCollectTime = "1";
param.OperationTime = "1";
param.LogisticsFulfillOrderNo = "1";
param.Call = 1;
param.CallNums = "1";
param.IsConnected = 1;
param.Reason = "UNABLE_TO_CONTACT_CONSUMER";
var response = request.Execute<PowerUpdateCollectTimeResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:-10007 | -10007:未知错误 | 人工定位 |
| 50002 | 业务处理失败 | isv.business-failed:10902 | 10902:该运单号已超过修改次数阈值 | 修改失败 |
| 50002 | 业务处理失败 | isv.business-failed:10905 | 10905:修改时间不在3天内 | 修改失败 |
| 50002 | 业务处理失败 | isv.business-failed:6405 | 6405:系统异常 | 修改失败 |
| 50002 | 业务处理失败 | isv.business-failed:10904 | 10904:修改时间格式不允许 | 修改失败 |
| 50002 | 业务处理失败 | isv.business-failed:10901 | 10901:当前状态不允许修改 | 修改失败 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 10002:系统异常 | 人工定位 |
| 50002 | 业务处理失败 | isv.business-failed:10906 | 10906:不满足电联要求 | 传入合法电联记录 |
| 50002 | 业务处理失败 | isv.business-failed:10000 | 10000:参数错误 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:10907 | 滞留包裹不支持改约 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:10014 | 1h不支持改为2h预约时间 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:10921 | 当前状态不支持上报“无法联系上消费者” | 修改失败 |
| 50002 | 业务处理失败 | isv.business-failed:10922 | 当前状态不支持上报“消费者想换寄件时间” | 修改失败 |
| 50002 | 业务处理失败 | isv.business-failed:10923 | 当前状态不支持上报“来不及按预约时间上门” | 修改失败 |
| 50002 | 业务处理失败 | isv.business-failed:10924 | 提报时间必须晚于用户预约的最晚上门时间 | 修改失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
