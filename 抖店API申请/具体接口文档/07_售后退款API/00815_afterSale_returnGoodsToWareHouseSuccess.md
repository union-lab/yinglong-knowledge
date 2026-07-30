# /afterSale/returnGoodsToWareHouseSuccess

> 中文说明：商家确认售后单对应的用户退货入仓成功  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/815>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/returnGoodsToWareHouseSuccess |
| 中文名称 | 商家确认售后单对应的用户退货入仓成功 |
| 文档目录 | 售后退款API |
| Article ID | 815 |
| 文档版本 | V6.02 |
| 官方更新时间 | 2021/8/11 19:03:53 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

商家在抖店后台售后小助手配置退货入仓自动退策略；
当用户发起退货退款申请，商家同意且退货商品返回到商家仓内，由商家确认质检无误后入仓；
命中策略后该售后单自动执行退款操作。

## 权限包

- 售后 / 售后管理（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、售后管理、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.returnGoodsToWareHouseSuccess | 调用的API接口名称 | - | - |
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
| 0 | aftersale_id | AftersaleID | true | 2 | 12345 | 售后单Id | - | - |
| 0 | op_time | OpTime | true | 1 | 1627905819 | 商家确认退货入仓时间，Unix时间戳，时间为秒 | - | - |
| 0 | tracking_no | TrackingNo | false | 2 | SF12334 | 用户退货物流单号 | - | - |
| 0 | logistics_company_code | LogisticsCompanyCode | false | 2 | shunfeng | 物流公司代号 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/afterSale/returnGoodsToWareHouseSuccess?app_key=your_appkey_here&method=afterSale.returnGoodsToWareHouseSuccess&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/afterSale/returnGoodsToWareHouseSuccess?app_key=your_appkey_here&method=afterSale.returnGoodsToWareHouseSuccess&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AfterSaleReturnGoodsToWareHouseSuccessRequest request = new AfterSaleReturnGoodsToWareHouseSuccessRequest();
AfterSaleReturnGoodsToWareHouseSuccessParam param = request.getParam();
param.setAftersaleId("12345");
param.setOpTime(1627905819L);
param.setTrackingNo("SF12334");
param.setLogisticsCompanyCode("shunfeng");
AfterSaleReturnGoodsToWareHouseSuccessResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleReturnGoodsToWareHouseSuccessRequest();
$param = new AfterSaleReturnGoodsToWareHouseSuccessParam();
$request->setParam($param);
$param->aftersale_id = "12345";
$param->op_time = 1627905819;
$param->tracking_no = "SF12334";
$param->logistics_company_code = "shunfeng";
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleReturnGoodsToWareHouseSuccessRequest()
param = request.getParams()
param.aftersale_id = "12345"
param.op_time = 1627905819
param.tracking_no = "SF12334"
param.logistics_company_code = "shunfeng"
response = request.execute(accessToken)

```

### go

```go
request := afterSale_returnGoodsToWareHouseSuccess_request.New()
param := request.GetParams()
param.AftersaleId = "12345"
param.OpTime = 1627905819
param.TrackingNo = "SF12334"
param.LogisticsCompanyCode = "shunfeng"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleReturnGoodsToWareHouseSuccessRequest();
var param = request.BuildParam();
param.AftersaleId = "12345";
param.OpTime = 1627905819;
param.TrackingNo = "SF12334";
param.LogisticsCompanyCode = "shunfeng";
var response = request.Execute<AfterSaleReturnGoodsToWareHouseSuccessResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:11004 | 序列化错误 | 通常为入参问题，请检查后重试 |
| 20000 | 系统错误 | isp.service-error:10002 | 系统错误 | 通常为严重的系统错误问题，请检查并谨慎重试。 |
| 50002 | 业务处理失败 | isv.business-failed:10000 | 系统错误，请重试 | 通常为超时，请检查后重试 |
| 50002 | 业务处理失败 | isv.business-failed:12001 | 售后单类型与策略限制不符合，未命中此策略 | 检查后重试 |
| 50002 | 业务处理失败 | isv.business-failed:11002 | 店铺未设置或启用售后小助手策略，请店铺通过抖店后台或以下链接进行设置：https://fxg.jinritemai.com/ffa/morder/aftersale/assistant/list | 检查小助手是否开启 |
| 50002 | 业务处理失败 | isv.business-failed:11000 | 参数错误 | 通常为入参错误，请检查 |
| 50002 | 业务处理失败 | isv.business-failed:12000 | 获取售后小助手策略失败 | 请检查后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
