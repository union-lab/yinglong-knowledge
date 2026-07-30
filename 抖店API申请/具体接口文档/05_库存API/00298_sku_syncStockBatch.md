# /sku/syncStockBatch

> 中文说明：库存批量同步接口  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/298>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sku/syncStockBatch |
| 中文名称 | 库存批量同步接口 |
| 文档目录 | 库存API |
| Article ID | 298 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2025/2/17 17:14:25 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5000 |

## 使用说明

1、只支持批量同步归属于同一个商品的sku库存；
2、接口规则全部成功或全部失败，例：批量更新10个skuid库存，其中一个skuid信息不正确，这样整个请求都会失败，10个skuid都未更新成功。
3、抖店到店自提场景请在out_warehouse_id传入store_id（门店id）

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sku.syncStockBatch | 调用的API接口名称 | - | - |
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
| 0 | product_id | productId | true | 0 | 3337589750809921129 | 商品ID，整型格式 | - | - |
| 0 | idempotent_id | token | false | 2 | 2 | 幂等ID，仅incremental=true时有用 | - | - |
| 0 | incremental | incremental | true | 4 | true | true表示增量库存，false表示全量库存，默认为false | - | - |
| 0 | sku_sync_list | stockItems | true | 3 | - | 需要批量提交的skuid及对应的库存和仓；接口规则全部成功或全部失败，例：批量更新10个skuid库存，其中一个skuid信息不正确，这样整个请求都会失败，10个skuid都未更新成功。 | - | - |
| 1 | sku_sync_list.batch_stock_items | batch_stock_items | false | 3 | - | 批次库存项 | - | - |
| 2 | sku_sync_list.batch_stock_items.batch_type | batch_type | false | 99 | 1 | 批次库存类型：1为唯一码 | - | - |
| 2 | sku_sync_list.batch_stock_items.stock_num | stock_num | false | 99 | 1 | 批次库存数量 | - | - |
| 2 | sku_sync_list.batch_stock_items.unique_id | unique_id | false | 2 | "356303487400309" | 唯一码 | - | - |
| 1 | sku_sync_list.multi_time_stocks | multi_time_stocks | false | 3 | - | 时效库存 | - | - |
| 2 | sku_sync_list.multi_time_stocks.stock_num | stock_num | false | 99 | 500 | 库存数 | - | - |
| 2 | sku_sync_list.multi_time_stocks.time_desc | time_desc | false | 2 | 5天内发 | 时效描述 | - | - |
| 2 | sku_sync_list.multi_time_stocks.time_type | time_type | false | 99 | 5 | 时效 | - | - |
| 1 | sku_sync_list.outer_sku_id | outer_sku_id | false | 2 | 232331 | 外部sku编码，需要结合outer_product_id进行使用 | - | - |
| 1 | sku_sync_list.sku_id | skuId | true | 99 | 99758050 | skuid | - | - |
| 1 | sku_sync_list.sku_type | skuType | true | 99 | 1 | 库存类型：0普通库存，1区域库存,10阶梯库存。 超市小时达子品传区域库存 | - | - |
| 1 | sku_sync_list.stock_num | stockNum | false | 99 | 10 | 普通库存数量 | - | - |
| 1 | sku_sync_list.step_stock_num | stepStockNum | false | 99 | 10 | 阶梯库存数量 | - | - |
| 1 | sku_sync_list.stock_map | areaStockNum | false | 3 | - | 区域库存配置 | - | - |
| 2 | sku_sync_list.stock_map.batch_stock_items | batch_stock_items | false | 3 | - | 批次库存项 | - | - |
| 3 | sku_sync_list.stock_map.batch_stock_items.batch_type | batch_type | false | 99 | 1 | 批次库存类型：1为唯一码 | - | - |
| 3 | sku_sync_list.stock_map.batch_stock_items.stock_num | stock_num | false | 99 | 1 | 批次库存数量 | - | - |
| 3 | sku_sync_list.stock_map.batch_stock_items.unique_id | unique_id | false | 2 | "356303487400309" | 唯一码 | - | - |
| 2 | sku_sync_list.stock_map.out_warehouse_id | outWarehouseId | true | 2 | 123 | 仓id或到店自提门店id，场景①仓id，超市小时达子品传storeId。到店自提传入store_id（门店id） | - | - |
| 2 | sku_sync_list.stock_map.stock_num | stockNum | true | 99 | 10 | 库存数量 | - | - |
| 1 | sku_sync_list.supplier_id | supplierId | false | 2 | 1 | 供应商ID | - | - |
| 0 | outer_product_id | outer_product_id | false | 2 | 232334 | 推荐使用，外部商家编码，支持字符串。 | - | - |
| 0 | store_id | store_id | false | 0 | 12345 | 即时零售连锁版，通过传入主品id+门店id对该门店下的子品进行操作，即时零售单店版，无需使用 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sku/syncStockBatch?app_key=your_appkey_here&method=sku.syncStockBatch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sku/syncStockBatch?app_key=your_appkey_here&method=sku.syncStockBatch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SkuSyncStockBatchRequest request = new SkuSyncStockBatchRequest();
SkuSyncStockBatchParam param = request.getParam();
param.setProductId(3337589750809921129L);
param.setIdempotentId("2");
param.setIncremental(true);
param.setOuterProductId("232334");
param.setStoreId(12345L);
SkuSyncStockBatchResponse response = request.execute(accessToken);

