# /sku/syncStockBatchMultiProducts

> 中文说明：多商品内 sku 更新库存  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2847>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sku/syncStockBatchMultiProducts |
| 中文名称 | 多商品内 sku 更新库存 |
| 文档目录 | 商品API |
| Article ID | 2847 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/9/8 17:41:51 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

1、一次请求最大支持50个sku更新
2、idempotent_id幂等id，平台会校验调用成功的idempotent_id值，请保证24小时内在店铺下唯一性，建议使用年月日时分秒+随机数生成。重复的idempotent_id会触发“Token已被使用”报错

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sku.syncStockBatchMultiProducts | 调用的API接口名称 | - | - |
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
| 0 | items | items | true | 3 | - | 请求列表 | - | - |
| 1 | items.store_code | StoreCode | false | 2 | 123sdfaseq | 相对于 store_id 是平台侧的门店 id，store_code 是外部门店编码，使用上，选择其中一个，优先使用 store_id | - | - |
| 1 | items.sku_code | SkuCode | false | 2 | 123sdfaseq | sku 商家编码，开发者在创建或更新商品时设置的，商家自行要保证一个商品下的所有 sku 编码唯一，否则通过 sku_code+商品 id 无法准确定位唯一的sku，会导致更新库存至非预期内的sku 上 | - | - |
| 1 | items.outer_product_id | OuterProductId | false | 2 | 123sdfaseq | 外部商品id；开发者在创建或更新商品时设置的，是out_product_id的字符串形式 | - | - |
| 1 | items.store_id | StoreId | false | 99 | 12345 | 即时零售小时达店铺更新配送门店商品库存，抖店自提店铺用于设置商品自提门店库存 | - | - |
| 1 | items.out_sku_id | OutSkuId | false | 99 | 44354354 | 外部skuid，开发者在创建或更新商品时设置。 | - | - |
| 1 | items.out_product_id | OutProductId | false | 99 | 36116949497011600 | 外部商品id；开发者在创建或更新商品时设置的。 | - | - |
| 1 | items.product_id | ProductId | false | 99 | 3587155767318456791 | 商品ID | - | - |
| 1 | items.sku_id | SkuId | false | 99 | 1751540901742600 | 商品规格ID；一次请求最大支持50个sku更新 | - | - |
| 1 | items.out_warehouse_id | OutWarehouseId | false | 2 | hh | 外部仓库id编码，开发者自定义；如传入传值表示更新区域库存，不传默认更新普通库存。可以使用【/warehouse/list】接口响应参数【out_warehouse_id】字段获取。超市小时达店铺类型，需传入store_id字段，store_id可以使用【/shop/batchCreateStore】创建成功后获取 | - | - |
| 1 | items.stock_num | StockNum | false | 99 | 1 | 现货库存数 | - | - |
| 1 | items.step_stock_num | StepStockNum | false | 99 | 2 | 阶梯库存数 | - | - |
| 1 | items.uniq_id | UniqId | false | 2 | uniqId1 | 批量请求中item的唯一标识 | - | - |
| 0 | idempotent_id | IdempotentId | true | 2 | 123k | 幂等ID，平台会校验校验成功的idempotent_id值，请保证24小时内在店铺下唯一性，建议使用年月日时分秒+随机数生成。重复的idempotent_id会触发“Token已被使用”报错 | - | - |
| 0 | incremental | Incremental | true | 4 | true | 库存更新方式，必填字段；true-增量更新，同时stock_num和step_stock_num字段可以为正数或负数；false-全量更新，同时stock_num和step_stock_num字段只能为正数数 | - | - |
| 0 | source | Source | false | 2 | 123sdfaseq | 请求来源，开发者自定义； | - | - |
| 0 | allow_partial_success | AllowPartialSuccess | false | 4 | false | 是否允许部分成功失败，默认接口级别成功失败 | - | - |
| 0 | inventory_loss | InventoryLoss | false | 4 | true | 是否允许负库存 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | results | results | - | 3 | - | 结果列表 | - | R1 |
| 1 | results.sku_id | sku_id | - | 99 | 1751540901742600 | 商品规格ID | - | R1 |
| 1 | results.warehouse_id | warehouse_id | - | 99 | 7155357637939495204 | 仓ID | - | R1 |
| 1 | results.stock_num | stock_num | - | 99 | 1 | 现货库存数 | - | R1 |
| 1 | results.step_stock_num | step_stock_num | - | 99 | 2 | 阶梯库存数 | - | R1 |
| 1 | results.change_num | change_num | - | 99 | 1 | 更改的现货库存数 | - | R1 |
| 1 | results.step_change_num | step_change_num | - | 99 | 2 | 更改的阶梯库存数 | - | R1 |
| 1 | results.status_code | status_code | - | 99 | 0 | 状态码 | - | R1 |
| 1 | results.status_message | status_message | - | 2 | - | 状态信息 | - | R1 |
| 1 | results.uniq_id | uniq_id | - | 2 | uniqId1 | 请求的唯一标识 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sku/syncStockBatchMultiProducts?app_key=your_appkey_here&method=sku.syncStockBatchMultiProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sku/syncStockBatchMultiProducts?app_key=your_appkey_here&method=sku.syncStockBatchMultiProducts&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SkuSyncStockBatchMultiProductsRequest request = new SkuSyncStockBatchMultiProductsRequest();
SkuSyncStockBatchMultiProductsParam param = request.getParam();
param.setIdempotentId("123k");
param.setIncremental(true);
param.setSource("123sdfaseq");
param.setAllowPartialSuccess(false);
param.setInventoryLoss(true);
SkuSyncStockBatchMultiProductsResponse response = request.execute(accessToken);

