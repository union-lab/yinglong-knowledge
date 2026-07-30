# /trace/batchRecord

> 中文说明：订单链路监控批量回传轨迹信息  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/2797>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /trace/batchRecord |
| 中文名称 | 订单链路监控批量回传轨迹信息 |
| 文档目录 | 订单API |
| Article ID | 2797 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2022/12/19 10:10:33 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5000 |

## 使用说明

在订单链路监控场景中，批量(最大20条)回传轨迹信息。 信息回传后能自动记录并统计监控状态信息

## 权限包

- 订单 / 订单轨迹回传（packageType=1）；适用应用类目：打单发货-微应用、订单管理、电商ERP
- 测试 / 测试权限包（packageType=1）；适用应用类目：服务市场按次订购-模板服务、服务市场按次订购-微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | trace.batchRecord | 调用的API接口名称 | - | - |
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
| 0 | trace_list | traceList | true | 3 | - | 轨迹信息列表 | - | - |
| 1 | trace_list.order_id | orderId | true | 2 | 121212 | 订单ID | - | - |
| 1 | trace_list.status | status | true | 2 | ERP_CHECK | 轨迹状态。ERP_TRANSFER(完成转单)，ERP_CHECK(完成审单)，CP_NOTIFY(完成通知仓储配货)，ACCEPT(仓库接单完成)，PRINT(完成打印拣货单/完成打印面单)，PICK(完成拣货)，CHECK(拣货复核完成)，PACKAGE(仓库完成打包)，CONFIRM(仓库通知ERP出货) | - | - |
| 1 | trace_list.record_time | recordTime | true | 2 | 2022-11-01 00:00:00 | 业务动作发生时间；格式：yyyy-MM-dd HH:mm:ss | - | - |
| 1 | trace_list.ext_info | extInfo | false | 5 | - | 扩展信息 | - | - |
| 2 | trace_list.ext_info.out_operator | currentOperator | false | 2 | **店:小王 | 当前操作人 | - | - |
| 2 | trace_list.ext_info.out_wms_app | wmsApp | false | 2 | 12497914 | 关联wms的app信息 | - | - |
| 2 | trace_list.ext_info.out_customer_id | customerId | false | 2 | BJ121 | 货主在wms的身份标识 | - | - |
| 2 | trace_list.ext_info.remark | remark | false | 2 | 自动流转 | 备注信息 | - | - |
| 1 | trace_list.warehouse_code | warehouseCode | false | 2 | CP12 | 仓编码 | - | - |
| 1 | trace_list.product_list | productList | false | 3 | - | 仓商品信息 | - | - |
| 2 | trace_list.product_list.sku_order_id | skuOrderId | true | 2 | 4996000714287787070 | 子订单ID | - | - |
| 2 | trace_list.product_list.count | count | true | 1 | 1 | 商品数量 | - | - |
| 2 | trace_list.product_list.sub_product_info_list | subProductInfoList | false | 3 | - | 子商品信息 | - | - |
| 3 | trace_list.product_list.sub_product_info_list.sku_id | skuId | true | 2 | 30714287782120 | 商品SkuId | - | - |
| 3 | trace_list.product_list.sub_product_info_list.product_id | productId | true | 2 | 30714287787070 | 商品Id | - | - |
| 3 | trace_list.product_list.sub_product_info_list.count | count | true | 1 | 1 | 商品数量 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | error_traces | errorTraces | - | 3 | - | 有错误的轨迹信息。如无错误，则不返回 | - | R1 |
| 1 | error_traces.order_id | orderId | - | 2 | 121212 | 订单ID | - | R1 |
| 1 | error_traces.status | status | - | 2 | ERP_CHECK | 轨迹业务状态 | - | R1 |
| 1 | error_traces.status_message | StatusMessage | - | 2 | 参数错误，RecordTime不能早于当前时间 | 错误信息 | - | R1 |
| 1 | error_traces.status_code | StatusCode | - | 7 | 605090023 | 错误码 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.comtest/encrypt/2?app_key=your_appkey_here&method=test.encrypt.2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.comtest/encrypt/2?app_key=your_appkey_here&method=test.encrypt.2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
TraceBatchRecordRequest request = new TraceBatchRecordRequest();
TraceBatchRecordParam param = request.getParam();
TraceBatchRecordResponse response = request.execute(accessToken);

```

### php

```php
$request = new TraceBatchRecordRequest();
$param = new TraceBatchRecordParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = TraceBatchRecordRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := trace_batchRecord_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new TraceBatchRecordRequest();
var param = request.BuildParam();
var response = request.Execute<TraceBatchRecordResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:605090016 | 参数缺失，OrderId格式不正确 | 请填写正确的OrderId |
| 40004 | 非法的参数 | isv.parameter-invalid:605090017 | 参数缺失，Status格式不正确 | 请填写正确的Status |
| 40004 | 非法的参数 | isv.parameter-invalid:605090018 | 参数错误，RecordTime格式不正确[orderId=%s] | 请填写正确的RecordTime |
| 40004 | 非法的参数 | isv.parameter-invalid:605090023 | 参数错误，RecordTime不能早于当前时间 | 请填写正确的RecordTime |
| 20000 | 系统错误 | isp.service-error:605090001 | 内部服务异常，请稍后重试 | 内部服务异常，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:605090050 | 参数错误,订单不存在 | 请填写正确的OrderId |
| 40004 | 非法的参数 | isv.parameter-invalid:605090005 | 当前用户已关闭订单轨迹服务 | 可调用/trace/addShop接口重新开通 |
| 40004 | 非法的参数 | isv.parameter-invalid:605090006 | 当前用户授权已过期，轨迹记录服务自动关闭 | 店铺对App重新授权后自动开启 |
| 50002 | 业务处理失败 | isv.business-failed:605090025 | 605090025:参数错误，批量回传每次最多支持50条记录 | 605090025:参数错误，批量回传每次最多支持50条记录 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
