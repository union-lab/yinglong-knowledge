# /logistics/customTemplateList

> 中文说明：查询商家自定义区域数据  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/549>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/customTemplateList |
| 中文名称 | 查询商家自定义区域数据 |
| 文档目录 | 物流发货API |
| Article ID | 549 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2021/6/23 19:07:36 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查询商家自定义区域数据；

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.customTemplateList | 调用的API接口名称 | - | - |
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
| 0 | logistics_code | company | false | 2 | jtexpress | 物流商编码 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | custom_template_data | customerTemplateData | - | 3 | - | 自定义模板的数据列表 | - | - |
| 1 | custom_template_data.logistics_code | company | - | 2 | jtexpress | 物流商编码 | - | R1 |
| 1 | custom_template_data.custom_template_infos | customerTempalteInfos | - | 3 | - | 用户使用的模板数据 | - | - |
| 2 | custom_template_data.custom_template_infos.custom_template_code | customerTemplateCode | - | 2 | C1asaeew2 | 自定义模板code | - | R1 |
| 2 | custom_template_data.custom_template_infos.custom_template_url | customerTempalteUrl | - | 2 | http://ekdj | 自定义区模板url(URL资源的内容为xml格式的报文) | - | R1 |
| 2 | custom_template_data.custom_template_infos.custom_template_name | customerTemplateName | - | 2 | jtexpress自定义模版 | 自定义区模板名称 | - | R1 |
| 2 | custom_template_data.custom_template_infos.parent_template_code | parentTemplateCode | - | 2 | jtexpress_76_130 | 父模板code(查询标准模板API中返回的template_code) | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/customTemplateList?app_key=your_appkey_here&method=logistics.customTemplateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/customTemplateList?app_key=your_appkey_here&method=logistics.customTemplateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsCustomTemplateListRequest request = new LogisticsCustomTemplateListRequest();
LogisticsCustomTemplateListParam param = request.getParam();
param.setLogisticsCode("jtexpress");
LogisticsCustomTemplateListResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsCustomTemplateListRequest();
$param = new LogisticsCustomTemplateListParam();
$request->setParam($param);
$param->logistics_code = "jtexpress";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsCustomTemplateListRequest()
param = request.getParams()
param.logistics_code = "jtexpress"
response = request.execute(accessToken)

```

### go

```go
request := logistics_customTemplateList_request.New()
param := request.GetParams()
param.LogisticsCode = "jtexpress"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsCustomTemplateListRequest();
var param = request.BuildParam();
param.LogisticsCode = "jtexpress";
var response = request.Execute<LogisticsCustomTemplateListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4006 | 不支持的服务商 | 请检查logistics_code字段 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
