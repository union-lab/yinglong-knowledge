# /power/isByteDancePackage

> 中文说明：末端服务字节面单信息查询（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1558>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/isByteDancePackage |
| 中文名称 | 末端服务字节面单信息查询（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1558 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2025/4/17 20:56:27 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20000 |

## 使用说明

略

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.isByteDancePackage | 调用的API接口名称 | - | - |
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
| 0 | waybill_code | waybillCode | false | 2 | 0 | - | - | - |
| 0 | express_company | expressCompany | false | 2 | 0 | - | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | is_bytedance_waybill | isBytedanceWaybill | - | 2 | 0 | 是否是字节包裹 | - | R1 |
| 0 | is_bytedance_dec | isBytedanceDec | - | 2 | 0 | 是否是字节面单 | - | R1 |
| 0 | sender | sender | - | 5 | - | 寄件人信息 | - | R1 |
| 1 | sender.name | name | - | 2 | 0 | - | - | R1 |
| 1 | sender.mobile | mobile | - | 2 | 0 | - | - | R1 |
| 1 | sender.is_virtual_no | isVirtualNo | - | 2 | 0 | - | - | R1 |
| 1 | sender.virtual_no | virtualNo | - | 2 | 0 | - | - | R1 |
| 1 | sender.virtual_status | virtualStatus | - | 2 | 0 | - | - | R1 |
| 1 | sender.auth_flag | authFlag | - | 2 | - | 是否授权,1-是 2-否 | - | - |
| 1 | sender.auth_start_time | authStartTime | - | 2 | - | 授权开始时间,格式"2021-03-29 09:39:03" | - | - |
| 1 | sender.auth_end_time | authEndTime | - | 2 | - | 授权结束时间,格式"2021-03-29 09:39:03" | - | - |
| 0 | receiver | receiver | - | 5 | - | 收件人信息 | - | R1 |
| 1 | receiver.name | name | - | 2 | 0 | - | - | R1 |
| 1 | receiver.mobile | mobile | - | 2 | 0 | - | - | R1 |
| 1 | receiver.is_virtual_no | isVirtualNo | - | 2 | 0 | - | - | R1 |
| 1 | receiver.virtual_no | virtualNo | - | 2 | 0 | - | - | R1 |
| 1 | receiver.virtual_status | virtualStatus | - | 2 | 0 | - | - | R1 |
| 1 | receiver.auth_end_time | authEndTime | - | 2 | - | 授权结束时间,格式"2021-03-29 09:39:03" | - | - |
| 1 | receiver.auth_flag | authFlag | - | 2 | - | 是否授权,1-是 2-否 | - | - |
| 1 | receiver.auth_start_time | authStartTime | - | 2 | - | 授权开始时间,格式"2021-03-29 09:39:03" | - | - |
| 0 | privacy_flag | privacyFlag | - | 2 | 1 | 是否是虚拟号 | - | R1 |
| 0 | isSmsSupported | isSmsSupported | - | 4 | true | 是否支持短信代发 | - | - |
| 0 | smsNotSupportedReason | smsNotSupportedReason | - | 2 | - | 短信不支持原因 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/isByteDancePackage?app_key=your_appkey_here&method=power.isByteDancePackage&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/isByteDancePackage?app_key=your_appkey_here&method=power.isByteDancePackage&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerIsByteDancePackageRequest request = new PowerIsByteDancePackageRequest();
PowerIsByteDancePackageParam param = request.getParam();
param.setWaybillCode("0");
param.setExpressCompany("0");
PowerIsByteDancePackageResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerIsByteDancePackageRequest();
$param = new PowerIsByteDancePackageParam();
$request->setParam($param);
$param->waybill_code = "0";
$param->express_company = "0";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerIsByteDancePackageRequest()
param = request.getParams()
param.waybill_code = "0"
param.express_company = "0"
response = request.execute(accessToken)

```

### go

```go
request := power_isByteDancePackage_request.New()
param := request.GetParams()
param.WaybillCode = "0"
param.ExpressCompany = "0"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerIsByteDancePackageRequest();
var param = request.BuildParam();
param.WaybillCode = "0";
param.ExpressCompany = "0";
var response = request.Execute<PowerIsByteDancePackageResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:11009 | 11009:手机号不存在 | 修改入参 |
| 50002 | 业务处理失败 | isv.business-failed:11004 | 11004:不支持该物流服务商 | 修改入参 |
| 50002 | 业务处理失败 | isv.business-failed:11000 | 11000:expressCompany is nil | 修改入参 |
| 50002 | 业务处理失败 | isv.business-failed:11003 | 11003:系统异常 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:11021 | 11021:判断是否抖音面单异常:不支持该物流服务商 | 11021:判断是否抖音面单异常:不支持该物流服务商 |
| 50002 | 业务处理失败 | isv.business-failed:11022 | 11022:判断是否抖音包裹异常:网络超时 | 11022:判断是否抖音包裹异常:网络超时 |
| 50002 | 业务处理失败 | isv.business-failed:11019 | 11019:收件人信息获取失败:网络超时 | 11019:收件人信息获取失败:网络超时 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
