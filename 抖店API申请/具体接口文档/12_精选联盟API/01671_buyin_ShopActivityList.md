# /buyin/ShopActivityList

> 中文说明：接口用于商家获取可参与的团长活动，支持报名状态筛选，包括已提报和未提报两种状态  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1671>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/ShopActivityList |
| 中文名称 | 接口用于商家获取可参与的团长活动，支持报名状态筛选，包括已提报和未提报两种状态 |
| 文档目录 | 精选联盟API |
| Article ID | 1671 |
| 文档版本 | V3.08 |
| 官方更新时间 | 2026/4/21 17:17:47 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 60 |

## 使用说明

接口用于商家获取可参与的团长活动，支持报名状态筛选，包括已提报和未提报两种状态

## 权限包

- 精选联盟 / 精选联盟商品推广（packageType=1）；适用应用类目：联盟自研、撮合服务商、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.ShopActivityList | 调用的API接口名称 | - | - |
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
| 0 | apply_status | apply_status | true | 7 | 1 | 1、我报名的活动 2、可以报名的活动 | - | - |
| 0 | page | page | false | 1 | 1 | 页码，从1开始。分页模式下生效，超过10000条会被限制，推荐使用游标模式 retrieve_mode=1 | - | - |
| 0 | page_size | page_size | false | 1 | 20 | 每页条数 | - | - |
| 0 | commission_rate_min | commission_rate_min | false | 7 | 5 | 最低佣金率（5%,传5） | - | - |
| 0 | commission_rate_max | commission_rate_max | false | 7 | 5 | 最高佣金率（5%,传5） | - | - |
| 0 | service_rate_min | service_rate_min | false | 7 | 5 | 最低服务费率（5%,传5） | - | - |
| 0 | service_rate_max | service_rate_max | false | 7 | 5 | 最高服务费率（5%,传5） | - | - |
| 0 | product_category_id | product_category_id | false | 7 | 1 | 类目ID | - | - |
| 0 | inst_acti_name | inst_acti_name | false | 2 | 一个团长 | 团长名称或活动名称-模糊搜索 | - | - |
| 0 | retrieve_mode | retrieve_mode | false | 7 | 1 | 获取模式。0: 分页模式（默认），最多返回10000条数据；1: 游标模式（推荐），返回条数无限制 | - | - |
| 0 | cursor | cursor | false | 2 | /ep2kokeo21me..lfkeokfok3o | 游标。首页不需要传，请求下一页时需传入上一次请求响应的next_cursor值 | - | - |
| 0 | colonel_buyin_id | colonel_buyin_id | false | 1 | 4739745019873796 | 团长百应ID | - | - |
| 0 | ad_commission_rate_min | ad_commission_rate_min | false | 7 | 5 | 佣金率min（5%,传5） | - | - |
| 0 | ad_service_rate_min | ad_service_rate_min | false | 7 | 5 | 服务费率min（5%,传5） | - | - |
| 0 | cos_limit_type | cos_limit_type | false | 7 | 1 | 佣金限制类型，可不指定，1:不限制 2:仅双佣金 3:仅固定佣金 | - | - |
| 0 | ad_service_rate_max | ad_service_rate_max | false | 7 | 5 | 服务费率max（5%,传5） | - | - |
| 0 | ad_commission_rate_max | ad_commission_rate_max | false | 7 | 5 | 佣金率max（5%,传5） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 数据 | - | R1 |
| 1 | data.activity_id | activity_id | - | 1 | 54321 | 活动id | - | R1 |
| 1 | data.activity_name | activity_name | - | 2 | 一个活动 | 活动名称 | - | R1 |
| 1 | data.institution_name | institution_name | - | 2 | 一个团长 | 团长名称 | - | R1 |
| 1 | data.wechat_id | wechat_id | - | 2 | 1233 | 微信号 | - | R1 |
| 1 | data.phone_num | phone_num | - | 2 | 15671111111 | 手机号 | - | R1 |
| 1 | data.history_order_num | history_order_num | - | 1 | 10 | 活动单品平均成交数 | - | R1 |
| 1 | data.history_single_product_num | history_single_product_num | - | 1 | 10 | 出单商品数量 | - | R1 |
| 1 | data.apply_start_time | apply_start_time | - | 2 | 2022-01-10 | 活动报名开始时间 | - | R1 |
| 1 | data.apply_end_time | apply_end_time | - | 2 | 2022-02-10 | 活动报名结束时间 | - | R1 |
| 1 | data.commission_rate | commission_rate | - | 9 | 10.5 | 活动要求最低佣金率 | - | R1 |
| 1 | data.service_rate | service_rate | - | 9 | 10.5 | 活动要求最低服务费率 | - | R1 |
| 1 | data.activity_desc | activity_desc | - | 2 | 一个活动 | 活动描述 | - | R1 |
| 1 | data.estimated_single_sale | estimated_single_sale | - | 9 | 100 | 预估平均成交销售额 | - | R1 |
| 1 | data.apply_num | apply_num | - | 1 | 11 | 已报名商品数 | - | R1 |
| 1 | data.audit_pass_num | audit_pass_num | - | 1 | 11 | 审核通过商品数 | - | R1 |
| 1 | data.apply_status | apply_status | - | 7 | 0 | 是否报名该活动：已报名1和未报名0 | - | R1 |
| 1 | data.activity_kind | activity_kind | - | 7 | 1 | 活动类型（0:专属招商 1:公开招商 ） | - | R1 |
| 1 | data.institution_id | institution_id | - | 1 | 647819735141426187 | 机构ID | - | R1 |
| 1 | data.colonel_buyin_id | colonel_buyin_id | - | 1 | 647819735141426187 | 团长百应ID | - | R1 |
| 1 | data.unaudit_product_cnt | unaudit_product_cnt | - | 1 | 1 | 待审核商品数 | - | - |
| 1 | data.ad_service_rate | ad_service_rate | - | 9 | 5.5 | 最低双佣金投放期服务费率 | - | - |
| 1 | data.cos_limit_type | cos_limit_type | - | 7 | 1 | 佣金限制类型，1:不限制 2:双佣金 3:固定佣金 | - | - |
| 1 | data.ad_commission_rate | ad_commission_rate | - | 9 | 10.5 | 最低双佣金投放期佣金率 | - | - |
| 0 | total | total | - | 1 | 100 | 数据总数，游标模式下不返回 | - | R1 |
| 0 | next_cursor | next_cursor | - | 2 | oiofw00902j43njl..232/232 | 下一页游标。游标模式下返回，最后一页返回空 | - | - |

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
BuyinShopActivityListRequest request = new BuyinShopActivityListRequest();
BuyinShopActivityListParam param = request.getParam();
param.setApplyStatus(1);
param.setPage(1L);
param.setPageSize(20L);
param.setCommissionRateMin(5);
param.setCommissionRateMax(5);
param.setServiceRateMin(5);
param.setServiceRateMax(5);
param.setProductCategoryId(1);
param.setInstActiName("一个团长");
param.setRetrieveMode(1);
param.setCursor("/ep2kokeo21me..lfkeokfok3o");
param.setColonelBuyinId(4739745019873796L);
param.setAdCommissionRateMin(5);
param.setAdServiceRateMin(5);
param.setCosLimitType(1);
param.setAdServiceRateMax(5);
param.setAdCommissionRateMax(5);
BuyinShopActivityListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinShopActivityListRequest();
$param = new BuyinShopActivityListParam();
$request->setParam($param);
$param->apply_status = 1;
$param->page = 1;
$param->page_size = 20;
$param->commission_rate_min = 5;
$param->commission_rate_max = 5;
$param->service_rate_min = 5;
$param->service_rate_max = 5;
$param->product_category_id = 1;
$param->inst_acti_name = "一个团长";
$param->retrieve_mode = 1;
$param->cursor = "/ep2kokeo21me..lfkeokfok3o";
$param->colonel_buyin_id = 4739745019873796;
$param->ad_commission_rate_min = 5;
$param->ad_service_rate_min = 5;
$param->cos_limit_type = 1;
$param->ad_service_rate_max = 5;
$param->ad_commission_rate_max = 5;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinShopActivityListRequest()
param = request.getParams()
param.apply_status = 1
param.page = 1
param.page_size = 20
param.commission_rate_min = 5
param.commission_rate_max = 5
param.service_rate_min = 5
param.service_rate_max = 5
param.product_category_id = 1
param.inst_acti_name = "一个团长"
param.retrieve_mode = 1
param.cursor = "/ep2kokeo21me..lfkeokfok3o"
param.colonel_buyin_id = 4739745019873796
param.ad_commission_rate_min = 5
param.ad_service_rate_min = 5
param.cos_limit_type = 1
param.ad_service_rate_max = 5
param.ad_commission_rate_max = 5
response = request.execute(accessToken)

