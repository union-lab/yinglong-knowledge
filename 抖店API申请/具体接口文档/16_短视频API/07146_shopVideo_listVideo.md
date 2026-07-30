# /shopVideo/listVideo

> 中文说明：查询已投稿短视频列表  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7146>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/listVideo |
| 中文名称 | 查询已投稿短视频列表 |
| 文档目录 | 短视频API |
| Article ID | 7146 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/12/12 12:36:47 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

查询已投稿短视频列表

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.listVideo | 调用的API接口名称 | - | - |
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
| 0 | create_time_start | video_create_time_start | false | 99 | 1733910301 | 视频上传开始时间戳，支持查询90天内视频 | - | - |
| 0 | page | page | true | 99 | 1 | 页码，>1 | - | - |
| 0 | size | page_size | true | 99 | 20 | 每页数量，1至50 | - | - |
| 0 | order_by_type | order_by_type | false | 99 | 0 | 排序类型：0-降序，1-升序 | - | - |
| 0 | item_id | id | false | 99 | 2344 | 抖音主端短视频ID | - | - |
| 0 | order_by_field | order_by_field | false | 99 | 1 | 排序字段，1-创建时间，2-累计成交量，3-播放量 | - | - |
| 0 | bind_product_id | bind_product_id | false | 99 | 22333 | 关联的商品id | - | - |
| 0 | bind_type_list | bind_type_list | false | 3 | 2 | 绑定类型：0-未绑定，1-挂车，2-种草 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | video_list | shop_videos | - | 3 | - | 视频列表 | - | R1 |
| 1 | video_list.shop_id | shop_id | - | 99 | 232323 | 店铺id | - | - |
| 1 | video_list.item_id | id | - | 99 | 232323 | 抖音主端视频id | - | - |
| 1 | video_list.user_id | user_id | - | 99 | 2323 | 抖音官方账号id | - | - |
| 1 | video_list.status | status | - | 99 | 0 | 视频状态：-1-删除，0-有效 | - | - |
| 1 | video_list.play_count | play_count | - | 99 | 100 | 播放数量 | - | - |
| 1 | video_list.alliance_product_list | alliance_product_list | - | 3 | [2233] | 挂车商品id列表 | - | R1 |
| 1 | video_list.create_time | create_time | - | 99 | 1733910689 | 创建时间 | - | - |
| 1 | video_list.modify_time | modify_time | - | 99 | 1733910689 | 更新时间 | - | - |
| 1 | video_list.order_amount | order_amount | - | 99 | 290 | 成交订单金额，单位分 | - | - |
| 1 | video_list.bind_type | bind_type | - | 99 | 2 | 绑定类型：0-未绑定，1-挂车，2-种草 | - | - |
| 1 | video_list.seeding_product_list | seeding_product_list | - | 3 | [333] | 种草商品id列表 | - | R1 |
| 0 | total | total | - | 99 | 99 | 总数 | - | - |
| 0 | current_page | current_page | - | 99 | 1 | 当前页码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/listVideo?app_key=your_appkey_here&method=shopVideo.listVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/listVideo?app_key=your_appkey_here&method=shopVideo.listVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoListVideoRequest request = new ShopVideoListVideoRequest();
ShopVideoListVideoParam param = request.getParam();
param.setCreateTimeStart(1733910301L);
param.setPage(1);
param.setSize(20);
param.setOrderByType(0);
param.setItemId(2344L);
param.setOrderByField(1);
param.setBindProductId(22333L);
param.setBindTypeList(2);
ShopVideoListVideoResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoListVideoRequest();
$param = new ShopVideoListVideoParam();
$request->setParam($param);
$param->create_time_start = 1733910301;
$param->page = 1;
$param->size = 20;
$param->order_by_type = 0;
$param->item_id = 2344;
$param->order_by_field = 1;
$param->bind_product_id = 22333;
$param->bind_type_list = 2;
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoListVideoRequest()
param = request.getParams()
param.create_time_start = 1733910301
param.page = 1
param.size = 20
param.order_by_type = 0
param.item_id = 2344
param.order_by_field = 1
param.bind_product_id = 22333
param.bind_type_list = 2
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_listVideo_request.New()
param := request.GetParams()
param.CreateTimeStart = 1733910301
param.Page = 1
param.Size = 20
param.OrderByType = 0
param.ItemId = 2344
param.OrderByField = 1
param.BindProductId = 22333
param.BindTypeList = 2
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoListVideoRequest();
var param = request.BuildParam();
param.CreateTimeStart = 1733910301;
param.Page = 1;
param.Size = 20;
param.OrderByType = 0;
param.ItemId = 2344;
param.OrderByField = 1;
param.BindProductId = 22333;
param.BindTypeList = 2;
var response = request.Execute<ShopVideoListVideoResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:628002001 | 参数错误 | 根据异常描述调整参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
