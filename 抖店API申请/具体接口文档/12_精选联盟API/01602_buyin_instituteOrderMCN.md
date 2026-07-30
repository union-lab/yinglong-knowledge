# /buyin/instituteOrderMCN

> 中文说明：查询MCN机构的抖音、火山、西瓜和头条的联盟订单，需要MCN机构百应授权  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1602>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/instituteOrderMCN |
| 中文名称 | 查询MCN机构的抖音、火山、西瓜和头条的联盟订单，需要MCN机构百应授权 |
| 文档目录 | 精选联盟API |
| Article ID | 1602 |
| 文档版本 | V5.06 |
| 官方更新时间 | 2022/9/9 16:48:00 |
| 授权主体 | ["机构","MCN机构"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

查询MCN机构的抖音、火山、西瓜和头条的联盟订单（MCN机构需要与达人需完成账号绑定），需要MCN机构百应授权

## 权限包

- 精选联盟 / 精选联盟机构订单（packageType=1）；适用应用类目：撮合服务商、联盟机构自研
- 精选联盟 / 机构订单（packageType=1）；适用应用类目：机构选品、机构管理、联盟机构自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.instituteOrderMCN | 调用的API接口名称 | - | - |
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
| 0 | size | size | false | 1 | 20 | 每页订单数目，取值区间： [1, 200] | - | - |
| 0 | cursor | cursor | false | 2 | 0 | 下一页索引（第一页传“0”） | - | - |
| 0 | start_time | start_time | false | 2 | 2006-01-02 15:04:05 | 支付时间开始，最早支持2021年01月01日 | - | - |
| 0 | end_time | end_time | false | 2 | 2006-01-02 15:04:05 | 支付时间结束，该时间不能超过start_time+90 | - | - |
| 0 | order_ids | order_ids | false | 2 | 4737996432465788974,4737996432465780075 | 订单号，时间范围和订单号必须指定至少一个。多个订单号用英文 , 分隔，最多支持10个订单号 | - | - |
| 0 | time_type | time_type | false | 2 | pay | 查询时间类型。pay: 支付时间（默认）; update：联盟侧更新时间，非订单状态更新时间 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 结果 | - | R1 |
| 1 | data.orders | orders | - | 3 | - | 订单列表 | - | R1 |
| 2 | data.orders.order_id | order_id | - | 2 | 4737996432465788974 | 订单号 | - | R1 |
| 2 | data.orders.product_id | product_id | - | 2 | 3450632721376902816 | 商品id | - | R1 |
| 2 | data.orders.product_name | product_name | - | 2 | 测试商品 | 商品名称 | - | R1 |
| 2 | data.orders.product_img | product_img | - | 2 | https://tosv.boe.byted.org/obj/temai/7e92a281163e33cedef99d8735d1e90bwww828-708 | 商品图片URL | - | R1 |
| 2 | data.orders.author_account | author_account | - | 2 | 我的昵称 | 作者账号昵称(抖音/火山作者) | - | R1 |
| 2 | data.orders.author_openid | author_openid | - | 2 | 1@#4KFvA/leNWHRVvi9bXuZFV6ZwicT0g7Ji0rr/tT9o1JmH+tq+A7YOm0+zL5SfNHSkk4J+M9w8NanrFnM3qsrZzdxPdBL | 作者抖店open_id | - | R1 |
| 2 | data.orders.shop_name | shop_name | - | 2 | 我的店铺 | 商家名称 | - | R1 |
| 2 | data.orders.total_pay_amount | total_pay_amount | - | 1 | 2100 | 订单支付金额，单位分 | - | R1 |
| 2 | data.orders.commission_rate | commission_rate | - | 1 | 2000 | 达人佣金率，此处保存为真实数据x1万之后，如真实是35%，这里是3500 | - | R1 |
| 2 | data.orders.estimated_commission | estimated_commission | - | 1 | 123 | 达人预估佣金收入，单位分 | - | R1 |
| 2 | data.orders.real_commission | real_commission | - | 1 | 123 | 达人实际佣金收入，单位分 | - | R1 |
| 2 | data.orders.flow_point | flow_point | - | 2 | PAY_SUCC | 订单状态(PAY_SUCC:支付完成 REFUND:退款 SETTLE:结算 CONFIRM: 确认收货) | - | R1 |
| 2 | data.orders.app | app | - | 2 | 抖音 | App名称（抖音，火山，西瓜，头条） | - | R1 |
| 2 | data.orders.update_time | update_time | - | 2 | 2006-01-02 15:04:05 | 更新时间  [联盟侧订单更新时间] | - | R1 |
| 2 | data.orders.pay_success_time | pay_success_time | - | 2 | 2006-01-02 15:04:05 | 付款时间 | - | R1 |
| 2 | data.orders.settle_time | settle_time | - | 2 | 2006-01-02 15:04:05 | 结算时间 | - | R1 |
| 2 | data.orders.pay_goods_amount | pay_goods_amount | - | 1 | 1100 | 预估参与结算金额 | - | R1 |
| 2 | data.orders.settled_goods_amount | settled_goods_amount | - | 1 | 0 | 实际参与结算金额 | - | R1 |
| 2 | data.orders.shop_id | shop_id | - | 1 | 12345 | 店铺ID | - | R1 |
| 2 | data.orders.shop_estimated_commission | shop_estimated_commission | - | 1 | 120 | 预估佣金支出 | - | R1 |
| 2 | data.orders.shop_real_commission | shop_real_commission | - | 1 | 120 | 实际佣金支出 | - | R1 |
| 2 | data.orders.alliance_split_rate | alliance_split_rate | - | 1 | 20 | 分成比例 | - | R1 |
| 2 | data.orders.tech_service_fee_rate | tech_service_fee_rate | - | 1 | 100 | 平台技术服务费率 | - | R1 |
| 2 | data.orders.estimated_tech_service_fee | estimated_tech_service_fee | - | 1 | 100 | 预估平台技术服务费 | - | R1 |
| 2 | data.orders.settled_tech_service_fee | settled_tech_service_fee | - | 1 | 100 | 结算平台技术服务费 | - | R1 |
| 2 | data.orders.estimated_institution_commission | estimated_institution_commission | - | 1 | 20 | 预估机构分成 | - | R1 |
| 2 | data.orders.institution_commission | institution_commission | - | 1 | 20 | 机构分成 | - | R1 |
| 2 | data.orders.pid_info | pid_info | - | 5 | - | 分销PID信息 | - | R1 |
| 3 | data.orders.pid_info.pid | pid | - | 2 | dy_1234_33_455 | PID | - | R1 |
| 3 | data.orders.pid_info.external_info | external_info | - | 2 | 1222_2333 | 自定义参数 | - | R1 |
| 3 | data.orders.pid_info.media_type_name | media_type_name | - | 2 | Live | 分销类型，直播：Live, 商品: ProductDetail | - | R1 |
| 2 | data.orders.item_num | item_num | - | 1 | 1 | 商品数目 | - | R1 |
| 2 | data.orders.refund_time | refund_time | - | 2 | 2006-01-02 15:04:05 | 退款订单退款时间 | - | R1 |
| 2 | data.orders.estimated_total_commission | estimated_total_commission | - | 1 | 20 | 总佣金（预估），对应百应订单明细中的总佣金 | - | R1 |
| 2 | data.orders.ads_estimated_commission | ads_estimated_commission | - | 1 | 20 | 渠道预估佣金收入，单位分 | - | R1 |
| 2 | data.orders.ads_real_commission | ads_real_commission | - | 1 | 20 | 渠道实际佣金收入，单位分 | - | R1 |
| 2 | data.orders.author_short_id | author_short_id | - | 2 | 我的昵称 | 作者抖音/火山号 | - | R1 |
| 2 | data.orders.ads_promotion_rate | ads_promotion_rate | - | 1 | 20 | 达人/自播商家给渠道设置的推广费率 | - | R1 |
| 2 | data.orders.extra | extra | - | 8 | - | 其他 | - | R1 |
| 2 | data.orders.author_buyin_id | author_buyin_id | - | 2 | 123455678 | 达人百应ID | - | R1 |
| 2 | data.orders.media_type | media_type | - | 2 | shop_list | 带货体裁类型。shop_list：橱窗；video：视频；live：直播；others：其他 | - | R1 |
| 2 | data.orders.media_id | media_id | - | 1 | 16872413 | 带货体裁 id（只返回视频/直播间 id） | - | R1 |
| 2 | data.orders.pay_subsidy | pay_subsidy | - | 1 | 100 | 支付补贴（单位：分） | - | R1 |
| 2 | data.orders.platform_subsidy | platform_subsidy | - | 1 | 100 | 平台补贴（单位：分） | - | R1 |
| 2 | data.orders.author_subsidy | author_subsidy | - | 1 | 100 | 达人补贴（单位：分） | - | R1 |
| 2 | data.orders.estimated_user_stepped_commission | estimated_user_stepped_commission | - | 1 | 100 | 达人预估奖励佣金收入（单位：分） | - | R1 |
| 2 | data.orders.estimated_inst_stepped_commission | estimated_inst_stepped_commission | - | 1 | 100 | 机构预估奖励佣金收入（单位：分） | - | R1 |
| 2 | data.orders.settle_user_stepped_commission | settle_user_stepped_commission | - | 1 | 100 | 达人结算奖励佣金收入（单位：分） | - | R1 |
| 2 | data.orders.settle_inst_stepped_commission | settle_inst_stepped_commission | - | 1 | 100 | 机构结算奖励佣金收入（单位：分） | - | R1 |
| 2 | data.orders.is_stepped_plan | is_stepped_plan | - | 4 | true | 是否为阶梯佣金 | - | R1 |
| 1 | data.cursor | cursor | - | 2 | 4737996432465788974 | 下一页索引 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/instituteOrderMCN?app_key=your_appkey_here&method=buyin.instituteOrderMCN&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/instituteOrderMCN?app_key=your_appkey_here&method=buyin.instituteOrderMCN&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinInstituteOrderMCNRequest request = new BuyinInstituteOrderMCNRequest();
BuyinInstituteOrderMCNParam param = request.getParam();
param.setSize(20L);
param.setCursor("0");
param.setStartTime("2006-01-02 15:04:05");
param.setEndTime("2006-01-02 15:04:05");
param.setOrderIds("4737996432465788974,4737996432465780075");
param.setTimeType("pay");
BuyinInstituteOrderMCNResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinInstituteOrderMCNRequest();
$param = new BuyinInstituteOrderMCNParam();
$request->setParam($param);
$param->size = 20;
$param->cursor = "0";
$param->start_time = "2006-01-02 15:04:05";
$param->end_time = "2006-01-02 15:04:05";
$param->order_ids = "4737996432465788974,4737996432465780075";
$param->time_type = "pay";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinInstituteOrderMCNRequest()
param = request.getParams()
param.size = 20
param.cursor = "0"
param.start_time = "2006-01-02 15:04:05"
param.end_time = "2006-01-02 15:04:05"
param.order_ids = "4737996432465788974,4737996432465780075"
param.time_type = "pay"
response = request.execute(accessToken)

```

### go

```go
request := buyin_instituteOrderMCN_request.New()
param := request.GetParams()
param.Size = 20
param.Cursor = "0"
param.StartTime = "2006-01-02 15:04:05"
param.EndTime = "2006-01-02 15:04:05"
param.OrderIds = "4737996432465788974,4737996432465780075"
param.TimeType = "pay"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinInstituteOrderMCNRequest();
var param = request.BuildParam();
param.Size = 20;
param.Cursor = "0";
param.StartTime = "2006-01-02 15:04:05";
param.EndTime = "2006-01-02 15:04:05";
param.OrderIds = "4737996432465788974,4737996432465780075";
param.TimeType = "pay";
var response = request.Execute<BuyinInstituteOrderMCNResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:1031 | 无效size | 参数校验失败：无效size |
| 40004 | 非法的参数 | isv.parameter-invalid:1032 | 无效order_ids | 参数校验失败：无效order_ids |
| 40004 | 非法的参数 | isv.parameter-invalid:1033 | 请指定时间范围或订单号 | 参数校验失败: 请指定时间范围或订单号 |
| 40004 | 非法的参数 | isv.parameter-invalid:1034 | 无效开始时间 | 参数校验失败：无效开始时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:1035 | 无效结束时间 | 参数校验失败：无效结束时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:1036 | 无效时间区间（开始时间不能大于结束时间，并且不能小于t-90d） | 参数校验失败：无效时间区间（开始时间不能大于结束时间，并且不能小于t-90d） |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4168 | 起始查询时间超过了最久查询限制 | 起始查询时间超过了最久查询限制 |
| 50002 | 业务处理失败 | isv.business-failed:4196 | 需【电商MCN机构】角色授权后访问 | 需【电商MCN机构】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:4497 | 4497:仅支持查询支付时间近1年的订单数据 | 4497:仅支持查询支付时间近1年的订单数据 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
