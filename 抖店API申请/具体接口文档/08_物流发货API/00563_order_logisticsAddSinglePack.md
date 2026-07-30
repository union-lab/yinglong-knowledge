# /order/logisticsAddSinglePack

> 中文说明：支持多个订单发同一个物流包裹（不适用于即时零售业务）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/563>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/logisticsAddSinglePack |
| 中文名称 | 支持多个订单发同一个物流包裹（不适用于即时零售业务） |
| 文档目录 | 物流发货API |
| Article ID | 563 |
| 文档版本 | V2.12 |
| 官方更新时间 | 2025/1/22 10:36:35 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 900 |

## 使用说明

支持同一店铺同一收货人的多个订单发同一个物流包裹

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.logisticsAddSinglePack | 调用的API接口名称 | - | - |
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
| 0 | order_id_list | ShopOrderIdsOpen | true | 3 | ["4846347827301748265","4846341672614340433"] | 父订单ID列表 | - | - |
| 0 | shipped_order_info | ProductOrders | true | 3 | - | 需要发货的子订单信息 | - | - |
| 1 | shipped_order_info.serial_nos_list | SerialNosList | false | 3 | - | 发货需要回传的SN/69/IMEI码信息 | - | - |
| 2 | shipped_order_info.serial_nos_list.key | Key | false | 2 | SN | 码的类型<br>对于空调国补，内机SN对应SN_INDOOR，外机SN对应SN_OUTDOOR | - | - |
| 2 | shipped_order_info.serial_nos_list.value | Value | false | 3 | ["123443","51432"] | SN/69/IMEI码的值 | - | - |
| 1 | shipped_order_info.shipped_order_id | ProductOrderId | true | 2 | 4788856825297700215 | 需要发货的子订单号 | - | - |
| 1 | shipped_order_info.shipped_num | ProductCount | true | 1 | 2 | 上述子订单的待发货数 | - | - |
| 1 | shipped_order_info.shipped_item_ids | ItemOrderId | false | 3 | ["13123123","442432423"] | 已废弃 | - | - |
| 0 | logistics_code | LogisticsCode | true | 2 | 9595123123 | 运单号 | - | - |
| 0 | company | CompanyName | false | 2 | 顺丰 | 物流公司名字 | - | - |
| 0 | request_id | RequestId | true | 2 | 1267250f-8b9d-4d9e-9fad-0cd9629c83de | 请求唯一标识，相同request_id多次请求，第一次请求成功后，后续的请求会触发幂等，会直接返回第一次请求成功的结果，不会实际触发发货。 | - | - |
| 0 | is_reject_refund | IsRejectRefund | false | 4 | true | 是否拒绝退款申请（true表示拒绝退款，并继续发货；不传或为false表示有退款需要处理，拒绝发货），is_refund_reject和is_reject_refund随机使用一个即可 | - | - |
| 0 | logistics_id | LogisticsId | false | 2 | 12 | 已废弃。物流公司ID。请使用company_code字段。 | - | - |
| 0 | company_code | CompanyCode | false | 2 | shunfeng | 物流公司Code，由接口/order/logisticsCompanyLis查询物流公司列表获得，必填 | - | - |
| 0 | address_id | AddressId | false | 2 | 12 | 发货地址id | - | - |
| 0 | order_serial_number | OrderSerialNumbers | false | 3 | - | 订单序列号 | - | - |
| 1 | order_serial_number.order_id | ShopOrderId | false | 2 | 4846347827301748265 | 父订单号 | - | - |
| 1 | order_serial_number.serial_number_list | SerialNumberList | false | 3 | ["546443524543534"] | 商品序列号，单个序列号长度不能超过30位字符，其中手机序列号仅支持填写15～17位数字 | - | - |
| 0 | store_id | StoreId | false | 1 | 1234 | 门店ID | - | - |
| 0 | after_sale_address_id | AftersaleAddressId | false | 1 | 12 | 退货地址ID,通过地址库列表【/address/list】接口查询。当传入该字段时，可实现自动审核场景买家退货至商家指定退货地址：例如商家配置的售后小助手以及平台闪电退货规则，会获取发货时传入的after_sale_address_id地址id对应的地址给买家展示进行商品退回； | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | pack_id | DeliverId | - | 2 | 7425745832857 | 包裹id | 64 | R1 |

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
OrderLogisticsAddSinglePackRequest request = new OrderLogisticsAddSinglePackRequest();
OrderLogisticsAddSinglePackParam param = request.getParam();
param.setOrderIdList(["4846347827301748265","4846341672614340433"]);
param.setLogisticsCode("9595123123");
param.setCompany("顺丰");
param.setRequestId("1267250f-8b9d-4d9e-9fad-0cd9629c83de");
param.setIsRejectRefund(true);
param.setLogisticsId("12");
param.setCompanyCode("shunfeng");
param.setAddressId("12");
param.setStoreId(1234L);
param.setAfterSaleAddressId(12L);
OrderLogisticsAddSinglePackResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderLogisticsAddSinglePackRequest();
$param = new OrderLogisticsAddSinglePackParam();
$request->setParam($param);
$param->order_id_list = ["4846347827301748265","4846341672614340433"];
$param->logistics_code = "9595123123";
$param->company = "顺丰";
$param->request_id = "1267250f-8b9d-4d9e-9fad-0cd9629c83de";
$param->is_reject_refund = true;
$param->logistics_id = "12";
$param->company_code = "shunfeng";
$param->address_id = "12";
$param->store_id = 1234;
$param->after_sale_address_id = 12;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderLogisticsAddSinglePackRequest()
param = request.getParams()
param.order_id_list = ["4846347827301748265","4846341672614340433"]
param.logistics_code = "9595123123"
param.company = "顺丰"
param.request_id = "1267250f-8b9d-4d9e-9fad-0cd9629c83de"
param.is_reject_refund = true
param.logistics_id = "12"
param.company_code = "shunfeng"
param.address_id = "12"
param.store_id = 1234
param.after_sale_address_id = 12
response = request.execute(accessToken)

