# /sms/getVmsTemplateList

> 中文说明：获取视频短信模板list  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/4017>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/getVmsTemplateList |
| 中文名称 | 获取视频短信模板list |
| 文档目录 | 短信API |
| Article ID | 4017 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/4/20 21:13:41 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

获取视频短信模板list

## 权限包

- 短信 / 视频短信模板（packageType=1）；适用应用类目：创新应用大赛_软件服务、品牌会员通、互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.getVmsTemplateList | 调用的API接口名称 | - | - |
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
| 0 | sms_account | smsAccount | true | 2 | 12345 | 短信account | - | - |
| 0 | name | name | false | 2 | 618大促 | 模板名称 | - | - |
| 0 | signature | signature | false | 2 | 测试旗舰店 | 模板签名 | - | - |
| 0 | template_id | templateId | false | 2 | VT_1234 | 模板id | - | - |
| 0 | status | status | false | 3 | 1 | 状态<br>1：字节审核中<br>2：字节审核拒绝<br>3：字节审核通过<br>4 ：字节审核关闭<br>5：字节审核免审<br>6：运营商审核中<br>7：运营商审核失败<br>8：运营商审核通过 | - | - |
| 0 | page_index | pageIndex | false | 99 | 1 | 分页页数，从1开始 | - | - |
| 0 | page_size | pageSize | false | 99 | 10 | 分页大小 | - | - |
| 0 | version | version | false | 2 | v2 | 版本，v2是新版本 | - | - |
| 0 | template_biz_type | templateBizType | false | 99 | 1 | 模板业务类型 | - | - |
| 0 | template_biz_sub_type | templateBizSubType | false | 99 | 100000 | 模板业务子类型 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | result | result | - | 3 | - | 结果 | - | R1 |
| 1 | result.template_id | templateId | - | 2 | VT_1234 | 模板id | 28 | - |
| 1 | result.template_name | templateName | - | 2 | 618大促 | 模板名称 | 28 | - |
| 1 | result.content | content | - | 2 | xxx | 内容,json序列化后的字符串 | 28 | - |
| 1 | result.status | status | - | 99 | 1 | 状态<br>1：字节审核中<br>2：字节审核拒绝<br>3：字节审核通过<br>4 ：字节审核关闭<br>5：字节审核免审<br>6：运营商审核中<br>7：运营商审核失败<br>8：运营商审核通过 | 28 | - |
| 1 | result.create_time | createTime | - | 99 | 1677600000 | 创建时间 | 28 | - |
| 1 | result.channel_type | channelType | - | 2 | CN_VMS | 发送类型，固定为CN_VMS | 28 | - |
| 1 | result.signature | signature | - | 2 | 测试旗舰店 | 需要用到的短信签名 | 28 | - |
| 1 | result.theme | theme | - | 2 | 618大促主题 | 短信模板主题 | 28 | - |
| 1 | result.desc | desc | - | 2 | test | 短信模板描述 | 28 | - |
| 1 | result.carrier_status | carrierStatus | - | 5 | - | 运营商结果 | - | R1 |
| 2 | result.carrier_status.china_mobile | chinaMobile | - | 5 | - | 中国移动 | - | R1 |
| 3 | result.carrier_status.china_mobile.status | status | - | 99 | 1 | 审核状态； 1: 审核中；2: 审核失败； 3: 审核通过 | 28 | - |
| 3 | result.carrier_status.china_mobile.reason | reason | - | 2 | 涉及敏感词 | 拒审理由 | 28 | - |
| 2 | result.carrier_status.china_telecom | chinaTelecom | - | 5 | - | 中国电信 | - | R1 |
| 3 | result.carrier_status.china_telecom.status | status | - | 99 | 1 | 审核状态； 1: 审核中；2: 审核失败； 3: 审核通过 | 28 | - |
| 3 | result.carrier_status.china_telecom.reason | reason | - | 2 | 涉及敏感词 | 拒审理由 | 28 | - |
| 2 | result.carrier_status.china_unicom | chinaUnicom | - | 5 | - | 中国联通 | - | R1 |
| 3 | result.carrier_status.china_unicom.status | status | - | 99 | 1 | 审核状态； 1: 审核中；2: 审核失败； 3: 审核通过 | 28 | - |
| 3 | result.carrier_status.china_unicom.reason | reason | - | 2 | 涉及敏感词 | 拒审理由 | 28 | - |
| 1 | result.approve_time | approveTime | - | 99 | 1697610232 | 模版通过审核时间 | 28 | - |
| 1 | result.expire_time | expireTime | - | 99 | 1697610232 | 模版过期时间 | 28 | - |
| 1 | result.rest_valid_days | restValidDays | - | 99 | 30 | 模版剩余有效天数 | 28 | - |
| 1 | result.template_biz_sub_type | templateBizSubType | - | 99 | 1 | 模板业务类型 | - | - |
| 1 | result.template_biz_type | templateBizType | - | 99 | 100000 | 模板业务子类型 | - | - |
| 0 | total | total | - | 99 | 10 | 数量 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/getVmsTemplateList?app_key=your_appkey_here&method=sms.getVmsTemplateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/getVmsTemplateList?app_key=your_appkey_here&method=sms.getVmsTemplateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsGetVmsTemplateListRequest request = new SmsGetVmsTemplateListRequest();
SmsGetVmsTemplateListParam param = request.getParam();
param.setSmsAccount("12345");
param.setName("618大促");
param.setSignature("测试旗舰店");
param.setTemplateId("VT_1234");
param.setStatus(1);
param.setPageIndex(1L);
param.setPageSize(10L);
param.setVersion("v2");
param.setTemplateBizType(1L);
param.setTemplateBizSubType(100000L);
SmsGetVmsTemplateListResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsGetVmsTemplateListRequest();
$param = new SmsGetVmsTemplateListParam();
$request->setParam($param);
$param->sms_account = "12345";
$param->name = "618大促";
$param->signature = "测试旗舰店";
$param->template_id = "VT_1234";
$param->status = 1;
$param->page_index = 1;
$param->page_size = 10;
$param->version = "v2";
$param->template_biz_type = 1;
$param->template_biz_sub_type = 100000;
$response = $request->execute(accessToken);

```

### python

```python
request = SmsGetVmsTemplateListRequest()
param = request.getParams()
param.sms_account = "12345"
param.name = "618大促"
param.signature = "测试旗舰店"
param.template_id = "VT_1234"
param.status = 1
param.page_index = 1
param.page_size = 10
param.version = "v2"
param.template_biz_type = 1
param.template_biz_sub_type = 100000
response = request.execute(accessToken)

```

### go

```go
request := sms_getVmsTemplateList_request.New()
param := request.GetParams()
param.SmsAccount = "12345"
param.Name = "618大促"
param.Signature = "测试旗舰店"
param.TemplateId = "VT_1234"
param.Status = 1
param.PageIndex = 1
param.PageSize = 10
param.Version = "v2"
param.TemplateBizType = 1
param.TemplateBizSubType = 100000
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsGetVmsTemplateListRequest();
var param = request.BuildParam();
param.SmsAccount = "12345";
param.Name = "618大促";
param.Signature = "测试旗舰店";
param.TemplateId = "VT_1234";
param.Status = 1;
param.PageIndex = 1;
param.PageSize = 10;
param.Version = "v2";
param.TemplateBizType = 1;
param.TemplateBizSubType = 100000;
var response = request.Execute<SmsGetVmsTemplateListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:628004702 | 628004702:HttpPost请求失败 | 628004702:HttpPost请求失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
