# /rights/info

> 中文说明：订购服务权益查询接口-服务市场  
> 所属类别：工具API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/162/352>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /rights/info |
| 中文名称 | 订购服务权益查询接口-服务市场 |
| 文档目录 | 工具API |
| Article ID | 352 |
| 文档版本 | V6.01 |
| 官方更新时间 | 2023/8/1 17:25:22 |
| 授权主体 | ["店铺","供应商",""] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1500 |

## 使用说明

1、用于服务商查询已订购服务的商家/供应商等权益信息。

## 权限包

- 服务市场 / 服务市场基础包（packageType=1）；适用应用类目：厂家代打应用、装修设计、微应用-标题优化、卡券商工具、COD服务、跨境供应链服务、到家外卖云打印、到家外卖订单配送、跨境电商、撮合服务商、到家外卖ERP、售后管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、打单发货-微应用、搭配购-微应用、微应用-商详海报、厂商代发、短视频工具、商家成长官方课程、数据服务、订单处理-供应商、仓储管理、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、客服机器人、AIGC视频洞察、虚拟充值、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | rights.info | 调用的API接口名称 | - | - |
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
| 0 | biz_type | bizType | false | 7 | 3 | 授权主体类型，不传参默认查询店铺，2-ebill用户；3-供应商 | - | - |
| 0 | outer_biz_id | outerBizId | - | 2 | 6859718390706503687 | 外部业务ID(模板市场为模板code)，非必传，不可与service_id同传 | - | - |
| 0 | service_id | serviceId | - | 1 | 111111 | 抖店服务市场服务ID，非必传，不可与outer_biz_id同传 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | expire_time | expireTime | - | 2 | 2022-02-01 11:22:11 | 权益到期时间 | - | R1 |
| 0 | rights_type | rightsType | - | 7 | 1 | 0-试用版，1-正式版 | - | R1 |
| 0 | spec_type | specType | - | 7 | 1 | 规格类型，0-版本，其他待定 | - | R1 |
| 0 | spec_val | specVal | - | 2 | 高级版 | 规格名称 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/rights/info?app_key=your_appkey_here&method=rights.info&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/rights/info?app_key=your_appkey_here&method=rights.info&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
RightsInfoRequest request = new RightsInfoRequest();
RightsInfoParam param = request.getParam();
param.setBizType(3);
param.setOuterBizId("6859718390706503687");
param.setServiceId(111111L);
RightsInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new RightsInfoRequest();
$param = new RightsInfoParam();
$request->setParam($param);
$param->biz_type = 3;
$param->outer_biz_id = "6859718390706503687";
$param->service_id = 111111;
$response = $request->execute(accessToken);

```

### python

```python
request = RightsInfoRequest()
param = request.getParams()
param.biz_type = 3
param.outer_biz_id = "6859718390706503687"
param.service_id = 111111
response = request.execute(accessToken)

```

### go

```go
request := rights_info_request.New()
param := request.GetParams()
param.BizType = 3
param.OuterBizId = "6859718390706503687"
param.ServiceId = 111111
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new RightsInfoRequest();
var param = request.BuildParam();
param.BizType = 3;
param.OuterBizId = "6859718390706503687";
param.ServiceId = 111111;
var response = request.Execute<RightsInfoResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:200 | 权益查询失败 | 请核对应用与授权主体 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
