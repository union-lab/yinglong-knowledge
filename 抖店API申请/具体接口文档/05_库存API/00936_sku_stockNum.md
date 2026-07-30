# /sku/stockNum

> 中文说明：查询商品规格库存  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/936>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sku/stockNum |
| 中文名称 | 查询商品规格库存 |
| 文档目录 | 库存API |
| Article ID | 936 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/2/17 17:16:11 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

查询商品规格库存

## 权限包

- 商品 / 商品信息查询（packageType=1）；适用应用类目：跨境金服、装修设计、客服工具-微应用、微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、跨境供应链服务、商家自研模版、商家自研组件、撮合服务商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、数据应用、打单发货-微应用、自研微组件、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、虚拟充值、即时零售商家自研、直播工具、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sku.stockNum | 调用的API接口名称 | - | - |
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
| 0 | sku_id | sku_id | false | 99 | 12345 | 商品规格id，店铺商品id下唯一，抖店平台生成 | - | - |
| 0 | code | code | false | 2 | abc | sku商家编码，对应抖店后台商品sku商家编码。外部开发者自定义商品规格id，会校验在店铺下唯一性 | - | - |
| 0 | out_warehouse_id | out_warehouse_id | false | 2 | AN871 | 仓库编码（供应商编码） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | sku_id | sku_id | - | 99 | 12345 | 商品规格id，店铺商品id下唯一，抖店平台生成 | - | R1 |
| 0 | out_sku_id | out_sku_id | - | 99 | 12345 | 外部开发者自定义商品规格id，会校验再店铺下唯一性 | - | R1 |
| 0 | code | code | - | 2 | abc | sku商家编码，对应抖店后台商品sku商家编码 | - | R1 |
| 0 | sku_type | sku_type | - | 99 | 0 | sku库存类型，0-普通库存；1-区域库存；10-阶梯库存； | - | R1 |
| 0 | stock_num | stock_num | - | 99 | 12 | 商品规格库存；如果sku_type=0，表示全国库存； 如果sku_type=1，且入参有out_warehouse_id，则表示该仓库的库存； 如果sku_type=1，且入参无out_warehouse_id，则为空； | - | R1 |
| 0 | prehold_stock_num | prehold_stock_num | - | 99 | 12 | 占用库存 | - | R1 |
| 0 | prom_stock_num | prom_stock_num | - | 99 | 12 | 活动库存 | - | R1 |
| 0 | step_stock_num | step_stock_num | - | 99 | 12 | 阶梯库存 | - | R1 |
| 0 | prehold_step_stock_num | prehold_step_stock_num | - | 99 | 12 | 阶梯占用库存 | - | R1 |
| 0 | prom_step_stock_num | prom_step_stock_num | - | 99 | 12 | 活动阶梯库存 | - | R1 |
| 0 | stock_num_map | stock_map | - | 8 | 1 | 如果sku_type=0，为空 如果sku_type=1，则为区域仓库存映射表，key为out_warehouse_id，value为库存 | - | R1 |
| 0 | prehold_stock_map | prehold_stock_map | - | 8 | 1 | 如果sku_type=0，为空 如果sku_type=1，则为区域仓库存映射表，key为out_warehouse_id，value为占用库存 | - | R1 |
| 0 | ship_rule_map | ship_rule_map | - | 8 | - | 如果sku_type=0，为空 如果sku_type=1，则为区域仓库存映射表，key为out_warehouse_id，value为sku在仓中的发货时效 | - | R1 |
| 0 | normal_stock_num | normal_stock_num | - | 99 | 1 | 普通库存，非活动可售 | - | R1 |
| 0 | channel_stock_num | channel_stock_num | - | 99 | 1 | 渠道库存 | - | R1 |
| 0 | batch_stocks | batch_stocks | - | 3 | - | 批次库存 | - | R1 |
| 1 | batch_stocks.batch_stock_items | batch_stock_items | - | 3 | - | 批次库存项 | - | R1 |
| 2 | batch_stocks.batch_stock_items.batch_type | batch_type | - | 99 | 1 | 批次库存类型：0为时效，1为唯一码 | - | - |
| 2 | batch_stocks.batch_stock_items.stock_num | stock_num | - | 99 | 1 | 批次库存数量 | - | - |
| 2 | batch_stocks.batch_stock_items.unique_id | unique_id | - | 2 | "356303487400309" | 唯一码 | - | - |
| 1 | batch_stocks.out_warehouse_id | out_warehouse_id | - | 2 | "FOURPLTEST" | 外部仓编码，区域库存模式有值 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sku/stockNum?app_key=your_appkey_here&method=sku.stockNum&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sku/stockNum?app_key=your_appkey_here&method=sku.stockNum&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SkuStockNumRequest request = new SkuStockNumRequest();
SkuStockNumParam param = request.getParam();
param.setSkuId(12345L);
param.setCode("abc");
param.setOutWarehouseId("AN871");
SkuStockNumResponse response = request.execute(accessToken);

```

### php

```php
$request = new SkuStockNumRequest();
$param = new SkuStockNumParam();
$request->setParam($param);
$param->sku_id = 12345;
$param->code = "abc";
$param->out_warehouse_id = "AN871";
$response = $request->execute(accessToken);

```

### python

```python
request = SkuStockNumRequest()
param = request.getParams()
param.sku_id = 12345
param.code = "abc"
param.out_warehouse_id = "AN871"
response = request.execute(accessToken)

```

### go

```go
request := sku_stockNum_request.New()
param := request.GetParams()
param.SkuId = 12345
param.Code = "abc"
param.OutWarehouseId = "AN871"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SkuStockNumRequest();
var param = request.BuildParam();
param.SkuId = 12345;
param.Code = "abc";
param.OutWarehouseId = "AN871";
var response = request.Execute<SkuStockNumResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20050 | code: 195250981220, 找不到对应的sku | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:20011 | 参数不合法: 请输入正确sku_id或sku_code | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:20100 | 商品信息获取异常: 获取库存数失败 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:code: 4550583951313, 找不到对应的sku | 2010004:code: 4550583951313, 找不到对应的sku |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:查询关联productId信息失败 | 2010001:查询关联productId信息失败 |
| 50002 | 业务处理失败 | isv.business-failed:20053 | 20053:读取商品失败 | 20053:读取商品失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
