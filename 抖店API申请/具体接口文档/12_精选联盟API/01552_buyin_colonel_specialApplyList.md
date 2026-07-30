# /buyin/colonel/specialApplyList

> 中文说明：查询团长活动特殊申请  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1552>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/colonel/specialApplyList |
| 中文名称 | 查询团长活动特殊申请 |
| 文档目录 | 精选联盟API |
| Article ID | 1552 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2026/4/21 16:33:58 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

接口用于查询团长活动特殊申请，需要机构百应授权

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.colonel/specialApplyList | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | false | 99 | 33241 | 活动 id(不传表示查机构下所有活动) | - | - |
| 0 | search_type | search_type | false | 99 | 0 | 查询类型（0：待处理，1：历史记录，不传默认是待处理） | - | - |
| 0 | page | page | false | 99 | 1 | 页数（从 1 开始，不传默认为 1） | - | - |
| 0 | size | size | false | 99 | 20 | 每页条数（不传默认为 10，最大为200） | - | - |
| 0 | sort_field | sort_field | false | 99 | 0,1 | 0或不填：以申请时间排序<br>1：以审核时间排序 | - | - |
| 0 | sort_direction | sort_direction | false | 99 | 0,1 | 0或不填：降序<br>1：增序 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | special_apply_list | special_apply_list | - | 3 | - | 特殊申请列表 | - | R1 |
| 1 | special_apply_list.activity_id | activity_id | - | 99 | 33241 | 活动 id | - | R1 |
| 1 | special_apply_list.special_apply_id | special_apply_id | - | 99 | 13131 | 特殊申请 id | - | R1 |
| 1 | special_apply_list.product_name | product_name | - | 2 | iphone13 | 商品名称 | - | R1 |
| 1 | special_apply_list.product_id | product_id | - | 99 | 2355245623523 | 商品 id | - | R1 |
| 1 | special_apply_list.product_img | product_img | - | 2 | https://www.baidu.com | 商品主图 | - | R1 |
| 1 | special_apply_list.product_price | product_price | - | 2 | 100 | 商品售价（单位：分） | - | R1 |
| 1 | special_apply_list.shop_name | shop_name | - | 2 | 苹果官方旗舰店 | 商家名称 | - | R1 |
| 1 | special_apply_list.shop_id | shop_id | - | 99 | 12343652345 | 商家id | - | R1 |
| 1 | special_apply_list.shop_phone | shop_phone | - | 2 | 6UNGOWt5MkBIgEDQ1I31w== | 商家联系方式（返回联系电话密文，需通过 https://op.jinritemai.com/docs/api-docs/61/2829 解密） | - | R1 |
| 1 | special_apply_list.op_type | op_type | - | 99 | 1 | 申请类型（1:取消合作，2:修改费率，3：作废优惠券） | - | R1 |
| 1 | special_apply_list.cur_commission_rate | cur_commission_rate | - | 2 | 10.00 | 原佣金率（10.11%返回1011） | - | R1 |
| 1 | special_apply_list.cur_service_rate | cur_service_rate | - | 2 | 10.00 | 原服务费率（10.11%返回1011） | - | R1 |
| 1 | special_apply_list.apply_commission_rate | apply_commission_rate | - | 2 | 11.00 | 申请佣金率（10.11%返回1011） | - | R1 |
| 1 | special_apply_list.apply_service_rate | apply_service_rate | - | 2 | 11.00 | 申请服务费率（10.11%返回1011） | - | R1 |
| 1 | special_apply_list.apply_time | apply_time | - | 2 | 2021/12/22 16:55:27 | 申请时间 | - | R1 |
| 1 | special_apply_list.approve_time | approve_time | - | 2 | 2021/12/22 16:55:27 | 审批时间 | - | R1 |
| 1 | special_apply_list.status | status | - | 99 | 0 | 状态(0:待审核 1:机构同意 2:拒绝 3:7天未审核自动同意 4:30日无出单自动同意) | - | R1 |
| 1 | special_apply_list.reason | reason | - | 2 | 处理理由 | 处理理由 | - | R1 |
| 1 | special_apply_list.origin_institution_id | origin_institution_id | - | 99 | 111 | 原始团长id | - | R1 |
| 1 | special_apply_list.origin_institution_name | origin_institution_name | - | 2 | 原始团长名称 | 原始团长名称 | - | R1 |
| 1 | special_apply_list.origin_institution_phone | origin_institution_phone | - | 2 | 6UNGOWt5MkBIgEDQ1I31w== | 原始团长联系电话（返回联系电话密文，需通过 https://op.jinritemai.com/docs/api-docs/61/2829 解密） | - | R1 |
| 1 | special_apply_list.origin_activity_start_time | origin_activity_start_time | - | 2 | 2021/12/22 16:55:27 | 原始团长活动/托管有效期生效开始时间 | - | R1 |
| 1 | special_apply_list.origin_activity_end_time | origin_activity_end_time | - | 2 | 2021/12/22 16:55:27 | 原始团长活动/托管有效期生效结束时间 | - | R1 |
| 1 | special_apply_list.activity_name | activity_name | - | 2 | 一个活动 | 活动名称 | - | R1 |
| 1 | special_apply_list.shop_level_is_new | shop_level_isNew | - | 4 | true | 新手店铺标识 | - | R1 |
| 1 | special_apply_list.shop_score | shop_score | - | 9 | 4.5 | 商家体验分 | - | R1 |
| 1 | special_apply_list.product_stock | product_stock | - | 99 | 11 | 商品库存 | - | R1 |
| 1 | special_apply_list.origin_colonel_buyin_id | origin_colonel_buyin_id | - | 99 | 4162341231762354 | 原始团长百应 id | - | R1 |
| 1 | special_apply_list.cur_ad_service_rate | cur_ad_service_rate | - | 2 | 5.00 | 原双佣金投放期服务费率，cur_cos_type为1时才有效 | - | - |
| 1 | special_apply_list.apply_ad_commission_rate | apply_ad_commission_rate | - | 2 | 11.00 | 申请双佣金投放期佣金率，apply_cos_type为1时才有效 | - | - |
| 1 | special_apply_list.cur_cos_type | cur_cos_type | - | 99 | 1 | 当前的佣金类型，0:固定佣金 1:双佣金 | - | - |
| 1 | special_apply_list.apply_ad_service_rate | apply_ad_service_rate | - | 2 | 5.00 | 申请双佣金投放期服务费率，apply_cos_type为1时才有效 | - | - |
| 1 | special_apply_list.apply_cos_type | apply_cos_type | - | 99 | 1 | 申请的佣金类型，0:固定佣金 1:双佣金 | - | - |
| 1 | special_apply_list.cur_ad_commission_rate | cur_ad_commission_rate | - | 2 | 11.00 | 原双佣金投放期佣金率，cur_cos_type为1时才有效 | - | - |
| 0 | total | total | - | 99 | 100 | 总申请数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/colonel/specialApplyList?app_key=your_appkey_here&method=buyin.colonel.specialApplyList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/colonel/specialApplyList?app_key=your_appkey_here&method=buyin.colonel.specialApplyList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinColonelSpecialApplyListRequest request = new BuyinColonelSpecialApplyListRequest();
BuyinColonelSpecialApplyListParam param = request.getParam();
param.setActivityId(33241L);
param.setSearchType(0);
param.setPage(1L);
param.setSize(20L);
param.setSortField(0,1);
param.setSortDirection(0,1);
BuyinColonelSpecialApplyListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinColonelSpecialApplyListRequest();
$param = new BuyinColonelSpecialApplyListParam();
$request->setParam($param);
$param->activity_id = 33241;
$param->search_type = 0;
$param->page = 1;
$param->size = 20;
$param->sort_field = 0,1;
$param->sort_direction = 0,1;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinColonelSpecialApplyListRequest()
param = request.getParams()
param.activity_id = 33241
param.search_type = 0
param.page = 1
param.size = 20
param.sort_field = 0,1
param.sort_direction = 0,1
response = request.execute(accessToken)

```

### go

```go
request := buyin_colonel_specialApplyList_request.New()
param := request.GetParams()
param.ActivityId = 33241
param.SearchType = 0
param.Page = 1
param.Size = 20
param.SortField = 0,1
param.SortDirection = 0,1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinColonelSpecialApplyListRequest();
var param = request.BuildParam();
param.ActivityId = 33241;
param.SearchType = 0;
param.Page = 1;
param.Size = 20;
param.SortField = 0,1;
param.SortDirection = 0,1;
var response = request.Execute<BuyinColonelSpecialApplyListResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:4200 | 4200:账号状态异常，请检查账号状态 | 4200:账号状态异常，请检查账号状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
