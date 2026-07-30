# /product/del

> 中文说明：删除商品  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/61>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/del |
| 中文名称 | 删除商品 |
| 文档目录 | 商品API |
| Article ID | 61 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/3/5 19:43:19 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1500 |

## 使用说明

删除商品

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.del | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | false | 0 | 356545645645454 | 商品ID | - | - |
| 0 | out_product_id | out_product_id | false | 99 | 4156451 | 外部商品ID | - | - |
| 0 | delete_forever | delete_forever | false | 4 | false | 是否彻底删除 | - | - |
| 0 | store_id | store_id | - | 0 | 1111420330 | 门店ID，不建议小时达一期用，即时零售单店版，无需使用 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/del?app_key=your_appkey_here&method=product.del&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/del?app_key=your_appkey_here&method=product.del&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductDelRequest request = new ProductDelRequest();
ProductDelParam param = request.getParam();
param.setProductId(356545645645454L);
param.setOutProductId(4156451L);
param.setDeleteForever(false);
param.setStoreId(1111420330L);
ProductDelResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductDelRequest();
$param = new ProductDelParam();
$request->setParam($param);
$param->product_id = 356545645645454;
$param->out_product_id = 4156451;
$param->delete_forever = false;
$param->store_id = 1111420330;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductDelRequest()
param = request.getParams()
param.product_id = 356545645645454
param.out_product_id = 4156451
param.delete_forever = false
param.store_id = 1111420330
response = request.execute(accessToken)

```

### go

```go
request := product_del_request.New()
param := request.GetParams()
param.ProductId = 356545645645454
param.OutProductId = 4156451
param.DeleteForever = false
param.StoreId = 1111420330
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductDelRequest();
var param = request.BuildParam();
param.ProductId = 356545645645454;
param.OutProductId = 4156451;
param.DeleteForever = false;
param.StoreId = 1111420330;
var response = request.Execute<ProductDelResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:7 | 商品删除失败: 【重复操作】商品操作重复，当前状态：删除 | 请重新选择商品 |
| 40004 | 非法的参数 | isv.parameter-invalid:4 | 根据out_product_id找不到商品信息 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010401 | 2010401:请求被限流, 请稍后再试 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 2010013:获取店铺标签失败 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:获取账号信息失败 | 请检查参数后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
