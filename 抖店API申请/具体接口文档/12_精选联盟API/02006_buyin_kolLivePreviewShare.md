# /buyin/kolLivePreviewShare

> 中文说明：达人直播预告转链  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2006>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/kolLivePreviewShare |
| 中文名称 | 达人直播预告转链 |
| 文档目录 | 精选联盟API |
| Article ID | 2006 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2025/6/26 10:18:50 |
| 授权主体 | ["达人"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

达人直播预告转链，只能转链达人自己未到开播时间的直播预告

## 权限包

- 精选联盟 / 精选联盟活动转链（packageType=1）；适用应用类目：联盟抖客分销

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.kolLivePreviewShare | 调用的API接口名称 | - | - |
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
| 0 | live_appointment_id | live_appointment_id | true | 2 | 123456789 | 直播预告Id | - | - |
| 0 | pid | pid | true | 2 | dy_1234_4567_7890 | pid | - | - |
| 0 | platform | platform | false | 99 | 0 | 回流端标识 0：抖音 1：抖音极速版 | - | - |
| 0 | external_info | external_info | false | 2 | external_info_test | 自定义字段，只允许 数字、字母和_，限制长度为40 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 11 | - | 直播预告转链数据 | - | R1 |
| 1 | data.share_command | share_command | - | 2 | 6.923405940 | 口令 | - | R1 |
| 1 | data.deep_link | deepLink | - | 2 | snssdk://live | Deeplink，允许外部APP直接唤起抖音直播间 | - | R1 |
| 1 | data.qrcode | qrcode | - | 5 | - | 二维码 | - | R1 |
| 2 | data.qrcode.url | url | - | 2 | https://ssddsd.jpg | 图片路径 | - | R1 |
| 2 | data.qrcode.width | width | - | 99 | 200 | 宽度 | - | R1 |
| 2 | data.qrcode.height | height | - | 99 | 200 | 高度 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/kolLivePreviewShare?app_key=your_appkey_here&method=buyin.kolLivePreviewShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/kolLivePreviewShare?app_key=your_appkey_here&method=buyin.kolLivePreviewShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinKolLivePreviewShareRequest request = new BuyinKolLivePreviewShareRequest();
BuyinKolLivePreviewShareParam param = request.getParam();
param.setLiveAppointmentId("123456789");
param.setPid("dy_1234_4567_7890");
param.setPlatform(0);
param.setExternalInfo("external_info_test");
BuyinKolLivePreviewShareResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinKolLivePreviewShareRequest();
$param = new BuyinKolLivePreviewShareParam();
$request->setParam($param);
$param->live_appointment_id = "123456789";
$param->pid = "dy_1234_4567_7890";
$param->platform = 0;
$param->external_info = "external_info_test";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinKolLivePreviewShareRequest()
param = request.getParams()
param.live_appointment_id = "123456789"
param.pid = "dy_1234_4567_7890"
param.platform = 0
param.external_info = "external_info_test"
response = request.execute(accessToken)

```

### go

```go
request := buyin_kolLivePreviewShare_request.New()
param := request.GetParams()
param.LiveAppointmentId = "123456789"
param.Pid = "dy_1234_4567_7890"
param.Platform = 0
param.ExternalInfo = "external_info_test"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinKolLivePreviewShareRequest();
var param = request.BuildParam();
param.LiveAppointmentId = "123456789";
param.Pid = "dy_1234_4567_7890";
param.Platform = 0;
param.ExternalInfo = "external_info_test";
var response = request.Execute<BuyinKolLivePreviewShareResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4097 | 参数错误 | 参数错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:4123 | 直播预约不存在或已删除/预告不属于该达人 | 直播预约不存在或已删除/预告不属于该达人 |
| 50002 | 业务处理失败 | isv.business-failed:4124 | 达人已开播 | 达人已开播 |
| 20000 | 系统错误 | isp.service-error:4125 | 直播预告转链异常 | 直播预告转链异常 |
| 40004 | 非法的参数 | isv.parameter-invalid:4122 | 回流平台参数非法 | 回流平台参数非法 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
