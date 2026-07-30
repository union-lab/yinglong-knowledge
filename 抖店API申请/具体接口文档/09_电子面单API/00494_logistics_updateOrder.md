# /logistics/updateOrder

> 中文说明：更新收件人信息 以及发件人名字联系方式信息，不支持顺丰速递更新面单信息（支持顺丰速递更新重量体积）  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/494>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/updateOrder |
| 中文名称 | 更新收件人信息 以及发件人名字联系方式信息，不支持顺丰速递更新面单信息（支持顺丰速递更新重量体积） |
| 文档目录 | 电子面单API |
| Article ID | 494 |
| 文档版本 | V3.15 |
| 官方更新时间 | 2022/12/28 17:49:00 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

1、面单信息更新接口，更新收件人信息 以及发件人名字联系方式信息，支持顺丰速递更新面单信息（支持顺丰速递更新重量体积）。
2、面单有任何物流轨迹之后不允许更新。

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.updateOrder | 调用的API接口名称 | - | - |
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
| 0 | sender_info | senderInfo | false | 5 | - | 寄件人信息 | - | - |
| 1 | sender_info.contact | contact | false | 5 | - | 寄件人联系信息 | - | - |
| 2 | sender_info.contact.name | name | false | 2 | 张三 | 寄件人姓名 | - | - |
| 2 | sender_info.contact.phone | phone | false | 2 | 1 | 寄件人固话（和mobile二选一） | - | - |
| 2 | sender_info.contact.mobile | mobile | false | 2 | 18500000034 | 寄件人移动电话（和phone二选一） | - | - |
| 0 | receiver_info | receiverInfo | false | 5 | - | 收件人信息 | - | - |
| 1 | receiver_info.address | address | true | 5 | - | 收件人地址信息 | - | - |
| 2 | receiver_info.address.country_code | countryCode | true | 2 | CHN | 国家编码（默认CHN，目前只有国内业务） | - | - |
| 2 | receiver_info.address.province_name | provinceName | true | 2 | 北京市 | 省名称 | - | - |
| 2 | receiver_info.address.city_name | cityName | true | 2 | 市辖区 | 市名称 | - | - |
| 2 | receiver_info.address.district_name | districtName | true | 2 | 海淀区 | 区/县名称 | - | - |
| 2 | receiver_info.address.street_name | streetName | false | 2 | 丹棱街 | 街道名称。街道名称（street_name）和街道code（street_code），若传入时，需要一起传入。 | - | - |
| 2 | receiver_info.address.detail_address | detailAddress | false | 2 | 丹棱街1号 | 剩余详细地址，支持密文 | - | - |
| 2 | receiver_info.address.province_code | provinceCode | false | 2 | 11 | 省code编码 | - | - |
| 2 | receiver_info.address.city_code | cityCode | false | 2 | 11111 | 市code编码 | - | - |
| 2 | receiver_info.address.district_code | districtCode | false | 2 | 111111 | 区code编码 | - | - |
| 2 | receiver_info.address.street_code | streetCode | false | 2 | 1111 | 街道code编码 | - | - |
| 1 | receiver_info.contact | contact | true | 5 | - | 收件人联系信息 | - | - |
| 2 | receiver_info.contact.name | name | false | 2 | 李四 | 收件人姓名，支持密文 | - | - |
| 2 | receiver_info.contact.phone | phone | false | 2 | 1 | 收件人固话（和mobile二选一） | - | - |
| 2 | receiver_info.contact.mobile | mobile | false | 2 | 18500000034 | 收件人移动电话（和phone二选一），支持密文 | - | - |
| 0 | logistics_code | company | true | 2 | jtexpress | 物流服务商编码 | - | - |
| 0 | track_no | trackNo | true | 2 | jt271927012 | 运单号 | - | - |
| 0 | items | items | false | 3 | - | 商品明细列表 | - | - |
| 1 | items.item_name | itemName | true | 2 | 1 | 商品名称 | - | - |
| 1 | items.item_specs | itemSpecs | false | 2 | 1 | 商品规格 | - | - |
| 1 | items.item_count | itemCount | true | 7 | 1 | 商品数量 | - | - |
| 1 | items.item_volume | itemVolume | false | 7 | 1 | 单件商品体积（cm3） | - | - |
| 1 | items.item_weight | itemWeight | false | 7 | 1 | 单件商品重量（g) | - | - |
| 1 | items.item_net_weight | itemNetWeight | false | 7 | 1 | 单件总净重量（g） | - | - |
| 0 | remark | remark | false | 2 | 1 | 备注 | - | - |
| 0 | extra | extra | false | 2 | 1 | 备用扩展字段 | - | - |
| 0 | user_id | userId | false | 1 | 1 | 实际使用取号服务店铺user_id | - | - |
| 0 | volume | volume | false | 2 | 1,2,3 | 总体积 货物的总体积或长，宽，高 ；整数 单位cm | - | - |
| 0 | weight | weight | false | 1 | 20 | /总重量 ；整数 用于与快递商有计抛信任协议的商家）单位克 | - | - |
| 0 | warehouse | warehouse | false | 5 | - | 仓、门店、总对总发货 | - | - |
| 1 | warehouse.is_sum_up | isSumup | true | 4 | true | 目前该字段无效，统一传false | - | - |
| 1 | warehouse.wh_order_no | whOrderNo | false | 2 | 8837383 | 仓库订单号(丹鸟等仓发链路使用) | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | track_no | trackNo | - | 2 | DPK363023514956 | 运单号 | - | R1 |
| 0 | sort_code | sortCode | - | 2 | 400-W00 000 | 分拣码（三段码） | - | R1 |
| 0 | package_center_code | packageCode | - | 2 | 52 | 集包地代码 | - | R1 |
| 0 | package_center_name | packageCodeName | - | 2 | 杭州中转包1 | 集包名称 | - | R1 |
| 0 | short_address_code | markDestinationCode | - | 2 | L51-00-16 | 大头笔编码 | - | R1 |
| 0 | short_address_name | markDestinationCodeName | - | 2 | 123456 | 大头笔名称 | - | R1 |
| 0 | extra_resp | extraResp | - | 2 | {"123456"} | 扩展字段 | - | R1 |

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
LogisticsUpdateOrderRequest request = new LogisticsUpdateOrderRequest();
LogisticsUpdateOrderParam param = request.getParam();
param.setLogisticsCode("jtexpress");
param.setTrackNo("jt271927012");
param.setRemark("1");
param.setExtra("1");
param.setUserId(1L);
param.setVolume("1,2,3");
param.setWeight(20L);
LogisticsUpdateOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsUpdateOrderRequest();
$param = new LogisticsUpdateOrderParam();
$request->setParam($param);
$param->logistics_code = "jtexpress";
$param->track_no = "jt271927012";
$param->remark = "1";
$param->extra = "1";
$param->user_id = 1;
$param->volume = "1,2,3";
$param->weight = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsUpdateOrderRequest()
param = request.getParams()
param.logistics_code = "jtexpress"
param.track_no = "jt271927012"
param.remark = "1"
param.extra = "1"
param.user_id = 1
param.volume = "1,2,3"
param.weight = 20
response = request.execute(accessToken)

