# /trade/createTradeLimitTemplate

> 中文说明：创建限售规则模板  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2439>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /trade/createTradeLimitTemplate |
| 中文名称 | 创建限售规则模板 |
| 文档目录 | 店铺API |
| Article ID | 2439 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/6/12 12:00:29 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

创建限售规则模板

## 权限包

- 定向API / 定向权限（packageType=1）
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 抖店超市 / 门店限售模板管理（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 到家餐饮 / 配送信息（外卖）（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | trade.createTradeLimitTemplate | 调用的API接口名称 | - | - |
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
| 0 | store_id | StoreId | false | 99 | 90419 | 门店ID | - | - |
| 0 | trade_limit_rule_request_list | TradeLimitRuleRequestList | true | 3 | - | 限购参数 | - | - |
| 1 | trade_limit_rule_request_list.trade_limit_model | TradeLimitModel | true | 99 | 1 | 限购模型 1-重量，2-数量，3-地区，4-金额 | - | - |
| 1 | trade_limit_rule_request_list.trade_limit_resource | TradeLimitResource | true | 99 | 1 | 限购资源类别1-抖店，2-门店，3-商品ID，4-sku,5-类目，6-活动，7-商品标 | - | - |
| 1 | trade_limit_rule_request_list.trade_limit_resource_object | TradeLimitResourceObject | false | 5 | - | 限购资源值 | - | - |
| 2 | trade_limit_rule_request_list.trade_limit_resource_object.trade_limit_resource_id_list | TradeLimitResourceIdList | false | 3 | ["1"] | 限购资源值列表 | - | - |
| 1 | trade_limit_rule_request_list.trade_limit_pattern | TradeLimitPattern | true | 5 | - | 限购值，模型为重量则单位为毫克，模型为金额则单位为分 | - | - |
| 2 | trade_limit_rule_request_list.trade_limit_pattern.minimum | Minimum | true | 99 | 1 | 单次下限 | - | - |
| 2 | trade_limit_rule_request_list.trade_limit_pattern.maximum | Maximum | true | 99 | 5 | 单次上限 | - | - |
| 2 | trade_limit_rule_request_list.trade_limit_pattern.cumulative_max | CumulativeMax | true | 99 | 10 | 累计限购值 | - | - |
| 1 | trade_limit_rule_request_list.time_period | TimePeriod | false | 5 | - | 限购时间 | - | - |
| 2 | trade_limit_rule_request_list.time_period.time_period_pattern | TimePeriodPattern | false | 99 | 1 | 1 // 固定起止时间,比如：在2022/01/01-2022/12/31可购买一次,每个自然月可购买，2 // 滑动窗口,比如：过去90d内可购买一次 | - | - |
| 2 | trade_limit_rule_request_list.time_period.time_period_fixed | TimePeriodFixed | false | 5 | - | 限购配置 | - | - |
| 3 | trade_limit_rule_request_list.time_period.time_period_fixed.start_time | StartTime | false | 99 | 1655991571 | 限购开始时间 | - | - |
| 3 | trade_limit_rule_request_list.time_period.time_period_fixed.end_time | EndTime | false | 99 | 1655991571 | 限购结束时间 | - | - |
| 1 | trade_limit_rule_request_list.trade_limit_subject_list | TradeLimitSubjectList | true | 3 | [1] | 限购维度1 // 端用户（比如uid=122，aid=1128）        2 // 用户组用户（比如uid=122，group=aweme） 3 // 设备 4 // 下单电话 5 // 收件电话 6 // 身份证号 7 // 支付账号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | trade_limit_id | TradeLimitTemplateId | - | 99 | 1 | 限购模板ID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/trade/createTradeLimitTemplate?app_key=your_appkey_here&method=trade.createTradeLimitTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/trade/createTradeLimitTemplate?app_key=your_appkey_here&method=trade.createTradeLimitTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
TradeCreateTradeLimitTemplateRequest request = new TradeCreateTradeLimitTemplateRequest();
TradeCreateTradeLimitTemplateParam param = request.getParam();
param.setStoreId(90419L);
TradeCreateTradeLimitTemplateResponse response = request.execute(accessToken);

```

### php

```php
$request = new TradeCreateTradeLimitTemplateRequest();
$param = new TradeCreateTradeLimitTemplateParam();
$request->setParam($param);
$param->store_id = 90419;
$response = $request->execute(accessToken);

```

### python

```python
request = TradeCreateTradeLimitTemplateRequest()
param = request.getParams()
param.store_id = 90419
response = request.execute(accessToken)

```

### go

```go
request := trade_createTradeLimitTemplate_request.New()
param := request.GetParams()
param.StoreId = 90419
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new TradeCreateTradeLimitTemplateRequest();
var param = request.BuildParam();
param.StoreId = 90419;
var response = request.Execute<TradeCreateTradeLimitTemplateResponse>(accessToken);

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
