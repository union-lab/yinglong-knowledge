# /sku/editPrice

> 中文说明：编辑sku价格  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1822>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sku/editPrice |
| 中文名称 | 编辑sku价格 |
| 文档目录 | 商品API |
| Article ID | 1822 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2024/3/5 19:45:47 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5000 |

## 使用说明

编辑sku价格

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sku.editPrice | 调用的API接口名称 | - | - |
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
| 0 | price | price | true | 99 | 3200 | 售价 (单位 分) | - | - |
| 0 | code | code | false | 2 | aaa | sku编码 | - | - |
| 0 | sku_id | sku_id | false | 99 | 1233245 | skuid | - | - |
| 0 | out_sku_id | out_sku_id | false | 99 | 132345654 | 外部skuid | - | - |
| 0 | product_id | product_id | false | 0 | 322315645454655 | 商品id | - | - |
| 0 | out_product_id | out_product_id | false | 99 | 2634786238745687465 | 外部商品id | - | - |
| 0 | store_id | store_id | - | 0 | 12345 | 即时零售连锁版，通过传入主品id+门店id对该门店下的子品进行操作，即时零售单店版，无需使用 | - | - |

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
SkuEditPriceRequest request = new SkuEditPriceRequest();
SkuEditPriceParam param = request.getParam();
param.setPrice(3200L);
param.setCode("aaa");
param.setSkuId(1233245L);
param.setOutSkuId(132345654L);
param.setProductId(322315645454655L);
param.setOutProductId(2634786238745687465L);
param.setStoreId(12345L);
SkuEditPriceResponse response = request.execute(accessToken);

```

### php

```php
$request = new SkuEditPriceRequest();
$param = new SkuEditPriceParam();
$request->setParam($param);
$param->price = 3200;
$param->code = "aaa";
$param->sku_id = 1233245;
$param->out_sku_id = 132345654;
$param->product_id = 322315645454655;
$param->out_product_id = 2634786238745687465;
$param->store_id = 12345;
$response = $request->execute(accessToken);

```

### python

```python
request = SkuEditPriceRequest()
param = request.getParams()
param.price = 3200
param.code = "aaa"
param.sku_id = 1233245
param.out_sku_id = 132345654
param.product_id = 322315645454655
param.out_product_id = 2634786238745687465
param.store_id = 12345
response = request.execute(accessToken)

```

### go

```go
request := sku_editPrice_request.New()
param := request.GetParams()
param.Price = 3200
param.Code = "aaa"
param.SkuId = 1233245
param.OutSkuId = 132345654
param.ProductId = 322315645454655
param.OutProductId = 2634786238745687465
param.StoreId = 12345
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SkuEditPriceRequest();
var param = request.BuildParam();
param.Price = 3200;
param.Code = "aaa";
param.SkuId = 1233245;
param.OutSkuId = 132345654;
param.ProductId = 322315645454655;
param.OutProductId = 2634786238745687465;
param.StoreId = 12345;
var response = request.Execute<SkuEditPriceResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:7 | 系统错误:商品已删除，不可更新 | 请重新选择商品 |
| 40004 | 非法的参数 | isv.parameter-invalid:5 | sku_id: 17040531912765881, 找不到对应的sku | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4 | out_sku_id错误, 无法定位到sku | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010401 | 2010401:请求被限流, 请稍后再试 | 请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 2010013:获取账号信息失败 | 请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:查询关联productId信息失败 | 2010001:查询关联productId信息失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
