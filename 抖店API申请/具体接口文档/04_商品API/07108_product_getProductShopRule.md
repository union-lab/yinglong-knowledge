# /product/getProductShopRule

> 中文说明：获取商品相关店铺维度的规则  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/7108>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getProductShopRule |
| 中文名称 | 获取商品相关店铺维度的规则 |
| 文档目录 | 商品API |
| Article ID | 7108 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/12/2 10:45:15 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

获取商品相关店铺维度的规则

## 权限包

- 商品 / 商品类目属性查询（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、卡券商工具、撮合服务商、客服绩效-微应用、直播话术-微应用、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播工具、直播间AI导购、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getProductShopRule | 调用的API接口名称 | - | - |
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
| 0 | rule_types | rule_types | true | 3 | 需要获取的规则列表 | 驳回自动整改:audit_auto_rectify | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | audit_auto_rectify_rule | audit_auto_rectify_rule | - | 5 | - | 自动整改规则 | - | R1 |
| 1 | audit_auto_rectify_rule.is_grant | is_grant | - | 4 | false | true：已授权，false：未授权/拒绝授权 | - | - |
| 1 | audit_auto_rectify_rule.ungranted_reason | ungranted_reason | - | 7 | 1 | 未授权原因，1：商家暂时不支持该功能，2:未确定：商家还未收到开通提醒，3:待定:收到开通提醒后忽略了，4:授权后手动关闭 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/editMaterial?app_key=your_appkey_here&method=material.editMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/editMaterial?app_key=your_appkey_here&method=material.editMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductGetProductShopRuleRequest request = new ProductGetProductShopRuleRequest();
ProductGetProductShopRuleParam param = request.getParam();
param.setRuleTypes(需要获取的规则列表);
ProductGetProductShopRuleResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetProductShopRuleRequest();
$param = new ProductGetProductShopRuleParam();
$request->setParam($param);
$param->rule_types = 需要获取的规则列表;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetProductShopRuleRequest()
param = request.getParams()
param.rule_types = 需要获取的规则列表
response = request.execute(accessToken)

```

### go

```go
request := product_getProductShopRule_request.New()
param := request.GetParams()
param.RuleTypes = 需要获取的规则列表
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetProductShopRuleRequest();
var param = request.BuildParam();
param.RuleTypes = 需要获取的规则列表;
var response = request.Execute<ProductGetProductShopRuleResponse>(accessToken);

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
