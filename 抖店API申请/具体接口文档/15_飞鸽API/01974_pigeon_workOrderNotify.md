# /pigeon/workOrderNotify

> 中文说明：更新或者存储工单  
> 所属类别：飞鸽API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/188/1974>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /pigeon/workOrderNotify |
| 中文名称 | 更新或者存储工单 |
| 文档目录 | 飞鸽API |
| Article ID | 1974 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2022/10/27 11:01:22 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

飞鸽工单开放模块

## 权限包

- 飞鸽 / 飞鸽工单（packageType=1）；适用应用类目：工单管理、强管控微应用、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | pigeon.workOrderNotify | 调用的API接口名称 | - | - |
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
| 0 | creator_id | creator_id | true | 2 | 123123213 | 工单创建人ID | - | - |
| 0 | work_order_id | work_order_id | true | 2 | xxxxx | 工单唯一标识id | - | - |
| 0 | open_user_id | open_user_id | true | 2 | #zuLyd4U4J3p+czzXkwg+ZQ673h7KTcrKOddb5iPGAAE0K3MYJmgXEXof9LDtoScAfMKvdVRqpAL4CEI3SrLwYATIzTF9Qw== | 抖店用户ID | - | - |
| 0 | relation_id_type | relation_id_type | true | 1 | 1 | 工单关联id类型，1店铺订单 2商品订单 3售后单 4商品 | - | - |
| 0 | relation_id | relation_id | true | 2 | 4936192001894376568 | 关联单Id，如1 店铺订单ID，2 商品订单ID，3 售后单ID，4 商品ID | - | - |
| 0 | work_order_type_desc | work_order_type_desc | true | 2 | 换货工单 | 工单状态描述 | - | - |
| 0 | work_order_status | work_order_status | true | 1 | 10 | 工单状态  10 待处理/ 20 处理中/30 已完结/40 已失效（已删除，飞鸽内不展示） | - | - |
| 0 | title | title | true | 2 | 开放测试工单 | 工单标题 | - | - |
| 0 | event_type | event_type | true | 1 | 1 | 事件类型  1 创建事件  2 更新事件 | - | - |
| 0 | creator_id_type | creator_id_type | true | 1 | 1 | 工单创建人 账号体系 1 飞鸽账号体系 2 ISV账号体系，若为飞鸽体系，则creator_id传递飞鸽体系的身份ID，如OpenId,若为ISV账号，则需要和飞鸽协商后确定 | - | - |
| 0 | event_time | event_time | true | 1 | 1654163962 | 事件发生时间（单位：秒) | - | - |
| 0 | scene | scene | false | 1 | 0 | 工单场景 0其他 1补发 2换货 | - | - |
| 0 | trigger_action | trigger_action | false | 1 | 0 | 触发操作：0无操作 1发卡片 | - | - |
| 0 | extra_info | extra_info | false | 2 | xxx | 扩展数据 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/pigeon/workOrderNotify?app_key=your_appkey_here&method=pigeon.workOrderNotify&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/pigeon/workOrderNotify?app_key=your_appkey_here&method=pigeon.workOrderNotify&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PigeonWorkOrderNotifyRequest request = new PigeonWorkOrderNotifyRequest();
PigeonWorkOrderNotifyParam param = request.getParam();
param.setCreatorId("123123213");
param.setWorkOrderId("xxxxx");
param.setOpenUserId("#zuLyd4U4J3p+czzXkwg+ZQ673h7KTcrKOddb5iPGAAE0K3MYJmgXEXof9LDtoScAfMKvdVRqpAL4CEI3SrLwYATIzTF9Qw==");
param.setRelationIdType(1L);
param.setRelationId("4936192001894376568");
param.setWorkOrderTypeDesc("换货工单");
param.setWorkOrderStatus(10L);
param.setTitle("开放测试工单");
param.setEventType(1L);
param.setCreatorIdType(1L);
param.setEventTime(1654163962L);
param.setScene(0L);
param.setTriggerAction(0L);
param.setExtraInfo("xxx");
PigeonWorkOrderNotifyResponse response = request.execute(accessToken);

