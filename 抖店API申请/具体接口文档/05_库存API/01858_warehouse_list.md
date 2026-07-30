# /warehouse/list

> 中文说明：批量查询区域仓  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/1858>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/list |
| 中文名称 | 批量查询区域仓 |
| 文档目录 | 库存API |
| Article ID | 1858 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/8/18 10:26:09 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

批量查询区域仓

## 权限包

- 库存 / 商家仓管理（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、AI智能客服-微应用、电商ERP、AI售后挽单
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 抖店超市 / 门店仓管理（packageType=1）；适用应用类目：即时零售商品服务、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.list | 调用的API接口名称 | - | - |
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
| 0 | out_warehouse_id | outWarehouseId | false | 2 | abc | 外部仓库ID | - | - |
| 0 | warehouse_name | warehouseName | false | 2 | 仓名称示例 | 仓库名称 | - | - |
| 0 | addr | address | false | 5 | - | 仓库覆盖地址 | - | - |
| 1 | addr.addr_id1 | addressId1 | true | 1 | 1 | 一级地址 | - | - |
| 1 | addr.addr_id2 | addressId2 | false | 1 | 2 | 二级地址 | - | - |
| 1 | addr.addr_id3 | addressId3 | false | 1 | 3 | 三级地址 | - | - |
| 1 | addr.addr_id4 | addressId4 | false | 1 | 4 | 四级地址 | - | - |
| 0 | out_warehouse_ids | outWarehouseIds | false | 3 | ["1596011622", "1596011760"] | 外部仓库ID列表 | - | - |
| 0 | order_by | orderBy | false | 2 | - | 排序方式，可选create_time、update_time | - | - |
| 0 | rank | rank | false | 2 | desc | 顺序，可选desc、asc，与order_by同时生效 | - | - |
| 0 | page | pageOpen | true | 1 | 0 | 页码，从0开始，最大到100 | - | - |
| 0 | size | pageSizeOpen | true | 1 | 10 | 每页数量，最大100，超过100会限制到100 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | warehouses | warehouseList | - | 3 | - | 仓库信息 | - | - |
| 1 | warehouses.warehouse_id | warehouseId | - | 1 | 6853386941874864391 | 仓库id | - | R1 |
| 1 | warehouses.name | name | - | 2 | 名字 | 仓库名字 | - | R1 |
| 1 | warehouses.intro | introduction | - | 2 | 介绍 | 仓库介绍 | - | R1 |
| 1 | warehouses.update_time | updateTime | - | 1 | 1623918481 | 更新时间 | - | R1 |
| 1 | warehouses.create_time | createTime | - | 1 | 1623918481 | 创建时间 | - | R1 |
| 1 | warehouses.out_warehouse_id | outWarehouseId | - | 2 | ABC | 仓库外部id | - | R1 |
| 1 | warehouses.addr | addresses | - | 3 | - | 仓库覆盖范围列表 | - | - |
| 2 | warehouses.addr.addr_id1 | addressId1 | - | 1 | 100 | 一级地址id | - | R1 |
| 2 | warehouses.addr.addr_id2 | addressId2 | - | 1 | 100100 | 二级地址id | - | R1 |
| 2 | warehouses.addr.addr_id3 | addressId3 | - | 1 | 100110 | 三级地址id | - | R1 |
| 2 | warehouses.addr.addr_id4 | addressId4 | - | 1 | 100111 | 四级地址id | - | R1 |
| 2 | warehouses.addr.update_time | updateTime | - | 1 | 1623918481 | 更新时间 | - | R1 |
| 2 | warehouses.addr.create_time | createTime | - | 1 | 1623918481 | 创建时间 | - | R1 |
| 1 | warehouses.shop_id | shopId | - | 1 | 123456 | 店铺id | - | R1 |
| 1 | warehouses.out_fence_ids | OutFenceIds | - | 3 | fence01 | 外部电子围栏id列表 | - | R1 |
| 1 | warehouses.address_detail | addressDetail | - | 2 | xx小区xx号 | 仓的详细地址 | - | R1 |
| 1 | warehouses.warehouse_location | warehouseLocation | - | 5 | - | 仓的地址编码 | - | R1 |
| 2 | warehouses.warehouse_location.address_id1 | addressId1 | - | 1 | 11 | 省地址编码 | - | R1 |
| 2 | warehouses.warehouse_location.address_id2 | addressId2 | - | 1 | 110000 | 市地址编码 | - | R1 |
| 2 | warehouses.warehouse_location.address_id3 | addressId3 | - | 1 | 110101 | 区地址编码 | - | R1 |
| 2 | warehouses.warehouse_location.address_id4 | addressId4 | - | 1 | 0 | 街道地址编码 | - | R1 |
| 0 | total | total | - | 1 | 3 | 总数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/list?app_key=your_appkey_here&method=warehouse.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/list?app_key=your_appkey_here&method=warehouse.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseListRequest request = new WarehouseListRequest();
WarehouseListParam param = request.getParam();
Addr addr = new Addr();
param.setAddr(addr);
param.setOutWarehouseId("abc");
param.setWarehouseName("仓名称示例");
addr.setAddrId1(1L);
addr.setAddrId2(2L);
addr.setAddrId3(3L);
addr.setAddrId4(4L);
param.setOutWarehouseIds(["1596011622", "1596011760"]);
param.setOrderBy("-");
param.setRank("desc");
param.setPage(0L);
param.setSize(10L);
WarehouseListResponse response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseListRequest();
$param = new WarehouseListParam();
$request->setParam($param);
$addr = new Addr();
$param->addr = $addr;
$param->out_warehouse_id = "abc";
$param->warehouse_name = "仓名称示例";
$addr->addr_id1 = 1;
$addr->addr_id2 = 2;
$addr->addr_id3 = 3;
$addr->addr_id4 = 4;
$param->out_warehouse_ids = ["1596011622", "1596011760"];
$param->order_by = "-";
$param->rank = "desc";
$param->page = 0;
$param->size = 10;
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseListRequest()
param = request.getParams()
addr = Addr()
param.addr = addr
param.out_warehouse_id = "abc"
param.warehouse_name = "仓名称示例"
addr.addr_id1 = 1
addr.addr_id2 = 2
addr.addr_id3 = 3
addr.addr_id4 = 4
param.out_warehouse_ids = ["1596011622", "1596011760"]
param.order_by = "-"
param.rank = "desc"
param.page = 0
param.size = 10
response = request.execute(accessToken)

```

### go

```go
request := warehouse_list_request.New()
param := request.GetParams()
addr := new(Addr)
param.Addr = addr
param.OutWarehouseId = "abc"
param.WarehouseName = "仓名称示例"
addr.AddrId1 = 1
addr.AddrId2 = 2
addr.AddrId3 = 3
addr.AddrId4 = 4
param.OutWarehouseIds = ["1596011622", "1596011760"]
param.OrderBy = "-"
param.Rank = "desc"
param.Page = 0
param.Size = 10
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseListRequest();
var param = request.BuildParam();
var addr = new Addr();
param.Addr = addr;
param.OutWarehouseId = "abc";
param.WarehouseName = "仓名称示例";
addr.AddrId1 = 1;
addr.AddrId2 = 2;
addr.AddrId3 = 3;
addr.AddrId4 = 4;
param.OutWarehouseIds = ["1596011622", "1596011760"];
param.OrderBy = "-";
param.Rank = "desc";
param.Page = 0;
param.Size = 10;
var response = request.Execute<WarehouseListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2 | 2:参数错误,OrderBy格式不正确 | 调整请求 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
