# /product/addV2

> 中文说明：发布商品  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/249>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/addV2 |
| 中文名称 | 发布商品 |
| 文档目录 | 商品API |
| Article ID | 249 |
| 文档版本 | V19.01 |
| 官方更新时间 | 2026/6/16 15:01:42 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1200 |

## 使用说明

发布商品

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 商品 / 标题优化（packageType=1）；适用应用类目：创新应用大赛_微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.addV2 | 调用的API接口名称 | - | - |
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
| 0 | outer_product_id | outer_product_id | false | 2 | 232334 | 推荐使用，外部商家编码，支持字符串。超市小时达场景不推荐使用。out_product_id 、outer_product_id  都传了的话，要求相等。 | - | - |
| 0 | product_type | product_type | true | 99 | 0 | 0-普通，3-虚拟，6玉石闪购，7云闪购 | - | - |
| 0 | category_leaf_id | category_leaf_id | true | 99 | 20000 | 叶子类目ID通过/shop/getShopCategory接口获取 | - | - |
| 0 | name | name | true | 2 | xxx补水液 | 商品名称，至少8个字符（4个汉字），最多60个字符(30个汉字)，不能含emoj表情 | - | - |
| 0 | recommend_remark | recommend_remark | false | 2 | 这个商品很好啊 | 商家推荐语，不能含emoj表情 | - | - |
| 0 | pic | pic | true | 2 | img_url1\|img_url2\|img_url3 | 商品轮播图，多张图片用 \"\|\" 分开，第一张图为主图，最多5张，至少600x600，大小不超过5M。 | - | - |
| 0 | description | description | true | 2 | img_url1\|img_url2\|img_url3 | 商品描述，目前只支持图片。多张图片用 \"\|\" 分开。不能用其他网站的文本粘贴，这样会出现css样式不兼容。总图片数量不得超过50张。 | - | - |
| 0 | pay_type | pay_type | false | 99 | 1 | 支付方式，0货到付款 1在线支付，2，货到付款+在线支付 | - | - |
| 0 | delivery_method | delivery_method | false | 99 | 7 | 海南免税生效。 0:离岛免税、1:邮寄、2:离岛自提+邮寄 | - | - |
| 0 | cdf_category | cdf_category | false | 2 | 1 | 海南免税：海关限购分类编码 | - | - |
| 0 | reduce_type | reduce_type | true | 99 | 1 | 1 减库存类型：1-拍下减库存 2-付款减库存 | - | - |
| 0 | assoc_ids | assoc_ids | false | 2 | 1\|2\|3 | 同店商品推荐：为空表示使用系统推荐；多个product_id使用“\|”分开 | - | - |
| 0 | freight_id | freight_id | true | 99 | 123 | 运费模板id，传0表示包邮，通过/freightTemplate/list接口获取 | - | - |
| 0 | weight | weight | false | 9 | 1000 | 重量 | - | - |
| 0 | weight_unit | weight_unit | false | 99 | 1 | 重量单位，0-kg, 1-g | - | - |
| 0 | delivery_delay_day | delivery_delay_day | false | 99 | 7 | delivery_delay_day： 承诺发货时间，单位是天,不传则默认为2天。现货发货(presell_type=0)和阶梯发货模式(presell_type=2)时必填，支持传入9999 、1、 2 （分别表示当日发、次日发、48小时发），具体支持传入的参数范围/product/getProductUpdateRule | - | - |
| 0 | presell_type | presell_type | false | 99 | 0 | 发货模式，0-现货发货，1-预售发货，2-阶梯发货，默认0 | - | - |
| 0 | presell_delay | presell_delay | false | 99 | 7 | 全款预售模式时的发货时间/阶梯模式下阶梯发货时间，具体支持传入的参数范围/product/getProductUpdateRule。 | - | - |
| 0 | presell_end_time | presell_end_time | false | 2 | 2020-02-21 18:54:27 | 预售结束时间，格式2020-02-21 18:54:27，最多支持设置距离当前30天 | - | - |
| 0 | supply_7day_return | supply_7day_return | false | 99 | 该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值； | 【该字段将在2023年4月30日下线，请开发使用最新的after_sale_service字段传值；】是否支持7天无理由，0不支持，1支持，2支持（拆封后不支持） | - | - |
| 0 | mobile | mobile | true | 2 | 40012345 | 客服电话号码 | - | - |
| 0 | commit | commit | true | 4 | true | false仅保存，true保存+提审 | - | - |
| 0 | remark | remark | false | 2 | 备注 | 商家可见备注 | - | - |
| 0 | out_product_id | out_product_id | false | 99 | 123 | 外部product_id。超市小时达场景不推荐使用。out_product_id 、outer_product_id  都传了的话，要求相等。 | - | - |
| 0 | quality_list | quality_list | false | 3 | - | 资质，可通过/product/qualificationConfig获取 | - | - |
| 1 | quality_list.quality_id | qualityId | false | 99 | 1234 | 资质id | - | - |
| 1 | quality_list.quality_content_name | qualityContentName | false | 2 | 版权页资质 | 资质名 | - | - |
| 1 | quality_list.quality_attachments | qualityAttachments | true | 3 | - | 资质 | - | - |
| 2 | quality_list.quality_attachments.media_type | mediaType | true | 99 | 1 | 1-图片 | - | - |
| 2 | quality_list.quality_attachments.url | url | true | 2 | \"http://www.byted***.com/YYYY\" | 凭证url | - | - |
| 1 | quality_list.quality_key | qualityKey | true | 2 | 3457***9470978 | 资质key | - | - |
| 1 | quality_list.quality_name | qualityName | true | 2 | 进货凭证 | 资质名称 | - | - |
| 0 | spec_name | spec_name | false | 2 | 颜色-尺码 | 如果不填，则规格名为各级规格名用 \"-\" 自动生成 | - | - |
| 0 | specs | specs | false | 2 | 颜色\|红色,黑色^尺码\|S,M | 店铺通用规格，能被同类商品通用。多规格用^分隔，规格与规格值用\|分隔，多个规格值用,分隔。如果创建或编辑现货+预售商品或新预售商品时，须包含发货时效，如：颜色\|黑色,白色,黄色^尺码\|S,M,L^发货时效\|5天内发货,15天内发货 | - | - |
| 0 | spec_prices | spec_prices | false | 2 | [{\"spec_detail_name1\":\"红色\",\"spec_detail_name2\":\"S\",\"spec_detail_name3\":\"\",\"stock_num\":11,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\",\"delivery_infos\":[{\"info_type\":\"weight\",\"info_value\":\"100\",\"info_unit\":\"mg\"}]},{\"spec_detail_name1\":\"红色\",\"spec_detail_name2\":\"M\",\"spec_detail_name3\":\"\",\"stock_num\":22,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\",\"delivery_infos\":[{\"info_type\":\"weight\",\"info_value\":\"100\",\"info_unit\":\"mg\"}]},{\"spec_detail_name1\":\"黑色\",\"spec_detail_name2\":\"S\",\"spec_detail_name3\":\"\",\"stock_num\":44,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\",\"delivery_infos\":[{\"info_type\":\"weight\",\"info_value\":\"100\",\"info_unit\":\"mg\"}]},{\"spec_detail_name1\":\"黑色\",\"spec_detail_name2\":\"M\",\"spec_detail_name3\":\"\",\"stock_num\":55,\"price\":100,\"code\":\"\",\"step_stock_num\":0,\"supplier_id\":\"\",\"outer_sku_id\":\"\",\"delivery_infos\":[{\"info_type\":\"weight\",\"info_value\":\"100\",\"info_unit\":\"mg\"}]}] | sku详情，数量应该等于规格1规格2规格3，sku数量和规格组合数必须一致 sku不可售时，库存可设置为0。price单位为分。 delivery_infos为SKU物流信息，info_value为字符串类型（示例："12"），info_type填weight，info_unit支持mg,g,kg，超市小时达场景主品用普通库存，子品用区域库存（"sku_type": 1 // 区域库存，"stock_num_map": {"123": 99999 // 门店ID:库存数量}）; “gold_process_charge”为黄金加工费，只有计价金类目可填并且必填。<br>sell_properties为sku规格信息，代替spec_detail_name1、spec_detail_name2、spec_detail_name3，支持填写超过三级规格，样式:[{"property_id":123,"property_name":"颜色","value_id":456,"value_name":"红色","remark":"偏深"},{"property_id":789,"property_name":"净含量","value_id":891,"value_name":"30ml","remark":null,"measurement":{"measure_unit":"ml","measure_unit_id":4,"value":"30"}}] 其中property_id规格项属性id,自定义时传0,property_name为规格项名称,value_id为规格值属性id自定义时传0,value_name为规格值名称,remark为规格值备注(选填),measurement为度量衡信息，当规格值为度量衡属性自定义值时传递。 | - | - |
| 0 | spec_pic | spec_pic | false | 2 | img_url,img_url,img_url | 如颜色-尺寸, 颜色就是主规格, 颜色如黑,白,黄,它们图片url以逗号分隔 注：\"pic\"、\"description\"、\"spec_pic\"这三个字段里的传入的图片数量总和，不得超过50张。 | - | - |
| 0 | maximum_per_order | maximum_per_order | false | 99 | 200 | 每个用户每次下单限购件数 | - | - |
| 0 | limit_per_buyer | limit_per_buyer | false | 99 | 1 | 每个用户累计限购件数 | - | - |
| 0 | minimum_per_order | minimum_per_order | false | 99 | 2 | 每个用户每次下单至少购买的件数 | - | - |
| 0 | product_format_new | product_format_new | false | 2 | {\"405\":[{\"value\":27664,\"name\":\"复习资料\",\"diy_type\":0}],\"449\":[{\"value\":0,\"name\":\"佚名\",\"diy_type\":0}],\"501\":[{\"value\":7310,\"name\":\"否\",\"diy_type\":0}],\"855\":[{\"value\":61683,\"name\":\"北京出版社\",\"diy_type\":0}],\"1088\":[{\"value\":407,\"name\":\"小学五年级\",\"diy_type\":0}],\"1319\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"1601\":[{\"value\":13911,\"name\":\"通用版\",\"diy_type\":0}],\"1618\":[{\"value\":0,\"name\":\"9787218122861\",\"diy_type\":0}],\"1831\":[{\"value\":0,\"name\":\"小学英语看图说话写话二年级\",\"diy_type\":0}],\"2000\":[{\"value\":34762,\"name\":\"无\",\"diy_type\":0}],\"2229\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"2763\":[{\"value\":25193,\"name\":\"英语\",\"diy_type\":0}],\"3271\":[{\"value\":0,\"name\":\"1\",\"diy_type\":0}],\"3296\":[{\"value\":0,\"name\":\"16.80元\",\"diy_type\":0}]} | 属性，通过/product/getCatePropertyV2获取 格式：{"property_id":[{"value":value,"name":"property_name","diy_type":0}]} name的类型是string，value和diy_type的类型是number | - | - |
| 0 | spu_id | spu_id | false | 99 | 14567 | spu_id | - | - |
| 0 | appoint_delivery_day | appoint_delivery_day | false | 99 | 2 | 可预约发货天数 | - | - |
| 0 | third_url | third_url | false | 2 | http://img.alicdn.com/xxxx | third_url | - | - |
| 0 | extra | extra | false | 2 | 略 | extra | - | - |
| 0 | src | src | false | 2 | 略 | src | - | - |
| 0 | standard_brand_id | standard_brand_id | false | 99 | 111 | 品牌id，通过/brand/list获取，无品牌id则传596120136 | - | - |
| 0 | need_check_out | need_check_out | false | 4 | true | 卡券类型需要传true | - | - |
| 0 | poi_resource | poi_resource | false | 5 | - | 卡券信息 | - | - |
| 1 | poi_resource.service_num | service_num | false | 2 | 13111111111 | 客服电话 | - | - |
| 1 | poi_resource.valid_days | valid_days | false | 99 | 5 | 有效时间段，从领取日开始计算，优先级高于ValidStart-ValidEnd | - | - |
| 1 | poi_resource.coupon_return_methods | coupon_return_methods | false | 3 | [1] | 数组当前只支持一个元素且只可为 1或2，其中 1 表示随时退+过期自动退，2 表示不支持退 | - | - |
| 1 | poi_resource.count | count | false | 99 | 1 | 券码总量，0/-1表示不限制，平台券时须\u003e0 | - | - |
| 1 | poi_resource.poi_lib_id | poiLibId | false | 99 | 7448856056001954098 | 门店库id | - | - |
| 1 | poi_resource.valid_end | valid_end | false | 99 | 1636616483 | 卡券有效截止时间，秒单位时间戳 | - | - |
| 1 | poi_resource.code_type | code_type | false | 99 | 1 | 平台产生券码: 1 ; 合作方api实时传入的券码: 4 | - | - |
| 1 | poi_resource.link | link | false | 2 | https://xxx.xxx.xxx | 兑换链接 | - | - |
| 1 | poi_resource.couponSecondExchange | couponSecondExchange | false | 99 | 0 | 0-不支持二次兑换，1-支持二次兑换 | - | - |
| 1 | poi_resource.notification | notification | false | 2 | 领取须知 | 领取须知 | - | - |
| 1 | poi_resource.condition | condition | false | 2 | 券码使用条件 | 券码使用条件 | - | - |
| 1 | poi_resource.total_can_use_count | total_can_use_count | false | 99 | 1 | 可核销总次数 | - | - |
| 1 | poi_resource.valid_start | valid_start | false | 99 | 1636616483 | 卡券有效开始时间，秒单位时间戳 | - | - |
| 0 | car_vin_code | car_vin_code | false | 2 | BA111111111111111 | 汽车vin码 | - | - |
| 0 | presell_config_level | presell_config_level | false | 99 | 3 | 0：全款预售，1：sku预售，2：现货+预售 ，3：新预售 | - | - |
| 0 | need_recharge_mode | need_recharge_mode | false | 4 | true | 充值模式 | - | - |
| 0 | account_template_id | account_template_id | false | 2 | 122112 | 账号模板id | - | - |
| 0 | presell_delivery_type | presell_delivery_type | false | 99 | 1 | 全款预售和sku预售时传递，其他不传： 0 预售结束后发货  1支付完成后发货 | - | - |
| 0 | white_back_ground_pic_url | white_back_ground_pic_url | false | 2 | http://aaaa | 白底图url(仅素材中心url有效)，白底图比例要求1:1 | - | - |
| 0 | long_pic_url | long_pic_url | false | 2 | http://aaaa | 3:4长图url(仅素材中心url有效) | - | - |
| 0 | after_sale_service | after_sale_service | false | 8 | "damaged_order_return": "1" | 推荐传入，售后服务参数,key:value格式。supply_day_return_selector(7天无理由选项)：N天-政策代号，N只支持7和15，政策代号枚举https://bytedance.feishu.cn/docs/doccnF946oh1c98e7mo9DlYZtig 。 supply_red_ass_return（红屁屁无忧）：0不支持，1支持。supply_allergy_return（过敏无忧,仅跨境可选）：0不支持，1支持。 damaged_order_return（坏损包退）：0不支持，1支持。 support_allergy_returnV2（过敏包退，境内可选）：0不支持，1支持 | - | - |
| 0 | sell_channel | sell_channel | false | 3 | 0 | 售卖方式;0:全渠道手售卖,1:仅指定直播间售卖 | - | - |
| 0 | start_sale_type | start_sale_type | false | 99 | 0 | 审核通过后上架售卖时间配置:0-立即上架售卖 1-放入仓库 | - | - |
| 0 | delay_rule | delay_rule | false | 5 | - | 特殊日期延迟发货规则 | - | - |
| 1 | delay_rule.enable | enable | true | 4 | true | 是否开启特殊日期延迟发货 | - | - |
| 1 | delay_rule.config_type | config_type | true | 99 | 1 | 1 时间点；2 时间范围 | - | - |
| 1 | delay_rule.end_time | end_time | true | 99 | 1672502400 | 特殊日期延迟发货时间下单结束时间，时间戳，单位秒 | - | - |
| 1 | delay_rule.start_time | start_time | true | 99 | 1643040000 | 特殊日期延迟发货时间下单开始时间，时间戳，单位秒 | - | - |
| 1 | delay_rule.config_value | config_value | true | 99 | 1673539199 | 特殊日期延迟发货时间最晚发货时间，时间戳，单位秒：当config_type=1时，传时间戳，代表最晚x发货；当config_type=2时，传天数，代表延迟x天发货 | - | - |
| 0 | material_video_id | material_video_id | false | 2 | vaaaa | 主图视频ID，可以先通过https://op.jinritemai.com/docs/api-docs/69/1617接口上传视频，获取审核通过的视频素材ID进行传入 任务需要验证 | - | - |
| 0 | pickup_method | pickup_method | false | 2 | 0 | 提取方式新字段，推荐使用。"0": 普通商品-使用物流发货, "1": 虚拟商品-无需物流与电子交易凭证, "2": 虚拟商品-使用电子交易凭证,  "3": 虚拟商品-充值直连 | - | - |
| 0 | size_info_template_id | size_info_template_id | false | 99 | 101 | 尺码模板ID | - | - |
| 0 | substitute_goods_url | substitute_goods_url | false | 2 | https://xxx.xxx.xxx | 外部商品url | - | - |
| 0 | sale_channel_type | sale_channel_type | false | 2 | sameAsOffline | 销售渠道类型，可选onlineOnly（纯电商，仅在线上售卖）或sameAsOffline（专柜同款，线上线下都有售卖），云零售商家（https://fxg.jinritemai.com/ffa/merchant-growth/cloud-retail）可以设置 | - | - |
| 0 | recruit_info | recruit_info | false | 5 | - | 招商信息 | - | - |
| 1 | recruit_info.recruit_type | recruit_type | true | 2 | 0 | 招商类型 | - | - |
| 1 | recruit_info.recruit_follow_id | recruit_follow_id | true | 2 | 122332 | 线索ID | - | - |
| 1 | recruit_info.recruit_source | recruit_source | false | 2 | isv.appid | 发品源 | - | - |
| 0 | store_id | store_id | false | 99 | 12345 | 门店ID | - | - |
| 0 | main_product_id | main_product_id | false | 99 | 3121213121212 | 主商品ID | - | - |
| 0 | sale_limit_id | sale_limit_id | false | 99 | 123 | 限售模板ID | - | - |
| 0 | name_prefix | name_prefix | false | 2 | 钛钢木质耳饰 | 通过/product/getRecommendName接口推荐的商品标题前缀（注意系统根据类目属性生成前缀字符串时，末尾有一个空格） | - | - |
| 0 | reference_price | reference_price | false | 99 | 12300 | 参考价，单位分，需大于商品价格并小于商品价格的10倍 | - | - |
| 0 | reference_price_certificate | reference_price_certificate | false | 5 | - | 参考价凭证信息 | - | - |
| 1 | reference_price_certificate.certificate_type | certificate_type | false | 99 | 1 | 通过/product/getProductUpdateRule获取可选的参考价格类型 | - | - |
| 1 | reference_price_certificate.certificate_urls | certificate_urls | false | 3 | ["http://www.aaa.com"] | 图片url需要使用商品素材中心的url并且只能有一张 | - | - |
| 0 | main_image_three_to_four | main_image_three_to_four | false | 2 | img_url1\|img_url2\|img_url3 | 商品主图3:4，多张图片用 \"\|\" 分开，最多5张，大小不超过5M。 | - | - |
| 0 | unit_price_info | unit_price_info | false | 5 | - | 商品价格规则信息 | - | - |
| 1 | unit_price_info.price_rule_type | price_rule_type | true | 99 | 1 | 1表示投资金<br>2表示首饰金 | - | - |
| 1 | unit_price_info.process_charge | process_charge | true | 99 | 0 | 如果传了unit_price_info字段，请请写死传0。内部不会消费，只是用于标识 | - | - |
| 0 | quality_inspection_info | quality_inspection_info | false | 5 | - | 前置质检相关（特定二手商家、特定二手类目使用） | - | - |
| 1 | quality_inspection_info.certificate_code | certificate_code | false | 2 | 123 | 质检证书编码 | - | - |
| 1 | quality_inspection_info.mode | mode | false | 99 | 2 | 1: 单库存模式，只允许售卖一个sku；2: 多库存模式，不限售卖次数 | - | - |
| 1 | quality_inspection_info.supported | supported | false | 4 | true | 是否支持前置质检 | - | - |
| 1 | quality_inspection_info.agency | agency | false | 2 | 111 | 机构编码，请通过/inspection/QueryBtasAgencyList接口获取 | - | - |
| 0 | is_c2b_switch_on | is_c2b_switch_on | false | 4 | true | 是否支持c2b小程序（特定c2b定制商家使用，请使用/product/getProductUpdateRule接口获取是否支持） | - | - |
| 0 | micro_app_id | micro_app_id | false | 2 | abcde | 支持c2b定制时的小程序id（特定c2b定制商家使用，请使用/product/getProductUpdateRule接口获取是否支持） | - | - |
| 0 | is_auto_charge | is_auto_charge | false | 4 | false | 是否是自动充值商品 | - | - |
| 0 | short_product_name | short_product_name | false | 2 | 新品牛肉干 | 导购短标题，短标题可用于物流打单及商品搜索场景，若未填写，则系统将智能生成最优短标题在商详购买页面展示，说明详见：https://school.jinritemai.com/doudian/web/article/aHUW2MCvHqF3?from=shop_article | - | - |
| 0 | after_sale_service_v2 | after_sale_service_v2 | false | 5 | - | 售后服务新结构（老的after_sale_service中的字段后续会慢慢迁移到这里） | - | - |
| 1 | after_sale_service_v2.is_large_product | is_large_product | false | 99 | 1-是 0-不是 | 当前商品是否是大件商品 | - | - |
| 1 | after_sale_service_v2.three_guarantees | three_guarantees | false | 5 | - | 三包服务配置 | - | - |
| 2 | after_sale_service_v2.three_guarantees.duration | duration | false | 99 | 180 | 售后天数 | - | - |
| 2 | after_sale_service_v2.three_guarantees.service_type | service_type | false | 99 | 1 | 服务类型 1-寄修 2-延保 | - | - |
| 0 | spec_info | spec_info | false | 5 | - | 规格详细信息，代替specs和spec_name | - | - |
| 1 | spec_info.spec_values | spec_values | true | 3 | - | 规格内容 | - | - |
| 2 | spec_info.spec_values.property_name | name | true | 2 | 颜色 | 颜色 | - | - |
| 2 | spec_info.spec_values.property_id | property_id | false | 99 | 1234 | 规格项标准属性id | - | - |
| 2 | spec_info.spec_values.values | values | true | 3 | - | 规格值 | - | - |
| 3 | spec_info.spec_values.values.measure_info | measure_info | false | 5 | - | 度量衡结构化信息 | - | - |
| 4 | spec_info.spec_values.values.measure_info.template_id | template_id | false | 99 | 12345 | 模版id | - | - |
| 4 | spec_info.spec_values.values.measure_info.values | values | false | 3 | - | 模块内容 | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.unit_name | unit_name | false | 2 | g | 度量衡单位名称 | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.prefix | prefix | false | 2 | "" | 度量衡值前缀 | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.module_id | module_id | false | 99 | 354 | 模块id | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.unit_id | unit_id | false | 99 | 2 | 度量衡单位id | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.value | value | false | 2 | 10 | 度量衡值 | - | - |
| 5 | spec_info.spec_values.values.measure_info.values.suffix | suffix | false | 2 | "-" | 度量衡后缀 | - | - |
| 3 | spec_info.spec_values.values.cpv_path | cpv_path | false | 3 | - | 规格值导航路径 | - | - |
| 4 | spec_info.spec_values.values.cpv_path.cpid | cpid | true | 99 | 1234 | 属性id | - | - |
| 4 | spec_info.spec_values.values.cpv_path.cpvid | cpvid | true | 99 | 234 | 属性值id | - | - |
| 3 | spec_info.spec_values.values.remark | remark | false | 2 | 偏深 | 备注 | - | - |
| 3 | spec_info.spec_values.values.value_name | name | true | 2 | 白色 | 规格值名称 | - | - |
| 3 | spec_info.spec_values.values.value_id | value_id | false | 99 | 2341 | 规格值标准属性值id | - | - |
| 0 | spec_prices_v2 | spec_prices_v2 | false | 3 | - | 新sku参数，代替spec_prices | - | - |
| 1 | spec_prices_v2.sku_type | sku_type | false | 99 | 0 | 库存类型 0-普通库存，1-区域库存，10-阶梯库存 | - | - |
| 1 | spec_prices_v2.gov_subsidy_cargo | gov_subsidy_cargo | false | 5 | - | 国补自营货品相关 | - | - |
| 2 | spec_prices_v2.gov_subsidy_cargo.cargo_id | cargo_id | false | 99 | 123 | 国补自营货品ID | - | - |
| 1 | spec_prices_v2.spec_model_code | spec_model_code | false | 3 | ["123"] | 规格型号编码-国补场景下国补商品型号 | - | - |
| 1 | spec_prices_v2.package_sku | package_sku | false | 3 | - | 组套包信息 | - | - |
| 2 | spec_prices_v2.package_sku.short_name | short_name | false | 2 | xx套装 | 组套名称 | - | - |
| 2 | spec_prices_v2.package_sku.sub_product_id | sub_product_id | false | 99 | 11 | 组套子品id | - | - |
| 2 | spec_prices_v2.package_sku.combo_num | combo_num | false | 99 | 2 | 组合数量 | - | - |
| 2 | spec_prices_v2.package_sku.sub_sku_id | sub_sku_id | false | 99 | 12 | 组套子品skuid | - | - |
| 1 | spec_prices_v2.step_stock_num | step_stock_num | false | 99 | 12 | 阶梯库存数量 | - | - |
| 1 | spec_prices_v2.sku_status | sku_status | false | 4 | true | true：表示sku上架 false：表示sku下架 | - | - |
| 1 | spec_prices_v2.supplier_id | supplier_id | false | 2 | adb | 供应商编码 | - | - |
| 1 | spec_prices_v2.out_sku_id | out_sku_id | false | 99 | 123 | 外部skuid | - | - |
| 1 | spec_prices_v2.cargo | cargo | false | 5 | - | 货品信息，如果传0 0 表示解绑） | - | - |
| 2 | spec_prices_v2.cargo.source_type | source_type | false | 99 | 1 | 货品类型，跨境的货品类型传3 | - | - |
| 2 | spec_prices_v2.cargo.cargo_id | cargo_id | false | 2 | 1123 | 货品id | - | - |
| 1 | spec_prices_v2.batch_stocks | batch_stocks | false | 3 | - | 批次库存 | - | - |
| 2 | spec_prices_v2.batch_stocks.batch_stock_items | batch_stock_items | false | 3 | - | 批次库存项 | - | - |
| 3 | spec_prices_v2.batch_stocks.batch_stock_items.stock_num | stock_num | false | 99 | 1 | 批次库存值 | - | - |
| 3 | spec_prices_v2.batch_stocks.batch_stock_items.batch_type | batch_type | false | 99 | 1 | 批次库存类型: 1为唯一码 | - | - |
| 3 | spec_prices_v2.batch_stocks.batch_stock_items.unique_id | unique_id | false | 2 | "356303487400309" | 唯一码 | - | - |
| 2 | spec_prices_v2.batch_stocks.out_warehouse_id | out_warehouse_id | false | 2 | "FOURPLTEST" | 外部仓id，区域库存模式填写 | - | - |
| 1 | spec_prices_v2.multi_time_stocks | multi_time_stocks | false | 3 | - | 时效库存，一个sku可以配置0到多个时效库存 | - | - |
| 2 | spec_prices_v2.multi_time_stocks.time_desc | time_desc | false | 2 | 5天内发 | 时效描述 | - | - |
| 2 | spec_prices_v2.multi_time_stocks.time_type | time_type | false | 99 | 5：5天内发 | 时效 | - | - |
| 2 | spec_prices_v2.multi_time_stocks.stock_num | stock_num | false | 99 | 500 | 时效库存数 | - | - |
| 1 | spec_prices_v2.gold_process_charge | gold_process_charge | false | 99 | 10 | 黄金加工费，单位：分，nil代表不修改 | - | - |
| 1 | spec_prices_v2.delivery_infos | delivery_infos | false | 3 | - | SKU运输信息 | - | - |
| 2 | spec_prices_v2.delivery_infos.info_unit | info_unit | false | 2 | g | 信息计量单位 | - | - |
| 2 | spec_prices_v2.delivery_infos.info_value | info_value | false | 2 | 10 | 信息值 | - | - |
| 2 | spec_prices_v2.delivery_infos.info_type | info_type | false | 2 | 1 | 信息类型 | - | - |
| 1 | spec_prices_v2.customs_report_info | customs_report_info | false | 5 | - | 海关申报要素 | - | - |
| 2 | spec_prices_v2.customs_report_info.g_model | g_model | false | 2 | x | 规格型号 | - | - |
| 2 | spec_prices_v2.customs_report_info.first_measure_qty | first_measure_qty | false | 9 | 12.1 | 法定第一计量数量 | - | - |
| 2 | spec_prices_v2.customs_report_info.first_measure_unit | first_measure_unit | false | 2 | ml | 法定第一计量单位 | - | - |
| 2 | spec_prices_v2.customs_report_info.unit | unit | false | 2 | ml | 售卖单位 | - | - |
| 2 | spec_prices_v2.customs_report_info.second_measure_unit | second_measure_unit | false | 2 | ml | 法定第二计量单位 | - | - |
| 2 | spec_prices_v2.customs_report_info.bar_code | bar_code | false | 2 | xxx | 条形码 | - | - |
| 2 | spec_prices_v2.customs_report_info.report_name | report_name | false | 2 | 名称 | 品名 | - | - |
| 2 | spec_prices_v2.customs_report_info.second_measure_qty | second_measure_qty | false | 9 | 12.3 | 法定第二计量数量 | - | - |
| 2 | spec_prices_v2.customs_report_info.report_brand_name | report_brand_name | false | 2 | 品牌名 | 品牌 | - | - |
| 2 | spec_prices_v2.customs_report_info.hs_code | hs_code | false | 2 | adaa | 海关代码 | - | - |
| 2 | spec_prices_v2.customs_report_info.usage | usage | false | 2 | 用途 | 用途 | - | - |
| 1 | spec_prices_v2.code | code | false | 2 | xxx | 商家编码 | - | - |
| 1 | spec_prices_v2.sell_properties | sell_properties | true | 3 | - | 规格信息 | - | - |
| 2 | spec_prices_v2.sell_properties.value_name | value_name | false | 2 | 白色 | 规格值名称 | - | - |
| 2 | spec_prices_v2.sell_properties.property_name | property_name | false | 2 | 颜色 | 规格项名称 | - | - |
| 1 | spec_prices_v2.spec_value_lib_id | spec_value_lib_id | false | 99 | 0 | 商品规格值id：懂车帝场景传递 | - | - |
| 1 | spec_prices_v2.stock_num_map | stock_num_map | false | 8 | "FOURPLTEST": 10 | 仓ID -> 库存数量。跨境业务大部分都是必传，格式为：Map<商家仓ID, 库存数量> | - | - |
| 1 | spec_prices_v2.price | price | false | 99 | 100 | 价格 | - | - |
| 1 | spec_prices_v2.sku_picture_url | sku_picture_url | false | 3 | ["img_url"] | SKU图URL：仅支持素材中心URL；要么全部sku填写，要么全部sku不填写；一个sku仅可设置一张图片，图片比例1:1，至少600x600，大小不超过5M，格式 JPG/JPEG/PNG | - | - |
| 1 | spec_prices_v2.presell_delay | presell_delay | false | 99 | 5 | 预售天数 | - | - |
| 1 | spec_prices_v2.tax_exemption_sku_info | tax_exemption_sku_info | false | 5 | - | 海南免税：Sku 额外信息 | - | - |
| 2 | spec_prices_v2.tax_exemption_sku_info.volume | volume | false | 99 | 3 | 净含量 | - | - |
| 2 | spec_prices_v2.tax_exemption_sku_info.suit_num | suit_num | false | 99 | 2 | 套装数量 | - | - |
| 2 | spec_prices_v2.tax_exemption_sku_info.is_suit | is_suit | false | 99 | 1 | 是否套装（0 否 1 是） | - | - |
| 1 | spec_prices_v2.supply_price | supply_price | false | 99 | 13 | 供货价,单位：分，nil代表不修改，0代表清空 | - | - |
| 1 | spec_prices_v2.outer_sku_id | outer_sku_id | false | 2 | daf | 外部skuid | - | - |
| 1 | spec_prices_v2.stock_num | stock_num | false | 99 | 10 | 库存数量。跨境必须走区域库存，stock_num设置0。 | - | - |
| 1 | spec_prices_v2.barcodes | barcodes | false | 3 | [] | 条形码 | - | - |
| 1 | spec_prices_v2.sku_classification_type | sku_classification_type | false | 2 | main_sale_single_product | sku分类信息，对应枚举值<br>"main_sale_single_product" - 主售款（单品）<br>"main_sale_multi_product" - "主售款（多件装）"<br>"main_sale_combination" - 主售款（组合品）<br>"non_main_sale" - 非主售款<br>"information_description" - 信息说明/防拍 | - | - |
| 0 | with_sku_type | with_sku_type | false | 4 | true | true:主动设置库存类型（仅对区域库存生效，普通库存、阶梯库存不受此字段影响） | - | - |
| 0 | name_suffix | name_suffix | false | 2 | 36.9度 | 通过/product/getRecommendName接口推荐的商品标题后缀（注意系统根据类目属性生成后缀字符串时，前面可能有一个空格） | - | - |
| 0 | use_brand_name | use_brand_name | false | 4 | false | 是否勾选使用品牌名, 注意勾选时需要接入/product/getRecommendName接口 | - | - |
| 0 | open_logistics_info | open_logistics_info | false | 5 | - | 跨境物流信息 | - | - |
| 1 | open_logistics_info.source_country_id | source_country_id | false | 99 | 2963597 | 货源国id | - | - |
| 1 | open_logistics_info.customs_clear_type | customs_clear_type | false | 99 | 1 | 通关模式，1：BBC 2：BC 3：CC邮关 | - | - |
| 1 | open_logistics_info.net_weight_qty | net_weight_qty | false | 9 | 1 | 商品净重 | - | - |
| 1 | open_logistics_info.cross_warehouse_id | cross_warehouse_id | false | 2 | FOURPLTEST | 商家仓id | - | - |
| 1 | open_logistics_info.origin_country_id | origin_country_id | false | 99 | 6251999 | 原产国id | - | - |
| 1 | open_logistics_info.brand_country_id | brand_country_id | false | 99 | 6251999 | 品牌所在地id | - | - |
| 1 | open_logistics_info.tax_payer | tax_payer | false | 99 | 0 | 税金承担方（一般都填0，走商家承担）：0商家承担，1用户承担 | - | - |
| 0 | price_has_tax | price_has_tax | false | 2 | 1 | 商品价格是否含税，跨境必需填1。  1：商品价格含税 2：商品价格不含税 | - | - |
| 0 | biz_kind | biz_kind | false | 99 | 2 | 商品是否跨境、教育等（跨境/海南商品填写2）） | - | - |
| 0 | custom_property | custom_property | false | 5 | - | 商品定制属性填写，（即时零售，外卖业务填写） | - | - |
| 1 | custom_property.customPropertyGroups | customPropertyGroups | false | 3 | - | 定制属性组信息，如：加工服务 | - | - |
| 2 | custom_property.customPropertyGroups.propertyDetail | propertyDetail | false | 3 | - | 定制属性信息，如：宰杀，不宰杀 | - | - |
| 3 | custom_property.customPropertyGroups.propertyDetail.name | name | false | 2 | 宰杀 | 定制属性名称 | - | - |
| 3 | custom_property.customPropertyGroups.propertyDetail.extra_info | extra_info | false | 5 | - | 定制属性扩展信息 | - | - |
| 4 | custom_property.customPropertyGroups.propertyDetail.extra_info.process_time | process_time | false | 99 | 60 | 属性处理时长，单位秒 | - | - |
| 2 | custom_property.customPropertyGroups.name | name | false | 2 | 加工服务 | 定制属性组名称 | - | - |
| 0 | is_evaluate_opened | is_evaluate_opened | false | 4 | false | 测评短视频开关 | - | - |
| 0 | default_process_time | default_process_time | false | 5 | - | 商品默认处理时长 | - | - |
| 1 | default_process_time.value | value | false | 99 | 60 | 商品默认处理时长，单位秒 | - | - |
| 0 | company_id | company_id | false | 0 | 12345 | 管理单元ID | - | - |
| 0 | is_second_hand_digital | is_second_hand_digital | false | 4 | false | 是否二手数码(成色机) | - | - |
| 0 | recommend_ids | recommend_ids | false | 8 | {"category_recommend_id":"qwert12345"} | 预测记录id，类目预测记录key=category_recommend_id | - | - |
| 0 | show_checkout_entry | show_checkout_entry | false | 4 | true | 虚拟商品设置是否订单展示核销去使用 | - | - |
| 0 | pickup_prepare_time | pickup_prepare_time | false | 99 | 2 | 自提备货时长(单位天)；自提商品且不管理门店库存时必填 | - | - |
| 0 | home_install_service_template_id | home_install_service_template_id | false | 99 | 123456 | 上门安装模版，传递为空不处理，传递0代表C模式，传递>0代表A/B模式 | - | - |
| 0 | category_property_pics | category_property_pics | false | 8 | - | 属性图，key=属性id | - | - |
| 1 | category_property_pics.urls | urls | false | 3 | ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_5e17566665c9511ad127ef5fbd1206c3_sx_4717_www1125-119"] | 属性图图片链接 | - | - |
| 0 | is_platform_self_operation | is_platform_self_operation | false | 4 | false | 是否平台自营商品 | - | - |
| 0 | origin_product_id | origin_product_id | false | 99 | 0 | 自营品源品id | - | - |
| 0 | correct_size_suggestion | correct_size_suggestion | false | 5 | - | 偏码建议 | - | - |
| 1 | correct_size_suggestion.value_id | value_id | false | 99 | 2 | 偏码建议选项id | - | - |
| 1 | correct_size_suggestion.size | size | false | 9 | 0.5 | 建议选大/小码数 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_id | product_id | - | 99 | product_id | product_id | 39 | R1 |
| 0 | out_product_id | out_product_id | - | 99 | out_product_id | out_product_id | 39 | R1 |
| 0 | outer_product_id | outer_product_id | - | 2 | outer_product_id | outer_product_id | 39 | R1 |
| 0 | create_time | create_time | - | 2 | create_time | create_time | 39 | R1 |
| 0 | sku | sku | - | 3 | - | 1 | - | R1 |
| 1 | sku.sku_id | sku_id | - | 99 | 1 | sku_id | 39 | R1 |
| 1 | sku.out_sku_id | out_sku_id | - | 99 | 1 | 外部sku id | 39 | R1 |
| 1 | sku.outer_sku_id | outer_sku_id | - | 2 | 1 | 字符串形式外部sku id | 39 | R1 |
| 1 | sku.code | code | - | 2 | 1 | sku code | 39 | R1 |
| 1 | sku.spec_detail_id1 | spec_detail_id1 | - | 99 | 1 | 子规格id | 39 | R1 |
| 1 | sku.spec_detail_id2 | spec_detail_id2 | - | 99 | 1 | 子规格id | 39 | R1 |
| 1 | sku.spec_detail_id3 | spec_detail_id3 | - | 99 | 1 | 子规格id | 39 | R1 |
| 1 | sku.spec_detail_ids | spec_detail_ids | - | 3 | [111,222,333] | 所有的规格值id，代替spec_detail_id123 | 39 | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/addV2?app_key=your_appkey_here&method=product.addV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/addV2?app_key=your_appkey_here&method=product.addV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductAddV2Request request = new ProductAddV2Request();
ProductAddV2Param param = request.getParam();
param.setOuterProductId("232334");
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
param.setSpecPrices("[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]}]");
param.setSpecPic("img_url,img_url,img_url");
param.setMaximumPerOrder(200L);
param.setLimitPerBuyer(1L);
param.setMinimumPerOrder(2L);
param.setProductFormatNew("{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}");
param.setSpuId(14567L);
param.setAppointDeliveryDay(2L);
param.setThirdUrl("http://img.alicdn.com/xxxx");
param.setExtra("略");
param.setSrc("略");
param.setStandardBrandId(111L);
param.setNeedCheckOut(true);
param.setCarVinCode("BA111111111111111");
param.setPresellConfigLevel(3L);
param.setNeedRechargeMode(true);
param.setAccountTemplateId("122112");
param.setPresellDeliveryType(1L);
param.setWhiteBackGroundPicUrl("http://aaaa");
param.setLongPicUrl("http://aaaa");
param.setAfterSaleService("damaged_order_return": "1");
param.setSellChannel(0);
param.setStartSaleType(0L);
param.setMaterialVideoId("vaaaa");
param.setPickupMethod("0");
param.setSizeInfoTemplateId(101L);
param.setSubstituteGoodsUrl("https://xxx.xxx.xxx");
param.setSaleChannelType("sameAsOffline");
param.setStoreId(12345L);
param.setMainProductId(3121213121212L);
param.setSaleLimitId(123L);
param.setNamePrefix("钛钢木质耳饰");
param.setReferencePrice(12300L);
param.setMainImageThreeToFour("img_url1|img_url2|img_url3");
param.setIsC2bSwitchOn(true);
param.setMicroAppId("abcde");
param.setIsAutoCharge(false);
param.setShortProductName("新品牛肉干");
param.setWithSkuType(true);
param.setNameSuffix("36.9度");
param.setUseBrandName(false);
param.setPriceHasTax("1");
param.setBizKind(2L);
param.setIsEvaluateOpened(false);
param.setCompanyId(12345L);
param.setIsSecondHandDigital(false);
param.setRecommendIds({"category_recommend_id":"qwert12345"});
param.setShowCheckoutEntry(true);
param.setPickupPrepareTime(2L);
param.setHomeInstallServiceTemplateId(123456L);
param.setIsPlatformSelfOperation(false);
param.setOriginProductId(0L);
ProductAddV2Response response = request.execute(accessToken);

```

### php

```php
$request = new ProductAddV2Request();
$param = new ProductAddV2Param();
$request->setParam($param);
$param->outer_product_id = "232334";
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
$param->spec_prices = "[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]}]";
$param->spec_pic = "img_url,img_url,img_url";
$param->maximum_per_order = 200;
$param->limit_per_buyer = 1;
$param->minimum_per_order = 2;
$param->product_format_new = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}";
$param->spu_id = 14567;
$param->appoint_delivery_day = 2;
$param->third_url = "http://img.alicdn.com/xxxx";
$param->extra = "略";
$param->src = "略";
$param->standard_brand_id = 111;
$param->need_check_out = true;
$param->car_vin_code = "BA111111111111111";
$param->presell_config_level = 3;
$param->need_recharge_mode = true;
$param->account_template_id = "122112";
$param->presell_delivery_type = 1;
$param->white_back_ground_pic_url = "http://aaaa";
$param->long_pic_url = "http://aaaa";
$param->after_sale_service = "damaged_order_return": "1";
$param->sell_channel = 0;
$param->start_sale_type = 0;
$param->material_video_id = "vaaaa";
$param->pickup_method = "0";
$param->size_info_template_id = 101;
$param->substitute_goods_url = "https://xxx.xxx.xxx";
$param->sale_channel_type = "sameAsOffline";
$param->store_id = 12345;
$param->main_product_id = 3121213121212;
$param->sale_limit_id = 123;
$param->name_prefix = "钛钢木质耳饰";
$param->reference_price = 12300;
$param->main_image_three_to_four = "img_url1|img_url2|img_url3";
$param->is_c2b_switch_on = true;
$param->micro_app_id = "abcde";
$param->is_auto_charge = false;
$param->short_product_name = "新品牛肉干";
$param->with_sku_type = true;
$param->name_suffix = "36.9度";
$param->use_brand_name = false;
$param->price_has_tax = "1";
$param->biz_kind = 2;
$param->is_evaluate_opened = false;
$param->company_id = 12345;
$param->is_second_hand_digital = false;
$param->recommend_ids = {"category_recommend_id":"qwert12345"};
$param->show_checkout_entry = true;
$param->pickup_prepare_time = 2;
$param->home_install_service_template_id = 123456;
$param->is_platform_self_operation = false;
$param->origin_product_id = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductAddV2Request()
param = request.getParams()
param.outer_product_id = "232334"
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
param.spec_prices = "[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]}]"
param.spec_pic = "img_url,img_url,img_url"
param.maximum_per_order = 200
param.limit_per_buyer = 1
param.minimum_per_order = 2
param.product_format_new = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}"
param.spu_id = 14567
param.appoint_delivery_day = 2
param.third_url = "http://img.alicdn.com/xxxx"
param.extra = "略"
param.src = "略"
param.standard_brand_id = 111
param.need_check_out = true
param.car_vin_code = "BA111111111111111"
param.presell_config_level = 3
param.need_recharge_mode = true
param.account_template_id = "122112"
param.presell_delivery_type = 1
param.white_back_ground_pic_url = "http://aaaa"
param.long_pic_url = "http://aaaa"
param.after_sale_service = "damaged_order_return": "1"
param.sell_channel = 0
param.start_sale_type = 0
param.material_video_id = "vaaaa"
param.pickup_method = "0"
param.size_info_template_id = 101
param.substitute_goods_url = "https://xxx.xxx.xxx"
param.sale_channel_type = "sameAsOffline"
param.store_id = 12345
param.main_product_id = 3121213121212
param.sale_limit_id = 123
param.name_prefix = "钛钢木质耳饰"
param.reference_price = 12300
param.main_image_three_to_four = "img_url1|img_url2|img_url3"
param.is_c2b_switch_on = true
param.micro_app_id = "abcde"
param.is_auto_charge = false
param.short_product_name = "新品牛肉干"
param.with_sku_type = true
param.name_suffix = "36.9度"
param.use_brand_name = false
param.price_has_tax = "1"
param.biz_kind = 2
param.is_evaluate_opened = false
param.company_id = 12345
param.is_second_hand_digital = false
param.recommend_ids = {"category_recommend_id":"qwert12345"}
param.show_checkout_entry = true
param.pickup_prepare_time = 2
param.home_install_service_template_id = 123456
param.is_platform_self_operation = false
param.origin_product_id = 0
response = request.execute(accessToken)

```

### go

```go
request := product_addV2_request.New()
param := request.GetParams()
param.OuterProductId = "232334"
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
param.SpecPrices = "[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]}]"
param.SpecPic = "img_url,img_url,img_url"
param.MaximumPerOrder = 200
param.LimitPerBuyer = 1
param.MinimumPerOrder = 2
param.ProductFormatNew = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}"
param.SpuId = 14567
param.AppointDeliveryDay = 2
param.ThirdUrl = "http://img.alicdn.com/xxxx"
param.Extra = "略"
param.Src = "略"
param.StandardBrandId = 111
param.NeedCheckOut = true
param.CarVinCode = "BA111111111111111"
param.PresellConfigLevel = 3
param.NeedRechargeMode = true
param.AccountTemplateId = "122112"
param.PresellDeliveryType = 1
param.WhiteBackGroundPicUrl = "http://aaaa"
param.LongPicUrl = "http://aaaa"
param.AfterSaleService = "damaged_order_return": "1"
param.SellChannel = 0
param.StartSaleType = 0
param.MaterialVideoId = "vaaaa"
param.PickupMethod = "0"
param.SizeInfoTemplateId = 101
param.SubstituteGoodsUrl = "https://xxx.xxx.xxx"
param.SaleChannelType = "sameAsOffline"
param.StoreId = 12345
param.MainProductId = 3121213121212
param.SaleLimitId = 123
param.NamePrefix = "钛钢木质耳饰"
param.ReferencePrice = 12300
param.MainImageThreeToFour = "img_url1|img_url2|img_url3"
param.IsC2bSwitchOn = true
param.MicroAppId = "abcde"
param.IsAutoCharge = false
param.ShortProductName = "新品牛肉干"
param.WithSkuType = true
param.NameSuffix = "36.9度"
param.UseBrandName = false
param.PriceHasTax = "1"
param.BizKind = 2
param.IsEvaluateOpened = false
param.CompanyId = 12345
param.IsSecondHandDigital = false
param.RecommendIds = {"category_recommend_id":"qwert12345"}
param.ShowCheckoutEntry = true
param.PickupPrepareTime = 2
param.HomeInstallServiceTemplateId = 123456
param.IsPlatformSelfOperation = false
param.OriginProductId = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductAddV2Request();
var param = request.BuildParam();
param.OuterProductId = "232334";
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
param.SpecPrices = "[{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":11,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"红色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":22,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"S\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":44,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]},{\\\"spec_detail_name1\\\":\\\"黑色\\\",\\\"spec_detail_name2\\\":\\\"M\\\",\\\"spec_detail_name3\\\":\\\"\\\",\\\"stock_num\\\":55,\\\"price\\\":100,\\\"code\\\":\\\"\\\",\\\"step_stock_num\\\":0,\\\"supplier_id\\\":\\\"\\\",\\\"outer_sku_id\\\":\\\"\\\",\\\"delivery_infos\\\":[{\\\"info_type\\\":\\\"weight\\\",\\\"info_value\\\":\\\"100\\\",\\\"info_unit\\\":\\\"mg\\\"}]}]";
param.SpecPic = "img_url,img_url,img_url";
param.MaximumPerOrder = 200;
param.LimitPerBuyer = 1;
param.MinimumPerOrder = 2;
param.ProductFormatNew = "{\\\"405\\\":[{\\\"value\\\":27664,\\\"name\\\":\\\"复习资料\\\",\\\"diy_type\\\":0}],\\\"449\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"佚名\\\",\\\"diy_type\\\":0}],\\\"501\\\":[{\\\"value\\\":7310,\\\"name\\\":\\\"否\\\",\\\"diy_type\\\":0}],\\\"855\\\":[{\\\"value\\\":61683,\\\"name\\\":\\\"北京出版社\\\",\\\"diy_type\\\":0}],\\\"1088\\\":[{\\\"value\\\":407,\\\"name\\\":\\\"小学五年级\\\",\\\"diy_type\\\":0}],\\\"1319\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"1601\\\":[{\\\"value\\\":13911,\\\"name\\\":\\\"通用版\\\",\\\"diy_type\\\":0}],\\\"1618\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"9787218122861\\\",\\\"diy_type\\\":0}],\\\"1831\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"小学英语看图说话写话二年级\\\",\\\"diy_type\\\":0}],\\\"2000\\\":[{\\\"value\\\":34762,\\\"name\\\":\\\"无\\\",\\\"diy_type\\\":0}],\\\"2229\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"2763\\\":[{\\\"value\\\":25193,\\\"name\\\":\\\"英语\\\",\\\"diy_type\\\":0}],\\\"3271\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"1\\\",\\\"diy_type\\\":0}],\\\"3296\\\":[{\\\"value\\\":0,\\\"name\\\":\\\"16.80元\\\",\\\"diy_type\\\":0}]}";
param.SpuId = 14567;
param.AppointDeliveryDay = 2;
param.ThirdUrl = "http://img.alicdn.com/xxxx";
param.Extra = "略";
param.Src = "略";
param.StandardBrandId = 111;
param.NeedCheckOut = true;
param.CarVinCode = "BA111111111111111";
param.PresellConfigLevel = 3;
param.NeedRechargeMode = true;
param.AccountTemplateId = "122112";
param.PresellDeliveryType = 1;
param.WhiteBackGroundPicUrl = "http://aaaa";
param.LongPicUrl = "http://aaaa";
param.AfterSaleService = "damaged_order_return": "1";
param.SellChannel = 0;
param.StartSaleType = 0;
param.MaterialVideoId = "vaaaa";
param.PickupMethod = "0";
param.SizeInfoTemplateId = 101;
param.SubstituteGoodsUrl = "https://xxx.xxx.xxx";
param.SaleChannelType = "sameAsOffline";
param.StoreId = 12345;
param.MainProductId = 3121213121212;
param.SaleLimitId = 123;
param.NamePrefix = "钛钢木质耳饰";
param.ReferencePrice = 12300;
param.MainImageThreeToFour = "img_url1|img_url2|img_url3";
param.IsC2bSwitchOn = true;
param.MicroAppId = "abcde";
param.IsAutoCharge = false;
param.ShortProductName = "新品牛肉干";
param.WithSkuType = true;
param.NameSuffix = "36.9度";
param.UseBrandName = false;
param.PriceHasTax = "1";
param.BizKind = 2;
param.IsEvaluateOpened = false;
param.CompanyId = 12345;
param.IsSecondHandDigital = false;
param.RecommendIds = {"category_recommend_id":"qwert12345"};
param.ShowCheckoutEntry = true;
param.PickupPrepareTime = 2;
param.HomeInstallServiceTemplateId = 123456;
param.IsPlatformSelfOperation = false;
param.OriginProductId = 0;
var response = request.Execute<ProductAddV2Response>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:110102128 | 不支持Open操作{*}，请前往电脑端进行管理 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260115 | 品牌与货品不一致，请选择货品关联的品牌:{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215115 | 实物母蟹单只蟹重和实物公蟹单只蟹重只可输入数字且最多可保留一位小数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220146 | 规格填写不符合要求,规格值{*}单位{*}不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101010 | 不能同时支持拍卖和竞拍类型 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102110 | 当前商品类型不能编辑 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010326 | 商品创建失败: 因为店铺受到处罚，限制发品，更多请到商家后台奖惩中心查看 | 检查店铺状态后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110215116 | {*}为必填属性，且可选择的属性值不包括{*}，请重新进入页面补充 | 具体参考https://op.jinritemai.com/docs/question-docs/92/1679 |
| 50002 | 业务处理失败 | isv.business-failed:110101030 | 门店当前状态不允许发品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310006 | 奖品SKU价格必须为0 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250116 | 需求资质的非卖品商品详情必须为空 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240109 | 主商品是非区域库存时，子商品不能是区域库存商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215105 | 属性值“{*}”不在“{*}”的最新可选范围，请删除后重新选择 | 具体参考https://op.jinritemai.com/docs/question-docs/92/2649 |
| 50002 | 业务处理失败 | isv.business-failed:110102121 | 不支持部分修改{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310108 | 该商品类型暂不支持供货价字段 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371015 | 无法修改商品主图 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220019 | 商品创建失败: 规格「xxx」对应的规格值存在非法字符，请修改后重试； | 自定义文本禁止包含非法字符，请检查入参 |
| 50002 | 业务处理失败 | isv.business-failed:110220158 | 规格名称含有emoji等特殊字符,请修改后重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320117 | 子商品{*}的sku状态不可用 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220013 | SKU分类值填写错误，请使用正确分类 | 请参考SKU分类枚举值，再次检查入参是否正确 |
| 50002 | 业务处理失败 | isv.business-failed:110320135 | 子商品{*}配置在『切组合商品』白名单中，不允许配置为子商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270138 | 商品创建失败: 仅普通商品可以设置预售 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270165 | {*}只能使用一次 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220111 | 一个条形码({*})不应该对应两个商家编码({*})({*}) | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215012 | 商品创建失败: 类目属性「*」长度过长，请修改后重试； | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260107 | 海关申报要素：品名、规格型号、用途等不可含有#号符 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260150 | 分销品备案信息有误，备案原产国为空，请重新备案 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260152 | SKU 清关方式不一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330109 | 类目不支持大件商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270114 | 券码生成方式和可核销次数禁止修改 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220153 | 规格值的备注:{*} 长度不能大于{*},请修改后重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220136 | 手机充值商品只支持单规格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330102 | 请修改“售后服务“，该类目已不再支持该售后政策 | 具体参考https://op.jinritemai.com/docs/question-docs/92/2748 |
| 50002 | 业务处理失败 | isv.business-failed:2010058 | 商品创建失败: 商品不存在 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101133 | 短标题不能为空 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260112 | sku不能重复关联货品信息，货品id={*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310115 | 划线价需高于售卖价{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280105 | 自动充值商品对应的提取方式必须是充值直连 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101103 | {*}仅支持虚拟、普通商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371002 | 无法修改规格价格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101144 | 非拍卖店铺，商品类型不合法 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010050 | 商品创建失败: 店铺需要绑定 | 完成账号绑定 |
| 50002 | 业务处理失败 | isv.business-failed:2010999 | 2010999:商品创建失败: 系统错误，请重试 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110270159 | 不支持创建实物(需要物流)商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101142 | 您未订购无忧服务，商品不可启用无忧服务 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320112 | 子商品:{*},已关联{*}个商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215128 | 属性 {*} 填写信息不正确 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010340 | 2010340:商品创建失败: 当前商品使用的品牌未关联当前类目，请切换品牌或者前往商家资质中心补全品牌资质信息，之后再上架商品。 | 检查参数后重试 |
| 60000 | 触发限流，请稍后重试 | isp.traffic-limited:2010401 | 商品创建失败：接口限流 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220134 | 时效SKU现货+预售模式只能选择一种现货时 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220129 | 规格图片和规格值数量不匹配 | 请检查参数spec_pic中图片的数量和spec_info中第一层规格项的值数量是否一致，具体参考https://op.jinritemai.com/docs/question-docs/92/2198 |
| 50002 | 业务处理失败 | isv.business-failed:110280016 | 定金找货时间必须是{*}-{*}天 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101139 | 非商家类型无法修改成商家产品类型 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270135 | 商品创建失败: 请补充卡券信息 | 当前提取方式下，请补充卡券信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260007 | 绑定货品参数错误: 一个商品只可绑定一种类型货品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101123 | 结构化标题-{*}不能为空 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260140 | 您绑定的货品id：{*}未质检通过，不可启用无忧服务 | 请检查入参信息 |
| 20000 | 系统错误 | isp.service-error:2010001 | 商品创建失败: 系统错误 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:110371020 | 无法修改规格图 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101148 | 非竞拍店铺，商品类型不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330113 | 本类目必须选择过敏包退服务 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101169 | 备注中含有特殊符号或emoji表情，请去除后再重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110230002 | 商品创建失败: sku规格值不存在 | 请检查sku规格信息 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010003 | 商品创建失败: 缺少参数 | 请重新进入页面进行补充 |
| 50002 | 业务处理失败 | isv.business-failed:110310113 | 加工费超出范围，应为0到{*}元之间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010012 | 2010012:商品创建失败: 当前商品的部分SKU库存不得低于活动/达人专属价设置的0，可到营销中心修改对应的活动/达人专属价库存，或直接修改当前商品库存数。 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110210016 | 当前类目不支持奖品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102118 | 主品信息不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270143 | 省钱卡必须选择售后退改规则 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260120 | SKU 供应商不一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010109 | 2010109:当前类目未开通主图3:4上传功能，请删除主图3:4 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110320101 | 组套商品Sku其子商品不支持部分为货品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310123 | {*}必须设置参考价与凭证 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330107 | 非跨境商品不支持选择红屁屁无忧 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102131 | AppSource异常 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102126 | 当前接口不支持发布编辑{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250106 | 商品创建失败: 当前类目未开通主图3：4上传功能，请删除主图3：4 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010069 | 2010069:商品创建失败: 商品重复创建 | 已经铺货的商品ID为product_id |
| 50002 | 业务处理失败 | isv.business-failed:110330112 | 当前店铺类型不支持选择过敏包退服务 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010044 | 此类目已调整升级，请重新选择类目进行商品发布 | 请重新选择类目进行商品发布，具体参考https://op.jinritemai.com/docs/question-docs/92/2882 |
| 50002 | 业务处理失败 | isv.business-failed:110310119 | 设置参考价时须提供相关凭证 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320001 | 组合商品无法直接上线 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101176 | {*}，暂不支持修改商品类型 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010318 | 2010318:商品创建失败: 当前商品选择的品牌信息已过期，请更新品牌资质信息，或更换商品品牌后，再提交商品发布。 | 当前商品选择的品牌信息已过期，请更新品牌资质信息，或更换商品品牌后，再提交商品发布。 |
| 50002 | 业务处理失败 | isv.business-failed:110102134 | {*}只允许通过营销中心创建 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101156 | 定制类商品，只能在对应的店铺以及类目下发品 | 请参考当前商品发布规则:https://op.jinritemai.com/docs/api-docs/14/1614 判断是否支持创建定制类商品 |
| 50002 | 业务处理失败 | isv.business-failed:110240113 | 跨境商品请选择区域库存 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310122 | 以下商品类型(闪购、拍卖、竞拍、组套)暂不支持配置参考价 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220154 | {*}含有emoji等特殊字符,请修改后重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110107003 | 110107003:商品创建失败: 当前价格或商品起购件数不符合平台要求 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110270167 | 重量支持范围：0.000001kg ~ 9999.999999kg，请重新设置 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371013 | 无法下架商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102002 | 商品审核中，不可更新 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3274 |
| 50002 | 业务处理失败 | isv.business-failed:110101102 | 过时更新，无需再同步 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371014 | 无法修改商品白底图 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320116 | 类目组合关系错误 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220148 | 规格填写不符合要求,规格值{*}必须填写整数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270137 | 商品创建失败: 物流信息单位不合法 | 请检查SKU入参物流信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270171 | 卡券有效期结束时间限制 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220161 | 规格填写不符合要求,规格值{*} measure_info字段为空或不合法 | 请检查参数spec_info.spec_values values.measure_info是否有传正确的值 |
| 50002 | 业务处理失败 | isv.business-failed:110215010 | 商品创建失败: 类目属性「*」存在属性值「*」含有连续相同字母，请修改后重试； | 自定义类目属性值禁止输入连续多个相同字母 |
| 50002 | 业务处理失败 | isv.business-failed:110371005 | 无法修改库存类型 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371019 | 无法修改商品价格 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010501 | 商品创建失败: 发布诊断失败 | 补充参数 |
| 50002 | 业务处理失败 | isv.business-failed:110310102 | 标称金重过大，范围在0.01到{*}之间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102115 | 非卖品只能通过营销中心操作 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310107 | 参考价需大于等于最高售卖价且小于最高售卖价{*}倍 | 请检查参考价参数reference_price和sku价格参数spec_price.price，具体请参考https://op.jinritemai.com/docs/question-docs/92/3299 |
| 50002 | 业务处理失败 | isv.business-failed:110215120 | 属性值重复 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215129 | 属性 {*} 成分含量不能小于 {*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371008 | 无法修改发货方式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250008 | 尺码模板校验不通过 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280103 | 当前类目或者商家不支持设置自动充值 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220144 | 规格填写不符合要求,规格值{*}信息缺失,请刷新页面重新填写 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310126 | 当前类目商品必须设置今日金价 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3689 |
| 50002 | 业务处理失败 | isv.business-failed:110280002 | 商家未开通在线支付，无法上架在线支付商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280009 | 该类目的商品暂不支持货到付款支付方式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101135 | 省钱卡类商品只能在指定店铺下发布 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101154 | 商品创建失败: 选择定制小程序必须开启定制商品开关 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215114 | 手机充值业务三个必填类目属性（地区、面值、运营商）需要进行填写 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270133 | 请填写物流信息 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110210018 | 当前类目不支持非卖赠品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310012 | {*}暂不支持设置参考价 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220122 | 请填写SkuId商品编码 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101110 | {*}只支持虚拟商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320120 | 该商品正在参加搭配，请前往<a href='{*}' target='_blank'>搭配页</a>删除数据后，再进行组套切换，搭配ID：{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260101 | 存在sku未绑定货品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320102 | 子商品库存类型不完全是区域库存 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310130 | 当前店铺不支持设置基础金价 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320134 | 组套商品Sku其子商品货品类型必须一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270110 | 运费模板不存在 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270109 | 合作商品不支持指定店铺 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240104 | 阶梯库存数量不能小于0 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270125 | 清关方式填写有误, 只支持{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101129 | {*}不支持组套 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250126 | 商品创建失败: 您上传的商品主图存在重复，请核对后重新上传 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102122 | 不支持部分修改{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101138 | 非货品销售信息无法修改成货品销售信息 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220124 | 商家编码存在重复 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260146 | 未找到货品备案信息，请重新备案 | 请检查入参信息 |
| 20000 | 系统错误 | isp.service-error:2010202 | 商品创建失败: 获取类目配置失败 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110310014 | 定金找货价格必须是整数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310118 | sku价格值范围限制 | 具体参考https://op.jinritemai.com/docs/question-docs/92/1727 |
| 50002 | 业务处理失败 | isv.business-failed:110101190 | 渠道商品处于上架状态，下架后才可删除 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270155 | 教育闭环履约商品只支持无需物流配送及电子交易凭证 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101104 | {*}不能设置为虚拟商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101114 | outProductId或者outerProductId已经存在 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3356 |
| 50002 | 业务处理失败 | isv.business-failed:110290103 | 最多支持配置1个{*}的网页url | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320113 | {*}暂不支持切组合商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270152 | 预售发货信息校验未通过 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101163 | 商品创建失败: SubstituteGoodsUrl不合法 | 请检查域外商品链接 |
| 50002 | 业务处理失败 | isv.business-failed:110220016 | 商品创建失败: 规格规格对应的规格值[*]仅包含特殊字符，请修改并输入有效信息； | 自定义规则值禁止纯字符输入 |
| 50002 | 业务处理失败 | isv.business-failed:110330114 | 本类目不支持选择过敏无忧服务 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330120 | 商家不支持 {*} 权益 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220106 | 规格填写不符合要求,[{*}]中[{*}]中已有同义的规格值，为避免消费者误解，请选择库内已有值 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270144 | 省钱卡售后退改规则必须为随时退或过期退 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270180 | 暂不支持该发货模式 | 具体参考https://op.jinritemai.com/docs/question-docs/92/2984 |
| 50002 | 业务处理失败 | isv.business-failed:110207004 | 请勿使用外部图片，请使用素材中心 | 具体参考https://op.jinritemai.com/docs/question-docs/92/2365 |
| 50002 | 业务处理失败 | isv.business-failed:110220105 | {*}仅允许创建一个SKU，请设置单个SKU | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260151 | 分销品备案信息有误，备案货源地为空，请重新备案 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330115 | 非跨境商品不支持选择过敏无忧 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270136 | 物流信息类型不合法 | 请检查参数delivery_infos. info_type，目前只支持info_type="weight" |
| 50002 | 业务处理失败 | isv.business-failed:110260114 | 该商品中货品未设置采购价，请先联系对应小二设置采购价 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240018 | 仓无效 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220119 | 规格值不能超过{*}个 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310109 | 该类目价格范围为{*} - {*}元，请规范标价行为 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220149 | 规格填写不符合要求,规格值{*}必须填写小数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270163 | 自领取之日起有效天数不可超过365天 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250136 | 存在审批中素材，请等待审批 | 当前还有素材在审批中，无法进行商品编辑，请耐心等待。可以根据/product/detail中返回的product_audit_info .material_audit_status获取素材审批状态，具体参考https://op.jinritemai.com/docs/question-docs/92/3969 |
| 50002 | 业务处理失败 | isv.business-failed:110330118 | 海南免税商品不可选择部分7天无理由类型 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010104 | 商品创建失败: 品牌不合法 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220128 | 暂不支持修改规格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110370101 | 商品属性值存在无效或不合理内容，请正确填写 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3216 |
| 50002 | 业务处理失败 | isv.business-failed:110215125 | 商品创建失败: 当前类型店铺，货号不能为空 | 当前类型店铺，必须传入「货号」类目属性 |
| 50002 | 业务处理失败 | isv.business-failed:110102114 | 货品销售信息已被推送为MPU，不允许编辑 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270154 | 最晚发货时间不得早于下单时间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330121 | 权益 {*} 尚未签约，请到权益中心签约 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240110 | 阶梯库存模式不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220018 | 商品创建失败: 规格「*」对应的规格值「黑色999999999」含有连续相同的数字，请修改后重试； | 自定义规则值禁止输入连续多个相同数字 |
| 50002 | 业务处理失败 | isv.business-failed:110320104 | 分销商品不允许作为组套子商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270179 | 发货时间配置不满足要求 | 具体参考https://op.jinritemai.com/docs/question-docs/92/2412 |
| 50002 | 业务处理失败 | isv.business-failed:110220143 | 规格填写不符合要求,规格{*}样式已调整,请刷新页面重新填写 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010329 | 2010329:商品创建失败: 当前店铺类型下，不支持在该类目发布此品牌商品。您可查看对应“行业管理规范”的入驻方式。请跳转https://zjsms.com/NE7whg4/ | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110260019 | 您的无忧服务未开启，不可绑定云仓货品，请解绑货品或者开启服务 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260144 | SKU货品对应的仓信息缺失 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270111 | 门店库门店数量为0 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270106 | 延迟发货时间配置不符合平台规则 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240020 | 苹果门店只支持区域库存 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101115 | outerProductId和outProductId传参有误 | 具体参考https://op.jinritemai.com/docs/question-docs/92/983 |
| 50002 | 业务处理失败 | isv.business-failed:110371007 | 无法修改发货方式和时间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270140 | 券码信息禁止修改 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215107 | 手机充值卡业务类目属性合法性校验不通过，地区、面值、运营商有固定的选择范围 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260013 | 货品类目需要和商品类目保持一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220130 | 商品规格含有emoji等特殊字符,请修改后重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220116 | 规格名称超过64个字符,请修改后重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371001 | 无法修改规格信息 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010061 | 2010061:商品创建失败: 请求权益信息失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220141 | 规格填写不符合要求,规格项顺序不符合要求[{*}] | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371023 | 不允许修改延迟发货规则 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250123 | 您上传的商品主图存在重复，请核对后重新上传 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3217 |
| 50002 | 业务处理失败 | isv.business-failed:110220132 | 当前商品从现货+预售模式切换，请移除发货时效规 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270105 | 延迟发货时间配置错误，开始时间应该小于结束时间 | 请检查入参信息 |
| 20000 | 系统错误 | isp.service-error:2010206 | 商品创建失败: 查询品牌库失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:110215106 | 商品创建失败: 属性「xxx」填写与计量单位信息不匹配，属性值填写范围[xxx] | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260011 | 该店铺只支持云仓模式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240115 | 库存类型含有区域库存，数据异常，请使用OpenApi进行库存编辑 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330105 | 跨境、海免商品不支持设置坏损包退 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010316 | 商品创建失败: 必须支持7天无理由退货 | 检查参数后重试，具体参考https://op.jinritemai.com/docs/question-docs/92/3703 |
| 50002 | 业务处理失败 | isv.business-failed:110270168 | 重量数值支持范围：0.0001 ~ 9999.999，请重新设置 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215117 | 类目属性为空，请检查 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110210103 | 当前类型商品，暂不支持修改类目 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110290104 | {*}还不支持配网页url | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101111 | 前缀匹配失败，当前未能自动填充，请商家至抖店PC端/APP端后台编辑商品标题前缀 | 前缀匹配失败，当前未能自动填充，请商家至抖店PC端/APP端后台编辑商品标题前缀 |
| 50002 | 业务处理失败 | isv.business-failed:110220147 | 规格填写不符合要求,规格值{*}中的{*}需要从{*}中选择 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270150 | 延迟发货时间点不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220118 | 最多支持{*}组商品规格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260103 | 组套子商品不允许修改货品类型 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371009 | 无法修改发货时间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250128 | 商品创建失败: 主图3：4比例要求3:4 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240112 | 前置质检单库存模式:仅支持普通库存 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101145 | 商品创建失败: “商品标题”不可含有换行符 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280019 | 商品创建失败: 当前类目每次至少购买数最多只能设置为1，请同时关注最小购买数变化对sku价格的影响 | 商品发布时不允许设置起购数，请检查购买数量限制。如需设置起购、限购数请参考：https://ehome.bytedance.net/djt/apiManage/doc/preview/2439?doc=true |
| 50002 | 业务处理失败 | isv.business-failed:110101188 | 封禁状态不支持上架 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270031 | 商品与门店库解绑，分账比例需要清零 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215124 | {*}属性未填写 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110014001 | 商品创建失败: 系统繁忙，请稍后再试 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:110240103 | 前置质检单库存模式:库存{*} | 请检查入参信息 |
| 20000 | 系统错误 | isp.service-error:2010207 | 商品创建失败: 查询商家资质失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220112 | SKU数量超过{*}上限，请删除任意规格属性项后添加 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310125 | 奥莱商家必须设置参考价与凭证，且凭证类型为吊牌价 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010053 | 商品创建失败: 类目相关信息过期 | 待资质审核通过后再提交 |
| 50002 | 业务处理失败 | isv.business-failed:110210023 | 平台会员商品暂不支持修改类目 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270172 | 业务身份与清关方式不一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320125 | 组合商品类目与子商品类目不一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215123 | 标品管控:类目属性参数必填 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270162 | {*}不支持修改提货方式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110201004 | 您发布的商品不在平台公示的生命周期内，具体可参见&nbsp;<a href='https://school.jinritemai.com/doudian/web/article/109548' target='_blank'>【生鲜】行业管理规范-抖音电商学习中心 (jinritemai.com)</a> | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270156 | 该类目不支持该提取方式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220003 | 教育闭环履约商品，必须绑定关联课程，填写库存，不能使用默认规格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260116 | 货品已经关联sku信息({*})，不能重复关联 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220127 | 阶梯发货模式切换，不允许缺省sku参数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102133 | {*}仅支持在{*}编辑 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101116 | 前缀不匹配 | 具体请参考https://op.jinritemai.com/docs/question-docs/92/2942 |
| 50002 | 业务处理失败 | isv.business-failed:110330108 | 本类目不支持选择红屁屁无忧服务 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310128 | 当前系统升级期间暂不允许修改计价金类目商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101132 | 加油包类商品只能在指定店铺下发布 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220160 | 店铺内条码唯一性校验 | 请检查当前的sku条码参数是否被其他商品使用 |
| 50002 | 业务处理失败 | isv.business-failed:110270113 | 商品创建失败: 类目与账号模版无法匹配 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215011 | 商品创建失败: 类目属性「*」存在属性值「*」含有连续相同的数字，请修改后重试； | 自定义类目属性值禁止输入连续多个相同数字 |
| 50002 | 业务处理失败 | isv.business-failed:110220107 | 勾选套装后，套装数量不能为空且数值需大于 0(sku code = {*}) | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010005 | 商品创建失败: 无访问权限 | 输入正确参数 |
| 50002 | 业务处理失败 | isv.business-failed:110260106 | 商品参加活动中无法更改绑定关系 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260137 | 当前sku不支持绑定货品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280007 | 在线支付不需要选择验证方式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270169 | 请填写提货方式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102112 | 运营类目权限校验失败 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280109 | 奖品商品仅支持下单减库存 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240107 | {*}，不可修改库存类型 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101147 | 商品创建失败: 请补充商品标题 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320119 | 商品正在参加活动，请先取消再进行转换。活动名称: {*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260124 | SKU 品牌所在地不一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110104115 | 本类目不可传Vin码 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102120 | 无法直接通过该接口创建或编辑{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320107 | 子商品{*}是{*}，不支持组合商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110502009 | [*]非素材中心url | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215122 | 属性“{*}”不在当前类目的最新可选范围，请删除后重新选择 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110207008 | 素材中心url不合法 | 具体参考https://op.jinritemai.com/docs/question-docs/92/1716 |
| 50002 | 业务处理失败 | isv.business-failed:110270005 | 店铺或类目不支持分账 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 商品创建失败: 读取失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110260153 | SKU 商家仓不一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220145 | 规格填写不符合要求,规格值{*}单位名称{*}或单位id{*}不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101153 | 参数错误，请选择正确的[商品类型]类目属性 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310103 | 奖品商品售卖价必须为0元 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101152 | 当前类目限制发虚拟商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270151 | 预约发货时间范围0-{*},请重新填写 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240015 | 奖品不支持阶梯库存 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371006 | 无法修改物流信息 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250118 | 每个类目有对应所支持的尺码模版子类型，当前尺码模板子类型不支持当前类目 | 尺码模板子类型template_sub_type有[clothing(服装)、undies(内衣)、shoes(鞋靴类)、children_clothing(童装)]，可以根据接口/product/getProductUpdateRule	<br>中返回的component_template_rule .support_template_sub_type获取当前类目的模版子类型 |
| 50002 | 业务处理失败 | isv.business-failed:110101137 | 商家产品类型不可切换 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270013 | 当前商品不允许配置延迟发货时间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270108 | 券码可使用次数大于1时，每单限购1件 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270158 | 手机充值类目商品暂不支持物流和核销 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101140 | 非竞拍店铺，商品类型不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371021 | 无法修改库存类型 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220131 | Sku数据异常 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220117 | 当前商品大于三级规格，请使用sell_properties参数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270160 | 核销商品必须为虚拟商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010055 | 2010055:商品创建失败: 因服务器升级，商品价格展示可能异常，请修改价格后重试 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110215133 | 标品品牌[{*}]与品牌参数[{*}]不一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310124 | APP端暂不支持参考价，请前往电脑端进行操作 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215118 | 属性值不存在， propertyId:{*}（当前属性为枚举可输入属性，但是diy_type为0） | 具体参考https://op.jinritemai.com/docs/question-docs/92/3693；https://op.jinritemai.com/docs/question-docs/92/3990 |
| 50002 | 业务处理失败 | isv.business-failed:110260136 | {*}组套子品不允许修改商货绑定关系 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310137 | 标称金重单位格式不正确，请检查：{*} | 具体参考https://op.jinritemai.com/docs/question-docs/92/3942 |
| 50002 | 业务处理失败 | isv.business-failed:110215111 | 类目属性必填校验，部分必填属性未填写 | [xxx证书编号]等目前属于资质属性，在一定条件下需要填写该属性，目前还未提供相关规则接口，请先填写相关属性，具体参考https://op.jinritemai.com/docs/question-docs/92/590 |
| 50002 | 业务处理失败 | isv.business-failed:110260121 | SKU 请选择正确的计量单位 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280106 | 不支持该支付方式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215102 | 商品创建失败: 类目属性[xx]中含有emoji等特殊字符，请检查后重试 | 平台限制：自定义文本中理论上不允许出现任何emoji字符，请检查入参后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110330106 | 类目不支持设置坏损包退 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270161 | 生活娱乐充值只支持虚拟商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250121 | 尺码表需包含所有规格中的尺码，请补充尺码 | 请检查尺码模版中选择的尺码值selectedSize需要包含商品对应尺码规格所选的所有规格值，例如商品规格尺码大小有xl、xxl，那么尺码模版selectedSize也需要包含xl、xxl |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010317 | 商品创建失败: 品牌受限 | 补充参数 |
| 50002 | 业务处理失败 | isv.business-failed:110101146 | 商品创建失败: “短标题”不可含有换行符 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240116 | 跨境商品不支持单个商品设置多个仓 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010346 | 2010346:商品创建失败: 门店未绑定区域仓 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110280107 | 商家未开通货到付款，无法上架货到付款商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010201 | 商品创建失败: 获取类目信息失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220109 | 规格图片长宽比非1:1 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3074 |
| 40004 | 非法的参数 | isv.parameter-invalid:4 | 参数错误 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110280024 | 商品创建失败: 每次至少购买数不能超过10 | 商品发布时允许设置的最大起购数为10，请检查购买数量限制 |
| 50002 | 业务处理失败 | isv.business-failed:110280102 | 自动充值商品不允许修改为非自动充值商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320123 | 组合商品发货模式、发货时间必须与所有子品一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220151 | 规格填写不符合要求,规格值{*}中{*}数值须不高/低于:{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102106 | 暂不支持发布计价金类目商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320118 | 商品当前状态暂不支持切组合商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280112 | 商品起售件数不能超过累计限购件数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320111 | 至少保证一个组合套餐中的子商品数量大于等于2，请返回修改。 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240019 | 仓类型与商品清关方式不匹配 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260141 | 您关联的货品不是云仓自流转发货货品，请联系客服排查 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102119 | 主商品{*}，不允许绑定子商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371011 | 无法修改商品标题 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220123 | Sku编码不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310013 | 货品价格必须大于0，请先设置货品价格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010304 | 2010304:商品创建失败: 超出测试店铺可创建商品数量上限，请删除未使用商品后再试 | 清理无用的商品后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110250124 | 商品创建失败: 第1张参考价凭证图中包含非法链接地址（如外部跳转链接、从外部直接复制过来的图片链接等），请修改 | 必须使用素材中心URL，请检查图片链接是否正确 |
| 50002 | 业务处理失败 | isv.business-failed:110102125 | 当前接口不支持{*}创建 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270132 | 门店库不支持分账 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101121 | 结构化标题名称不匹配 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270030 | 门店暂未开通财经帐号，无法添加至分账门店库 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010339 | 商品创建失败: 存在审批中素材，请等待审批 | 存在审批中素材，请等待审批 |
| 50002 | 业务处理失败 | isv.business-failed:110371102 | 商品正在参加平台活动，暂不支持切组合商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101136 | 无权限创建商家产品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220110 | 规格设置必须与面值、地区、运营商3个属性保持一致，请检查规格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260142 | 您未开启无忧服务，组套子商品中存在云仓发货商品id：{*}，请修改子商品或开启服务 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310105 | 商品价格小于{*}元，无法使用预售交易；请调整发货模式或重新设置SKU价格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101174 | 主商品信息不能为空 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101109 | {*}只支持普通商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220133 | 时效规格须按照时间排序 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220135 | 时效SKU预售模式末级规格须为时效规格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310117 | 为了提高商品转化，划线价需高于商品规格最高价{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371024 | 无法修改sku信息 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240014 | 奖品不绑定货品不支持区域库存 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310106 | 价格不匹配，请等正在运行的改价任务结束后再次尝试改价 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320122 | 当前商品是组合商品的子商品，不支持切组合商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220120 | 酒类商品净含量必填且必须大于 0(sku code = {*}) | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280104 | {*}不支持自动充值 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250127 | 图片长宽比非1:1 | 具体参考https://op.jinritemai.com/docs/question-docs/92/1682 |
| 50002 | 业务处理失败 | isv.business-failed:110280114 | 限购值最大可设置{*} | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 商品创建失败: 非法参数 | 输入正确参数 |
| 50002 | 业务处理失败 | isv.business-failed:110240117 | 未查询到保税仓/海关仓信息，请检查 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101118 | 结构化标题-{*}长度不匹配 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240102 | 库存数量支持范围：0-{*} | 具体参考https://op.jinritemai.com/docs/question-docs/92/3861 |
| 50002 | 业务处理失败 | isv.business-failed:110260123 | SKU 货源地不一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371016 | 无法修改商品信息 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220101 | {*}时效规格不存在 | 当前商品的发货模式需要传时效规格，请检查参数spec_info中是否存在时效规格 |
| 50002 | 业务处理失败 | isv.business-failed:110310127 | 当前类目商品不支持设置今日金价 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240021 | 当前商品因为设置了商品维度的活动库存，暂不支持创建渠道商品。 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280116 | 商品价格必选含税 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215130 | 属性 {*} 成分含量和不能超过 {*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310104 | 奖品参考价必须在3.00￥到50000.00￥之间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110205003 | 价格校验拦截 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3291 |
| 50002 | 业务处理失败 | isv.business-failed:110240101 | {*}不能有库存 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270006 | 当前商品类型为虚拟商品，提取方式暂不支持使用物流模版 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260125 | 多个 cargoSku 绑定了同一个货品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260108 | 组套子商品不允许解绑货品 | 请检查入参信息 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010101 | 商品创建失败: 资质不合法 | 请上传版权页图 |
| 50002 | 业务处理失败 | isv.business-failed:110210021 | 商品创建失败: 该商品对应的类目已处于禁发状态，需先修改商品对应类目为合适类目 | 类目已被平台禁发，请修改类目 |
| 50002 | 业务处理失败 | isv.business-failed:110270141 | 券码信息禁止修改 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310114 | 当前计算得出的价格过高，暂时不支持 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110290102 | 最多支持上传{*}张{*}图片 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101189 | 封禁状态不支持下架 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320136 | 子商品不能是组合商品本身 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260122 | SKU 原产地不一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330122 | 权益code {*} 不支持 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270009 | 预售商品不支持设置发货时间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320124 | 组合商品发货模式、发货时间必须与所有子品一致 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220126 | 教育闭环履约商品发布之后不能修改规格信息，如需修改请新建一个sku | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270131 | 类目不支持多账号充值 | 具体参考https://op.jinritemai.com/docs/question-docs/92/2458 |
| 50002 | 业务处理失败 | isv.business-failed:110270019 | sku重量信息必填 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102111 | 当前商品类型不能进行部分编辑 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:99 | 商品创建失败：图片上传错误 | 建议接入素材中心 |
| 50002 | 业务处理失败 | isv.business-failed:110215126 | 属性 {*} 填写信息不正确 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260020 | 无忧组合商品的子品必须都是无忧商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010011 | 商品创建失败: 新建商品失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110270107 | 当前商家不支持第三方发券方式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101119 | 结构化标题-{*}code不匹配 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010203 | 2010203:商品创建失败: 获取商品信息失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220142 | 规格填写不符合要求:第一层规格要求填写[{*}] | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110207001 | 商品创建失败: 不存在该尺码模板,请重新创建尺码模板 | 不存在该尺码模板,请重新创建尺码模板 |
| 50002 | 业务处理失败 | isv.business-failed:110320109 | {*}不允许绑定多货品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102127 | 不支持移动端操作{*}，请前往电脑端进行管理 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220152 | {*}含有emoji等特殊字符,请修改后重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220113 | sku数量和规格组合数不匹配，请重新选择规格 | 具体参考https://op.jinritemai.com/docs/question-docs/92/2516 |
| 50002 | 业务处理失败 | isv.business-failed:110320108 | 当前组合商品中子商品“{*}”目前处于{*}状态，暂不支持该组合商品上架 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270170 | 卡券有效期范围限制 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320121 | 『{*}』商品暂不支持切组合商品 | 请检查入参信息 |
| 20000 | 系统错误 | isp.service-error:2010024 | 商品创建失败: 保存素材失败 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110102124 | 无法直接通过该接口创建或编辑{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010021 | 2010021:商品创建失败: 更新库存数失败: 幂等ID重复 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110320110 | 组合商品不同规格中子商品成分不能完全相同 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270174 | 券码有效期需在2038年之前 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270148 | 本类目不可选择「不支持退」 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310131 | 创建改价任务失败，请一定重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220012 | 至少包含一个主售款sku | 请参考SKU分类枚举值，再次检查入参是否正确 |
| 50002 | 业务处理失败 | isv.business-failed:110260110 | 当前货品无法被绑定 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240108 | 主商品是区域库存时，子商品不能是非区域库存商品 | 请检查入参信息 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010321 | 商品创建失败: 缺少属性 | 重新进入页面补充 |
| 50002 | 业务处理失败 | isv.business-failed:110260149 | 分销品备案信息有误，备案服务商仓为空，请重新备案 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280003 | 商品创建失败: 当前价格或商品起购件数不符合平台要求 | 防止商家设置低价高起购策略引流，对不同的商品价格采取不同的起购数限制（以SKU最低价为准） |
| 50002 | 业务处理失败 | isv.business-failed:110220103 | 手机充值商品规格和类目属性必须一一对应 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310116 | 售卖价需在商品规格最低价{*}和最高价{*}范围内 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215103 | {*}属性填写不符合规范:标品管控要求：{*},实际填写：{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220155 | {*}规格名称超过64个字符,请修改后重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101131 | 短标题必须在{*}~{*}个字 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310120 | 该参考价凭证类型不支持 | 可以根据/product/getProductUpdateRule接口中返回的reference_price_rule获取当前类目可以选的参考价凭证类型 |
| 50002 | 业务处理失败 | isv.business-failed:110270128 | 定制类商品发货时间仅支持48小时以上 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330116 | 本类目必须选择过敏无忧服务 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010204 | 商品创建失败: 调用成功，但填充返回数据时失败,无影响 | 无影响，可忽略 |
| 50002 | 业务处理失败 | isv.business-failed:110220137 | 规格填写不符合要求:支持填写[{*}],实际填写[{*}] | 规格项需要符合sku标准化限制，请检查规格参数，可以根据/product/getProductUpdateRule中product_spec_rule获取当前类目的规格限制，product_spec_rule. required_spec_details则为必选的规格 |
| 50002 | 业务处理失败 | isv.business-failed:110102132 | {*}仅支持在{*}编辑 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320114 | 子商品{*}无备案信息，不支持组合商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215009 | 商品创建失败: 类目属性*仅包含特殊字符，请修改并输入有效信息； | 自定义类目属性值禁止纯字符输入 |
| 50002 | 业务处理失败 | isv.business-failed:110310121 | 奖品供货价格必须在0.01￥到50000.00￥之间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270012 | 阶梯发货商品不支持设置现货发货时间 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240106 | 设置区域库存时，普通库存数须为0 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110104128 | 即时零售卡券商品必填门店库及使用条件 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215121 | {*}最多选择{*}项 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260148 | 分销品备案信息有误，备案清关方式错误，请重新备案 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110216002 | 退货策略权限错误 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220157 | 规格名称不能重复，请核对 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110290105 | {*}的网页url最多{*}个字符 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270118 | 退改规则不可更改 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215013 | 类目属性「{}」存在非法字符，请修改后重试； | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280111 | 每次限购件数不能超过累计限购件数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101149 | 未命中商品名称前缀推荐规则，name_prefix字段应该置空 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3282 |
| 50002 | 业务处理失败 | isv.business-failed:110220150 | 规格填写不符合要求,规格值{*}必须填写{*}位小数数值 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215119 | 根据属性的valueId从属性库查到了属性值，但是查到的属性值名和传入的属性值名不匹配 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101043 | 抖音极速版商家不支持商品分组功能 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260135 | 货品不在所选仓内，请重新绑定货品后重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010347 | 2010347:商品创建失败: 门店未绑定运费模板 | 检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:2010002 | 商品创建失败: 请求超时 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:110270029 | 门店id没有认领过不允许导入 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101134 | 该商家只能创建商家产品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:7 | 业务处理失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220125 | 必须要有outerSkuId | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110210102 | 商品创建失败: 抖音极速版商品只能在指定类目下发布 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320106 | 组套子商品（{*}）为一段奶粉商品，主商品类目必须为一段奶粉 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280108 | 当前商品最大购买件数为{*}，请修改 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310112 | 当前商品必须设置规格：{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280101 | {*}仅支持在线支付 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102103 | 运营没有配置类目权限，暂不允许操作 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280113 | 商品起售件数不能超过每次限购件数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270164 | 请填写正确的使用次数 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280115 | 该售卖终端不支持 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220014 | 110220014:商品创建失败: 当前类目/店铺不支持SKU分类信息填写 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110215135 | 商品创建失败: 属性 * 仅支持时间戳格式输入，例如：2006-01-02 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220138 | 规格填写不符合要求:[{*}]必填 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250015 | 素材信息校验未通过 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270112 | 商品创建失败: “账号模板”为必选项，请补充 | 请补充账号模版id |
| 50002 | 业务处理失败 | isv.business-failed:110215131 | 属性 {*} 的属性值数量与属性类型不匹配，时间戳类型的属性需要有2个属性值，分别代表开始时间和结束时间 | 具体参考https://op.jinritemai.com/docs/question-docs/92/2178 |
| 50002 | 业务处理失败 | isv.business-failed:110215110 | 该类目需要基于标品发布商品，根据关键属性在该类目未找到标品，请先新建标品或调整类目。 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3075 |
| 50002 | 业务处理失败 | isv.business-failed:110330103 | 不支持的坏损包退类型 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310129 | 基础金价设置不正确 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220017 | 商品创建失败: 规格*对应的规格值「*」含有连续相同字母，请修改后重试； | 自定义规则值禁止输入连续多个相同字母 |
| 50002 | 业务处理失败 | isv.business-failed:110330119 | 定制类商品必须选择[支持七天无理由，定制类不支持] | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010348 | 2010348:商品创建失败: 门店未绑定绑定限售模板 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010107 | 2010107:商品创建失败: 当前价格或商品起购件数不符合平台要求 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110101108 | 该类目必须为虚拟商品 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010320 | 商品创建失败: 品牌必填 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110330104 | 商品默认支持坏损包退 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102123 | open侧暂不允许设置{*} | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101117 | 非拍卖店铺，商品类型不合法 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010319 | 商品创建失败: 使用的品牌没有授权 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110101001 | 供销商品已停用 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320008 | 子商品{*}包含时效SKU，暂不支持组合 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270149 | 承诺发货时间不在合理范围内 | 具体参考https://op.jinritemai.com/docs/question-docs/92/1680 |
| 50002 | 业务处理失败 | isv.business-failed:110270157 | 当前商品类型为实物商品，提取方式需使用物流模版 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270022 | 清关方式不支持切换 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270142 | 省钱卡必须选择第三方平台生成的方式 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101101 | 暂不支持普通、虚拟商品类型之间的切换 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101122 | 结构化标题规则长度不匹配 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220121 | 条形码不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101107 | 非白名单商家，不能选择店铺是否展示 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240017 | 存在可售库存不为0的商品（删除草稿可查看实时库存），请到货品库存页手动调拨为0后再试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260145 | cargoSku 货品信息缺失 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260139 | 存在规格未绑定货品，不可启用无忧服务 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220139 | 规格填写不符合要求,允许填写:[{*}],实际填写:[{*}] | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371012 | 无法修改商品描述 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101151 | 商品创建失败: “推荐语”不可含有换行符 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010022 | 商品创建失败: 商品状态错误 | 输入正确参数 |
| 50002 | 业务处理失败 | isv.business-failed:110220102 | {*}不能设置多级规格 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371010 | 无法修改售卖渠道 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270166 | 请填写重量 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3943 |
| 50002 | 业务处理失败 | isv.business-failed:110101150 | 商品标题最长不能超过[*]个汉字（[*]个字符）,商品标题最短不能低于[*]个汉字（[*]个字符） | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102130 | {*}只能来自营销侧发布 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270121 | {*}仅支持包邮 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330117 | 跨境商品不可选择部分7天无理由类型 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110240111 | {*}不支持混合库存 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110216001 | 退货策略不存在 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220114 | 单张规格图大小≤5M内 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330111 | 本类目不支持选择过敏包退服务 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102113 | 货品销售信息为空 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371017 | 需平台审核后方能上架 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101120 | 结构化标题-{*}值不匹配 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220104 | 商品至少需要一个sku | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220140 | 规格填写不符合要求,规格{*}不支持填写备注 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010063 | 2010063:商品创建失败: 当前店铺在架商品量已达上限，暂无法创建商品，详细规则可查看商品数限额实施细则 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110215127 | 属性 {*} 填写信息不正确 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270153 | 商品已配置预约发货，暂不支持配置延迟发货 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110280110 | 当前类目不支持定金找货 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110102129 | 当前商品仅支持在百应后台编辑 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110320105 | {*}暂不支持切组合商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371018 | 无法删除商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220156 | {*}对应的规格值不能重复，请核对 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270115 | 券码生成方式和可核销次数禁止修改 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270126 | 海南会员购模式只支持邮寄 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260138 | 绑定了货品的商品不支持OPEN编辑 | 具体参考https://op.jinritemai.com/docs/question-docs/92/3677 |
| 50002 | 业务处理失败 | isv.business-failed:110240105 | 设置商品库存，现货库存数必须大于阶梯库存数，请修改 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110371101 | 商品正在参加平台活动，暂不支持切组合商品 | 请检查入参信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010020 | 商品创建失败: 资质类属性必填拒绝 | 输入正确参数 |
| 50002 | 业务处理失败 | isv.business-failed:110270127 | 商品创建失败: 仅普通商品可以设置阶梯 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330123 | 商品创建失败: 该商品不支持配置三包服务承诺 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330126 | 商品创建失败: 三包服务售后天数不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110290001 | 商品创建失败: 请上传包装标签图 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220162 | 商品创建失败: SKU状态设置错误 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330125 | 商品创建失败: 三包服务类型不合法 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220166 | 商品创建失败: 属性填写不符合要求,面料材质属性值含量必须全填写或全不填写，且材质不能重复, 请至抖店商品编辑页面刷新页面重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310138 | 商品创建失败: 当前店铺未配置基础金价，请前往[抖店后台-商品工具-基础金价]中设置 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220164 | 商品创建失败: 属性填写不符合要求,聚1酯纤维必须与measure_info匹配, 请至抖店商品编辑页面刷新页面重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110330124 | 商品创建失败: 该商品必须配置三包服务承诺 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110201001 | 商品创建失败: 未查询到该类目 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110207005 | 资质图上传失败 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220165 | 商品创建失败: 属性填写不符合要求,面料材质属性值含量之和要求为100%, 请至抖店商品编辑页面刷新页面重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110200024 | 业务错误 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110360101 | 商品创建失败: 品牌不存在或者未审核通过，id:2071040077 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110200118 | 商品创建失败: 发布当前刀具类商品，需要签署《刀具合规经营承诺函》，前往https://fxg.jinritemai.com/ffa/w/contract/manage完成承诺书阅读并签署后方可发布商品。 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101213 | 商品创建失败: “价格”最大值超出系统限制 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220163 | 商品创建失败: 属性:生产日期填写不符合要求,2024-01-01至2024-01-01,2024-01-01至2024-01-01必须填写YYYY-MM-DD日期格式, 请至抖店商品编辑页面刷新页面重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110220167 | 商品创建失败: SKUCODE超出长度限制128字符 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101212 | 商品创建失败: “外部ID”超出长度限制255字符 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101211 | 商品创建失败: “电话”超出长度限制64字符 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110215137 | 110215137:商品创建失败: 属性“生产日期“的填写格式已升级，属性值“2023-12-05“不符合填写格式要求，请点击属性输入框重新填写 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110103017 | 110103017:商品创建失败: 重复创建渠道商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110405001 | 110405001:商品创建失败: 商品标题/商品图片中描述旗舰店与店铺实际类型不一致，请修改，规则详见<a href="https://school.jinritemai.com/doudian/web/topic/qHST8xyaynjf?rank="_blank">【商品发布】店铺类型不一致易错问题指南 </a>。 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110210101 | 110210101:商品创建失败: 类目必填 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270020 | 110270020:商品创建失败: sku重量不能大于99999.999g | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250103 | 110250103:商品创建失败: 该类目商品需上传完整尺码表信息，目前缺失规格：身高，请补充！<a href='https://school.jinritemai.com/doudian/web/article/aHUksMr1bwtF' target='_blank'>规则介绍</a> | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110250110 | 110250110:商品创建失败: 表格内的尺码和选中尺码列表不匹配 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101219 | 110101219:商品创建失败: “价格”超出系统最小值限制 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110270184 | 110270184:商品创建失败: 重量数值超出最大范围99999.999999 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101124 | 110101124:商品创建失败: 非跨境商家仅可创建非跨境商品，跨境商家仅可创建跨境商品 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110260155 | 110260155:商品创建失败: 当前未开通云仓服务，请解除商品与货品绑定关系后重试 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110103015 | 110103015:商品创建失败: 外部商品ID重复 | 110103015:商品创建失败: 外部商品ID重复 |
| 50002 | 业务处理失败 | isv.business-failed:110102146 | 110102146:商品创建失败: 当前店铺近期发品量过多，1小时内仅限创建20000个商品 | 110102146:商品创建失败: 当前店铺近期发品量过多，1小时内仅限创建20000个商品 |
| 50002 | 业务处理失败 | isv.business-failed:110250142 | 110250142:商品创建失败: 尺码信息中身高(cm)请输入数字 | 110250142:商品创建失败: 尺码信息中身高(cm)请输入数字 |
| 50002 | 业务处理失败 | isv.business-failed:110220188 | 110220188:商品创建失败: 规格:规格填写不符合要求,5g*部分必填模块信息缺失,请至抖店商品编辑页面刷新页面重试 | 110220188:商品创建失败: 规格:规格填写不符合要求,5g*部分必填模块信息缺失,请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110210104 | 110210104:商品创建失败: 展会拍卖类目仅能发布拍卖商品 不支持使用该类目 | 110210104:商品创建失败: 展会拍卖类目仅能发布拍卖商品 不支持使用该类目 |
| 50002 | 业务处理失败 | isv.business-failed:110211010 | 110211010:商品创建失败: 货品绑定数超上限 | 110211010:商品创建失败: 货品绑定数超上限 |
| 50002 | 业务处理失败 | isv.business-failed:110310004 | 110310004:商品创建失败: 商品价格应不低于货品价格 | 110310004:商品创建失败: 商品价格应不低于货品价格 |
| 50002 | 业务处理失败 | isv.business-failed:110220191 | 110220191:商品创建失败: 营养成分表计量单位必填,请至抖店商品编辑页面刷新页面重试 | 110220191:商品创建失败: 营养成分表计量单位必填,请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110104130 | 110104130:商品创建失败: 当前类型商品暂不支持定制属性 | 110104130:商品创建失败: 当前类型商品暂不支持定制属性 |
| 50002 | 业务处理失败 | isv.business-failed:110405002 | 110405002:商品创建失败: 当前店铺类型下, 使用/品牌，需要去资质中心上传品牌资质。去上传>https://zjsms.com/NEvh47E/ | 110405002:商品创建失败: 当前店铺类型下, 使用品牌，需要去资质中心上传品牌资质。去上传>https://zjsms.com/NEvh47E/ |
| 50002 | 业务处理失败 | isv.business-failed:110210105 | 110210105:商品创建失败: 类目为店铺所在行业限制经营类目，不允许发布商品 | 110210105:商品创建失败: 类目为店铺所在行业限制经营类目，不允许发布商品 |
| 50002 | 业务处理失败 | isv.business-failed:2010306 | 2010306:商品创建失败: 阶梯发货模式商品不能设置区域库存 | 2010306:商品创建失败: 阶梯发货模式商品不能设置区域库存 |
| 50002 | 业务处理失败 | isv.business-failed:110101200 | 110101200:商品创建失败: 前缀匹配失败：请检查品牌前缀是否必填或者是否有误 | 110101200:商品创建失败: 前缀匹配失败：请检查品牌前缀是否必填或者是否有误 |
| 50002 | 业务处理失败 | isv.business-failed:110250113 | 110250113:商品创建失败: 标题注释不能超过50个字 | 110250113:商品创建失败: 标题注释不能超过50个字 |
| 50002 | 业务处理失败 | isv.business-failed:110102160 | 110102160:商品创建失败: 今日店铺已新增10000个商品，已达到上限，单店铺单日最多新增*个商品（包含审核不通过商品）。今日已不可再发布商品，请次日0点后再重试。请注意，草稿发布、首次上架等均为新增商品。 | 110102160:商品创建失败: 今日店铺已新增10000个商品，已达到上限，单店铺单日最多新增*个商品（包含审核不通过商品）。今日已不可再发布商品，请次日0点后再重试。请注意，草稿发布、首次上架等均为新增商品。 |
| 50002 | 业务处理失败 | isv.business-failed:110102163 | 110102163:商品创建失败: 您的店铺今日已达到发品上限，请明天0点后再试 | 110102163:商品创建失败: 您的店铺今日已达到发品上限，请明天0点后再试 |
| 50002 | 业务处理失败 | isv.business-failed:110102162 | 110102162:商品创建失败: 单店铺上限*，您的店铺中已有50000个售卖中商品，<span style='color: #FF3B52;'>已达到上限</span>，暂时无法上架新的商品，请先下架部分商品，以释放上架额度。如有疑问请查看 <a href='https://school.jinritemai.com/doudian/web/article/aJKTnzaZtC1h'>管控说明</a> | 110102162:商品创建失败: 单店铺上限*，您的店铺中已有50000个售卖中商品，<span style='color: #FF3B52;'>已达到上限</span>，暂时无法上架新的商品，请先下架部分商品，以释放上架额度。如有疑问请查看 <a href='https://school.jinritemai.com/doudian/web/article/aJKTnzaZtC1h'>管控说明</a> |
| 50002 | 业务处理失败 | isv.business-failed:110102161 | 110102161:商品创建失败: 当前一级类目近期发品量过多，超过当天发品上限，建议合理调整店铺商品数量，如有发品需求，可前往抖店工作台继续发品。 | 110102161:商品创建失败: 当前一级类目近期发品量过多，超过当天发品上限，建议合理调整店铺商品数量，如有发品需求，可前往抖店工作台继续发品。 |
| 50002 | 业务处理失败 | isv.business-failed:110250016 | 110250016:商品创建失败: 不支持动图发品，请更换为JPG、GPEG、PNG格式图片 | 110250016:商品创建失败: 不支持动图发品，请更换为JPG、GPEG、PNG格式图片 |
| 50002 | 业务处理失败 | isv.business-failed:110250163 | 110250163:商品创建失败: 该类目商品暂不支持发布主图视频 | 110250163:商品创建失败: 该类目商品暂不支持发布主图视频 |
| 50002 | 业务处理失败 | isv.business-failed:110280120 | 110280120:商品创建失败: 三方卡密商品每次限购件数必须为1 | 110280120:商品创建失败: 三方卡密商品每次限购件数必须为1 |
| 50002 | 业务处理失败 | isv.business-failed:110101015 | 110101015:商品创建失败: 虚拟商品需开通支付宝才可创建/编辑 | 110101015:商品创建失败: 虚拟商品需开通支付宝才可创建/编辑 |
| 50002 | 业务处理失败 | isv.business-failed:110600000 | 110600000:商品创建失败: 单店铺上限50000，您的店铺中已有50009个上架商品，<span style='color: #FF3B52;'>超出9个</span>，暂时无法上架新的商品，请先下架部分商品，以释放上架额度。 | 110600000:商品创建失败: 单店铺上限50000，您的店铺中已有50009个上架商品，<span style='color: #FF3B52;'>超出9个</span>，暂时无法上架新的商品，请先下架部分商品，以释放上架额度。 |
| 50002 | 业务处理失败 | isv.business-failed:110102136 | 110102136:商品创建失败: 连锁店门店，仅支持发布子品 | 110102136:商品创建失败: 连锁店门店，仅支持发布子品 |
| 50002 | 业务处理失败 | isv.business-failed:110330130 | 110330130:商品创建失败: 无法选择不提供上门安装服务模式 | 商品创建失败: 无法选择不提供上门安装服务模式 |
| 50002 | 业务处理失败 | isv.business-failed:110250165 | 110250165:商品创建失败: 尺码表中的尺码大小需与尺码规格保持一致 | 110250165:商品创建失败: 尺码表中的尺码大小需与尺码规格保持一致 |
| 50002 | 业务处理失败 | isv.business-failed:110210108 | 110210108:商品创建失败: 识别到商品类目填写错误,请及时修改类目 | 110210108:商品创建失败: 识别到商品类目填写错误,请及时修改类目 |
| 50002 | 业务处理失败 | isv.business-failed:110210106 | 110210106:商品创建失败: 该商品仅限定向邀约商家发布，若您在邀约范围内请发布至【生活娱乐充值>加油服务】类目 | 110210106:商品创建失败: 该商品仅限定向邀约商家发布，若您在邀约范围内请发布至【生活娱乐充值>加油服务】类目 |
| 50002 | 业务处理失败 | isv.business-failed:110101222 | 110101222:商品标题中缺少【品牌】 | 110101222:商品标题中缺少【品牌】 |
| 50002 | 业务处理失败 | isv.business-failed:110220212 | 110220212:商品创建失败: 规格值名称「★推荐试用【凝神静气3合1】」中不能出现Emoji等特殊符号: ★ | 110220212:商品创建失败: 规格值名称「★推荐试用【凝神静气3合1】」中不能出现Emoji等特殊符号: ★ |
| 50002 | 业务处理失败 | isv.business-failed:110102165 | 110102165:商品创建失败: 保存草稿失败，您的店铺每日最多可新增1000个草稿，今日已达到上限，请明日再操作 | 110102165:商品创建失败: 保存草稿失败，您的店铺每日最多可新增1000个草稿，今日已达到上限，请明日再操作 |
| 50002 | 业务处理失败 | isv.business-failed:110220213 | 110220213:商品创建失败: 规格备注「C12款白--1026」中不能出现重复标点: -- | 110220213:商品创建失败: 规格备注「C12款白--1026」中不能出现重复标点: -- |
| 50002 | 业务处理失败 | isv.business-failed:110220214 | 110220214:商品创建失败: 其他材质含量需<=15%，请修改 | 110220214:商品创建失败: 其他材质含量需<=15%，请修改 |
| 50002 | 业务处理失败 | isv.business-failed:110220215 | 110220215:商品创建失败: 其他材质填写存在重复 | 110220215:商品创建失败: 其他材质填写存在重复 |
| 50002 | 业务处理失败 | isv.business-failed:110104143 | 110104143:商品创建失败: 备货时长校验未通过：备货时长不在[1, 30]范围内 | 110104143:商品创建失败: 备货时长校验未通过：备货时长不在[1, 30]范围内 |
| 50002 | 业务处理失败 | isv.business-failed:110270198 | 110270198:商品创建失败: “券码生成方式”异常，当前商品不支持售卖，请重新发布商品。<a href='https://bytedance.larkoffice.com/docx/Zu3vdyKHdo3Y3Kx3kKZcHPkQnTd' target='_blank'>点击查看详情</a> | 110270198:商品创建失败: “券码生成方式”异常，当前商品不支持售卖，请重新发布商品。<a href='https://bytedance.larkoffice.com/docx/Zu3vdyKHdo3Y3Kx3kKZcHPkQnTd' target='_blank'>点击查看详情</a> |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
