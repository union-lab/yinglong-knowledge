# /sms/template/delete

> 中文说明：删除短信模板  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/1518>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/template/delete |
| 中文名称 | 删除短信模板 |
| 文档目录 | 短信API |
| Article ID | 1518 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2026/4/17 15:29:43 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

删除短信模板

## 权限包

- 短信 / 短信模板（packageType=1）；适用应用类目：创新应用大赛_微应用、营销管理-互动小程序定制、营销管理-小程序定制、创新应用大赛_软件服务、教育服务、商家后台系统、互动营销定制、营销短信-微应用、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.template/delete | 调用的API接口名称 | - | - |
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
| 0 | sms_account | sms_account | true | 2 | 1234 | 短信发送渠道，主要做资源隔离 | - | - |
| 0 | template_id | template_id | true | 2 | 7238746 | 短信模板id | - | - |
| 0 | version | version | false | 2 | v2 | v2是新版本 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | code | code | - | 99 | 0 | 是否成功 0表示成功 | - | R1 |
| 0 | message | message | - | 2 | abc | 说明 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/template/delete?app_key=your_appkey_here&method=sms.template.delete&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/template/delete?app_key=your_appkey_here&method=sms.template.delete&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsTemplateDeleteRequest request = new SmsTemplateDeleteRequest();
SmsTemplateDeleteParam param = request.getParam();
param.setSmsAccount("1234");
param.setTemplateId("7238746");
param.setVersion("v2");
SmsTemplateDeleteResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsTemplateDeleteRequest();
$param = new SmsTemplateDeleteParam();
$request->setParam($param);
$param->sms_account = "1234";
$param->template_id = "7238746";
$param->version = "v2";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsTemplateDeleteRequest()
param = request.getParams()
param.sms_account = "1234"
param.template_id = "7238746"
param.version = "v2"
response = request.execute(accessToken)

```

### go

```go
request := sms_template_delete_request.New()
param := request.GetParams()
param.SmsAccount = "1234"
param.TemplateId = "7238746"
param.Version = "v2"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsTemplateDeleteRequest();
var param = request.BuildParam();
param.SmsAccount = "1234";
param.TemplateId = "7238746";
param.Version = "v2";
var response = request.Execute<SmsTemplateDeleteResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:5 | 参数不合法 | 参数不合法 |
| 40004 | 非法的参数 | isv.parameter-invalid:7 | 参数template_id对应模板不存在 | 参数template_id对应模板不存在 |
| 50002 | 业务处理失败 | isv.business-failed:628005100 | 响应结果不符合预期 | 请根据错误信息描述检查 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
