# /afterSale/addOrderRemark

> 中文说明：店家给售后单添加备注  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/585>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/addOrderRemark |
| 中文名称 | 店家给售后单添加备注 |
| 文档目录 | 售后退款API |
| Article ID | 585 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2021/6/10 14:26:03 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

在售后详情页，店家在可以选择给售后单添加备注

## 权限包

- 订单 / 订单编辑（packageType=1）；适用应用类目：卡券商工具、COD服务、跨境供应链服务、跨境电商、售后管理、打单发货-微应用、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、商品供应链、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.addOrderRemark | 调用的API接口名称 | - | - |
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
| 0 | order_id | OrderId | false | 2 | 12345 | 订单ID，与售后单ID二选一传入 | - | - |
| 0 | after_sale_id | AfterSaleId | false | 2 | 12345 | 售后单ID，与订单ID二选一传入，二者均传入时售后单ID的优先级更高 | - | - |
| 0 | remark | Remark | true | 2 | "客户情绪较激动，需要立即处理" | 商家添加的备注信息 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/afterSale/addOrderRemark?app_key=your_appkey_here&method=afterSale.addOrderRemark&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/afterSale/addOrderRemark?app_key=your_appkey_here&method=afterSale.addOrderRemark&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AfterSaleAddOrderRemarkRequest request = new AfterSaleAddOrderRemarkRequest();
AfterSaleAddOrderRemarkParam param = request.getParam();
param.setOrderId("12345");
param.setAfterSaleId("12345");
param.setRemark("\"客户情绪较激动，需要立即处理\"");
AfterSaleAddOrderRemarkResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleAddOrderRemarkRequest();
$param = new AfterSaleAddOrderRemarkParam();
$request->setParam($param);
$param->order_id = "12345";
$param->after_sale_id = "12345";
$param->remark = "\"客户情绪较激动，需要立即处理\"";
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleAddOrderRemarkRequest()
param = request.getParams()
param.order_id = "12345"
param.after_sale_id = "12345"
param.remark = "\"客户情绪较激动，需要立即处理\""
response = request.execute(accessToken)

```

### go

```go
request := afterSale_addOrderRemark_request.New()
param := request.GetParams()
param.OrderId = "12345"
param.AfterSaleId = "12345"
param.Remark = "\"客户情绪较激动，需要立即处理\""
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleAddOrderRemarkRequest();
var param = request.BuildParam();
param.OrderId = "12345";
param.AfterSaleId = "12345";
param.Remark = "\"客户情绪较激动，需要立即处理\"";
var response = request.Execute<AfterSaleAddOrderRemarkResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10000 | 系统错误，请重试 | 系统错误，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:11000 | 未填写备注 | 请填写备注信息 |
| 50002 | 业务处理失败 | isv.business-failed:11003 | 该售后单不存在 | 请检查售后单信息 |
| 50002 | 业务处理失败 | isv.business-failed:12000 | 查询退款记录失败，请稍后重试 | 查询退款记录失败，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
