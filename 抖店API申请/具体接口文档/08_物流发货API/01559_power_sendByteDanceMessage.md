# /power/sendByteDanceMessage

> 中文说明：末端服务短信待发（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1559>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/sendByteDanceMessage |
| 中文名称 | 末端服务短信待发（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1559 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2021/12/27 21:08:19 |
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
| 0 | method | - | true | 2 | power.sendByteDanceMessage | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | waybill_code | waybillCode | false | 2 | 0 | - | - | - |
| 0 | express_company | expressCompany | false | 2 | 0 | - | - | - |
| 0 | message | message | false | 2 | 0 | - | - | - |
| 0 | pick_msg_code | pickMsgCode | false | 2 | 0 | - | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/sendByteDanceMessage?app_key=your_appkey_here&method=power.sendByteDanceMessage&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/sendByteDanceMessage?app_key=your_appkey_here&method=power.sendByteDanceMessage&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerSendByteDanceMessageRequest request = new PowerSendByteDanceMessageRequest();
PowerSendByteDanceMessageParam param = request.getParam();
param.setWaybillCode("0");
param.setExpressCompany("0");
param.setMessage("0");
param.setPickMsgCode("0");
PowerSendByteDanceMessageResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerSendByteDanceMessageRequest();
$param = new PowerSendByteDanceMessageParam();
$request->setParam($param);
$param->waybill_code = "0";
$param->express_company = "0";
$param->message = "0";
$param->pick_msg_code = "0";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerSendByteDanceMessageRequest()
param = request.getParams()
param.waybill_code = "0"
param.express_company = "0"
param.message = "0"
param.pick_msg_code = "0"
response = request.execute(accessToken)

```

### go

```go
request := power_sendByteDanceMessage_request.New()
param := request.GetParams()
param.WaybillCode = "0"
param.ExpressCompany = "0"
param.Message = "0"
param.PickMsgCode = "0"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerSendByteDanceMessageRequest();
var param = request.BuildParam();
param.WaybillCode = "0";
param.ExpressCompany = "0";
param.Message = "0";
param.PickMsgCode = "0";
var response = request.Execute<PowerSendByteDanceMessageResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:11003 | 11003:系统异常 | 11003:系统异常 |
| 50002 | 业务处理失败 | isv.business-failed:11009 | 11009:手机号不存在 | 11009:手机号不存在 |
| 50002 | 业务处理失败 | isv.business-failed:11001 | 11001:数据库异常 | 11001:数据库异常 |
| 50002 | 业务处理失败 | isv.business-failed:11022 | 11022:判断是否抖音包裹异常:网络超时 | 11022:判断是否抖音包裹异常:网络超时 |
| 50002 | 业务处理失败 | isv.business-failed:11021 | 11021:判断是否抖音面单异常:系统异常 | 11021:判断是否抖音面单异常:系统异常 |
| 50002 | 业务处理失败 | isv.business-failed:11019 | 11019:收件人信息获取失败:系统异常 | 11019:收件人信息获取失败:系统异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
