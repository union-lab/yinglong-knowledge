# /order/addSerialNumber

> 中文说明：订单商品的序列号上传  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1289>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/addSerialNumber |
| 中文名称 | 订单商品的序列号上传 |
| 文档目录 | 订单API |
| Article ID | 1289 |
| 文档版本 | V3.02 |
| 官方更新时间 | 2021/9/27 16:58:39 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

订单发货后，如需修改商品序列号或补充上传商品序列号，可调用此接口进行修改或上传

## 权限包

- 订单 / 订单编辑（packageType=1）；适用应用类目：卡券商工具、COD服务、跨境供应链服务、跨境电商、售后管理、打单发货-微应用、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.addSerialNumber | 调用的API接口名称 | - | - |
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
| 0 | order_id | ShopOrderId | true | 2 | 4819248074018981281 | 订单号 | - | - |
| 0 | serial_number_list | SerialNumberList | true | 3 | ["546443524543534","646443524543534"] | 商品序列号，序列号长度不能超过30位字符，其中手机序列号仅支持填写15～17位数字；最多支持传入20个序列号 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/addSerialNumber?app_key=your_appkey_here&method=order.addSerialNumber&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/addSerialNumber?app_key=your_appkey_here&method=order.addSerialNumber&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderAddSerialNumberRequest request = new OrderAddSerialNumberRequest();
OrderAddSerialNumberParam param = request.getParam();
param.setOrderId("4819248074018981281");
param.setSerialNumberList(["546443524543534","646443524543534"]);
OrderAddSerialNumberResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderAddSerialNumberRequest();
$param = new OrderAddSerialNumberParam();
$request->setParam($param);
$param->order_id = "4819248074018981281";
$param->serial_number_list = ["546443524543534","646443524543534"];
$response = $request->execute(accessToken);

```

### python

```python
request = OrderAddSerialNumberRequest()
param = request.getParams()
param.order_id = "4819248074018981281"
param.serial_number_list = ["546443524543534","646443524543534"]
response = request.execute(accessToken)

```

### go

```go
request := order_addSerialNumber_request.New()
param := request.GetParams()
param.OrderId = "4819248074018981281"
param.SerialNumberList = ["546443524543534","646443524543534"]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderAddSerialNumberRequest();
var param = request.BuildParam();
param.OrderId = "4819248074018981281";
param.SerialNumberList = ["546443524543534","646443524543534"];
var response = request.Execute<OrderAddSerialNumberResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:60049 | 该订单状态不支持序列号上传 | 停止操作 |
| 50002 | 业务处理失败 | isv.business-failed:60056 | 补贴商品发货时需要上传商品序列号 | 输入正确的序列号 |
| 20000 | 系统错误 | isp.service-error:50024 | 查询订单信息异常 | 重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:50049 | 订单号不能为空 | 传入需上传序列号的订单号 |
| 40002 | 缺少必选参数 | isv.missing-parameter:60048 | 序列号不能为空 | 传入需上传的序列号 |
| 40004 | 非法的参数 | isv.parameter-invalid:60046 | 序列号长度不能超过30位字符 | 输入正确的序列号 |
| 20000 | 系统错误 | isp.service-error:20003 | 系统异常，请重试 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:60062 | IMEI号仅支持填写15～17位数字 | 输入正确的序列号 |
| 50002 | 业务处理失败 | isv.business-failed:60047 | 该订单补贴商品的序列号已经上传，请重新填写 | 重新输入正确的序列号 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
