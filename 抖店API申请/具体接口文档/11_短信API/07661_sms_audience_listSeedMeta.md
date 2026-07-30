# /sms/audience/listSeedMeta

> 中文说明：获取种子人群元数据接口  
> 所属类别：短信API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/163/7661>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sms/audience/listSeedMeta |
| 中文名称 | 获取种子人群元数据接口 |
| 文档目录 | 短信API |
| Article ID | 7661 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/8/1 14:23:57 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

获取种子人群元数据接口

## 权限包

- 会员 / 用户触达（packageType=1）；适用应用类目：互动营销定制、营销短信-微应用、短信营销、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sms.audience/listSeedMeta | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

无。

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | target_types | TargetTypes | - | 3 | - | 业务目标类型枚举 | - | R1 |
| 1 | target_types.en_name | EnName | - | 2 | test | 英文名称 | - | - |
| 1 | target_types.cn_name | CnName | - | 2 | 测试 | 中文名称 | - | - |
| 0 | seed_rule_periods | SeedRulePeriods | - | 3 | ["7", "15"] | 种子规则周期枚举 | - | R1 |
| 0 | seed_rule_types | SeedRuleTypes | - | 3 | - | 种子规则类型枚举 | - | R1 |
| 1 | seed_rule_types.en_name | EnName | - | 2 | test | 英文名称 | - | - |
| 1 | seed_rule_types.cn_name | CnName | - | 2 | 测试 | 中文名称 | - | - |
| 0 | seed_periods | SeedPeriods | - | 3 | ["7","15","30"] | 种子人群周期枚举 | - | R1 |
| 0 | seed_types | SeedTypes | - | 3 | - | 种子人群行为枚举 | - | R1 |
| 1 | seed_types.en_name | EnName | - | 2 | test | 英文名称 | - | - |
| 1 | seed_types.cn_name | CnName | - | 2 | 测试 | 中文名称 | - | - |
| 0 | seed_source_list | SeedSourceList | - | 3 | - | 种子来源枚举 | - | R1 |
| 1 | seed_source_list.en_name | EnName | - | 2 | test | 英文名称 | - | - |
| 1 | seed_source_list.cn_name | CnName | - | 2 | 测试 | 中文名称 | - | - |
| 0 | target_type_periods | TargetTypePeriods | - | 3 | ["7", "15"] | 业务目标周期枚举 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/instituteOrderAds?app_key=your_appkey_here&method=buyin.instituteOrderAds&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/instituteOrderAds?app_key=your_appkey_here&method=buyin.instituteOrderAds&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinInstituteOrderAdsRequest request = new BuyinInstituteOrderAdsRequest();
BuyinInstituteOrderAdsParam param = request.getParam();
param.setSize(20L);
param.setCursor("0");
param.setStartTime("2006-01-02 15:04:05");
param.setEndTime("2006-01-02 15:04:05");
param.setOrderIds("4737996432465788974,4737996432465780075");
param.setPid("dy_1234_4567_7890");
param.setDistributionType("ProductDetail");
param.setOpenId("dsrr34fd43fe");
param.setTimeType("update");
BuyinInstituteOrderAdsResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinInstituteOrderAdsRequest();
$param = new BuyinInstituteOrderAdsParam();
$request->setParam($param);
$param->size = 20;
$param->cursor = "0";
$param->start_time = "2006-01-02 15:04:05";
$param->end_time = "2006-01-02 15:04:05";
$param->order_ids = "4737996432465788974,4737996432465780075";
$param->pid = "dy_1234_4567_7890";
$param->distribution_type = "ProductDetail";
$param->open_id = "dsrr34fd43fe";
$param->time_type = "update";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinInstituteOrderAdsRequest()
param = request.getParams()
param.size = 20
param.cursor = "0"
param.start_time = "2006-01-02 15:04:05"
param.end_time = "2006-01-02 15:04:05"
param.order_ids = "4737996432465788974,4737996432465780075"
param.pid = "dy_1234_4567_7890"
param.distribution_type = "ProductDetail"
param.open_id = "dsrr34fd43fe"
param.time_type = "update"
response = request.execute(accessToken)

```

### go

```go
request := buyin_instituteOrderAds_request.New()
param := request.GetParams()
param.Size = 20
param.Cursor = "0"
param.StartTime = "2006-01-02 15:04:05"
param.EndTime = "2006-01-02 15:04:05"
param.OrderIds = "4737996432465788974,4737996432465780075"
param.Pid = "dy_1234_4567_7890"
param.DistributionType = "ProductDetail"
param.OpenId = "dsrr34fd43fe"
param.TimeType = "update"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinInstituteOrderAdsRequest();
var param = request.BuildParam();
param.Size = 20;
param.Cursor = "0";
param.StartTime = "2006-01-02 15:04:05";
param.EndTime = "2006-01-02 15:04:05";
param.OrderIds = "4737996432465788974,4737996432465780075";
param.Pid = "dy_1234_4567_7890";
param.DistributionType = "ProductDetail";
param.OpenId = "dsrr34fd43fe";
param.TimeType = "update";
var response = request.Execute<BuyinInstituteOrderAdsResponse>(accessToken);

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
