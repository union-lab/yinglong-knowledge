# /buyin/strategyPromotionCreate

> 中文说明：商品推广创建  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/5761>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/strategyPromotionCreate |
| 中文名称 | 商品推广创建 |
| 文档目录 | 精选联盟API |
| Article ID | 5761 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/11/27 14:59:29 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

支持商家通过接口创建/关闭商品推广

## 权限包

- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理
- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.strategyPromotionCreate | 调用的API接口名称 | - | - |
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
| 0 | product_ids | product_ids | true | 3 | 123456789 | 商品id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | result | result | - | 3 | - | 绑定结果 | - | R1 |
| 1 | result.success | success | - | 4 | true | 是否操作成功 | - | - |
| 1 | result.product_id | product_id | - | 1 | 123456789 | 商品id | - | - |
| 1 | result.product_name | product_name | - | 2 | 测试商品 | 商品名称 | - | - |
| 1 | result.reason | reason | - | 2 | 商品不允许创建推广 | 绑定失败原因 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/yunc/wmsInboundCallback?app_key=your_appkey_here&method=yunc.wmsInboundCallback&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/yunc/wmsInboundCallback?app_key=your_appkey_here&method=yunc.wmsInboundCallback&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinStrategyPromotionCreateRequest request = new BuyinStrategyPromotionCreateRequest();
BuyinStrategyPromotionCreateParam param = request.getParam();
param.setProductIds(123456789);
BuyinStrategyPromotionCreateResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinStrategyPromotionCreateRequest();
$param = new BuyinStrategyPromotionCreateParam();
$request->setParam($param);
$param->product_ids = 123456789;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinStrategyPromotionCreateRequest()
param = request.getParams()
param.product_ids = 123456789
response = request.execute(accessToken)

```

### go

```go
request := buyin_strategyPromotionCreate_request.New()
param := request.GetParams()
param.ProductIds = 123456789
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinStrategyPromotionCreateRequest();
var param = request.BuildParam();
param.ProductIds = 123456789;
var response = request.Execute<BuyinStrategyPromotionCreateResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:285 | 商品 id 不能为空 | 商品 id 不能为空 |
| 40004 | 非法的参数 | isv.parameter-invalid:1074 | 商品数量超过20 | 商品数量超过20 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4106 | 无效商品ID | 无效商品ID |
| 50002 | 业务处理失败 | isv.business-failed:-2050 | -2050:商家店铺权限异常 | -2050:商家店铺权限异常 |
| 50002 | 业务处理失败 | isv.business-failed:-2053 | -2053:商家店铺信息异常 | -2053:商家店铺信息异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
