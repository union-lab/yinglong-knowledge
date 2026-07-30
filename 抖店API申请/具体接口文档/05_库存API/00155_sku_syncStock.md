# /sku/syncStock

> 中文说明：全量/增量更新商品sku库存  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/155>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sku/syncStock |
| 中文名称 | 全量/增量更新商品sku库存 |
| 文档目录 | 库存API |
| Article ID | 155 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2025/2/17 17:16:39 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 18000 |

## 使用说明

1、支持修改普通库存,区域库存,阶梯库存
2、支持增量更新，当incremental=true时idempotent_id字段参数必传，同时stock_num支持加/减库存。加库存例：原商品库存是10个，接口传入5个，执行成功商品库存是15个。减库存例：原商品库存是10个，接口stock_num传入-5，执行成功商品库存是5个。注意：减库存时【商品现库存-即将减少库存数不能<0】，否则会报错系统错误:更新库存数失败: 库存不足；
3、支持全量更新。例：原商品库存是10个，接口传入5个，执行成功商品库存是5个。
4、可以设置库存为0
5、即时零售店铺类型，更新库存out_warehouse_id= store_id（门店id）表示更新门店商品库存。
6、抖店服饰自提场景，store_id（推荐）自提场景为门店id,out_warehouse_id和store_id二选一，系统执行优先级out_warehouse_id>store_id

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sku.syncStock | 调用的API接口名称 | - | - |
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
| 0 | code | code | false | 2 | dy001 | sku编码 | - | - |
| 0 | sku_id | sku_id | false | 99 | 1737398770243598 | 规格id；抖店系统生成，商品id下唯一。 | - | - |
| 0 | out_sku_id | out_sku_id | false | 99 | 44354354 | 外部skuid，开发者在创建或更新商品时设置。 | - | - |
| 0 | product_id | product_id | false | 0 | 3539925204033339668 | 商品ID，抖店系统生成，店铺下唯一；长度19位。 | - | - |
| 0 | out_product_id | out_product_id | false | 99 | 435243654356 | 外部商品id；开发者在创建或更新商品时设置的。 | - | - |
| 0 | out_warehouse_id | out_warehouse_id | false | 2 | dy123 | 外部仓库id编码，开发者自定义；如传入传值表示更新区域库存，不传默认更新普通库存。可以使用【/warehouse/list】接口响应参数【out_warehouse_id】字段获取。超市小时达店铺类型，需传入store_id字段，store_id可以使用【/shop/batchCreateStore】创建成功后获取 | - | - |
| 0 | supplier_id | supplier_id | false | 2 | 1 | 供应商ID | - | - |
| 0 | incremental | incremental | false | 4 | false | 库存更新方式；true-增量更新，同时idempotent_id字段必填；false-全量更新；默认为false | - | - |
| 0 | idempotent_id | idempotent_id | false | 2 | 202206021500001001 | 幂等ID，当incremental=true时该参数必传 | - | - |
| 0 | stock_num | stock_num | true | 99 | 100 | 库存值；可以设置为0，不能小于0，当incremental=true时stock_num支持加/减库存。支持传入“-”，例如：-5表示减5个库存；加库存例：原商品库存是10个，接口传入5个，执行成功商品库存是15个。减库存例：原商品库存是10个，接口stock_num传入-5，执行成功商品库存是5个。注意：减库存时【商品现库存-即将减少库存数不能<0】，否则会报错系统错误:更新库存数失败: 库存不足； | - | - |
| 0 | step_stock_num | step_stock_num | false | 99 | 100 | 阶梯库存 | - | - |
| 0 | store_id | store_id | false | 0 | 12345 | 门店id①即时零售连锁版，通过传入主品id+门店id对该门店下的子品进行操作，即时零售单店版，无需使用②抖店服饰自提场景，通过传入主品id+门店id更新门店商品库存 | - | - |
| 0 | multi_time_stocks | multi_time_stocks | false | 3 | - | 时效库存 | - | - |
| 1 | multi_time_stocks.stock_num | stock_num | false | 99 | 500 | 库存数 | - | - |
| 1 | multi_time_stocks.time_desc | time_desc | false | 2 | 5天内发 | 时效描述 | - | - |
| 1 | multi_time_stocks.time_type | time_type | false | 99 | 5 | 时效 | - | - |
| 0 | batch_stock_items | batch_stock_items | false | 3 | - | 批次库存项 | - | - |
| 1 | batch_stock_items.batch_type | batch_type | false | 99 | 1 | 批次库存类型：1为唯一码 | - | - |
| 1 | batch_stock_items.stock_num | stock_num | false | 99 | 1 | 批次库存数量 | - | - |
| 1 | batch_stock_items.unique_id | unique_id | false | 2 | "356303487400309" | 唯一码 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sku/syncStock?app_key=your_appkey_here&method=sku.syncStock&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sku/syncStock?app_key=your_appkey_here&method=sku.syncStock&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SkuSyncStockRequest request = new SkuSyncStockRequest();
SkuSyncStockParam param = request.getParam();
param.setCode("dy001");
param.setSkuId(1737398770243598L);
param.setOutSkuId(44354354L);
param.setProductId(3539925204033339668L);
param.setOutProductId(435243654356L);
param.setOutWarehouseId("dy123");
param.setSupplierId("1");
param.setIncremental(false);
param.setIdempotentId("202206021500001001");
param.setStockNum(100L);
param.setStepStockNum(100L);
param.setStoreId(12345L);
SkuSyncStockResponse response = request.execute(accessToken);

