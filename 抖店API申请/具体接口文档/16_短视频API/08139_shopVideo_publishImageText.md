# /shopVideo/publishImageText

> 中文说明：发布图文接口，支持渠道号  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/8139>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/publishImageText |
| 中文名称 | 发布图文接口，支持渠道号 |
| 文档目录 | 短视频API |
| Article ID | 8139 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2026/3/11 14:42:52 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

发布图文接口，支持渠道号

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.publishImageText | 调用的API接口名称 | - | - |
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
| 0 | anchor_info | anchorInfo | false | 5 | - | 锚点信息 | - | - |
| 1 | anchor_info.anchors | anchors | false | 3 | - | 锚点列表，当前多锚点传递仅支持【挂车+看后搜】 | - | - |
| 2 | anchor_info.anchors.product_ids | productIDs | false | 3 | 11111 | 电商锚点商品id | - | - |
| 2 | anchor_info.anchors.after_search_words | afterSearchWords | false | 3 | 针织衫怎么穿 | 看后搜小蓝词，必须传3个词，提报词之间用英文逗号分割，每个词最长14字符 | - | - |
| 2 | anchor_info.anchors.content | content | false | 2 | 爆款针织衫 | 预留字段：锚点文案 | - | - |
| 2 | anchor_info.anchors.keyword | keyword | false | 2 | 测试标题 | 锚点标题，例如小黄车的标题 | - | - |
| 2 | anchor_info.anchors.type | type | false | 7 | 3 | 锚点类型，小黄车-3，看后搜-90 | - | - |
| 2 | anchor_info.anchors.products | products | false | 3 | - | 看后搜承接商品需要设置商品ID+商品名称 | - | - |
| 3 | anchor_info.anchors.products.product_name | productName | false | 2 | 测试商品名称 | 商品名称 | - | - |
| 3 | anchor_info.anchors.products.is_main_recommend | isMainRecommend | false | 4 | true | 是否主推品，看后搜必须设置一个主推品 | - | - |
| 3 | anchor_info.anchors.products.product_id | productID | false | 2 | 1111111 | 商品id | - | - |
| 0 | related_info | relatedInfo | false | 5 | - | 关联话题信息 | - | - |
| 1 | related_info.topics | topics | false | 3 | - | 话题信息 | - | - |
| 2 | related_info.topics.topic_id | topicId | false | 2 | 1111 | 话题id | - | - |
| 2 | related_info.topics.topic_name | topicName | false | 2 | 测试活动111 | 活动名称 | - | - |
| 1 | related_info.hot_sentence | hotSentence | false | 2 | 热点词111 | 热点词 | - | - |
| 0 | publish_info | publishInfo | false | 5 | - | 发布信息 | - | - |
| 1 | publish_info.schedule_publish_time | schedulePublishTime | false | 1 | 1772701966 | 定时发布时间 | - | - |
| 1 | publish_info.user_id | userID | false | 2 | 12121212 | 用户id，不传则为人店一体账号 | - | - |
| 0 | image_info | imageInfo | true | 5 | - | 图文信息 | - | - |
| 1 | image_info.audio_info | audioInfo | true | 5 | - | 音乐信息 | - | - |
| 2 | image_info.audio_info.segment_end_time | SegmentEndTime | false | 1 | 120000 | 结束时间，毫秒 | - | - |
| 2 | image_info.audio_info.volume | volume | false | 1 | 12 | 音量 | - | - |
| 2 | image_info.audio_info.segment_start_time | segmentStartTime | false | 1 | 10000 | 开始时间，毫秒 | - | - |
| 2 | image_info.audio_info.clip_id | clipId | true | 2 | 1212121212 | 音乐id | - | - |
| 1 | image_info.text | text | true | 2 | 正文文案 | 图文正文文案 | - | - |
| 1 | image_info.title | title | true | 2 | 标题 | 标题 | - | - |
| 1 | image_info.image_url_list | imageUrlList | true | 3 | https://xxx | 图片url列表，需先上传到素材中心https://op.jinritemai.com/docs/guide-docs/171/1719 | - | - |
| 1 | image_info.cover_url | coverUrl | false | 2 | https://xxx | 封面图 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 发布结果 | - | R1 |
| 1 | data.item_id | itemID | - | 2 | 12121221 | 图文id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoPublishImageTextRequest request = new ShopVideoPublishImageTextRequest();
ShopVideoPublishImageTextParam param = request.getParam();
ShopVideoPublishImageTextResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoPublishImageTextRequest();
$param = new ShopVideoPublishImageTextParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoPublishImageTextRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_publishImageText_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoPublishImageTextRequest();
var param = request.BuildParam();
var response = request.Execute<ShopVideoPublishImageTextResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:60488027 | 图文发布失败 | 图文发布失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
