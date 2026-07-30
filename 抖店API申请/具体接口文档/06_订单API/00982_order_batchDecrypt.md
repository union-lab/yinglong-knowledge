# /order/batchDecrypt

> 中文说明：批量解密接口  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/982>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/batchDecrypt |
| 中文名称 | 批量解密接口 |
| 文档目录 | 订单API |
| Article ID | 982 |
| 文档版本 | V6.15 |
| 官方更新时间 | 2023/12/25 19:38:31 |
| 授权主体 | ["店铺","物流商"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1500 |

## 使用说明

1、接口支持解密在文档字段有“密文”红色标识字段值：收件人电话收件人姓名；详细地址；账号值；证件号；证件姓名
2、不支持解密doudian_open_id字段加密用户ID串
3、最大支持一次解密50条数据
4、cipher_infos字段待解密的密文列表示例，
入参结构{"cipher_infos":[{"auth_id”:”订单号”,”cipher_text”:”待解密值”},{“auth_id”:”订单号”,”cipher_text”:”待解密值”}]}
入参示例{"cipher_infos":[{"auth_id":"4933609365066313446","cipher_text":"#ML3B#0BB1W4adLHYf+1s8VI3eLeeK0Kq0kc8A=#1##"},
{"auth_id":"4933609365066313446","cipher_text":"#IuxSQE5bRVX8PJCWnZJoMf62ZFoLqBrE0vhkDX1Ua3tAA1IdkoaJ1R#1##"}]}
5、decrypt_text响应参数手机号场景下：当is_virtual_tel=fasle时，decrypt_text返回值明文手机号，当is_virtual_tel=true时，并且解密入参是手机号时，decrypt_text返回值为虚拟号主机(phone_no_a)-虚拟号分机号(phone_no_b)的拼接值，返回示例值：”18400913965-7576”

## 权限包

- 物流连接平台 / 消费者敏感数据解密-物流连接平台（packageType=1）；适用应用类目：物流连接平台
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP
- 订单 / 消费者敏感数据解密（packageType=1）；适用应用类目：卡券商工具、到家外卖云打印、到家外卖订单配送、到家外卖ERP、打单发货-微应用、到家外卖商家自研、教育服务、商家后台系统、到店安装、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.batchDecrypt | 调用的API接口名称 | - | - |
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
| 0 | cipher_infos | cipherInfos | true | 3 | - | 待解密值集合，最大支持一次解密50条。待解密的密文列表示例，入参结构{"cipher_infos":[{"auth_id”:”订单号”,”cipher_text”:”待解密值”},{“auth_id”:”订单号”,”cipher_text”:”待解密值”}]} | - | - |
| 1 | cipher_infos.auth_id | orderId | true | 2 | 4933609365066313446 | 正向解密使用订单号，逆向退款解密使用售后单号 | - | - |
| 1 | cipher_infos.cipher_text | cipherText | true | 2 | $c0qBj0QrZm9qae50eoBTInPj8PWvCjUyafxWt5cELI0=$pExhpmm6cJ5VuSkvduc3QrdA4THYUZjuoENdITyvkWbRm44PiY8HsHWEXzxQ77kBM7xzNMxoLzfIUnxxxJ/P6uautZu7FjzmjUAkXvbFWlM+*CgkIARCtHCABKAESPgo82qRAg0QjFELjtKxb8xUtm1YUGo6/9spO0OEG2j7RCutuqWHOYJpEdvPZIqsirv5F4byTrHMVDwn+9Bz4GgA=$1$$,#ML3B#0BB1W4adLHYf+1s8VI3eLeeK0Kq0kc8zLLZ0B9WFvKWLZHIU5mf2HF23PCR+z0aYj7R7CCv6DymAy8Mzpa+olZkPYr1PoWmJ*CgkIARCtHCABKAESPgo8YToGx4Xhzb2dDxYMRP1ZEDGC+8STVmEMRed/naetKeJTUXwnWv0P3lgEgPPP/UFHZ2LTzUKIX2ticBvHGgA=#1## | 待解密值 | - | - |
| 0 | account_id | accountId | false | 2 | dy1001 | 服务商账号体系中，商户的账户ID，每个ISV下需要保证唯一，可选格式:独立生成的账户唯一标识 | - | - |
| 0 | account_type | accountType | false | 2 | main_account | 商户的账户ID类型；服务商账号中的主-main_account；子账号-sub_account； | - | - |
| 0 | need_virtual_phone | needVirtualPhone | - | 1 | 0 | 仅代拍场景下使用该字段，不传或传入0：表示使用代拍虚拟号逻辑，1：表示不使用代拍虚拟号逻辑 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | decrypt_infos | decryptInfos | - | 3 | - | 解密列表 | - | R1 |
| 1 | decrypt_infos.auth_id | orderId | - | 2 | 4933609365066313446 | 业务标识；解密抖音官方密文数据使用订单号即可。如果开发者使用【/order/batchEncrypt】加密接口自定义auth_id值，需要传自己定义的标识。 | 104 | R1 |
| 1 | decrypt_infos.cipher_text | cipherText | - | 2 | $c0qBj0QrZm9qae50eoBTInPj8PWvCjUyafxWt5cELI0=$pExhpmm6cJ5VuSkvduc3QrdA4THYUZjuoENdITyvkWbRm44PiY8HsHWEXzxQ77kBM7xzNMxoLzfIUnxxxJ/P6uautZu7FjzmjUAkXvbFWlM+*CgkIARCtHCABKAESPgo82qRAg0QjFELjtKxb8xUtm1YUGo6/9spO0OEG2j7RCutuqWHOYJpEdvPZIqsirv5F4byTrHMVDwn+9Bz4GgA=$1$$,#ML3B#0BB1W4adLHYf+1s8VI3eLeeK0Kq0kc8zLLZ0B9WFvKWLZHIU5mf2HF23PCR+z0aYj7R7CCv6DymAy8Mzpa+olZkPYr1PoWmJ*CgkIARCtHCABKAESPgo8YToGx4Xhzb2dDxYMRP1ZEDGC+8STVmEMRed/naetKeJTUXwnWv0P3lgEgPPP/UFHZ2LTzUKIX2ticBvHGgA=#1## | 密文值，具体内容参考[数据安全加密对接文档](https://op.jinritemai.com/docs/guide-docs/56/589) | 104 | R1 |
| 1 | decrypt_infos.decrypt_text | decryptText | - | 2 | 12317428564 | 解密后明文信息；手机号场景下规则：当is_virtual_tel=fasle时，decrypt_text返回值明文手机号，当is_virtual_tel=true时，并且解密入参是手机号时，decrypt_text返回值为虚拟号主机(phone_no_a)-虚拟号分机号(phone_no_b)的拼接值，返回示例值：”18400913965-7576” | 106 | R1 |
| 1 | decrypt_infos.err_no | errNo | - | 1 | 300003 | 错误码 | 29 | R1 |
| 1 | decrypt_infos.err_msg | errMsg | - | 2 | 解密失败：当前密文不属于信封加密的数据 | 错误描述 | 29 | R1 |
| 1 | decrypt_infos.data_type | dataType | - | 1 | 1 | 加密类型 1、 地址加密类型 2、 姓名加密类型 3、 手机号加密类型 4、身份证类型 5、手机号加密类型(不会返回虚拟号) | 104 | - |
| 1 | decrypt_infos.is_virtual_tel | isVirtualTel | - | 4 | false | 手机号描述；false-真实手机号，true-虚拟手机号 | 105 | R1 |
| 1 | decrypt_infos.expire_time | expireTime | - | 1 | 1653396024 | 虚拟号过期时间（商家自有呼叫中心记录，在到期后还需要则再次请求获取） | 105 | R1 |
| 1 | decrypt_infos.phone_no_a | phoneNoA | - | 2 | 12317428564 | 虚拟号主机号；当is_virtual_tel=true时，有值返回，当is_virtual_tel=fasle时，返回为空； | 105 | R1 |
| 1 | decrypt_infos.phone_no_b | phoneNoB | - | 2 | 5643 | 虚拟号分机号；当is_virtual_tel=true时，有值返回，当is_virtual_tel=fasle时，返回为空； | 105 | R1 |
| 0 | custom_err | CustomErr | - | 5 | - | 业务错误 | - | R1 |
| 1 | custom_err.err_code | ErrCode | - | 1 | 8000 | 错误码 | 29 | R1 |
| 1 | custom_err.err_msg | ErrMsg | - | 2 | 解密失败：批量解密存在部分失败 | 错误内容描述 | 29 | R1 |

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
OrderBatchDecryptRequest request = new OrderBatchDecryptRequest();
OrderBatchDecryptParam param = request.getParam();
param.setAccountId("dy1001");
param.setAccountType("main_account");
param.setNeedVirtualPhone(0L);
OrderBatchDecryptResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderBatchDecryptRequest();
$param = new OrderBatchDecryptParam();
$request->setParam($param);
$param->account_id = "dy1001";
$param->account_type = "main_account";
$param->need_virtual_phone = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderBatchDecryptRequest()
param = request.getParams()
param.account_id = "dy1001"
param.account_type = "main_account"
param.need_virtual_phone = 0
response = request.execute(accessToken)

```

### go

```go
request := order_batchDecrypt_request.New()
param := request.GetParams()
param.AccountId = "dy1001"
param.AccountType = "main_account"
param.NeedVirtualPhone = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderBatchDecryptRequest();
var param = request.BuildParam();
param.AccountId = "dy1001";
param.AccountType = "main_account";
param.NeedVirtualPhone = 0;
var response = request.Execute<OrderBatchDecryptResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:300003 | 业务处理失败,详情请看sub_msg | 无 |
| 50002 | 业务处理失败 | isv.business-failed:300008 | 300008:解密接口存在部分失败 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:300001 | 300001:解密错误: 批量解密存在部分失败 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:300007 | 300007:解密错误: 批量解密存在部分失败 | 300007:解密错误: 批量解密存在部分失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
