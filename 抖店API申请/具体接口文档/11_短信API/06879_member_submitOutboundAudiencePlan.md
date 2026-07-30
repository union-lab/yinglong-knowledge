# /member/submitOutboundAudiencePlan

> 中文说明：提交外呼人群包生成计划  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/6879>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /member/submitOutboundAudiencePlan |
| 中文名称 | 提交外呼人群包生成计划 |
| 文档目录 | 短信API |
| Article ID | 6879 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/12/23 14:38:48 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3 |

## 使用说明

提交外呼人群包生成计划

## 权限包

- 会员外呼 / 会员外呼（火山专用）（packageType=1）
- 会员 / 智能外呼（packageType=1）；适用应用类目：智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | member.submitOutboundAudiencePlan | 调用的API接口名称 | - | - |
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
| 0 | audience_id | audienceId | true | 2 | 11111 | 人群包ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | send_task_id | sendTaskId | - | 2 | 222121782718 | 外呼人群包任务ID | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/member/submitOutboundAudiencePlan?app_key=your_appkey_here&method=member.submitOutboundAudiencePlan&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/member/submitOutboundAudiencePlan?app_key=your_appkey_here&method=member.submitOutboundAudiencePlan&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MemberSubmitOutboundAudiencePlanRequest request = new MemberSubmitOutboundAudiencePlanRequest();
MemberSubmitOutboundAudiencePlanParam param = request.getParam();
param.setAudienceId("11111");
MemberSubmitOutboundAudiencePlanResponse response = request.execute(accessToken);

```

### php

```php
$request = new MemberSubmitOutboundAudiencePlanRequest();
$param = new MemberSubmitOutboundAudiencePlanParam();
$request->setParam($param);
$param->audience_id = "11111";
$response = $request->execute(accessToken);

```

### python

```python
request = MemberSubmitOutboundAudiencePlanRequest()
param = request.getParams()
param.audience_id = "11111"
response = request.execute(accessToken)

```

### go

```go
request := member_submitOutboundAudiencePlan_request.New()
param := request.GetParams()
param.AudienceId = "11111"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MemberSubmitOutboundAudiencePlanRequest();
var param = request.BuildParam();
param.AudienceId = "11111";
var response = request.Execute<MemberSubmitOutboundAudiencePlanResponse>(accessToken);

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
