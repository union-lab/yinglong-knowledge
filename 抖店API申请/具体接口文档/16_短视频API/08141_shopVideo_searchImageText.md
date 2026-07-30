# /shopVideo/searchImageText

> 中文说明：搜索图文  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/8141>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/searchImageText |
| 中文名称 | 搜索图文 |
| 文档目录 | 短视频API |
| Article ID | 8141 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2026/3/13 11:33:46 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

搜索图文

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.searchImageText | 调用的API接口名称 | - | - |
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
| 0 | user_id | userId | false | 2 | 11 | 作者账号id | - | - |
| 0 | item_id | itemId | false | 2 | 1 | 图文id | - | - |
| 0 | page | page | false | 7 | 1 | 页码 | - | - |
| 0 | page_size | pageSize | false | 7 | 1 | 每页数量，默认10 | - | - |
| 0 | product | product | false | 5 | - | 商品参数（使用商品id查询时，必传bind_scene，否则商品过滤无效） | - | - |
| 1 | product.product_id | productId | false | 2 | 123443 | 商品id | - | - |
| 0 | bind_scene | bindScene | false | 7 | 4 | 商品绑定场景（传入productId时，该参数必传，否则商品过滤无效）<br> 1:只查挂车图文 2:查询所有非挂车图文 3:查询所有未绑定商品图文 4:全部 | - | - |
| 0 | status | status | false | 7 | 102 | 图文发布状态：22-用户删除，23-审核删除，102-公开，140-支持运营、用户并行审核流程，141-待审/自见，142-需要编辑终审，143-好友可见，144-审核自见 | - | - |
| 0 | optional_param | optionalParam | false | 5 | - | 可选查询参数 | - | - |
| 1 | optional_param.need_product_info | needProductInfo | false | 4 | true | 是否需要商品信息，挂车或看后搜 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 数据 | - | R1 |
| 1 | data.items | items | - | 3 | - | 图文列表 | - | R1 |
| 2 | data.items.account_info | accountInfo | - | 5 | - | 账号信息 | - | R1 |
| 3 | data.items.account_info.user_id | userId | - | 2 | 1211212 | 账号id | - | - |
| 3 | data.items.account_info.name | name | - | 2 | 账号名称 | 账号名称 | - | - |
| 3 | data.items.account_info.avatar_url | avatarUrl | - | 2 | http://xxxx | 账号头像 | - | - |
| 2 | data.items.shop_info | shopInfo | - | 5 | - | 店铺信息 | - | R1 |
| 3 | data.items.shop_info.shop_id | shopId | - | 2 | 1212211 | 店铺ID | - | - |
| 2 | data.items.item_info | itemInfo | - | 5 | - | 图文内容信息 | - | R1 |
| 3 | data.items.item_info.image_count | imageCount | - | 1 | 3 | 图片数量 | - | - |
| 3 | data.items.item_info.item_id | itemId | - | 2 | 563423563 | 图文id | - | - |
| 3 | data.items.item_info.name | name | - | 2 | 这是图文标题 | 图文标题 | - | - |
| 3 | data.items.item_info.cover | cover | - | 2 | https://xxx | 首图url | - | - |
| 3 | data.items.item_info.status | status | - | 7 | 102 | item状态，22-用户删除，23-审核删除，102-公开，140-支持运营、用户并行审核流程，141-待审/自见，142-需要编辑终审，143-好友可见，144-审核自见 | - | - |
| 3 | data.items.item_info.publish_time | publishTime | - | 1 | 12121212 | 发布时间 | - | - |
| 2 | data.items.products | products | - | 5 | - | 绑定商品信息。BindType为1、2、3时，取绑定商品 0时取推荐商品 | - | R1 |
| 3 | data.items.products.bind_products | bindProducts | - | 3 | - | 关联商品列表 | - | R1 |
| 4 | data.items.products.bind_products.products | products | - | 3 | - | 商品列表 | - | R1 |
| 5 | data.items.products.bind_products.products.id | id | - | 2 | 12121212 | 商品id | - | - |
| 5 | data.items.products.bind_products.products.name | name | - | 2 | 新款休闲复古运动鞋 | 商品名称 | - | - |
| 5 | data.items.products.bind_products.products.img | img | - | 2 | https://xxx | 封面url | - | - |
| 4 | data.items.products.bind_products.bind_type | bindType | - | 7 | 1 | 绑定关系，0-未绑定，1-挂车，3-看后搜 | - | - |
| 3 | data.items.products.suggest_products | suggestProducts | - | 3 | - | 推荐商品列表 | - | R1 |
| 4 | data.items.products.suggest_products.name | name | - | 2 | 新款休闲复古运动鞋 | 商品名称 | - | - |
| 4 | data.items.products.suggest_products.id | id | - | 2 | 1212121 | 商品id | - | - |
| 4 | data.items.products.suggest_products.img | img | - | 2 | https://xxxx | 封面url | - | - |
| 0 | total | total | - | 1 | 1 | 总数 | - | - |

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
ShopVideoSearchImageTextRequest request = new ShopVideoSearchImageTextRequest();
ShopVideoSearchImageTextParam param = request.getParam();
param.setUserId("11");
param.setItemId("1");
param.setPage(1);
param.setPageSize(1);
param.setBindScene(4);
param.setStatus(102);
ShopVideoSearchImageTextResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoSearchImageTextRequest();
$param = new ShopVideoSearchImageTextParam();
$request->setParam($param);
$param->user_id = "11";
$param->item_id = "1";
$param->page = 1;
$param->page_size = 1;
$param->bind_scene = 4;
$param->status = 102;
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoSearchImageTextRequest()
param = request.getParams()
param.user_id = "11"
param.item_id = "1"
param.page = 1
param.page_size = 1
param.bind_scene = 4
param.status = 102
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_searchImageText_request.New()
param := request.GetParams()
param.UserId = "11"
param.ItemId = "1"
param.Page = 1
param.PageSize = 1
param.BindScene = 4
param.Status = 102
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoSearchImageTextRequest();
var param = request.BuildParam();
param.UserId = "11";
param.ItemId = "1";
param.Page = 1;
param.PageSize = 1;
param.BindScene = 4;
param.Status = 102;
var response = request.Execute<ShopVideoSearchImageTextResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1000001 | 参数错误 | 检查输入参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
