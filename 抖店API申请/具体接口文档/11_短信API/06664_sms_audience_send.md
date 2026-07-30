# /sms/audience/send

> 中文说明：按人群包发送短信  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/6664>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/audience/send |
| 中文名称 | 按人群包发送短信 |
| 文档目录 | 短信API |
| Article ID | 6664 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/5/26 20:56:30 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

按人群包发送短信

## 权限包

- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.audience/send | 调用的API接口名称 | - | - |
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
| 0 | sms_account | smsAccount | true | 2 | 12xxxx | 渠道账号，请使用专属人群包短信发送渠道账号。 | - | - |
| 0 | sign | sign | true | 2 | sssss | 签名,请使用专属人群包短信发送渠道账号下的签名。 | - | - |
| 0 | template_id | templateId | true | 2 | ST_xxxx | 模版id，请使用专属人群包短信发送渠道账号下的模版。 | - | - |
| 0 | template_param | templateParam | true | 2 | {"11":"12","12":"333"} | 模版参数 | - | - |
| 0 | audience_id | audienceId | true | 2 | 123451245 | 人群ID，audienceFrom=2时，传入crowdTaskId相同值即可 | - | - |
| 0 | link_id | linkId | false | 2 | 1212212212 | 需要链接统计效果时必传 | - | - |
| 0 | mini_app_link_id | mini_app_link_id | false | 2 | 1212212212 | 小程序短链批次ID | - | - |
| 0 | audience_from | audienceFrom | false | 99 | 1 | 不同场景的人群包，0-通过抖店接口创建出来的人群包； 1-公域标签创建的人群包； 2-火山的人群包； 3-组合人群包； | - | - |
| 0 | audience_send_type | audienceSendType | false | 99 | 0 | 发送类型 0默认 1时机模型 | - | - |
| 0 | crowd_task_id | crowdTaskId | false | 99 | 123 | 种子人群任务ID，当audience_from = 2时必填 | - | - |
| 0 | max_send_limit | maxSendLimit | false | 99 | 123 | 限制该任务单次最大可成功发送的人数。当audience_from = 2时有效 | - | - |
| 0 | end_time | endTime | false | 99 | 1754567437 | 当audience_send_type=1时有效，秒级时间戳。跟start_time最大间隔5天，建议设置24小时间隔，结束时间限制为某天的最后一秒如23:59:59 | - | - |
| 0 | start_time | startTime | false | 99 | 1754567437 | 当audience_send_type=1时有效，秒级时间戳 | - | - |
| 0 | non_disturb_time_list | nonDisturbTimeList | false | 3 | - | 免打扰时段。平台强制上午9点前，晚上8点后为勿扰时段。可增加其他勿扰时段 | - | - |
| 1 | non_disturb_time_list.start_time | startTime | false | 2 | 08:00 | 勿扰开始时间 格式 hh:mm | - | - |
| 1 | non_disturb_time_list.end_time | endTime | false | 2 | 11:59 | 勿扰结束时间 格式 hh:mm | - | - |
| 0 | produce_id | produceId | false | 2 | 123532 | 人群圈选生产任务id | - | - |
| 0 | part_send_config | partSendConfig | false | 5 | - | 抽样发送 | - | - |
| 1 | part_send_config.target_send_percent | targetSendPercent | false | 99 | 30 | 抽样百分比，取值范围[0, 100) | - | - |
| 1 | part_send_config.target_send_count | targetSendCount | false | 99 | 12421 | 抽样发送数量 | - | - |
| 0 | biz_request_id | biz_request_id | false | 2 | 11111111 | 业务幂等键，按照appId+shopId+biz_request_id 做幂等处理 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | code | code | - | 99 | 12 | 响应码 | - | - |
| 0 | message | message | - | 2 | 1234 | 响应信息 | - | - |
| 0 | send_task_id | sendTaskId | - | 2 | 123 | 发送任务ID | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/audience/send?app_key=your_appkey_here&method=sms.audience.send&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/audience/send?app_key=your_appkey_here&method=sms.audience.send&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsAudienceSendRequest request = new SmsAudienceSendRequest();
SmsAudienceSendParam param = request.getParam();
param.setSmsAccount("12xxxx");
param.setSign("sssss");
param.setTemplateId("ST_xxxx");
param.setTemplateParam("{\"11\":\"12\",\"12\":\"333\"}");
param.setAudienceId("123451245");
param.setLinkId("1212212212");
param.setMiniAppLinkId("1212212212");
param.setAudienceFrom(1);
param.setAudienceSendType(0);
param.setCrowdTaskId(123L);
param.setMaxSendLimit(123L);
param.setEndTime(1754567437L);
param.setStartTime(1754567437L);
param.setProduceId("123532");
param.setBizRequestId("11111111");
SmsAudienceSendResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsAudienceSendRequest();
$param = new SmsAudienceSendParam();
$request->setParam($param);
$param->sms_account = "12xxxx";
$param->sign = "sssss";
$param->template_id = "ST_xxxx";
$param->template_param = "{\"11\":\"12\",\"12\":\"333\"}";
$param->audience_id = "123451245";
$param->link_id = "1212212212";
$param->mini_app_link_id = "1212212212";
$param->audience_from = 1;
$param->audience_send_type = 0;
$param->crowd_task_id = 123;
$param->max_send_limit = 123;
$param->end_time = 1754567437;
$param->start_time = 1754567437;
$param->produce_id = "123532";
$param->biz_request_id = "11111111";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsAudienceSendRequest()
param = request.getParams()
param.sms_account = "12xxxx"
param.sign = "sssss"
param.template_id = "ST_xxxx"
param.template_param = "{\"11\":\"12\",\"12\":\"333\"}"
param.audience_id = "123451245"
param.link_id = "1212212212"
param.mini_app_link_id = "1212212212"
param.audience_from = 1
param.audience_send_type = 0
param.crowd_task_id = 123
param.max_send_limit = 123
param.end_time = 1754567437
param.start_time = 1754567437
param.produce_id = "123532"
param.biz_request_id = "11111111"
response = request.execute(accessToken)

