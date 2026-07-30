# /second/ecomInsight/queryShortVideoData

> 中文说明：查询短视频数据接口  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/8182>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/ecomInsight/queryShortVideoData |
| 中文名称 | 查询短视频数据接口 |
| 文档目录 | 短视频API |
| Article ID | 8182 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/4/8 20:07:25 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1 |

## 使用说明

根据条件查询短视频数据

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.ecomInsight/queryShortVideoData | 调用的API接口名称 | - | - |
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
| 0 | filters | filters | false | 3 | - | 过滤 | - | - |
| 1 | filters.field | field | false | 2 | share_cnt_7d | 筛选字段名，必须在允许的筛选字段白名单内 | - | - |
| 1 | filters.option | option | false | 2 | >100 | 筛选条件表达式 | - | - |
| 0 | page | page | false | 99 | 1 | 页码 | - | - |
| 0 | page_size | page_size | false | 99 | 20 | 每页条数，最多20 | - | - |
| 0 | is_industry | is_industry | false | 4 | true | 是否行业数据 | - | - |
| 0 | search | search | false | 3 | - | 搜索 | - | - |
| 1 | search.field | field | false | 2 | video_title | 搜索字段名，必须在允许的搜索字段白名单内 | - | - |
| 1 | search.type | type | false | 2 | fuzzy | 搜索类型，仅允许：fuzzy（模糊搜索，LIKE '%value%'）、exact（精确匹配） | - | - |
| 1 | search.value | value | false | 2 | 海 | 搜索值。为 null 时该条搜索条件被跳过 | - | - |
| 0 | sort | sort | false | 3 | - | 排序条件 | - | - |
| 1 | sort.order | order | false | 2 | desc | 排序方向，仅允许 asc 或 desc（不区分大小写）。默认 desc | - | - |
| 1 | sort.aggregation | aggregation | false | 2 | count_distinct | 聚合函数名，当排序字段是聚合指标时需传入。支持 sum、avg、count_distinct | - | - |
| 1 | sort.field | field | false | 2 | key_word | 排序字段名 | - | - |
| 0 | group_by | group_by | false | 3 | key_word | 聚合分组字段列表，必须至少包含一个字段。目前仅支持聚合查询模式，不传将报错 | - | - |
| 0 | metrics | metrics | false | 3 | - | 聚合指标列表，定义需要计算的聚合字段 | - | - |
| 1 | metrics.aggregation | aggregation | false | 2 | sum | 聚合方式，仅允许以下 3 种（不区分大小写）：sum、avg、count_distinct | - | - |
| 1 | metrics.field | field | false | 2 | share_cnt_7d | 聚合字段名，必须在允许的聚合字段白名单内（见附录） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 业务数据，成功时返回，失败时为 null | - | R1 |
| 1 | data.fields | fields | - | 3 | "key_word","video_id","sum_share_cnt_7d","avg_share_cnt_7d",  "count_distinct_key_word" | 返回的字段名列表，顺序与 field_values 中每行数据的值顺序一致 | - | R1 |
| 1 | data.field_values | field_values | - | 3 | "xxxxx<SEP>xxx<SEP>0-20000<SEP>0-20000<SEP>0-20000",  "xxxxx<SEP>xxx<SEP>0-20000<SEP>0-20000<SEP>0-20000" | 数据行列表。每行是一个字符串，各字段值之间用 <SEP> 分隔，顺序与 fields 一一对应 | - | R1 |
| 1 | data.request_id | request_id | - | 2 | req_be5ce4ac672f4325a2ff9961fa4cf112 | 请求唯一标识，格式 req_ + 32位UUID | - | - |
| 1 | data.total | total | - | 99 | 12313 | 符合条件的记录总数 | - | - |
| 1 | data.page | page | - | 99 | 1 | 当前页码 | - | - |
| 1 | data.page_size | page_size | - | 99 | 20 | 每页条数 | - | - |
| 0 | msg | msg | - | 2 | xxx | 消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/ecomInsight/queryShortVideoData?app_key=your_appkey_here&method=second.ecomInsight.queryShortVideoData&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/ecomInsight/queryShortVideoData?app_key=your_appkey_here&method=second.ecomInsight.queryShortVideoData&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondEcomInsightQueryShortVideoDataRequest request = new SecondEcomInsightQueryShortVideoDataRequest();
SecondEcomInsightQueryShortVideoDataParam param = request.getParam();
param.setPage(1);
param.setPageSize(20);
param.setIsIndustry(true);
param.setGroupBy(key_word);
SecondEcomInsightQueryShortVideoDataResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondEcomInsightQueryShortVideoDataRequest();
$param = new SecondEcomInsightQueryShortVideoDataParam();
$request->setParam($param);
$param->page = 1;
$param->page_size = 20;
$param->is_industry = true;
$param->group_by = key_word;
$response = $request->execute(accessToken);

```

### python

```python
request = SecondEcomInsightQueryShortVideoDataRequest()
param = request.getParams()
param.page = 1
param.page_size = 20
param.is_industry = true
param.group_by = key_word
response = request.execute(accessToken)

```

### go

```go
request := second_ecomInsight_queryShortVideoData_request.New()
param := request.GetParams()
param.Page = 1
param.PageSize = 20
param.IsIndustry = true
param.GroupBy = key_word
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondEcomInsightQueryShortVideoDataRequest();
var param = request.BuildParam();
param.Page = 1;
param.PageSize = 20;
param.IsIndustry = true;
param.GroupBy = key_word;
var response = request.Execute<SecondEcomInsightQueryShortVideoDataResponse>(accessToken);

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

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