```

### go

```go
request := buyin_ShopActivityList_request.New()
param := request.GetParams()
param.ApplyStatus = 1
param.Page = 1
param.PageSize = 20
param.CommissionRateMin = 5
param.CommissionRateMax = 5
param.ServiceRateMin = 5
param.ServiceRateMax = 5
param.ProductCategoryId = 1
param.InstActiName = "一个团长"
param.RetrieveMode = 1
param.Cursor = "/ep2kokeo21me..lfkeokfok3o"
param.ColonelBuyinId = 4739745019873796
param.AdCommissionRateMin = 5
param.AdServiceRateMin = 5
param.CosLimitType = 1
param.AdServiceRateMax = 5
param.AdCommissionRateMax = 5
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinShopActivityListRequest();
var param = request.BuildParam();
param.ApplyStatus = 1;
param.Page = 1;
param.PageSize = 20;
param.CommissionRateMin = 5;
param.CommissionRateMax = 5;
param.ServiceRateMin = 5;
param.ServiceRateMax = 5;
param.ProductCategoryId = 1;
param.InstActiName = "一个团长";
param.RetrieveMode = 1;
param.Cursor = "/ep2kokeo21me..lfkeokfok3o";
param.ColonelBuyinId = 4739745019873796;
param.AdCommissionRateMin = 5;
param.AdServiceRateMin = 5;
param.CosLimitType = 1;
param.AdServiceRateMax = 5;
param.AdCommissionRateMax = 5;
var response = request.Execute<BuyinShopActivityListResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:8197 | 不允许继续翻页，请使用游标模式加载更多数据 | 请使用游标模式加载更多数据，详情：https://op.jinritemai.com/docs/notice-docs/5/3237 |
| 50002 | 业务处理失败 | isv.business-failed:16384 | 16384:非法团长百应 id | 16384:非法团长百应 id |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
