# /shopVideo/queryUploadTask

> 中文说明：查询url上传视频接口的任务信息（状态、上传成功的视频id等）  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7151>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/queryUploadTask |
| 中文名称 | 查询url上传视频接口的任务信息（状态、上传成功的视频id等） |
| 文档目录 | 短视频API |
| Article ID | 7151 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/12/12 12:38:06 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

因视频上传异步，需要使用uploadVideo接口得到的task_id查询url上传视频接口的任务状态。
短视频上传状态，0=初始化，1=上传中，2=上传成功，3=上传失败

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.queryUploadTask | 调用的API接口名称 | - | - |
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
| 0 | task_id | taskId | true | 2 | 7447060952975049010 | uploadVideo接口得到的task_id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | vid | vid | - | 2 | v0d27cg10001cqclamfog40zzm86o6v0 | media_id，v开头的字符串 | - | - |
| 0 | status | status | - | 99 | 2 | 短视频上传状态，0=初始化，1=上传中，2=上传成功，3=上传失败 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/queryUploadTask?app_key=your_appkey_here&method=shopVideo.queryUploadTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/queryUploadTask?app_key=your_appkey_here&method=shopVideo.queryUploadTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoQueryUploadTaskRequest request = new ShopVideoQueryUploadTaskRequest();
ShopVideoQueryUploadTaskParam param = request.getParam();
param.setTaskId("7447060952975049010");
ShopVideoQueryUploadTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoQueryUploadTaskRequest();
$param = new ShopVideoQueryUploadTaskParam();
$request->setParam($param);
$param->task_id = "7447060952975049010";
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoQueryUploadTaskRequest()
param = request.getParams()
param.task_id = "7447060952975049010"
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_queryUploadTask_request.New()
param := request.GetParams()
param.TaskId = "7447060952975049010"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoQueryUploadTaskRequest();
var param = request.BuildParam();
param.TaskId = "7447060952975049010";
var response = request.Execute<ShopVideoQueryUploadTaskResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:605025001 | task_id不正确 | 确认task_id是否有误 |
| 20000 | 系统错误 | isp.service-error:605025006 | 数据库查询失败 | 稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
