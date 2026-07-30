# /order/batchEncrypt

> 中文说明：批量加密接口  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/487>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/batchEncrypt |
| 中文名称 | 批量加密接口 |
| 文档目录 | 订单API |
| Article ID | 487 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2023/6/14 10:23:15 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

isv使用此接口批量加密之前数据库中的明文记录

## 权限包

- 订单 / 订单信息查询（packageType=1）；适用应用类目：官方微应用、卡券商工具、创新应用大赛_微应用、COD服务、跨境供应链服务、手机行业定制交易、跨境电商、小票打印服务、撮合服务商、客服绩效-微应用、综合保修、碎屏保障、售后管理、任务玩法、财务管理、企业财税服务、直播话术-微应用、营销管理-互动小程序定制、营销管理-小程序定制、打单发货-微应用、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、强管控微应用、教育服务、商家商品推广、商家后台系统、TPA服务、店铺管理、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、品牌会员通、即时零售商家自研、直播工具、互动营销定制、短信营销、订单管理、商品供应链、电商ERP、AI 商品运营、智能外呼
- 定向权限 / 定向权限包（packageType=1）
- 订单 / 订单信息管理（packageType=1）；适用应用类目：AI智能客服-微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.batchEncrypt | 调用的API接口名称 | - | - |
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
| 0 | batch_encrypt_list | batchEncryptList | true | 3 | - | 待加密列表 | - | - |
| 1 | batch_encrypt_list.plain_text | plainText | true | 2 | 13117428564 | 明文 | - | - |
| 1 | batch_encrypt_list.auth_id | authId | true | 2 | 123 | 业务标识，value为抖音订单号；若是三方订单，可用三方订单号作为标识或自定义标识 | - | - |
| 1 | batch_encrypt_list.is_support_index | IsSupportIndex | true | 4 | true | 是否支持密文索引 | - | - |
| 1 | batch_encrypt_list.sensitive_type | sensitiveType | true | 6 | 3 | 加密类型；1地址加密 2姓名加密 3电话加密 | - | - |
| 0 | sensitive_scene | orderTag | false | 2 | OrderCode | 加密场景：OrderCode代表订单 AftersaleCode代表售后单 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | encrypt_infos | encryptInfos | - | 3 | - | 加密之后的数据 | - | - |
| 1 | encrypt_infos.auth_id | orderId | - | 2 | 42341234171232 | 鉴权id | - | R1 |
| 1 | encrypt_infos.cipher_text | cipherText | - | 2 | asdfasdfsasfdasdf | 密文 | - | R1 |
| 1 | encrypt_infos.decrypt_text | decryptText | - | 2 | 13117428564 | 明文 | - | R1 |
| 1 | encrypt_infos.err_no | errNo | - | 1 | 0 | 错误码 | - | R1 |
| 1 | encrypt_infos.err_msg | errMsg | - | 2 | - | 错误描述 | - | R1 |
| 0 | custom_err | CustomErr | - | 5 | - | 业务错误 | - | - |
| 1 | custom_err.err_code | ErrCode | - | 1 | 0 | 错误码 | - | R1 |
| 1 | custom_err.err_msg | ErrMsg | - | 2 | - | 错误描述 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/batchEncrypt?app_key=your_appkey_here&method=order.batchEncrypt&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/batchEncrypt?app_key=your_appkey_here&method=order.batchEncrypt&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderBatchEncryptRequest request = new OrderBatchEncryptRequest();
OrderBatchEncryptParam param = request.getParam();
param.setSensitiveScene("OrderCode");
OrderBatchEncryptResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderBatchEncryptRequest();
$param = new OrderBatchEncryptParam();
$request->setParam($param);
$param->sensitive_scene = "OrderCode";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderBatchEncryptRequest()
param = request.getParams()
param.sensitive_scene = "OrderCode"
response = request.execute(accessToken)

```

### go

```go
request := order_batchEncrypt_request.New()
param := request.GetParams()
param.SensitiveScene = "OrderCode"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderBatchEncryptRequest();
var param = request.BuildParam();
param.SensitiveScene = "OrderCode";
var response = request.Execute<OrderBatchEncryptResponse>(accessToken);

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

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
