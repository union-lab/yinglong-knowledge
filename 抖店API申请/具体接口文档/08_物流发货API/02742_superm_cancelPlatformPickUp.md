# /superm/cancelPlatformPickUp

> 中文说明：运力取消（逆向）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2742>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /superm/cancelPlatformPickUp |
| 中文名称 | 运力取消（逆向） |
| 文档目录 | 物流发货API |
| Article ID | 2742 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/11/10 16:52:23 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

运力取消（逆向）

## 权限包

- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | superm.cancelPlatformPickUp | 调用的API接口名称 | - | - |
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
| 0 | aftersale_id | AfterSaleId | true | 1 | 7160559250161418528 | 售后单ID | - | - |
| 0 | cancel_reason | CancelReason | false | 2 | 111 | 取消运力的原因，开发者自定义传入，最大支持50个字符；填写后商家可以在抖店后台查看到。 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/superm/cancelPlatformPickUp?app_key=your_appkey_here&method=superm.cancelPlatformPickUp&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/superm/cancelPlatformPickUp?app_key=your_appkey_here&method=superm.cancelPlatformPickUp&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SupermCancelPlatformPickUpRequest request = new SupermCancelPlatformPickUpRequest();
SupermCancelPlatformPickUpParam param = request.getParam();
param.setAftersaleId(7160559250161418528L);
param.setCancelReason("111");
SupermCancelPlatformPickUpResponse response = request.execute(accessToken);

```

### php

```php
$request = new SupermCancelPlatformPickUpRequest();
$param = new SupermCancelPlatformPickUpParam();
$request->setParam($param);
$param->aftersale_id = 7160559250161418528;
$param->cancel_reason = "111";
$response = $request->execute(accessToken);

```

### python

```python
request = SupermCancelPlatformPickUpRequest()
param = request.getParams()
param.aftersale_id = 7160559250161418528
param.cancel_reason = "111"
response = request.execute(accessToken)

```

### go

```go
request := superm_cancelPlatformPickUp_request.New()
param := request.GetParams()
param.AftersaleId = 7160559250161418528
param.CancelReason = "111"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SupermCancelPlatformPickUpRequest();
var param = request.BuildParam();
param.AftersaleId = 7160559250161418528;
param.CancelReason = "111";
var response = request.Execute<SupermCancelPlatformPickUpResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:50311 | 状态不允许取消 | 状态不允许取消 |
| 20000 | 系统错误 | isp.service-error:20200 | 请求内部服务异常,请重试 | 请求内部服务异常,请重试 |
| 50002 | 业务处理失败 | isv.business-failed:20201 | op not found | op not found |
| 50002 | 业务处理失败 | isv.business-failed:40100 | 参数错误，不可重试 | 参数错误，不可重试 |
| 50002 | 业务处理失败 | isv.business-failed:50300 | 业务错误，此状态下不可重试 | 业务错误，此状态下不可重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
