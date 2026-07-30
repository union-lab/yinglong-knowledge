# /shopVideo/submitHiddenWaterMarkTask

> 中文说明：提交加暗水印任务  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7208>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/submitHiddenWaterMarkTask |
| 中文名称 | 提交加暗水印任务 |
| 文档目录 | 短视频API |
| Article ID | 7208 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/1/15 14:49:34 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

短视频提交加暗水印任务

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.submitHiddenWaterMarkTask | 调用的API接口名称 | - | - |
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
| 0 | mediaId | vid | false | 2 | v0d27cg10001csve2qfog65o283c1h0g | 通过sdk上传后的获取到的mediaId，url和mediaId必须传一个 | - | - |
| 0 | url | url | false | 2 | https://v3-cold.douyinvod.com/b6fb2946ffc92fb4e | 视频url，必须公网可访问，url和mediaId必须传一个，优先mediaId | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | task_id | taskId | - | 2 | 7458213968494985526 | 任务id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/submitHiddenWaterMarkTask?app_key=your_appkey_here&method=shopVideo.submitHiddenWaterMarkTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/submitHiddenWaterMarkTask?app_key=your_appkey_here&method=shopVideo.submitHiddenWaterMarkTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoSubmitHiddenWaterMarkTaskRequest request = new ShopVideoSubmitHiddenWaterMarkTaskRequest();
ShopVideoSubmitHiddenWaterMarkTaskParam param = request.getParam();
param.setMediaId("v0d27cg10001csve2qfog65o283c1h0g");
param.setUrl("https://v3-cold.douyinvod.com/b6fb2946ffc92fb4e");
ShopVideoSubmitHiddenWaterMarkTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoSubmitHiddenWaterMarkTaskRequest();
$param = new ShopVideoSubmitHiddenWaterMarkTaskParam();
$request->setParam($param);
$param->mediaId = "v0d27cg10001csve2qfog65o283c1h0g";
$param->url = "https://v3-cold.douyinvod.com/b6fb2946ffc92fb4e";
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoSubmitHiddenWaterMarkTaskRequest()
param = request.getParams()
param.mediaId = "v0d27cg10001csve2qfog65o283c1h0g"
param.url = "https://v3-cold.douyinvod.com/b6fb2946ffc92fb4e"
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_submitHiddenWaterMarkTask_request.New()
param := request.GetParams()
param.MediaId = "v0d27cg10001csve2qfog65o283c1h0g"
param.Url = "https://v3-cold.douyinvod.com/b6fb2946ffc92fb4e"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoSubmitHiddenWaterMarkTaskRequest();
var param = request.BuildParam();
param.MediaId = "v0d27cg10001csve2qfog65o283c1h0g";
param.Url = "https://v3-cold.douyinvod.com/b6fb2946ffc92fb4e";
var response = request.Execute<ShopVideoSubmitHiddenWaterMarkTaskResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:605025001 | 参数错误 | 根据异常描述调整参数 |
| 50002 | 业务处理失败 | isv.business-failed:605025002 | vod上传授权失败 | 请稍后重试 |
| 20000 | 系统错误 | isp.service-error:605025004 | 数据存储失败 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:605025007 | 视频url不合法 | 检查视频url |
| 50002 | 业务处理失败 | isv.business-failed:605025010 | 转码失败 | 请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
