# /sms/listAudienceProduce

> 中文说明：获取人群生产包列表  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7787>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/listAudienceProduce |
| 中文名称 | 获取人群生产包列表 |
| 文档目录 | 短信API |
| Article ID | 7787 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/9/19 11:05:10 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

获取人群生产包列表

## 权限包

- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.listAudienceProduce | 调用的API接口名称 | - | - |
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
| 0 | page_index | pageIndex | true | 1 | 1 | 页码，从1开始 | - | - |
| 0 | page_size | pageSize | true | 1 | 10 | 页大小，最大100 | - | - |
| 0 | produce_id | produceId | false | 2 | 1231 | 生产包id | - | - |
| 0 | audience_id | audienceId | false | 2 | 23123 | 人群包id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 1 | 13 | 总数 | - | - |
| 0 | produce_list | produceList | - | 3 | - | 结果 | - | R1 |
| 1 | produce_list.produce_id | produceId | - | 2 | 1321 | 生产包id | - | - |
| 1 | produce_list.audience_id | audienceId | - | 2 | 123 | 人群包id | - | - |
| 1 | produce_list.rule_snapshot | ruleSnapshot | - | 2 | [] | 生产包组合规则快照数据 | - | - |
| 1 | produce_list.audience_type | audienceFrom | - | 6 | 2 | 人群包类型 0公域人群包 1私域人群包 2组合人群包 | - | - |
| 1 | produce_list.status | status | - | 2 | PRODUCED | 状态 SUBMITED/PRODUCED/PRODUCED_FAILED/EXPIRED | - | - |
| 1 | produce_list.expired_at | expiredAt | - | 1 | 1757593694 | 过期时间，秒级时间戳 | - | - |
| 1 | produce_list.total_count | totalCount | - | 1 | 12314 | 人群数量 | - | - |
| 1 | produce_list.produce_date | produceDate | - | 2 | 20250908 | 人群产出日期，yyyyMMdd | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/qualityDetail?app_key=your_appkey_here&method=product.qualityDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/qualityDetail?app_key=your_appkey_here&method=product.qualityDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SmsListAudienceProduceRequest request = new SmsListAudienceProduceRequest();
SmsListAudienceProduceParam param = request.getParam();
param.setPageIndex(1L);
param.setPageSize(10L);
param.setProduceId("1231");
param.setAudienceId("23123");
SmsListAudienceProduceResponse response = request.execute(accessToken);

```

### php

```php
$request = new SmsListAudienceProduceRequest();
$param = new SmsListAudienceProduceParam();
$request->setParam($param);
$param->page_index = 1;
$param->page_size = 10;
$param->produce_id = "1231";
$param->audience_id = "23123";
$response = $request->execute(accessToken);

```

### python

```python
request = SmsListAudienceProduceRequest()
param = request.getParams()
param.page_index = 1
param.page_size = 10
param.produce_id = "1231"
param.audience_id = "23123"
response = request.execute(accessToken)

```

### go

```go
request := sms_listAudienceProduce_request.New()
param := request.GetParams()
param.PageIndex = 1
param.PageSize = 10
param.ProduceId = "1231"
param.AudienceId = "23123"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SmsListAudienceProduceRequest();
var param = request.BuildParam();
param.PageIndex = 1;
param.PageSize = 10;
param.ProduceId = "1231";
param.AudienceId = "23123";
var response = request.Execute<SmsListAudienceProduceResponse>(accessToken);

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

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
