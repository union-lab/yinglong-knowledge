# /pigeon/ISVExecuteTool

> 中文说明：执行ISV客服工具的接口，支持执行各种客服相关的自动化工具和脚本  
> 所属类别：飞鸽API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/188/7670>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /pigeon/ISVExecuteTool |
| 中文名称 | 执行ISV客服工具的接口，支持执行各种客服相关的自动化工具和脚本 |
| 文档目录 | 飞鸽API |
| Article ID | 7670 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/11/27 11:54:01 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

该接口用于执行ISV(Independent Software Vendor)客服工具，支持：
1. 执行指定的客服工具代码
2. 传递业务参数和上下文信息
3. 处理工具执行结果和错误信息
4. 支持多种业务类型和店铺场景

主要用于执行各种自动化工具，如订单查询、物流跟踪、退款处理等客服场景。

请求参数包括：
- toolCode: 工具代码标识
- executeParams: 执行参数
- script: 可选的执行脚本
- bizParamsContext: 业务上下文信息（对话ID、订单ID等）
- pigeonBizType: 鸽子业务类型
- pigeonShopId: 店铺ID

响应结果包含工具执行的结果数据和可能的业务错误信息。

## 权限包

- 飞鸽 / 飞鸽工单（packageType=1）；适用应用类目：工单管理、强管控微应用、AI智能客服-微应用、AI售后挽单
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | pigeon.ISVExecuteTool | 调用的API接口名称 | - | - |
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
| 0 | tool_code | tool_code | true | 2 | "BASIC_SCRIPT" | 工具code | - | - |
| 0 | execute_params | execute_params | false | 8 | "product_id_list": "[\"3740656536352063689\",\"3686240338055397653\"]" | 工具执行参数，部分工具存在必传参数 | - | - |
| 0 | script | script | false | 2 | "您好" | 回复话术（BASIC_SCRIPT工具必传） | - | - |
| 0 | biz_params_context | biz_params_context | true | 5 | - | 固定业务参数，有就传，部分工具存在必传参数 | - | - |
| 1 | biz_params_context.talk_id | talk_id | true | 2 | "7524598324482114" | 子会话ID | - | - |
| 1 | biz_params_context.shop_order_id | shop_order_id | false | 2 | "0" | 商城订单ID | - | - |
| 1 | biz_params_context.sku_order_id | sku_order_id | false | 2 | "0" | sku订单ID | - | - |
| 1 | biz_params_context.after_sale_id | after_sale_id | false | 2 | "0" | 售后ID | - | - |
| 1 | biz_params_context.product_id | product_id | false | 2 | "37608307150512459" | 产品ID | - | - |
| 1 | biz_params_context.msg_id | msg_id | true | 2 | "18370601871002" | 消息ID | - | - |
| 0 | pigeon_biz_type | pigeon_biz_type | true | 99 | 2 | 业务身份 | - | - |
| 0 | pigeon_shop_id | pigeon_shop_id | true | 99 | 14562951 | 飞鸽店铺ID | - | - |
| 0 | biz_idempotent_no | biz_idempotent_no | true | 2 | "0217519571190490000717ab0:1837060187100" | 工具执行幂等ID，过期时间2h | - | - |
| 0 | trace_id | trace_id | true | 2 | "0217511190490000ffff40a17ab0:1837100268" | 生命周期ID | - | - |
| 0 | doudian_open_id | user_id | true | 0 | "104477413000" | 执行对象ID，一般为消费者ID | - | - |
| 0 | ext | ext | false | 2 | "" | 扩展字段 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | result | result | - | 2 | "SUCCESS" | 工具执行结果。SUCCESS or FAILED | - | - |
| 0 | trace_id | trace_id | - | 2 | "0217511190490000ffff40a17ab0:1837100268" | 生命周期ID | - | - |
| 0 | biz_err | biz_err | - | 5 | - | 业务错误 | - | R1 |
| 1 | biz_err.code | code | - | 99 | 0 | 业务错误码，0表示成功 | - | - |
| 1 | biz_err.msg | msg | - | 2 | "" | 业务错误信息 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/pigeon/ISVExecuteTool?app_key=your_appkey_here&method=pigeon.ISVExecuteTool&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/pigeon/ISVExecuteTool?app_key=your_appkey_here&method=pigeon.ISVExecuteTool&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PigeonISVExecuteToolRequest request = new PigeonISVExecuteToolRequest();
PigeonISVExecuteToolParam param = request.getParam();
param.setToolCode("\"BASIC_SCRIPT\"");
param.setExecuteParams("product_id_list": "[\"3740656536352063689\",\"3686240338055397653\"]");
param.setScript("\"您好\"");
param.setPigeonBizType(2L);
param.setPigeonShopId(14562951L);
param.setBizIdempotentNo("\"0217519571190490000717ab0:1837060187100\"");
param.setTraceId("\"0217511190490000ffff40a17ab0:1837100268\"");
param.setDoudianOpenId("\"104477413000\"");
param.setExt("\"\"");
PigeonISVExecuteToolResponse response = request.execute(accessToken);

