# /buyin/doukeCrowdMatch

> 中文说明：电商用户类型识别接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/3202>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/doukeCrowdMatch |
| 中文名称 | 电商用户类型识别接口 |
| 文档目录 | 精选联盟API |
| Article ID | 3202 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/6/26 10:11:12 |
| 授权主体 | ["达人","抖客"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5000 |

## 使用说明

该接口可用于识别电商用户是否为潜客和流失用户（只支持定向申请）。

## 权限包

- 精选联盟 / 新客业务（packageType=1）；适用应用类目：联盟抖客分销
- 精选联盟 / 精选联盟物料查询（packageType=1）；适用应用类目：联盟自研、微应用-标题优化、创新应用大赛_微应用、联盟抖客分销、撮合服务商、联盟抖客直播间分销、直播间AI导购、团长管理、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研、直播间导购-微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.doukeCrowdMatch | 调用的API接口名称 | - | - |
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
| 0 | device_fingerprint_info | device_fingerprint_info | true | 5 | - | 设备指纹信息 | - | - |
| 1 | device_fingerprint_info.device_fingerprint_id | device_fingerprint_id | true | 2 | abcdefg1234xxxx | 设备指纹ID | - | - |
| 1 | device_fingerprint_info.device_fingerprint_type | device_fingerprint_type | true | 99 | 5 | 设备指纹类型。1: IDFA，2: IMEI，3: ANDROID_ID，4: GOOGLE_AID，5: OAID | - | - |
| 1 | device_fingerprint_info.is_md5 | is_md5 | true | 4 | false | 支持md5值，原值toUppercase之后的md5值 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | is_potential_customer | is_potential_customer | - | 4 | true | 是否为潜客 | - | - |
| 0 | is_lost_customer | is_lost_customer | - | 4 | false | 是否为流失用户 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/doukeCrowdMatch?app_key=your_appkey_here&method=buyin.doukeCrowdMatch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/doukeCrowdMatch?app_key=your_appkey_here&method=buyin.doukeCrowdMatch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinDoukeCrowdMatchRequest request = new BuyinDoukeCrowdMatchRequest();
BuyinDoukeCrowdMatchParam param = request.getParam();
BuyinDoukeCrowdMatchResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinDoukeCrowdMatchRequest();
$param = new BuyinDoukeCrowdMatchParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinDoukeCrowdMatchRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := buyin_doukeCrowdMatch_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinDoukeCrowdMatchRequest();
var param = request.BuildParam();
var response = request.Execute<BuyinDoukeCrowdMatchResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:4097 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:4417 | 当前账户无该接口访问权限 | 当前账户无该接口访问权限 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
