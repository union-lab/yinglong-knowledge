# /instantShopping/product/add

> 中文说明：即时零售商家商品发布接口  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/6525>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /instantShopping/product/add |
| 中文名称 | 即时零售商家商品发布接口 |
| 文档目录 | 商品API |
| Article ID | 6525 |
| 文档版本 | V1.13 |
| 官方更新时间 | 2024/11/22 14:46:36 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

接口限流：300次/秒
即时零售商家发布商品使用，用于替代/product/addV2接口。

## 权限包

- 商品 / 即时零售商品发布（新）（packageType=1）；适用应用类目：客服便签、教育服务、即时零售商品服务、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | instantShopping.product/add | 调用的API接口名称 | - | - |
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
| 0 | outer_product_id | outer_product_id | true | 2 | 25381 | 商家编码字段，外部自定义字段，不支持填写后再次编辑，通常在对外开放打通场景中使用，建议通过此字段维护唯一映射关系，请在传入时保证唯一性 | - | - |
| 0 | product_type | product_type | false | 99 | 0 | 枚举说明 0-普通，3-虚拟，6玉石闪购，7云闪购 | - | - |
| 0 | category_leaf_id | category_leaf_id | true | 99 | 20000 | 叶子类目ID，通过/shop/getShopCategory接口获取 | - | - |
| 0 | name | name | true | 2 | xxx补水液 | 商品名称，最多60个字符(30个汉字)，不能含emoj表情 | - | - |
| 0 | pic | pic | true | 2 | img_url1\|img_url2\|img_url3 | 商品轮播图，多张图片用 \"\|\" 分开，第一张图为主图，最多5张，至少600x600，大小不超过5M。 | - | - |
| 0 | description | description | false | 2 | img_url1\|img_url2\|img_url3 | 商品描述，目前只支持图片。多张图片用 \"\|\" 分开。不能用其他网站的文本粘贴，这样会出现css样式不兼容。总图片数量不得超过50张。 | - | - |
| 0 | pay_type | pay_type | false | 99 | 1 | 支付方式，0货到付款 1在线支付，2，货到付款+在线支付 | - | - |
| 0 | reduce_type | reduce_type | true | 99 | 1 | 1 减库存类型：1-拍下减库存 2-付款减库存 | - | - |
| 0 | freight_id | freight_id | false | 99 | 123 | 运费模板id，传0表示包邮，通过/freightTemplate/list接口获取 | - | - |
| 0 | delivery_delay_day | delivery_delay_day | false | 99 | 2 | delivery_delay_day： 承诺发货时间，单位是天,不传则默认为2天。现货发货(presell_type=0)和阶梯发货模式(presell_type=2)时必填，支持传入9999 、1、 2 （分别表示当日发、次日发、48小时发），具体支持传入的参数范围/product/getProductUpdateRule | - | - |
| 0 | presell_type | presell_type | false | 99 | 0 | 发货模式，0-现货发货，1-预售发货，2-阶梯发货，默认0 | - | - |
| 0 | presell_delay | presell_delay | false | 99 | 7 | 全款预售模式时的发货时间/阶梯模式下阶梯发货时间，具体支持传入的参数范围/product/getProductUpdateRule。 | - | - |
| 0 | presell_end_time | presell_end_time | false | 2 | 2020-02-21 18:54:27 | 预售结束时间，格式2020-02-21 18:54:27，最多支持设置距离当前30天 | - | - |
| 0 | quality_list | quality_list | false | 3 | - | 资质，可通过/product/qualificationConfig获取 | - | - |
| 1 | quality_list.quality_key | qualityKey | true | 2 | 3457***9470978 | 资质key | - | - |
| 1 | quality_list.quality_name | qualityName | true | 2 | 进货凭证 | 资质名称 | - | - |
| 1 | quality_list.quality_attachments | qualityAttachments | true | 3 | - | 资质 | - | - |
| 2 | quality_list.quality_attachments.media_type | mediaType | true | 99 | 1 | 1-图片 | - | - |
| 2 | quality_list.quality_attachments.url | url | true | 2 | \"http://www.byted***.com/YYYY\" | 凭证url | - | - |
| 1 | quality_list.quality_id | qualityId | false | 99 | 1234 | 资质id | - | - |
| 1 | quality_list.quality_content_name | qualityContentName | false | 2 | 版权页资质 | 资质名 | - | - |
| 0 | maximum_per_order | maximum_per_order | false | 99 | 200 | 每个用户每次下单限购件数 | - | - |
| 0 | limit_per_buyer | limit_per_buyer | false | 99 | 1 | 每个用户累计限购件数 | - | - |
| 0 | minimum_per_order | minimum_per_order | false | 99 | 2 | 每个用户每次下单至少购买的件数 | - | - |
| 0 | product_format_new | product_format_new | false | 2 | {\"405\":[{\"value\":27664,\"name\":\"复习资料\",\"diy_type\":0}],\"449\":[{\"value\":0,\"name\":\"佚名\",\"diy_type\":0}],\"501\":[{\"value\":7310,\"name\":\"否\",\"diy_type\":0}],\"855\":[{\"value\":61683,\"name\":\"北京出版社\",\"diy_type\":0}],\"1088\":[{\"value\":407,\"name\":\"小学五年级\",\"diy_type\":0}],\"1319\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"1601\":[{\"value\":13911,\"name\":\"通用版\",\"diy_type\":0}],\"1618\":[{\"value\":0,\"name\":\"9787218122861\",\"diy_type\":0}],\"1831\":[{\"value\":0,\"name\":\"小学英语看图说话写话二年级\",\"diy_type\":0}],\"2000\":[{\"value\":34762,\"name\":\"无\",\"diy_type\":0}],\"2229\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2763\":[{\"value\":25193,\"name\":\"英语\",\"diy_type\":0}],\"3271\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"3296\":[{\"value\":0,\"name\":\"16.80元\",\"diy_type\":0}]} | 属性，通过/product/getCatePropertyV2获取 格式：{"property_id":[{"value":value,"name":"property_name","diy_type":0}]} name的类型是string，value和diy_type的类型是number | - | - |
| 0 | spu_id | spu_id | false | 99 | 14567 | 1111 | - | - |
| 0 | appoint_delivery_day | appoint_delivery_day | false | 99 | 0 | 可预约发货天数 | - | - |
| 0 | standard_brand_id | standard_brand_id | false | 99 | 无品牌：596120136 | 品牌id，通过/brand/list获取，无品牌id则传596120136 | - | - |
| 0 | presell_config_level | presell_config_level | false | 99 | 0 | 0：全款预售，1：sku预售，2：现货+预售 ，3：新预售 | - | - |
| 0 | presell_delivery_type | presell_delivery_type | false | 99 | 1 | 全款预售和sku预售时传递，其他不传： 0 预售结束后发货 1支付完成后发货 | - | - |
| 0 | white_back_ground_pic_url | white_back_ground_pic_url | false | 2 | http://aaaa | 白底图url(仅素材中心url有效)，白底图比例要求1:1 | - | - |
| 0 | long_pic_url | long_pic_url | false | 2 | http://aaaa | 3:4长图url(仅素材中心url有效) | - | - |
| 0 | after_sale_service | after_sale_service | false | 8 | supply_day_return_selector:7-1 | 推荐传入，售后服务参数,key:value格式。supply_day_return_selector(7天无理由选项)：N天-政策代号，N只支持7和15，政策代号枚举https://bytedance.feishu.cn/docs/doccnF946oh1c98e7mo9DlYZtig。 | - | - |
| 0 | sell_channel | sell_channel | false | 3 | 0 | 售卖方式;0:全渠道手售卖,1:仅指定直播间售卖 | - | - |
| 0 | start_sale_type | start_sale_type | false | 99 | 0 | 审核通过后上架售卖时间配置:0-立即上架售卖 1-放入仓库 | - | - |
| 0 | size_info_template_id | size_info_template_id | false | 99 | 101 | 尺码模板ID | - | - |
| 0 | pickup_method | pickup_method | false | 2 | 0 | "0": 普通商品-使用物流发货, | - | - |
| 0 | material_video_id | material_video_id | false | 2 | vaaaa | 主图视频ID，可以先通过https://op.jinritemai.com/docs/api-docs/69/1617接口上传视频，获取审核通过的视频素材ID进行传入 任务需要验证 | - | - |
| 0 | name_prefix | name_prefix | false | 2 | 钛钢木质耳饰 | 通过/product/getRecommendName接口推荐的商品标题前缀（注意系统根据类目属性生成前缀字符串时，末尾有一个空格） | - | - |
| 0 | sale_limit_id | sale_limit_id | false | 99 | 123 | 限售模板ID | - | - |
| 0 | reference_price | reference_price | false | 99 | 12300 | 参考价，单位分，需大于商品价格并小于商品价格的10倍 | - | - |
| 0 | reference_price_certificate | reference_price_certificate | false | 5 | - | 参考价凭证信息 | - | - |
| 1 | reference_price_certificate.certificate_type | certificate_type | true | 99 | 1 | 通过/product/getProductUpdateRule获取可选的参考价格类型 | - | - |
| 1 | reference_price_certificate.certificate_urls | certificate_urls | true | 3 | ["http://www.aaa.com"] | 图片url需要使用商品素材中心的url并且只能有一张 | - | - |
| 0 | spec_info | spec_info | true | 5 | - | 规格详细信息 | - | - |
| 1 | spec_info.spec_values | spec_values | true | 3 | - | 规格内容 | - | - |
| 2 | spec_info.spec_values.name | name | true | 2 | 颜色 | 规格名称 | - | - |
| 2 | spec_info.spec_values.values | values | true | 3 | - | 规格值 | - | - |
| 3 | spec_info.spec_values.values.name | name | true | 2 | 白色 | 规格值名称 | - | - |
| 3 | spec_info.spec_values.values.remark | remark | false | 2 | 偏深 | 备注 | - | - |
| 3 | spec_info.spec_values.values.cpv_path | cpv_path | false | 3 | - | 规格值导航路径 | - | - |
| 4 | spec_info.spec_values.values.cpv_path.cpid | cpid | true | 99 | 1234 | 属性id | - | - |
| 4 | spec_info.spec_values.values.cpv_path.cpvid | cpvid | true | 99 | 234 | 属性值id | - | - |
| 3 | spec_info.spec_values.values.measure_info | measure_info | false | 5 | - | 度量衡结构化信息 | - | - |
| 4 | spec_info.spec_values.values.measure_info.template_id | template_id | false | 99 | 12345 | 模版id | - | - |
| 4 | spec_info.spec_values.values.measure_info.values | values | false | 3 | - | 模块内容 | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.module_id | module_id | false | 99 | 354 | 模块id | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.value | value | false | 2 | 10 | 度量衡值 | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.unit_id | unit_id | false | 99 | 2 | 度量衡单位id | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.unit_name | unit_name | false | 2 | g | 度量衡单位名称 | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.prefix | prefix | false | 2 | "" | 度量衡值前缀 | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.suffix | suffix | false | 2 | "-" | 度量衡后缀 | - | - |
| 3 | spec_info.spec_values.values.value_id | value_id | false | 99 | 2341 | 规格值标准属性值id | - | - |
| 2 | spec_info.spec_values.property_id | property_id | false | 99 | 1234 | 规格项标准属性id | - | - |
| 0 | main_image_three_to_four | main_image_three_to_four | false | 2 | img_url1\|img_url2\|img_url3 | 商品主图3:4，多张图片用 \"\|\" 分开，最多5张，大小不超过5M。 | - | - |
| 0 | short_product_name | short_product_name | false | 2 | 新品牛肉干 | 导购短标题，短标题可用于物流打单及商品搜索场景，若未填写，则系统将智能生成最优短标题在商详购买页面展示，说明详见：https://school.jinritemai.com/doudian/web/article/aHUW2MCvHqF3?from=shop_article | - | - |
| 0 | spec_prices_v2 | spec_prices_v2 | true | 3 | - | sku参数 | - | - |
| 1 | spec_prices_v2.stock_num | stock_num | false | 99 | 101110 | 库存数量。跨境必须走区域库存，stock_num设置0。 | - | - |
| 1 | spec_prices_v2.price | price | true | 99 | 100 | 价格 | - | - |
| 1 | spec_prices_v2.code | code | false | 2 | XXX | 商家sku编码 | - | - |
| 1 | spec_prices_v2.step_stock_num | step_stock_num | false | 99 | 1 | 阶梯库存数量 | - | - |
| 1 | spec_prices_v2.supplier_id | supplier_id | false | 2 | ab | 供应商编码 | - | - |
| 1 | spec_prices_v2.outer_sku_id | outer_sku_id | false | 2 | sad | 外部skuid | - | - |
| 1 | spec_prices_v2.sku_type | sku_type | false | 99 | 0 | 库存类型 0-普通库存，1-区域库存，10-阶梯库存 | - | - |
| 1 | spec_prices_v2.stock_num_map | stock_num_map | false | 8 | 111:22 | 仓ID -> 库存数量。跨境业务大部分都是必传，格式为：Map<商家仓id,> | - | - |
| 1 | spec_prices_v2.presell_delay | presell_delay | false | 99 | 5 | 预售天数 | - | - |
| 1 | spec_prices_v2.barcodes | barcodes | false | 3 | [] | 条形码 | - | - |
| 1 | spec_prices_v2.delivery_infos | delivery_infos | true | 3 | - | SKU运输信息 | - | - |
| 2 | spec_prices_v2.delivery_infos.info_type | info_type | true | 2 | 1 | 信息类型 | - | - |
| 2 | spec_prices_v2.delivery_infos.info_value | info_value | true | 2 | 10 | 信息值 | - | - |
| 2 | spec_prices_v2.delivery_infos.info_unit | info_unit | true | 2 | g | 信息计量单位 | - | - |
| 1 | spec_prices_v2.supply_price | supply_price | false | 99 | 13 | 供货价,单位：分，nil代表不修改，0代表清空 | - | - |
| 1 | spec_prices_v2.sell_properties | sell_properties | true | 3 | - | 规格信息 | - | - |
| 2 | spec_prices_v2.sell_properties.property_name | property_name | true | 2 | 颜色 | 规格项名称 | - | - |
| 2 | spec_prices_v2.sell_properties.value_name | value_name | true | 2 | 白色 | 规格值名称 | - | - |
| 1 | spec_prices_v2.sku_classification_type | sku_classification_type | false | 2 | main_sale_single_product | sku分类信息，对应枚举值 "main_sale_single_product" - 主售款（单品） "main_sale_multi_product" - "主售款（多件装）" "main_sale_combination" - 主售款（组合品） "non_main_sale" - 非主售款 "information_description" - 信息说明/防拍 | - | - |
| 1 | spec_prices_v2.sku_status | sku_status | false | 4 | true | true：表示sku上架 false：表示sku下架 | - | - |
| 0 | with_sku_type | with_sku_type | false | 4 | true | true:主动设置库存类型（仅对区域库存生效，普通库存、阶梯库存不受此字段影响） | - | - |
| 0 | name_suffix | name_suffix | false | 2 | 36.9度 | 通过/product/getRecommendName接口推荐的商品标题后缀（注意系统根据类目属性生成后缀字符串时，前面可能有一个空格） | - | - |
| 0 | use_brand_name | use_brand_name | false | 4 | false | 是否勾选使用品牌名, 注意勾选时需要接入/product/getRecommendName接口 | - | - |
| 0 | commit | commit | false | 4 | true | false仅保存，true保存+提审 | - | - |
| 0 | spec_pic | spec_pic | false | 2 | img_url,img_url,img_url | 如颜色-尺寸, 颜色就是主规格, 颜色如黑,白,黄,它们图片url以逗号分隔 注：\"pic\"、\"description\"、\"spec_pic\"这三个字段里的传入的图片数量总和，不得超过50张。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_id | product_id | - | 99 | product_id | product_id | 39 | - |
| 0 | outer_product_id | outer_product_id | - | 2 | outer_product_id | outer_product_id | 39 | - |
| 0 | create_time | create_time | - | 2 | create_time | create_time | 39 | - |
| 0 | sku | sku | - | 3 | - | 1 | - | R1 |
| 1 | sku.sku_id | sku_id | - | 99 | 3 | sku_id | 39 | - |
| 1 | sku.outer_sku_id | outer_sku_id | - | 2 | 1 | 字符串形式外部sku id | 39 | - |
| 1 | sku.code | code | - | 2 | 1 | sku code | 39 | - |
| 1 | sku.spec_detail_ids | spec_detail_ids | - | 3 | 1 | 所有的规格值id，代替spec_detail_id123 | 39 | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/yunc/erpCargoSinglePush?app_key=your_appkey_here&method=yunc.erpCargoSinglePush&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/yunc/erpCargoSinglePush?app_key=your_appkey_here&method=yunc.erpCargoSinglePush&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
InstantShoppingProductAddRequest request = new InstantShoppingProductAddRequest();
InstantShoppingProductAddParam param = request.getParam();
param.setOuterProductId("25381");
param.setProductType(0L);
param.setCategoryLeafId(20000L);
param.setName("xxx补水液");
param.setPic("img_url1|img_url2|img_url3");
param.setDescription("img_url1|img_url2|img_url3");
param.setPayType(1L);
param.setReduceType(1L);
param.setFreightId(123L);
param.setDeliveryDelayDay(2L);
param.setPresellType(0L);
param.setPresellDelay(7L);
param.setPresellEndTime("2020-02-21 18:54:27");
param.setMaximumPerOrder(200L);
param.setLimitPerBuyer(1L);
param.setMinimumPerOrder(2L);
param.setProductFormatNew("{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}");
param.setSpuId(14567L);
param.setAppointDeliveryDay(0L);
param.setStandardBrandId(无品牌：596120136L);
param.setPresellConfigLevel(0L);
param.setPresellDeliveryType(1L);
param.setWhiteBackGroundPicUrl("http://aaaa");
param.setLongPicUrl("http://aaaa");
param.setAfterSaleService(supply_day_return_selector:7-1);
param.setSellChannel(0);
param.setStartSaleType(0L);
param.setSizeInfoTemplateId(101L);
param.setPickupMethod("0");
param.setMaterialVideoId("vaaaa");
param.setNamePrefix("钛钢木质耳饰");
param.setSaleLimitId(123L);
param.setReferencePrice(12300L);
param.setMainImageThreeToFour("img_url1|img_url2|img_url3");
param.setShortProductName("新品牛肉干");
param.setWithSkuType(true);
param.setNameSuffix("36.9度");
param.setUseBrandName(false);
param.setCommit(true);
param.setSpecPic("img_url,img_url,img_url");
InstantShoppingProductAddResponse response = request.execute(accessToken);

```

### php

```php
$request = new InstantShoppingProductAddRequest();
$param = new InstantShoppingProductAddParam();
$request->setParam($param);
$param->outer_product_id = "25381";
$param->product_type = 0;
$param->category_leaf_id = 20000;
$param->name = "xxx补水液";
$param->pic = "img_url1|img_url2|img_url3";
$param->description = "img_url1|img_url2|img_url3";
$param->pay_type = 1;
$param->reduce_type = 1;
$param->freight_id = 123;
$param->delivery_delay_day = 2;
$param->presell_type = 0;
$param->presell_delay = 7;
$param->presell_end_time = "2020-02-21 18:54:27";
$param->maximum_per_order = 200;
$param->limit_per_buyer = 1;
$param->minimum_per_order = 2;
$param->product_format_new = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}";
$param->spu_id = 14567;
$param->appoint_delivery_day = 0;
$param->standard_brand_id = 无品牌：596120136;
$param->presell_config_level = 0;
$param->presell_delivery_type = 1;
$param->white_back_ground_pic_url = "http://aaaa";
$param->long_pic_url = "http://aaaa";
$param->after_sale_service = supply_day_return_selector:7-1;
$param->sell_channel = 0;
$param->start_sale_type = 0;
$param->size_info_template_id = 101;
$param->pickup_method = "0";
$param->material_video_id = "vaaaa";
$param->name_prefix = "钛钢木质耳饰";
$param->sale_limit_id = 123;
$param->reference_price = 12300;
$param->main_image_three_to_four = "img_url1|img_url2|img_url3";
$param->short_product_name = "新品牛肉干";
$param->with_sku_type = true;
$param->name_suffix = "36.9度";
$param->use_brand_name = false;
$param->commit = true;
$param->spec_pic = "img_url,img_url,img_url";
$response = $request->execute(accessToken);

