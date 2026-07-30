# /shopVideo/uploadVideo

> 中文说明：商家短视频上传  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7147>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/uploadVideo |
| 中文名称 | 商家短视频上传 |
| 文档目录 | 短视频API |
| Article ID | 7147 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/12/12 12:37:03 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

短视频创作中，商家使用短视频上传接口，上传到vod空间，获取media_id，通过media_id进行后续的投稿、创作

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.uploadVideo | 调用的API接口名称 | - | - |
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
| 0 | url | url | true | 2 | https://media.w3.org/2010/05/sintel/trailer.mp4 | 视频url，目前支持mp4视频格式 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | task_id | task_id | - | 2 | 7446661656018420006 | 任务ID，根据任务ID查询上传任务状态 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/uploadVideo?app_key=your_appkey_here&method=shopVideo.uploadVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/uploadVideo?app_key=your_appkey_here&method=shopVideo.uploadVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoUploadVideoRequest request = new ShopVideoUploadVideoRequest();
ShopVideoUploadVideoParam param = request.getParam();
param.setUrl("https://media.w3.org/2010/05/sintel/trailer.mp4");
ShopVideoUploadVideoResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoUploadVideoRequest();
$param = new ShopVideoUploadVideoParam();
$request->setParam($param);
$param->url = "https://media.w3.org/2010/05/sintel/trailer.mp4";
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoUploadVideoRequest()
param = request.getParams()
param.url = "https://media.w3.org/2010/05/sintel/trailer.mp4"
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_uploadVideo_request.New()
param := request.GetParams()
param.Url = "https://media.w3.org/2010/05/sintel/trailer.mp4"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoUploadVideoRequest();
var param = request.BuildParam();
param.Url = "https://media.w3.org/2010/05/sintel/trailer.mp4";
var response = request.Execute<ShopVideoUploadVideoResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:605025001 | URL解析失败 | 检查URL是否合法，合法例子：https://media.w3.org/2010/05/sintel/trailer.mp4 |
| 20000 | 系统错误 | isp.service-error:605025003 | 系统错误 | 稍后重试 |
| 20000 | 系统错误 | isp.service-error:605025004 | 系统错误 | 稍后重试 |
| 20000 | 系统错误 | isp.service-error:605025005 | 系统错误 | 稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
