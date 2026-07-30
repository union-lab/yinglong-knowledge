# /order/downloadShopAccountItem

> 中文说明：资金流水明细下载请求(境内)  
> 所属类别：账单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/46/1431>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/downloadShopAccountItem |
| 中文名称 | 资金流水明细下载请求(境内) |
| 文档目录 | 账单API |
| Article ID | 1431 |
| 文档版本 | V1.10 |
| 官方更新时间 | 2023/5/29 11:13:57 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

请求下载资金流水明细，得到download_id,download_id获取文件需要从order/downloadShopAccountItemFile接口获取，数据T+1生成，建议第二天15点之后下载

## 权限包

- 账单 / 资金流水明细（packageType=1）；适用应用类目：创新应用大赛_微应用、财务管理、打单发货-微应用、创新应用大赛_软件服务、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.downloadShopAccountItem | 调用的API接口名称 | - | - |
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
| 0 | start_time | start_time | false | 2 | 2021-10-01 00:00:00 | 开始时间 | - | - |
| 0 | end_time | end_time | false | 2 | 2021-10-01 23:59:59 | 结束时间 | - | - |
| 0 | order_id | order_id | false | 2 | 4847151209529677080 | 订单号(如果订单号未传，则时间必须传) | - | - |
| 0 | account_type | account_type | false | 7 | 0 | 动账账户 0: 所有 1: 微信 2:支付宝 3:合众支付 4:聚合支付 | - | - |
| 0 | biz_type | biz_type | false | 7 | 0 | 计费类型 0:全部 1:巨量千川 2:精选联盟 3:值点商城 4:小店自卖 5:橙子建站 6:POI 7:抖+ 8:穿山甲 9:服务市场 10:服务市场外包客服 11:学浪 | - | - |
| 0 | time_type | time_type | false | 7 | 0 | 时间类型 0 动账时间 1 下单时间 | - | - |
| 0 | product_id | product_id | false | 2 | 33323233 | 产品id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | code | code | - | 2 | 10000 | 返回code 100000为成功，其他为失败 | - | R1 |
| 0 | code_msg | code_msg | - | 2 | SUCCESS | 返回描述 | - | R1 |
| 0 | download_id | download_id | - | 2 | DL202110261638110918901284 | 下载id，有效期24小时 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderDownloadShopAccountItemRequest request = new OrderDownloadShopAccountItemRequest();
OrderDownloadShopAccountItemParam param = request.getParam();
param.setStartTime("2021-10-01 00:00:00");
param.setEndTime("2021-10-01 23:59:59");
param.setOrderId("4847151209529677080");
param.setAccountType(0);
param.setBizType(0);
param.setTimeType(0);
param.setProductId("33323233");
OrderDownloadShopAccountItemResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderDownloadShopAccountItemRequest();
$param = new OrderDownloadShopAccountItemParam();
$request->setParam($param);
$param->start_time = "2021-10-01 00:00:00";
$param->end_time = "2021-10-01 23:59:59";
$param->order_id = "4847151209529677080";
$param->account_type = 0;
$param->biz_type = 0;
$param->time_type = 0;
$param->product_id = "33323233";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderDownloadShopAccountItemRequest()
param = request.getParams()
param.start_time = "2021-10-01 00:00:00"
param.end_time = "2021-10-01 23:59:59"
param.order_id = "4847151209529677080"
param.account_type = 0
param.biz_type = 0
param.time_type = 0
param.product_id = "33323233"
response = request.execute(accessToken)

```

### go

```go
request := order_downloadShopAccountItem_request.New()
param := request.GetParams()
param.StartTime = "2021-10-01 00:00:00"
param.EndTime = "2021-10-01 23:59:59"
param.OrderId = "4847151209529677080"
param.AccountType = 0
param.BizType = 0
param.TimeType = 0
param.ProductId = "33323233"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderDownloadShopAccountItemRequest();
var param = request.BuildParam();
param.StartTime = "2021-10-01 00:00:00";
param.EndTime = "2021-10-01 23:59:59";
param.OrderId = "4847151209529677080";
param.AccountType = 0;
param.BizType = 0;
param.TimeType = 0;
param.ProductId = "33323233";
var response = request.Execute<OrderDownloadShopAccountItemResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:500 | 参数异常，请检查参数 | 输入合法参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
