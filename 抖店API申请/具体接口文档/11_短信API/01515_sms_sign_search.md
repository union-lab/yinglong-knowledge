# /sms/sign/search

> 中文说明：查看短信签名  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/1515>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/sign/search |
| 中文名称 | 查看短信签名 |
| 文档目录 | 短信API |
| Article ID | 1515 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/3/11 18:38:03 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查看短信签名

## 权限包

- 短信 / 短信签名（packageType=1）；适用应用类目：创新应用大赛_微应用、创新应用大赛_软件服务、教育服务、商家后台系统、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.sign/search | 调用的API接口名称 | - | - |
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
| 0 | like | like | false | 2 | abc | 模糊搜索串 | - | - |
| 0 | size | size | false | 99 | 10 | 每页大小，默认10 | - | - |
| 0 | page | page | false | 99 | 0 | 页码，默认0 | - | - |
| 0 | version | version | false | 2 | v2 | 版本号 v2则走新链路 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | sign_search_list | sign_search_list | - | 3 | - | 签名列表 | - | R1 |
| 1 | sign_search_list.sms_account | sms_account | - | 2 | 1234 | 短信发送渠道，主要做资源隔离 | - | R1 |
| 1 | sign_search_list.sign | sign | - | 2 | abc | 签名 | - | R1 |
| 0 | total | total | - | 99 | 100 | 总数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/sign/search?app_key=your_appkey_here&method=sms.sign.search&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/sign/search?app_key=your_appkey_here&method=sms.sign.search&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsSignSearchRequest request = new SmsSignSearchRequest();
SmsSignSearchParam param = request.getParam();
param.setSmsAccount("1234");
param.setLike("abc");
param.setSize(10L);
param.setPage(0L);
param.setVersion("v2");
SmsSignSearchResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsSignSearchRequest();
$param = new SmsSignSearchParam();
$request->setParam($param);
$param->sms_account = "1234";
$param->like = "abc";
$param->size = 10;
$param->page = 0;
$param->version = "v2";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsSignSearchRequest()
param = request.getParams()
param.sms_account = "1234"
param.like = "abc"
param.size = 10
param.page = 0
param.version = "v2"
response = request.execute(accessToken)

```

### go

```go
request := sms_sign_search_request.New()
param := request.GetParams()
param.SmsAccount = "1234"
param.Like = "abc"
param.Size = 10
param.Page = 0
param.Version = "v2"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsSignSearchRequest();
var param = request.BuildParam();
param.SmsAccount = "1234";
param.Like = "abc";
param.Size = 10;
param.Page = 0;
param.Version = "v2";
var response = request.Execute<SmsSignSearchResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:628004205 | 628004205:Redis Get错误 | 系统内部错误，请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
