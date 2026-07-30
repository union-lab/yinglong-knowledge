# /product/qualityTask

> 中文说明：商品每日诊断任务查询API  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1829>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/qualityTask |
| 中文名称 | 商品每日诊断任务查询API |
| 文档目录 | 商品API |
| Article ID | 1829 |
| 文档版本 | V1.04 |
| 官方更新时间 | 2021/9/8 14:45:15 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 560 |

## 使用说明

商品每日诊断任务查询API
根据店铺ID查询最新每日诊断任务详情

## 权限包

- 商品 / 商品成长中心（packageType=1）；适用应用类目：选品铺货-微应用、卡券商工具、撮合服务商、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.qualityTask | 调用的API接口名称 | - | - |
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
| 0 | brief_only | brief_only | false | 4 | true | 是否只返回简要信息，不写默认false | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_num_total | product_num_total | - | 1 | 10 | 总共需要诊断的商品数 | - | R1 |
| 0 | product_num_finished | product_num_finished | - | 1 | 10 | 已经诊断过的商品数 | - | R1 |
| 0 | task_status | task_status | - | 1 | 2 | 任务状态，0-初始化，1-进行中，2-已完成 | - | R1 |
| 0 | product_num_to_improve_total | product_num_to_improve_total | - | 1 | 10 | 待优化商品数，仅brief_only为false返回 | - | R1 |
| 0 | problem_num_total | problem_num_total | - | 1 | 10 | 可优化项总数，仅brief_only为false返回 | - | R1 |
| 0 | problem_num_to_improve | problem_num_to_improve | - | 1 | 10 | 待优化项数量，仅brief_only为false返回 | - | R1 |
| 0 | task_finish_time | task_finish_time | - | 2 | 2021-09-07 01:21:46 | 任务完成时间，仅brief_only为false返回 | - | R1 |
| 0 | problem_type_distribution | problem_type_distribution | - | 3 | - | 问题类型分布，仅brief_only为false返回 | - | R1 |
| 1 | problem_type_distribution.type_key | type_key | - | 1 | 1 | 优化项代号，1-商品信息不规范，2-关键信息待优化，3-商品素材缺失 | - | R1 |
| 1 | problem_type_distribution.type_name | type_name | - | 2 | 商品信息不规范 | 优化项具体名字 | - | R1 |
| 1 | problem_type_distribution.num | num | - | 1 | 2 | 具体问题数量 | - | R1 |
| 0 | task_id | task_id | - | 1 | 15293 | 任务ID | - | R1 |
| 0 | standard_rate | StandardRate | - | 9 | 10 | 达标率，百分比 | - | R1 |
| 0 | is_standard | IsStandard | - | 4 | true | 是否达标 | - | R1 |
| 0 | meet_standard_num | meet_standard_num | - | 1 | 1 | 达标商品数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/qualityTask?app_key=your_appkey_here&method=product.qualityTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/qualityTask?app_key=your_appkey_here&method=product.qualityTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductQualityTaskRequest request = new ProductQualityTaskRequest();
ProductQualityTaskParam param = request.getParam();
param.setBriefOnly(true);
ProductQualityTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductQualityTaskRequest();
$param = new ProductQualityTaskParam();
$request->setParam($param);
$param->brief_only = true;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductQualityTaskRequest()
param = request.getParams()
param.brief_only = true
response = request.execute(accessToken)

```

### go

```go
request := product_qualityTask_request.New()
param := request.GetParams()
param.BriefOnly = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductQualityTaskRequest();
var param = request.BuildParam();
param.BriefOnly = true;
var response = request.Execute<ProductQualityTaskResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:2030001 | 系统异常 | 等待后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2030002 | 处理超时 | 等待后重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2030003 | 缺少必要参数 | 补充必要参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:2030004 | 参数值非法 | 按要求填写参数值 |
| 20000 | 系统错误 | isp.service-error:2030201 | 读取数据失败 | 等待后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2030013 | 2030013:读取任务失败 | 请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
