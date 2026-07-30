# /buyin/activityShareCommandParse

> 中文说明：解析分销活动页口令  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2283>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/activityShareCommandParse |
| 中文名称 | 解析分销活动页口令 |
| 文档目录 | 精选联盟API |
| Article ID | 2283 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/8/2 16:25:27 |
| 授权主体 | ["达人"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

该接口用于分销活动页口令获取活动页信息，可用于解析已经转链过的活动页抖口令，需获取达人授权

## 权限包

- 精选联盟 / 精选联盟活动转链（packageType=1）；适用应用类目：联盟抖客分销

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.activityShareCommandParse | 调用的API接口名称 | - | - |
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
| 0 | share_command | share_command | true | 2 | 5:/ 复制此链接，打开抖音，等待你。##a## | 活动页分享口令 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | activity_id | activity_id | - | 1 | 1 | 1:百亿补贴2:秒杀活动3:自建活 动页 | - | R1 |
| 0 | mix_activity_id | mix_activity_id | - | 2 | 7113838489157763358 | 可推广的运营自建活动页活动 id；activity_id为3时，返回该项 | - | R1 |
| 0 | activity_url | activity_url | - | 2 | sslocal://webcast_webview?url= | 支持h5和schema两种形式； activity_id为3时，返回该项 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/activityShareCommandParse?app_key=your_appkey_here&method=buyin.activityShareCommandParse&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/activityShareCommandParse?app_key=your_appkey_here&method=buyin.activityShareCommandParse&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinActivityShareCommandParseRequest request = new BuyinActivityShareCommandParseRequest();
BuyinActivityShareCommandParseParam param = request.getParam();
param.setShareCommand("5:/ 复制此链接，打开抖音，等待你。##a##");
BuyinActivityShareCommandParseResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinActivityShareCommandParseRequest();
$param = new BuyinActivityShareCommandParseParam();
$request->setParam($param);
$param->share_command = "5:/ 复制此链接，打开抖音，等待你。##a##";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinActivityShareCommandParseRequest()
param = request.getParams()
param.share_command = "5:/ 复制此链接，打开抖音，等待你。##a##"
response = request.execute(accessToken)

```

### go

```go
request := buyin_activityShareCommandParse_request.New()
param := request.GetParams()
param.ShareCommand = "5:/ 复制此链接，打开抖音，等待你。##a##"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinActivityShareCommandParseRequest();
var param = request.BuildParam();
param.ShareCommand = "5:/ 复制此链接，打开抖音，等待你。##a##";
var response = request.Execute<BuyinActivityShareCommandParseResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 20000 | 系统错误 | isp.service-error:4189 | 调用下游失败 | 调用下游失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:4190 | 当前达人没有商品分销功能权限 | 当前达人没有商品分销功能权限 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:4188 | 无效活动页口令 | 无效活动页口令 |
| 40004 | 非法的参数 | isv.parameter-invalid:4191 | 活动页口令解析失败 | 活动页口令解析失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:4192 | 非频道活动口令 | 非频道活动口令 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
