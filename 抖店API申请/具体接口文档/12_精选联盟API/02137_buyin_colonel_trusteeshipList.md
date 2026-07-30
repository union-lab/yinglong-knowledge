# /buyin/colonel/trusteeshipList

> 中文说明：团长托管商品查询  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2137>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/colonel/trusteeshipList |
| 中文名称 | 团长托管商品查询 |
| 文档目录 | 精选联盟API |
| Article ID | 2137 |
| 文档版本 | V3.11 |
| 官方更新时间 | 2023/6/20 19:36:09 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

支持团长查询托管计划商品及商品审核状态。需要团长授权

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.colonel/trusteeshipList | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | false | 1 | 16234123515826734 | 商品ID | - | - |
| 0 | business_id | shop_id | false | 1 | 461723 | 商家ID | - | - |
| 0 | status | status | false | 7 | 2 | 申请状态。0：待审核（默认）；1：生效中；2：已结束 | - | - |
| 0 | sub_status | sub_status | false | 7 | 1 | 子状态（仅当status为已结束时需要传，1:申请未通过; 2:合作已终止; 3:合作已到期） | - | - |
| 0 | page | page | false | 1 | 1 | 页码，从1开始。分页模式下生效，超过10000条会被限制，推荐使用游标模式 retrieve_mode=1 | - | - |
| 0 | page_size | page_size | true | 1 | 20 | 每页条数（最多20条） | - | - |
| 0 | retrieve_mode | retrieve_mode | false | 7 | 1 | 获取模式。0: 分页模式（默认），最多返回10000条数据；1: 游标模式（推荐），返回条数无限制 | - | - |
| 0 | cursor | cursor | false | 2 | 2keoi4023rj34532ko43o | 游标。首页不需要传，请求下一页时需传入上一次请求响应的next_cursor值 | - | - |
| 0 | order_by | order_by | - | 1 | 1 | 排序（1-按照更新时间倒序） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 1 | 100 | 数据总条数 | - | R1 |
| 0 | records | records | - | 3 | - | 托管商品列表 | - | R1 |
| 1 | records.update_time | update_time | - | 2 | 2023-06-20 02:03:06 | 更新时间 | - | - |
| 1 | records.can_promote | can_promote | - | 2 | true | 能否推广（true：可推广） | - | - |
| 1 | records.product_name | product_name | - | 2 | 商品名称 | 商品名称 | - | R1 |
| 1 | records.product_id | product_id | - | 1 | 16234123515826734 | 商品ID | - | R1 |
| 1 | records.product_price | product_price | - | 1 | 1000 | 商品售价(单位：分) | - | R1 |
| 1 | records.product_img | product_img | - | 2 | https:www.baidu.com | 商品图片 | - | R1 |
| 1 | records.shop_id | shop_id | - | 1 | 321374 | 商家ID | - | R1 |
| 1 | records.shop_name | shop_name | - | 2 | 商家名称 | 商家名称 | - | R1 |
| 1 | records.shop_phone | shop_phone | - | 2 | 6UNGOWt5MkBIgEDQ1I31w== | 商家联系电话（返回联系电话密文，需通过 https://op.jinritemai.com/docs/api-docs/61/2829 解密） | - | R1 |
| 1 | records.is_new | is_new | - | 4 | true | 是否新手店铺 | - | R1 |
| 1 | records.shop_score | shop_score | - | 9 | 4.5 | 店铺体验分 | - | R1 |
| 1 | records.trusteeship_commission_rate | trusteeship_commission_rate | - | 1 | 1000 | 托管佣金率（10% 返回 1000） | - | R1 |
| 1 | records.trusteeship_service_rate | trusteeship_service_rate | - | 1 | 1000 | 托管服务费率（10% 返回 1000） | - | R1 |
| 1 | records.trusteeship_start_time | trusteeship_start_time | - | 2 | 2023/05/31 | 托管开始时间 | - | R1 |
| 1 | records.trusteeship_end_time | trusteeship_end_time | - | 2 | 2023/05/31 | 托管结束时间 | - | R1 |
| 1 | records.product_stock | product_stock | - | 1 | 100 | 商品库存 | - | R1 |
| 1 | records.status | status | - | 7 | 1 | 托管状态。0：待审核；1：生效中；2：已结束 | - | R1 |
| 1 | records.sub_status | sub_status | - | 7 | 1 | 子状态。1:申请未通过； 2:合作已终止； 3:合作已到期 | - | R1 |
| 1 | records.id | id | - | 1 | 61723 | 申请ID | - | R1 |
| 0 | next_cursor | next_cursor | - | 2 | 3rr32212f24442ffwegrthrt | 下一页游标。游标模式下返回，最后一页返回空 | - | - |

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
BuyinColonelTrusteeshipListRequest request = new BuyinColonelTrusteeshipListRequest();
BuyinColonelTrusteeshipListParam param = request.getParam();
param.setProductId(16234123515826734L);
param.setBusinessId(461723L);
param.setStatus(2);
param.setSubStatus(1);
param.setPage(1L);
param.setPageSize(20L);
param.setRetrieveMode(1);
param.setCursor("2keoi4023rj34532ko43o");
param.setOrderBy(1L);
BuyinColonelTrusteeshipListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinColonelTrusteeshipListRequest();
$param = new BuyinColonelTrusteeshipListParam();
$request->setParam($param);
$param->product_id = 16234123515826734;
$param->business_id = 461723;
$param->status = 2;
$param->sub_status = 1;
$param->page = 1;
$param->page_size = 20;
$param->retrieve_mode = 1;
$param->cursor = "2keoi4023rj34532ko43o";
$param->order_by = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinColonelTrusteeshipListRequest()
param = request.getParams()
param.product_id = 16234123515826734
param.business_id = 461723
param.status = 2
param.sub_status = 1
param.page = 1
param.page_size = 20
param.retrieve_mode = 1
param.cursor = "2keoi4023rj34532ko43o"
param.order_by = 1
response = request.execute(accessToken)

```

### go

```go
request := buyin_colonel_trusteeshipList_request.New()
param := request.GetParams()
param.ProductId = 16234123515826734
param.BusinessId = 461723
param.Status = 2
param.SubStatus = 1
param.Page = 1
param.PageSize = 20
param.RetrieveMode = 1
param.Cursor = "2keoi4023rj34532ko43o"
param.OrderBy = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinColonelTrusteeshipListRequest();
var param = request.BuildParam();
param.ProductId = 16234123515826734;
param.BusinessId = 461723;
param.Status = 2;
param.SubStatus = 1;
param.Page = 1;
param.PageSize = 20;
param.RetrieveMode = 1;
param.Cursor = "2keoi4023rj34532ko43o";
param.OrderBy = 1;
var response = request.Execute<BuyinColonelTrusteeshipListResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍候再试 | 服务打瞌睡了，请稍候再试 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 40004 | 非法的参数 | isv.parameter-invalid:16384 | sub_status 参数校验失败（当且仅当status为2时必传，1:申请未通过 2:合作已终止 3:合作已到期） | 当且仅当status为2时必传，1:申请未通过 2:合作已终止 3:合作已到期 |
| 50002 | 业务处理失败 | isv.business-failed:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:4097 | 无效分页大小 | 无效分页大小 |
| 40004 | 非法的参数 | isv.parameter-invalid:8197 | 不允许继续翻页，请使用游标模式加载更多数据 | 请使用游标模式加载更多数据，详情：https://op.jinritemai.com/docs/notice-docs/5/3237 |
| 50002 | 业务处理失败 | isv.business-failed:4200 | 4200:账号状态异常，请检查账号状态 | 4200:账号状态异常，请检查账号状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
