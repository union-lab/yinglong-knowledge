# /afterSale/CancelSendGoodsSuccess

> 中文说明：商家在未发货/已发货退款途中发送取消发货的状态  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/816>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/CancelSendGoodsSuccess |
| 中文名称 | 商家在未发货/已发货退款途中发送取消发货的状态 |
| 文档目录 | 售后退款API |
| Article ID | 816 |
| 文档版本 | V5.04 |
| 官方更新时间 | 2021/8/11 19:09:55 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

1、商家在抖店后台售后小助手配置取消发货自动退策略；
2、当用户发起退款申请，且商家判断符合退款的场景时，可以调用取消发货接口同步平台取消发货；
3、命中策略后该售后单自动执行退款操作；

## 权限包

- 售后 / 售后管理（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、售后管理、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.CancelSendGoodsSuccess | 调用的API接口名称 | - | - |
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
| 0 | aftersale_id | AftersaleID | true | 2 | 12345 | 售后单ID | - | - |
| 0 | op_time | OpTime | true | 1 | 1627905819 | unix时间戳，单位为秒 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/afterSale/CancelSendGoodsSuccess?app_key=your_appkey_here&method=afterSale.CancelSendGoodsSuccess&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/afterSale/CancelSendGoodsSuccess?app_key=your_appkey_here&method=afterSale.CancelSendGoodsSuccess&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AfterSaleCancelSendGoodsSuccessRequest request = new AfterSaleCancelSendGoodsSuccessRequest();
AfterSaleCancelSendGoodsSuccessParam param = request.getParam();
param.setAftersaleId("12345");
param.setOpTime(1627905819L);
AfterSaleCancelSendGoodsSuccessResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleCancelSendGoodsSuccessRequest();
$param = new AfterSaleCancelSendGoodsSuccessParam();
$request->setParam($param);
$param->aftersale_id = "12345";
$param->op_time = 1627905819;
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleCancelSendGoodsSuccessRequest()
param = request.getParams()
param.aftersale_id = "12345"
param.op_time = 1627905819
response = request.execute(accessToken)

```

### go

```go
request := afterSale_CancelSendGoodsSuccess_request.New()
param := request.GetParams()
param.AftersaleId = "12345"
param.OpTime = 1627905819
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleCancelSendGoodsSuccessRequest();
var param = request.BuildParam();
param.AftersaleId = "12345";
param.OpTime = 1627905819;
var response = request.Execute<AfterSaleCancelSendGoodsSuccessResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:11004 | 序列化失败，可能为入参问题，请检查。 | 检查后重试 |
| 20000 | 系统错误 | isp.service-error:10002 | 参数错误 | 通常为不应该发生的系统错误，请检查售后单状态，谨慎重试 |
| 50002 | 业务处理失败 | isv.business-failed:11000 | 参数错误 | 请检查入参 |
| 50002 | 业务处理失败 | isv.business-failed:10000 | 系统错误 | 可能为系统处理超时，请检查后重试 |
| 50002 | 业务处理失败 | isv.business-failed:11002 | 店铺未设置或启用售后小助手策略，请店铺通过抖店后台或以下链接进行设置：https://fxg.jinritemai.com/ffa/morder/aftersale/assistant/list | 检查是否开启小助手策略 |
| 50002 | 业务处理失败 | isv.business-failed:12001 | 售后单已被其他自动退款方式命中,售后小助手策略不再执行 | 查看售后单状态 |
| 50002 | 业务处理失败 | isv.business-failed:11003 | 该售后单不存在 | 检查入参后重试 |
| 50002 | 业务处理失败 | isv.business-failed:12000 | 获取售后小助手策略失败 | 请检查后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
