# /buyin/queryShopAllianceProducts

> 中文说明：联盟商家-查询店铺联盟推广  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2408>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/queryShopAllianceProducts |
| 中文名称 | 联盟商家-查询店铺联盟推广 |
| 文档目录 | 精选联盟API |
| Article ID | 2408 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2023/12/14 11:59:02 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

查询店铺联盟推广，最多查询10000条记录

## 权限包

- 定向API / 定向权限（packageType=1）
- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理
- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.queryShopAllianceProducts | 调用的API接口名称 | - | - |
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
| 0 | page | page | true | 99 | 1 | 分页页数，从1开始 | - | - |
| 0 | size | size | true | 99 | 20 | 分页大小，最大20 | - | - |
| 0 | product_ids | product_ids | false | 3 | 35632345453243,34242532432 | 商品ID列表，用“,”分隔 | - | - |
| 0 | status | status | false | 99 | 2 | 商品状态。2：商品在架；3：商家关闭推广；4：商品下架；6：平台治理关闭；99：商家删除 | - | - |
| 0 | title | title | false | 2 | 测试商品的名称 | 商品名称 | - | - |
| 0 | in_stock | in_stock | false | 4 | true | 是否有库存 | - | - |
| 0 | check_status | check_status | false | 3 | 3 | 审核状态。 0：未审核；2：审核未通过；3：审核通过 | - | - |
| 0 | sort_by | sort_by | false | 2 | update_time | 排序字段。 update_time: 更新时间; cos_ratio: 佣金率 | - | - |
| 0 | sort_order | sort_order | false | 2 | Desc | 排序方式（Desc或者Asc）。Desc：降序；Asc：生序 | - | - |
| 0 | fields | fields | false | 3 | ["is_exclusive"] | 加载更多的字段，如 is_exclusive | - | - |
| 0 | launch | launch | - | 99 | 1 | 0或者不填：原联盟计划商品 1：查询新投放商品 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 200 | 总数，最大10000 | - | R1 |
| 0 | product_list | product_list | - | 3 | - | 商品列表 | - | R1 |
| 1 | product_list.sample_conf | sample_conf | - | 5 | - | 达人买样返款设置信息 | - | R1 |
| 2 | product_list.sample_conf.buy_volume_limit | buy_volume_limit | - | 99 | 5 | 达人带货结算订单量≥所设订单量，返还达人买样全款；如果不支持达人买样返款此字段无意义 | - | - |
| 2 | product_list.sample_conf.buy_style | buy_style | - | 99 | 1 | 达人买样返款配置；1：支持达人买样返款，2-不支持达人买样返款 | - | - |
| 1 | product_list.product_id | product_id | - | 99 | 34312324232145 | 商品ID | - | R1 |
| 1 | product_list.title | title | - | 2 | 测试商品的名称 | 商品名称 | - | R1 |
| 1 | product_list.cover | cover | - | 2 | https://sf1-ttcdn-tos.pstatp.com/img/temai/Fpt8fam5_q50.webp | 商品主图 | - | R1 |
| 1 | product_list.price | price | - | 99 | 100 | 商品售价（单位为分） | - | R1 |
| 1 | product_list.market_price | market_price | - | 99 | 100 | 市场价 (单位为分) | - | R1 |
| 1 | product_list.status | status | - | 99 | 2 | 商品状态，2：商品在架；3：商家关闭推广；4：商品下架；6：平台治理关闭；99：商家删除 | - | R1 |
| 1 | product_list.cos_ratio | cos_ratio | - | 9 | 50.00 | 普通佣金率，值乘以了100， 如50%返回50 | - | R1 |
| 1 | product_list.detail_url | detail_url | - | 2 | https://haohuo.jinritemai.com/views/product/item2?id=34312324232145 | 商品链接 | - | R1 |
| 1 | product_list.sales | sales | - | 99 | 0 | 销量（单位为分） | - | R1 |
| 1 | product_list.cos_fee | cos_fee | - | 99 | 50 | 佣金（单位为分） | - | R1 |
| 1 | product_list.update_time | update_time | - | 99 | 1660790303 | 更新时间戳 | - | R1 |
| 1 | product_list.imgs | imgs | - | 3 | ["https://p3-aio.ecombdimg.com/obj/temai/5f2e085982cbad84cadb30a100d42a09ww"] | 图片列表 | - | R1 |
| 1 | product_list.check_status | check_status | - | 99 | 3 | 审核状态。 0：未审核；2：审核未通过；3：审核通过 | - | R1 |
| 1 | product_list.create_time | create_time | - | 99 | 1650007266 | 创建时间戳 | - | R1 |
| 1 | product_list.is_exclusive | is_exclusive | - | 4 | false | 是否开启专属计划 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/queryShopAllianceProducts?app_key=your_appkey_here&method=buyin.queryShopAllianceProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/queryShopAllianceProducts?app_key=your_appkey_here&method=buyin.queryShopAllianceProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinQueryShopAllianceProductsRequest request = new BuyinQueryShopAllianceProductsRequest();
BuyinQueryShopAllianceProductsParam param = request.getParam();
param.setPage(1L);
param.setSize(20L);
param.setProductIds(35632345453243,34242532432);
param.setStatus(2L);
param.setTitle("测试商品的名称");
param.setInStock(true);
param.setCheckStatus(3);
param.setSortBy("update_time");
param.setSortOrder("Desc");
param.setFields(["is_exclusive"]);
param.setLaunch(1L);
BuyinQueryShopAllianceProductsResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinQueryShopAllianceProductsRequest();
$param = new BuyinQueryShopAllianceProductsParam();
$request->setParam($param);
$param->page = 1;
$param->size = 20;
$param->product_ids = 35632345453243,34242532432;
$param->status = 2;
$param->title = "测试商品的名称";
$param->in_stock = true;
$param->check_status = 3;
$param->sort_by = "update_time";
$param->sort_order = "Desc";
$param->fields = ["is_exclusive"];
$param->launch = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinQueryShopAllianceProductsRequest()
param = request.getParams()
param.page = 1
param.size = 20
param.product_ids = 35632345453243,34242532432
param.status = 2
param.title = "测试商品的名称"
param.in_stock = true
param.check_status = 3
param.sort_by = "update_time"
param.sort_order = "Desc"
param.fields = ["is_exclusive"]
param.launch = 1
response = request.execute(accessToken)

```

### go

```go
request := buyin_queryShopAllianceProducts_request.New()
param := request.GetParams()
param.Page = 1
param.Size = 20
param.ProductIds = 35632345453243,34242532432
param.Status = 2
param.Title = "测试商品的名称"
param.InStock = true
param.CheckStatus = 3
param.SortBy = "update_time"
param.SortOrder = "Desc"
param.Fields = ["is_exclusive"]
param.Launch = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinQueryShopAllianceProductsRequest();
var param = request.BuildParam();
param.Page = 1;
param.Size = 20;
param.ProductIds = 35632345453243,34242532432;
param.Status = 2;
param.Title = "测试商品的名称";
param.InStock = true;
param.CheckStatus = 3;
param.SortBy = "update_time";
param.SortOrder = "Desc";
param.Fields = ["is_exclusive"];
param.Launch = 1;
var response = request.Execute<BuyinQueryShopAllianceProductsResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1031 | 无效size | 无效分页大小 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
