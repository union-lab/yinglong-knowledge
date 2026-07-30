# /product/calDelayShipTimeForOpen

> 中文说明：发货时效规则预览  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/8066>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/calDelayShipTimeForOpen |
| 中文名称 | 发货时效规则预览 |
| 文档目录 | 商品API |
| Article ID | 8066 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/1/29 11:48:36 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

发货时效规则预览

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.calDelayShipTimeForOpen | 调用的API接口名称 | - | - |
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
| 0 | category_leaf_id | category_leaf_id | false | 99 | 0 | 类目id | - | - |
| 0 | presell_end_time | presell_end_time | false | 2 | "" | 预售结束时间 | - | - |
| 0 | delay_rule | delay_rule | false | 5 | - | 商品维度 延迟发货配置 | - | - |
| 1 | delay_rule.end_time | end_time | false | 99 | 0 | 商家配置的结束时间 | - | - |
| 1 | delay_rule.start_time | start_time | false | 99 | 0 | 商家配置的开始时间 | - | - |
| 1 | delay_rule.config_type | config_type | false | 99 | 0 | 配置类型 | - | - |
| 1 | delay_rule.config_value | config_value | false | 99 | 0 | 配置值 | - | - |
| 1 | delay_rule.rule_scope | rule_scope | false | 99 | 0 | 规则生效范围 | - | - |
| 1 | delay_rule.enable | enable | false | 4 | false | 是否开启 | - | - |
| 0 | presell_type | presell_type | false | 99 | 0 | 预售类型 | - | - |
| 0 | pickup_method | pickup_method | false | 2 | "" | "0": 普通商品-使用物流发货, "1": 虚拟商品-无需物流与电子交易凭证, "2": 虚拟商品-使用电子交易凭证,  "3": 虚拟商品-充值直连 | - | - |
| 0 | is_mass_auction_product | is_mass_auction_product | false | 4 | false | 是否大众拍卖商品 | - | - |
| 0 | product_id | product_id | false | 99 | 0 | 商品id | - | - |
| 0 | presell_delay | presell_delay | false | 99 | 0 | 预售结束后几天发货 | - | - |
| 0 | selected_multi_times | SelectedMultiTimes | false | 3 | [] | 选择的时效 新阶梯 | - | - |
| 0 | is_c2b_switch_on | is_c2b_switch_on | false | 4 | false | 是否打开c2b定制商品开关 | - | - |
| 0 | presell_config_level | presell_config_level | false | 99 | 0 | 预售类型 0 全款预售 1SKU预售 2时效SKU现货+预售  3时效SKU预售 | - | - |
| 0 | delivery_delay_day | delivery_delay_day | false | 99 | 0 | 承诺发货时间 | - | - |
| 0 | presell_delivery_type | presell_delivery_type | false | 99 | 0 | 0 预售结束后发货  1支付完成后发货 | - | - |
| 0 | spec_prices_v2 | spec_prices_v2 | false | 3 | - | 新sku字段 时效SKU | - | - |
| 1 | spec_prices_v2.spec_model_code | spec_model_code | false | 3 | [] | 规格型号编码 | - | - |
| 1 | spec_prices_v2.cargo | cargo | false | 5 | - | 绑定货品（如果传0 0 表示解绑） | - | - |
| 2 | spec_prices_v2.cargo.cargo_id | cargo_id | false | 2 | "" | cargo_id | - | - |
| 2 | spec_prices_v2.cargo.source_type | source_type | false | 99 | 0 | source_type | - | - |
| 1 | spec_prices_v2.out_sku_id | out_sku_id | false | 99 | 0 | 外部sku_id-i64 | - | - |
| 1 | spec_prices_v2.sell_properties | sell_properties | false | 3 | - | 销售属性（逐步替代specDetailId1、2、3，过渡期互相兼容，大于三级规格时只能用sellProperty）。 | - | - |
| 2 | spec_prices_v2.sell_properties.property_name | property_name | false | 2 | "" | property_name | - | - |
| 2 | spec_prices_v2.sell_properties.measurement | measurement | false | 5 | - | 度量衡信息 | - | - |
| 3 | spec_prices_v2.sell_properties.measurement.measure_unit_id | measure_unit_id | false | 99 | 0 | 单位id，与类目属性应该保持一致 | - | - |
| 3 | spec_prices_v2.sell_properties.measurement.measure_unit | measure_unit | false | 2 | "" | 单位名字（g或克等） | - | - |
| 3 | spec_prices_v2.sell_properties.measurement.value | value | false | 2 | "" | 输入值 | - | - |
| 2 | spec_prices_v2.sell_properties.value_id | value_id | false | 99 | 0 | value_id | - | - |
| 2 | spec_prices_v2.sell_properties.remark | remark | false | 2 | "" | 备注 | - | - |
| 2 | spec_prices_v2.sell_properties.property_id | property_id | false | 99 | 0 | property_id | - | - |
| 2 | spec_prices_v2.sell_properties.measure_info | measure_info | false | 5 | - | 度量衡信息 | - | - |
| 3 | spec_prices_v2.sell_properties.measure_info.template_id | template_id | false | 99 | 0 | 度量衡模板id | - | - |
| 3 | spec_prices_v2.sell_properties.measure_info.values | values | false | 3 | - | 度量衡内容 | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.suffix | suffix | false | 2 | "" | 后缀 | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.extra | extra | false | 8 | {} | 自定义度量衡扩展信息 | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.value_id | value_id | false | 99 | 0 | 值id | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.suffix_id | suffix_id | false | 99 | 0 | 后缀id | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.value | value | false | 2 | "" | 值内容 | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.unit_name | unit_name | false | 2 | "" | 度量衡单位名称 | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.prefix | prefix | false | 2 | "" | 前缀 | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.prefix_id | prefix_id | false | 99 | 0 | 前缀id | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.value_required | value_required | false | 4 | false | 是否必填 | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.unit_id | unit_id | false | 99 | 0 | 度量衡单位id | - | - |
| 4 | spec_prices_v2.sell_properties.measure_info.values.module_id | module_id | false | 99 | 0 | 模块id | - | - |
| 3 | spec_prices_v2.sell_properties.measure_info.extra | extra | false | 8 | {} | 自定义度量衡扩展信息 | - | - |
| 2 | spec_prices_v2.sell_properties.value_spec_detail_id | value_spec_detail_id | false | 99 | 0 | 规格值detailId，支持3级以上多规格，代替原specDetailId123 | - | - |
| 2 | spec_prices_v2.sell_properties.cpv_path | cpv_path | false | 3 | - | 销售属性值路径 | - | - |
| 3 | spec_prices_v2.sell_properties.cpv_path.cpid | cpid | false | 99 | 0 | cpid | - | - |
| 3 | spec_prices_v2.sell_properties.cpv_path.cpvid | cpvid | false | 99 | 0 | cpvid | - | - |
| 2 | spec_prices_v2.sell_properties.value_name | value_name | false | 2 | "" | value_name | - | - |
| 1 | spec_prices_v2.supplier_id | supplier_id | false | 2 | "" | 供应商编码 | - | - |
| 1 | spec_prices_v2.id | id | false | 99 | 0 | skuId,支持open基于skuId修改sku信息 | - | - |
| 1 | spec_prices_v2.stock_num_map | stock_num_map | false | 8 | {} | 仓ID -> 库存数量 | - | - |
| 1 | spec_prices_v2.service_quotation | serviceQuotation | false | 5 | - | sku服务报价信息 | - | - |
| 2 | spec_prices_v2.service_quotation.provider_id | provider_id | false | 2 | "" | 供应商id | - | - |
| 2 | spec_prices_v2.service_quotation.service_template_id | service_template_id | false | 2 | "" | 所属模版id | - | - |
| 2 | spec_prices_v2.service_quotation.extra | extra | false | 2 | "" | 扩展信息 | - | - |
| 2 | spec_prices_v2.service_quotation.service_quotation_id | service_quotation_id | false | 2 | "" | sku粒度的服务商品信息<br>服务报价id | - | - |
| 1 | spec_prices_v2.spec_value_lib_id | spec_value_lib_id | false | 99 | 0 | 懂车帝商品规格值id | - | - |
| 1 | spec_prices_v2.ignore_price_update | ignore_price_update | false | 4 | false | 忽略价格更新 | - | - |
| 1 | spec_prices_v2.customs_report_info | customs_report_info | false | 5 | - | 海关申报要素 | - | - |
| 2 | spec_prices_v2.customs_report_info.second_measure_unit | second_measure_unit | false | 2 | "" | 法定第二计量单位 | - | - |
| 2 | spec_prices_v2.customs_report_info.unit | unit | false | 2 | "" | 售卖单位 | - | - |
| 2 | spec_prices_v2.customs_report_info.report_brand_name | report_brand_name | false | 2 | "" | 品牌 | - | - |
| 2 | spec_prices_v2.customs_report_info.g_model | g_model | false | 2 | "" | 规格型号 | - | - |
| 2 | spec_prices_v2.customs_report_info.bar_code | bar_code | false | 2 | "" | 条形码 | - | - |
| 2 | spec_prices_v2.customs_report_info.first_measure_qty | first_measure_qty | false | 9 | 0 | 法定第一计量数量 | - | - |
| 2 | spec_prices_v2.customs_report_info.second_measure_qty | second_measure_qty | false | 9 | 0 | 法定第二计量数量 | - | - |
| 2 | spec_prices_v2.customs_report_info.usage | usage | false | 2 | "" | 用途 | - | - |
| 2 | spec_prices_v2.customs_report_info.first_measure_unit | first_measure_unit | false | 2 | "" | 法定第一计量单位 | - | - |
| 2 | spec_prices_v2.customs_report_info.hs_code | hs_code | false | 2 | "" | 海关代码 | - | - |
| 2 | spec_prices_v2.customs_report_info.report_name | report_name | false | 2 | "" | 品名 | - | - |
| 1 | spec_prices_v2.price | price | false | 99 | 0 | price | - | - |
| 1 | spec_prices_v2.delivery_infos | delivery_infos | false | 3 | - | SKU物流信息 | - | - |
| 2 | spec_prices_v2.delivery_infos.info_unit | info_unit | false | 2 | "" | 信息计量单位 | - | - |
| 2 | spec_prices_v2.delivery_infos.info_value | info_value | false | 2 | "" | 信息值 | - | - |
| 2 | spec_prices_v2.delivery_infos.info_type | info_type | false | 2 | "" | 物流采集信息<br>信息类型 | - | - |
| 1 | spec_prices_v2.spec_detail_name2 | spec_detail_name2 | false | 2 | "" | 二级规格值名称，已废弃，open对接不再使用 | - | - |
| 1 | spec_prices_v2.sku_classification_type | sku_classification_type | false | 2 | "" | sku分类信息 | - | - |
| 1 | spec_prices_v2.package_sku | package_sku | false | 3 | - | 组套信息 | - | - |
| 2 | spec_prices_v2.package_sku.sku_id | sku_id | false | 99 | 0 | sku_id | - | - |
| 2 | spec_prices_v2.package_sku.stock_type | stock_type | false | 99 | 0 | stock_type | - | - |
| 2 | spec_prices_v2.package_sku.category_leaf_id | category_leaf_id | false | 99 | 0 | 叶子类目id | - | - |
| 2 | spec_prices_v2.package_sku.settlement_ratio | settlement_ratio | false | 99 | 0 | 子品结算分摊比例 | - | - |
| 2 | spec_prices_v2.package_sku.extra_info | extra_info | false | 5 | - | 扩展信息，受选项的控制 | - | - |
| 3 | spec_prices_v2.package_sku.extra_info.pic | pic | false | 3 | - | 商品主图，1—5张 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.pic.url | url | false | 2 | "" | url | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.pic.process_info | process_info | false | 5 | - | process_info | - | - |
| 5 | spec_prices_v2.package_sku.extra_info.pic.process_info.origin_url | origin_url | false | 2 | "" | origin_url | - | - |
| 5 | spec_prices_v2.package_sku.extra_info.pic.process_info.process_type | process_type | false | 3 | [] | process_type | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.pic.pic_type | pic_type | false | 99 | 0 | 图片类型 | - | - |
| 3 | spec_prices_v2.package_sku.extra_info.self_sell_stock_num | self_sell_stock_num | false | 99 | 0 | 自售库存 | - | - |
| 3 | spec_prices_v2.package_sku.extra_info.quality_list | quality_list | false | 3 | - | 商品资质 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.quality_list.quality_attachments | quality_attachments | false | 3 | - | 资质附件 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.quality_list.quality_content_name | quality_content_name | false | 2 | "" | 资质名 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.quality_list.quality_name | quality_name | false | 2 | "" | 资质种类名称 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.quality_list.quality_id | quality_id | false | 99 | 0 | 资质id 复用 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.quality_list.quality_key | quality_key | false | 2 | "" | 资质种类key | - | - |
| 3 | spec_prices_v2.package_sku.extra_info.bind_cargo_info | bind_cargo_info | false | 5 | - | 国内货品信息 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.delivery_type_options | delivery_type_options | false | 3 | [] | 可选发发货模式类型 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.cargo_name | cargo_name | false | 2 | "" | cargo_name | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.cost_price | cost_price | false | 99 | 0 | 货品价格 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.disable_stock | disable_stock | false | 4 | false | 是否禁止编辑库存 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.cargo_type | cargo_type | false | 99 | 0 | 货品类型 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.img_urls | img_urls | false | 3 | [] | 货品图片 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.tags | tags | false | 3 | [] | 货品标签 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.cargo_id | cargo_id | false | 99 | 0 | 货品id | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.need_validate_price | need_validate_price | false | 4 | false | 是否需要校验价格 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.bind_cargo_info.stock | stock | false | 99 | 0 | 货品库存 | - | - |
| 3 | spec_prices_v2.package_sku.extra_info.main_image_three_to_four | main_image_three_to_four | false | 3 | - | 商品主图3:4，1—5张 | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.main_image_three_to_four.url | url | false | 2 | "" | url | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.main_image_three_to_four.pic_type | pic_type | false | 99 | 0 | pic_type | - | - |
| 4 | spec_prices_v2.package_sku.extra_info.main_image_three_to_four.process_info | process_info | false | 5 | - | process_info | - | - |
| 5 | spec_prices_v2.package_sku.extra_info.main_image_three_to_four.process_info.origin_url | origin_url | false | 2 | "" | origin_url | - | - |
| 5 | spec_prices_v2.package_sku.extra_info.main_image_three_to_four.process_info.process_type | process_type | false | 3 | [] | process_type | - | - |
| 2 | spec_prices_v2.package_sku.combo_num | combo_num | false | 99 | 0 | combo_num | - | - |
| 2 | spec_prices_v2.package_sku.stock_num | stock_num | false | 99 | 0 | stock_num | - | - |
| 2 | spec_prices_v2.package_sku.sell_properties | sell_properties | false | 3 | - | 销售属性 | - | - |
| 3 | spec_prices_v2.package_sku.sell_properties.value_spec_detail_id | value_spec_detail_id | false | 99 | 0 | 规格值detailId，支持3级以上多规格，代替原specDetailId123 | - | - |
| 3 | spec_prices_v2.package_sku.sell_properties.property_name | property_name | false | 2 | "" | property_name | - | - |
| 3 | spec_prices_v2.package_sku.sell_properties.cpv_path | cpv_path | false | 3 | - | 销售属性值路径 | - | - |
| 4 | spec_prices_v2.package_sku.sell_properties.cpv_path.cpvid | cpvid | false | 99 | 0 | cpvid | - | - |
| 4 | spec_prices_v2.package_sku.sell_properties.cpv_path.cpid | cpid | false | 99 | 0 | cpid | - | - |
| 3 | spec_prices_v2.package_sku.sell_properties.remark | remark | false | 2 | "" | 备注 | - | - |
| 3 | spec_prices_v2.package_sku.sell_properties.property_id | property_id | false | 99 | 0 | property_id | - | - |
| 3 | spec_prices_v2.package_sku.sell_properties.measurement | measurement | false | 5 | - | 度量衡信息 | - | - |
| 4 | spec_prices_v2.package_sku.sell_properties.measurement.measure_unit_id | measure_unit_id | false | 99 | 0 | 单位id，与类目属性应该保持一致 | - | - |
| 4 | spec_prices_v2.package_sku.sell_properties.measurement.value | value | false | 2 | "" | 输入值 | - | - |
| 4 | spec_prices_v2.package_sku.sell_properties.measurement.measure_unit | measure_unit | false | 2 | "" | 单位名字（g或克等） | - | - |
| 3 | spec_prices_v2.package_sku.sell_properties.measure_info | measure_info | false | 5 | - | 度量衡信息 | - | - |
| 4 | spec_prices_v2.package_sku.sell_properties.measure_info.extra | extra | false | 8 | {} | 自定义度量衡扩展信息 | - | - |
| 4 | spec_prices_v2.package_sku.sell_properties.measure_info.values | values | false | 3 | - | 度量衡内容 | - | - |
| 4 | spec_prices_v2.package_sku.sell_properties.measure_info.template_id | template_id | false | 99 | 0 | 度量衡模板id | - | - |
| 3 | spec_prices_v2.package_sku.sell_properties.value_name | value_name | false | 2 | "" | value_name | - | - |
| 3 | spec_prices_v2.package_sku.sell_properties.value_id | value_id | false | 99 | 0 | value_id | - | - |
| 2 | spec_prices_v2.package_sku.price | price | false | 99 | 0 | sku实时价格 | - | - |
| 2 | spec_prices_v2.package_sku.short_name | short_name | false | 2 | "" | short_name | - | - |
| 2 | spec_prices_v2.package_sku.pic_url | pic_url | false | 2 | "" | 图片url | - | - |
| 2 | spec_prices_v2.package_sku.ori_price | ori_price | false | 99 | 0 | ori_price | - | - |
| 2 | spec_prices_v2.package_sku.sub_sku_id | sub_sku_id | false | 99 | 0 | sub_sku_id | - | - |
| 2 | spec_prices_v2.package_sku.sub_product_id | sub_product_id | false | 99 | 0 | sub_product_id | - | - |
| 1 | spec_prices_v2.spec_detail_name1 | spec_detail_name1 | false | 2 | "" | 一级规格值名称，已废弃，open对接不再使用 | - | - |
| 1 | spec_prices_v2.imei_num | imei_num | false | 99 | 0 | IMEI数量 | - | - |
| 1 | spec_prices_v2.copied_sku_id | copied_sku_id | false | 99 | 0 | 复制创建时，记录原商品skuId | - | - |
| 1 | spec_prices_v2.quantity_info | quantityInfo | false | 5 | - | 外卖份量信息 | - | - |
| 2 | spec_prices_v2.quantity_info.unit_prefix | unit_prefix | false | 2 | "" | unit_prefix | - | - |
| 2 | spec_prices_v2.quantity_info.unit_desc | unit_desc | false | 2 | "" | unit_desc | - | - |
| 2 | spec_prices_v2.quantity_info.value | value | false | 99 | 0 | value | - | - |
| 2 | spec_prices_v2.quantity_info.unit_name | unit_name | false | 3 | [] | unit_name | - | - |
| 1 | spec_prices_v2.tax_exemption_sku_info | tax_exemption_sku_info | false | 5 | - | 海南免税：Sku 信息 | - | - |
| 2 | spec_prices_v2.tax_exemption_sku_info.volume | volume | false | 99 | 0 | 净含量 | - | - |
| 2 | spec_prices_v2.tax_exemption_sku_info.suit_num | suit_num | false | 99 | 0 | 套装数量 | - | - |
| 2 | spec_prices_v2.tax_exemption_sku_info.is_suit | is_suit | false | 99 | 0 | 是否套装（0 否 1 是） | - | - |
| 1 | spec_prices_v2.outer_sku_id | outer_sku_id | false | 2 | "" | 外部sku_id-string | - | - |
| 1 | spec_prices_v2.supply_price | supply_price | false | 99 | 0 | 供货价,单位：分，nil代表不修改，0代表清空 | - | - |
| 1 | spec_prices_v2.multi_time_stocks | multi_time_stocks | false | 3 | - | 时效库存明细 | - | - |
| 2 | spec_prices_v2.multi_time_stocks.stock_num | stock_num | false | 99 | 0 | 库存数 | - | - |
| 2 | spec_prices_v2.multi_time_stocks.time_desc | time_desc | false | 2 | "" | 时效描述 | - | - |
| 2 | spec_prices_v2.multi_time_stocks.time_type | time_type | false | 99 | 0 | 时效类型 | - | - |
| 1 | spec_prices_v2.barcodes | barcodes | false | 3 | [] | 条码 | - | - |
| 1 | spec_prices_v2.product_code | product_code | false | 5 | - | SKU产品编码 | - | - |
| 2 | spec_prices_v2.product_code.code | code | false | 2 | "" | 二维码码值 | - | - |
| 1 | spec_prices_v2.spec_detail_name3 | spec_detail_name3 | false | 2 | "" | 三级规格值名称，已废弃，open对接不再使用 | - | - |
| 1 | spec_prices_v2.gold_process_charge | gold_process_charge | false | 99 | 0 | 黄金加工费，单位：分，nil代表不修改 | - | - |
| 1 | spec_prices_v2.sku_status | sku_status | false | 4 | false | sku状态是否有效，true上架 false下架 | - | - |
| 1 | spec_prices_v2.presell_delay | presell_delay | false | 99 | 0 | SKU维度预售发货延迟时间 | - | - |
| 1 | spec_prices_v2.sku_type | sku_type | false | 99 | 0 | 库存类型 | - | - |
| 1 | spec_prices_v2.step_stock_num | step_stock_num | false | 99 | 0 | 阶梯库存数 | - | - |
| 1 | spec_prices_v2.stock_num | stock_num | false | 99 | 0 | stock_num | - | - |
| 1 | spec_prices_v2.code | code | false | 2 | "" | code | - | - |
| 1 | spec_prices_v2.batch_stocks | batch_stocks | false | 3 | - | 批次库存 | - | - |
| 2 | spec_prices_v2.batch_stocks.out_warehouse_id | out_warehouse_id | false | 2 | "" | 外部仓id，仅区域库存模式填写 | - | - |
| 2 | spec_prices_v2.batch_stocks.batch_stock_items | batch_stock_items | false | 3 | - | 批次库存项 | - | - |
| 3 | spec_prices_v2.batch_stocks.batch_stock_items.stock_num | stock_num | false | 99 | 0 | 库存数 | - | - |
| 3 | spec_prices_v2.batch_stocks.batch_stock_items.unique_id | unique_id | false | 2 | "" | 唯一码 | - | - |
| 3 | spec_prices_v2.batch_stocks.batch_stock_items.batch_type | batch_type | false | 99 | 0 | 批次类型：0为时效 1为唯一码 | - | - |
| 0 | product_type | product_type | false | 99 | 0 | 商品类型 | - | - |
| 0 | open_logistics_info | open_logistics_info | false | 5 | - | 跨境：物流信息 | - | - |
| 1 | open_logistics_info.customs_clear_type | customs_clear_type | false | 99 | 0 | 通关模式，1BBC 2BC 3邮关 | - | - |
| 1 | open_logistics_info.origin_country_id | origin_country_id | false | 99 | 0 | 原产国id | - | - |
| 1 | open_logistics_info.source_country_id | source_country_id | false | 99 | 0 | 货源国id | - | - |
| 1 | open_logistics_info.cross_warehouse_id | cross_warehouse_id | false | 2 | "" | 商家仓id | - | - |
| 1 | open_logistics_info.tax_payer | tax_payer | false | 99 | 0 | 税金承担方，0商家承担，1用户承担 | - | - |
| 1 | open_logistics_info.net_weight_qty | net_weight_qty | false | 9 | 0 | 商品净重 | - | - |
| 1 | open_logistics_info.brand_country_id | brand_country_id | false | 99 | 0 | 品牌所在地id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | not_can_calculate_code | not_can_calculate_code | - | 99 | 0 | 不能计算发货时效的错误码 | - | - |
| 0 | not_can_calculate_msg | not_can_calculate_msg | - | 2 | "" | 不能计算发货时效的错误文案 | - | - |
| 0 | delay_ship_time_tip | delay_ship_time_tip | - | 2 | "" | 发货时效计算说明文案 | - | - |
| 0 | delay_ship_time_results | delay_ship_time_results | - | 3 | - | 发货时效计算结果列表 | - | R1 |
| 1 | delay_ship_time_results.delay_ship_time_desc_title | delay_ship_time_desc_title | - | 2 | "" | 发货时效描述标题 | - | - |
| 1 | delay_ship_time_results.delay_ship_time_desc_items | delay_ship_time_desc_items | - | 3 | - | 时效计算结果项列表 | - | R1 |
| 2 | delay_ship_time_results.delay_ship_time_desc_items.payment_period | payment_period | - | 2 | "" | 支付周期描述 | - | - |
| 2 | delay_ship_time_results.delay_ship_time_desc_items.ship_time_desc | ship_time_desc | - | 2 | "" | 最晚发货时间描述 | - | - |
| 2 | delay_ship_time_results.delay_ship_time_desc_items.ship_time_rule_desc | ship_time_rule_desc | - | 2 | "" | 时效规则描述 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/calDelayShipTimeForOpen?app_key=your_appkey_here&method=product.calDelayShipTimeForOpen&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/calDelayShipTimeForOpen?app_key=your_appkey_here&method=product.calDelayShipTimeForOpen&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductCalDelayShipTimeForOpenRequest request = new ProductCalDelayShipTimeForOpenRequest();
ProductCalDelayShipTimeForOpenParam param = request.getParam();
param.setCategoryLeafId(0L);
param.setPresellEndTime("\"\"");
param.setPresellType(0L);
param.setPickupMethod("\"\"");
param.setIsMassAuctionProduct(false);
param.setProductId(0L);
param.setPresellDelay(0L);
param.setSelectedMultiTimes([]);
param.setIsC2bSwitchOn(false);
param.setPresellConfigLevel(0L);
param.setDeliveryDelayDay(0L);
param.setPresellDeliveryType(0L);
param.setProductType(0L);
ProductCalDelayShipTimeForOpenResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductCalDelayShipTimeForOpenRequest();
$param = new ProductCalDelayShipTimeForOpenParam();
$request->setParam($param);
$param->category_leaf_id = 0;
$param->presell_end_time = "\"\"";
$param->presell_type = 0;
$param->pickup_method = "\"\"";
$param->is_mass_auction_product = false;
$param->product_id = 0;
$param->presell_delay = 0;
$param->selected_multi_times = [];
$param->is_c2b_switch_on = false;
$param->presell_config_level = 0;
$param->delivery_delay_day = 0;
$param->presell_delivery_type = 0;
$param->product_type = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductCalDelayShipTimeForOpenRequest()
param = request.getParams()
param.category_leaf_id = 0
param.presell_end_time = "\"\""
param.presell_type = 0
param.pickup_method = "\"\""
param.is_mass_auction_product = false
param.product_id = 0
param.presell_delay = 0
param.selected_multi_times = []
param.is_c2b_switch_on = false
param.presell_config_level = 0
param.delivery_delay_day = 0
param.presell_delivery_type = 0
param.product_type = 0
response = request.execute(accessToken)

```

### go

```go
request := product_calDelayShipTimeForOpen_request.New()
param := request.GetParams()
param.CategoryLeafId = 0
param.PresellEndTime = "\"\""
param.PresellType = 0
param.PickupMethod = "\"\""
param.IsMassAuctionProduct = false
param.ProductId = 0
param.PresellDelay = 0
param.SelectedMultiTimes = []
param.IsC2bSwitchOn = false
param.PresellConfigLevel = 0
param.DeliveryDelayDay = 0
param.PresellDeliveryType = 0
param.ProductType = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductCalDelayShipTimeForOpenRequest();
var param = request.BuildParam();
param.CategoryLeafId = 0;
param.PresellEndTime = "\"\"";
param.PresellType = 0;
param.PickupMethod = "\"\"";
param.IsMassAuctionProduct = false;
param.ProductId = 0;
param.PresellDelay = 0;
param.SelectedMultiTimes = [];
param.IsC2bSwitchOn = false;
param.PresellConfigLevel = 0;
param.DeliveryDelayDay = 0;
param.PresellDeliveryType = 0;
param.ProductType = 0;
var response = request.Execute<ProductCalDelayShipTimeForOpenResponse>(accessToken);

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
