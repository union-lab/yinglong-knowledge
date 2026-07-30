# /order/addressModify

> 中文说明：用于卖家和买家沟通后，主动帮买家修改收货信息  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/290>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/addressModify |
| 中文名称 | 用于卖家和买家沟通后，主动帮买家修改收货信息 |
| 文档目录 | 订单API |
| Article ID | 290 |
| 文档版本 | V1.06 |
| 官方更新时间 | 2024/7/31 14:07:36 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

1、支持单独修改收货地址、收货人信息和收货人电话号码，
2、如果修改收货地址，那么post_addr中的所有字段都必传。

## 权限包

- 订单 / 订单编辑（packageType=1）；适用应用类目：卡券商工具、COD服务、跨境供应链服务、跨境电商、售后管理、打单发货-微应用、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、商品供应链、电商ERP
- p测试权限组 / 测试api权限包（packageType=1）；适用应用类目：服务市场按次订购-模板服务、服务市场按次订购-微应用、测试类目、内部测类目、微应用多端-测试、agent类目测试、火山服务测试类目

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.addressModify | 调用的API接口名称 | - | - |
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
| 0 | order_id | ShopOrderId | true | 2 | 4784385386387328490 | 订单号1 | - | - |
| 0 | post_addr | PostAddr | false | 5 | - | 修改收货地址，post_addr中的所有字段都必传 | - | - |
| 1 | post_addr.province | province | false | 5 | - | 省 | - | - |
| 2 | post_addr.province.id | id | false | 2 | 112 | 省id | - | - |
| 2 | post_addr.province.name | name | false | 2 | 北京 | 省名称 | - | - |
| 1 | post_addr.city | city | false | 5 | - | 城市 | - | - |
| 2 | post_addr.city.id | id | false | 2 | 110000 | 城市id | - | - |
| 2 | post_addr.city.name | name | false | 2 | 北京市 | 城市名称 | - | - |
| 1 | post_addr.town | town | false | 5 | - | 镇 | - | - |
| 2 | post_addr.town.id | id | false | 2 | 110108 | 镇id | - | - |
| 2 | post_addr.town.name | name | false | 2 | 海淀区 | 镇名称 | - | - |
| 1 | post_addr.street | street | false | 5 | - | 街道 | - | - |
| 2 | post_addr.street.id | id | false | 2 | 110108011 | 街道id | - | - |
| 2 | post_addr.street.name | name | false | 2 | 中关村街道 | 街道名称 | - | - |
| 1 | post_addr.address_detail | detail | false | 2 | 互联网金融 | 详细地址 | - | - |
| 1 | post_addr.land_mark | landmark | false | 2 | 空 | 暂时未使用的字段 | - | - |
| 0 | post_receiver | PostReceiver | false | 2 | 艾一一 | 收货人姓名 | - | - |
| 0 | post_tel | PostTel | false | 2 | 12312341234 | 收货人电话号码 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | need_user_review | NeedUserReview | - | 4 | true | true 表示当前改地址需要消费者确认，消费者确认之后才修改地址<br>false 表示当前改地址不需要消费者确认，直接修改成功 | - | - |

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
OrderAddressModifyRequest request = new OrderAddressModifyRequest();
OrderAddressModifyParam param = request.getParam();
param.setOrderId("4784385386387328490");
param.setPostReceiver("艾一一");
param.setPostTel("12312341234");
OrderAddressModifyResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderAddressModifyRequest();
$param = new OrderAddressModifyParam();
$request->setParam($param);
$param->order_id = "4784385386387328490";
$param->post_receiver = "艾一一";
$param->post_tel = "12312341234";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderAddressModifyRequest()
param = request.getParams()
param.order_id = "4784385386387328490"
param.post_receiver = "艾一一"
param.post_tel = "12312341234"
response = request.execute(accessToken)

