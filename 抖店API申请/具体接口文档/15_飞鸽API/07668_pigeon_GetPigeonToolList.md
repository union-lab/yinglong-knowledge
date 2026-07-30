# /pigeon/GetPigeonToolList

> 中文说明：该接口用于根据业务身份和相关参数获取可用的客服工具列表。主要应用场景包括：  1. 初始化时获取可用工具 2. 根据不同业务场景动态展示工具列表 3. 支持多种业务身份和客服场景的工具配置 4. 提供扩展字段支持未来功能迭代  请求参数包括必需的业务身份标  
> 所属类别：飞鸽API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/188/7668>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /pigeon/GetPigeonToolList |
| 中文名称 | 该接口用于根据业务身份和相关参数获取可用的客服工具列表。主要应用场景包括：  1. 初始化时获取可用工具 2. 根据不同业务场景动态展示工具列表 3. 支持多种业务身份和客服场景的工具配置 4. 提供扩展字段支持未来功能迭代  请求参数包括必需的业务身份标 |
| 文档目录 | 飞鸽API |
| Article ID | 7668 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/8/4 14:42:27 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

该接口用于根据业务身份和相关参数获取可用的客服工具列表。主要应用场景包括：

1. 初始化时获取可用工具
2. 根据不同业务场景动态展示工具列表
3. 支持多种业务身份和客服场景的工具配置
4. 提供扩展字段支持未来功能迭代

请求参数包括必需的业务身份标识，返回标准的工具代码列表，如["BASIC_SCRIPT", "URGE_PURCHASE"]等。

该接口遵循飞鸽平台标准规范，支持多租户和国际化场景。

## 权限包

- 飞鸽 / 飞鸽工单（packageType=1）；适用应用类目：工单管理、强管控微应用、AI智能客服-微应用、AI售后挽单
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | pigeon.GetPigeonToolList | 调用的API接口名称 | - | - |
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
| 0 | pigeon_biz_type | pigeon_biz_type | true | 1 | 2 | 业务ID | - | - |
| 0 | ext | ext | false | 2 | "" | 扩展字段 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | tool_list | tool_list | - | 3 | [<br>      "BASIC_SCRIPT",<br>      "URGE_PURCHASE",<br>      "GOODS_RECOMMEND",<br>      "ACK_ORDER_ADDRESS",<br>      "APPLY_REFUND",<br>      "APPLY_EXCHANGE",<br>      "APPLY_AFTERSALE",<br>      "URGE_DELIVERY",<br>      "CLARIFY_ORDER",<br>      "URGE_AFTERSALE",<br>      "AFTERSALE_PROGRESS",<br>      "SENDBACK_GOODS",<br>      "REVERSE_LOGISTIC",<br>      "FREIGHT_REFUND",<br>      "LOGISTIC",<br>      "GIFT_ORDER",<br>      "GIFT_LOGISTIC",<br>      "DIRECT_SWITCH_HUMAN"<br>    ] | 工具列表 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.comlogistics/track/bytedance/query?app_key=your_appkey_here&method=logistics.track.bytedance.query&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.comlogistics/track/bytedance/query?app_key=your_appkey_here&method=logistics.track.bytedance.query&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PigeonGetPigeonToolListRequest request = new PigeonGetPigeonToolListRequest();
PigeonGetPigeonToolListParam param = request.getParam();
param.setPigeonBizType(2L);
param.setExt("\"\"");
PigeonGetPigeonToolListResponse response = request.execute(accessToken);

```

### php

```php
$request = new PigeonGetPigeonToolListRequest();
$param = new PigeonGetPigeonToolListParam();
$request->setParam($param);
$param->pigeon_biz_type = 2;
$param->ext = "\"\"";
$response = $request->execute(accessToken);

```

### python

```python
request = PigeonGetPigeonToolListRequest()
param = request.getParams()
param.pigeon_biz_type = 2
param.ext = "\"\""
response = request.execute(accessToken)

```

### go

```go
request := pigeon_GetPigeonToolList_request.New()
param := request.GetParams()
param.PigeonBizType = 2
param.Ext = "\"\""
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PigeonGetPigeonToolListRequest();
var param = request.BuildParam();
param.PigeonBizType = 2;
param.Ext = "\"\"";
var response = request.Execute<PigeonGetPigeonToolListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:-1001 | -1001:pigeon_biz_type参数错误，当前只允许传入值2 | pigeon_biz_type目前只允许传入值2（商家） |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
