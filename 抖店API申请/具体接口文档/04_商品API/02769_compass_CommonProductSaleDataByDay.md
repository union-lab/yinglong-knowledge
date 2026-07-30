# /compass/CommonProductSaleDataByDay

> 中文说明：获取商品天级指标数据  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2769>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /compass/CommonProductSaleDataByDay |
| 中文名称 | 获取商品天级指标数据 |
| 文档目录 | 商品API |
| Article ID | 2769 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/11/24 13:00:44 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20 |

## 使用说明

获取商品天级指标数据

## 权限包

- 商品 / 微应用商品编辑（packageType=1）；适用应用类目：微应用-标题优化、商品图文-微应用、创新应用大赛_微应用、AI拼图-微应用、自研微组件、搭配购-微应用、微应用-商详海报、自研微组件-直播复盘、直播间AI导购、直播间导购-微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | compass.CommonProductSaleDataByDay | 调用的API接口名称 | - | - |
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
| 0 | date_type | date_type | true | 7 | 21 | 日期类型 | - | - |
| 0 | product_ids | product_ids | true | 3 | 3580493534307961470 | 商品id列表 | - | - |
| 0 | end_date | end_date | true | 2 | 2022/11/14 00:00:00 | 结束日期 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 商品天级数据 | - | R1 |
| 1 | data.product_id | product_id | - | 2 | 3580493534307961470 | 商品id | - | R1 |
| 1 | data.product_detail_by_day | product_detail_by_day | - | 8 | - | 商品按日详情 | - | R1 |
| 2 | data.product_detail_by_day.date | date | - | 2 | 20221114 | 时间 | - | R1 |
| 2 | data.product_detail_by_day.pay_amt | pay_amt | - | 1 | 1 | 商品成交金额 | - | R1 |
| 2 | data.product_detail_by_day.pay_combo_cnt | pay_combo_cnt | - | 1 | 1 | 商品成交件数 | - | R1 |
| 2 | data.product_detail_by_day.pay_ucnt | pay_ucnt | - | 1 | 1 | 商品成交人数 | - | R1 |
| 2 | data.product_detail_by_day.show_cnt | show_cnt | - | 1 | 1 | 商品曝光次数 | - | R1 |
| 2 | data.product_detail_by_day.show_ucnt | show_ucnt | - | 1 | 1 | 商品曝光人数 | - | R1 |
| 2 | data.product_detail_by_day.click_ucnt | click_ucnt | - | 1 | 1 | 商品点击人数 | - | R1 |
| 2 | data.product_detail_by_day.product_show_click_ucnt_ratio | product_show_click_ucnt_ratio | - | 9 | 0.4 | 商品点击率 | - | R1 |
| 2 | data.product_detail_by_day.product_click_pay_ucnt_ratio | product_click_pay_ucnt_ratio | - | 9 | 0.4 | 商品支付率 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sku/detail?app_key=your_appkey_here&method=sku.detail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sku/detail?app_key=your_appkey_here&method=sku.detail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
CompassCommonProductSaleDataByDayRequest request = new CompassCommonProductSaleDataByDayRequest();
CompassCommonProductSaleDataByDayParam param = request.getParam();
param.setDateType(21);
param.setProductIds(3580493534307961470);
param.setEndDate("2022/11/14 00:00:00");
CompassCommonProductSaleDataByDayResponse response = request.execute(accessToken);

```

### php

```php
$request = new CompassCommonProductSaleDataByDayRequest();
$param = new CompassCommonProductSaleDataByDayParam();
$request->setParam($param);
$param->date_type = 21;
$param->product_ids = 3580493534307961470;
$param->end_date = "2022/11/14 00:00:00";
$response = $request->execute(accessToken);

```

### python

```python
request = CompassCommonProductSaleDataByDayRequest()
param = request.getParams()
param.date_type = 21
param.product_ids = 3580493534307961470
param.end_date = "2022/11/14 00:00:00"
response = request.execute(accessToken)

```

### go

```go
request := compass_CommonProductSaleDataByDay_request.New()
param := request.GetParams()
param.DateType = 21
param.ProductIds = 3580493534307961470
param.EndDate = "2022/11/14 00:00:00"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new CompassCommonProductSaleDataByDayRequest();
var param = request.BuildParam();
param.DateType = 21;
param.ProductIds = 3580493534307961470;
param.EndDate = "2022/11/14 00:00:00";
var response = request.Execute<CompassCommonProductSaleDataByDayResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:621000704 | 621000704:调用下游失败，请稍后重试 | 621000704:调用下游失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:621000625 | 621000625:当前没有权限访问 | 621000625:当前没有权限访问 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
