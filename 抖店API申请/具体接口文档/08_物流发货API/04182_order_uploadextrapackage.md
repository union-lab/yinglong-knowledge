# /order/uploadextrapackage

> 中文说明：订单额外运单信息上传接口  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/4182>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/uploadextrapackage |
| 中文名称 | 订单额外运单信息上传接口 |
| 文档目录 | 物流发货API |
| Article ID | 4182 |
| 文档版本 | V1.06 |
| 官方更新时间 | 2023/7/11 18:42:17 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

订单额外运单信息上传接口，适用于商品件数小于运单数量场景或者补发场景。商家通过发货接口上传运单号后，ISV通过接入该接口将多余的运单号回传到抖店系统，并展示给买家。

## 权限包

- 物流发货 / 物流发货（packageType=1）；适用应用类目：精选货源-微应用、创新应用大赛_微应用、跨境供应链服务、跨境电商、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、商家后台系统、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.uploadextrapackage | 调用的API接口名称 | - | - |
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
| 0 | shop_order_id | ShopOrderNo | true | 2 | 6919571420622558781 | 店铺单号 | - | - |
| 0 | product_orders | ProductOrders | true | 3 | - | 运单号关联的商品信息列表 | - | - |
| 1 | product_orders.bundle_product_list | BundleSendList | false | 3 | - | 组合商品信息列表 | - | - |
| 2 | product_orders.bundle_product_list.count | Count | false | 1 | 1 | 关联的组合商品的件数 | - | - |
| 2 | product_orders.bundle_product_list.sku_id | SkuID | false | 2 | 1235 | 组合商品中子商品的SkuID | - | - |
| 2 | product_orders.bundle_product_list.product_id | ProductID | false | 2 | 1235 | 组合商品中子商品的商品ID | - | - |
| 1 | product_orders.product_count | ProductCount | - | 1 | 1 | 选填。如果是组合商品，该字段为空，即使传递也不会被采用；如果是非组合商品，该字段必填，为大于0的整数。 | - | - |
| 1 | product_orders.product_order_id | ProductOrderId | true | 2 | 6919571420622558781 | 商品单单号 | - | - |
| 0 | tracking_no | TrackingNo | true | 2 | SF1635275876054 | 物流单号 | - | - |
| 0 | company_code | CompanyCode | true | 2 | shunfeng | 物流公司code | - | - |
| 0 | send_address_id | SendAddressId | - | 1 | 456 | 商家在地址库设置的地址对应的ID，用于发货时指定发货的地址 | - | - |
| 0 | parent_tracking_no | ParentTrackingNo | false | 2 | 323 | 子母单情况下指定当前传递的单号对应的母单号，如果没有，该字段不需要传递，直接为空即可。 | - | - |
| 0 | store_id | StoreId | false | 1 | 1233 | 店铺对应的门店ID，如果没有门店，该字段不用传递。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | deliver_id | DeliverId | - | 2 | 6919571420622558781 | 此次发货行为对应的包裹ID | 30 | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/yunc/cloudCreateInboundOrder?app_key=your_appkey_here&method=yunc.cloudCreateInboundOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/yunc/cloudCreateInboundOrder?app_key=your_appkey_here&method=yunc.cloudCreateInboundOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderUploadextrapackageRequest request = new OrderUploadextrapackageRequest();
OrderUploadextrapackageParam param = request.getParam();
param.setShopOrderId("6919571420622558781");
param.setTrackingNo("SF1635275876054");
param.setCompanyCode("shunfeng");
param.setSendAddressId(456L);
param.setParentTrackingNo("323");
param.setStoreId(1233L);
OrderUploadextrapackageResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderUploadextrapackageRequest();
$param = new OrderUploadextrapackageParam();
$request->setParam($param);
$param->shop_order_id = "6919571420622558781";
$param->tracking_no = "SF1635275876054";
$param->company_code = "shunfeng";
$param->send_address_id = 456;
$param->parent_tracking_no = "323";
$param->store_id = 1233;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderUploadextrapackageRequest()
param = request.getParams()
param.shop_order_id = "6919571420622558781"
param.tracking_no = "SF1635275876054"
param.company_code = "shunfeng"
param.send_address_id = 456
param.parent_tracking_no = "323"
param.store_id = 1233
response = request.execute(accessToken)

