# /brand/convert

> 中文说明：兼容老品牌id转为新品牌  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1500>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /brand/convert |
| 中文名称 | 兼容老品牌id转为新品牌 |
| 文档目录 | 商品API |
| Article ID | 1500 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2021/11/26 09:58:12 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

老用户发商品用的是 /shop/brandList 接口获取品牌关系id，新版发布做了调整，需要使用品牌库的品牌id，这个接口可以将品牌关系id转为品牌id

## 权限包

- 店铺 / 店铺授权品牌查询（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、卡券商工具、撮合服务商、AI拼图-微应用、搭配购-微应用、微应用-商详海报、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播间AI导购、直播间导购-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | brand.convert | 调用的API接口名称 | - | - |
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
| 0 | related_id | related_id | true | 1 | 12345 | 品牌关系id，即/shop/brandList返回的id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | brand_id | brand_id | - | 1 | 12345 | 品牌id，对应商品发布接口standard_brand_id字段 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/brand/convert?app_key=your_appkey_here&method=brand.convert&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/brand/convert?app_key=your_appkey_here&method=brand.convert&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BrandConvertRequest request = new BrandConvertRequest();
BrandConvertParam param = request.getParam();
param.setRelatedId(12345L);
BrandConvertResponse response = request.execute(accessToken);

```

### php

```php
$request = new BrandConvertRequest();
$param = new BrandConvertParam();
$request->setParam($param);
$param->related_id = 12345;
$response = $request->execute(accessToken);

```

### python

```python
request = BrandConvertRequest()
param = request.getParams()
param.related_id = 12345
response = request.execute(accessToken)

```

### go

```go
request := brand_convert_request.New()
param := request.GetParams()
param.RelatedId = 12345
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BrandConvertRequest();
var param = request.BuildParam();
param.RelatedId = 12345;
var response = request.Execute<BrandConvertResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 品牌授权信息不存在 | 品牌授权信息不存在，请检查 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 查询品牌授权信息失败 | 请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