```

### go

```go
request := order_addressModify_request.New()
param := request.GetParams()
param.OrderId = "4784385386387328490"
param.PostReceiver = "艾一一"
param.PostTel = "12312341234"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderAddressModifyRequest();
var param = request.BuildParam();
param.OrderId = "4784385386387328490";
param.PostReceiver = "艾一一";
param.PostTel = "12312341234";
var response = request.Execute<OrderAddressModifyResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:80004 | 未更改任何数据，请检查后重新提交 | 检查参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:20003 | 订单不存在 | 校验订单之后，再提交 |
| 40004 | 非法的参数 | isv.parameter-invalid:20002 | 手机号格式错误，请修改后重试 | 校验参数 |
| 50002 | 业务处理失败 | isv.business-failed:80001 | 部分发货不能修改收货地址 | 不要重试 |
| 50002 | 业务处理失败 | isv.business-failed:8888 | 8888:call ChangeAddress failed | 系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:80002 | 80002:详细地址长度格式不符合要求，请限制在1-60个汉字内 | 详细地址长度格式不符合要求，请限制在1-60个汉字内 |
| 50002 | 业务处理失败 | isv.business-failed:40001 | 40001:热门商品下单后无法修改地址 | 热门商品下单后无法修改地址 |
| 50002 | 业务处理失败 | isv.business-failed:80102 | 该订单部分发货，不支持修改地址。 | - |
| 50002 | 业务处理失败 | isv.business-failed:700007 | 查询订单详情错误 | - |
| 50002 | 业务处理失败 | isv.business-failed:50004 | 订单不属于当前用户 | - |
| 50002 | 业务处理失败 | isv.business-failed:80101 | 订单含有跨境商品且用户已支付，不支持修改地址。 | - |
| 50002 | 业务处理失败 | isv.business-failed:80120 | 收件人长度需为2-25字，请修改 | - |
| 50002 | 业务处理失败 | isv.business-failed:80119 | 手机号格式有误，请修改 | - |
| 50002 | 业务处理失败 | isv.business-failed:80113 | 请输入正确的市 | - |
| 50002 | 业务处理失败 | isv.business-failed:80123 | 新地址与消费者申请修改地址冲突，请和消费者确认后重新提交 | - |
| 50002 | 业务处理失败 | isv.business-failed:80114 | 请输入正确的区/县 | - |
| 50002 | 业务处理失败 | isv.business-failed:80118 | 系统识别当前地址为商家地址，请和消费者确认后重新提交 | - |
| 50002 | 业务处理失败 | isv.business-failed:80112 | 请输入正确的省 | - |
| 50002 | 业务处理失败 | isv.business-failed:80117 | 新地址是双地址，请修改，避免影响配送 | - |
| 50002 | 业务处理失败 | isv.business-failed:80121 | 详细地址长度需为2-60字，请修改 | - |
| 50002 | 业务处理失败 | isv.business-failed:80115 | 请输入正确的街道 | - |
| 50002 | 业务处理失败 | isv.business-failed:80131 | 当前存在待用户确认的改地址任务 | - |
| 50002 | 业务处理失败 | isv.business-failed:80129 | 商品已报名平台包邮活动，修改地址不满足活动包邮规则 | - |
| 50002 | 业务处理失败 | isv.business-failed:80103 | 该订单为小时达订单，不支持修改地址。 | - |
| 50002 | 业务处理失败 | isv.business-failed:50067 | 当日改地址次数达到限额 | - |
| 50002 | 业务处理失败 | isv.business-failed:20015 | 数据更新失败 | - |
| 50002 | 业务处理失败 | isv.business-failed:50066 | 50066:消息幂等校验失败 | 50066:消息幂等校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:20001 | 20001:service error%!(EXTRA string=消息幂等校验失败) | 20001:service error%!(EXTRA string=消息幂等校验失败) |
| 50002 | 业务处理失败 | isv.business-failed:80007 | 80007:订单已享政府补贴,暂不支持修改该地址 | 80007:订单已享政府补贴,暂不支持修改该地址 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
