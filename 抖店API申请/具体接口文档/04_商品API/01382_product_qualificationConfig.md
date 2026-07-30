# /product/qualificationConfig

> 中文说明：获取类目下需要填写的资质列表  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1382>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/qualificationConfig |
| 中文名称 | 获取类目下需要填写的资质列表 |
| 文档目录 | 商品API |
| Article ID | 1382 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2023/1/3 14:20:12 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

在发布商品的时候需要填写商品资质，可以通过这个接口获取当前类目下需要填写的资质列表。
本接口返回的是否必填信息在发布商品时可能会由于商家信息/提交的商品信息出现动态变动，如发布商品时提示有资质未填写，请增加该资质后再进行发布。

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.qualificationConfig | 调用的API接口名称 | - | - |
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
| 0 | category_id | category_id | true | 1 | 20215 | 类目ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | config_list | configList | - | 3 | - | 资质列表 | - | R1 |
| 1 | config_list.key | key | - | 2 | 3457058945162709852 | 资质ID | - | R1 |
| 1 | config_list.name | name | - | 2 | 质检报告 | 资质名 | - | R1 |
| 1 | config_list.text_list | textList | - | 3 | [           "需为近一年由第三方权威质检机构出具的一份含有CMA或CNAS认证的质检报告。",           "-检测报告里的商品名称、品牌、生产商名称等信息与商详发布的商品信息需一致",           "-如报告无品牌名称，需提供含品牌名称、商品名称及生产单位的产品实拍图",           "-涉及特殊材质的商品，需提供材质（面料）或成品质检报告，质检报告须包含材质成分（纺织品还需包含面料含量)、对应的商品货号或款号或商品名称。特殊材质包含但不限于蚕丝、真丝、羽绒、鸭绒、鹅绒、羊绒、羊毛、牛皮、羊皮、真皮、移膜革、猪皮等（包括皮草类）。"         ] | 填写提示 | - | R1 |
| 1 | config_list.is_required | isRequired | - | 4 | true | 是否必填 | - | R1 |
| 1 | config_list.matchable_rule | matchableRule | - | 3 | - | 商品类目属性可能触发的规则（会导致资质是否必填发生变化） | - | R1 |
| 2 | config_list.matchable_rule.rule_clause | ruleClause | - | 8 | - | key为类目属性id，当该属性填了如下属性值时，命中规则 | - | R1 |
| 3 | config_list.matchable_rule.rule_clause.property_values | propertyValues | - | 3 | [16391,5316,168630] | 属性值id数组 | - | R1 |
| 3 | config_list.matchable_rule.rule_clause.operand_str | operandStr | - | 2 | 等于 | 等于、不等于 | - | - |
| 2 | config_list.matchable_rule.is_qualification_required | isQualificationRequired | - | 4 | true | 命中该规则后 该资质是否必填 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/qualificationConfig?app_key=your_appkey_here&method=product.qualificationConfig&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/qualificationConfig?app_key=your_appkey_here&method=product.qualificationConfig&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductQualificationConfigRequest request = new ProductQualificationConfigRequest();
ProductQualificationConfigParam param = request.getParam();
param.setCategoryId(20215L);
ProductQualificationConfigResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductQualificationConfigRequest();
$param = new ProductQualificationConfigParam();
$request->setParam($param);
$param->category_id = 20215;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductQualificationConfigRequest()
param = request.getParams()
param.category_id = 20215
response = request.execute(accessToken)

```

### go

```go
request := product_qualificationConfig_request.New()
param := request.GetParams()
param.CategoryId = 20215
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductQualificationConfigRequest();
var param = request.BuildParam();
param.CategoryId = 20215;
var response = request.Execute<ProductQualificationConfigResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 请指定类目 | 请检查类目信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 获取类目配置失败，请稍后重试 | 请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
