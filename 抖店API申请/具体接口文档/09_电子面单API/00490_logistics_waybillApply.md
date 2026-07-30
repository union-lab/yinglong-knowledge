# /logistics/waybillApply

> 中文说明：获取面单信息  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/490>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/waybillApply |
| 中文名称 | 获取面单信息 |
| 文档目录 | 电子面单API |
| Article ID | 490 |
| 文档版本 | V2.06 |
| 官方更新时间 | 2021/6/22 11:11:36 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 6500 |

## 使用说明

用于商家向字节系统，获取电子面单打印加密数据；

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.waybillApply | 调用的API接口名称 | - | - |
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
| 0 | waybill_applies | waybillApplies | true | 3 | - | 请求结构体 | - | - |
| 1 | waybill_applies.logistics_code | company | true | 2 | 1 | 物流公司编码 | - | - |
| 1 | waybill_applies.track_no | trackNo | true | 2 | 1 | 运单号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | waybill_infos | waybillInfos | - | 3 | - | 正常返回结构体 | - | - |
| 1 | waybill_infos.order_id | orderId | - | 2 | 1 | 订单号 | - | R1 |
| 1 | waybill_infos.track_no | trackNo | - | 2 | 1 | 运单号 | - | R1 |
| 1 | waybill_infos.print_data | printData | - | 2 | 1 | 加密的面单数据 | - | R1 |
| 1 | waybill_infos.sign | sign | - | 2 | 1 | 签名信息 | - | R1 |
| 0 | err_infos | errInfos | - | 3 | - | 错误返回结构体 | - | - |
| 1 | err_infos.track_no | trackNo | - | 2 | 1 | 运单号 | - | R1 |
| 1 | err_infos.order_id | orderId | - | 2 | 1 | 订单号 | - | R1 |
| 1 | err_infos.err_code | errCode | - | 7 | 1 | 错误码 | - | R1 |
| 1 | err_infos.err_msg | errMsg | - | 2 | 1 | 错误信息 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/waybillApply?app_key=your_appkey_here&method=logistics.waybillApply&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/waybillApply?app_key=your_appkey_here&method=logistics.waybillApply&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsWaybillApplyRequest request = new LogisticsWaybillApplyRequest();
LogisticsWaybillApplyParam param = request.getParam();
LogisticsWaybillApplyResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsWaybillApplyRequest();
$param = new LogisticsWaybillApplyParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsWaybillApplyRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := logistics_waybillApply_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsWaybillApplyRequest();
var param = request.BuildParam();
var response = request.Execute<LogisticsWaybillApplyResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:1001 | 参数有误，请检查请求参数 | 参数有误，请检查请求参数 |
| 20000 | 系统错误 | isp.service-error:100102 | 查询密钥失败 | 请稍后重试 |
| 20000 | 系统错误 | isp.service-error:100101 | 获取订单信息失败 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:1003 | 1003:运单号有误，请检查运单号 | 请检查运单号 |
| 50002 | 业务处理失败 | isv.business-failed:100106 | 100106:系统错误，请稍后重试 | 请检查运单号 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