```

### php

```php
$request = new PigeonISVExecuteToolRequest();
$param = new PigeonISVExecuteToolParam();
$request->setParam($param);
$param->tool_code = "\"BASIC_SCRIPT\"";
$param->execute_params = "product_id_list": "[\"3740656536352063689\",\"3686240338055397653\"]";
$param->script = "\"您好\"";
$param->pigeon_biz_type = 2;
$param->pigeon_shop_id = 14562951;
$param->biz_idempotent_no = "\"0217519571190490000717ab0:1837060187100\"";
$param->trace_id = "\"0217511190490000ffff40a17ab0:1837100268\"";
$param->doudian_open_id = "\"104477413000\"";
$param->ext = "\"\"";
$response = $request->execute(accessToken);

```

### python

```python
request = PigeonISVExecuteToolRequest()
param = request.getParams()
param.tool_code = "\"BASIC_SCRIPT\""
param.execute_params = "product_id_list": "[\"3740656536352063689\",\"3686240338055397653\"]"
param.script = "\"您好\""
param.pigeon_biz_type = 2
param.pigeon_shop_id = 14562951
param.biz_idempotent_no = "\"0217519571190490000717ab0:1837060187100\""
param.trace_id = "\"0217511190490000ffff40a17ab0:1837100268\""
param.doudian_open_id = "\"104477413000\""
param.ext = "\"\""
response = request.execute(accessToken)

```

### go

```go
request := pigeon_ISVExecuteTool_request.New()
param := request.GetParams()
param.ToolCode = "\"BASIC_SCRIPT\""
param.ExecuteParams = "product_id_list": "[\"3740656536352063689\",\"3686240338055397653\"]"
param.Script = "\"您好\""
param.PigeonBizType = 2
param.PigeonShopId = 14562951
param.BizIdempotentNo = "\"0217519571190490000717ab0:1837060187100\""
param.TraceId = "\"0217511190490000ffff40a17ab0:1837100268\""
param.DoudianOpenId = "\"104477413000\""
param.Ext = "\"\""
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PigeonISVExecuteToolRequest();
var param = request.BuildParam();
param.ToolCode = "\"BASIC_SCRIPT\"";
param.ExecuteParams = "product_id_list": "[\"3740656536352063689\",\"3686240338055397653\"]";
param.Script = "\"您好\"";
param.PigeonBizType = 2;
param.PigeonShopId = 14562951;
param.BizIdempotentNo = "\"0217519571190490000717ab0:1837060187100\"";
param.TraceId = "\"0217511190490000ffff40a17ab0:1837100268\"";
param.DoudianOpenId = "\"104477413000\"";
param.Ext = "\"\"";
var response = request.Execute<PigeonISVExecuteToolResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:30001 | 工具执行参数异常 | 检查工具参数配置是否正确 |
| 20000 | 系统错误 | isp.service-error:30002 | 工具暂不支持 | 确认工具是否已上线或支持 |
| 20000 | 系统错误 | isp.service-error:30003 | 当前会话已使用过该工具 | 检查会话状态或更换工具 |
| 20000 | 系统错误 | isp.service-error:30004 | 工具执行失败 | 查看执行日志定位原因 |
| 20000 | 系统错误 | isp.service-error:30005 | 工具执行幂等 | 确认是否重复调用或重复请求 |
| 20000 | 系统错误 | isp.service-error:30006 | 工具预先校验失败 | 检查前置条件或参数是否符合要求 |
| 20000 | 系统错误 | isp.service-error:30007 | 工具执行参数异常 | 检查参数完整性与格式 |
| 20000 | 系统错误 | isp.service-error:31000 | 工具配置加载失败 | 检查配置文件或资源是否正常 |
| 20000 | 系统错误 | isp.service-error:31001 | 工具生命周期ID缺失 | 确认生命周期ID是否正确传入 |
| 20000 | 系统错误 | isp.service-error:31100 | 事件执行失败 | 检查事件执行逻辑及日志 |
| 20000 | 系统错误 | isp.service-error:31101 | 事件表达失败 | 检查事件表达式配置及语法 |
| 20000 | 系统错误 | isp.service-error:31102 | 事件参数校验失败 | 检查事件参数是否完整及符合要求 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
