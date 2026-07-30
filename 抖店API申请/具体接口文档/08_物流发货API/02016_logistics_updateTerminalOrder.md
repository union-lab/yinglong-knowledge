# /logistics/updateTerminalOrder

> 中文说明：末端订单状态推送  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2016>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/updateTerminalOrder |
| 中文名称 | 末端订单状态推送 |
| 文档目录 | 物流发货API |
| Article ID | 2016 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2024/1/4 16:00:42 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

末端订单状态推送

## 权限包

- 物流连接平台 / 快递柜寄件（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.updateTerminalOrder | 调用的API接口名称 | - | - |
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
| 0 | bizType | bizType | false | 2 | CABINET_STATUS | 推送状态标识 | - | - |
| 0 | cabinetNum | cabinetNum | false | 2 | 12 | 快递柜编码 | - | - |
| 0 | cabinetName | cabinetName | false | 2 | 12 | 快递柜名称 | - | - |
| 0 | cabinetLongitude | cabinetLongitude | false | 2 | 1234 | 快递柜经度 | - | - |
| 0 | cabinetLatitude | cabinetLatitude | false | 2 | 1234 | 快递柜纬度 | - | - |
| 0 | cabinetAddress | cabinetAddress | false | 5 | - | 快递柜地址 | - | - |
| 1 | cabinetAddress.countryCode | countryCode | false | 2 | cn | 国家编码 | - | - |
| 1 | cabinetAddress.provinceCode | provinceCode | false | 2 | 22 | 省编码 | - | - |
| 1 | cabinetAddress.provinceName | provinceName | false | 2 | 浙江省 | 省名称 | - | - |
| 1 | cabinetAddress.cityCode | cityCode | false | 2 | 220000 | 市编码 | - | - |
| 1 | cabinetAddress.cityName | cityName | false | 2 | 杭州市 | 市名称 | - | - |
| 1 | cabinetAddress.districtCode | districtCode | false | 2 | 220001 | 区编码 | - | - |
| 1 | cabinetAddress.districtName | districtName | false | 2 | 余杭区 | 区名称 | - | - |
| 1 | cabinetAddress.streetCode | streetCode | false | 2 | 220011 | 街道编码 | - | - |
| 1 | cabinetAddress.streetName | streetName | false | 2 | 仓前街道 | 街道名称 | - | - |
| 1 | cabinetAddress.detailAddress | detailAddress | false | 2 | 爱力中心 | 详细地址 | - | - |
| 0 | orderId | orderId | false | 2 | lfo12345678 | 订单号 | - | - |
| 0 | operationTime | operationTime | false | 2 | 2022-06-15 11:20:32 | 操作时间 | - | - |
| 0 | terminalInfo | terminalInfo | false | 5 | - | 订单信息 | - | - |
| 1 | terminalInfo.courierName | courierName | false | 2 | 张三 | 快递员姓名 | - | - |
| 1 | terminalInfo.courierTel | courierTel | false | 2 | 112345656 | 快递员号码 | - | - |
| 1 | terminalInfo.waybillCode | waybillCode | false | 2 | 1234567 | 运单号 | - | - |
| 1 | terminalInfo.express | express | false | 2 | jd | 物流商编码 | - | - |
| 1 | terminalInfo.operatorName | operatorName | false | 2 | 李四 | 取件人姓名 | - | - |
| 1 | terminalInfo.operatorPhone | operatorPhone | false | 2 | 1234567 | 取件人号码 | - | - |
| 1 | terminalInfo.weightInfo | weightInfo | false | 5 | - | 核重核价信息 | - | - |
| 2 | terminalInfo.weightInfo.bulkyWeight | bulkyWeight | - | 99 | 13 | 泡重 | - | - |
| 2 | terminalInfo.weightInfo.bulkyRatio | bulkyRatio | - | 99 | 13 | 泡重比 | - | - |
| 2 | terminalInfo.weightInfo.length | length | - | 9 | 13.0 | 长度 单位cm | - | - |
| 2 | terminalInfo.weightInfo.width | width | - | 9 | 13.0 | 宽度 单位cm | - | - |
| 2 | terminalInfo.weightInfo.height | height | - | 9 | 13.0 | 高度 单位cm | - | - |
| 2 | terminalInfo.weightInfo.traceType | traceType | - | 2 | TRANS | 物流节点 | - | - |
| 2 | terminalInfo.weightInfo.site | site | - | 2 | xx仓库 | 站点 | - | - |
| 2 | terminalInfo.weightInfo.sumFee | sumFee | false | 99 | 12 | 总费用 | - | - |
| 2 | terminalInfo.weightInfo.insuredFee | insuredFee | false | 99 | 12 | 保价费用 | - | - |
| 2 | terminalInfo.weightInfo.packageFee | packageFee | false | 99 | 12 | 包装费用 | - | - |
| 2 | terminalInfo.weightInfo.actualWeight | actualWeight | false | 99 | 12 | 实际重量 | - | - |
| 2 | terminalInfo.weightInfo.chargedWeight | chargedWeight | false | 99 | 12 | 计费重量 | - | - |
| 2 | terminalInfo.weightInfo.chargedType | chargedType | false | 99 | 1 | 计费类型 | - | - |
| 0 | requestId | requestId | false | 2 | 123456789 | 请求唯一标识 | - | - |
| 0 | weightTimes | weightTimes | false | 99 | 1 | 核重核价次数 | - | - |
| 0 | transferOrderResult | transferOrderResult | false | 4 | true | 转单结果 | - | - |
| 0 | transferErrCode | transferErrCode | false | 2 | 10823 | 转单失败编码 | - | - |
| 0 | transferErrReason | transferErrReason | false | 2 | 寄方电话加入防骚扰 | 转单失败原因 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | isWeightException | isWeightException | - | 4 | true | 是否重量异常 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/updateTerminalOrder?app_key=your_appkey_here&method=logistics.updateTerminalOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/updateTerminalOrder?app_key=your_appkey_here&method=logistics.updateTerminalOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsUpdateTerminalOrderRequest request = new LogisticsUpdateTerminalOrderRequest();
LogisticsUpdateTerminalOrderParam param = request.getParam();
param.setBizType("CABINET_STATUS");
param.setCabinetNum("12");
param.setCabinetName("12");
param.setCabinetLongitude("1234");
param.setCabinetLatitude("1234");
param.setOrderId("lfo12345678");
param.setOperationTime("2022-06-15 11:20:32");
param.setRequestId("123456789");
param.setWeightTimes(1L);
param.setTransferOrderResult(true);
param.setTransferErrCode("10823");
param.setTransferErrReason("寄方电话加入防骚扰");
LogisticsUpdateTerminalOrderResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsUpdateTerminalOrderRequest();
$param = new LogisticsUpdateTerminalOrderParam();
$request->setParam($param);
$param->bizType = "CABINET_STATUS";
$param->cabinetNum = "12";
$param->cabinetName = "12";
$param->cabinetLongitude = "1234";
$param->cabinetLatitude = "1234";
$param->orderId = "lfo12345678";
$param->operationTime = "2022-06-15 11:20:32";
$param->requestId = "123456789";
$param->weightTimes = 1;
$param->transferOrderResult = true;
$param->transferErrCode = "10823";
$param->transferErrReason = "寄方电话加入防骚扰";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsUpdateTerminalOrderRequest()
param = request.getParams()
param.bizType = "CABINET_STATUS"
param.cabinetNum = "12"
param.cabinetName = "12"
param.cabinetLongitude = "1234"
param.cabinetLatitude = "1234"
param.orderId = "lfo12345678"
param.operationTime = "2022-06-15 11:20:32"
param.requestId = "123456789"
param.weightTimes = 1
param.transferOrderResult = true
param.transferErrCode = "10823"
param.transferErrReason = "寄方电话加入防骚扰"
response = request.execute(accessToken)