```

### python

```python
request = InstantShoppingProductAddRequest()
param = request.getParams()
param.outer_product_id = "25381"
param.product_type = 0
param.category_leaf_id = 20000
param.name = "xxx补水液"
param.pic = "img_url1|img_url2|img_url3"
param.description = "img_url1|img_url2|img_url3"
param.pay_type = 1
param.reduce_type = 1
param.freight_id = 123
param.delivery_delay_day = 2
param.presell_type = 0
param.presell_delay = 7
param.presell_end_time = "2020-02-21 18:54:27"
param.maximum_per_order = 200
param.limit_per_buyer = 1
param.minimum_per_order = 2
param.product_format_new = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}"
param.spu_id = 14567
param.appoint_delivery_day = 0
param.standard_brand_id = 无品牌：596120136
param.presell_config_level = 0
param.presell_delivery_type = 1
param.white_back_ground_pic_url = "http://aaaa"
param.long_pic_url = "http://aaaa"
param.after_sale_service = supply_day_return_selector:7-1
param.sell_channel = 0
param.start_sale_type = 0
param.size_info_template_id = 101
param.pickup_method = "0"
param.material_video_id = "vaaaa"
param.name_prefix = "钛钢木质耳饰"
param.sale_limit_id = 123
param.reference_price = 12300
param.main_image_three_to_four = "img_url1|img_url2|img_url3"
param.short_product_name = "新品牛肉干"
param.with_sku_type = true
param.name_suffix = "36.9度"
param.use_brand_name = false
param.commit = true
param.spec_pic = "img_url,img_url,img_url"
response = request.execute(accessToken)

