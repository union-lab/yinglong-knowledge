# /superm/getDispatcherInfo

> 中文说明：运力呼叫询价/取消呼叫询价（正向）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2740>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /superm/getDispatcherInfo |
| 中文名称 | 运力呼叫询价/取消呼叫询价（正向） |
| 文档目录 | 物流发货API |
| Article ID | 2740 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/9/15 18:11:18 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

运力呼叫询价/取消呼叫询价（正向）

## 权限包

- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | superm.getDispatcherInfo | 调用的API接口名称 | - | - |
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
| 0 | store_id | StoreId | true | 1 | 111140954781 | 门店ID | - | - |
| 0 | shop_order_id | ShopOrderId | true | 2 | 4991349131563755389 | 订单ID | - | - |
| 0 | dispatcher_fee_type | DispatcherFeeType | true | 7 | 1 | 运力费用类型 1: 呼叫运力费用，2:取消运力费用 | - | - |
| 0 | insurance_amount | InsuranceAmount | false | 1 | 1000 | 保价金额，单位：分 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | dispatcher_fee | DispatcherFee | - | 1 | 1000 | 运力费用，单位：分 | - | R1 |
| 0 | insurance_fee | InsuranceFee | - | 1 | 1000 | 保价费用，单位：分 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/materialsProductsSearch?app_key=your_appkey_here&method=alliance.materialsProductsSearch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/materialsProductsSearch?app_key=your_appkey_here&method=alliance.materialsProductsSearch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SupermGetDispatcherInfoRequest request = new SupermGetDispatcherInfoRequest();
SupermGetDispatcherInfoParam param = request.getParam();
param.setStoreId(111140954781L);
param.setShopOrderId("4991349131563755389");
param.setDispatcherFeeType(1222);
param.setInsuranceAmount(1000L);
SupermGetDispatcherInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new SupermGetDispatcherInfoRequest();
$param = new SupermGetDispatcherInfoParam();
$request->setParam($param);
$param->store_id = 111140954781;
$param->shop_order_id = "4991349131563755389";
$param->dispatcher_fee_type = 1222;
$param->insurance_amount = 1000;
$response = $request->execute(accessToken);

```

### python

```python
request = SupermGetDispatcherInfoRequest()
param = request.getParams()
param.store_id = 111140954781
param.shop_order_id = "4991349131563755389"
param.dispatcher_fee_type = 1222
param.insurance_amount = 1000
response = request.execute(accessToken)

```

### go

```go
request := superm_getDispatcherInfo_request.New()
param := request.GetParams()
param.StoreId = 111140954781
param.ShopOrderId = "4991349131563755389"
param.DispatcherFeeType = 1222
param.InsuranceAmount = 1000
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SupermGetDispatcherInfoRequest();
var param = request.BuildParam();
param.StoreId = 111140954781;
param.ShopOrderId = "4991349131563755389";
param.DispatcherFeeType = 1222;
param.InsuranceAmount = 1000;
var response = request.Execute<SupermGetDispatcherInfoResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1000001 | 参数非法 | 参数非法 |
| 40002 | 缺少必选参数 | isv.missing-parameter:40011 | 店铺ID不能为空 | 店铺ID不能为空 |
| 40002 | 缺少必选参数 | isv.missing-parameter:40012 | 门店ID不能为空 | 门店ID不能为空 |
| 40002 | 缺少必选参数 | isv.missing-parameter:40013 | 订单不能为空 | 订单不能为空 |
| 50002 | 业务处理失败 | isv.business-failed:20111 | 系统繁忙，请稍后重试 | 订单查询失败 |
| 50002 | 业务处理失败 | isv.business-failed:20112 | 系统繁忙，请稍后重试 | 门店信息获取失败 |
| 50002 | 业务处理失败 | isv.business-failed:20113 | 系统繁忙，请稍后重试 | 执行单不存在 |
| 50002 | 业务处理失败 | isv.business-failed:20114 | 系统繁忙，请稍后重试 | 流水号为空 |
| 50002 | 业务处理失败 | isv.business-failed:20200 | 系统繁忙，请稍后重试 | 履约内部rpc调用失败 |
| 50002 | 业务处理失败 | isv.business-failed:20211 | 系统繁忙，请稍后重试 | 调用履约呼叫运力失败 |
| 50002 | 业务处理失败 | isv.business-failed:20212 | 系统繁忙，请稍后重试 | deliverId生成失败,原错误码505 |
| 50002 | 业务处理失败 | isv.business-failed:50110 | 非小时达订单不允许使用呼叫运力 | 非小时达订单不允许使用呼叫运力 |
| 50002 | 业务处理失败 | isv.business-failed:50111 | 未开通平台运力服务，无法使用。 | 未开通平台运力服务，无法使用。 |
| 50002 | 业务处理失败 | isv.business-failed:50112 | 非本店铺订单，呼叫运力失败 | 非本店铺订单，呼叫运力失败 |
| 50002 | 业务处理失败 | isv.business-failed:50113 | 发货订单包含非本门店订单，请重试 | 发货订单包含非本门店订单，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:50114 | store_id不存在/错误，超市小时达订单发货需传入订单对应的门店ID | store_id不存在/错误，超市小时达订单发货需传入订单对应的门店ID |
| 50002 | 业务处理失败 | isv.business-failed:50211 | 运费获取失败，请重新获取。 | 订单信息异常 |
| 50002 | 业务处理失败 | isv.business-failed:50216 | 系统繁忙，请稍后重试 | 收件人信息解析失败 |
| 50002 | 业务处理失败 | isv.business-failed:20214 | 系统繁忙，请稍后重试 | 保价服务失败 |
| 50002 | 业务处理失败 | isv.business-failed:50102 | 非本店铺订单，禁止操作 | 非本店铺订单，禁止操作 |
| 50002 | 业务处理失败 | isv.business-failed:700015 | 请输入正确的费用信息 | 请输入正确的费用信息 |
| 50002 | 业务处理失败 | isv.business-failed:120051 | 120051:未开通平台运力服务 | 120051:未开通平台运力服务 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
