# /buyin/colonel/specialApplyDeal

> 中文说明：团长活动特殊申请审核  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1553>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/colonel/specialApplyDeal |
| 中文名称 | 团长活动特殊申请审核 |
| 文档目录 | 精选联盟API |
| Article ID | 1553 |
| 文档版本 | V3.03 |
| 官方更新时间 | 2022/9/27 14:16:18 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

团长活动特殊申请（修改费率、终止合作等）审核

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.colonel/specialApplyDeal | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | true | 1 | 12312 | 活动ID | - | - |
| 0 | product_id | product_id | true | 1 | 2312312312312 | 商品ID | - | - |
| 0 | special_apply_id | special_apply_id | true | 1 | 23123 | 特殊申请ID | - | - |
| 0 | status | status | true | 7 | 1 | 处理结果。1：同意；  2：拒绝 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | success | - | 4 | true | 审批是否成功，true 为成功，false 为失败（即使团长同意，但是不满足条件也会自动拒绝） | - | R1 |
| 0 | low_service_fee_activity_id | low_service_fee_activity_id | - | 3 | 31212 | 活动 ID 列表（当商品提报了二级团长时,商家申请降低服务费率，若调整的服务费率*90%后的值，低于任意一个一级团长报名的二级团长服务费率，当一级团长点击同意时，系统自动拒绝，并且告知不合条件的活动ID） | - | R1 |
| 0 | second_activity_id | second_activity_id | - | 3 | 54212 | 活动 ID 列表（当商品提报了二级团长时，不允许降低佣金率，当一级团长点击同意时，系统自动拒绝，并且告知所有合作中的二级活动 ID） | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinColonelSpecialApplyDealRequest request = new BuyinColonelSpecialApplyDealRequest();
BuyinColonelSpecialApplyDealParam param = request.getParam();
param.setActivityId(12312L);
param.setProductId(2312312312312L);
param.setSpecialApplyId(23123L);
param.setStatus(1);
BuyinColonelSpecialApplyDealResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinColonelSpecialApplyDealRequest();
$param = new BuyinColonelSpecialApplyDealParam();
$request->setParam($param);
$param->activity_id = 12312;
$param->product_id = 2312312312312;
$param->special_apply_id = 23123;
$param->status = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinColonelSpecialApplyDealRequest()
param = request.getParams()
param.activity_id = 12312
param.product_id = 2312312312312
param.special_apply_id = 23123
param.status = 1
response = request.execute(accessToken)

```

### go

```go
request := buyin_colonel_specialApplyDeal_request.New()
param := request.GetParams()
param.ActivityId = 12312
param.ProductId = 2312312312312
param.SpecialApplyId = 23123
param.Status = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinColonelSpecialApplyDealRequest();
var param = request.BuildParam();
param.ActivityId = 12312;
param.ProductId = 2312312312312;
param.SpecialApplyId = 23123;
param.Status = 1;
var response = request.Execute<BuyinColonelSpecialApplyDealResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:100010 | 已经处理过该申请，无需重复处理 | 已经处理过该申请，无需重复处理 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:500 | 服务器错误，请稍后再试 | 服务器错误，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:8192 | 已经处理过该申请，无需重复处理 | 已经处理过该申请，无需重复处理 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
