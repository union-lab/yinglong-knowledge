# /logistics/pushPickupCode

> 中文说明：末端服务商推送取件码信息  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2671>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/pushPickupCode |
| 中文名称 | 末端服务商推送取件码信息 |
| 文档目录 | 物流发货API |
| Article ID | 2671 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/10/31 13:59:02 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

末端服务商推送取件码信息

## 权限包

- 物流连接平台 / 运单信息（packageType=1）
- 物流连接平台 / 末端系统（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.pushPickupCode | 调用的API接口名称 | - | - |
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
| 0 | waybill_code | waybillCode | true | 2 | - | 包裹单号 | - | - |
| 0 | express_company | expressCompany | true | 2 | shunfeng、jd等，具体code联调时与开发确认 | 快递公司 | - | - |
| 0 | partner_code | partnerCode | true | 2 | mamayizhan等，具体code联调时与开发确认 | 请求方服务商编码 | - | - |
| 0 | pick_code | pickCode | true | 2 | "21-04-9821"或"873291" | 取件码 | - | - |
| 0 | pick_site_type | pickSiteType | true | 2 | 1 | 取件点类型  1-驿站（菜鸟驿站、蜂站），2-自提柜（丰巢） | - | - |
| 0 | pick_site_name | pickSiteName | true | 2 | 仙颐园小区熊猫快收 | 取件点名称 | - | - |
| 0 | pick_site_code | pickSiteCode | true | 2 | 服务商侧柜子/驿站编码 | 取件点编码 | - | - |
| 0 | pick_site_address | pickSiteAddress | true | 2 | 冠云路仙颐园小区4号楼7单元102室 | 取件点详细地址 | - | - |
| 0 | pick_site_phone | pickSitePhone | true | 2 | 17812345678 | 取件点联系方式 | - | - |
| 0 | partner_source | partnerSource | true | 2 | 服务商侧柜子/驿站传“1”即可 | 请求方服务商来源 | - | - |
| 0 | operation_time | operationTime | true | 2 | 2022-10-29 14:59:46 | 操作时间 | - | - |
| 0 | extend | extend | false | 8 | - | 扩展字段 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | result | result | - | 4 | true | 请求结果 | - | R1 |
| 0 | return_code | returnCode | - | 2 | 0 | 返回码 | - | R1 |
| 0 | message | message | - | 2 | 成功 | 返回信息 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/iop/waybillReturn?app_key=your_appkey_here&method=iop.waybillReturn&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/iop/waybillReturn?app_key=your_appkey_here&method=iop.waybillReturn&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsPushPickupCodeRequest request = new LogisticsPushPickupCodeRequest();
LogisticsPushPickupCodeParam param = request.getParam();
param.setWaybillCode("-");
param.setExpressCompany("shunfeng、jd等，具体code联调时与开发确认");
param.setPartnerCode("mamayizhan等，具体code联调时与开发确认");
param.setPickCode("\"21-04-9821\"或\"873291\"");
param.setPickSiteType("1");
param.setPickSiteName("仙颐园小区熊猫快收");
param.setPickSiteCode("服务商侧柜子/驿站编码");
param.setPickSiteAddress("冠云路仙颐园小区4号楼7单元102室");
param.setPickSitePhone("17812345678");
param.setPartnerSource("服务商侧柜子/驿站传“1”即可");
param.setOperationTime("2022-10-29 14:59:46");
LogisticsPushPickupCodeResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsPushPickupCodeRequest();
$param = new LogisticsPushPickupCodeParam();
$request->setParam($param);
$param->waybill_code = "-";
$param->express_company = "shunfeng、jd等，具体code联调时与开发确认";
$param->partner_code = "mamayizhan等，具体code联调时与开发确认";
$param->pick_code = "\"21-04-9821\"或\"873291\"";
$param->pick_site_type = "1";
$param->pick_site_name = "仙颐园小区熊猫快收";
$param->pick_site_code = "服务商侧柜子/驿站编码";
$param->pick_site_address = "冠云路仙颐园小区4号楼7单元102室";
$param->pick_site_phone = "17812345678";
$param->partner_source = "服务商侧柜子/驿站传“1”即可";
$param->operation_time = "2022-10-29 14:59:46";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsPushPickupCodeRequest()
param = request.getParams()
param.waybill_code = "-"
param.express_company = "shunfeng、jd等，具体code联调时与开发确认"
param.partner_code = "mamayizhan等，具体code联调时与开发确认"
param.pick_code = "\"21-04-9821\"或\"873291\""
param.pick_site_type = "1"
param.pick_site_name = "仙颐园小区熊猫快收"
param.pick_site_code = "服务商侧柜子/驿站编码"
param.pick_site_address = "冠云路仙颐园小区4号楼7单元102室"
param.pick_site_phone = "17812345678"
param.partner_source = "服务商侧柜子/驿站传“1”即可"
param.operation_time = "2022-10-29 14:59:46"
response = request.execute(accessToken)

```

### go

```go
request := logistics_pushPickupCode_request.New()
param := request.GetParams()
param.WaybillCode = "-"
param.ExpressCompany = "shunfeng、jd等，具体code联调时与开发确认"
param.PartnerCode = "mamayizhan等，具体code联调时与开发确认"
param.PickCode = "\"21-04-9821\"或\"873291\""
param.PickSiteType = "1"
param.PickSiteName = "仙颐园小区熊猫快收"
param.PickSiteCode = "服务商侧柜子/驿站编码"
param.PickSiteAddress = "冠云路仙颐园小区4号楼7单元102室"
param.PickSitePhone = "17812345678"
param.PartnerSource = "服务商侧柜子/驿站传“1”即可"
param.OperationTime = "2022-10-29 14:59:46"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsPushPickupCodeRequest();
var param = request.BuildParam();
param.WaybillCode = "-";
param.ExpressCompany = "shunfeng、jd等，具体code联调时与开发确认";
param.PartnerCode = "mamayizhan等，具体code联调时与开发确认";
param.PickCode = "\"21-04-9821\"或\"873291\"";
param.PickSiteType = "1";
param.PickSiteName = "仙颐园小区熊猫快收";
param.PickSiteCode = "服务商侧柜子/驿站编码";
param.PickSiteAddress = "冠云路仙颐园小区4号楼7单元102室";
param.PickSitePhone = "17812345678";
param.PartnerSource = "服务商侧柜子/驿站传“1”即可";
param.OperationTime = "2022-10-29 14:59:46";
var response = request.Execute<LogisticsPushPickupCodeResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:11000 | 11000:pickSitePhone is empty | 11000:pickSitePhone is empty |
| 50002 | 业务处理失败 | isv.business-failed:11004 | 11004:系统异常 | 11004:系统异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
