# /alliance/colonelActivityProductAudit

> 中文说明：专属团长活动商品审核接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/971>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/colonelActivityProductAudit |
| 中文名称 | 专属团长活动商品审核接口 |
| 文档目录 | 精选联盟API |
| Article ID | 971 |
| 文档版本 | V2.10 |
| 官方更新时间 | 2022/9/7 18:45:14 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

专属团长活动商品审核接口

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.colonelActivityProductAudit | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | true | 1 | 11111 | 团长活动id | - | - |
| 0 | apply_ids | apply_ids | true | 3 | [123124,4342311] | 团长商品申请ID。（可在活动商品查询接口中获取） | - | - |
| 0 | operation | operation | true | 1 | 0 | 审核信息（0：通过； 1：拒绝） | - | - |
| 0 | repeat_apply | repeat_apply | false | 4 | true | 是否允许二次报名（true:允许，false:不允许） | - | - |
| 0 | suggest_info | suggest_info | false | 2 | sakfhkjsd' | 审核建议 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_audit_info | product_audit_info | - | 3 | - | 审核结果 | - | R1 |
| 1 | product_audit_info.apply_id | apply_id | - | 1 | 111 | 团长商品申请ID | - | R1 |
| 1 | product_audit_info.reject_reason | reject_reason | - | 2 | 商品不在该活动中 | 商品不在该活动中, 商品已经审核过, 商品不存在 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/colonelActivityProductAudit?app_key=your_appkey_here&method=alliance.colonelActivityProductAudit&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/colonelActivityProductAudit?app_key=your_appkey_here&method=alliance.colonelActivityProductAudit&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceColonelActivityProductAuditRequest request = new AllianceColonelActivityProductAuditRequest();
AllianceColonelActivityProductAuditParam param = request.getParam();
param.setActivityId(11111L);
param.setApplyIds("123,345");
param.setOperation(0L);
param.setRepeatApply(true);
param.setSuggestInfo("sakfhkjsd'");
AllianceColonelActivityProductAuditResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceColonelActivityProductAuditRequest();
$param = new AllianceColonelActivityProductAuditParam();
$request->setParam($param);
$param->activity_id = 11111;
$param->apply_ids = "123,345";
$param->operation = 0;
$param->repeat_apply = true;
$param->suggest_info = "sakfhkjsd'";
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceColonelActivityProductAuditRequest()
param = request.getParams()
param.activity_id = 11111
param.apply_ids = "123,345"
param.operation = 0
param.repeat_apply = true
param.suggest_info = "sakfhkjsd'"
response = request.execute(accessToken)

```

### go

```go
request := alliance_colonelActivityProductAudit_request.New()
param := request.GetParams()
param.ActivityId = 11111
param.ApplyIds = "123,345"
param.Operation = 0
param.RepeatApply = true
param.SuggestInfo = "sakfhkjsd'"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceColonelActivityProductAuditRequest();
var param = request.BuildParam();
param.ActivityId = 11111;
param.ApplyIds = "123,345";
param.Operation = 0;
param.RepeatApply = true;
param.SuggestInfo = "sakfhkjsd'";
var response = request.Execute<AllianceColonelActivityProductAuditResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4140 | 活动不是处在报名中，不能审核 | 活动不是处在报名中，不能审核 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 请稍候再试 |
| 50002 | 业务处理失败 | isv.business-failed:4139 | 当前用户不是创建活动的用户 | 当前用户不是创建活动的用户 |
| 50002 | 业务处理失败 | isv.business-failed:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:4138 | 活动ID不存在 | 活动ID不存在 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:8192 | 8192:商品3662679639140211700存在次日生效的费率，请次日再来审批 | 8192:商品3662679639140211700存在次日生效的费率，请次日再来审批 |
| 50002 | 业务处理失败 | isv.business-failed:4200 | 4200:账号状态异常，请检查账号状态 | 4200:账号状态异常，请检查账号状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
