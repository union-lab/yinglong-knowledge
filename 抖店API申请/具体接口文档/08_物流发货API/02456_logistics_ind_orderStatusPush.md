# /logistics/ind/orderStatusPush

> 中文说明：订单状态回传  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2456>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/ind/orderStatusPush |
| 中文名称 | 订单状态回传 |
| 文档目录 | 物流发货API |
| Article ID | 2456 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2023/4/24 16:17:09 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

订单状态回传

## 权限包

- 抖店超市 / 抖超小时达-4l（packageType=1）
- 物流连接平台 / 抖超小时达物流平台（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.ind/orderStatusPush | 调用的API接口名称 | - | - |
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
| 0 | out_order_id | outOrderId | true | 2 | xx123456 | 承运商单据号 | - | - |
| 0 | transport_order_id | transportOrderId | true | 2 | DY123456 | 抖音单据号 | - | - |
| 0 | order_status | orderStatus | true | 7 | 1 | 订单状态(待接单＝1,配送员接单＝2,配送员到店＝3,配送员取货=4,配送员配送中=5,已取消＝6,订单逆向返回中=7, 订单逆向返回完成=8,骑手更换=9,订单妥投=10 | - | - |
| 0 | exception_status | exceptionStatus | false | 5 | - | 异常情况 | - | - |
| 1 | exception_status.status | status | true | 7 | 1 | 订单拒收=1,配送异常=2 | - | - |
| 1 | exception_status.reason | reason | true | 7 | 1001 | 配送异常feature：订单拒收=1,配送异常=2 配送异常feature： { 1001,商家出货慢, 1002,商家出错货, 1003,商家缺货, 2001,破损, 2002,丢失, 2003,骑手取错货, 2004,骑手无法送达 3001,小票码错误, 3002,商家地址错误, 3003,消费者地址错误, 3004, 订单重量偏差过大, 4001,消费者拒收, 4002,消费者电话未接通, 4003,消费者不在家, 4004,消费者线下联系修改地址, 5001,其他 } | - | - |
| 0 | estimate_sign_time | estimateSignTime | false | 1 | 1663294915 | 计划应妥投时间，时间戳 | - | - |
| 0 | estimate_fetch_time | estimateFetchTime | false | 1 | 1663294915 | 计划应取件时间 | - | - |
| 0 | rider | rider | false | 5 | - | 骑手信息 | - | - |
| 1 | rider.rider_code | riderId | false | 2 | 骑手id | 骑手id | - | - |
| 1 | rider.rider_name | riderName | false | 2 | 骑手name | 骑手name | - | - |
| 1 | rider.temperature | temperature | false | 9 | 骑手温度 | 骑手温度 | - | - |
| 1 | rider.vaccine | vaccine | false | 6 | 骑手疫苗接种情况 | 骑手疫苗情况  0=未接种,1=一针,2=2针,3=3针 | - | - |
| 1 | rider.covid_report | covidReport | false | 7 | 骑手健康码情况 | 骑手健康码情况 0 - 绿码且24h内核酸 1 - 绿码且48h内核酸 2 - 绿码且48h外核酸 3 - 黄码 4 - 红码 | - | - |
| 1 | rider.contact | contact | false | 5 | - | 骑手联系方式 | - | - |
| 2 | rider.contact.name | name | false | 2 | 张三 | 姓名 | - | - |
| 2 | rider.contact.mobile | mobile | false | 2 | 电话 | 电话 | - | - |
| 2 | rider.contact.tel | tel | false | 2 | 18294311234 | 手机号码 | - | - |
| 0 | location | location | false | 5 | - | 骑手位置信息 | - | - |
| 1 | location.longitude | longitude | true | 2 | 111.23 | 经度 | - | - |
| 1 | location.latitude | latitude | true | 2 | 111.32 | 维度 | - | - |
| 1 | location.standard | standard | true | 2 | GaoDe | 使用的地图 | - | - |
| 0 | update_time | updateTime | true | 1 | 1663294915 | 本次状态流更新时间 | - | - |
| 0 | logistics_out_order_id | logisticsOutOrderId | false | 2 | 承运商单据号，电子面单号、用作打印面单使用 | 承运商单据号，电子面单号、用作打印面单使用 | - | - |
| 0 | to_aoi_name | toAoiName | false | 2 | 接驳商圈名称，接驳模式下运力服务商返回的接驳商圈，需要在面单打印 | 接驳商圈名称，接驳模式下运力服务商返回的接驳商圈，需要在面单打印 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | return_code | returnCode | - | 2 | 0 | 错误码，0表示成功 | - | R1 |
| 0 | message | message | - | 2 | 数据插入失败 | 错误消息，失败时填写 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/addresSwitchConfig?app_key=your_appkey_here&method=order.addresSwitchConfig&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/addresSwitchConfig?app_key=your_appkey_here&method=order.addresSwitchConfig&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsIndOrderStatusPushRequest request = new LogisticsIndOrderStatusPushRequest();
LogisticsIndOrderStatusPushParam param = request.getParam();
param.setOutOrderId("xx123456");
param.setTransportOrderId("DY123456");
param.setOrderStatus(1);
param.setEstimateSignTime(1663294915L);
param.setEstimateFetchTime(1663294915L);
param.setUpdateTime(1663294915L);
param.setLogisticsOutOrderId("承运商单据号，电子面单号、用作打印面单使用");
param.setToAoiName("接驳商圈名称，接驳模式下运力服务商返回的接驳商圈，需要在面单打印");
LogisticsIndOrderStatusPushResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsIndOrderStatusPushRequest();
$param = new LogisticsIndOrderStatusPushParam();
$request->setParam($param);
$param->out_order_id = "xx123456";
$param->transport_order_id = "DY123456";
$param->order_status = 1;
$param->estimate_sign_time = 1663294915;
$param->estimate_fetch_time = 1663294915;
$param->update_time = 1663294915;
$param->logistics_out_order_id = "承运商单据号，电子面单号、用作打印面单使用";
$param->to_aoi_name = "接驳商圈名称，接驳模式下运力服务商返回的接驳商圈，需要在面单打印";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsIndOrderStatusPushRequest()
param = request.getParams()
param.out_order_id = "xx123456"
param.transport_order_id = "DY123456"
param.order_status = 1
param.estimate_sign_time = 1663294915
param.estimate_fetch_time = 1663294915
param.update_time = 1663294915
param.logistics_out_order_id = "承运商单据号，电子面单号、用作打印面单使用"
param.to_aoi_name = "接驳商圈名称，接驳模式下运力服务商返回的接驳商圈，需要在面单打印"
response = request.execute(accessToken)

```

### go

```go
request := logistics_ind_orderStatusPush_request.New()
param := request.GetParams()
param.OutOrderId = "xx123456"
param.TransportOrderId = "DY123456"
param.OrderStatus = 1
param.EstimateSignTime = 1663294915
param.EstimateFetchTime = 1663294915
param.UpdateTime = 1663294915
param.LogisticsOutOrderId = "承运商单据号，电子面单号、用作打印面单使用"
param.ToAoiName = "接驳商圈名称，接驳模式下运力服务商返回的接驳商圈，需要在面单打印"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsIndOrderStatusPushRequest();
var param = request.BuildParam();
param.OutOrderId = "xx123456";
param.TransportOrderId = "DY123456";
param.OrderStatus = 1;
param.EstimateSignTime = 1663294915;
param.EstimateFetchTime = 1663294915;
param.UpdateTime = 1663294915;
param.LogisticsOutOrderId = "承运商单据号，电子面单号、用作打印面单使用";
param.ToAoiName = "接驳商圈名称，接驳模式下运力服务商返回的接驳商圈，需要在面单打印";
var response = request.Execute<LogisticsIndOrderStatusPushResponse>(accessToken);

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

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
