# /order/queryLogisticsCompanyList

> 中文说明：查询当前商家、订单可用物流公司列表  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/3845>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/queryLogisticsCompanyList |
| 中文名称 | 查询当前商家、订单可用物流公司列表 |
| 文档目录 | 物流发货API |
| Article ID | 3845 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/5/18 15:06:48 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1700 |

## 使用说明

1、支持ISV查询当前商家可用物流公司列表;
2、支持ISV通过传入订单号的方式查询除商家维度可用的物流公司外，该订单额外可用的特殊物流公司;

## 权限包

- 物流发货 / 获取快递公司列表（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、售后管理、财务管理、打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、商家后台系统、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、商品供应链、电商ERP
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.queryLogisticsCompanyList | 调用的API接口名称 | - | - |
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
| 0 | shop_order_ids | ShopOrderNos | false | 3 | ["6918554369549276303","6918522115348698631"] | 订单号列表 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | logistics_company_list_by_shop | LogisticsCompanyList | - | 3 | - | 店铺维度所有订单能够使用的物流公司列表。 | - | R1 |
| 1 | logistics_company_list_by_shop.code | Code | - | 2 | yuantong | 物流公司的code | - | - |
| 1 | logistics_company_list_by_shop.name | Name | - | 2 | 圆通快递 | 物流公司名称 | - | - |
| 0 | logistics_company_list_by_order_ids | LogisticsCompanyListByOrderIds | - | 3 | - | 除logistics_company_list_by_shop外，订单维度能够使用的物流公司列表 | - | R1 |
| 1 | logistics_company_list_by_order_ids.order_id | ShopOrderNo | - | 2 | 6918560766861317976 | 订单号 | - | - |
| 1 | logistics_company_list_by_order_ids.logistcis_company_list_by_ids | LogisticsCompanyListByIds | - | 3 | - | 除logistics_company_list_by_shop外，该订单号能够使用的物流公司列表 | - | R1 |
| 2 | logistics_company_list_by_order_ids.logistcis_company_list_by_ids.code | Code | - | 2 | qita | 订单能够使用的物流code | - | - |
| 2 | logistics_company_list_by_order_ids.logistcis_company_list_by_ids.name | Name | - | 2 | 其他物流 | 订单能够使用的物流名称 | - | - |
| 0 | fail_shop_order_id_and_reason | FailShopOrderNosAndReason | - | 3 | - | 本次请求中失败的失败的订单号以及原因列表 | - | R1 |
| 1 | fail_shop_order_id_and_reason.fail_code | FailCode | - | 2 | 100019 | 订单不存在对应的错误码 | - | - |
| 1 | fail_shop_order_id_and_reason.fail_reason | FailReason | - | 2 | 订单不存在 | 失败原因 | - | - |
| 1 | fail_shop_order_id_and_reason.order_ids | ShopOrderNos | - | 3 | ["1233","1234"] | 本次请求中失败的订单号 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.comcorssborder/link/inboundBill/push?app_key=your_appkey_here&method=corssborder.link.inboundBill.push&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.comcorssborder/link/inboundBill/push?app_key=your_appkey_here&method=corssborder.link.inboundBill.push&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderQueryLogisticsCompanyListRequest request = new OrderQueryLogisticsCompanyListRequest();
OrderQueryLogisticsCompanyListParam param = request.getParam();
param.setShopOrderIds(["6918554369549276303","6918522115348698631"]);
OrderQueryLogisticsCompanyListResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderQueryLogisticsCompanyListRequest();
$param = new OrderQueryLogisticsCompanyListParam();
$request->setParam($param);
$param->shop_order_ids = ["6918554369549276303","6918522115348698631"];
$response = $request->execute(accessToken);

```

### python

```python
request = OrderQueryLogisticsCompanyListRequest()
param = request.getParams()
param.shop_order_ids = ["6918554369549276303","6918522115348698631"]
response = request.execute(accessToken)

```

### go

```go
request := order_queryLogisticsCompanyList_request.New()
param := request.GetParams()
param.ShopOrderIds = ["6918554369549276303","6918522115348698631"]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderQueryLogisticsCompanyListRequest();
var param = request.BuildParam();
param.ShopOrderIds = ["6918554369549276303","6918522115348698631"];
var response = request.Execute<OrderQueryLogisticsCompanyListResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:99998 | 请输入正确的参数，仔细检查输入参数是否为空或联系抖店人员排查 | 联系抖店相关人员排查 |
| 20000 | 系统错误 | isp.service-error:50029 | 店铺ID非法，不允许小于等于0 | 联系抖店相关人员排查 |
| 40004 | 非法的参数 | isv.parameter-invalid:100001 | 单次请求最多支持传入20个订单号 | 减少单次请求中传入的订单号数量后重试即可 |
| 40004 | 非法的参数 | isv.parameter-invalid:50049 | 订单号格式错误，请修改后重试 | 检查输入的订单号是否不是抖店内的订单号 |
| 20000 | 系统错误 | isp.service-error:99999 | 系统繁忙，请稍后重试 | 再次重试即可 |
| 50002 | 业务处理失败 | isv.business-failed:60124 | 文案可能会变，参考返回的具体文案 | 根据返回的错误信息提示做处理 |
| 20000 | 系统错误 | isp.service-error:120005 | 系统繁忙，请稍后重试 | 再次重试即可 |
| 50002 | 业务处理失败 | isv.business-failed:70009 | 文案可能会变，参考返回的具体文案 | 根据返回的错误信息提示做处理 |
| 50002 | 业务处理失败 | isv.business-failed:120018 | 文案可能会变，参考返回的具体文案 | 根据返回的错误信息提示做处理 |
| 50002 | 业务处理失败 | isv.business-failed:100009 | 订单不存在，请仔细检查后重试 | 1、如果报错“订单不存在”相关，请检查输入的订单号是否存在；2、如果是“系统繁忙”或者“系统异常”类报错，可联系抖店内部工作人员排查; |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
