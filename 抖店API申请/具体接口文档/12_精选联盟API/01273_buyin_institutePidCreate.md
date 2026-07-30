# /buyin/institutePidCreate

> 中文说明：抖客PID创建  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1273>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/institutePidCreate |
| 中文名称 | 抖客PID创建 |
| 文档目录 | 精选联盟API |
| Article ID | 1273 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/9/7 18:44:10 |
| 授权主体 | ["机构","抖客"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

支持抖客PID创建，需要抖客授权

## 权限包

- 精选联盟 / 精选联盟机构PID（packageType=1）；适用应用类目：联盟抖客直播间分销、联盟机构工具型、联盟机构自用型、联盟机构自研
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.institutePidCreate | 调用的API接口名称 | - | - |
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
| 0 | media_type | media_type | true | 7 | 1 | 推广媒体类型，0:其他, 1:微信, 2:QQ, 3:微博, 4:抖音, 5:头条 | - | - |
| 0 | media_name | media_name | false | 2 | 微信1群 | 渠道名称，没有media_id时自动创建渠道；存在media_id时无效 | - | - |
| 0 | media_id | media_id | false | 1 | 222 | 渠道ID，和media_name二选一 | - | - |
| 0 | site_name | site_name | true | 2 | 张三 | 推广位名称(最长10个字符) | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | pid | pid | - | 2 | dy_xxx_xxx_xxx | 机构PID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/institutePidCreate?app_key=your_appkey_here&method=buyin.institutePidCreate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/institutePidCreate?app_key=your_appkey_here&method=buyin.institutePidCreate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinInstitutePidCreateRequest request = new BuyinInstitutePidCreateRequest();
BuyinInstitutePidCreateParam param = request.getParam();
param.setMediaType(1);
param.setMediaName("微信1群");
param.setMediaId(222L);
param.setSiteName("张三");
BuyinInstitutePidCreateResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinInstitutePidCreateRequest();
$param = new BuyinInstitutePidCreateParam();
$request->setParam($param);
$param->media_type = 1;
$param->media_name = "微信1群";
$param->media_id = 222;
$param->site_name = "张三";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinInstitutePidCreateRequest()
param = request.getParams()
param.media_type = 1
param.media_name = "微信1群"
param.media_id = 222
param.site_name = "张三"
response = request.execute(accessToken)

```

### go

```go
request := buyin_institutePidCreate_request.New()
param := request.GetParams()
param.MediaType = 1
param.MediaName = "微信1群"
param.MediaId = 222
param.SiteName = "张三"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinInstitutePidCreateRequest();
var param = request.BuildParam();
param.MediaType = 1;
param.MediaName = "微信1群";
param.MediaId = 222;
param.SiteName = "张三";
var response = request.Execute<BuyinInstitutePidCreateResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1051 | 无效渠道类型 | 请检查渠道类型 |
| 40004 | 非法的参数 | isv.parameter-invalid:1050 | 无效渠道名称 | 请检查渠道名称 |
| 40004 | 非法的参数 | isv.parameter-invalid:1049 | 无效推广位名称 | 请检查推广位名称 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:1054 | 推广位名称重复，请更换 | 请检查推广位名称 |
| 50002 | 业务处理失败 | isv.business-failed:1048 | 没有此渠道 | 请检查渠道信息 |
| 50002 | 业务处理失败 | isv.business-failed:1052 | 最多可创建2000个推广位 | 最多可创建2000个推广位 |
| 50002 | 业务处理失败 | isv.business-failed:4198 | 需【抖客】角色授权后访问 | 需【抖客】角色授权后访问 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
