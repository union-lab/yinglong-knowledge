# /instantShopping/cancelDelivery

> 中文说明：平台运力取消  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/4778>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /instantShopping/cancelDelivery |
| 中文名称 | 平台运力取消 |
| 文档目录 | 物流发货API |
| Article ID | 4778 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2023/9/20 18:07:20 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

商家取消某一订单的配送任务。

## 权限包

- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 到家开放 / 平台配送（外卖）（packageType=1）；适用应用类目：到家外卖商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | instantShopping.cancelDelivery | 调用的API接口名称 | - | - |
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
| 0 | shop_order_id | ShopOrderId | true | 2 | 6917539978356459031 | 抖音电商shop order单id | - | - |
| 0 | store_id | StoreId | true | 1 | 1347832 | 门店id | - | - |
| 0 | cancel_code | CancelCode | true | 1 | 201 | 取消原因，详见附录F01 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | cancel_fee | CancelFee | - | 1 | 100 | 取消价格，单位分 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.comcrossborder/msg/push?app_key=your_appkey_here&method=crossborder.msg.push&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.comcrossborder/msg/push?app_key=your_appkey_here&method=crossborder.msg.push&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
InstantShoppingCancelDeliveryRequest request = new InstantShoppingCancelDeliveryRequest();
InstantShoppingCancelDeliveryParam param = request.getParam();
param.setShopOrderId("6917539978356459031");
param.setStoreId(1347832L);
param.setCancelCode(201L);
InstantShoppingCancelDeliveryResponse response = request.execute(accessToken);

```

### php

```php
$request = new InstantShoppingCancelDeliveryRequest();
$param = new InstantShoppingCancelDeliveryParam();
$request->setParam($param);
$param->shop_order_id = "6917539978356459031";
$param->store_id = 1347832;
$param->cancel_code = 201;
$response = $request->execute(accessToken);

```

### python

```python
request = InstantShoppingCancelDeliveryRequest()
param = request.getParams()
param.shop_order_id = "6917539978356459031"
param.store_id = 1347832
param.cancel_code = 201
response = request.execute(accessToken)

```

### go

```go
request := instantShopping_cancelDelivery_request.New()
param := request.GetParams()
param.ShopOrderId = "6917539978356459031"
param.StoreId = 1347832
param.CancelCode = 201
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new InstantShoppingCancelDeliveryRequest();
var param = request.BuildParam();
param.ShopOrderId = "6917539978356459031";
param.StoreId = 1347832;
param.CancelCode = 201;
var response = request.Execute<InstantShoppingCancelDeliveryResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:310000 | 参数非法 | 参数非法，请检查传入的参数 |
| 50002 | 业务处理失败 | isv.business-failed:120048 | 取消运力失败，请稍后重试 | 取消运力失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:700002 | 发货订单包含非本门店订单，请重试 | 发货订单包含非本门店订单，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:120041 | 订单当前状态无法取消运力 | 订单当前状态无法取消运力 |
| 40004 | 非法的参数 | isv.parameter-invalid:1000001 | 参数非法 | 参数非法 |
| 40002 | 缺少必选参数 | isv.missing-parameter:40013 | 订单不能为空 | 订单不能为空 |
| 50002 | 业务处理失败 | isv.business-failed:20111 | 系统繁忙，请稍后重试 | 订单查询失败 |
| 50002 | 业务处理失败 | isv.business-failed:20112 | 系统繁忙，请稍后重试 | 门店信息获取失败 |
| 50002 | 业务处理失败 | isv.business-failed:20113 | 系统繁忙，请稍后重试 | 执行单不存在 |
| 50002 | 业务处理失败 | isv.business-failed:20200 | 系统繁忙，请稍后重试 | 履约查询失败 |
| 50002 | 业务处理失败 | isv.business-failed:50010 | 不存在配送任务 | 不存在配送任务 |
| 50002 | 业务处理失败 | isv.business-failed:50011 | 当前任务不允许取消，请确认运单状态 | 当前任务不允许取消，请确认运单状态 |
| 50002 | 业务处理失败 | isv.business-failed:50112 | 非本店铺订单，取消运力失败 | 非本店铺订单，取消运力失败 |
| 50002 | 业务处理失败 | isv.business-failed:50311 | 50311:订单当前状态无法取消运力 | 50311:订单当前状态无法取消运力 |
| 50002 | 业务处理失败 | isv.business-failed:20212 | 20212:取消运力失败，请稍后重试 | 20212:取消运力失败，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:507 | 507:请求处理中，请稍后重试 | 507:请求处理中，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
