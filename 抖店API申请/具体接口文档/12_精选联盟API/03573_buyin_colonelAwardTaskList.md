# /buyin/colonelAwardTaskList

> 中文说明：团长赏金任务列表查询  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/3573>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/colonelAwardTaskList |
| 中文名称 | 团长赏金任务列表查询 |
| 文档目录 | 精选联盟API |
| Article ID | 3573 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/4/14 16:16:19 |
| 授权主体 | ["团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

支持根据条件筛选团长下赏金任务列表，需团长授权

## 权限包

- 精选联盟 / 团长赏金（packageType=1）；适用应用类目：团长商品推广、团长管理、联盟团长自研、团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.colonelAwardTaskList | 调用的API接口名称 | - | - |
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
| 0 | task_info | task_info | false | 2 | 任务名称 | 任务id或名称 | - | - |
| 0 | status | status | false | 1 | 0 | 0：不限，1：未发布，2：审核中，3：审核未通过，4：未开始，5：进行中，6：已结束, 默认0 | - | - |
| 0 | page | page | false | 1 | 1 | 页数，默认1 | - | - |
| 0 | page_size | page_size | false | 1 | 20 | 每页条数，最大20。默认20 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 1 | 20 | 数据总条数 | - | - |
| 0 | results | results | - | 3 | - | 任务列表 | - | R1 |
| 1 | results.task_id | task_id | - | 1 | 202303280111 | 任务 id | - | - |
| 1 | results.task_name | task_name | - | 2 | 任务名称 | 任务名称 | - | - |
| 1 | results.status | status | - | 1 | 1 | 任务状态。1：未发布，2：审核中，3：审核未通过，4：未开始，5：进行中，6：已结束 | - | - |
| 1 | results.task_start_time | task_start_time | - | 2 | 2023/03/01 | 任务开始时间 | - | - |
| 1 | results.task_end_time | task_end_time | - | 2 | 2023/03/01 | 任务结束时间 | - | - |
| 1 | results.apply_cnt | apply_cnt | - | 1 | 100 | 已领取人数 | - | - |
| 1 | results.promote_cnt | promote_cnt | - | 1 | 100 | 已推广人数 | - | - |
| 1 | results.gmv | gmv | - | 1 | 10000 | 支付 GMV，单位：分 | - | - |
| 1 | results.order_cnt | order_cnt | - | 1 | 100 | 总订单量 | - | - |
| 1 | results.reason | reason | - | 2 | 未通过 | 审核未通过原因 | - | - |
| 1 | results.can_apply | can_apply | - | 4 | true | 是否可报名 | - | - |
| 0 | ongoing_task_cnt | ongoing_task_cnt | - | 1 | 10 | 进行中的任务数量 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/colonelAwardTaskList?app_key=your_appkey_here&method=buyin.colonelAwardTaskList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/colonelAwardTaskList?app_key=your_appkey_here&method=buyin.colonelAwardTaskList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinColonelAwardTaskListRequest request = new BuyinColonelAwardTaskListRequest();
BuyinColonelAwardTaskListParam param = request.getParam();
param.setTaskInfo("任务名称");
param.setStatus(0L);
param.setPage(1L);
param.setPageSize(20L);
BuyinColonelAwardTaskListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinColonelAwardTaskListRequest();
$param = new BuyinColonelAwardTaskListParam();
$request->setParam($param);
$param->task_info = "任务名称";
$param->status = 0;
$param->page = 1;
$param->page_size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinColonelAwardTaskListRequest()
param = request.getParams()
param.task_info = "任务名称"
param.status = 0
param.page = 1
param.page_size = 20
response = request.execute(accessToken)

```

### go

```go
request := buyin_colonelAwardTaskList_request.New()
param := request.GetParams()
param.TaskInfo = "任务名称"
param.Status = 0
param.Page = 1
param.PageSize = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinColonelAwardTaskListRequest();
var param = request.BuildParam();
param.TaskInfo = "任务名称";
param.Status = 0;
param.Page = 1;
param.PageSize = 20;
var response = request.Execute<BuyinColonelAwardTaskListResponse>(accessToken);

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
