# /alliance/colonelActivityCreateOrUpdate

> 中文说明：团长活动创建/编辑接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/966>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/colonelActivityCreateOrUpdate |
| 中文名称 | 团长活动创建/编辑接口 |
| 文档目录 | 精选联盟API |
| Article ID | 966 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2026/4/21 17:14:26 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20 |

## 使用说明

该接口用于团长活动的创建和编辑

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.colonelActivityCreateOrUpdate | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | false | 99 | 111 | 活动ID | - | - |
| 0 | application_limited | application_limited | true | 4 | true | 是否有报名门槛，默认无门槛 | - | - |
| 0 | is_new_shop | is_new_shop | false | 4 | true | 报名门槛-新手店铺，当 application_limited = true 时必填：false 可报名（默认），true 不可报名 | - | - |
| 0 | shop_type | shop_type | false | 2 | 0 | 报名门槛-店铺类型支持复选,当 application_limited = 1 时必填：0:普通店，1:专营店，2:旗舰店，3:专卖店，4:商场店，6:卖场型旗舰店，7：官方旗舰单，8：企业店，9:个体 | - | - |
| 0 | activity_name | activity_name | true | 2 | 活动1111 | 活动名称,不超过30个汉字 | - | - |
| 0 | activity_desc | activity_desc | true | 2 | 活动111111 | 活动描述,不超过200个汉字 | - | - |
| 0 | apply_start_time | apply_start_time | true | 2 | 2021-09-02 | 商品报名开始时间 | - | - |
| 0 | apply_end_time | apply_end_time | true | 2 | 2021-09-02 | 商品报名结束时间 | - | - |
| 0 | promote_start_time | promote_start_time | false | 2 | 2021-09-02 | 推广开始时间 | - | - |
| 0 | promote_end_time | promote_end_time | false | 2 | 2021-09-02 | 推广结束时间 | - | - |
| 0 | commission_rate | commission_rate | true | 2 | 10 | 最低商品佣金率X100，小于等于50。服务费率+佣金率不能高于90% | - | - |
| 0 | service_rate | service_rate | true | 2 | 10 | 团长服务费率X100，不超过40（服务费率不能超过40%） | - | - |
| 0 | wechat_id | wechat_id | false | 2 | fasdf | 微信号 | - | - |
| 0 | phone_num | phone_num | false | 2 | 111111 | 手机号 | - | - |
| 0 | estimated_single_sale | estimated_single_sale | true | 2 | 11111 | 预估单品销售额，单位元 | - | - |
| 0 | activity_type | activity_type | true | 99 | 1 | 活动类型（1 全部商家 2 指定商家） | - | - |
| 0 | specified_shop_ids | specified_shop_ids | false | 2 | 111 | 指定商家ID （入参为店铺的shop_id，当 application_scope =1 时必填） | - | - |
| 0 | online | online | true | 4 | true | 是否上线活动，默认不上线 | - | - |
| 0 | categories | categories | false | 2 | 类目一 | 招商类目:支持复选：门捷列夫行业类目，传数字，多个用英文逗号隔开。类目获取接口：/alliance/activityProductCategoryList | - | - |
| 0 | shop_score | shop_score | false | 99 | 4 | 报名门槛-店铺体验分（填整数，0表示不限） | - | - |
| 0 | activity_kind | activity_kind | false | 99 | 1 | 活动类型 0:专属招商 1:公开招商 | - | - |
| 0 | min_promotion_days | min_promotion_days | false | 99 | 0 | 最短推广周期，不传默认90天（目前只能支持以下天数：30，90，180，360） | - | - |
| 0 | threshold_cross_border | threshold_cross_border | false | 99 | 0 | 跨境店铺是否可以报名，不传表示可报名 | - | - |
| 0 | min_exclusion_duration | min_exclusion_duration | false | 99 | 1 | 团长活动侧设置的限时独家期限 0-6个月，不传默认为 0 | - | - |
| 0 | ad_commission_rate | ad_commission_rate | false | 2 | 10 | 最低双佣金投放期商品佣金率 | - | - |
| 0 | ad_service_rate | ad_service_rate | false | 2 | 10 | 最低双佣金投放期团长服务费率 | - | - |
| 0 | cos_limit_type | cos_limit_type | false | 99 | 1 | 佣金限制类型 1:不限制 2:仅双佣金 3:仅固定佣金 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | institution_id | institution_id | - | 99 | 111 | 机构ID | - | R1 |
| 0 | activity_id | activity_id | - | 99 | 111 | 活动ID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/colonelActivityCreateOrUpdate?app_key=your_appkey_here&method=alliance.colonelActivityCreateOrUpdate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/colonelActivityCreateOrUpdate?app_key=your_appkey_here&method=alliance.colonelActivityCreateOrUpdate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceColonelActivityCreateOrUpdateRequest request = new AllianceColonelActivityCreateOrUpdateRequest();
AllianceColonelActivityCreateOrUpdateParam param = request.getParam();
param.setActivityId(111L);
param.setApplicationLimited(true);
param.setIsNewShop(true);
param.setShopType("0");
param.setActivityName("活动1111");
param.setActivityDesc("活动111111");
param.setApplyStartTime("2021-09-02");
param.setApplyEndTime("2021-09-02");
param.setPromoteStartTime("2021-09-02");
param.setPromoteEndTime("2021-09-02");
param.setCommissionRate("10");
param.setServiceRate("10");
param.setWechatId("fasdf");
param.setPhoneNum("111111");
param.setEstimatedSingleSale("11111");
param.setActivityType(1L);
param.setSpecifiedShopIds("111");
param.setOnline(true);
param.setCategories("类目一");
param.setShopScore(4);
param.setActivityKind(1L);
param.setMinPromotionDays(0L);
param.setThresholdCrossBorder(0L);
param.setMinExclusionDuration(1L);
param.setAdCommissionRate("10");
param.setAdServiceRate("10");
param.setCosLimitType(1);
AllianceColonelActivityCreateOrUpdateResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceColonelActivityCreateOrUpdateRequest();
$param = new AllianceColonelActivityCreateOrUpdateParam();
$request->setParam($param);
$param->activity_id = 111;
$param->application_limited = true;
$param->is_new_shop = true;
$param->shop_type = "0";
$param->activity_name = "活动1111";
$param->activity_desc = "活动111111";
$param->apply_start_time = "2021-09-02";
$param->apply_end_time = "2021-09-02";
$param->promote_start_time = "2021-09-02";
$param->promote_end_time = "2021-09-02";
$param->commission_rate = "10";
$param->service_rate = "10";
$param->wechat_id = "fasdf";
$param->phone_num = "111111";
$param->estimated_single_sale = "11111";
$param->activity_type = 1;
$param->specified_shop_ids = "111";
$param->online = true;
$param->categories = "类目一";
$param->shop_score = 4;
$param->activity_kind = 1;
$param->min_promotion_days = 0;
$param->threshold_cross_border = 0;
$param->min_exclusion_duration = 1;
$param->ad_commission_rate = "10";
$param->ad_service_rate = "10";
$param->cos_limit_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceColonelActivityCreateOrUpdateRequest()
param = request.getParams()
param.activity_id = 111
param.application_limited = true
param.is_new_shop = true
param.shop_type = "0"
param.activity_name = "活动1111"
param.activity_desc = "活动111111"
param.apply_start_time = "2021-09-02"
param.apply_end_time = "2021-09-02"
param.promote_start_time = "2021-09-02"
param.promote_end_time = "2021-09-02"
param.commission_rate = "10"
param.service_rate = "10"
param.wechat_id = "fasdf"
param.phone_num = "111111"
param.estimated_single_sale = "11111"
param.activity_type = 1
param.specified_shop_ids = "111"
param.online = true
param.categories = "类目一"
param.shop_score = 4
param.activity_kind = 1
param.min_promotion_days = 0
param.threshold_cross_border = 0
param.min_exclusion_duration = 1
param.ad_commission_rate = "10"
param.ad_service_rate = "10"
param.cos_limit_type = 1
response = request.execute(accessToken)

