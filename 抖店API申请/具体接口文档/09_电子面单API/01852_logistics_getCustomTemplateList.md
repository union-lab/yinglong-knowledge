# /logistics/getCustomTemplateList

> 中文说明：查询商家自定义区模板（新版）  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/1852>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/getCustomTemplateList |
| 中文名称 | 查询商家自定义区模板（新版） |
| 文档目录 | 电子面单API |
| Article ID | 1852 |
| 文档版本 | V1.04 |
| 官方更新时间 | 2021/8/19 18:24:41 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查询商家自定义区模板（新版）
使用面单模板设计器编辑发布的模板用此接口获取商家模板数据；

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.getCustomTemplateList | 调用的API接口名称 | - | - |
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
| 0 | logistics_code | logisticsCode | false | 2 | shunfeng | 物流服务商编码（若为空代表查询全部） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | custom_template_data | customTemplateData | - | 3 | - | 商家所有快递自定义模板的数据列表 | - | R1 |
| 1 | custom_template_data.logistics_code | logisticsCode | - | 2 | shunfeng | 物流服务商编码 | - | R1 |
| 1 | custom_template_data.custom_template_infos | customTemplateInfos | - | 3 | - | 用户使用的模板数据 | - | R1 |
| 2 | custom_template_data.custom_template_infos.custom_template_code | customTemplateCode | - | 2 | 123 | 自定义区模板code | - | R1 |
| 2 | custom_template_data.custom_template_infos.custom_template_name | customTemplateName | - | 2 | muban | 自定义区模板名称 | - | R1 |
| 2 | custom_template_data.custom_template_infos.parent_template_code | parentTemplateCode | - | 2 | 1 | 父模板code(查询标准模板API中返回的template_code) | - | R1 |
| 2 | custom_template_data.custom_template_infos.custom_template_url | customTemplateUrl | - | 2 | 1 | 自定义区模板url(URL资源的内容为xml格式的报文) | - | R1 |
| 2 | custom_template_data.custom_template_infos.custom_template_key_list | customTemplateKeyList | - | 3 | 1 | customTemplateKeyList（打印项中字段列表） | - | R1 |
| 2 | custom_template_data.custom_template_infos.custom_template_id | customTemplateId | - | 1 | 1 | 自定义区模板id | - | R1 |
| 2 | custom_template_data.custom_template_infos.parent_template_id | parentTemplateId | - | 1 | 1 | 父模板id | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/getCustomTemplateList?app_key=your_appkey_here&method=logistics.getCustomTemplateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/getCustomTemplateList?app_key=your_appkey_here&method=logistics.getCustomTemplateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsGetCustomTemplateListRequest request = new LogisticsGetCustomTemplateListRequest();
LogisticsGetCustomTemplateListParam param = request.getParam();
param.setLogisticsCode("shunfeng");
LogisticsGetCustomTemplateListResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsGetCustomTemplateListRequest();
$param = new LogisticsGetCustomTemplateListParam();
$request->setParam($param);
$param->logistics_code = "shunfeng";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsGetCustomTemplateListRequest()
param = request.getParams()
param.logistics_code = "shunfeng"
response = request.execute(accessToken)

```

### go

```go
request := logistics_getCustomTemplateList_request.New()
param := request.GetParams()
param.LogisticsCode = "shunfeng"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsGetCustomTemplateListRequest();
var param = request.BuildParam();
param.LogisticsCode = "shunfeng";
var response = request.Execute<LogisticsGetCustomTemplateListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4010 | 操作数据库异常 | 请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
