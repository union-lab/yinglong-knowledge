# /product/addChannelProduct

> 中文说明：创建销售渠道品  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4462>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/addChannelProduct |
| 中文名称 | 创建销售渠道品 |
| 文档目录 | 商品API |
| Article ID | 4462 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/9/8 11:46:42 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 180 |

## 使用说明

为主商品创建销售渠道商品

## 权限包

- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.addChannelProduct | 调用的API接口名称 | - | - |
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
| 0 | main_product_id | main_product_id | true | 99 | 3627614096842696400 | 主商品ID | - | - |
| 0 | channel_type | channel_type | true | 99 | 3 | 渠道类型<br>3：商家自卖<br>4：达人带货 | - | - |
| 0 | name | name | false | 2 | 【直播专属】电竞椅台式电脑桌 | 渠道品定制标题。必填 | - | - |
| 0 | main_img_list | main_img_list | false | 3 | ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"] | 渠道品定制主图，最高支持5张。可省略，默认使用主商品主图列表 | - | - |
| 0 | start_time | start_time | false | 2 | 2023-07-13 17:42:03 | 有效期开始时间。不填开始和结束时间，代表长期有效 | - | - |
| 0 | end_time | end_time | false | 2 | 2023-07-15 17:42:06 | 有效期结束时间。不填开始和结束时间，代表长期有效 | - | - |
| 0 | price_follow_main | price_follow_main | true | 4 | false | 渠道品SKU价格是否跟随主品 | - | - |
| 0 | share_main_stock | share_main_stock | true | 4 | false | 渠道品SKU库存是否与主商品共享库存 | - | - |
| 0 | is_kol_exclusive | is_kol_exclusive | true | 4 | false | 是否『达人专属』渠道品 | - | - |
| 0 | channel_buy_limit | channel_buy_limit | false | 5 | - | 渠道品限购信息 | - | - |
| 1 | channel_buy_limit.total_buy_num | total_buy_num | false | 99 | 10 | 单用户累计购买上限数 | - | - |
| 1 | channel_buy_limit.max_buy_num | max_buy_num | false | 99 | 5 | 每次购买上限数 | - | - |
| 1 | channel_buy_limit.min_buy_num | min_buy_num | false | 99 | 1 | 每次至少购买数 | - | - |
| 0 | sku_channel | sku_channel | true | 3 | - | 渠道SKU相关信息 | - | - |
| 1 | sku_channel.stock_set_mode | stock_set_mode | false | 99 | 1 | 库存编辑模式，0=设置绝对值，1=增量设置 | - | - |
| 1 | sku_channel.code | code | false | 2 | 49374 | 渠道品定制SKU商家编码。可忽略，默认使用主商品SKU商家编码。 | - | - |
| 1 | sku_channel.sku_id | sku_id | true | 99 | 1771295549374468 | 主商品SkuID | - | - |
| 1 | sku_channel.price | price | false | 99 | 10 | 价格，单位分。设置价格跟随主品时，可不填 | - | - |
| 1 | sku_channel.stock_num | stock_num | false | 99 | 100 | 库存，勿大于主SKU的可售库存。设置库存与主商品共享时，可不填 | - | - |
| 0 | detail_brief_img | detail_brief_img | false | 3 | ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"] | 渠道品定制详情图，最高支持50张。detail_brief_follow_main值为false时，必须设置商详图 | - | - |
| 0 | freight_template | freight_template | false | 5 | - | 运费模板信息 | - | - |
| 1 | freight_template.freight_follow_main | freight_follow_main | false | 4 | true | 渠道品运费模板是否与主品保持一致 | - | - |
| 1 | freight_template.freight_id | freight_id | false | 99 | 0 | 渠道品定制运费模板ID，当设置了freight_follow_main=true时与主品运费模板保持一致；否则需要传值。 | - | - |
| 0 | sku_code_follow_main | sku_code_follow_main | false | 4 | false | 商家编码与主品保持一致 | - | - |
| 0 | detail_brief_follow_main | detail_brief_follow_main | false | 4 | true | 商详与主品保持一致配置，true：保持一致；false：单独配置（此时必须传入商详图片，否则渠道品在c端将没有商详图） | - | - |
| 0 | name_prefix | name_prefix | false | 2 | 标题前缀 | 标题前缀 | - | - |
| 0 | name_subject | name_subject | false | 2 | 标题内容 | 标题内容。注意：后续推荐使用name_prefix和name_subject设置标题，不建议使用name字段。并且name字段和name_prefix\name_subject2套传参互斥 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | shop_id | shop_id | - | 99 | 95078 | 店铺ID | 39 | - |
| 0 | product_id | product_id | - | 99 | 3627614096842696400 | 主商品ID | 39 | - |
| 0 | channel | channel | - | 5 | - | 渠道信息 | - | R1 |
| 1 | channel.channel_type | channelType | - | 99 | 3 | 渠道类型（3：商家自卖，4：达人带货） | 39 | - |
| 1 | channel.channel_id | channelId | - | 99 | 1771297785994256 | 渠道ID | 39 | - |
| 0 | is_kol_exclusive | is_kol_exclusive | - | 4 | false | 是否『达人专属』渠道品 | 39 | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/addChannelProduct?app_key=your_appkey_here&method=product.addChannelProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/addChannelProduct?app_key=your_appkey_here&method=product.addChannelProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductAddChannelProductRequest request = new ProductAddChannelProductRequest();
ProductAddChannelProductParam param = request.getParam();
param.setMainProductId(3627614096842696400L);
param.setChannelType(3L);
param.setName("【直播专属】电竞椅台式电脑桌");
param.setMainImgList(["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"]);
param.setStartTime("2023-07-13 17:42:03");
param.setEndTime("2023-07-15 17:42:06");
param.setPriceFollowMain(false);
param.setShareMainStock(false);
param.setIsKolExclusive(false);
param.setDetailBriefImg(["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"]);
param.setSkuCodeFollowMain(false);
param.setDetailBriefFollowMain(true);
param.setNamePrefix("标题前缀");
param.setNameSubject("标题内容");
ProductAddChannelProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductAddChannelProductRequest();
$param = new ProductAddChannelProductParam();
$request->setParam($param);
$param->main_product_id = 3627614096842696400;
$param->channel_type = 3;
$param->name = "【直播专属】电竞椅台式电脑桌";
$param->main_img_list = ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"];
$param->start_time = "2023-07-13 17:42:03";
$param->end_time = "2023-07-15 17:42:06";
$param->price_follow_main = false;
$param->share_main_stock = false;
$param->is_kol_exclusive = false;
$param->detail_brief_img = ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"];
$param->sku_code_follow_main = false;
$param->detail_brief_follow_main = true;
$param->name_prefix = "标题前缀";
$param->name_subject = "标题内容";
$response = $request->execute(accessToken);

