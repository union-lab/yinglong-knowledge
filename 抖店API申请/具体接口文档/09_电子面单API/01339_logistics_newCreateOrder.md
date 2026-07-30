# /logistics/newCreateOrder

> 中文说明：商家ERP/ISV 向字节电子面单系统获取单号和打印信息  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/1339>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/newCreateOrder |
| 中文名称 | 商家ERP/ISV 向字节电子面单系统获取单号和打印信息 |
| 文档目录 | 电子面单API |
| Article ID | 1339 |
| 文档版本 | V8.14 |
| 官方更新时间 | 2024/12/3 14:58:00 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 6500 |

## 使用说明

主要用于商家ERP/ISV 向字节电子面单系统获取单号和打印信息。
（重要）若取号后再来取号，需传相同订单号及不同的包裹id再次来取号，否则返回老号
调用路径：ISV/商家—>字节
支持批量取号，一次最多50条。

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.newCreateOrder | 调用的API接口名称 | - | - |
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
| 0 | sender_info | senderInfo | true | 5 | - | 寄件人信息 | - | - |
| 1 | sender_info.address | address | true | 5 | - | 寄件人地址信息（需要调用/logistics/listShopNetsite查询） | - | - |
| 2 | sender_info.address.country_code | countryCode | true | 2 | CHN | 国家编码（默认CHN，目前只有国内业务） | - | - |
| 2 | sender_info.address.province_name | provinceName | true | 2 | 北京市 | 省名称 | - | - |
| 2 | sender_info.address.city_name | cityName | true | 2 | 市辖区 | 市名称 | - | - |
| 2 | sender_info.address.district_name | districtName | true | 2 | 海淀区 | 区/县名称 | - | - |
| 2 | sender_info.address.street_name | streetName | false | 2 | 丹棱街1号 | 街道名称 | - | - |
| 2 | sender_info.address.detail_address | detailAddress | true | 2 | 丹棱街1号 | 剩余详细地址 | - | - |
| 1 | sender_info.contact | contact | true | 5 | - | 寄件人联系信息 | - | - |
| 2 | sender_info.contact.name | name | true | 2 | 张三 | 寄件人姓名 | - | - |
| 2 | sender_info.contact.phone | phone | false | 2 | 1 | 寄件人固话（和mobile二选一） | - | - |
| 2 | sender_info.contact.mobile | mobile | false | 2 | 18500000034 | 寄件人移动电话（和phone二选一） | - | - |
| 0 | logistics_code | company | true | 2 | jtexpress | 物流服务商编码 | - | - |
| 0 | order_infos | orderInfos | true | 3 | - | 详细订单列表 | - | - |
| 1 | order_infos.order_id | orderId | true | 2 | 202011809 | 抖音订单请传入正向店铺单ID或售后单ID（合单情况下，isv只需传其中一个订单号，其他的合单订单号，请统一传入combine_orders字段)；非抖音订单需要传order_channel字段，长度仅支持32个字符，格式：数字、大小写字母及“-”、“/”2种分隔符的组合字符串，例如：Doudian-123456 | - | - |
| 1 | order_infos.pack_id | packId | false | 2 | 1 | 包裹id。拆包（一个订单获取多个独立的运单，非子母件）场景使用，只能传入15位以内的数字、字母和下划线，大小写敏感（即123A,123a为不同包裹id），仅第2个及以后的运单取号时传不同id。 | - | - |
| 1 | order_infos.service_list | serviceList | false | 3 | - | 增值服务列表，更多增值服务参考[抖音电商电子面单对接文档](https://bytedance.feishu.cn/wiki/wikcnNVdm3TlJutNCUlKmiVuwnf) | - | - |
| 2 | order_infos.service_list.service_code | serviceCode | false | 2 | SVC-INSURE | 增值服务类型 | - | - |
| 2 | order_infos.service_list.service_value | serviceValue | false | 2 | {\"value\":\"2200\"} | 增值服务对应的value值，如果增值类型涉及金额会校验，单位：分 | - | - |
| 1 | order_infos.product_type | productType | false | 2 | 1 | 快递产品类型，更多产品类型参考[抖音电商电子面单对接文档](https://bytedance.feishu.cn/wiki/wikcnNVdm3TlJutNCUlKmiVuwnf) | - | - |
| 1 | order_infos.pay_method | payMethod | false | 6 | 1 | 支付方式：1-寄付月结，2-寄付现结）若不传，默认为商家与物流商网点约定的支付方式 | - | - |
| 1 | order_infos.pay_amount | payAmount | false | 1 | 5000 | 运费金额，单位为分 | - | - |
| 1 | order_infos.pod_model_address | podModelAddress | false | 5 | - | 回单寄回地址 | - | - |
| 2 | order_infos.pod_model_address.country_code | countryCode | true | 2 | CHN | 国家编码（默认CHN，目前只有国内业务） | - | - |
| 2 | order_infos.pod_model_address.province_name | provinceName | true | 2 | 浙江省 | 省名称 | - | - |
| 2 | order_infos.pod_model_address.city_name | cityName | true | 2 | 1 | 市名称 | - | - |
| 2 | order_infos.pod_model_address.district_name | districtName | true | 2 | 闵行区 | 区/县名称 | - | - |
| 2 | order_infos.pod_model_address.street_name | streetName | false | 2 | 宜山路 | 街道名称 | - | - |
| 2 | order_infos.pod_model_address.detail_address | detailAddress | true | 2 | 宜山路 | 剩余详细地址 | - | - |
| 1 | order_infos.receiver_info | receiverInfo | true | 5 | - | 收件人信息 | - | - |
| 2 | order_infos.receiver_info.address | address | true | 5 | - | 收件人地址信息 | - | - |
| 3 | order_infos.receiver_info.address.country_code | countryCode | true | 2 | CHN | 国家编码（默认中国CHN） | - | - |
| 3 | order_infos.receiver_info.address.province_name | provinceName | true | 2 | 北京市 | 省名称 | - | - |
| 3 | order_infos.receiver_info.address.city_name | cityName | true | 2 | 市辖区 | 市名称 | - | - |
| 3 | order_infos.receiver_info.address.district_name | districtName | true | 2 | 海淀区 | 区/县名称 | - | - |
| 3 | order_infos.receiver_info.address.street_name | streetName | false | 2 | 丹棱街1号 | 街道名称 | - | - |
| 3 | order_infos.receiver_info.address.detail_address | detailAddress | true | 2 | 丹棱街1号 | 剩余详细地址，支持密文 | - | - |
| 3 | order_infos.receiver_info.address.province_code | provinceCode | false | 2 | 11 | 省编码code | - | - |
| 3 | order_infos.receiver_info.address.city_code | cityCode | false | 2 | 1111 | 市编码code | - | - |
| 3 | order_infos.receiver_info.address.district_code | districtCode | false | 2 | 111111 | 区编码code | - | - |
| 3 | order_infos.receiver_info.address.street_code | streetCode | false | 2 | 11111111 | 街道编码code | - | - |
| 2 | order_infos.receiver_info.contact | contact | true | 5 | - | 收件人联系信息 | - | - |
| 3 | order_infos.receiver_info.contact.name | name | true | 2 | 李四 | 收件人姓名，支持密文 | - | - |
| 3 | order_infos.receiver_info.contact.phone | phone | false | 2 | 1 | 收件人固话（和mobile二选一） | - | - |
| 3 | order_infos.receiver_info.contact.mobile | mobile | false | 2 | 18500000034 | 收件人移动电话（和phone二选一），支持密文 | - | - |
| 1 | order_infos.items | items | true | 3 | - | 商品明细列表 | - | - |
| 2 | order_infos.items.item_name | itemName | true | 2 | 手机 | 商品名称 | - | - |
| 2 | order_infos.items.item_specs | itemSpecs | false | 2 | 1 | 商品规格 | - | - |
| 2 | order_infos.items.item_count | itemCount | true | 7 | 1 | 商品数量 | - | - |
| 2 | order_infos.items.item_volume | itemVolume | false | 7 | 1 | 单件商品体积（cm3 | - | - |
| 2 | order_infos.items.item_weight | itemWeight | false | 7 | 1 | 单件商品重量（g) | - | - |
| 2 | order_infos.items.item_net_weight | itemNetWeight | false | 7 | 1 | 单件总净重量（g） | - | - |
| 1 | order_infos.sender_fetch_time | senderFetchTime | false | 2 | 2020-11-11 22:00:00\|2020-11-11 23:00:00 | 要求上门取件时间段 | - | - |
| 1 | order_infos.is_sign_back | isSignBack | false | 6 | 0 | 是否返回签回单（签单返还）的运单号，支持以下值：1：要求 0：不要求\" | - | - |
| 1 | order_infos.remark | remark | false | 2 | 我的包裹易碎，包严实点 | 订单备注 | - | - |
| 1 | order_infos.extra | extra | false | 2 | "extra":"{\"sfOtherInfo\":\"{\\\"e1\\\":\\\"GUER\\\",\\\"e2\\\":\\\"DOUYIN\\\"}\"}", | 备用扩展字段（非必传字段，如果传值不可为"null",按照示例来传。） | - | - |
| 1 | order_infos.total_pack_count | totalPackCount | false | 7 | 子母件数 | 子母件的总包裹数量，仅子母件场景使用，使用时包裹数量必须≥2，不传则默认为普通的一单一包裹运单。 | - | - |
| 1 | order_infos.total_weight | totalWeight | false | 2 | 1 | 商品总重量，单位：克（仅支持顺丰物流使用） | - | - |
| 1 | order_infos.total_length | totalLength | false | 2 | 1 | 商品总长，单位：cm（仅支持顺丰物流使用） | - | - |
| 1 | order_infos.total_width | totalWidth | false | 2 | 1 | 商品总宽，单位：cm（仅支持顺丰物流使用） | - | - |
| 1 | order_infos.total_height | totalHeight | false | 2 | 1 | 商品总高，单位：cm（仅支持顺丰物流使用） | - | - |
| 1 | order_infos.volume | volume | false | 2 | 1 | 商品总体积，单位：cm3（仅支持顺丰物流使用） | - | - |
| 1 | order_infos.warehouse | warehouse | false | 5 | - | 仓、门店、总对总发货 | - | - |
| 2 | order_infos.warehouse.is_sum_up | isSumup | true | 4 | true | true 总对总门店发货 | - | - |
| 2 | order_infos.warehouse.wh_code | whCode | false | 2 | 1 | 仓库id编码 | - | - |
| 2 | order_infos.warehouse.wh_order_no | whOrderNo | false | 2 | 8837383 | 仓库订单号(丹鸟等仓发链路使用) | - | - |
| 2 | order_infos.warehouse.delivery_type | deliveryType | false | 2 | 2 | 发货方式，2-门店发货 3-仓库发货（不传默认为3） | - | - |
| 1 | order_infos.net_info | netInfo | false | 5 | - | 总对总信息门店信息 | - | - |
| 2 | order_infos.net_info.category | category | false | 2 | 加盟 | 物流服务商类型，直营/加盟 | - | - |
| 2 | order_infos.net_info.net_code | netCode | false | 2 | XS222 | 网点编码,当category为加盟类型时，该字段必填；为直营类型时可不传；对总模式该字段均为非必填 | - | - |
| 2 | order_infos.net_info.monthly_account | monthlyAccount | false | 2 | 324322432 | 总对总账号 月结账号 | - | - |
| 2 | order_infos.net_info.secret_key | secretKey | false | 2 | ddfdfdf | 总对总密码 | - | - |
| 1 | order_infos.shipping_code | shippingCode | false | 2 | SF24234234234234 | 物料码 | - | - |
| 1 | order_infos.special_delivery_type_code | specialDeliveryTypeCode | false | 2 | 2 | 顺丰极效前置场景（必填）使用  2:极效前置单 | - | - |
| 1 | order_infos.special_delivery_type_value | specialDeliveryTypeValue | false | 2 | Y | 顺丰极效前置场景（必填）使用   Y:若不支持则返回普通运单 N:若不支持则返回错误码 | - | - |
| 1 | order_infos.package_weight | packageWeight | false | 7 | 100 | 包裹总重量（g）（丹鸟专用，其余物流商取号不要传该字段） | - | - |
| 1 | order_infos.combine_orders | combineOrders | false | 3 | ["49111111","49111112"] | 包裹涉及到的所有订单号/售后单号信息，合单取号场景下必传 | - | - |
| 0 | user_id | userId | false | 1 | 1 | 共享账号场景下需传，代表实际使用取号服务的shop_id（需与order_id匹配） | - | - |
| 0 | delivery_req | deliveryReq | false | 5 | - | 派送要求（目前仅德邦支持） | - | - |
| 1 | delivery_req.is_center_delivery | isCenterDelivery | false | 4 | 是否接受仅镇中心派送 | true | - | - |
| 1 | delivery_req.is_pickup_self | isPickupSelf | false | 4 | 是否合伙人自提 | true | - | - |
| 0 | order_channel | orderChannel | false | 2 | 1 | 订单渠道来源编码，具体请参考[下单渠道来源编码表](https://bytedance.feishu.cn/sheets/shtcngIVwcJlgXLzWhEtKrmv7Af)，当order_id订单号为非抖音订单时必传 | - | - |
| 0 | ebill_delivery_info | ebillDeliveryInfo | false | 5 | - | 发货场景结构体，仅在线寄件场景使用，其余场景请不要传 | - | - |
| 1 | ebill_delivery_info.scene | scene | false | 2 | 场景 | 仅在线寄件场景使用，枚举（OnlineShip），其余场景请不要传 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | ebill_infos | eBillInfos | - | 3 | - | 电子面单信息列表 | - | R1 |
| 1 | ebill_infos.company | company | - | 2 | zhongtong | 面单对应的物流商code | 30 | - |
| 1 | ebill_infos.hint_msg | hintMsg | - | 2 | 您传入的收件地址与订单不一致，已采用平台订单地址完成取号 | 成功的单子的提示信息 | 28 | - |
| 1 | ebill_infos.order_id | orderId | - | 2 | 202011809 | 订单号 | 28 | R1 |
| 1 | ebill_infos.pack_id | packId | - | 2 | 1 | 包裹id | 64 | R1 |
| 1 | ebill_infos.track_no | trackNo | - | 2 | 202011809 | 运单号 | 64 | R1 |
| 1 | ebill_infos.sort_code | sortCode | - | 2 | 400-W00 000 | 分拣码（三段码） | 28 | R1 |
| 1 | ebill_infos.package_center_code | packageCode | - | 2 | 1 | 集包地代码 | 28 | R1 |
| 1 | ebill_infos.package_center_name | packageCodeName | - | 2 | 1 | 集包名称 | 28 | R1 |
| 1 | ebill_infos.short_address_code | markDestinationCode | - | 2 | 1 | 大头笔编码 | 28 | R1 |
| 1 | ebill_infos.short_address_name | markDestinationCodeName | - | 2 | 1 | 大头笔名称 | 28 | R1 |
| 1 | ebill_infos.extra_resp | extraResp | - | 2 | 1 | 额外打印信息（众邮、京东、丰网使用），具体请参考[抖音电商电子面单对接文档](https://op.jinritemai.com/docs/guide-docs/33/338)附录4 | 28 | R1 |
| 1 | ebill_infos.sub_waybill_codes | subWaybillCodes | - | 2 | 13,434,556 | 子母件列表英文逗号分隔 | 28 | R1 |
| 1 | ebill_infos.order_channel | orderChannel | - | 2 | c | 2；详情请看文档映射表 | 28 | R1 |
| 1 | ebill_infos.shipping_code | shippingCode | - | 2 | 34343 | 快递商侧系统生成的寄件码 | 28 | R1 |
| 0 | err_infos | errInfos | - | 3 | - | 错误信息列表 | - | R1 |
| 1 | err_infos.order_id | orderId | - | 2 | 1 | 订单号 | 29 | R1 |
| 1 | err_infos.pack_id | packId | - | 2 | 1 | 包裹id | 64 | R1 |
| 1 | err_infos.err_code | errCode | - | 2 | 10701 | 错误码 | 29 | R1 |
| 1 | err_infos.err_msg | errMsg | - | 2 | 电子面单库存不足 | 错误信息 | 29 | R1 |
| 1 | err_infos.order_channel | orderChannel | - | 2 | 2 | 2；详情请看文档映射表 | 29 | R1 |

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
LogisticsNewCreateOrderRequest request = new LogisticsNewCreateOrderRequest();
LogisticsNewCreateOrderParam param = request.getParam();
param.setLogisticsCode("jtexpress");
param.setUserId(1L);
param.setOrderChannel("1");
LogisticsNewCreateOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsNewCreateOrderRequest();
$param = new LogisticsNewCreateOrderParam();
$request->setParam($param);
$param->logistics_code = "jtexpress";
$param->user_id = 1;
$param->order_channel = "1";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsNewCreateOrderRequest()
param = request.getParams()
param.logistics_code = "jtexpress"
param.user_id = 1
param.order_channel = "1"
response = request.execute(accessToken)

```

### go

```go
request := logistics_newCreateOrder_request.New()
param := request.GetParams()
param.LogisticsCode = "jtexpress"
param.UserId = 1
param.OrderChannel = "1"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsNewCreateOrderRequest();
var param = request.BuildParam();
param.LogisticsCode = "jtexpress";
param.UserId = 1;
param.OrderChannel = "1";
var response = request.Execute<LogisticsNewCreateOrderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:10003 | 共享订单不存在 | 检查参数是否准确 |
| 40004 | 非法的参数 | isv.parameter-invalid:4006 | 寄件人姓名不能为空 | 检查参数是否准确 |
| 40004 | 非法的参数 | isv.parameter-invalid:1000 | 拼接参数异常 | 检查参数是否准确 |
| 50002 | 业务处理失败 | isv.business-failed:4007 | 查询订单信息失败，请重试 | 检查参数是否准确，如果确认无误提工单或者群里反馈 |
| 50002 | 业务处理失败 | isv.business-failed:15000 | 订单不是该店铺下的订单 | 切换店铺或更换订单号 |
| 50002 | 业务处理失败 | isv.business-failed:15002 | 订单信息不存在 | 确认订单信息是否正确 |
| 20000 | 系统错误 | isp.service-error:15001 | 系统错误 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:4029 | 系统内部错误 | 稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
