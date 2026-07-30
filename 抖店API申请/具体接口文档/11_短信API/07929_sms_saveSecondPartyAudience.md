# /sms/saveSecondPartyAudience

> 中文说明：保存二方人群  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7929>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/saveSecondPartyAudience |
| 中文名称 | 保存二方人群 |
| 文档目录 | 短信API |
| Article ID | 7929 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/12/11 15:28:54 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

保存二方人群

## 权限包

- 短信 / 短信发送（packageType=1）；适用应用类目：创新应用大赛_微应用、互联网医院、营销管理-互动小程序定制、营销管理-小程序定制、创新应用大赛_软件服务、教育服务、内部测试、商家后台系统、即时零售ERP、虚拟充值、即时零售商家自研、互动营销定制、营销短信-微应用、短信营销、订单管理、电商ERP、智能外呼
- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.saveSecondPartyAudience | 调用的API接口名称 | - | - |
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
| 0 | resource | resource | true | 2 | 资源值 | 人群资源 | - | - |
| 0 | biz_source | bizSource | true | 99 | 0:抖店 1:罗盘 ... | 二方业务域 | - | - |
| 0 | resource_type | resourceType | true | 99 | 0:url 1:uri ... | 人群资源类型 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | audience_id | audienceId | - | 2 | 1 | 人群id | - | - |
| 0 | produce_id | produceId | - | 2 | 1 | 人群包生产信息id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/saveSecondPartyAudience?app_key=your_appkey_here&method=sms.saveSecondPartyAudience&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/saveSecondPartyAudience?app_key=your_appkey_here&method=sms.saveSecondPartyAudience&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsSaveSecondPartyAudienceRequest request = new SmsSaveSecondPartyAudienceRequest();
SmsSaveSecondPartyAudienceParam param = request.getParam();
param.setResource("资源值");
param.setBizSource(0:抖店 1:罗盘 ...);
param.setResourceType(0:url 1:uri ...);
SmsSaveSecondPartyAudienceResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsSaveSecondPartyAudienceRequest();
$param = new SmsSaveSecondPartyAudienceParam();
$request->setParam($param);
$param->resource = "资源值";
$param->biz_source = 0:抖店 1:罗盘 ...;
$param->resource_type = 0:url 1:uri ...;
$response = $request->execute(accessToken);

```

### python

```python
request = SmsSaveSecondPartyAudienceRequest()
param = request.getParams()
param.resource = "资源值"
param.biz_source = 0:抖店 1:罗盘 ...
param.resource_type = 0:url 1:uri ...
response = request.execute(accessToken)

```

### go

```go
request := sms_saveSecondPartyAudience_request.New()
param := request.GetParams()
param.Resource = "资源值"
param.BizSource = 0:抖店 1:罗盘 ...
param.ResourceType = 0:url 1:uri ...
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsSaveSecondPartyAudienceRequest();
var param = request.BuildParam();
param.Resource = "资源值";
param.BizSource = 0:抖店 1:罗盘 ...;
param.ResourceType = 0:url 1:uri ...;
var response = request.Execute<SmsSaveSecondPartyAudienceResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:628004000 | 参数异常 | 检查参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
