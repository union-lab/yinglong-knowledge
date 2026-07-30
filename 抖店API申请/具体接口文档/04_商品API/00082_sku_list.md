# /sku/list

> 中文说明：获取商品sku列表  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/82>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sku/list |
| 中文名称 | 获取商品sku列表 |
| 文档目录 | 商品API |
| Article ID | 82 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/6/26 14:15:26 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3300 |

## 使用说明

根据商品id获取商品的sku列表，支持返回预占库存信息

## 权限包

- 商品 / 商品信息查询（packageType=1）；适用应用类目：跨境金服、装修设计、客服工具-微应用、微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、跨境供应链服务、商家自研模版、商家自研组件、撮合服务商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、数据应用、打单发货-微应用、自研微组件、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、虚拟充值、即时零售商家自研、直播工具、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼
- p测试权限组 / liubin测试（packageType=1）；适用应用类目：内部测类目
- 定向权限 / 定向权限包（packageType=1）
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电
- 开放平台 / 盲盒互动（服务商）（packageType=1）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sku.list | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | false | 0 | 3213654123157 | 商品ID；抖店系统生成。 | - | - |
| 0 | out_product_id | out_product_id | false | 99 | 243523452435 | 外部商品ID；商家创建商品时自定义。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | SpecPrice | - | 3 | - | sku列表 | - | R1 |
| 1 | data.multi_time_stocks | multi_time_stocks | - | 3 | - | 时效库存 | - | R1 |
| 2 | data.multi_time_stocks.stock_num | stock_num | - | 99 | 500 | 库存数 | - | - |
| 2 | data.multi_time_stocks.time_desc | time_desc | - | 2 | 5天内发 | 时效描述 | - | - |
| 2 | data.multi_time_stocks.time_type | time_type | - | 99 | 5 | 时效 | - | - |
| 1 | data.sku_status | sku_status | - | 4 | true | sku状态 true上架 false下架 | - | - |
| 1 | data.id | sku_id | - | 99 | 1736402086955032 | 商品sku_id;抖店系统生成。 | - | R1 |
| 1 | data.open_user_id | open_user_id | - | 99 | 0 | app_key | - | R1 |
| 1 | data.out_sku_id | out_sku_id | - | 99 | 0 | 外部的skuId；商家自定义；未设置返回为0。 | - | R1 |
| 1 | data.product_id | product_id | - | 99 | 3557453527615939930 | 商品ID；抖店系统生成。 | - | R1 |
| 1 | data.spec_detail_id1 | spec_detail_id1 | - | 99 | 1737037851057159 | 第一级子规格 | - | R1 |
| 1 | data.spec_detail_id2 | spec_detail_id2 | - | 99 | 0 | 第二级子规格 | - | R1 |
| 1 | data.spec_detail_id3 | spec_detail_id3 | - | 99 | 0 | 第三级子规格 | - | R1 |
| 1 | data.spec_detail_name1 | spec_detail_name1 | - | 2 | 默认 | 第一级子规格名 | - | R1 |
| 1 | data.spec_detail_name2 | spec_detail_name2 | - | 2 | "" | 第二级子规格名 | - | R1 |
| 1 | data.spec_detail_name3 | spec_detail_name3 | - | 2 | "" | 第三级子规格名 | - | R1 |
| 1 | data.customs_report_info | customs_report_info | - | 5 | - | 海关申报要素 | - | R1 |
| 2 | data.customs_report_info.hs_code | hs_code | - | 2 | aa | 海关代码 | - | R1 |
| 2 | data.customs_report_info.first_measure_qty | first_measure_qty | - | 9 | 1 | 法定第一计量数量 | - | R1 |
| 2 | data.customs_report_info.second_measure_qty | second_measure_qty | - | 9 | 2 | 法定第二计量数量 | - | R1 |
| 2 | data.customs_report_info.first_measure_unit | first_measure_unit | - | 2 | 克 | 法定第一计量单位 | - | R1 |
| 2 | data.customs_report_info.second_measure_unit | second_measure_unit | - | 2 | 克 | 法定第二计量单位 | - | R1 |
| 2 | data.customs_report_info.unit | unit | - | 2 | 个 | 售卖单位 | - | R1 |
| 2 | data.customs_report_info.report_name | report_name | - | 2 | 品名 | 品名 | - | R1 |
| 2 | data.customs_report_info.report_brand_name | report_brand_name | - | 2 | 品牌 | 品牌 | - | R1 |
| 2 | data.customs_report_info.usage | usage | - | 2 | 品牌 | 用途 | - | R1 |
| 2 | data.customs_report_info.g_model | g_model | - | 2 | 规格型号 | 规格型号 | - | R1 |
| 2 | data.customs_report_info.bar_code | bar_code | - | 2 | 条形码 | 条形码 | - | R1 |
| 1 | data.price | price | - | 99 | 12 | 商品价格，单位：分 | - | R1 |
| 1 | data.settlement_price | settlement_price | - | 99 | 12 | 结算价格，【已废弃】价格字段是price | - | R1 |
| 1 | data.spec_id | spec_id | - | 99 | 1737037851056167 | 规格ID | - | R1 |
| 1 | data.create_time | create_time | - | 99 | 1621611875 | 创建时间，时间戳：单位秒； | - | R1 |
| 1 | data.code | code | - | 2 | dy001 | sku外部编码 | - | R1 |
| 1 | data.sku_type | sku_type | - | 99 | 0 | 库存类型；0-普通；1-区域库存；10-阶梯库存； | - | R1 |
| 1 | data.supplier_id | supplier_id | - | 2 | 333 | 供应商ID | - | R1 |
| 1 | data.stock_num | stock_num | - | 99 | 100 | sku_type=0时，表示普通库存数量 ;sku_type=1时，使用stock_map，表示区域库存数量 | - | R1 |
| 1 | data.prehold_stock_num | prehold_stock_num | - | 99 | 50 | sku_type=0时，表示预占库存数量； sku_type=1时，表示区域库存数量，使用prehold_stock_map | - | R1 |
| 1 | data.prom_stock_num | prom_stock_num | - | 99 | 50 | 活动库存 | - | R1 |
| 1 | data.step_stock_num | step_stock_num | - | 99 | 100 | 阶梯库存 | - | R1 |
| 1 | data.prehold_step_stock_num | prehold_step_stock_num | - | 99 | 20 | 预占阶梯库存 | - | R1 |
| 1 | data.prom_step_stock_num | prom_step_stock_num | - | 99 | 100 | 活动阶梯库存 | - | R1 |
| 1 | data.stock_map | stock_map | - | 8 | {} | 如果sku_type=0，为空 如果sku_type=1，则为区域仓库存映射表，key为out_warehouse_id（区域仓库id使用【/warehouse/list】查询），value为库存 | - | R1 |
| 1 | data.prehold_stock_map | prehold_stock_map | - | 8 | {} | 如果sku_type=0，为空 如果sku_type=1，则为区域仓库存映射表，key为out_warehouse_id（区域仓库id使用【/warehouse/list】查询），value为占用库存 | - | R1 |
| 1 | data.product_id_str | product_id_str | - | 2 | 3557453527615939930 | 商品 ID字符串类型 | - | R1 |
| 1 | data.ship_rule_map | ship_rule_map | - | 8 | - | 如果sku_type=0，为空 如果sku_type=1，则为区域仓库存映射表，key为out_warehouse_id（区域仓库id使用【/warehouse/list】查询），value为sku 在对应仓中的发货时效 | - | R1 |
| 2 | data.ship_rule_map.presell_type | presell_type | - | 99 | 0 | 0 现货模式  1 全款预售模式 | - | R1 |
| 2 | data.ship_rule_map.delay_day | delay_day | - | 99 | 0 | 发货延迟时间；0表示当天发货； | - | R1 |
| 2 | data.ship_rule_map.presell_end_time | presell_end_time | - | 99 | 0 | 全款预售截止时间  presell_type = 1时有用 | - | R1 |
| 1 | data.is_suit | is_suit | - | 99 | 0 | 海南免税：是否套装，0 否，1 是 | - | R1 |
| 1 | data.suit_num | suit_num | - | 99 | 0 | 海南免税：套装数量 | - | R1 |
| 1 | data.volume | volume | - | 99 | 0 | 海南免税：净含量 | - | R1 |
| 1 | data.normal_stock_num | normal_stock_num | - | 99 | 11 | 库存模型V2新增 普通库存 非活动可售 | - | R1 |
| 1 | data.channel_stock_num | channel_stock_num | - | 99 | 11 | 库存模型V2新增 渠道库存 | - | R1 |
| 1 | data.sell_properties | sell_properties | - | 3 | - | 销售属性，代替spec_detail_id123、spec_detail_name123 | - | R1 |
| 2 | data.sell_properties.value_spec_detail_id | value_spec_detail_id | - | 99 | 111 | 规格值id | - | R1 |
| 2 | data.sell_properties.value_name | value_name | - | 2 | 红色 | 规格值名称 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sku/list?app_key=your_appkey_here&method=sku.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sku/list?app_key=your_appkey_here&method=sku.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SkuListRequest request = new SkuListRequest();
SkuListParam param = request.getParam();
param.setProductId(3213654123157L);
param.setOutProductId(243523452435L);
SkuListResponse response = request.execute(accessToken);

```

### php

```php
$request = new SkuListRequest();
$param = new SkuListParam();
$request->setParam($param);
$param->product_id = 3213654123157;
$param->out_product_id = 243523452435;
$response = $request->execute(accessToken);

```

### python

```python
request = SkuListRequest()
param = request.getParams()
param.product_id = 3213654123157
param.out_product_id = 243523452435
response = request.execute(accessToken)

```

### go

```go
request := sku_list_request.New()
param := request.GetParams()
param.ProductId = 3213654123157
param.OutProductId = 243523452435
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SkuListRequest();
var param = request.BuildParam();
param.ProductId = 3213654123157;
param.OutProductId = 243523452435;
var response = request.Execute<SkuListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:5 | 5:[product_id]或[out_product_id]为0 | 检查参数 |
| 40002 | 缺少必选参数 | isv.missing-parameter:3 | [product_id]与[out_product_id]参数至少传一个 | 检查参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:4 | 该商品不属于你 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:7 | 获取库存数失败 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 获取总店店铺标签失败 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:2010401 | 请求被限流, 请稍后再试 | 限流，稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
