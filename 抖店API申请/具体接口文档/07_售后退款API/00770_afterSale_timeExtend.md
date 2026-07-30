# /afterSale/timeExtend

> 中文说明：商家延时收获接口  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/770>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/timeExtend |
| 中文名称 | 商家延时收获接口 |
| 文档目录 | 售后退款API |
| Article ID | 770 |
| 文档版本 | V3.04 |
| 官方更新时间 | 2021/8/3 21:52:52 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

此接口用来帮助商家进行延时收货，商家可以在还有2天到期的时间进行操作，会在原有剩余时间的基础上增加7天。

## 权限包

- 售后 / 售后管理（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、售后管理、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.timeExtend | 调用的API接口名称 | - | - |
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
| 0 | aftersale_id | AfterSaleId | true | 1 | 7036706918206930000 | 售后单号 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/afterSale/timeExtend?app_key=your_appkey_here&method=afterSale.timeExtend&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/afterSale/timeExtend?app_key=your_appkey_here&method=afterSale.timeExtend&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AfterSaleTimeExtendRequest request = new AfterSaleTimeExtendRequest();
AfterSaleTimeExtendParam param = request.getParam();
param.setAftersaleId(7036706918206930000L);
AfterSaleTimeExtendResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleTimeExtendRequest();
$param = new AfterSaleTimeExtendParam();
$request->setParam($param);
$param->aftersale_id = 7036706918206930000;
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleTimeExtendRequest()
param = request.getParams()
param.aftersale_id = 7036706918206930000
response = request.execute(accessToken)

```

### go

```go
request := afterSale_timeExtend_request.New()
param := request.GetParams()
param.AftersaleId = 7036706918206930000
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleTimeExtendRequest();
var param = request.BuildParam();
param.AftersaleId = 7036706918206930000;
var response = request.Execute<AfterSaleTimeExtendResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:10001 | 用户发货五天后才能延长收货 | 检查入参 |
| 50002 | 业务处理失败 | isv.business-failed:10014 | 10014:查找售后单对应的用户信息失败 | 检查入参 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
