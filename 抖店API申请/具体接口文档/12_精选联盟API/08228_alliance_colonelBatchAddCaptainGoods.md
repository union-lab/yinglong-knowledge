# /alliance/colonelBatchAddCaptainGoods

> 中文说明：团长选品库商品批量加入指定活动  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/8228>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/colonelBatchAddCaptainGoods |
| 中文名称 | 团长选品库商品批量加入指定活动 |
| 文档目录 | 精选联盟API |
| Article ID | 8228 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/6/9 21:47:08 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

批量加商品到指定活动

## 权限包

- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.colonelBatchAddCaptainGoods | 调用的API接口名称 | - | - |
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
| 0 | items | items | true | 3 | - | 批量报名记录, 每个元素是单商品报名记录，商品不能重复，重复的只取第一个 | - | - |
| 1 | items.product_id | product_id | true | 2 | 1235123412 | 商品id | - | - |
| 1 | items.origin_activity_id | origin_activity_id | true | 2 | 123412 | 原始团长活动id（如果是托管商品则活动id为0） | - | - |
| 1 | items.activity_ids | activity_ids | true | 2 | 623462,1235125 | 报名的团长活动列表，逗号分割（限制最多3个） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | BaseResponse | base_resp | - | 5 | - | 报名结果 | - | R1 |
| 1 | BaseResponse.Message | status_message | - | 2 | 错误 | 失败信息 | - | - |
| 1 | BaseResponse.StatusCode | status_code | - | 99 | 0 | 失败错误码 | - | - |
| 0 | fail_item | fail_item | - | 3 | - | 添加失败的记录（key：商品，value：<活动：失败原因>） | - | R1 |
| 1 | fail_item.fail_reason | fail_reason | - | 2 | 由于xx失败 | 失败原因 | - | - |
| 1 | fail_item.activity_id | activity_id | - | 99 | 315123 | 活动id | - | - |
| 1 | fail_item.product_id | product_id | - | 99 | 11351235151 | 商品id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/colonelBatchAddCaptainGoods?app_key=your_appkey_here&method=alliance.colonelBatchAddCaptainGoods&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/colonelBatchAddCaptainGoods?app_key=your_appkey_here&method=alliance.colonelBatchAddCaptainGoods&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceColonelBatchAddCaptainGoodsRequest request = new AllianceColonelBatchAddCaptainGoodsRequest();
AllianceColonelBatchAddCaptainGoodsParam param = request.getParam();
AllianceColonelBatchAddCaptainGoodsResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceColonelBatchAddCaptainGoodsRequest();
$param = new AllianceColonelBatchAddCaptainGoodsParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceColonelBatchAddCaptainGoodsRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := alliance_colonelBatchAddCaptainGoods_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceColonelBatchAddCaptainGoodsRequest();
var param = request.BuildParam();
var response = request.Execute<AllianceColonelBatchAddCaptainGoodsResponse>(accessToken);

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
