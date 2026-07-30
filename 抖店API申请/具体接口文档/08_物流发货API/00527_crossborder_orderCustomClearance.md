# /crossborder/orderCustomClearance

> 中文说明：服务商回告清关状态  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/527>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /crossborder/orderCustomClearance |
| 中文名称 | 服务商回告清关状态 |
| 文档目录 | 物流发货API |
| Article ID | 527 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2021/5/18 15:13:57 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 560 |

## 使用说明

服务商回告清关状态

## 权限包

- 跨境 / 跨境履约清关服务包（仓服务商）（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储物流-跨境4PL服务商

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | crossborder.orderCustomClearance | 调用的API接口名称 | - | - |
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
| 0 | vendor | vendor | true | 2 | QS | 字节给供应链服务商定义的编码 | - | - |
| 0 | order_id | order_id | true | 2 | 1232 | 字节电商平台的交易订单号 | - | - |
| 0 | status | status | true | 1 | 1 | 清关状态：1开始清关 2清关成功 3清关失败（需要平台接入的异常） | - | - |
| 0 | occurrence_time | occurrence_time | true | 2 | 2020-11-22 11:22:33 | 物流状态的真实发生时间，yyyy-MM-dd hh:mi:ss | - | - |
| 0 | customs_code | customs_code | true | 2 | QS | 申报口岸【口岸代码】 | - | - |
| 0 | customs_name | customs_name | true | 2 | QS | 申报口岸【口岸名称】 | - | - |
| 0 | error_info | error_info | false | 5 | - | 异常信息（【清关失败/异常】状态时，必须提供） | - | - |
| 1 | error_info.error_code | error_code | true | 2 | 210 | 发货失败异常码 | - | - |
| 1 | error_info.error_msg | error_msg | true | 2 | 失败 | 详细失败原因 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/crossborder/orderCustomClearance?app_key=your_appkey_here&method=crossborder.orderCustomClearance&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/crossborder/orderCustomClearance?app_key=your_appkey_here&method=crossborder.orderCustomClearance&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
CrossborderOrderCustomClearanceRequest request = new CrossborderOrderCustomClearanceRequest();
CrossborderOrderCustomClearanceParam param = request.getParam();
ErrorInfo errorInfo = new ErrorInfo();
param.setErrorInfo(errorInfo);
param.setVendor("QS");
param.setOrderId("1232");
param.setStatus(1L);
param.setOccurrenceTime("2020-11-22 11:22:33");
param.setCustomsCode("QS");
param.setCustomsName("QS");
errorInfo.setErrorCode("210");
errorInfo.setErrorMsg("失败");
CrossborderOrderCustomClearanceResponse response = request.execute(accessToken);

```

### php

```php
$request = new CrossborderOrderCustomClearanceRequest();
$param = new CrossborderOrderCustomClearanceParam();
$request->setParam($param);
$errorInfo = new ErrorInfo();
$param->error_info = $errorInfo;
$param->vendor = "QS";
$param->order_id = "1232";
$param->status = 1;
$param->occurrence_time = "2020-11-22 11:22:33";
$param->customs_code = "QS";
$param->customs_name = "QS";
$errorInfo->error_code = "210";
$errorInfo->error_msg = "失败";
$response = $request->execute(accessToken);

```

### python

```python
request = CrossborderOrderCustomClearanceRequest()
param = request.getParams()
errorInfo = ErrorInfo()
param.error_info = errorInfo
param.vendor = "QS"
param.order_id = "1232"
param.status = 1
param.occurrence_time = "2020-11-22 11:22:33"
param.customs_code = "QS"
param.customs_name = "QS"
errorInfo.error_code = "210"
errorInfo.error_msg = "失败"
response = request.execute(accessToken)

```

### go

```go
request := crossborder_orderCustomClearance_request.New()
param := request.GetParams()
errorInfo := new(ErrorInfo)
param.ErrorInfo = errorInfo
param.Vendor = "QS"
param.OrderId = "1232"
param.Status = 1
param.OccurrenceTime = "2020-11-22 11:22:33"
param.CustomsCode = "QS"
param.CustomsName = "QS"
errorInfo.ErrorCode = "210"
errorInfo.ErrorMsg = "失败"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new CrossborderOrderCustomClearanceRequest();
var param = request.BuildParam();
var errorInfo = new ErrorInfo();
param.ErrorInfo = errorInfo;
param.Vendor = "QS";
param.OrderId = "1232";
param.Status = 1;
param.OccurrenceTime = "2020-11-22 11:22:33";
param.CustomsCode = "QS";
param.CustomsName = "QS";
errorInfo.ErrorCode = "210";
errorInfo.ErrorMsg = "失败";
var response = request.Execute<CrossborderOrderCustomClearanceResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1000 | 1000: 非法的参数 | 检查参数是否正确，若确认参数正确请联系工作人员 |
| 50002 | 业务处理失败 | isv.business-failed:1005 | 1005:接口调用异常，请重试，多次失败请人工反馈 | 重试，多次失败联系工作人员 |
| 50002 | 业务处理失败 | isv.business-failed:1004 | 1004:回告节点时序有误，当前节点为【交易订单已关闭】 | 检查当前单据状态，回告正确的状态 |
| 50002 | 业务处理失败 | isv.business-failed:1002 | 1002:参数错误 | 检查参数是否正确，若确认参数正确请联系工作人员 |
| 50002 | 业务处理失败 | isv.business-failed:3002 | 3002:参数错误：暂时不支持 | 检查参数是否正确，若确认参数正确请联系工作人员 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