```

### go

```go
request := logistics_updateOrder_request.New()
param := request.GetParams()
param.LogisticsCode = "jtexpress"
param.TrackNo = "jt271927012"
param.Remark = "1"
param.Extra = "1"
param.UserId = 1
param.Volume = "1,2,3"
param.Weight = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsUpdateOrderRequest();
var param = request.BuildParam();
param.LogisticsCode = "jtexpress";
param.TrackNo = "jt271927012";
param.Remark = "1";
param.Extra = "1";
param.UserId = 1;
param.Volume = "1,2,3";
param.Weight = 20;
var response = request.Execute<LogisticsUpdateOrderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:10912 | ERROR:该订单对应的运单号3180425096642已经有物流信息,不能进行修改 | 有轨迹无法更新 |
| 40004 | 非法的参数 | isv.parameter-invalid:10911 | 运单号不存在 | 参数错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:10902 | 订单已取件，不允许变更 | 无法更新 |
| 40004 | 非法的参数 | isv.parameter-invalid:10901 | 订单已取消，不允许变更 | 无法更新 |
| 40004 | 非法的参数 | isv.parameter-invalid:10724 | 运单号不存在 | 输入正确的运单号 |
| 40004 | 非法的参数 | isv.parameter-invalid:10704 | 物流服务不支持派送 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:10014 | 电子面单号不存在 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:10000 | 参数错误 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:8252 | 订单已确认 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:5001 | fengwang物流服务商不支持该接口 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:4023 | 该物流商不允许更新 Weight、Volume 字段 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:4006 | 邮政和ems接口暂时不支持除了Weight、Volume之外的字段 | 无 |
| 40004 | 非法的参数 | isv.parameter-invalid:4001 | 使用该产品需签订指定专属协议 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:20045 | 未获取到网点数据 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:20019 | 筛单不可到:其它原因 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10701 | 账户余额不足 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:4009 | 请求物流服务商超时 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:4007 | 请求内部服务超时，请重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:11204 | 11204:调用路由信息查询接口异常 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:4010 | 4010:数据库查询失败 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:20043 | 20043:网点获取超时,请稍后重试 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:14081 | 14081:服务不可达 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:8177 | 8177:1:尊敬的客户您好！受目的地疫情影响，暂时无法提供收派服务，带来不便请您理解。(BPS：0125000) | 无 |
| 50002 | 业务处理失败 | isv.business-failed:8092 | 8092:到方电话或手机不合法 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10913 | 10913:末端服务不可达 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10802 | 10802:外部订单号:141209-279021\|279021_1\|43\|54订单已经揽收或上传无法修改 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10907 | 10907:60：订单状态不在可允许修改配置项内 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:817703 | 817703:1:尊敬的客户，您好！因当前流向件量激增，为更好地保障您的寄件体验，暂不提供此产品寄递服务，您可选择其他产品寄递，带来不便请您理解。 | 请选择其他产品寄递 |
| 50002 | 业务处理失败 | isv.business-failed:4008 | 4008:内部数据JSON/XML格式非法   ! | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:817702 | 817702:1:尊敬的客户，您好！受目的地疫情影响，暂不提供寄递服务，带来不便请您理解。(BPS:125000) | 受目的地疫情影响，暂不提供寄递服务 |
| 50002 | 业务处理失败 | isv.business-failed:15000 | 15000:系统繁忙，请稍后重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10719 | 10719:内部处理超时，请重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:817701 | 817701:1:尊敬的客户，您好！受寄件地疫情影响，暂时无法提供此产品寄递服务，带来不便请您理解。(BPS3562) | 无 |
| 50002 | 业务处理失败 | isv.business-failed:200101 | 200101:订单已揽收或已完成，不支持修改订单 | 无 |
| 50002 | 业务处理失败 | isv.business-failed:10903 | 10903:订单号不存在 | 提工单 |
| 50002 | 业务处理失败 | isv.business-failed:55000008 | 55000008:更新失败，中转入仓订单不允许更新地址，请重新取号 | 55000008:更新失败，中转入仓订单不允许更新地址，请重新取号 |
| 50002 | 业务处理失败 | isv.business-failed:20036 | 20036:该产品的付款方式为寄付,寄转第三方可用 | 20036:该产品的付款方式为寄付,寄转第三方可用 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
