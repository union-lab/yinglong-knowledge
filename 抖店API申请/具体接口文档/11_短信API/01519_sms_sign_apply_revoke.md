# /sms/sign/apply/revoke

> 中文说明：撤销短信签名申请单  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/1519>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/sign/apply/revoke |
| 中文名称 | 撤销短信签名申请单 |
| 文档目录 | 短信API |
| Article ID | 1519 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2026/3/24 18:47:04 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

撤销短信签名申请单

## 权限包

- 短信 / 短信签名（packageType=1）；适用应用类目：创新应用大赛_微应用、创新应用大赛_软件服务、教育服务、商家后台系统、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.sign/apply/revoke | 调用的API接口名称 | - | - |
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
| 0 | sms_account | sms_account | true | 2 | 1234 | 短信发送渠道，主要做资源隔离 | - | - |
| 0 | sms_sign_apply_id | sms_sign_apply_id | true | 2 | 1234435435 | 申请单id | - | - |
| 0 | version | version | false | 2 | v2 | 版本号 | - | - |
| 0 | shop_sub_account | shop_sub_account | false | 2 | sjdofajs | 商家消息组，不传则默认使用商家消息组 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | code | code | - | 99 | 0 | 是否成功 0表示成功 | - | R1 |
| 0 | message | message | - | 2 | 成功 | 说明 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/sign/apply/revoke?app_key=your_appkey_here&method=sms.sign.apply.revoke&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/sign/apply/revoke?app_key=your_appkey_here&method=sms.sign.apply.revoke&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsSignApplyRevokeRequest request = new SmsSignApplyRevokeRequest();
SmsSignApplyRevokeParam param = request.getParam();
param.setSmsAccount("1234");
param.setSmsSignApplyId("1234435435");
param.setVersion("v2");
param.setShopSubAccount("sjdofajs");
SmsSignApplyRevokeResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsSignApplyRevokeRequest();
$param = new SmsSignApplyRevokeParam();
$request->setParam($param);
$param->sms_account = "1234";
$param->sms_sign_apply_id = "1234435435";
$param->version = "v2";
$param->shop_sub_account = "sjdofajs";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsSignApplyRevokeRequest()
param = request.getParams()
param.sms_account = "1234"
param.sms_sign_apply_id = "1234435435"
param.version = "v2"
param.shop_sub_account = "sjdofajs"
response = request.execute(accessToken)

```

### go

```go
request := sms_sign_apply_revoke_request.New()
param := request.GetParams()
param.SmsAccount = "1234"
param.SmsSignApplyId = "1234435435"
param.Version = "v2"
param.ShopSubAccount = "sjdofajs"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsSignApplyRevokeRequest();
var param = request.BuildParam();
param.SmsAccount = "1234";
param.SmsSignApplyId = "1234435435";
param.Version = "v2";
param.ShopSubAccount = "sjdofajs";
var response = request.Execute<SmsSignApplyRevokeResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:628005100 | 628005100:status is not reviewing | 请根据错误信息描述检查 |
| 50002 | 业务处理失败 | isv.business-failed:628002001 | 628002001:您输入参数不正确，请检查后重试 | 请检查输入参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
