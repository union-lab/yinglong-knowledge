# /warehouse/edit

> 中文说明：编辑区域仓  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/1856>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/edit |
| 中文名称 | 编辑区域仓 |
| 文档目录 | 库存API |
| Article ID | 1856 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/8/17 21:50:14 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

编辑区域仓

## 权限包

- 库存 / 商家仓管理（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、AI智能客服-微应用、电商ERP、AI售后挽单
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.edit | 调用的API接口名称 | - | - |
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
| 0 | out_warehouse_id | outWarehouseId | true | 2 | abc | 外部仓库id | - | - |
| 0 | name | name | false | 2 | 仓名称示例 | 仓库名称 | - | - |
| 0 | intro | introduction | false | 2 | 仓介绍示例 | 仓库介绍 | - | - |
| 0 | address_id1 | addressId1 | false | 1 | 11 | 省地址编码 | - | - |
| 0 | address_id2 | addressId2 | false | 1 | 110000 | 市地址编码 | - | - |
| 0 | address_id3 | addressId3 | false | 1 | 110101 | 区地址编码 | - | - |
| 0 | address_id4 | addressId4 | false | 1 | 0 | 街道地址编码 | - | - |
| 0 | address_detail | addressDetail | false | 2 | xx消息xx号 | 详细地址 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | editResult | - | 4 | true | 修改结果 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/edit?app_key=your_appkey_here&method=warehouse.edit&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/edit?app_key=your_appkey_here&method=warehouse.edit&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseEditRequest request = new WarehouseEditRequest();
WarehouseEditParam param = request.getParam();
param.setOutWarehouseId("abc");
param.setName("仓名称示例");
param.setIntro("仓介绍示例");
param.setAddressId1(11L);
param.setAddressId2(110000L);
param.setAddressId3(110101L);
param.setAddressId4(0L);
param.setAddressDetail("xx消息xx号");
WarehouseEditResponse response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseEditRequest();
$param = new WarehouseEditParam();
$request->setParam($param);
$param->out_warehouse_id = "abc";
$param->name = "仓名称示例";
$param->intro = "仓介绍示例";
$param->address_id1 = 11;
$param->address_id2 = 110000;
$param->address_id3 = 110101;
$param->address_id4 = 0;
$param->address_detail = "xx消息xx号";
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseEditRequest()
param = request.getParams()
param.out_warehouse_id = "abc"
param.name = "仓名称示例"
param.intro = "仓介绍示例"
param.address_id1 = 11
param.address_id2 = 110000
param.address_id3 = 110101
param.address_id4 = 0
param.address_detail = "xx消息xx号"
response = request.execute(accessToken)

```

### go

```go
request := warehouse_edit_request.New()
param := request.GetParams()
param.OutWarehouseId = "abc"
param.Name = "仓名称示例"
param.Intro = "仓介绍示例"
param.AddressId1 = 11
param.AddressId2 = 110000
param.AddressId3 = 110101
param.AddressId4 = 0
param.AddressDetail = "xx消息xx号"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseEditRequest();
var param = request.BuildParam();
param.OutWarehouseId = "abc";
param.Name = "仓名称示例";
param.Intro = "仓介绍示例";
param.AddressId1 = 11;
param.AddressId2 = 110000;
param.AddressId3 = 110101;
param.AddressId4 = 0;
param.AddressDetail = "xx消息xx号";
var response = request.Execute<WarehouseEditResponse>(accessToken);

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

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
