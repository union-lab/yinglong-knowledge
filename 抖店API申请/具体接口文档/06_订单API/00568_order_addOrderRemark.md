# /order/addOrderRemark

> 中文说明：为商家提供订单备注接口  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/568>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/addOrderRemark |
| 中文名称 | 为商家提供订单备注接口 |
| 文档目录 | 订单API |
| Article ID | 568 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2024/8/15 20:15:57 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 800 |

## 使用说明

为商家提供订单备注接口

## 权限包

- 订单 / 订单备注（packageType=1）；适用应用类目：卡券商工具、COD服务、跨境供应链服务、跨境电商、小票打印服务、售后管理、任务玩法、商家后台系统、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、互动营销定制、短信营销、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单、智能外呼
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电
- 即时零售 / 订单管理（即时零售）（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 开放平台 / 盲盒互动（服务商）（packageType=1）；适用应用类目：盲盒互动
- 虚拟业务 / 虚拟充值（packageType=1）；适用应用类目：商家后台系统、虚拟充值

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.addOrderRemark | 调用的API接口名称 | - | - |
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
| 0 | order_id | OrderId | true | 2 | 6496679971677798670 | 店铺订单ID。 | - | - |
| 0 | remark | Remark | true | 2 | 这是具体的备注内容 | 备注内容，必填选项。如果不填会导致订单的备注被空值覆盖，最大不得超过500个字符。 | - | - |
| 0 | is_add_star | IsAddStar | false | 2 | true | 是否加旗标，不填则默认为false，不会修改旗帜颜色。 is_add_star=true，需要加旗帜或者覆盖原来的旗帜颜色；is_add_star=false，不添加旗帜，不会覆盖原来的旗帜颜色。 | - | - |
| 0 | star | Star | false | 2 | 2 | 标星等级，范围0～5 0为灰色旗标，5为红色旗标，数字越大颜色越深 0灰 1紫 2青 3绿 4橙 5红 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/addOrderRemark?app_key=your_appkey_here&method=order.addOrderRemark&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/addOrderRemark?app_key=your_appkey_here&method=order.addOrderRemark&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderAddOrderRemarkRequest request = new OrderAddOrderRemarkRequest();
OrderAddOrderRemarkParam param = request.getParam();
param.setOrderId("6496679971677798670");
param.setRemark("这是具体的备注内容");
param.setIsAddStar("true");
param.setStar("2");
OrderAddOrderRemarkResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderAddOrderRemarkRequest();
$param = new OrderAddOrderRemarkParam();
$request->setParam($param);
$param->order_id = "6496679971677798670";
$param->remark = "这是具体的备注内容";
$param->is_add_star = "true";
$param->star = "2";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderAddOrderRemarkRequest()
param = request.getParams()
param.order_id = "6496679971677798670"
param.remark = "这是具体的备注内容"
param.is_add_star = "true"
param.star = "2"
response = request.execute(accessToken)

```

### go

```go
request := order_addOrderRemark_request.New()
param := request.GetParams()
param.OrderId = "6496679971677798670"
param.Remark = "这是具体的备注内容"
param.IsAddStar = "true"
param.Star = "2"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderAddOrderRemarkRequest();
var param = request.BuildParam();
param.OrderId = "6496679971677798670";
param.Remark = "这是具体的备注内容";
param.IsAddStar = "true";
param.Star = "2";
var response = request.Execute<OrderAddOrderRemarkResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:50001 | 50001:orderId参数不合法，建议根据文档检查传入数据 | 参数错误，检查参数 |
| 20000 | 系统错误 | isp.service-error:20001 | 20001:系统繁忙，请稍后重试 | 重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:50002 | 50002:参数不合法，建议根据文档检查传入数据 | 参数错误，检查参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:50051 | 50051:备注不规范，建议检查备注文案 | 备注不规范，检查参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:20002 | 20002:orderId不存在，请检查订单号 | 订单号不存在，检查参数 |
| 20000 | 系统错误 | isp.service-error:8888 | 8888:系统繁忙，请稍后重试 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:50056 | 50056:订单备注内容超过规定字数 | 订单备注内容超过规定字数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
