# /order/logisticsEdit

> 中文说明：更新整单发货物流信息  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/390>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/logisticsEdit |
| 中文名称 | 更新整单发货物流信息 |
| 文档目录 | 物流发货API |
| Article ID | 390 |
| 文档版本 | V3.05 |
| 官方更新时间 | 2022/12/5 14:58:42 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

调用场景：
1、仅支持整单发货【/order/logisticsAdd】接口，发货成功的订单更新；
2、支持已发货订单（final_status=3）的发货物流信息更新；

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP
- 物流发货 / 即时零售物流发货（packageType=1）；适用应用类目：即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 物流发货 / 物流信息更新（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.logisticsEdit | 调用的API接口名称 | - | - |
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
| 0 | order_id | ShopOrderId | true | 2 | 4782813149182887526A | 订单ID | - | - |
| 0 | logistics_id | LogisticsId | false | 1 | 12 | 已废弃。物流公司ID。请使用company_code字段。 | - | - |
| 0 | company_code | CompanyCode | false | 2 | shunfeng、qita | 物流公司code,由接口/order/logisticsCompanyList返回的物流公司列表获得，必填 | - | - |
| 0 | logistics_code | TrackingNo | false | 2 | sf1231231231234 | 快递单号 | - | - |
| 0 | company | CompanyName | false | 2 | 顺丰 | 已废弃。物流公司名称 | - | - |
| 0 | store_id | StoreId | false | 1 | 1234 | 门店ID，抖超业务使用 | - | - |
| 0 | after_sale_address_id | AftersaleAddressId | false | 1 | 1 | 退货地址ID,通过地址库列表【/address/list】接口查询。当传入该字段时，可实现自动审核场景买家退货至商家指定退货地址：例如商家配置的售后小助手以及平台闪电退货规则，会获取发货时传入的after_sale_address_id地址id对应的地址给买家展示进行商品退回； | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderLogisticsEditRequest request = new OrderLogisticsEditRequest();
OrderLogisticsEditParam param = request.getParam();
param.setOrderId("4782813149182887526A");
param.setLogisticsId(12L);
param.setCompanyCode("shunfeng、qita");
param.setLogisticsCode("sf1231231231234");
param.setCompany("顺丰");
param.setStoreId(1234L);
param.setAfterSaleAddressId(1L);
OrderLogisticsEditResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderLogisticsEditRequest();
$param = new OrderLogisticsEditParam();
$request->setParam($param);
$param->order_id = "4782813149182887526A";
$param->logistics_id = 12;
$param->company_code = "shunfeng、qita";
$param->logistics_code = "sf1231231231234";
$param->company = "顺丰";
$param->store_id = 1234;
$param->after_sale_address_id = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderLogisticsEditRequest()
param = request.getParams()
param.order_id = "4782813149182887526A"
param.logistics_id = 12
param.company_code = "shunfeng、qita"
param.logistics_code = "sf1231231231234"
param.company = "顺丰"
param.store_id = 1234
param.after_sale_address_id = 1
response = request.execute(accessToken)

```

### go

```go
request := order_logisticsEdit_request.New()
param := request.GetParams()
param.OrderId = "4782813149182887526A"
param.LogisticsId = 12
param.CompanyCode = "shunfeng、qita"
param.LogisticsCode = "sf1231231231234"
param.Company = "顺丰"
param.StoreId = 1234
param.AfterSaleAddressId = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderLogisticsEditRequest();
var param = request.BuildParam();
param.OrderId = "4782813149182887526A";
param.LogisticsId = 12;
param.CompanyCode = "shunfeng、qita";
param.LogisticsCode = "sf1231231231234";
param.Company = "顺丰";
param.StoreId = 1234;
param.AfterSaleAddressId = 1;
var response = request.Execute<OrderLogisticsEditResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10007 | 此订单状态不允许重新发货 | 请重新获取订单信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:10002 | 运单号不符合规则，请核对单号大小写、单号位数、快递公司是否正确 | 请检查物流公司与物流单号是否匹配 |
| 20000 | 系统错误 | isp.service-error:10001 | 重新发货失败，请稍后重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60024 | 60024:该订单不可自行操作重新发货，请联系跨境服务商进行操作 | 联系跨境服务商进行处理 |
| 50002 | 业务处理失败 | isv.business-failed:60017 | 物流单号错误。原因：发货信息填写有误，请检查物流单号、物流公司是否填写/选择正确 | 请检查物流公司与物流单号是否匹配 |
| 50002 | 业务处理失败 | isv.business-failed:60018 | 物流公司错误。原因：暂不支持该物流商，请检查物流商编码后重新发货 | 请检查物流公司与物流单号是否匹配 |
| 50002 | 业务处理失败 | isv.business-failed:60021 | 该订单的订单状态不允许重新发货 | 请检查订单状态是否允许发货 |
| 40004 | 非法的参数 | isv.parameter-invalid:60083 | 物流公司编码(company_code)字段不能为空。注：物流公司ID(logisitcs_id)字段已废弃 | 请检查物流公司与物流单号是否匹配 |
| 50002 | 业务处理失败 | isv.business-failed:70013 | 物流单号校验失败，请稍后重试 | 请检查物流公司与物流单号是否匹配 |
| 40004 | 非法的参数 | isv.parameter-invalid:60014 | 物流单号不能为空 | 请检查物流公司与物流单号是否匹配 |
| 50002 | 业务处理失败 | isv.business-failed:60023 | 该订单为质检订单，请在商家后台送检页面进行送检发货操作 | 请在商家后台送检页面进行送检发货 |
| 20000 | 系统错误 | isp.service-error:70008 | 重新发货失败，请稍后重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60026 | 该订单不支持使用其它物流进行发货 | 不支持使用其他物流发货 |
| 50002 | 业务处理失败 | isv.business-failed:60134 | 退货地址在地址库不存在，请刷新重试 | 该发货地址在商家地址库不存在，商家重新选择可用的发货地址或者前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后重试 |
| 50002 | 业务处理失败 | isv.business-failed:70011 | 70011:包裹单号缺失，请修改后重试 | 仅支持整单接口发货的物流修改，如订单是一单多包或合单发货的订单，请使用【/order/logisticsEditByPack】接口更新； |
| 50002 | 业务处理失败 | isv.business-failed:120064 | 120064:该订单为偏远地区中转订单，您的账户余额不够支付中转运费，不能进行中转，请前往管家账户充值 | 120064:该订单为偏远地区中转订单，您的账户余额不够支付中转运费，不能进行中转，请前往管家账户充值 |
| 50002 | 业务处理失败 | isv.business-failed:700003 | 700003:store_id为空/错误，超市小时达订单发货需传入订单对应的门店ID | 700003:store_id为空/错误，超市小时达订单发货需传入订单对应的门店ID |
| 50002 | 业务处理失败 | isv.business-failed:60132 | 60132:系统异常，请稍后重试 | 60132:系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:700005 | 700005:小时购订单不支持该快递公司发货 | 700005:小时购订单不支持该快递公司发货 |
| 50002 | 业务处理失败 | isv.business-failed:700002 | 700002:发货订单包含非本门店订单，请重试 | 700002:发货订单包含非本门店订单，请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
