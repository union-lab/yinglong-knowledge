# /shopVideo/publishVideo

> 中文说明：投稿短视频  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7145>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/publishVideo |
| 中文名称 | 投稿短视频 |
| 文档目录 | 短视频API |
| Article ID | 7145 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/1/13 15:49:30 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

将短视频投稿到抖音主端，只支持人店一体账号投稿

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.publishVideo | 调用的API接口名称 | - | - |
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
| 0 | anchor_list | anchors | false | 3 | - | 短视频锚点（关联商品） | - | - |
| 1 | anchor_list.type | type | false | 99 | 3 | 锚点类型：3-国内电商（挂车），7-电商种草 | - | - |
| 1 | anchor_list.product_ids | product_ids | false | 3 | [1] | 锚点关联商品id，当前只支持关联一个商品 | - | - |
| 0 | basic_info | basic_info | true | 5 | - | 短视频基础信息 | - | - |
| 1 | basic_info.media_id | media_id | true | 2 | v0d27cg10001csve2qfog65o283c1h0g | 视频id | - | - |
| 1 | basic_info.desc | desc | false | 2 | 描述 | 描述 | - | - |
| 1 | basic_info.title | item_title | false | 2 | 标题 | 标题 | - | - |
| 1 | basic_info.activity_list | activity_list | false | 3 | - | 活动列表 | - | - |
| 2 | basic_info.activity_list.activity_id | activity_id | false | 2 | 2222 | 活动id | - | - |
| 2 | basic_info.activity_list.activity_name | activity_name | false | 2 | 蛋仔派对互动玩法开播活动 | 活动名称 | - | - |
| 1 | basic_info.cover_image_uri | cover_image_uri | false | 2 | tos-cn-i-jm8ajry58r/eef3500af8084b3586c9c15e91c1e89f | 封面uri，通过sdk上传封面素材后获取。<br>上传方式见：https://bytedance.larkoffice.com/docx/doxcnyCpq3C9gik15T2dtKK0Tlc?source_type=message&from=message | - | - |
| 1 | basic_info.hotspot | hot_sentenc | false | 2 | 小米YU7定价预测 | 热点 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | item_id | id | - | 99 | 33322133 | 抖音主端短视频ID | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/publishVideo?app_key=your_appkey_here&method=shopVideo.publishVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/publishVideo?app_key=your_appkey_here&method=shopVideo.publishVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoPublishVideoRequest request = new ShopVideoPublishVideoRequest();
ShopVideoPublishVideoParam param = request.getParam();
ShopVideoPublishVideoResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoPublishVideoRequest();
$param = new ShopVideoPublishVideoParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoPublishVideoRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_publishVideo_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoPublishVideoRequest();
var param = request.BuildParam();
var response = request.Execute<ShopVideoPublishVideoResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:628002001 | 参数错误 | 根据返回文案调整参数 |
| 20000 | 系统错误 | isp.service-error:501 | 内部错误 | 请尝试重新调用接口 |
| 50002 | 业务处理失败 | isv.business-failed:628002009 | 店铺未绑定人店一体账号 | 引导商家去抖店-内容-短视频创作tab绑定抖音账号 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
