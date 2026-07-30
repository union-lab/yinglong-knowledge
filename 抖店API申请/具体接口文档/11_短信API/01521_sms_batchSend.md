# /sms/batchSend

> 中文说明：批量短信发送  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/1521>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/batchSend |
| 中文名称 | 批量短信发送 |
| 文档目录 | 短信API |
| Article ID | 1521 |
| 文档版本 | V5.01 |
| 官方更新时间 | 2026/2/5 10:48:59 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

批量短信发送（注：游戏营销类短信目前暂不支持发送）
1、一次调用最多支持20个手机号码

## 权限包

- 短信 / 短信发送（packageType=1）；适用应用类目：创新应用大赛_微应用、互联网医院、营销管理-互动小程序定制、营销管理-小程序定制、创新应用大赛_软件服务、教育服务、内部测试、商家后台系统、即时零售ERP、虚拟充值、即时零售商家自研、互动营销定制、营销短信-微应用、短信营销、订单管理、电商ERP、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.batchSend | 调用的API接口名称 | - | - |
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
| 0 | sign | sign | true | 2 | abc | 短信签名 | - | - |
| 0 | sms_message_list | sms_message_list | true | 3 | - | 短信列表 | - | - |
| 1 | sms_message_list.order_id | order_id | false | 2 | 13837776263 | 订单id | - | - |
| 1 | sms_message_list.douyin_open_id | douyin_user_id | false | 0 | 1282618212 | 抖音小程序openID | - | - |
| 1 | sms_message_list.post_tel | post_tel | false | 2 | 13837776263 | 不支持手机号明文，仅支持手机号密文。同时传outbound_id和post_tel，以post_tel为准，不能同时为空 | - | - |
| 1 | sms_message_list.outbound_id | outboundId | false | 2 | 17037442535v6Nz7_3u0 | 外呼id，由/member/getOutboundId接口获取。/member/getOutboundId当前还未开放，outbound_id暂不支持使用 | - | - |
| 1 | sms_message_list.template_param | template_param | true | 2 | {\"code\":\"1234\"} | 参数 | - | - |
| 1 | sms_message_list.after_sale_id | after_sale_id | false | 2 | 13837776263 | 售后单id | - | - |
| 0 | template_id | template_id | true | 2 | 60505C68 | 短信模板id | - | - |
| 0 | tag | tag | false | 2 | 123456 | 透传字段，回执的时候原样返回给调用方，最大长度512字符 | - | - |
| 0 | user_ext_code | user_ext_code | false | 2 | abc | 用户自定义扩展码，仅当允许自定义扩展码的时候生效 | - | - |
| 0 | link_id | link_id | false | 2 | 121292221 | 需要链接统计效果时必传，且    2. tag需要以map[string]interface{}的json形式传入，并且带上"link_id":"" | - | - |
| 0 | mini_app_link_id | mini_app_link_id | false | 2 | 21628162812 | 需要链接统计效果时必传，且    2. tag需要以map[string]interface{}的json形式传入，并且带上"mini_app_link_id":"" | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | send_result_list | send_result_list | - | 3 | - | 发送结果列表 | - | R1 |
| 1 | send_result_list.code | code | - | 99 | 0 | 错误码，0表示成功 | - | R1 |
| 1 | send_result_list.message | message | - | 2 | abc | 说明 | - | R1 |
| 1 | send_result_list.message_id | message_id | - | 2 | 435435435435 | 消息的唯一标识，可以用于查询短信到达等 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/batchSend?app_key=your_appkey_here&method=sms.batchSend&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/batchSend?app_key=your_appkey_here&method=sms.batchSend&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsBatchSendRequest request = new SmsBatchSendRequest();
SmsBatchSendParam param = request.getParam();
param.setSmsAccount("1234");
param.setSign("abc");
param.setTemplateId("60505C68");
param.setTag("123456");
param.setUserExtCode("abc");
param.setLinkId("121292221");
param.setMiniAppLinkId("21628162812");
SmsBatchSendResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsBatchSendRequest();
$param = new SmsBatchSendParam();
$request->setParam($param);
$param->sms_account = "1234";
$param->sign = "abc";
$param->template_id = "60505C68";
$param->tag = "123456";
$param->user_ext_code = "abc";
$param->link_id = "121292221";
$param->mini_app_link_id = "21628162812";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsBatchSendRequest()
param = request.getParams()
param.sms_account = "1234"
param.sign = "abc"
param.template_id = "60505C68"
param.tag = "123456"
param.user_ext_code = "abc"
param.link_id = "121292221"
param.mini_app_link_id = "21628162812"
response = request.execute(accessToken)

```

### go

```go
request := sms_batchSend_request.New()
param := request.GetParams()
param.SmsAccount = "1234"
param.Sign = "abc"
param.TemplateId = "60505C68"
param.Tag = "123456"
param.UserExtCode = "abc"
param.LinkId = "121292221"
param.MiniAppLinkId = "21628162812"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsBatchSendRequest();
var param = request.BuildParam();
param.SmsAccount = "1234";
param.Sign = "abc";
param.TemplateId = "60505C68";
param.Tag = "123456";
param.UserExtCode = "abc";
param.LinkId = "121292221";
param.MiniAppLinkId = "21628162812";
var response = request.Execute<SmsBatchSendResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:5 | 参数不合法 | 根据文档检查参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:7 | 参数Sign对应签名不存在 | 参数Sign对应签名不存在 |
| 20000 | 系统错误 | isp.service-error:4 | 服务内部错误，请重试 | 服务内部错误，请重试 |
| 20000 | 系统错误 | isp.service-error:500 | 超时，请重试 | 超时，请重试 |
| 20000 | 系统错误 | isp.service-error:628004002 | 超时 | 服务内部错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628005100 | 响应结果不符合预期 | 请根据错误信息描述检查 |
| 20000 | 系统错误 | isp.service-error:628004001 | 服务内部错误 | 服务内部错误，请重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:628002001 | 输入参数不正确 | 请根据错误信息检查入参是否正确 |
| 20000 | 系统错误 | isp.service-error:628004702 | 服务内部错误，请重试 | 服务内部错误，请重试 |
| 20000 | 系统错误 | isp.service-error:628004205 | 服务内部错误，请重试 | 服务内部错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628003201 | 外呼id已过期 | 外呼id已过期，请重新获取 |
| 50002 | 业务处理失败 | isv.business-failed:628003202 | 短信发送命中频控 | 短信发送命中频控，具体请参考短信频控规则 |
| 50002 | 业务处理失败 | isv.business-failed:628004004 | 628004004:Access Database error | 628004004:Access Database error |
| 50002 | 业务处理失败 | isv.business-failed:628003500 | 禁止使用明文手机号发送短信 | 禁止使用明文手机号发送短信 |
| 50002 | 业务处理失败 | isv.business-failed:628004000 | 628004000:参数异常%!(EXTRA string=店铺未开通短信服务) | 店铺未开通短信服务 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
