# /promise/QueryBenefitTraction

> 中文说明：查询店铺维度利益点和库存推荐  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/8154>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /promise/QueryBenefitTraction |
| 中文名称 | 查询店铺维度利益点和库存推荐 |
| 文档目录 | 商品API |
| Article ID | 8154 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/3/25 20:41:53 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3000 |

## 使用说明

查询店铺维度利益点和库存推荐

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | promise.QueryBenefitTraction | 调用的API接口名称 | - | - |
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
| 0 | need_aggregation_benefit_by_shop | needAggregationBenefitByShop | false | 4 | true | true=店铺维度聚合利益点 | - | - |
| 0 | need_query_sales_volume_last14_days | needQuerySalesVolumeLast14Days | false | 4 | true | true=返回近 14 天预售订单量 | - | - |
| 0 | need_stock_increment_suggestion | needStockIncrementSuggestion | false | 4 | true | true=返回商品和 SKU 维度库存建议增量 | - | - |
| 0 | need_sort_by_product_recommendation | needSortByProductRecommendation | false | 4 | true | true=按商品库存建议值倒排 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | merchant_ship_rate48h | merchantShipRate48h | - | 9 | 0.49 | 商家 48h 发货占比 | - | - |
| 0 | traction_info_by_fulfillment_mode_map | tractionInfoByFulfillmentModeMap | - | 8 | - | key为发货模式。<br>enum FulfillmentMode {<br>    IN_STOCK_PRE_SALE     = 1,  // (新)现货+预售<br>    FULL_PAYMENT_PRE_SALE = 2  // 全款预售<br>    ALL=3 // [(新)现货+预售]+[全款预售]<br>} | - | R1 |
| 1 | traction_info_by_fulfillment_mode_map.shop_benefit_metrics | shopBenefitMetrics | - | 5 | - | 商品维度查询 or needAggregationBenefitByShop=false 时无此数据 | - | R1 |
| 2 | traction_info_by_fulfillment_mode_map.shop_benefit_metrics.expected_settlement_gmv_lift | expectedSettlementGmvLift | - | 9 | 0.49 | 预计结算 GMV 相对提升比例 | - | - |
| 2 | traction_info_by_fulfillment_mode_map.shop_benefit_metrics.sales_volume_last14_days | salesVolumeLast14Days | - | 99 | 200 | 近 14 天预售订单量 | - | - |
| 2 | traction_info_by_fulfillment_mode_map.shop_benefit_metrics.has_accurate_benefit | hasAccurateBenefit | - | 4 | true | 是否有定量利益点数据 | - | - |
| 2 | traction_info_by_fulfillment_mode_map.shop_benefit_metrics.expected_settlement_rate_lift | expectedSettlementRateLift | - | 9 | 0.49 | 预计结算率提升（如 0.05 = 提升 5pp） | - | - |
| 2 | traction_info_by_fulfillment_mode_map.shop_benefit_metrics.expected_exposure_pv_lift | expectedExposurePvLift | - | 9 | 0.49 | 预计曝光 PV 提升比例 | - | - |
| 2 | traction_info_by_fulfillment_mode_map.shop_benefit_metrics.expected_pre_shipment_refund_rate_decrease | expectedPreShipmentRefundRateDecrease | - | 9 | 0.49 | 预计发货前退款率降低比例 | - | - |
| 1 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list | productBenefitMetricsList | - | 3 | - | 商品维度利益点 | - | R1 |
| 2 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_id | productId | - | 99 | 3806477691788591225 | 商品 ID | - | - |
| 2 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics | productBenefitMetrics | - | 5 | - | 商品利益点+数据 | - | R1 |
| 3 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.has_accurate_benefit | hasAccurateBenefit | - | 4 | true | 是否有定量利益点数据 | - | - |
| 3 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.expected_exposure_pv_lift | expectedExposurePvLift | - | 9 | 0.51 | 预计曝光 PV 提升比例 | - | - |
| 3 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.expected_pre_shipment_refund_rate_decrease | expectedPreShipmentRefundRateDecrease | - | 9 | 0.51 | 预计发货前退款率降低比例 | - | - |
| 3 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.expected_settlement_gmv_lift | expectedSettlementGmvLift | - | 9 | 0.51 | 预计结算 GMV 相对提升比例 | - | - |
| 3 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.recommended_stock_increment | recommendedStockIncrement | - | 99 | 0.51 | 商品维度库存建议增量（件） | - | - |
| 3 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.sku_recommendations_map | skuRecommendationsMap | - | 8 | - | SKU 维度推荐 | - | R1 |
| 4 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.sku_recommendations_map.sku_id | skuId | - | 99 | 3643575678209282 | SKU ID | - | - |
| 4 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.sku_recommendations_map.recommended_stock_increment | recommendedStockIncrement | - | 99 | 20 | 库存建议增量（件数，正数=需补货,0代表无建议） | - | - |
| 3 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.product_id | productId | - | 99 | 3806477691788591225 | 商品 ID | - | - |
| 3 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.expected_settlement_rate_lift | expectedSettlementRateLift | - | 9 | 0.13 | 预计结算率提升（如 0.05 = 提升 5pp） | - | - |
| 3 | traction_info_by_fulfillment_mode_map.product_benefit_metrics_list.product_benefit_metrics.sales_volume_last14_days | salesVolumeLast14Days | - | 99 | 312 | 近 14 天预售订单量 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/promise/QueryBenefitTraction?app_key=your_appkey_here&method=promise.QueryBenefitTraction&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/promise/QueryBenefitTraction?app_key=your_appkey_here&method=promise.QueryBenefitTraction&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PromiseQueryBenefitTractionRequest request = new PromiseQueryBenefitTractionRequest();
PromiseQueryBenefitTractionParam param = request.getParam();
param.setNeedAggregationBenefitByShop(true);
param.setNeedQuerySalesVolumeLast14Days(true);
param.setNeedStockIncrementSuggestion(true);
param.setNeedSortByProductRecommendation(true);
PromiseQueryBenefitTractionResponse response = request.execute(accessToken);

```

### php

```php
$request = new PromiseQueryBenefitTractionRequest();
$param = new PromiseQueryBenefitTractionParam();
$request->setParam($param);
$param->need_aggregation_benefit_by_shop = true;
$param->need_query_sales_volume_last14_days = true;
$param->need_stock_increment_suggestion = true;
$param->need_sort_by_product_recommendation = true;
$response = $request->execute(accessToken);

```

### python

```python
request = PromiseQueryBenefitTractionRequest()
param = request.getParams()
param.need_aggregation_benefit_by_shop = true
param.need_query_sales_volume_last14_days = true
param.need_stock_increment_suggestion = true
param.need_sort_by_product_recommendation = true
response = request.execute(accessToken)

```

### go

```go
request := promise_QueryBenefitTraction_request.New()
param := request.GetParams()
param.NeedAggregationBenefitByShop = true
param.NeedQuerySalesVolumeLast14Days = true
param.NeedStockIncrementSuggestion = true
param.NeedSortByProductRecommendation = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PromiseQueryBenefitTractionRequest();
var param = request.BuildParam();
param.NeedAggregationBenefitByShop = true;
param.NeedQuerySalesVolumeLast14Days = true;
param.NeedStockIncrementSuggestion = true;
param.NeedSortByProductRecommendation = true;
var response = request.Execute<PromiseQueryBenefitTractionResponse>(accessToken);

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
| 60000 | 触发限流，请稍后重试 | isp.traffic-limited:1001001 | 下游强依赖全部限流失败 | 请稍等重试 |
| 20001 | 内部服务超时 | isp.service-timeout-error:1001002 | 下游强依赖全部超时失败 | 请稍等重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:1001003 | 缺少必选参数 | 请检查参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
