# /order/addressConfirm

> 中文说明：买家地址变更确认  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1836>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/addressConfirm |
| 中文名称 | 买家地址变更确认 |
| 文档目录 | 订单API |
| Article ID | 1836 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2024/6/24 11:49:19 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

买家地址变更确认
卖家同意地址变更

## 权限包

- 订单 / 订单编辑（packageType=1）；适用应用类目：卡券商工具、COD服务、跨境供应链服务、跨境电商、售后管理、打单发货-微应用、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、商品供应链、电商ERP
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.addressConfirm | 调用的API接口名称 | - | - |
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
| 0 | order_id | ShopOrderId | true | 2 | 3539925204033339668 | 主订单id，注意请求时order/list或 order/detail中返回的主订单id带的‘A’需要截断掉 | - | - |
| 0 | is_approved | RejectCode | true | 99 | 0 | 0:同意; <br>拒绝需要传入以下参数： <br>1001:订单已进入拣货环节 <br>1002:订单已进入配货环节 <br>1003:订单已进入仓库环节<br>1004:订单已进入出库环节 <br>1005:订单已进入发货环节<br>300001:省级地址已变更，无法修改地址<br>300003:市级地址已变更，无法修改地址<br>300004:区级地址已变更，无法修改地址<br>300005:联系人已变更，无法修改地址 | - | - |

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
OrderAddressConfirmRequest request = new OrderAddressConfirmRequest();
OrderAddressConfirmParam param = request.getParam();
param.setOrderId("3539925204033339668");
param.setIsApproved(0L);
OrderAddressConfirmResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderAddressConfirmRequest();
$param = new OrderAddressConfirmParam();
$request->setParam($param);
$param->order_id = "3539925204033339668";
$param->is_approved = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderAddressConfirmRequest()
param = request.getParams()
param.order_id = "3539925204033339668"
param.is_approved = 0
response = request.execute(accessToken)

```

### go

```go
request := order_addressConfirm_request.New()
param := request.GetParams()
param.OrderId = "3539925204033339668"
param.IsApproved = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderAddressConfirmRequest();
var param = request.BuildParam();
param.OrderId = "3539925204033339668";
param.IsApproved = 0;
var response = request.Execute<OrderAddressConfirmResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:50042 | 该任务已经被取消:发起售后自动取消审核任务 | 请检查订单状态 |
| 50002 | 业务处理失败 | isv.business-failed:50041 | 该任务已经被驳回:订单已进入发货环节 | 请检查订单状态 |
| 50002 | 业务处理失败 | isv.business-failed:50040 | 该任务已经被通过 | 该任务已经被通过 |
| 40004 | 非法的参数 | isv.parameter-invalid:50039 | 该订单不存在修改地址审核记录 | 不存在审核记录，请检查 |
| 40004 | 非法的参数 | isv.parameter-invalid:50038 | 审核开关未打开 | 审核开关未打开，请检查 |
| 50002 | 业务处理失败 | isv.business-failed:50036 | 审核失败，当前app id无权审核用户的修改地址请求 | 审核失败，当前app id无权审核用户的修改地址请求 |
| 50002 | 业务处理失败 | isv.business-failed:20003 | 系统异常，请重试 | 系统异常，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:50001 | 50001:订单号不能为空 | 50001:订单号不能为空 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
