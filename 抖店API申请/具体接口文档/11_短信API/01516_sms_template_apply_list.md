# /sms/template/apply/list

> 中文说明：查询短信模板申请单  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/1516>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/template/apply/list |
| 中文名称 | 查询短信模板申请单 |
| 文档目录 | 短信API |
| Article ID | 1516 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/12/18 16:29:37 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查询短信模板申请单

## 权限包

- 短信 / 短信模板（packageType=1）；适用应用类目：创新应用大赛_微应用、营销管理-互动小程序定制、营销管理-小程序定制、创新应用大赛_软件服务、教育服务、商家后台系统、互动营销定制、营销短信-微应用、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.template/apply/list | 调用的API接口名称 | - | - |
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
| 0 | template_content | template_content | false | 2 | 您购买的商品已重新发出，${name}快递运单号：${number}，关注“XXX”公众号刷新订单获取最新物流信息哦~给您造成不便敬请谅解。 | 短信模板内容： 英文短信：整条短信（包括签名+模板+变量中的内容）最多支持140个英文字符，超出将按140个字符截取为多条短信进行发送，费用按截取的条数收费； 非英文短信：整条短信（包括签名+模板+变量中的内容）最多支持70字符，超出将按70个字符截取为多条短信进行发送，费用按截取的条数收费； | - | - |
| 0 | sms_template_apply_id | sms_template_apply_id | false | 2 | 23423423 | 短信模板申请单id | - | - |
| 0 | size | size | false | 99 | 10 | 每页数量，默认10 | - | - |
| 0 | page | page | false | 99 | 0 | 页码，默认0 | - | - |
| 0 | status | status | false | 99 | 1 | 审核状态： 1:审核中 2:未通过 3:已开通 4:已关闭 5:免审 | - | - |
| 0 | version | version | false | 2 | v2 | 短信版本，v2表示新版本 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | template_apply_list | template_apply_list | - | 3 | - | 短信模板申请单列表 | - | R1 |
| 1 | template_apply_list.public_fail_reason | public_fail_reason | - | 2 | 失败原因 | 如果公域审核失败，该字段为失败原因，否则为空 | - | - |
| 1 | template_apply_list.public_status | public_status | - | 99 | 3 | 公域审核状态，0、1:审核中，2:审核拒绝，3:审核通过 | - | - |
| 1 | template_apply_list.template_id | template_id | - | 2 | ST_123456 | 模板id | - | - |
| 1 | template_apply_list.sms_account | sms_account | - | 2 | 1234 | 短信发送渠道，主要做资源隔离 | - | R1 |
| 1 | template_apply_list.sms_template_apply_id | sms_template_apply_id | - | 2 | 23423423 | 短信模板申请单id | - | R1 |
| 1 | template_apply_list.template_name | template_name | - | 2 | 618大促 | 短信模版名称 | - | R1 |
| 1 | template_apply_list.template_content | template_content | - | 2 | 您购买的商品已重新发出，${name}快递运单号：${number}，关注“XXX”公众号刷新订单获取最新物流信息哦~给您造成不便敬请谅解。 | 短信模版内容 | - | R1 |
| 1 | template_apply_list.channel_type | channel_type | - | 2 | 模版类型 | CN_NTC 国内通知短信 CN_MKT 国内营销短信（营销短信将自带退订功能） CN_OTP 国内验证码 | - | R1 |
| 1 | template_apply_list.status | status | - | 99 | 1 | 审核状态： 1:审核中 2:未通过 3:已开通 4:已关闭 | - | R1 |
| 1 | template_apply_list.status_remark | status_remark | - | 2 | 签名重复 | 状态说明 | - | R1 |
| 0 | total | total | - | 99 | 100 | 总数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/template/apply/list?app_key=your_appkey_here&method=sms.template.apply.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/template/apply/list?app_key=your_appkey_here&method=sms.template.apply.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsTemplateApplyListRequest request = new SmsTemplateApplyListRequest();
SmsTemplateApplyListParam param = request.getParam();
param.setSmsAccount("1234");
param.setTemplateContent("您购买的商品已重新发出，${name}快递运单号：${number}，关注“XXX”公众号刷新订单获取最新物流信息哦~给您造成不便敬请谅解。");
param.setSmsTemplateApplyId("23423423");
param.setSize(10L);
param.setPage(0L);
param.setStatus(1L);
param.setVersion("v2");
SmsTemplateApplyListResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsTemplateApplyListRequest();
$param = new SmsTemplateApplyListParam();
$request->setParam($param);
$param->sms_account = "1234";
$param->template_content = "您购买的商品已重新发出，${name}快递运单号：${number}，关注“XXX”公众号刷新订单获取最新物流信息哦~给您造成不便敬请谅解。";
$param->sms_template_apply_id = "23423423";
$param->size = 10;
$param->page = 0;
$param->status = 1;
$param->version = "v2";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsTemplateApplyListRequest()
param = request.getParams()
param.sms_account = "1234"
param.template_content = "您购买的商品已重新发出，${name}快递运单号：${number}，关注“XXX”公众号刷新订单获取最新物流信息哦~给您造成不便敬请谅解。"
param.sms_template_apply_id = "23423423"
param.size = 10
param.page = 0
param.status = 1
param.version = "v2"
response = request.execute(accessToken)

```

### go

```go
request := sms_template_apply_list_request.New()
param := request.GetParams()
param.SmsAccount = "1234"
param.TemplateContent = "您购买的商品已重新发出，${name}快递运单号：${number}，关注“XXX”公众号刷新订单获取最新物流信息哦~给您造成不便敬请谅解。"
param.SmsTemplateApplyId = "23423423"
param.Size = 10
param.Page = 0
param.Status = 1
param.Version = "v2"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsTemplateApplyListRequest();
var param = request.BuildParam();
param.SmsAccount = "1234";
param.TemplateContent = "您购买的商品已重新发出，${name}快递运单号：${number}，关注“XXX”公众号刷新订单获取最新物流信息哦~给您造成不便敬请谅解。";
param.SmsTemplateApplyId = "23423423";
param.Size = 10;
param.Page = 0;
param.Status = 1;
param.Version = "v2";
var response = request.Execute<SmsTemplateApplyListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:628005100 | 响应结果不符合预期 | 请根据错误码描述检查请求参数 |
| 20000 | 系统错误 | isp.service-error:628004205 | 628004205:Redis Get错误 | 系统内部错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:628004002 | 628004002:接口超时 | 请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
