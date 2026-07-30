# /sms/audience/listCrowdTask

> 中文说明：获取种子人群任务列表  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7658>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/audience/listCrowdTask |
| 中文名称 | 获取种子人群任务列表 |
| 文档目录 | 短信API |
| Article ID | 7658 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/9/11 11:25:21 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

仅支持返回以下类型人群：2-种子人群；3-规则圈选人群；4-行为圈群

## 权限包

- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.audience/listCrowdTask | 调用的API接口名称 | - | - |
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
| 0 | crowd_task_id | crowdTaskId | false | 99 | 123 | 人群任务id | - | - |
| 0 | crowd_type | crowdType | true | 99 | 2 | 已废弃，可设置成0实际不生效。建议使用新字段支持多选：crowd_type_list | - | - |
| 0 | page_index | pageIndex | true | 99 | 0 | 页码 | - | - |
| 0 | page_size | pageSize | true | 99 | 10 | 页大小 | - | - |
| 0 | crowd_name | crowdName | false | 2 | test | 人群名称 | - | - |
| 0 | crowd_type_list | crowdTypeList | false | 3 | [2,3] | 人群任务类型 2-种子人群 3-规则圈选人群 4-行为圈群 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | crowd_task_list | crowdTaskList | - | 3 | - | 人群任务列表 | - | R1 |
| 1 | crowd_task_list.cate_ids | cateIds | - | 3 | - | 类目id | - | R1 |
| 2 | crowd_task_list.cate_ids.first_cid | firstCid | - | 99 | 200001 | 一级类目id | - | - |
| 2 | crowd_task_list.cate_ids.second_cid | secondCid | - | 99 | 210002 | 二级类目id | - | - |
| 1 | crowd_task_list.seed_rule_type | seedRuleType | - | 2 | test | 种子规则类型 | - | - |
| 1 | crowd_task_list.lookalike_count | lookalikeCount | - | 99 | 10 | 人群扩大数 | - | - |
| 1 | crowd_task_list.app_id | appId | - | 99 | 10 | 应用id | - | - |
| 1 | crowd_task_list.shop_id | shopId | - | 99 | 10 | 店铺id | - | - |
| 1 | crowd_task_list.crowd_task_id | crowdTaskId | - | 99 | 10 | 人群任务id | - | - |
| 1 | crowd_task_list.crowd_id | crowdId | - | 2 | test | 人群唯一id | - | - |
| 1 | crowd_task_list.seed_rule_period | seedRulePeriod | - | 2 | test | 人群规则周期 | - | - |
| 1 | crowd_task_list.exclude_seed | excludeSeed | - | 4 | false | 是否剔除种子 | - | - |
| 1 | crowd_task_list.crowd_task_status_info | crowdTaskStatusInfo | - | 5 | - | 人群任务状态 | - | R1 |
| 2 | crowd_task_list.crowd_task_status_info.last_update_time | lastUpdateTime | - | 99 | 10 | 人群包最后更新时间 | - | - |
| 2 | crowd_task_list.crowd_task_status_info.crowd_task_status | crowdTaskStatus | - | 99 | 10 | 人群包状态 1-创建 2-运行中 3-圈选完成 4-失败 | - | - |
| 2 | crowd_task_list.crowd_task_status_info.crowd_count | crowdCount | - | 99 | 10 | 预估人数 | - | - |
| 1 | crowd_task_list.crowd_type | crowdType | - | 99 | 1 | 人群包类型 | - | - |
| 1 | crowd_task_list.crowd_name | crowdName | - | 2 | test | 人群包名称 | - | - |
| 1 | crowd_task_list.id_type | idType | - | 99 | 1 | id类型 1-明文手机号 2-md5加密手机号 | - | - |
| 1 | crowd_task_list.seed_source | seedSource | - | 2 | test | 种子来源 | - | - |
| 1 | crowd_task_list.target_type_period | targetTypePeriod | - | 2 | test | 业务目标：目标类型 | - | - |
| 1 | crowd_task_list.tos_url | tosUrl | - | 2 | test | 建模人群包格式 | - | - |
| 1 | crowd_task_list.seed_type | seedType | - | 2 | test | 种子类型 | - | - |
| 1 | crowd_task_list.target_type | targetType | - | 2 | test | 业务目标：时间口径 | - | - |
| 0 | total | total | - | 99 | 10 | 总数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/audience/listCrowdTask?app_key=your_appkey_here&method=sms.audience.listCrowdTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/audience/listCrowdTask?app_key=your_appkey_here&method=sms.audience.listCrowdTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsAudienceListCrowdTaskRequest request = new SmsAudienceListCrowdTaskRequest();
SmsAudienceListCrowdTaskParam param = request.getParam();
param.setCrowdTaskId(123L);
param.setCrowdType(2);
param.setPageIndex(0L);
param.setPageSize(10L);
param.setCrowdName("test");
param.setCrowdTypeList([2,3]);
SmsAudienceListCrowdTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsAudienceListCrowdTaskRequest();
$param = new SmsAudienceListCrowdTaskParam();
$request->setParam($param);
$param->crowd_task_id = 123;
$param->crowd_type = 2;
$param->page_index = 0;
$param->page_size = 10;
$param->crowd_name = "test";
$param->crowd_type_list = [2,3];
$response = $request->execute(accessToken);

```

### python

```python
request = SmsAudienceListCrowdTaskRequest()
param = request.getParams()
param.crowd_task_id = 123
param.crowd_type = 2
param.page_index = 0
param.page_size = 10
param.crowd_name = "test"
param.crowd_type_list = [2,3]
response = request.execute(accessToken)

```

### go

```go
request := sms_audience_listCrowdTask_request.New()
param := request.GetParams()
param.CrowdTaskId = 123
param.CrowdType = 2
param.PageIndex = 0
param.PageSize = 10
param.CrowdName = "test"
param.CrowdTypeList = [2,3]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsAudienceListCrowdTaskRequest();
var param = request.BuildParam();
param.CrowdTaskId = 123;
param.CrowdType = 2;
param.PageIndex = 0;
param.PageSize = 10;
param.CrowdName = "test";
param.CrowdTypeList = [2,3];
var response = request.Execute<SmsAudienceListCrowdTaskResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10001 | 业务处理失败 | - |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
