# /order/mergeV2

> 中文说明：合单校验接口  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/6649>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/mergeV2 |
| 中文名称 | 合单校验接口 |
| 文档目录 | 订单API |
| Article ID | 6649 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/6/21 17:28:36 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

判断一批待发货订单，哪些可以收件人信息一致，可以使用同一个包裹进行发货： 1. 批处理上限为100 2. 只支持近15天的代发货订单的合单判断； 3. 同一天创建的订单：open_address_id不同的，一定不可以合单；open_address_id相同的，一定可以合单。即同一天的订单根据open_address_id是否相同来判断是否可以合单，跨天的订单且open_address_id不同的再请求本api进行判断 4. 本api只是对订单收货地址是否相同的一个判断，并不会对订单进行合并处理

## 权限包

- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单
- 订单 / 订单信息查询（packageType=1）；适用应用类目：官方微应用、卡券商工具、创新应用大赛_微应用、COD服务、跨境供应链服务、手机行业定制交易、跨境电商、小票打印服务、撮合服务商、客服绩效-微应用、综合保修、碎屏保障、售后管理、任务玩法、财务管理、企业财税服务、直播话术-微应用、营销管理-互动小程序定制、营销管理-小程序定制、打单发货-微应用、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、强管控微应用、教育服务、商家商品推广、商家后台系统、TPA服务、店铺管理、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、品牌会员通、即时零售商家自研、直播工具、互动营销定制、短信营销、订单管理、商品供应链、电商ERP、AI 商品运营、智能外呼
- 物流发货 / 即时零售物流发货（packageType=1）；适用应用类目：即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 订单 / 订单信息管理（packageType=1）；适用应用类目：AI智能客服-微应用
- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.mergeV2 | 调用的API接口名称 | - | - |
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
| 0 | merge_list | mergeList | false | 3 | - | 合单列表 | - | - |
| 1 | merge_list.order_id | orderId | false | 2 | 123123 | 店铺单id | - | - |
| 1 | merge_list.open_address_id | open_address_id | false | 2 | xxxxxxxxxx | open address id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | order_list | orderList | - | 3 | ['123123','4564566'] | 合单结果。可合单的订单ID列表用逗号分隔的字符串表示。比如，1111,2222表示订单1111和订单2222可合并发货。 | 31 | R1 |
| 0 | failed_order | failedOrder | - | 8 | <"111":"订单不在发货状态"> | key是失败订单id，value是失败原因 | 31 | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/kolProductShare?app_key=your_appkey_here&method=buyin.kolProductShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/kolProductShare?app_key=your_appkey_here&method=buyin.kolProductShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderMergeV2Request request = new OrderMergeV2Request();
OrderMergeV2Param param = request.getParam();
OrderMergeV2Response response = request.execute(accessToken);

```

### php

```php
$request = new OrderMergeV2Request();
$param = new OrderMergeV2Param();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = OrderMergeV2Request()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := order_mergeV2_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderMergeV2Request();
var param = request.BuildParam();
var response = request.Execute<OrderMergeV2Response>(accessToken);

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
| 80000 | 风控拦截 | isv.risk-control-failed:300011 | 存在安全风险 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:200101 | 200101:查询订单失败 | 200101:查询订单失败 |
| 50002 | 业务处理失败 | isv.business-failed:100000 | 100000:订单重复：6936337193395099095 | 100000:订单重复：6936337193395099095 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
