# /buyin/applyActivities

> 中文说明：商品团长活动提报接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/744>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/applyActivities |
| 中文名称 | 商品团长活动提报接口 |
| 文档目录 | 精选联盟API |
| Article ID | 744 |
| 文档版本 | V7.01 |
| 官方更新时间 | 2026/4/21 17:10:48 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

支持店铺授权将抖店商品申请提报到团长活动中。

## 权限包

- 精选联盟 / 精选联盟商品推广（packageType=1）；适用应用类目：联盟自研、撮合服务商、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.applyActivities | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | true | 99 | 1234234123 | 团长活动ID | - | - |
| 0 | service_rate | service_rate | false | 99 | 20 | 招商服务费率。 服务费率+佣金率小于90（废弃） | - | - |
| 0 | phone_number | phone_number | true | 2 | 12318726321 | 店铺联系电话 | - | - |
| 0 | products | products | true | 3 | - | 商品列表 | - | - |
| 1 | products.promotion_end_time | promotion_end_time | false | 2 | 2022-02-11 | 商品推广结束时间（不传默认为当前时间往后数90天） | - | - |
| 1 | products.gift_info | gift_info | false | 2 | 无赠品 | 赠品（15个字以内，填写可提供赠品详情） | - | - |
| 1 | products.product_ad_activity_ratio | product_ad_activity_ratio | false | 2 | 20.5 | 双佣金投放期佣金比例（小数）,这里传字符串是为了便于比较小数位数 | - | - |
| 1 | products.product_id | product_id | true | 99 | 12312313123 | 商品ID | - | - |
| 1 | products.commission_rate | commission_rate | false | 99 | 20 | 佣金比例，设置范围[1%,50%]不小于改团长活动设置佣金率（废弃） | - | - |
| 1 | products.promotion_stock | promotion_stock | false | 99 | 100 | 参与活动库存 | - | - |
| 1 | products.promotion_step | promotion_step | false | 2 | 满减 | 活动价实现方式（15个字以内，如满减、提供优惠券、拍立减、限时活动价） | - | - |
| 1 | products.product_activity_ratio | product_activity_ratio | false | 2 | 20.50 | 佣金比例，设置范围[0,80%]，并且不能不小于该团长活动设置佣金率（必须为两位小数） | - | - |
| 1 | products.months_of_protection | exclusive_duration | false | 99 | 1 | 开启独家保护的时长。单位：月；范围：[0,12]，0表示不开启 | - | - |
| 1 | products.activity_price | activity_price | true | 99 | 200 | 活动价（单位分） | - | - |
| 0 | service_ratio | service_ratio | false | 2 | 20.50 | 招商服务费率。 服务费率+佣金率小于90（必须为两位小数） | - | - |
| 0 | cos_type | cos_type | false | 99 | 1 | 佣金类型 0:固定佣金 1:双佣金 | - | - |
| 0 | ad_service_ratio | ad_service_ratio | false | 2 | 15.0 | 双佣金投放期服务费率（小数） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 20 | 操作的商品数量 | - | R1 |
| 0 | result | result | - | 3 | - | 结果 | - | R1 |
| 1 | result.product_id | product_id | - | 99 | 123123123123 | 商品ID | - | R1 |
| 1 | result.is_success | is_success | - | 4 | true | 操作结果。 true：成功；false：失败 | - | R1 |
| 1 | result.error_code | error_code | - | 99 | 0 | 当前商品操作的错误码，成功为0 | - | R1 |
| 1 | result.error_msg | error_msg | - | 2 | success | 当前商品操作的错误原因，成功为success | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/applyActivities?app_key=your_appkey_here&method=buyin.applyActivities&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/applyActivities?app_key=your_appkey_here&method=buyin.applyActivities&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinApplyActivitiesRequest request = new BuyinApplyActivitiesRequest();
BuyinApplyActivitiesParam param = request.getParam();
param.setActivityId(1234234123L);
param.setServiceRate(20L);
param.setPhoneNumber("12318726321");
param.setServiceRatio("20.50");
param.setCosType(1);
param.setAdServiceRatio("15.0");
BuyinApplyActivitiesResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinApplyActivitiesRequest();
$param = new BuyinApplyActivitiesParam();
$request->setParam($param);
$param->activity_id = 1234234123;
$param->service_rate = 20;
$param->phone_number = "12318726321";
$param->service_ratio = "20.50";
$param->cos_type = 1;
$param->ad_service_ratio = "15.0";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinApplyActivitiesRequest()
param = request.getParams()
param.activity_id = 1234234123
param.service_rate = 20
param.phone_number = "12318726321"
param.service_ratio = "20.50"
param.cos_type = 1
param.ad_service_ratio = "15.0"
response = request.execute(accessToken)

```

### go

```go
request := buyin_applyActivities_request.New()
param := request.GetParams()
param.ActivityId = 1234234123
param.ServiceRate = 20
param.PhoneNumber = "12318726321"
param.ServiceRatio = "20.50"
param.CosType = 1
param.AdServiceRatio = "15.0"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinApplyActivitiesRequest();
var param = request.BuildParam();
param.ActivityId = 1234234123;
param.ServiceRate = 20;
param.PhoneNumber = "12318726321";
param.ServiceRatio = "20.50";
param.CosType = 1;
param.AdServiceRatio = "15.0";
var response = request.Execute<BuyinApplyActivitiesResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:110110 | 活动报名时间已结束，不支持继续报名 | 活动报名时间已结束，不支持继续报名 |
| 50002 | 业务处理失败 | isv.business-failed:500 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:8192 | 小数服务费率不合法，必须为两位小数 | 小数服务费率不合法，必须为两位小数 |
| 50002 | 业务处理失败 | isv.business-failed:10001 | 请检查输入参数 | 请检查输入参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
