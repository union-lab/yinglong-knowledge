# /antispam/orderSend

> 中文说明：支持使用在ISV系统商户发送（外部系统或模块，如快递平台）场景  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1840>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /antispam/orderSend |
| 中文名称 | 支持使用在ISV系统商户发送（外部系统或模块，如快递平台）场景 |
| 文档目录 | 订单API |
| Article ID | 1840 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2021/7/5 11:23:47 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 900 |

## 使用说明

支持使用在ISV系统商户发送（外部系统或模块，如快递平台）场景
用户在ISV通过API等方式推送到第三方服务时

## 权限包

- 安全 / 风控安全上报（packageType=1）；适用应用类目：卡券商工具、售后管理、分销品工具-供应商、订单处理-供应商、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、短信营销、订单管理、商品供应链、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | antispam.orderSend | 调用的API接口名称 | - | - |
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
| 0 | event_time | EventTime | true | 1 | 1624514492 | 事件时间 | - | - |
| 0 | user | User | false | 5 | - | 用户 | - | - |
| 1 | user.uid_type | UidType | false | 7 | 12 | 用户类型 | - | - |
| 1 | user.user_id | UserId | false | 1 | 1 | 用户 ID | - | - |
| 0 | params | Params | true | 2 | {"account_id":12345} | 可变参数 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | decision | Decision | - | 5 | - | 决策 | - | - |
| 1 | decision.decision | Decision | - | 2 | PASS | 决策 | - | R1 |
| 1 | decision.decision_detail | DecisionDetail | - | 2 | detail | 决策详情 | - | R1 |
| 1 | decision.hit_status | HitStatus | - | 2 | hint | 提示信息 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/antispam/orderSend?app_key=your_appkey_here&method=antispam.orderSend&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/antispam/orderSend?app_key=your_appkey_here&method=antispam.orderSend&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AntispamOrderSendRequest request = new AntispamOrderSendRequest();
AntispamOrderSendParam param = request.getParam();
User user = new User();
param.setUser(user);
param.setEventTime(1624514492L);
user.setUidType(12);
user.setUserId(1L);
param.setParams("{\"account_id\":12345}");
AntispamOrderSendResponse response = request.execute(accessToken);

```

### php

```php
$request = new AntispamOrderSendRequest();
$param = new AntispamOrderSendParam();
$request->setParam($param);
$user = new User();
$param->user = $user;
$param->event_time = 1624514492;
$user->uid_type = 12;
$user->user_id = 1;
$param->params = "{\"account_id\":12345}";
$response = $request->execute(accessToken);

```

### python

```python
request = AntispamOrderSendRequest()
param = request.getParams()
user = User()
param.user = user
param.event_time = 1624514492
user.uid_type = 12
user.user_id = 1
param.params = "{\"account_id\":12345}"
response = request.execute(accessToken)

```

### go

```go
request := antispam_orderSend_request.New()
param := request.GetParams()
user := new(User)
param.User = user
param.EventTime = 1624514492
user.UidType = 12
user.UserId = 1
param.Params = "{\"account_id\":12345}"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AntispamOrderSendRequest();
var param = request.BuildParam();
var user = new User();
param.User = user;
param.EventTime = 1624514492;
user.UidType = 12;
user.UserId = 1;
param.Params = "{\"account_id\":12345}";
var response = request.Execute<AntispamOrderSendResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:-1 | 系统繁忙，请稍后重试 | 系统繁忙，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
