# /buyin/externalServiceFeeOrderImport

> 中文说明：MCN机构商达合作订单同步至百应平台  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2896>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/externalServiceFeeOrderImport |
| 中文名称 | MCN机构商达合作订单同步至百应平台 |
| 文档目录 | 精选联盟API |
| Article ID | 2896 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/1/13 14:42:13 |
| 授权主体 | ["MCN机构"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

支持MCN机构商达合作订单同步至百应平台

## 权限包

- 精选联盟 / 机构订单（packageType=1）；适用应用类目：机构选品、机构管理、联盟机构自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.externalServiceFeeOrderImport | 调用的API接口名称 | - | - |
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
| 0 | external_order_id | external_order_id | true | 2 | 598923820930 | 外部订单ID | - | - |
| 0 | sub_status | sub_status | true | 1 | 3001 | 订单子状态。3001：待开播；3003：待补播；4001：待验收；7006：商家同意取消 | - | - |
| 0 | kol_account_id | kol_account_id | true | 2 | 3344123213 | 达人账号ID | - | - |
| 0 | kol_account_type | kol_account_type | true | 7 | 1 | 达人账号类型。 0：抖音号; 1: 百应ID | - | - |
| 0 | products | products | true | 3 | - | 合作商品列表，不能超过30个 | - | - |
| 1 | products.product_url | product_url | true | 2 | https://haohuo.jinritemai.com/ecommerce/trade/detail/index.html?id=3568771727260551014 | 商品链接 | - | - |
| 1 | products.live_price_min | live_price_min | true | 1 | 1000 | 约定直播最低价格，单位分 | - | - |
| 1 | products.live_price_max | live_price_max | true | 1 | 2000 | 约定直播最高价格，单位分 | - | - |
| 1 | products.min_stock | min_stock | true | 1 | 10 | 库存量 | - | - |
| 1 | products.custom_rate | custom_rate | true | 1 | 10 | 佣金率，1-100的整数 | - | - |
| 0 | order_type | order_type | true | 7 | 1 | 合作模式。 1：纯佣金；2：等比例；3：一口价 | - | - |
| 0 | contract | contract | true | 5 | - | 协议内容 | - | - |
| 1 | contract.live_type | live_type | true | 1 | 1 | 直播形式。 1：专场； 2：混场 | - | - |
| 1 | contract.contact_name | contact_name | false | 2 | 苏大强 | 联系人 | - | - |
| 1 | contract.contact_phone | contact_phone | false | 2 | 18500003399 | 联系人手机号 | - | - |
| 1 | contract.min_gmv | min_gmv | true | 1 | 10000 | 最低销售额(预期结算额)，单位分 | - | - |
| 1 | contract.order_fee | order_fee | false | 1 | 100 | 服务费，单位分 | - | - |
| 1 | contract.live_start_time | live_start_time | true | 1 | 1672819556 | 直播开始时间，秒级时间戳 | - | - |
| 1 | contract.live_end_time | live_end_time | true | 1 | 1672919556 | 直播结束时间，秒级时间戳 | - | - |
| 1 | contract.introduce_duration | introduce_duration | false | 1 | 1200 | 单品介绍时长，单位秒 | - | - |
| 1 | contract.max_deliver_time | max_deliver_time | false | 1 | 86000 | 最大发货时间，单位秒 | - | - |
| 1 | contract.assure_price | assure_price | false | 1 | 1 | 是否保价。 0:约定不保价； 1:约定保价 | - | - |
| 1 | contract.assure_price_channel | assure_price_channel | false | 1 | 1 | 是否接受渠道等价。 1:全渠道最低价，允许与其他渠道等价； 2:全渠道最低价，不可与其他渠道等价 | - | - |
| 1 | contract.assure_price_pred | assure_price_pred | false | 1 | 15 | 保价时间前X天 | - | - |
| 1 | contract.assure_price_postd | assure_price_postd | false | 1 | 15 | 保价时间后X天 | - | - |
| 1 | contract.ad_act | ad_act | false | 1 | 1 | 是否投放广告 0:约定不投放广告； 1:约定投放广告 | - | - |
| 1 | contract.ad_act_amount | ad_act_amount | false | 1 | 100 | 广告投放额，单位分 | - | - |
| 1 | contract.ad_act_role | ad_act_role | false | 1 | 1 | 广告投放方。1：商家； 2：达人 | - | - |
| 1 | contract.addon | addon | false | 2 | 补充条款 | 其它约定(补充说明，1000字以内) | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | success | - | 4 | true | 是否成功 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/externalServiceFeeOrderImport?app_key=your_appkey_here&method=buyin.externalServiceFeeOrderImport&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/externalServiceFeeOrderImport?app_key=your_appkey_here&method=buyin.externalServiceFeeOrderImport&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinExternalServiceFeeOrderImportRequest request = new BuyinExternalServiceFeeOrderImportRequest();
BuyinExternalServiceFeeOrderImportParam param = request.getParam();
param.setExternalOrderId("598923820930");
param.setSubStatus(3001L);
param.setKolAccountId("3344123213");
param.setKolAccountType(1);
param.setOrderType(1);
BuyinExternalServiceFeeOrderImportResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinExternalServiceFeeOrderImportRequest();
$param = new BuyinExternalServiceFeeOrderImportParam();
$request->setParam($param);
$param->external_order_id = "598923820930";
$param->sub_status = 3001;
$param->kol_account_id = "3344123213";
$param->kol_account_type = 1;
$param->order_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinExternalServiceFeeOrderImportRequest()
param = request.getParams()
param.external_order_id = "598923820930"
param.sub_status = 3001
param.kol_account_id = "3344123213"
param.kol_account_type = 1
param.order_type = 1
response = request.execute(accessToken)

```

### go

```go
request := buyin_externalServiceFeeOrderImport_request.New()
param := request.GetParams()
param.ExternalOrderId = "598923820930"
param.SubStatus = 3001
param.KolAccountId = "3344123213"
param.KolAccountType = 1
param.OrderType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinExternalServiceFeeOrderImportRequest();
var param = request.BuildParam();
param.ExternalOrderId = "598923820930";
param.SubStatus = 3001;
param.KolAccountId = "3344123213";
param.KolAccountType = 1;
param.OrderType = 1;
var response = request.Execute<BuyinExternalServiceFeeOrderImportResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4398 | 无效账号类型 | 无效账号类型 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:4497 | 外部订单ID错误 | 外部订单ID错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:4498 | 订单子状态错误 | 订单子状态错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:4499 | 商品数量不能超过30个 | 商品数量不能超过30个 |
| 40004 | 非法的参数 | isv.parameter-invalid:4500 | 佣金率需在1-100 | 佣金率需在1-100 |
| 40004 | 非法的参数 | isv.parameter-invalid:4501 | 约定直播价格需大于0且max需大于min | 约定直播价格需大于0且max需大于min |
| 40004 | 非法的参数 | isv.parameter-invalid:4502 | 直播形式错误 | 直播形式错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:4503 | 无效单品介绍时长 | 无效单品介绍时长 |
| 40004 | 非法的参数 | isv.parameter-invalid:4504 | 开播时间起止日期错误 | 开播时间起止日期错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:4505 | 无效发货时间 | 无效发货时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:4506 | 低价承诺参数错误 | 低价承诺参数错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:4507 | 广告投放参数错误 | 广告投放参数错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:4508 | 补充约定文案过长 | 补充约定文案过长 |
| 40004 | 非法的参数 | isv.parameter-invalid:4509 | 订单元数据不存在 | 订单元数据不存在 |
| 40004 | 非法的参数 | isv.parameter-invalid:4510 | 达人不属于机构 | 达人不属于机构 |
| 40004 | 非法的参数 | isv.parameter-invalid:4511 | 预期结算额需大于等于0 | 预期结算额需大于等于0 |
| 40004 | 非法的参数 | isv.parameter-invalid:4512 | 库存量需大于等于0 | 库存量需大于等于0 |
| 40004 | 非法的参数 | isv.parameter-invalid:4157 | 无效用户 | 无效用户 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
