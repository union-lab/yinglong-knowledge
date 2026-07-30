# /buyin/activityProductCancel

> 中文说明：一级团长取消活动提报申请接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1927>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/activityProductCancel |
| 中文名称 | 一级团长取消活动提报申请接口 |
| 文档目录 | 精选联盟API |
| Article ID | 1927 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2022/9/7 18:47:32 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

接口用于团长取消二级团长活动的提报申请

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.activityProductCancel | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | true | 1 | 54321 | 活动 id | - | - |
| 0 | product_id | product_id | true | 1 | 174913561741412435 | 商品 id | - | - |
| 0 | origin_activity_id | origin_activity_id | false | 1 | 375162 | 原始活动 id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | success | - | 4 | true | 操作结果（true：操作成功） | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/activityProductCancel?app_key=your_appkey_here&method=buyin.activityProductCancel&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/activityProductCancel?app_key=your_appkey_here&method=buyin.activityProductCancel&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinActivityProductCancelRequest request = new BuyinActivityProductCancelRequest();
BuyinActivityProductCancelParam param = request.getParam();
param.setActivityId(54321L);
param.setProductId(174913561741412435L);
param.setOriginActivityId(375162L);
BuyinActivityProductCancelResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinActivityProductCancelRequest();
$param = new BuyinActivityProductCancelParam();
$request->setParam($param);
$param->activity_id = 54321;
$param->product_id = 174913561741412435;
$param->origin_activity_id = 375162;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinActivityProductCancelRequest()
param = request.getParams()
param.activity_id = 54321
param.product_id = 174913561741412435
param.origin_activity_id = 375162
response = request.execute(accessToken)

```

### go

```go
request := buyin_activityProductCancel_request.New()
param := request.GetParams()
param.ActivityId = 54321
param.ProductId = 174913561741412435
param.OriginActivityId = 375162
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinActivityProductCancelRequest();
var param = request.BuildParam();
param.ActivityId = 54321;
param.ProductId = 174913561741412435;
param.OriginActivityId = 375162;
var response = request.Execute<BuyinActivityProductCancelResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:8192 | 8192:已经取消的商品无需再次取消 | 8192:已经取消的商品无需再次取消 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
