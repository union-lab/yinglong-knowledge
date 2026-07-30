# /pigeon/updatePushUser

> 中文说明：飞鸽消息推送店铺设置  
> 所属类别：飞鸽API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/188/6016>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /pigeon/updatePushUser |
| 中文名称 | 飞鸽消息推送店铺设置 |
| 文档目录 | 飞鸽API |
| Article ID | 6016 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/1/17 12:57:35 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

新增或删除开通飞鸽消息推送的店铺

## 权限包

- p测试权限组 / PPE测试消息权限包（packageType=2）；适用应用类目：服务市场按次订购-模板服务
- 飞鸽 / 客服实时消息（packageType=10）；适用应用类目：创新应用大赛_微应用、客服绩效-微应用、创新应用大赛_软件服务
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | pigeon.updatePushUser | 调用的API接口名称 | - | - |
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
| 0 | valid | Valid | true | 4 | true | 是否开通，true开通，false关闭 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | Success | - | 4 | true | 是否开通成功 | 28 | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/pigeon/updatePushUser?app_key=your_appkey_here&method=pigeon.updatePushUser&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/pigeon/updatePushUser?app_key=your_appkey_here&method=pigeon.updatePushUser&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PigeonUpdatePushUserRequest request = new PigeonUpdatePushUserRequest();
PigeonUpdatePushUserParam param = request.getParam();
param.setValid(true);
PigeonUpdatePushUserResponse response = request.execute(accessToken);

```

### php

```php
$request = new PigeonUpdatePushUserRequest();
$param = new PigeonUpdatePushUserParam();
$request->setParam($param);
$param->valid = true;
$response = $request->execute(accessToken);

```

### python

```python
request = PigeonUpdatePushUserRequest()
param = request.getParams()
param.valid = true
response = request.execute(accessToken)

```

### go

```go
request := pigeon_updatePushUser_request.New()
param := request.GetParams()
param.Valid = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PigeonUpdatePushUserRequest();
var param = request.BuildParam();
param.Valid = true;
var response = request.Execute<PigeonUpdatePushUserResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:605090001 | 系统异常，请重试 | 系统异常，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:605010102 | 店铺授权失效 | 请重新引导店铺完成授权 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
