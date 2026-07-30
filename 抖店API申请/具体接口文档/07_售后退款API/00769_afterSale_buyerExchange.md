# /afterSale/buyerExchange

> 中文说明：商家处理换货请求接口  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/769>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/buyerExchange |
| 中文名称 | 商家处理换货请求接口 |
| 文档目录 | 售后退款API |
| Article ID | 769 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2021/8/3 21:52:23 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 0 |

## 使用说明

商家处理换货请求，此接口负责商家处理买家申请换货后的场景。

## 权限包

- 售后 / 售后管理（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、售后管理、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.buyerExchange | 调用的API接口名称 | - | - |
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
| 0 | aftersale_id | AftersaleId | true | 1 | 7028908275186158347 | 售后ID | - | - |
| 0 | is_reject | IsReject | true | 4 | true | 是否拒绝 | - | - |
| 0 | sms_id | AgreeSmsId | false | 1 | 123123 | 短信模板ID | - | - |
| 0 | comment | Comment | false | 2 | 同意 | 商家留言 | - | - |
| 0 | evidence | Evidence | false | 3 | "" | 商家凭证 | - | - |
| 0 | address_id | AfterSaleAddressId | false | 1 | 123 | 商家选择的换货地址 | - | - |
| 0 | remark | Remark | false | 2 | 好吧，那就换吧 | 商家备注 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/afterSale/buyerExchange?app_key=your_appkey_here&method=afterSale.buyerExchange&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/afterSale/buyerExchange?app_key=your_appkey_here&method=afterSale.buyerExchange&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AfterSaleBuyerExchangeRequest request = new AfterSaleBuyerExchangeRequest();
AfterSaleBuyerExchangeParam param = request.getParam();
param.setAftersaleId(7028908275186158347L);
param.setIsReject(true);
param.setSmsId(123123L);
param.setComment("同意");
param.setEvidence("");
param.setAddressId(123L);
param.setRemark("好吧，那就换吧");
AfterSaleBuyerExchangeResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleBuyerExchangeRequest();
$param = new AfterSaleBuyerExchangeParam();
$request->setParam($param);
$param->aftersale_id = 7028908275186158347;
$param->is_reject = true;
$param->sms_id = 123123;
$param->comment = "同意";
$param->evidence = "";
$param->address_id = 123;
$param->remark = "好吧，那就换吧";
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleBuyerExchangeRequest()
param = request.getParams()
param.aftersale_id = 7028908275186158347
param.is_reject = true
param.sms_id = 123123
param.comment = "同意"
param.evidence = ""
param.address_id = 123
param.remark = "好吧，那就换吧"
response = request.execute(accessToken)

```

### go

```go
request := afterSale_buyerExchange_request.New()
param := request.GetParams()
param.AftersaleId = 7028908275186158347
param.IsReject = true
param.SmsId = 123123
param.Comment = "同意"
param.Evidence = ""
param.AddressId = 123
param.Remark = "好吧，那就换吧"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleBuyerExchangeRequest();
var param = request.BuildParam();
param.AftersaleId = 7028908275186158347;
param.IsReject = true;
param.SmsId = 123123;
param.Comment = "同意";
param.Evidence = "";
param.AddressId = 123;
param.Remark = "好吧，那就换吧";
var response = request.Execute<AfterSaleBuyerExchangeResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10007 | 此订单状态已经发生变化，请刷新 | 检查售后单状态 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 售后类型无法处理 | 检查售后单状态 |
| 20000 | 服务不可用 | isp.service-error:10001 | 服务器繁忙，请刷新后重试 | 检查后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
