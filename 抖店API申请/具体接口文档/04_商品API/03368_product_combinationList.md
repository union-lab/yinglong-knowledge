# /product/combinationList

> 中文说明：批量查询某个创建者创建的搭配id  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/3368>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/combinationList |
| 中文名称 | 批量查询某个创建者创建的搭配id |
| 文档目录 | 商品API |
| Article ID | 3368 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/3/28 20:47:30 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 560 |

## 使用说明

批量查询某个创建者创建的搭配id

## 权限包

- 微应用 / 搭配购-微应用（packageType=1）；适用应用类目：创新应用大赛_微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.combinationList | 调用的API接口名称 | - | - |
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
| 0 | creator_id | creator_id | true | 1 | 12345 | 搭配创建者id，调用方传入，与创建者类型匹配的店铺id/达人id/客服账号id | - | - |
| 0 | creator_type | creator_type | true | 1 | 1 | 搭配创建者类型，1 店铺，2 达人，3 客服 | - | - |
| 0 | page | page | true | 1 | 1 | 分页数，从1开始 | - | - |
| 0 | size | size | true | 1 | 10 | 每页数据，最多20 | - | - |
| 0 | exclude_combination_ids | exclude_combination_ids | false | 3 | 1234567 | 过滤的搭配id | - | - |
| 0 | status_list | status_list | false | 3 | 1 | 搭配状态，只允许传固定值1（代表有效搭配） | - | - |
| 0 | product_id | product_id | false | 1 | 1234567 | 搭配关联的商品id | - | - |
| 0 | combination_type | combination_type | false | 7 | 1 | 搭配类型，根据创建者分为三种类型：1 卖家搭配类型（店铺创建，包含有主图和无主图），2 达人搭配类型（达人创建，均无主图）, 3 客服搭配（客服创建，均无主图） | - | - |
| 0 | combination_sub_type | combination_sub_type | false | 7 | 1 | 搭配子类型，0 默认搭配子类型，1 固定搭配子类型, 2 临时搭配子类型；<br>达人搭配和客服搭配只有默认搭配子类型；卖家搭配有固定搭配子类型（有主图）和临时搭配子类型（无主图）。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | combination_list | combination_list | - | 3 | - | 搭配id列表 | - | R1 |
| 1 | combination_list.combination_id | combination_id | - | 1 | 1234567 | 搭配id | - | - |
| 0 | total | total | - | 1 | 1 | 搭配总数量 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/combinationList?app_key=your_appkey_here&method=product.combinationList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/combinationList?app_key=your_appkey_here&method=product.combinationList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductCombinationListRequest request = new ProductCombinationListRequest();
ProductCombinationListParam param = request.getParam();
param.setCreatorId(12345L);
param.setCreatorType(1L);
param.setPage(1L);
param.setSize(10L);
param.setExcludeCombinationIds(1234567);
param.setStatusList(1);
param.setProductId(1234567L);
param.setCombinationType(1);
param.setCombinationSubType(1);
ProductCombinationListResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductCombinationListRequest();
$param = new ProductCombinationListParam();
$request->setParam($param);
$param->creator_id = 12345;
$param->creator_type = 1;
$param->page = 1;
$param->size = 10;
$param->exclude_combination_ids = 1234567;
$param->status_list = 1;
$param->product_id = 1234567;
$param->combination_type = 1;
$param->combination_sub_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductCombinationListRequest()
param = request.getParams()
param.creator_id = 12345
param.creator_type = 1
param.page = 1
param.size = 10
param.exclude_combination_ids = 1234567
param.status_list = 1
param.product_id = 1234567
param.combination_type = 1
param.combination_sub_type = 1
response = request.execute(accessToken)

```

### go

```go
request := product_combinationList_request.New()
param := request.GetParams()
param.CreatorId = 12345
param.CreatorType = 1
param.Page = 1
param.Size = 10
param.ExcludeCombinationIds = 1234567
param.StatusList = 1
param.ProductId = 1234567
param.CombinationType = 1
param.CombinationSubType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductCombinationListRequest();
var param = request.BuildParam();
param.CreatorId = 12345;
param.CreatorType = 1;
param.Page = 1;
param.Size = 10;
param.ExcludeCombinationIds = 1234567;
param.StatusList = 1;
param.ProductId = 1234567;
param.CombinationType = 1;
param.CombinationSubType = 1;
var response = request.Execute<ProductCombinationListResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:2022001 | 系统错误 | 联系负责人排查 |
| 40004 | 非法的参数 | isv.parameter-invalid:2022002 | 参数异常 | 检查参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
