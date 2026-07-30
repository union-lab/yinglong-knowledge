# /warehouse/info

> 中文说明：查询区域仓  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/1857>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/info |
| 中文名称 | 查询区域仓 |
| 文档目录 | 库存API |
| Article ID | 1857 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/8/18 11:43:43 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查询区域仓

## 权限包

- 库存 / 商家仓管理（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、AI智能客服-微应用、电商ERP、AI售后挽单
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.info | 调用的API接口名称 | - | - |
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
| 0 | out_warehouse_id | outWarehouseId | true | 2 | ABC | 仓库编码 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | warehouse | - | 5 | - | 仓库信息 | - | - |
| 1 | data.warehouse_id | warehouseId | - | 1 | 6152361283123 | 仓库id | - | R1 |
| 1 | data.out_warehouse_id | outWarehouseId | - | 2 | ABC | 仓库外部id | - | R1 |
| 1 | data.name | name | - | 2 | 名称测试 | 仓库名称 | - | R1 |
| 1 | data.intro | introduction | - | 2 | 介绍测试 | 仓库介绍 | - | R1 |
| 1 | data.addr | addresses | - | 3 | - | 覆盖区域列表 | - | - |
| 2 | data.addr.addr_id1 | addressId1 | - | 1 | 1 | 一级地址id | - | R1 |
| 2 | data.addr.addr_id2 | addressId2 | - | 1 | 2 | 二级地址id | - | R1 |
| 2 | data.addr.addr_id3 | addressId3 | - | 1 | 3 | 三级地址id | - | R1 |
| 2 | data.addr.addr_id4 | addressId4 | - | 1 | 4 | 四级地址id | - | R1 |
| 2 | data.addr.update_time | updateTime | - | 1 | 1624245280 | 地址更新时间 | - | R1 |
| 2 | data.addr.create_time | createTime | - | 1 | 1624245280 | 地址创建时间 | - | R1 |
| 1 | data.update_time | updateTime | - | 1 | 1624245280 | 更新时间 | - | R1 |
| 1 | data.create_time | createTime | - | 1 | 1624245280 | 创建时间 | - | R1 |
| 1 | data.shop_id | shopId | - | 1 | 95250 | 店铺id | - | R1 |
| 1 | data.warehouse_location | warehouseLocation | - | 5 | - | 仓库地址 | - | R1 |
| 2 | data.warehouse_location.address_id1 | addressId1 | - | 1 | 11 | 省地址编码 | - | R1 |
| 2 | data.warehouse_location.address_id2 | addressId2 | - | 1 | 110000 | 市地址编码 | - | R1 |
| 2 | data.warehouse_location.address_id3 | addressId3 | - | 1 | 110101 | 区地址编码 | - | R1 |
| 2 | data.warehouse_location.address_id4 | addressId4 | - | 1 | 0 | 街道地址编码 | - | R1 |
| 2 | data.warehouse_location.address_name1 | addressName1 | - | 2 | 北京市 | 省地址中文 | - | R1 |
| 2 | data.warehouse_location.address_name2 | addressName2 | - | 2 | 北京市 | 市地址中文 | - | R1 |
| 2 | data.warehouse_location.address_name3 | addressName3 | - | 2 | 东城区 | 街道地址中文 | - | R1 |
| 2 | data.warehouse_location.address_name4 | addressName4 | - | 2 | "" | 街道地址中文 | - | R1 |
| 1 | data.address_detail | addressDetail | - | 2 | "" | 详细地址 | - | R1 |
| 1 | data.out_fence_ids | OutFenceIds | - | 3 | ["1", "2"] | 外部围栏ID列表 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/info?app_key=your_appkey_here&method=warehouse.info&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/info?app_key=your_appkey_here&method=warehouse.info&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseInfoRequest request = new WarehouseInfoRequest();
WarehouseInfoParam param = request.getParam();
param.setOutWarehouseId("ABC");
WarehouseInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseInfoRequest();
$param = new WarehouseInfoParam();
$request->setParam($param);
$param->out_warehouse_id = "ABC";
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseInfoRequest()
param = request.getParams()
param.out_warehouse_id = "ABC"
response = request.execute(accessToken)

```

### go

```go
request := warehouse_info_request.New()
param := request.GetParams()
param.OutWarehouseId = "ABC"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseInfoRequest();
var param = request.BuildParam();
param.OutWarehouseId = "ABC";
var response = request.Execute<WarehouseInfoResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:20002 | 仓库不存在 | 仓库不存在,请检查信息 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
