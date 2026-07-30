# /logistics/getRecommendedAndDeliveryExpressByOrder

> 中文说明：查询订单维度快递可达及推荐服务  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2856>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/getRecommendedAndDeliveryExpressByOrder |
| 中文名称 | 查询订单维度快递可达及推荐服务 |
| 文档目录 | 物流发货API |
| Article ID | 2856 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/1/13 15:20:54 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

查询订单维度快递可达及推荐服务

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.getRecommendedAndDeliveryExpressByOrder | 调用的API接口名称 | - | - |
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
| 0 | sender_address | senderAddress | true | 5 | - | 发货地址 | - | - |
| 1 | sender_address.street_code | streetCode | false | 2 | 1 | 1 | - | - |
| 1 | sender_address.address_id | addressId | false | 99 | 1 | 1 | - | - |
| 1 | sender_address.detail_address | detailAddress | true | 2 | 123 | 详细地址，如果没有则传空字符串即可 | - | - |
| 1 | sender_address.province_name | provinceName | true | 2 | 北京市 | 省 | - | - |
| 1 | sender_address.district_name | districtName | true | 2 | 海淀区 | 区 | - | - |
| 1 | sender_address.country_code | countryCode | false | 2 | 1 | 1 | - | - |
| 1 | sender_address.city_code | cityCode | false | 2 | 1 | 1 | - | - |
| 1 | sender_address.district_code | districtCode | false | 2 | 1 | 1 | - | - |
| 1 | sender_address.zip_code | zipCode | false | 2 | 1 | 1 | - | - |
| 1 | sender_address.city_name | cityName | true | 2 | 北京市 | 市 | - | - |
| 1 | sender_address.street_name | streetName | false | 2 | 中关村街道 | 街道 | - | - |
| 1 | sender_address.province_code | provinceCode | false | 2 | 1 | 1 | - | - |
| 0 | order_info_list | orderInfoList | true | 3 | - | 订单信息列表 | - | - |
| 1 | order_info_list.product_type | productType | false | 2 | byte_pt | 产品类型，可不传 | - | - |
| 1 | order_info_list.order_id | orderId | true | 2 | 123 | 订单号 | - | - |
| 1 | order_info_list.express_list | expressList | false | 3 | ['zhongtong','yundan','shunfeng'] | 物流商集合，不传默认：yuantong、zhongtong、yunda、shunfeng、jd、jtexpress、shentong | - | - |
| 0 | order_channel | orderChannel | false | 2 | 1 | 订单平台来源编码，不传默认抖店 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 返回值 | - | R1 |
| 1 | data.order_privilege_info_list | orderPrivilegeInfoList | - | 3 | - | 订单权益列表 | - | R1 |
| 2 | data.order_privilege_info_list.reason | reason | - | 2 | 用户负反馈率高 | 订单打标原因 | - | - |
| 2 | data.order_privilege_info_list.label | label | - | 2 | 优先发货 | 订单标签描述 | - | - |
| 2 | data.order_privilege_info_list.code | code | - | 2 | priority_delivery | 订单标签code | - | - |
| 1 | data.order_id | orderId | - | 2 | 123 | 订单号 | - | - |
| 1 | data.express_info_list | expressInfoList | - | 3 | - | 推荐及可达物流商信息集合 | - | R1 |
| 2 | data.express_info_list.tail_Info | tailInfo | - | 5 | - | 超长单 | - | R1 |
| 3 | data.express_info_list.tail_Info.level_percent | levelPercent | - | 2 | 0.34 | 超长单占比超过百分之多少商家 | - | - |
| 3 | data.express_info_list.tail_Info.optimized_percent | optimizedPercent | - | 2 | 0.2 | 超长单占比优化百分比 | - | - |
| 3 | data.express_info_list.tail_Info.tail_rate | tailRate | - | 2 | 0.001 | 超长单占比 | - | - |
| 2 | data.express_info_list.ccr_Info | ccrInfo | - | 5 | - | 物流负向反馈率（狭义） | - | R1 |
| 3 | data.express_info_list.ccr_Info.level_percent | levelPercent | - | 2 | 0.2 | 物流负向反馈率（狭义）超过百分之多少商家 | - | - |
| 3 | data.express_info_list.ccr_Info.optimized_percent | optimizedPercent | - | 2 | 0.34 | 物流负向反馈率（狭义）优化百分比 | - | - |
| 3 | data.express_info_list.ccr_Info.ccr_rate | lgtNarrowFeedbackRate | - | 2 | 0.001 | 物流负向反馈率（狭义） | - | - |
| 2 | data.express_info_list.rank_route | rankRoute | - | 99 | 1 | 此线路上该物流商排名 | - | - |
| 2 | data.express_info_list.undeliverable_reason | unDeliverableReason | - | 2 | 服务不可达 | 是否可用（含不可达与线路机构异常） | - | - |
| 2 | data.express_info_list.express | express | - | 2 | zhongtong | 物流商编码 | - | - |
| 2 | data.express_info_list.is_deliverable | isDeliverable | - | 4 | true | 是否可达 | - | - |
| 2 | data.express_info_list.is_shop_eBill | isShopEBill | - | 4 | true | 是否订购电子面单 | - | - |
| 2 | data.express_info_list.is_recommended | isRecommended | - | 4 | true | 是否推荐 | - | - |
| 2 | data.express_info_list.collect_sign_info | collectSignInfo | - | 5 | - | 时长维度的推荐原因 | - | R1 |
| 3 | data.express_info_list.collect_sign_info.avg_cost_hours | avgCostHours | - | 2 | 60.10 | 揽签时长,单位小时 | - | - |
| 3 | data.express_info_list.collect_sign_info.level_percent | levelPercent | - | 2 | 23.86 | 该线路商超过其他物流公司23.86% | - | - |
| 3 | data.express_info_list.collect_sign_info.optimized_percent | optimizedPercent | - | 2 | 6.1 | 优化百分比，时长下降6.1% | - | - |
| 2 | data.express_info_list.recommend_reason | recommendReason | - | 2 | 推荐原因 | 推荐原因 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/getRecommendedAndDeliveryExpressByOrder?app_key=your_appkey_here&method=logistics.getRecommendedAndDeliveryExpressByOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/getRecommendedAndDeliveryExpressByOrder?app_key=your_appkey_here&method=logistics.getRecommendedAndDeliveryExpressByOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsGetRecommendedAndDeliveryExpressByOrderRequest request = new LogisticsGetRecommendedAndDeliveryExpressByOrderRequest();
LogisticsGetRecommendedAndDeliveryExpressByOrderParam param = request.getParam();
param.setOrderChannel("1");
LogisticsGetRecommendedAndDeliveryExpressByOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsGetRecommendedAndDeliveryExpressByOrderRequest();
$param = new LogisticsGetRecommendedAndDeliveryExpressByOrderParam();
$request->setParam($param);
$param->order_channel = "1";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsGetRecommendedAndDeliveryExpressByOrderRequest()
param = request.getParams()
param.order_channel = "1"
response = request.execute(accessToken)

```

### go

```go
request := logistics_getRecommendedAndDeliveryExpressByOrder_request.New()
param := request.GetParams()
param.OrderChannel = "1"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsGetRecommendedAndDeliveryExpressByOrderRequest();
var param = request.BuildParam();
param.OrderChannel = "1";
var response = request.Execute<LogisticsGetRecommendedAndDeliveryExpressByOrderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4006 | 参数错误 | 根据错误描述检查参数 |
| 20000 | 系统错误 | isp.service-error:4007 | 系统异常 | 一般重试可解决，若一直报错请联系oncall |
| 20000 | 系统错误 | isp.service-error:15000 | 查询订单信息失败 | 一般重试可解决，若一直报错请联系oncall |
| 50002 | 业务处理失败 | isv.business-failed:15002 | 订单信息不存在 | 检查传入订单号是否是抖店正确订单号 |
| 40004 | 非法的参数 | isv.parameter-invalid:100001 | 用户未开通该服务 | 抖店后台-物流服务-开通发货探查服务 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
