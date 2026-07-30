# /compass/CommonProductQueryData

> 中文说明：获取商品搜索词  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2768>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /compass/CommonProductQueryData |
| 中文名称 | 获取商品搜索词 |
| 文档目录 | 商品API |
| Article ID | 2768 |
| 文档版本 | V1.04 |
| 官方更新时间 | 2022/11/29 20:04:34 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 170 |

## 使用说明

数据T+1生成，建议第二天12点之后查询，
即中午12点之前请求前天的数据，12点之后再请求昨天的数据。

## 权限包

- 商品 / 微应用商品编辑（packageType=1）；适用应用类目：微应用-标题优化、商品图文-微应用、创新应用大赛_微应用、AI拼图-微应用、自研微组件、搭配购-微应用、微应用-商详海报、自研微组件-直播复盘、直播间AI导购、直播间导购-微应用
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | compass.CommonProductQueryData | 调用的API接口名称 | - | - |
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
| 0 | end_date | end_date | true | 2 | 2022/11/15 23:59:59 | 周期结束时间,T-1;如3月24号查询近7天的数据，入参date_type=21&&end_date=“2023-03-23” | - | - |
| 0 | date_type | date_type | true | 7 | 21 | REALTIME          = 1   // 实时 BeginDate和EndDate都不传入 表示查询今日实时数据 BeginDate和EndDate都传入 表示查询BeginDate～EndDate的实时数据；     DAY               = 2   // 自然日 BeginDate和EndDate都传入 表示查询趋势 只传入BeginDate表示查询该自然日；     WEEK              = 3   // 自然周 传入BeginDate（周一的日期） 指定对应自然周；     MONTH             = 4   // 自然月 传入BeginDate（月一号的日期） 指定对应自然月；     LAST_ONE_DAYS     = 20  // 近一日；     LAST_SEVEN_DAYS   = 21  // 近七日 当日为基准；     LAST_THREE_DAYS   = 22  // 近三日 当日为基准；     LAST_ONE_MONTH    = 23  // 近30日 当日为基准； | - | - |
| 0 | activity_id | activity_id | false | 2 | 105241 | 大促id，非大促默认使用空字符串“” | - | - |
| 0 | begin_date | begin_date | true | 2 | 2022/11/15 00:00:00 | 周期开始时间 | - | - |
| 0 | product_id | product_id | true | 2 | 3579566747054921902 | 商品id | - | - |
| 0 | page_no | page_no | false | 1 | 1 | 页码，默认为1 | - | - |
| 0 | page_size | page_size | false | 1 | 10 | 页面大小，默认为10 | - | - |
| 0 | sorted_field | sorted_field | false | 2 | product_show_ucnt | 排序字段，支持product_show_ucnt,product_click_ucnt,product_click_ratio,pay_ucnt,pay_cnt,product_pay_ratio | - | - |
| 0 | is_asc | is_asc | false | 4 | false | 排序方向，默认降序 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_list | product_list | - | 3 | - | 商品数据 | - | R1 |
| 1 | product_list.product_id | product_id | - | 1 | 3579566747054921902 | 商品id | - | R1 |
| 1 | product_list.query | query | - | 2 | 塞尔达 | 搜索词 | - | R1 |
| 1 | product_list.product_show_ucnt | product_show_ucnt | - | 1 | 1 | 商品曝光人数 | - | R1 |
| 1 | product_list.product_click_ucnt | product_click_ucnt | - | 1 | 1 | 商品点击人数 | - | R1 |
| 1 | product_list.product_click_ratio | product_click_ratio | - | 9 | 0.2 | 商品点击率, 0.2表示20% | - | R1 |
| 1 | product_list.product_pay_ucnt | product_pay_ucnt | - | 1 | 1 | 商品成交人数 | - | R1 |
| 1 | product_list.product_pay_ratio | product_pay_ratio | - | 9 | 0.2 | 商品成交率, 0.2表示20% | - | R1 |
| 1 | product_list.product_pay_cnt | product_pay_cnt | - | 1 | 1 | 商品成交次数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/info?app_key=your_appkey_here&method=warehouse.info&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/info?app_key=your_appkey_here&method=warehouse.info&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
CompassCommonProductQueryDataRequest request = new CompassCommonProductQueryDataRequest();
CompassCommonProductQueryDataParam param = request.getParam();
param.setEndDate("2022/11/15 23:59:59");
param.setDateType(21);
param.setActivityId("105241");
param.setBeginDate("2022/11/15 00:00:00");
param.setProductId("3579566747054921902");
param.setPageNo(1L);
param.setPageSize(10L);
param.setSortedField("product_show_ucnt");
param.setIsAsc(false);
CompassCommonProductQueryDataResponse response = request.execute(accessToken);

```

### php

```php
$request = new CompassCommonProductQueryDataRequest();
$param = new CompassCommonProductQueryDataParam();
$request->setParam($param);
$param->end_date = "2022/11/15 23:59:59";
$param->date_type = 21;
$param->activity_id = "105241";
$param->begin_date = "2022/11/15 00:00:00";
$param->product_id = "3579566747054921902";
$param->page_no = 1;
$param->page_size = 10;
$param->sorted_field = "product_show_ucnt";
$param->is_asc = false;
$response = $request->execute(accessToken);

```

### python

```python
request = CompassCommonProductQueryDataRequest()
param = request.getParams()
param.end_date = "2022/11/15 23:59:59"
param.date_type = 21
param.activity_id = "105241"
param.begin_date = "2022/11/15 00:00:00"
param.product_id = "3579566747054921902"
param.page_no = 1
param.page_size = 10
param.sorted_field = "product_show_ucnt"
param.is_asc = false
response = request.execute(accessToken)

```

### go

```go
request := compass_CommonProductQueryData_request.New()
param := request.GetParams()
param.EndDate = "2022/11/15 23:59:59"
param.DateType = 21
param.ActivityId = "105241"
param.BeginDate = "2022/11/15 00:00:00"
param.ProductId = "3579566747054921902"
param.PageNo = 1
param.PageSize = 10
param.SortedField = "product_show_ucnt"
param.IsAsc = false
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new CompassCommonProductQueryDataRequest();
var param = request.BuildParam();
param.EndDate = "2022/11/15 23:59:59";
param.DateType = 21;
param.ActivityId = "105241";
param.BeginDate = "2022/11/15 00:00:00";
param.ProductId = "3579566747054921902";
param.PageNo = 1;
param.PageSize = 10;
param.SortedField = "product_show_ucnt";
param.IsAsc = false;
var response = request.Execute<CompassCommonProductQueryDataResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:621000704 | 621000704:调用下游失败，请稍后重试 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:621000625 | 621000625:当前没有权限访问 | 请检查是否拥有权限 |
| 50002 | 业务处理失败 | isv.business-failed:621000602 | 621000602:参数非法 | - |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