```

### go

```go
request := sms_audience_send_request.New()
param := request.GetParams()
param.SmsAccount = "12xxxx"
param.Sign = "sssss"
param.TemplateId = "ST_xxxx"
param.TemplateParam = "{\"11\":\"12\",\"12\":\"333\"}"
param.AudienceId = "123451245"
param.LinkId = "1212212212"
param.MiniAppLinkId = "1212212212"
param.AudienceFrom = 1
param.AudienceSendType = 0
param.CrowdTaskId = 123
param.MaxSendLimit = 123
param.EndTime = 1754567437
param.StartTime = 1754567437
param.ProduceId = "123532"
param.BizRequestId = "11111111"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsAudienceSendRequest();
var param = request.BuildParam();
param.SmsAccount = "12xxxx";
param.Sign = "sssss";
param.TemplateId = "ST_xxxx";
param.TemplateParam = "{\"11\":\"12\",\"12\":\"333\"}";
param.AudienceId = "123451245";
param.LinkId = "1212212212";
param.MiniAppLinkId = "1212212212";
param.AudienceFrom = 1;
param.AudienceSendType = 0;
param.CrowdTaskId = 123;
param.MaxSendLimit = 123;
param.EndTime = 1754567437;
param.StartTime = 1754567437;
param.ProduceId = "123532";
param.BizRequestId = "11111111";
var response = request.Execute<SmsAudienceSendResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:628002001 | 参数错误 | 请检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:628005600 | 人群元信息不存在 | 请使用存在的人群包 |
| 50002 | 业务处理失败 | isv.business-failed:628003300 | 存在待执行的人群包发送任务，请稍后再试 | 存在待执行的人群包发送任务，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:628005100 | 模版信息错误 | 请检查模版信息 |
| 50002 | 业务处理失败 | isv.business-failed:628003306 | 未签署短信免责协议 | 签署短信免责协议 |
| 50002 | 业务处理失败 | isv.business-failed:628004001 | 获取人群包数量错误，请稍后再试 | 获取人群包数量错误，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:628003308 | 人群包数量不得少于100 | 人群包数量不得少于100 |
| 50002 | 业务处理失败 | isv.business-failed:628003202 | 当前时间段不允许发短信 | 请在短信允许发送时间发送 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
