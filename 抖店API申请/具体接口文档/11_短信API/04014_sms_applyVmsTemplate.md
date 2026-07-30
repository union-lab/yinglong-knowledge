# /sms/applyVmsTemplate

> 中文说明：申请创建图文短信模板  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/4014>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/applyVmsTemplate |
| 中文名称 | 申请创建图文短信模板 |
| 文档目录 | 短信API |
| Article ID | 4014 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/5/14 19:43:51 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

短信服务，开发者申请创建图文短信模板

## 权限包

- 短信 / 视频短信模板（packageType=1）；适用应用类目：创新应用大赛_软件服务、品牌会员通、互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.applyVmsTemplate | 调用的API接口名称 | - | - |
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
| 0 | sms_account | smsAccount | true | 2 | 123456 | 短信account | - | - |
| 0 | template_name | templateName | true | 2 | 618大促 | 模板名称 | - | - |
| 0 | template_theme | templateTheme | true | 2 | 营销视频短信 | 模板主题 | - | - |
| 0 | contents | contents | true | 3 | - | 短信模板内容 | - | - |
| 1 | contents.source_type | sourceType | true | 2 | text/string | 文本：text/string<br>jpg图片：image/jpg<br>png图片：image/png <br>gif图片：image/gif | - | - |
| 1 | contents.content | content | false | 2 | 内容 | 文本类型：传string utf-8，其他类型传image_url字段。<br>文本内容结尾需要带上固定文案：TD退订、T退订或者N退订。 | - | - |
| 1 | contents.image_url | imageUrl | false | 2 | image/gif | 当sourceType为image/jpg <br> image/png image/gif时必填。总大小不超过1.9M。 | - | - |
| 0 | signature | signature | true | 2 | 测试旗舰店 | 短信签名 | - | - |
| 0 | extra | extra | false | 2 | 这是描述 | 模板描述 | - | - |
| 0 | template_biz_sub_type | templateBizSubType | false | 99 | 100000 | 模板业务子类型 | - | - |
| 0 | template_biz_type | templateBizType | false | 99 | 1 | 模板业务类型 | - | - |
| 0 | version | version | false | 2 | v2 | 版本 | - | - |
| 0 | is_public | is_public | false | 4 | true | 是否公域短信 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | template_id | templateId | - | 2 | VT_1234 | 模板id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/applyVmsTemplate?app_key=your_appkey_here&method=sms.applyVmsTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/applyVmsTemplate?app_key=your_appkey_here&method=sms.applyVmsTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsApplyVmsTemplateRequest request = new SmsApplyVmsTemplateRequest();
SmsApplyVmsTemplateParam param = request.getParam();
param.setSmsAccount("123456");
param.setTemplateName("618大促");
param.setTemplateTheme("营销视频短信");
param.setSignature("测试旗舰店");
param.setExtra("这是描述");
param.setTemplateBizSubType(100000L);
param.setTemplateBizType(1L);
param.setVersion("v2");
param.setIsPublic(true);
SmsApplyVmsTemplateResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsApplyVmsTemplateRequest();
$param = new SmsApplyVmsTemplateParam();
$request->setParam($param);
$param->sms_account = "123456";
$param->template_name = "618大促";
$param->template_theme = "营销视频短信";
$param->signature = "测试旗舰店";
$param->extra = "这是描述";
$param->template_biz_sub_type = 100000;
$param->template_biz_type = 1;
$param->version = "v2";
$param->is_public = true;
$response = $request->execute(accessToken);

```

### python

```python
request = SmsApplyVmsTemplateRequest()
param = request.getParams()
param.sms_account = "123456"
param.template_name = "618大促"
param.template_theme = "营销视频短信"
param.signature = "测试旗舰店"
param.extra = "这是描述"
param.template_biz_sub_type = 100000
param.template_biz_type = 1
param.version = "v2"
param.is_public = true
response = request.execute(accessToken)

```

### go

```go
request := sms_applyVmsTemplate_request.New()
param := request.GetParams()
param.SmsAccount = "123456"
param.TemplateName = "618大促"
param.TemplateTheme = "营销视频短信"
param.Signature = "测试旗舰店"
param.Extra = "这是描述"
param.TemplateBizSubType = 100000
param.TemplateBizType = 1
param.Version = "v2"
param.IsPublic = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsApplyVmsTemplateRequest();
var param = request.BuildParam();
param.SmsAccount = "123456";
param.TemplateName = "618大促";
param.TemplateTheme = "营销视频短信";
param.Signature = "测试旗舰店";
param.Extra = "这是描述";
param.TemplateBizSubType = 100000;
param.TemplateBizType = 1;
param.Version = "v2";
param.IsPublic = true;
var response = request.Execute<SmsApplyVmsTemplateResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:628005100 | 业务处理失败 | 业务处理失败，请检查请求参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:628002001 | 请求入参非法 | 请检查请求入参 |
| 50002 | 业务处理失败 | isv.business-failed:628004001 | 628004001:RPC通用错误 | 检查参数并稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:628003401 | 暂不支持的内容类型 | 请检查sourceType入参是否满足平台要求 |
| 50002 | 业务处理失败 | isv.business-failed:628003400 | 图文内容不合法 | 图文内容不合法 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
