# /buyin/originColonelApplyActivities

> 中文说明：团长报名二级团长活动  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1672>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/originColonelApplyActivities |
| 中文名称 | 团长报名二级团长活动 |
| 文档目录 | 精选联盟API |
| Article ID | 1672 |
| 文档版本 | V7.01 |
| 官方更新时间 | 2026/4/21 17:18:53 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

接口用于团长报名二级团长活动

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.originColonelApplyActivities | 调用的API接口名称 | - | - |
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
| 0 | phone_number | phone_number | true | 2 | 15671111111 | 联系电话 | - | - |
| 0 | products | products | true | 3 | - | 商品列表 | - | - |
| 1 | products.product_id | product_id | true | 99 | 123687541 | 商品ID | - | - |
| 1 | products.origin_activity_id | origin_activity_id | true | 99 | 54321 | 原始活动ID（托管商品传0） | - | - |
| 1 | products.promotion_end_time | promotion_end_time | false | 2 | 2022-01-10 | 商品推广结束时间 | - | - |
| 0 | service_ratio | service_ratio | false | 2 | 10.00 | 招商服务费率。 服务费率+佣金率小于90（必须为两位小数） | - | - |
| 0 | cos_type | cos_type | false | 99 | 1 | 佣金类型 0:固定佣金 1:双佣金 | - | - |
| 0 | ad_service_ratio | ad_service_ratio | false | 2 | 5.00 | 双佣金投放期服务费率（小数） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 20 | 操作的商品数量 | - | R1 |
| 0 | result | result | - | 3 | - | 结果 | - | R1 |
| 1 | result.product_id | product_id | - | 99 | 123123123123 | 商品ID | - | R1 |
| 1 | result.is_success | is_success | - | 4 | true | 操作结果是否成功 | - | R1 |
| 1 | result.error_code | error_code | - | 99 | 0 | 当前商品操作的错误码，成功为0 | - | R1 |
| 1 | result.error_msg | error_msg | - | 2 | success | 当前商品操作的错误原因，成功为success | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/originColonelApplyActivities?app_key=your_appkey_here&method=buyin.originColonelApplyActivities&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/originColonelApplyActivities?app_key=your_appkey_here&method=buyin.originColonelApplyActivities&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinOriginColonelApplyActivitiesRequest request = new BuyinOriginColonelApplyActivitiesRequest();
BuyinOriginColonelApplyActivitiesParam param = request.getParam();
param.setActivityId(54321L);
param.setPhoneNumber("15671111111");
param.setServiceRatio("10.00");
param.setCosType(1);
param.setAdServiceRatio("5.00");
BuyinOriginColonelApplyActivitiesResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinOriginColonelApplyActivitiesRequest();
$param = new BuyinOriginColonelApplyActivitiesParam();
$request->setParam($param);
$param->activity_id = 54321;
$param->phone_number = "15671111111";
$param->service_ratio = "10.00";
$param->cos_type = 1;
$param->ad_service_ratio = "5.00";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinOriginColonelApplyActivitiesRequest()
param = request.getParams()
param.activity_id = 54321
param.phone_number = "15671111111"
param.service_ratio = "10.00"
param.cos_type = 1
param.ad_service_ratio = "5.00"
response = request.execute(accessToken)

```

### go

```go
request := buyin_originColonelApplyActivities_request.New()
param := request.GetParams()
param.ActivityId = 54321
param.PhoneNumber = "15671111111"
param.ServiceRatio = "10.00"
param.CosType = 1
param.AdServiceRatio = "5.00"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinOriginColonelApplyActivitiesRequest();
var param = request.BuildParam();
param.ActivityId = 54321;
param.PhoneNumber = "15671111111";
param.ServiceRatio = "10.00";
param.CosType = 1;
param.AdServiceRatio = "5.00";
var response = request.Execute<BuyinOriginColonelApplyActivitiesResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:110110 | 业务处理失败，请查看具体错误信息 | 业务处理失败，请查看具体错误信息 |
| 50002 | 业务处理失败 | isv.business-failed:500 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:8192 | 小数服务费率不合法，必须为两位小数 | 小数服务费率不合法，必须为两位小数 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:4200 | 4200:账号状态异常，请检查账号状态 | 4200:账号状态异常，请检查账号状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