```

### php

```php
$request = new SkuSyncStockBatchMultiProductsRequest();
$param = new SkuSyncStockBatchMultiProductsParam();
$request->setParam($param);
$param->idempotent_id = "123k";
$param->incremental = true;
$param->source = "123sdfaseq";
$param->allow_partial_success = false;
$param->inventory_loss = true;
$response = $request->execute(accessToken);

```

### python

```python
request = SkuSyncStockBatchMultiProductsRequest()
param = request.getParams()
param.idempotent_id = "123k"
param.incremental = true
param.source = "123sdfaseq"
param.allow_partial_success = false
param.inventory_loss = true
response = request.execute(accessToken)

```

### go

```go
request := sku_syncStockBatchMultiProducts_request.New()
param := request.GetParams()
param.IdempotentId = "123k"
param.Incremental = true
param.Source = "123sdfaseq"
param.AllowPartialSuccess = false
param.InventoryLoss = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SkuSyncStockBatchMultiProductsRequest();
var param = request.BuildParam();
param.IdempotentId = "123k";
param.Incremental = true;
param.Source = "123sdfaseq";
param.AllowPartialSuccess = false;
param.InventoryLoss = true;
var response = request.Execute<SkuSyncStockBatchMultiProductsResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:-30001 | 参数校验失败（check not pass） | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-5000 | 内部请求错误 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-40010 | 商户状态不合法: 初始状态 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-40011 | 当前商户状态，不可编辑 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-40001 | 商品审核中，不可更新 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-40002 | 商品封禁，不可更新 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-40003 | 商品已删除，不可更新 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-40012 | 账号权限错误 | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:-10002 | 参数错误 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-10007 | 设置库存逻辑错误 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-20002 | Token已被使用 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-20001 | 库存不足 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-20011 | 有关联的货品，无法修改库存 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-20008 | 当前商品的部分SKU库存不得低于活动/达人专属价设置的库存数 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-10021 | -10021:并发冲突, 请重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-10001 | -10001:人太多了，请重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10000002 | 10000002:未知错误 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-40013 | 存在多个门店具有相同的门店 code，无法唯一确定唯一的门店 id | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-20048 | 当前品不能直接设置库存，因为他由其他品提供库存，请设置他背后的供货品库存 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-40014 | 门店 code 查不到门店信息 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-20047 | -20047:仓必须先设置覆盖范围，才能增加库存, warehouse_id = 7408530027257839887, product_id = 3716281933467091238, sku_id = 3425519934124290,  本次操作号(logid) = 202411161131046FB1E10781D04C4C18BB | -20047:仓必须先设置覆盖范围，才能增加库存, warehouse_id = 7408530027257839887, product_id = 3716281933467091238, sku_id = 3425519934124290,  本次操作号(logid) = 202411161131046FB1E10781D04C4C18BB |
| 50002 | 业务处理失败 | isv.business-failed:-10005 | -10005:Redis操作失败 | -10005:Redis操作失败 |
| 50002 | 业务处理失败 | isv.business-failed:-20009 | -20009:商品：3617345053376259848 （默认）正在参加平台活动（抖音商城冬日市集活动-官方立减&一件直降商品报名 ），无法修改库存信息 | -20009:商品：3617345053376259848 （默认）正在参加平台活动（抖音商城冬日市集活动-官方立减&一件直降商品报名 ），无法修改库存信息 |
| 50002 | 业务处理失败 | isv.business-failed:-1000 | -1000:设置主商品0库存，必须要传入storeid，用于确定门店子商品 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:12000082 | 12000082:访问频率过高 | 请降低访问频率 |
| 50002 | 业务处理失败 | isv.business-failed:12000113 | 内部请求错误 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-24001 | -24001:sku对应的仓库太多了 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-10011 | -10011:仓库不存在 | 请检查参数后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
