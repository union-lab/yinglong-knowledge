# /logistics/deliveryNotice

> 中文说明：订单放行/回退  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/1578>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/deliveryNotice |
| 中文名称 | 订单放行/回退 |
| 文档目录 | 电子面单API |
| Article ID | 1578 |
| 文档版本 | V1.04 |
| 官方更新时间 | 2021/12/28 15:33:55 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

1、顺丰极效前置订单放行/回退；
2、顺丰的极效前置类型支持展示在标准区域和自定义区域；①标准区域：235产品类型(右上角)显示:"极效前置-预售";或者"极效前置“；②自定义区域：商家使用自定义模板编辑器，设置打印项，商家自行设置”前置件“标签打印

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.deliveryNotice | 调用的API接口名称 | - | - |
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
| 0 | waybill_no | WaybillNo | true | 2 | SF1345778775768 | 运单号 | - | - |
| 0 | notice_type | NoticeType | true | 2 | 71 | 放行/回退 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | result | result | - | 4 | true | 是否成功 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/deliveryNotice?app_key=your_appkey_here&method=logistics.deliveryNotice&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/deliveryNotice?app_key=your_appkey_here&method=logistics.deliveryNotice&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsDeliveryNoticeRequest request = new LogisticsDeliveryNoticeRequest();
LogisticsDeliveryNoticeParam param = request.getParam();
param.setWaybillNo("SF1345778775768");
param.setNoticeType("71");
LogisticsDeliveryNoticeResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsDeliveryNoticeRequest();
$param = new LogisticsDeliveryNoticeParam();
$request->setParam($param);
$param->waybill_no = "SF1345778775768";
$param->notice_type = "71";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsDeliveryNoticeRequest()
param = request.getParams()
param.waybill_no = "SF1345778775768"
param.notice_type = "71"
response = request.execute(accessToken)

```

### go

```go
request := logistics_deliveryNotice_request.New()
param := request.GetParams()
param.WaybillNo = "SF1345778775768"
param.NoticeType = "71"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsDeliveryNoticeRequest();
var param = request.BuildParam();
param.WaybillNo = "SF1345778775768";
param.NoticeType = "71";
var response = request.Execute<LogisticsDeliveryNoticeResponse>(accessToken);

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
