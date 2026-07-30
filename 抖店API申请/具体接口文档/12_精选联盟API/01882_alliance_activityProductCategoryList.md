# /alliance/activityProductCategoryList

> 中文说明：创建活动时候可选择的类目接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1882>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/activityProductCategoryList |
| 中文名称 | 创建活动时候可选择的类目接口 |
| 文档目录 | 精选联盟API |
| Article ID | 1882 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2026/2/27 15:27:51 |
| 授权主体 | ["机构","MCN机构","团长","抖客"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

创建活动时候可选择的类目接口

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研
- 精选联盟 / 精选联盟直播间分销（机构）（packageType=1）；适用应用类目：联盟抖客直播间分销、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 抖客活动类目（packageType=1）；适用应用类目：联盟抖客分销

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.activityProductCategoryList | 调用的API接口名称 | - | - |
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
| 0 | channel | channel | false | 99 | 0 | 类目 0:default 门捷列夫 1:std 标准类目树 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | category_list | category_list | - | 3 | - | 类目列表 | - | R1 |
| 1 | category_list.name | name | - | 2 | 类目一 | 行业类目名称 | - | R1 |
| 1 | category_list.category_id | category_id | - | 99 | 111 | 行业类目ID | - | R1 |
| 1 | category_list.first_categories | first_categories | - | 3 | - | 一级类目 | - | R1 |
| 2 | category_list.first_categories.id | id | - | 99 | 111111 | 一级类目名 id | - | R1 |
| 2 | category_list.first_categories.name | name | - | 2 | 一级类目名称 | 一级类目名称 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/activityProductCategoryList?app_key=your_appkey_here&method=alliance.activityProductCategoryList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/activityProductCategoryList?app_key=your_appkey_here&method=alliance.activityProductCategoryList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceActivityProductCategoryListRequest request = new AllianceActivityProductCategoryListRequest();
AllianceActivityProductCategoryListParam param = request.getParam();
param.setChannel(0);
AllianceActivityProductCategoryListResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceActivityProductCategoryListRequest();
$param = new AllianceActivityProductCategoryListParam();
$request->setParam($param);
$param->channel = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceActivityProductCategoryListRequest()
param = request.getParams()
param.channel = 0
response = request.execute(accessToken)

```

### go

```go
request := alliance_activityProductCategoryList_request.New()
param := request.GetParams()
param.Channel = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceActivityProductCategoryListRequest();
var param = request.BuildParam();
param.Channel = 0;
var response = request.Execute<AllianceActivityProductCategoryListResponse>(accessToken);

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
