# /logistics/cancelOrder

> 中文说明：用于ISV/商家ERP系统 端发起取消已获取的电子面单号  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/397>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/cancelOrder |
| 中文名称 | 用于ISV/商家ERP系统 端发起取消已获取的电子面单号 |
| 文档目录 | 电子面单API |
| Article ID | 397 |
| 文档版本 | V1.11 |
| 官方更新时间 | 2021/4/22 18:44:11 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

用于ISV/商家ERP系统 端发起取消已获取的电子面单号；
面单有任何物流轨迹之后不允许取消。

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.cancelOrder | 调用的API接口名称 | - | - |
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
| 0 | logistics_code | company | true | 2 | jd | 物流公司 | - | - |
| 0 | track_no | trackNo | true | 2 | 1234 | 运单号 | - | - |
| 0 | user_id | userId | false | 1 | 1 | 实际使用取号服务店铺user_id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | cancel_result | result | - | 5 | - | 取消状态 | - | R1 |
| 1 | cancel_result.success | success | - | 4 | true | true：取消成功 false 取消失败 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/cancelOrder?app_key=your_appkey_here&method=logistics.cancelOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/cancelOrder?app_key=your_appkey_here&method=logistics.cancelOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsCancelOrderRequest request = new LogisticsCancelOrderRequest();
LogisticsCancelOrderParam param = request.getParam();
param.setLogisticsCode("jd");
param.setTrackNo("1234");
param.setUserId(1L);
LogisticsCancelOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsCancelOrderRequest();
$param = new LogisticsCancelOrderParam();
$request->setParam($param);
$param->logistics_code = "jd";
$param->track_no = "1234";
$param->user_id = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsCancelOrderRequest()
param = request.getParams()
param.logistics_code = "jd"
param.track_no = "1234"
param.user_id = 1
response = request.execute(accessToken)

```

### go

```go
request := logistics_cancelOrder_request.New()
param := request.GetParams()
param.LogisticsCode = "jd"
param.TrackNo = "1234"
param.UserId = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsCancelOrderRequest();
var param = request.BuildParam();
param.LogisticsCode = "jd";
param.TrackNo = "1234";
param.UserId = 1;
var response = request.Execute<LogisticsCancelOrderResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10902 | 轨迹存在 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10804 | 错误：该运单号3180437295999已经有物流信息,不能取消 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10803 | 物流商系统无此运单，无法取消 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10802 | 该运单已取件，不允许取消 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:10014 | 电子面单号不存在 | 输入正确的运单号 |
| 50002 | 业务处理失败 | isv.business-failed:10013 | 取消总数/取号总数超过最大比例 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:10003 | 该数据不存在，请检查后重试 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:8060 | 此订单已收件 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:5001 | 该物流商暂不支持取消面单号 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:4007 | 订单已发货，取消面单号失败 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10901 | 已经取消过了，无需再次取消 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10801 | 该运单已取消成功,请勿重复操作 | 无 |
| 40002 | 缺少必选参数 | isv.missing-parameter:400 | 物流单号不能为空 | 输入运单号 |
| 20000 | 系统错误 | isp.service-error:10002 | 系统错误或此状态不允许取消 | 无 |
| 20000 | 系统错误 | isp.service-error:4009 | 请求物流服务商超时 | 进行重试 |
| 50002 | 业务处理失败 | isv.business-failed:8037 | 已消单 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10903 | 10903:单号已回收，不允许变更 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:20001 | 20001:重复请求 | 无 |
| 20000 | 系统错误 | isp.service-error:4001 | 4001 | 系统内部错误，可以先进行重试处理，如果多次重试失败，开发者交流群进行反馈 |
| 20000 | 系统错误 | isp.service-error:11404 | 11404:系统异常 | 系统内部错误，可以先进行重试处理，如果多次重试失败，开发者交流群进行反馈 |
| 50002 | 业务处理失败 | isv.business-failed:10000 | 10000:该运单已取件，不允许取消 | 无 |
| 20000 | 系统错误 | isp.service-error:4008 | 4008:内部数据JSON/XML格式非法 | 一般都是物流商导致的原因，比如超时或物流商服务返回的有问题 |
| 50002 | 业务处理失败 | isv.business-failed:8018 | 8018:未获取到订单信息 | 系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:1105 | 1105:已揽收，无法取消 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10724 | 10724:取消失败，如果有疑问请联系京东大件物流 | 如果有疑问请联系京东大件物流 |
| 50002 | 业务处理失败 | isv.business-failed:20802 | 20802:该运单已取件，不允许取消 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10711 | 10711:电子面单订购关系不存在 | 请检查订购关系是否正常 |
| 50002 | 业务处理失败 | isv.business-failed:1102 | 1102:重复取消 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10805 | 10805:揽收后且派送前的单子才可拦截 | 10805:揽收后且派送前的单子才可拦截 |
| 50002 | 业务处理失败 | isv.business-failed:200201 | 200201:此订单已收件 | 200201:此订单已收件 |
| 50002 | 业务处理失败 | isv.business-failed:10912 | 10912:更新失败 | 10912:更新失败 |
| 50002 | 业务处理失败 | isv.business-failed:14003 | 14003:电子面单号取消失败 | 14003:电子面单号取消失败 |
| 50002 | 业务处理失败 | isv.business-failed:-10007 | -10007:biz error: http client请求返回值非200 | -10007:biz error: http client请求返回值非200 |
| 50002 | 业务处理失败 | isv.business-failed:9999 | 9999:已发货不能取消 | 9999:已发货不能取消 |
| 50002 | 业务处理失败 | isv.business-failed:10010 | 10010:系统异常 | 10010:系统异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
