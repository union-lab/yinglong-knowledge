# /freightTemplate/delete

> 中文说明：删除运费模板  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/6200>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /freightTemplate/delete |
| 中文名称 | 删除运费模板 |
| 文档目录 | 物流发货API |
| Article ID | 6200 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/2/27 14:03:06 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

删除运费模板

## 权限包

- 抖店超市 / 门店运费模板管理（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | freightTemplate.delete | 调用的API接口名称 | - | - |
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
| 0 | template_id | template_id | true | 99 | 12345 | 运费模板id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | template_id | template_id | - | 99 | 12345 | 运费模板id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/freightTemplate/delete?app_key=your_appkey_here&method=freightTemplate.delete&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/freightTemplate/delete?app_key=your_appkey_here&method=freightTemplate.delete&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
FreightTemplateDeleteRequest request = new FreightTemplateDeleteRequest();
FreightTemplateDeleteParam param = request.getParam();
param.setTemplateId(12345L);
FreightTemplateDeleteResponse response = request.execute(accessToken);

```

### php

```php
$request = new FreightTemplateDeleteRequest();
$param = new FreightTemplateDeleteParam();
$request->setParam($param);
$param->template_id = 12345;
$response = $request->execute(accessToken);

```

### python

```python
request = FreightTemplateDeleteRequest()
param = request.getParams()
param.template_id = 12345
response = request.execute(accessToken)

```

### go

```go
request := freightTemplate_delete_request.New()
param := request.GetParams()
param.TemplateId = 12345
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new FreightTemplateDeleteRequest();
var param = request.BuildParam();
param.TemplateId = 12345;
var response = request.Execute<FreightTemplateDeleteResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:211000006 | 系统错误 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:211000034 | 运费模板被锁定 | 解锁运费模板后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:211000231 | 小时达店铺不能删除模板 | 无 |
| 20000 | 系统错误 | isp.service-error:211000208 | 系统错误 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
