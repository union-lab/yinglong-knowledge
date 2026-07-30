# /product/addCbProduct

> 中文说明：新增跨境/海南商品  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/499>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/addCbProduct |
| 中文名称 | 新增跨境/海南商品 |
| 文档目录 | 商品API |
| Article ID | 499 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/6/11 11:11:06 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

新增跨境/海南商品

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.addCbProduct | 调用的API接口名称 | - | - |
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
| 0 | outer_product_id | outer_product_id | false | 2 | 232334 | 推荐使用，外部商家编码，支持字符串 | - | - |
| 0 | product_type | product_type | true | 99 | 0 | 0-普通，3-虚拟，6玉石闪购，7云闪购 | - | - |
| 0 | category_leaf_id | category_leaf_id | true | 99 | 20000 | 叶子类目ID通过/shop/getShopCategory接口获取 | - | - |
| 0 | name | name | true | 2 | xx补水液 | 商品名称，最多60个字符(30个汉字)，不能含emoj表情 | - | - |
| 0 | recommend_remark | recommend_remark | false | 2 | 这个商品很好啊 | 商家推荐语，不能含emoj表情 | - | - |
| 0 | pic | pic | true | 2 | img_url1\|img_url2\|img_url3 | 商品轮播图，多张图片用 \"\|\" 分开，第一张图为主图，最多5张，至少600x600，大小不超过1M 注：\"pic\"、\"description\"、\"spec_pic\"这三个字段里的传入的图片数量总和，不得超过50张。 | - | - |
| 0 | description | description | true | 2 | img_url1\|img_url2\|img_url3 | 商品描述，目前只支持图片。多张图片用 \"\|\" 分开。不能用其他网站的文本粘贴，这样会出现css样式不兼容 注：\"pic\"、\"description\"、\"spec_pic\"这三个字段里的传入的图片数量总和，不得超过50张。 | - | - |
| 0 | pay_type | pay_type | true | 99 | 1 | 支付方式，0货到付款 1在线支付，2，货到付款+在线支付 | - | - |
| 0 | delivery_method | delivery_method | false | 99 | 7 | 海南免税生效。 0:离岛免税、1:邮寄、2:离岛自提+邮寄 | - | - |
| 0 | cdf_category | cdf_category | false | 2 | 1 | 海南免税：海关限购分类编码 | - | - |
| 0 | reduce_type | reduce_type | true | 99 | 1 | 1 减库存类型：1-拍下减库存 2-付款减库存 | - | - |
| 0 | assoc_ids | assoc_ids | false | 2 | 1\|2\|3 | 同店商品推荐：为空表示使用系统推荐；多个product_id使用“\|”分开 | - | - |
| 0 | freight_id | freight_id | true | 99 | 123 | 运费模板id，传0表示包邮，通过/freightTemplate/list接口获取 | - | - |
| 0 | weight | weight | false | 9 | 1000 | 重量 | - | - |
| 0 | weight_unit | weight_unit | false | 99 | 1 | 重量单位，0-kg, 1-g | - | - |
| 0 | delivery_delay_day | delivery_delay_day | false | 99 | 3 | delivery_delay_day： 承诺发货时间，单位是天,不传则默认为2天。现货发货(presell_type=0)和阶梯发货模式(presell_type=2)时必填，支持传入9999 、1、 2 （分别表示当日发、次日发、48小时发），具体支持传入的参数范围/product/getProductUpdateRule | - | - |
| 0 | presell_type | presell_type | false | 99 | 0 | 发货模式，0-现货发货，1-预售发货，2-阶梯发货，默认0 | - | - |
| 0 | presell_delay | presell_delay | false | 99 | 3 | 全款预售模式时的发货时间/阶梯模式下阶梯发货时间，具体支持传入的参数范围/product/getProductUpdateRule | - | - |
| 0 | presell_end_time | presell_end_time | false | 2 | 2020-02-21 18:54:27 | 预售结束时间，格式2020-02-21 18:54:27，最多支持设置距离当前30天 | - | - |
| 0 | supply_7day_return | supply_7day_return | true | 99 | 该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值； | 【该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值；】是否支持7天无理由，0不支持，1支持，2支持（拆封后不支持） | - | - |
| 0 | mobile | mobile | true | 2 | 40012345 | 客服电话号码 | - | - |
| 0 | commit | commit | true | 4 | true | false仅保存，true保存+提审 | - | - |
| 0 | remark | remark | false | 2 | 备注 | 商家可见备注 | - | - |
| 0 | out_product_id | out_product_id | false | 99 | 123 | 外部product_id | - | - |
| 0 | quality_list | quality_list | false | 3 | - | 资质，可通过/product/qualificationConfig获取 | - | - |
| 1 | quality_list.quality_key | qualityKey | false | 2 | 3457***9470978 | 资质key | - | - |
| 1 | quality_list.quality_name | qualityName | false | 2 | 进货凭证 | 资质名称 | - | - |
| 1 | quality_list.quality_attachments | qualityAttachments | false | 3 | - | 资质 | - | - |
| 2 | quality_list.quality_attachments.media_type | mediaType | false | 99 | 1 | 1-图片，2-pdf | - | - |
| 2 | quality_list.quality_attachments.url | url | false | 2 | \"http://www.byted***.com/YYYY\" | 凭证url | - | - |
| 0 | spec_name | spec_name | false | 2 | 颜色-尺码 | 如果不填，则规格名为各级规格名用 \"-\" 自动生成 | - | - |
| 0 | specs | specs | true | 2 | 颜色\|红色,黑色^尺码\|S,M | 店铺通用规格，能被同类商品通用。多规格用^分隔，规格与规格值用\|分隔，多个规格值用,分隔。如果创建或编辑现货+预售商品或新预售商品时，须包含发货时效，如：颜色\|黑色,白色,黄色^尺码\|S,M,L^发货时效\|5天内发货,15天内发货 | - | - |
| 0 | spec_prices | spec_prices | true | 2 | [{\"spec_detail_name1\":\"红色\",\"spec_detail_name2\":\"S\",\"spec_detail_name3\":\"\",\"stock_num\":11,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\"},{\"spec_detail_name1\":\"红色\",\"spec_detail_name2\":\"M\",\"spec_detail_name3\":\"\",\"stock_num\":22,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\"},{\"spec_detail_name1\":\"黑色\",\"spec_detail_name2\":\"S\",\"spec_detail_name3\":\"\",\"stock_num\":44,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\"},{\"spec_detail_name1\":\"黑色\",\"spec_detail_name2\":\"M\",\"spec_detail_name3\":\"\",\"stock_num\":55,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\"}] | sku详情，数量应该等于规格1规格2规格3，sku数量和规格组合数必须一致 sku不可售时，库存可设置为0 | - | - |
| 0 | spec_pic | spec_pic | false | 2 | img_url,img_url,img_url | 如颜色-尺寸, 颜色就是主规格, 颜色如黑,白,黄,它们图片url以逗号分隔 注：\"pic\"、\"description\"、\"spec_pic\"这三个字段里的传入的图片数量总和，不得超过50张 | - | - |
| 0 | maximum_per_order | maximum_per_order | false | 99 | 200 | 每个用户每次下单限购件数 | - | - |
| 0 | limit_per_buyer | limit_per_buyer | false | 99 | 1 | 每个用户累计限购件数 | - | - |
| 0 | minimum_per_order | minimum_per_order | false | 99 | 2 | 每个用户每次下单至少购买的件数 | - | - |
| 0 | product_format_new | product_format_new | false | 2 | {"1542":[{"value":23964,"name":"是","diy_type":0}],"1633":[{"value":38417,"name":"锁水","diy_type":0}],"1687":[{"value":111004867,"name":"12/12","diy_type":0}],"1880":[{"value":4171,"name":"韩国","diy_type":0}],"2685":[{"value":0,"name":"1","diy_type":0}],"2976":[{"value":0,"name":"1","diy_type":0}],"2988":[{"value":0,"name":"2","diy_type":0}],"3299":[{"value":0,"name":"2","diy_type":0}]} | 通过/product/getCatePropertyV2获取 格式：{"property_id":[{"value":value,"name":"property_name","diy_type":0}]} name的类型是string，value和diy_type的类型是number | - | - |
| 0 | spu_id | spu_id | false | 99 | 14567 | spu_id | - | - |
| 0 | appoint_delivery_day | appoint_delivery_day | false | 99 | 2 | 可预约发货天数 | - | - |
| 0 | third_url | third_url | false | 2 | http://img.alicdn.com/xxxx | third_url | - | - |
| 0 | extra | extra | false | 2 | 略 | extra | - | - |
| 0 | src | src | false | 2 | 略 | src | - | - |
| 0 | need_check_out | need_check_out | false | 4 | true | 卡券类型需要传true | - | - |
| 0 | poi_resource | poi_resource | false | 5 | - | 卡券信息 | - | - |
| 1 | poi_resource.valid_days | valid_days | false | 99 | 5 | 有效时间段，从领取日开始计算，优先级高于ValidStart-ValidEnd | - | - |
| 1 | poi_resource.valid_start | valid_start | false | 99 | 1636616483 | 卡券有效开始时间，秒单位时间戳 | - | - |
| 1 | poi_resource.valid_end | valid_end | false | 99 | 1636616483 | 卡券有效截止时间，秒单位时间戳 | - | - |
| 1 | poi_resource.service_num | service_num | false | 2 | 13111111111 | 客服电话 | - | - |
| 1 | poi_resource.notification | notification | false | 2 | 领取须知 | 领取须知 | - | - |
| 1 | poi_resource.code_type | code_type | false | 99 | 1 | 平台产生券码: 1 ; 合作方api实时传入的券码: 4 | - | - |
| 1 | poi_resource.count | count | false | 99 | 1 | 券码总量，0/-1表示不限制，平台券时须\u003e0 | - | - |
| 1 | poi_resource.couponSecondExchange | couponSecondExchange | false | 99 | 0 | 0-不支持二次兑换，1-支持二次兑换 | - | - |
| 1 | poi_resource.total_can_use_count | total_can_use_count | false | 99 | 1 | 可核销总次数 | - | - |
| 1 | poi_resource.link | link | false | 2 | https://xxx.xxx.xxx | 兑换链接 | - | - |
| 1 | poi_resource.condition | condition | false | 2 | 券码使用条件 | 券码使用条件 | - | - |
| 0 | car_vin_code | car_vin_code | false | 2 | BA111111111111111 | 汽车vin码 | - | - |
| 0 | need_recharge_mode | need_recharge_mode | false | 4 | true | 充值模式 | - | - |
| 0 | presell_config_level | presell_config_level | false | 99 | 3 | 0：全款预售，1：sku预售，2：现货+预售 ，3：新预售 | - | - |
| 0 | account_template_id | account_template_id | false | 2 | 122112 | 账号模板id | - | - |
| 0 | presell_delivery_type | presell_delivery_type | false | 99 | 1 | 全款预售和sku预售时传递，其他不传： 0 预售结束后发货 1支付完成后发货 | - | - |
| 0 | white_back_ground_pic_url | white_back_ground_pic_url | false | 2 | http://aaaa | 白底图url(仅素材中心url有效) | - | - |
| 0 | long_pic_url | long_pic_url | false | 2 | http://aaaa | 3:4长图url(仅素材中心url有效) | - | - |
| 0 | after_sale_service | after_sale_service | false | 8 | 7-1 | 售后服务参数,key:value格式 ,supply_7day_return(7天无理由)： 0不支持，1支持，2支持（拆封后不支持） supply_day_return_selector(7天无理由标签)：N天-政策代号，N只支持7和15 supply_red_ass_return（红屁屁无忧）：0不支持，1支持 supply_allergy_return（过敏无忧,仅跨境可选）：0不支持，1支持 damaged_order_return（坏损包退）：0不支持，1支持 support_allergy_returnV2（过敏包退，境内可选）：0不支持，1支持 | - | - |
| 0 | sell_channel | sell_channel | false | 3 | 0 | 售卖方式;0:全渠道售卖,1:仅指定直播间售卖 | - | - |
| 0 | start_sale_type | start_sale_type | false | 99 | 0 | 审核通过后上架售卖时间配置:0-立即上架售卖 1-放入仓库 | - | - |
| 0 | logistics_info | logistics_info | false | 2 | 跨境物流信息 | {"customs_clear_type":4,"origin_region_id": 3573511,"source_region_id": 3573511,"brand_region_id": 174982,"net_weight_qty":13.4,"tax_payer":0} | - | - |
| 0 | price_has_tax | price_has_tax | false | 2 | 1 | 商品价格是否含税 | - | - |
| 0 | biz_kind | biz_kind | false | 99 | 2 | 商品是否跨境、教育等（跨境/海南商品填写2）） | - | - |
| 0 | standard_brand_id | standard_brand_id | false | 99 | 111 | standard_brand_id，通过/brand/list获取，无品牌id则传596120136 | - | - |
| 0 | discount_price | discount_price | false | 99 | 11000 | 售价，单位分，含税价 | - | - |
| 0 | market_price | market_price | false | 99 | 13345 | 划线价，单位分，含税价(在spec_prices设置) | - | - |
| 0 | size_info_template_id | size_info_template_id | false | 99 | 1 | 尺码表 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_id | product_id | - | 99 | 123 | product_id | - | R1 |
| 0 | out_product_id | out_product_id | - | 99 | out_product_id | out_product_id | - | R1 |
| 0 | outer_product_id | outer_product_id | - | 2 | outer_product_id | outer_product_id | - | R1 |
| 0 | create_time | create_time | - | 2 | create_time | create_time | - | R1 |
| 0 | sku | sku | - | 3 | - | 1 | - | R1 |
| 1 | sku.sku_id | sku_id | - | 99 | 1 | 1 | - | R1 |
| 1 | sku.out_sku_id | out_sku_id | - | 99 | 1 | 1 | - | R1 |
| 1 | sku.outer_sku_id | outer_sku_id | - | 2 | 1 | 1 | - | R1 |
| 1 | sku.code | code | - | 2 | 1 | 1 | - | R1 |
| 1 | sku.spec_detail_id1 | spec_detail_id1 | - | 99 | 1 | 1 | - | R1 |
| 1 | sku.spec_detail_id2 | spec_detail_id2 | - | 99 | 1 | 1 | - | R1 |
| 1 | sku.spec_detail_id3 | spec_detail_id3 | - | 99 | 1 | 1 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/addCbProduct?app_key=your_appkey_here&method=product.addCbProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/addCbProduct?app_key=your_appkey_here&method=product.addCbProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductAddCbProductRequest request = new ProductAddCbProductRequest();
ProductAddCbProductParam param = request.getParam();
param.setOuterProductId("232334");
param.setProductType(0L);
param.setCategoryLeafId(20000L);
param.setName("xx补水液");
param.setRecommendRemark("这个商品很好啊");
param.setPic("img_url1|img_url2|img_url3");
param.setDescription("img_url1|img_url2|img_url3");
param.setPayType(1L);
param.setDeliveryMethod(7);
param.setCdfCategory("1");
param.setReduceType(1L);
param.setAssocIds("1|2|3");
param.setFreightId(123L);
param.setWeight(1000);
param.setWeightUnit(1L);
param.setDeliveryDelayDay(3L);
param.setPresellType(0L);
param.setPresellDelay(3L);
param.setPresellEndTime("2020-02-21 18:54:27");
param.setSupply7dayReturn(该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值；L);
param.setMobile("40012345");
param.setCommit(true);
param.setRemark("备注");
param.setOutProductId(123L);
param.setSpecName("颜色-尺码");
param.setSpecs("颜色|红色,黑色^尺码|S,M");
param.setSpecPrices("[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"}]");
param.setSpecPic("img_url,img_url,img_url");
param.setMaximumPerOrder(200L);
param.setLimitPerBuyer(1L);
param.setMinimumPerOrder(2L);
param.setProductFormatNew("{\"1542\":[{\"value\":23964,\"name\":\"是\",\"diy_type\":0}],\"1633\":[{\"value\":38417,\"name\":\"锁水\",\"diy_type\":0}],\"1687\":[{\"value\":111004867,\"name\":\"12/12\",\"diy_type\":0}],\"1880\":[{\"value\":4171,\"name\":\"韩国\",\"diy_type\":0}],\"2685\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2976\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2988\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}],\"3299\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}]}");
param.setSpuId(14567L);
param.setAppointDeliveryDay(2L);
param.setThirdUrl("http://img.alicdn.com/xxxx");
param.setExtra("略");
param.setSrc("略");
param.setNeedCheckOut(true);
param.setCarVinCode("BA111111111111111");
param.setNeedRechargeMode(true);
param.setPresellConfigLevel(3L);
param.setAccountTemplateId("122112");
param.setPresellDeliveryType(1L);
param.setWhiteBackGroundPicUrl("http://aaaa");
param.setLongPicUrl("http://aaaa");
param.setAfterSaleService(7-1);
param.setSellChannel(0);
param.setStartSaleType(0L);
param.setLogisticsInfo("跨境物流信息");
param.setPriceHasTax("1");
param.setBizKind(2L);
param.setStandardBrandId(111L);
param.setDiscountPrice(11000L);
param.setMarketPrice(13345L);
param.setSizeInfoTemplateId(1L);
ProductAddCbProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductAddCbProductRequest();
$param = new ProductAddCbProductParam();
$request->setParam($param);
$param->outer_product_id = "232334";
$param->product_type = 0;
$param->category_leaf_id = 20000;
$param->name = "xx补水液";
$param->recommend_remark = "这个商品很好啊";
$param->pic = "img_url1|img_url2|img_url3";
$param->description = "img_url1|img_url2|img_url3";
$param->pay_type = 1;
$param->delivery_method = 7;
$param->cdf_category = "1";
$param->reduce_type = 1;
$param->assoc_ids = "1|2|3";
$param->freight_id = 123;
$param->weight = 1000;
$param->weight_unit = 1;
$param->delivery_delay_day = 3;
$param->presell_type = 0;
$param->presell_delay = 3;
$param->presell_end_time = "2020-02-21 18:54:27";
$param->supply_7day_return = 该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值；;
$param->mobile = "40012345";
$param->commit = true;
$param->remark = "备注";
$param->out_product_id = 123;
$param->spec_name = "颜色-尺码";
$param->specs = "颜色|红色,黑色^尺码|S,M";
$param->spec_prices = "[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"}]";
$param->spec_pic = "img_url,img_url,img_url";
$param->maximum_per_order = 200;
$param->limit_per_buyer = 1;
$param->minimum_per_order = 2;
$param->product_format_new = "{\"1542\":[{\"value\":23964,\"name\":\"是\",\"diy_type\":0}],\"1633\":[{\"value\":38417,\"name\":\"锁水\",\"diy_type\":0}],\"1687\":[{\"value\":111004867,\"name\":\"12/12\",\"diy_type\":0}],\"1880\":[{\"value\":4171,\"name\":\"韩国\",\"diy_type\":0}],\"2685\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2976\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2988\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}],\"3299\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}]}";
$param->spu_id = 14567;
$param->appoint_delivery_day = 2;
$param->third_url = "http://img.alicdn.com/xxxx";
$param->extra = "略";
$param->src = "略";
$param->need_check_out = true;
$param->car_vin_code = "BA111111111111111";
$param->need_recharge_mode = true;
$param->presell_config_level = 3;
$param->account_template_id = "122112";
$param->presell_delivery_type = 1;
$param->white_back_ground_pic_url = "http://aaaa";
$param->long_pic_url = "http://aaaa";
$param->after_sale_service = 7-1;
$param->sell_channel = 0;
$param->start_sale_type = 0;
$param->logistics_info = "跨境物流信息";
$param->price_has_tax = "1";
$param->biz_kind = 2;
$param->standard_brand_id = 111;
$param->discount_price = 11000;
$param->market_price = 13345;
$param->size_info_template_id = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductAddCbProductRequest()
param = request.getParams()
param.outer_product_id = "232334"
param.product_type = 0
param.category_leaf_id = 20000
param.name = "xx补水液"
param.recommend_remark = "这个商品很好啊"
param.pic = "img_url1|img_url2|img_url3"
param.description = "img_url1|img_url2|img_url3"
param.pay_type = 1
param.delivery_method = 7
param.cdf_category = "1"
param.reduce_type = 1
param.assoc_ids = "1|2|3"
param.freight_id = 123
param.weight = 1000
param.weight_unit = 1
param.delivery_delay_day = 3
param.presell_type = 0
param.presell_delay = 3
param.presell_end_time = "2020-02-21 18:54:27"
param.supply_7day_return = 该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值；
param.mobile = "40012345"
param.commit = true
param.remark = "备注"
param.out_product_id = 123
param.spec_name = "颜色-尺码"
param.specs = "颜色|红色,黑色^尺码|S,M"
param.spec_prices = "[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"}]"
param.spec_pic = "img_url,img_url,img_url"
param.maximum_per_order = 200
param.limit_per_buyer = 1
param.minimum_per_order = 2
param.product_format_new = "{\"1542\":[{\"value\":23964,\"name\":\"是\",\"diy_type\":0}],\"1633\":[{\"value\":38417,\"name\":\"锁水\",\"diy_type\":0}],\"1687\":[{\"value\":111004867,\"name\":\"12/12\",\"diy_type\":0}],\"1880\":[{\"value\":4171,\"name\":\"韩国\",\"diy_type\":0}],\"2685\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2976\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2988\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}],\"3299\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}]}"
param.spu_id = 14567
param.appoint_delivery_day = 2
param.third_url = "http://img.alicdn.com/xxxx"
param.extra = "略"
param.src = "略"
param.need_check_out = true
param.car_vin_code = "BA111111111111111"
param.need_recharge_mode = true
param.presell_config_level = 3
param.account_template_id = "122112"
param.presell_delivery_type = 1
param.white_back_ground_pic_url = "http://aaaa"
param.long_pic_url = "http://aaaa"
param.after_sale_service = 7-1
param.sell_channel = 0
param.start_sale_type = 0
param.logistics_info = "跨境物流信息"
param.price_has_tax = "1"
param.biz_kind = 2
param.standard_brand_id = 111
param.discount_price = 11000
param.market_price = 13345
param.size_info_template_id = 1
response = request.execute(accessToken)

