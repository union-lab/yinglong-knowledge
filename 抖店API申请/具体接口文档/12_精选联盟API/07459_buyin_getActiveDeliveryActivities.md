# /buyin/getActiveDeliveryActivities

> 中文说明：三方获取生效的活动页  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/7459>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/getActiveDeliveryActivities |
| 中文名称 | 三方获取生效的活动页 |
| 文档目录 | 精选联盟API |
| Article ID | 7459 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/5/14 16:51:31 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

三方获取生效的活动页

## 权限包

- 选品中心 / 选品中心货品池（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.getActiveDeliveryActivities | 调用的API接口名称 | - | - |
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
| 0 | page | page | false | 1 | 1 | 1开始 | - | - |
| 0 | size | size | false | 1 | 10 | <=100 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | activities | activities | - | 3 | - | 活动信息列表 | - | R1 |
| 1 | activities.activity_id | activity_id | - | 1 | 22895616002 | 活动id | - | - |
| 1 | activities.activity_name | activity_name | - | 2 | "活动名称" | 活动名称 | - | - |
| 1 | activities.start_time | start_time | - | 1 | 1731569009 | 生效时间 单位秒 | - | - |
| 1 | activities.end_time | end_time | - | 1 | 1731569009 | 失效时间 单位秒 | - | - |
| 1 | activities.mob_banner_img_url | mob_banner_img_url | - | 2 | "" | 移动头图 | - | - |
| 1 | activities.pc_banner_img_url | pc_banner_img_url | - | 2 | "" | pc头图 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/originColonelUnappliedProductList?app_key=your_appkey_here&method=buyin.originColonelUnappliedProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/originColonelUnappliedProductList?app_key=your_appkey_here&method=buyin.originColonelUnappliedProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinGetActiveDeliveryActivitiesRequest request = new BuyinGetActiveDeliveryActivitiesRequest();
BuyinGetActiveDeliveryActivitiesParam param = request.getParam();
param.setPage(1L);
param.setSize(10L);
BuyinGetActiveDeliveryActivitiesResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinGetActiveDeliveryActivitiesRequest();
$param = new BuyinGetActiveDeliveryActivitiesParam();
$request->setParam($param);
$param->page = 1;
$param->size = 10;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinGetActiveDeliveryActivitiesRequest()
param = request.getParams()
param.page = 1
param.size = 10
response = request.execute(accessToken)

```

### go

```go
request := buyin_getActiveDeliveryActivities_request.New()
param := request.GetParams()
param.Page = 1
param.Size = 10
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinGetActiveDeliveryActivitiesRequest();
var param = request.BuildParam();
param.Page = 1;
param.Size = 10;
var response = request.Execute<BuyinGetActiveDeliveryActivitiesResponse>(accessToken);

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
