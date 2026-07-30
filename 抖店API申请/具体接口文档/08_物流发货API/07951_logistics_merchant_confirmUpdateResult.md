# /logistics/merchant/confirmUpdateResult

> 中文说明：确认更新结果  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/7951>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/merchant/confirmUpdateResult |
| 中文名称 | 确认更新结果 |
| 文档目录 | 物流发货API |
| Article ID | 7951 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/12/16 11:33:15 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

更新订单信息(地址、时间)时，商家回传更新结果

## 权限包

- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.merchant/confirmUpdateResult | 调用的API接口名称 | - | - |
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
| 0 | merchant_name | MerchantName | true | 2 | APPLE | 商家名称 | - | - |
| 0 | after_sale_id | AfterSaleId | true | 2 | 1431739081972171052 | 售后单号 | - | - |
| 0 | sender | Sender | true | 5 | - | 寄件人 | - | - |
| 1 | sender.contact | contact | true | 5 | - | 联系方式 | - | - |
| 2 | sender.contact.phone | phone | true | 2 | 18000000000 | 电话号码 | - | - |
| 2 | sender.contact.name | name | true | 2 | xxx | 姓名 | - | - |
| 1 | sender.address | address | true | 5 | - | 地址 | - | - |
| 2 | sender.address.city_name | cityName | true | 2 | 武汉市 | 市名称 | - | - |
| 2 | sender.address.street_code | streetCode | true | 2 | 420111003 | 街道编码 | - | - |
| 2 | sender.address.province_code | provinceCode | true | 2 | 42 | 省编码 | - | - |
| 2 | sender.address.street_name | streetName | true | 2 | 狮子山街道 | 街道名称 | - | - |
| 2 | sender.address.city_code | cityCode | true | 2 | 420100 | 市编码 | - | - |
| 2 | sender.address.district_code | districtCode | true | 2 | 420111 | 区编码 | - | - |
| 2 | sender.address.district_name | districtName | true | 2 | 洪山区 | 区名称 | - | - |
| 2 | sender.address.detail_address | detailAddress | true | 2 | xxxx路 | 详细地址 | - | - |
| 2 | sender.address.province_name | provinceName | true | 2 | 湖北省 | 省名称 | - | - |
| 0 | start_fetch_time | StartFetchTime | true | 2 | 2025-11-18 09:00:00 | 开始取件时间 | - | - |
| 0 | end_fetch_time | EndFetchTime | true | 2 | 2025-11-18 17:00:00 | 结束取件时间 | - | - |
| 0 | request_id | RequestId | true | 2 | xxx | 请求id，用于幂等 | - | - |
| 0 | result | Result | true | 2 | success | 更新结果 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | is_success | IsSuccess | - | 4 | true | 是否处理成功 | - | - |
| 0 | can_retry | CanRetry | - | 4 | false | 是否可重试 | - | - |
| 0 | failed_reason_code | FailedReasonCode | - | 2 | 0 | 处理失败错误码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/merchant/confirmUpdateResult?app_key=your_appkey_here&method=logistics.merchant.confirmUpdateResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/merchant/confirmUpdateResult?app_key=your_appkey_here&method=logistics.merchant.confirmUpdateResult&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsMerchantConfirmUpdateResultRequest request = new LogisticsMerchantConfirmUpdateResultRequest();
LogisticsMerchantConfirmUpdateResultParam param = request.getParam();
param.setMerchantName("APPLE");
param.setAfterSaleId("1431739081972171052");
param.setStartFetchTime("2025-11-18 09:00:00");
param.setEndFetchTime("2025-11-18 17:00:00");
param.setRequestId("xxx");
param.setResult("success");
LogisticsMerchantConfirmUpdateResultResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsMerchantConfirmUpdateResultRequest();
$param = new LogisticsMerchantConfirmUpdateResultParam();
$request->setParam($param);
$param->merchant_name = "APPLE";
$param->after_sale_id = "1431739081972171052";
$param->start_fetch_time = "2025-11-18 09:00:00";
$param->end_fetch_time = "2025-11-18 17:00:00";
$param->request_id = "xxx";
$param->result = "success";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsMerchantConfirmUpdateResultRequest()
param = request.getParams()
param.merchant_name = "APPLE"
param.after_sale_id = "1431739081972171052"
param.start_fetch_time = "2025-11-18 09:00:00"
param.end_fetch_time = "2025-11-18 17:00:00"
param.request_id = "xxx"
param.result = "success"
response = request.execute(accessToken)

```

### go

```go
request := logistics_merchant_confirmUpdateResult_request.New()
param := request.GetParams()
param.MerchantName = "APPLE"
param.AfterSaleId = "1431739081972171052"
param.StartFetchTime = "2025-11-18 09:00:00"
param.EndFetchTime = "2025-11-18 17:00:00"
param.RequestId = "xxx"
param.Result = "success"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsMerchantConfirmUpdateResultRequest();
var param = request.BuildParam();
param.MerchantName = "APPLE";
param.AfterSaleId = "1431739081972171052";
param.StartFetchTime = "2025-11-18 09:00:00";
param.EndFetchTime = "2025-11-18 17:00:00";
param.RequestId = "xxx";
param.Result = "success";
var response = request.Execute<LogisticsMerchantConfirmUpdateResultResponse>(accessToken);

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
