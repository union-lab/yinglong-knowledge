# /warehouse/createBatch

> 中文说明：批量创建区域仓  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/1862>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/createBatch |
| 中文名称 | 批量创建区域仓 |
| 文档目录 | 库存API |
| Article ID | 1862 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/8/18 10:25:53 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

批量创建区域仓

## 权限包

- 库存 / 商家仓管理（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、AI智能客服-微应用、电商ERP、AI售后挽单
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.createBatch | 调用的API接口名称 | - | - |
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
| 0 | out_warehouse_list | warehouses | true | 3 | - | 外部仓信息列表 | - | - |
| 1 | out_warehouse_list.out_warehouse_id | outWarehouseId | true | 2 | abc | 外部仓库ID，一个店铺下，同一个外部ID只能创建一个仓库 | - | - |
| 1 | out_warehouse_list.name | name | true | 2 | 华北一仓 | 仓库名称 | - | - |
| 1 | out_warehouse_list.intro | introduction | true | 2 | 这是一家外部仓 | 仓库介绍 | - | - |
| 1 | out_warehouse_list.address_detail | addressDetail | false | 2 | xx区xx号 | 仓地址详细地址，苹果门店店铺、超市小时达店铺建仓必传 | - | - |
| 1 | out_warehouse_list.warehouse_location | warehouseLocation | false | 5 | - | 仓地址编码  苹果门店店铺、超市小时达店铺建仓必传 | - | - |
| 2 | out_warehouse_list.warehouse_location.address_id1 | addressId1 | false | 1 | 11 | 省地址编码 | - | - |
| 2 | out_warehouse_list.warehouse_location.address_id2 | addressId2 | false | 1 | 110000 | 市地址编码 | - | - |
| 2 | out_warehouse_list.warehouse_location.address_id3 | addressId3 | false | 1 | 110101 | 区地址编码 | - | - |
| 2 | out_warehouse_list.warehouse_location.address_id4 | addressId4 | false | 1 | 0 | 街道地址编码 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | resultMap | - | 8 | {         "qwb": true, // key是outWarehouseId         "qwb1": true // value代表成功/失败     }, | key是outWarehouseId,value代表成功/失败 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/createBatch?app_key=your_appkey_here&method=warehouse.createBatch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/createBatch?app_key=your_appkey_here&method=warehouse.createBatch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseCreateBatchRequest request = new WarehouseCreateBatchRequest();
WarehouseCreateBatchParam param = request.getParam();
param.setOutWarehouseList(-);
WarehouseCreateBatchResponse response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseCreateBatchRequest();
$param = new WarehouseCreateBatchParam();
$request->setParam($param);
$param->out_warehouse_list = -;
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseCreateBatchRequest()
param = request.getParams()
param.out_warehouse_list = -
response = request.execute(accessToken)

```

### go

```go
request := warehouse_createBatch_request.New()
param := request.GetParams()
param.OutWarehouseList = -
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseCreateBatchRequest();
var param = request.BuildParam();
param.OutWarehouseList = -;
var response = request.Execute<WarehouseCreateBatchResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2 | 仓库编码Z0010160524ZE02重复 | 请检查仓库信息 |
| 50002 | 业务处理失败 | isv.business-failed:1005 | 单次请求过于频繁，请稍后重试 | 请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
