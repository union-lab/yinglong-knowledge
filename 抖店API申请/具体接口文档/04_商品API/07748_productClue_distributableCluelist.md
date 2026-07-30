# /productClue/distributableCluelist

> 中文说明：批量获取可分发在架线索列表  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/7748>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /productClue/distributableCluelist |
| 中文名称 | 批量获取可分发在架线索列表 |
| 文档目录 | 商品API |
| Article ID | 7748 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/3/16 15:36:22 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20 |

## 使用说明

批量获取可分发在架线索列表

## 权限包

- 商品 / 商机选品（packageType=1）；适用应用类目：AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | productClue.distributableCluelist | 调用的API接口名称 | - | - |
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
| 0 | page_size | PageSize | true | 99 | 50 | 每页数量 | - | - |
| 0 | current | Current | true | 99 | 1 | 当前页 | - | - |
| 0 | query | Query | false | 5 | - | 查询条件 | - | - |
| 1 | query.content_types | content_types | false | 3 | [product_card,video] | 优势体裁类型，仅支持video/live/product_card | - | - |
| 1 | query.keyword | keyword | false | 2 | 古风连衣裙 | 关键字 | - | - |
| 1 | query.profit_ids | profit_ids | false | 3 | [1,2,3] | 权益ID，或关系 | - | - |
| 1 | query.price_lowest | price_lowest | false | 99 | 1200 | 最低价-分 | - | - |
| 1 | query.sort_type | sort_type | false | 2 | pay_amt_desc | 排序规则，仅支持pay_amt_desc/pay_amt_rate_desc/demand_supply_rate_desc | - | - |
| 1 | query.price_highest | price_highest | false | 99 | 2400 | 最高价-分 | - | - |
| 1 | query.online_time_type | online_time_type | false | 2 | 1d | 上新时间类型，仅支持1d/7d/30d | - | - |
| 1 | query.brand_ids | brand_ids | false | 3 | [1,2] | 品牌ID | - | - |
| 1 | query.category_id | category_id | false | 99 | 20023 | 类目ID | - | - |
| 1 | query.label_ids | label_ids | false | 3 | [1,2,3] | 标签ID，或关系 | - | - |
| 1 | query.clue_brand_exists | clue_brand_exist | false | 4 | false | 线索是否存在品牌 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | Data | - | 3 | - | 商机列表信息 | - | R1 |
| 1 | data.clue_id | clue_id | - | 99 | 1111 | 线索ID | - | - |
| 1 | data.name | name | - | 2 | 测试商机 | 线索名 | - | - |
| 1 | data.product_pic_url | product_pic_url | - | 2 | https://www.bejson.com/ | 商品白底图URL | - | - |
| 1 | data.third_cid | third_cid | - | 99 | 3 | 三级类目ID | - | - |
| 1 | data.third_name | third_name | - | 2 | 三级类目 | 三级类目名 | - | - |
| 1 | data.fourth_name | fourth_name | - | 2 | 四级类目 | 四级类目名 | - | - |
| 1 | data.category_id | category_id | - | 99 | 4 | 叶子类目ID | - | - |
| 1 | data.second_cid | second_cid | - | 99 | 2 | 二级类目ID | - | - |
| 1 | data.second_name | second_name | - | 2 | 二级类目 | 二级类目名 | - | - |
| 1 | data.fourth_cid | fourth_cid | - | 99 | 4 | 四级类目ID | - | - |
| 1 | data.category_name | category_name | - | 2 | 叶子类目 | 叶子类目名 | - | - |
| 1 | data.first_cid | first_cid | - | 99 | 1 | 一级类目ID | - | - |
| 1 | data.first_name | first_name | - | 2 | 一级类目 | 一级类目名 | - | - |
| 1 | data.pay_amt_rate | pay_amt_rate | - | 2 | 98.12% | 成交增速 | - | - |
| 1 | data.search_pv_cnt_range | search_pv_cnt_range | - | 2 | 1万-5万 | 搜索次数区间化 | - | - |
| 1 | data.profit_ids | profit_ids | - | 3 | [1,3] | 权益ID集合 | - | R1 |
| 0 | total | Total | - | 99 | 100 | 总数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/productClue/distributableCluelist?app_key=your_appkey_here&method=productClue.distributableCluelist&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/productClue/distributableCluelist?app_key=your_appkey_here&method=productClue.distributableCluelist&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductClueDistributableCluelistRequest request = new ProductClueDistributableCluelistRequest();
ProductClueDistributableCluelistParam param = request.getParam();
param.setPageSize(50L);
param.setCurrent(1L);
ProductClueDistributableCluelistResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductClueDistributableCluelistRequest();
$param = new ProductClueDistributableCluelistParam();
$request->setParam($param);
$param->page_size = 50;
$param->current = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductClueDistributableCluelistRequest()
param = request.getParams()
param.page_size = 50
param.current = 1
response = request.execute(accessToken)

```

### go

```go
request := productClue_distributableCluelist_request.New()
param := request.GetParams()
param.PageSize = 50
param.Current = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductClueDistributableCluelistRequest();
var param = request.BuildParam();
param.PageSize = 50;
param.Current = 1;
var response = request.Execute<ProductClueDistributableCluelistResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:503 | 503:分页获取数据超出限制 | 请联系管理员 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
