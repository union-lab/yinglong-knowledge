# /buyin/shareRedpack

> 中文说明：抖客红包转链  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2547>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/shareRedpack |
| 中文名称 | 抖客红包转链 |
| 文档目录 | 精选联盟API |
| Article ID | 2547 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/6/26 10:17:55 |
| 授权主体 | ["机构","抖客"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

该接口用于抖客红包转链，需要获取抖客授权

## 权限包

- 精选联盟 / 精选联盟直播间分销（机构）（packageType=1）；适用应用类目：联盟抖客直播间分销、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 抖客分销转链（packageType=1）；适用应用类目：联盟抖客分销

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.shareRedpack | 调用的API接口名称 | - | - |
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
| 0 | redpack_id | redpack_id | true | 2 | 123456 | 红包批次ID | - | - |
| 0 | pid | pid | true | 2 | dy_1234_123_123 | 抖客PID | - | - |
| 0 | external_info | external_info | false | 2 | 123_456 | 自定义字段，只允许 数字、字母和_，限制长度为40 | - | - |
| 0 | need_qr_code | need_qr_code | false | 4 | false | 是否需要二维码(获取二维码将增加响应耗时，推荐false) | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 11 | - | 结果 | - | R1 |
| 1 | data.share_command | share_command | - | 2 | 6.923405940 | 抖口令 | - | R1 |
| 1 | data.deep_link | deepLink | - | 2 | snssdk://.. | Deeplink，允许外部APP直接唤起抖音直播间 | - | R1 |
| 1 | data.qrcode | qrcode | - | 5 | - | 二维码 | - | R1 |
| 2 | data.qrcode.url | url | - | 2 | https://ssddsd.jpg | URL | - | R1 |
| 2 | data.qrcode.width | width | - | 99 | 200 | 宽度 | - | R1 |
| 2 | data.qrcode.height | height | - | 99 | 200 | 高度 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/shareRedpack?app_key=your_appkey_here&method=buyin.shareRedpack&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/shareRedpack?app_key=your_appkey_here&method=buyin.shareRedpack&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinShareRedpackRequest request = new BuyinShareRedpackRequest();
BuyinShareRedpackParam param = request.getParam();
param.setRedpackId("123456");
param.setPid("dy_1234_123_123");
param.setExternalInfo("123_456");
param.setNeedQrCode(false);
BuyinShareRedpackResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinShareRedpackRequest();
$param = new BuyinShareRedpackParam();
$request->setParam($param);
$param->redpack_id = "123456";
$param->pid = "dy_1234_123_123";
$param->external_info = "123_456";
$param->need_qr_code = false;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinShareRedpackRequest()
param = request.getParams()
param.redpack_id = "123456"
param.pid = "dy_1234_123_123"
param.external_info = "123_456"
param.need_qr_code = false
response = request.execute(accessToken)

```

### go

```go
request := buyin_shareRedpack_request.New()
param := request.GetParams()
param.RedpackId = "123456"
param.Pid = "dy_1234_123_123"
param.ExternalInfo = "123_456"
param.NeedQrCode = false
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinShareRedpackRequest();
var param = request.BuildParam();
param.RedpackId = "123456";
param.Pid = "dy_1234_123_123";
param.ExternalInfo = "123_456";
param.NeedQrCode = false;
var response = request.Execute<BuyinShareRedpackResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4097 | 参数校验失败 | 参数校验失败 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4113 | 当前抖客未开通直播间分销业务权限 | 当前抖客未开通直播间分销业务权限 |
| 40004 | 非法的参数 | isv.parameter-invalid:4102 | 参数校验失败：无效 PID | 参数校验失败：无效 PID |
| 40004 | 非法的参数 | isv.parameter-invalid:4118 | 红包不存在 | 红包不存在 |
| 40004 | 非法的参数 | isv.parameter-invalid:4299 | 非抖客渠道红包 | 非抖客渠道红包 |
| 40004 | 非法的参数 | isv.parameter-invalid:4120 | 红包不是生效状态或已领完 | 红包不是生效状态或已领完 |
| 40004 | 非法的参数 | isv.parameter-invalid:4300 | 红包未到或已过领取时间，不可转链 | 红包未到或已过领取时间，不可转链 |
| 40004 | 非法的参数 | isv.parameter-invalid:4298 | 红包参数校验失败 | 红包参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:4101 | 无效 external_info | 参数校验失败：无效 external_info |
| 40004 | 非法的参数 | isv.parameter-invalid:4116 | 抖客红包不支持自营 | 抖客红包不支持自营 |
| 50002 | 业务处理失败 | isv.business-failed:4117 | 达人无抖客红包权限 | 达人无抖客红包权限 |
| 40004 | 非法的参数 | isv.parameter-invalid:4119 | 红包参数非法 | 红包参数非法 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
