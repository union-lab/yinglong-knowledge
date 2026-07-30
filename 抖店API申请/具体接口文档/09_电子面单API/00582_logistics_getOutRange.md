# /logistics/getOutRange

> 中文说明：查询地址快递是否可以送达  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/582>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/getOutRange |
| 中文名称 | 查询地址快递是否可以送达 |
| 文档目录 | 电子面单API |
| Article ID | 582 |
| 文档版本 | V1.08 |
| 官方更新时间 | 2021/8/2 16:32:17 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 800 |

## 使用说明

可以前置查询接口，查询地址快递是否可以送达
调用路径：ISV/商家erp—>字节；

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP
- 即时零售仓配 / 即时零售仓配（packageType=1）；适用应用类目：即时零售仓储管理、即配配送商-聚合发单、即时零售订单配送、即时零售仓储自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.getOutRange | 调用的API接口名称 | - | - |
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
| 0 | logistics_code | company | true | 2 | jtexpress | 快递公司编码 | - | - |
| 0 | sender_address | senderAddress | false | 5 | - | 发货地址 | - | - |
| 1 | sender_address.country_code | countryCode | true | 2 | CHN | CHN | - | - |
| 1 | sender_address.province_name | provinceName | true | 2 | 浙江省 | 省份名称 | - | - |
| 1 | sender_address.city_name | cityName | true | 2 | 杭州市 | 城市名称 | - | - |
| 1 | sender_address.district_name | districtName | true | 2 | 滨江区 | 区名称 | - | - |
| 1 | sender_address.street_name | streetName | false | 2 | 长河街道 | 街道名称 | - | - |
| 1 | sender_address.detail_address | detailAddress | true | 2 | XX小区X幢 | 详细地址 | - | - |
| 0 | receiver_address | receiverAddress | false | 5 | - | 收件地址 | - | - |
| 1 | receiver_address.country_code | countryCode | true | 2 | CHN | CHN | - | - |
| 1 | receiver_address.province_name | provinceName | true | 2 | 浙江省 | 省份名称 | - | - |
| 1 | receiver_address.city_name | cityName | true | 2 | 杭州市 | 城市名称 | - | - |
| 1 | receiver_address.district_name | districtName | true | 2 | 滨江区 | 区名称 | - | - |
| 1 | receiver_address.street_name | streetName | false | 2 | 长河街道 | 街道名称 | - | - |
| 1 | receiver_address.detail_address | detailAddress | true | 2 | XX小区X幢 | 详细地址，支持密文 | - | - |
| 0 | type | type | true | 6 | 1 | 类型（0-揽派合一；1-揽收区域；2-派送区域） 0：取senderAddress, receiverAddress值 1：取senderAddress值 2：取receiverAddress值 | - | - |
| 0 | service_list | serviceList | false | 3 | - | 增值服务 目前只支持德邦 | - | - |
| 1 | service_list.service_code | serviceCode | false | 2 | SVC-INSURE | code | - | - |
| 1 | service_list.service_value | serviceValue | false | 2 | 100 | value | - | - |
| 0 | product_type | productType | false | 2 | ll-sd-m | 产品类型 目前只支持德邦 | - | - |
| 0 | delivery_req | deliveryReq | false | 5 | - | 投递要求 目前只支持德邦 | - | - |
| 1 | delivery_req.is_center_delivery | isCenterDelivery | false | 4 | true | 是否接受仅镇中心派送  目前仅支持德邦 | - | - |
| 1 | delivery_req.is_pickup_self | isPickupSelf | false | 4 | true | 是否接受合伙人自提，目前仅支持德邦 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | is_out_range | isOutRange | - | 4 | false | 是否超区响应结果（超区-true；未超区-fasle） | - | R1 |
| 0 | out_range_reason | outRangeReason | - | 2 | 地址未覆盖 | 超区原因，1、疫情管控 2、洪涝台风等自然灾害 3、特殊会议管控 4、网点经营问题 5、其他原因 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/getOutRange?app_key=your_appkey_here&method=logistics.getOutRange&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/getOutRange?app_key=your_appkey_here&method=logistics.getOutRange&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsGetOutRangeRequest request = new LogisticsGetOutRangeRequest();
LogisticsGetOutRangeParam param = request.getParam();
param.setLogisticsCode("jtexpress");
param.setType(1);
param.setProductType("ll-sd-m");
LogisticsGetOutRangeResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsGetOutRangeRequest();
$param = new LogisticsGetOutRangeParam();
$request->setParam($param);
$param->logistics_code = "jtexpress";
$param->type = 1;
$param->product_type = "ll-sd-m";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsGetOutRangeRequest()
param = request.getParams()
param.logistics_code = "jtexpress"
param.type = 1
param.product_type = "ll-sd-m"
response = request.execute(accessToken)

```

### go

```go
request := logistics_getOutRange_request.New()
param := request.GetParams()
param.LogisticsCode = "jtexpress"
param.Type = 1
param.ProductType = "ll-sd-m"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsGetOutRangeRequest();
var param = request.BuildParam();
param.LogisticsCode = "jtexpress";
param.Type = 1;
param.ProductType = "ll-sd-m";
var response = request.Execute<LogisticsGetOutRangeResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:4009 | 请求物流服务商超时 | 可等待一段时间进行重试 |
| 50002 | 业务处理失败 | isv.business-failed:4008 | 内部数据格式非法 | 可等待一段时间进行重试 |
| 20000 | 系统错误 | isp.service-error:4007 | 请求物流服务商异常，请重试 | 可等待一段时间进行重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4006 | youzhengguonei 物流服务商不支持该接口 | 以文档上面支持的为准 |
| 50002 | 业务处理失败 | isv.business-failed:500 | 500:发生异常，请咨询对接人 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 10002:服务异常～ | 无 |
| 50002 | 业务处理失败 | isv.business-failed:3017 | 3017:筛单异常 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:1000 | 1000:request param [receiverAddress.detailAddress] can not be null | 1000:request param [receiverAddress.detailAddress] can not be null |
| 50002 | 业务处理失败 | isv.business-failed:9020501 | 9020501:请求失败，请重试 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:4001 | 4001:系统发生数据错误或运行时异常 | 统发生数据错误或运行时异常 |
| 50002 | 业务处理失败 | isv.business-failed:10001 | 10001:无效签名 | 无效签名 |
| 50002 | 业务处理失败 | isv.business-failed:11102 | 11102:收件地址解析失败 | 请检查收件地址信息 |
| 50002 | 业务处理失败 | isv.business-failed:11108 | 11108:{"outRangeRsason":"该收件地址属于偏远地区暂时无法下单。","isOutRange":true} | 请调整地址 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
