# /alliance/materialsProductCategory

> 中文说明：类目查询  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/637>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/materialsProductCategory |
| 中文名称 | 类目查询 |
| 文档目录 | 精选联盟API |
| Article ID | 637 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2026/2/27 15:28:14 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

返回类目列表：类目层级、类目名称、类目ID

## 权限包

- 精选联盟 / 精选联盟商品物料（packageType=1）；适用应用类目：联盟抖客分销、联盟抖客直播间分销、团长商品推广、团长管理、达人选品、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 商品分销物料（packageType=1）；适用应用类目：创新应用大赛_微应用、联盟抖客分销
- 精选联盟 / 精选联盟物料查询（packageType=1）；适用应用类目：联盟自研、微应用-标题优化、创新应用大赛_微应用、联盟抖客分销、撮合服务商、联盟抖客直播间分销、直播间AI导购、团长管理、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研、直播间导购-微应用
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.materialsProductCategory | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | false | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | parent_id | parent_id | true | 99 | 0 | 父类目 （0表示查询一级类目列表） | - | - |
| 0 | channel | channel | false | 99 | 0 | 类目 0:default 门捷列夫 1:std 标准类目树 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 123 | 类目总数 | - | R1 |
| 0 | category_list | category_list | - | 3 | - | 类目列表（包含查询的父类目和下一级子类目） | - | - |
| 1 | category_list.id | id | - | 99 | 2 | 类目ID | - | R1 |
| 1 | category_list.name | name | - | 2 | 家电 | 类目名称 | - | R1 |
| 1 | category_list.level | level | - | 99 | 1 | 类目层级 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/materialsProductCategory?app_key=your_appkey_here&method=alliance.materialsProductCategory&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/materialsProductCategory?app_key=your_appkey_here&method=alliance.materialsProductCategory&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceMaterialsProductCategoryRequest request = new AllianceMaterialsProductCategoryRequest();
AllianceMaterialsProductCategoryParam param = request.getParam();
param.setParentId(0L);
param.setChannel(0);
AllianceMaterialsProductCategoryResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceMaterialsProductCategoryRequest();
$param = new AllianceMaterialsProductCategoryParam();
$request->setParam($param);
$param->parent_id = 0;
$param->channel = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceMaterialsProductCategoryRequest()
param = request.getParams()
param.parent_id = 0
param.channel = 0
response = request.execute(accessToken)

```

### go

```go
request := alliance_materialsProductCategory_request.New()
param := request.GetParams()
param.ParentId = 0
param.Channel = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceMaterialsProductCategoryRequest();
var param = request.BuildParam();
param.ParentId = 0;
param.Channel = 0;
var response = request.Execute<AllianceMaterialsProductCategoryResponse>(accessToken);

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

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
