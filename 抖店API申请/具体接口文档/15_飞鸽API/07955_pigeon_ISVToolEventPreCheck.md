# /pigeon/ISVToolEventPreCheck

> 中文说明：ISV客服工具可用性预检查接口，用于查询指定会话中各个客服工具的可执行状态和频控限制  
> 所属类别：飞鸽API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/188/7955>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /pigeon/ISVToolEventPreCheck |
| 中文名称 | ISV客服工具可用性预检查接口，用于查询指定会话中各个客服工具的可执行状态和频控限制 |
| 文档目录 | 飞鸽API |
| Article ID | 7955 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/12/17 12:52:04 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

本接口用于ISV（第三方服务商）在调用客服工具执行接口前，预先检查工具的可用性状态。

主要功能：
1. 工具可用性检查：根据会话上下文、业务类型、店铺等信息，判断指定的客服工具列表中哪些工具当前可以执行
2. 频控校验：基于会话维度的调用次数限制，结合用户维度的AB实验分组，判断工具是否超过调用次数限制
3. 业务规则校验：针对特定工具的业务前置条件检查（如订单状态、售后状态等）

核心参数说明：
- isv_id: ISV服务商标识
- pigeon_biz_type: 业务类型（必填，如2表示商家客服）
- shop_id: 店铺ID
- user_id: 用户ID（用于AB实验分组判断）
- conversation_id: 会话ID（频控以会话维度统计）
- tool_codes: 需要检查的工具代码列表

返回结果：
- ToolAvailability: Map结构，key为工具代码，value为布尔值表示是否可用
- 返回false的原因可能包括：超过频控限制、业务条件不满足、工具配置未开启等

使用场景：
建议ISV在调用 /pigeon/isvExecuteTool 执行工具前，先调用本接口进行预检查，根据返回的可用性状态决定是否展示或调用对应的工具，避免执行失败影响用户体验。

注意事项：
- 频控限制基于会话维度统计，但限额根据用户AB实验分组决定
- 预检查结果具有时效性，建议在执行工具前实时调用
- DIRECT_SWITCH_HUMAN（转人工）工具无频控限制，因为转人工后会话不可逆

## 权限包

- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | pigeon.ISVToolEventPreCheck | 调用的API接口名称 | - | - |
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
| 0 | doudian_open_id | user_id | false | 0 | "1@#0n0iM1mdffUpnP+ZsNTCDQIjknfxQfgiUOZRJFU5nm1jAuO4EtbjEEqYA4G9lepbLTocwRkymA==" | 用户ID（用于AB实验分流） | - | - |
| 0 | tool_codes | tool_codes | false | 3 | [<br>        "URGE_PURCHASE",<br>        "BASIC_PRODUCT_CARD",<br>        "GOODS_RECOMMEND",<br>        "ACK_ORDER_ADDRESS",<br>        "APPLY_REFUND",<br>        "APPLY_EXCHANGE",<br>        "APPLY_AFTERSALE",<br>        "URGE_DELIVERY",<br>        "CLARIFY_ORDER",<br>        "URGE_AFTERSALE",<br>        "AFTERSALE_PROGRESS",<br>        "SENDBACK_GOODS",<br>        "REVERSE_LOGISTIC",<br>        "FREIGHT_REFUND",<br>        "LOGISTIC",<br>        "GIFT_LOGISTIC",<br>        "DIRECT_SWITCH_HUMAN",<br>        "INVOICE",<br>        "SEND_IMAGE"<br>    ] | 工具代码列表 | - | - |
| 0 | conversation_id | conversation_id | false | 2 | "7582570312244544808" | 会话ID（用于会话维度频控） | - | - |
| 0 | ext | ext | false | 2 | "" | 扩展字段 | - | - |
| 0 | pigeon_biz_type | pigeon_biz_type | false | 99 | 2 | 飞鸽业务类型 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | tool_availability | tool_availability | - | 8 | {"ACK_ORDER_ADDRESS":true,"AFTERSALE_PROGRESS":true,"APPLY_AFTERSALE":true,"APPLY_EXCHANGE":true,"APPLY_REFUND":true,"BASIC_PRODUCT_CARD":false,"CLARIFY_ORDER":true,"DIRECT_SWITCH_HUMAN":true,"FREIGHT_REFUND":true,"GIFT_LOGISTIC":true,"GOODS_RECOMMEND":true,"INVOICE":true,"LOGISTIC":true,"REVERSE_LOGISTIC":true,"SENDBACK_GOODS":true,"SEND_IMAGE":true,"URGE_AFTERSALE":true,"URGE_DELIVERY":true,"URGE_PURCHASE":true} | 工具可用性，key为tool_code，value为是否可用 | - | R1 |
| 0 | ext | ext | - | 2 | "" | 扩展字段 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/pigeon/ISVToolEventPreCheck?app_key=your_appkey_here&method=pigeon.ISVToolEventPreCheck&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/pigeon/ISVToolEventPreCheck?app_key=your_appkey_here&method=pigeon.ISVToolEventPreCheck&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PigeonISVToolEventPreCheckRequest request = new PigeonISVToolEventPreCheckRequest();
PigeonISVToolEventPreCheckParam param = request.getParam();
param.setDoudianOpenId("\"1@#0n0iM1mdffUpnP+ZsNTCDQIjknfxQfgiUOZRJFU5nm1jAuO4EtbjEEqYA4G9lepbLTocwRkymA==\"");
param.setToolCodes([        "URGE_PURCHASE",        "BASIC_PRODUCT_CARD",        "GOODS_RECOMMEND",        "ACK_ORDER_ADDRESS",        "APPLY_REFUND",        "APPLY_EXCHANGE",        "APPLY_AFTERSALE",        "URGE_DELIVERY",        "CLARIFY_ORDER",        "URGE_AFTERSALE",        "AFTERSALE_PROGRESS",        "SENDBACK_GOODS",        "REVERSE_LOGISTIC",        "FREIGHT_REFUND",        "LOGISTIC",        "GIFT_LOGISTIC",        "DIRECT_SWITCH_HUMAN",        "INVOICE",        "SEND_IMAGE"    ]);
param.setConversationId("\"7582570312244544808\"");
param.setExt("\"\"");
param.setPigeonBizType(2L);
PigeonISVToolEventPreCheckResponse response = request.execute(accessToken);