```

### python

```python
request = ProductAddChannelProductRequest()
param = request.getParams()
param.main_product_id = 3627614096842696400
param.channel_type = 3
param.name = "【直播专属】电竞椅台式电脑桌"
param.main_img_list = ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"]
param.start_time = "2023-07-13 17:42:03"
param.end_time = "2023-07-15 17:42:06"
param.price_follow_main = false
param.share_main_stock = false
param.is_kol_exclusive = false
param.detail_brief_img = ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"]
param.sku_code_follow_main = false
param.detail_brief_follow_main = true
param.name_prefix = "标题前缀"
param.name_subject = "标题内容"
response = request.execute(accessToken)

```

### go

```go
request := product_addChannelProduct_request.New()
param := request.GetParams()
param.MainProductId = 3627614096842696400
param.ChannelType = 3
param.Name = "【直播专属】电竞椅台式电脑桌"
param.MainImgList = ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"]
param.StartTime = "2023-07-13 17:42:03"
param.EndTime = "2023-07-15 17:42:06"
param.PriceFollowMain = false
param.ShareMainStock = false
param.IsKolExclusive = false
param.DetailBriefImg = ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"]
param.SkuCodeFollowMain = false
param.DetailBriefFollowMain = true
param.NamePrefix = "标题前缀"
param.NameSubject = "标题内容"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductAddChannelProductRequest();
var param = request.BuildParam();
param.MainProductId = 3627614096842696400;
param.ChannelType = 3;
param.Name = "【直播专属】电竞椅台式电脑桌";
param.MainImgList = ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"];
param.StartTime = "2023-07-13 17:42:03";
param.EndTime = "2023-07-15 17:42:06";
param.PriceFollowMain = false;
param.ShareMainStock = false;
param.IsKolExclusive = false;
param.DetailBriefImg = ["https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600", "https://tosv.boe.byted.org/obj/ecom-shop-material/ayoJLG_m_290637ca0b8211e45bf4a441fc10b938_sx_47135_www600-600"];
param.SkuCodeFollowMain = false;
param.DetailBriefFollowMain = true;
param.NamePrefix = "标题前缀";
param.NameSubject = "标题内容";
var response = request.Execute<ProductAddChannelProductResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:400002 | 达人专属配置不支持库存与主品共享 | 取消勾选库存共享，设置库存信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:400001 | 精选联盟权限校验失败 | 请按返回的详细错误信息处理 |
| 40004 | 非法的参数 | isv.parameter-invalid:101045 | 渠道主商品为在线审核通过状态才可以创建 | 变更主商品状态 |
| 40004 | 非法的参数 | isv.parameter-invalid:101046 | 不支持该商品类型创建渠道品 | 暂不支持奖品、拍卖商品、非卖品、保证金品、闪购商品、定金找货、保险业务等主商品创建渠道品 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010001 | 渠道商详链接不合法 | 请检查商详图片链接格式以及是否可用 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 开始时间解析异常 | 请检查开始时间格式 |
| 40004 | 非法的参数 | isv.parameter-invalid:110101051 | 仅达人带货渠道品可设置达人专属 | 仅达人带货渠道品可设置达人专属 |
| 50002 | 业务处理失败 | isv.business-failed:110103009 | 无效的渠道SKU | 无效的渠道SKU |
| 50002 | 业务处理失败 | isv.business-failed:110102140 | 店铺尚未开通联盟权限，暂无法创建达人渠道品，请先前往精选联盟完成权限开通。 | 店铺尚未开通联盟权限，暂无法创建达人渠道品，请先前往精选联盟完成权限开通。 |
| 50002 | 业务处理失败 | isv.business-failed:110101045 | 渠道主商品为在线审核通过状态才可以创建 | 渠道主商品为在线审核通过状态才可以创建 |
| 50002 | 业务处理失败 | isv.business-failed:2010058 | 商品不存在 | 商品不存在 |
| 50002 | 业务处理失败 | isv.business-failed:110280111 | 每次限购件数不能超过累计限购件数 | 每次限购件数不能超过累计限购件数 |
| 50002 | 业务处理失败 | isv.business-failed:110280114 | 限购值最大可设置200 | 限购值最大可设置200 |
| 50002 | 业务处理失败 | isv.business-failed:110101150 | 商品标题最长不能超过30个汉字（60个字符） | 商品标题最长不能超过30个汉字（60个字符） |
| 50002 | 业务处理失败 | isv.business-failed:110101046 | 奖品不支持创建渠道品 | 奖品不支持创建渠道品 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
