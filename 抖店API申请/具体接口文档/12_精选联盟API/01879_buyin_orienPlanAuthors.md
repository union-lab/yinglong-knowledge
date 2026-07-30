# /buyin/orienPlanAuthors

> 中文说明：查询定向计划作者列表  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1879>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/orienPlanAuthors |
| 中文名称 | 查询定向计划作者列表 |
| 文档目录 | 精选联盟API |
| Article ID | 1879 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/3/28 15:52:10 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查询定向计划作者列表
查询定向计划作者列表

## 权限包

- 精选联盟 / 精选联盟定向计划（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.orienPlanAuthors | 调用的API接口名称 | - | - |
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
| 0 | orien_plan_id | orien_plan_id | true | 2 | 1233221 | 按定向计划ID搜索 | - | - |
| 0 | page | page | false | 99 | 1 | 分页，默认 1 | - | - |
| 0 | page_size | page_size | false | 99 | 20 | 每页数目，最大40，默认20 | - | - |
| 0 | audit_status | audit_status | false | 99 | 1 | 1 生效中(默认)  2 待审核 3 审核拒绝 | - | - |
| 0 | user_name | user_name | false | 2 | 达人昵称 | 按达人昵称搜索 | - | - |
| 0 | buyin_id | buyin_id | false | 99 | 111111 | 按达人百应ID搜索 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 100 | 商品定向计划作者数 | - | R1 |
| 0 | orien_plan_authors | orien_plan_authors | - | 3 | - | 商品定向计划作者列表 | - | R1 |
| 1 | orien_plan_authors.apply_id | apply_id | - | 99 | 1 | 申请 ID | - | R1 |
| 1 | orien_plan_authors.orien_plan_id | orien_plan_id | - | 2 | 1233221 | 定向计划ID | - | R1 |
| 1 | orien_plan_authors.buyin_id | buyin_id | - | 99 | 11111 | 达人buyin ID | - | R1 |
| 1 | orien_plan_authors.user_name | user_name | - | 2 | 达人昵称 | 达人昵称 | - | R1 |
| 1 | orien_plan_authors.apply_time | apply_time | - | 99 | 1625480546 | 申请时间戳 | - | R1 |
| 1 | orien_plan_authors.apply_suc_time | apply_suc_time | - | 99 | 1625480546 | 申请通过时间戳 | - | R1 |
| 1 | orien_plan_authors.audit_status | audit_status | - | 99 | 1 | 1 生效中  2 待审核 3 审核拒绝 | - | R1 |
| 1 | orien_plan_authors.apply_info | apply_info | - | 2 | 申请加入 | 申请信息 | - | R1 |
| 1 | orien_plan_authors.end_time | end_time | - | 99 | end_time | 达人移除时间（商家未修改时和计划结束时间一致） | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/orienPlanAuthors?app_key=your_appkey_here&method=buyin.orienPlanAuthors&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/orienPlanAuthors?app_key=your_appkey_here&method=buyin.orienPlanAuthors&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinOrienPlanAuthorsRequest request = new BuyinOrienPlanAuthorsRequest();
BuyinOrienPlanAuthorsParam param = request.getParam();
param.setOrienPlanId("1233221");
param.setPage(1L);
param.setPageSize(20L);
param.setAuditStatus(1);
param.setUserName("达人昵称");
param.setBuyinId(111111L);
BuyinOrienPlanAuthorsResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinOrienPlanAuthorsRequest();
$param = new BuyinOrienPlanAuthorsParam();
$request->setParam($param);
$param->orien_plan_id = "1233221";
$param->page = 1;
$param->page_size = 20;
$param->audit_status = 1;
$param->user_name = "达人昵称";
$param->buyin_id = 111111;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinOrienPlanAuthorsRequest()
param = request.getParams()
param.orien_plan_id = "1233221"
param.page = 1
param.page_size = 20
param.audit_status = 1
param.user_name = "达人昵称"
param.buyin_id = 111111
response = request.execute(accessToken)

```

### go

```go
request := buyin_orienPlanAuthors_request.New()
param := request.GetParams()
param.OrienPlanId = "1233221"
param.Page = 1
param.PageSize = 20
param.AuditStatus = 1
param.UserName = "达人昵称"
param.BuyinId = 111111
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinOrienPlanAuthorsRequest();
var param = request.BuildParam();
param.OrienPlanId = "1233221";
param.Page = 1;
param.PageSize = 20;
param.AuditStatus = 1;
param.UserName = "达人昵称";
param.BuyinId = 111111;
var response = request.Execute<BuyinOrienPlanAuthorsResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4114 | 无效定向计划ID | 无效定向计划ID |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:257 | 257:参数校验失败 | 257:参数校验失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
