# /open/getProductVideoCheckResult

> 中文说明：获取商品主图视频质检结果  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/7724>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /open/getProductVideoCheckResult |
| 中文名称 | 获取商品主图视频质检结果 |
| 文档目录 | 商品API |
| Article ID | 7724 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/8/27 14:07:14 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

获取商品主图视频质检结果

## 权限包

- 商品 / 商品曝光（主图视频）（packageType=1）；适用应用类目：AIGC视频洞察、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | open.getProductVideoCheckResult | 调用的API接口名称 | - | - |
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
| 0 | task_id | taskId | true | 2 | sdojafe | 任务id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | task_status | taskStatus | - | 99 | 0 | 任务状态 0执行成功 1执行中 2执行失败 | - | - |
| 0 | is_pass | isPass | - | 99 | 1 | 主图视频是否合格 0不合格 1合格 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/open/getProductVideoCheckResult?app_key=your_appkey_here&method=open.getProductVideoCheckResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/open/getProductVideoCheckResult?app_key=your_appkey_here&method=open.getProductVideoCheckResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OpenGetProductVideoCheckResultRequest request = new OpenGetProductVideoCheckResultRequest();
OpenGetProductVideoCheckResultParam param = request.getParam();
param.setTaskId("sdojafe");
OpenGetProductVideoCheckResultResponse response = request.execute(accessToken);

```

### php

```php
$request = new OpenGetProductVideoCheckResultRequest();
$param = new OpenGetProductVideoCheckResultParam();
$request->setParam($param);
$param->task_id = "sdojafe";
$response = $request->execute(accessToken);

```

### python

```python
request = OpenGetProductVideoCheckResultRequest()
param = request.getParams()
param.task_id = "sdojafe"
response = request.execute(accessToken)

```

### go

```go
request := open_getProductVideoCheckResult_request.New()
param := request.GetParams()
param.TaskId = "sdojafe"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OpenGetProductVideoCheckResultRequest();
var param = request.BuildParam();
param.TaskId = "sdojafe";
var response = request.Execute<OpenGetProductVideoCheckResultResponse>(accessToken);

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
