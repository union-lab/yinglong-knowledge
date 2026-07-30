# /buyin/materialsProductStatus

> 中文说明：商品状态查询  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1497>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/materialsProductStatus |
| 中文名称 | 商品状态查询 |
| 文档目录 | 精选联盟API |
| Article ID | 1497 |
| 文档版本 | V5.01 |
| 官方更新时间 | 2023/3/2 21:11:26 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

本接口用于查询某个/批商品是否投放到联盟，以及商品的推广状态和上下架状态

## 权限包

- 精选联盟 / 精选联盟商品物料（packageType=1）；适用应用类目：联盟抖客分销、联盟抖客直播间分销、团长商品推广、团长管理、达人选品、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 商品分销物料（packageType=1）；适用应用类目：创新应用大赛_微应用、联盟抖客分销
- 精选联盟 / 精选联盟物料查询（packageType=1）；适用应用类目：联盟自研、微应用-标题优化、创新应用大赛_微应用、联盟抖客分销、撮合服务商、联盟抖客直播间分销、直播间AI导购、团长管理、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研、直播间导购-微应用
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.materialsProductStatus | 调用的API接口名称 | - | - |
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
| 0 | products | products | true | 3 | ["https://haohuo.jinritemai.com/views/product/detail?id=798754293457134"] | 商品 URL 列表，不超过50个 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 返回数据 | - | R1 |
| 1 | data.product_url | product_url | - | 2 | https://haohuo.jinritemai.com/views/product/detail?id=798754293457134 | 商品 URL | - | R1 |
| 1 | data.status | status | - | 6 | 0 | 上下架状态。 -2:彻底删除；-1:创建成功，提审失败（废弃）；0:在线；1:下线；2:删除 | - | R1 |
| 1 | data.join_alliance | join_alliance | - | 4 | true | 是否加入精选联盟 | - | R1 |
| 1 | data.promotion_status | promotion_status | - | 1 | 2 | 推广状态。  1:终止推广；  2.开启推广； 3.商家关闭推广计划； 4.商品下架 ； 6.平台治理关闭； 99.商家删除 | - | R1 |
| 1 | data.can_share | can_share | - | 4 | true | 商品是否可分销 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/materialsProductStatus?app_key=your_appkey_here&method=buyin.materialsProductStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/materialsProductStatus?app_key=your_appkey_here&method=buyin.materialsProductStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinMaterialsProductStatusRequest request = new BuyinMaterialsProductStatusRequest();
BuyinMaterialsProductStatusParam param = request.getParam();
param.setProducts(["https://haohuo.jinritemai.com/views/product/detail?id=798754293457134"]);
BuyinMaterialsProductStatusResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinMaterialsProductStatusRequest();
$param = new BuyinMaterialsProductStatusParam();
$request->setParam($param);
$param->products = ["https://haohuo.jinritemai.com/views/product/detail?id=798754293457134"];
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinMaterialsProductStatusRequest()
param = request.getParams()
param.products = ["https://haohuo.jinritemai.com/views/product/detail?id=798754293457134"]
response = request.execute(accessToken)

```

### go

```go
request := buyin_materialsProductStatus_request.New()
param := request.GetParams()
param.Products = ["https://haohuo.jinritemai.com/views/product/detail?id=798754293457134"]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinMaterialsProductStatusRequest();
var param = request.BuildParam();
param.Products = ["https://haohuo.jinritemai.com/views/product/detail?id=798754293457134"];
var response = request.Execute<BuyinMaterialsProductStatusResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
