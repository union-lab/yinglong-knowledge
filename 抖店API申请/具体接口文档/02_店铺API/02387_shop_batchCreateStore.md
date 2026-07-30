# /shop/batchCreateStore

> 中文说明：批量创建门店  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2387>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/batchCreateStore |
| 中文名称 | 批量创建门店 |
| 文档目录 | 店铺API |
| Article ID | 2387 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/11/6 15:56:56 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20 |

## 使用说明

批量创建门店

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 抖店超市 / 门店管理（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.batchCreateStore | 调用的API接口名称 | - | - |
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
| 0 | store_list | storeList | true | 3 | - | 与createStore接口入参一致 | - | - |
| 1 | store_list.row_id | rowId | true | 99 | 1 | 标识这行数据 | - | - |
| 1 | store_list.name | name | true | 2 | 123 | 门店名称 | - | - |
| 1 | store_list.store_code | storeCode | true | 2 | 123 | 门店编码 | - | - |
| 1 | store_list.longitude | longitude | false | 2 | 123 | 经度 | - | - |
| 1 | store_list.latitude | latitude | false | 2 | 123 | 纬度 | - | - |
| 1 | store_list.province | province | false | 2 | 四川省 | 省份 | - | - |
| 1 | store_list.city | city | false | 2 | 成都市 | 市 | - | - |
| 1 | store_list.district | district | false | 2 | 武侯区 | 区 | - | - |
| 1 | store_list.address | address | false | 2 | xxx小区 | 详细地址 | - | - |
| 1 | store_list.contact | contact | false | 2 | 123 | 电话 | - | - |
| 1 | store_list.open_time | openTime | false | 5 | - | Key:用数字表示周几，例：1:周一、2:周一、5:周五、6:周六、7:周日。Value: 营业时间，例：“x-x”。x的区间：[00:00, 23:59]（24:00无效）。营业到次日举例："19:00-02:00"。完整举例(周3周4不营业)：{1:"12:00-16:00",2:"12:00-16:00",5:"19:00-02:00",6:"12:00-16:00",7:"12:00-16:00"} | - | - |
| 2 | store_list.open_time.day_map | dayMap | false | 8 | {<br>	"1": "11:00-02:00",<br>	"2": "11:00-02:00",<br>	"3": "11:00-02:00",<br>	"4": "11:00-02:00",<br>	"5": "11:00-02:00",<br>	"6": "11:00-02:00",<br>	"7": "11:00-02:00"<br>} | Key:用数字表示周几，例：1:周一、2:周一、5:周五、6:周六、7:周日。Value: 营业时间，例：“x-x”。x的区间：[00:00, 23:59]（24:00无效）。营业到次日举例："19:00-02:00"。完整举例(周3周4不营业)：{1:"12:00-16:00",2:"12:00-16:00",5:"19:00-02:00",6:"12:00-16:00",7:"12:00-16:00"} | - | - |
| 1 | store_list.company_id | parentShopId | false | 99 | 0 | 门店的上级管理单元，0代表门店上级为总部 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | result_list | resultList | - | 3 | - | 结果 | - | R1 |
| 1 | result_list.is_success | isSuccess | - | 4 | true | 是否成功 | - | R1 |
| 1 | result_list.msg | msg | - | 2 | invalid param | 错误描述 | - | R1 |
| 1 | result_list.store | store | - | 5 | - | 提交过来的信息 | - | R1 |
| 2 | result_list.store.row_id | rowId | - | 99 | - | - | - | R1 |
| 2 | result_list.store.name | name | - | 2 | - | - | - | R1 |
| 2 | result_list.store.rel_shop_id | relShopId | - | 99 | - | - | - | R1 |
| 2 | result_list.store.store_code | storeCode | - | 2 | - | - | - | R1 |
| 2 | result_list.store.longitude | longitude | - | 2 | - | - | - | R1 |
| 2 | result_list.store.latitude | latitude | - | 2 | - | - | - | R1 |
| 2 | result_list.store.province | province | - | 2 | - | - | - | R1 |
| 2 | result_list.store.city | city | - | 2 | - | - | - | R1 |
| 2 | result_list.store.district | district | - | 2 | - | - | - | R1 |
| 2 | result_list.store.address | address | - | 2 | - | - | - | R1 |
| 2 | result_list.store.contact | contact | - | 2 | - | - | - | R1 |
| 2 | result_list.store.open_time | openTime | - | 5 | - | - | - | R1 |
| 3 | result_list.store.open_time.day_map | dayMap | - | 8 | {<br>	"1": "11:00-02:00",<br>	"2": "11:00-02:00",<br>	"3": "11:00-02:00",<br>	"4": "11:00-02:00",<br>	"5": "11:00-02:00",<br>	"6": "11:00-02:00",<br>	"7": "11:00-02:00"<br>} | - | - | R1 |
| 3 | result_list.store.open_time.custom | custom | - | 2 | - | - | - | R1 |
| 2 | result_list.store.store_id | storeId | - | 99 | 123 | 创建成功的门店ID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shop/batchCreateStore?app_key=your_appkey_here&method=shop.batchCreateStore&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shop/batchCreateStore?app_key=your_appkey_here&method=shop.batchCreateStore&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ShopBatchCreateStoreRequest request = new ShopBatchCreateStoreRequest();
ShopBatchCreateStoreParam param = request.getParam();
ShopBatchCreateStoreResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopBatchCreateStoreRequest();
$param = new ShopBatchCreateStoreParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = ShopBatchCreateStoreRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := shop_batchCreateStore_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopBatchCreateStoreRequest();
var param = request.BuildParam();
var response = request.Execute<ShopBatchCreateStoreResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:16 | 16:关联的店铺没有绑定企业 | 绑定企业 |
| 50002 | 业务处理失败 | isv.business-failed:1 | 1:StoreList参数错误 | 请检查门店id |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
