# /warehouse/createV2

> 中文说明：单个仓创建v2版本  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/2390>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/createV2 |
| 中文名称 | 单个仓创建v2版本 |
| 文档目录 | 库存API |
| Article ID | 2390 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/8/18 10:25:31 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

单个仓创建v2版本

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 库存 / 商家仓管理（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、AI智能客服-微应用、电商ERP、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.createV2 | 调用的API接口名称 | - | - |
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
| 0 | warehouse | warehouse | true | 5 | - | 仓相关信息 | - | - |
| 1 | warehouse.warehouse_location | warehouseLocation | true | 5 | - | 仓的地址编码 | - | - |
| 2 | warehouse.warehouse_location.address_id1 | addressId1 | true | 1 | 11 | 地址1级编码 | - | - |
| 2 | warehouse.warehouse_location.address_id2 | addressId2 | true | 1 | 110000 | 地址2级编码 | - | - |
| 2 | warehouse.warehouse_location.address_id3 | addressId3 | true | 1 | 110105 | 地址3级编码 | - | - |
| 2 | warehouse.warehouse_location.address_id4 | addressId4 | false | 1 | 110105023 | 地址4级编码 | - | - |
| 1 | warehouse.address_detail | addressDetail | true | 2 | 朝阳区东风乡将台洼村铁道路口西北 | 仓的地址详情 | - | - |
| 0 | out_warehouse_id | outWarehouseIdOpen | true | 2 | 123 | 外部仓ID | - | - |
| 0 | name | nameOpen | true | 2 | 测试仓 | 仓名称 | - | - |
| 0 | intro | introductionOpen | true | 2 | 介绍一下仓 | 仓介绍 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | warehouse_id | warehouseId | - | 2 | 7020436784400253228 | 内部仓id | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/createV2?app_key=your_appkey_here&method=warehouse.createV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/createV2?app_key=your_appkey_here&method=warehouse.createV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseCreateV2Request request = new WarehouseCreateV2Request();
WarehouseCreateV2Param param = request.getParam();
param.setOutWarehouseId("123");
param.setName("测试仓");
param.setIntro("介绍一下仓");
WarehouseCreateV2Response response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseCreateV2Request();
$param = new WarehouseCreateV2Param();
$request->setParam($param);
$param->out_warehouse_id = "123";
$param->name = "测试仓";
$param->intro = "介绍一下仓";
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseCreateV2Request()
param = request.getParams()
param.out_warehouse_id = "123"
param.name = "测试仓"
param.intro = "介绍一下仓"
response = request.execute(accessToken)

```

### go

```go
request := warehouse_createV2_request.New()
param := request.GetParams()
param.OutWarehouseId = "123"
param.Name = "测试仓"
param.Intro = "介绍一下仓"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseCreateV2Request();
var param = request.BuildParam();
param.OutWarehouseId = "123";
param.Name = "测试仓";
param.Intro = "介绍一下仓";
var response = request.Execute<WarehouseCreateV2Response>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2 | 参数错误 | 修改后重试 |
| 20000 | 系统错误 | isp.service-error:9999 | 系统错误 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
