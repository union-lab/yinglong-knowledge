# /shopVideo/getInfoForPublish

> 中文说明：查询投稿需要的信息  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7148>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/getInfoForPublish |
| 中文名称 | 查询投稿需要的信息 |
| 文档目录 | 短视频API |
| Article ID | 7148 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/3/11 14:58:30 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

查询投稿需要的信息，如创作者活动、可发布挂车短视频次数、热点等数据

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.getInfoForPublish | 调用的API接口名称 | - | - |
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
| 0 | need_hotspot | need_hotspot | true | 4 | true | 是否需要热点数据 | - | - |
| 0 | need_activity | need_activity | true | 4 | true | 是否查询创作者活动 | - | - |
| 0 | need_alliance_limit | need_alliance_limit | true | 4 | true | 是否需要检查挂车次数限制 | - | - |
| 0 | need_image_alliance_limit | need_image_alliance_limit | false | 4 | true | 是否需要检查图文挂车次数限制 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | hotspot_info | hotspot_info | - | 5 | - | 热点信息 | - | R1 |
| 1 | hotspot_info.hotspot_list | hotspot_item_list | - | 3 | - | 热点列表 | - | R1 |
| 2 | hotspot_info.hotspot_list.name | name | - | 2 | 花样玩雪的101种方式 | 热点名称 | - | - |
| 0 | activity_list | activity_list | - | 3 | - | 活动列表 | - | R1 |
| 1 | activity_list.head_image | head_image | - | 2 | https://lf-gaia-dy.douyinstatic.com/obj/gaia-dy/7423651c0d3ed2c206c641564a68adbe.jpg | 活动头图 | - | - |
| 1 | activity_list.activity_name | show_name | - | 2 | 艺术在抖音 | 活动名称 | - | - |
| 1 | activity_list.activity_id | activity_id | - | 2 | 7330597710854362122 | 活动ID | - | - |
| 1 | activity_list.jump_url | jump_link | - | 2 | https://webcast.amemv.com/magic/eco/runtime/release/672329204c65b8388abf552b?should_full_screen=1&show_back=0&hide_nav_bar=1&hide_status_bar=1&auto_play_bgm=1&web_bg_color=%23FFbbd8fd&loader_name=forest&disable_all_bounces=1&__live_platform__=webcast&appType=webcast&magic_page_no=1&magic_source=mp_offline | 详情跳转地址 | - | - |
| 0 | alliance_limit_info | alliance_limit_info | - | 5 | - | 挂车次数限制信息 | - | R1 |
| 1 | alliance_limit_info.remain_bind_num | remain_bind_num | - | 99 | 1 | 剩余可挂车数量 | - | - |
| 1 | alliance_limit_info.can_bind | can_bind | - | 4 | true | 是否可挂车 | - | - |
| 1 | alliance_limit_info.current_bind_num | current_bind_num | - | 99 | 1 | 当前挂车数量 | - | - |
| 0 | image_alliance_limit_info | image_alliance_limit_info | - | 5 | - | 图文挂车次数限制信息 | - | R1 |
| 1 | image_alliance_limit_info.current_bind_num | current_bind_num | - | 99 | 1 | 当前挂车数量 | - | - |
| 1 | image_alliance_limit_info.can_bind | can_bind | - | 4 | true | 是否可挂车 | - | - |
| 1 | image_alliance_limit_info.remain_bind_num | remain_bind_num | - | 99 | 1 | 剩余可挂车数量 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/getInfoForPublish?app_key=your_appkey_here&method=shopVideo.getInfoForPublish&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/getInfoForPublish?app_key=your_appkey_here&method=shopVideo.getInfoForPublish&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoGetInfoForPublishRequest request = new ShopVideoGetInfoForPublishRequest();
ShopVideoGetInfoForPublishParam param = request.getParam();
param.setNeedHotspot(true);
param.setNeedActivity(true);
param.setNeedAllianceLimit(true);
param.setNeedImageAllianceLimit(true);
ShopVideoGetInfoForPublishResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoGetInfoForPublishRequest();
$param = new ShopVideoGetInfoForPublishParam();
$request->setParam($param);
$param->need_hotspot = true;
$param->need_activity = true;
$param->need_alliance_limit = true;
$param->need_image_alliance_limit = true;
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoGetInfoForPublishRequest()
param = request.getParams()
param.need_hotspot = true
param.need_activity = true
param.need_alliance_limit = true
param.need_image_alliance_limit = true
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_getInfoForPublish_request.New()
param := request.GetParams()
param.NeedHotspot = true
param.NeedActivity = true
param.NeedAllianceLimit = true
param.NeedImageAllianceLimit = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoGetInfoForPublishRequest();
var param = request.BuildParam();
param.NeedHotspot = true;
param.NeedActivity = true;
param.NeedAllianceLimit = true;
param.NeedImageAllianceLimit = true;
var response = request.Execute<ShopVideoGetInfoForPublishResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:628002001 | 参数错误 | 根据提示文案调整参数 |
| 50002 | 业务处理失败 | isv.business-failed:628002009 | 店铺未绑定人店一体账号 | 引导商家去抖店-内容-短视频创作tab绑定抖音账号 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
