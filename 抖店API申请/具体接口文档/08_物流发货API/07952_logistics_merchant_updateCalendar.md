# /logistics/merchant/updateCalendar

> 中文说明：商家上传上门自取日历  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/7952>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/merchant/updateCalendar |
| 中文名称 | 商家上传上门自取日历 |
| 文档目录 | 物流发货API |
| Article ID | 7952 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/12/16 11:33:25 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

商家上传上门自取日历

## 权限包

- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.merchant/updateCalendar | 调用的API接口名称 | - | - |
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
| 0 | merchant_name | MerchantName | false | 2 | APPLE | 商家名称 | - | - |
| 0 | merchant_calendar_list | MerchantCalendarList | false | 3 | - | 商家取件日历列表，最多同时上传100个区县的取件日历 | - | - |
| 1 | merchant_calendar_list.district_code | districtCode | false | 2 | 371600 | 区县code编码，000000表示默认编码，匹配所有地址 | - | - |
| 1 | merchant_calendar_list.date_list | dateList | false | 3 | ["2025-11-04","2025-11-05","2025-11-06","2025-11-07","2025-11-08"] | 日期列表，列表中的每个元素格式为yyyy-MM-dd | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/merchant/updateCalendar?app_key=your_appkey_here&method=logistics.merchant.updateCalendar&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/merchant/updateCalendar?app_key=your_appkey_here&method=logistics.merchant.updateCalendar&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsMerchantUpdateCalendarRequest request = new LogisticsMerchantUpdateCalendarRequest();
LogisticsMerchantUpdateCalendarParam param = request.getParam();
param.setMerchantName("APPLE");
LogisticsMerchantUpdateCalendarResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsMerchantUpdateCalendarRequest();
$param = new LogisticsMerchantUpdateCalendarParam();
$request->setParam($param);
$param->merchant_name = "APPLE";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsMerchantUpdateCalendarRequest()
param = request.getParams()
param.merchant_name = "APPLE"
response = request.execute(accessToken)

```

### go

```go
request := logistics_merchant_updateCalendar_request.New()
param := request.GetParams()
param.MerchantName = "APPLE"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsMerchantUpdateCalendarRequest();
var param = request.BuildParam();
param.MerchantName = "APPLE";
var response = request.Execute<LogisticsMerchantUpdateCalendarResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:12005 | 入参必填参数缺失 | 检查入参是否缺失 |
| 50002 | 业务处理失败 | isv.business-failed:17001 | 数据库等操作失败 | 重试调用 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
