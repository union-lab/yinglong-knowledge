# /sms/sign/apply

> 中文说明：提交短信签名申请单  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/1525>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/sign/apply |
| 中文名称 | 提交短信签名申请单 |
| 文档目录 | 短信API |
| Article ID | 1525 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2026/4/8 16:57:46 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

提交短信签名申请单

## 权限包

- 短信 / 短信签名（packageType=1）；适用应用类目：创新应用大赛_微应用、创新应用大赛_软件服务、教育服务、商家后台系统、营销短信-微应用、短信营销、智能外呼
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.sign/apply | 调用的API接口名称 | - | - |
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
| 0 | sms_account | sms_account | true | 2 | 12345 | 短信发送渠道，主要做资源隔离 | - | - |
| 0 | sign | sign | true | 2 | abc | 签名 | - | - |
| 0 | version | version | false | 2 | v2 | 版本号 v2则走新链路 | - | - |
| 0 | auto_use_isv_dedicated_message_group | auto_use_isv_dedicated_message_group | false | 4 | true | 是否使用isv专用消息组，为true且申请签名与抖店后台签名不一致时，将签名申请到isv专用消息组 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | sms_account | sms_account | - | 2 | 1234 | 短信发送渠道，主要做资源隔离 | 73 | R1 |
| 0 | sms_sign_apply_id | sms_sign_apply_id | - | 2 | 23423423 | 短信签名申请单id | 73 | R1 |
| 0 | code | code | - | 99 | 0 | 是否成功 0表示成功 | 29 | R1 |
| 0 | message | message | - | 2 | 成功 | 说明 | 29 | R1 |
| 0 | sign | sign | - | 2 | abc | 签名 | 73 | R1 |
| 0 | status | status | - | 99 | 1 | 审核状态： 1:审核中 2:未通过 3:已开通 4:已关闭 5:免审核（店铺名和签名完全一致时返回） | 73 | R1 |
| 0 | shop_sub_account | shop_sub_account | - | 2 | sefsfe | 签名申请到了哪个消息组 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/sign/apply?app_key=your_appkey_here&method=sms.sign.apply&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/sign/apply?app_key=your_appkey_here&method=sms.sign.apply&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsSignApplyRequest request = new SmsSignApplyRequest();
SmsSignApplyParam param = request.getParam();
param.setSmsAccount("12345");
param.setSign("abc");
param.setVersion("v2");
param.setAutoUseIsvDedicatedMessageGroup(true);
SmsSignApplyResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsSignApplyRequest();
$param = new SmsSignApplyParam();
$request->setParam($param);
$param->sms_account = "12345";
$param->sign = "abc";
$param->version = "v2";
$param->auto_use_isv_dedicated_message_group = true;
$response = $request->execute(accessToken);

```

### python

```python
request = SmsSignApplyRequest()
param = request.getParams()
param.sms_account = "12345"
param.sign = "abc"
param.version = "v2"
param.auto_use_isv_dedicated_message_group = true
response = request.execute(accessToken)

```

### go

```go
request := sms_sign_apply_request.New()
param := request.GetParams()
param.SmsAccount = "12345"
param.Sign = "abc"
param.Version = "v2"
param.AutoUseIsvDedicatedMessageGroup = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsSignApplyRequest();
var param = request.BuildParam();
param.SmsAccount = "12345";
param.Sign = "abc";
param.Version = "v2";
param.AutoUseIsvDedicatedMessageGroup = true;
var response = request.Execute<SmsSignApplyResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:7 | 签名已经存在 | 签名已经存在 |
| 40004 | 非法的参数 | isv.parameter-invalid:5 | 参数不合法 | 参数不合法 |
| 20000 | 系统错误 | isp.service-error:4 | 内部错误 | 内部错误 |
| 20000 | 系统错误 | isp.service-error:500 | 内部错误 | 超时 |
| 50002 | 业务处理失败 | isv.business-failed:628005100 | 响应结果不符合预期 | 请根据错误信息描述检查 |
| 20000 | 系统错误 | isp.service-error:628004002 | 超时 | 服务处理超时，请重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:628005202 | 商家不存在 | 商家不存在 |
| 40002 | 缺少必选参数 | isv.missing-parameter:628002001 | 输入参数不正确，请检查后重试 | 请根据错误信息检查入参是否正确 |
| 20000 | 系统错误 | isp.service-error:628004001 | 服务内部错误，请重试 | 服务内部错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628004702 | HttpPost请求失败 | 服务内部错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628004000 | 628004000:服务器开小差了，请稍后重试 | 628004000:服务器开小差了，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:628004004 | 628004004:get cache err | 628004004:get cache err |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
