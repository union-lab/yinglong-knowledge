# /open/createProductVideoCheckTask

> 中文说明：创建商品主图视频质检任务  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/7725>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /open/createProductVideoCheckTask |
| 中文名称 | 创建商品主图视频质检任务 |
| 文档目录 | 商品API |
| Article ID | 7725 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/8/27 14:07:32 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

创建商品主图视频质检任务

## 权限包

- 商品 / 商品曝光（主图视频）（packageType=1）；适用应用类目：AIGC视频洞察、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | open.createProductVideoCheckTask | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 99 | 12345123214 | 商品id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | task_id | taskId | - | 2 | sdfasdf | 任务id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/open/createProductVideoCheckTask?app_key=your_appkey_here&method=open.createProductVideoCheckTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/open/createProductVideoCheckTask?app_key=your_appkey_here&method=open.createProductVideoCheckTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OpenCreateProductVideoCheckTaskRequest request = new OpenCreateProductVideoCheckTaskRequest();
OpenCreateProductVideoCheckTaskParam param = request.getParam();
param.setProductId(12345123214L);
OpenCreateProductVideoCheckTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new OpenCreateProductVideoCheckTaskRequest();
$param = new OpenCreateProductVideoCheckTaskParam();
$request->setParam($param);
$param->product_id = 12345123214;
$response = $request->execute(accessToken);

```

### python

```python
request = OpenCreateProductVideoCheckTaskRequest()
param = request.getParams()
param.product_id = 12345123214
response = request.execute(accessToken)

```

### go

```go
request := open_createProductVideoCheckTask_request.New()
param := request.GetParams()
param.ProductId = 12345123214
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OpenCreateProductVideoCheckTaskRequest();
var param = request.BuildParam();
param.ProductId = 12345123214;
var response = request.Execute<OpenCreateProductVideoCheckTaskResponse>(accessToken);

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
