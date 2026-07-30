# /afterSale/buyerExchangeConfirm

> 中文说明：商家确认是否收到换货  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/768>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/buyerExchangeConfirm |
| 中文名称 | 商家确认是否收到换货 |
| 文档目录 | 售后退款API |
| Article ID | 768 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2021/8/3 21:56:02 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 0 |

## 使用说明

用户填写换货物流后，商家处理，确认是否收到换货，并二次发货

## 权限包

- 售后 / 售后管理（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、售后管理、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.buyerExchangeConfirm | 调用的API接口名称 | - | - |
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
| 0 | aftersale_id | AftersaleId | true | 1 | 123123123123123 | 可以从/afterSale/refundProcessDetail接口或者消息监听获取 | - | - |
| 0 | is_reject | IsReject | true | 4 | true | 处理方式： false：确认仓库收到退回货货物并二次发货（或直接退款） true：拒绝 | - | - |
| 0 | action | Action | false | 2 | refund_agree | s_reject为false时，必填，用于指定换货操作行为；换货动作： refund_agree ： 同意换货转退款 exchange_agree：同意换货并发货 | - | - |
| 0 | comment | Comment | false | 2 | 1 | is_reject = true 时需要选择拒绝原因；具体各个可选值对应的拒绝原因见下表 | - | - |
| 0 | evidence | Evidence | false | 3 | ["http://pic/pic.jpeg"] | 凭证图片，只能传一张 | - | - |
| 0 | logistics_code | LogisticsCode | false | 2 | 123 | is_reject = false时需要上传物流单号 | - | - |
| 0 | company_code | CompanyCode | false | 2 | 1 | is_reject = false时需要上传物流公司编号 ，如圆通为yuantong | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/afterSale/buyerExchangeConfirm?app_key=your_appkey_here&method=afterSale.buyerExchangeConfirm&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/afterSale/buyerExchangeConfirm?app_key=your_appkey_here&method=afterSale.buyerExchangeConfirm&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AfterSaleBuyerExchangeConfirmRequest request = new AfterSaleBuyerExchangeConfirmRequest();
AfterSaleBuyerExchangeConfirmParam param = request.getParam();
param.setAftersaleId(123123123123123L);
param.setIsReject(true);
param.setAction("refund_agree");
param.setComment("1");
param.setEvidence(["http://pic/pic.jpeg"]);
param.setLogisticsCode("123");
param.setCompanyCode("1");
AfterSaleBuyerExchangeConfirmResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleBuyerExchangeConfirmRequest();
$param = new AfterSaleBuyerExchangeConfirmParam();
$request->setParam($param);
$param->aftersale_id = 123123123123123;
$param->is_reject = true;
$param->action = "refund_agree";
$param->comment = "1";
$param->evidence = ["http://pic/pic.jpeg"];
$param->logistics_code = "123";
$param->company_code = "1";
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleBuyerExchangeConfirmRequest()
param = request.getParams()
param.aftersale_id = 123123123123123
param.is_reject = true
param.action = "refund_agree"
param.comment = "1"
param.evidence = ["http://pic/pic.jpeg"]
param.logistics_code = "123"
param.company_code = "1"
response = request.execute(accessToken)

```

### go

```go
request := afterSale_buyerExchangeConfirm_request.New()
param := request.GetParams()
param.AftersaleId = 123123123123123
param.IsReject = true
param.Action = "refund_agree"
param.Comment = "1"
param.Evidence = ["http://pic/pic.jpeg"]
param.LogisticsCode = "123"
param.CompanyCode = "1"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleBuyerExchangeConfirmRequest();
var param = request.BuildParam();
param.AftersaleId = 123123123123123;
param.IsReject = true;
param.Action = "refund_agree";
param.Comment = "1";
param.Evidence = ["http://pic/pic.jpeg"];
param.LogisticsCode = "123";
param.CompanyCode = "1";
var response = request.Execute<AfterSaleBuyerExchangeConfirmResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:10007 | 此订单状态已经发生变化，请刷新 | 检查售后单状态 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 参数错误，请修改后重试 | 检查售后单状态 |
| 20000 | 服务不可用 | isp.service-error:10001 | 系统超时，请重试 | 检查并重试 |
| 50002 | 业务处理失败 | isv.business-failed:10004 | 存在非本店铺订单，该操作被禁止 | 检查参数后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