```

### go

```go
request := alliance_colonelActivityCreateOrUpdate_request.New()
param := request.GetParams()
param.ActivityId = 111
param.ApplicationLimited = true
param.IsNewShop = true
param.ShopType = "0"
param.ActivityName = "活动1111"
param.ActivityDesc = "活动111111"
param.ApplyStartTime = "2021-09-02"
param.ApplyEndTime = "2021-09-02"
param.PromoteStartTime = "2021-09-02"
param.PromoteEndTime = "2021-09-02"
param.CommissionRate = "10"
param.ServiceRate = "10"
param.WechatId = "fasdf"
param.PhoneNum = "111111"
param.EstimatedSingleSale = "11111"
param.ActivityType = 1
param.SpecifiedShopIds = "111"
param.Online = true
param.Categories = "类目一"
param.ShopScore = 4
param.ActivityKind = 1
param.MinPromotionDays = 0
param.ThresholdCrossBorder = 0
param.MinExclusionDuration = 1
param.AdCommissionRate = "10"
param.AdServiceRate = "10"
param.CosLimitType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceColonelActivityCreateOrUpdateRequest();
var param = request.BuildParam();
param.ActivityId = 111;
param.ApplicationLimited = true;
param.IsNewShop = true;
param.ShopType = "0";
param.ActivityName = "活动1111";
param.ActivityDesc = "活动111111";
param.ApplyStartTime = "2021-09-02";
param.ApplyEndTime = "2021-09-02";
param.PromoteStartTime = "2021-09-02";
param.PromoteEndTime = "2021-09-02";
param.CommissionRate = "10";
param.ServiceRate = "10";
param.WechatId = "fasdf";
param.PhoneNum = "111111";
param.EstimatedSingleSale = "11111";
param.ActivityType = 1;
param.SpecifiedShopIds = "111";
param.Online = true;
param.Categories = "类目一";
param.ShopScore = 4;
param.ActivityKind = 1;
param.MinPromotionDays = 0;
param.ThresholdCrossBorder = 0;
param.MinExclusionDuration = 1;
param.AdCommissionRate = "10";
param.AdServiceRate = "10";
param.CosLimitType = 1;
var response = request.Execute<AllianceColonelActivityCreateOrUpdateResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4136 | 机构结算账户不存在或部分开通，需要全部开通 | 机构结算账户不存在或部分开通，需要全部开通 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:100 | 暂时不支持创建公开招商 | 暂时不支持创建公开招商 |
| 40004 | 非法的参数 | isv.parameter-invalid:4131 | 推广结束时间必须大于报名结束时间 | 推广结束时间必须大于报名结束时间 |
| 50002 | 业务处理失败 | isv.business-failed:10000 | 活动的推广开始时间不能早于今天 | 活动的推广开始时间不能早于今天 |
| 50002 | 业务处理失败 | isv.business-failed:110110 | 只能修改自己创建的团长活动 | 只能修改自己创建的团长活动，请检查 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:500 | 报名截止时间应不早于今天 | 报名截止时间应不早于今天 |
| 40004 | 非法的参数 | isv.parameter-invalid:71100 | 活动信息填写不规范，请重新填写 | 活动信息填写不规范，请重新填写 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