```

### php

```php
$request = new PigeonISVToolEventPreCheckRequest();
$param = new PigeonISVToolEventPreCheckParam();
$request->setParam($param);
$param->doudian_open_id = "\"1@#0n0iM1mdffUpnP+ZsNTCDQIjknfxQfgiUOZRJFU5nm1jAuO4EtbjEEqYA4G9lepbLTocwRkymA==\"";
$param->tool_codes = [        "URGE_PURCHASE",        "BASIC_PRODUCT_CARD",        "GOODS_RECOMMEND",        "ACK_ORDER_ADDRESS",        "APPLY_REFUND",        "APPLY_EXCHANGE",        "APPLY_AFTERSALE",        "URGE_DELIVERY",        "CLARIFY_ORDER",        "URGE_AFTERSALE",        "AFTERSALE_PROGRESS",        "SENDBACK_GOODS",        "REVERSE_LOGISTIC",        "FREIGHT_REFUND",        "LOGISTIC",        "GIFT_LOGISTIC",        "DIRECT_SWITCH_HUMAN",        "INVOICE",        "SEND_IMAGE"    ];
$param->conversation_id = "\"7582570312244544808\"";
$param->ext = "\"\"";
$param->pigeon_biz_type = 2;
$response = $request->execute(accessToken);

```

### python

```python
request = PigeonISVToolEventPreCheckRequest()
param = request.getParams()
param.doudian_open_id = "\"1@#0n0iM1mdffUpnP+ZsNTCDQIjknfxQfgiUOZRJFU5nm1jAuO4EtbjEEqYA4G9lepbLTocwRkymA==\""
param.tool_codes = [        "URGE_PURCHASE",        "BASIC_PRODUCT_CARD",        "GOODS_RECOMMEND",        "ACK_ORDER_ADDRESS",        "APPLY_REFUND",        "APPLY_EXCHANGE",        "APPLY_AFTERSALE",        "URGE_DELIVERY",        "CLARIFY_ORDER",        "URGE_AFTERSALE",        "AFTERSALE_PROGRESS",        "SENDBACK_GOODS",        "REVERSE_LOGISTIC",        "FREIGHT_REFUND",        "LOGISTIC",        "GIFT_LOGISTIC",        "DIRECT_SWITCH_HUMAN",        "INVOICE",        "SEND_IMAGE"    ]
param.conversation_id = "\"7582570312244544808\""
param.ext = "\"\""
param.pigeon_biz_type = 2
response = request.execute(accessToken)

```

### go

```go
request := pigeon_ISVToolEventPreCheck_request.New()
param := request.GetParams()
param.DoudianOpenId = "\"1@#0n0iM1mdffUpnP+ZsNTCDQIjknfxQfgiUOZRJFU5nm1jAuO4EtbjEEqYA4G9lepbLTocwRkymA==\""
param.ToolCodes = [        "URGE_PURCHASE",        "BASIC_PRODUCT_CARD",        "GOODS_RECOMMEND",        "ACK_ORDER_ADDRESS",        "APPLY_REFUND",        "APPLY_EXCHANGE",        "APPLY_AFTERSALE",        "URGE_DELIVERY",        "CLARIFY_ORDER",        "URGE_AFTERSALE",        "AFTERSALE_PROGRESS",        "SENDBACK_GOODS",        "REVERSE_LOGISTIC",        "FREIGHT_REFUND",        "LOGISTIC",        "GIFT_LOGISTIC",        "DIRECT_SWITCH_HUMAN",        "INVOICE",        "SEND_IMAGE"    ]
param.ConversationId = "\"7582570312244544808\""
param.Ext = "\"\""
param.PigeonBizType = 2
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PigeonISVToolEventPreCheckRequest();
var param = request.BuildParam();
param.DoudianOpenId = "\"1@#0n0iM1mdffUpnP+ZsNTCDQIjknfxQfgiUOZRJFU5nm1jAuO4EtbjEEqYA4G9lepbLTocwRkymA==\"";
param.ToolCodes = [        "URGE_PURCHASE",        "BASIC_PRODUCT_CARD",        "GOODS_RECOMMEND",        "ACK_ORDER_ADDRESS",        "APPLY_REFUND",        "APPLY_EXCHANGE",        "APPLY_AFTERSALE",        "URGE_DELIVERY",        "CLARIFY_ORDER",        "URGE_AFTERSALE",        "AFTERSALE_PROGRESS",        "SENDBACK_GOODS",        "REVERSE_LOGISTIC",        "FREIGHT_REFUND",        "LOGISTIC",        "GIFT_LOGISTIC",        "DIRECT_SWITCH_HUMAN",        "INVOICE",        "SEND_IMAGE"    ];
param.ConversationId = "\"7582570312244544808\"";
param.Ext = "\"\"";
param.PigeonBizType = 2;
var response = request.Execute<PigeonISVToolEventPreCheckResponse>(accessToken);

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
