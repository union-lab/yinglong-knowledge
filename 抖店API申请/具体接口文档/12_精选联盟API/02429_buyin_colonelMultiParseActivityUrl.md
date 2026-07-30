# /buyin/colonelMultiParseActivityUrl

> 中文说明：批量解析团长活动推广链接  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2429>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/colonelMultiParseActivityUrl |
| 中文名称 | 批量解析团长活动推广链接 |
| 文档目录 | 精选联盟API |
| Article ID | 2429 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/4/21 16:35:53 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

支持获取团长活动商品链接活动信息以及费率信息

## 权限包

- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.colonelMultiParseActivityUrl | 调用的API接口名称 | - | - |
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
| 0 | activity_url | activity_url | true | 3 | ["https://haohuo.jinritemai.com/views/product/detail?id=3566195499839129569&ins_activity_param=eNkdXXR"] | 活动商品链接列表，最多20个 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | results | results | - | 8 | - | 结果集，key：活动商品链接，value:链接信息 | - | R1 |
| 1 | results.code | code | - | 99 | 0 | 0-成功 | - | R1 |
| 1 | results.msg | msg | - | 2 | "" | 解析失败原因 | - | R1 |
| 1 | results.is_promote | is_promote | - | 4 | true | 链接是否在推广中 | - | R1 |
| 1 | results.product_id | product_id | - | 99 | 27634183716414 | 商品 id | - | R1 |
| 1 | results.activity_id | activity_id | - | 99 | 512356 | 活动 id | - | R1 |
| 1 | results.buyin_id | buyin_id | - | 99 | 12361823451234 | 团长百应 id | - | R1 |
| 1 | results.origin_activity_id | origin_activity_id | - | 99 | 52327 | 原始活动 id（非一级报二级为0） | - | R1 |
| 1 | results.origin_buyin_id | origin_buyin_id | - | 99 | 12361823451234 | 原始团长buyin_id(非一级报二级为0) | - | R1 |
| 1 | results.commission_rate | commission_rate | - | 99 | 1011 | 佣金率(10.11%返回1011) | - | R1 |
| 1 | results.service_rate | service_rate | - | 99 | 1011 | 服务费率（10.11%返回1011) | - | R1 |
| 1 | results.cos_type | cos_type | - | 99 | 1 | 佣金类型 0:不限制 1:固定佣金 | - | - |
| 1 | results.ad_commission_rate | ad_commission_rate | - | 99 | 500 | 双佣金投放期佣金率 | - | - |
| 1 | results.ad_service_rate | ad_service_rate | - | 99 | 1000 | 双佣金投放期服务费率 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/colonelMultiParseActivityUrl?app_key=your_appkey_here&method=buyin.colonelMultiParseActivityUrl&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/colonelMultiParseActivityUrl?app_key=your_appkey_here&method=buyin.colonelMultiParseActivityUrl&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinColonelMultiParseActivityUrlRequest request = new BuyinColonelMultiParseActivityUrlRequest();
BuyinColonelMultiParseActivityUrlParam param = request.getParam();
param.setActivityUrl(["https://haohuo.jinritemai.com/views/product/detail?id=3566195499839129569&ins_activity_param=eNkdXXR"]);
BuyinColonelMultiParseActivityUrlResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinColonelMultiParseActivityUrlRequest();
$param = new BuyinColonelMultiParseActivityUrlParam();
$request->setParam($param);
$param->activity_url = ["https://haohuo.jinritemai.com/views/product/detail?id=3566195499839129569&ins_activity_param=eNkdXXR"];
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinColonelMultiParseActivityUrlRequest()
param = request.getParams()
param.activity_url = ["https://haohuo.jinritemai.com/views/product/detail?id=3566195499839129569&ins_activity_param=eNkdXXR"]
response = request.execute(accessToken)

```

### go

```go
request := buyin_colonelMultiParseActivityUrl_request.New()
param := request.GetParams()
param.ActivityUrl = ["https://haohuo.jinritemai.com/views/product/detail?id=3566195499839129569&ins_activity_param=eNkdXXR"]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinColonelMultiParseActivityUrlRequest();
var param = request.BuildParam();
param.ActivityUrl = ["https://haohuo.jinritemai.com/views/product/detail?id=3566195499839129569&ins_activity_param=eNkdXXR"];
var response = request.Execute<BuyinColonelMultiParseActivityUrlResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
