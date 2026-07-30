# /sms/send

> 中文说明：短信发送  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/1522>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/send |
| 中文名称 | 短信发送 |
| 文档目录 | 短信API |
| Article ID | 1522 |
| 文档版本 | V5.01 |
| 官方更新时间 | 2026/2/5 10:47:56 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 400 |

## 使用说明

短信发送（注：游戏营销类短信目前暂不不支持发送）

## 权限包

- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP
- 短信 / 短信发送（packageType=1）；适用应用类目：创新应用大赛_微应用、互联网医院、营销管理-互动小程序定制、营销管理-小程序定制、创新应用大赛_软件服务、教育服务、内部测试、商家后台系统、即时零售ERP、虚拟充值、即时零售商家自研、互动营销定制、营销短信-微应用、短信营销、订单管理、电商ERP、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.send | 调用的API接口名称 | - | - |
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
| 0 | sign | sign | true | 2 | 火山测试 | 签名 | - | - |
| 0 | template_id | template_id | true | 2 | ST_60505c68 | 短信模版id | - | - |
| 0 | template_param | template_param | true | 2 | {"code":"1234"} | 短信模板占位符要替换的值 | - | - |
| 0 | tag | tag | false | 2 | 回执 | 透传字段，回执的时候原样返回给调用方，最大长度512字符 | - | - |
| 0 | post_tel | post_tel | false | 2 | 13141313131 | 不支持手机号明文，仅支持手机号密文。同时传outbound_id和post_tel，以post_tel为准，不能同时为空 | - | - |
| 0 | user_ext_code | user_ext_code | false | 2 | abc | 用户自定义扩展码，仅当允许自定义扩展码的时候生效 | - | - |
| 0 | outbound_id | outboundId | false | 2 | 17037442535v6Nz7_3u0 | 外呼id，由/member/getOutboundId接口获得，/member/getOutboundId当前还未开放，outbound_id暂不支持使用 | - | - |
| 0 | link_id | link_id | false | 2 | 12332222 | 短链ID，需要链接统计效果必传，并且tag需要以map[string]interface{}的json形式传入，并且带上"link_id":"" | - | - |
| 0 | mini_app_link_id | mini_app_link_id | false | 2 | 272626262 | 小程序短链批次ID，需要链接统计效果必传，并且tag需要以map[string]interface{}的json形式传入，并且带上"mini_app_link_id":"" | - | - |
| 0 | douyin_open_id | douyin_user_id | false | 0 | 8787878787878 | 抖音openID | - | - |
| 0 | sms_test_verification | sms_test_verification | false | 5 | - | 测试发送验证码 | - | - |
| 1 | sms_test_verification.post_tel | post_tel | false | 2 | 12345678912 | 明文手机号 | - | - |
| 1 | sms_test_verification.code | code | false | 2 | 123456 | 验证码 | - | - |
| 0 | order_id | order_id | false | 2 | 123456 | 订单id（店铺单） | - | - |
| 0 | after_sale_id | after_sale_id | false | 2 | 123456 | 售后单id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | code | code | - | 99 | 0 | 错误码，0表示成功 | 29 | R1 |
| 0 | message | message | - | 2 | abc | 说明 | 29 | R1 |
| 0 | message_id | message_id | - | 2 | 435435435435 | 消息的唯一标识，可以用于查询短信到达等 | 73 | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/send?app_key=your_appkey_here&method=sms.send&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/send?app_key=your_appkey_here&method=sms.send&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsSendRequest request = new SmsSendRequest();
SmsSendParam param = request.getParam();
param.setSmsAccount("1234");
param.setSign("火山测试");
param.setTemplateId("ST_60505c68");
param.setTemplateParam("{\"code\":\"1234\"}");
param.setTag("回执");
param.setPostTel("13141313131");
param.setUserExtCode("abc");
param.setOutboundId("17037442535v6Nz7_3u0");
param.setLinkId("12332222");
param.setMiniAppLinkId("272626262");
param.setDouyinOpenId("8787878787878");
param.setOrderId("123456");
param.setAfterSaleId("123456");
SmsSendResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsSendRequest();
$param = new SmsSendParam();
$request->setParam($param);
$param->sms_account = "1234";
$param->sign = "火山测试";
$param->template_id = "ST_60505c68";
$param->template_param = "{\"code\":\"1234\"}";
$param->tag = "回执";
$param->post_tel = "13141313131";
$param->user_ext_code = "abc";
$param->outbound_id = "17037442535v6Nz7_3u0";
$param->link_id = "12332222";
$param->mini_app_link_id = "272626262";
$param->douyin_open_id = "8787878787878";
$param->order_id = "123456";
$param->after_sale_id = "123456";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsSendRequest()
param = request.getParams()
param.sms_account = "1234"
param.sign = "火山测试"
param.template_id = "ST_60505c68"
param.template_param = "{\"code\":\"1234\"}"
param.tag = "回执"
param.post_tel = "13141313131"
param.user_ext_code = "abc"
param.outbound_id = "17037442535v6Nz7_3u0"
param.link_id = "12332222"
param.mini_app_link_id = "272626262"
param.douyin_open_id = "8787878787878"
param.order_id = "123456"
param.after_sale_id = "123456"
response = request.execute(accessToken)

