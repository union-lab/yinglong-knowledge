# /sms/queryPublicDomainAudience

> 中文说明：查询公域标签圈选的人群包  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7503>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/queryPublicDomainAudience |
| 中文名称 | 查询公域标签圈选的人群包 |
| 文档目录 | 短信API |
| Article ID | 7503 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/10/15 14:12:16 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

查询公域标签圈选的人群包

## 权限包

- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.queryPublicDomainAudience | 调用的API接口名称 | - | - |
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
| 0 | audience_name | audienceName | false | 2 | 人群包名称 | 人群包名称 | - | - |
| 0 | audience_id | audienceId | false | 2 | 12323 | 人群包ID | - | - |
| 0 | page | page | false | 99 | 1 | 页码，从1开始 | - | - |
| 0 | page_size | pageSize | false | 99 | 20 | 每页数量，需要小于100 | - | - |
| 0 | token | token | true | 2 | wefsdfsa | 组件token获取，对接API文档：https://op.jinritemai.com/docs/api-docs/162/3586 | - | - |
| 0 | audience_type | audienceBizType | false | 99 | 2 | 0-公域人群 2-组合人群 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 10 | 总数 | - | - |
| 0 | results | results | - | 3 | - | 结果列表 | - | R1 |
| 1 | results.audience_id | audienceId | - | 2 | 12323 | 人群包ID | - | - |
| 1 | results.audience_name | audienceName | - | 2 | 人群包名称 | 人群包名称 | - | - |
| 1 | results.create_time | createTime | - | 99 | 1749453592 | 创建时间 | - | - |
| 1 | results.update_time | updateTime | - | 99 | 1749453592 | 更新时间 | - | - |
| 1 | results.audience_type | audienceBizType | - | 99 | 0 | 0-公域人群包 2-组合人群包 | - | - |
| 1 | results.node_list | nodeList | - | 3 | - | 节点集 | - | R1 |
| 2 | results.node_list.node_type | nodeType | - | 99 | 1 | 1值 2运算符 | - | - |
| 2 | results.node_list.condition | condition | - | 2 | AND | AND交集 OR并集 EXCEPT差集 LEFTPARENS左括号 RIGHTPARENS右括号 | - | - |
| 2 | results.node_list.produce_id | produceId | - | 2 | 12 | 生产包id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/queryPublicDomainAudience?app_key=your_appkey_here&method=sms.queryPublicDomainAudience&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/queryPublicDomainAudience?app_key=your_appkey_here&method=sms.queryPublicDomainAudience&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsQueryPublicDomainAudienceRequest request = new SmsQueryPublicDomainAudienceRequest();
SmsQueryPublicDomainAudienceParam param = request.getParam();
param.setAudienceName("人群包名称");
param.setAudienceId("12323");
param.setPage(1L);
param.setPageSize(20L);
param.setToken("wefsdfsa");
param.setAudienceType(2);
SmsQueryPublicDomainAudienceResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsQueryPublicDomainAudienceRequest();
$param = new SmsQueryPublicDomainAudienceParam();
$request->setParam($param);
$param->audience_name = "人群包名称";
$param->audience_id = "12323";
$param->page = 1;
$param->page_size = 20;
$param->token = "wefsdfsa";
$param->audience_type = 2;
$response = $request->execute(accessToken);

```

### python

```python
request = SmsQueryPublicDomainAudienceRequest()
param = request.getParams()
param.audience_name = "人群包名称"
param.audience_id = "12323"
param.page = 1
param.page_size = 20
param.token = "wefsdfsa"
param.audience_type = 2
response = request.execute(accessToken)

```

### go

```go
request := sms_queryPublicDomainAudience_request.New()
param := request.GetParams()
param.AudienceName = "人群包名称"
param.AudienceId = "12323"
param.Page = 1
param.PageSize = 20
param.Token = "wefsdfsa"
param.AudienceType = 2
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsQueryPublicDomainAudienceRequest();
var param = request.BuildParam();
param.AudienceName = "人群包名称";
param.AudienceId = "12323";
param.Page = 1;
param.PageSize = 20;
param.Token = "wefsdfsa";
param.AudienceType = 2;
var response = request.Execute<SmsQueryPublicDomainAudienceResponse>(accessToken);

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
