# /address/listStrategyBindProducts

> 中文说明：分页获取地址库策略绑定的商品  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/6922>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /address/listStrategyBindProducts |
| 中文名称 | 分页获取地址库策略绑定的商品 |
| 文档目录 | 售后退款API |
| Article ID | 6922 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/10/8 11:09:07 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

商家在地址库创建地址策略并绑定商品后，通过该接口可以分页获取地址库策略绑定的商品ID和名称。

## 权限包

- 售后 / 售后地址退货策略（packageType=1）；适用应用类目：售后管理、商家后台系统、订单管理、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | address.listStrategyBindProducts | 调用的API接口名称 | - | - |
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
| 0 | strategy_id | StrategyId | false | 2 | AFS7418493389946110223 | 策略id，必传，多地址策略对应的ID. | - | - |
| 0 | page | Page | false | 99 | 1 | 页码,从1开始， | - | - |
| 0 | page_size | PageSize | false | 99 | 20 | 每页数目,最大100。地址策略目前最多支持拉取1w条记录，翻页数量超过1w会被系统拦截。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 100 | 绑定商品总数 | - | - |
| 0 | page | Page | - | 99 | 1 | 当前页码; | - | - |
| 0 | page_size | PageSize | - | 99 | 20 | 每页数量; | - | - |
| 0 | product_list | ProductList | - | 3 | - | 绑定商品列表; | - | R1 |
| 1 | product_list.product_id | ProductId | - | 2 | 3709228738131656945 | 商品id | - | - |
| 1 | product_list.product_name | ProductName | - | 2 | 时尚短袖T恤黑白两色背面艺术图案上衣夏季半袖小众宽松印花 | 商品名称 | - | - |
| 1 | product_list.image | Image | - | 2 | https://p3-aio.ecombdimg.com/obj/ecom-shop-material/bMLccs_m_3313dab415e12933e72fd231f4b71515_sx_1750121_www1200-1200 | 商品图片 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/address/listStrategyBindProducts?app_key=your_appkey_here&method=address.listStrategyBindProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/address/listStrategyBindProducts?app_key=your_appkey_here&method=address.listStrategyBindProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AddressListStrategyBindProductsRequest request = new AddressListStrategyBindProductsRequest();
AddressListStrategyBindProductsParam param = request.getParam();
param.setStrategyId("AFS7418493389946110223");
param.setPage(1L);
param.setPageSize(20L);
AddressListStrategyBindProductsResponse response = request.execute(accessToken);

```

### php

```php
$request = new AddressListStrategyBindProductsRequest();
$param = new AddressListStrategyBindProductsParam();
$request->setParam($param);
$param->strategy_id = "AFS7418493389946110223";
$param->page = 1;
$param->page_size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = AddressListStrategyBindProductsRequest()
param = request.getParams()
param.strategy_id = "AFS7418493389946110223"
param.page = 1
param.page_size = 20
response = request.execute(accessToken)

```

### go

```go
request := address_listStrategyBindProducts_request.New()
param := request.GetParams()
param.StrategyId = "AFS7418493389946110223"
param.Page = 1
param.PageSize = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AddressListStrategyBindProductsRequest();
var param = request.BuildParam();
param.StrategyId = "AFS7418493389946110223";
param.Page = 1;
param.PageSize = 20;
var response = request.Execute<AddressListStrategyBindProductsResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4000 | 参数错误，请稍后重试 | 根据返回的错误信息，自行调整请求参数入参后重试。如果多次重试后无法解决问题，可以在开放平台提工单请求抖店同学协助。 |
| 40004 | 非法的参数 | isv.parameter-invalid:100012 | 当前最多支持拉取10000条数据 | 调整求参数中的page或者page_size，将二者乘积总量降低到10000以内。 |
| 50002 | 业务处理失败 | isv.business-failed:5001 | 系统繁忙，请稍后重试 | 重试，如果多次重试后无法解决问题，可以在开放平台提工单寻求抖店工作人员帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:3000 | 系统繁忙，请稍后重试 | 重试，如果多次重试后无法解决问题，可以在开放平台提工单寻求抖店工作人员帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:3001 | 系统繁忙，请稍后重试 | 重试，如果多次重试后无法解决问题，可以在开放平台提工单寻求抖店工作人员帮助。 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
