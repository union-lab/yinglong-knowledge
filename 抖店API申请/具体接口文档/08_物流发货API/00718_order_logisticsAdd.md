# /order/logisticsAdd

> 中文说明：订单发货接口  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/718>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/logisticsAdd |
| 中文名称 | 订单发货接口 |
| 文档目录 | 物流发货API |
| Article ID | 718 |
| 文档版本 | V2.14 |
| 官方更新时间 | 2025/8/20 11:29:03 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 7000 |

## 使用说明

暂时只支持整单出库，即接口调用时入参只能传父订单号。
Tips：部分发货状态下的父订单，调此接口发货，会报错：该订单当前为“部分发货”状态，无法调用此接口

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单
- 物流发货 / 即时零售物流发货（packageType=1）；适用应用类目：即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.logisticsAdd | 调用的API接口名称 | - | - |
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
| 0 | order_id | OrderId | true | 2 | 4782813149182887526 | 订单ID | - | - |
| 0 | logistics_id | LogisticsId | false | 1 | 1 | 【已废弃】物流公司ID。请使用company_code字段。 | - | - |
| 0 | company | Company | false | 2 | 顺丰公司 | 物流公司名称 | - | - |
| 0 | company_code | CompanyCode | false | 2 | shunfeng、qita | (必填)物流公司code,可从/order/logisticsCompanyList接口获取。 | - | - |
| 0 | logistics_code | LogisticsCode | false | 2 | sf1231231231234 | (必填)快递单号 | - | - |
| 0 | is_refund_reject | IsRefundReject | false | 4 | false | 是否拒绝退款申请（true表示拒绝退款，并继续发货；不传或为false表示有退款需要处理，拒绝发货），is_refund_reject和is_reject_refund随机使用一个即可 | - | - |
| 0 | is_reject_refund | IsRefundReject | false | 4 | false | 是否拒绝退款申请（true表示拒绝退款，并继续发货；不传或为false表示有退款需要处理，拒绝发货），is_refund_reject和is_reject_refund随机使用一个即可 | - | - |
| 0 | serial_number_list | SerialNumberList | false | 3 | ["123"] | 商品序列号，15-17位数字 | - | - |
| 0 | address_id | AddressId | false | 1 | 6 | 发货地址ID,通过地址库列表【/address/list】接口查询 | - | - |
| 0 | store_id | StoreId | false | 1 | 111523 | 门店ID；抖超小时达店铺需要填写； | - | - |
| 0 | after_sale_address_id | AftersaleAddressId | false | 1 | 1 | 退货地址ID,通过地址库列表【/address/list】接口查询。当传入该字段时，可实现自动审核场景买家退货至商家指定退货地址：例如商家配置的售后小助手以及平台闪电退货规则，会获取发货时传入的after_sale_address_id地址id对应的地址给买家展示进行商品退回； | - | - |
| 0 | product_orders | ProductOrders | false | 3 | - | 挂在商品单上的信息，只是用于传递和商品单关联的信息，比如SN/69/IMEI码。目前接口还是按照店铺单维度推进发货状态，不会按照传递过来的product_order_id推进订单状态。比如，店铺单下有A、B、C三个商品单，其中A单需要SN/69/IMEI码，这时候只需要把A单关联的SN/69/IMEI传递过来即可。接口会把A、B、C三个商品单都推进到已发货状态。 | - | - |
| 1 | product_orders.serial_no_list | SerialNosList | false | 3 | - | 需要的SN/69/IMEI码列表。 | - | - |
| 2 | product_orders.serial_no_list.value | Value | false | 3 | ["12343"] | SN/69/IMEI码的值。 | - | - |
| 2 | product_orders.serial_no_list.key | Key | false | 2 | SN | SN/69/IMEI码的类型<br>对于空调国补，内机SN对应SN_INDOOR，外机SN对应SN_OUTDOOR | - | - |
| 1 | product_orders.product_order_id | ProductOrderId | false | 2 | 4782813149182887526 | 商品单单号 | - | - |
| 0 | trace_info_list | TraceInfoList | false | 3 | - | 【注意！目前仅「即时零售」业务使用！！！】溯源码list，多个sku放一起，用内部的sku_order_id区分,举个例子，假设你有3个sku，你就创建一个list，长度为3，list里面每一个元素都是一个sku维度，用sku_order_id区分，其中，每一个sku的信息，里面是可以传多个批次和溯源码的，具体看你需要传几个，你就在batch_and_trace_code_list里面传几个； | - | - |
| 1 | trace_info_list.batch_and_trace_code_list | BatchAndTraceCodeList | false | 3 | - | 溯源码详情 | - | - |
| 2 | trace_info_list.batch_and_trace_code_list.trace_code | TraceCode | false | 2 | "123" | 溯源码 | - | - |
| 2 | trace_info_list.batch_and_trace_code_list.batch_code | BatchCode | false | 2 | "123" | 批次号 | - | - |
| 1 | trace_info_list.sku_order_id | SkuOrderId | false | 2 | "123" | sku单id | - | - |

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
OrderLogisticsAddRequest request = new OrderLogisticsAddRequest();
OrderLogisticsAddParam param = request.getParam();
param.setOrderId("4782813149182887526");
param.setLogisticsId(1L);
param.setCompany("顺丰公司");
param.setCompanyCode("shunfeng、qita");
param.setLogisticsCode("sf1231231231234");
param.setIsRefundReject(false);
param.setIsRejectRefund(false);
param.setSerialNumberList(["123"]);
param.setAddressId(6L);
param.setStoreId(111523L);
param.setAfterSaleAddressId(1L);
OrderLogisticsAddResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderLogisticsAddRequest();
$param = new OrderLogisticsAddParam();
$request->setParam($param);
$param->order_id = "4782813149182887526";
$param->logistics_id = 1;
$param->company = "顺丰公司";
$param->company_code = "shunfeng、qita";
$param->logistics_code = "sf1231231231234";
$param->is_refund_reject = false;
$param->is_reject_refund = false;
$param->serial_number_list = ["123"];
$param->address_id = 6;
$param->store_id = 111523;
$param->after_sale_address_id = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderLogisticsAddRequest()
param = request.getParams()
param.order_id = "4782813149182887526"
param.logistics_id = 1
param.company = "顺丰公司"
param.company_code = "shunfeng、qita"
param.logistics_code = "sf1231231231234"
param.is_refund_reject = false
param.is_reject_refund = false
param.serial_number_list = ["123"]
param.address_id = 6
param.store_id = 111523
param.after_sale_address_id = 1
response = request.execute(accessToken)

