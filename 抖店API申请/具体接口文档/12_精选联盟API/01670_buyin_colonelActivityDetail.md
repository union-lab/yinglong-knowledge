# /buyin/colonelActivityDetail

> 中文说明：获取团长活动详情  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1670>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/colonelActivityDetail |
| 中文名称 | 获取团长活动详情 |
| 文档目录 | 精选联盟API |
| Article ID | 1670 |
| 文档版本 | V6.01 |
| 官方更新时间 | 2026/4/21 17:11:34 |
| 授权主体 | ["团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 600 |

## 使用说明

接口用于团长查询指定团长活动的活动详情，支持查询自建团长活动和可参与报名的团长活动详情

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.colonelActivityDetail | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | true | 99 | 54321 | 活动ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | institution_id | partner_id | - | 99 | 794156847175 | 机构ID | - | R1 |
| 0 | activity_id | activity_id | - | 99 | 54321 | 活动ID | - | R1 |
| 0 | is_new_shop | is_new_shop | - | 4 | true | 报名门槛是否限制新手店铺 | - | R1 |
| 0 | shop_type | shop_type | - | 3 | 0 | 报名门槛。0：普通店；1：专营店；2：旗舰店；3：专卖店；4：商场店；5:专卖型旗舰店；6:官方旗舰店；7:企业店；8:个体店 | - | R1 |
| 0 | activity_name | activity_name | - | 2 | 一个活动 | 活动名称 | - | R1 |
| 0 | activity_desc | activity_desc | - | 2 | 一个活动 | 活动描述 | - | R1 |
| 0 | apply_start_time | apply_start_time | - | 2 | 2022-01-10 | 活动报名开始时间 | - | R1 |
| 0 | apply_end_time | apply_end_time | - | 2 | 2022-02-20 | 活动报名结束时间 | - | R1 |
| 0 | commission_rate | commission_rate | - | 2 | 500 | 活动要求的最低佣金率 | - | R1 |
| 0 | service_rate | service_rate | - | 2 | 1000 | 活动要求的最低服务费率 | - | R1 |
| 0 | wechat_id | wechat_id | - | 2 | 6UNGOWt5MkBIgEDQ1I31w== | 微信号（返回微信号密文，需通过 https://op.jinritemai.com/docs/api-docs/61/2829 解密） | - | R1 |
| 0 | phone_num | phone_num | - | 2 | 6UNGOWt5MkBIgEDQ1I31w== | 手机号（返回联系电话密文，需通过 https://op.jinritemai.com/docs/api-docs/61/2829 解密） | - | R1 |
| 0 | estimated_single_sale | estimated_single_sale | - | 2 | 1000 | 预估销售额 | - | R1 |
| 0 | activity_type | activity_type | - | 99 | 1 | 活动类型。1： 全部商家； 2： 指定商家 | - | R1 |
| 0 | specified_shop_ids | specified_shop_ids | - | 2 | 0 | 指定商家ID | - | R1 |
| 0 | categories | categories | - | 3 | 1 | 招商类目 | - | R1 |
| 0 | shop_score | shop_score | - | 99 | 0 | 报名门槛-店铺体验分选项。0表示不限 | - | R1 |
| 0 | min_promotion_days | min_promotion_days | - | 99 | 15 | 最短推广周期，0：不限；>0:具体天数；现在只有0、15、30、60、90 | - | R1 |
| 0 | threshold_cross_border | threshold_cross_border | - | 99 | 0 | 跨境店铺 可/不可 报名（0:跨境店铺可报名，1:跨境店铺不可报名） | - | R1 |
| 0 | has_threshold | has_threshold | - | 4 | true | 是否有报名门槛 | - | R1 |
| 0 | colonel_buyin_id | colonel_buyin_id | - | 99 | 1467231562381423 | 团长百应ID | - | R1 |
| 0 | months_of_protection | min_exclusion_duration | - | 99 | 1 | 团长活动设置的限时独家期限 0-6个月, 单位：月 | - | R1 |
| 0 | colonel_name | colonel_name | - | 2 | 一个团长 | 团长名称 | - | R1 |
| 0 | cos_limit_type | cos_limit_type | - | 99 | 1 | 佣金限制类型1:不限制 2:仅双佣金 3:仅固定佣金 | - | - |
| 0 | ad_commission_rate | ad_commission_rate | - | 2 | 1000 | 最低双佣金投放期商品佣金率 | - | - |
| 0 | ad_service_rate | ad_service_rate | - | 2 | 500 | 最低双佣金投放期服务费率 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/colonelActivityDetail?app_key=your_appkey_here&method=buyin.colonelActivityDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/colonelActivityDetail?app_key=your_appkey_here&method=buyin.colonelActivityDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinColonelActivityDetailRequest request = new BuyinColonelActivityDetailRequest();
BuyinColonelActivityDetailParam param = request.getParam();
param.setActivityId(54321L);
BuyinColonelActivityDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinColonelActivityDetailRequest();
$param = new BuyinColonelActivityDetailParam();
$request->setParam($param);
$param->activity_id = 54321;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinColonelActivityDetailRequest()
param = request.getParams()
param.activity_id = 54321
response = request.execute(accessToken)

```

### go

```go
request := buyin_colonelActivityDetail_request.New()
param := request.GetParams()
param.ActivityId = 54321
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinColonelActivityDetailRequest();
var param = request.BuildParam();
param.ActivityId = 54321;
var response = request.Execute<BuyinColonelActivityDetailResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:500 | 活动不存在 | 活动不存在 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