```

### php

```php
$request = new SkuSyncStockBatchRequest();
$param = new SkuSyncStockBatchParam();
$request->setParam($param);
$param->product_id = 3337589750809921129;
$param->idempotent_id = "2";
$param->incremental = true;
$param->outer_product_id = "232334";
$param->store_id = 12345;
$response = $request->execute(accessToken);

```

### python

```python
request = SkuSyncStockBatchRequest()
param = request.getParams()
param.product_id = 3337589750809921129
param.idempotent_id = "2"
param.incremental = true
param.outer_product_id = "232334"
param.store_id = 12345
response = request.execute(accessToken)

```

### go

```go
request := sku_syncStockBatch_request.New()
param := request.GetParams()
param.ProductId = 3337589750809921129
param.IdempotentId = "2"
param.Incremental = true
param.OuterProductId = "232334"
param.StoreId = 12345
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SkuSyncStockBatchRequest();
var param = request.BuildParam();
param.ProductId = 3337589750809921129;
param.IdempotentId = "2";
param.Incremental = true;
param.OuterProductId = "232334";
param.StoreId = 12345;
var response = request.Execute<SkuSyncStockBatchResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010043 | 商品封禁，不可更新 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010005 | 商户状态不合法: 停业整顿状态 | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010021 | 更新库存数失败: 幂等ID重复 | 请勿重复请求 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010013 | 查询商品信息失败，请检查参数后重试 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010042 | 商品已删除，不可更新 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010041 | 商品审核中，不可更新 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010012 | 更新库存数失败: 库存不足 | 请检查参数后重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010004 | 参数缺失 | 请检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:2010002 | 操作超时，请重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010058 | 商品不存在或已彻底删除 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010401 | 系统繁忙，请稍后再试 | 请稍后重试 |
| 20000 | 系统错误 | isp.service-error:2010001 | 内部请求错误 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010045 | 商品正在参加平台活动，无法修改库存类型 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010330 | 由于该商品基础分25（不达标），不支持快捷编辑价格/总库存，请点击右侧“编辑”进入商品详情页进行操作提醒：建议PC后台-商品优化-筛选“基础分不达标”，查看店铺所有不达标商品进行集中优化 | 由于该商品基础分25（不达标），不支持快捷编辑价格/总库存，请点击右侧“编辑”进入商品详情页进行操作提醒：建议PC后台-商品优化-筛选“基础分不达标”，查看店铺所有不达标商品进行集中优化 |
| 50002 | 业务处理失败 | isv.business-failed:2010307 | 商品正在参加平台活动（电视预售），不允许切换库存类型 | 商品正在参加平台活动（电视预售），不允许切换库存类型 |
| 50002 | 业务处理失败 | isv.business-failed:7 | 获取子商品信息失败 | 获取子商品信息失败 |
| 50002 | 业务处理失败 | isv.business-failed:110240124 | 奖品不支持设置区域库存 | 奖品不支持设置区域库存 |
| 50002 | 业务处理失败 | isv.business-failed:110240123 | 小时达子品必须为区域库存类型 | 小时达子品必须为区域库存类型 |
| 50002 | 业务处理失败 | isv.business-failed:110102132 | 学浪同步商品仅支持在学浪老师端编辑 | 学浪同步商品仅支持在学浪老师端编辑 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
