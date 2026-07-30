# /product/editCbProduct

> 中文说明：编辑一个跨境/海南商品  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/553>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/editCbProduct |
| 中文名称 | 编辑一个跨境/海南商品 |
| 文档目录 | 商品API |
| Article ID | 553 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/6/11 11:08:55 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

编辑一个跨境/海南商品

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.editCbProduct | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 99 | 3506108675121111111 | 商品ID | - | - |
| 0 | product_type | product_type | false | 99 | 0 | 0-普通，3-虚拟，6玉石闪购，7云闪购 | - | - |
| 0 | category_leaf_id | category_leaf_id | false | 99 | 20000 | 叶子类目ID通过/shop/getShopCategory接口获取 | - | - |
| 0 | name | name | false | 2 | xxx补水液 | 商品名称，最多60个字符(30个汉字)，不能含emoj表情 | - | - |
| 0 | recommend_remark | recommend_remark | false | 2 | 这个商品很好啊 | 商家推荐语，不能含emoj表情 | - | - |
| 0 | pic | pic | false | 2 | img_url1\|img_url2\|img_url3 | 商品轮播图，多张图片用 \"\|\" 分开，第一张图为主图，最多5张，至少600x600，大小不超过1M 注：\"pic\"、\"description\"、\"spec_pic\"这三个字段里的传入的图片数量总和，不得超过50张 | - | - |
| 0 | description | description | false | 2 | img_url1\|img_url2\|img_url3 | 商品详情图，多张图片用 \"\|\" 分开，图片数量总和，不得超过50张 | - | - |
| 0 | pay_type | pay_type | false | 99 | 1 | 支付方式，0货到付款 1在线支付，2，货到付款+在线支付 | - | - |
| 0 | delivery_method | delivery_method | false | 99 | 7 | 海南免税生效。 0:离岛免税、1:邮寄、2:离岛自提+邮寄 | - | - |
| 0 | cdf_category | cdf_category | false | 2 | 1 | 海南免税：海关限购分类编码 | - | - |
| 0 | reduce_type | reduce_type | false | 99 | 1 | 1 减库存类型：1-拍下减库存 2-付款减库存 | - | - |
| 0 | assoc_ids | assoc_ids | false | 2 | 1\|2\|3 | 同店商品推荐：为空表示使用系统推荐；多个product_id使用“\|”分开 | - | - |
| 0 | freight_id | freight_id | false | 99 | 123 | 运费模板id，传0表示包邮，通过/freightTemplate/list接口获取 | - | - |
| 0 | weight | weight | false | 9 | 1000 | 重量 | - | - |
| 0 | weight_unit | weight_unit | false | 99 | 1 | 重量单位，0-kg, 1-g | - | - |
| 0 | delivery_delay_day | delivery_delay_day | false | 99 | 7 | delivery_delay_day： 承诺发货时间，单位是天,不传则默认为2天。现货发货(presell_type=0)和阶梯发货模式(presell_type=2)时必填，支持传入9999 、1、 2 （分别表示当日发、次日发、48小时发），具体支持传入的参数范围/product/getProductUpdateRule | - | - |
| 0 | presell_type | presell_type | false | 99 | 0 | 发货模式，0-现货发货，1-预售发货，2-阶梯发货，默认0 | - | - |
| 0 | presell_delay | presell_delay | false | 99 | 7 | 全款预售模式时的发货时间/阶梯模式下阶梯发货时间，具体支持传入的参数范围/product/getProductUpdateRule | - | - |
| 0 | presell_end_time | presell_end_time | false | 2 | 2020-02-21 18:54:27 | 预售结束时间，格式2020-02-21 18:54:27，最多支持设置距离当前30天 | - | - |
| 0 | supply_7day_return | supply_7day_return | false | 99 | 该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值； | 【该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值；】是否支持7天无理由，0不支持，1支持，2支持（拆封后不支持） | - | - |
| 0 | mobile | mobile | false | 2 | 40012345 | 客服电话号码 | - | - |
| 0 | commit | commit | true | 4 | true | false仅保存，true保存+提审 | - | - |
| 0 | remark | remark | false | 2 | 备注 | 商家可见备注 | - | - |
| 0 | out_product_id | out_product_id | false | 99 | 123 | 123 | - | - |
| 0 | quality_list | quality_list | false | 3 | - | 资质信息，可通过/product/qualificationConfig获取 | - | - |
| 1 | quality_list.quality_key | qualityKey | true | 2 | 3457***9470978 | 资质key | - | - |
| 1 | quality_list.quality_name | qualityName | true | 2 | 进货凭证 | 资质名称 | - | - |
| 1 | quality_list.quality_attachments | qualityAttachments | true | 3 | - | 资质 | - | - |
| 2 | quality_list.quality_attachments.media_type | mediaType | true | 99 | 1 | 1-图片，2-pdf | - | - |
| 2 | quality_list.quality_attachments.url | url | true | 2 | \"http://www.byted***.com/YYYY\" | 凭证url | - | - |
| 0 | spec_name | spec_name | false | 2 | 颜色-尺码 | 如果不填，则规格名为各级规格名用 \"-\" 自动生成 | - | - |
| 0 | specs | specs | false | 2 | 颜色\|红色,黑色^尺码\|S,M | 店铺通用规格，能被同类商品通用。多规格用^分隔，规格与规格值用\|分隔，多个规格值用,分隔。如果创建或编辑现货+预售商品或新预售商品时，须包含发货时效，如：颜色\|黑色,白色,黄色^尺码\|S,M,L^发货时效\|5天内发货,15天内发货 | - | - |
| 0 | spec_prices | spec_prices | false | 2 | [{\"spec_detail_name1\":\"红色\",\"spec_detail_name2\":\"S\",\"spec_detail_name3\":\"\",\"stock_num\":11,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\"},{\"spec_detail_name1\":\"红色\",\"spec_detail_name2\":\"M\",\"spec_detail_name3\":\"\",\"stock_num\":22,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\"},{\"spec_detail_name1\":\"黑色\",\"spec_detail_name2\":\"S\",\"spec_detail_name3\":\"\",\"stock_num\":44,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\"},{\"spec_detail_name1\":\"黑色\",\"spec_detail_name2\":\"M\",\"spec_detail_name3\":\"\",\"stock_num\":55,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\"}] | sku详情，数量应该等于规格1规格2规格3，sku数量和规格组合数必须一致 sku不可售时，库存可设置为0 | - | - |
| 0 | spec_pic | spec_pic | false | 2 | img_url,img_url,img_url | 如颜色-尺寸, 颜色就是主规格, 颜色如黑,白,黄,它们图片url以逗号分隔 注：\"pic\"、\"description\"、\"spec_pic\"这三个字段里的传入的图片数量总和，不得超过50张 | - | - |
| 0 | maximum_per_order | maximum_per_order | false | 99 | 2 | 每个用户每次下单限购件数 | - | - |
| 0 | limit_per_buyer | limit_per_buyer | false | 99 | 3 | 每个用户累计限购件数 | - | - |
| 0 | minimum_per_order | minimum_per_order | false | 99 | 2 | 每个用户每次下单至少购买的件数 | - | - |
| 0 | product_format_new | product_format_new | false | 2 | {\"405\":[{\"value\":27664,\"name\":\"复习资料\",\"diy_type\":0}],\"449\":[{\"value\":0,\"name\":\"佚名\",\"diy_type\":0}],\"501\":[{\"value\":7310,\"name\":\"否\",\"diy_type\":0}],\"855\":[{\"value\":61683,\"name\":\"北京出版社\",\"diy_type\":0}],\"1088\":[{\"value\":407,\"name\":\"小学五年级\",\"diy_type\":0}],\"1319\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"1601\":[{\"value\":13911,\"name\":\"通用版\",\"diy_type\":0}],\"1618\":[{\"value\":0,\"name\":\"9787218122861\",\"diy_type\":0}],\"1831\":[{\"value\":0,\"name\":\"小学英语看图说话写话二年级\",\"diy_type\":0}],\"2000\":[{\"value\":34762,\"name\":\"无\",\"diy_type\":0}],\"2229\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2763\":[{\"value\":25193,\"name\":\"英语\",\"diy_type\":0}],\"3271\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"3296\":[{\"value\":0,\"name\":\"16.80元\",\"diy_type\":0}]} | 通过/product/getCatePropertyV2获取 格式：{"property_id":[{"value":value,"name":"property_name","diy_type":0}]}, name的类型是string，value和diy_type的类型是number | - | - |
| 0 | spu_id | spu_id | false | 99 | 不透出 | spu id | - | - |
| 0 | appoint_delivery_day | appoint_delivery_day | false | 99 | 2 | 可预约发货天数 | - | - |
| 0 | third_url | third_url | false | 2 | http://img.alicdn.com/xxxx | third_url | - | - |
| 0 | extra | extra | false | 2 | 不透出 | extra | - | - |
| 0 | src | src | false | 2 | 不透出 | src | - | - |
| 0 | outer_product_id | outer_product_id | false | 2 | 11111111111111 | 外部product id | - | - |
| 0 | standard_brand_id | standard_brand_id | false | 99 | 111 | standard_brand_id，通过/brand/list获取，无品牌id则传596120136 | - | - |
| 0 | need_check_out | need_check_out | false | 4 | true | 卡券类型需要传true | - | - |
| 0 | poi_resource | poi_resource | false | 5 | - | 卡券信息 | - | - |
| 1 | poi_resource.condition | condition | false | 2 | 1 | 券码使用条件 | - | - |
| 1 | poi_resource.valid_days | valid_days | false | 99 | 1 | 有效时间段，从领取日开始计算，优先级高于ValidStart-ValidEnd | - | - |
| 1 | poi_resource.valid_start | valid_start | false | 99 | 1639216083 | 卡券有效开始时间，秒单位时间戳 | - | - |
| 1 | poi_resource.valid_end | valid_end | false | 99 | 1639907283 | 卡券有效截止时间，秒单位时间戳 | - | - |
| 1 | poi_resource.service_num | service_num | false | 2 | 13111111111 | 客服电话 | - | - |
| 1 | poi_resource.notification | notification | false | 2 | 领取 | 领取须知 | - | - |
| 1 | poi_resource.code_type | code_type | false | 99 | 1 | 平台产生券码: 1 ; 合作方api实时传入的券码: 4 | - | - |
| 1 | poi_resource.total_can_use_count | total_can_use_count | true | 99 | 1 | 可核销总次数 | - | - |
| 1 | poi_resource.coupon_second_exchange | couponSecondExchange | true | 99 | 0 | 0-不支持二次兑换，1-支持二次兑换 | - | - |
| 1 | poi_resource.link | link | false | 2 | http://xxx.xxxx.xxx | 兑换链接 | - | - |
| 1 | poi_resource.count | count | false | 99 | 1 | 券码总量，0/-1表示不限制，平台券时须\u003e0 | - | - |
| 0 | force_use_quality_list | force_use_quality_list | false | 4 | false | 使用qualityList覆盖当前商品资质，qualityList传空代表清空 | - | - |
| 0 | car_vin_code | car_vin_code | false | 2 | VIN11111111111111 | VIN11111111111111 | - | - |
| 0 | need_recharge_mode | need_recharge_mode | false | 4 | false | 充值模式 | - | - |
| 0 | presell_config_level | presell_config_level | false | 99 | 2 | 0：全款预售，1：sku预售，2：现货+预售 ，3：新预售 | - | - |
| 0 | account_template_id | account_template_id | false | 2 | 1 | 多账号模板 | - | - |
| 0 | presell_delivery_type | presell_delivery_type | false | 99 | 1 | 全款预售和sku预售时传递，其他不传： 0 预售结束后发货 1支付完成后发货 | - | - |
| 0 | white_back_ground_pic_url | white_back_ground_pic_url | false | 2 | http://aaaa | 白底图url(仅素材中心url有效) | - | - |
| 0 | long_pic_url | long_pic_url | false | 2 | http://aaaa | 3:4长图url(仅素材中心url有效) | - | - |
| 0 | after_sale_service | after_sale_service | false | 8 | 7-0 | 售后服务参数,key:value格式，supply_7day_return(7天无理由)： 0不支持，1支持，2支持（拆封后不支持） supply_day_return_selector(7天无理由标签)：N天-政策代号，N只支持7和15,supply_red_ass_return（红屁屁无忧）：0不支持，1支持 supply_allergy_return（过敏无忧,仅跨境可选）：0不支持，1支持 damaged_order_return（坏损包退）：0不支持，1支持 support_allergy_returnV2（过敏包退，境内可选）：0不支持，1支持 | - | - |
| 0 | sell_channel | sell_channel | false | 3 | [0] | 售卖方式;0:全渠道手售卖,1:仅指定直播间售卖 | - | - |
| 0 | start_sale_type | start_sale_type | false | 99 | 0 | 审核通过后上架售卖时间配置:0-立即上架售卖 1-放入仓库 | - | - |
| 0 | logistics_info | logistics_info | false | 2 | {"customs_clear_type":4,"origin_region_id": 3573511,"source_region_id": 3573511,"brand_region_id": 174982,"net_weight_qty":13.4,"tax_payer":0} | 跨境物流相关信息 | - | - |
| 0 | price_has_tax | price_has_tax | false | 2 | 是否含税价，1:含税，2：不含税 | 1 | - | - |
| 0 | size_info_template_id | size_info_template_id | false | 99 | 7138290858440311054 | 尺码表id | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/editCbProduct?app_key=your_appkey_here&method=product.editCbProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/editCbProduct?app_key=your_appkey_here&method=product.editCbProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductEditCbProductRequest request = new ProductEditCbProductRequest();
ProductEditCbProductParam param = request.getParam();
param.setProductId(3506108675121111111L);
param.setProductType(0L);
param.setCategoryLeafId(20000L);
param.setName("xxx补水液");
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
param.setDeliveryDelayDay(7L);
param.setPresellType(0L);
param.setPresellDelay(7L);
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
param.setMaximumPerOrder(2L);
param.setLimitPerBuyer(3L);
param.setMinimumPerOrder(2L);
param.setProductFormatNew("{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}");
param.setSpuId(不透出L);
param.setAppointDeliveryDay(2L);
param.setThirdUrl("http://img.alicdn.com/xxxx");
param.setExtra("不透出");
param.setSrc("不透出");
param.setOuterProductId("11111111111111");
param.setStandardBrandId(111L);
param.setNeedCheckOut(true);
param.setForceUseQualityList(false);
param.setCarVinCode("VIN11111111111111");
param.setNeedRechargeMode(false);
param.setPresellConfigLevel(2L);
param.setAccountTemplateId("1");
param.setPresellDeliveryType(1L);
param.setWhiteBackGroundPicUrl("http://aaaa");
param.setLongPicUrl("http://aaaa");
param.setAfterSaleService(7-0);
param.setSellChannel([0]);
param.setStartSaleType(0L);
param.setLogisticsInfo("{\"customs_clear_type\":4,\"origin_region_id\": 3573511,\"source_region_id\": 3573511,\"brand_region_id\": 174982,\"net_weight_qty\":13.4,\"tax_payer\":0}");
param.setPriceHasTax("是否含税价，1:含税，2：不含税");
param.setSizeInfoTemplateId(7138290858440311054L);
ProductEditCbProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductEditCbProductRequest();
$param = new ProductEditCbProductParam();
$request->setParam($param);
$param->product_id = 3506108675121111111;
$param->product_type = 0;
$param->category_leaf_id = 20000;
$param->name = "xxx补水液";
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
$param->delivery_delay_day = 7;
$param->presell_type = 0;
$param->presell_delay = 7;
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
$param->maximum_per_order = 2;
$param->limit_per_buyer = 3;
$param->minimum_per_order = 2;
$param->product_format_new = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}";
$param->spu_id = 不透出;
$param->appoint_delivery_day = 2;
$param->third_url = "http://img.alicdn.com/xxxx";
$param->extra = "不透出";
$param->src = "不透出";
$param->outer_product_id = "11111111111111";
$param->standard_brand_id = 111;
$param->need_check_out = true;
$param->force_use_quality_list = false;
$param->car_vin_code = "VIN11111111111111";
$param->need_recharge_mode = false;
$param->presell_config_level = 2;
$param->account_template_id = "1";
$param->presell_delivery_type = 1;
$param->white_back_ground_pic_url = "http://aaaa";
$param->long_pic_url = "http://aaaa";
$param->after_sale_service = 7-0;
$param->sell_channel = [0];
$param->start_sale_type = 0;
$param->logistics_info = "{\"customs_clear_type\":4,\"origin_region_id\": 3573511,\"source_region_id\": 3573511,\"brand_region_id\": 174982,\"net_weight_qty\":13.4,\"tax_payer\":0}";
$param->price_has_tax = "是否含税价，1:含税，2：不含税";
$param->size_info_template_id = 7138290858440311054;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductEditCbProductRequest()
param = request.getParams()
param.product_id = 3506108675121111111
param.product_type = 0
param.category_leaf_id = 20000
param.name = "xxx补水液"
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
param.delivery_delay_day = 7
param.presell_type = 0
param.presell_delay = 7
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
param.maximum_per_order = 2
param.limit_per_buyer = 3
param.minimum_per_order = 2
param.product_format_new = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}"
param.spu_id = 不透出
param.appoint_delivery_day = 2
param.third_url = "http://img.alicdn.com/xxxx"
param.extra = "不透出"
param.src = "不透出"
param.outer_product_id = "11111111111111"
param.standard_brand_id = 111
param.need_check_out = true
param.force_use_quality_list = false
param.car_vin_code = "VIN11111111111111"
param.need_recharge_mode = false
param.presell_config_level = 2
param.account_template_id = "1"
param.presell_delivery_type = 1
param.white_back_ground_pic_url = "http://aaaa"
param.long_pic_url = "http://aaaa"
param.after_sale_service = 7-0
param.sell_channel = [0]
param.start_sale_type = 0
param.logistics_info = "{\"customs_clear_type\":4,\"origin_region_id\": 3573511,\"source_region_id\": 3573511,\"brand_region_id\": 174982,\"net_weight_qty\":13.4,\"tax_payer\":0}"
param.price_has_tax = "是否含税价，1:含税，2：不含税"
param.size_info_template_id = 7138290858440311054
response = request.execute(accessToken)

```

### go

```go
request := product_editCbProduct_request.New()
param := request.GetParams()
param.ProductId = 3506108675121111111
param.ProductType = 0
param.CategoryLeafId = 20000
param.Name = "xxx补水液"
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
param.DeliveryDelayDay = 7
param.PresellType = 0
param.PresellDelay = 7
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
param.MaximumPerOrder = 2
param.LimitPerBuyer = 3
param.MinimumPerOrder = 2
param.ProductFormatNew = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}"
param.SpuId = 不透出
param.AppointDeliveryDay = 2
param.ThirdUrl = "http://img.alicdn.com/xxxx"
param.Extra = "不透出"
param.Src = "不透出"
param.OuterProductId = "11111111111111"
param.StandardBrandId = 111
param.NeedCheckOut = true
param.ForceUseQualityList = false
param.CarVinCode = "VIN11111111111111"
param.NeedRechargeMode = false
param.PresellConfigLevel = 2
param.AccountTemplateId = "1"
param.PresellDeliveryType = 1
param.WhiteBackGroundPicUrl = "http://aaaa"
param.LongPicUrl = "http://aaaa"
param.AfterSaleService = 7-0
param.SellChannel = [0]
param.StartSaleType = 0
param.LogisticsInfo = "{\"customs_clear_type\":4,\"origin_region_id\": 3573511,\"source_region_id\": 3573511,\"brand_region_id\": 174982,\"net_weight_qty\":13.4,\"tax_payer\":0}"
param.PriceHasTax = "是否含税价，1:含税，2：不含税"
param.SizeInfoTemplateId = 7138290858440311054
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductEditCbProductRequest();
var param = request.BuildParam();
param.ProductId = 3506108675121111111;
param.ProductType = 0;
param.CategoryLeafId = 20000;
param.Name = "xxx补水液";
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
param.DeliveryDelayDay = 7;
param.PresellType = 0;
param.PresellDelay = 7;
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
param.MaximumPerOrder = 2;
param.LimitPerBuyer = 3;
param.MinimumPerOrder = 2;
param.ProductFormatNew = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}";
param.SpuId = 不透出;
param.AppointDeliveryDay = 2;
param.ThirdUrl = "http://img.alicdn.com/xxxx";
param.Extra = "不透出";
param.Src = "不透出";
param.OuterProductId = "11111111111111";
param.StandardBrandId = 111;
param.NeedCheckOut = true;
param.ForceUseQualityList = false;
param.CarVinCode = "VIN11111111111111";
param.NeedRechargeMode = false;
param.PresellConfigLevel = 2;
param.AccountTemplateId = "1";
param.PresellDeliveryType = 1;
param.WhiteBackGroundPicUrl = "http://aaaa";
param.LongPicUrl = "http://aaaa";
param.AfterSaleService = 7-0;
param.SellChannel = [0];
param.StartSaleType = 0;
param.LogisticsInfo = "{\"customs_clear_type\":4,\"origin_region_id\": 3573511,\"source_region_id\": 3573511,\"brand_region_id\": 174982,\"net_weight_qty\":13.4,\"tax_payer\":0}";
param.PriceHasTax = "是否含税价，1:含税，2：不含税";
param.SizeInfoTemplateId = 7138290858440311054;
var response = request.Execute<ProductEditCbProductResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:7 | 业务处理失败 | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4 | 参数错误 | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:-20008 | 库存错误 | 可到营销中心修改对应的营销活动库存，或直接修改当前商品现货库存数 |
| 40004 | 非法的参数 | isv.parameter-invalid:99 | 商品编辑失败：图片上传错误 | 建议接入素材中心 |
| 20000 | 系统错误 | isp.service-error:20011 | 加载信息失败 | 请检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:2010001 | 系统错误 | 请检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:2010002 | 请求超时 | 重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010003 | 缺少参数 | 重新进入页面进行补充 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 非法参数 | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010005 | 无访问权限 | 核对后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010011 | 编辑商品失败 | 请检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:2010012 | 保存商品失败 | 重试 |
| 20000 | 系统错误 | isp.service-error:2010013 | 读取失败 | 重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010020 | 资质类属性必填拒绝 | 重新输入正确编号 |
| 50002 | 业务处理失败 | isv.business-failed:2010021 | 商品操作重复 | 请勿重复操作 |
| 50002 | 业务处理失败 | isv.business-failed:2010022 | 商品状态错误 | 检查状态后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010041 | 该商品在审核中 | 不允许编辑 |
| 50002 | 业务处理失败 | isv.business-failed:2010042 | 该商品已删除 | 不允许编辑 |
| 50002 | 业务处理失败 | isv.business-failed:2010043 | 该商品已封禁 | 不允许编辑 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010044 | 类目校验 | 请重新选择类目进行商品发布 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010045 | 商品正在参加活动 | 暂不支持修改规格 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010050 | 店铺需要绑定 | 完成账号绑定 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010101 | 资质不合法 | 请上传包装标签图 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010102 | 内容未做修改 | 内容未做修改 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010104 | 品牌不合法 | 品牌不合法 |
| 20000 | 系统错误 | isp.service-error:2010201 | 获取类目信息失败 | 重试 |
| 20000 | 系统错误 | isp.service-error:2010202 | 获取类目配置失败 | 重试 |
| 20000 | 系统错误 | isp.service-error:2010206 | 查询品牌库失败 | 重试 |
| 20000 | 系统错误 | isp.service-error:2010207 | 查询商家资质失败 | 查询商家资质失败，请重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010316 | 必须支持7天无理由退货 | 检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010317 | 品牌受限 | 品牌受限 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010319 | 使用的品牌没有授权 | 检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010320 | 品牌必填 | 请重新选择品牌 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010321 | 缺少属性 | 检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010501 | 发布诊断失败 | 检查参数后重试 |
| 60000 | 触发限流，请稍后重试 | isp.traffic-limited:2010401 | 编辑商品失败：接口限流 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010329 | 2010329:当前店铺类型下，不支持在该类目发布此品牌商品。您可查看对应“行业管理规范”的入驻方式。请跳转https://zjsms.com/NE7whg4/ | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010060 | 2010060:商家不支持 假一赔十 权益 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010203 | 2010203:获取商品信息失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010326 | 2010326:因为店铺受到处罚，限制发品，更多请到商家后台奖惩中心查看 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010061 | 2010061:请求权益信息失败 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2147483647 | 2147483647:存在审批中素材，请等待审批 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010310 | 2010310:不存在该规格信息 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010053 | 2010053:所选类目经营资质已失效，您可以选择保存草稿，待资质审核通过后再提交 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010063 | 2010063:当前店铺在架商品量已达上限，暂无法创建商品，详细规则可查看商品数限额实施细则 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010055 | 2010055:因服务器升级，商品价格展示可能异常，请修改价格后重试 | 检查参数后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