```

### go

```go
request := instantShopping_product_add_request.New()
param := request.GetParams()
param.OuterProductId = "25381"
param.ProductType = 0
param.CategoryLeafId = 20000
param.Name = "xxx补水液"
param.Pic = "img_url1|img_url2|img_url3"
param.Description = "img_url1|img_url2|img_url3"
param.PayType = 1
param.ReduceType = 1
param.FreightId = 123
param.DeliveryDelayDay = 2
param.PresellType = 0
param.PresellDelay = 7
param.PresellEndTime = "2020-02-21 18:54:27"
param.MaximumPerOrder = 200
param.LimitPerBuyer = 1
param.MinimumPerOrder = 2
param.ProductFormatNew = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}"
param.SpuId = 14567
param.AppointDeliveryDay = 0
param.StandardBrandId = 无品牌：596120136
param.PresellConfigLevel = 0
param.PresellDeliveryType = 1
param.WhiteBackGroundPicUrl = "http://aaaa"
param.LongPicUrl = "http://aaaa"
param.AfterSaleService = supply_day_return_selector:7-1
param.SellChannel = 0
param.StartSaleType = 0
param.SizeInfoTemplateId = 101
param.PickupMethod = "0"
param.MaterialVideoId = "vaaaa"
param.NamePrefix = "钛钢木质耳饰"
param.SaleLimitId = 123
param.ReferencePrice = 12300
param.MainImageThreeToFour = "img_url1|img_url2|img_url3"
param.ShortProductName = "新品牛肉干"
param.WithSkuType = true
param.NameSuffix = "36.9度"
param.UseBrandName = false
param.Commit = true
param.SpecPic = "img_url,img_url,img_url"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new InstantShoppingProductAddRequest();
var param = request.BuildParam();
param.OuterProductId = "25381";
param.ProductType = 0;
param.CategoryLeafId = 20000;
param.Name = "xxx补水液";
param.Pic = "img_url1|img_url2|img_url3";
param.Description = "img_url1|img_url2|img_url3";
param.PayType = 1;
param.ReduceType = 1;
param.FreightId = 123;
param.DeliveryDelayDay = 2;
param.PresellType = 0;
param.PresellDelay = 7;
param.PresellEndTime = "2020-02-21 18:54:27";
param.MaximumPerOrder = 200;
param.LimitPerBuyer = 1;
param.MinimumPerOrder = 2;
param.ProductFormatNew = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}";
param.SpuId = 14567;
param.AppointDeliveryDay = 0;
param.StandardBrandId = 无品牌：596120136;
param.PresellConfigLevel = 0;
param.PresellDeliveryType = 1;
param.WhiteBackGroundPicUrl = "http://aaaa";
param.LongPicUrl = "http://aaaa";
param.AfterSaleService = supply_day_return_selector:7-1;
param.SellChannel = 0;
param.StartSaleType = 0;
param.SizeInfoTemplateId = 101;
param.PickupMethod = "0";
param.MaterialVideoId = "vaaaa";
param.NamePrefix = "钛钢木质耳饰";
param.SaleLimitId = 123;
param.ReferencePrice = 12300;
param.MainImageThreeToFour = "img_url1|img_url2|img_url3";
param.ShortProductName = "新品牛肉干";
param.WithSkuType = true;
param.NameSuffix = "36.9度";
param.UseBrandName = false;
param.Commit = true;
param.SpecPic = "img_url,img_url,img_url";
var response = request.Execute<InstantShoppingProductAddResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:110101114 | outProductId或者outerProductId已经存在 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3356 |
| 50002 | 业务处理失败 | isv.business-failed:2010320 | 2010320:商品创建失败: 品牌必填，请重新选择品牌 | 请检查品牌字段是否填写 |
| 50002 | 业务处理失败 | isv.business-failed:110270136 | 110270136:商品创建失败: 物流信息类型不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:4 | 4:product_format_new格式不正确 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:商品创建失败: 规格项名称参数有误 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010005 | 2010005:商品创建失败: 该商品的类目【咖啡/麦片/冲饮/饮料/果味/风味饮料】无资质授权,请前往【店铺-店铺信息设置-店铺资质-行业资质】中申请授权 | 请前往【店铺-店铺信息设置-店铺资质-行业资质】中申请授权 |
| 50002 | 业务处理失败 | isv.business-failed:110270179 | 110270179:商品创建失败: 校验预售发货信息失败发货时间配置不满足要求 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110201001 | 110201001:商品创建失败: 未查询到该类目 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110502009 | 110502009:白底图#white_back_ground_pic_url非素材中心url | 请上传图片到素材中心后再进行发品 |
| 50002 | 业务处理失败 | isv.business-failed:110280111 | 110280111:商品创建失败: 每次限购件数不能超过累计限购件数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101187 | 110101187:商品创建失败: 未命中商品名称后缀推荐规则，标题后缀(name_suffix)应该置空 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310107 | 110310107:商品创建失败: 参考价需大于等于最高售卖价且小于最高售卖价10倍 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250127 | 110250127:商品创建失败: 图片长宽比非1:1 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215111 | 110215111:商品创建失败: 类目属性填写不完整，请补充：材质 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220160 | 110220160:商品创建失败: 条码：1001011在商品ID：[3694584246200041885]中已存在,不可重复发布 | 条码在相同店铺具有唯一性，请更改条码后再发品 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:商品创建失败: 外部商品ID重复 | 已存在相同outerProductId的商品，勿重复发品 |
| 50002 | 业务处理失败 | isv.business-failed:110270019 | 110270019:商品创建失败: sku重量信息必填 | sku重量信息是必填字段，请维护对应信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220113 | 110220113:商品创建失败: sku数量和规格组合数不匹配，请重新选择规格 | 110220113:商品创建失败: sku数量和规格组合数不匹配，请重新选择规格 |
| 50002 | 业务处理失败 | isv.business-failed:110220019 | 110220019:商品创建失败: 规格「规格详情」对应的规格值存在非法字符，请修改后重试； | 110220019:商品创建失败: 规格「规格详情」对应的规格值存在非法字符，请修改后重试； |
| 50002 | 业务处理失败 | isv.business-failed:110101150 | 110101150:商品创建失败: 商品标题最长不能超过50个汉字（100个字符） | 110101150:商品创建失败: 商品标题最长不能超过50个汉字（100个字符） |
| 50002 | 业务处理失败 | isv.business-failed:110220016 | 110220016:商品创建失败: 规格规格对应的规格值--仅包含特殊字符，请修改并输入有效信息； | 110220016:商品创建失败: 规格规格对应的规格值--仅包含特殊字符，请修改并输入有效信息； |
| 50002 | 业务处理失败 | isv.business-failed:110310118 | 110310118:商品创建失败: 售卖价需大于等于0.01元 | 110310118:商品创建失败: 售卖价需大于等于0.01元 |
| 50002 | 业务处理失败 | isv.business-failed:110101145 | 110101145:商品创建失败: “商品标题”不可含有非法字符 | 110101145:商品创建失败: “商品标题”不可含有非法字符 |
| 50002 | 业务处理失败 | isv.business-failed:110360101 | 110360101:商品创建失败: 品牌不存在或者未审核通过，id:1289434984 | 110360101:商品创建失败: 品牌不存在或者未审核通过，id:1289434984 |
| 50002 | 业务处理失败 | isv.business-failed:4100001 | 4100001:外部商品ID在店铺下需唯一，请勿重复创建  | 4100001:外部商品ID在店铺下需唯一，请勿重复创建  |
| 50002 | 业务处理失败 | isv.business-failed:110270020 | 110270020:商品创建失败: sku重量不能大于99999.999g | 110270020:商品创建失败: sku重量不能大于99999.999g |
| 50002 | 业务处理失败 | isv.business-failed:110330102 | 110330102:商品创建失败: 请修改“售后服务“，该类目已不再支持该售后政策 | 110330102:商品创建失败: 请修改“售后服务“，该类目已不再支持该售后政策 |
| 50002 | 业务处理失败 | isv.business-failed:2010316 | 2010316:商品创建失败: 该类目需要支持7天无理由退货 | 2010316:商品创建失败: 该类目需要支持7天无理由退货 |
| 50002 | 业务处理失败 | isv.business-failed:110210021 | 110210021:商品创建失败: 该商品对应的类目已处于禁发状态，需先修改商品对应类目为合适类目 | 110210021:商品创建失败: 该商品对应的类目已处于禁发状态，需先修改商品对应类目为合适类目 |
| 50002 | 业务处理失败 | isv.business-failed:110103015 | 110103015:商品创建失败: 外部商品ID重复 | 110103015:商品创建失败: 外部商品ID重复 |
| 50002 | 业务处理失败 | isv.business-failed:5000001 | 5000001:业务错误 | 5000001:业务错误 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
