# /shopVideo/searchItem

> 中文说明：查询视频列表  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7486>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/searchItem |
| 中文名称 | 查询视频列表 |
| 文档目录 | 短视频API |
| Article ID | 7486 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/6/11 17:26:49 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

查询发布的视频列表

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.searchItem | 调用的API接口名称 | - | - |
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
| 0 | page | page | false | 99 | 1 | 页码 | - | - |
| 0 | bind_scene | bindScene | false | 99 | 1 | 绑定场景，1-只查挂车短视频，2-查询所有非挂车短视频，3-查询所有未绑定商品的短视频 | - | - |
| 0 | optional_param | optionalParam | false | 5 | - | 可选参数: 是否获取相关数据 | - | - |
| 1 | optional_param.need_stats | needStats | false | 4 | false | 是否需要短视频表现 | - | - |
| 1 | optional_param.need_high_quality_tag | needHighQualityTag | false | 4 | false | 是否需要优质标签 | - | - |
| 0 | page_size | pageSize | false | 99 | 10 | 每页数量，默认10 | - | - |
| 0 | user_id | userId | false | 2 | 121212 | 作者账号id，不传默认人店一体账号，支持渠道号 | - | - |
| 0 | item_id | itemId | false | 2 | 121221221 | 短视频id | - | - |
| 0 | product | product | false | 5 | - | 商品参数 | - | - |
| 1 | product.product_id | productId | false | 2 | 1212121212 | 商品id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 返回数据 | - | R1 |
| 1 | data.items | items | - | 3 | - | 视频列表 | - | R1 |
| 2 | data.items.shop_info | shopInfo | - | 5 | - | 店铺信息 | - | R1 |
| 3 | data.items.shop_info.shop_id | shopId | - | 2 | 4463798 | 店铺ID | - | - |
| 2 | data.items.item_info | itemInfo | - | 5 | - | 视频信息 | - | R1 |
| 3 | data.items.item_info.duration | duration | - | 2 | 11 | 时长 | - | - |
| 3 | data.items.item_info.status | status | - | 99 | 102 | item状态，22-用户删除，23-审核删除，102-公开，140-支持运营、用户并行审核流程，141-待审/自见，142-需要编辑终审，143-好友可见，144-审核自见 | - | - |
| 3 | data.items.item_info.reviewed | reviewed | - | 4 | true | 是否审核过 | - | - |
| 3 | data.items.item_info.publish_time | publishTime | - | 99 | 1748347421 | 发布时间 | - | - |
| 3 | data.items.item_info.caption | caption | - | 2 | 这是描述 | 描述 | - | - |
| 3 | data.items.item_info.item_id | itemId | - | 2 | 12121221 | 视频id | - | - |
| 3 | data.items.item_info.name | name | - | 2 | 这是标题 | 视频名称 | - | - |
| 3 | data.items.item_info.cover | cover | - | 2 | https://ttt | 封面 | - | - |
| 2 | data.items.bind_types | bindTypes | - | 3 | [1] | 绑定关系，0-未绑定，1-挂车，2-种草 | - | R1 |
| 2 | data.items.stats | stats | - | 5 | - | 短视频表现 | - | R1 |
| 3 | data.items.stats.order_amount | orderAmount | - | 99 | 1234 | 成交金额,单位分 | - | - |
| 3 | data.items.stats.play_count | playCount | - | 99 | 1223 | 播放量 | - | - |
| 3 | data.items.stats.share_count | shareCount | - | 99 | 1221 | 分享数 | - | - |
| 3 | data.items.stats.like_count | likeCount | - | 99 | 1212 | 点赞数 | - | - |
| 3 | data.items.stats.comment_count | commentCount | - | 99 | 12121 | 评论数 | - | - |
| 2 | data.items.products | products | - | 5 | - | 绑定商品信息。BindType为1、2、3时，取绑定商品 0时取推荐商品 | - | R1 |
| 3 | data.items.products.bind_products | bindProducts | - | 3 | - | 关联商品列表 | - | R1 |
| 4 | data.items.products.bind_products.products | products | - | 3 | - | 商品列表 | - | R1 |
| 5 | data.items.products.bind_products.products.id | id | - | 2 | 12121212 | 商品id | - | - |
| 5 | data.items.products.bind_products.products.name | name | - | 2 | 这是商品名称 | 产品名称 | - | - |
| 5 | data.items.products.bind_products.products.img | img | - | 2 | https://ttt | 封面url | - | - |
| 4 | data.items.products.bind_products.bind_type | bindType | - | 99 | 1 | 绑定关系,0-未绑定，1-挂车，2-种草，3-看后搜 | - | - |
| 3 | data.items.products.suggest_products | suggestProducts | - | 3 | - | 推荐商品列表 | - | R1 |
| 4 | data.items.products.suggest_products.id | id | - | 2 | 121212121 | 商品id | - | - |
| 4 | data.items.products.suggest_products.name | name | - | 2 | 这是产品名称 | 产品名称 | - | - |
| 4 | data.items.products.suggest_products.img | img | - | 2 | https://www. | 封面url | - | - |
| 2 | data.items.high_quality_tag | highQualityTag | - | 5 | - | 优质标签 | - | R1 |
| 3 | data.items.high_quality_tag.high_quality | highQuality | - | 4 | true | 是否优质 | - | - |
| 3 | data.items.high_quality_tag.boost_v_v | boostVV | - | 99 | 1212 | 流量扶持 | - | - |
| 2 | data.items.account_info | accountInfo | - | 5 | - | 账号信息 | - | R1 |
| 3 | data.items.account_info.user_id | userId | - | 2 | 1212121 | 账号id | - | - |
| 3 | data.items.account_info.name | name | - | 2 | 这是名称 | 账号名称 | - | - |
| 0 | total | total | - | 99 | 121212 | 总数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/searchItem?app_key=your_appkey_here&method=shopVideo.searchItem&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/searchItem?app_key=your_appkey_here&method=shopVideo.searchItem&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoSearchItemRequest request = new ShopVideoSearchItemRequest();
ShopVideoSearchItemParam param = request.getParam();
param.setPage(1);
param.setBindScene(1);
param.setPageSize(10);
param.setUserId("121212");
param.setItemId("121221221");
ShopVideoSearchItemResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoSearchItemRequest();
$param = new ShopVideoSearchItemParam();
$request->setParam($param);
$param->page = 1;
$param->bind_scene = 1;
$param->page_size = 10;
$param->user_id = "121212";
$param->item_id = "121221221";
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoSearchItemRequest()
param = request.getParams()
param.page = 1
param.bind_scene = 1
param.page_size = 10
param.user_id = "121212"
param.item_id = "121221221"
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_searchItem_request.New()
param := request.GetParams()
param.Page = 1
param.BindScene = 1
param.PageSize = 10
param.UserId = "121212"
param.ItemId = "121221221"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoSearchItemRequest();
var param = request.BuildParam();
param.Page = 1;
param.BindScene = 1;
param.PageSize = 10;
param.UserId = "121212";
param.ItemId = "121221221";
var response = request.Execute<ShopVideoSearchItemResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:1000001 | 1000001:当前商家暂未绑号 | 请商家绑号 |
| 50002 | 业务处理失败 | isv.business-failed:20000000 | 20000000:下游服务内部异常(code=20000004) | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:1000003 | 1000003:系统异常 | 系统异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
