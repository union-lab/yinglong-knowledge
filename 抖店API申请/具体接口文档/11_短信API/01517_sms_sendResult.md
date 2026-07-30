# /sms/sendResult

> 中文说明：查询短信发送结果  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/1517>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/sendResult |
| 中文名称 | 查询短信发送结果 |
| 文档目录 | 短信API |
| Article ID | 1517 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2024/12/23 14:56:51 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查询短信发送结果

## 权限包

- 短信 / 短信发送（packageType=1）；适用应用类目：创新应用大赛_微应用、互联网医院、营销管理-互动小程序定制、营销管理-小程序定制、创新应用大赛_软件服务、教育服务、内部测试、商家后台系统、即时零售ERP、虚拟充值、即时零售商家自研、互动营销定制、营销短信-微应用、短信营销、订单管理、电商ERP、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.sendResult | 调用的API接口名称 | - | - |
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
| 0 | from_time | from_time | true | 99 | 1618652575 | 开始时间-时间戳，单位秒 | - | - |
| 0 | to_time | to_time | true | 99 | 1618652575 | 结束时间-时间戳，单位秒 | - | - |
| 0 | sms_account | sms_account | true | 2 | 1234 | 短信发送渠道，主要做资源隔离 | - | - |
| 0 | template_id | template_id | false | 2 | 444 | 模版id | - | - |
| 0 | status | status | false | 99 | 1 | 发送状态： 未回执：1 发送失败：2 发送成功：3 | - | - |
| 0 | size | size | false | 99 | 10 | 查询结果大小，默认是10 | - | - |
| 0 | page | page | false | 99 | 0 | 查询结果页数，从0开始，默认是0 | - | - |
| 0 | sign | sign | false | 2 | 21312 | 签名内容 | - | - |
| 0 | post_tel | post_tel | false | 2 | 15088788987 | 既支持明文，又支持密文 | - | - |
| 0 | message_id | message_id | false | 2 | 7238746 | 消息的唯一标识，可以用于查询短信到达等 | - | - |
| 0 | tpl_type | TplType | false | 99 | 1 | 查询短信类型，默认是查普通文本短信：<br>0是查询所有类型短信，1是查询普通文本短信，2是查询视频短信 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 100 | 数量 | - | R1 |
| 0 | sms_send_result_list | sms_send_result_list | - | 3 | - | 短信结果列表 | - | R1 |
| 1 | sms_send_result_list.send_time | send_time | - | 99 | 1618652575 | 发送时间-时间戳，单位秒 | - | R1 |
| 1 | sms_send_result_list.sms_content | sms_content | - | 2 | 您购买的商品已重新发出，圆通快递快递运单号：1234，关注“XXX”公众号刷新订单获取最新物流信息哦~给您造成不便敬请谅解。 | 短信内容 | - | R1 |
| 1 | sms_send_result_list.status | status | - | 99 | 1 | 未回执：1 发送失败：2 发送成功：3 | - | R1 |
| 1 | sms_send_result_list.count | count | - | 99 | 1 | 计费条数，如果短信过长，会分多次计费 | - | R1 |
| 1 | sms_send_result_list.code | code | - | 99 | 0 | 错误码 | - | R1 |
| 1 | sms_send_result_list.message | message | - | 2 | abc | 错误说明 | - | R1 |
| 1 | sms_send_result_list.message_id | message_id | - | 2 | MessageID1 | 消息ID | - | R1 |
| 1 | sms_send_result_list.tag | tag | - | 2 | 12345 | 透传字段，回执的时候原样返回给调用方。 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/sendResult?app_key=your_appkey_here&method=sms.sendResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/sendResult?app_key=your_appkey_here&method=sms.sendResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsSendResultRequest request = new SmsSendResultRequest();
SmsSendResultParam param = request.getParam();
param.setFromTime(1618652575L);
param.setToTime(1618652575L);
param.setSmsAccount("1234");
param.setTemplateId("444");
param.setStatus(1L);
param.setSize(10L);
param.setPage(0L);
param.setSign("21312");
param.setPostTel("15088788987");
param.setMessageId("7238746");
param.setTplType(1L);
SmsSendResultResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsSendResultRequest();
$param = new SmsSendResultParam();
$request->setParam($param);
$param->from_time = 1618652575;
$param->to_time = 1618652575;
$param->sms_account = "1234";
$param->template_id = "444";
$param->status = 1;
$param->size = 10;
$param->page = 0;
$param->sign = "21312";
$param->post_tel = "15088788987";
$param->message_id = "7238746";
$param->tpl_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = SmsSendResultRequest()
param = request.getParams()
param.from_time = 1618652575
param.to_time = 1618652575
param.sms_account = "1234"
param.template_id = "444"
param.status = 1
param.size = 10
param.page = 0
param.sign = "21312"
param.post_tel = "15088788987"
param.message_id = "7238746"
param.tpl_type = 1
response = request.execute(accessToken)

```

### go

```go
request := sms_sendResult_request.New()
param := request.GetParams()
param.FromTime = 1618652575
param.ToTime = 1618652575
param.SmsAccount = "1234"
param.TemplateId = "444"
param.Status = 1
param.Size = 10
param.Page = 0
param.Sign = "21312"
param.PostTel = "15088788987"
param.MessageId = "7238746"
param.TplType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsSendResultRequest();
var param = request.BuildParam();
param.FromTime = 1618652575;
param.ToTime = 1618652575;
param.SmsAccount = "1234";
param.TemplateId = "444";
param.Status = 1;
param.Size = 10;
param.Page = 0;
param.Sign = "21312";
param.PostTel = "15088788987";
param.MessageId = "7238746";
param.TplType = 1;
var response = request.Execute<SmsSendResultResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:500 | 超时，请重试 | 超时，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628005100 | 响应结果不符合预期 | 请根据错误信息描述检查 |
| 20000 | 系统错误 | isp.service-error:628004205 | 628004205:Redis Get错误 | 系统内部错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628002001 | 628002001:您输入参数不正确，请检查后重试 | 业务错误，请检查 |
| 50002 | 业务处理失败 | isv.business-failed:628004002 | 628004002:请求超时 | 请求超时，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628004004 | 628004004:Access Database error | 628004004:Access Database error |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