```

### php

```php
$request = new PigeonWorkOrderNotifyRequest();
$param = new PigeonWorkOrderNotifyParam();
$request->setParam($param);
$param->creator_id = "123123213";
$param->work_order_id = "xxxxx";
$param->open_user_id = "#zuLyd4U4J3p+czzXkwg+ZQ673h7KTcrKOddb5iPGAAE0K3MYJmgXEXof9LDtoScAfMKvdVRqpAL4CEI3SrLwYATIzTF9Qw==";
$param->relation_id_type = 1;
$param->relation_id = "4936192001894376568";
$param->work_order_type_desc = "换货工单";
$param->work_order_status = 10;
$param->title = "开放测试工单";
$param->event_type = 1;
$param->creator_id_type = 1;
$param->event_time = 1654163962;
$param->scene = 0;
$param->trigger_action = 0;
$param->extra_info = "xxx";
$response = $request->execute(accessToken);

```

### python

```python
request = PigeonWorkOrderNotifyRequest()
param = request.getParams()
param.creator_id = "123123213"
param.work_order_id = "xxxxx"
param.open_user_id = "#zuLyd4U4J3p+czzXkwg+ZQ673h7KTcrKOddb5iPGAAE0K3MYJmgXEXof9LDtoScAfMKvdVRqpAL4CEI3SrLwYATIzTF9Qw=="
param.relation_id_type = 1
param.relation_id = "4936192001894376568"
param.work_order_type_desc = "换货工单"
param.work_order_status = 10
param.title = "开放测试工单"
param.event_type = 1
param.creator_id_type = 1
param.event_time = 1654163962
param.scene = 0
param.trigger_action = 0
param.extra_info = "xxx"
response = request.execute(accessToken)

```

### go

```go
request := pigeon_workOrderNotify_request.New()
param := request.GetParams()
param.CreatorId = "123123213"
param.WorkOrderId = "xxxxx"
param.OpenUserId = "#zuLyd4U4J3p+czzXkwg+ZQ673h7KTcrKOddb5iPGAAE0K3MYJmgXEXof9LDtoScAfMKvdVRqpAL4CEI3SrLwYATIzTF9Qw=="
param.RelationIdType = 1
param.RelationId = "4936192001894376568"
param.WorkOrderTypeDesc = "换货工单"
param.WorkOrderStatus = 10
param.Title = "开放测试工单"
param.EventType = 1
param.CreatorIdType = 1
param.EventTime = 1654163962
param.Scene = 0
param.TriggerAction = 0
param.ExtraInfo = "xxx"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PigeonWorkOrderNotifyRequest();
var param = request.BuildParam();
param.CreatorId = "123123213";
param.WorkOrderId = "xxxxx";
param.OpenUserId = "#zuLyd4U4J3p+czzXkwg+ZQ673h7KTcrKOddb5iPGAAE0K3MYJmgXEXof9LDtoScAfMKvdVRqpAL4CEI3SrLwYATIzTF9Qw==";
param.RelationIdType = 1;
param.RelationId = "4936192001894376568";
param.WorkOrderTypeDesc = "换货工单";
param.WorkOrderStatus = 10;
param.Title = "开放测试工单";
param.EventType = 1;
param.CreatorIdType = 1;
param.EventTime = 1654163962;
param.Scene = 0;
param.TriggerAction = 0;
param.ExtraInfo = "xxx";
var response = request.Execute<PigeonWorkOrderNotifyResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2008 | 参数非法 | 请检查参数 |
| 40002 | 缺少必选参数 | isv.missing-parameter:9002 | 缺少必要的业务参数 | 请检查入参 |
| 20000 | 系统错误 | isp.service-error:9001 | 系统内部错误 | 请重试 |
| 20000 | 系统错误 | isp.service-error:2006 | 系统内部错误 | 请重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2007 | 参数过期 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:9003 | 参数错误 | 请检查参数信息后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2013 | 关联单查询失败 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2016 | 工单卡片发送失败 | 请检查参数信息后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2018 | 工单已存在 | 请检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:2005 | 工单不存在 | 请检查参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
