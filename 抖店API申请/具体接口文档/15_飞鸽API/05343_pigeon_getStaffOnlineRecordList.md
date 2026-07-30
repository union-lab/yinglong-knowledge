# /pigeon/getStaffOnlineRecordList

> 中文说明：查询客服在线日志列表  
> 所属类别：飞鸽API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/188/5343>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /pigeon/getStaffOnlineRecordList |
| 中文名称 | 查询客服在线日志列表 |
| 文档目录 | 飞鸽API |
| Article ID | 5343 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2023/11/10 14:40:25 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

查询客服在线日志列表

## 权限包

- 飞鸽 / 客服绩效场景包（packageType=10）；适用应用类目：创新应用大赛_微应用、客服绩效-微应用、内部测试
- 定向权限 / 定向权限包（packageType=1）
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | pigeon.getStaffOnlineRecordList | 调用的API接口名称 | - | - |
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
| 0 | date | Date | true | 2 | 20231223 | 查询哪一天的数据 | - | - |
| 0 | staff_id | WorkerId | - | 1 | 20 | 客服id | - | - |
| 0 | platform | Platform | - | 1 | 1 | 1 APP 2 PC 3 PC+APP | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | staff_online_records | StaffOnlineRecords | - | 3 | - | 结果列表 | - | R1 |
| 1 | staff_online_records.staff_id | StaffId | - | 1 | 1 | 客服id | 117 | - |
| 1 | staff_online_records.online_duration | OnlineDuration | - | 1 | 1 | 在线时长，单位为秒 | 117 | - |
| 1 | staff_online_records.rest_duration | RestDuration | - | 1 | 1 | 小休时长，单位为秒 | 117 | - |
| 1 | staff_online_records.offline_duration | OfflineDuration | - | 1 | 1 | 离线时长，单位为秒 | 117 | - |
| 1 | staff_online_records.online_range | OnlineRange | - | 3 | - | 在线区间分布，单位均为秒 | - | R1 |
| 2 | staff_online_records.online_range.begin_time | BegainTime | - | 1 | 1 | 开始时间 | 117 | - |
| 2 | staff_online_records.online_range.end_time | EndTime | - | 1 | 1 | 结束时间 | 117 | - |
| 1 | staff_online_records.rest_range | RestRange | - | 3 | - | 小休区间分布，单位均为秒 | - | R1 |
| 2 | staff_online_records.rest_range.begin_time | BegainTime | - | 1 | 1 | 开始时间 | 117 | - |
| 2 | staff_online_records.rest_range.end_time | EndTime | - | 1 | 1 | 结束时间 | 117 | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.comyunc/wms/inbound/create?app_key=your_appkey_here&method=yunc.wms.inbound.create&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.comyunc/wms/inbound/create?app_key=your_appkey_here&method=yunc.wms.inbound.create&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PigeonGetStaffOnlineRecordListRequest request = new PigeonGetStaffOnlineRecordListRequest();
PigeonGetStaffOnlineRecordListParam param = request.getParam();
param.setDate("20231223");
param.setStaffId(20L);
param.setPlatform(1L);
PigeonGetStaffOnlineRecordListResponse response = request.execute(accessToken);

```

### php

```php
$request = new PigeonGetStaffOnlineRecordListRequest();
$param = new PigeonGetStaffOnlineRecordListParam();
$request->setParam($param);
$param->date = "20231223";
$param->staff_id = 20;
$param->platform = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = PigeonGetStaffOnlineRecordListRequest()
param = request.getParams()
param.date = "20231223"
param.staff_id = 20
param.platform = 1
response = request.execute(accessToken)

```

### go

```go
request := pigeon_getStaffOnlineRecordList_request.New()
param := request.GetParams()
param.Date = "20231223"
param.StaffId = 20
param.Platform = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PigeonGetStaffOnlineRecordListRequest();
var param = request.BuildParam();
param.Date = "20231223";
param.StaffId = 20;
param.Platform = 1;
var response = request.Execute<PigeonGetStaffOnlineRecordListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:-1 | 业务处理失败 | 业务处理失败 |
| 50002 | 业务处理失败 | isv.business-failed:2 | 最多只能查询35天的数据 | 最多只能查询35天的数据 |
| 50002 | 业务处理失败 | isv.business-failed:3 | 3:db错误 | 3:db错误 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
