# /cpaypromotion/queryProductCpayPromotionAndShopStatus

> 中文说明：查询商品管理可报名的月付优惠活动  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/7636>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /cpaypromotion/queryProductCpayPromotionAndShopStatus |
| 中文名称 | 查询商品管理可报名的月付优惠活动 |
| 文档目录 | 商品API |
| Article ID | 7636 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/7/25 14:17:33 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

查询商品管理可报名的月付优惠活动，接口会返回店铺准入使用状态，月付签约、月付营销签约状态和协议，推荐的免息活动等信息

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | cpaypromotion.queryProductCpayPromotionAndShopStatus | 调用的API接口名称 | - | - |
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
| 0 | product_id | ProductID | false | 2 | 商品id | 商品ID | - | - |
| 0 | product_categray | ProductCategray | false | 99 | 33692 | 商品类目 | - | - |
| 0 | product_price | ProductPrice | false | 99 | 1000 | 商品价格(单位，分) | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | shop_is_access | ShopIsAccess | - | 4 | true/false | 商家是否准入，如果为false，则不允许使用报名商品管理 | - | - |
| 0 | shop_status_response | ShopStatusResponse | - | 5 | - | 店铺签约情况 | - | R1 |
| 1 | shop_status_response.cpay_sign_status | CpaySignStatus | - | 99 | 0:未签约1:已签约 | Deprecated 月付签约状态 | - | - |
| 1 | shop_status_response.promotion_sign_status | PromotionSignStatus | - | 99 | 0:月付签约1:营销签约 | 营销签约状态 | - | - |
| 1 | shop_status_response.to_sign_contract_list | ToSignContractList | - | 3 | - | 待签约的协议列表 | - | R1 |
| 2 | shop_status_response.to_sign_contract_list.contract_type | ContractType | - | 99 | 0:月付协议1:营销协议 | 协议类型 | - | - |
| 2 | shop_status_response.to_sign_contract_list.contract_name | ContractName | - | 2 | 息费营销合作协议 | 合同名title | - | - |
| 2 | shop_status_response.to_sign_contract_list.contract_url | ContractUrl | - | 2 | https:xxx | 合同连接 url | - | - |
| 0 | product_register_rule_response | ProductRegisterRuleResponse | - | 5 | - | 商品管理报名商品限制规则 | - | R1 |
| 1 | product_register_rule_response.rule | Rule | - | 5 | - | 商品限制规则 | - | R1 |
| 2 | product_register_rule_response.rule.un_supported_category_i_ds | UnSupportedCategoryIDs | - | 3 | [33692] | 不支持的商品类目 | - | R1 |
| 2 | product_register_rule_response.rule.min_price | MinPrice | - | 99 | 1000 | 商品最低价格，单位分 | - | - |
| 0 | product_discount_and_promotion_activity_response | ProductDiscountAndPromotionActivityResponse | - | 5 | - | 招商活动报名 | - | R1 |
| 1 | product_discount_and_promotion_activity_response.discount_info | DiscountActivityDetailVo | - | 5 | - | 新模型优惠，如果已经报名，则不为空 | - | R1 |
| 2 | product_discount_and_promotion_activity_response.discount_info.promotion_activity_id | PromotionActivityId | - | 2 | IFAXXX | 商家活动ID | - | - |
| 2 | product_discount_and_promotion_activity_response.discount_info.discount_id | DiscountID | - | 2 | SDRXXX | 活动模板ID | - | - |
| 2 | product_discount_and_promotion_activity_response.discount_info.period_shared_proportion_config | PeriodSharedProportionConfig | - | 5 | - | 期次与费率配置 | - | R1 |
| 3 | product_discount_and_promotion_activity_response.discount_info.period_shared_proportion_config.period_shared_proportion_list | PeriodSharedProportionList | - | 3 | - | 已经报名的期次和费率 | - | R1 |
| 4 | product_discount_and_promotion_activity_response.discount_info.period_shared_proportion_config.period_shared_proportion_list.period | Period | - | 99 | 3 | 期次 | - | - |
| 4 | product_discount_and_promotion_activity_response.discount_info.period_shared_proportion_config.period_shared_proportion_list.shared_proportion | SharedProportion | - | 2 | 1.80 | 优惠后商家共担费率 | - | - |
| 1 | product_discount_and_promotion_activity_response.promotion_activity_info | PromotionActivityInfo | - | 5 | - | 新模型招商活动，如果需要重新报名，则需要依赖 | - | R1 |
| 2 | product_discount_and_promotion_activity_response.promotion_activity_info.promotion_activity_end_time | PromotionActivityEndTime | - | 99 | 1748755715 | 招商活动结束时间 | - | - |
| 2 | product_discount_and_promotion_activity_response.promotion_activity_info.support_period | SupportPeriod | - | 3 | - | 活动支持报名的期数优惠信息 | - | R1 |
| 3 | product_discount_and_promotion_activity_response.promotion_activity_info.support_period.period | Period | - | 2 | 3 | 期数 | - | - |
| 3 | product_discount_and_promotion_activity_response.promotion_activity_info.support_period.origin_ratio | OriginRatio | - | 2 | 4.80 | 原始费率 | - | - |
| 3 | product_discount_and_promotion_activity_response.promotion_activity_info.support_period.actual_ratio | ActualRatio | - | 2 | 1.60 | 实际费率 | - | - |
| 2 | product_discount_and_promotion_activity_response.promotion_activity_info.activity_id | ActivityId | - | 2 | IFAXXX | 招商活动id | - | - |
| 2 | product_discount_and_promotion_activity_response.promotion_activity_info.promotion_activity_start_time | PromotionActivityStartTime | - | 99 | 1748755715 | 招商活动开始时间 | - | - |
| 0 | biz_base_response | BizBaseResponse | - | 5 | - | 响应结果 | - | R1 |
| 1 | biz_base_response.can_retry | canretry | - | 4 | true:可以重试false: 不可以重试 | 标识失败情况下，是否应该重试 | - | - |
| 1 | biz_base_response.ret_code | RetCode | - | 2 | 0成功 | 响应code | - | - |
| 1 | biz_base_response.ret_msg | RetMsg | - | 2 | 错误信息 | 响应msg | - | - |
| 1 | biz_base_response.success | success | - | 4 | true:成功false: 失败 | 标识请求是否成功 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/cpaypromotion/queryProductCpayPromotionAndShopStatus?app_key=your_appkey_here&method=cpaypromotion.queryProductCpayPromotionAndShopStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/cpaypromotion/queryProductCpayPromotionAndShopStatus?app_key=your_appkey_here&method=cpaypromotion.queryProductCpayPromotionAndShopStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
CpaypromotionQueryProductCpayPromotionAndShopStatusRequest request = new CpaypromotionQueryProductCpayPromotionAndShopStatusRequest();
CpaypromotionQueryProductCpayPromotionAndShopStatusParam param = request.getParam();
param.setProductId("商品id");
param.setProductCategray(33692L);
param.setProductPrice(1000L);
CpaypromotionQueryProductCpayPromotionAndShopStatusResponse response = request.execute(accessToken);

```

### php

```php
$request = new CpaypromotionQueryProductCpayPromotionAndShopStatusRequest();
$param = new CpaypromotionQueryProductCpayPromotionAndShopStatusParam();
$request->setParam($param);
$param->product_id = "商品id";
$param->product_categray = 33692;
$param->product_price = 1000;
$response = $request->execute(accessToken);

```

### python

```python
request = CpaypromotionQueryProductCpayPromotionAndShopStatusRequest()
param = request.getParams()
param.product_id = "商品id"
param.product_categray = 33692
param.product_price = 1000
response = request.execute(accessToken)

```

### go

```go
request := cpaypromotion_queryProductCpayPromotionAndShopStatus_request.New()
param := request.GetParams()
param.ProductId = "商品id"
param.ProductCategray = 33692
param.ProductPrice = 1000
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new CpaypromotionQueryProductCpayPromotionAndShopStatusRequest();
var param = request.BuildParam();
param.ProductId = "商品id";
param.ProductCategray = 33692;
param.ProductPrice = 1000;
var response = request.Execute<CpaypromotionQueryProductCpayPromotionAndShopStatusResponse>(accessToken);

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

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
