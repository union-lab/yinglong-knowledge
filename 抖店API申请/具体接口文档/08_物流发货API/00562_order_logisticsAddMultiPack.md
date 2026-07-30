# /order/logisticsAddMultiPack

> 中文说明：一单多包发货接口（不适用于即时零售业务）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/562>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/logisticsAddMultiPack |
| 中文名称 | 一单多包发货接口（不适用于即时零售业务） |
| 文档目录 | 物流发货API |
| Article ID | 562 |
| 文档版本 | V4.14 |
| 官方更新时间 | 2025/1/22 10:44:43 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 900 |

## 使用说明

1、单个店铺订单拆分为多个物流包裹进行发货；
2、接口执行逻辑：一笔主订单有3个子订单，其中一个子订单已申请退款，调用该接口时3个子订单都发货时，接口会整个发货请求都失败（不会出现部分子单成功，部分子单失败的情况）。

## 权限包

- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP
- 开放平台 / 盲盒互动（服务商）（packageType=1）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.logisticsAddMultiPack | 调用的API接口名称 | - | - |
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
| 0 | order_id | ShopOrderIdOpen | true | 2 | 4782813149182887526 | 父订单ID | - | - |
| 0 | pack_list | PackageSends | true | 3 | - | 包裹list | - | - |
| 1 | pack_list.shipped_order_info | ProductOrders | true | 3 | - | 需要发货的子订单信息列表 | - | - |
| 2 | pack_list.shipped_order_info.serial_nos_list | SerialNosList | false | 3 | - | 发货需要回传的SN/69/IMEI码信息 | - | - |
| 3 | pack_list.shipped_order_info.serial_nos_list.key | Key | false | 2 | SN | 码的类型，SN-SN码；69-69码；IMEI-IMEI码。<br>对于空调国补，内机SN对应SN_INDOOR，外机SN对应SN_OUTDOOR | - | - |
| 3 | pack_list.shipped_order_info.serial_nos_list.value | Value | false | 3 | ["qwerqr"] | SN/69/IMEI码的值 | - | - |
| 2 | pack_list.shipped_order_info.shipped_order_id | ProductOrderId | true | 2 | 123123 | 需要发货的子订单id | - | - |
| 2 | pack_list.shipped_order_info.shipped_num | ProductCount | false | 1 | 1 | 子订单的需发货数量 | - | - |
| 2 | pack_list.shipped_order_info.shipped_item_ids | ItemOrderId | false | 3 | [] | 已废弃 | - | - |
| 2 | pack_list.shipped_order_info.bundle_list | BundleSendList | false | 3 | - | 组套商品参数列表 | - | - |
| 3 | pack_list.shipped_order_info.bundle_list.sub_product_id | ProductID | true | 2 | 12334122 | 组套商品子商品ID | - | - |
| 3 | pack_list.shipped_order_info.bundle_list.sub_sku_id | SkuID | true | 2 | 1245 | 组套商品子商品SKU_ID | - | - |
| 3 | pack_list.shipped_order_info.bundle_list.combo_num | Count | true | 1 | 2 | 组套商品子商品发货数量 | - | - |
| 1 | pack_list.logistics_code | LogisticsCode | true | 2 | 9595123123 | 运单号 | - | - |
| 1 | pack_list.company | Company | false | 2 | 顺丰 | 物流公司名称 | - | - |
| 1 | pack_list.company_code | CompanyCode | false | 2 | shunfeng | 物流公司code，字段必传。可从/order/logisticsCompanyList接口获取。 | - | - |
| 1 | pack_list.logistics_id | LogisticsId | false | 2 | 12 | 已废弃。物流公司ID。请使用company_code字段。 | - | - |
| 0 | is_reject_refund | IsRejectRefund | false | 4 | true | 是否拒绝退款申请（true表示拒绝退款，并继续发货；不传或为false表示有退款需要处理，拒绝发货），is_refund_reject和is_reject_refund随机使用一个即可 | - | - |
| 0 | request_id | RequestId | true | 2 | 1267250f-8b9d-4d9e-9fad-0cd9629c83de | 请求唯一标识，相同request_id多次请求，第一次请求成功后，后续的请求会触发幂等，会直接返回第一次请求成功的结果，不会实际触发发货。 | - | - |
| 0 | address_id | AddressId | false | 2 | 12 | 发货地址id，使用/address/list接口获取 | - | - |
| 0 | serial_number_list | SerialNumberList | false | 3 | ["546443524543534","646443524543534"] | 商品序列号，单个序列号长度不能超过30位字符，其中手机序列号仅支持填写15～17位数字 | - | - |
| 0 | is_refund_reject | IsRejectRefund | false | 4 | true | 是否拒绝退款申请（true表示拒绝退款，并继续发货；不传或为false表示有退款需要处理，拒绝发货），is_refund_reject和is_reject_refund随机使用一个即可 | - | - |
| 0 | store_id | StoreId | false | 1 | 3123121 | 门店id | - | - |
| 0 | after_sale_address_id | AftersaleAddressId | false | 1 | 12 | 退货地址ID,通过地址库列表【/address/list】接口查询 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | pack_list | PackageSends | - | 3 | - | 包裹信息 | - | R1 |
| 1 | pack_list.shipped_order_info | ProductOrders | - | 3 | - | 发货的订单信息 | - | R1 |
| 2 | pack_list.shipped_order_info.shipped_order_id | ProductOrderId | - | 2 | 123123 | 发货的子单id | 29 | R1 |
| 2 | pack_list.shipped_order_info.shipped_num | ProductCount | - | 1 | 1 | 发货子单数量 | 29 | R1 |
| 2 | pack_list.shipped_order_info.shipped_item_ids | ItemOrderId | - | 3 | ["123123"] | 发货的四层单id | 29 | R1 |
| 1 | pack_list.logistics_code | LogisticsCode | - | 2 | 111111111111111 | 物流单号 | 64 | R1 |
| 1 | pack_list.pack_id | DeliverId | - | 2 | 4705288465508532862 | 包裹id | 64 | R1 |

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
OrderLogisticsAddMultiPackRequest request = new OrderLogisticsAddMultiPackRequest();
OrderLogisticsAddMultiPackParam param = request.getParam();
param.setOrderId("4782813149182887526");
param.setIsRejectRefund(true);
param.setRequestId("1267250f-8b9d-4d9e-9fad-0cd9629c83de");
param.setAddressId("12");
param.setSerialNumberList(["546443524543534","646443524543534"]);
param.setIsRefundReject(true);
param.setStoreId(3123121L);
param.setAfterSaleAddressId(12L);
OrderLogisticsAddMultiPackResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderLogisticsAddMultiPackRequest();
$param = new OrderLogisticsAddMultiPackParam();
$request->setParam($param);
$param->order_id = "4782813149182887526";
$param->is_reject_refund = true;
$param->request_id = "1267250f-8b9d-4d9e-9fad-0cd9629c83de";
$param->address_id = "12";
$param->serial_number_list = ["546443524543534","646443524543534"];
$param->is_refund_reject = true;
$param->store_id = 3123121;
$param->after_sale_address_id = 12;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderLogisticsAddMultiPackRequest()
param = request.getParams()
param.order_id = "4782813149182887526"
param.is_reject_refund = true
param.request_id = "1267250f-8b9d-4d9e-9fad-0cd9629c83de"
param.address_id = "12"
param.serial_number_list = ["546443524543534","646443524543534"]
param.is_refund_reject = true
param.store_id = 3123121
param.after_sale_address_id = 12
response = request.execute(accessToken)

