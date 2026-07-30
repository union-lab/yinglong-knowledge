# /shop/prodOrderCntDiagnose

> 中文说明：商品维度订单量诊断  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/8371>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/prodOrderCntDiagnose |
| 中文名称 | 商品维度订单量诊断 |
| 文档目录 | 商品API |
| Article ID | 8371 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/7/3 20:53:24 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1 |

## 使用说明

使用xgboost对特定商品进行诊断

## 权限包

- 商品 / 商品流量效率优化（packageType=1）；适用应用类目：商品供应链、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.prodOrderCntDiagnose | 调用的API接口名称 | - | - |
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
| 0 | entity_list | entity_list | false | 3 | - | 实体信息，业务方需要诊断的实体列表，最多1个 | - | - |
| 1 | entity_list.entity_id | entity_id | false | 2 | 123456 | 实体id | - | - |
| 1 | entity_list.entity_type | entity_type | false | 99 | - | 实体类型，固定为4 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | st | st | - | 99 | 0 | 状态码，0: 成功 | - | - |
| 0 | msg | msg | - | 2 | success | 出错提示消息 | - | - |
| 0 | data | data | - | 3 | - | 实体诊断结果列表 | - | R1 |
| 1 | data.entity_id | entity_id | - | 99 | 3457624212251013171 | 实体ID | - | - |
| 1 | data.entity_type | entity_type | - | 99 | 4 | 实体类型，1是店铺，4是商品 | - | - |
| 1 | data.entity_problem_list | entity_problem_list | - | 3 | - | 问题 | - | R1 |
| 2 | data.entity_problem_list.problem_name | problem_name | - | 2 | XGBoost 订单量 | 问题名称，这个是固定返回示例值的 | - | - |
| 2 | data.entity_problem_list.problem_code | problem_code | - | 2 | xgboost_order_count | 问题Code，这个是固定返回示例值的 | - | - |
| 2 | data.entity_problem_list.diagnose_result | diagnose_result | - | 5 | - | 诊断结果 | - | R1 |
| 3 | data.entity_problem_list.diagnose_result.diagnose_index_map | diagnose_index_map | - | 8 | - | 诊断指标（如gmv、product_name） | - | R1 |
| 4 | data.entity_problem_list.diagnose_result.diagnose_index_map.index_name | index_name | - | 2 | gmv | 指标名称 | - | - |
| 4 | data.entity_problem_list.diagnose_result.diagnose_index_map.index_unit | index_unit | - | 99 | 0 | 指标单位， 0是str，1是数字，2是价格，3是比例，4是时间 | - | - |
| 4 | data.entity_problem_list.diagnose_result.diagnose_index_map.index_value | index_value | - | 2 | 8757.08元 | 指标值 | - | - |
| 3 | data.entity_problem_list.diagnose_result.total_impact_ratio | total_impact_ratio | - | 2 | 11.14% | 影响率（总提升概率变化率） | - | - |
| 3 | data.entity_problem_list.diagnose_result.improve_factors | improve_factors | - | 3 | - | 改进因子列表（去重） | - | R1 |
| 4 | data.entity_problem_list.diagnose_result.improve_factors.factor_name | factor_name | - | 2 | 商品物流时长 | 因子名称 | - | - |
| 4 | data.entity_problem_list.diagnose_result.improve_factors.factor_code | factor_code | - | 2 | ship_to_arrive_lte_14d_pay_to_arrive_lgt_dur_1d | 因子code | - | - |
| 3 | data.entity_problem_list.diagnose_result.suggest_list | suggest_list | - | 3 | - | 建议列表 | - | R1 |
| 4 | data.entity_problem_list.diagnose_result.suggest_list.backtest_accuracy | backtest_accuracy | - | 2 | 0.9 | 回测准确率 | - | - |
| 4 | data.entity_problem_list.diagnose_result.suggest_list.sample_coverage | sample_coverage | - | 2 | 100 | 样本覆盖量 | - | - |
| 4 | data.entity_problem_list.diagnose_result.suggest_list.diagnose_suggest | diagnose_suggest | - | 2 | 减少物流时常 | 诊断建议，不一定有 | - | - |
| 4 | data.entity_problem_list.diagnose_result.suggest_list.impact_value | impact_value | - | 2 | 76.15%->85.99% | 目标达成概率变化 | - | - |
| 4 | data.entity_problem_list.diagnose_result.suggest_list.impact_ratio | impact_ratio | - | 2 | 9.84% | 目标达成概率变化率 | - | - |
| 4 | data.entity_problem_list.diagnose_result.suggest_list.rule_code | rule_code | - | 2 | DiagnoseRule177668223744729170 | 规则code | - | - |
| 4 | data.entity_problem_list.diagnose_result.suggest_list.diagnose_target | diagnose_target | - | 5 | - | 子诊断目标，例如：商品转化率、商品流量 | - | R1 |
| 5 | data.entity_problem_list.diagnose_result.suggest_list.diagnose_target.target_name | target_name | - | 2 | 商品流量 | 优化目标 | - | - |
| 4 | data.entity_problem_list.diagnose_result.suggest_list.rule_detail | rule_detail | - | 2 | 商品物流时长<52.79小时\n重要属性填写数量>=2个\n支持运费险\n关联内容达人数量>=17个 | 规则详情 | - | - |
| 1 | data.action_map | action_map | - | 8 | 问题code到行动点的映射 | 行动建议，建议文案放行动里面 map[problemCode][]*Action | - | R1 |
| 2 | data.action_map.button_name | button_name | - | 2 | 物流诊断 | 按钮文案 | - | - |
| 2 | data.action_map.url | url | - | 2 | https://fxg.jinritemai.com | 跳转URL | - | - |
| 2 | data.action_map.hover_text | hover_text | - | 2 | 现在没有设置 | hover文案 | - | - |
| 2 | data.action_map.action_code | action_code | - | 2 | logistics_diagnosis | 行动点Code | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shop/prodOrderCntDiagnose?app_key=your_appkey_here&method=shop.prodOrderCntDiagnose&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shop/prodOrderCntDiagnose?app_key=your_appkey_here&method=shop.prodOrderCntDiagnose&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopProdOrderCntDiagnoseRequest request = new ShopProdOrderCntDiagnoseRequest();
ShopProdOrderCntDiagnoseParam param = request.getParam();
ShopProdOrderCntDiagnoseResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopProdOrderCntDiagnoseRequest();
$param = new ShopProdOrderCntDiagnoseParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = ShopProdOrderCntDiagnoseRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := shop_prodOrderCntDiagnose_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopProdOrderCntDiagnoseRequest();
var param = request.BuildParam();
var response = request.Execute<ShopProdOrderCntDiagnoseResponse>(accessToken);

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
