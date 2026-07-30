# /member/queryOutboundAudiencePlan

> 中文说明：外呼计划生产信息查询  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/6878>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /member/queryOutboundAudiencePlan |
| 中文名称 | 外呼计划生产信息查询 |
| 文档目录 | 短信API |
| Article ID | 6878 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/12/23 14:39:31 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

外呼计划生产信息查询

## 权限包

- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼
- 会员外呼 / 会员外呼（火山专用）（packageType=1）
- 会员 / 智能外呼（packageType=1）；适用应用类目：智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | member.queryOutboundAudiencePlan | 调用的API接口名称 | - | - |
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
| 0 | task_id | taskId | true | 99 | 1821927192 | 外呼人群包生产计划ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | task_status | taskStatus | - | 99 | 4 | 任务状态,1：待生产，2:生产失败，3:生产成功，4:转化成功 | - | - |
| 0 | download_link | downloadLink | - | 2 | https://ddddd | 加密明细下载链接，当任务状态为转化成功时才可以查询到 | - | - |
| 0 | fail_reason | failReason | - | 2 | 不好意思出错啦 | 失败原因 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/member/queryOutboundAudiencePlan?app_key=your_appkey_here&method=member.queryOutboundAudiencePlan&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/member/queryOutboundAudiencePlan?app_key=your_appkey_here&method=member.queryOutboundAudiencePlan&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MemberQueryOutboundAudiencePlanRequest request = new MemberQueryOutboundAudiencePlanRequest();
MemberQueryOutboundAudiencePlanParam param = request.getParam();
param.setTaskId(1821927192L);
MemberQueryOutboundAudiencePlanResponse response = request.execute(accessToken);

```

### php

```php
$request = new MemberQueryOutboundAudiencePlanRequest();
$param = new MemberQueryOutboundAudiencePlanParam();
$request->setParam($param);
$param->task_id = 1821927192;
$response = $request->execute(accessToken);

```

### python

```python
request = MemberQueryOutboundAudiencePlanRequest()
param = request.getParams()
param.task_id = 1821927192
response = request.execute(accessToken)

```

### go

```go
request := member_queryOutboundAudiencePlan_request.New()
param := request.GetParams()
param.TaskId = 1821927192
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MemberQueryOutboundAudiencePlanRequest();
var param = request.BuildParam();
param.TaskId = 1821927192;
var response = request.Execute<MemberQueryOutboundAudiencePlanResponse>(accessToken);

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