```

### go

```go
request := sms_send_request.New()
param := request.GetParams()
param.SmsAccount = "1234"
param.Sign = "火山测试"
param.TemplateId = "ST_60505c68"
param.TemplateParam = "{\"code\":\"1234\"}"
param.Tag = "回执"
param.PostTel = "13141313131"
param.UserExtCode = "abc"
param.OutboundId = "17037442535v6Nz7_3u0"
param.LinkId = "12332222"
param.MiniAppLinkId = "272626262"
param.DouyinOpenId = "8787878787878"
param.OrderId = "123456"
param.AfterSaleId = "123456"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsSendRequest();
var param = request.BuildParam();
param.SmsAccount = "1234";
param.Sign = "火山测试";
param.TemplateId = "ST_60505c68";
param.TemplateParam = "{\"code\":\"1234\"}";
param.Tag = "回执";
param.PostTel = "13141313131";
param.UserExtCode = "abc";
param.OutboundId = "17037442535v6Nz7_3u0";
param.LinkId = "12332222";
param.MiniAppLinkId = "272626262";
param.DouyinOpenId = "8787878787878";
param.OrderId = "123456";
param.AfterSaleId = "123456";
var response = request.Execute<SmsSendResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:7 | 服务内部错误，请重试 | 服务内部错误，请重试 |
| 20000 | 系统错误 | isp.service-error:4 | 服务内部错误，请重试 | 服务内部错误，请重试 |
| 20000 | 系统错误 | isp.service-error:500 | 超时，请重试 | 超时，请重试 |
| 20000 | 系统错误 | isp.service-error:628004205 | 服务内部错误 | 服务内部错误，请重试 |
| 20000 | 系统错误 | isp.service-error:628004002 | 超时 | 服务内部错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628005100 | 响应结果不符合预期 | 请根据错误信息描述检查 |
| 20000 | 系统错误 | isp.service-error:628004001 | 服务内部错误 | 服务内部错误，请重试 |
| 20000 | 系统错误 | isp.service-error:628004702 | 服务内部错误 | 服务内部错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628002001 | 密文解密错误 | 请检查密文信息 |
| 50002 | 业务处理失败 | isv.business-failed:628003201 | 外呼id已过期 | 外呼id已过期，请重新获取 |
| 50002 | 业务处理失败 | isv.business-failed:628003202 | 短信发送命中频控 | 短信发送命中频控，具体请参考短信频控规则 |
| 50002 | 业务处理失败 | isv.business-failed:628004004 | 628004004:Access Database error | 628004004:Access Database error |
| 50002 | 业务处理失败 | isv.business-failed:628003306 | 628003306:未签署短信免责协议 | 628003306:未签署短信免责协议 |
| 50002 | 业务处理失败 | isv.business-failed:628003500 | 不允许使用明文手机号发送短信 | 不允许使用明文手机号发送短信 |
| 50002 | 业务处理失败 | isv.business-failed:628004000 | 628004000:参数异常%!(EXTRA string=目标用户不是店铺会员，也不是365天已购用户) | 目标用户不是店铺会员，也不是365天已购用户 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
