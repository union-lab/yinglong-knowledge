# /alliance/instituteColonelActivityList

> 中文说明：团长活动查询接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1330>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/instituteColonelActivityList |
| 中文名称 | 团长活动查询接口 |
| 文档目录 | 精选联盟API |
| Article ID | 1330 |
| 文档版本 | V5.05 |
| 官方更新时间 | 2022/9/7 19:14:13 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

本接口用于获取机构创建的团长活动列表

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.instituteColonelActivityList | 调用的API接口名称 | - | - |
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
| 0 | status | status | true | 7 | 0 | 活动状态。0：任意状态； 1：未上线； 2：报名未开始； 3：报名中； 4：推广未开始； 5：推广中； 7：报名结束 | - | - |
| 0 | search_type | search_type | true | 1 | 0 | 排序选项，0:创建时间； 1:活动报名开始时间排序；2:活动报名结束时间排序 | - | - |
| 0 | sort_type | sort_type | true | 1 | 0 | 排序顺序, 0：升序；1：降序 | - | - |
| 0 | page | page | true | 1 | 1 | 页码，从1开始 | - | - |
| 0 | page_size | page_size | true | 1 | 20 | 每页数量（最大20） | - | - |
| 0 | activity_info | activity_info | false | 2 | 一个活动 | 活动信息，支持通过活动ID和活动名称搜索 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | institution_id | institution_id | - | 1 | 11111111 | 机构ID | - | R1 |
| 0 | total | total | - | 1 | 10 | 活动条数 | - | R1 |
| 0 | activity_list | activity_list | - | 3 | - | 活动列表 | - | R1 |
| 1 | activity_list.activity_id | activity_id | - | 1 | 11111 | 活动ID | - | R1 |
| 1 | activity_list.activity_name | activity_name | - | 2 | 活动1 | 活动名称 | - | R1 |
| 1 | activity_list.activity_start_time | activity_start_time | - | 2 | 2021-09-02 | 活动开始时间 | - | R1 |
| 1 | activity_list.activity_end_time | activity_end_time | - | 2 | 2021-09-02 | 活动结束时间 | - | R1 |
| 1 | activity_list.status | status | - | 7 | 1 | 活动状态，1:未上线；2:报名未开始；3:报名中；4:推广未开始；5:推广中；7:报名结束 | - | R1 |
| 1 | activity_list.application_start_time | application_start_time | - | 2 | 2021-09-02 | 活动报名开始时间 | - | R1 |
| 1 | activity_list.application_end_time | application_end_time | - | 2 | 2021-09-02 | 活动报名结束时间 | - | R1 |
| 1 | activity_list.categories_limit | categories_limit | - | 8 | {} | 行业类目限制 | - | R1 |
| 0 | colonel_buyin_id | colonel_buyin_id | - | 1 | 46128341673481234 | 团长百应ID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/instituteColonelActivityList?app_key=your_appkey_here&method=alliance.instituteColonelActivityList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/instituteColonelActivityList?app_key=your_appkey_here&method=alliance.instituteColonelActivityList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceInstituteColonelActivityListRequest request = new AllianceInstituteColonelActivityListRequest();
AllianceInstituteColonelActivityListParam param = request.getParam();
param.setStatus(0);
param.setSearchType(0L);
param.setSortType(0L);
param.setPage(1L);
param.setPageSize(20L);
param.setActivityInfo("一个活动");
AllianceInstituteColonelActivityListResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceInstituteColonelActivityListRequest();
$param = new AllianceInstituteColonelActivityListParam();
$request->setParam($param);
$param->status = 0;
$param->search_type = 0;
$param->sort_type = 0;
$param->page = 1;
$param->page_size = 20;
$param->activity_info = "一个活动";
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceInstituteColonelActivityListRequest()
param = request.getParams()
param.status = 0
param.search_type = 0
param.sort_type = 0
param.page = 1
param.page_size = 20
param.activity_info = "一个活动"
response = request.execute(accessToken)

```

### go

```go
request := alliance_instituteColonelActivityList_request.New()
param := request.GetParams()
param.Status = 0
param.SearchType = 0
param.SortType = 0
param.Page = 1
param.PageSize = 20
param.ActivityInfo = "一个活动"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceInstituteColonelActivityListRequest();
var param = request.BuildParam();
param.Status = 0;
param.SearchType = 0;
param.SortType = 0;
param.Page = 1;
param.PageSize = 20;
param.ActivityInfo = "一个活动";
var response = request.Execute<AllianceInstituteColonelActivityListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 根据接口文档检查下入参是否合法 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务内部错误，稍候再试 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:4200 | 4200:账号状态异常，请检查账号状态 | 4200:账号状态异常，请检查账号状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
