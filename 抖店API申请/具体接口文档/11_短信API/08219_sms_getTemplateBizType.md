# /sms/getTemplateBizType

> 中文说明：获取模板类型  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/8219>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/getTemplateBizType |
| 中文名称 | 获取模板类型 |
| 文档目录 | 短信API |
| Article ID | 8219 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/4/21 15:58:20 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

获取模板类型

## 权限包

- 短信 / 短信模板（packageType=1）；适用应用类目：创新应用大赛_微应用、营销管理-互动小程序定制、营销管理-小程序定制、创新应用大赛_软件服务、教育服务、商家后台系统、互动营销定制、营销短信-微应用、智能外呼
- 短信 / 视频短信模板（packageType=1）；适用应用类目：创新应用大赛_软件服务、品牌会员通、互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.getTemplateBizType | 调用的API接口名称 | - | - |
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
| 0 | template_biz_type_list | templateBizTypeList | - | 3 | - | 模板类型 | - | R1 |
| 1 | template_biz_type_list.template_biz_sub_types | templateBizSubTypes | - | 3 | - | 模板子类型 | - | R1 |
| 2 | template_biz_type_list.template_biz_sub_types.template_biz_sub_type | templateBizSubType | - | 99 | 10000 | 模板子类型 | - | - |
| 2 | template_biz_type_list.template_biz_sub_types.template_biz_sub_type_name | templateBizSubTypeName | - | 2 | 订单发货 | 模板子类型名称 | - | - |
| 1 | template_biz_type_list.template_biz_type | templateBizType | - | 99 | 1 | 模板类型 | - | - |
| 1 | template_biz_type_list.template_biz_type_name | templateBizTypeName | - | 2 | 订单管理 | 模板类型名称 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/getTemplateBizType?app_key=your_appkey_here&method=sms.getTemplateBizType&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/getTemplateBizType?app_key=your_appkey_here&method=sms.getTemplateBizType&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
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

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
