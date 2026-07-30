# /order/replyService

> 中文说明：回复服务请求  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1917>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/replyService |
| 中文名称 | 回复服务请求 |
| 文档目录 | 订单API |
| Article ID | 1917 |
| 文档版本 | V6.01 |
| 官方更新时间 | 2022/11/14 14:49:11 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

回复服务请求
回复客服向店铺发起的服务请求

## 权限包

- 订单 / 商家服务单管理（packageType=1）；适用应用类目：卡券商工具、售后管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.replyService | 调用的API接口名称 | - | - |
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
| 0 | id | ServiceId | true | 1 | 123 | 服务请求列表中获取的id | - | - |
| 0 | reply | ReplyDetail | true | 2 | 哈哈哈 | 回复内容 | - | - |
| 0 | evidence | ImgsOpen | false | 2 | img_url1 | 回复凭证，通过/order/serviceDetail获取是否当前服务单</br>是否必须上传凭证。多张图片用竖线分开。不超过4张 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/replyService?app_key=your_appkey_here&method=order.replyService&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/replyService?app_key=your_appkey_here&method=order.replyService&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderReplyServiceRequest request = new OrderReplyServiceRequest();
OrderReplyServiceParam param = request.getParam();
param.setId(123L);
param.setReply("哈哈哈");
param.setEvidence("img_url1");
OrderReplyServiceResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderReplyServiceRequest();
$param = new OrderReplyServiceParam();
$request->setParam($param);
$param->id = 123;
$param->reply = "哈哈哈";
$param->evidence = "img_url1";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderReplyServiceRequest()
param = request.getParams()
param.id = 123
param.reply = "哈哈哈"
param.evidence = "img_url1"
response = request.execute(accessToken)

```

### go

```go
request := order_replyService_request.New()
param := request.GetParams()
param.Id = 123
param.Reply = "哈哈哈"
param.Evidence = "img_url1"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderReplyServiceRequest();
var param = request.BuildParam();
param.Id = 123;
param.Reply = "哈哈哈";
param.Evidence = "img_url1";
var response = request.Execute<OrderReplyServiceResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:10009 | 服务申请已经回复，无需重复回复 | - |
| 20000 | 系统错误 | isp.service-error:10002 | 参数错误 | - |
| 50002 | 业务处理失败 | isv.business-failed:10017 | 图片链接有误 | - |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
