# /buyin/colonelExtendApplyList

> 中文说明：专属团长活动商品延时申请结果查询  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2430>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/colonelExtendApplyList |
| 中文名称 | 专属团长活动商品延时申请结果查询 |
| 文档目录 | 精选联盟API |
| Article ID | 2430 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/9/7 19:08:58 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 80 |

## 使用说明

支持一级团长查询商家侧延长活动时间申请的处理结果

## 权限包

- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.colonelExtendApplyList | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | false | 1 | 5253123 | 活动 id | - | - |
| 0 | product_id | product_id | false | 1 | 36213412341234 | 商品 id | - | - |
| 0 | status | status | true | 3 | 1 | 状态：1-待审核,2-商家同意,3-商家拒绝,4-自动拒绝（如果状态列表有1，则只查询待审核的延长申请，没有1，则查询所有传入状态的延长申请） | - | - |
| 0 | page | page | false | 1 | 1 | 页码（默认1） | - | - |
| 0 | size | size | false | 1 | 20 | 每页条数（默认20，最大20） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | extend_applies | extend_applies | - | 3 | - | 延长申请列表 | - | R1 |
| 1 | extend_applies.activity_id | activity_id | - | 1 | 523412 | 团长活动 id | - | R1 |
| 1 | extend_applies.product_id | product_id | - | 1 | 4361723412342154 | 商品 id | - | R1 |
| 1 | extend_applies.product_name | product_name | - | 2 | 商品名称 | 商品名称 | - | R1 |
| 1 | extend_applies.product_img | product_img | - | 2 | https://www.baidu.com | 商品图片 | - | R1 |
| 1 | extend_applies.status | status | - | 1 | 1 | 延长申请状态(1-待审核,2-商家同意,3-商家拒绝,4-自动拒绝) | - | R1 |
| 1 | extend_applies.end_time | end_time | - | 2 | 2006-01-02 15:04:05 | 推广结束时间 | - | R1 |
| 1 | extend_applies.origin_buyin_id | origin_buyin_id | - | 1 | 32641726341238742 | 原始团长 buyin_id | - | R1 |
| 1 | extend_applies.origin_activity_id | origin_activity_id | - | 1 | 512345 | 原始活动 id | - | R1 |
| 1 | extend_applies.update_time | update_time | - | 2 | 2006-01-02 15:04:05 | 更新时间 | - | R1 |
| 0 | total | total | - | 1 | 10 | 总数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/colonelExtendApplyList?app_key=your_appkey_here&method=buyin.colonelExtendApplyList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/colonelExtendApplyList?app_key=your_appkey_here&method=buyin.colonelExtendApplyList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinColonelExtendApplyListRequest request = new BuyinColonelExtendApplyListRequest();
BuyinColonelExtendApplyListParam param = request.getParam();
param.setActivityId(5253123L);
param.setProductId(36213412341234L);
param.setStatus(1);
param.setPage(1L);
param.setSize(20L);
BuyinColonelExtendApplyListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinColonelExtendApplyListRequest();
$param = new BuyinColonelExtendApplyListParam();
$request->setParam($param);
$param->activity_id = 5253123;
$param->product_id = 36213412341234;
$param->status = 1;
$param->page = 1;
$param->size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinColonelExtendApplyListRequest()
param = request.getParams()
param.activity_id = 5253123
param.product_id = 36213412341234
param.status = 1
param.page = 1
param.size = 20
response = request.execute(accessToken)

```

### go

```go
request := buyin_colonelExtendApplyList_request.New()
param := request.GetParams()
param.ActivityId = 5253123
param.ProductId = 36213412341234
param.Status = 1
param.Page = 1
param.Size = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinColonelExtendApplyListRequest();
var param = request.BuildParam();
param.ActivityId = 5253123;
param.ProductId = 36213412341234;
param.Status = 1;
param.Page = 1;
param.Size = 20;
var response = request.Execute<BuyinColonelExtendApplyListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:257 | 257:参数校验失败 | 257:参数校验失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
