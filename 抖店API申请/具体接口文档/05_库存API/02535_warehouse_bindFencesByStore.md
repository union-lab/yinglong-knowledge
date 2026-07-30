# /warehouse/bindFencesByStore

> 中文说明：绑定门店和电子围栏  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/2535>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/bindFencesByStore |
| 中文名称 | 绑定门店和电子围栏 |
| 文档目录 | 库存API |
| Article ID | 2535 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/12/17 12:12:28 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

可以直接通过门店绑定电子围栏，不需要先绑定门店和仓，再绑定仓和电子围栏

## 权限包

- 抖店超市 / 门店管理（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 到家开放 / 电子围栏（外卖）（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.bindFencesByStore | 调用的API接口名称 | - | - |
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
| 0 | store_id | storeId | true | 99 | 11114442321 | 门店id | - | - |
| 0 | add_out_fence_ids | addOutFenceIds | true | 3 | fence_id1,fence_id3 | 要添加的外部围栏id列表 | - | - |
| 0 | auto_opt | AutoOpt | false | 4 | false | 是否允许平台自动处理，默认不处理 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/bindFencesByStore?app_key=your_appkey_here&method=warehouse.bindFencesByStore&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/bindFencesByStore?app_key=your_appkey_here&method=warehouse.bindFencesByStore&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseBindFencesByStoreRequest request = new WarehouseBindFencesByStoreRequest();
WarehouseBindFencesByStoreParam param = request.getParam();
param.setStoreId(11114442321L);
param.setAddOutFenceIds(fence_id1,fence_id3);
param.setAutoOpt(false);
WarehouseBindFencesByStoreResponse response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseBindFencesByStoreRequest();
$param = new WarehouseBindFencesByStoreParam();
$request->setParam($param);
$param->store_id = 11114442321;
$param->add_out_fence_ids = fence_id1,fence_id3;
$param->auto_opt = false;
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseBindFencesByStoreRequest()
param = request.getParams()
param.store_id = 11114442321
param.add_out_fence_ids = fence_id1,fence_id3
param.auto_opt = false
response = request.execute(accessToken)

```

### go

```go
request := warehouse_bindFencesByStore_request.New()
param := request.GetParams()
param.StoreId = 11114442321
param.AddOutFenceIds = fence_id1,fence_id3
param.AutoOpt = false
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseBindFencesByStoreRequest();
var param = request.BuildParam();
param.StoreId = 11114442321;
param.AddOutFenceIds = fence_id1,fence_id3;
param.AutoOpt = false;
var response = request.Execute<WarehouseBindFencesByStoreResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2 | 参数错误 | 检查参数 |
| 20000 | 系统错误 | isp.service-error:9999 | 系统错误，请重试 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:100010 | 该仓已绑定平台配送的围栏，不允许商家操作自配围栏 | 检查数据 |
| 50002 | 业务处理失败 | isv.business-failed:1009 | 围栏距离门店位置太远，要求围栏必须在门店50000 米内 | 检查数据 |
| 50002 | 业务处理失败 | isv.business-failed:20004 | 查询门店信息失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:2122 | 参数错误，请检查参数 | 只允许传入一个围栏，请检查 |
| 20000 | 系统错误 | isp.service-error:2129999 | 系统错误请重试 | 重试 |
| 20000 | 系统错误 | isp.service-error:20002 | 系统错误 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:2121006 | 不在系统约束的最大范围内 | 缩小围栏 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
