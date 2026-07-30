# /order/batchSensitive

> 中文说明：批量脱敏接口  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/508>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/batchSensitive |
| 中文名称 | 批量脱敏接口 |
| 文档目录 | 订单API |
| Article ID | 508 |
| 文档版本 | V2.03 |
| 官方更新时间 | 2021/7/14 20:42:58 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

此接口用于批量脱敏场景

## 权限包

- 订单 / 消费者敏感数据脱敏（packageType=1）；适用应用类目：订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.batchSensitive | 调用的API接口名称 | - | - |
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
| 0 | cipher_infos | cipherInfos | true | 3 | - | 待脱敏的密文列表，每次调用不超过50条 | - | - |
| 1 | cipher_infos.auth_id | orderId | true | 2 | 123 | 业务标识，value为抖音订单号 | - | - |
| 1 | cipher_infos.cipher_text | cipherText | true | 2 | 待脱敏密文，具体内容参考[数据安全加密对接文档](https://op.jinritemai.com/docs/guide-docs/56/589) | 密文 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | decrypt_infos | decryptInfos | - | 3 | - | 脱敏信息列表 | - | - |
| 1 | decrypt_infos.auth_id | orderId | - | 2 | 123 | 业务标识，value为抖音订单号 | - | R1 |
| 1 | decrypt_infos.cipher_text | cipherText | - | 2 | 密文，具体内容参考[数据安全加密对接文档](https://op.jinritemai.com/docs/guide-docs/56/589) | 密文 | - | R1 |
| 1 | decrypt_infos.decrypt_text | decryptText | - | 2 | 明文 | 13*******64 | - | R1 |
| 1 | decrypt_infos.err_no | errNo | - | 1 | 错误码 | 0 | - | R1 |
| 1 | decrypt_infos.err_msg | errMsg | - | 2 | 错误描述 | "" | - | R1 |
| 0 | custom_err | CustomErr | - | 5 | - | 业务错误 | - | - |
| 1 | custom_err.err_code | ErrCode | - | 1 | 错误码 | 0 | - | R1 |
| 1 | custom_err.err_msg | ErrMsg | - | 2 | 错误描述 | "" | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/batchSensitive?app_key=your_appkey_here&method=order.batchSensitive&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/batchSensitive?app_key=your_appkey_here&method=order.batchSensitive&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderBatchSensitiveRequest request = new OrderBatchSensitiveRequest();
OrderBatchSensitiveParam param = request.getParam();
OrderBatchSensitiveResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderBatchSensitiveRequest();
$param = new OrderBatchSensitiveParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = OrderBatchSensitiveRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := order_batchSensitive_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderBatchSensitiveRequest();
var param = request.BuildParam();
var response = request.Execute<OrderBatchSensitiveResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:100000 | 参数错误: 输入的密文列表过长，上限为:50 | 解密数据不要超出50 |
| 50002 | 业务处理失败 | isv.business-failed:300001 | 参数错误: 输入的密文列表过长，上限为:50 | 列表数据不要超过50 |
| 50002 | 业务处理失败 | isv.business-failed:300003 | 300003:参数错误: 输入的密文列表过长，上限为:50 | 300003:参数错误: 输入的密文列表过长，上限为:50 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