```

### go

```go
request := order_logisticsAddMultiPack_request.New()
param := request.GetParams()
param.OrderId = "4782813149182887526"
param.IsRejectRefund = true
param.RequestId = "1267250f-8b9d-4d9e-9fad-0cd9629c83de"
param.AddressId = "12"
param.SerialNumberList = ["546443524543534","646443524543534"]
param.IsRefundReject = true
param.StoreId = 3123121
param.AfterSaleAddressId = 12
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderLogisticsAddMultiPackRequest();
var param = request.BuildParam();
param.OrderId = "4782813149182887526";
param.IsRejectRefund = true;
param.RequestId = "1267250f-8b9d-4d9e-9fad-0cd9629c83de";
param.AddressId = "12";
param.SerialNumberList = ["546443524543534","646443524543534"];
param.IsRefundReject = true;
param.StoreId = 3123121;
param.AfterSaleAddressId = 12;
var response = request.Execute<OrderLogisticsAddMultiPackResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:9999 | 系统异常，请联系相关人员处理。 | ISV开发者可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者请求的LogId; |
| 20000 | 系统错误 | isp.service-error:10005 | 系统繁忙，请稍后重试。 | 1、商家重新点击发货按钮重试；2、如果多次重试不能解决问题，可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者请求的LogId。 |
| 20000 | 系统错误 | isp.service-error:10009 | 系统繁忙，请稍后重试。 | 1、商家重新点击发货按钮重试；2、如果多次重试不能解决问题，可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者请求的LogId。 |
| 20000 | 系统错误 | isp.service-error:10018 | 校验物流信息失败，请稍后重试 | 1、商家重新点击发货按钮重试；2、如果多次重试不能解决问题，可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者请求的LogId。 |
| 20000 | 系统错误 | isp.service-error:20003 | 系统异常，请稍后重试。 | 1、商家重新点击发货按钮重试；2、如果多次重试不能解决问题，可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者请求的LogId。 |
| 20000 | 系统错误 | isp.service-error:50002 | 系统异常，请联系相关人员解决。 | ISV开发者可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者请求的LogId; |
| 40004 | 非法的参数 | isv.parameter-invalid:50029 | 店铺ID非法，不允许小于等于0。 | ISV接入方式错误，调整输入的店铺ID参数，重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:50049 | 订单号不能为空或者格式错误。 | ISV调整输入的订单ID参数，重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:50050 | 发货请求id不能为空，请检查requestId | ISV调整输入的requestId参数，重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:60016 | 商品单单号为空或者格式错误 | 1、商家仔细检查商品单号格式是否正确，修改后重新操作；2、如果商家确定无误，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者LogId。 |
| 40004 | 非法的参数 | isv.parameter-invalid:60017 | 物流单号不符合规则 | 1、商家仔细检查物流单号格式是否正确、和物流公司是否匹配，修改后重新操作；2、如果商家确定无误，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60018 | 暂不支持该物流公司或物流商已失效，请检查。 | 1、商家自行检查使用的物流公司编码是否符合平台规则；2、如果商家确定无误，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:600111 | 暂不支持本类订单发货。 | 1、ISV自查拉单、用户对订单的筛选是否符合要求；2、- 如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60021 | 订单已取消，禁止发货。 | 1、ISV开发者先自行排查系统对接是否有问题；2、商家需要立即检查该订单是否已经实际线下寄出包裹，如果已经寄出，需要对物流商下达拦截操作；3、商家能否调整发货的流程，先在系统推进订单到已发货状态后再实际操作发货；4、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60022 | 该订单为货到付款订单，不允许发货。 | 1、线上已经取消货到付款的支付方式，因此该错误码代表抖店内部系统异常，直接联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60024 | 该订单不可自行操作发货，请联系跨境服务商进行操作。 | 商家对返回该错误类型的订单，需要联系跨境服务商操作发货，商家无发货权限。 |
| 50002 | 业务处理失败 | isv.business-failed:60026 | 该订单不支持使用其它物流进行发货。 | 1、商家换用正常的物流商进行发货；2、商家可以联系平台运营，对使用其他物流添加白名单。 |
| 50002 | 业务处理失败 | isv.business-failed:60027 | 该店铺无默认售后地址，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后再操作发货。 | 商家前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置默认售后地址后再操作发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60028 | 发货地址ID不允许小于0。 | 1、ISV自查接入的地址参数是否小于0；2、- 如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60032 | 发货订单数最多支持400单，请重新选择。 | 引导商家减少选中的订单数量，重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60033 | 订单不存在，请仔细检查后重试。 | 1、ISV和商家仔细检查对应的订单号是否存在，是否是本店铺的订单；2、如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60036 | 发货信息为空。 | 需要ISV仔细确认要发货的订单信息后，重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60040 | 发货订单中有退款申请需要处理，请先处理。 | 商家需要对返回该错误的订单检查售后信息，可以进行如下操作: 1、拒绝售前申请后重新发货；2、 - 发货选项中传递发货优先，可以优先拒绝售后；3、商家同意售前申请退款，取消对该订单的发货操作。 |
| 50002 | 业务处理失败 | isv.business-failed:60046 | 序列号长度不能超过30位字符。 | 商家检查序列号是否符合正确，修改后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60047 | 该订单补贴商品的序列号已经上传，请重新填写。 | 商家更换新的序列号，重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60051 | 上传序列号失败，请重试。 | ISV重试，如果多次重试仍无法解决问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60057 | 暂不支持本类订单发货。 | 1、ISV自查拉单、用户对订单的筛选是否符合要求；2、如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 40004 | 非法的参数 | isv.parameter-invalid:60062 | 手机序列号仅支持填写15～17位数字。 | 商家仔细检查自己填写的手机序列号长度是否在15~17位之间。 |
| 50002 | 业务处理失败 | isv.business-failed:60069 | 该发货方式不支持质检类订单发货。 | 商家需要到商家后台质检类订单发货操作栏操作发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60070 | 当前发货异常，请检查发货地址。 | 商家修改手动输入的发货地址后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60071 | 当前发货地址存在异常，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」修改后重试。 | 当前发货地址存在异常，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」修改后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60072 | 该店铺无默认发货地址，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后再操作发货。 | 商家前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置默认发货地址后再操作发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60101 | 非本店铺订单，操作失败。 | 商家需要仔细检查对应的订单是否属于当前店铺，确认之后进行重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60106 | 系统繁忙，请稍后重试。 | 1、商家多重试几次；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60107 | 暂不支持该类型订单发货。 | 虚拟、教育等类型订单不支持发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60108 | 暂不支持该类型订单发货。 | 该发货方式不支持回收、寄卖、仅收款类订单发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60109 | 订单正在风控审核中，风控审核时效1~2小时，请等待订单变为“备货中”状态后重试。 | 1、ISV开发者先自行排查系统对接是否有问题；2、商家需要立即检查该订单是否已经实际线下寄出包裹，如果已经寄出，需要对物流商下达拦截操作；3、商家能否调整发货的流程，先在系统推进订单到已发货状态后再实际操作发货；4、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60110 | 订单已发货，不允许再次执行发货。 | 取消对该订单的发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60113 | 订单已完结，禁止发货。 | 取消对该订单的发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60114 | 系统繁忙，请稍后重试。 | 1、联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60116 | 不支持平台仓订单发货。 | 商家取消对该订单的发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60118 | 订单售后信息异常，请稍后重试。 | 1、商家重试；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60068 | 该订单已售前退款成功，不能发货。 | 1、商家需要立即检查该订单是否已经实际线下寄出包裹，如果已经寄出，需要对物流商下达拦截操作；2、商家能否调整发货的流程，先在系统推进订单到已发货状态后再实际操作发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60120 | 订单正在售后中，请确认后发货。 | 1、商家需要立即检查该订单是否已经实际线下寄出包裹，如果已经寄出，需要对物流商下达拦截操作；2、商家能否调整发货的流程，先在系统推进订单到已发货状态后再实际操作发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60121 | 系统繁忙，请稍后重试。 | 1、商家重试；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60122 | 该跨境订单状态暂不允许发货。 | 服务商没有对跨境订单回传信息，商家无法对跨境订单发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60123 | 当前订单为供应链订单，商家无权自发货。 | 商家对供应链订单操作发货，供应链订单只能通过供应链链路发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60124 | 系统繁忙，请稍后重试。 | 查询根据该物流单号猜想的物流公司错误，商家重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60125 | 系统繁忙，请稍后重试。 | 1、校验其他物流订单数据异常，商家重试；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60126 | 暂不支持使用寻梦同城物流发货，请重新选择物流公司或联系平台客服申请使用。 | 商家使用“寻梦同城”物流操作发货，但是商家并不在“寻梦同城”物流的白名单内，解决方案如下: 1、商家换用正常的物流商发货；2、商家联系平台客服申请使用“寻梦同城”物流商。 |
| 50002 | 业务处理失败 | isv.business-failed:60127 | 物流单号校验不通过，请仔细检查后重试。 | 1、仔细检查对应的物流单号是否正确，修改后重试；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60128 | 物流公司与系统智能检测不一致。物流公司可能为:(具体根据猜想得到的物流公司名称)，若确认无误可继续发货。 | 1、商家仔细检查对应的物流单号、物流公司是否正确，修改后重试；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60131 | 发货订单包含状态为“待用户填写定制信息”的定制商品订单，此类订单需用户填写定制信息后才能发货。 | 商家对定制商品订单发货，但是C端该定制订单并没有填写定制信息，需要联系消费者填写定制信息后才能够发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60132 | 系统异常，请稍后重试。 | 1、商家重试；2、联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60137 | 订单未支付，禁止发货。 | 1、仔细检查订单状态；2、ISV需要重新拉取订单信息，确保和抖店系统的数据保持一致；3、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:70005 | 拒绝售后失败，请检查该单的售后处理流程后重试。 | 1、商家根据返回的错误文案检查订单是否存在售后流程，处理售后单；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:70011 | 发货失败，请稍后重试。 | 1、商家根据返回的错误文案检查订单检查订单并进行相应处理；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:70016 | 系统繁忙，请稍后重试。 | 1、如果商家直接输入的发货地址，需要商家仔细检查自己的输入地址是否正确、是否符合平台要求；2、如果商家使用平台地址库管理的地址，需要检查下地址库是否存在该地址、地址库对该地址是否提示存在异常。 |
| 20000 | 系统错误 | isp.service-error:80007 | 系统错误，请稍后重试或者联系客服人员解决。 | 1、可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 20000 | 系统错误 | isp.service-error:99997 | 网络超时，请重试。 | 请重试。 |
| 20000 | 系统错误 | isp.service-error:99998 | 请输入正确的参数，仔细检查输入参数是否为空或联系抖店人员排查。 | 1、ISV自查接入的参数是否为空；2、如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 20000 | 系统错误 | isp.service-error:99999 | 未知异常，请联系客服人员处理。 | 系统发生BUG，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60102 | 60102:商品单不存在，请仔细检查后重试 | 商品单不存在，请仔细检查后重试 |
| 50002 | 业务处理失败 | isv.business-failed:8888 | 8888:系统繁忙，请稍后重试 | 系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60080 | 60080:商品的发货数量不允许小于0 | 商品的发货数量不允许小于0 |
| 50002 | 业务处理失败 | isv.business-failed:60011 | 60011:物流公司编码不允许为空 | 物流公司编码不允许为空 |
| 50002 | 业务处理失败 | isv.business-failed:70009 | 70009:系统繁忙，请稍后重试 | 系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60105 | 60105:非组合商品订单不应在组合商品发货参数中传递商品信息 | 非组合商品订单不应在组合商品发货参数中传递商品信息 |
| 50002 | 业务处理失败 | isv.business-failed:70023 | 70023:已发货，请检查订单状态 | 已发货，请检查订单状态 |
| 50002 | 业务处理失败 | isv.business-failed:70020 | 70020:运单号收件人电话及地址与该订单收件人电话及地址均不一致，请核实后更新快递单号 | 运单号收件人电话及地址与该订单收件人电话及地址均不一致，请核实后更新快递单号 |
| 50002 | 业务处理失败 | isv.business-failed:120032 | 120032:售后请求并发，请稍后重试 | 系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60079 | 60079:商品ID格式错误，请仔细检查后重试 | 商品ID格式错误，请仔细检查后重试 |
| 50002 | 业务处理失败 | isv.business-failed:70022 | 70022:运单已被其他订单使用，且收货人手机号/收货地址不一致，请核对运单 | 运单已被其他订单使用，且收货人手机号/收货地址不一致，请核对运单 |
| 50002 | 业务处理失败 | isv.business-failed:60111 | 60111:暂不支持课程类订单发货 | 请检查订单类型 |
| 50002 | 业务处理失败 | isv.business-failed:60104 | 60104:组合商品的商品和SKU信息不存在 | 请检查请求参数 |
| 50002 | 业务处理失败 | isv.business-failed:60138 | 60138:订单需送货上门，请使用支持送货上门的物流公司发货 | 请检查请求参数 |
| 50002 | 业务处理失败 | isv.business-failed:60056 | 60056:补贴商品发货时需要上传商品序列号 | 补贴商品发货时需要上传商品序列号 |
| 50002 | 业务处理失败 | isv.business-failed:700004 | 700004:store_id不存在/错误，超市小时达订单发货需传入订单对应的门店ID | store_id不存在/错误，超市小时达订单发货需传入订单对应的门店ID |
| 50002 | 业务处理失败 | isv.business-failed:700029 | 请传入退货地址，提高退换货的履约准确率 | 请传入退货地址，提高退换货的履约准确率 |
| 50002 | 业务处理失败 | isv.business-failed:70019 | 物流单号首条轨迹产生时间早于订单支付时间，请核实后更新单号 | 物流单号首条轨迹产生时间早于订单支付时间，请核实后更新单号 |
| 50002 | 业务处理失败 | isv.business-failed:70018 | 物流单号已被快递回收或取消，无法继续使用，请核实后更新单号 | 物流单号已被快递回收或取消，无法继续使用，请核实后更新单号 |
| 50002 | 业务处理失败 | isv.business-failed:700042 | 物流服务商信息异常，请传入正确的物流服务商信息或稍后重试 | 物流服务商信息异常，请传入正确的物流服务商信息或稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60134 | 退货地址在地址库不存在，请刷新重试 | 退货地址在地址库不存在，请刷新重试 |
| 50002 | 业务处理失败 | isv.business-failed:700047 | 同城发货暂不支持拆单,无法发货 | 同城发货暂不支持拆单,无法发货 |
| 50002 | 业务处理失败 | isv.business-failed:120064 | 120064:该订单为偏远地区中转订单，您的账户余额不够支付中转运费，不能进行中转，请前往管家账户充值 | 120064:该订单为偏远地区中转订单，您的账户余额不够支付中转运费，不能进行中转，请前往管家账户充值 |
| 50002 | 业务处理失败 | isv.business-failed:70017 | 70017:订单发货信息填写有误，请检查物流单号、物流公司是否填写/选择正确 | 70017:订单发货信息填写有误，请检查物流单号、物流公司是否填写/选择正确 |
| 50002 | 业务处理失败 | isv.business-failed:120056 | 120056:系统繁忙，请稍后重试 | 120056:系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:500001 | 500001:系统繁忙，请稍后重试 | 500001:系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:700061 | 700061:系统内部错误，请重试 | 700061:系统内部错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:120002 | 120002:网络异常，请稍后重试 | 120002:网络异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60145 | 60145:当前发货时间早于用户延迟发货时间的72小时前，不允许提前发货 | 60145:当前发货时间早于用户延迟发货时间的72小时前，不允许提前发货 |
| 50002 | 业务处理失败 | isv.business-failed:60143 | 60143:周期购订单非最新一期sku单不允许发货 | 60143:周期购订单非最新一期sku单不允许发货 |
| 50002 | 业务处理失败 | isv.business-failed:700088 | 该订单为收礼订单，不支持发货，请对对应送礼订单进行操作 | 该订单为收礼订单，不支持发货，请对对应送礼订单进行操作 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
