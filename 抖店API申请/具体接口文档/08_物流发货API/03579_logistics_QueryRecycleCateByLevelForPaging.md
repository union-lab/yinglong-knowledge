# /logistics/QueryRecycleCateByLevelForPaging

> 中文说明：回收服务商查询字节回收类目  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/3579>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/QueryRecycleCateByLevelForPaging |
| 中文名称 | 回收服务商查询字节回收类目 |
| 文档目录 | 物流发货API |
| Article ID | 3579 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/4/17 13:59:29 |
| 授权主体 | ["物流商",""] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

回收服务商在推送上门拆旧的能力范围时，需要按照类目+地址维度推送，所以在推送之前，会查询字节的回收类目信息

## 权限包

- 物流连接平台 / 送货上门/上门回收（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.QueryRecycleCateByLevelForPaging | 调用的API接口名称 | - | - |
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
| 0 | level | level | false | 7 | 2 | 类目层级（1：一级类目，2：二级类目，3：三级类目），如不填写，则查询所有层级的类目 | - | - |
| 0 | page_num | pageNum | true | 7 | 1 | 当前页（page_num > 0） | - | - |
| 0 | page_size | pageSize | true | 7 | 50 | 每页大小（0 < page_size <= 100） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 1 | 100 | 总条数 | - | - |
| 0 | data | data | - | 3 | - | 类目信息列表 | - | R1 |
| 1 | data.code | code | - | 2 | 61100 | 类目编码 | - | - |
| 1 | data.name | name | - | 2 | 冰箱 | 类目名称 | - | - |
| 1 | data.level | level | - | 7 | 2 | 类目层级 | - | - |
| 1 | data.parent_code | parentCode | - | 2 | 61000 | 父类目编码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/QueryRecycleCateByLevelForPaging?app_key=your_appkey_here&method=logistics.QueryRecycleCateByLevelForPaging&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/QueryRecycleCateByLevelForPaging?app_key=your_appkey_here&method=logistics.QueryRecycleCateByLevelForPaging&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsQueryRecycleCateByLevelForPagingRequest request = new LogisticsQueryRecycleCateByLevelForPagingRequest();
LogisticsQueryRecycleCateByLevelForPagingParam param = request.getParam();
param.setLevel(2);
param.setPageNum(1);
param.setPageSize(50);
LogisticsQueryRecycleCateByLevelForPagingResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsQueryRecycleCateByLevelForPagingRequest();
$param = new LogisticsQueryRecycleCateByLevelForPagingParam();
$request->setParam($param);
$param->level = 2;
$param->page_num = 1;
$param->page_size = 50;
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsQueryRecycleCateByLevelForPagingRequest()
param = request.getParams()
param.level = 2
param.page_num = 1
param.page_size = 50
response = request.execute(accessToken)

```

### go

```go
request := logistics_QueryRecycleCateByLevelForPaging_request.New()
param := request.GetParams()
param.Level = 2
param.PageNum = 1
param.PageSize = 50
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsQueryRecycleCateByLevelForPagingRequest();
var param = request.BuildParam();
param.Level = 2;
param.PageNum = 1;
param.PageSize = 50;
var response = request.Execute<LogisticsQueryRecycleCateByLevelForPagingResponse>(accessToken);

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
