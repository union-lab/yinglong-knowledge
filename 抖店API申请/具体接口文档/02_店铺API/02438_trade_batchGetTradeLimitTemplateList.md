# /trade/batchGetTradeLimitTemplateList

> 中文说明：批量查询限购模板  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2438>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /trade/batchGetTradeLimitTemplateList |
| 中文名称 | 批量查询限购模板 |
| 文档目录 | 店铺API |
| Article ID | 2438 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/6/12 12:00:51 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

批量查询限购模板

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 抖店超市 / 门店限售模板管理（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | trade.batchGetTradeLimitTemplateList | 调用的API接口名称 | - | - |
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
| 0 | trade_limit_template_id_list | TradeLimitTemplateIdList | true | 3 | 7130507373692584001 | 限购模板ID列表 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | trade_limit_template_list | TradeLimitTemplateList | - | 3 | - | 限购模板信息列表 | - | R1 |
| 1 | trade_limit_template_list.trade_limit_template_id | TradeLimitTemplateId | - | 99 | 7130507373692584000 | 限购模板ID | - | R1 |
| 1 | trade_limit_template_list.shop_id | ShopId | - | 99 | 9041 | 店铺ID | - | R1 |
| 1 | trade_limit_template_list.trade_limit_rule_list | TradeLimitRuleList | - | 3 | - | 规则列表 | - | R1 |
| 2 | trade_limit_template_list.trade_limit_rule_list.trade_limit_model | TradeLimitModel | - | 99 | 1 | 限购模型 1-重量，2-数量，3-地区，4-金额 | - | R1 |
| 2 | trade_limit_template_list.trade_limit_rule_list.trade_limit_subject | TradeLimitSubject | - | 99 | 1 | 限购维度1 // 端用户（比如uid=122，aid=1128）        2 // 用户组用户（比如uid=122，group=aweme） 3 // 设备 4 // 下单电话 5 // 收件电话 6 // 身份证号 7 // 支付账号 | - | R1 |
| 2 | trade_limit_template_list.trade_limit_rule_list.trade_limit_resource | TradeLimitResource | - | 99 | 1 | 限购资源类别1-抖店，2-门店，3-商品ID，4-sku,5-类目，6-活动，7-商品标 | - | R1 |
| 2 | trade_limit_template_list.trade_limit_rule_list.trade_limit_resource_object | TradeLimitResourceObject | - | 5 | - | 限购资源值 | - | R1 |
| 3 | trade_limit_template_list.trade_limit_rule_list.trade_limit_resource_object.trade_limit_resource_id_list | TradeLimitResourceIdList | - | 3 | ["1"] | 限购资源具体值 | - | R1 |
| 3 | trade_limit_template_list.trade_limit_rule_list.trade_limit_resource_object.product_category_list | ProductCategoryList | - | 3 | - | 限购类目信息 | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.trade_limit_resource_object.product_category_list.first_cid | FirstCid | - | 99 | 1 | 一级类目 | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.trade_limit_resource_object.product_category_list.second_cid | SecondCid | - | 99 | 2 | 二级类目 | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.trade_limit_resource_object.product_category_list.thrid_cid | ThridCid | - | 99 | 3 | 三级类目 | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.trade_limit_resource_object.product_category_list.fourth_cid | FourthCid | - | 99 | 4 | 四级类目 | - | R1 |
| 2 | trade_limit_template_list.trade_limit_rule_list.trade_limit_pattern | TradeLimitPattern | - | 5 | - | 限购范围 | - | R1 |
| 3 | trade_limit_template_list.trade_limit_rule_list.trade_limit_pattern.minimum | Minimum | - | 99 | 1 | 限购下限 | - | R1 |
| 3 | trade_limit_template_list.trade_limit_rule_list.trade_limit_pattern.maximum | Maximum | - | 99 | 5 | 限购上限 | - | R1 |
| 3 | trade_limit_template_list.trade_limit_rule_list.trade_limit_pattern.cumulative_max | CumulativeMax | - | 99 | 10 | 累计限购 | - | R1 |
| 2 | trade_limit_template_list.trade_limit_rule_list.time_period | TimePeriod | - | 5 | - | 限购时间 | - | R1 |
| 3 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_pattern | TimePeriodPattern | - | 99 | 1 | 限购时间类型 1固定起止时间 2滑动窗口 | - | R1 |
| 3 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_fixed | TimePeriodFixed | - | 5 | - | 限购时间段 | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_fixed.start_time | StartTime | - | 99 | 1660742928 | 开始时间戳 | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_fixed.end_time | EndTime | - | 99 | 1660745000 | 结束时间戳 | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_fixed.cyclic | Cyclic | - | 4 | false | 是否循环 | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_fixed.cyclic_option | CyclicOption | - | 5 | - | 循环参数 | - | R1 |
| 5 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_fixed.cyclic_option.cyclic_interval | CyclicInterval | - | 99 | 1 | 循环类别 | - | R1 |
| 5 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_fixed.cyclic_option.expire_time | ExpireTime | - | 99 | 100 | 过期时间 | - | R1 |
| 5 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_fixed.cyclic_option.frequency | Frequency | - | 99 | 1 | 每Frequency个CyclicUnit循环一次 | - | R1 |
| 5 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_fixed.cyclic_option.cyclic_unit | CyclicUnit | - | 99 | 1 | 循环单位 1日 2周 3月 4年 | - | R1 |
| 3 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_sliding_window | TimePeriodSlidingWindow | - | 5 | - | 时间滑动窗口 | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_sliding_window.window_size | WindowSize | - | 99 | 100 | 窗口大小，单位为S | - | R1 |
| 4 | trade_limit_template_list.trade_limit_rule_list.time_period.time_period_sliding_window.time_shift | TimeShift | - | 99 | 0 | 滑动窗口结束时间距离Now的偏移量 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/trade/batchGetTradeLimitTemplateList?app_key=your_appkey_here&method=trade.batchGetTradeLimitTemplateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/trade/batchGetTradeLimitTemplateList?app_key=your_appkey_here&method=trade.batchGetTradeLimitTemplateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
TradeBatchGetTradeLimitTemplateListRequest request = new TradeBatchGetTradeLimitTemplateListRequest();
TradeBatchGetTradeLimitTemplateListParam param = request.getParam();
param.setTradeLimitTemplateIdList(7130507373692584001);
TradeBatchGetTradeLimitTemplateListResponse response = request.execute(accessToken);

```

### php

```php
$request = new TradeBatchGetTradeLimitTemplateListRequest();
$param = new TradeBatchGetTradeLimitTemplateListParam();
$request->setParam($param);
$param->trade_limit_template_id_list = 7130507373692584001;
$response = $request->execute(accessToken);

```

### python

```python
request = TradeBatchGetTradeLimitTemplateListRequest()
param = request.getParams()
param.trade_limit_template_id_list = 7130507373692584001
response = request.execute(accessToken)

```

### go

```go
request := trade_batchGetTradeLimitTemplateList_request.New()
param := request.GetParams()
param.TradeLimitTemplateIdList = 7130507373692584001
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new TradeBatchGetTradeLimitTemplateListRequest();
var param = request.BuildParam();
param.TradeLimitTemplateIdList = 7130507373692584001;
var response = request.Execute<TradeBatchGetTradeLimitTemplateListResponse>(accessToken);

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
