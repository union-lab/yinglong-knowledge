# /instantShopping/starhub/updateInboundOrderStatus

> 中文说明：更新抖音侧即时零售入库单状态  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/6532>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /instantShopping/starhub/updateInboundOrderStatus |
| 中文名称 | 更新抖音侧即时零售入库单状态 |
| 文档目录 | 店铺API |
| Article ID | 6532 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/5/24 16:23:42 |
| 授权主体 | [] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

更新抖音侧即时零售入库单状态，当前使用于退货入库单

## 权限包

- 即时零售仓配 / 共享仓-即时零售（packageType=1）；适用应用类目：即时零售仓储管理、即时零售仓储自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | instantShopping.starhub/updateInboundOrderStatus | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | false | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | inbound_order_id | InboundOrderId | true | 2 | 734672346823411 | 抖音入库单ID | - | - |
| 0 | inbound_order_status | InboundOrderStatus | true | 99 | 200 | 目标状态 | - | - |
| 0 | update_time | UpdateTime | true | 99 | 1708439873 | 操作时间，秒级时间戳 | - | - |
| 0 | operator_id | OperatorId | false | 2 | 0 | 操作人ID | - | - |
| 0 | operator_name | OperatorName | false | 2 | 系统自动 | 操作人姓名 | - | - |
| 0 | receive_count | ReceiveCount | false | 99 | 10 | 退货数量 = 实收（在更新状态=140场景为必填且>0） | - | - |
| 0 | total_count | TotalCount | false | 99 | 8 | 残次+正品总和（在更新状态=200场景为必填） | - | - |
| 0 | shelf_count | ShelfCount | false | 99 | 6 | 上架数量（在更新状态=200场景为必填）（正品数量） | - | - |
| 0 | defective_count | DefectiveCount | false | 99 | 2 | 残次数量 (在更新状态=200场景传入) | - | - |
| 0 | failure_cause | FailureCause | false | 99 | 1 | 失败原因 （在更新状态=500场景为必填） | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/recycle/buyerGetOrderList?app_key=your_appkey_here&method=recycle.buyerGetOrderList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/recycle/buyerGetOrderList?app_key=your_appkey_here&method=recycle.buyerGetOrderList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
InstantShoppingStarhubUpdateInboundOrderStatusRequest request = new InstantShoppingStarhubUpdateInboundOrderStatusRequest();
InstantShoppingStarhubUpdateInboundOrderStatusParam param = request.getParam();
param.setInboundOrderId("734672346823411");
param.setInboundOrderStatus(200);
param.setUpdateTime(1708439873L);
param.setOperatorId("0");
param.setOperatorName("系统自动");
param.setReceiveCount(10);
param.setTotalCount(8);
param.setShelfCount(6);
param.setDefectiveCount(2);
param.setFailureCause(1);
InstantShoppingStarhubUpdateInboundOrderStatusResponse response = request.execute(accessToken);

```

### php

```php
$request = new InstantShoppingStarhubUpdateInboundOrderStatusRequest();
$param = new InstantShoppingStarhubUpdateInboundOrderStatusParam();
$request->setParam($param);
$param->inbound_order_id = "734672346823411";
$param->inbound_order_status = 200;
$param->update_time = 1708439873;
$param->operator_id = "0";
$param->operator_name = "系统自动";
$param->receive_count = 10;
$param->total_count = 8;
$param->shelf_count = 6;
$param->defective_count = 2;
$param->failure_cause = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = InstantShoppingStarhubUpdateInboundOrderStatusRequest()
param = request.getParams()
param.inbound_order_id = "734672346823411"
param.inbound_order_status = 200
param.update_time = 1708439873
param.operator_id = "0"
param.operator_name = "系统自动"
param.receive_count = 10
param.total_count = 8
param.shelf_count = 6
param.defective_count = 2
param.failure_cause = 1
response = request.execute(accessToken)

```

### go

```go
request := instantShopping_starhub_updateInboundOrderStatus_request.New()
param := request.GetParams()
param.InboundOrderId = "734672346823411"
param.InboundOrderStatus = 200
param.UpdateTime = 1708439873
param.OperatorId = "0"
param.OperatorName = "系统自动"
param.ReceiveCount = 10
param.TotalCount = 8
param.ShelfCount = 6
param.DefectiveCount = 2
param.FailureCause = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new InstantShoppingStarhubUpdateInboundOrderStatusRequest();
var param = request.BuildParam();
param.InboundOrderId = "734672346823411";
param.InboundOrderStatus = 200;
param.UpdateTime = 1708439873;
param.OperatorId = "0";
param.OperatorName = "系统自动";
param.ReceiveCount = 10;
param.TotalCount = 8;
param.ShelfCount = 6;
param.DefectiveCount = 2;
param.FailureCause = 1;
var response = request.Execute<InstantShoppingStarhubUpdateInboundOrderStatusResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:40001 | 非法入参 | 传入合法入参 |
| 40004 | 非法的参数 | isv.parameter-invalid:40006 | 没有权限操作出库单 | 传入有权限的入库单id |
| 50002 | 业务处理失败 | isv.business-failed:40010 | 40010: | 40010: |
| 50002 | 业务处理失败 | isv.business-failed:40004 | 40004:order_id is invalid | 40004:order_id is invalid |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
