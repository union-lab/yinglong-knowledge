# /warehouse/setPriority

> 中文说明：  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/1863>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/setPriority |
| 中文名称 | - |
| 文档目录 | 库存API |
| Article ID | 1863 |
| 文档版本 | - |
| 官方更新时间 | 2020/11/29 14:48:36 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

设置指定地址下的仓的优先级

## 权限包

- 库存 / 商家仓管理（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、AI智能客服-微应用、电商ERP、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.setPriority | 调用的API接口名称 | - | - |
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
| 0 | addr | address | true | 5 | - | 配送地址 | - | - |
| 1 | addr.addr_id1 | addressId1 | true | 1 | 100 | 一级地址id | - | - |
| 1 | addr.addr_id2 | addressId2 | false | 1 | 100100 | 二级地址id | - | - |
| 1 | addr.addr_id3 | addressId3 | false | 1 | 100110 | 三级地址id | - | - |
| 1 | addr.addr_id4 | addressId4 | false | 1 | 100111 | 四级地址id | - | - |
| 0 | priorities | outWarehouseIdPriorities | true | 8 | {"123213":0,"123214":1} | 前面是out_warehouse_id，后面是仓优先级 仓优先级，0-5，0优先级最高，5最低 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/setPriority?app_key=your_appkey_here&method=warehouse.setPriority&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/setPriority?app_key=your_appkey_here&method=warehouse.setPriority&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseSetPriorityRequest request = new WarehouseSetPriorityRequest();
WarehouseSetPriorityParam param = request.getParam();
Addr addr = new Addr();
param.setAddr(addr);
addr.setAddrId1(100L);
addr.setAddrId2(100100L);
addr.setAddrId3(100110L);
addr.setAddrId4(100111L);
param.setPriorities({"123213":0,"123214":1});
WarehouseSetPriorityResponse response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseSetPriorityRequest();
$param = new WarehouseSetPriorityParam();
$request->setParam($param);
$addr = new Addr();
$param->addr = $addr;
$addr->addr_id1 = 100;
$addr->addr_id2 = 100100;
$addr->addr_id3 = 100110;
$addr->addr_id4 = 100111;
$param->priorities = {"123213":0,"123214":1};
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseSetPriorityRequest()
param = request.getParams()
addr = Addr()
param.addr = addr
addr.addr_id1 = 100
addr.addr_id2 = 100100
addr.addr_id3 = 100110
addr.addr_id4 = 100111
param.priorities = {"123213":0,"123214":1}
response = request.execute(accessToken)

```

### go

```go
request := warehouse_setPriority_request.New()
param := request.GetParams()
addr := new(Addr)
param.Addr = addr
addr.AddrId1 = 100
addr.AddrId2 = 100100
addr.AddrId3 = 100110
addr.AddrId4 = 100111
param.Priorities = {"123213":0,"123214":1}
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseSetPriorityRequest();
var param = request.BuildParam();
var addr = new Addr();
param.Addr = addr;
addr.AddrId1 = 100;
addr.AddrId2 = 100100;
addr.AddrId3 = 100110;
addr.AddrId4 = 100111;
param.Priorities = {"123213":0,"123214":1};
var response = request.Execute<WarehouseSetPriorityResponse>(accessToken);

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
