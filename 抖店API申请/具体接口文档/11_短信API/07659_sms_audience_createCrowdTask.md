# /sms/audience/createCrowdTask

> 中文说明：创建种子人群任务  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7659>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/audience/createCrowdTask |
| 中文名称 | 创建种子人群任务 |
| 文档目录 | 短信API |
| Article ID | 7659 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/3/11 15:27:56 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

创建种子人群任务

## 权限包

- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.audience/createCrowdTask | 调用的API接口名称 | - | - |
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
| 0 | crowd_task | crowdTask | false | 5 | - | 种子人群任务 | - | - |
| 1 | crowd_task.id_type | idType | false | 99 | 2 | ID类型：2-MD5 32位小写加密手机号 | - | - |
| 1 | crowd_task.lookalike_count | lookalikeCount | true | 99 | 10000 | 预期放大人群数量 | - | - |
| 1 | crowd_task.cate_ids | cateIds | true | 3 | - | 类目id | - | - |
| 2 | crowd_task.cate_ids.first_cid | firstCid | false | 99 | 200001 | 一级类目 | - | - |
| 2 | crowd_task.cate_ids.second_cid | secondCid | false | 99 | 210001 | 二级类目 | - | - |
| 1 | crowd_task.crowd_name | crowdName | true | 2 | 订购高转人群 | 人群包任务名称, 对应唯一一个人群包，不允许重复 | - | - |
| 1 | crowd_task.seed_source | seedSource | false | 2 | PDD | 种子来源，见listSeedMeta接口SeedSourceList的取值，取英文赋值 | - | - |
| 1 | crowd_task.tos_url | tosUrl | false | 2 | http://xxx.com | 人群包TOS地址，格式参考接入文档 | - | - |
| 1 | crowd_task.seed_rule_type | seedRuleType | false | 2 | PURCHASE_USERS | 人群规则类型，见listSeedMeta接口SeedRuleTypes的取值，取英文赋值 | - | - |
| 1 | crowd_task.liveroom_data | LiveroomData | false | 8 | <"live_room_id":"123"> | 透传的直播间参数 | - | - |
| 1 | crowd_task.target_type | targetType | false | 2 | NEW_BUY | 业务目标，见listSeedMeta接口TargetTypes的取值，取英文赋值 | - | - |
| 1 | crowd_task.seed_type | seedType | false | 2 | MEMBERSHIP | 种子类型，见listSeedMeta接口SeedTypes的取值，取英文赋值 | - | - |
| 1 | crowd_task.crowd_type | crowdType | true | 99 | 2 | 人群包信息 2-公域种子人群 3-规则圈选种子人群，4-行为圈选，5-直播间人群 | - | - |
| 1 | crowd_task.exclude_seed | excludeSeed | true | 4 | false | 是否剔除种子 | - | - |
| 1 | crowd_task.seed_rule_period | seedRulePeriod | false | 2 | 30 | 种子人群规则周期，见listSeedMeta接口SeedRulePeriods的取值 | - | - |
| 1 | crowd_task.target_type_period | targetTypePeriod | false | 2 | 7 | 目标类型周期，取值1/7/15，见listSeedMeta接口TargetTypePeriods的取值 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | crowd_task_id | crowdTaskId | - | 99 | 10 | 人群任务id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/audience/createCrowdTask?app_key=your_appkey_here&method=sms.audience.createCrowdTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/audience/createCrowdTask?app_key=your_appkey_here&method=sms.audience.createCrowdTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsAudienceCreateCrowdTaskRequest request = new SmsAudienceCreateCrowdTaskRequest();
SmsAudienceCreateCrowdTaskParam param = request.getParam();
SmsAudienceCreateCrowdTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsAudienceCreateCrowdTaskRequest();
$param = new SmsAudienceCreateCrowdTaskParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = SmsAudienceCreateCrowdTaskRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := sms_audience_createCrowdTask_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsAudienceCreateCrowdTaskRequest();
var param = request.BuildParam();
var response = request.Execute<SmsAudienceCreateCrowdTaskResponse>(accessToken);

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
