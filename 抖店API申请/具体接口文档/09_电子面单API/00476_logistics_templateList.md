# /logistics/templateList

> 中文说明：获取商家所有标准模版信息  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/476>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/templateList |
| 中文名称 | 获取商家所有标准模版信息 |
| 文档目录 | 电子面单API |
| Article ID | 476 |
| 文档版本 | V1.06 |
| 官方更新时间 | 2021/6/22 14:13:33 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查询物流商的标准模板。
注意：物流商模板平台会定期更新或新增，请开发者定期扫描该接口，保持和平台数据一致

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.templateList | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

无。

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | template_data | templateData | - | 3 | - | 模版数据 | - | - |
| 1 | template_data.template_infos | templateInfos | - | 3 | - | 模版信息 | - | - |
| 2 | template_data.template_infos.template_id | templateId | - | 1 | 14 | 模版id | - | R1 |
| 2 | template_data.template_infos.template_code | templateCode | - | 2 | ems_100_180 | 模版编码 | - | R1 |
| 2 | template_data.template_infos.template_name | templateName | - | 2 | EMS二联单 | 模版名称 | - | R1 |
| 2 | template_data.template_infos.template_url | templateUrl | - | 2 | https://lf3-cm.ecombdstatic.com/obj/logistics-davinci/template/template_ems100.xml | 模版URL | - | R1 |
| 2 | template_data.template_infos.version | version | - | 6 | 1 | 版本 | - | R1 |
| 2 | template_data.template_infos.template_type | templateType | - | 6 | 2 | 模版类型； 1-一联单 2-二联单 | - | R1 |
| 2 | template_data.template_infos.perview_url | perviewUrl | - | 2 | https://lf9-cm.ecombdstatic.com/obj/logistics-davinci/preview/jt_100_180.png | 预览URL | - | R1 |
| 1 | template_data.logistics_code | company | - | 2 | ems | 物流公司 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/templateList?app_key=your_appkey_here&method=logistics.templateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/templateList?app_key=your_appkey_here&method=logistics.templateList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
{}
```

### php

```php
{}
```

### python

```python
{}
```

### go

```go
{}
```

### dotNetCore

```dotNetCore
{}
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
| 50002 | 业务处理失败 | isv.business-failed:100201 | 100201:获取模版信息失败 | 请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
