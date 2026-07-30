# /logistics/fetchBluetoothCmd

> 中文说明：获取蓝牙打印指令  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/4142>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/fetchBluetoothCmd |
| 中文名称 | 获取蓝牙打印指令 |
| 文档目录 | 电子面单API |
| Article ID | 4142 |
| 文档版本 | V1.05 |
| 官方更新时间 | 2023/6/28 14:26:21 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

电子面单场景下，获取蓝牙的打印指令

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.fetchBluetoothCmd | 调用的API接口名称 | - | - |
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
| 0 | waybill_applies | waybillApplies | true | 3 | - | 运单信息，一次最多请求200单。 | - | - |
| 1 | waybill_applies.track_no | trackNo | true | 2 | 12345 | 运单号 | - | - |
| 1 | waybill_applies.std_template_code | stdTemplateCode | true | 2 | zt_76_130_v2 | 标准模板code。已支持的模板信息 https://bytedance.feishu.cn/sheets/VFmQsxJNth8t2OtWWDJca5BbnDb?sheet=p92gXy | - | - |
| 1 | waybill_applies.cus_template_url | cusTemplateUrl | false | 2 | https://lf3-cm.ecombdstatic.com/obj/logistics-davinci/publicElements/zt_76_130_v2_1633693132.xml | 自定义区模板url。（传了cus_print_data后url和code其中一个必传） | - | - |
| 1 | waybill_applies.cus_template_code | cusTemplateCode | false | 2 | 1234 | 自定义区模板code（支持模板设计器的模板）。设计器地址：https://cloudprint.douyinec.com/ | - | - |
| 1 | waybill_applies.cus_print_data | cusPrintData | false | 2 | {"customKey":"customValue"} | 自定义区json数据 | - | - |
| 0 | remote_print_config | remotePrintConfig | false | 5 | - | 打印配置 | - | - |
| 1 | remote_print_config.need_top_logo | needTopLogo | - | 4 | true | 是否需要打印物流商logo | - | - |
| 1 | remote_print_config.horizontal_offset | horizontalOffset | false | 7 | 1 | 水平偏移量，单位mm | - | - |
| 1 | remote_print_config.vertical_offset | verticalOffset | false | 7 | 1 | 垂直偏移量，单位mm | - | - |
| 1 | remote_print_config.print_direction | printDirection | false | 2 | normal | [必传字段] 打印方向。normal-正常；reverse-反转。 | - | - |
| 1 | remote_print_config.printer_name | printerName | true | 2 | QR-488BT_xx | 打印机名称。查看已支持的打印机信息 https://bytedance.feishu.cn/sheets/VFmQsxJNth8t2OtWWDJca5BbnDb?sheet=44acf5 | - | - |
| 0 | cmd_type | cmdType | true | 2 | CPCL | 打印机指令类型。CPCL；TSPL | - | - |
| 0 | cmd_encode | cmdEncode | true | 2 | gzip_byte | 编码方式。<br>origin：原串->字节数组->base64；<br>gbk：原串->字节数组->gbk->base64；<br>gzip_byte：原串->字节数组->gzip压缩->base64； | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | waybill_infos | waybillInfos | - | 3 | - | 运单的打印指令 | - | R1 |
| 1 | waybill_infos.track_no | trackNo | - | 2 | 1234 | 运单号 | - | - |
| 1 | waybill_infos.print_data | printData | - | 2 | 1234 | 打印指令 | - | - |
| 0 | err_infos | errInfos | - | 3 | - | 错误信息 | - | R1 |
| 1 | err_infos.track_no | trackNo | - | 2 | 1234 | 运单号 | - | - |
| 1 | err_infos.err_code | errCode | - | 7 | 100001 | 错误code | - | - |
| 1 | err_infos.err_msg | errMsg | - | 2 | 参数有误，请检查请求参数 | 错误msg | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/yunc/erpInboundCancel?app_key=your_appkey_here&method=yunc.erpInboundCancel&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/yunc/erpInboundCancel?app_key=your_appkey_here&method=yunc.erpInboundCancel&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsFetchBluetoothCmdRequest request = new LogisticsFetchBluetoothCmdRequest();
LogisticsFetchBluetoothCmdParam param = request.getParam();
param.setCmdType("CPCL");
param.setCmdEncode("gzip_byte");
LogisticsFetchBluetoothCmdResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsFetchBluetoothCmdRequest();
$param = new LogisticsFetchBluetoothCmdParam();
$request->setParam($param);
$param->cmd_type = "CPCL";
$param->cmd_encode = "gzip_byte";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsFetchBluetoothCmdRequest()
param = request.getParams()
param.cmd_type = "CPCL"
param.cmd_encode = "gzip_byte"
response = request.execute(accessToken)

```

### go

```go
request := logistics_fetchBluetoothCmd_request.New()
param := request.GetParams()
param.CmdType = "CPCL"
param.CmdEncode = "gzip_byte"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsFetchBluetoothCmdRequest();
var param = request.BuildParam();
param.CmdType = "CPCL";
param.CmdEncode = "gzip_byte";
var response = request.Execute<LogisticsFetchBluetoothCmdResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:100001 | 参数有误，请检查请求参数 | 检查入参 |
| 50002 | 业务处理失败 | isv.business-failed:100002 | 系统错误，请稍后重试 | 联系开发人员 |
| 50002 | 业务处理失败 | isv.business-failed:101115 | 101115:该模板不存在 | 检查模板信息 |
| 50002 | 业务处理失败 | isv.business-failed:101113 | 101113:暂不支持该品牌的打印机型号 | 检查打印机名称 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
