# /instantShopping/GetCallRecord

> 中文说明：查询骑手-用户通话记录  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/7155>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /instantShopping/GetCallRecord |
| 中文名称 | 查询骑手-用户通话记录 |
| 文档目录 | 物流发货API |
| Article ID | 7155 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/12/17 11:10:13 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1500 |

## 使用说明

查询骑手-用户通话记录

## 权限包

- 即时零售仓配 / 即时零售仓配（packageType=1）；适用应用类目：即时零售仓储管理、即配配送商-聚合发单、即时零售订单配送、即时零售仓储自研
- 即配平台 / 平台配送发单（packageType=1）；适用应用类目：即配配送商-平台物流

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | instantShopping.GetCallRecord | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | false | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | delivery_id | delivery_id | false | 2 | a_1234 | 运单id | - | - |
| 0 | distributor_code | distributor_code | false | 2 | AAA | 配送商code | - | - |
| 0 | distributor_rider_id | distributor_rider_id | false | 99 | 123 | 骑手id | - | - |
| 0 | exception_code | exception_code | false | 99 | 1001 | 异常报备code | - | - |
| 0 | exception_descr | exception_descr | false | 2 | 异常情况1 | 异常报备描述 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | record_list | record_list | - | 3 | - | 通话记录集合 | - | R1 |
| 1 | record_list.ring_time | ring_time | - | 99 | 1732000000 | 响铃时间，秒级时间戳 | - | - |
| 1 | record_list.ring_time_duration | ring_time_duration | - | 99 | 10 | 响铃时长，秒 | - | - |
| 1 | record_list.call_start_time | call_start_time | - | 99 | 1732000000 | 接通时间，秒级时间戳 | - | - |
| 1 | record_list.call_result | call_result | - | 99 | 0 | 呼叫结果 | - | - |
| 1 | record_list.rider_name | rider_name | - | 2 | 张三 | 骑手姓名 | - | - |
| 1 | record_list.rider_phone | rider_phone | - | 2 | 13911112222 | 骑手电话 | - | - |
| 1 | record_list.is_call_receipt | is_call_receipt | - | 4 | false | 是否接通 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/instantShopping/GetCallRecord?app_key=your_appkey_here&method=instantShopping.GetCallRecord&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/instantShopping/GetCallRecord?app_key=your_appkey_here&method=instantShopping.GetCallRecord&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
InstantShoppingGetCallRecordRequest request = new InstantShoppingGetCallRecordRequest();
InstantShoppingGetCallRecordParam param = request.getParam();
param.setDeliveryId("a_1234");
param.setDistributorCode("AAA");
param.setDistributorRiderId(123L);
param.setExceptionCode(1001L);
param.setExceptionDescr("异常情况1");
InstantShoppingGetCallRecordResponse response = request.execute(accessToken);

```

### php

```php
$request = new InstantShoppingGetCallRecordRequest();
$param = new InstantShoppingGetCallRecordParam();
$request->setParam($param);
$param->delivery_id = "a_1234";
$param->distributor_code = "AAA";
$param->distributor_rider_id = 123;
$param->exception_code = 1001;
$param->exception_descr = "异常情况1";
$response = $request->execute(accessToken);

```

### python

```python
request = InstantShoppingGetCallRecordRequest()
param = request.getParams()
param.delivery_id = "a_1234"
param.distributor_code = "AAA"
param.distributor_rider_id = 123
param.exception_code = 1001
param.exception_descr = "异常情况1"
response = request.execute(accessToken)

```

### go

```go
request := instantShopping_GetCallRecord_request.New()
param := request.GetParams()
param.DeliveryId = "a_1234"
param.DistributorCode = "AAA"
param.DistributorRiderId = 123
param.ExceptionCode = 1001
param.ExceptionDescr = "异常情况1"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new InstantShoppingGetCallRecordRequest();
var param = request.BuildParam();
param.DeliveryId = "a_1234";
param.DistributorCode = "AAA";
param.DistributorRiderId = 123;
param.ExceptionCode = 1001;
param.ExceptionDescr = "异常情况1";
var response = request.Execute<InstantShoppingGetCallRecordResponse>(accessToken);

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
