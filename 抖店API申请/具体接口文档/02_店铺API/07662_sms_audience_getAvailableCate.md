# /sms/audience/getAvailableCate

> 中文说明：获取商家类目id  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/7662>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/audience/getAvailableCate |
| 中文名称 | 获取商家类目id |
| 文档目录 | 店铺API |
| Article ID | 7662 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/9/19 11:10:23 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

获取商家类目id

## 权限包

- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.audience/getAvailableCate | 调用的API接口名称 | - | - |
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
| 0 | token | token | false | 2 | 组件token | 组件mcToken，参考api：https://op.jinritemai.com/docs/api-docs/162/3586 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | category_list | categoryList | - | 3 | - | 类目列表 | - | R1 |
| 1 | category_list.category_name | categoryName | - | 2 | 美妆 | 类目名称 | - | - |
| 1 | category_list.child_category | childCategory | - | 3 | - | 二级类目 | - | R1 |
| 2 | category_list.child_category.child_category | childCategory | - | 3 | - | 三级类目 | - | R1 |
| 3 | category_list.child_category.child_category.level | level | - | 99 | 3 | 层级 | - | - |
| 3 | category_list.child_category.child_category.category_id | categoryId | - | 2 | 220001 | 子类目id | - | - |
| 3 | category_list.child_category.child_category.category_name | categoryName | - | 2 | 三级类目名称 | 类目名称 | - | - |
| 2 | category_list.child_category.level | level | - | 99 | 2 | 层级 | - | - |
| 2 | category_list.child_category.category_id | categoryId | - | 2 | 210001 | 类目id | - | - |
| 2 | category_list.child_category.category_name | categoryName | - | 2 | 美妆 | 类目名称 | - | - |
| 1 | category_list.level | level | - | 99 | 1 | 类目层级 | - | - |
| 1 | category_list.category_id | categoryId | - | 2 | 210001 | 类目id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sms/audience/getAvailableCate?app_key=your_appkey_here&method=sms.audience.getAvailableCate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sms/audience/getAvailableCate?app_key=your_appkey_here&method=sms.audience.getAvailableCate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsAudienceGetAvailableCateRequest request = new SmsAudienceGetAvailableCateRequest();
SmsAudienceGetAvailableCateParam param = request.getParam();
param.setToken("组件token");
SmsAudienceGetAvailableCateResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsAudienceGetAvailableCateRequest();
$param = new SmsAudienceGetAvailableCateParam();
$request->setParam($param);
$param->token = "组件token";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsAudienceGetAvailableCateRequest()
param = request.getParams()
param.token = "组件token"
response = request.execute(accessToken)

```

### go

```go
request := sms_audience_getAvailableCate_request.New()
param := request.GetParams()
param.Token = "组件token"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsAudienceGetAvailableCateRequest();
var param = request.BuildParam();
param.Token = "组件token";
var response = request.Execute<SmsAudienceGetAvailableCateResponse>(accessToken);

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
