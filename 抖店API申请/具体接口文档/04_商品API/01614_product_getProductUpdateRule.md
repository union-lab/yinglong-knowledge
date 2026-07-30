# /product/getProductUpdateRule

> 中文说明：查询商品发布规则  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1614>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getProductUpdateRule |
| 中文名称 | 查询商品发布规则 |
| 文档目录 | 商品API |
| Article ID | 1614 |
| 文档版本 | V8.01 |
| 官方更新时间 | 2026/6/10 14:34:54 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 800 |

## 使用说明

根据店铺ID、类目等查询商品发布规则，如查询支持发货模式、发货时效、尺码模板配置规则、商品主图3:4配置规则、资质规则等;

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getProductUpdateRule | 调用的API接口名称 | - | - |
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
| 0 | category_id | category_id | true | 99 | 20219 | 类目id | - | - |
| 0 | senses | senses | false | 3 | 1001 | 闪购定制参数，普通发品忽略 | - | - |
| 0 | standard_brand_id | brand_id | false | 99 | 20319 | 品牌id | - | - |
| 0 | spu_id | spu_id | false | 99 | 23291 | spu_id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | fulfillment_rule | fulfillment_rule | - | 5 | - | 履约规则 | - | R1 |
| 1 | fulfillment_rule.delay_rule | delay_rule | - | 5 | - | 特殊时间延迟发货规则 | - | R1 |
| 2 | fulfillment_rule.delay_rule.config_type | config_type | - | 99 | 1 | 支持的配置类型<br>1：代表时间点，此时对应的config_value的值为支持的最晚发货的秒级时间戳<br>2：代表相对时间，此时对应的config_value的值表示支付后几天发货；比如config_value=3表示支付后三天发货 | - | - |
| 2 | fulfillment_rule.delay_rule.config_value | config_value | - | 99 | 1675353599 | 与规则配置类型对应的配置值 | - | - |
| 2 | fulfillment_rule.delay_rule.start_time | start_time | - | 99 | 1675353599 | 规则开始时间 | - | - |
| 2 | fulfillment_rule.delay_rule.end_time | end_time | - | 99 | 1675353599 | 规则结束时间 | - | - |
| 1 | fulfillment_rule.normal_rule | normal_rule | - | 5 | - | 现货发货模式规则 | - | R1 |
| 2 | fulfillment_rule.normal_rule.sku_rule | sku_rule | - | 5 | - | sku发货时效规则 | - | R1 |
| 3 | fulfillment_rule.normal_rule.sku_rule.absolute_max_date | absolute_max_date | - | 2 | 1761753600 | 最大绝对发货时间，秒级标准Unix时间戳 | - | - |
| 3 | fulfillment_rule.normal_rule.sku_rule.absolute_min_date | absolute_min_date | - | 2 | 1756656000 | 最小绝对发货时间，秒级标准Unix时间戳 | - | - |
| 3 | fulfillment_rule.normal_rule.sku_rule.relative_max_delay | relative_max_delay | - | 2 | 90 | 最大相对发货时间 | - | - |
| 3 | fulfillment_rule.normal_rule.sku_rule.support_range_option | support_range_option | - | 4 | true | sku发货时效是否支持范围输入 | - | - |
| 3 | fulfillment_rule.normal_rule.sku_rule.relative_min_delay | relative_min_delay | - | 2 | 2 | 最小相对发货时间 | - | - |
| 3 | fulfillment_rule.normal_rule.sku_rule.support | support | - | 4 | true | 是否支持sku发货时效 | - | - |
| 2 | fulfillment_rule.normal_rule.delay_rule | delay_rule | - | 5 | - | 特殊时间延迟发货规则 | - | R1 |
| 3 | fulfillment_rule.normal_rule.delay_rule.end_time | end_time | - | 99 | 1675353599 | 规则结束时间 | - | - |
| 3 | fulfillment_rule.normal_rule.delay_rule.start_time | start_time | - | 99 | 1673625600 | 规则开始时间 | - | - |
| 3 | fulfillment_rule.normal_rule.delay_rule.config_value | config_value | - | 99 | 1675526399 | 与规则配置类型对应的配置值 | - | - |
| 3 | fulfillment_rule.normal_rule.delay_rule.config_type | config_type | - | 99 | 1 | 支持的配置类型<br>1：代表时间点，此时对应的config_value的值为支持的最晚发货的秒级时间戳<br>2：代表相对时间，此时对应的config_value的值表示支付后几天发货；比如config_value=3表示支付后三天发货 | - | - |
| 2 | fulfillment_rule.normal_rule.support | support | - | 4 | true | 是否支持 | - | R1 |
| 2 | fulfillment_rule.normal_rule.delay_options | delay_options | - | 3 | [9999,1,2] | 发货时效选项，如当日发、次日发、48小时 | - | R1 |
| 2 | fulfillment_rule.normal_rule.is_special_delay_option | is_special_delay_option | - | 4 | false | 是否是特殊的时间发货，可忽略 | - | R1 |
| 1 | fulfillment_rule.step_rule | step_rule | - | 5 | - | 阶梯发货模式规则 | - | R1 |
| 2 | fulfillment_rule.step_rule.multi_times | multi_times | - | 3 | - | 支持的时效列表 | - | R1 |
| 3 | fulfillment_rule.step_rule.multi_times.time_desc | time_desc | - | 2 | 5天内发 | 时效描述 | - | - |
| 3 | fulfillment_rule.step_rule.multi_times.time_type | time_type | - | 99 | 5 | 时效 | - | - |
| 2 | fulfillment_rule.step_rule.support | support | - | 4 | false | 是否支持 | - | R1 |
| 2 | fulfillment_rule.step_rule.delay_options | delay_options | - | 3 | [9999,1,2] | 阶梯现货部分延迟返货时间范围 | - | R1 |
| 2 | fulfillment_rule.step_rule.is_special_delay_option | is_special_delay_option | - | 4 | false | 是特殊时间延迟发货，可忽略 | - | R1 |
| 2 | fulfillment_rule.step_rule.step_min_delay | step_min_delay | - | 99 | 7 | 阶梯发货阶梯部分发货时间最小值 | - | R1 |
| 2 | fulfillment_rule.step_rule.step_max_delay | step_max_delay | - | 99 | 15 | 阶梯发货阶梯部分发货时间最大值 | - | R1 |
| 2 | fulfillment_rule.step_rule.delay_rule | delay_rule | - | 5 | - | 延迟发货规则 | - | R1 |
| 3 | fulfillment_rule.step_rule.delay_rule.config_type | config_type | - | 99 | 1 | 配置类型 | - | - |
| 3 | fulfillment_rule.step_rule.delay_rule.config_value | config_value | - | 99 | 1 | 配置值 | - | - |
| 3 | fulfillment_rule.step_rule.delay_rule.start_time | start_time | - | 99 | 121 | 商家配置的开始时间 | - | - |
| 3 | fulfillment_rule.step_rule.delay_rule.end_time | end_time | - | 99 | 123 | 商家配置的结束时间 | - | - |
| 1 | fulfillment_rule.product_presell_rule | product_presell_rule | - | 5 | - | 全款预售发货模式规则 | - | R1 |
| 2 | fulfillment_rule.product_presell_rule.support | support | - | 4 | false | 是否支持全款预售 | - | R1 |
| 2 | fulfillment_rule.product_presell_rule.min_presell_price | min_presell_price | - | 99 | 2000 | 预售门槛价 | - | R1 |
| 2 | fulfillment_rule.product_presell_rule.support_delivery_after_pay | support_delivery_after_pay | - | 4 | true | 是否支持支付成功后发货 | - | R1 |
| 2 | fulfillment_rule.product_presell_rule.support_delivery_after_presell | support_delivery_after_presell | - | 4 | false | 是否支持预售结束后发货 | - | R1 |
| 2 | fulfillment_rule.product_presell_rule.delivery_after_pay_config | delivery_after_pay_config | - | 5 | - | 支付结束后规则 | - | R1 |
| 3 | fulfillment_rule.product_presell_rule.delivery_after_pay_config.min_delivery_days | min_delivery_days | - | 99 | 2 | 延迟发货时间最小值 | - | R1 |
| 3 | fulfillment_rule.product_presell_rule.delivery_after_pay_config.max_delivery_days | max_delivery_days | - | 99 | 15 | 延迟发货时间最大值 | - | R1 |
| 3 | fulfillment_rule.product_presell_rule.delivery_after_pay_config.max_presell_end_days | max_presell_end_days | - | 99 | 30 | 最长预售结束时间 | - | R1 |
| 3 | fulfillment_rule.product_presell_rule.delivery_after_pay_config.need_audit | need_audit | - | 4 | true | 是否需要人审，可忽略 | - | R1 |
| 2 | fulfillment_rule.product_presell_rule.delivery_after_presell_config | delivery_after_presell_config | - | 5 | - | 预售结束后规则 | - | R1 |
| 3 | fulfillment_rule.product_presell_rule.delivery_after_presell_config.min_delivery_days | min_delivery_days | - | 99 | 2 | 延迟发货时间最小值 | - | R1 |
| 3 | fulfillment_rule.product_presell_rule.delivery_after_presell_config.max_delivery_days | max_delivery_days | - | 99 | 15 | 延迟发货时间最大值 | - | R1 |
| 3 | fulfillment_rule.product_presell_rule.delivery_after_presell_config.max_presell_end_days | max_presell_end_days | - | 99 | 30 | 最长预售结束时间 | - | R1 |
| 3 | fulfillment_rule.product_presell_rule.delivery_after_presell_config.need_audit | need_audit | - | 4 | true | 是否需要人审，可忽略 | - | R1 |
| 1 | fulfillment_rule.sku_presell_rule | sku_presell_rule | - | 5 | - | SKU预售发货模式规则 | - | R1 |
| 2 | fulfillment_rule.sku_presell_rule.support | support | - | 4 | false | 是否支持 | - | R1 |
| 2 | fulfillment_rule.sku_presell_rule.min_presell_price | min_presell_price | - | 99 | 2000 | 预售门槛价 | - | R1 |
| 2 | fulfillment_rule.sku_presell_rule.support_delivery_after_pay | support_delivery_after_pay | - | 4 | false | 是否支持支付结束后发货 | - | R1 |
| 2 | fulfillment_rule.sku_presell_rule.support_delivery_after_presell | support_delivery_after_presell | - | 4 | false | 是否支持预售结束后发货 | - | R1 |
| 2 | fulfillment_rule.sku_presell_rule.delivery_after_pay_config | delivery_after_pay_config | - | 5 | - | 支付结束后规则 | - | R1 |
| 3 | fulfillment_rule.sku_presell_rule.delivery_after_pay_config.min_delivery_days | min_delivery_days | - | 99 | 2 | 延迟发货时间最小值 | - | R1 |
| 3 | fulfillment_rule.sku_presell_rule.delivery_after_pay_config.max_delivery_days | max_delivery_days | - | 99 | 15 | 延迟发货时间最大值 | - | R1 |
| 3 | fulfillment_rule.sku_presell_rule.delivery_after_pay_config.max_presell_end_days | max_presell_end_days | - | 99 | 30 | 最长预售结束时间 | - | R1 |
| 3 | fulfillment_rule.sku_presell_rule.delivery_after_pay_config.need_audit | need_audit | - | 4 | false | 是否需要人审，可忽略 | - | R1 |
| 2 | fulfillment_rule.sku_presell_rule.delivery_after_presell_config | delivery_after_presell_config | - | 5 | - | 预售结束后规则 | - | R1 |
| 3 | fulfillment_rule.sku_presell_rule.delivery_after_presell_config.min_delivery_days | min_delivery_days | - | 99 | 2 | 延迟发货时间最小值 | - | R1 |
| 3 | fulfillment_rule.sku_presell_rule.delivery_after_presell_config.max_delivery_days | max_delivery_days | - | 99 | 15 | 延迟发货时间最大值 | - | R1 |
| 3 | fulfillment_rule.sku_presell_rule.delivery_after_presell_config.max_presell_end_days | max_presell_end_days | - | 99 | 30 | 最长预售结束时间 | - | R1 |
| 3 | fulfillment_rule.sku_presell_rule.delivery_after_presell_config.need_audit | need_audit | - | 4 | true | 是否需要人审，可忽略 | - | R1 |
| 1 | fulfillment_rule.time_sku_presell_with_normal_rule | time_sku_presell_with_normal_rule | - | 5 | - | 现货+预售发货规则（现货预售混合） | - | R1 |
| 2 | fulfillment_rule.time_sku_presell_with_normal_rule.support | support | - | 4 | true | 是否支持 | - | R1 |
| 2 | fulfillment_rule.time_sku_presell_with_normal_rule.time_sku_spec_name | time_sku_spec_name | - | 2 | 发货时效 | 发货时效规格名称 | - | R1 |
| 2 | fulfillment_rule.time_sku_presell_with_normal_rule.time_sku_spec_detial | time_sku_spec_detial | - | 3 | - | 发货时效规格选项 | - | R1 |
| 3 | fulfillment_rule.time_sku_presell_with_normal_rule.time_sku_spec_detial.spec_value | spec_value | - | 2 | 48小时内发货 | 规格值 | - | R1 |
| 3 | fulfillment_rule.time_sku_presell_with_normal_rule.time_sku_spec_detial.is_presell_spec | is_presell_spec | - | 4 | false | 是否预售时效 | - | R1 |
| 3 | fulfillment_rule.time_sku_presell_with_normal_rule.time_sku_spec_detial.spec_code | spec_code | - | 2 | product_time_spec_48h | product_time_spec_same_day 当日发/次日发 product_time_spec_next_day 次日发 product_time_spec_48h  48小时内发货 product_time_spec_5d  5天内发货 product_time_spec_15d  15天内发货 product_time_spec_45d  45天内发货 | - | R1 |
| 2 | fulfillment_rule.time_sku_presell_with_normal_rule.min_presell_price | min_presell_price | - | 99 | 2000 | 预售门槛价，单位分 | - | R1 |
| 1 | fulfillment_rule.time_sku_pure_presell_rule | time_sku_pure_presell_rule | - | 5 | - | 新预售发货模式规则（现货预售混合） | - | R1 |
| 2 | fulfillment_rule.time_sku_pure_presell_rule.support | support | - | 4 | true | 是否支持 | - | R1 |
| 2 | fulfillment_rule.time_sku_pure_presell_rule.time_sku_spec_name | time_sku_spec_name | - | 2 | 发货时效 | 发货时效规格名称 | - | R1 |
| 2 | fulfillment_rule.time_sku_pure_presell_rule.time_sku_spec_detial | time_sku_spec_detial | - | 3 | - | 发货时效规格选项 | - | R1 |
| 3 | fulfillment_rule.time_sku_pure_presell_rule.time_sku_spec_detial.spec_code | spec_code | - | 2 | product_time_spec_48h | 规格值code | - | - |
| 3 | fulfillment_rule.time_sku_pure_presell_rule.time_sku_spec_detial.spec_value | spec_value | - | 2 | 5天内发货 | 规格值 | - | R1 |
| 3 | fulfillment_rule.time_sku_pure_presell_rule.time_sku_spec_detial.is_presell_spec | is_presell_spec | - | 4 | true | 是否预售时效 | - | R1 |
| 2 | fulfillment_rule.time_sku_pure_presell_rule.min_presell_price | min_presell_price | - | 99 | 2000 | 预售门槛价，单位分 | - | R1 |
| 0 | recommend_name_rule | recommend_name_rule | - | 5 | - | 商品标题推荐规则 | - | R1 |
| 1 | recommend_name_rule.title_illegal_keyword_rule | title_illegal_keyword_rule | - | 3 | - | 商品标题非法关键词规则 | - | R1 |
| 2 | recommend_name_rule.title_illegal_keyword_rule.tip | Tip | - | 2 | 商品标题不允许出现2个及以上连续空格 | 规则提示 | - | - |
| 2 | recommend_name_rule.title_illegal_keyword_rule.keywords_in_suffix | KeywordsInSuffix | - | 3 | [" ","\n"] | 不允许出现的后缀关键词 | - | R1 |
| 2 | recommend_name_rule.title_illegal_keyword_rule.keywords_in_prefix | KeywordsInPrefix | - | 3 | [" ","\n"] | 不允许出现的前缀关键词 | - | R1 |
| 2 | recommend_name_rule.title_illegal_keyword_rule.keywords | Keywords | - | 3 | ["  ","\n"] | 不允许出现的全局关键词 | - | R1 |
| 1 | recommend_name_rule.prefix_brand_unauth_can_sel | prefix_brand_unauth_can_sel | - | 4 | false | 品牌没有权限是否可以勾选 | - | - |
| 1 | recommend_name_rule.prefix_prop_has_brand | prefix_prop_has_brand | - | 4 | false | 前缀规则是否包含品牌 | - | - |
| 1 | recommend_name_rule.title_limit_rule | title_limit_rule | - | 5 | - | 标题长度规则 | - | R1 |
| 2 | recommend_name_rule.title_limit_rule.max_length | max_length | - | 2 | 60 | 标题最长长度 | - | - |
| 2 | recommend_name_rule.title_limit_rule.min_length | min_length | - | 2 | 0 | 标题最短长度 | - | - |
| 1 | recommend_name_rule.satisfy_prefix | satisfy_prefix | - | 4 | true | 当前类目id是否命中前缀推荐规则 | - | R1 |
| 1 | recommend_name_rule.property_ids | property_ids | - | 3 | [365, 3987] | 命中规则的属性id详情 | - | R1 |
| 0 | after_sale_rule | after_sale_rule | - | 5 | - | 售后服务规则 | - | R1 |
| 1 | after_sale_rule.three_guarantees | three_guarantees | - | 5 | - | 三包服务承诺配置规则 | - | R1 |
| 2 | after_sale_rule.three_guarantees.options | options | - | 3 | - | 三包服务类型，1-寄修，2-延保 | - | R1 |
| 3 | after_sale_rule.three_guarantees.options.options | options | - | 3 | - | 售后天数选项列表 | - | R1 |
| 4 | after_sale_rule.three_guarantees.options.options.value | value | - | 2 | 180 | 选项值 | 56 | - |
| 4 | after_sale_rule.three_guarantees.options.options.name | name | - | 2 | 180天 | 选项名称 | 56 | - |
| 3 | after_sale_rule.three_guarantees.options.name | name | - | 2 | 寄修 | 三包服务类型名称 | 56 | - |
| 3 | after_sale_rule.three_guarantees.options.value | value | - | 2 | 1 | 三包服务类型值 | 56 | - |
| 2 | after_sale_rule.three_guarantees.must_select | must_select | - | 4 | true | 是否必填 | - | - |
| 2 | after_sale_rule.three_guarantees.enable | enable | - | 4 | true | 是否支持三包服务 | - | - |
| 1 | after_sale_rule.allergy_return_v2_rule | allergy_return_v2_rule | - | 5 | - | 过敏包退规则 | - | R1 |
| 2 | after_sale_rule.allergy_return_v2_rule.enable | enable | - | 2 | true | 是否可选过敏包退 | - | - |
| 2 | after_sale_rule.allergy_return_v2_rule.must_select | must_select | - | 2 | true | 是否必选过敏包退 | - | - |
| 2 | after_sale_rule.allergy_return_v2_rule.options | options | - | 3 | - | 可选项 | - | R1 |
| 3 | after_sale_rule.allergy_return_v2_rule.options.value | value | - | 2 | 0-不支持，1-支持 | 可选项对应value | - | - |
| 3 | after_sale_rule.allergy_return_v2_rule.options.name | name | - | 2 | 支持过敏包退 | 可选项名称 | - | - |
| 1 | after_sale_rule.large_product_rule | large_product_rule | - | 5 | - | 大件商品规则 | - | R1 |
| 2 | after_sale_rule.large_product_rule.enable | enable | - | 4 | true | 是否可选大件商品 | - | - |
| 2 | after_sale_rule.large_product_rule.must_select | must_select | - | 4 | true | 是否必须大件商品 | - | - |
| 2 | after_sale_rule.large_product_rule.options | options | - | 3 | - | 可选项 | - | R1 |
| 3 | after_sale_rule.large_product_rule.options.name | name | - | 2 | 支持大件商品 | 可选项名称 | - | - |
| 3 | after_sale_rule.large_product_rule.options.value | value | - | 2 | 0-不支持大件，1-支持大件 | 可选项对应value | - | - |
| 1 | after_sale_rule.supply_day_return_rule | supply_day_return_rule | - | 5 | - | 无理由退货规则 | - | R1 |
| 2 | after_sale_rule.supply_day_return_rule.enable | enable | - | 4 | true | true 支持七天无理由，false 不支持七天无理由 | - | R1 |
| 2 | after_sale_rule.supply_day_return_rule.options | options | - | 3 | - | 可选的无理由退货选项列表 | - | R1 |
| 3 | after_sale_rule.supply_day_return_rule.options.name | name | - | 2 | 7天无理由退货（使用后不支持） | 天无理由退货文案描述 | - | R1 |
| 3 | after_sale_rule.supply_day_return_rule.options.value | value | - | 2 | 7-5 | 无理由退货的类型 | - | R1 |
| 0 | reference_price_rule | reference_price_rule | - | 5 | - | 参考价相关规则 | - | R1 |
| 1 | reference_price_rule.is_support | is_support | - | 4 | true | true表示可填写参考价，false表示不可填写参考价 | - | R1 |
| 1 | reference_price_rule.is_required | is_required | - | 4 | true | true表示必填参考价，false表示不必填参考价 | - | R1 |
| 1 | reference_price_rule.certificate_types | certificate_types | - | 8 | {     "1" : "厂商建议零售价",     "2" : "吊牌价",     "3" : "定价",     "4" : "官网零售价" } | 参考价凭证类型枚举值与对应的显示名称，比如{     "1" : "厂商建议零售价",     "2" : "吊牌价",     "3" : "定价",     "4" : "官网零售价" } | - | R1 |
| 1 | reference_price_rule.lower_sku_price_times | lower_sku_price_times | - | 99 | 10 | 参考价最高高于最低SKU价格的倍数，比如最低SKU价格为1，此值为10，则参考价不可高于10 | - | R1 |
| 0 | spu_control_rule | spu_control_rule | - | 5 | - | spu管控规则 | - | R1 |
| 1 | spu_control_rule.support_spu_product | support_spu_product | - | 4 | true | 是否支持spu发品 | - | R1 |
| 1 | spu_control_rule.control_type | control_type | - | 99 | 2 | 0不管控 1弱管控 2强管控 | - | R1 |
| 1 | spu_control_rule.support_create_spu | support_create_spu | - | 4 | true | 是否支持新建spu | - | R1 |
| 1 | spu_control_rule.support_rectify_spu | support_rectify_spu | - | 4 | false | 是否支持spu纠错 | - | R1 |
| 1 | spu_control_rule.support_report_spu | support_report_spu | - | 4 | true | 是否支持spu举报 | - | R1 |
| 1 | spu_control_rule.no_need_audit_spu | no_need_audit_spu | - | 4 | false | 是否spu免审 | - | R1 |
| 0 | product_spec_rule | product_spec_rule | - | 5 | - | 商品规格约束 | - | R1 |
| 1 | product_spec_rule.all_spec_pic_required | all_spec_pic_required | - | 4 | true | 为true时，规格图要么全不填，要么全填 | - | - |
| 1 | product_spec_rule.support_property_sequence_variable | support_property_sequence_variable | - | 4 | false | 是否支持规格项顺序调整，true表示支持 | - | - |
| 1 | product_spec_rule.spec_rule_code | spec_rule_code | - | 2 | "" | 【废弃字段,请勿依赖】totally_use_given_spec：完全使用系统下发规格；partly_use_given_spec部分使用系统下发规格；not_use_given_spec：不管控规格;"":为空时表示不管控规格 | - | R1 |
| 1 | product_spec_rule.required_spec_details | required_spec_details | - | 3 | - | 商品规格列表 | - | R1 |
| 2 | product_spec_rule.required_spec_details.sell_property_name | sell_property_name | - | 2 | 颜色 | 规格项名称 | - | R1 |
| 2 | product_spec_rule.required_spec_details.sell_property_id | sell_property_id | - | 99 | 123 | 规格项id | - | R1 |
| 2 | product_spec_rule.required_spec_details.property_values | property_values | - | 3 | - | 规格值选项 | - | R1 |
| 3 | product_spec_rule.required_spec_details.property_values.sell_property_value_id | sell_property_value_id | - | 99 | 1234 | 规格值id | - | R1 |
| 3 | product_spec_rule.required_spec_details.property_values.sell_property_value_name | sell_property_value_name | - | 2 | 红色 | 规格值名称 | - | R1 |
| 3 | product_spec_rule.required_spec_details.property_values.value_pic | value_pic | - | 5 | - | 规格值图片 | - | R1 |
| 4 | product_spec_rule.required_spec_details.property_values.value_pic.pic_value | pic_value | - | 2 | #FFFF | 规格值图片内容 | - | - |
| 4 | product_spec_rule.required_spec_details.property_values.value_pic.pic_type | pic_type | - | 2 | rgb | 规格值图片类型rgb和url | - | - |
| 2 | product_spec_rule.required_spec_details.support_remark | support_remark | - | 4 | true | 是否支持备注 | - | R1 |
| 2 | product_spec_rule.required_spec_details.support_diy | support_diy | - | 4 | false | 是否可以自定义规格值 | - | R1 |
| 2 | product_spec_rule.required_spec_details.is_required | is_required | - | 4 | false | 是否必填 | - | - |
| 2 | product_spec_rule.required_spec_details.value_display_style | value_display_style | - | 2 | cascader | 规格样式，cascader是为导航样式 | - | - |
| 2 | product_spec_rule.required_spec_details.measure_templates | measure_templates | - | 3 | - | 度量衡模版，可能有多个 | - | R1 |
| 3 | product_spec_rule.required_spec_details.measure_templates.display_name | display_name | - | 2 | xx模版 | 模版名称 | - | - |
| 3 | product_spec_rule.required_spec_details.measure_templates.template_id | template_id | - | 99 | 12 | 度量衡模版id | - | - |
| 3 | product_spec_rule.required_spec_details.measure_templates.value_modules | value_modules | - | 3 | - | 度量衡模版模块内容，一个模版多个模块 | - | R1 |
| 4 | product_spec_rule.required_spec_details.measure_templates.value_modules.module_id | module_id | - | 99 | 1 | 模块id | - | - |
| 4 | product_spec_rule.required_spec_details.measure_templates.value_modules.prefix | prefix | - | 2 | "" | 前缀 | - | - |
| 4 | product_spec_rule.required_spec_details.measure_templates.value_modules.suffix | suffix | - | 2 | "" | 后缀 | - | - |
| 4 | product_spec_rule.required_spec_details.measure_templates.value_modules.input_type | input_type | - | 2 | input | 输入类型：枚举 enum, 输入 input， enum_diy 枚举可输入 | - | - |
| 4 | product_spec_rule.required_spec_details.measure_templates.value_modules.values | values | - | 3 | - | 度量衡值选项 | - | R1 |
| 5 | product_spec_rule.required_spec_details.measure_templates.value_modules.values.value_name | value_name | - | 2 | 8G | 度量衡值 | - | - |
| 4 | product_spec_rule.required_spec_details.measure_templates.value_modules.units | units | - | 3 | - | 度量衡单位 | - | R1 |
| 5 | product_spec_rule.required_spec_details.measure_templates.value_modules.units.unit_id | unit_id | - | 99 | 2 | 度量衡单位id | - | - |
| 5 | product_spec_rule.required_spec_details.measure_templates.value_modules.units.unit_name | unit_name | - | 2 | g | 度量衡单位名称 | - | - |
| 4 | product_spec_rule.required_spec_details.measure_templates.value_modules.validate_rule | validate_rule | - | 5 | - | 度量衡规则 | - | R1 |
| 5 | product_spec_rule.required_spec_details.measure_templates.value_modules.validate_rule.data_type | data_type | - | 2 | integer | 数据类型，integer、float | - | - |
| 5 | product_spec_rule.required_spec_details.measure_templates.value_modules.validate_rule.precision | precision | - | 99 | 0 | 小数位数，data_type为float时有值 | - | - |
| 5 | product_spec_rule.required_spec_details.measure_templates.value_modules.validate_rule.min | min | - | 9 | 2 | 最小值 | - | - |
| 5 | product_spec_rule.required_spec_details.measure_templates.value_modules.validate_rule.max | max | - | 9 | 100 | 最大值 | - | - |
| 5 | product_spec_rule.required_spec_details.measure_templates.value_modules.validate_rule.unit_rules | unit_rules | - | 3 | - | 单位规则明细 | - | R1 |
| 6 | product_spec_rule.required_spec_details.measure_templates.value_modules.validate_rule.unit_rules.unit_id | unit_id | - | 99 | 2 | 度量衡单位id | - | - |
| 6 | product_spec_rule.required_spec_details.measure_templates.value_modules.validate_rule.unit_rules.min | min | - | 9 | 2 | 最小值 | - | - |
| 6 | product_spec_rule.required_spec_details.measure_templates.value_modules.validate_rule.unit_rules.max | max | - | 9 | 10 | 最大值 | - | - |
| 2 | product_spec_rule.required_spec_details.need_paging_query_value | need_paging_query_value | - | 4 | false | 是否需要二次查询规格值 | - | - |
| 2 | product_spec_rule.required_spec_details.navigation_properties | navigation_properties | - | 3 | - | 导航属性 | - | R1 |
| 3 | product_spec_rule.required_spec_details.navigation_properties.property_id | property_id | - | 99 | 1 | 导航属性id | - | - |
| 3 | product_spec_rule.required_spec_details.navigation_properties.property_name | property_name | - | 2 | 色系 | 导航属性名称 | - | - |
| 2 | product_spec_rule.required_spec_details.property_default_display | property_default_display | - | 4 | 1 | 1 | - | - |
| 1 | product_spec_rule.max_spec_num_limit | max_spec_num_limit | - | 99 | 3 | 最大可支持的规格层级数量 | - | R1 |
| 1 | product_spec_rule.spec_combination_limit | spec_combination_limit | - | 99 | 450 | sku组合数量上限 | - | R1 |
| 1 | product_spec_rule.spec_single_limit | spec_single_limit | - | 99 | 200 | 单个规格的规格值数量上限 | - | R1 |
| 1 | product_spec_rule.support_property_diy | support_property_diy | - | 4 | false | 是否支持规格项自定义 | - | - |
| 0 | component_template_rule | component_template_rule | - | 5 | - | 商品尺码模板配置规则 | - | R1 |
| 1 | component_template_rule.size_dimension_rule | size_dimension_rule | - | 8 | - | 尺码列规则 | - | R1 |
| 2 | component_template_rule.size_dimension_rule.multi_values_max | multi_values_max | - | 99 | 5 | 多值最大数量 | - | - |
| 2 | component_template_rule.size_dimension_rule.split_symbol | split_symbol | - | 2 | / | 多值分隔符 | - | - |
| 2 | component_template_rule.size_dimension_rule.letter_range_max | letter_range_max | - | 2 | K | 字母上界 | - | - |
| 2 | component_template_rule.size_dimension_rule.letter_range_min | letter_range_min | - | 2 | A | 字母下限 | - | - |
| 2 | component_template_rule.size_dimension_rule.num_max | num_max | - | 99 | 120 | 数字上限 | - | - |
| 2 | component_template_rule.size_dimension_rule.num_min | num_min | - | 99 | 20 | 数字下限 | - | - |
| 2 | component_template_rule.size_dimension_rule.options | options | - | 8 | - | 尺码列枚举 | - | R1 |
| 3 | component_template_rule.size_dimension_rule.options.sub_options | sub_options | - | 3 | ["70A","70B","70C","70D"] | 子options | - | R1 |
| 2 | component_template_rule.size_dimension_rule.type | type | - | 2 | "bra_cup" | 尺码列类型 | - | - |
| 1 | component_template_rule.correct_size_suggestion | correct_size_suggestion | - | 5 | - | 偏码建议 | - | R1 |
| 2 | component_template_rule.correct_size_suggestion.options | options | - | 3 | - | 偏码建议选项 | - | R1 |
| 3 | component_template_rule.correct_size_suggestion.options.sizes | sizes | - | 3 | [0.5,1,2] | 建议选大/小x码 | - | R1 |
| 3 | component_template_rule.correct_size_suggestion.options.value_name | value_name | - | 2 | 尺码偏大 | 偏码选项名 | - | - |
| 3 | component_template_rule.correct_size_suggestion.options.value_id | value_id | - | 99 | 1 | 偏码选项id | - | - |
| 2 | component_template_rule.correct_size_suggestion.available | available | - | 4 | true | 是否支持 | - | - |
| 1 | component_template_rule.size_dimensions | size_dimensions | - | 5 | - | 尺码列配置 | - | R1 |
| 2 | component_template_rule.size_dimensions.useful_dimensions | useful_dimensions | - | 3 | ["身高（cm）","体重(斤)"] | 有用列 | - | R1 |
| 2 | component_template_rule.size_dimensions.other_dimensions | other_dimensions | - | 3 | ["肩宽(cm)", "衣长(cm)"] | 其他可用列 | - | R1 |
| 1 | component_template_rule.interval_size_symbol | interval_size_symbol | - | 3 | ["-","~","/","～","—"] | 区间符号 | - | R1 |
| 1 | component_template_rule.size_dimension_range | size_dimension_range | - | 8 | - | 维度下尺码范围 | - | R1 |
| 2 | component_template_rule.size_dimension_range.max | max | - | 99 | 200 | 最小范围 | - | - |
| 2 | component_template_rule.size_dimension_range.min | min | - | 99 | 40 | 最大范围 | - | - |
| 1 | component_template_rule.support_template_sub_type | support_template_sub_type | - | 2 | clothing | 当前类目支持的尺码模版子类型 | - | - |
| 1 | component_template_rule.is_show | is_show | - | 4 | true | 是否展示尺码信息 | - | R1 |
| 1 | component_template_rule.must_input | must_input | - | 4 | false | 尺码信息是否必填 | - | R1 |
| 0 | main_image_three_to_four_rule | main_image_three_to_four_rule | - | 5 | - | 商品主图3:4配置规则 | - | R1 |
| 1 | main_image_three_to_four_rule.is_show | is_show | - | 4 | true | 是否展示主图3:4信息 | - | - |
| 1 | main_image_three_to_four_rule.must_input | must_input | - | 4 | false | 主图3:4信息是否必填 | - | - |
| 0 | gold_price_rule | gold_price_rule | - | 5 | - | 金价信息，计价金类目下sku价格可以按照公式进行计算（价格=克重*每克价格+加工费），本字段提供相关信息 | - | R1 |
| 1 | gold_price_rule.price_rules | price_rules | - | 3 | - | 价格规则信息，内有黄金的不同的单位价格以及枚举 | - | R1 |
| 2 | gold_price_rule.price_rules.can_select | can_select | - | 4 | true | 是否可选，true表示可选，false表示不可选，如果不可选则表示商家没有设置过基础金价，需要前往抖店后台设置 | - | - |
| 2 | gold_price_rule.price_rules.desc | desc | - | 2 | 投资金基础金价：100元/克 | 金价描述 | - | - |
| 2 | gold_price_rule.price_rules.value | value | - | 99 | 12300 | 每克重黄金对应的价格，单位：分 | - | - |
| 2 | gold_price_rule.price_rules.type | type | - | 99 | 1 | 价格规则枚举：<br>1是投资金<br>2是首饰金 | - | - |
| 1 | gold_price_rule.sell_property_id | sell_property_id | - | 2 | 4530 | 销售属性（规格）id，价格基于这个规格填写的数值按照公式进行计算 | - | - |
| 1 | gold_price_rule.is_required | is_required | - | 4 | true | 是否必填，true表示必填，false表示非必填 | - | - |
| 1 | gold_price_rule.is_show | is_show | - | 4 | true | 是否需要展示（可填），true表示需要展示（可填），false表示无需展示（不可填） | - | - |
| 0 | extra_rule | extra_rule | - | 5 | - | 其他规则 | - | R1 |
| 1 | extra_rule.home_install_service_rule | home_install_service_rule | - | 5 | - | 上门安装服务规则 | - | R1 |
| 2 | extra_rule.home_install_service_rule.options | options | - | 3 | - | 上门安装可选模式 | - | R1 |
| 3 | extra_rule.home_install_service_rule.options.options | options | - | 3 | - | 可选模版 | - | R1 |
| 4 | extra_rule.home_install_service_rule.options.options.name | name | - | 2 | 模版1 | 该安装模式下可选模版名称 | - | - |
| 4 | extra_rule.home_install_service_rule.options.options.value | value | - | 2 | 1 | 该安装模式下可选模版id | - | - |
| 3 | extra_rule.home_install_service_rule.options.value | value | - | 2 | - | 安装服务模式 | - | - |
| 3 | extra_rule.home_install_service_rule.options.name | name | - | 2 | 选择平台合作服务商 | 安装服务模式名称 | - | - |
| 2 | extra_rule.home_install_service_rule.must_select | must_select | - | 4 | true | 是否必选 | - | - |
| 1 | extra_rule.c2b_customize_rule | c2b_customize_rule | - | 5 | - | c2b定制相关规则 | - | R1 |
| 2 | extra_rule.c2b_customize_rule.selected_fulfillment_rule | selected_fulfillment_rule | - | 5 | - | 支持c2b定制时可用的履约规则 | - | R1 |
| 3 | extra_rule.c2b_customize_rule.selected_fulfillment_rule.normal_rule | normal_rule | - | 5 | - | 支持c2b定制时可用的发货规则 | - | R1 |
| 4 | extra_rule.c2b_customize_rule.selected_fulfillment_rule.normal_rule.description | description | - | 2 | 定制商品的发货时间从消费者上传定制信息后开始计算，为提升转化，商详页的时效文案展示为“上传定制信息后x天内发货”，定制商品仅支持配置48小时以上的时间。 | 描述信息 | - | - |
| 4 | extra_rule.c2b_customize_rule.selected_fulfillment_rule.normal_rule.delay_options | delay_options | - | 3 | - | 可用的延迟发货天数 | - | R1 |
| 4 | extra_rule.c2b_customize_rule.selected_fulfillment_rule.normal_rule.deny_description | deny_description | - | 2 | 不可用原因 | 不可用信息 | - | - |
| 4 | extra_rule.c2b_customize_rule.selected_fulfillment_rule.normal_rule.display | display | - | 2 | true | 是否可见 | - | - |
| 4 | extra_rule.c2b_customize_rule.selected_fulfillment_rule.normal_rule.support | support | - | 2 | true | 是否支持 | - | - |
| 2 | extra_rule.c2b_customize_rule.app_list | app_list | - | 3 | - | 可选小程序 | - | R1 |
| 3 | extra_rule.c2b_customize_rule.app_list.name | name | - | 2 | 小程序名称 | 小程序名称 | - | - |
| 3 | extra_rule.c2b_customize_rule.app_list.value | value | - | 2 | abcde | 小程序id | - | - |
| 2 | extra_rule.c2b_customize_rule.supply_day_return_selector | supply_day_return_selector | - | 3 | - | 支持c2b定制时可用的7天无理由 | - | R1 |
| 3 | extra_rule.c2b_customize_rule.supply_day_return_selector.name | name | - | 2 | 七天无理由退货（定制类不支持） | 7天无理由选项名称 | - | - |
| 3 | extra_rule.c2b_customize_rule.supply_day_return_selector.value | value | - | 2 | 7-6 | 7天无理由选项值 | - | - |
| 2 | extra_rule.c2b_customize_rule.enable | enable | - | 4 | true | 是否支持c2b定制 | - | - |
| 0 | trade_rule | trade_rule | - | 5 | - | 交易相关的规则 | - | R1 |
| 1 | trade_rule.support_auto_charge_rule | support_auto_charge_rule | - | 5 | - | 自动充值相关的规则 | - | R1 |
| 2 | trade_rule.support_auto_charge_rule.value | Value | - | 4 | false | 是否支持自动充值 | - | - |
| 2 | trade_rule.support_auto_charge_rule.disabled | Disabled | - | 4 | 1 | 1 | - | - |
| 0 | sku_rule | sku_rule | - | 5 | - | sku规则 | - | R1 |
| 1 | sku_rule.sku_picture_rule | sku_picture_rule | - | 5 | - | sku图填写规则 | - | R1 |
| 2 | sku_rule.sku_picture_rule.require_type | require_type | - | 99 | 1 | sku图必填类型：1-必填且所有SKU必须填写；2-非必填，要么全部填写，要么全部为空，不允许部分填写 | - | - |
| 2 | sku_rule.sku_picture_rule.support | support | - | 4 | true | 是否支持设置SKU图 | - | - |
| 1 | sku_rule.support_spec_model_code | support_spec_model_code | - | 4 | true | 是否支持国补商品型号 | - | - |
| 1 | sku_rule.support_barcode | support_barcode | - | 4 | true | 是否支持填写条形码 | - | - |
| 1 | sku_rule.sku_classification_rule | sku_classification_rule | - | 5 | - | sku分类信息填写规则 | - | R1 |
| 2 | sku_rule.sku_classification_rule.options | options | - | 3 | - | sku分类信息扩展项 | - | R1 |
| 3 | sku_rule.sku_classification_rule.options.example | example | - | 2 | "标题/主图主要售卖洗发水，洗发水1瓶为主售款（单品）。主要销售成箱装饮料，饮料1箱为主售款单品" | sku分类对应举例 | - | - |
| 3 | sku_rule.sku_classification_rule.options.description | description | - | 2 | "SKU为单个商品，与标题、主图、叶子类目描述一致，为该商品主要售卖款式" | sku分类对应介绍 | - | - |
| 3 | sku_rule.sku_classification_rule.options.value | value | - | 2 | "main_sale_single_product" | sku分类枚举信息 | - | - |
| 3 | sku_rule.sku_classification_rule.options.name | name | - | 2 | "主售款（单品）" | sku分类信息中文名称 | - | - |
| 2 | sku_rule.sku_classification_rule.must_select | must_select | - | 4 | false | sku分类信息是否必填 | - | - |
| 2 | sku_rule.sku_classification_rule.enable | enable | - | 4 | true | 是否允许填写sku分类信息 | - | - |
| 0 | qualification_rule | qualification_rule | - | 3 | - | 资质规则，类目属性影响资质必填和资质属性必填 | - | R1 |
| 1 | qualification_rule.is_qianchuan_need | isQianchuanNeed | - | 4 | true | 是否千川收取资质 | - | - |
| 1 | qualification_rule.is_required | isRequired | - | 4 | true | 是否必填 | - | - |
| 1 | qualification_rule.text_list | newTextList | - | 3 | 经营进口商品，需提供近一年内的中华人民共和国海关进口货物报关单。报关单上应展现对应品牌名称，及商品名称。 | 资质要求描述文字 | - | R1 |
| 1 | qualification_rule.name | name | - | 2 | 3C证书编号 | 资质名称 | - | - |
| 1 | qualification_rule.key | key | - | 2 | 1234567 | 资质ID | - | - |
| 1 | qualification_rule.matchable_rule | matchableRule | - | 3 | - | 资质规则和规则的效果 | - | R1 |
| 2 | qualification_rule.matchable_rule.rule_clause | ruleClause | - | 8 | - | 资质规则生效的触发条件<br>结构：属性id -> 属性值clause<br>作用：当命中ruleClause中给出的全部属性对时，刷新相关资质的「必填/非必填」配置 | - | R1 |
| 3 | qualification_rule.matchable_rule.rule_clause.operand | operand | - | 99 | 1 | 1 - 相等，2 - 不相等， 3 - 包含， 4 - 不包含 | - | - |
| 3 | qualification_rule.matchable_rule.rule_clause.operand_str | operandStr | - | 2 | 等于 | 操作（值枚举："等于"、"不等于"） | - | - |
| 3 | qualification_rule.matchable_rule.rule_clause.property_values | propertyValues | - | 3 | [123,456] | 属性值ID列表 | - | R1 |
| 2 | qualification_rule.matchable_rule.property_effect | propertyEffect | - | 8 | - | 资质规则触发时，受影响的类目属性<br>结构：属性id -> 属性effect（包含属性是否必填，属性名是否需要被覆写）<br>作用：当命中ruleClause中给出的全部属性对时，刷新相关资质的「必填/非必填」配置 | - | R1 |
| 3 | qualification_rule.matchable_rule.property_effect.label_name | label_name | - | 2 | 企业生产名称 | 类目属性名称是否需要被覆写成label_name（目前只有资质证号有这个逻辑） | - | - |
| 3 | qualification_rule.matchable_rule.property_effect.is_required | is_required | - | 99 | 1 | 类目属性是否必填（目前只有生产企业名称和资质证号）: 0-必填, 1-非必填 | - | - |
| 0 | pick_up_method_rule | pick_up_method_rule | - | 5 | - | 提取方式规则 | - | R1 |
| 1 | pick_up_method_rule.virtual_goods_rule | virtual_goods_rule | - | 5 | - | 虚拟商品提货方式规则 | - | R1 |
| 2 | pick_up_method_rule.virtual_goods_rule.support_show_checkout_entry | support_show_checkout_entry | - | 4 | true | 是否可能设置订单页展示核销入口；当该字段为 true且提取方式为「使用电子凭证」或「充值直连」时，可以设置 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/getProductUpdateRule?app_key=your_appkey_here&method=product.getProductUpdateRule&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/getProductUpdateRule?app_key=your_appkey_here&method=product.getProductUpdateRule&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductGetProductUpdateRuleRequest request = new ProductGetProductUpdateRuleRequest();
ProductGetProductUpdateRuleParam param = request.getParam();
param.setCategoryId(20219L);
param.setSenses(1001);
param.setStandardBrandId(20319L);
param.setSpuId(23291L);
ProductGetProductUpdateRuleResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetProductUpdateRuleRequest();
$param = new ProductGetProductUpdateRuleParam();
$request->setParam($param);
$param->category_id = 20219;
$param->senses = 1001;
$param->standard_brand_id = 20319;
$param->spu_id = 23291;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetProductUpdateRuleRequest()
param = request.getParams()
param.category_id = 20219
param.senses = 1001
param.standard_brand_id = 20319
param.spu_id = 23291
response = request.execute(accessToken)

```

### go

```go
request := product_getProductUpdateRule_request.New()
param := request.GetParams()
param.CategoryId = 20219
param.Senses = 1001
param.StandardBrandId = 20319
param.SpuId = 23291
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetProductUpdateRuleRequest();
var param = request.BuildParam();
param.CategoryId = 20219;
param.Senses = 1001;
param.StandardBrandId = 20319;
param.SpuId = 23291;
var response = request.Execute<ProductGetProductUpdateRuleResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 2010013:获取账号信息失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:获取类目标失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:类目ID不合法 | 检查类目id |
| 50002 | 业务处理失败 | isv.business-failed:2010346 | 2010346:未绑定商家仓 | 检查商家仓 |
| 50002 | 业务处理失败 | isv.business-failed:2010109 | 2010109:当前类目未开通主图3:4上传功能，请删除主图3:4 | 删除主图3:4后重新发布 |
| 50002 | 业务处理失败 | isv.business-failed:110201001 | 未查询到该类目 | 请检查类目id |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
