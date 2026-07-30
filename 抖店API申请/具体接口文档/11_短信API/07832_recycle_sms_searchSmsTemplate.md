# /recycle/sms/searchSmsTemplate

> 中文说明：获取短信模板  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7832>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /recycle/sms/searchSmsTemplate |
| 中文名称 | 获取短信模板 |
| 文档目录 | 短信API |
| Article ID | 7832 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/11/3 11:55:41 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

获取短信模板

## 权限包

- 行业产品 / 行业短信（packageType=1）；适用应用类目：3C数码回收、大家电回收

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | recycle.sms/searchSmsTemplate | 调用的API接口名称 | - | - |
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
| 0 | template_content | template_content | false | 2 | sfesf | 模板内容 | - | - |
| 0 | status | status | false | 99 | 0 | 状态 | - | - |
| 0 | page | page | false | 99 | 1 | 页码 | - | - |
| 0 | size | size | false | 99 | 10 | 页大小 | - | - |
| 0 | template_name | template_name | false | 2 | qweqwe | 模板名称 | - | - |
| 0 | sms_account | sms_account | false | 2 | sfwa | 渠道账号 | - | - |
| 0 | template_id | template_id | false | 2 | sfes | 模板id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | template_search_list | template_search_list | - | 3 | - | 11 | - | R1 |
| 1 | template_search_list.sms_account | sms_account | - | 2 | sefasef | 消息组id | - | - |
| 1 | template_search_list.template_content | template_content | - | 2 | sefsefa | 模板内容 | - | - |
| 1 | template_search_list.template_id | template_id | - | 2 | ST_Xxxx | 模板id | - | - |
| 1 | template_search_list.channel_type | channel_type | - | 2 | CN_NTC | 短信类型 | - | - |
| 1 | template_search_list.template_name | template_name | - | 2 | 模板 | 模板名称 | - | - |
| 0 | total | total | - | 99 | 10 | 总数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/recycle/sms/searchSmsTemplate?app_key=your_appkey_here&method=recycle.sms.searchSmsTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/recycle/sms/searchSmsTemplate?app_key=your_appkey_here&method=recycle.sms.searchSmsTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
RecycleSmsSearchSmsTemplateRequest request = new RecycleSmsSearchSmsTemplateRequest();
RecycleSmsSearchSmsTemplateParam param = request.getParam();
param.setTemplateContent("sfesf");
param.setStatus(0L);
param.setPage(1L);
param.setSize(10L);
param.setTemplateName("qweqwe");
param.setSmsAccount("sfwa");
param.setTemplateId("sfes");
RecycleSmsSearchSmsTemplateResponse response = request.execute(accessToken);

```

### php

```php
$request = new RecycleSmsSearchSmsTemplateRequest();
$param = new RecycleSmsSearchSmsTemplateParam();
$request->setParam($param);
$param->template_content = "sfesf";
$param->status = 0;
$param->page = 1;
$param->size = 10;
$param->template_name = "qweqwe";
$param->sms_account = "sfwa";
$param->template_id = "sfes";
$response = $request->execute(accessToken);

```

### python

```python
request = RecycleSmsSearchSmsTemplateRequest()
param = request.getParams()
param.template_content = "sfesf"
param.status = 0
param.page = 1
param.size = 10
param.template_name = "qweqwe"
param.sms_account = "sfwa"
param.template_id = "sfes"
response = request.execute(accessToken)

```

### go

```go
request := recycle_sms_searchSmsTemplate_request.New()
param := request.GetParams()
param.TemplateContent = "sfesf"
param.Status = 0
param.Page = 1
param.Size = 10
param.TemplateName = "qweqwe"
param.SmsAccount = "sfwa"
param.TemplateId = "sfes"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new RecycleSmsSearchSmsTemplateRequest();
var param = request.BuildParam();
param.TemplateContent = "sfesf";
param.Status = 0;
param.Page = 1;
param.Size = 10;
param.TemplateName = "qweqwe";
param.SmsAccount = "sfwa";
param.TemplateId = "sfes";
var response = request.Execute<RecycleSmsSearchSmsTemplateResponse>(accessToken);

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
