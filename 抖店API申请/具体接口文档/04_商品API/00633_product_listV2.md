# /product/listV2

> 中文说明：批量查询商品列表  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/633>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/listV2 |
| 中文名称 | 批量查询商品列表 |
| 文档目录 | 商品API |
| Article ID | 633 |
| 文档版本 | V2.03 |
| 官方更新时间 | 2026/1/21 11:08:03 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

使用场景：批量查询商家抖店商品信息
1、支持使用商品状态，商品类型、商品创建时间和更新时间筛选商品
2、最大支持1次查询1万条，如返回商品数据大于1万条，请增加筛选条件。

## 权限包

- 商品 / 商品信息查询（packageType=1）；适用应用类目：跨境金服、装修设计、客服工具-微应用、微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、跨境供应链服务、商家自研模版、商家自研组件、撮合服务商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、数据应用、打单发货-微应用、自研微组件、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、装修模板、定制装修、装修组件、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、虚拟充值、即时零售商家自研、直播工具、互动营销定制、直播间导购-微应用、短信营销、订单管理、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 订单 / 小程序订单基础场景（packageType=10）；适用应用类目：内部测类目
- 内部二方开放 / 搜广内部定向权限包（packageType=1）
- 内部二方开放 / 火山内容云（packageType=10）
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用
- 定向权限 / 定向权限包（packageType=1）
- 商品 / aigc商品管理（packageType=10）；适用应用类目：AIGC视频创作
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电
- 开放平台 / 盲盒互动（服务商）（packageType=1）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.listV2 | 调用的API接口名称 | - | - |
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
| 0 | status | status | false | 1 | 0 | 商品在店铺中状态: 0-在线；1-下线；2-删除；详见商品状态机：https://op.jinritemai.com/docs/question-docs/92/2070 | - | - |
| 0 | check_status | check_status | false | 1 | 3 | 商品审核状态: 1-未提交；2-待审核；3-审核通过；4-审核未通过；5-封禁；7-审核通过待上架；详见商品状态机：https://op.jinritemai.com/docs/question-docs/92/2070 | - | - |
| 0 | product_type | product_type | false | 1 | 0 | 商品类型；0-普通；1-新客商品；3-虚拟；6-玉石闪购；7-云闪购 ；127-其他类型； | - | - |
| 0 | start_time | start_time | false | 1 | 1619161933 | 商品创建开始时间，unix时间戳，单位：秒； | - | - |
| 0 | end_time | end_time | false | 1 | 1619162000 | 商品创建结束时间，unix时间戳，单位：秒； | - | - |
| 0 | update_start_time | update_start_time | false | 1 | 1619161933 | 商品更新开始时间，unix时间戳，单位：秒；注意：查询范围是update_start_time和update_end_time之间的数据，不包含入参时间。 | - | - |
| 0 | update_end_time | update_end_time | false | 1 | 1619161933 | 商品更新结束时间，unix时间戳，单位：秒；注意：查询范围是update_start_time和update_end_time之间的数据，不包含入参时间。 | - | - |
| 0 | page | page | true | 1 | 1 | 页码，从1开始，最大为100；page* size最大不能超过1万条 | - | - |
| 0 | size | size | true | 1 | 10 | 页数，填写范围1~100；page* size最大不能超过1万条 | - | - |
| 0 | store_id | store_id | false | 1 | 123456 | 小时达商家使用的门店id，即时零售单店版，无需使用 | - | - |
| 0 | name | name | false | 2 | 标题 | 商品标题，支持模糊匹配 | - | - |
| 0 | product_id | product_id | false | 3 | 3600137140018749665 | 商品id，最大支持传入100个； | - | - |
| 0 | use_cursor | use_cursor | false | 4 | true | 是否使用游标，true 使用，false 不使用；使用游标能遍历全量商品，不会受到只能查询到10000个数据的影响。<br>特别说明：使用游标查询时，page字段失效，只会查询当前游标后面size条数据；根据获取查询数据为空来判断本次遍历结束；查询过程中数据发生变更，可能重复、遗漏数据；需要保证每次查询的筛选条件一致。 | - | - |
| 0 | cursor_id | cursor_id | false | 2 | WzE2ODI1Nzc4MjksMTc2NDMxMDczMDU3MDg0M10= | 游标id，结合use_cursor使用（use_cursor=true）;首次查询时不需要传值，每次查询结果会返回cursor_id，下一次查询时复制给该字段。当查询返回数据为空时，结束遍历。 | - | - |
| 0 | can_combine_product | can_combine_product | false | 4 | true | 能否参加搭配 | - | - |
| 0 | lookup_option | lookup_option | false | 5 | - | 查询option | - | - |
| 1 | lookup_option.need_name_affix | needNameAffix | false | 4 | true | 是否需要获取标题前后缀 | - | - |
| 1 | lookup_option.need_title_limit | needTitleLimit | false | 4 | true | 是否需要获取商品标题长度限制规则 | - | - |
| 0 | need_rectification_info | need_rectification_info | false | 4 | false | 是否需要自动整改信息 | - | - |
| 0 | query_options | query_options | false | 5 | - | 查询定制参数 | - | - |
| 1 | query_options.exist_category_misplaced | exist_category_misplaced | false | 4 | false | 只查询类目错放的商品 | - | - |
| 1 | query_options.exist_audit_reject_suggest | exist_audit_reject_suggest | false | 4 | false | 只查询有驳回建议的商品 | - | - |
| 1 | query_options.need_audit_reject_suggest | need_audit_reject_suggest | false | 4 | false | 需要返回审核驳回建议信息 | - | - |
| 0 | need_check_out | need_check_out | false | 4 | false | 是否需要核销 | - | - |
| 0 | sku_codes | sku_codes | false | 3 | aaabbcc | sku商家编码，最大支持传入50个 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 商品数据 | - | R1 |
| 1 | data.original_category_detail | original_category_detail | - | 5 | - | 门捷列夫类目详情，，临时字段，类目数升级期间使用的字段，主要返回老的类目信息，方便开发者做映射使用，升级结束后字段会下线，下线时间另行通知 | - | R1 |
| 2 | data.original_category_detail.first_cid | first_cid | - | 1 | 20117 | 一级类目id（临时字段） | 72 | - |
| 2 | data.original_category_detail.second_cid | second_cid | - | 1 | 22139 | 二级类目id（临时字段） | 72 | - |
| 2 | data.original_category_detail.third_cid | third_cid | - | 1 | 28901 | 三级类目id（临时字段） | 72 | - |
| 2 | data.original_category_detail.fourth_cid | fourth_cid | - | 1 | 31800 | 四级类目id（临时字段） | 72 | - |
| 2 | data.original_category_detail.first_cname | first_cname | - | 2 | 本地生活服务 | 一级类目名（临时字段） | 72 | - |
| 2 | data.original_category_detail.second_cname | second_cname | - | 2 | 餐饮美食卡券 | 二级类目名（临时字段） | 72 | - |
| 2 | data.original_category_detail.third_cname | third_cname | - | 2 | 甜品/冰淇淋/咖啡/冷饮 | 三级类目名（临时字段） | 72 | - |
| 2 | data.original_category_detail.fourth_cname | fourth_cname | - | 2 | 咖啡 | 四级类目名（临时字段） | 72 | - |
| 1 | data.future_category_detail | future_category_detail | - | 5 | - | 标准类目详情（新类目信息）方便开发者做映射使用，升级结束后字段会下线，下线时间另行通知 | - | R1 |
| 2 | data.future_category_detail.first_cid | first_cid | - | 1 | 1000007740 | 一级类目id（临时字段） | 72 | - |
| 2 | data.future_category_detail.second_cid | second_cid | - | 1 | 1000007878 | 二级类目id（临时字段） | 72 | - |
| 2 | data.future_category_detail.third_cid | third_cid | - | 1 | 1000007926 | 三级类目id（临时字段） | 72 | - |
| 2 | data.future_category_detail.fourth_cid | fourth_cid | - | 1 | 1000008663 | 四级类目id（临时字段） | 72 | - |
| 2 | data.future_category_detail.first_cname | first_cname | - | 2 | 黄金珠宝玉石 | 一级类目名（临时字段） | 72 | - |
| 2 | data.future_category_detail.second_cname | second_cname | - | 2 | 合成宝石 | 二级类目名（临时字段） | 72 | - |
| 2 | data.future_category_detail.third_cname | third_cname | - | 2 | 合成钻石 | 三级类目名（临时字段） | 72 | - |
| 2 | data.future_category_detail.fourth_cname | fourth_cname | - | 2 | 裸石 | 四级类目名（临时字段） | 72 | - |
| 1 | data.category_misplace_rectify_status | category_misplace_rectify_status | - | 1 | 1 | 类目错放整改状态: 1 待整改，2 超期未改 | - | - |
| 1 | data.recommend_category_topn | recommend_category_topn | - | 3 | - | 推荐类目topN列表 | - | R1 |
| 2 | data.recommend_category_topn.leaf_cid | leaf_cid | - | 1 | 20006 | 叶子类目id | - | - |
| 2 | data.recommend_category_topn.enable | enable | - | 4 | false | 类目是否允许发品 | - | - |
| 1 | data.category_misplace_alert_deadline | category_misplace_alert_deadline | - | 1 | 1619173371 | 类目错放整改时间，以秒记 | - | - |
| 1 | data.recommend_category | recommend_category | - | 5 | - | 推荐类目信息 | - | R1 |
| 2 | data.recommend_category.leaf_cid | leaf_cid | - | 1 | 20006 | 叶子类目id | - | - |
| 2 | data.recommend_category.enable | enable | - | 4 | false | 类目是否允许发品 | - | - |
| 2 | data.recommend_category.is_leaf | is_leaf | - | 4 | false | 是否叶子类目 | - | - |
| 2 | data.recommend_category.fourth_cname | fourth_cname | - | 2 | "" | 四级类目名称 | - | - |
| 2 | data.recommend_category.third_cname | third_cname | - | 2 | "" | 三级类目名称 | - | - |
| 2 | data.recommend_category.second_cname | second_cname | - | 2 | "" | 二级类目名称 | - | - |
| 2 | data.recommend_category.first_cname | first_cname | - | 2 | "女鞋" | 一级类目名称 | - | - |
| 2 | data.recommend_category.fourth_cid | fourth_cid | - | 1 | 0 | 四级类目id | - | - |
| 2 | data.recommend_category.third_cid | third_cid | - | 1 | 0 | 三级类目id | - | - |
| 2 | data.recommend_category.second_cid | second_cid | - | 1 | 0 | 二级类目id | - | - |
| 2 | data.recommend_category.first_cid | first_cid | - | 1 | 20006 | 一级类目id | - | - |
| 1 | data.exist_category_misplaced | exist_category_misplaced | - | 4 | false | 存在类目错放 | - | - |
| 1 | data.product_property | product_property | - | 3 | - | 商品类目属性信息 | - | R1 |
| 2 | data.product_property.property_key | property_key | - | 5 | - | 属性key | - | R1 |
| 3 | data.product_property.property_key.property_id | property_id | - | 1 | 3171 | 属性id | - | - |
| 3 | data.product_property.property_key.property_name | property_name | - | 2 | 货号 | 属性名称 | - | - |
| 2 | data.product_property.property_value | property_value | - | 3 | - | 属性值列表 | - | R1 |
| 3 | data.product_property.property_value.value_id | value_id | - | 1 | 0 | 属性值id | - | - |
| 3 | data.product_property.property_value.value_name | value_name | - | 2 | 123456 | 属性值名称 | - | - |
| 1 | data.freight_id | freight_id | - | 1 | 0 | 运费模版 | - | - |
| 1 | data.is_second_hand_digital | is_second_hand_digital | - | 4 | false | 是否二手数码(成色机) | - | - |
| 1 | data.need_check_out | need_check_out | - | 4 | false | 是否需要核销 | - | - |
| 1 | data.audit_reject_suggestion | audit_reject_suggestion | - | 5 | - | 驳回修改建议 | - | R1 |
| 2 | data.audit_reject_suggestion.pic34_suggestion | pic34_suggestion | - | 5 | - | 34主图建议 | - | R1 |
| 3 | data.audit_reject_suggestion.pic34_suggestion.after_pics | after_pics | - | 3 | 修改后图片，需要重新走素材中心转图 | 修改后图片，需要重新走素材中心转图 | - | R1 |
| 2 | data.audit_reject_suggestion.pic_suggestion | pic_suggestion | - | 5 | - | 1:1主图建议 | - | R1 |
| 3 | data.audit_reject_suggestion.pic_suggestion.after_pics | after_pics | - | 3 | 修改后图片，需要重新走素材中心转图 | 修改后图片，需要重新走素材中心转图 | - | R1 |
| 2 | data.audit_reject_suggestion.name_suggestion | name_suggestion | - | 5 | - | 标题建议 | - | R1 |
| 3 | data.audit_reject_suggestion.name_suggestion.after_name | after_name | - | 2 | 改后标题 | 改后标题 | - | - |
| 2 | data.audit_reject_suggestion.reject_reason | reject_reason | - | 2 | 驳回原因 | 驳回原因 | - | - |
| 1 | data.have_audit_reject_suggest | have_audit_reject_suggest | - | 4 | 是否有驳回修改建议 | 是否有驳回修改建议 | - | - |
| 1 | data.rectify_info_list | rectify_info_list | - | 3 | - | 自动整改信息 | - | R1 |
| 2 | data.rectify_info_list.rectification_info | rectification_info | - | 5 | - | 自动整改信息 | - | R1 |
| 3 | data.rectify_info_list.rectification_info.pic_list | pic_list | - | 3 | - | 整改图片明细 | - | R1 |
| 4 | data.rectify_info_list.rectification_info.pic_list.index | index | - | 1 | 略 | 图片下标 | - | - |
| 4 | data.rectify_info_list.rectification_info.pic_list.url | url | - | 2 | 略 | 图片url | - | - |
| 4 | data.rectify_info_list.rectification_info.pic_list.pic_type | pic_type | - | 7 | 略 | 图片类型 | - | - |
| 3 | data.rectify_info_list.rectification_info.sku_list | sku_list | - | 3 | - | 整改sku明细 | - | R1 |
| 4 | data.rectify_info_list.rectification_info.sku_list.url | url | - | 2 | 略 | 规格图url | - | - |
| 4 | data.rectify_info_list.rectification_info.sku_list.title | title | - | 2 | 略 | 规格名称 | - | - |
| 4 | data.rectify_info_list.rectification_info.sku_list.sku_id | sku_id | - | 1 | 略 | skuid | - | - |
| 2 | data.rectify_info_list.rectify_action | rectify_action | - | 2 | 略 | 整改动作 | - | - |
| 2 | data.rectify_info_list.reject_reason | reject_reason | - | 2 | 略 | 驳回原因 | - | - |
| 1 | data.spec_prices | spec_prices | - | 3 | - | sku信息 | - | R1 |
| 2 | data.spec_prices.id | id | - | 1 | 略 | skuId | - | - |
| 2 | data.spec_prices.code | code | - | 2 | 略 | skuCode | - | - |
| 2 | data.spec_prices.barcodes | barcodes | - | 3 | 略 | SKU Barcode | - | R1 |
| 1 | data.name_suffix | name_suffix | - | 2 | 略 | 标题后缀 | 96 | - |
| 1 | data.name_prefix | name_prefix | - | 2 | 略 | 标题前缀 | 96 | - |
| 1 | data.title_limit | title_limit | - | 5 | - | 标题长度限制，长度计算逻辑：汉字算两个字符，汉字以外的其他字符都算一个字符。 | - | R1 |
| 2 | data.title_limit.min_length | min_length | - | 1 | 0 | 商品标题最短长度 | 39 | - |
| 2 | data.title_limit.max_length | max_length | - | 1 | 60 | 商品标题最长长度 | 39 | - |
| 1 | data.sell_num | sell_num | - | 1 | 999 | 销量 | 101 | - |
| 1 | data.can_not_combine_reason | can_not_combine_reason | - | 2 | 已参加搭配 | 不可搭配的原因，可搭配时为空 | 28 | - |
| 1 | data.can_combine | can_combine | - | 4 | false | 是否可搭配，只有入参传入can_combine为true才有值 | 28 | - |
| 1 | data.shop_category | shop_category | - | 5 | - | 店铺装修分类 | - | R1 |
| 2 | data.shop_category.leaf_category_ids | leaf_category_ids | - | 3 | [123] | 店铺装修分类id | 28 | R1 |
| 1 | data.product_id | product_id | - | 1 | 3472490447010721067 | 商品ID，抖店系统生成，店铺下唯一 | 39 | R1 |
| 1 | data.status | status | - | 1 | 0 | 商品在店铺中状态: 0-在线；1-下线；2-删除；详见商品状态机：https://op.jinritemai.com/docs/question-docs/92/2070 | 39 | R1 |
| 1 | data.check_status | check_status | - | 1 | 2 | 商品审核状态: 1-未提交；2-待审核；3-审核通过；4-审核未通过；5-封禁；7-审核通过待上架；详见商品状态机：https://op.jinritemai.com/docs/question-docs/92/2070 | 39 | R1 |
| 1 | data.market_price | market_price | - | 1 | 200 | 【已废弃】划线价，单位分 | 94 | R1 |
| 1 | data.discount_price | discount_price | - | 1 | 100 | 【已废弃】售价，单位分 | 94 | R1 |
| 1 | data.img | img | - | 2 | https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153427046487984750183_661ff1f563801d97f382e0ac114a09e6_sx_805824_www933-933 | 商品图片url，返回商品主图的第一张图 (主要用来辅助页面展示) | 39 | R1 |
| 1 | data.name | name | - | 2 | 夏季男生白色短袖 | 商品标题。 标题不规范会引起商品下架，影响您的正常销售，详见商品发布规范：https://school.jinritemai.com/doudian/web/article/101800?from=shop_article | 39 | R1 |
| 1 | data.pay_type | pay_type | - | 1 | 1 | 【已废弃】支持的支付方式：0货到付款 1在线支付 2两者都支持 | 39 | R1 |
| 1 | data.product_type | product_type | - | 1 | 0 | 商品类型；0-普通；1-新客商品；3-虚拟；6-玉石闪购；7-云闪购 ；127-其他类型； | 39 | R1 |
| 1 | data.spec_id | spec_id | - | 1 | 1737144307943485 | 商品规格，新增商品是全局唯一，注意：有部分历史存量商品可能存在规格复用 | 39 | R1 |
| 1 | data.cos_ratio | cos_ratio | - | 1 | 0 | 【已废弃】佣金比例 | 94 | R1 |
| 1 | data.create_time | create_time | - | 1 | 1619160933 | 商品创建时间，unix时间戳，单位：秒； | 39 | R1 |
| 1 | data.update_time | update_time | - | 1 | 1619161933 | 商品更新时间，unix时间戳，单位：秒； | 39 | R1 |
| 1 | data.out_product_id | out_product_id | - | 1 | 1617004369 | 【即将废弃】外部商家编码，商家自定义字段。推荐使用，outer_product_id字段 | 39 | R1 |
| 1 | data.description | description | - | 2 | <p><img src=\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153427046487984750183_661ff1f563801d97f382e0ac114a09e6_sx_805824_www933-933\" style=\"max-width:100%;\"/><img src=\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153426724709337920183_dd825b6f3c1bc43ec26faea488447709_sx_1059417_www1080-933\" style=\"max-width:100%;\"/><img src=\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_xPfNJOkX_71153465487927217040183_d963cc36ef6e66c0cba70e4cb2188f88_sx_436442_www1920-1080\" style=\"max-width:100%;\"/></p> | 【已废弃】该字段不返回信息。商品详情，最大支持50张图片，单张详情图宽高比不超2000*2000px，大小5M内，仅支持jpg/jpeg/png格式；注意：商品详情不规范，会引起商品下架，影响您的正常销售：https://school.jinritemai.com/doudian/web/article/101800?from=shop_article | 39 | R1 |
| 1 | data.mobile | mobile | - | 2 | 022234455561233 | 【已废弃】手机号 | 94 | R1 |
| 1 | data.extra | extra | - | 2 | {\"category_detail\":{\"first_cid\":20117,\"second_cid\":22139,\"third_cid\":28901,\"fourth_cid\":31800,\"first_cname\":\"本地生活服务\",\"second_cname\":\"餐饮美食卡券\",\"third_cname\":\"甜品/冰淇淋/咖啡/冷饮\",\"fourth_cname\":\"咖啡\",\"is_leaf\":true},\"class_quality\":\"\",\"is_publish\":1,\"quality_opId\":\"7132044312682119463\",\"quality_report\":\"\"} | 额外信息，如资质 | 28 | R1 |
| 1 | data.recommend_remark | recommend_remark | - | 2 | 【已废弃】 | 【已废弃】商家推荐语 | 94 | R1 |
| 1 | data.category_detail | category_detail | - | 5 | - | 类目详情；商品类目id可使用【/shop/getShopCategory】查询 | - | R1 |
| 2 | data.category_detail.first_cid | first_cid | - | 1 | 20117 | 一级类目 | 72 | R1 |
| 2 | data.category_detail.second_cid | second_cid | - | 1 | 22139 | 二级类目 | 72 | R1 |
| 2 | data.category_detail.third_cid | third_cid | - | 1 | 28901 | 三级类目 | 72 | R1 |
| 2 | data.category_detail.fourth_cid | fourth_cid | - | 1 | 31800 | 四级类目 | 72 | R1 |
| 2 | data.category_detail.first_cname | first_cname | - | 2 | 本地生活服务 | 一级类目名称 | 72 | R1 |
| 2 | data.category_detail.second_cname | second_cname | - | 2 | 餐饮美食卡券 | 二级类目名称 | 72 | R1 |
| 2 | data.category_detail.third_cname | third_cname | - | 2 | 甜品/冰淇淋/咖啡/冷饮 | 三级类目名称 | 72 | R1 |
| 2 | data.category_detail.fourth_cname | fourth_cname | - | 2 | 咖啡 | 四级类目名称 | 72 | R1 |
| 1 | data.outer_product_id | outer_product_id | - | 2 | dy001 | 外部商家编码，商家自定义字段，支持最多 255个字符 | 39 | R1 |
| 1 | data.is_package_product | is_package_product | - | 4 | true | 是否是组合商品，true-是，false-不是； | 39 | R1 |
| 1 | data.package_product_list | package_product_list | - | 3 | [3472490447010721067] | 商品关联的组合主商品ID；当is_package_product=true，返回的是组套商品的product_id； 当is_package_product=false，返回当前商品的product_id；补充返回规则：参与的组套商品，下线会展示，目前组合商品支持下线的商品作为子品进行组套，删除会展示，但重新上架组套商品时，会被从列表中删除。 | 59 | R1 |
| 1 | data.sub_product_list | sub_product_list | - | 3 | [3472490447010721067] | 当is_package_product=true，返回的是组套商品的子品product_id； 当is_package_product=false，不返回；补充返回规则：参与的组套商品product_id，下线会展示，目前组合商品支持下线的商品作为子品进行组套，删除会展示，但重新上架组套商品时，会被从列表中删除。 | 59 | R1 |
| 1 | data.channel_main_product | channel_main_product | - | 5 | - | 小时达子品绑定的主品信息 | 103 | R1 |
| 2 | data.channel_main_product.product_id | product_id | - | 1 | 3570226807****00909 | 主品的商品id | 103 | R1 |
| 2 | data.channel_main_product.shop_id | shop_id | - | 1 | 90**9 | 店铺id | 28 | R1 |
| 0 | total | total | - | 1 | 10000 | 本次查询返回的商品总数 | 29 | R1 |
| 0 | page | page | - | 1 | 10 | 当前页码 | 29 | R1 |
| 0 | size | size | - | 1 | 100 | 页数（每页数量） | 29 | R1 |
| 0 | cursor_id | cursor_id | - | 2 | WzE2ODI1Nzc4MjksMTc2NDMxMDczMDU3MDg0M10= | 使用游标时，每次查询会返回该值，作为下次查询的入参使用。 | 29 | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductListV2Request request = new ProductListV2Request();
ProductListV2Param param = request.getParam();
param.setStatus(0L);
param.setCheckStatus(3L);
param.setProductType(0L);
param.setStartTime(1619161933L);
param.setEndTime(1619162000L);
param.setUpdateStartTime(1619161933L);
param.setUpdateEndTime(1619161933L);
param.setPage(1L);
param.setSize(10L);
param.setStoreId(123456L);
param.setName("标题");
param.setProductId(3600137140018749665);
param.setUseCursor(true);
param.setCursorId("WzE2ODI1Nzc4MjksMTc2NDMxMDczMDU3MDg0M10=");
param.setCanCombineProduct(true);
param.setNeedRectificationInfo(false);
param.setNeedCheckOut(false);
param.setSkuCodes(aaabbcc);
ProductListV2Response response = request.execute(accessToken);

```

### php

```php
$request = new ProductListV2Request();
$param = new ProductListV2Param();
$request->setParam($param);
$param->status = 0;
$param->check_status = 3;
$param->product_type = 0;
$param->start_time = 1619161933;
$param->end_time = 1619162000;
$param->update_start_time = 1619161933;
$param->update_end_time = 1619161933;
$param->page = 1;
$param->size = 10;
$param->store_id = 123456;
$param->name = "标题";
$param->product_id = 3600137140018749665;
$param->use_cursor = true;
$param->cursor_id = "WzE2ODI1Nzc4MjksMTc2NDMxMDczMDU3MDg0M10=";
$param->can_combine_product = true;
$param->need_rectification_info = false;
$param->need_check_out = false;
$param->sku_codes = aaabbcc;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductListV2Request()
param = request.getParams()
param.status = 0
param.check_status = 3
param.product_type = 0
param.start_time = 1619161933
param.end_time = 1619162000
param.update_start_time = 1619161933
param.update_end_time = 1619161933
param.page = 1
param.size = 10
param.store_id = 123456
param.name = "标题"
param.product_id = 3600137140018749665
param.use_cursor = true
param.cursor_id = "WzE2ODI1Nzc4MjksMTc2NDMxMDczMDU3MDg0M10="
param.can_combine_product = true
param.need_rectification_info = false
param.need_check_out = false
param.sku_codes = aaabbcc
response = request.execute(accessToken)

```

### go

```go
request := product_listV2_request.New()
param := request.GetParams()
param.Status = 0
param.CheckStatus = 3
param.ProductType = 0
param.StartTime = 1619161933
param.EndTime = 1619162000
param.UpdateStartTime = 1619161933
param.UpdateEndTime = 1619161933
param.Page = 1
param.Size = 10
param.StoreId = 123456
param.Name = "标题"
param.ProductId = 3600137140018749665
param.UseCursor = true
param.CursorId = "WzE2ODI1Nzc4MjksMTc2NDMxMDczMDU3MDg0M10="
param.CanCombineProduct = true
param.NeedRectificationInfo = false
param.NeedCheckOut = false
param.SkuCodes = aaabbcc
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductListV2Request();
var param = request.BuildParam();
param.Status = 0;
param.CheckStatus = 3;
param.ProductType = 0;
param.StartTime = 1619161933;
param.EndTime = 1619162000;
param.UpdateStartTime = 1619161933;
param.UpdateEndTime = 1619161933;
param.Page = 1;
param.Size = 10;
param.StoreId = 123456;
param.Name = "标题";
param.ProductId = 3600137140018749665;
param.UseCursor = true;
param.CursorId = "WzE2ODI1Nzc4MjksMTc2NDMxMDczMDU3MDg0M10=";
param.CanCombineProduct = true;
param.NeedRectificationInfo = false;
param.NeedCheckOut = false;
param.SkuCodes = aaabbcc;
var response = request.Execute<ProductListV2Response>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 页数从1开始 | 请检查必传参数是否填写 |
| 20000 | 系统错误 | isp.service-error:2010013 | 判断库存版本失败 | 灰度时使用，现应无此报错 |
| 20000 | 系统错误 | isp.service-error:2010001 | 查询库存失败 | 请重试 |
| 20000 | 系统错误 | isp.service-error:20053 | 读取商品失败 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010201 | 获取类目信息失败 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010401 | 触发商品操作限流 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010203 | 2010203:获取商品信息失败 | 请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
