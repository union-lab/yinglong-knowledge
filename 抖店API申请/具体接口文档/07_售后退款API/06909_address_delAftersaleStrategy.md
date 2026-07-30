# /address/delAftersaleStrategy

> 中文说明：删除售后地址策略  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/6909>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /address/delAftersaleStrategy |
| 中文名称 | 删除售后地址策略 |
| 文档目录 | 售后退款API |
| Article ID | 6909 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/9/25 22:43:37 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

根据售后地址策略ID删除售后地址策略，该策略所绑定的商品会自动解绑。

## 权限包

- 售后 / 售后地址退货策略（packageType=1）；适用应用类目：售后管理、商家后台系统、订单管理、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | address.delAftersaleStrategy | 调用的API接口名称 | - | - |
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
| 0 | strategy_id | StrategyId | false | 2 | AFS7418487171435053348 | 必填，售后地址策略。 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/address/delAftersaleStrategy?app_key=your_appkey_here&method=address.delAftersaleStrategy&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/address/delAftersaleStrategy?app_key=your_appkey_here&method=address.delAftersaleStrategy&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AddressDelAftersaleStrategyRequest request = new AddressDelAftersaleStrategyRequest();
AddressDelAftersaleStrategyParam param = request.getParam();
param.setStrategyId("AFS7418487171435053348");
AddressDelAftersaleStrategyResponse response = request.execute(accessToken);

```

### php

```php
$request = new AddressDelAftersaleStrategyRequest();
$param = new AddressDelAftersaleStrategyParam();
$request->setParam($param);
$param->strategy_id = "AFS7418487171435053348";
$response = $request->execute(accessToken);

```

### python

```python
request = AddressDelAftersaleStrategyRequest()
param = request.getParams()
param.strategy_id = "AFS7418487171435053348"
response = request.execute(accessToken)

```

### go

```go
request := address_delAftersaleStrategy_request.New()
param := request.GetParams()
param.StrategyId = "AFS7418487171435053348"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AddressDelAftersaleStrategyRequest();
var param = request.BuildParam();
param.StrategyId = "AFS7418487171435053348";
var response = request.Execute<AddressDelAftersaleStrategyResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4000 | 请输入正确的参数 | 按照返回的提示信息修改参数后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:3000 | 系统繁忙，请稍后重试 | 一般为系统内部异常，重试不能解决后，可以在开放平台提工单或者联系抖店运营/开发人员解决 |
| 50002 | 业务处理失败 | isv.business-failed:8001 | 系统繁忙，请稍后重试 | 一般为系统内部异常，重试不能解决后，可以在开放平台提工单或者联系抖店运营/开发人员解决 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