```

### php

```php
$request = new SkuSyncStockRequest();
$param = new SkuSyncStockParam();
$request->setParam($param);
$param->code = "dy001";
$param->sku_id = 1737398770243598;
$param->out_sku_id = 44354354;
$param->product_id = 3539925204033339668;
$param->out_product_id = 435243654356;
$param->out_warehouse_id = "dy123";
$param->supplier_id = "1";
$param->incremental = false;
$param->idempotent_id = "202206021500001001";
$param->stock_num = 100;
$param->step_stock_num = 100;
$param->store_id = 12345;
$response = $request->execute(accessToken);

```

### python

```python
request = SkuSyncStockRequest()
param = request.getParams()
param.code = "dy001"
param.sku_id = 1737398770243598
param.out_sku_id = 44354354
param.product_id = 3539925204033339668
param.out_product_id = 435243654356
param.out_warehouse_id = "dy123"
param.supplier_id = "1"
param.incremental = false
param.idempotent_id = "202206021500001001"
param.stock_num = 100
param.step_stock_num = 100
param.store_id = 12345
response = request.execute(accessToken)

```

### go

```go
request := sku_syncStock_request.New()
param := request.GetParams()
param.Code = "dy001"
param.SkuId = 1737398770243598
param.OutSkuId = 44354354
param.ProductId = 3539925204033339668
param.OutProductId = 435243654356
param.OutWarehouseId = "dy123"
param.SupplierId = "1"
param.Incremental = false
param.IdempotentId = "202206021500001001"
param.StockNum = 100
param.StepStockNum = 100
param.StoreId = 12345
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SkuSyncStockRequest();
var param = request.BuildParam();
param.Code = "dy001";
param.SkuId = 1737398770243598;
param.OutSkuId = 44354354;
param.ProductId = 3539925204033339668;
param.OutProductId = 435243654356;
param.OutWarehouseId = "dy123";
param.SupplierId = "1";
param.Incremental = false;
param.IdempotentId = "202206021500001001";
param.StockNum = 100;
param.StepStockNum = 100;
param.StoreId = 12345;
var response = request.Execute<SkuSyncStockResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4 | 当前sku已被删除,禁止修改库存 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010401 | 2010401:系统繁忙，请稍后再试 | 2010401:系统繁忙，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:5 | sku_id: 21062210000363, 找不到对应的sku | 请检查请求参数的skuid是否存在或商品已经被删除 |
| 40004 | 非法的参数 | isv.parameter-invalid:40010 | [idempotent_id]重复，操作已执行 | idempotent_id需要保持唯一性，请检查替换idempotent_id值 |
| 40004 | 非法的参数 | isv.parameter-invalid:40004 | 系统错误:获取区域仓失败 | 此报错是超时导致，重试即可 |
| 50002 | 业务处理失败 | isv.business-failed:7 | 获取子商品信息失败 | 获取子商品信息失败 |
| 50002 | 业务处理失败 | isv.business-failed:2010012 | 商品：3679752912201973760 （浅米杏-M）正在参加平台活动（抖音商城618好物节-官方立减&一件直降商品报名），无法修改库存信息 | 商品：3679752912201973760 （浅米杏-M）正在参加平台活动（抖音商城618好物节-官方立减&一件直降商品报名），无法修改库存信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010058 | 查询商品信息失败，请检查参数后重试 | 查询商品信息失败，请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 系统错误:Sku不存在 | 系统错误:Sku不存在 |
| 50002 | 业务处理失败 | isv.business-failed:2010042 | 商品已删除，不可更新 | 商品已删除，不可更新 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 找不到对应的sku | 找不到对应的sku |
| 50002 | 业务处理失败 | isv.business-failed:2010005 | 当前店铺已停业，重新开店后可支持创建商品 | 当前店铺已停业，重新开店后可支持创建商品 |
| 50002 | 业务处理失败 | isv.business-failed:2010043 | 商品封禁，不可更新 | 商品封禁，不可更新 |
| 50002 | 业务处理失败 | isv.business-failed:110240119 | 当前sku为区域库存，禁止更新为普通库存（当前接口禁止更新skuType） | 当前sku为区域库存，禁止更新为普通库存（当前接口禁止更新skuType） |
| 50002 | 业务处理失败 | isv.business-failed:110211009 | 更新库存数失败 | 更新库存数失败 |
| 50002 | 业务处理失败 | isv.business-failed:110240120 | 当前sku为普通库存，禁止更新为区域库存（当前接口禁止更新skuType） | 当前sku为普通库存，禁止更新为区域库存（当前接口禁止更新skuType） |
| 50002 | 业务处理失败 | isv.business-failed:2010045 | 商品正在参加平台活动（赠品活动），无法修改商品信息 | 商品正在参加平台活动（赠品活动），无法修改商品信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010341 | 阶梯库存模式不合法 | 阶梯库存模式不合法 |
| 50002 | 业务处理失败 | isv.business-failed:2010041 | 商品审核中，不可更新 | 商品审核中，不可更新 |
| 50002 | 业务处理失败 | isv.business-failed:110240107 | 当前商品设置达人库存，不可修改库存类型 | 当前商品设置达人库存，不可修改库存类型 |
| 50002 | 业务处理失败 | isv.business-failed:110240116 | 跨境商品仅支持一品一仓，如需修改商品所在仓请使用编辑接口 | 跨境商品仅支持一品一仓，如需修改商品所在仓请使用编辑接口 |
| 50002 | 业务处理失败 | isv.business-failed:110102132 | 学浪同步商品仅支持在学浪老师端编辑 | 学浪同步商品仅支持在学浪老师端编辑 |
| 50002 | 业务处理失败 | isv.business-failed:20100 | 获取库存数失败 | 获取库存数失败 |
| 50002 | 业务处理失败 | isv.business-failed:20053 | 读取商品失败 | 读取商品失败 |
| 50002 | 业务处理失败 | isv.business-failed:20050 | 系统异常，请稍后尝试 | 系统异常，请稍后尝试 |
| 50002 | 业务处理失败 | isv.business-failed:110502038 | 110502038:有价券商品不支持当前接口操作 | 110502038:有价券商品不支持当前接口操作 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 2010013:获取V2库存数失败 | 2010013:获取V2库存数失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