```

### go

```go
request := order_uploadextrapackage_request.New()
param := request.GetParams()
param.ShopOrderId = "6919571420622558781"
param.TrackingNo = "SF1635275876054"
param.CompanyCode = "shunfeng"
param.SendAddressId = 456
param.ParentTrackingNo = "323"
param.StoreId = 1233
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderUploadextrapackageRequest();
var param = request.BuildParam();
param.ShopOrderId = "6919571420622558781";
param.TrackingNo = "SF1635275876054";
param.CompanyCode = "shunfeng";
param.SendAddressId = 456;
param.ParentTrackingNo = "323";
param.StoreId = 1233;
var response = request.Execute<OrderUploadextrapackageResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:99998 | 请输入正确的参数，仔细检查输入参数是否为空或联系抖店人员排查 | 商家仔细检查传入的参数，确认无问题后如果接口依然有这种报错，联系抖店人员进行排查。 |
| 40004 | 非法的参数 | isv.parameter-invalid:50029 | 店铺ID非法，不允许小于等于0 | 外部开发者同学仔细检查使用的登录态是否正确，确认无误后，如果仍然有这种报错，可以联系抖店相关同学处理 |
| 40004 | 非法的参数 | isv.parameter-invalid:700007 | 门店ID非法，不允许小于0 | 外部开发者同学仔细检查使用的登录态是否正确，确认无误后，如果仍然有这种报错，可以联系抖店相关同学处理 |
| 50002 | 业务处理失败 | isv.business-failed:60106 | 系统繁忙，请稍后重试 | 重试即可，如果多次重试后依然出现该错误码提示，可以寻求抖店客服人员帮助。 |
| 40004 | 非法的参数 | isv.parameter-invalid:50049 | 订单号格式错误，请仔细检查订单号后发货 | 开发者仔细检查输入的店铺单号是否为空或者是否是抖店的订单，并修改后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:60016 | 商品单单号为空或者格式错误 | 开发者仔细检查输入的商品单号是否为空或者是否是抖店的订单，并修改后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:700057 | 商品单列表商品单号重复，请合并相同商品信息后重试 | 开发者仔细检查传入的商品单列表中的商品单号是否存在重复，如果存在重复，需要合并相同商品单号的信息为同一个元素后重试或者分多次请求回传。 |
| 40004 | 非法的参数 | isv.parameter-invalid:60080 | 补发商品数量不允许小于0 | 开发者仔细检查传入参数是否符合要求: 1、回传非组合商品子品(bundle_product_list为空)的运单号检查product_count参数是否小于等于0，并修正后重试；2、回传组合商品子品(bundle_product_list不为空)检查bundle_product_list中的count参数是否小于等于0，并在修正后重试。 |
| 40004 | 非法的参数 | isv.parameter-invalid:700058 | 组合商品信息重复，请合并相同信息后重试 | 开发者仔细检查组合商品的子品列表(bundle_product_list)中是否存在相同的商品ID，合并相同的商品信息后重试。 |
| 40002 | 缺少必选参数 | isv.missing-parameter:60017 | 请输入正确的运单号 | 开发者仔细检查输入的运单号是否为空，并在修正后重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:60011 | 请输入正确的物流公司 | 开发者仔细检查输入的物流公司是否为空，并在修正后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:100007 | 暂不支持该物流公司 | 改接口当前不支持传入的物流公司，请更换物流公司后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:60028 | 请输入正确的售后/发货地址ID | 开发者仔细检查输入的售后/发货地址ID是否小于0，并在修正后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:60079 | 组合商品子商品ID不允许为空 | 开发者仔细检查输入的组合子商品ID是否为空或者是否是抖店内的商品ID，并在修正后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:60078 | 商品SKU_ID必须是正整数 | 开发者仔细检查输入的组合子商品的SKU_ID是否为空或者是否是抖店内的SKU_ID，并在修正后重试 |
| 20000 | 系统错误 | isp.service-error:100013 | 系统繁忙，请稍后重试 | 重试，如果多次重试后依然出现该提示和错误码，可以寻求抖店客服的帮助。 |
| 20000 | 系统错误 | isp.service-error:500001 | 系统繁忙，请稍后重试 | 重试，如果多次重试后依然出现该提示和错误码，可以寻求抖店客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:700055 | 该店铺禁止使用补发包裹功能，请联系行业运营或者抖店客服平台人员咨询 | 该店铺禁止使用补发包裹功能，请联系行业运营或者抖店客服平台人员咨询 |
| 50002 | 业务处理失败 | isv.business-failed:700056 | 该店铺暂未开放该功能，请联系行业运营或者抖店客服平台人员开通此功能 | 当前该功能处于灰度范围内，该店铺暂未开放该功能，请联系行业运营或者抖店客服平台人员开通此功能 |
| 50002 | 业务处理失败 | isv.business-failed:80008 | 该店铺禁止发货，请联系客服咨询 | 该店铺由于违规等，被平台冻结了发货功能，可以联系行业运营或者客服寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:60101 | 非本店铺订单，操作失败 | 订单号和店铺归属关系错误，开发者仔细检查是否输入了正确的订单号，是否使用了正确的登录信息。 |
| 50002 | 业务处理失败 | isv.business-failed:70009 | 系统繁忙，请稍后重试/或者返回其他提示 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:99999 | 系统发生未知错误，请联系客服解决 | 重试，如果多次重试后无法解决问题，可以联系平台客服寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:120005 | 系统繁忙，请稍后重试 | 重试，如果多次重试后无法解决问题，可以联系平台客服寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:120056 | 系统繁忙，请稍后重试 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:60033 | 订单不存在，请仔细检查后重试 | 开发者仔细检查输入的店铺单号是否正确，并修正后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60102 | 商品单不存在，请仔细检查后重试 | 开发者仔细检查输入的商品单号是否正确或者是否属于该店铺单下的商品单，并修正后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60129 | 商品单不属于该店铺单，请仔细检查后重试 | 开发者仔细检查输入的店铺单号和商品单号归属关系是否正确，并在修正后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60103 | 订单信息异常，请稍后重试 | 重试，如果多次重试后无法解决问题，可以联系平台客服寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:60105 | 非组合商品订单不应在组合商品发货参数中传递商品信息 | 仔细检查当前请求中的商品单对应的商品是否是组合商品，非组合商品不允许传递在组合商品列表中传递请求参数。 |
| 50002 | 业务处理失败 | isv.business-failed:60104 | 组合商品的商品和SKU信息不存在 | 开发者仔细检查输入的组合商品列表中的组合商品信息是否正确或者是否属于该商品单，并在修正后重试。 |
| 40004 | 非法的参数 | isv.parameter-invalid:120033 | 订单信息查询失败，请重试 | 重试，如果多次重试后无法解决问题，可以联系平台客服寻求帮助。 |
| 40004 | 非法的参数 | isv.parameter-invalid:700002 | 发货订单包含非本门店订单，请重试 | 请求中存在不属于对应门店的商品单，仔细检查输入参数后去掉不属于传入的门店ID的商品单，然后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60111 | 该功能不支持对该类型的订单操作回传运单号 | 该功能不支持对该类型的订单操作回传运单号 |
| 50002 | 业务处理失败 | isv.business-failed:60069 | 质检订单不支持发货，请前往抖店后台-订单-BTAS质检模块进行送检 | 该功能不支持对该质检订单操作回传运单号 |
| 50002 | 业务处理失败 | isv.business-failed:60107 | 该功能不支持对该类型的订单操作回传运单号 | 该功能不支持对该类型的订单操作回传运单号 |
| 50002 | 业务处理失败 | isv.business-failed:60108 | 该功能不支持对该交易类型的订单操作回传运单号 | 该功能不支持对该交易类型的订单操作回传运单号 |
| 50002 | 业务处理失败 | isv.business-failed:60115 | 不支持非平台订单发货 | 该功能不支持对该交易类型的订单操作回传运单号 |
| 50002 | 业务处理失败 | isv.business-failed:60116 | 订单中商品由平台仓发货 | 订单中商品或者部分商品由平台仓发货，不允许商家对该商品自行操作回传运单号 |
| 50002 | 业务处理失败 | isv.business-failed:60123 | 当前订单为供应链订单，需: 供应商 帮助发货 | 该功能不支持对供应链订单操作回传运单号 |
| 50002 | 业务处理失败 | isv.business-failed:700006 | 小时达订单不支持拆单发货 | 该功能不支持对小时达订单操作回传运单号 |
| 50002 | 业务处理失败 | isv.business-failed:700003 | store_id为空/错误，超市小时达订单发货需传入订单对应的门店ID | store_id为空/错误，超市小时达订单发货需传入订单对应的门店ID |
| 50002 | 业务处理失败 | isv.business-failed:700005 | 小时购订单不支持该快递公司发货 | 该物流公司无法对小时达订单发货，可以联系平台运营添加该物流公司 |
| 50002 | 业务处理失败 | isv.business-failed:60124 | 系统繁忙，请稍后重试 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:60132 | 系统繁忙，请稍后重试 | 重试，如果多次重试后无法解决问题，可以联系平台客服寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:60126 | 暂不支持使用寻梦同城物流发货，请重新选择物流公司或联系平台客服申请使用 | 该商家暂时不被使用寻梦同城物流公司，可以联系平台客服申请添加白名单。 |
| 50002 | 业务处理失败 | isv.business-failed:60125 | 系统繁忙，请稍后重试 | 重试，如果多次重试后无法解决问题，可以联系平台客服寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:60026 | 该订单不支持使用其它物流进行发货 | 该商家暂时不被使用其他物流公司，可以联系平台客服申请添加白名单。 |
| 50002 | 业务处理失败 | isv.business-failed:120018 | 系统繁忙，请稍后重试/或者返回其他提示 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:100009 | 订单不存在，请仔细检查订单号或者稍后重试 | ISV开发者仔细检查订单号是否正确，并在修正后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:700042 | 物流服务商信息异常，请传入正确的物流服务商信息或稍后重试 | 重试，如果多次重试后无法解决问题，可以联系平台客服寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:120004 | 系统繁忙，请稍后重试/或者返回其他提示 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:60018 | 暂不支持该物流商，请检查物流商编码后重新发货 | 平台暂时不支持该物流公司，请仔细检查输入的物流公司code或者更换物流公司后重试 |
| 50002 | 业务处理失败 | isv.business-failed:60127 | 发货信息填写有误，请检查物流单号、物流公司是否填写/选择正确 | 仔细检查输入的运单号和物流公司是否正确，订单号是否属于该物流公司，并在修正后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:700008 | 系统繁忙，请稍后重试 | 重试，如果多次重试后无法解决问题，可以联系平台客服寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:120049 | 系统繁忙，请稍后重试 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:700004 | store_id不存在/错误，超市小时达订单发货需传入订单对应的门店ID | 仔细检查输入的门店ID是否正确，并修正后重试 |
| 50002 | 业务处理失败 | isv.business-failed:120035 | 系统繁忙，请稍后重试 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:130013 | 系统繁忙，请稍后重试 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:700053 | 系统繁忙，请稍后重试 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:70016 | 系统繁忙，请稍后重试 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:60072 | 该店铺无默认发货地址，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后再操作发货 | 商家不存在默认的发货地址，需要前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后再操作发货 |
| 50002 | 业务处理失败 | isv.business-failed:60134 | 该发货地址在商家地址库不存在，请刷新或者前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后重试 | 商家传入的发货地址在地址库未找到，商家重新选择当前在地址库存在的地址或者去抖店PC端「订单-发货管理-物流工具-地址库管理」添加新地址后使用。 |
| 50002 | 业务处理失败 | isv.business-failed:60070 | 当前发货地址存在异常，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」查看并修改后重试 | 商家当前使用的发货地址被平台判定为异常地址，商家需前往「订单-发货管理-物流工具-地址库管理」查看对应的异常说明，并在对应页面完成编辑后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60133 | 当前发货地址异常，请仔细检查地址和联系人信息是否完整且有效 | 商家当前使用的发货地址被平台判定为异常地址，商家需前往「订单-发货管理-物流工具-地址库管理」查看对应的异常说明，并在对应页面完成编辑后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:60027 | 该店铺无默认售后地址，请前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后再操作发货 | 商家不存在默认的售后地址，需要前往抖店PC端「订单-发货管理-物流工具-地址库管理」设置后再操作发货 |
| 50002 | 业务处理失败 | isv.business-failed:60135 | 系统异常，请稍后重试 | 重试，如果多次重试后无法解决问题，可以联系平台客服寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:700029 | 请传入退货地址，提高退换货的履约准确率 | 商家应该传入对应的退货地址ID |
| 50002 | 业务处理失败 | isv.business-failed:100040 | 发货地址信息不完整，请到「订单」-「发货管理」-「物流工具」-「地址库管理」补充完整 | 商家当前使用的发货地址被平台判定为异常地址，商家需前往「订单-发货管理-物流工具-地址库管理」查看对应的异常说明，并在对应页面完成编辑后重试。 |
| 50002 | 业务处理失败 | isv.business-failed:70011 | 系统繁忙，请稍后重试/或者返回其他提示 | 根据返回的错误信息提示，重试或者修正请求的参数。如果无法解决问题，可以寻求平台客服的帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:120002 | 120002:网络异常，请稍后重试 | 120002:网络异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
