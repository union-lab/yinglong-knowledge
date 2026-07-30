# /crossBorder/orderOperate

> 中文说明：服务商回传仓储  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/526>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /crossBorder/orderOperate |
| 中文名称 | 服务商回传仓储 |
| 文档目录 | 物流发货API |
| Article ID | 526 |
| 文档版本 | V12.01 |
| 官方更新时间 | 2023/5/19 11:41:08 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

服务商回传仓储

## 权限包

- 跨境 / 跨境履约清关服务包（仓服务商）（packageType=1）；适用应用类目：跨境供应链服务、跨境电商、仓储物流-跨境4PL服务商

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | crossBorder.orderOperate | 调用的API接口名称 | - | - |
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
| 0 | order_id | order_id | true | 2 | 1234 | 字节电商平台的交易订单号 | - | - |
| 0 | vendor | vendor | true | 2 | QKQTEST | 字节给供应链服务商定义的编码 | - | - |
| 0 | status | status | true | 1 | 1 | 仓储作业状态：1入库 2打包 3 发货成功 4出库失败 6订单开始拣货 7订单拣货完成 9接单成功 10接单失败 | - | - |
| 0 | occurrence_time | occurrence_time | true | 2 | 1656473755 | 物流状态的真实发生时间，时间戳，单位秒 | - | - |
| 0 | transportation | transportation | false | 5 | - | 国内物流信息(注意：如果提供了这块信息，domestic_carrier/domestic_trans_no/domestic_ship_address是必传的；对于接单成功事件，集货场景下必传，备货场景下可不传；对于出库完成事件，快递公司编码domestic_carrier和运单号domestic_trans_no必填且必须匹配，4PL=T时快递公司编码必须与下发时一致或者在兜底公司列表，4PL=T&仓配分拆=T时快递公司编码和运单号必须与下发时一致) | - | - |
| 1 | transportation.domestic_carrier | domestic_carrier | false | 2 | JD | 国内快递公司编码 按字节定义的编码推送 | - | - |
| 1 | transportation.domestic_trans_no | domestic_trans_no | false | 2 | JD12345 | 国内运单号（BBC/BC/CC/UPU） | - | - |
| 1 | transportation.domestic_ship_address | domestic_ship_address | false | 2 | 北京市海淀区太阳镇街道 | 国内发货地址（国内快递揽收地址） | - | - |
| 1 | transportation.product_num | product_num | false | 1 | 1 | 商品件数 | - | - |
| 1 | transportation.mark | mark | false | 2 | LD | 快递公司大头笔，便于快速识别地址 | - | - |
| 1 | transportation.waybill | waybill | false | 2 | https://ww.werwer.com/werwer | PDF格式的电子面单URL | - | - |
| 1 | transportation.delivery_name | delivery_name | false | 2 | 张三 | 发货人name | - | - |
| 1 | transportation.delivery_tel | delivery_tel | false | 2 | 1123123123 | 发货人电话 | - | - |
| 0 | package | package | false | 5 | - | 包裹信息 | - | - |
| 1 | package.packing_materials | packingMaterials | true | 3 | - | 包材信息，原则上只需回传1个 | - | - |
| 2 | package.packing_materials.packing_material_code | packingMaterialCode | true | 2 | SA | 包材编码 | - | - |
| 2 | package.packing_materials.packing_material_name | packingMaterialName | true | 2 | 名称 | 包材名称 | - | - |
| 2 | package.packing_materials.packing_material_num | packingMaterialNum | true | 1 | 1 | 包材数量 | - | - |
| 1 | package.consumables_materials | consumablesMaterials | false | 3 | - | 耗材信息 | - | - |
| 2 | package.consumables_materials.consumables_code | consumablesCode | false | 2 | SA | 耗材编码 | - | - |
| 2 | package.consumables_materials.consumables_name | consumablesName | false | 2 | 名称 | 耗材名称 | - | - |
| 2 | package.consumables_materials.consumables_num | consumablesNum | false | 1 | 1 | 耗材数量 | - | - |
| 1 | package.package_weight | packageWeight | true | 1 | 12 | 包裹重量,单位g | - | - |
| 1 | package.package_items | packageItems | false | 3 | - | 包裹明细信息 | - | - |
| 2 | package.package_items.item_id | itemId | false | 2 | 7074780 | 货品编码 | - | - |
| 2 | package.package_items.sku_id | skuId | false | 1 | 123456 | 平台sku编号 | - | - |
| 2 | package.package_items.item_no | itemNo | false | 2 | 123456 | 外部服务商货品编码 | - | - |
| 2 | package.package_items.inventory_type | inventoryType | false | 1 | 1 | 库存类型,正品-1，残次-2 | - | - |
| 2 | package.package_items.quantity | quantity | false | 1 | 1 | 数量 | - | - |
| 2 | package.package_items.batch_info | batchInfo | false | 5 | - | 批属性 | - | - |
| 3 | package.package_items.batch_info.batch_number | batchNumber | false | 2 | 12345 | 批次号 | - | - |
| 3 | package.package_items.batch_info.product_date | productDate | false | 1 | 1640966400 | 生产日期 秒级时间戳 | - | - |
| 3 | package.package_items.batch_info.expire_date | expireDate | false | 1 | 1640966400 | 失效日期 秒级时间戳 | - | - |
| 3 | package.package_items.batch_info.receipt_date | receiptDate | false | 1 | 1640966400 | 入库日期 秒级时间戳 | - | - |
| 3 | package.package_items.batch_info.supplier_id | supplierId | false | 2 | hfkg | 供应商 | - | - |
| 3 | package.package_items.batch_info.scm_inbound_order | scmInboundOrder | false | 2 | 23456 | SCM入库单号 | - | - |
| 3 | package.package_items.batch_info.lot_id | lotId | false | 2 | 12345 | 批次id | - | - |
| 3 | package.package_items.batch_info.batch_extend | batchExtend | false | 2 | {"extend":"info"} | 批次扩展字段，json格式 | - | - |
| 2 | package.package_items.line_no | lineNo | false | 2 | 123 | 行号 | - | - |
| 0 | error_info | error_info | false | 5 | - | 异常信息（【发货失败】状态时，必须提供） | - | - |
| 1 | error_info.error_code | error_code | false | 2 | 123 | 发货失败或者接单失败异常码 | - | - |
| 1 | error_info.error_msg | error_msg | false | 2 | 仓储我败了 | 详细失败原因 | - | - |
| 0 | warehouse_code | warehouse_code | false | 2 | 101 | 仓库编码 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/crossBorder/orderOperate?app_key=your_appkey_here&method=crossBorder.orderOperate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/crossBorder/orderOperate?app_key=your_appkey_here&method=crossBorder.orderOperate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
CrossBorderOrderOperateRequest request = new CrossBorderOrderOperateRequest();
CrossBorderOrderOperateParam param = request.getParam();
param.setOrderId("1234");
param.setVendor("QKQTEST");
param.setStatus(1L);
param.setOccurrenceTime("1656473755");
param.setWarehouseCode("101");
CrossBorderOrderOperateResponse response = request.execute(accessToken);

