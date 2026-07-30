# /second/ecomInsight/taskList

> 中文说明：获取task列表  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7936>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/ecomInsight/taskList |
| 中文名称 | 获取task列表 |
| 文档目录 | 短视频API |
| Article ID | 7936 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/12/17 14:29:49 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

通过条件获取task列表，接口明细https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.ecomInsight/taskList | 调用的API接口名称 | - | - |
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
| 0 | page_size | page_size | false | 99 | 10 | 条数 | - | - |
| 0 | type | type | true | 2 | VideoByText | 任务类型 | - | - |
| 0 | status | status | false | 99 | 0 | 任务状态：0 - 失败，1 - 创建，2 - 运行中，3 - 成功，4 - 取消 | - | - |
| 0 | kw | kw | false | 2 | xxx | 任务名 | - | - |
| 0 | page | page | false | 99 | 1 | 页码 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | msg | msg | - | 2 | xxxx | 消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |
| 0 | data | data | - | 5 | - | 任务信息 | - | R1 |
| 1 | data.records | records | - | 3 | - | 任务列表 | - | R1 |
| 2 | data.records.name | name | - | 2 | xxxx | 任务名 | - | - |
| 2 | data.records.status | status | - | 99 | 0 | 任务状态 | - | - |
| 2 | data.records.create_info | create_info | - | 2 | xxxx | 创建任务信息 | - | - |
| 2 | data.records.model_task_id | model_task_id | - | 2 | xxxx | model任务id | - | - |
| 2 | data.records.update_time | update_time | - | 2 | xxxx | 更新时间 | - | - |
| 2 | data.records.msg | msg | - | 2 | xxx | 消息 | - | - |
| 2 | data.records.task_type | task_type | - | 2 | xxxx | 任务类型 | - | - |
| 2 | data.records.task_result | task_result | - | 2 | xxxx | 任务结果 | - | - |
| 2 | data.records.pilot_task_id | pilot_task_id | - | 2 | xxxx | pilot任务id | - | - |
| 2 | data.records.create_time | create_time | - | 2 | xxx | 创建时间 | - | - |
| 2 | data.records.id | id | - | 99 | 1 | 唯一id | - | - |
| 1 | data.total | total | - | 99 | 10 | 总条数 | - | - |
| 1 | data.page | page | - | 99 | 1 | 页码 | - | - |
| 1 | data.page_size | page_size | - | 99 | 10 | 条数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/ecomInsight/taskList?app_key=your_appkey_here&method=second.ecomInsight.taskList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/ecomInsight/taskList?app_key=your_appkey_here&method=second.ecomInsight.taskList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondEcomInsightTaskListRequest request = new SecondEcomInsightTaskListRequest();
SecondEcomInsightTaskListParam param = request.getParam();
param.setPageSize(10);
param.setType("VideoByText");
param.setStatus(0);
param.setKw("xxx");
param.setPage(1);
SecondEcomInsightTaskListResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondEcomInsightTaskListRequest();
$param = new SecondEcomInsightTaskListParam();
$request->setParam($param);
$param->page_size = 10;
$param->type = "VideoByText";
$param->status = 0;
$param->kw = "xxx";
$param->page = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = SecondEcomInsightTaskListRequest()
param = request.getParams()
param.page_size = 10
param.type = "VideoByText"
param.status = 0
param.kw = "xxx"
param.page = 1
response = request.execute(accessToken)

```

### go

```go
request := second_ecomInsight_taskList_request.New()
param := request.GetParams()
param.PageSize = 10
param.Type = "VideoByText"
param.Status = 0
param.Kw = "xxx"
param.Page = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondEcomInsightTaskListRequest();
var param = request.BuildParam();
param.PageSize = 10;
param.Type = "VideoByText";
param.Status = 0;
param.Kw = "xxx";
param.Page = 1;
var response = request.Execute<SecondEcomInsightTaskListResponse>(accessToken);

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
