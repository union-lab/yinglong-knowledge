# /buyin/doukeRewardOrders

> 中文说明：抖客获取近30天内奖励订单  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/3200>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/doukeRewardOrders |
| 中文名称 | 抖客获取近30天内奖励订单 |
| 文档目录 | 精选联盟API |
| Article ID | 3200 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/6/26 10:12:48 |
| 授权主体 | ["抖客","达人"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

抖客获取近30天内奖励订单（新客+召回用户）

## 权限包

- 精选联盟 / 新客业务（packageType=1）；适用应用类目：联盟抖客分销
- 精选联盟 / 精选联盟物料查询（packageType=1）；适用应用类目：联盟自研、微应用-标题优化、创新应用大赛_微应用、联盟抖客分销、撮合服务商、联盟抖客直播间分销、直播间AI导购、团长管理、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研、直播间导购-微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.doukeRewardOrders | 调用的API接口名称 | - | - |
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
| 0 | page | page | true | 99 | 1 | 页数，从1开始； | - | - |
| 0 | page_size | pageSize | true | 99 | 10 | 每页订单数目，最大为100 | - | - |
| 0 | pid | pid | false | 2 | dy_123_445_4995 | 独立抖客PID | - | - |
| 0 | start_date | start_date | false | 2 | 20230308 | 查询开始日期，格式：20230308，奖励订单只保存近30天的订单 | - | - |
| 0 | end_date | end_date | false | 2 | 20230308 | 查询结束日期，格式：20230308，奖励订单只保存近30天的订单 | - | - |
| 0 | distribution_type | distribution_type | false | 99 | 0 | 默认全部，0:全部 1:商品分销 2: 直播间分销 3: mix自建活动页分销 4:频道页分销 99:其他 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | reward_orders | reward_orders | - | 3 | - | 奖励订单信息 | - | R1 |
| 1 | reward_orders.external_info | external_info | - | 2 | test | 扩展参数 | - | - |
| 1 | reward_orders.pay_date | pay_date | - | 2 | 20230308 | 成交日期 | - | - |
| 1 | reward_orders.promotion_info | promotion_info | - | 2 | dy_123_445_4995 | 推广位信息 | - | - |
| 1 | reward_orders.reward_order_id | reward_order_id | - | 2 | 12345678 | 奖励订单ID | - | - |
| 1 | reward_orders.product_id | product_id | - | 2 | 12345678 | 成交商品ID | - | - |
| 1 | reward_orders.product_name | product_name | - | 2 | 测试商品 | 成交商品名称 | - | - |
| 1 | reward_orders.pay_amount | pay_amount | - | 99 | 100 | 成交金额 | - | - |
| 1 | reward_orders.reward_type | reward_type | - | 2 | 拉新 | 奖励类型：拉新/召回 | - | - |
| 0 | total | total | - | 99 | 100 | 查询的奖励订单总数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/doukeRewardOrders?app_key=your_appkey_here&method=buyin.doukeRewardOrders&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/doukeRewardOrders?app_key=your_appkey_here&method=buyin.doukeRewardOrders&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinDoukeRewardOrdersRequest request = new BuyinDoukeRewardOrdersRequest();
BuyinDoukeRewardOrdersParam param = request.getParam();
param.setPage(1L);
param.setPageSize(10L);
param.setPid("dy_123_445_4995");
param.setStartDate("20230308");
param.setEndDate("20230308");
param.setDistributionType(0L);
BuyinDoukeRewardOrdersResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinDoukeRewardOrdersRequest();
$param = new BuyinDoukeRewardOrdersParam();
$request->setParam($param);
$param->page = 1;
$param->page_size = 10;
$param->pid = "dy_123_445_4995";
$param->start_date = "20230308";
$param->end_date = "20230308";
$param->distribution_type = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinDoukeRewardOrdersRequest()
param = request.getParams()
param.page = 1
param.page_size = 10
param.pid = "dy_123_445_4995"
param.start_date = "20230308"
param.end_date = "20230308"
param.distribution_type = 0
response = request.execute(accessToken)

```

### go

```go
request := buyin_doukeRewardOrders_request.New()
param := request.GetParams()
param.Page = 1
param.PageSize = 10
param.Pid = "dy_123_445_4995"
param.StartDate = "20230308"
param.EndDate = "20230308"
param.DistributionType = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinDoukeRewardOrdersRequest();
var param = request.BuildParam();
param.Page = 1;
param.PageSize = 10;
param.Pid = "dy_123_445_4995";
param.StartDate = "20230308";
param.EndDate = "20230308";
param.DistributionType = 0;
var response = request.Execute<BuyinDoukeRewardOrdersResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4414 | 分销类型参数错误 | 分销类型参数错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:4415 | 参数校验失败：无效pageSize | 参数校验失败：无效pageSize |
| 40004 | 非法的参数 | isv.parameter-invalid:4416 | 参数校验失败：无效时间区间（开始时间不能大于结束时间） | 参数校验失败：无效时间区间（开始时间不能大于结束时间） |
| 40004 | 非法的参数 | isv.parameter-invalid:4102 | 参数校验失败：无效 PID | 参数校验失败：无效 PID |
| 40004 | 非法的参数 | isv.parameter-invalid:4249 | 参数校验失败：无效开始时间 | 参数校验失败：无效开始时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:4250 | 参数校验失败：无效结束时间 | 参数校验失败：无效结束时间 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