```

### php

```php
$request = new CrossBorderOrderOperateRequest();
$param = new CrossBorderOrderOperateParam();
$request->setParam($param);
$param->order_id = "1234";
$param->vendor = "QKQTEST";
$param->status = 1;
$param->occurrence_time = "1656473755";
$param->warehouse_code = "101";
$response = $request->execute(accessToken);

```

### python

```python
request = CrossBorderOrderOperateRequest()
param = request.getParams()
param.order_id = "1234"
param.vendor = "QKQTEST"
param.status = 1
param.occurrence_time = "1656473755"
param.warehouse_code = "101"
response = request.execute(accessToken)

```

### go

```go
request := crossBorder_orderOperate_request.New()
param := request.GetParams()
param.OrderId = "1234"
param.Vendor = "QKQTEST"
param.Status = 1
param.OccurrenceTime = "1656473755"
param.WarehouseCode = "101"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new CrossBorderOrderOperateRequest();
var param = request.BuildParam();
param.OrderId = "1234";
param.Vendor = "QKQTEST";
param.Status = 1;
param.OccurrenceTime = "1656473755";
param.WarehouseCode = "101";
var response = request.Execute<CrossBorderOrderOperateResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2018 | 2018:此订单已开始拦截，请核实订单状态 | 先回传拦截状态 |
| 50002 | 业务处理失败 | isv.business-failed:2019 | 2019:此订单处于拦截中，请核实订单状态 | 先回传拦截状态 |
| 50002 | 业务处理失败 | isv.business-failed:2020 | 2020:订单已拦截成功，请核实订单状态 | 核实订单状态 |
| 50002 | 业务处理失败 | isv.business-failed:1004 | 1004:节点时序状态有误 | 节点时序状态有误，请核实订单状态 |
| 50002 | 业务处理失败 | isv.business-failed:1005 | 1005:参数不合法 | 请核实请求参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:2013 | 2013:包耗材信息错误 | 核实包耗材信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:1002 | 1002:参数不合法 | 请核实请求参数 |
| 50002 | 业务处理失败 | isv.business-failed:2022 | 2022:biz error code [2022] message 时间格式错误 | 时间格式错误,请修改时间格式 |
| 50002 | 业务处理失败 | isv.business-failed:2021 | 2021:biz error code [2021] message 接单失败异常编码不符合平台规范，请核实后重试 | 接单失败异常编码不符合平台规范，请核实后重试 |
| 50002 | 业务处理失败 | isv.business-failed:1234 | 1234:biz error code [1234] message 相同LO已在处理中 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:1204 | 1204:系统内部错误 | 系统内部错误 |
| 50002 | 业务处理失败 | isv.business-failed:1003 | 1003:当前订单为自研单据，不允许回传【订单开始拣货】 | 自研单据不允许回传 |
| 50002 | 业务处理失败 | isv.business-failed:1001 | 1001:服务商鉴权失败 | 服务商鉴权失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
