# /power/pushNetCodeMapList

> 中文说明：段码配置数据  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1637>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/pushNetCodeMapList |
| 中文名称 | 段码配置数据 |
| 文档目录 | 物流发货API |
| Article ID | 1637 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2022/1/21 11:48:10 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

物流商段码配置数据

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.pushNetCodeMapList | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | net_code_map_list | netCodeMapList | true | 3 | - | 1 | - | - |
| 1 | net_code_map_list.from_net_code | fromNetCode | true | 2 | 1 | 1 | - | - |
| 1 | net_code_map_list.to_net_code | toNetCode | true | 2 | 1 | 1 | - | - |
| 1 | net_code_map_list.third_sort_code_maping_list | thirdSortCodeMapingList | false | 3 | - | 1 | - | - |
| 2 | net_code_map_list.third_sort_code_maping_list.from | from | true | 2 | 1 | 1 | - | - |
| 2 | net_code_map_list.third_sort_code_maping_list.to | to | true | 2 | 1 | 1 | - | - |
| 2 | net_code_map_list.third_sort_code_maping_list.data_op_timestamp | dataOpTimestamp | true | 1 | 1 | 1 | - | - |
| 1 | net_code_map_list.action | action | true | 7 | 1 | 1 | - | - |
| 1 | net_code_map_list.data_op_timestamp | dataOpTimestamp | true | 1 | 1 | 1 | - | - |
| 0 | op_timestamp | opTimestamp | true | 1 | 1 | 1 | - | - |
| 0 | operator | operator | true | 2 | 1 | 1 | - | - |
| 0 | operation_code | operationCode | true | 2 | 1 | 1 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | error_list | errorList | - | 3 | - | 1 | - | R1 |
| 1 | error_list.obj_id | objId | - | 2 | 1 | 1 | - | R1 |
| 1 | error_list.obj_code3_id | objCode3Id | - | 2 | 1 | 1 | - | R1 |
| 1 | error_list.err_msg | errMsg | - | 2 | 1 | 1 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/pushNetCodeMapList?app_key=your_appkey_here&method=power.pushNetCodeMapList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/pushNetCodeMapList?app_key=your_appkey_here&method=power.pushNetCodeMapList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerPushNetCodeMapListRequest request = new PowerPushNetCodeMapListRequest();
PowerPushNetCodeMapListParam param = request.getParam();
param.setOpTimestamp(1L);
param.setOperator("1");
param.setOperationCode("1");
PowerPushNetCodeMapListResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerPushNetCodeMapListRequest();
$param = new PowerPushNetCodeMapListParam();
$request->setParam($param);
$param->op_timestamp = 1;
$param->operator = "1";
$param->operation_code = "1";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerPushNetCodeMapListRequest()
param = request.getParams()
param.op_timestamp = 1
param.operator = "1"
param.operation_code = "1"
response = request.execute(accessToken)

```

### go

```go
request := power_pushNetCodeMapList_request.New()
param := request.GetParams()
param.OpTimestamp = 1
param.Operator = "1"
param.OperationCode = "1"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerPushNetCodeMapListRequest();
var param = request.BuildParam();
param.OpTimestamp = 1;
param.Operator = "1";
param.OperationCode = "1";
var response = request.Execute<PowerPushNetCodeMapListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4006 | 4006:存在重复的from映射，请检查 | 4006:存在重复的from映射，请检查 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
