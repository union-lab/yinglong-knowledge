# /address/list

> 中文说明：批量查询地址库列表接口  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/1435>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /address/list |
| 中文名称 | 批量查询地址库列表接口 |
| 文档目录 | 店铺API |
| Article ID | 1435 |
| 文档版本 | V5.01 |
| 官方更新时间 | 2025/3/17 15:00:20 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

分页获取商家地址库列表数据

## 权限包

- 店铺 / 商家地址列表查询（packageType=1）；适用应用类目：独立部署、COD服务、售后管理、打单发货-微应用、创新应用大赛_软件服务、厂商代发、云仓本地部署、仓储管理、商家后台系统、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、商品供应链、电商ERP
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | address.list | 调用的API接口名称 | - | - |
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
| 0 | shop_id | ShopId | false | 99 | 123 | 【已废弃】店铺id | - | - |
| 0 | page_size | PageSize | true | 99 | 10 | 翻页每页数量，默认10 | - | - |
| 0 | page_no | PageNo | true | 99 | 1 | 翻页页数，从1开始 | - | - |
| 0 | order_by | OrderBy | true | 2 | asc/desc | 排序方式支持asc/desc | - | - |
| 0 | order_field | OrderField | true | 2 | create_time/update_time | 排序字段；create_time-创建时间排序，update_time-更新时间排序； | - | - |
| 0 | store_id | StoreId | false | 99 | 123 | 门店ID，抖超小时达业务使用传入后只获取该门店下地址列表； | - | - |
| 0 | is_send_home_open_req | IsSendHomeOpenReq | false | 4 | false | 大盘传false，即时零售商家必传true | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | Total | - | 99 | 10 | 地址总数 | 29 | R1 |
| 0 | page_size | PageSize | - | 99 | 1 | 页码 | 29 | R1 |
| 0 | page_no | PageNo | - | 99 | 10 | 每页数量 | 29 | R1 |
| 0 | address_list | AddressList | - | 3 | - | 地址列表 | - | R1 |
| 1 | address_list.biz_type | BizType | - | 99 | 1 | 即时零售商家：biz_type = 2代表发货仓地址，biz_type = 3代表自建地址 | - | - |
| 1 | address_list.biz_id | BizId | - | 99 | 123 | 业务id<br>即时零售商家：如果biz_type = 2则是发货仓id，如果biz_type = 3则是门店id | - | - |
| 1 | address_list.common_phone | CommonPhone | - | 5 | - | 普通座机 | - | R1 |
| 2 | address_list.common_phone.area_num | AreaNum | - | 2 | 0635 | 区号 | - | - |
| 2 | address_list.common_phone.main_num | MainNum | - | 2 | 5781308 | 主机号 | - | - |
| 2 | address_list.common_phone.auxiliary_num | AuxiliaryNum | - | 2 | 1111 | 分机号 | - | - |
| 2 | address_list.common_phone.num | Num | - | 2 | 0635-5781308-1111 | 拼接之后的联系方式; | - | - |
| 1 | address_list.company_phone | CompanyPhone | - | 5 | - | 企业座机信息 | - | R1 |
| 2 | address_list.company_phone.num | Num | - | 2 | 40088881111234 | 拼接之后的联系方式; | - | - |
| 2 | address_list.company_phone.phone_num | PhoneNum | - | 2 | 40088881111234 | 联系方式号码; | - | - |
| 1 | address_list.link_type | LinkType | - | 99 | 1 | 联系方式类型;0-手机，1-普通座机，2-企业座机 | - | - |
| 1 | address_list.phone | Phone | - | 2 | 13288889999 | 手机号，商家后台填写的手机号; | - | - |
| 1 | address_list.mobile | Mobile | - | 2 | 0635-5781308 | 默认联系方式，如果是手机，这里展示手机号；如果默认联系方式选择固定电话，这里是固定电话; | 28 | - |
| 1 | address_list.address_id | Id | - | 99 | 1 | 地址库id | 102 | R1 |
| 1 | address_list.reciever_name | UserName | - | 2 | 张三 | 收/发件人 | 102 | R1 |
| 1 | address_list.is_default | IsDefault | - | 99 | 1-是；0-否 | 是否为退货默认 | 102 | R1 |
| 1 | address_list.is_send_default | IsSendDefault | - | 99 | 1-是；0-否 | 是否为发货默认 | 102 | R1 |
| 1 | address_list.create_time | CreateTime | - | 2 | "1622103276" | 创建时间，时间戳，秒 | 102 | R1 |
| 1 | address_list.update_time | UpdateTime | - | 2 | "1622103276" | 更新时间，时间戳，秒 | 102 | R1 |
| 1 | address_list.receiver_provinc | ProvinceName | - | 2 | 北京市 | 收件人省份 | 102 | R1 |
| 1 | address_list.receiver_city | CityName | - | 2 | 北京 | 收件人城市 | 102 | R1 |
| 1 | address_list.receiver_district | TownName | - | 2 | 海淀区 | 收件人地区 | 102 | R1 |
| 1 | address_list.receiver_detail | Detail | - | 2 | xxxx | 收件人详情地址 | 102 | R1 |
| 1 | address_list.receiver_street | StreetName | - | 2 | 丹棱街 | 收件人街道 | 102 | R1 |
| 1 | address_list.remark | AfterSaleNote | - | 2 | 请发顺丰快递 | 地址备注信息 | 102 | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/address/list?app_key=your_appkey_here&method=address.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/address/list?app_key=your_appkey_here&method=address.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AddressListRequest request = new AddressListRequest();
AddressListParam param = request.getParam();
param.setShopId(123L);
param.setPageSize(10L);
param.setPageNo(1L);
param.setOrderBy("asc/desc");
param.setOrderField("create_time/update_time");
param.setStoreId(123L);
param.setIsSendHomeOpenReq(false);
AddressListResponse response = request.execute(accessToken);

```

### php

```php
$request = new AddressListRequest();
$param = new AddressListParam();
$request->setParam($param);
$param->shop_id = 123;
$param->page_size = 10;
$param->page_no = 1;
$param->order_by = "asc/desc";
$param->order_field = "create_time/update_time";
$param->store_id = 123;
$param->is_send_home_open_req = false;
$response = $request->execute(accessToken);

```

### python

```python
request = AddressListRequest()
param = request.getParams()
param.shop_id = 123
param.page_size = 10
param.page_no = 1
param.order_by = "asc/desc"
param.order_field = "create_time/update_time"
param.store_id = 123
param.is_send_home_open_req = false
response = request.execute(accessToken)

```

### go

```go
request := address_list_request.New()
param := request.GetParams()
param.ShopId = 123
param.PageSize = 10
param.PageNo = 1
param.OrderBy = "asc/desc"
param.OrderField = "create_time/update_time"
param.StoreId = 123
param.IsSendHomeOpenReq = false
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AddressListRequest();
var param = request.BuildParam();
param.ShopId = 123;
param.PageSize = 10;
param.PageNo = 1;
param.OrderBy = "asc/desc";
param.OrderField = "create_time/update_time";
param.StoreId = 123;
param.IsSendHomeOpenReq = false;
var response = request.Execute<AddressListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:5001 | 请输入正确的排序方式 | 请输入正确参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