```

### go

```go
request := order_logisticsAdd_request.New()
param := request.GetParams()
param.OrderId = "4782813149182887526"
param.LogisticsId = 1
param.Company = "顺丰公司"
param.CompanyCode = "shunfeng、qita"
param.LogisticsCode = "sf1231231231234"
param.IsRefundReject = false
param.IsRejectRefund = false
param.SerialNumberList = ["123"]
param.AddressId = 6
param.StoreId = 111523
param.AfterSaleAddressId = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderLogisticsAddRequest();
var param = request.BuildParam();
param.OrderId = "4782813149182887526";
param.LogisticsId = 1;
param.Company = "顺丰公司";
param.CompanyCode = "shunfeng、qita";
param.LogisticsCode = "sf1231231231234";
param.IsRefundReject = false;
param.IsRejectRefund = false;
param.SerialNumberList = ["123"];
param.AddressId = 6;
param.StoreId = 111523;
param.AfterSaleAddressId = 1;
var response = request.Execute<OrderLogisticsAddResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:9999 | 系统异常，请联系相关人员处理。 | ISV开发者可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一:   订单号或者请求的LogId; |
| 20000 | 系统错误 | isp.service-error:10005 | 系统繁忙，请稍后重试。 | 1、商家重新点击发货按钮重试；2、如果多次重试不能解决问题，可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一:   订单号或者请求的LogId。 |
| 20000 | 系统错误 | isp.service-error:10009 | 系统繁忙，请稍后重试。 | 1、商家重新点击发货按钮重试；2、如果多次重试不能解决问题，可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一:   订单号或者请求的LogId。 |
| 20000 | 系统错误 | isp.service-error:10018 | 校验物流信息失败，请稍后重试 | 1、商家重新点击发货按钮重试；2、如果多次重试不能解决问题，可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一:   订单号或者请求的LogId。 |
| 20000 | 系统错误 | isp.service-error:20003 | 系统异常，请稍后重试。 | 1、商家重新点击发货按钮重试；2、如果多次重试不能解决问题，可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一:   订单号或者请求的LogId。 |
| 20000 | 系统错误 | isp.service-error:50002 | 系统异常，请联系相关人员解决。 | ISV开发者可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者请求的LogId; |
| 40004 | 非法的参数 | isv.parameter-invalid:50029 | 店铺ID非法，不允许小于等于0。 | ISV接入方式错误，调整输入的店铺ID参数，重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:50049 | 订单号不能为空或者格式错误。 | ISV调整输入的订单ID参数，重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:60011 | 物流公司编码不允许为空。 | 1、ISV自查接入的参数是否为空；2、如果不能解决问题，可以联系抖店相关运营或开发人员进行排查和解决，需要提供以下基本信息之一:   订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60017 | 物流单号不符合规则。 | 1、商家仔细检查物流单号格式是否正确、和物流公司是否匹配，修改后重新操作；2、如果商家确定无误，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60018 | 暂不支持该物流公司或物流商已失效，请检查。 | 1、商家自行检查使用的物流公司编码是否符合平台规则；2、如果商家确定无误，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60111 | 暂不支持本类订单发货。 | 1、ISV自查拉单、用户对订单的筛选是否符合要求；2、- 如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60021 | 订单已取消，禁止发货。 | 1、ISV开发者先自行排查系统对接是否有问题；2、商家需要立即检查该订单是否已经实际线下寄出包裹，如果已经寄出，需要对物流商下达拦截操作；3、商家能否调整发货的流程，先在系统推进订单到已发货状态后再实际操作发货；4、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一: 订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60022 | 该订单为货到付款订单，不允许发货。 | 1、线上已经取消货到付款的支付方式，因此该错误码代表抖店内部系统异常，直接联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60024 | 该订单不可自行操作发货，请联系跨境服务商进行操作。 | 商家对返回该错误类型的订单，需要联系跨境服务商操作发货，商家无发货权限。 |
| 50002 | 业务处理失败 | isv.business-failed:60026 | 该订单不支持使用其它物流进行发货。 | 1、商家换用正常的物流商进行发货；2、商家可以联系平台运营，对使用其他物流添加白名单。 |
| 50002 | 业务处理失败 | isv.business-failed:60027 | 该店铺无默认售后地址，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后再操作发货。 | 商家前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置默认售后地址后再操作发货。 |
| 40004 | 非法的参数 | isv.parameter-invalid:60028 | 发货地址ID不允许小于0。 | 1、ISV自查接入的地址参数是否小于0；2、- 如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 40002 | 缺少必选参数 | isv.missing-parameter:60032 | 发货订单数最多支持400单，请重新选择。 | - 引导商家减少选中的订单数量，重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60033 | 订单不存在，请仔细检查后重试。 | 1、ISV和商家仔细检查对应的订单号是否存在，是否是本店铺的订单；2、如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 40002 | 缺少必选参数 | isv.missing-parameter:60036 | 发货信息为空。 | 需要ISV仔细确认要发货的订单信息后，重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60040 | 发货订单中有退款申请需要处理，请先处理。 | 商家需要对返回该错误的订单检查售后信息，可以进行如下操作: 1、拒绝售前申请后重新发货；2、  - 发货选项中传递发货优先，可以优先拒绝售后；3、商家同意售前申请退款，取消对该订单的发货操作。 |
| 40004 | 非法的参数 | isv.parameter-invalid:60046 | 序列号长度不能超过30位字符。 | 商家检查序列号是否符合正确，修改后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60047 | 该订单补贴商品的序列号已经上传，请重新填写。 | 商家更换新的序列号，重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60051 | 上传序列号失败，请重试。 | ISV重试，如果多次重试仍无法解决问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60057 | 暂不支持本类订单发货。 | 1、ISV自查拉单、用户对订单的筛选是否符合要求；2、如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 40004 | 非法的参数 | isv.parameter-invalid:60062 | 手机序列号仅支持填写15～17位数字。 | 商家仔细检查自己填写的手机序列号长度是否在15~17位之间。 |
| 50002 | 业务处理失败 | isv.business-failed:60069 | 该发货方式不支持质检类订单发货。 | 商家需要到商家后台质检类订单发货操作栏操作发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60070 | 当前发货异常，请检查发货地址。 | 商家修改手动输入的发货地址后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60071 | 当前发货地址存在异常，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」修改后重试。 | 商家前往抖店PC端「订单-发货管理-物流工具-地址库管理」修改后之后，重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60072 | 该店铺无默认发货地址，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后再操作发货。 | 商家前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置默认发货地址后再操作发货。 |
| 50002 | 业务处理失败 | isv.business-failed:60101 | 非本店铺订单，操作失败。 | 商家需要仔细检查对应的订单是否属于当前店铺，确认之后进行重试。 |
| 20000 | 系统错误 | isp.service-error:60106 | 系统繁忙，请稍后重试。 | 1、商家多重试几次；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
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
| 20000 | 系统错误 | isp.service-error:60124 | 系统繁忙，请稍后重试。 | 查询根据该物流单号猜想的物流公司错误，商家重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60125 | 系统繁忙，请稍后重试 | 1、校验其他物流订单数据异常，商家重试；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60126 | 暂不支持使用寻梦同城物流发货，请重新选择物流公司或联系平台客服申请使用。 | 商家使用“寻梦同城”物流操作发货，但是商家并不在“寻梦同城”物流的白名单内，解决方案如下: 1、商家换用正常的物流商发货；2、商家联系平台客服申请使用“寻梦同城”物流商。 |
| 50002 | 业务处理失败 | isv.business-failed:60127 | 物流单号校验不通过，请仔细检查后重试。 | 1、仔细检查对应的物流单号是否正确，修改后重试；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60128 | 物流公司与系统智能检测不一致。物流公司可能为:(具体根据猜想得到的物流公司名称)，若确认无误可继续发货。 | 1、商家仔细检查对应的物流单号、物流公司是否正确，修改后重试；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60131 | 发货订单包含状态为“待用户填写定制信息”的定制商品订单，此类订单需用户填写定制信息后才能发货。 | 商家对定制商品订单发货，但是C端该定制订单并没有填写定制信息，需要联系消费者填写定制信息后才能够发货。 |
| 20000 | 系统错误 | isp.service-error:60132 | 系统异常，请稍后重试。 | 1、商家重试；2、联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:60137 | 订单未支付，禁止发货。 | 1、仔细检查订单状态；2、ISV需要重新拉取订单信息，确保和抖店系统的数据保持一致；3、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求的LogId。 |
| 20000 | 系统错误 | isp.service-error:70005 | 拒绝售后失败，请检查该单的售后处理流程后重试。 | 1、商家根据返回的错误文案检查订单是否存在售后流程，处理售后单；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 20000 | 系统错误 | isp.service-error:70011 | 发货失败，请稍后重试。 | 1、商家根据返回的错误文案检查订单检查订单并进行相应处理；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:70016 | 系统繁忙，请稍后重试。 | 1、如果商家直接输入的发货地址，需要商家仔细检查自己的输入地址是否正确、是否符合平台要求；2、如果商家使用平台地址库管理的地址，需要检查下地址库是否存在该地址、地址库对该地址是否提示存在异常。 |
| 20000 | 系统错误 | isp.service-error:80007 | 系统错误，请稍后重试或者联系客服人员解决。 | 1、可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 20000 | 系统错误 | isp.service-error:99997 | 网络超时，请重试。 | 重试。 |
| 20000 | 系统错误 | isp.service-error:99998 | 请输入正确的参数，仔细检查输入参数是否为空或联系抖店人员排查。 | 1、ISV自查接入的参数是否为空；2、如果无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 20000 | 系统错误 | isp.service-error:99999 | 未知异常，请联系客服人员处理。 | 系统发生BUG，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:70009 | 系统繁忙，请稍后重试 | 商家重试即可。 |
| 50002 | 业务处理失败 | isv.business-failed:60056 | 补贴商品发货时需要上传商品序列号 | 商家对于报错的订单上传序列号。 |
| 50002 | 业务处理失败 | isv.business-failed:60134 | 该发货地址在商家地址库不存在，请刷新或者前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后重试 | 该发货地址在商家地址库不存在，商家重新选择可用的发货地址或者前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10032 | 拒绝售后失败，请检查该单的售后处理流程后重试。 | 1、商家根据返回的错误文案检查订单是否存在售后流程，处理售后单；2、如果商家无法解决相关问题，可以联系抖店相关运营-开发人员进行排查和解决，需要提供以下基本信息之一:订单号或者请求LogId。 |
| 50002 | 业务处理失败 | isv.business-failed:70023 | 70023:没有能发货的订单，请修改后重试 | 请检查订单物流状态 |
| 50002 | 业务处理失败 | isv.business-failed:70020 | 70020:物流单号收件人电话及地址与该订单买家电话及地址均不一致，请核实后更新单号 | 请检查订单买家电话及地址均不一致 |
| 50002 | 业务处理失败 | isv.business-failed:70022 | 70022:物流单号已被其他订单使用，且收货人手机号/收货地址不一致，请核实后更新单号 | 请检查物流单号 |
| 50002 | 业务处理失败 | isv.business-failed:70018 | 70018:物流单号已被快递回收或取消，无法继续使用，请核实后更新单号 | 请检查物流单号 |
| 50002 | 业务处理失败 | isv.business-failed:70019 | 70019:物流单号首条轨迹产生时间早于订单支付时间，请核实后更新单号 | 请检查物流单号 |
| 50002 | 业务处理失败 | isv.business-failed:120032 | 120032:售后请求并发，请稍后重试 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:700004 | 700004:store_id不存在/错误，超市小时达订单发货需传入订单对应的门店ID | 请检查store_id是否正确 |
| 50002 | 业务处理失败 | isv.business-failed:60138 | 60138:订单需送货上门，请使用支持送货上门的物流公司发货 | 请检查订单号 |
| 50002 | 业务处理失败 | isv.business-failed:700003 | 700003:store_id为空/错误，超市小时达订单发货需传入订单对应的门店ID | 请检查store_id是否正确 |
| 50002 | 业务处理失败 | isv.business-failed:700002 | 700002:发货订单包含非本门店订单，请重试 | 请检查订单号 |
| 50002 | 业务处理失败 | isv.business-failed:700005 | 700005:小时购订单不支持该快递公司发货 | 请检查物流公司是否存在 |
| 50002 | 业务处理失败 | isv.business-failed:700029 | 请传入退货地址，提高退换货的履约准确率 | 请传入退货地址，提高退换货的履约准确率 |
| 50002 | 业务处理失败 | isv.business-failed:700042 | 700042:物流服务商信息异常，请传入正确的物流服务商信息或稍后重试 | 请检查服务商 |
| 50002 | 业务处理失败 | isv.business-failed:120018 | 120018:系统繁忙，请稍后重试 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:120064 | 120064:该订单为偏远地区中转订单，您的账户余额不够支付中转运费，不能进行中转，请前往管家账户充值 | 120064:该订单为偏远地区中转订单，您的账户余额不够支付中转运费，不能进行中转，请前往管家账户充值 |
| 50002 | 业务处理失败 | isv.business-failed:120035 | 120035:系统错误，请稍后重试 | 120035:系统错误，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:500001 | 500001:系统繁忙，请稍后重试 | 500001:系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60140 | 60140:订单为服务商品订单，不支持发货 | 60140:订单为服务商品订单，不支持发货 |
| 50002 | 业务处理失败 | isv.business-failed:60145 | 当前发货时间早于用户延迟发货时间的72小时前，不允许提前发货 | 等到了用户延迟发货时间的72小时内操作再次重试即可。 |
| 50002 | 业务处理失败 | isv.business-failed:700061 | 系统内部错误，请重试 | 按照返回的结果提示重试即可。 |
| 50002 | 业务处理失败 | isv.business-failed:120002 | 网络异常，请稍后重试 | 根据返回的提示重试即可 |
| 50002 | 业务处理失败 | isv.business-failed:700088 | 订单为收礼订单，收礼单不支持发货，请对对应送礼单进行发货操作 | 订单为收礼订单，收礼单不支持发货，请对对应送礼单进行发货操作 |
| 50002 | 业务处理失败 | isv.business-failed:120066 | 120066:您选择的订单中包含偏远中转订单，因货款及管家账户余额不足无法支付中转运费（每笔3元）发货失败，可在抖店PC端充值后重试，路径：账户中心 > 其他账户 > 管家账户 | 120066:您选择的订单中包含偏远中转订单，因货款及管家账户余额不足无法支付中转运费（每笔3元）发货失败，可在抖店PC端充值后重试，路径：账户中心 > 其他账户 > 管家账户 |
| 50002 | 业务处理失败 | isv.business-failed:1000000015 | 1000000015:偏远中转订单必须使用抖音电子面单发货，如不希望使用抖音电子面单，可以尝试转直邮发货功能，直接发货给消费者，但是不再享受平台中转运费补贴、体验分豁免等权益 | 1000000015:偏远中转订单必须使用抖音电子面单发货，如不希望使用抖音电子面单，可以尝试转直邮发货功能，直接发货给消费者，但是不再享受平台中转运费补贴、体验分豁免等权益 |
| 50002 | 业务处理失败 | isv.business-failed:130013 | 130013:系统繁忙，请稍后重试 | 130013:系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:100001 | 100001:请输入正确的SN/69/IMEI码的值 | 100001:请输入正确的SN/69/IMEI码的值 |
| 50002 | 业务处理失败 | isv.business-failed:60016 | 60016:商品单单号为空或者格式错误 | 60016:商品单单号为空或者格式错误 |
| 50002 | 业务处理失败 | isv.business-failed:1000000014 | 1000000014:该运单的收货地址不是中转仓地址，可以尝试转直邮发货功能，直接发货给消费者，但是不再享受平台中转运费补贴、体验分豁免等权益 | 1000000014:该运单的收货地址不是中转仓地址，可以尝试转直邮发货功能，直接发货给消费者，但是不再享受平台中转运费补贴、体验分豁免等权益 |
| 50002 | 业务处理失败 | isv.business-failed:60102 | 60102:商品单不存在，请仔细检查后重试 | 60102:商品单不存在，请仔细检查后重试 |
| 50002 | 业务处理失败 | isv.business-failed:100009 | 100009:非本店铺订单 | 100009:非本店铺订单 |
| 50002 | 业务处理失败 | isv.business-failed:100007 | 100007:此订单为签收时要求快递员拍照的国家补贴订单，只能使用顺丰速运(常用)发货 | 100007:此订单为签收时要求快递员拍照的国家补贴订单，只能使用顺丰速运(常用)发货 |
| 50002 | 业务处理失败 | isv.business-failed:120005 | 120005:系统繁忙，请稍后重试 | 120005:系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:700007 | 700007:门店ID非法，不允许小于0 | 700007:门店ID非法，不允许小于0 |
| 50002 | 业务处理失败 | isv.business-failed:60133 | 60133:当前发货地址异常，请仔细检查地址和联系人信息是否完整且有效 | 60133:当前发货地址异常，请仔细检查地址和联系人信息是否完整且有效 |
| 50002 | 业务处理失败 | isv.business-failed:507 | 507:请求处理中，请稍后重试 | 并发引起，可重试 |
| 50002 | 业务处理失败 | isv.business-failed:702 | 702:查询数据失败，请稍后重试 | 系统单机器异常等问题引起，可重试 |
| 50002 | 业务处理失败 | isv.business-failed:10020 | 10020:接单后-查合约单未找到 | 合约单查询失败，可重试 |
| 50002 | 业务处理失败 | isv.business-failed:20114 | 20114:系统繁忙，请稍后重试 | 系统单机器异常等问题引起 |
| 50002 | 业务处理失败 | isv.business-failed:20200 | 20200:获取订单信息失败，请稍后重试 | 系统单机器异常等问题引起 |
| 50002 | 业务处理失败 | isv.business-failed:20211 | 20211:网络异常，请稍后重试 | 网络异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:20113 | 20113:系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:20212 | 20212:呼叫运力失败，请稍后重试 | 呼叫运力失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:20796 | 20796:配送方案服务时段获取失败，请稍后重试 | 系统单机器异常等问题引起，可重试 |
| 50002 | 业务处理失败 | isv.business-failed:50216 | 50216:系统繁忙，请稍后重试 | 系统单机器异常等问题引起，可重试 |
| 50002 | 业务处理失败 | isv.business-failed:120047 | 120047:呼叫运力失败，请稍后重试 | 呼叫运力失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:501 | 501:售后完结，订单关闭 | 订单已完结，无需重试发货 |
| 50002 | 业务处理失败 | isv.business-failed:20301 | 20301:订单已存在自配送运单，无法呼叫运力 | 已发自配 |
| 40004 | 非法的参数 | isv.parameter-invalid:700077 | 700077:三方应用不允许对自配订单呼叫运力 | 调用异常，平自配订单无法使用open接口发货 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
