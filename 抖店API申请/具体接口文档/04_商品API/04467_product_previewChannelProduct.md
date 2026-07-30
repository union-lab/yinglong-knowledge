# /product/previewChannelProduct

> 中文说明：预览渠道品信息  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4467>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/previewChannelProduct |
| 中文名称 | 预览渠道品信息 |
| 文档目录 | 商品API |
| Article ID | 4467 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/9/8 10:48:24 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

预览渠道品信息

## 权限包

- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.previewChannelProduct | 调用的API接口名称 | - | - |
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
| 0 | main_product_id | main_product_id | true | 99 | 3631654780608339610 | 主商品ID | - | - |
| 0 | channel_id | channel_id | true | 99 | 1775199232748660 | 渠道ID | - | - |
| 0 | channel_type | channel_type | true | 99 | 3 | 渠道类型 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | main_product_id | main_product_id | - | 99 | 3631654780608339610 | 主商品ID | 39 | - |
| 0 | channel_id | channel_id | - | 99 | 1775199232748660 | 渠道ID | 39 | - |
| 0 | channel_type | channel_type | - | 99 | 3 | 渠道类型 | 39 | - |
| 0 | name | name | - | 2 | 半身裙 | 渠道品标题，包含标题前缀+标题内容 | 39 | - |
| 0 | start_time | start_time | - | 2 | 2023-02-21 16:46:21 | 有效期开始时间 | 39 | - |
| 0 | end_time | end_time | - | 2 | 2023-02-21 16:46:21 | 有效期结束时间 | 39 | - |
| 0 | price_follow_main | price_follow_main | - | 4 | true | 价格是否跟随主品 | 39 | - |
| 0 | share_main_stock | share_main_stock | - | 4 | true | 库存是否与主品共享 | 39 | - |
| 0 | is_kol_exclusive | is_kol_exclusive | - | 4 | true | 是否『达人专属』渠道品 | 39 | - |
| 0 | status | status | - | 99 | 1 | 渠道品状态<br>0：下架<br>2：上架<br>3：封禁 | 39 | - |
| 0 | channel_buy_limit | channel_buy_limit | - | 5 | - | 限购信息 | - | R1 |
| 1 | channel_buy_limit.total_buy_num | total_buy_num | - | 99 | 5 | 每用户总限购数 | 39 | - |
| 1 | channel_buy_limit.max_buy_num | max_buy_num | - | 99 | 2 | 单次购买上限 | 39 | - |
| 1 | channel_buy_limit.min_buy_num | min_buy_num | - | 99 | 1 | 单次限购下限 | 39 | - |
| 0 | sku_channel | sku_channel | - | 3 | - | SKU信息 | - | R1 |
| 1 | sku_channel.sku_id | sku_id | - | 99 | 12323232132 | 主品SKU ID | 39 | - |
| 1 | sku_channel.name | name | - | 2 | 红色 | SKU名称 | 39 | - |
| 1 | sku_channel.sku_channel | sku_channel | - | 5 | - | 渠道品SKU | 39 | R1 |
| 2 | sku_channel.sku_channel.code | code | - | 2 | 11111 | 渠道品定制SKU商家编码。可忽略，默认使用主商品SKU商家编码。 | - | - |
| 2 | sku_channel.sku_channel.sku_id | sku_id | - | 99 | 12323232132 | 主品SKU ID | 39 | - |
| 2 | sku_channel.sku_channel.price | price | - | 99 | 1111 | 渠道品SKU价格 | 39 | - |
| 2 | sku_channel.sku_channel.stock_num | stock_num | - | 99 | 11 | 渠道品SKU库存 | 39 | - |
| 1 | sku_channel.sku_main | sku_main | - | 5 | - | 主品SKU | 39 | R1 |
| 2 | sku_channel.sku_main.price | price | - | 99 | 1111 | 主品SKU价格 | 39 | - |
| 2 | sku_channel.sku_main.stock | stock | - | 99 | 11 | 主品SKU库存 | 39 | - |
| 1 | sku_channel.status | status | - | 99 | 1 | SKU状态<br>0：渠道品有该SKU<br>1：渠道品无该SKU | 39 | - |
| 0 | main_img_material | material | - | 5 | - | 渠道品主图信息 | - | R1 |
| 1 | main_img_material.img_list | img_list | - | 3 | ["xxxx", "xxxx"] | 主图列表 | - | R1 |
| 1 | main_img_material.material_type | material_type | - | 99 | 18 | 素材类型，主图为18 | 39 | - |
| 1 | main_img_material.material_status | material_status | - | 99 | 1 | 已经废弃字段，请不要再使用，图片不单独审核，只需要看渠道品审核字段check_status | 39 | - |
| 1 | main_img_material.reject_reason | reject_reason | - | 2 | 不清晰 | 审核驳回原因 | 39 | - |
| 0 | detail_brief_material | detail_brief | - | 5 | - | 渠道品详情图信息 | - | R1 |
| 1 | detail_brief_material.reject_reason | reject_reason | - | 2 | 不清晰 | 审核驳回原因 | - | - |
| 1 | detail_brief_material.material_status | material_status | - | 99 | 1 | 已经废弃字段，请不要再使用，描述不单独审核，只需要看渠道品审核字段check_status | - | - |
| 1 | detail_brief_material.material_type | material_type | - | 99 | 18 | 素材类型，详情图为28 | - | - |
| 1 | detail_brief_material.img_list | img_list | - | 3 | ["xxxx", "xxxx"] | 详情图列表 | - | R1 |
| 0 | freight_template | freight_template | - | 5 | - | 运费模板配置 | - | R1 |
| 1 | freight_template.freight_follow_main | freight_follow_main | - | 4 | true | 渠道品运费模板是否与主品保持一致 | - | - |
| 1 | freight_template.freight_id | freight_id | - | 99 | 0 | 渠道品定制运费模板ID，当设置了freight_follow_main=true时与主品运费模板保持一致；否则需要传值。 | - | - |
| 0 | sku_code_follow_main | sku_code_follow_main | - | 4 | false | 商家编码与主品保持一致配置，true-与主品保持一致，false-自定义 | - | - |
| 0 | check_status | check_status | - | 99 | 3 | 渠道品审核状态，1：未提交审核；2：审核中；3：审核通过；4：审核拒绝 | - | - |
| 0 | name_prefix | name_prefix | - | 2 | 标题前缀 | 标题前缀 | - | - |
| 0 | name_subject | name_subject | - | 2 | 标题内容 | 标题内容 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/previewChannelProduct?app_key=your_appkey_here&method=product.previewChannelProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/previewChannelProduct?app_key=your_appkey_here&method=product.previewChannelProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductPreviewChannelProductRequest request = new ProductPreviewChannelProductRequest();
ProductPreviewChannelProductParam param = request.getParam();
param.setMainProductId(3631654780608339610L);
param.setChannelId(1775199232748660L);
param.setChannelType(3L);
ProductPreviewChannelProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductPreviewChannelProductRequest();
$param = new ProductPreviewChannelProductParam();
$request->setParam($param);
$param->main_product_id = 3631654780608339610;
$param->channel_id = 1775199232748660;
$param->channel_type = 3;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductPreviewChannelProductRequest()
param = request.getParams()
param.main_product_id = 3631654780608339610
param.channel_id = 1775199232748660
param.channel_type = 3
response = request.execute(accessToken)

```

### go

```go
request := product_previewChannelProduct_request.New()
param := request.GetParams()
param.MainProductId = 3631654780608339610
param.ChannelId = 1775199232748660
param.ChannelType = 3
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductPreviewChannelProductRequest();
var param = request.BuildParam();
param.MainProductId = 3631654780608339610;
param.ChannelId = 1775199232748660;
param.ChannelType = 3;
var response = request.Execute<ProductPreviewChannelProductResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010058 | 商品不存在或已彻底删除 | 商品不存在或已彻底删除 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 渠道品查询失败，请重试 | 渠道品查询失败，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 查询品牌信息失败 | 查询品牌信息失败 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 渠道类型不合法 | 渠道类型不合法 |
| 50002 | 业务处理失败 | isv.business-failed:110103019 | 110103019:渠道品不存在 | 110103019:渠道品不存在 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
