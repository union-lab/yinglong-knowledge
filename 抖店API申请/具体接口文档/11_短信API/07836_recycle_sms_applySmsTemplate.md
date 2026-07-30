# /recycle/sms/applySmsTemplate

> 中文说明：申请短信模板  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7836>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /recycle/sms/applySmsTemplate |
| 中文名称 | 申请短信模板 |
| 文档目录 | 短信API |
| Article ID | 7836 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/11/3 11:56:48 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

申请短信模板

## 权限包

- 行业产品 / 行业短信（packageType=1）；适用应用类目：3C数码回收、大家电回收

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | recycle.sms/applySmsTemplate | 调用的API接口名称 | - | - |
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
| 0 | sms_account | sms_account | false | 2 | 123312 | 渠道账号 | - | - |
| 0 | template_type | template_type | false | 2 | CN_NTC | 模版类型 | - | - |
| 0 | template_name | template_name | false | 2 | 模板模板模板 | 模版名称 | - | - |
| 0 | template_content | template_content | false | 2 | 1111 | 模版内容 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | sms_template_id | sms_template_id | - | 2 | ST_XXX | 模板id | - | - |
| 0 | sms_template_apply_id | sms_template_apply_id | - | 2 | 1231 | 模板申请id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/recycle/sms/applySmsTemplate?app_key=your_appkey_here&method=recycle.sms.applySmsTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/recycle/sms/applySmsTemplate?app_key=your_appkey_here&method=recycle.sms.applySmsTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
RecycleSmsApplySmsTemplateRequest request = new RecycleSmsApplySmsTemplateRequest();
RecycleSmsApplySmsTemplateParam param = request.getParam();
param.setSmsAccount("123312");
param.setTemplateType("CN_NTC");
param.setTemplateName("模板模板模板");
param.setTemplateContent("1111");
RecycleSmsApplySmsTemplateResponse response = request.execute(accessToken);

```

### php

```php
$request = new RecycleSmsApplySmsTemplateRequest();
$param = new RecycleSmsApplySmsTemplateParam();
$request->setParam($param);
$param->sms_account = "123312";
$param->template_type = "CN_NTC";
$param->template_name = "模板模板模板";
$param->template_content = "1111";
$response = $request->execute(accessToken);

```

### python

```python
request = RecycleSmsApplySmsTemplateRequest()
param = request.getParams()
param.sms_account = "123312"
param.template_type = "CN_NTC"
param.template_name = "模板模板模板"
param.template_content = "1111"
response = request.execute(accessToken)

```

### go

```go
request := recycle_sms_applySmsTemplate_request.New()
param := request.GetParams()
param.SmsAccount = "123312"
param.TemplateType = "CN_NTC"
param.TemplateName = "模板模板模板"
param.TemplateContent = "1111"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new RecycleSmsApplySmsTemplateRequest();
var param = request.BuildParam();
param.SmsAccount = "123312";
param.TemplateType = "CN_NTC";
param.TemplateName = "模板模板模板";
param.TemplateContent = "1111";
var response = request.Execute<RecycleSmsApplySmsTemplateResponse>(accessToken);

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
