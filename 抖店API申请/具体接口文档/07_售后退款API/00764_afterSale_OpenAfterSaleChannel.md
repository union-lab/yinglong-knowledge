# /afterSale/OpenAfterSaleChannel

> 中文说明：打开售后通道，使用户可以发起超级售后  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/764>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/OpenAfterSaleChannel |
| 中文名称 | 打开售后通道，使用户可以发起超级售后 |
| 文档目录 | 售后退款API |
| Article ID | 764 |
| 文档版本 | V2.04 |
| 官方更新时间 | 2021/8/13 10:49:03 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

商家打开售后通道

## 权限包

- 售后 / 售后管理（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、售后管理、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.OpenAfterSaleChannel | 调用的API接口名称 | - | - |
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
| 0 | order_id | OrderID | true | 1 | 4810811637262779447 | 订单ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | conclusion | Conclusion | - | 5 | - | 打开售后通道结论 | - | R1 |
| 1 | conclusion.match_conclusion | MatchConclusion | - | 7 | 1 | 匹配到超级售后的类型，1是超售后期售后，2是EP订单超级售后，3是虚拟订单超级售后，4是超售后次数售后 | - | R1 |
| 1 | conclusion.match_message | MatchMessage | - | 2 | "" | 匹配结果的解释，成功时为空 | - | R1 |
| 1 | conclusion.can_apply_type_list | CanApplyTypeList | - | 3 | [1,2] | 当前超级售后可以发起的售后类型，0是退货退款，1是已发货退款，2是未发货退款，3是换货 | - | R1 |
| 1 | conclusion.match_success | MatchSuccess | - | 4 | true | 匹配是否成功，当match_conclusion不为0且can_apply_type_list不是空的时候，此值为true | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/afterSale/OpenAfterSaleChannel?app_key=your_appkey_here&method=afterSale.OpenAfterSaleChannel&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/afterSale/OpenAfterSaleChannel?app_key=your_appkey_here&method=afterSale.OpenAfterSaleChannel&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AfterSaleOpenAfterSaleChannelRequest request = new AfterSaleOpenAfterSaleChannelRequest();
AfterSaleOpenAfterSaleChannelParam param = request.getParam();
param.setOrderId(4810811637262779447L);
AfterSaleOpenAfterSaleChannelResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleOpenAfterSaleChannelRequest();
$param = new AfterSaleOpenAfterSaleChannelParam();
$request->setParam($param);
$param->order_id = 4810811637262779447;
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleOpenAfterSaleChannelRequest()
param = request.getParams()
param.order_id = 4810811637262779447
response = request.execute(accessToken)

```

### go

```go
request := afterSale_OpenAfterSaleChannel_request.New()
param := request.GetParams()
param.OrderId = 4810811637262779447
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleOpenAfterSaleChannelRequest();
var param = request.BuildParam();
param.OrderId = 4810811637262779447;
var response = request.Execute<AfterSaleOpenAfterSaleChannelResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:11001 | 无权操作此订单 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10000 | 系统错误，请重试 | 系统错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:12000 | 售后入口已经打开，请联系买家在用户端申请售后 | 售后入口已经打开，请联系买家在用户端申请售后 |
| 50002 | 业务处理失败 | isv.business-failed:12001 | 12001:售后入口已经打开，请联系买家在用户端申请售后 | 12001:售后入口已经打开，请联系买家在用户端申请售后 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
