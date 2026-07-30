# /product/getCategories

> 中文说明：获取商家可选类目  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4649>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getCategories |
| 中文名称 | 获取商家可选类目 |
| 文档目录 | 商品API |
| Article ID | 4649 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/1/21 16:34:05 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2600 |

## 使用说明

获取商家可选类目

## 权限包

- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 商品 / 商品全量类目查询（packageType=1）；适用应用类目：选品铺货-微应用、商品图文-微应用、创新应用大赛_微应用、AI拼图-微应用、短视频工具、商品供应链、商品优化分析、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getCategories | 调用的API接口名称 | - | - |
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
| 0 | id | parentCid | true | 99 | 0 | 父类目id，传0可以获取一级类目 | - | - |
| 0 | channel | channel | false | 99 | 0 | 类目渠道，0：门捷列夫类目，1:标准类目；若不传入，当id=0时，由类目服务内部自行开关控制：0:默认查询门捷列夫类目；1:获取商家灰度标，跟随大盘灰度节奏切换；2:默认查询标准类目 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | category_list | categoryList | - | 3 | - | 父类目本身信息以及子类目信息 | - | R1 |
| 1 | category_list.id | id | - | 99 | 20000 | 类目id | - | - |
| 1 | category_list.name | name | - | 2 | 类目名称 | 类目名称 | - | - |
| 1 | category_list.level | level | - | 99 | 1 | 类目层级 | - | - |
| 1 | category_list.parent_id | parentId | - | 99 | 0 | 父类目id | - | - |
| 1 | category_list.is_leaf | isLeaf | - | 4 | false | 是否为叶子类目 | - | - |
| 1 | category_list.channel | channel | - | 99 | 0 | 类目渠道，0:门捷列夫类目；1:标准类目 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/getCategories?app_key=your_appkey_here&method=product.getCategories&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/getCategories?app_key=your_appkey_here&method=product.getCategories&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductGetCategoriesRequest request = new ProductGetCategoriesRequest();
ProductGetCategoriesParam param = request.getParam();
param.setId(0L);
param.setChannel(0);
ProductGetCategoriesResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetCategoriesRequest();
$param = new ProductGetCategoriesParam();
$request->setParam($param);
$param->id = 0;
$param->channel = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetCategoriesRequest()
param = request.getParams()
param.id = 0
param.channel = 0
response = request.execute(accessToken)

```

### go

```go
request := product_getCategories_request.New()
param := request.GetParams()
param.Id = 0
param.Channel = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetCategoriesRequest();
var param = request.BuildParam();
param.Id = 0;
param.Channel = 0;
var response = request.Execute<ProductGetCategoriesResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2012004 | 非法的参数 | 请检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:2010001 | 系统错误 | 请检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:2010013 | 读取失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:2012001 | 2012001:获取商家信息失败 | 2012001:获取商家信息失败 |
| 50002 | 业务处理失败 | isv.business-failed:2012013 | 读取失败 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
