# /shopVideo/publishVideoNew

> 中文说明：发布视频新接口  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7489>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/publishVideoNew |
| 中文名称 | 发布视频新接口 |
| 文档目录 | 短视频API |
| Article ID | 7489 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/10/16 16:49:30 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

发布视频接口，支持渠道号，在发挂车视频前前置调用/shopVideo/createShoppingCartAnchor

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.publishVideoNew | 调用的API接口名称 | - | - |
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
| 0 | publish_info | publishInfo | true | 5 | - | 发布信息 | - | - |
| 1 | publish_info.source | source | true | 99 | 3 | 来自open端默认传3 | - | - |
| 1 | publish_info.user_id | userID | false | 2 | 111 | 用户id，不传则为人店一体账号 | - | - |
| 1 | publish_info.schedule_publish_time | schedulePublishTime | false | 99 | 112121212 | 定时发布时间 | - | - |
| 0 | video_info | videoInfo | true | 5 | - | 视频信息 | - | - |
| 1 | video_info.desc | desc | true | 2 | 这是视频描述 | 视频描述 | - | - |
| 1 | video_info.cover_image_uri | coverImageUri | false | 2 | 12122121 | 封面地址。 | - | - |
| 1 | video_info.media_id | mediaId | true | 2 | 112121 | 视频id，格式如：v0d27cg10001csve2qfog65o283c1h0g | - | - |
| 1 | video_info.title | title | true | 2 | 这是视频标题 | 视频标题 | - | - |
| 0 | anchor_info | anchorInfo | false | 5 | - | 锚点信息 | - | - |
| 1 | anchor_info.anchors | anchors | false | 3 | - | 锚点列表 | - | - |
| 2 | anchor_info.anchors.keyword | keyword | false | 2 | 锚点标题 | 锚点标题，例如小黄车的标题 | - | - |
| 2 | anchor_info.anchors.product_ids | productIDs | false | 3 | 121212122 | 商品id，挂车和非挂车均需要 | - | - |
| 2 | anchor_info.anchors.anchor_draft_id | anchorDraftID | false | 2 | 121212122 | 锚点草稿id。发布挂车视频时必传 | - | - |
| 2 | anchor_info.anchors.content | content | false | 2 | 锚点文案 | 锚点文案 | - | - |
| 2 | anchor_info.anchors.type | type | false | 99 | 3 | 锚点类型，3-挂车，7-非挂车 | - | - |
| 0 | related_info | relatedInfo | false | 5 | - | 相关信息 | - | - |
| 1 | related_info.topics | topics | false | 3 | - | 话题信息 | - | - |
| 2 | related_info.topics.topic_name | topicName | false | 2 | 这是活动名称 | 活动名称 | - | - |
| 2 | related_info.topics.topic_id | topicId | false | 2 | 121211212 | 话题id | - | - |
| 1 | related_info.hot_sentence | hotSentence | false | 2 | 热点词 | 热点词 | - | - |
| 0 | app_info | openApiInfo | true | 5 | - | 应用信息 | - | - |
| 1 | app_info.app_id | openAppId | true | 99 | appid | app_key | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 响应参数 | - | R1 |
| 1 | data.item_id | itemID | - | 2 | 1212121212 | 视频id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/publishVideoNew?app_key=your_appkey_here&method=shopVideo.publishVideoNew&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/publishVideoNew?app_key=your_appkey_here&method=shopVideo.publishVideoNew&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoPublishVideoNewRequest request = new ShopVideoPublishVideoNewRequest();
ShopVideoPublishVideoNewParam param = request.getParam();
ShopVideoPublishVideoNewResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoPublishVideoNewRequest();
$param = new ShopVideoPublishVideoNewParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoPublishVideoNewRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_publishVideoNew_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoPublishVideoNewRequest();
var param = request.BuildParam();
var response = request.Execute<ShopVideoPublishVideoNewResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1000001 | 1000001:定时发布时间不能大于当前时间+14天 | 定时发布时间不能大于当前时间+14天 |
| 50002 | 业务处理失败 | isv.business-failed:60488027 | 60488027:视频发布失败 | 视频发布失败 |
| 50002 | 业务处理失败 | isv.business-failed:60488028 | 60488028:视频投稿功能已封禁 | 视频投稿功能已封禁 |
| 50002 | 业务处理失败 | isv.business-failed:60488029 | 60488029:抱歉，今天投稿次数已达到上限，请明天再试 | 抱歉，今天投稿次数已达到上限，请明天再试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
