# /sms/public/template

> 中文说明：公共模版查询接口  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/1526>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/public/template |
| 中文名称 | 公共模版查询接口 |
| 文档目录 | 短信API |
| Article ID | 1526 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2024/12/23 11:35:54 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

公共模版查询接口

## 权限包

- 短信 / 短信模板（packageType=1）；适用应用类目：创新应用大赛_微应用、营销管理-互动小程序定制、营销管理-小程序定制、创新应用大赛_软件服务、教育服务、商家后台系统、互动营销定制、营销短信-微应用、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.public/template | 调用的API接口名称 | - | - |
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
| 0 | size | size | false | 99 | 10 | 每页数据大小 | - | - |
| 0 | page | page | false | 99 | 0 | 第几页，从0开始 | - | - |
| 0 | template_id | template_id | false | 2 | ST_90251 | 模版id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 100 | 数据总量 | - | R1 |
| 0 | public_template_list | public_template_list | - | 3 | - | 列表页数据 | - | R1 |
| 1 | public_template_list.template_id | template_id | - | 2 | ST_0000 | 模版id | - | R1 |
| 1 | public_template_list.template_name | template_name | - | 2 | 验证码 | 模版名称 | - | R1 |
| 1 | public_template_list.template_content | template_content | - | 2 | 你的验证码是${code},3分钟内有效 | 模版内容 | - | R1 |
| 1 | public_template_list.channel_type | channel_type | - | 2 | CN_OTP | 模版类型 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/public/template?app_key=your_appkey_here&method=sms.public.template&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/public/template?app_key=your_appkey_here&method=sms.public.template&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsPublicTemplateRequest request = new SmsPublicTemplateRequest();
SmsPublicTemplateParam param = request.getParam();
param.setSize(10L);
param.setPage(0L);
param.setTemplateId("ST_90251");
SmsPublicTemplateResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsPublicTemplateRequest();
$param = new SmsPublicTemplateParam();
$request->setParam($param);
$param->size = 10;
$param->page = 0;
$param->template_id = "ST_90251";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsPublicTemplateRequest()
param = request.getParams()
param.size = 10
param.page = 0
param.template_id = "ST_90251"
response = request.execute(accessToken)

```

### go

```go
request := sms_public_template_request.New()
param := request.GetParams()
param.Size = 10
param.Page = 0
param.TemplateId = "ST_90251"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsPublicTemplateRequest();
var param = request.BuildParam();
param.Size = 10;
param.Page = 0;
param.TemplateId = "ST_90251";
var response = request.Execute<SmsPublicTemplateResponse>(accessToken);

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
