# /power/updateInterceptionInfo

> 中文说明：拦截成功退回结果回传接口（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1480>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/updateInterceptionInfo |
| 中文名称 | 拦截成功退回结果回传接口（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1480 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2021/11/24 16:52:24 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

用于服务商推送拦结果

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.updateInterceptionInfo | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | shop_id_compatible | shopId | false | 1 | 1234 | 店铺Id | - | - |
| 0 | resource_code | resourceCode | false | 2 | 1234567890000 | 运单号 | - | - |
| 0 | waybill_no | waybillNo | false | 2 | 11111 | 物流服务商资源编码 | - | - |
| 0 | return_result | returnResult | false | 2 | 1 | 退回结果 | - | - |
| 0 | result_code | resultCode | false | 2 | 10001 | 退回失败原因编码 | - | - |
| 0 | result_message | resultMessage | false | 2 | 用户签收 | 退回失败原因信息 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/updateInterceptionInfo?app_key=your_appkey_here&method=power.updateInterceptionInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/updateInterceptionInfo?app_key=your_appkey_here&method=power.updateInterceptionInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerUpdateInterceptionInfoRequest request = new PowerUpdateInterceptionInfoRequest();
PowerUpdateInterceptionInfoParam param = request.getParam();
param.setShopIdCompatible(1234L);
param.setResourceCode("1234567890000");
param.setWaybillNo("11111");
param.setReturnResult("1");
param.setResultCode("10001");
param.setResultMessage("用户签收");
PowerUpdateInterceptionInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerUpdateInterceptionInfoRequest();
$param = new PowerUpdateInterceptionInfoParam();
$request->setParam($param);
$param->shop_id_compatible = 1234;
$param->resource_code = "1234567890000";
$param->waybill_no = "11111";
$param->return_result = "1";
$param->result_code = "10001";
$param->result_message = "用户签收";
$response = $request->execute(accessToken);

```

### python

```python
request = PowerUpdateInterceptionInfoRequest()
param = request.getParams()
param.shop_id_compatible = 1234
param.resource_code = "1234567890000"
param.waybill_no = "11111"
param.return_result = "1"
param.result_code = "10001"
param.result_message = "用户签收"
response = request.execute(accessToken)

```

### go

```go
request := power_updateInterceptionInfo_request.New()
param := request.GetParams()
param.ShopIdCompatible = 1234
param.ResourceCode = "1234567890000"
param.WaybillNo = "11111"
param.ReturnResult = "1"
param.ResultCode = "10001"
param.ResultMessage = "用户签收"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerUpdateInterceptionInfoRequest();
var param = request.BuildParam();
param.ShopIdCompatible = 1234;
param.ResourceCode = "1234567890000";
param.WaybillNo = "11111";
param.ReturnResult = "1";
param.ResultCode = "10001";
param.ResultMessage = "用户签收";
var response = request.Execute<PowerUpdateInterceptionInfoResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10006 | 10006:当前状态不允许变更 | 10006:当前状态不允许变更 |
| 50002 | 业务处理失败 | isv.business-failed:10000 | 10000:参数错误 | 10000:参数错误 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 10002:系统异常 | 10002:系统异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
