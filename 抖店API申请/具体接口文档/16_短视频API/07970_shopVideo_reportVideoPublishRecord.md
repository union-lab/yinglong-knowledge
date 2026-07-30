# /shopVideo/reportVideoPublishRecord

> 中文说明：上报短视频上传记录  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7970>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/reportVideoPublishRecord |
| 中文名称 | 上报短视频上传记录 |
| 文档目录 | 短视频API |
| Article ID | 7970 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/12/19 15:32:26 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5 |

## 使用说明

上报短视频上传记录

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.reportVideoPublishRecord | 调用的API接口名称 | - | - |
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
| 0 | item_id | itemID | true | 1 | 1872068485345111 | 短视频ID | - | - |
| 0 | user_id | userID | false | 1 | 7553945164076821278 | 作者账号id（抖音uid），不传默认人店一体账号，支持渠道号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | success | - | 4 | false | 是否上报成功 | - | - |
| 0 | failed_reason | failedReason | - | 2 | userID与店铺的关联关系不存在 | 上报失败原因 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/kolLiveShare?app_key=your_appkey_here&method=buyin.kolLiveShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/kolLiveShare?app_key=your_appkey_here&method=buyin.kolLiveShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoReportVideoPublishRecordRequest request = new ShopVideoReportVideoPublishRecordRequest();
ShopVideoReportVideoPublishRecordParam param = request.getParam();
param.setItemId(1872068485345111L);
param.setUserId(7553945164076821278L);
ShopVideoReportVideoPublishRecordResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoReportVideoPublishRecordRequest();
$param = new ShopVideoReportVideoPublishRecordParam();
$request->setParam($param);
$param->item_id = 1872068485345111;
$param->user_id = 7553945164076821278;
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoReportVideoPublishRecordRequest()
param = request.getParams()
param.item_id = 1872068485345111
param.user_id = 7553945164076821278
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_reportVideoPublishRecord_request.New()
param := request.GetParams()
param.ItemId = 1872068485345111
param.UserId = 7553945164076821278
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoReportVideoPublishRecordRequest();
var param = request.BuildParam();
param.ItemId = 1872068485345111;
param.UserId = 7553945164076821278;
var response = request.Execute<ShopVideoReportVideoPublishRecordResponse>(accessToken);

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
