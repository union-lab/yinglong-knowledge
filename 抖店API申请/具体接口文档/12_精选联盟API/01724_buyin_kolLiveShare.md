# /buyin/kolLiveShare

> 中文说明：获取达人直播间分享链接  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1724>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/kolLiveShare |
| 中文名称 | 获取达人直播间分享链接 |
| 文档目录 | 精选联盟API |
| Article ID | 1724 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2025/6/26 10:11:58 |
| 授权主体 | ["达人"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

获取达人直播间分享物料，包括直播间抖口令、二维码、deeplink和zlink，需要达人百应授权。

## 权限包

- 精选联盟 / 精选联盟直播间分销（机构）（packageType=1）；适用应用类目：联盟抖客直播间分销、联盟机构工具型、联盟机构自用型、联盟机构自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.kolLiveShare | 调用的API接口名称 | - | - |
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
| 0 | pid_info | pid_info | true | 5 | - | PID信息 | - | - |
| 1 | pid_info.pid | pid | true | 2 | dy_10101245197859_1726220821_2656147525 | 达人PID | - | - |
| 1 | pid_info.external_info | external_info | false | 2 | 123_456 | 自定义字段，只允许 数字、字母和_，限制长度为40 | - | - |
| 0 | need_qr_code | need_qr_code | false | 4 | false | 是否需要二维码(获取二维码将增加响应耗时，推荐false) | - | - |
| 0 | platform | platform | false | 99 | 0 | 回流端标识 0：抖音 1：抖音极速版 | - | - |
| 0 | need_zlink | need_zlink | false | 4 | false | 是否需要zlink(默认返回，不需要可以填false) | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 11 | - | 结果 | - | R1 |
| 1 | data.dy_password | dy_password | - | 2 | 6.923405940 | 抖口令 | - | R1 |
| 1 | data.qr_code | qr_code | - | 5 | - | 二维码 | - | R1 |
| 2 | data.qr_code.url | url | - | 2 | https://ssddsd.jpg | URL | - | R1 |
| 2 | data.qr_code.width | width | - | 99 | 200 | 宽度 | - | R1 |
| 2 | data.qr_code.height | height | - | 99 | 200 | 高度 | - | R1 |
| 1 | data.dy_deeplink | dy_deeplink | - | 2 | snssdk://live.. | Deeplink，允许外部APP直接唤起抖音直播间 | - | R1 |
| 1 | data.dy_zlink | dy_zlink | - | 2 | https://z.douyin.com/xxxxxxx | Zlink，允许外部APP直接唤起抖音直播间，未安装抖音应用用户，唤起抖音下载页，有效期60天 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/kolLiveShare?app_key=your_appkey_here&method=buyin.kolLiveShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/kolLiveShare?app_key=your_appkey_here&method=buyin.kolLiveShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinKolLiveShareRequest request = new BuyinKolLiveShareRequest();
BuyinKolLiveShareParam param = request.getParam();
param.setNeedQrCode(false);
param.setPlatform(0);
param.setNeedZlink(false);
BuyinKolLiveShareResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinKolLiveShareRequest();
$param = new BuyinKolLiveShareParam();
$request->setParam($param);
$param->need_qr_code = false;
$param->platform = 0;
$param->need_zlink = false;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinKolLiveShareRequest()
param = request.getParams()
param.need_qr_code = false
param.platform = 0
param.need_zlink = false
response = request.execute(accessToken)

```

### go

```go
request := buyin_kolLiveShare_request.New()
param := request.GetParams()
param.NeedQrCode = false
param.Platform = 0
param.NeedZlink = false
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinKolLiveShareRequest();
var param = request.BuildParam();
param.NeedQrCode = false;
param.Platform = 0;
param.NeedZlink = false;
var response = request.Execute<BuyinKolLiveShareResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4149 | 无效的doudian_open_id | 无效的doudian_open_id |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4130 | 达人未开播 | 达人未开播 |
| 50002 | 业务处理失败 | isv.business-failed:4129 | 达人未开通分销业务 | 达人未开通分销业务 |
| 50002 | 业务处理失败 | isv.business-failed:4102 | 参数校验失败：无效 PID | 无效 PID |
| 40004 | 非法的参数 | isv.parameter-invalid:4122 | 回流平台参数非法 | 回流平台参数非法 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