```

### go

```go
request := product_addCbProduct_request.New()
param := request.GetParams()
param.OuterProductId = "232334"
param.ProductType = 0
param.CategoryLeafId = 20000
param.Name = "xx补水液"
param.RecommendRemark = "这个商品很好啊"
param.Pic = "img_url1|img_url2|img_url3"
param.Description = "img_url1|img_url2|img_url3"
param.PayType = 1
param.DeliveryMethod = 7
param.CdfCategory = "1"
param.ReduceType = 1
param.AssocIds = "1|2|3"
param.FreightId = 123
param.Weight = 1000
param.WeightUnit = 1
param.DeliveryDelayDay = 3
param.PresellType = 0
param.PresellDelay = 3
param.PresellEndTime = "2020-02-21 18:54:27"
param.Supply7dayReturn = 该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值；
param.Mobile = "40012345"
param.Commit = true
param.Remark = "备注"
param.OutProductId = 123
param.SpecName = "颜色-尺码"
param.Specs = "颜色|红色,黑色^尺码|S,M"
param.SpecPrices = "[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"}]"
param.SpecPic = "img_url,img_url,img_url"
param.MaximumPerOrder = 200
param.LimitPerBuyer = 1
param.MinimumPerOrder = 2
param.ProductFormatNew = "{\"1542\":[{\"value\":23964,\"name\":\"是\",\"diy_type\":0}],\"1633\":[{\"value\":38417,\"name\":\"锁水\",\"diy_type\":0}],\"1687\":[{\"value\":111004867,\"name\":\"12/12\",\"diy_type\":0}],\"1880\":[{\"value\":4171,\"name\":\"韩国\",\"diy_type\":0}],\"2685\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2976\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2988\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}],\"3299\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}]}"
param.SpuId = 14567
param.AppointDeliveryDay = 2
param.ThirdUrl = "http://img.alicdn.com/xxxx"
param.Extra = "略"
param.Src = "略"
param.NeedCheckOut = true
param.CarVinCode = "BA111111111111111"
param.NeedRechargeMode = true
param.PresellConfigLevel = 3
param.AccountTemplateId = "122112"
param.PresellDeliveryType = 1
param.WhiteBackGroundPicUrl = "http://aaaa"
param.LongPicUrl = "http://aaaa"
param.AfterSaleService = 7-1
param.SellChannel = 0
param.StartSaleType = 0
param.LogisticsInfo = "跨境物流信息"
param.PriceHasTax = "1"
param.BizKind = 2
param.StandardBrandId = 111
param.DiscountPrice = 11000
param.MarketPrice = 13345
param.SizeInfoTemplateId = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductAddCbProductRequest();
var param = request.BuildParam();
param.OuterProductId = "232334";
param.ProductType = 0;
param.CategoryLeafId = 20000;
param.Name = "xx补水液";
param.RecommendRemark = "这个商品很好啊";
param.Pic = "img_url1|img_url2|img_url3";
param.Description = "img_url1|img_url2|img_url3";
param.PayType = 1;
param.DeliveryMethod = 7;
param.CdfCategory = "1";
param.ReduceType = 1;
param.AssocIds = "1|2|3";
param.FreightId = 123;
param.Weight = 1000;
param.WeightUnit = 1;
param.DeliveryDelayDay = 3;
param.PresellType = 0;
param.PresellDelay = 3;
param.PresellEndTime = "2020-02-21 18:54:27";
param.Supply7dayReturn = 该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值；;
param.Mobile = "40012345";
param.Commit = true;
param.Remark = "备注";
param.OutProductId = 123;
param.SpecName = "颜色-尺码";
param.Specs = "颜色|红色,黑色^尺码|S,M";
param.SpecPrices = "[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\"}]";
param.SpecPic = "img_url,img_url,img_url";
param.MaximumPerOrder = 200;
param.LimitPerBuyer = 1;
param.MinimumPerOrder = 2;
param.ProductFormatNew = "{\"1542\":[{\"value\":23964,\"name\":\"是\",\"diy_type\":0}],\"1633\":[{\"value\":38417,\"name\":\"锁水\",\"diy_type\":0}],\"1687\":[{\"value\":111004867,\"name\":\"12/12\",\"diy_type\":0}],\"1880\":[{\"value\":4171,\"name\":\"韩国\",\"diy_type\":0}],\"2685\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2976\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2988\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}],\"3299\":[{\"value\":0,\"name\":\"2\",\"diy_type\":0}]}";
param.SpuId = 14567;
param.AppointDeliveryDay = 2;
param.ThirdUrl = "http://img.alicdn.com/xxxx";
param.Extra = "略";
param.Src = "略";
param.NeedCheckOut = true;
param.CarVinCode = "BA111111111111111";
param.NeedRechargeMode = true;
param.PresellConfigLevel = 3;
param.AccountTemplateId = "122112";
param.PresellDeliveryType = 1;
param.WhiteBackGroundPicUrl = "http://aaaa";
param.LongPicUrl = "http://aaaa";
param.AfterSaleService = 7-1;
param.SellChannel = 0;
param.StartSaleType = 0;
param.LogisticsInfo = "跨境物流信息";
param.PriceHasTax = "1";
param.BizKind = 2;
param.StandardBrandId = 111;
param.DiscountPrice = 11000;
param.MarketPrice = 13345;
param.SizeInfoTemplateId = 1;
var response = request.Execute<ProductAddCbProductResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:99 | 商品创建失败：图片上传错误 | 建议接入素材中心 |
| 20000 | 系统错误 | isp.service-error:2010001 | 商品创建失败: 系统错误 | 重试 |
| 20000 | 系统错误 | isp.service-error:2010002 | 商品创建失败: 请求超时 | 重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010003 | 商品创建失败: 缺少参数 | 请重新进入页面进行补充 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 商品创建失败: 非法参数 | 输入正确参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010005 | 商品创建失败: 无访问权限 | 输入正确参数 |
| 50002 | 业务处理失败 | isv.business-failed:2010011 | 商品创建失败: 新建商品失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 商品创建失败: 读取失败 | 检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010020 | 商品创建失败: 资质类属性必填拒绝 | 输入正确参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010022 | 商品创建失败: 商品状态错误 | 输入正确参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010044 | 商品创建失败: 类目校验 | 请重新选择类目进行商品发布 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010050 | 商品创建失败: 店铺需要绑定 | 完成账号绑定 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010053 | 商品创建失败: 类目相关信息过期 | 待资质审核通过后再提交 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010101 | 商品创建失败: 资质不合法 | 请上传版权页图 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010104 | 商品创建失败: 品牌不合法 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010201 | 商品创建失败: 获取类目信息失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010204 | 商品创建失败: 调用成功，但填充返回数据时失败,无影响 | 无影响，可忽略 |
| 20000 | 系统错误 | isp.service-error:2010206 | 商品创建失败: 查询品牌库失败 | 重试 |
| 20000 | 系统错误 | isp.service-error:2010207 | 商品创建失败: 查询商家资质失败 | 重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010316 | 商品创建失败: 必须支持7天无理由退货 | 检查参数后重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010317 | 商品创建失败: 品牌受限 | 补充参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010319 | 商品创建失败: 使用的品牌没有授权 | 检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010320 | 商品创建失败: 品牌必填 | 检查参数后重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010321 | 商品创建失败: 缺少属性 | 重新进入页面补充 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010501 | 商品创建失败: 发布诊断失败 | 补充参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:4 | 参数错误 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:7 | 业务处理失败 | 检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:2010055 | 商品创建失败：接口限流 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010326 | 商品创建失败: 因为店铺受到处罚，限制发品，更多请到商家后台奖惩中心查看 | 检查店铺状态后重试 |
| 20000 | 系统错误 | isp.service-error:2010202 | 商品创建失败: 获取类目配置失败 | 稍后重试 |
| 20000 | 系统错误 | isp.service-error:2010024 | 商品创建失败: 保存素材失败 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010329 | 2010329:商品创建失败: 当前店铺类型下，不支持在该类目发布此品牌商品。您可查看对应“行业管理规范”的入驻方式。请跳转https://zjsms.com/NE7whg4/ | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010061 | 2010061:商品创建失败: 请求权益信息失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010063 | 2010063:商品创建失败: 当前店铺在架商品量已达上限，暂无法创建商品，详细规则可查看商品数限额实施细则 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010021 | 2010021:商品创建失败: 更新库存数失败: 幂等ID重复 | 检查参数后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
