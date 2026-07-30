# /brand/getSug

> 中文说明：通过前缀匹配召回品牌信息  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1436>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /brand/getSug |
| 中文名称 | 通过前缀匹配召回品牌信息 |
| 文档目录 | 商品API |
| Article ID | 1436 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2021/11/5 15:06:02 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 560 |

## 使用说明

通过输入品牌名称进行模糊查询，支持品牌中文名(拼音)、英文名，并返回品牌信息
本接口适用于通过前缀匹配的形式对品牌信息，例如想要“安踏”，可以通过搜索“安”来查询，但是搜索“踏”是无法找到的。
注意点：1. 召回的第一个为品牌名称严格匹配项。
2. 单次召回数量最多为10个。
3. 支持中文名称或英文名称，但不可以两个名称一起输入来查询
4. 不支持特殊符号，例如“/”，“ ”，“·”，以及除中英文外的语言

## 权限包

- 店铺 / 店铺授权品牌查询（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、卡券商工具、撮合服务商、AI拼图-微应用、搭配购-微应用、微应用-商详海报、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播间AI导购、直播间导购-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | brand.getSug | 调用的API接口名称 | - | - |
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
| 0 | query | Query | true | 2 | apple | 前缀匹配的品牌名 | - | - |
| 0 | user_id | UserId | true | 1 | 0 | 用户ID，可用默认值0 | - | - |
| 0 | filter_info | FilterInfo | false | 5 | - | 过滤用参数，不填则是全量召回 | - | - |
| 1 | filter_info.brand_ids | BrandIds | false | 3 | [202132132342,213123443543] | 品牌ids | - | - |
| 1 | filter_info.brand_category | BrandCategory | false | 3 | [20220] | 品牌类别 | - | - |
| 1 | filter_info.status | Status | false | 1 | 1 | 品牌状态: 1.在线 2.离线 | - | - |
| 1 | filter_info.related_ids | RelatedIds | false | 3 | [12123123123,4323423423] | 品牌商标关联Id | - | - |
| 1 | filter_info.trade_mark_ids | TradeMarkIds | false | 3 | ["21312323134"] | 商标IDs | - | - |
| 1 | filter_info.audit_status | AuditStatus | false | 3 | [2] | 废弃字段，请勿填写: 1. 审核中 2. 审核通过 3. 审核拒绝 4. 送审失败 | - | - |
| 0 | read_old | readOld | true | 4 | false | 是否读取老数据 默认为false | - | - |
| 0 | biz_types | BizTypes | true | 3 | [0] | 业务线类型: 0. 国内品牌 1. 跨境品牌 3. 广告 | - | - |
| 0 | enable_deduplicate | EnableDeduplicate | true | 4 | true | 是否去重，一般选择true | - | - |
| 0 | extra_config | ExtraConfig | false | 5 | - | 额外配置，无特殊需求请按描述填写 | - | - |
| 1 | extra_config.use_origin_brand_info | UseOriginBrandInfo | false | 4 | false | 是否忽略去重 使用原始品牌信息，默认取false | - | - |
| 1 | extra_config.use_brand_info | UseOldBrandInfo | false | 4 | false | 是否忽略新旧映射 使用老品牌信息，默认取false | - | - |
| 1 | extra_config.use_brand_name_deduplicate | UseBrandNameDeduplicate | false | 4 | true | 使用品牌名去重，需要和抖店一致请取true | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | sug_list | SugList | - | 3 | - | 品牌信息列表 | - | R1 |
| 1 | sug_list.brand_id | BrandId | - | 1 | 324234234 | 品牌ID | - | R1 |
| 1 | sug_list.brand_name_c_n | BrandNameCN | - | 2 | 苹果 | 品牌中文名 | - | R1 |
| 1 | sug_list.brand_name_e_n | BrandNameEN | - | 2 | apple | 品牌英文名 | - | R1 |
| 1 | sug_list.level | Level | - | 7 | 0 | 品牌等级 | - | R1 |
| 1 | sug_list.status | Status | - | 7 | 1 | 品牌状态：在线 | - | R1 |
| 1 | sug_list.brand_alias | BrandAlias | - | 3 | 苹果/apple | 品牌别名 | - | R1 |
| 1 | sug_list.create_timestamp | CreateTimestamp | - | 1 | 1636011982 | 创建时间 | - | R1 |
| 1 | sug_list.update_timestamp | UpdateTimestamp | - | 1 | 1636011982 | 修改时间 | - | R1 |
| 1 | sug_list.audit_status | AuditStatus | - | 7 | 2 | 审核情况 1. 审核中 2. 审核通过 3. 审核拒绝 4. 送审失败 | - | R1 |
| 1 | sug_list.biz_type | BizType | - | 7 | 0 | 业务线类型: 0. 国内品牌 1. 跨境品牌 3. 广告 | - | R1 |
| 1 | sug_list.logo | Logo | - | 2 | url地址 | 品牌logo | - | R1 |
| 1 | sug_list.extra | Extra | - | 8 | - | 额外信息 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/brand/getSug?app_key=your_appkey_here&method=brand.getSug&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/brand/getSug?app_key=your_appkey_here&method=brand.getSug&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BrandGetSugRequest request = new BrandGetSugRequest();
BrandGetSugParam param = request.getParam();
param.setQuery("apple");
param.setUserId(0L);
param.setReadOld(false);
param.setBizTypes([0]);
param.setEnableDeduplicate(true);
BrandGetSugResponse response = request.execute(accessToken);

```

### php

```php
$request = new BrandGetSugRequest();
$param = new BrandGetSugParam();
$request->setParam($param);
$param->query = "apple";
$param->user_id = 0;
$param->read_old = false;
$param->biz_types = [0];
$param->enable_deduplicate = true;
$response = $request->execute(accessToken);

```

### python

```python
request = BrandGetSugRequest()
param = request.getParams()
param.query = "apple"
param.user_id = 0
param.read_old = false
param.biz_types = [0]
param.enable_deduplicate = true
response = request.execute(accessToken)

```

### go

```go
request := brand_getSug_request.New()
param := request.GetParams()
param.Query = "apple"
param.UserId = 0
param.ReadOld = false
param.BizTypes = [0]
param.EnableDeduplicate = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BrandGetSugRequest();
var param = request.BuildParam();
param.Query = "apple";
param.UserId = 0;
param.ReadOld = false;
param.BizTypes = [0];
param.EnableDeduplicate = true;
var response = request.Execute<BrandGetSugResponse>(accessToken);

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
