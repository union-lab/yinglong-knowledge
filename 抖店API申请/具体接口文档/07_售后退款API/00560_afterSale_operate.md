# /afterSale/operate

> 中文说明：售后审核接口聚合版  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/560>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/operate |
| 中文名称 | 售后审核接口聚合版 |
| 文档目录 | 售后退款API |
| Article ID | 560 |
| 文档版本 | V6.01 |
| 官方更新时间 | 2025/2/18 10:32:14 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

售后统一操作接口，此接口可以提供所有售后操作类型。通过此接口操作时，需要通过type字段说明本次期望的操作（详情可见下表）。
此接口每次最多支持对20个售后单进行操作。但任意一个售后单操作失败，接口遍会整体报错，因此推荐使用此接口每次操作一个售后单，从而获得更加明确的报错信息。

type说明:
值  前置条件-售后类型  前置条件-售后状态  说明                   必须参数
101             0             6,27   同意退货申请（一次审核）  Logistics.ReceiverAddressId 或 Logistics.AfterSaleAddressDetail
102             0                6   拒绝退货申请（一次审核）  reason , evidence
111             0          7,11,29   同意退货（二次审核）
112             0               11   拒绝退货 (二次审核)      reason , evidence
121             0             6,27   退货转退款
201             1             6,27   同意仅退款
202             1                6   拒绝仅退款              reason , evidence
203             1                6   同意拒签后退款
301             3             6,27   同意换货申请（一次审核)   Logistics.ReceiverAddressId 或 Logistics.AfterSaleAddressDetail
302             3                6   拒绝换货申请（一次审核）  reason,evidence
311             3          7,11,29   同意换货（二次审核）     logistics.companyCode,logistics.logisticsCode
312             3               11   拒绝换货（二次审核）     reason,evidence
321             3        6,7,11,29   换货转退款
401             2                6   同意售前退申请(拒绝售前退款请使用发货接口)
501             7             6,27   同意补寄 
502             7                6   拒绝补寄

## 权限包

