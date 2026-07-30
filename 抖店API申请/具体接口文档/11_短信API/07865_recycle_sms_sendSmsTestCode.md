# /recycle/sms/sendSmsTestCode

> 中文说明：发送短信验证码  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7865>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /recycle/sms/sendSmsTestCode |
| 中文名称 | 发送短信验证码 |
| 文档目录 | 短信API |
| Article ID | 7865 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/11/13 17:31:15 |
| 授权主体 | [] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

发送短信验证码

## 权限包

- 行业产品 / 行业短信（packageType=1）；适用应用类目：3C数码回收、大家电回收

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | recycle.sms/sendSmsTestCode | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | false | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | sign | sign | true | 2 | 抖音商城 | 签名 | - | - |
| 0 | template_id | template_id | true | 2 | ST_XXXX | 模版id | - | - |
| 0 | template_param | template_param | false | 2 | {} | 模版参数 | - | - |
| 0 | post_tel | post_tel | true | 2 | 12345678901 | 明文手机号 | - | - |
| 0 | sms_account | sms_account | true | 2 | 12es | 消息组id | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/recycle/sms/sendSmsTestCode?app_key=your_appkey_here&method=recycle.sms.sendSmsTestCode&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/recycle/sms/sendSmsTestCode?app_key=your_appkey_here&method=recycle.sms.sendSmsTestCode&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
RecycleSmsSendSmsTestCodeRequest request = new RecycleSmsSendSmsTestCodeRequest();
RecycleSmsSendSmsTestCodeParam param = request.getParam();
param.setSign("抖音商城");
param.setTemplateId("ST_XXXX");
param.setTemplateParam("{}");
param.setPostTel("12345678901");
param.setSmsAccount("12es");
RecycleSmsSendSmsTestCodeResponse response = request.execute(accessToken);

```

### php

```php
$request = new RecycleSmsSendSmsTestCodeRequest();
$param = new RecycleSmsSendSmsTestCodeParam();
$request->setParam($param);
$param->sign = "抖音商城";
$param->template_id = "ST_XXXX";
$param->template_param = "{}";
$param->post_tel = "12345678901";
$param->sms_account = "12es";
$response = $request->execute(accessToken);

```

### python

```python
request = RecycleSmsSendSmsTestCodeRequest()
param = request.getParams()
param.sign = "抖音商城"
param.template_id = "ST_XXXX"
param.template_param = "{}"
param.post_tel = "12345678901"
param.sms_account = "12es"
response = request.execute(accessToken)

```

### go

```go
request := recycle_sms_sendSmsTestCode_request.New()
param := request.GetParams()
param.Sign = "抖音商城"
param.TemplateId = "ST_XXXX"
param.TemplateParam = "{}"
param.PostTel = "12345678901"
param.SmsAccount = "12es"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new RecycleSmsSendSmsTestCodeRequest();
var param = request.BuildParam();
param.Sign = "抖音商城";
param.TemplateId = "ST_XXXX";
param.TemplateParam = "{}";
param.PostTel = "12345678901";
param.SmsAccount = "12es";
var response = request.Execute<RecycleSmsSendSmsTestCodeResponse>(accessToken);

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
