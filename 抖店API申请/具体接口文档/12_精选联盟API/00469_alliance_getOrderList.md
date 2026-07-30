# /alliance/getOrderList

> 中文说明：查询联盟订单明细  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/469>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/getOrderList |
| 中文名称 | 查询联盟订单明细 |
| 文档目录 | 精选联盟API |
| Article ID | 469 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/6/13 17:57:01 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1500 |

## 使用说明

查询联盟达人佣金订单明细（order_ids一次最多传入5个订单）

## 权限包

- 精选联盟 / 联盟订单明细查询（packageType=1）；适用应用类目：联盟自研、创新应用大赛_微应用、财务管理、直播话术-微应用、创新应用大赛_软件服务、商家后台系统、直播工具、订单管理、电商ERP
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.getOrderList | 调用的API接口名称 | - | - |
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
| 0 | order_ids | order_ids | true | 3 | [\"id1\",\"id2\",\"id3\"] | 订单id列表 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | code | code | - | 2 | 100000 | 返回编码 | - | - |
| 0 | code_msg | code_msg | - | 2 | success | 返回信息 | - | - |
| 0 | datas | datas | - | 3 | - | 订单明细数据 | - | R1 |
| 1 | datas.order_id | order_id | - | 2 | 4790957107260097836 | 订单id | - | - |
| 1 | datas.product_id | product_id | - | 2 | 3475285904548040556 | 产品id | - | - |
| 1 | datas.author_account | author_account | - | 2 | 北三环小王子 | 达人账户 | - | - |
| 1 | datas.short_id | short_id | - | 2 | 1068048 | 达人short_id | - | - |
| 1 | datas.total_pay_amount | total_pay_amount | - | 99 | 31000 | 用户实付，单位：分 | - | - |
| 1 | datas.commission_rate | commission_rate | - | 99 | 300 | 达人佣金率，以万为基数，比如3000，就是30% | - | - |
| 1 | datas.estimated_comission | estimated_commission | - | 99 | 810 | 预估达人佣金，单位：分；注意：该字段和精选联盟-联盟订单明细模块，预计佣支出（商家预估佣金支出）没有对应关系，一个是达人佣金预估，一个是商家预估佣金支出。 | - | - |
| 1 | datas.real_comission | real_commission | - | 99 | 0 | 真实达人佣金，单位：分 | - | - |
| 1 | datas.order_status | order_status | - | 2 | 支付成功 | 订单状态：支付成功、确认收货、退款、结算 | - | - |
| 1 | datas.shop_id | shop_id | - | 2 | 1111115516 | 店铺id | - | - |
| 1 | datas.alliance_biz_type | alliance_biz_type | - | 2 | COMMON | 业务类型：COMMON普通单、PRE_SELL预售 | - | - |
| 1 | datas.phase_id | phase_id | - | 99 | 1 | 阶段单号：1定金、2尾款 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/getOrderList?app_key=your_appkey_here&method=alliance.getOrderList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/getOrderList?app_key=your_appkey_here&method=alliance.getOrderList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceGetOrderListRequest request = new AllianceGetOrderListRequest();
AllianceGetOrderListParam param = request.getParam();
param.setOrderIds([\"id1\",\"id2\",\"id3\"]);
AllianceGetOrderListResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceGetOrderListRequest();
$param = new AllianceGetOrderListParam();
$request->setParam($param);
$param->order_ids = [\"id1\",\"id2\",\"id3\"];
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceGetOrderListRequest()
param = request.getParams()
param.order_ids = [\"id1\",\"id2\",\"id3\"]
response = request.execute(accessToken)

```

### go

```go
request := alliance_getOrderList_request.New()
param := request.GetParams()
param.OrderIds = [\"id1\",\"id2\",\"id3\"]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceGetOrderListRequest();
var param = request.BuildParam();
param.OrderIds = [\"id1\",\"id2\",\"id3\"];
var response = request.Execute<AllianceGetOrderListResponse>(accessToken);

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
