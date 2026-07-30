# /shopVideo/getImageTextMusic

> 中文说明：获取图文音乐列表  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/8140>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/getImageTextMusic |
| 中文名称 | 获取图文音乐列表 |
| 文档目录 | 短视频API |
| Article ID | 8140 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/3/11 14:43:13 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

发布图文时，调用该接口获取可用和推荐音乐

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.getImageTextMusic | 调用的API接口名称 | - | - |
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
| 0 | query | query | false | 2 | Dance | 歌曲，歌手名称 | - | - |
| 0 | page | page | false | 99 | 1 | 当前页，从1开始 | - | - |
| 0 | page_size | pageSize | false | 99 | 10 | 一次多少条音乐 | - | - |
| 0 | need_recommend | needRecommend | false | 4 | true | 是否需要推荐音乐，默认false | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | music_list | musicList | - | 3 | - | 音乐列表 | - | R1 |
| 1 | music_list.music_name | musicName | - | 2 | Bass Dance | 音乐名称 | - | - |
| 1 | music_list.clip_id | clipId | - | 2 | 6748245563931753523 | 音乐ID | - | - |
| 1 | music_list.cover_img | coverImg | - | 2 | https://xxx | 音乐封面 | - | - |
| 1 | music_list.author | author | - | 2 | Richard | 音乐作者 | - | - |
| 1 | music_list.duration | duration | - | 99 | 65000 | 音乐时长，毫秒 | - | - |
| 1 | music_list.music_url | musicURL | - | 2 | https://xxx | 播放地址 | - | - |
| 0 | total | total | - | 99 | 10 | 总条数 | - | - |
| 0 | recommend_music_list | recommendMusicList | - | 3 | - | 推荐音乐列表 | - | R1 |
| 1 | recommend_music_list.clip_id | clipId | - | 2 | 6748245563931753523 | 音乐ID | - | - |
| 1 | recommend_music_list.cover_img | coverImg | - | 2 | https://xxx | 音乐封面 | - | - |
| 1 | recommend_music_list.author | author | - | 2 | Richard | 音乐作者 | - | - |
| 1 | recommend_music_list.duration | duration | - | 99 | 65000 | 音乐时长，毫秒 | - | - |
| 1 | recommend_music_list.music_url | musicURL | - | 2 | https://xxx | 播放地址 | - | - |
| 1 | recommend_music_list.music_name | musicName | - | 2 | Bass Dance | 音乐名称 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/getImageTextMusic?app_key=your_appkey_here&method=shopVideo.getImageTextMusic&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/getImageTextMusic?app_key=your_appkey_here&method=shopVideo.getImageTextMusic&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoGetImageTextMusicRequest request = new ShopVideoGetImageTextMusicRequest();
ShopVideoGetImageTextMusicParam param = request.getParam();
param.setQuery("Dance");
param.setPage(1);
param.setPageSize(10);
param.setNeedRecommend(true);
ShopVideoGetImageTextMusicResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoGetImageTextMusicRequest();
$param = new ShopVideoGetImageTextMusicParam();
$request->setParam($param);
$param->query = "Dance";
$param->page = 1;
$param->page_size = 10;
$param->need_recommend = true;
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoGetImageTextMusicRequest()
param = request.getParams()
param.query = "Dance"
param.page = 1
param.page_size = 10
param.need_recommend = true
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_getImageTextMusic_request.New()
param := request.GetParams()
param.Query = "Dance"
param.Page = 1
param.PageSize = 10
param.NeedRecommend = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoGetImageTextMusicRequest();
var param = request.BuildParam();
param.Query = "Dance";
param.Page = 1;
param.PageSize = 10;
param.NeedRecommend = true;
var response = request.Execute<ShopVideoGetImageTextMusicResponse>(accessToken);

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
