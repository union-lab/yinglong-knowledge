# /power/verifyFetchCode

> 中文说明：取件码核销（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1478>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/verifyFetchCode |
| 中文名称 | 取件码核销（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1478 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2022/12/27 15:12:58 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

取件码核销

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）
- 物流连接平台 / 上门取件对接（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.verifyFetchCode | 调用的API接口名称 | - | - |
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
| 0 | order_id | OrderID | false | 2 | 4732078173688851864 | 商家订单号(下单接口传给物流服务商的orderId) | - | - |
| 0 | waybill_code | WaybillCode | false | 2 | JT0101001010 | 运单号 | - | - |
| 0 | verify_code | VerifyCode | false | 2 | 6472 | 取件码 | - | - |
| 0 | operate_time | OperateTime | false | 2 | 2021-01-19 15:12:23 | 核销操作时间 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerVerifyFetchCodeRequest request = new PowerVerifyFetchCodeRequest();
PowerVerifyFetchCodeParam param = request.getParam();
param.setOrderId("4732078173688851864");
param.setWaybillCode("JT0101001010");
param.setVerifyCode("6472");
param.setOperateTime("2021-01-19 15:12:23");
PowerVerifyFetchCodeResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerVerifyFetchCodeRequest();
$param = new PowerVerifyFetchCodeParam();
$request->setParam($param);
$param->order_id = "4732078173688851864";
$param->waybill_code = "JT0101001010";
$param->verify_code = "6472";
$param->operate_time = "2021-01-19 15:12:23";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerVerifyFetchCodeRequest()
param = request.getParams()
param.order_id = "4732078173688851864"
param.waybill_code = "JT0101001010"
param.verify_code = "6472"
param.operate_time = "2021-01-19 15:12:23"
response = request.execute(accessToken)

```

### go

```go
request := power_verifyFetchCode_request.New()
param := request.GetParams()
param.OrderId = "4732078173688851864"
param.WaybillCode = "JT0101001010"
param.VerifyCode = "6472"
param.OperateTime = "2021-01-19 15:12:23"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerVerifyFetchCodeRequest();
var param = request.BuildParam();
param.OrderId = "4732078173688851864";
param.WaybillCode = "JT0101001010";
param.VerifyCode = "6472";
param.OperateTime = "2021-01-19 15:12:23";
var response = request.Execute<PowerVerifyFetchCodeResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:11410 | 11410:取件码错误 | 联系技术定位 |
| 50002 | 业务处理失败 | isv.business-failed:11411 | 11411:重复核销 | 不需要核销 |
| 50002 | 业务处理失败 | isv.business-failed:11413 | 11413:取消后不支持核销 | 无法核销 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 10002:当前状态不允许核销取件码 | 无法核销 |
| 50002 | 业务处理失败 | isv.business-failed:11715 | 11715:当前状态已取消不允许更新 | 无法核销 |
| 50002 | 业务处理失败 | isv.business-failed:10000 | 10000:不存在对应的取件信息 | 10000:不存在对应的取件信息 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
