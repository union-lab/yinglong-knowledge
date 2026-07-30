# /shopVideo/getAfterWatchRelatedProducts

> 中文说明：获取搜后承接商品列表  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/8138>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/getAfterWatchRelatedProducts |
| 中文名称 | 获取搜后承接商品列表 |
| 文档目录 | 短视频API |
| Article ID | 8138 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/3/11 14:40:38 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

获取看搜后承接商品，配置后主推品可得流量激励

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.getAfterWatchRelatedProducts | 调用的API接口名称 | - | - |
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
| 0 | query | query_condition | false | 2 | 宠物秋冬带帽菱 | 商品ID或商品名称 | - | - |
| 0 | page_info | page_info | false | 5 | - | 分页信息 | - | - |
| 1 | page_info.page_size | page_size | false | 99 | 10 | 页大小 | - | - |
| 1 | page_info.page_no | page_no | false | 99 | 1 | 当前页码 | - | - |
| 1 | page_info.sort_field | sort_field | false | 2 | - | 排序字段 | - | - |
| 1 | page_info.is_asc | is_asc | false | 4 | - | 是否升序 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 返回结果 | - | R1 |
| 1 | data.product_list | product_list | - | 3 | - | 商品列表 | - | R1 |
| 2 | data.product_list.product_info | product_info | - | 5 | - | 商品信息 | - | R1 |
| 3 | data.product_list.product_info.sale_price | sale_price | - | 99 | 1000 | 商品价格，分 | - | - |
| 3 | data.product_list.product_info.product_id | product_id | - | 2 | 1212121 | 商品ID | - | - |
| 3 | data.product_list.product_info.product_image | product_image | - | 2 | https://xxx | 商品图片 | - | - |
| 3 | data.product_list.product_info.category_name_list | category_name_list | - | 3 | 女装 | 类目名称列表 | - | R1 |
| 3 | data.product_list.product_info.product_name | product_name | - | 2 | 宠物秋冬带帽菱形格卫 | 商品名称 | - | - |
| 3 | data.product_list.product_info.product_status | product_status | - | 99 | 0 | 商品状态，售卖中=0, 封禁=1, 下架=2, 被删除=3 | - | - |
| 3 | data.product_list.product_info.detail_h5_url | detail_h5_url | - | 2 | https://xxx | 商详H5跳转链接 | - | - |
| 3 | data.product_list.product_info.shop | shop | - | 5 | - | 店铺信息 | - | R1 |
| 4 | data.product_list.product_info.shop.shop_logo | shop_logo | - | 2 | https://xxx | 店铺头像 | - | - |
| 4 | data.product_list.product_info.shop.shop_id | shop_id | - | 2 | 121212 | 店铺ID | - | - |
| 4 | data.product_list.product_info.shop.shop_name | shop_name | - | 2 | 测试店铺 | 店铺名称 | - | - |
| 2 | data.product_list.stock | stock | - | 99 | 100 | 库存量 | - | - |
| 1 | data.total | total | - | 99 | 100 | 总量 | - | - |
| 0 | msg | msg | - | 2 | success | 错误信息 | - | - |
| 0 | code | st | - | 99 | 0 | 错误码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/getAfterWatchRelatedProducts?app_key=your_appkey_here&method=shopVideo.getAfterWatchRelatedProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/getAfterWatchRelatedProducts?app_key=your_appkey_here&method=shopVideo.getAfterWatchRelatedProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoGetAfterWatchRelatedProductsRequest request = new ShopVideoGetAfterWatchRelatedProductsRequest();
ShopVideoGetAfterWatchRelatedProductsParam param = request.getParam();
param.setQuery("宠物秋冬带帽菱");
ShopVideoGetAfterWatchRelatedProductsResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoGetAfterWatchRelatedProductsRequest();
$param = new ShopVideoGetAfterWatchRelatedProductsParam();
$request->setParam($param);
$param->query = "宠物秋冬带帽菱";
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoGetAfterWatchRelatedProductsRequest()
param = request.getParams()
param.query = "宠物秋冬带帽菱"
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_getAfterWatchRelatedProducts_request.New()
param := request.GetParams()
param.Query = "宠物秋冬带帽菱"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoGetAfterWatchRelatedProductsRequest();
var param = request.BuildParam();
param.Query = "宠物秋冬带帽菱";
var response = request.Execute<ShopVideoGetAfterWatchRelatedProductsResponse>(accessToken);

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
