# /shopVideo/listRelatableProduct

> 中文说明：查询短视频可关联商品列表  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7149>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shopVideo/listRelatableProduct |
| 中文名称 | 查询短视频可关联商品列表 |
| 文档目录 | 短视频API |
| Article ID | 7149 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/12/19 11:29:56 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

查询短视频可关联商品列表

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shopVideo.listRelatableProduct | 调用的API接口名称 | - | - |
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
| 0 | product_id_list | product_id_list | false | 3 | [1234567] | 商品id列表 | - | - |
| 0 | sell_num_start | sell_num_start | false | 99 | 10 | 销量左区间 | - | - |
| 0 | sell_num_end | sell_num_end | false | 99 | 100 | 销量右区间 | - | - |
| 0 | page | page | true | 99 | 1 | 页码 | - | - |
| 0 | page_size | page_size | true | 99 | 10 | 每页数量 | - | - |
| 0 | category_id_list | category_id_list | false | 3 | 34 | 类目id列表 | - | - |
| 0 | product_name | product_name | false | 2 | 衬衫 | 商品名称 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_list | product_list | - | 3 | - | 商品列表 | - | R1 |
| 1 | product_list.stock_num | stock_num | - | 99 | 3 | 库存数量 | - | - |
| 1 | product_list.market_price | market_price | - | 99 | 10000 | 原价，单位分 | - | - |
| 1 | product_list.img | img | - | 2 | https://p3-aio.ecombdimg.com/obj/ecom-shop-material/lyRChMMc_m_2edc6702f8657f0b60ff6c4e0c8cf0ac_sx_38948_www720-720 | 商品列表图片 | - | - |
| 1 | product_list.status | status | - | 99 | 0 | 商品状态，0-上架中，1-下架中，2-删除中 | - | - |
| 1 | product_list.draft_status | draft_status | - | 99 | 1 | 草稿审核状态，1-待提交，2-审核中，3-审核通过，4-审核被驳回 | - | - |
| 1 | product_list.check_status | check_status | - | 99 | 3 | 小店商品审核状态，1-待提交，2-审核中，3-审核通过，4-审核被驳回，5-被封禁 | - | - |
| 1 | product_list.product_id | product_id | - | 99 | 1234567 | 商品id | - | - |
| 1 | product_list.name | name | - | 2 | 衬衫 | 商品名称 | - | - |
| 0 | total | total | - | 99 | 100 | 总数 | - | - |
| 0 | page | page | - | 99 | 1 | 当前页 | - | - |
| 0 | page_size | page_size | - | 99 | 20 | 每页数量 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shopVideo/listRelatableProduct?app_key=your_appkey_here&method=shopVideo.listRelatableProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shopVideo/listRelatableProduct?app_key=your_appkey_here&method=shopVideo.listRelatableProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopVideoListRelatableProductRequest request = new ShopVideoListRelatableProductRequest();
ShopVideoListRelatableProductParam param = request.getParam();
param.setProductIdList([1234567]);
param.setSellNumStart(10L);
param.setSellNumEnd(100L);
param.setPage(1);
param.setPageSize(10);
param.setCategoryIdList(34);
param.setProductName("衬衫");
ShopVideoListRelatableProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopVideoListRelatableProductRequest();
$param = new ShopVideoListRelatableProductParam();
$request->setParam($param);
$param->product_id_list = [1234567];
$param->sell_num_start = 10;
$param->sell_num_end = 100;
$param->page = 1;
$param->page_size = 10;
$param->category_id_list = 34;
$param->product_name = "衬衫";
$response = $request->execute(accessToken);

```

### python

```python
request = ShopVideoListRelatableProductRequest()
param = request.getParams()
param.product_id_list = [1234567]
param.sell_num_start = 10
param.sell_num_end = 100
param.page = 1
param.page_size = 10
param.category_id_list = 34
param.product_name = "衬衫"
response = request.execute(accessToken)

```

### go

```go
request := shopVideo_listRelatableProduct_request.New()
param := request.GetParams()
param.ProductIdList = [1234567]
param.SellNumStart = 10
param.SellNumEnd = 100
param.Page = 1
param.PageSize = 10
param.CategoryIdList = 34
param.ProductName = "衬衫"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopVideoListRelatableProductRequest();
var param = request.BuildParam();
param.ProductIdList = [1234567];
param.SellNumStart = 10;
param.SellNumEnd = 100;
param.Page = 1;
param.PageSize = 10;
param.CategoryIdList = 34;
param.ProductName = "衬衫";
var response = request.Execute<ShopVideoListRelatableProductResponse>(accessToken);

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
| 10001 | 请求部分失败 | isv.business-part-failed:628004001 | 查询商品失败 | 稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:628002001 | 参数错误 | 根据提示文案调整请求参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
