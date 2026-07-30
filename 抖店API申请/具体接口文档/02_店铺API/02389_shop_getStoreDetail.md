# /shop/getStoreDetail

> 中文说明：单个获取门店信息  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2389>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/getStoreDetail |
| 中文名称 | 单个获取门店信息 |
| 文档目录 | 店铺API |
| Article ID | 2389 |
| 文档版本 | V2.02 |
| 官方更新时间 | 2024/11/6 15:39:32 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

单个获取门店信息

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 抖店超市 / 门店查询（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.getStoreDetail | 调用的API接口名称 | - | - |
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
| 0 | store_id | storeId | true | 1 | 123 | 门店ID | - | - |
| 0 | is_need_poi_audit_info | isNeedPoiAuditInfo | false | 4 | true | 是否需要poi审核信息，注：只要审核状态的审核不要传true，需要详细的提交信息时传true | - | - |
| 0 | is_need_rel_shop_user | isNeedRelShopUser | false | 4 | true | 是否需要关联的抖店信息，注：只要shopId不要传true，需要关联店铺名称等信息时传true | - | - |
| 0 | is_need_charge_info | isNeedChargeInfo | false | 4 | true | 是否需要负责人信息 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | ret_code | retCode | - | 1 | 0 | 返回错误码，非0即有错 | - | R1 |
| 0 | ret_msg | retMsg | - | 2 | success | 错误信息 | - | R1 |
| 0 | store_detail | storeDetail | - | 5 | - | 门店信息 | - | R1 |
| 1 | store_detail.store | store | - | 5 | - | 门店信息 | - | R1 |
| 2 | store_detail.store.org_shop_id | orgShopId | - | 1 | 123 | 即时零售总部店铺id，新入驻商家推荐使用 | - | - |
| 2 | store_detail.store.delivery_service_pkg | deliveryServicePkg | - | 2 | delivery_service_pkg_self | 即时配送签约状态<br>"":未签约；"delivery_service_pkg_platform":平配；"delivery_service_pkg_self":自配 | - | - |
| 2 | store_detail.store.store_id | storeId | - | 1 | 123 | 门店ID | - | R1 |
| 2 | store_detail.store.name | name | - | 2 | 123 | 门店名称 | - | R1 |
| 2 | store_detail.store.store_code | storeCode | - | 2 | 123 | 门店编码 | - | R1 |
| 2 | store_detail.store.rel_shop_id | relShopId | - | 1 | 123 | 即时零售总部店铺id，迁移商家使用 | - | R1 |
| 2 | store_detail.store.poi_id | poiId | - | 1 | 123 | poiId | - | R1 |
| 2 | store_detail.store.longitude | longitude | - | 2 | 123 | 经度 | - | R1 |
| 2 | store_detail.store.latitude | latitude | - | 2 | 123 | 维度 | - | R1 |
| 2 | store_detail.store.province | province | - | 2 | 123 | 省 | - | R1 |
| 2 | store_detail.store.province_code | provinceCode | - | 2 | 123 | 省份code | - | R1 |
| 2 | store_detail.store.city | city | - | 2 | 123 | 市 | - | R1 |
| 2 | store_detail.store.city_code | cityCode | - | 2 | 123 | 城市code | - | R1 |
| 2 | store_detail.store.district | district | - | 2 | 123 | 区 | - | R1 |
| 2 | store_detail.store.district_code | districtCode | - | 2 | 123 | 区code | - | R1 |
| 2 | store_detail.store.town | town | - | 2 | 123 | 街道/镇 | - | R1 |
| 2 | store_detail.store.town_code | townCode | - | 2 | 123 | 街道/镇code | - | R1 |
| 2 | store_detail.store.address | address | - | 2 | 123 | 详细地址 | - | R1 |
| 2 | store_detail.store.contact | contact | - | 2 | 123 | 联系方式 | - | R1 |
| 2 | store_detail.store.open_time | openTime | - | 5 | - | 营业时间 | - | R1 |
| 3 | store_detail.store.open_time.day_map | dayMap | - | 8 | [1] | key:星期(1:周一、2:周二...7:周日）val:时间(多段用空格分隔，例"08:30-11:00 13:00-17:00") | - | R1 |
| 3 | store_detail.store.open_time.custom | custom | - | 2 | 123 | 暂时不使用 | - | R1 |
| 2 | store_detail.store.is_open_now | isOpenNow | - | 4 | true | 当前时间是否在营业时间中，如果不在则是打烊中 | - | R1 |
| 2 | store_detail.store.state | state | - | 1 | 5 | 绑定状态 1绑定中;2绑定成功;3:资质验证中;4账户认证中;5正常营业(c端可下单);6暂停营业 | - | R1 |
| 2 | store_detail.store.poi_audit_state | poiAuditState | - | 1 | 1 | poi审核子状态：1审核中;2绑定成功;3驳回;4部分通过 | - | R1 |
| 2 | store_detail.store.qual_state | qualState | - | 1 | 1 | 资质审核状态：0未提交；1审核中；2审核通过；3驳回 | - | R1 |
| 2 | store_detail.store.remit_state | remitState | - | 1 | 1 | 账户验证状态：0未提交；1验证中；2通过；3失败 | - | R1 |
| 2 | store_detail.store.open_account_state | openAccountState | - | 1 | 1 | 开户状态：0未开户;1已开户 | - | R1 |
| 2 | store_detail.store.suspend_type | suspendType | - | 1 | 1 | 停业类型:1商家主动操作;2平台处置 | - | R1 |
| 2 | store_detail.store.bound_time | boundTime | - | 1 | 123123 | 绑定成功的时间 | - | R1 |
| 2 | store_detail.store.create_time | createTime | - | 1 | 123123 | 创建时间 | - | R1 |
| 2 | store_detail.store.update_time | updateTime | - | 1 | 123123 | 更新时间 | - | R1 |
| 2 | store_detail.store.qual_pass_time | qualPassTime | - | 1 | 123123 | 资质验证通过时间 | - | R1 |
| 2 | store_detail.store.remit_pass_time | remitPassTime | - | 1 | 123123 | 账户验证通过时间 | - | R1 |
| 2 | store_detail.store.open_account_time | openAccountTime | - | 1 | 123123 | 变成已开户的时间 | - | R1 |
| 2 | store_detail.store.company_id | companyId | - | 1 | 0 | 门店的上级管理单元，0代表上级为总部 | - | - |
| 1 | store_detail.rel_shop_user | relShopUser | - | 5 | - | 关联抖店信息 | - | R1 |
| 2 | store_detail.rel_shop_user.id | id | - | 1 | 123 | 关联店铺ID | - | R1 |
| 2 | store_detail.rel_shop_user.shop_name | shop_name | - | 2 | 123 | 店铺名称 | - | R1 |
| 2 | store_detail.rel_shop_user.shop_charge_name | shop_charge_name | - | 2 | 123 | 商家负责人 | - | R1 |
| 2 | store_detail.rel_shop_user.toutiao_id | toutiao_id | - | 1 | 123 | uid | - | R1 |
| 2 | store_detail.rel_shop_user.ocean_id | ocean_id | - | 1 | 123 | 商业化id | - | R1 |
| 2 | store_detail.rel_shop_user.operate_status | operate_status | - | 7 | 0 | 营业状态，0正常营业 1停业整顿 | - | R1 |
| 2 | store_detail.rel_shop_user.biz_type | biz_type | - | 7 | 1 | 业务类型 0二类电商 1放心购 | - | R1 |
| 2 | store_detail.rel_shop_user.v_type | v_type | - | 7 | 0 | 资质类型 11个人 41 个体 0企业 | - | R1 |
| 2 | store_detail.rel_shop_user.shop_type | shop_type | - | 7 | 0 | 店铺类型 0普通,1专营,2专卖,3旗舰 | - | R1 |
| 1 | store_detail.poi_audit_info | poiAuditInfo | - | 5 | - | poi审核信息 | - | R1 |
| 2 | store_detail.poi_audit_info.poi_audit_id | poiAuditId | - | 2 | 123 | poi审核id | - | R1 |
| 2 | store_detail.poi_audit_info.poi_audit_state | poiAuditState | - | 1 | 1 | poi审核子状态：1审核中;2绑定成功;3驳回;4部分通过 | - | R1 |
| 2 | store_detail.poi_audit_info.store_id | storeId | - | 1 | 123 | 门店ID | - | R1 |
| 2 | store_detail.poi_audit_info.name | name | - | 2 | 123 | 门店名称 | - | R1 |
| 2 | store_detail.poi_audit_info.store_code | storeCode | - | 2 | 123 | 门店编码 | - | R1 |
| 2 | store_detail.poi_audit_info.longitude | longitude | - | 2 | 123 | 经度 | - | R1 |
| 2 | store_detail.poi_audit_info.latitude | latitude | - | 2 | 123 | 维度 | - | R1 |
| 2 | store_detail.poi_audit_info.province | province | - | 2 | 123 | 省 | - | R1 |
| 2 | store_detail.poi_audit_info.city | city | - | 2 | 123 | 市 | - | R1 |
| 2 | store_detail.poi_audit_info.district | district | - | 2 | 123 | 区 | - | R1 |
| 2 | store_detail.poi_audit_info.address | address | - | 2 | 123 | 详细地址 | - | R1 |
| 2 | store_detail.poi_audit_info.contact | contact | - | 2 | 123 | 电话 | - | R1 |
| 2 | store_detail.poi_audit_info.open_time | openTime | - | 5 | - | 营业时间 | - | R1 |
| 3 | store_detail.poi_audit_info.open_time.day_map | dayMap | - | 8 | [1] | 营业时间 | - | R1 |
| 3 | store_detail.poi_audit_info.open_time.custom | custom | - | 2 | 123 | 暂时不使用 | - | R1 |
| 2 | store_detail.poi_audit_info.reject_reason | rejectReason | - | 2 | 123 | 拒绝原因 | - | R1 |
| 2 | store_detail.poi_audit_info.town | town | - | 2 | 123 | 街道/镇 | - | R1 |
| 1 | store_detail.store_charge_info | storeChargeInfo | - | 5 | - | 负责人信息 | - | R1 |
| 2 | store_detail.store_charge_info.charge_name | chargeName | - | 2 | xxx | 负责人姓名 | - | R1 |
| 2 | store_detail.store_charge_info.charge_mobile | chargeMobile | - | 2 | 123123 | 负责人电话 | - | R1 |

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
ShopGetStoreDetailRequest request = new ShopGetStoreDetailRequest();
ShopGetStoreDetailParam param = request.getParam();
param.setStoreId(123L);
param.setIsNeedPoiAuditInfo(true);
param.setIsNeedRelShopUser(true);
param.setIsNeedChargeInfo(true);
ShopGetStoreDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopGetStoreDetailRequest();
$param = new ShopGetStoreDetailParam();
$request->setParam($param);
$param->store_id = 123;
$param->is_need_poi_audit_info = true;
$param->is_need_rel_shop_user = true;
$param->is_need_charge_info = true;
$response = $request->execute(accessToken);

```

### python

```python
request = ShopGetStoreDetailRequest()
param = request.getParams()
param.store_id = 123
param.is_need_poi_audit_info = true
param.is_need_rel_shop_user = true
param.is_need_charge_info = true
response = request.execute(accessToken)

```

### go

```go
request := shop_getStoreDetail_request.New()
param := request.GetParams()
param.StoreId = 123
param.IsNeedPoiAuditInfo = true
param.IsNeedRelShopUser = true
param.IsNeedChargeInfo = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopGetStoreDetailRequest();
var param = request.BuildParam();
param.StoreId = 123;
param.IsNeedPoiAuditInfo = true;
param.IsNeedRelShopUser = true;
param.IsNeedChargeInfo = true;
var response = request.Execute<ShopGetStoreDetailResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10 | 10:找不到门店 | 确认门店id是否有误 |
| 50002 | 业务处理失败 | isv.business-failed:1 | 参数异常 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:100 | 100:业务处理失败 | 稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
