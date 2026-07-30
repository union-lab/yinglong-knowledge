# /instantShopping/notifyPickingStatus

> 中文说明：回传商家拣货状态  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/6394>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /instantShopping/notifyPickingStatus |
| 中文名称 | 回传商家拣货状态 |
| 文档目录 | 物流发货API |
| Article ID | 6394 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2024/4/10 21:20:23 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

回传商家拣货状态

## 权限包

- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | instantShopping.notifyPickingStatus | 调用的API接口名称 | - | - |
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
| 0 | store_id | StoreId | true | 1 | 1111409547 | 门店ID | - | - |
| 0 | shop_order_id | ShopOrderId | true | 2 | 6917539978356459031 | 订单ID | - | - |
| 0 | notify_type | NotifyType | true | 1 | 2 | 拣货状态：目前仅支持2拣货完成 | - | - |
| 0 | update_time | UpdateTime | true | 1 | 1711012782 | 状态更新时间戳，十位时间戳 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
InstantShoppingNotifyPickingStatusRequest request = new InstantShoppingNotifyPickingStatusRequest();
InstantShoppingNotifyPickingStatusParam param = request.getParam();
param.setStoreId(1111409547L);
param.setShopOrderId("6917539978356459031");
param.setNotifyType(2L);
param.setUpdateTime(1711012782L);
InstantShoppingNotifyPickingStatusResponse response = request.execute(accessToken);

```

### php

```php
$request = new InstantShoppingNotifyPickingStatusRequest();
$param = new InstantShoppingNotifyPickingStatusParam();
$request->setParam($param);
$param->store_id = 1111409547;
$param->shop_order_id = "6917539978356459031";
$param->notify_type = 2;
$param->update_time = 1711012782;
$response = $request->execute(accessToken);

```

### python

```python
request = InstantShoppingNotifyPickingStatusRequest()
param = request.getParams()
param.store_id = 1111409547
param.shop_order_id = "6917539978356459031"
param.notify_type = 2
param.update_time = 1711012782
response = request.execute(accessToken)

```

### go

```go
request := instantShopping_notifyPickingStatus_request.New()
param := request.GetParams()
param.StoreId = 1111409547
param.ShopOrderId = "6917539978356459031"
param.NotifyType = 2
param.UpdateTime = 1711012782
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new InstantShoppingNotifyPickingStatusRequest();
var param = request.BuildParam();
param.StoreId = 1111409547;
param.ShopOrderId = "6917539978356459031";
param.NotifyType = 2;
param.UpdateTime = 1711012782;
var response = request.Execute<InstantShoppingNotifyPickingStatusResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:700026 | 700026:苹果仓发无需上报 | 700026:苹果仓发无需上报 |
| 50002 | 业务处理失败 | isv.business-failed:700002 | 700002:仅待发货、已发货订单可上传拣货完成 | 700002:仅待发货、已发货订单可上传拣货完成 |
| 50002 | 业务处理失败 | isv.business-failed:70011 | 70011:骑手已取货，无法操作备货完成 | 70011:骑手已取货，无法操作备货完成 |
| 50002 | 业务处理失败 | isv.business-failed:120002 | 120002:网络异常，请稍后重试 | 120002:网络异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:70008 | 70008:订单不存在 | 70008:订单不存在 |
| 50002 | 业务处理失败 | isv.business-failed:60101 | 60101:非本店铺订单 | 60101:非本店铺订单 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
