# /logistics/operatorAppointmentEventRequest

> 中文说明：服务商预约事件  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2920>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/operatorAppointmentEventRequest |
| 中文名称 | 服务商预约事件 |
| 文档目录 | 物流发货API |
| Article ID | 2920 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/4/12 15:21:37 |
| 授权主体 | [""] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | - |
| 限流值（官方原值） | - |

## 使用说明

服务商预约事件

## 权限包

- 物流发货 / 以旧换新（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.operatorAppointmentEventRequest | 调用的API接口名称 | - | - |
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
| 0 | service_code | serviceCode | true | 2 | xxx | SVC-WBTRADEIN | - | - |
| 0 | operation_no | operationNo | true | 2 | xxx | 操作单ID | - | - |
| 0 | appointment_time | appointmentTime | false | 2 | 2020-06-01 10:00:00~<br>2020-06-01 12:00:00 | 预约时间 | - | - |
| 0 | operation_time | operationTime | false | 2 | 2020-06-01 10:00:00 | 操作时间 | - | - |
| 0 | service_entity_code | serviceEntityCode | - | 2 | xxx | 服务实体编码，需和研发确认 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/operatorAppointmentEventRequest?app_key=your_appkey_here&method=logistics.operatorAppointmentEventRequest&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/operatorAppointmentEventRequest?app_key=your_appkey_here&method=logistics.operatorAppointmentEventRequest&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsOperatorAppointmentEventRequestRequest request = new LogisticsOperatorAppointmentEventRequestRequest();
LogisticsOperatorAppointmentEventRequestParam param = request.getParam();
param.setServiceCode("xxx");
param.setOperationNo("xxx");
param.setAppointmentTime("2020-06-01 10:00:00~2020-06-01 12:00:00");
param.setOperationTime("2020-06-01 10:00:00");
param.setServiceEntityCode("xxx");
LogisticsOperatorAppointmentEventRequestResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsOperatorAppointmentEventRequestRequest();
$param = new LogisticsOperatorAppointmentEventRequestParam();
$request->setParam($param);
$param->service_code = "xxx";
$param->operation_no = "xxx";
$param->appointment_time = "2020-06-01 10:00:00~2020-06-01 12:00:00";
$param->operation_time = "2020-06-01 10:00:00";
$param->service_entity_code = "xxx";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsOperatorAppointmentEventRequestRequest()
param = request.getParams()
param.service_code = "xxx"
param.operation_no = "xxx"
param.appointment_time = "2020-06-01 10:00:00~2020-06-01 12:00:00"
param.operation_time = "2020-06-01 10:00:00"
param.service_entity_code = "xxx"
response = request.execute(accessToken)

```

### go

```go
request := logistics_operatorAppointmentEventRequest_request.New()
param := request.GetParams()
param.ServiceCode = "xxx"
param.OperationNo = "xxx"
param.AppointmentTime = "2020-06-01 10:00:00~2020-06-01 12:00:00"
param.OperationTime = "2020-06-01 10:00:00"
param.ServiceEntityCode = "xxx"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsOperatorAppointmentEventRequestRequest();
var param = request.BuildParam();
param.ServiceCode = "xxx";
param.OperationNo = "xxx";
param.AppointmentTime = "2020-06-01 10:00:00~2020-06-01 12:00:00";
param.OperationTime = "2020-06-01 10:00:00";
param.ServiceEntityCode = "xxx";
var response = request.Execute<LogisticsOperatorAppointmentEventRequestResponse>(accessToken);

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