```

### go

```go
request := order_logisticsAddSinglePack_request.New()
param := request.GetParams()
param.OrderIdList = ["4846347827301748265","4846341672614340433"]
param.LogisticsCode = "9595123123"
param.Company = "顺丰"
param.RequestId = "1267250f-8b9d-4d9e-9fad-0cd9629c83de"
param.IsRejectRefund = true
param.LogisticsId = "12"
param.CompanyCode = "shunfeng"
param.AddressId = "12"
param.StoreId = 1234
param.AfterSaleAddressId = 12
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderLogisticsAddSinglePackRequest();
var param = request.BuildParam();
param.OrderIdList = ["4846347827301748265","4846341672614340433"];
param.LogisticsCode = "9595123123";
param.Company = "顺丰";
param.RequestId = "1267250f-8b9d-4d9e-9fad-0cd9629c83de";
param.IsRejectRefund = true;
param.LogisticsId = "12";
param.CompanyCode = "shunfeng";
param.AddressId = "12";
param.StoreId = 1234;
param.AfterSaleAddressId = 12;
var response = request.Execute<OrderLogisticsAddSinglePackResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:70016 | 无默认售后地址，请先设置然后操作发货 | 请到【抖店左侧导航栏-物流-地址库管理】设置默认售后地址后再操作发货 |
| 20000 | 系统错误 | isp.service-error:70014 | 发货失败，请稍后重试 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:70011 | 当前订单存在处理中流程，请稍后重试 | 稍后重试 |
| 20000 | 系统错误 | isp.service-error:70002 | 发货失败，请稍后重试 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60068 | 该订单已售前退款成功，不能发货 | 请更新订单信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:60062 | 手机序列号仅支持填写15～17位数字 | 请输入正确的序列号 |
| 40002 | 缺少必选参数 | isv.missing-parameter:60056 | 补贴商品发货时需要上传商品序列号 | 补贴商品必须传入序列号，请输入序列号 |
| 50002 | 业务处理失败 | isv.business-failed:60040 | 发货订单中有退款申请需要处理，请先处理 | 请先处理该订单的售后单，然后再进行发货 |
| 40004 | 非法的参数 | isv.parameter-invalid:60033 | 未查询到此订单 | 订单号不存在，请检查 |
| 50002 | 业务处理失败 | isv.business-failed:60027 | 该店铺无默认售后地址，请到【抖店左侧导航栏-物流-地址库管理】设置后再操作发货 | 请到【抖店左侧导航栏-物流-地址库管理】设置默认售后地址后再操作发货 |
| 50002 | 业务处理失败 | isv.business-failed:60021 | 订单已取消，不支持发货 | 请更新订单信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:60018 | 暂不支持该物流公司或物流商已失效 | company_code参数错误。请通过/order/logisticsCompanyList接口获取company_code |
| 40004 | 非法的参数 | isv.parameter-invalid:60017 | 物流单号不符合规则 | company_code和logistics_code不匹配，请检查物流公司和单号是否正确 |
| 40002 | 缺少必选参数 | isv.missing-parameter:60011 | 物流公司Code不能为空 | company_code参数错误。请通过/order/logisticsCompanyList接口获取company_code |
| 40002 | 缺少必选参数 | isv.missing-parameter:50049 | 订单号不能为空 | 请输入正确的订单号 |
| 40004 | 非法的参数 | isv.parameter-invalid:50001 | 订单号为空或格式错误 | 请输入正确的订单号 |
| 40002 | 缺少必选参数 | isv.missing-parameter:60083 | 物流公司编码(company_code)字段不能为空。注：物流公司ID(logisitcs_id)字段已废弃 | 请通过/order/logisticsCompanyList接口获取company_code |
| 50002 | 业务处理失败 | isv.business-failed:60072 | 60072:该店铺无默认发货地址，请到【抖店左侧导航栏-物流-地址库管理】设置后再操作发货 | 该店铺无默认发货地址，请到【抖店左侧导航栏-物流-地址库管理】设置后再操作发货 |
| 50002 | 业务处理失败 | isv.business-failed:60046 | 60046:序列号长度不能超过30位字符 | 若传入了序列号，则序列号长度需要在1-30位字符之间，请检查后重新发货 |
| 50002 | 业务处理失败 | isv.business-failed:60069 | 60069:该订单为质检订单，请在商家后台送检页面进行送检发货操作 | 该订单为质检订单，请在商家后台送检页面进行送检发货操作 |
| 50002 | 业务处理失败 | isv.business-failed:60070 | 当前发货地址存在异常，请前往抖店PC端「物流-地址库管理」修改后重试 | 当前发货地址存在异常，请前往抖店PC端「物流-地址库管理」修改后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60047 | 该订单补贴商品的序列号已经上传，请重新填写 | 该订单补贴商品的序列号已经上传，请重新填写 |
| 50002 | 业务处理失败 | isv.business-failed:70009 | 发货失败，请稍后重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60026 | 该订单不支持使用其它物流进行发货 | 请检查订单和物流信息 |
| 50002 | 业务处理失败 | isv.business-failed:70023 | 70023:没有能发货的订单，请修改后重试 | 没有能发货的订单，请修改后重试 |
| 50002 | 业务处理失败 | isv.business-failed:70020 | 70020:运单号收件人电话及地址与该订单收件人电话及地址均不一致，请核实后更新快递单号 | 运单号收件人电话及地址与该订单收件人电话及地址均不一致，请核实后更新快递单号 |
| 50002 | 业务处理失败 | isv.business-failed:60016 | 60016:商品单单号为空或者格式错误 | 商品单单号为空或者格式错误 |
| 50002 | 业务处理失败 | isv.business-failed:60127 | 60127:发货信息填写有误，请检查物流单号、物流公司是否填写/选择正确 | 发货信息填写有误，请检查物流单号、物流公司是否填写/选择正确 |
| 50002 | 业务处理失败 | isv.business-failed:60110 | 60110:订单已发货，不允许再次执行发货 | 订单已发货，不允许再次执行发货 |
| 50002 | 业务处理失败 | isv.business-failed:60113 | 60113:订单已完结，禁止发货 | 订单已完结，禁止发货 |
| 50002 | 业务处理失败 | isv.business-failed:60124 | 60124:系统连接错误，请稍后再试 | 系统连接错误，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:8888 | 8888:系统繁忙，请稍后重试 | 系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60109 | 60109:订单正在风控审核中，风控审核时效1~2小时，请等待订单变为“备货中”状态后重试 | 订单正在风控审核中，风控审核时效1~2小时，请等待订单变为“备货中”状态后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60123 | 60123:当前订单为供应链订单，需: 海口珍珠恋服饰设计有限公司 帮助发货 | 当前订单为供应链订单，需: 海口珍珠恋服饰设计有限公司 帮助发货 |
| 50002 | 业务处理失败 | isv.business-failed:60138 | 60138:订单需送货上门，请使用支持送货上门的物流公司发货 | 订单需送货上门，请使用支持送货上门的物流公司发货 |
| 50002 | 业务处理失败 | isv.business-failed:70021 | 70021:多个订单的收货人手机号/收货地址不一致，请核对发货数据 | 多个订单的收货人手机号/收货地址不一致，请核对发货数据 |
| 50002 | 业务处理失败 | isv.business-failed:60101 | 60101:非本店铺订单，操作失败 | 非本店铺订单，操作失败 |
| 50002 | 业务处理失败 | isv.business-failed:700029 | 请传入退货地址，提高退换货的履约准确率 | 请传入退货地址，提高退换货的履约准确率 |
| 50002 | 业务处理失败 | isv.business-failed:70019 | 70019:物流单号首条轨迹产生时间早于订单支付时间，请核实后更新单号 | 请检查单号时间 |
| 50002 | 业务处理失败 | isv.business-failed:70018 | 70018:物流单号已被快递回收或取消，无法继续使用，请核实后更新单号 | 请检查单号状态 |
| 50002 | 业务处理失败 | isv.business-failed:60116 | 60116:订单中商品由平台仓发货，无需手动发货 | 该订单无需手动发货 |
| 50002 | 业务处理失败 | isv.business-failed:60118 | 60118:订单售后信息异常，请稍后重试 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:70022 | 70022:物流单号已被其他订单使用，且收货人手机号/收货地址不一致，请核实后更新单号 | 请跟换物流单号 |
| 50002 | 业务处理失败 | isv.business-failed:700006 | 700006:小时达订单不支持拆单发货 | 不支持拆单发货 |
| 50002 | 业务处理失败 | isv.business-failed:120064 | 120064:该订单为偏远地区中转订单，您的账户余额不够支付中转运费，不能进行中转，请前往管家账户充值 | 120064:该订单为偏远地区中转订单，您的账户余额不够支付中转运费，不能进行中转，请前往管家账户充值 |
| 50002 | 业务处理失败 | isv.business-failed:60143 | 60143:周期购订单非最新一期sku单不允许发货 | 60143:周期购订单非最新一期sku单不允许发货 |
| 50002 | 业务处理失败 | isv.business-failed:700088 | 该订单为收礼订单，不支持发货，请对对应送礼单操作 | 该订单为收礼订单，不支持发货，请对对应送礼单操作 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
