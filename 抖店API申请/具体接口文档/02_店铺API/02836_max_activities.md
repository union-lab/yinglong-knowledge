# /max/activities

> 中文说明：批量获取活动信息  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2836>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /max/activities |
| 中文名称 | 批量获取活动信息 |
| 文档目录 | 店铺API |
| Article ID | 2836 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/9/22 14:04:46 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

批量获取活动信息

## 权限包

- 店铺 / 店铺装修（packageType=1）；适用应用类目：商家自研模版、商家自研组件、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 店铺 / 端店铺装修（packageType=4）；适用应用类目：商家自研模版、商家自研组件、装修模板、定制装修、装修组件

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | max.activities | 调用的API接口名称 | - | - |
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
| 0 | activity_ids | activity_ids | false | 3 | 111,222 | 活动id，手动配置的时候传，数量最多50个 | - | - |
| 0 | activity_type | activity_type | true | 99 | 7 | 活动类型，7-限时限量购，100-店铺满减 | - | - |
| 0 | m_config_type | m_config_type | true | 99 | 0 | 配置类型 0 手动配置，1 智能配置，默认手动配置，（目前不支持智能配置） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | status_code | status_code | - | 99 | 0 | 状态码 | - | R1 |
| 0 | status_msg | status_msg | - | 2 | success | 状态说明 | - | R1 |
| 0 | data | data | - | 5 | - | data | - | R1 |
| 1 | data.time_buy_list | time_buy_list | - | 3 | - | 限时限量购活动列表 | - | R1 |
| 2 | data.time_buy_list.activity_id | activity_id | - | 2 | 111 | 活动 id | - | R1 |
| 2 | data.time_buy_list.activity_type | activity_type | - | 99 | 7 | 活动类型, 7-限时限量购, 100-店铺满减 | - | R1 |
| 2 | data.time_buy_list.activity_name | activity_name | - | 2 | 限时限量购活动 | 活动名称 | - | R1 |
| 2 | data.time_buy_list.pre_start_time | pre_start_time | - | 99 | 1670567000000 | 活动预热开始时间 ms | - | R1 |
| 2 | data.time_buy_list.start_time | start_time | - | 99 | 1670568000000 | 活动开始时间 ms | - | R1 |
| 2 | data.time_buy_list.end_time | end_time | - | 99 | 1670569000000 | 活动结束时间 ms | - | R1 |
| 2 | data.time_buy_list.create_time | create_time | - | 99 | 1670566000000 | 活动创建时间 ms | - | R1 |
| 2 | data.time_buy_list.ts | ts | - | 99 | 1670566000000 | 服务端时间戳 ms | - | R1 |
| 2 | data.time_buy_list.products | products | - | 3 | - | 活动中的商品 | - | R1 |
| 3 | data.time_buy_list.products.product_base | product_base | - | 5 | - | 商品的基本信息 | - | R1 |
| 4 | data.time_buy_list.products.product_base.product_id | product_id | - | 2 | 1111 | 商品Id | - | R1 |
| 4 | data.time_buy_list.products.product_base.name | name | - | 2 | 苹果手机 | 名称 | - | R1 |
| 4 | data.time_buy_list.products.product_base.pic | main_img_url | - | 2 | https://p9-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153427046487984750183_661ff1f563801d97f382e0ac114a09e6_sx_805824_www933-933 | 商品主图 | - | R1 |
| 4 | data.time_buy_list.products.product_base.sale_price | sale_price | - | 99 | 190 | 售价 | - | R1 |
| 4 | data.time_buy_list.products.product_base.original_price | original_price | - | 99 | 200 | 原价 | - | R1 |
| 4 | data.time_buy_list.products.product_base.status | status | - | 99 | 0 | 上下架状态, 0 上架，1 下架，2 删除 | - | R1 |
| 4 | data.time_buy_list.products.product_base.check_status | check_status | - | 99 | 3 | 商品审核状态，1 未审核，2 待审核，3 审核通过，4 审核不通过 | - | R1 |
| 4 | data.time_buy_list.products.product_base.product_type | product_type | - | 99 | 0 | 商品类型, https://bytedance.feishu.cn/docs/doccnWKmWqGQnWjHuq27x3fYtvg | - | R1 |
| 4 | data.time_buy_list.products.product_base.sell_num | sell_num | - | 99 | 100 | 销量 | - | R1 |
| 4 | data.time_buy_list.products.product_base.category_leaf_id | category_id | - | 2 | 20000 | 所属类目id | - | R1 |
| 3 | data.time_buy_list.products.sale_status | sale_status | - | 99 | 1 | 0-未开始. 1-秒杀中. 2-已抢光, 3-已结束 | - | R1 |
| 3 | data.time_buy_list.products.total_stock | total_stock | - | 99 | 200 | 商品总库存 | - | R1 |
| 3 | data.time_buy_list.products.left_stock | left_stock | - | 99 | 180 | 商品剩余库存 | - | R1 |
| 3 | data.time_buy_list.products.min_sku_price | min_sku_price | - | 99 | 100 | 活动 sku 最低价 | - | R1 |
| 3 | data.time_buy_list.products.max_sku_price | max_sku_price | - | 99 | 120 | 活动 sku 最低价 | - | R1 |
| 2 | data.time_buy_list.status | status | - | 99 | 0 | 活动状态 0-正常 1-失效 | - | R1 |
| 1 | data.full_discount_list | full_discount_list | - | 3 | - | 店铺满减活动列表 | - | R1 |
| 2 | data.full_discount_list.activity_id | activity_id | - | 2 | 222 | 活动 id | - | R1 |
| 2 | data.full_discount_list.activity_type | activity_type | - | 99 | 100 | 活动类型, 7-限时限量购, 100-店铺满减 | - | R1 |
| 2 | data.full_discount_list.discount_id | discount_id | - | 2 | 222 | 折扣 id | - | R1 |
| 2 | data.full_discount_list.condition_type | condition_type | - | 99 | 2 | 门槛类型  1:数量  2:价格  3:原价 | - | R1 |
| 2 | data.full_discount_list.condition_value | condition_value | - | 2 | 200 | 门槛值 | - | R1 |
| 2 | data.full_discount_list.discount_type | discount_type | - | 99 | 3 | 优惠类型 1:打折  2:一口价 3:减钱 4:赠品 | - | R1 |
| 2 | data.full_discount_list.discount | discount | - | 2 | 100 | 优惠值 | - | R1 |
| 2 | data.full_discount_list.products | products | - | 3 | - | 活动中的商品 | - | R1 |
| 3 | data.full_discount_list.products.product_id | product_id | - | 2 | 111 | 商品Id | - | R1 |
| 3 | data.full_discount_list.products.name | name | - | 2 | 苹果手机 | 名称 | - | R1 |
| 3 | data.full_discount_list.products.main_img_url | main_img_url | - | 2 | aaa | 主图 | - | R1 |
| 3 | data.full_discount_list.products.sale_price | sale_price | - | 99 | 100 | 售价 | - | R1 |
| 3 | data.full_discount_list.products.original_price | original_price | - | 99 | 200 | 原价 | - | R1 |
| 3 | data.full_discount_list.products.status | status | - | 99 | 0 | 上下架状态, 0 上架，1 下架，2 删除 | - | R1 |
| 3 | data.full_discount_list.products.check_status | check_status | - | 99 | 3 | 商品审核状态，1 未审核，2 待审核，3 审核通过，4 审核不通过 | - | R1 |
| 3 | data.full_discount_list.products.product_type | product_type | - | 99 | 0 | 商品类型, https://bytedance.feishu.cn/docs/doccnWKmWqGQnWjHuq27x3fYtvg | - | R1 |
| 3 | data.full_discount_list.products.sell_num | sell_num | - | 99 | 200 | 销量 | - | R1 |
| 3 | data.full_discount_list.products.category_id | category_id | - | 2 | 数码3C | 所属类目 | - | R1 |
| 2 | data.full_discount_list.status | status | - | 99 | 0 | 活动状态, 0-正常, 1-失效 | - | R1 |
| 2 | data.full_discount_list.pre_start_time | pre_start_time | - | 99 | 1670567000000 | 活动预热开始时间 ms | - | R1 |
| 2 | data.full_discount_list.start_time | start_time | - | 99 | 1670568000000 | 活动开始时间 ms | - | R1 |
| 2 | data.full_discount_list.end_time | end_time | - | 99 | 1670566000000 | 活动结束时间 ms | - | R1 |
| 2 | data.full_discount_list.activity_name | activity_name | - | 2 | 满减活动 | 活动名称 | - | R1 |
| 2 | data.full_discount_list.activity_discounts | activity_discounts | - | 3 | - | 活动的优惠设置，阶梯优惠 | - | R1 |
| 3 | data.full_discount_list.activity_discounts.discount_id | discount_id | - | 2 | 222 | 折扣 id | - | R1 |
| 3 | data.full_discount_list.activity_discounts.condition_type | condition_type | - | 99 | 2 | 门槛类型  1:数量  2:价格  3:原价 | - | R1 |
| 3 | data.full_discount_list.activity_discounts.condition_value | condition_value | - | 2 | 200 | 门槛值 | - | R1 |
| 3 | data.full_discount_list.activity_discounts.discount_type | discount_type | - | 99 | 3 | 优惠类型 1:打折  2:一口价 3:减钱 4:赠品 | - | R1 |
| 3 | data.full_discount_list.activity_discounts.discount | discount | - | 2 | 100 | 优惠值 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/max/activities?app_key=your_appkey_here&method=max.activities&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/max/activities?app_key=your_appkey_here&method=max.activities&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaxActivitiesRequest request = new MaxActivitiesRequest();
MaxActivitiesParam param = request.getParam();
param.setActivityIds(111,222);
param.setActivityType(7);
param.setMConfigType(0);
MaxActivitiesResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaxActivitiesRequest();
$param = new MaxActivitiesParam();
$request->setParam($param);
$param->activity_ids = 111,222;
$param->activity_type = 7;
$param->m_config_type = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = MaxActivitiesRequest()
param = request.getParams()
param.activity_ids = 111,222
param.activity_type = 7
param.m_config_type = 0
response = request.execute(accessToken)

```

### go

```go
request := max_activities_request.New()
param := request.GetParams()
param.ActivityIds = 111,222
param.ActivityType = 7
param.MConfigType = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaxActivitiesRequest();
var param = request.BuildParam();
param.ActivityIds = 111,222;
param.ActivityType = 7;
param.MConfigType = 0;
var response = request.Execute<MaxActivitiesResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:4 | 啊哦，服务器打瞌睡了，再试一次吧～ | 再试一次 |
| 40004 | 非法的参数 | isv.parameter-invalid:5 | 参数不合法 | 检查参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
