# /address/delAftersaleAddress

> 中文说明：删除商家地址库单条地址。  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/7024>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /address/delAftersaleAddress |
| 中文名称 | 删除商家地址库单条地址。 |
| 文档目录 | 订单API |
| Article ID | 7024 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/3/3 17:24:35 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

通过地址ID删除商家地址库中已经配置过的地址。

## 权限包

- 售后 / 售后地址退货策略（packageType=1）；适用应用类目：售后管理、商家后台系统、订单管理、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | address.delAftersaleAddress | 调用的API接口名称 | - | - |
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
| 0 | address_id | AddressId | true | 99 | 1356 | 地址ID，通过/address/list获取到的地址信息对应的address_id字段 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/address/delAftersaleAddress?app_key=your_appkey_here&method=address.delAftersaleAddress&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/address/delAftersaleAddress?app_key=your_appkey_here&method=address.delAftersaleAddress&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AddressDelAftersaleAddressRequest request = new AddressDelAftersaleAddressRequest();
AddressDelAftersaleAddressParam param = request.getParam();
param.setAddressId(1356L);
AddressDelAftersaleAddressResponse response = request.execute(accessToken);

```

### php

```php
$request = new AddressDelAftersaleAddressRequest();
$param = new AddressDelAftersaleAddressParam();
$request->setParam($param);
$param->address_id = 1356;
$response = $request->execute(accessToken);

```

### python

```python
request = AddressDelAftersaleAddressRequest()
param = request.getParams()
param.address_id = 1356
response = request.execute(accessToken)

```

### go

```go
request := address_delAftersaleAddress_request.New()
param := request.GetParams()
param.AddressId = 1356
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AddressDelAftersaleAddressRequest();
var param = request.BuildParam();
param.AddressId = 1356;
var response = request.Execute<AddressDelAftersaleAddressResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:4000 | 请输入正确的参数 | 根据返回的错误信息修改参数后重试，如果多次重试后不成功，可以寻求抖店运营/开发同学协助。 |
| 50002 | 业务处理失败 | isv.business-failed:6000 | 系统繁忙，请稍后重试 | 根据提示重试，如果多次重试或者等一段时间后重试没有结果，可以寻求抖店运营/开发同学协助。 |
| 50002 | 业务处理失败 | isv.business-failed:100001 | 操作过于频繁，请稍后重试 | 每个商家对地址库在1秒内只能操作1次，减低操作频率 |
| 50002 | 业务处理失败 | isv.business-failed:3000 | 系统繁忙，请稍后重试 | 根据提示重试，如果多次重试或者等一段时间后重试没有结果，可以寻求抖店运营/开发同学协助。 |
| 50002 | 业务处理失败 | isv.business-failed:100004 | 地址信息不存在 | 地址已经被删除或者传入的地址ID不存在 |
| 50002 | 业务处理失败 | isv.business-failed:100018 | 最后一条售后信息不可删除 | 停止删除，或者新增其他售后地址后重新尝试。 |
| 50002 | 业务处理失败 | isv.business-failed:10003 | 系统繁忙，请稍后重试 | 根据提示重试，如果多次重试或者等一段时间后重试没有结果，可以寻求抖店运营/开发同学协助。 |
| 50002 | 业务处理失败 | isv.business-failed:5004 | 地址已删除，请刷新页面重试 | 地址已经被删除或者传入的地址ID不存在 |
| 50002 | 业务处理失败 | isv.business-failed:10001 | 当前店铺信息无权限访问 | 当前地址ID不属于当前登录店铺，改变地址ID或者登录店铺后重重试。 |
| 50002 | 业务处理失败 | isv.business-failed:5001 | 系统繁忙，请稍后重试 | 根据提示重试，如果多次重试或者等一段时间后重试没有结果，可以寻求抖店运营/开发同学协助。 |
| 50002 | 业务处理失败 | isv.business-failed:100013 | 该地址为默认退货地址，请更换默认退货地址为其他地址后再删除 | 将默认退货地址设置为其他地址后重试 |
| 50002 | 业务处理失败 | isv.business-failed:100014 | 该地址为默认发货地址，请更换默认发货地址为其他地址后再删除 | 将默认发货地址设置为其他地址后重试 |
| 50002 | 业务处理失败 | isv.business-failed:100016 | 地址被XXX等XX个多地址退货策略使用，请更换其它地址后删除 | 解除地址策略和地址的绑定关系后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:100017 | 代发发货正在使用该地址，请前往「抖店后台」-「发货中心」-「厂商代发」页面的设置按钮更换代发发货地址后再删除 | 按照错误返回信息处理后重试 |
| 50002 | 业务处理失败 | isv.business-failed:100015 | 该地址正用于电子面单订购，请新建地址或取消订购关系后删除 | 按照错误返回信息处理后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
