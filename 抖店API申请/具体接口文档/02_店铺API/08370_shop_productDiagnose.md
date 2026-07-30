# /shop/productDiagnose

> 中文说明：本店商品维度诊断  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/8370>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/productDiagnose |
| 中文名称 | 本店商品维度诊断 |
| 文档目录 | 店铺API |
| Article ID | 8370 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/6/29 14:46:33 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

针对本店的商品进行诊断，按照两个维度进行返回：
搜索因素维度和复购维度
无适合调用方debug的错误码

## 权限包

- 商品 / 商品流量效率优化（packageType=1）；适用应用类目：商品供应链、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.productDiagnose | 调用的API接口名称 | - | - |
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
| 0 | entity_list | entity_list | false | 3 | - | 实体信息，业务方需要诊断的实体列表，这里要传商品id | - | - |
| 1 | entity_list.entity_type | entity_type | false | 99 | - | 实体id类型 | - | - |
| 1 | entity_list.entity_id | entity_id | false | 2 | 123456 | 实体id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 实体诊断结果列表 | - | R1 |
| 1 | data.entity_problem_list | entity_problem_list | - | 3 | - | 问题 | - | R1 |
| 2 | data.entity_problem_list.problem_name | problem_name | - | 2 | 商品复购影响 | 问题名称 | - | - |
| 2 | data.entity_problem_list.problem_code | problem_code | - | 2 | product_resale_diagnose | 问题Code | - | - |
| 2 | data.entity_problem_list.problem_index_map | problem_index_map | - | 8 | - | 问题指标name、值...., key 为指标name, value 为指标值 | - | R1 |
| 3 | data.entity_problem_list.problem_index_map.problem_index_explain | problem_index_explain | - | 2 | 商品名称 | 指标解释，不一定有 | - | - |
| 3 | data.entity_problem_list.problem_index_map.index_name | index_name | - | 2 | prod_name | 指标名称 | - | - |
| 3 | data.entity_problem_list.problem_index_map.index_unit | index_unit | - | 99 | 1 | 指标单位 | - | - |
| 3 | data.entity_problem_list.problem_index_map.index_value | index_value | - | 2 | 【网易严选】车载太空舱车载香氛除臭除异味空气清新持久 | 指标值 | - | - |
| 1 | data.action_map | action_map | - | 8 | 用problem_code作为key，每个problem_code对应多个action | 行动建议，建议文案放行动里面 map[problemCode][]*Action | - | R1 |
| 2 | data.action_map.action_code | action_code | - | 2 | auto_deliver_tool | 行动点Code | - | - |
| 2 | data.action_map.button_name | button_name | - | 2 | 配置自动发货 | 按钮文案 | - | - |
| 2 | data.action_map.url | url | - | 2 | https://fxg.jinritemai.com | 跳转URL，没配就没有 | - | - |
| 2 | data.action_map.hover_text | hover_text | - | 2 | 自动发货功能对于已取号且未发货的订单，系统查询到取号运单号有物流揽收轨迹信息后自动发货，可开通自动发货功能提高发货效率 | hover文案，没配就没有 | - | - |
| 1 | data.entity_id | entity_id | - | 99 | 123456 | 商品ID | - | - |
| 1 | data.entity_type | entity_type | - | 99 | 4 | 实体类型，1是店铺，4是商品 | - | - |
| 0 | st | st | - | 99 | 0 | 状态码，0: 成功 | - | - |
| 0 | msg | msg | - | 2 | success | 出错提示消息 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shop/productDiagnose?app_key=your_appkey_here&method=shop.productDiagnose&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shop/productDiagnose?app_key=your_appkey_here&method=shop.productDiagnose&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopProductDiagnoseRequest request = new ShopProductDiagnoseRequest();
ShopProductDiagnoseParam param = request.getParam();
ShopProductDiagnoseResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopProductDiagnoseRequest();
$param = new ShopProductDiagnoseParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = ShopProductDiagnoseRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := shop_productDiagnose_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopProductDiagnoseRequest();
var param = request.BuildParam();
var response = request.Execute<ShopProductDiagnoseResponse>(accessToken);

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
