# /logistics/virtualServicePushSms

> 中文说明：短信回传  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/2676>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/virtualServicePushSms |
| 中文名称 | 短信回传 |
| 文档目录 | 订单API |
| Article ID | 2676 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/10/31 17:18:20 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

供应商回传虚拟号短信结果

## 权限包

- 物流连接平台 / 虚拟号（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.virtualServicePushSms | 调用的API接口名称 | - | - |
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
| 0 | request_id | RequestId | true | 2 | 10bc556c-5f64-45af-b9b2-63a9d98beff4 | 请求id | - | - |
| 0 | record_id | RecordId | true | 2 | C202209101052380A21184104136870 | 服务商短信记录id | - | - |
| 0 | service_code | ServiceCode | true | 2 | volcengine | 服务商身份标识 | - | - |
| 0 | tel_a | TelA | true | 2 | 13013013013 | A真实号码 | - | - |
| 0 | tel_x | TelX | true | 2 | 13141200999 | 虚拟主号 | - | - |
| 0 | tel_b | TelB | true | 2 | 13113113113 | B真实号码 | - | - |
| 0 | sub_id | SubId | false | 2 | 0008b5c563f5486dbb5e99875f3dd9a2 | 绑定关系id | - | - |
| 0 | send_type | SendType | true | 2 | 13 | 13：话单中A号码接收短信 14：话单中A号码发送短信 30：无绑定关系的短信 | - | - |
| 0 | area_code | AreaCode | false | 2 | 010 | 区域 | - | - |
| 0 | receive_time | ReceiveTime | true | 2 | 2006-01-02 15:04:05 | 短信接收时间 | - | - |
| 0 | sms_content | SmsContent | true | 2 | 【测试】这是一条测试短信 | 短信内容 | - | - |
| 0 | sms_result | SmsResult | true | 2 | SMS_SUCCESS | 发送状态 | - | - |
| 0 | sms_num | SmsNum | true | 7 | 1 | 短信条数 | - | - |
| 0 | remark | Remark | false | 2 | 发送成功的短信无需解析 | 备注 | - | - |
| 0 | ext | Ext | false | 2 | {} | 扩展字段 | - | - |
| 0 | tel_xext | TelXext | false | 2 | 1234 | 分机号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | Success | - | 4 | true | 是否成功 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/virtualServicePushSms?app_key=your_appkey_here&method=logistics.virtualServicePushSms&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/virtualServicePushSms?app_key=your_appkey_here&method=logistics.virtualServicePushSms&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsVirtualServicePushSmsRequest request = new LogisticsVirtualServicePushSmsRequest();
LogisticsVirtualServicePushSmsParam param = request.getParam();
param.setRequestId("10bc556c-5f64-45af-b9b2-63a9d98beff4");
param.setRecordId("C202209101052380A21184104136870");
param.setServiceCode("volcengine");
param.setTelA("13013013013");
param.setTelX("13141200999");
param.setTelB("13113113113");
param.setSubId("0008b5c563f5486dbb5e99875f3dd9a2");
param.setSendType("13");
param.setAreaCode("010");
param.setReceiveTime("2006-01-02 15:04:05");
param.setSmsContent("【测试】这是一条测试短信");
param.setSmsResult("SMS_SUCCESS");
param.setSmsNum(1);
param.setRemark("发送成功的短信无需解析");
param.setExt("{}");
param.setTelXext("1234");
LogisticsVirtualServicePushSmsResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsVirtualServicePushSmsRequest();
$param = new LogisticsVirtualServicePushSmsParam();
$request->setParam($param);
$param->request_id = "10bc556c-5f64-45af-b9b2-63a9d98beff4";
$param->record_id = "C202209101052380A21184104136870";
$param->service_code = "volcengine";
$param->tel_a = "13013013013";
$param->tel_x = "13141200999";
$param->tel_b = "13113113113";
$param->sub_id = "0008b5c563f5486dbb5e99875f3dd9a2";
$param->send_type = "13";
$param->area_code = "010";
$param->receive_time = "2006-01-02 15:04:05";
$param->sms_content = "【测试】这是一条测试短信";
$param->sms_result = "SMS_SUCCESS";
$param->sms_num = 1;
$param->remark = "发送成功的短信无需解析";
$param->ext = "{}";
$param->tel_xext = "1234";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsVirtualServicePushSmsRequest()
param = request.getParams()
param.request_id = "10bc556c-5f64-45af-b9b2-63a9d98beff4"
param.record_id = "C202209101052380A21184104136870"
param.service_code = "volcengine"
param.tel_a = "13013013013"
param.tel_x = "13141200999"
param.tel_b = "13113113113"
param.sub_id = "0008b5c563f5486dbb5e99875f3dd9a2"
param.send_type = "13"
param.area_code = "010"
param.receive_time = "2006-01-02 15:04:05"
param.sms_content = "【测试】这是一条测试短信"
param.sms_result = "SMS_SUCCESS"
param.sms_num = 1
param.remark = "发送成功的短信无需解析"
param.ext = "{}"
param.tel_xext = "1234"
response = request.execute(accessToken)

```

### go

```go
request := logistics_virtualServicePushSms_request.New()
param := request.GetParams()
param.RequestId = "10bc556c-5f64-45af-b9b2-63a9d98beff4"
param.RecordId = "C202209101052380A21184104136870"
param.ServiceCode = "volcengine"
param.TelA = "13013013013"
param.TelX = "13141200999"
param.TelB = "13113113113"
param.SubId = "0008b5c563f5486dbb5e99875f3dd9a2"
param.SendType = "13"
param.AreaCode = "010"
param.ReceiveTime = "2006-01-02 15:04:05"
param.SmsContent = "【测试】这是一条测试短信"
param.SmsResult = "SMS_SUCCESS"
param.SmsNum = 1
param.Remark = "发送成功的短信无需解析"
param.Ext = "{}"
param.TelXext = "1234"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsVirtualServicePushSmsRequest();
var param = request.BuildParam();
param.RequestId = "10bc556c-5f64-45af-b9b2-63a9d98beff4";
param.RecordId = "C202209101052380A21184104136870";
param.ServiceCode = "volcengine";
param.TelA = "13013013013";
param.TelX = "13141200999";
param.TelB = "13113113113";
param.SubId = "0008b5c563f5486dbb5e99875f3dd9a2";
param.SendType = "13";
param.AreaCode = "010";
param.ReceiveTime = "2006-01-02 15:04:05";
param.SmsContent = "【测试】这是一条测试短信";
param.SmsResult = "SMS_SUCCESS";
param.SmsNum = 1;
param.Remark = "发送成功的短信无需解析";
param.Ext = "{}";
param.TelXext = "1234";
var response = request.Execute<LogisticsVirtualServicePushSmsResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:-1 | 系统错误 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
