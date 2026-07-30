# /power/decryptByteDanceMobile

> 中文说明：末端服务异常单数据解密接口（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1571>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/decryptByteDanceMobile |
| 中文名称 | 末端服务异常单数据解密接口（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1571 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2021/12/27 21:12:31 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

略

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.decryptByteDanceMobile | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | waybill_code | waybillCode | false | 2 | 0 | - | - | - |
| 0 | express_company | expressCompany | false | 2 | 0 | - | - | - |
| 0 | decipher_scene | decipherScene | false | 2 | 0 | - | - | - |
| 0 | decipher_entity | decipherEntity | false | 2 | 0 | - | - | - |
| 0 | decipher_contact | decipherContact | false | 2 | 0 | - | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | real_tel_no | realTelNo | - | 2 | 0 | - | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/decryptByteDanceMobile?app_key=your_appkey_here&method=power.decryptByteDanceMobile&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/decryptByteDanceMobile?app_key=your_appkey_here&method=power.decryptByteDanceMobile&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerDecryptByteDanceMobileRequest request = new PowerDecryptByteDanceMobileRequest();
PowerDecryptByteDanceMobileParam param = request.getParam();
param.setWaybillCode("0");
param.setExpressCompany("0");
param.setDecipherScene("0");
param.setDecipherEntity("0");
param.setDecipherContact("0");
PowerDecryptByteDanceMobileResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerDecryptByteDanceMobileRequest();
$param = new PowerDecryptByteDanceMobileParam();
$request->setParam($param);
$param->waybill_code = "0";
$param->express_company = "0";
$param->decipher_scene = "0";
$param->decipher_entity = "0";
$param->decipher_contact = "0";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerDecryptByteDanceMobileRequest()
param = request.getParams()
param.waybill_code = "0"
param.express_company = "0"
param.decipher_scene = "0"
param.decipher_entity = "0"
param.decipher_contact = "0"
response = request.execute(accessToken)

```

### go

```go
request := power_decryptByteDanceMobile_request.New()
param := request.GetParams()
param.WaybillCode = "0"
param.ExpressCompany = "0"
param.DecipherScene = "0"
param.DecipherEntity = "0"
param.DecipherContact = "0"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerDecryptByteDanceMobileRequest();
var param = request.BuildParam();
param.WaybillCode = "0";
param.ExpressCompany = "0";
param.DecipherScene = "0";
param.DecipherEntity = "0";
param.DecipherContact = "0";
var response = request.Execute<PowerDecryptByteDanceMobileResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:11006 | 11006:解密达上限 | 11006:解密达上限 |
| 50002 | 业务处理失败 | isv.business-failed:11009 | 11009:手机号不存在 | 11009:手机号不存在 |
| 50002 | 业务处理失败 | isv.business-failed:11022 | 11022:判断是否抖音包裹异常:网络超时 | 11022:判断是否抖音包裹异常:网络超时 |
| 50002 | 业务处理失败 | isv.business-failed:11000 | 11000:decipherContact is nil | 11000:decipherContact is nil |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
