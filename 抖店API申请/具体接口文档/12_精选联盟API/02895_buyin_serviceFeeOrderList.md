# /buyin/serviceFeeOrderList

> 中文说明：可查询MCN机构绑定达人周期内百应商达合作订单（包含纯佣及坑位费订单）数据情况  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2895>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/serviceFeeOrderList |
| 中文名称 | 可查询MCN机构绑定达人周期内百应商达合作订单（包含纯佣及坑位费订单）数据情况 |
| 文档目录 | 精选联盟API |
| Article ID | 2895 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2023/5/30 19:28:50 |
| 授权主体 | ["MCN机构"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

可查询MCN机构绑定达人周期内百应商达合作订单（包含纯佣及坑位费订单）数据情况

## 权限包

- 精选联盟 / 机构订单（packageType=1）；适用应用类目：机构选品、机构管理、联盟机构自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.serviceFeeOrderList | 调用的API接口名称 | - | - |
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
| 0 | start_time | start_time | false | 2 | 2006-01-02 15:04:05 | 订单更新开始时间 | - | - |
| 0 | end_time | end_time | false | 2 | 2006-01-02 15:04:05 | 订单更新结束时间 | - | - |
| 0 | kol_buyin_id | kol_buyin_id | true | 2 | 798984394090430 | 达人百应ID | - | - |
| 0 | page | page | true | 1 | 1 | 页码，起始1 | - | - |
| 0 | page_size | page_size | true | 1 | 20 | 分页大小，20 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | order_list | order_list | - | 3 | - | 订单列表 | - | R1 |
| 1 | order_list.order_fee | order_fee | - | 1 | 10000 | 订单服务费，单位分 | - | - |
| 1 | order_list.refund_fee | refund_fee | - | 1 | 0 | 订单已退还服务费，单位分 | - | - |
| 1 | order_list.real_fee | real_fee | - | 1 | 10000 | 订单实际结算(转账)服务费，单位分 | - | - |
| 1 | order_list.order_id | order_id | - | 1 | 59209302930 | 订单id | - | - |
| 1 | order_list.status | status | - | 1 | 20 | 当前主状态。20：待签署 商家发起待达人签署；30：待交付 达人已签署；40：待验收 达人已交付；50：已完成 商家已验收；60： 取消中 一方发起取消 70：已结束 非正常结束 | - | - |
| 1 | order_list.order_type | order_type | - | 7 | 0 | 合作模式。 1：纯佣金；2：等比例；3：一口价 | - | - |
| 1 | order_list.product_info | product_info | - | 3 | - | 商品信息 | - | R1 |
| 2 | order_list.product_info.product_id | product_id | - | 2 | 34859894390009 | 商品id | - | - |
| 2 | order_list.product_info.product_url | product_url | - | 2 | https://haohuo.jinritemai.com/ecommerce/trade/detail/index.html?id=3568771727260551014 | 商品链接(普通链接或团长链接) 。目前仅外部机构订单有数据 | - | - |
| 2 | order_list.product_info.live_price | live_price | - | 1 | 1000 | 约定直播价格,单位分 | - | - |
| 2 | order_list.product_info.min_stock | min_stock | - | 1 | 100 | 库存量 | - | - |
| 2 | order_list.product_info.custom_rate | custom_rate | - | 1 | 20 | 佣金率（0-100） | - | - |
| 2 | order_list.product_info.is_presell | is_presell | - | 4 | false | 是否预授商品 | - | - |
| 1 | order_list.live_type | live_type | - | 1 | 1 | 直播类型 1专场 2混场 | - | - |
| 1 | order_list.has_shop_entrance | has_shop_entrance | - | 4 | false | 是否品牌专场直播 | - | - |
| 1 | order_list.min_gmv | min_gmv | - | 1 | 1000 | 最低结算额,单位分 | - | - |
| 1 | order_list.live_start_time | live_start_time | - | 2 | 2006-01-02 15:04:05 | 直播开始时间 | - | - |
| 1 | order_list.live_end_time | live_end_time | - | 2 | 2006-01-02 15:04:05 | 直播结束时间 | - | - |
| 1 | order_list.introduce_duration | introduce_duration | - | 1 | 200 | 单品介绍时长，单位秒 | - | - |
| 1 | order_list.max_deliver_time | max_deliver_time | - | 1 | 86000 | 最大发货时间，单位秒 | - | - |
| 1 | order_list.assure_price | assure_price | - | 1 | 1 | 是否保价 0:约定不保价 1:约定保价 | - | - |
| 1 | order_list.assure_price_channel | assure_price_channel | - | 1 | 1 | 是否渠道等价 1:全渠道最低价，允许与其他渠道等价 2:全渠道最低价，不可与其他渠道等价 | - | - |
| 1 | order_list.assure_price_pred | assure_price_pred | - | 1 | 15 | 保价前x日 | - | - |
| 1 | order_list.assure_price_postd | assure_price_postd | - | 1 | 15 | 保价后x日 | - | - |
| 1 | order_list.ad_act | ad_act | - | 1 | 0 | 是否投放广告 0:约定不投放广告 1:约定投放广告 | - | - |
| 1 | order_list.ad_act_amount | ad_act_amount | - | 1 | 100 | 广告投放额,单位分 | - | - |
| 1 | order_list.ad_act_role | ad_act_role | - | 1 | 1 | 广告投放方 1商家 2达人 | - | - |
| 1 | order_list.addon | addon | - | 2 | 补充条款 | 其它约定(补充说明) | - | - |
| 1 | order_list.create_time | create_time | - | 2 | 2006-01-02 15:04:05 | 订单创建时间 | - | - |
| 1 | order_list.update_time | update_time | - | 2 | 2006-01-02 15:04:05 | 订单更新时间 | - | - |
| 0 | total | total | - | 1 | 10 | 总数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.comyunc/wms/inbound/create?app_key=your_appkey_here&method=yunc.wms.inbound.create&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.comyunc/wms/inbound/create?app_key=your_appkey_here&method=yunc.wms.inbound.create&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinServiceFeeOrderListRequest request = new BuyinServiceFeeOrderListRequest();
BuyinServiceFeeOrderListParam param = request.getParam();
param.setStartTime("2006-01-02 15:04:05");
param.setEndTime("2006-01-02 15:04:05");
param.setKolBuyinId("798984394090430");
param.setPage(1L);
param.setPageSize(20L);
BuyinServiceFeeOrderListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinServiceFeeOrderListRequest();
$param = new BuyinServiceFeeOrderListParam();
$request->setParam($param);
$param->start_time = "2006-01-02 15:04:05";
$param->end_time = "2006-01-02 15:04:05";
$param->kol_buyin_id = "798984394090430";
$param->page = 1;
$param->page_size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinServiceFeeOrderListRequest()
param = request.getParams()
param.start_time = "2006-01-02 15:04:05"
param.end_time = "2006-01-02 15:04:05"
param.kol_buyin_id = "798984394090430"
param.page = 1
param.page_size = 20
response = request.execute(accessToken)

```

### go

```go
request := buyin_serviceFeeOrderList_request.New()
param := request.GetParams()
param.StartTime = "2006-01-02 15:04:05"
param.EndTime = "2006-01-02 15:04:05"
param.KolBuyinId = "798984394090430"
param.Page = 1
param.PageSize = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinServiceFeeOrderListRequest();
var param = request.BuildParam();
param.StartTime = "2006-01-02 15:04:05";
param.EndTime = "2006-01-02 15:04:05";
param.KolBuyinId = "798984394090430";
param.Page = 1;
param.PageSize = 20;
var response = request.Execute<BuyinServiceFeeOrderListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1031 | 无效size | 无效size |
| 40004 | 非法的参数 | isv.parameter-invalid:1034 | 无效开始时间 | 无效开始时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:1035 | 无效结束时间 | 无效结束时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:4157 | 无效用户 | 无效用户 |
| 40004 | 非法的参数 | isv.parameter-invalid:263 | 订单类型无效 | 订单类型无效 |
| 50002 | 业务处理失败 | isv.business-failed:4510 | 达人不属于机构 | 达人不属于机构 |
| 50002 | 业务处理失败 | isv.business-failed:4196 | 需【电商MCN机构】角色授权后访问 | 需【电商MCN机构】角色授权后访问 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
