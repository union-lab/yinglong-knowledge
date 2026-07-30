# /sku/detail

> 中文说明：获取商品sku详情  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/566>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sku/detail |
| 中文名称 | 获取商品sku详情 |
| 文档目录 | 商品API |
| Article ID | 566 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/2/17 17:13:28 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

根据sku id获取商品sku详情

## 权限包

- 商品 / 商品信息查询（packageType=1）；适用应用类目：跨境金服、装修设计、客服工具-微应用、微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、跨境供应链服务、商家自研模版、商家自研组件、撮合服务商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、数据应用、打单发货-微应用、自研微组件、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、虚拟充值、即时零售商家自研、直播工具、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sku.detail | 调用的API接口名称 | - | - |
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
| 0 | sku_id | sku_id | false | 99 | 1234 | sku id | - | - |
| 0 | code | code | false | 2 | cccc | sku code | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | id | sku_id | - | 99 | 1111 | sku id | - | R1 |
| 0 | open_user_id | open_user_id | - | 99 | 2222 | app_key | - | R1 |
| 0 | out_sku_id | out_sku_id | - | 99 | 3333 | 外部的skuId | - | R1 |
| 0 | product_id | product_id | - | 99 | 4444 | 商品ID | - | R1 |
| 0 | spec_detail_id1 | spec_detail_id1 | - | 99 | 5555 | 第一级子规格 | - | R1 |
| 0 | spec_detail_id2 | spec_detail_id2 | - | 99 | 0 | 第二级子规格 | - | R1 |
| 0 | spec_detail_id3 | spec_detail_id3 | - | 99 | 0 | 第三级子规格 | - | R1 |
| 0 | spec_detail_name1 | spec_detail_name1 | - | 2 | 规格1 | 第一级子规格名 | - | R1 |
| 0 | spec_detail_name2 | spec_detail_name2 | - | 2 | 规格2 | 第二级子规格名 | - | R1 |
| 0 | spec_detail_name3 | spec_detail_name3 | - | 2 | 规格3 | 第三级子规格名 | - | R1 |
| 0 | customs_report_info | customs_report_info | - | 5 | - | 海关申报要素 | - | R1 |
| 1 | customs_report_info.hs_code | hs_code | - | 2 | aa | 海关代码 | - | R1 |
| 1 | customs_report_info.first_measure_qty | first_measure_qty | - | 9 | 1 | 法定第一计量数量 | - | R1 |
| 1 | customs_report_info.second_measure_qty | second_measure_qty | - | 9 | 2 | 法定第二计量数量 | - | R1 |
| 1 | customs_report_info.first_measure_unit | first_measure_unit | - | 2 | 克 | 法定第一计量单位 | - | R1 |
| 1 | customs_report_info.second_measure_unit | second_measure_unit | - | 2 | 克 | 法定第二计量单位 | - | R1 |
| 1 | customs_report_info.unit | unit | - | 2 | 个 | 售卖单位 | - | R1 |
| 1 | customs_report_info.report_name | report_name | - | 2 | 品名 | 品名 | - | R1 |
| 1 | customs_report_info.report_brand_name | report_brand_name | - | 2 | 品牌 | 品牌 | - | R1 |
| 1 | customs_report_info.usage | usage | - | 2 | 用途 | 用途 | - | R1 |
| 1 | customs_report_info.g_model | g_model | - | 2 | 规格型号 | 规格型号 | - | R1 |
| 1 | customs_report_info.bar_code | bar_code | - | 2 | 条形码 | 条形码 | - | R1 |
| 0 | price | price | - | 99 | 12 | 价格 | - | R1 |
| 0 | settlement_price | settlement_price | - | 99 | 12 | 结算价格 | - | R1 |
| 0 | spec_id | spec_id | - | 99 | 2333 | 规格ID | - | R1 |
| 0 | create_time | create_time | - | 99 | 1621611875 | 创建时间 | - | R1 |
| 0 | code | code | - | 2 | cccc | sku外部编码 | - | R1 |
| 0 | sku_type | sku_type | - | 99 | 0 | 0-普通 1-区域库存 | - | R1 |
| 0 | supplier_id | supplier_id | - | 2 | 333 | 供应商ID | - | R1 |
| 0 | stock_num | stock_num | - | 99 | 11 | sku_type=0时，表示库存数量 sku_type=1时，使用stock_map | - | R1 |
| 0 | prehold_stock_num | prehold_stock_num | - | 99 | 11 | sku_type=0时，表示预占库存数量 sku_type=1时，使用prehold_stock_map | - | R1 |
| 0 | prom_stock_num | prom_stock_num | - | 99 | 11 | 活动库存 | - | R1 |
| 0 | step_stock_num | step_stock_num | - | 99 | 11 | 阶梯库存 | - | R1 |
| 0 | prehold_step_stock_num | prehold_step_stock_num | - | 99 | 11 | 预占阶梯库存 | - | R1 |
| 0 | prom_step_stock_num | prom_step_stock_num | - | 99 | 11 | 活动阶梯库存 | - | R1 |
| 0 | stock_map | stock_map | - | 8 | 无 | 如果sku_type=0，为空 如果sku_type=1，则为区域仓库存映射表，key为out_warehouse_id，value为库存 | - | R1 |
| 0 | prehold_stock_map | prehold_stock_map | - | 8 | 无 | 如果sku_type=0，为空 如果sku_type=1，则为区域仓库存映射表，key为out_warehouse_id，value为占用库存 | - | R1 |
| 0 | product_id_str | product_id_str | - | 2 | 111 | 商品 ID 字符串 | - | R1 |
| 0 | ship_rule_map | ship_rule_map | - | 8 | - | 如果sku_type=0，为空 如果sku_type=1，则为区域仓库存映射表，key为out_warehouse_id，value为sku 在对应仓中的发货时效 | - | R1 |
| 1 | ship_rule_map.presell_end_time | presell_end_time | - | 99 | 1 | 全款预售截止时间  presell_type = 1时有用 | - | - |
| 1 | ship_rule_map.delay_day | delay_day | - | 99 | 0 | 发货延迟时间   0表示当天发货 | - | - |
| 1 | ship_rule_map.presell_type | presell_type | - | 99 | 1 | 0 现货模式  1 全款预售模式 | - | - |
| 0 | is_suit | is_suit | - | 99 | 1 | 是否套装，0 否，1 是 | - | R1 |
| 0 | suit_num | suit_num | - | 99 | 10 | 套装内数量 | - | R1 |
| 0 | volume | volume | - | 99 | 100 | 容量单位ml，酒类专有 | - | R1 |
| 0 | status | status | - | 99 | 0 | sku状态：0有效，1无效 | - | - |
| 0 | multi_time_stocks | multi_time_stocks | - | 3 | - | 时效库存 | - | R1 |
| 1 | multi_time_stocks.stock_num | stock_num | - | 99 | 500 | 库存数 | - | - |
| 1 | multi_time_stocks.time_desc | time_desc | - | 2 | 5天内发 | 时效描述 | - | - |
| 1 | multi_time_stocks.time_type | time_type | - | 99 | 5 | 时效 | - | - |
| 0 | batch_stocks | batch_stocks | - | 3 | - | 批次库存 | - | R1 |
| 1 | batch_stocks.batch_stock_items | batch_stock_items | - | 3 | - | 批次库存项 | - | R1 |
| 2 | batch_stocks.batch_stock_items.batch_type | batch_type | - | 99 | 1 | 批次库存类型：1为唯一码 | - | - |
| 2 | batch_stocks.batch_stock_items.stock_num | stock_num | - | 99 | 1 | 批次库存数量 | - | - |
| 2 | batch_stocks.batch_stock_items.unique_id | unique_id | - | 2 | "356303487400309" | 唯一码 | - | - |
| 1 | batch_stocks.out_warehouse_id | out_warehouse_id | - | 2 | "FOURPLTEST" | 外部仓编码，区域库存模式有值 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sku/detail?app_key=your_appkey_here&method=sku.detail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sku/detail?app_key=your_appkey_here&method=sku.detail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SkuDetailRequest request = new SkuDetailRequest();
SkuDetailParam param = request.getParam();
param.setSkuId(1234L);
param.setCode("cccc");
SkuDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new SkuDetailRequest();
$param = new SkuDetailParam();
$request->setParam($param);
$param->sku_id = 1234;
$param->code = "cccc";
$response = $request->execute(accessToken);

```

### python

```python
request = SkuDetailRequest()
param = request.getParams()
param.sku_id = 1234
param.code = "cccc"
response = request.execute(accessToken)

```

### go

```go
request := sku_detail_request.New()
param := request.GetParams()
param.SkuId = 1234
param.Code = "cccc"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SkuDetailRequest();
var param = request.BuildParam();
param.SkuId = 1234;
param.Code = "cccc";
var response = request.Execute<SkuDetailResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20050 | code: 1715469761741840, 找不到对应的sku | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:20011 | 参数不合法: 请输入正确sku_id或sku_code | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:20100 | 商品信息获取异常: 获取sku仓时效失败 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 参数错误 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:20053 | 读取商品失败 | 请检查参数后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
