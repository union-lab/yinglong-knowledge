# /logistics/appendSubOrder

> 中文说明：追加子母件  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/1075>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/appendSubOrder |
| 中文名称 | 追加子母件 |
| 文档目录 | 电子面单API |
| Article ID | 1075 |
| 文档版本 | V2.06 |
| 官方更新时间 | 2021/9/14 18:52:09 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

电子面单追加子单号场景；

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.appendSubOrder | 调用的API接口名称 | - | - |
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
| 0 | track_no | trackNo | true | 2 | 1343434 | 运单号 | - | - |
| 0 | logistics_code | express | true | 2 | shunfeng | 物流商编码 | - | - |
| 0 | pack_add_quantity | packAddQuantity | true | 7 | 1 | 追加个数 | - | - |
| 0 | is_return_full_sub_codes | isReturnFullSubCodes | false | 4 | false | 是否返回全量的子单号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | track_no | trackNo | - | 2 | sf2343434 | 运单号 | - | R1 |
| 0 | pack_quantity | packQuantity | - | 1 | 20 | 子母单数量 | - | R1 |
| 0 | sub_waybill_codes | subWaybillCodes | - | 2 | 1,2,3 | 新追加的子单号 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/appendSubOrder?app_key=your_appkey_here&method=logistics.appendSubOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/appendSubOrder?app_key=your_appkey_here&method=logistics.appendSubOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsAppendSubOrderRequest request = new LogisticsAppendSubOrderRequest();
LogisticsAppendSubOrderParam param = request.getParam();
param.setTrackNo("1343434");
param.setLogisticsCode("shunfeng");
param.setPackAddQuantity(1);
param.setIsReturnFullSubCodes(false);
LogisticsAppendSubOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsAppendSubOrderRequest();
$param = new LogisticsAppendSubOrderParam();
$request->setParam($param);
$param->track_no = "1343434";
$param->logistics_code = "shunfeng";
$param->pack_add_quantity = 1;
$param->is_return_full_sub_codes = false;
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsAppendSubOrderRequest()
param = request.getParams()
param.track_no = "1343434"
param.logistics_code = "shunfeng"
param.pack_add_quantity = 1
param.is_return_full_sub_codes = false
response = request.execute(accessToken)

```

### go

```go
request := logistics_appendSubOrder_request.New()
param := request.GetParams()
param.TrackNo = "1343434"
param.LogisticsCode = "shunfeng"
param.PackAddQuantity = 1
param.IsReturnFullSubCodes = false
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsAppendSubOrderRequest();
var param = request.BuildParam();
param.TrackNo = "1343434";
param.LogisticsCode = "shunfeng";
param.PackAddQuantity = 1;
param.IsReturnFullSubCodes = false;
var response = request.Execute<LogisticsAppendSubOrderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:10000 | 订单状态不为接货中,不允许拆单 | 订单状态不为接货中,不允许拆单 |
| 50002 | 业务处理失败 | isv.business-failed:10014 | 电子面单号不存在 | 输入正确的面单号 |
| 50002 | 业务处理失败 | isv.business-failed:8168 | 订单已生成路由不能申请子单 | 订单已生成路由不能申请子单 |
| 40004 | 非法的参数 | isv.parameter-invalid:400 | 参数错误 | 参数错误 |
| 50002 | 业务处理失败 | isv.business-failed:4007 | 目标服务异常或不可达 | 目标服务异常或不可达 |
| 50002 | 业务处理失败 | isv.business-failed:10901 | 订单已取消，不允许变更 | 订单已取消，不允许变更，请检查订单状态 |
| 50002 | 业务处理失败 | isv.business-failed:4009 | 4009:请求物流服务商超时         ! | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:4010 | 4010:操作数据库异常 | 4010:操作数据库异常 |
| 50002 | 业务处理失败 | isv.business-failed:20001 | 20001:重复请求 | 20001:重复请求 |
| 50002 | 业务处理失败 | isv.business-failed:8067 | 8067:超过最大能申请子单号数量 | 8067:超过最大能申请子单号数量 |
| 50002 | 业务处理失败 | isv.business-failed:200102 | 200102:内部服务异常 | 200102:内部服务异常 |
| 50002 | 业务处理失败 | isv.business-failed:10003 | 10003:系统错误 | 10003:系统错误 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 10002:系统未知异常 | 10002:系统未知异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
