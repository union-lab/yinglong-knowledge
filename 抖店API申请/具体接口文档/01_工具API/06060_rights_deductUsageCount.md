# /rights/deductUsageCount

> 中文说明：扣减权益可使用次数  
> 所属类别：工具API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/162/6060>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /rights/deductUsageCount |
| 中文名称 | 扣减权益可使用次数 |
| 文档目录 | 工具API |
| Article ID | 6060 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/6/23 19:03:08 |
| 授权主体 | ["店铺","团长","供应商","MCN机构",""] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

对于支持按次订购的应用, 通过接口扣减权益对应的可使用次数

## 权限包

- 微应用 / 微应用服务市场通用权限（packageType=1）；适用应用类目：微应用-主图视频、AIGC视频创作、AIGC视频洞察、AI智能客服-微应用、AI售后挽单
- 服务市场 / 内容模版（packageType=1）；适用应用类目：创新应用大赛_微应用、内部测类目、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | rights.deductUsageCount | 调用的API接口名称 | - | - |
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
| 0 | outer_biz_id | outerBizId | false | 2 | 6859718390706503687 | 外部业务ID(模板市场为模板code)，非必传，不可与service_id同传 | - | - |
| 0 | service_id | serviceId | false | 99 | 11111 | 抖店服务市场服务ID，非必传，不可与outer_biz_id同传 | - | - |
| 0 | log_id | logId | true | 2 | 20231225105514FF055C41D500275B3726 | 用户使用软件时, 调用抖店开放平台接口的日志id(触发这次扣减操作的业务操作的logId) | - | - |
| 0 | req_id | reqId | true | 2 | isv_service1#user1#202312251010999 | 请求id, 用作幂等键 | - | - |
| 0 | deduct_cnt | deductCnt | true | 99 | 1 | 扣减次数，不支持传负数 | - | - |
| 0 | remark | remark | false | 2 | 备注 | 备注，长度不超过1024 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/rights/deductUsageCount?app_key=your_appkey_here&method=rights.deductUsageCount&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/rights/deductUsageCount?app_key=your_appkey_here&method=rights.deductUsageCount&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
RightsDeductUsageCountRequest request = new RightsDeductUsageCountRequest();
RightsDeductUsageCountParam param = request.getParam();
param.setOuterBizId("6859718390706503687");
param.setServiceId(11111L);
param.setLogId("20231225105514FF055C41D500275B3726");
param.setReqId("isv_service1#user1#202312251010999");
param.setDeductCnt(1L);
param.setRemark("备注");
RightsDeductUsageCountResponse response = request.execute(accessToken);

```

### php

```php
$request = new RightsDeductUsageCountRequest();
$param = new RightsDeductUsageCountParam();
$request->setParam($param);
$param->outer_biz_id = "6859718390706503687";
$param->service_id = 11111;
$param->log_id = "20231225105514FF055C41D500275B3726";
$param->req_id = "isv_service1#user1#202312251010999";
$param->deduct_cnt = 1;
$param->remark = "备注";
$response = $request->execute(accessToken);

```

### python

```python
request = RightsDeductUsageCountRequest()
param = request.getParams()
param.outer_biz_id = "6859718390706503687"
param.service_id = 11111
param.log_id = "20231225105514FF055C41D500275B3726"
param.req_id = "isv_service1#user1#202312251010999"
param.deduct_cnt = 1
param.remark = "备注"
response = request.execute(accessToken)

```

### go

```go
request := rights_deductUsageCount_request.New()
param := request.GetParams()
param.OuterBizId = "6859718390706503687"
param.ServiceId = 11111
param.LogId = "20231225105514FF055C41D500275B3726"
param.ReqId = "isv_service1#user1#202312251010999"
param.DeductCnt = 1
param.Remark = "备注"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new RightsDeductUsageCountRequest();
var param = request.BuildParam();
param.OuterBizId = "6859718390706503687";
param.ServiceId = 11111;
param.LogId = "20231225105514FF055C41D500275B3726";
param.ReqId = "isv_service1#user1#202312251010999";
param.DeductCnt = 1;
param.Remark = "备注";
var response = request.Execute<RightsDeductUsageCountResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:100001 | 参数错误 | 更正传参 |
| 50002 | 业务处理失败 | isv.business-failed:200 | 查询数据库错误 | 等待系统恢复后重试 |
| 50002 | 业务处理失败 | isv.business-failed:500 | 越权, 查询了不属于该应用的数据 | 仅查询有权限的数据 |
| 50002 | 业务处理失败 | isv.business-failed:100 | 系统内部错误 | 等待系统恢复后重试 |
| 50002 | 业务处理失败 | isv.business-failed:300000 | 业务处理失败 | 满足业务条件后重试 |
| 50002 | 业务处理失败 | isv.business-failed:800 | 重复请求, 命中幂等 | 已经执行过请求, 无需重复操作 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
