# /buyin/colonelMultiSettlementOrders

> 中文说明：团长分次结算订单  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2704>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/colonelMultiSettlementOrders |
| 中文名称 | 团长分次结算订单 |
| 文档目录 | 精选联盟API |
| Article ID | 2704 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2023/4/18 15:39:24 |
| 授权主体 | ["团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

查询团长分析结算订单，需要团长授权

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长订单（packageType=1）；适用应用类目：团长商品推广、团长管理、联盟团长自研
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.colonelMultiSettlementOrders | 调用的API接口名称 | - | - |
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
| 0 | size | size | false | 1 | 50 | 每页订单记录数目，最大100 | - | - |
| 0 | cursor | cursor | false | 2 | 0 | 下一页索引，默认传‘0’ | - | - |
| 0 | time_type | time_type | false | 2 | update | 查询时间类型。settle: 结算时间）; update：更新时间（默认) | - | - |
| 0 | start_time | start_time | false | 2 | 2022-10-01 15:04:05 | 开始时间 | - | - |
| 0 | end_time | end_time | false | 2 | 2022-10-31 15:04:05 | 结束时间， 开始与结束时间最大时间间隔为90天 | - | - |
| 0 | order_ids | order_ids | false | 2 | 4737996432465788974,4737996432465788973 | 订单号列表，','分隔，最多100个 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 返回结果 | - | R1 |
| 1 | data.orders | orders | - | 3 | - | 订单列表 | - | R1 |
| 2 | data.orders.ads_buyin_id | ads_buyin_id | - | 2 | 79989901209 | 独立抖客百应ID | - | - |
| 2 | data.orders.order_id | order_id | - | 2 | 4737996432465788974 | 订单号 | - | R1 |
| 2 | data.orders.product_id | product_id | - | 2 | 3450632721376902816 | 商品id | - | R1 |
| 2 | data.orders.product_name | product_name | - | 2 | 测试商品1 | 商品名称 | - | R1 |
| 2 | data.orders.author_buyin_id | author_buyin_id | - | 2 | 79989901209 | 达人百应ID(火山订单返回达人抖音百应ID，西瓜订单返回达人头条百应ID) | - | R1 |
| 2 | data.orders.author_account | author_account | - | 2 | 作者账号 | 作者账号昵称(抖音/火山作者) | - | R1 |
| 2 | data.orders.short_id | short_id | - | 2 | 1231233 | 作者火山/抖音号 | - | R1 |
| 2 | data.orders.shop_id | shop_id | - | 1 | 12230 | 店铺ID | - | R1 |
| 2 | data.orders.colonel_buyin_id | colonel_buyin_id | - | 2 | 78790909302931 | 团长百应ID | - | R1 |
| 2 | data.orders.colonel_institution_name | colonel_institution_name | - | 2 | 我是团长 | 团长名称 | - | R1 |
| 2 | data.orders.colonel_activity_id | colonel_activity_id | - | 1 | 302931 | 团长活动ID | - | R1 |
| 2 | data.orders.settle_colonel_commission | settle_colonel_commission | - | 1 | 1000 | 一级团长服务费，单位分 | - | R1 |
| 2 | data.orders.settle_colonel_tech_service_fee | settle_colonel_tech_service_fee | - | 1 | 100 | 一级团长平台技术服务费，单位分 | - | R1 |
| 2 | data.orders.second_colonel_activity_id | second_colonel_activity_id | - | 2 | 31929 | 二级团长活动id | - | R1 |
| 2 | data.orders.second_colonel_institution_name | second_colonel_institution_name | - | 2 | 我是团长2 | 二级团长名称 | - | R1 |
| 2 | data.orders.second_colonel_buyin_id | second_colonel_buyin_id | - | 2 | 7888989892133 | 二级团长百应ID | - | R1 |
| 2 | data.orders.settle_second_colonel_commission | settle_second_colonel_commission | - | 1 | 50 | 二级团长服务费，单位分 | - | R1 |
| 2 | data.orders.phase_id | phase_id | - | 1 | 3 | 第 phase_id 次结算 | - | R1 |
| 2 | data.orders.settle_time | settle_time | - | 2 | 2006-01-02 15:04:05 | 结算时间 | - | R1 |
| 2 | data.orders.update_time | update_time | - | 2 | 2006-01-02 15:04:05 | 记录更新时间 | - | R1 |
| 1 | data.cursor | cursor | - | 2 | 98777 | 下一页索引，最后一页返回空 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/colonelMultiSettlementOrders?app_key=your_appkey_here&method=buyin.colonelMultiSettlementOrders&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/colonelMultiSettlementOrders?app_key=your_appkey_here&method=buyin.colonelMultiSettlementOrders&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinColonelMultiSettlementOrdersRequest request = new BuyinColonelMultiSettlementOrdersRequest();
BuyinColonelMultiSettlementOrdersParam param = request.getParam();
param.setSize(50L);
param.setCursor("0");
param.setTimeType("update");
param.setStartTime("2022-10-01 15:04:05");
param.setEndTime("2022-10-31 15:04:05");
param.setOrderIds("4737996432465788974,4737996432465788973");
BuyinColonelMultiSettlementOrdersResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinColonelMultiSettlementOrdersRequest();
$param = new BuyinColonelMultiSettlementOrdersParam();
$request->setParam($param);
$param->size = 50;
$param->cursor = "0";
$param->time_type = "update";
$param->start_time = "2022-10-01 15:04:05";
$param->end_time = "2022-10-31 15:04:05";
$param->order_ids = "4737996432465788974,4737996432465788973";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinColonelMultiSettlementOrdersRequest()
param = request.getParams()
param.size = 50
param.cursor = "0"
param.time_type = "update"
param.start_time = "2022-10-01 15:04:05"
param.end_time = "2022-10-31 15:04:05"
param.order_ids = "4737996432465788974,4737996432465788973"
response = request.execute(accessToken)

```

### go

```go
request := buyin_colonelMultiSettlementOrders_request.New()
param := request.GetParams()
param.Size = 50
param.Cursor = "0"
param.TimeType = "update"
param.StartTime = "2022-10-01 15:04:05"
param.EndTime = "2022-10-31 15:04:05"
param.OrderIds = "4737996432465788974,4737996432465788973"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinColonelMultiSettlementOrdersRequest();
var param = request.BuildParam();
param.Size = 50;
param.Cursor = "0";
param.TimeType = "update";
param.StartTime = "2022-10-01 15:04:05";
param.EndTime = "2022-10-31 15:04:05";
param.OrderIds = "4737996432465788974,4737996432465788973";
var response = request.Execute<BuyinColonelMultiSettlementOrdersResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:1031 | 无效size | 无效size |
| 40004 | 非法的参数 | isv.parameter-invalid:282 | 无效订单查询时间类型 | 无效订单查询时间类型 |
| 40004 | 非法的参数 | isv.parameter-invalid:1032 | 无效order_ids | 无效order_ids |
| 40004 | 非法的参数 | isv.parameter-invalid:1033 | 请指定时间范围或订单号 | 请指定时间范围或订单号 |
| 40004 | 非法的参数 | isv.parameter-invalid:1034 | 无效开始时间 | 无效开始时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:1035 | 无效结束时间 | 无效结束时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:1036 | 无效时间区间（开始时间不能大于结束时间，并且不能小于t-90d） | 无效时间区间（开始时间不能大于结束时间，并且不能小于t-90d） |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:284 | 无效cursor | 无效cursor |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
