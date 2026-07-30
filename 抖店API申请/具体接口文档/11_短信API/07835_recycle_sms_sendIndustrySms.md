# /recycle/sms/sendIndustrySms

> 中文说明：发送短信  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7835>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /recycle/sms/sendIndustrySms |
| 中文名称 | 发送短信 |
| 文档目录 | 短信API |
| Article ID | 7835 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/11/3 11:56:30 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

发送短信

## 权限包

- 行业产品 / 行业短信（packageType=1）；适用应用类目：3C数码回收、大家电回收

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | recycle.sms/sendIndustrySms | 调用的API接口名称 | - | - |
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
| 0 | sms_account | smsAccount | false | 2 | 123s212 | 渠道账号 | - | - |
| 0 | template_id | templateId | false | 2 | ST_XXX | 模版id | - | - |
| 0 | sms_test_verification | smsTestVerification | false | 5 | - | 测试发送验证码 | - | - |
| 1 | sms_test_verification.post_tel | post_tel | false | 2 | 12323412312 | 明文手机号 | - | - |
| 1 | sms_test_verification.code | code | false | 2 | 912044 | 验证码 | - | - |
| 0 | order_info | orderInfo | false | 5 | - | 服务店铺单id | - | - |
| 1 | order_info.service_order_no | serviceOrderNo | false | 2 | 123123 | 服务单号 | - | - |
| 1 | order_info.lp_code | lpCode | false | 2 | sfasd | lp code | - | - |
| 0 | sign | sign | false | 2 | 测试 | 签名 | - | - |
| 0 | template_param | templateParam | false | 2 | "{}" | 模版参数, map[string]string类型json序列化之后的字符串 | - | - |
| 0 | tag | tag | false | 2 | {} | 透传字段，调用call_back的时候原样返回 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/recycle/sms/sendIndustrySms?app_key=your_appkey_here&method=recycle.sms.sendIndustrySms&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/recycle/sms/sendIndustrySms?app_key=your_appkey_here&method=recycle.sms.sendIndustrySms&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
RecycleSmsSendIndustrySmsRequest request = new RecycleSmsSendIndustrySmsRequest();
RecycleSmsSendIndustrySmsParam param = request.getParam();
param.setSmsAccount("123s212");
param.setTemplateId("ST_XXX");
param.setSign("测试");
param.setTemplateParam("\"{}\"");
param.setTag("{}");
RecycleSmsSendIndustrySmsResponse response = request.execute(accessToken);

```

### php

```php
$request = new RecycleSmsSendIndustrySmsRequest();
$param = new RecycleSmsSendIndustrySmsParam();
$request->setParam($param);
$param->sms_account = "123s212";
$param->template_id = "ST_XXX";
$param->sign = "测试";
$param->template_param = "\"{}\"";
$param->tag = "{}";
$response = $request->execute(accessToken);

```

### python

```python
request = RecycleSmsSendIndustrySmsRequest()
param = request.getParams()
param.sms_account = "123s212"
param.template_id = "ST_XXX"
param.sign = "测试"
param.template_param = "\"{}\""
param.tag = "{}"
response = request.execute(accessToken)

```

### go

```go
request := recycle_sms_sendIndustrySms_request.New()
param := request.GetParams()
param.SmsAccount = "123s212"
param.TemplateId = "ST_XXX"
param.Sign = "测试"
param.TemplateParam = "\"{}\""
param.Tag = "{}"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new RecycleSmsSendIndustrySmsRequest();
var param = request.BuildParam();
param.SmsAccount = "123s212";
param.TemplateId = "ST_XXX";
param.Sign = "测试";
param.TemplateParam = "\"{}\"";
param.Tag = "{}";
var response = request.Execute<RecycleSmsSendIndustrySmsResponse>(accessToken);

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