- 售后 / 售后管理（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、售后管理、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.operate | 调用的API接口名称 | - | - |
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
| 0 | type | Type | true | 99 | 111 | 操作类型；枚举值说明文档：https://op.jinritemai.com/docs/question-docs/93/2752 | - | - |
| 0 | items | Items | true | 3 | - | 操作售后详情 | - | - |
| 1 | items.repair_type | RepairType | false | 99 | 1 | 维修类型（1-原商品维修；2-商品换新） | - | - |
| 1 | items.aftersale_id | AftersaleId | true | 0 | 6959800000297566494 | 售后单号 | - | - |
| 1 | items.reason | Reason | false | 2 | 商品有破损 | 操作原因，拒绝操作必填 | - | - |
| 1 | items.remark | Remark | false | 2 | 商品有污渍，影响二次销售 | 操作评论，拒绝操作必填 | - | - |
| 1 | items.evidence | Evidence | false | 3 | - | 操作凭证编码，当【afterSale/rejectReasonCodeList】接口响应参数evidence_need=Y时，该参数必填；使用【afterSale/rejectReasonCodeList】接口获取响应参数中的reject_reason_code字段。 | - | - |
| 2 | items.evidence.type | Type | false | 99 | 0 | 凭证类型，1:图片，2:视频(暂不支持)，3:音频(暂不支持展示)，4:文字(暂不支持展示)。“用户可见备注”为remark字段 | - | - |
| 2 | items.evidence.url | Url | false | 2 | http://xxxxxxxx.jpg | 凭证url | - | - |
| 2 | items.evidence.desc | Desc | false | 2 | 过敏部位图片 | 凭证描述 | - | - |
| 1 | items.logistics | Logistics | false | 5 | - | 同意退货/同意换货物流信息，当前type=101，301，311是该集合需要传值。 | - | - |
| 2 | items.logistics.company_code | ComanyCode | false | 2 | yuantong | 物流公司code，使用【/order/logisticsCompanyList】接口获取；type=311仅换货时需要填入 | - | - |
| 2 | items.logistics.logistics_code | LogisticsCode | false | 2 | YT31368712931 | 物流单号（快递单号），仅type=311仅换货时需要填入 | - | - |
| 2 | items.logistics.receiver_address_id | ReceiverAddressId | false | 99 | 95251 | 商家收件地址id（推荐使用），须通过【/address/list】获取【address_id】填入。商家在同意换货/退货时，可以传入该地址id，对应的地址会买家展示进行商品退回； | - | - |
| 2 | items.logistics.sender_address_id | SenderAddressId | false | 99 | 95252 | 已废弃字段（废弃时间2022-06-10）发件地址id | - | - |
| 2 | items.logistics.after_sale_address_detail | AfterSaleAddressDetail | false | 5 | - | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段，商家收货地址详情； | - | - |
| 3 | items.logistics.after_sale_address_detail.province_name | ProvinceName | false | 2 | 北京 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段省；使用【/address/getProvince】接口获取 | - | - |
| 3 | items.logistics.after_sale_address_detail.city_name | CityName | false | 2 | 北京 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段市；需要使用【/address/getAreasByProvince】接口响应参数获取 | - | - |
| 3 | items.logistics.after_sale_address_detail.town_name | TownName | false | 2 | 海淀 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段区；需要使用【/address/getAreasByProvince】接口响应参数获取 | - | - |
| 3 | items.logistics.after_sale_address_detail.street_name | StreetName | false | 2 | xxx街道 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段街道名称 | - | - |
| 3 | items.logistics.after_sale_address_detail.detail | Detail | false | 2 | 北京市海淀区丹棱街1号305 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段地址详情 | - | - |
| 3 | items.logistics.after_sale_address_detail.user_name | UserName | false | 2 | 张三 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段收件人 | - | - |
| 3 | items.logistics.after_sale_address_detail.mobile | Mobile | false | 2 | 17777777777 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段联系电话，支持手机号和固定电话；固定电话需要传入区号。注意：区号和号码之间一定要传入“-”传值示例：0571-1234567；否则会报错电话号码不合法。 | - | - |
| 3 | items.logistics.after_sale_address_detail.province_id | ProvinceId | false | 99 | 10 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段省id；使用【/address/getProvince】接口获取 | - | - |
| 3 | items.logistics.after_sale_address_detail.city_id | CityId | false | 99 | 10 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段市id；需要使用【/address/getAreasByProvince】接口响应参数获取 | - | - |
| 3 | items.logistics.after_sale_address_detail.town_id | TownId | false | 99 | 01 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段区id；需要使用【/address/getAreasByProvince】接口响应参数获取 | - | - |
| 3 | items.logistics.after_sale_address_detail.street_id | StreetId | false | 99 | 12 | 【该字段将在2023年8月31日下线】，请尽快切换使用receiver_address_id字段街道id；需要使用【/address/getAreasByProvince】接口响应参数获取 | - | - |
| 1 | items.reject_reason_code | RejectReasonCode | false | 99 | 1 | 售后拒绝原因码，拒绝时必填填。通过/afterSale/rejectReasonCodeList获取 | - | - |
| 1 | items.update_time | UpdateTime | false | 99 | 0 | 用于校验售后单版本是不是最新的版本，防止售后单变更且open侧审核通过导致资损。不传就不校验，传入后就会校验isv传入的售后单版本是不是最新的版本。 需要使用【/afterSale/Detail】接口返回的update_time字段或使用售后消息推送中的update_time字段 | - | - |
| 0 | store_id | StoreID | false | 0 | 门店ID | 门店ID；抖超小时达业务使用； | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | items | Items | - | 3 | - | 审核结果 | - | - |
| 1 | items.aftersale_id | AftersaleId | - | 99 | 6959800000297566494 | 售后单号 | 56 | R1 |
| 1 | items.status_code | StatusCode | - | 99 | 0 | 操作结果码 | 29 | R1 |
| 1 | items.status_msg | StatusMsg | - | 2 | success | 操作 结果描述 | 29 | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/afterSale/operate?app_key=your_appkey_here&method=afterSale.operate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/afterSale/operate?app_key=your_appkey_here&method=afterSale.operate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AfterSaleOperateRequest request = new AfterSaleOperateRequest();
AfterSaleOperateParam param = request.getParam();
param.setType(111);
param.setStoreId(门店IDL);
AfterSaleOperateResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleOperateRequest();
$param = new AfterSaleOperateParam();
$request->setParam($param);
$param->type = 111;
$param->store_id = 门店ID;
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleOperateRequest()
param = request.getParams()
param.type = 111
param.store_id = 门店ID
response = request.execute(accessToken)

```

### go

```go
request := afterSale_operate_request.New()
param := request.GetParams()
param.Type = 111
param.StoreId = 门店ID
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleOperateRequest();
var param = request.BuildParam();
param.Type = 111;
param.StoreId = 门店ID;
var response = request.Execute<AfterSaleOperateResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:11000 | 参数错误，电话号码不合法 | 检查电话号码后重试 |
| 20000 | 系统错误 | isp.service-error:10000 | 存在无效的售后单 | 检查售后单后重试 |
| 20000 | 系统错误 | isp.service-error:10002 | 返回内容为空，重试后若错误继续存在，请联系平台 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:11005 | 操作失败 | 检查后重试 |
| 50002 | 业务处理失败 | isv.business-failed:11001 | 11001:暂不支持通过OPEN处理，请登录抖店后台人工审核售后单。如有疑问，请联系平台客服。 | 无法重试解决 |
| 50002 | 业务处理失败 | isv.business-failed:20309541 | 售后状态错误 | 重新同步获取&检查售后数据，重试无效 |
| 50002 | 业务处理失败 | isv.business-failed:12000 | 12000:系统错误 | 系统繁忙，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
