# /product/detail

> 中文说明：查询商品详情  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/56>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/detail |
| 中文名称 | 查询商品详情 |
| 文档目录 | 商品API |
| Article ID | 56 |
| 文档版本 | V12.01 |
| 官方更新时间 | 2026/7/3 15:51:51 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 8000 |

## 使用说明

使用场景：查询抖店商品详情信息
1、支持使用抖店商品id
2、商品外部开发者自定义编码查询

## 权限包

- 商品 / 商品信息查询（packageType=1）；适用应用类目：跨境金服、装修设计、客服工具-微应用、微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、跨境供应链服务、商家自研模版、商家自研组件、撮合服务商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、数据应用、打单发货-微应用、自研微组件、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、虚拟充值、即时零售商家自研、直播工具、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- p测试权限组 / 场景包测试（packageType=10）；适用应用类目：服务市场按次订购-模板服务、服务市场按次订购-微应用、内部测类目
- 内部二方开放 / 搜广内部定向权限包（packageType=1）
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用
- 定向权限 / 定向权限包（packageType=1）
- 商品 / aigc商品管理（packageType=10）；适用应用类目：AIGC视频创作
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电
- 店铺 / 千川权限包（packageType=10）
- 开放平台 / 盲盒互动（服务商）（packageType=1）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.detail | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | false | 0 | 3558192687276554544 | 商品ID，抖店系统生成，店铺下唯一；长度19位 | - | - |
| 0 | out_product_id | out_product_id | false | 2 | dy001 | 外部商家编码，商家自定义字段 | - | - |
| 0 | show_draft | show_draft | false | 2 | false | true：读取草稿数据；false：读取线上数据；不传默认为false | - | - |
| 0 | store_id | store_id | false | 0 | 1111420330 | 门店ID，不建议小时达一期用，即时零售单店版，无需使用 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_id | product_id | - | 99 | 3539925204033339668 | 商品ID，抖店系统生成，店铺下唯一；长度19位。 | 39 | R1 |
| 0 | product_id_str | product_id_str | - | 2 | 3539925204033339668 | 商品ID（字符串类型），抖店系统生成，店铺下唯一；长度19位。 | 39 | R1 |
| 0 | out_product_id | out_product_id | - | 99 | 133321 | 【即将废弃】外部商家编码，商家自定义字段。推荐使用，outer_product_id字段 | 39 | R1 |
| 0 | outer_product_id | outer_product_id | - | 2 | dy001 | 外部商家编码，商家自定义字段，支持最多 255个字符 | 39 | R1 |
| 0 | open_user_id | open_user_id | - | 99 | "" | 【已废弃】open应用id | 94 | R1 |
| 0 | name | name | - | 2 | 夏季男生白色短袖 | 商品标题，规则：至少输入8个字（16个字符）以上~输入30个字（60个字符）以内。；标题不规范会引起商品下架，影响您的正常销售，详见商品发布规范：https://school.jinritemai.com/doudian/web/article/101800?from=shop_article | 39 | R1 |
| 0 | description | description | - | 2 | <p><img src=\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153427046487984750183_661ff1f563801d97f382e0ac114a09e6_sx_805824_www933-933\" style=\"max-width:100%;\"/><img src=\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153426724709337920183_dd825b6f3c1bc43ec26faea488447709_sx_1059417_www1080-933\" style=\"max-width:100%;\"/><img src=\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153465487927217040183_d963cc36ef6e66c0cba70e4cb2188f88_sx_436442_www1920-1080\" style=\"max-width:100%;\"/></p> | 商品详情，最大支持50张图片，单张详情图宽高比不超2000*2000px，大小5M内，仅支持jpg/jpeg/png格式，返回HTML格式；注意：商品详情不规范，会引起商品下架，影响您的正常销售：https://school.jinritemai.com/doudian/web/article/101800?from=shop_article | 39 | R1 |
| 0 | delivery_method | delivery_method | - | 99 | 7 | 承诺发货时间，单位是天; 不传则默认为2天，当presell_type为0或2均只支持传入2；当presell_type为1时支持可选值为: 2、3、5、7、10、15； | 39 | R1 |
| 0 | cdf_category | cdf_category | - | 2 | "" | 海南免税，海关限购分类编码，仅海淘商品有值返回。 | 54 | R1 |
| 0 | status | status | - | 99 | 1 | 商品在店铺中状态: 0-在线；1-下线；2-删除；详见商品状态机：https://op.jinritemai.com/docs/question-docs/92/2070 | 39 | R1 |
| 0 | spec_id | spec_id | - | 99 | 1737144307943485 | 商品规格，新增商品是全局唯一，注意：有部分历史存量商品可能存在规格复用 | 39 | R1 |
| 0 | check_status | check_status | - | 99 | 1 | 商品审核状态: 1-未提交；2-待审核；3-审核通过；4-审核未通过；5-封禁；7-审核通过待上架；详见商品状态机：https://op.jinritemai.com/docs/question-docs/92/2070 | 39 | R1 |
| 0 | mobile | mobile | - | 2 | 15677775555 | 【已废弃】手机号 | - | R1 |
| 0 | brand_id | brand_id | - | 99 | 596120136 | 【已废弃】品牌id，推荐使用standard_brand_id字段，通过【/brand/list】获取，无品牌id商品返回默认值：596120136； | 39 | R1 |
| 0 | is_sub_product | is_sub_product | - | 4 | true | 是否是组合商品的子商品；true-是，false-不是； | 59 | R1 |
| 0 | draft_status | draft_status | - | 99 | 2 | 草稿状态；0-无草稿,1-未提审,2-待审核,3-审核通过,4-审核未通过。详见：https://op.jinritemai.com/docs/question-docs/92/2070 | 39 | R1 |
| 0 | category_detail | category_detail | - | 5 | - | 类目详情；商品类目id可使用【/shop/getShopCategory】查询 | - | R1 |
| 1 | category_detail.first_cid | first_cid | - | 99 | 20117 | 一级类目id | 72 | R1 |
| 1 | category_detail.second_cid | second_cid | - | 99 | 22139 | 二级类目id | 72 | R1 |
| 1 | category_detail.third_cid | third_cid | - | 99 | 28901 | 三级类目id | 72 | R1 |
| 1 | category_detail.fourth_cid | fourth_cid | - | 99 | 31800 | 四级类目id | 72 | R1 |
| 1 | category_detail.first_cname | first_cname | - | 2 | 本地生活服务 | 一级类目名 | 72 | R1 |
| 1 | category_detail.second_cname | second_cname | - | 2 | 餐饮美食卡券 | 二级类目名 | 72 | R1 |
| 1 | category_detail.third_cname | third_cname | - | 2 | 甜品/冰淇淋/咖啡/冷饮 | 三级类目名 | 72 | R1 |
| 1 | category_detail.fourth_cname | fourth_cname | - | 2 | 咖啡 | 四级类目名 | 72 | R1 |
| 0 | pay_type | pay_type | - | 99 | 1 | 【已废弃】支持的支付方式：0货到付款 1在线支付 2两者都支持 | 94 | R1 |
| 0 | recommend_remark | recommend_remark | - | 2 | 真的很好啊 | 【已废弃】商家推荐语 | 94 | R1 |
| 0 | extra | extra | - | 2 | {\"category_detail\":{\"first_cid\":20117,\"second_cid\":22139,\"third_cid\":28901,\"fourth_cid\":31800,\"first_cname\":\"本地生活服务\",\"second_cname\":\"餐饮美食卡券\",\"third_cname\":\"甜品/冰淇淋/咖啡/冷饮\",\"fourth_cname\":\"咖啡\",\"is_leaf\":true},\"class_quality\":\"\",\"is_publish\":1,\"quality_opId\":\"7132044312682119463\",\"quality_report\":\"\"} | 额外信息，如资质 | 28 | R1 |
| 0 | is_create | is_create | - | 99 | 【已废弃】 | 【已废弃】无业务意义 | 94 | R1 |
| 0 | create_time | create_time | - | 2 | 2022-07-04 13:29:47 | 商品创建时间，时间格式：yyyy-mm-dd hh:mm:ss | 39 | R1 |
| 0 | update_time | update_time | - | 2 | 2022-07-08T16:29:01+08:00 | 商品更新时间，时间格式：yyyy-mm-dd hh:mm:ss | 39 | R1 |
| 0 | pic | pic | - | 3 | ["https://p9-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153427046487984750183_661ff1f563801d97f382e0ac114a09e6_sx_805824_www933-933",     "https://p6-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153429136760998540183_e3d0578bd8b499ff9dee11a0fd040070_sx_889253_www3072-3072",     "https://p9-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153465665006472060183_1d037ea9f83818829d3a502df6135ae4_sx_280269_www1080-1080"] | 商品主图；最多支持5张图片；仅支持png，jpg，jpeg格式，宽高比例为1:1（至少600*600px），大小5M内 | 39 | R1 |
| 0 | product_format | product_format | - | 2 | {"货号":"8888"} | 【即将废弃】推荐使用product_format_new；属性名称\|属性值 之间用\|分隔, 多组之间用^分开 | 39 | R1 |
| 0 | spec_pics | spec_pics | - | 3 | - | 规格图片 | - | R1 |
| 1 | spec_pics.spec_detail_id | spec_detail_id | - | 99 | 1695459998447656 | id | 39 | R1 |
| 1 | spec_pics.pic | pic | - | 2 | temai/b637513c50b994f4c89de56a17886caca5d6569awww800-800 | 规格图片uri | 39 | R1 |
| 0 | spec_prices | spec_prices | - | 3 | - | 商品sku详情 | - | R1 |
| 1 | spec_prices.operator | operator | - | 2 | 商家 | sku下架操作人 | - | - |
| 1 | spec_prices.reason | reason | - | 2 | 商家下架 | sku下架原因 | - | - |
| 1 | spec_prices.sku_picture_url | sku_picture_url | - | 3 | ["img_url"] | SKU图URL | - | R1 |
| 1 | spec_prices.spec_model_code | spec_model_code | - | 3 | ["123"] | 规格型号编码 | - | R1 |
| 1 | spec_prices.ship_time_type | delivery_time_type | - | 2 | 2 | 1 相对时间 ships in N days，2 固定日期 fixed date。注意仅在现货发货且开启sku时效时有值。 | - | - |
| 1 | spec_prices.ship_time | delivery_delay_day | - | 2 | "2025-09-01" | 发货时间，如果是相对时间，返回 N。如果是固定日期，返回格式为yyyy-MM-dd，例如 "2025-09-01"。注意仅在现货发货且开启sku时效时有值。 | - | - |
| 1 | spec_prices.commit_code | apple_commit_code | - | 2 | 3000 | commit code | - | - |
| 1 | spec_prices.barcodes | barcodes | - | 3 | 111111 | 条形码 | - | R1 |
| 1 | spec_prices.multi_time_stocks | multi_time_stocks | - | 3 | - | 时效库存 | - | R1 |
| 2 | spec_prices.multi_time_stocks.stock_num | stock_num | - | 99 | 500 | 库存数 | - | - |
| 2 | spec_prices.multi_time_stocks.time_desc | time_desc | - | 2 | 5天内发 | 时效描述 | - | - |
| 2 | spec_prices.multi_time_stocks.time_type | time_type | - | 99 | 5 | 时效 | - | - |
| 1 | spec_prices.sku_status | sku_status | - | 4 | true | sku状态 true上架 false下架 | - | - |
| 1 | spec_prices.sku_classification_type | sku_classification_type | - | 2 | "main_sale_single_product" | sku分类信息 | 39 | - |
| 1 | spec_prices.sell_properties | sell_properties | - | 3 | - | sku对应的销售属性信息 | - | R1 |
| 2 | spec_prices.sell_properties.value_spec_detail_id | value_spec_detail_id | - | 99 | 123123123123 | 规格值id | 39 | - |
| 2 | spec_prices.sell_properties.remark | remark | - | 2 | 非常黄 | 备注 | 39 | - |
| 2 | spec_prices.sell_properties.value_name | value_name | - | 2 | 黄色 | 规格值名称 | 39 | - |
| 2 | spec_prices.sell_properties.value_id | value_id | - | 99 | 12345678910 | 销售属性值id，只有在规格由属性库下发时，这个才有值。 默认为0 | 39 | - |
| 2 | spec_prices.sell_properties.property_name | property_name | - | 2 | 颜色 | 规格项名称 | 39 | - |
| 2 | spec_prices.sell_properties.perperty_id | property_id | - | 99 | 0 | 销售属性id，只有在规格由属性库下发时，这个字段才有值。 默认为0 | 39 | - |
| 1 | spec_prices.cargo_info | cargo_info | - | 5 | - | 货品信息（国内） | - | R1 |
| 2 | spec_prices.cargo_info.source_type | source_type | - | 99 | 1 | 货品类型，1-分销货品，2-云仓自流转货品，6-云仓非自流转货品 | 28 | - |
| 2 | spec_prices.cargo_info.cargo_id | cargo_id | - | 2 | 777777777777777 | 货品id | 28 | - |
| 1 | spec_prices.gold_process_charge | gold_process_charge | - | 99 | 12300 | Sku的黄金加工费，单位：分 | 28 | - |
| 1 | spec_prices.sku_id | sku_id | - | 99 | 1737398770243598 | 规格id；抖店系统生成，商品id下唯一。 | 39 | R1 |
| 1 | spec_prices.out_sku_id | out_sku_id | - | 99 | 0 | 外部商家skui_id编码，商家自定义字段；推荐使用outer_sku_id字段 | 39 | R1 |
| 1 | spec_prices.outer_sku_id | outer_sku_id | - | 2 | dy001-1 | 外部商家skui_id编码，商家自定义字段 | 39 | R1 |
| 1 | spec_prices.spec_detail_ids | spec_detail_ids | - | 3 | [1695459998494734,1695459998494766] | 规格id列表,多规格以”,“分隔； | 39 | R1 |
| 1 | spec_prices.stock_num | stock_num | - | 99 | 13 | 可售库存；当前现货可售库存； | 39 | R1 |
| 1 | spec_prices.price | price | - | 99 | 102 | 商品价格；单位：分 | 50 | R1 |
| 1 | spec_prices.code | code | - | 2 | aaa | 编码 | 39 | R1 |
| 1 | spec_prices.step_stock_num | step_stock_num | - | 99 | 0 | 阶梯库存，规则详见名称解释：https://op.jinritemai.com/docs/guide-docs/202/170 | 55 | R1 |
| 1 | spec_prices.prom_stock_num | prom_stock_num | - | 99 | 0 | 活动库存，，规则详见名称解释：https://op.jinritemai.com/docs/guide-docs/202/170 | 55 | R1 |
| 1 | spec_prices.prom_step_stock_num | prom_step_stock_num | - | 99 | 0 | 活动阶梯库存，，规则详见名称解释：https://op.jinritemai.com/docs/guide-docs/202/170 | 55 | R1 |
| 1 | spec_prices.spec_detail_id1 | spec_detail_id1 | - | 99 | 1695459998494734 | 【已废弃，无需使用】规格ID | 94 | R1 |
| 1 | spec_prices.spec_detail_id2 | spec_detail_id2 | - | 99 | 1695459998494734 | 【已废弃，无需使用】规格ID | 94 | R1 |
| 1 | spec_prices.spec_detail_id3 | spec_detail_id3 | - | 99 | 0 | 【已废弃，无需使用】规格ID | 94 | R1 |
| 1 | spec_prices.sku_type | sku_type | - | 99 | 0 | sku类型；0-普通库存  1-区域库存  10-阶梯库存 | 55 | R1 |
| 1 | spec_prices.supplier_id | supplier_id | - | 2 | 123 | 供应商编码 | 28 | R1 |
| 1 | spec_prices.promotion_stock_num | promotion_stock_num | - | 99 | 0 | 活动现货库存 | 55 | R1 |
| 1 | spec_prices.promotion_step_stock_num | promotion_step_stock_num | - | 99 | 0 | 活动阶梯库存 | 55 | R1 |
| 1 | spec_prices.customs_report_info | customs_report_info | - | 5 | - | 海关申报要素（仅海淘商品返回信息） | - | R1 |
| 2 | spec_prices.customs_report_info.hs_code | hs_code | - | 2 | 1564564 | 海关代码 | 54 | R1 |
| 2 | spec_prices.customs_report_info.first_measure_qty | first_measure_qty | - | 9 | 1 | 法定第一计量数量 | 54 | R1 |
| 2 | spec_prices.customs_report_info.second_measure_qty | second_measure_qty | - | 9 | 1 | 法定第二计量数量 | 54 | R1 |
| 2 | spec_prices.customs_report_info.first_measure_unit | first_measure_unit | - | 2 | - | 法定第一计量单位 | 54 | R1 |
| 2 | spec_prices.customs_report_info.second_measure_unit | second_measure_unit | - | 2 | - | 法定第二计量单位 | 54 | R1 |
| 2 | spec_prices.customs_report_info.unit | unit | - | 2 | - | 售卖单位 | 54 | R1 |
| 2 | spec_prices.customs_report_info.report_name | report_name | - | 2 | - | 品名 | 54 | R1 |
| 2 | spec_prices.customs_report_info.report_brand_name | report_brand_name | - | 2 | - | 品牌 | 54 | R1 |
| 2 | spec_prices.customs_report_info.usage | usage | - | 2 | - | 用途 | 54 | R1 |
| 2 | spec_prices.customs_report_info.g_model | g_model | - | 2 | - | 规格型号 | 54 | R1 |
| 2 | spec_prices.customs_report_info.bar_code | bar_code | - | 2 | - | 条形码 | 54 | R1 |
| 1 | spec_prices.lock_stock_num | lock_stock_num | - | 99 | 1 | 现货订单锁定库存 | 55 | R1 |
| 1 | spec_prices.lock_step_stock_num | lock_step_stock_num | - | 99 | 1 | 阶梯订单锁定库存 | 55 | R1 |
| 1 | spec_prices.stock_num_map | stock_num_map | - | 8 | {<br>   "1": 10<br>} | 仓ID->库存映射 | 55 | R1 |
| 1 | spec_prices.tax_exemption_sku_info | tax_exemption_sku_info | - | 5 | - | 海南免税sku信息（仅海淘商品返回信息） | - | R1 |
| 2 | spec_prices.tax_exemption_sku_info.is_suit | is_suit | - | 99 | 1 | 是否套装（0 否 1 是） | 54 | R1 |
| 2 | spec_prices.tax_exemption_sku_info.suit_num | suit_num | - | 99 | 10 | 套装数量 | 54 | R1 |
| 2 | spec_prices.tax_exemption_sku_info.volume | volume | - | 99 | 100 | 净含量 | 54 | R1 |
| 1 | spec_prices.presell_delay | presell_delay | - | 99 | 5 | 发货时间（全款预售模式时的发货时间/阶梯模式下阶梯发货时间），9999是当日发、1次日发、2 是48小时发、5、15、45天等。发货时间规则可使用【product/getProductUpdateRule】获取 | 39 | R1 |
| 1 | spec_prices.delivery_infos | delivery_infos | - | 3 | - | SKU物流信息 | - | R1 |
| 2 | spec_prices.delivery_infos.info_type | info_type | - | 2 | weight | 信息类型 | 28 | R1 |
| 2 | spec_prices.delivery_infos.info_value | info_value | - | 2 | 100 | 信息值 | 28 | R1 |
| 2 | spec_prices.delivery_infos.info_unit | info_unit | - | 2 | 当info_type=weight时，支持mg,g,kg三种类型 | 信息计量单位 | 28 | R1 |
| 0 | specs | specs | - | 3 | - | 规格信息，规格项和规格值 | - | R1 |
| 1 | specs.property_id | sell_property_id | - | 99 | 123 | 标准销售属性id | 39 | - |
| 1 | specs.id | id | - | 99 | 1713023986705415 | 【无需使用】规格模版id | 28 | R1 |
| 1 | specs.spec_id | spec_id | - | 99 | 1713023983665214 | 【无需使用】规格id | 28 | R1 |
| 1 | specs.name | name | - | 2 | 颜色 | 销售属性 | 39 | R1 |
| 1 | specs.pid | pid | - | 99 | 1713023986705415 | 【无需使用】规格父id | 28 | R1 |
| 1 | specs.is_leaf | is_leaf | - | 99 | 0 | 是否是销售属性值 | 39 | R1 |
| 1 | specs.values | values | - | 3 | - | 销售属性值 | 28 | R1 |
| 2 | specs.values.value_id | sell_property_value_id | - | 2 | 12 | 标准销售属性值id | 39 | - |
| 2 | specs.values.extra | extra | - | 5 | - | 其他扩展信息：<br>包括度量衡信息等 | - | R1 |
| 3 | specs.values.extra.measure_info | measure_info | - | 5 | - | 度量衡结构化信息 | - | R1 |
| 4 | specs.values.extra.measure_info.values | values | - | 3 | - | 度量衡模块 | - | R1 |
| 5 | specs.values.extra.measure_info.values.value | value | - | 2 | 10 | 度量衡值 | - | - |
| 5 | specs.values.extra.measure_info.values.unit_name | unit_name | - | 2 | g | 度量衡单位名称 | - | - |
| 5 | specs.values.extra.measure_info.values.unit_id | unit_id | - | 99 | 2 | 度量衡单位id | - | - |
| 5 | specs.values.extra.measure_info.values.suffix | suffix | - | 2 | "" | 度量衡后缀 | - | - |
| 5 | specs.values.extra.measure_info.values.prefix | prefix | - | 2 | - | 度量衡前缀 | - | - |
| 5 | specs.values.extra.measure_info.values.module_id | module_id | - | 99 | 123 | 度量衡模块id | - | - |
| 4 | specs.values.extra.measure_info.template_id | template_id | - | 99 | 234 | 度量衡模版id | - | - |
| 3 | specs.values.extra.cpv_path | cpv_path | - | 3 | - | 导航路径信息 | - | R1 |
| 4 | specs.values.extra.cpv_path.cpvid | cpvid | - | 99 | 123 | 导航属性值id | - | - |
| 4 | specs.values.extra.cpv_path.cpid | cpid | - | 99 | 1234 | 导航属性id | - | - |
| 2 | specs.values.id | id | - | 99 | 1695459998447656 | 规格值id | 28 | R1 |
| 2 | specs.values.spec_id | spec_id | - | 99 | 1713023983665214 | 规格ID | 28 | R1 |
| 2 | specs.values.name | name | - | 2 | 红色 | 销售属性值 | 28 | R1 |
| 2 | specs.values.pid | pid | - | 99 | 1695459998447640 | 规格值父id | 28 | R1 |
| 2 | specs.values.is_leaf | is_leaf | - | 99 | 1 | 是否是销售属性值 | 28 | R1 |
| 2 | specs.values.status | status | - | 99 | 1 | 在线状态，-2彻底删除、0在线、1下线、2删除 | 28 | R1 |
| 0 | img | img | - | 2 | https://p9-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153427046487984750183_661ff1f563801d97f382e0ac114a09e6_sx_805824_www933-933 | 头图，主图第一张 | 39 | R1 |
| 0 | presell_type | presell_type | - | 99 | 1 | 预售类型，1-全款预售，0-非预售，2-阶梯库存 | 39 | R1 |
| 0 | maximum_per_order | maximum_per_order | - | 99 | 5 | 单用户下单限购件数 | - | R1 |
| 0 | limit_per_buyer | limit_per_buyer | - | 99 | 5 | 单用户累计限购件数 | - | R1 |
| 0 | minimum_per_order | minimum_per_order | - | 99 | 1 | 用户每次下单至少购买的件数 | - | R1 |
| 0 | quality_list | quality_list | - | 3 | - | 资质信息 | - | R1 |
| 1 | quality_list.quality_key | qualityKey | - | 2 | 3457***9470978 | 资质key | 98 | R1 |
| 1 | quality_list.quality_name | qualityName | - | 2 | 进货凭证 | 资质名称 | 98 | R1 |
| 1 | quality_list.quality_attachments | qualityAttachments | - | 3 | - | 资质链接 | - | R1 |
| 2 | quality_list.quality_attachments.media_type | mediaType | - | 99 | 1 | 1-图片，2-pdf | 98 | R1 |
| 2 | quality_list.quality_attachments.url | url | - | 2 | http://www.byted***.com/YYYY | 资质url | 98 | R1 |
| 0 | logistics_info | logistics_info | - | 5 | - | 跨境物流信息（仅海淘商品返回） | - | R1 |
| 1 | logistics_info.customs_clear_type | customs_clear_type | - | 99 | 1 | 通关模式，1BBC 2BC 3邮关 | 54 | R1 |
| 1 | logistics_info.origin_country_id | origin_country_id | - | 99 | 123 | 原产国id | 54 | R1 |
| 1 | logistics_info.source_country_id | source_country_id | - | 99 | 123 | 货源国id | 54 | R1 |
| 1 | logistics_info.brand_country_id | brand_country_id | - | 99 | 123 | 品牌所在地id | 54 | R1 |
| 1 | logistics_info.tax_payer | tax_payer | - | 99 | 0 | 税金承担方，0商家承担，1用户承担 | 54 | R1 |
| 1 | logistics_info.net_weight_qty | net_weight_qty | - | 9 | 100 | 商品净重 | 54 | R1 |
| 0 | after_sale_service | after_sale_service | - | 2 | {"supply_7day_return":"2"} | 售后服务 | 56 | R1 |
| 0 | price_has_tax | price_has_tax | - | 99 | 0 | 商品价格是否含税 | 54 | R1 |
| 0 | appoint_delivery_day | appoint_delivery_day | - | 99 | 2 | 可预约发货天数 | 39 | R1 |
| 0 | product_format_new | product_format_new | - | 2 | {"1088":[{"Value":0,"Name":"小33学二年级","PropertyId":1088,"PropertyName":"适用学龄段","diy_type":1}],"1319":[{"Value":0,"Name":"1","PropertyId":1319,"PropertyName":"适用地区","diy_type":0}],"1618":[{"Value":0,"Name":"9787218122861","PropertyId":1618,"PropertyName":"ISBN编号","diy_type":0}],"1831":[{"Value":0,"Name":"小学英语看图说话写话二年级","PropertyId":1831,"PropertyName":"书名","diy_type":0}],"2000":[{"Value":34762,"Name":"无","PropertyId":2000,"PropertyName":"作者地区","diy_type":0}],"2229":[{"Value":0,"Name":"1","PropertyId":2229,"PropertyName":"编者","diy_type":0}],"3271":[{"Value":0,"Name":"1","PropertyId":3271,"PropertyName":"出版时间","diy_type":0}],"449":[{"Value":0,"Name":"1","PropertyId":449,"PropertyName":"作者","diy_type":0}],"501":[{"Value":7310,"Name":"否","PropertyId":501,"PropertyName":"是否是套装","diy_type":0}],"855":[{"Value":0,"Name":"陕西人民教育出版社","PropertyId":855,"PropertyName":"出版社名称","diy_type":0}]} | 类目属性 | 39 | R1 |
| 0 | standard_brand_id | standard_brand_id | - | 99 | 121354 | 品牌库brand id，原brand_id代表商标关系id | 39 | R1 |
| 0 | market_price | market_price | - | 99 | 12000 | 划线价 单位分 | 50 | R1 |
| 0 | discount_price | discount_price | - | 99 | 12000 | 售卖价 单位分 | 50 | R1 |
| 0 | car_vin_code | car_vin_code | - | 2 | VIN11111111111111 | 汽车vin码 | 28 | R1 |
| 0 | need_recharge_mode | need_recharge_mode | - | 4 | false | 生活娱乐充值模式 | 60 | R1 |
| 0 | account_template_id | account_template_id | - | 2 | 1 | 多账号充值账号模板 | 60 | R1 |
| 0 | presell_config_level | presell_config_level | - | 99 | 2 | 发货模式：presell_type = 0 现货；presell_type = 2 阶梯；presell_type = 1 && presell_config_level = 0 全款预售；presell_type = 1 && presell_config_level = 1 sku预售；presell_type = 1 && presell_config_level = 2 现货+预售；presell_type = 1 && presell_config_level = 3 新预售 | 39 | R1 |
| 0 | delivery_delay_day | delivery_delay_day | - | 99 | 2 | 现货模式的发货天数；阶梯模式现货部分的发货天数，9999=当日发、1=次日发 | 39 | R1 |
| 0 | presell_delay | presell_delay | - | 99 | 4 | 阶梯模式阶梯部分的发货天数；商品全款预售模式，预售天数 | 39 | R1 |
| 0 | poi_resource | poi_resource | - | 5 | - | 卡券信息 | - | R1 |
| 1 | poi_resource.poi_lib_id | poiLibId | - | 99 | 3526522 | 卡券关联的门店库id | 57 | - |
| 1 | poi_resource.notification | notification | - | 2 | 发码后可核销使用 | 领取须知 | 57 | - |
| 1 | poi_resource.service_num | service_num | - | 2 | 86668888 | 客服电话 | 57 | - |
| 1 | poi_resource.valid_days | valid_days | - | 99 | 7 | 有效期天数 | 57 | - |
| 1 | poi_resource.condition | condition | - | 2 | 仅可在XXX门店范围使用 | 使用条件 | 57 | - |
| 1 | poi_resource.total_can_use_count | total_can_use_count | - | 99 | 1 | 可使用次数 | 57 | - |
| 1 | poi_resource.code_type | code_type | - | 99 | 1 | 券码生成方式 | 57 | - |
| 1 | poi_resource.coupon_return_methods | coupon_return_methods | - | 3 | [1] | 1 随时退+过期自动退，2 不支持退 | 57 | R1 |
| 0 | delay_rule | delay_rule | - | 5 | - | 特殊日期延迟发货规则 | - | R1 |
| 1 | delay_rule.rule_scope | rule_scope | - | 99 | 1 | 生效维度<br>0 无效 1 店铺（此时无法设置商品维度数据） 2 商品维度 99 平台默认（没有设置商品维度时的默认生效数据） | 100 | - |
| 1 | delay_rule.enable | enable | - | 4 | true | 是否开启特殊日期延迟发货 | 100 | R1 |
| 1 | delay_rule.config_type | config_type | - | 99 | 1 | 1 时间点；2 时间范围 | 100 | R1 |
| 1 | delay_rule.config_value | config_value | - | 99 | 1673539199 | 特殊日期延迟发货时间最晚发货时间，时间戳，单位秒 | 100 | R1 |
| 1 | delay_rule.start_time | start_time | - | 99 | 1643040000 | 特殊日期延迟发货时间下单开始时间，时间戳，单位秒 | 100 | R1 |
| 1 | delay_rule.end_time | end_time | - | 99 | 1672502400 | 特殊日期延迟发货时间下单结束时间，时间戳，单位秒 | 100 | R1 |
| 0 | long_pic_url | long_pic_url | - | 2 | https://aaa | 3:4长图url(仅素材中心url有效) | 39 | R1 |
| 0 | sell_channel | sell_channel | - | 3 | [0] | 售卖方式;0:全渠道手售卖,1:仅指定直播间售卖 | - | R1 |
| 0 | freight_id | freight_id | - | 99 | 123 | 运费模版ID | - | R1 |
| 0 | material_video_id | material_video_id | - | 2 | Vaaxxaa | 主图视频ID | - | R1 |
| 0 | pickup_method | pickup_method | - | 2 | 0 | 提取方式新字段，推荐使用。"0": 普通商品-使用物流发货, "1": 虚拟商品-无需物流与电子交易凭证, "2": 虚拟商品-使用电子交易凭证,  "3": 虚拟商品-充值直连 | - | R1 |
| 0 | size_info_template_id | size_info_template_id | - | 99 | 7102988069296423000 | 尺码模板ID | 95 | R1 |
| 0 | white_back_ground_pic_url | white_back_ground_pic_url | - | 2 | https://aaa | 白底图url(仅素材中心url有效) | - | R1 |
| 0 | sale_channel_type | sale_channel_type | - | 2 | sameAsOffline | 销售渠道类型，包括纯电商（onlineOnly）、专柜同款（sameAsOffline），云零售商家（https://fxg.jinritemai.com/ffa/merchant-growth/cloud-retail）可以设置 | - | R1 |
| 0 | store_id | store_id | - | 99 | 103121 | 门店ID | 80 | R1 |
| 0 | main_product_id | main_product_id | - | 99 | 3121213 | 主商品ID | 39 | R1 |
| 0 | sale_limit_id | sale_limit_id | - | 99 | 123 | 限售模板ID | - | R1 |
| 0 | name_prefix | name_prefix | - | 2 | 钛钢木质耳饰 | 系统推荐的标题前缀 | 96 | R1 |
| 0 | product_type | product_type | - | 99 | 0 | 商品类型，0-普通，3-虚拟，6玉石闪购，7云闪购 | 39 | R1 |
| 0 | presell_delivery_type | presell_delivery_type | - | 99 | 0 | 预售发货方式配置 0-预售结束后xx天发货; 1-支付完成后xx天发货 | - | R1 |
| 0 | start_sale_type | start_sale_type | - | 99 | 0 | 审核通过后上架售卖时间配置：0-立即上架售卖 1-放入仓库 | 39 | R1 |
| 0 | reduce_type | reduce_type | - | 99 | 1 | 库存扣减方式，1-拍下减库存 2-付款减库存 | 39 | R1 |
| 0 | presell_end_time | presell_end_time | - | 2 | 2020-02-21 18:54:27 | 预售结束时间，格式2020-02-21 18:54:27，最多支持设置距离当前30天 | - | R1 |
| 0 | weight_value | weight_value | - | 9 | 0 | 重量数值 | 28 | R1 |
| 0 | weight_unit | weight_unit | - | 99 | 0 | 重量单位，0-kg, 1-g | 28 | R1 |
| 0 | reference_price_certificate | reference_price_certificate | - | 5 | - | 参考价凭证 | - | R1 |
| 1 | reference_price_certificate.certificate_type | certificate_type | - | 2 | 1 | 凭证类型;1:"厂商建议零售价",2:"吊牌价",3:"定价",4:"官网零售售价" | 97 | R1 |
| 1 | reference_price_certificate.certificate_urls | certificate_urls | - | 2 | http://www. | 凭证图片url | 97 | R1 |
| 0 | reference_price | reference_price | - | 99 | 12300 | 参考价，单位分 | 97 | R1 |
| 0 | quality_inspection_info | quality_inspection_info | - | 5 | - | 前置质检相关（特定二手商家、特定二手类目使用） | - | R1 |
| 1 | quality_inspection_info.mode | mode | - | 99 | 1 | 1: 单库存模式，只允许售卖一个sku；2: 多库存模式，不限售卖次数 | 28 | - |
| 1 | quality_inspection_info.certificate_code | certificate_code | - | 2 | abc | 质检证书编码 | 28 | - |
| 1 | quality_inspection_info.agency | agency | - | 2 | 123 | 机构编码 | 28 | - |
| 1 | quality_inspection_info.supported | supported | - | 4 | false | 是否勾选支持前置质检 | 28 | - |
| 0 | unit_price_info | unit_price_info | - | 5 | - | 单位价格信息 | - | R1 |
| 1 | unit_price_info.price_rule_type | price_rule_type | - | 99 | 1 | 1：投资金单位价格<br>2：首饰金单位价格 | 28 | - |
| 0 | main_image_three_to_four | main_image_three_to_four | - | 2 | [https://p9-aio.ecombdimg.com/obj/ecom-shop-material/rgKVRhPW_m_a9223a677dc42718d1203bd2165e3bf5_sx_89532_www570-760,https://p3-aio.ecombdimg.com/obj/ecom-shop-material/rgKVRhPW_m_cd15cfb47c3091dea24d2f84d17e2cad_sx_975664_www750-1000,https://p6-aio.ecombdimg.com/obj/ecom-shop-material/rgKVRhPW_m_ed6f9c9914a5a6ff444a25afc71313c3_sx_63512_www570-760] | 商品主图3:4；最多支持5张图片；宽高比例为3:4 | 39 | R1 |
| 0 | is_c2b_switch_on | is_c2b_switch_on | - | 4 | false | 是否支持c2b小程序（特定c2b定制商家使用） | 45 | - |
| 0 | micro_app_id | micro_app_id | - | 2 | abcde | 支持c2b定制时的小程序id（特定c2b定制商家使用） | 45 | - |
| 0 | is_auto_charge | is_auto_charge | - | 4 | false | 是否是自动充值商品 | 28 | - |
| 0 | spu_id | spu_id | - | 99 | 1234 | spu_id 大于0代表有挂载spu | 39 | - |
| 0 | short_product_name | short_product_name | - | 2 | 好吃牛肉干 | 导购短标题，短标题可用于物流打单及商品搜索场景，若未填写，则系统将智能生成最优短标题在商详购买页面展示，说明详见：https://school.jinritemai.com/doudian/web/article/aHUW2MCvHqF3?from=shop_article | 39 | - |
| 0 | after_sale_service_v2 | after_sale_service_v2 | - | 5 | - | 售后服务新结构 | - | R1 |
| 1 | after_sale_service_v2.three_guarantees | three_guarantees | - | 5 | - | 三包服务承诺配置信息 | - | R1 |
| 2 | after_sale_service_v2.three_guarantees.duration | duration | - | 99 | 180 | 售后天数，例如服务类型选择了寄修，并且该参数为180，表示售后180天内支持寄修服务 | 56 | - |
| 2 | after_sale_service_v2.three_guarantees.service_type | service_type | - | 99 | 1 | 服务类型 1-寄修 2-延保 | 56 | - |
| 1 | after_sale_service_v2.is_large_product | is_large_product | - | 99 | 1 | 当前商品是否是大件商品 1-是 | 28 | - |
| 0 | format_update_time | format_update_time | - | 2 | 2021-11-23 10:17:48 | 更新时间，和update_time一样，只是格式不同 | 28 | - |
| 0 | sell_num | sell_num | - | 99 | 123 | 商品销量 | 101 | - |
| 0 | product_audit_info | product_audit_info | - | 5 | - | 商品审核结果 | - | R1 |
| 1 | product_audit_info.material_audit_status | material_audit_status | - | 8 | {  <br>"1": 1<br>} | 素材审核状态，key=素材类型（0-主图视频、1-白底图、4-长图、17-测评视频），value=审核状态（0-初始化 1-审核中 2-审核通过 3-审核不通过） | 28 | R1 |
| 1 | product_audit_info.material_audit_reason | material_audit_reason | - | 3 | - | 素材审核驳回原因 | 39 | R1 |
| 2 | product_audit_info.material_audit_reason.material_type | material_type | - | 2 | 0 | 0-主图视频、1-白底图、4-长图、17-测评视频 | 39 | - |
| 2 | product_audit_info.material_audit_reason.reasons | reasons | - | 3 | ["白底图不符合规范","白底图太黑了"] | 素材类型对应的驳回原因 | 39 | R1 |
| 0 | main_pic_3_4 | main_image_three_to_four | - | 3 | [https://p9-aio.ecombdimg.com/obj/ecom-shop-material/rgKVRhPW_m_a9223a677dc42718d1203bd2165e3bf5_sx_89532_www570-760,https://p3-aio.ecombdimg.com/obj/ecom-shop-material/rgKVRhPW_m_cd15cfb47c3091dea24d2f84d17e2cad_sx_975664_www750-1000,https://p6-aio.ecombdimg.com/obj/ecom-shop-material/rgKVRhPW_m_ed6f9c9914a5a6ff444a25afc71313c3_sx_63512_www570-760] | 商品主图3:4；最多支持5张图片；宽高比例为3:4 | 39 | R1 |
| 0 | shop_category | shop_category | - | 5 | - | 店铺装修分类 | - | R1 |
| 1 | shop_category.leaf_category_ids | leaf_category_ids | - | 2 | 123 | 店铺装修分类叶子类目id | 28 | - |
| 0 | name_suffix | name_suffix | - | 2 | 36.9度 | 标题后缀 | - | - |
| 0 | use_brand_name | use_brand_name | - | 4 | false | 是否勾选使用品牌名 | - | - |
| 0 | new_step_product | new_step_product | - | 4 | true | 新现货+预售商品标识，true-新现货+预售商品 | - | - |
| 0 | is_charity_product | is_charity_product | - | 4 | false | 是否公益商品 | 28 | - |
| 0 | charity_id | charity_id | - | 2 | 123 | 公益项目id | 28 | - |
| 0 | is_evaluate_opened | is_evaluate_opened | - | 2 | false | 测评模块是否打开 | - | - |
| 0 | custom_property | custom_property | - | 5 | - | 定制属性 | - | R1 |
| 1 | custom_property.customPropertyGroups | customPropertyGroups | - | 3 | - | 定制属性组信息 | - | R1 |
| 2 | custom_property.customPropertyGroups.propertyDetail | propertyDetail | - | 3 | - | 属性详细信息 | - | R1 |
| 3 | custom_property.customPropertyGroups.propertyDetail.extra_info | extra_info | - | 5 | - | 属性扩展信息 | - | R1 |
| 4 | custom_property.customPropertyGroups.propertyDetail.extra_info.process_time | process_time | - | 99 | 600 | 处理时间，单位秒 | - | - |
| 3 | custom_property.customPropertyGroups.propertyDetail.name | name | - | 2 | 宰杀 | 商品属性名称 | - | - |
| 2 | custom_property.customPropertyGroups.name | name | - | 2 | 加工方式 | 属性组名称 | - | - |
| 0 | default_process_time | default_process_time | - | 5 | - | 商品默认处理时长 | - | R1 |
| 1 | default_process_time.value | value | - | 99 | 处理时长值 | 处理时间，单位秒 | - | - |
| 0 | is_second_hand_digital | is_second_hand_digital | - | 4 | false | 是否二手数码(成色机) | - | - |
| 0 | delivery_time_sub_type | delivery_time_sub_type | - | 99 | 1 | 发货时间子类型，该值仅在现货发货时效（presellType = 0）下有意义，1 sku维度发货时效，0或者缺省为商品维度发货时效 | - | - |
| 0 | home_install_service_info | home_install_service_info | - | 5 | - | 上门安装服务信息 | - | R1 |
| 1 | home_install_service_info.home_install_service_template_id | home_install_service_template_id | - | 99 | 12345 | 门安装服务模版id | - | - |
| 0 | original_category_detail | original_category_detail | - | 5 | - | 门捷列夫类目详情，临时字段，类目数升级期间使用的字段，主要返回老的类目信息，方便开发者做映射使用，升级结束后字段会下线，下线时间另行通知 | - | R1 |
| 1 | original_category_detail.first_cid | first_cid | - | 99 | 20117 | 一级类目id（临时字段） | 72 | - |
| 1 | original_category_detail.second_cid | second_cid | - | 99 | 22139 | 二级类目id（临时字段） | 72 | - |
| 1 | original_category_detail.third_cid | third_cid | - | 99 | 28901 | 三级类目id（临时字段） | 72 | - |
| 1 | original_category_detail.fourth_cid | fourth_cid | - | 99 | 31800 | 四级类目id（临时字段） | 72 | - |
| 1 | original_category_detail.first_cname | first_cname | - | 2 | 本地生活服务 | 一级类目名（临时字段） | 72 | - |
| 1 | original_category_detail.second_cname | second_cname | - | 2 | 餐饮美食卡券 | 二级类目名（临时字段） | 72 | - |
| 1 | original_category_detail.third_cname | third_cname | - | 2 | 甜品/冰淇淋/咖啡/冷饮 | 三级类目名（临时字段） | 72 | - |
| 1 | original_category_detail.fourth_cname | fourth_cname | - | 2 | 咖啡 | 四级类目名（临时字段） | 72 | - |
| 0 | future_category_detail | future_category_detail | - | 5 | - | 标准类目详情（新类目信息）方便开发者做映射使用，升级结束后字段会下线，下线时间另行通知 | - | R1 |
| 1 | future_category_detail.first_cid | first_cid | - | 99 | 1000007740 | 一级类目id（临时字段） | 72 | - |
| 1 | future_category_detail.second_cid | second_cid | - | 99 | 1000007878 | 二级类目id（临时字段） | 72 | - |
| 1 | future_category_detail.third_cid | third_cid | - | 99 | 1000007926 | 三级类目id（临时字段） | 72 | - |
| 1 | future_category_detail.fourth_cid | fourth_cid | - | 99 | 1000008663 | 四级类目id（临时字段） | 72 | - |
| 1 | future_category_detail.first_cname | first_cname | - | 2 | 黄金珠宝玉石 | 一级类目名（临时字段） | 72 | - |
| 1 | future_category_detail.second_cname | second_cname | - | 2 | 合成宝石 | 二级类目名（临时字段） | 72 | - |
| 1 | future_category_detail.third_cname | third_cname | - | 2 | 合成钻石 | 三级类目名（临时字段） | 72 | - |
| 1 | future_category_detail.fourth_cname | fourth_cname | - | 2 | 裸石 | 四级类目名（临时字段） | 72 | - |
| 0 | category_property_pics | category_property_pics | - | 8 | - | 属性图，如水洗标等，key=属性id | - | R1 |
| 1 | category_property_pics.urls | urls | - | 3 | ["http"] | 属性图链接 | 39 | R1 |
| 0 | correct_size_suggestion | correct_size_suggestion | - | 5 | - | 偏码建议 | - | R1 |
| 1 | correct_size_suggestion.size | size | - | 9 | 0.5 | 建议尺码选大/小 x 码 | - | - |
| 1 | correct_size_suggestion.value_id | value_id | - | 99 | 2 | 偏码建议选项id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/detail?app_key=your_appkey_here&method=product.detail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/detail?app_key=your_appkey_here&method=product.detail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductDetailRequest request = new ProductDetailRequest();
ProductDetailParam param = request.getParam();
param.setProductId("3558192687276554544");
param.setOutProductId("dy001");
param.setShowDraft("false");
param.setStoreId(1111420330L);
ProductDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductDetailRequest();
$param = new ProductDetailParam();
$request->setParam($param);
$param->product_id = "3558192687276554544";
$param->out_product_id = "dy001";
$param->show_draft = "false";
$param->store_id = 1111420330;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductDetailRequest()
param = request.getParams()
param.product_id = "3558192687276554544"
param.out_product_id = "dy001"
param.show_draft = "false"
param.store_id = 1111420330
response = request.execute(accessToken)

```

### go

```go
request := product_detail_request.New()
param := request.GetParams()
param.ProductId = "3558192687276554544"
param.OutProductId = "dy001"
param.ShowDraft = "false"
param.StoreId = 1111420330
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductDetailRequest();
var param = request.BuildParam();
param.ProductId = "3558192687276554544";
param.OutProductId = "dy001";
param.ShowDraft = "false";
param.StoreId = 1111420330;
var response = request.Execute<ProductDetailResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4 | out_product_id未找到或商品已删除 | 请检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:7 | 7:请求失败，请稍后再试 | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010058 | 商品不存在或已彻底删除 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010401 | 2010401:触发商品操作限流,请稍后再试 | 请稍后再试 |
| 20000 | 系统错误 | isp.service-error:2010001 | 2010001:系统异常,请重试 | 请稍后再试 |
| 20000 | 系统错误 | isp.service-error:2010327 | 2010327:销售属性查询失败 | 请稍后再试 |
| 20000 | 系统错误 | isp.service-error:2010013 | 2010013:数据查询异常 | 请稍后再试 |
| 20000 | 系统错误 | isp.service-error:2010321 | 2010321:类目属性查询异常 | 请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:商品参数错误 | 请检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010203 | 2010203:获取商品信息失败 | 请检查参数后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
