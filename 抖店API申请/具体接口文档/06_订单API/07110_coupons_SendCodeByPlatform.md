# /coupons/SendCodeByPlatform

> 中文说明：商家接单（触发平台发码）  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/7110>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /coupons/SendCodeByPlatform |
| 中文名称 | 商家接单（触发平台发码） |
| 文档目录 | 订单API |
| Article ID | 7110 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/9/11 16:49:42 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

抖店到店自提场景下使用，用于平台卡券需要商家接单的场景，调用此接口进行接单&触发平台发码

## 权限包

- 到店自提 / 到店自提（服饰）（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | coupons.SendCodeByPlatform | 调用的API接口名称 | - | - |
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
| 0 | order_id | OrderId | false | 2 | 693434343434343421 | 店铺单号 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/coupons/SendCodeByPlatform?app_key=your_appkey_here&method=coupons.SendCodeByPlatform&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/coupons/SendCodeByPlatform?app_key=your_appkey_here&method=coupons.SendCodeByPlatform&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
CouponsSendCodeByPlatformRequest request = new CouponsSendCodeByPlatformRequest();
CouponsSendCodeByPlatformParam param = request.getParam();
param.setOrderId("693434343434343421");
CouponsSendCodeByPlatformResponse response = request.execute(accessToken);

```

### php

```php
$request = new CouponsSendCodeByPlatformRequest();
$param = new CouponsSendCodeByPlatformParam();
$request->setParam($param);
$param->order_id = "693434343434343421";
$response = $request->execute(accessToken);

```

### python

```python
request = CouponsSendCodeByPlatformRequest()
param = request.getParams()
param.order_id = "693434343434343421"
response = request.execute(accessToken)

```

### go

```go
request := coupons_SendCodeByPlatform_request.New()
param := request.GetParams()
param.OrderId = "693434343434343421"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new CouponsSendCodeByPlatformRequest();
var param = request.BuildParam();
param.OrderId = "693434343434343421";
var response = request.Execute<CouponsSendCodeByPlatformResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:000002 | 参数错误 | 参数错误 |
| 20000 | 系统错误 | isp.service-error:030001 | 系统异常,请稍后重试 | 数据库访问异常 |
| 20000 | 系统错误 | isp.service-error:010003 | 系统内部异常,请求失败,等待人工处理 | 订单为空,但是券码不为空 |
| 40004 | 非法的参数 | isv.parameter-invalid:010004 | 请求参数和之前的参数不一致 | 幂等性校验失败,请求参数和库中已经存在的参数不一致 |
| 50002 | 业务处理失败 | isv.business-failed:010005 | 订单包含的卡券没有完全发放完成,不允许不允许同步订单 | 订单包含的卡券没有完全发放完成,不允许不允许同步订单 |
| 40004 | 非法的参数 | isv.parameter-invalid:010006 | 卡券为空 | 卡券为空 |
| 40004 | 非法的参数 | isv.parameter-invalid:020010 | 履约单为空 | 履约单为空 |
| 50002 | 业务处理失败 | isv.business-failed:010013 | 010013:并发请求,请稍后重试 | 010013:并发请求,请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:010023 | 010023:校验发放卡券数量错误 | 010023:校验发放卡券数量错误 |
| 50002 | 业务处理失败 | isv.business-failed:010020 | 010020:卡券映射信息重入错误 | 010020:卡券映射信息重入错误 |
| 50002 | 业务处理失败 | isv.business-failed:010012 | 010012:卡券同步超出24小时 | 010012:卡券同步超出24小时 |
| 50002 | 业务处理失败 | isv.business-failed:000006 | 000006:类型转换错误 | 000006:类型转换错误 |
| 50002 | 业务处理失败 | isv.business-failed:020007 | 020007:履约单查询异常 | 020007:履约单查询异常 |
| 50002 | 业务处理失败 | isv.business-failed:030004 | 030004:系统繁忙,请稍后重试 | 030004:系统繁忙,请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10008 | 010008:非卡券中心业务 | 010008:非卡券中心业务 |
| 50002 | 业务处理失败 | isv.business-failed:000008 | 000008:请求已处理 | 000008:请求已处理 |
| 50002 | 业务处理失败 | isv.business-failed:8 | 000008:请求已处理 | 000008:请求已处理 |
| 50002 | 业务处理失败 | isv.business-failed:9999 | 009999:系统繁忙,请稍后重试 | 009999:系统繁忙,请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:20008 | 020008:券码重复 | 020008:券码重复 |
| 50002 | 业务处理失败 | isv.business-failed:20011 | 020011:ByteScheduler处理失败 | 020011:ByteScheduler处理失败 |
| 50002 | 业务处理失败 | isv.business-failed:10081 | 010081:订单在退款流程中，不允许发码 | 010081:订单在退款流程中，不允许发码 |
| 50002 | 业务处理失败 | isv.business-failed:20005 | 020005:查询订单失败 | 020005:查询订单失败 |
| 50002 | 业务处理失败 | isv.business-failed:10024 | 010024:该订单状态下无法同步卡券 | 010024:该订单状态下无法同步卡券 |
| 50002 | 业务处理失败 | isv.business-failed:10010 | 010010:履约订单不包含资源信息 | 010010:履约订单不包含资源信息 |
| 50002 | 业务处理失败 | isv.business-failed:30002 | 030002:数据处理失败 | 030002:数据处理失败 |
| 20000 | 系统错误 | isp.service-error:020011 | 系统异常,请稍后重试 | 系统异常,请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
