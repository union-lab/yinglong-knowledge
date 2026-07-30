# /logistics/sendByteDanceMessage

> 中文说明：短信代发  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2462>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/sendByteDanceMessage |
| 中文名称 | 短信代发 |
| 文档目录 | 物流发货API |
| Article ID | 2462 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/2/21 17:29:29 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

短信代发

## 权限包

- 物流连接平台 / 运单信息（packageType=1）
- 物流连接平台 / 末端系统（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.sendByteDanceMessage | 调用的API接口名称 | - | - |
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
| 0 | waybillCode | waybillCode | true | 2 | 75538750081658 | 运单号 | - | - |
| 0 | expressCompany | expressCompany | true | 2 | zhongtong | 快递商编码 | - | - |
| 0 | message | message | true | 2 | 【妈妈驿站】取货码02-124，您有中通快递包裹，已到您的快递已到达圆通妈妈驿站 | 代码内容 | - | - |
| 0 | pickMsgCode | pickMsgCode | true | 2 | 0A0729AE8E3A49C2FAAE07949B972AB6 | 取件消息唯一编码 | - | - |
| 0 | scene | scene | false | 2 | default | 业务场景（与平台研发确认具体值） | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/sendByteDanceMessage?app_key=your_appkey_here&method=logistics.sendByteDanceMessage&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/sendByteDanceMessage?app_key=your_appkey_here&method=logistics.sendByteDanceMessage&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsSendByteDanceMessageRequest request = new LogisticsSendByteDanceMessageRequest();
LogisticsSendByteDanceMessageParam param = request.getParam();
param.setWaybillCode("75538750081658");
param.setExpressCompany("yuantong");
param.setMessage("【妈妈驿站】取货码02-124，您有中通快递包裹，已到您的快递已到达圆通妈妈驿站");
param.setPickMsgCode("0A0729AE8E3A49C2FAAE07949B972AB6");
param.setScene("default");
LogisticsSendByteDanceMessageResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsSendByteDanceMessageRequest();
$param = new LogisticsSendByteDanceMessageParam();
$request->setParam($param);
$param->waybillCode = "75538750081658";
$param->expressCompany = "yuantong";
$param->message = "【妈妈驿站】取货码02-124，您有中通快递包裹，已到您的快递已到达圆通妈妈驿站";
$param->pickMsgCode = "0A0729AE8E3A49C2FAAE07949B972AB6";
$param->scene = "default";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsSendByteDanceMessageRequest()
param = request.getParams()
param.waybillCode = "75538750081658"
param.expressCompany = "yuantong"
param.message = "【妈妈驿站】取货码02-124，您有中通快递包裹，已到您的快递已到达圆通妈妈驿站"
param.pickMsgCode = "0A0729AE8E3A49C2FAAE07949B972AB6"
param.scene = "default"
response = request.execute(accessToken)

```

### go

```go
request := logistics_sendByteDanceMessage_request.New()
param := request.GetParams()
param.WaybillCode = "75538750081658"
param.ExpressCompany = "yuantong"
param.Message = "【妈妈驿站】取货码02-124，您有中通快递包裹，已到您的快递已到达圆通妈妈驿站"
param.PickMsgCode = "0A0729AE8E3A49C2FAAE07949B972AB6"
param.Scene = "default"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsSendByteDanceMessageRequest();
var param = request.BuildParam();
param.WaybillCode = "75538750081658";
param.ExpressCompany = "yuantong";
param.Message = "【妈妈驿站】取货码02-124，您有中通快递包裹，已到您的快递已到达圆通妈妈驿站";
param.PickMsgCode = "0A0729AE8E3A49C2FAAE07949B972AB6";
param.Scene = "default";
var response = request.Execute<LogisticsSendByteDanceMessageResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:11000 | 参数错误 | 修改参数 |
| 50002 | 业务处理失败 | isv.business-failed:11001 | 数据库错误 | 下个字节单 |
| 50002 | 业务处理失败 | isv.business-failed:10014 | 不是字节包裹 | 找测试下个字节单 |
| 50002 | 业务处理失败 | isv.business-failed:11004 | 关联下游处理失败 | 找研发确认问题 |
| 50002 | 业务处理失败 | isv.business-failed:10015 | 不是字节面单 | 找测试下个字节单 |
| 50002 | 业务处理失败 | isv.business-failed:11010 | 短信代发失败 | 找研发确认问题 |
| 50002 | 业务处理失败 | isv.business-failed:11008 | 内部处理失败 | 找研发确认问题 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 内容检测失败 | 换个合法短信内容 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