```

### go

```go
request := logistics_updateTerminalOrder_request.New()
param := request.GetParams()
param.BizType = "CABINET_STATUS"
param.CabinetNum = "12"
param.CabinetName = "12"
param.CabinetLongitude = "1234"
param.CabinetLatitude = "1234"
param.OrderId = "lfo12345678"
param.OperationTime = "2022-06-15 11:20:32"
param.RequestId = "123456789"
param.WeightTimes = 1
param.TransferOrderResult = true
param.TransferErrCode = "10823"
param.TransferErrReason = "寄方电话加入防骚扰"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsUpdateTerminalOrderRequest();
var param = request.BuildParam();
param.BizType = "CABINET_STATUS";
param.CabinetNum = "12";
param.CabinetName = "12";
param.CabinetLongitude = "1234";
param.CabinetLatitude = "1234";
param.OrderId = "lfo12345678";
param.OperationTime = "2022-06-15 11:20:32";
param.RequestId = "123456789";
param.WeightTimes = 1;
param.TransferOrderResult = true;
param.TransferErrCode = "10823";
param.TransferErrReason = "寄方电话加入防骚扰";
var response = request.Execute<LogisticsUpdateTerminalOrderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:11000 | 参数错误 | 修改参数 |
| 50002 | 业务处理失败 | isv.business-failed:13001 | bizType非法 | 修改bizType参数 |
| 50002 | 业务处理失败 | isv.business-failed:11005 | 订单不存在 | 修改订单号 |
| 50002 | 业务处理失败 | isv.business-failed:12001 | 状态机初始化失败 | 联系技术 |
| 50002 | 业务处理失败 | isv.business-failed:12002 | 当前状态不允许更新 | 联系技术 |
| 50002 | 业务处理失败 | isv.business-failed:11002 | mq异常 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:11001 | 数据库异常 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:11017 | 数据库并发异常 | 联系技术 |
| 50002 | 业务处理失败 | isv.business-failed:13003 | 订单已取消 | 联系技术 |
| 50002 | 业务处理失败 | isv.business-failed:11019 | 重量异常 | 二次核重核价 |
| 50002 | 业务处理失败 | isv.business-failed:11003 | 内部系统异常 | 联系技术 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 可重试错误码 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
