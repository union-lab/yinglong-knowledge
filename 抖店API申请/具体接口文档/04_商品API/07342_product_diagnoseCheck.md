# /product/diagnoseCheck

> 中文说明：发布前校验  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/7342>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/diagnoseCheck |
| 中文名称 | 发布前校验 |
| 文档目录 | 商品API |
| Article ID | 7342 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/4/24 17:24:01 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

发布前校验

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.diagnoseCheck | 调用的API接口名称 | - | - |
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
| 0 | product_format_new | product_format_new | false | 8 | {} | 属性实体 | - | - |
| 1 | product_format_new.value | value | false | 99 | 纯棉 | 属性值id | - | - |
| 1 | product_format_new.name | name | false | 2 | 聚酯纤维 | 属性值名称 | - | - |
| 1 | product_format_new.diy_type | diy_type | false | 99 | 0 | 是否为商家自定义属性值，1为是，0为不是，默认为0 | - | - |
| 0 | short_product_name | short_product_name | false | 2 | 商品短标题 | 短标题 | - | - |
| 0 | spec_name | spec_name | false | 2 | 颜色分类 | 规格名 | - | - |
| 0 | spec_value | spec_value | false | 2 | 红色 | 规格词 | - | - |
| 0 | sku_list | sku_list | false | 3 | - | 商品sku | - | - |
| 1 | sku_list.price | price | false | 99 | 1000 | 价格 | - | - |
| 1 | sku_list.name | name | false | 2 | 颜色分类:红色;尺码:M; | sku名称用属性项和属性值拼接组成，格式：<br>规格项1:规格值1;规格项2:规格值2; | - | - |
| 1 | sku_list.stock | stock | false | 99 | 100 | 库存 | - | - |
| 1 | sku_list.image_url | image_url | false | 2 | ecom-shop-material/jpeg_m_bb06b738f66a8e34355a2f6d65856010_sx_592497_www800-800 | 规格图片 | - | - |
| 1 | sku_list.sku_id | sku_id | false | 99 | 232323 | skuid | - | - |
| 1 | sku_list.spec_detail_ids | spec_detail_ids | false | 3 | [<br>                "1825226749200409",<br>                "1825226749202489"<br>            ] | 规格id列表 | - | - |
| 1 | sku_list.sku_classification_type | sku_classification_type | false | 2 | 无 | sku分类 | - | - |
| 1 | sku_list.sell_properties | sell_properties | false | 3 | - | 销售属性 | - | - |
| 2 | sku_list.sell_properties.property_name | property_name | false | 2 | 颜色分类 | 销售属性项名称 | - | - |
| 2 | sku_list.sell_properties.value_name | value_name | false | 2 | 黄色 | 销售属性值名字 | - | - |
| 2 | sku_list.sell_properties.measure_info | measure_info | false | 5 | - | 度量衡信息 | - | - |
| 3 | sku_list.sell_properties.measure_info.template_id | templateId | false | 99 | 1212 | 标准化的公式模板ID | - | - |
| 3 | sku_list.sell_properties.measure_info.values | values | false | 3 | - | 度量衡值组 | - | - |
| 4 | sku_list.sell_properties.measure_info.values.prefix | prefix | false | 2 | 日用 | 前缀：如日用 | - | - |
| 4 | sku_list.sell_properties.measure_info.values.module_id | moduleId | false | 99 | 122 | 模块ID | - | - |
| 4 | sku_list.sell_properties.measure_info.values.value | value | false | 2 | 10 | 值：如10 | - | - |
| 4 | sku_list.sell_properties.measure_info.values.unit_id | unitId | false | 99 | 23 | 单位ID | - | - |
| 4 | sku_list.sell_properties.measure_info.values.unit_name | unitName | false | 2 | 抽 | 单位名称：如抽 | - | - |
| 4 | sku_list.sell_properties.measure_info.values.suffix | suffix | false | 2 | * | 后缀：如* | - | - |
| 0 | quality_score_version | quality_score_version | false | 2 | 100 | 质量分 | - | - |
| 0 | product_main_pic | product_main_pic | false | 3 | - | 主图信息，主图1：1和主图3：4 | - | - |
| 1 | product_main_pic.url | url | false | 2 | https://p3-aio.ecombdimg.com/obj/ecom-shop-material/png_m_abf25b2634afc5710defa529796f97bd_sx_859041_www600-800 | 图片url | - | - |
| 1 | product_main_pic.type | type | false | 99 | 2 | 图片类型 | - | - |
| 1 | product_main_pic.pic_id | pic_id | false | 99 | 0 | 图片id | - | - |
| 0 | poi_use_condition | poi_use_condition | false | 2 | 无 | 卡券使用条件 | - | - |
| 0 | size_info_template_id | size_info_template_id | false | 99 | 123 | 尺码模板id | - | - |
| 0 | props | props | false | 8 | 废弃 | 属性 | - | - |
| 0 | biz_kind | BizKind | false | 99 | 0 | 0:普通商品，1:教育类商品 2:跨境商品 | - | - |
| 0 | desc_text | desc_text | false | 2 | 详情文字 | 详情文字 | - | - |
| 0 | risk_prop | risk_prop | false | 2 | 高危词判断 | 高危词判断 | - | - |
| 0 | product_type | product_type | true | 99 | 0 | 商品类型 | - | - |
| 0 | category | category | true | 99 | 24981 | 叶子类目ID | - | - |
| 0 | pic | pic | false | 3 | ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_8f6130a19c5af35f7fbe9d56ef24e25e_sx_707570_www800-800","https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_8f6130a19c5af35f7fbe9d56ef24e25e_sx_707570_www800-800"] | 主图 | - | - |
| 0 | product_material_map | product_material_map | false | 8 | - | 商品素材信息 | - | - |
| 1 | product_material_map.media_type | media_type | false | 99 | 0 | 素材类型 | - | - |
| 1 | product_material_map.urls | urls | false | 3 | [<br>                "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_85c0dbe86f70bc22ccb3f20353ebc721_sx_318770_www800-800"<br>            ] | 素材图片url | - | - |
| 1 | product_material_map.resource_ids | resource_ids | false | 3 | [<br>                "v0227cg10001cv2q9ivog65p1fpta0ug"<br>            ] | 视频id | - | - |
| 1 | product_material_map.material_id | material_id | false | 99 | 123 | 素材ID | - | - |
| 0 | product_id | product_id | true | 99 | 351111111111111 | 商品id | - | - |
| 0 | product_name | product_name | false | 2 | 商品名称 | 商品名称 | - | - |
| 0 | product_biz | ProductBiz | false | 99 | 1223233423232 | 业务类型 | - | - |
| 0 | is_template_opened | is_template_opened | false | 4 | true | 尺码模板开关 | - | - |
| 0 | poi_notification | poi_notification | false | 2 | 废弃 | 商品卡券领取 | - | - |
| 0 | check_type | check_type | false | 99 | 0 | 场景 1发布 2诊断 | - | - |
| 0 | brand_id | brand_id | false | 2 | 122323 | 品牌ID | - | - |
| 0 | desc_pic | desc_pic | false | 3 | [<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_bb06b738f66a8e34355a2f6d65856010_sx_592497_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_a3bd8b131292c606714addb42ac49994_sx_515811_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_1204eabbf5dd783f2763e8c2e448e4f8_sx_621215_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_c44f2b860c07f9391682c43acc60372d_sx_491669_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_776be48ff5bdc35311d0eb8ba18024fd_sx_578742_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_4730dfb87ade298e5bebf26224a5e7a2_sx_728745_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_b71a3bbdefc5cc1ee6342855ba2bf245_sx_646607_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_58956b9470b717a582797969f84ffbe5_sx_771903_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_0c8133579f1befff9493bf421740bff7_sx_824777_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_77878fc69879a331b916c3e253cace78_sx_894403_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_61b5b9a136704383a9482970d52478e8_sx_758447_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_692481144791458665a93017af20ad1b_sx_794850_www800-800",<br>        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_48ba5b33e39dd2b7cbf80238caed839b_sx_691435_www800-800"<br>    ] | 详情图 | - | - |
| 0 | cross_border | cross_border | false | 99 | 0 | 是否跨境 0 否 1 是 | - | - |
| 0 | brand_related_id | brand_related_id | false | 2 | 0 | 品牌关联ID | - | - |
| 0 | component_template | component_template | false | 5 | - | 尺码结构及详细数据 | - | - |
| 1 | component_template.template_type | template_type | false | 2 | size_info | 模板类型: size_info(尺码表) | - | - |
| 1 | component_template.template_sub_type | template_sub_type | false | 2 | clothing | 指定模板类型: clothing、undies、shoes、children_clothing | - | - |
| 1 | component_template.template_name | template_name | false | 2 | 模板名称 | 模板名称 | - | - |
| 1 | component_template.component_front_data | component_front_data | false | 2 | {\"title\":\"连身衣/爬服/哈衣\",\"desc\":\"连身衣/爬服/哈衣\",\"tempName\":\"\",\"configTable\":[{\"size\":\"66cm\",\"specMap\":{\"体重(斤)\":\"5-7\",\"身高(CM)\":\"66\"}},{\"size\":\"73cm\",\"specMap\":{\"体重(斤)\":\"7-9\",\"身高(CM)\":\"73\"}},{\"size\":\"80cm\",\"specMap\":{\"体重(斤)\":\"9-12\",\"身高(CM)\":\"80\"}},{\"size\":\"90cm\",\"specMap\":{\"体重(斤)\":\"11-15\",\"身高(CM)\":\"90\"}}],\"selectedSpecs\":[\"身高(CM)\",\"体重(斤)\"],\"headerName\":\"尺码\",\"specOptions\":[\"身高(CM)\",\"体重(斤)\"],\"selectedSize\":[\"66cm\",\"73cm\",\"80cm\",\"90cm\"],\"selectedSizeSpecValMap\":{}} | 商品组件编辑器源数据 json | - | - |
| 1 | component_template.component_data | component_data | false | 2 | {\"title\":\"连身衣/爬服/哈衣\",\"sub_title\":\"连身衣/爬服/哈衣\",\"selected_size\":[\"66cm\",\"73cm\",\"80cm\",\"90cm\"],\"selected_specs\":[\"身高(CM)\",\"体重(斤)\"],\"config\":{\"66cm\":{\"体重(斤)\":\"5-7\",\"身高(CM)\":\"66\"},\"73cm\":{\"体重(斤)\":\"7-9\",\"身高(CM)\":\"73\"},\"80cm\":{\"体重(斤)\":\"9-12\",\"身高(CM)\":\"80\"},\"90cm\":{\"体重(斤)\":\"11-15\",\"身高(CM)\":\"90\"}},\"selected_size_spec_val_map\":{}} | 商品组件数据 json | - | - |
| 1 | component_template.shareable | shareable | false | 4 | false | 是否可共享 | - | - |
| 0 | recommend_remark | recommend_remark | false | 2 | 废弃 | 商品推荐语 | - | - |
| 0 | only_base_score | only_base_score | false | 99 | 0 | 是否仅需要基础分相关诊断项 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | quality_score | quality_score | - | 5 | - | 质量分 | - | R1 |
| 1 | quality_score.score | score | - | 99 | 100 | 质量分 | - | - |
| 1 | quality_score.level | level | - | 2 | lv2 | 等级 | - | - |
| 1 | quality_score.version | version | - | 2 | new_quality_score | 质量分版本 | - | - |
| 0 | diagnose_essential_material | diagnose_essential_material | - | 5 | - | 必要图文 | - | R1 |
| 1 | diagnose_essential_material.essential_material_info_list | essential_material_info_list | - | 3 | - | 必要图文 | - | R1 |
| 2 | diagnose_essential_material.essential_material_info_list.material_source | material_source | - | 2 | 无 | 无 | - | - |
| 2 | diagnose_essential_material.essential_material_info_list.material_component_id | material_component_id | - | 99 | 0 | 无 | - | - |
| 2 | diagnose_essential_material.essential_material_info_list.code | code | - | 99 | 0 | 无 | - | - |
| 2 | diagnose_essential_material.essential_material_info_list.url | url | - | 2 | 无 | 无 | - | - |
| 0 | quality_score_calculating | quality_score_calculating | - | 4 | true | 质量分是否计算中 | - | - |
| 0 | field_problem | field_problem | - | 3 | - | 字段问题 | - | R1 |
| 1 | field_problem.problem_type | problem_type | - | 99 | 废弃 | 问题类型 | - | - |
| 1 | field_problem.field_key | field_key | - | 2 | props | 字段key | - | - |
| 1 | field_problem.tab_optimization_type | tab_optimization_type | - | 2 | 无 | problem对应的tab类型 | - | - |
| 1 | field_problem.detail_link | detail_link | - | 2 | 无 | 诊断问题示例详情 | - | - |
| 1 | field_problem.problem_position | problem_position | - | 3 | 无 | 诊断问题定位 | - | R1 |
| 1 | field_problem.is_fatal | is_fatal | - | 4 | false | 是否合规问题 | - | - |
| 1 | field_problem.is_empty_type | is_empty_type | - | 4 | false | 该诊断项是否是信息空缺导致的 | - | - |
| 1 | field_problem.is_app_support | is_app_support | - | 4 | false | 是否支持app展示 | - | - |
| 1 | field_problem.problem_score | problem_score | - | 9 | 12 | 问题得分 | - | - |
| 1 | field_problem.problem_name | problem_name | - | 2 | 商品缺少白底图 | 问题名 | - | - |
| 1 | field_problem.is_support_exemption | is_support_exemption | - | 4 | true | 是否支持豁免 | - | - |
| 1 | field_problem.problem_category | problem_category | - | 2 | suggest_problem | 问题分类 | - | - |
| 1 | field_problem.problem_simple_name | problem_simple_name | - | 2 | 商品缺少白底图 | 商品前端展示问题 | - | - |
| 1 | field_problem.problem_desc | problem_desc | - | 2 | 无 | 诊断问题简介 | - | - |
| 1 | field_problem.optimization_type | optimization_type | - | 99 | 无 | 优化类型 | - | - |
| 1 | field_problem.problem_biz_extra | problem_biz_extra | - | 5 | - | 问题扩展信息 | - | R1 |
| 2 | field_problem.problem_biz_extra.conflict_props_docs_map | conflict_props_docs_map | - | 8 | 无 | 存放填错属性项对应的文案，key为属性ID | - | R1 |
| 2 | field_problem.problem_biz_extra.similar_product_list | similar_product_list | - | 3 | 无 | 重复铺货商品 | - | R1 |
| 2 | field_problem.problem_biz_extra.title_typo | title_typo | - | 2 | 无 | 标题错别字 | - | - |
| 1 | field_problem.is_quality_score | is_quality_score | - | 4 | true | 是否是计分项 | - | - |
| 1 | field_problem.problem_key | problem_key | - | 99 | 2002 | 问题类型<br>2024: 缺失模特上身效果图,请补充<br>2025: 缺失商品平铺展示,请补充<br>2026: 缺失商品局部/细节图展示,请补充<br>488: 主图存在不良暗示问题<br>1005: 商品无达人测评<br>1002: 商品有山寨侵权风险<br>1003: 商品品牌命中平台禁售管控<br>604: 主图属于低质手机拍摄图<br>606: 主图文字不规范<br>602: 主图售卖主体缺失<br>605: 主图存在压缩等问题<br>603: 主图存在诱导点击嫌疑<br>601: 主图含明显边框<br>431: 缺少3:4主图<br>455: 商品缺少规格图<br>20001: 规格图重复<br>425: 商品缺少主图视频或主图视频质量不合格<br>703: 商品缺少讲解回放<br>2011: 商品详情页缺少规格/尺寸<br>2007: 商品详情页缺少清晰配料表<br>2008: 商品详情页缺少清晰营养成分表<br>803: 请丰富详情内容，不可仅为文字说明<br>2005: 服饰商品详情页无清晰尺码表<br>111: 标题可补充热搜词<br>5002: 商品品牌属性[%s]与商品标题描述[%s]、详情描述[%s]不一致，请修改<br>201: 类目选择需优化，建议选择类目：「%s」<br>2002: 重要属性未全部填写 | - | - |
| 1 | field_problem.prop_ids | prop_ids | - | 3 | [1,2,3] | 有问题的属性id | - | R1 |
| 1 | field_problem.index | index | - | 99 | 0 | 多值时的位置 | - | - |
| 1 | field_problem.is_block | is_block | - | 4 | false | 是否拦截发布 | - | - |
| 1 | field_problem.is_base_score | is_base_score | - | 4 | false | 是否基础分 | - | - |
| 1 | field_problem.second_optimization_type | second_optimization_type | - | 2 | 无 | 问题项所属二级优化类型 | - | - |
| 1 | field_problem.is_ignored | is_ignored | - | 4 | false | 是否已忽略 | - | - |
| 1 | field_problem.diagnose_target | diagnose_target | - | 2 | 无 | 诊断项对应的问题域 如主图、白底图 | - | - |
| 1 | field_problem.field_name | field_name | - | 2 | 主图 | 诊断的字段类型：主图、标题、属性、短标题、主图视频、讲解回放、达人秀 | - | - |
| 1 | field_problem.suggestion | suggestion | - | 2 | 商品缺少白底图素材，影响商品活动报名，建议补充纯白背景加商品主体图片 | 建议 | - | - |
| 1 | field_problem.item_rcmd_effect | Item_rcmd_effect | - | 5 | - | 收益指标 | - | R1 |
| 2 | field_problem.item_rcmd_effect.peer_usage_rate | peer_usage_rate | - | 2 | 无 | 同行使用率 | - | - |
| 2 | field_problem.item_rcmd_effect.improve_value_upper_bound | improve_value_upper_bound | - | 2 | 无 | 提升比例上限 | - | - |
| 2 | field_problem.item_rcmd_effect.improve_value_lower_bound | improve_value_lower_bound | - | 2 | 无 | 提升比例下限 | - | - |
| 2 | field_problem.item_rcmd_effect.effct_desc | effct_desc | - | 2 | 无 | 指标描述 | - | - |
| 2 | field_problem.item_rcmd_effect.optimization_info | optimization_info | - | 5 | - | 指标效果 | - | R1 |
| 3 | field_problem.item_rcmd_effect.optimization_info.default_event_type | default_event_type | - | 3 | 无 | 无 | - | R1 |
| 3 | field_problem.item_rcmd_effect.optimization_info.optimization_key | optimization_key | - | 2 | 无 | 无 | - | - |
| 3 | field_problem.item_rcmd_effect.optimization_info.optimization_name | optimization_name | - | 2 | 无 | 无 | - | - |
| 3 | field_problem.item_rcmd_effect.optimization_info.optimization_status | optimization_status | - | 2 | 无 | 无 | - | - |
| 3 | field_problem.item_rcmd_effect.optimization_info.unavailable_reason | unavailable_reason | - | 2 | 无 | 无 | - | - |
| 3 | field_problem.item_rcmd_effect.optimization_info.default_index_value | default_index_value | - | 3 | [1,2,3] | 无 | - | R1 |
| 1 | field_problem.optimization_object | optimization_object | - | 2 | 无 | 优化类型一级分类 | - | - |
| 1 | field_problem.optimization_issue | optimization_issue | - | 2 | 无 | 优化类型二级分类 | - | - |
| 1 | field_problem.problem_affect_describe | problem_affect_describe | - | 3 | 无 | 问题影响描述 | - | R1 |
| 1 | field_problem.jump_link | jump_link | - | 2 | 无 | 问题分类 | - | - |
| 1 | field_problem.first_optimization_type | first_optimization_type | - | 2 | 无 | 问题项所属一级优化类型 | - | - |
| 1 | field_problem.is_support_ignore | is_support_ignore | - | 4 | 无 | 是否支持忽略预警 | - | - |
| 0 | base_score | base_score | - | 99 | 无 | 基础分 | - | - |
| 0 | diagnose_recommend | diagnose_recommend | - | 5 | - | 推荐值 | - | R1 |
| 1 | diagnose_recommend.name | name | - | 2 | 无 | 字段key | - | - |
| 1 | diagnose_recommend.prop_map | prop_map | - | 8 | {} | key=属性id, value=推荐属性值 | - | R1 |
| 2 | diagnose_recommend.prop_map.value | value | - | 99 | 无 | value不为0则推荐选择项 | - | - |
| 2 | diagnose_recommend.prop_map.name | name | - | 2 | 无 | value为0则取name | - | - |
| 1 | diagnose_recommend.suggest_seo_title_words | suggest_seo_title_words | - | 3 | 无 | 无 | - | R1 |
| 1 | diagnose_recommend.recommend_tag_info_list | recommend_tag_info_list | - | 3 | - | 无 | - | R1 |
| 2 | diagnose_recommend.recommend_tag_info_list.tag_type | tag_type | - | 2 | 无 | hot normal | - | - |
| 2 | diagnose_recommend.recommend_tag_info_list.name | name | - | 2 | 无 | 推荐词内容 | - | - |
| 1 | diagnose_recommend.ai_suggest_prop | ai_suggest_prop | - | 3 | - | 无 | - | R1 |
| 2 | diagnose_recommend.ai_suggest_prop.property_id | property_id | - | 99 | 无 | 无 | - | - |
| 2 | diagnose_recommend.ai_suggest_prop.property_name | property_name | - | 2 | 无 | 无 | - | - |
| 2 | diagnose_recommend.ai_suggest_prop.value_id | value_id | - | 99 | 无 | 无 | - | - |
| 2 | diagnose_recommend.ai_suggest_prop.value_name | value_name | - | 2 | 无 | 无 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/diagnoseCheck?app_key=your_appkey_here&method=product.diagnoseCheck&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/diagnoseCheck?app_key=your_appkey_here&method=product.diagnoseCheck&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductDiagnoseCheckRequest request = new ProductDiagnoseCheckRequest();
ProductDiagnoseCheckParam param = request.getParam();
param.setProductFormatNew({});
param.setShortProductName("商品短标题");
param.setSpecName("颜色分类");
param.setSpecValue("红色");
param.setQualityScoreVersion("100");
param.setPoiUseCondition("无");
param.setSizeInfoTemplateId(123L);
param.setProps(废弃);
param.setBizKind(0L);
param.setDescText("详情文字");
param.setRiskProp("高危词判断");
param.setProductType(0L);
param.setCategory(24981L);
param.setPic(["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_85c0dbe86f70bc22ccb3f20353ebc721_sx_318770_www800-800"]);
param.setProductId(351111111111111L);
param.setProductName("商品名称");
param.setProductBiz(1223233423232L);
param.setIsTemplateOpened(true);
param.setPoiNotification("废弃");
param.setCheckType(0L);
param.setBrandId("122323");
param.setDescPic([        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_bb06b738f66a8e34355a2f6d65856010_sx_592497_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_a3bd8b131292c606714addb42ac49994_sx_515811_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_1204eabbf5dd783f2763e8c2e448e4f8_sx_621215_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_c44f2b860c07f9391682c43acc60372d_sx_491669_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_776be48ff5bdc35311d0eb8ba18024fd_sx_578742_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_4730dfb87ade298e5bebf26224a5e7a2_sx_728745_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_b71a3bbdefc5cc1ee6342855ba2bf245_sx_646607_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_58956b9470b717a582797969f84ffbe5_sx_771903_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_0c8133579f1befff9493bf421740bff7_sx_824777_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_77878fc69879a331b916c3e253cace78_sx_894403_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_61b5b9a136704383a9482970d52478e8_sx_758447_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_692481144791458665a93017af20ad1b_sx_794850_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_48ba5b33e39dd2b7cbf80238caed839b_sx_691435_www800-800"    ]);
param.setCrossBorder(0L);
param.setBrandRelatedId("0");
param.setRecommendRemark("废弃");
param.setOnlyBaseScore(0L);
ProductDiagnoseCheckResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductDiagnoseCheckRequest();
$param = new ProductDiagnoseCheckParam();
$request->setParam($param);
$param->product_format_new = {};
$param->short_product_name = "商品短标题";
$param->spec_name = "颜色分类";
$param->spec_value = "红色";
$param->quality_score_version = "100";
$param->poi_use_condition = "无";
$param->size_info_template_id = 123;
$param->props = 废弃;
$param->biz_kind = 0;
$param->desc_text = "详情文字";
$param->risk_prop = "高危词判断";
$param->product_type = 0;
$param->category = 24981;
$param->pic = ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_85c0dbe86f70bc22ccb3f20353ebc721_sx_318770_www800-800"];
$param->product_id = 351111111111111;
$param->product_name = "商品名称";
$param->product_biz = 1223233423232;
$param->is_template_opened = true;
$param->poi_notification = "废弃";
$param->check_type = 0;
$param->brand_id = "122323";
$param->desc_pic = [        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_bb06b738f66a8e34355a2f6d65856010_sx_592497_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_a3bd8b131292c606714addb42ac49994_sx_515811_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_1204eabbf5dd783f2763e8c2e448e4f8_sx_621215_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_c44f2b860c07f9391682c43acc60372d_sx_491669_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_776be48ff5bdc35311d0eb8ba18024fd_sx_578742_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_4730dfb87ade298e5bebf26224a5e7a2_sx_728745_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_b71a3bbdefc5cc1ee6342855ba2bf245_sx_646607_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_58956b9470b717a582797969f84ffbe5_sx_771903_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_0c8133579f1befff9493bf421740bff7_sx_824777_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_77878fc69879a331b916c3e253cace78_sx_894403_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_61b5b9a136704383a9482970d52478e8_sx_758447_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_692481144791458665a93017af20ad1b_sx_794850_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_48ba5b33e39dd2b7cbf80238caed839b_sx_691435_www800-800"    ];
$param->cross_border = 0;
$param->brand_related_id = "0";
$param->recommend_remark = "废弃";
$param->only_base_score = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductDiagnoseCheckRequest()
param = request.getParams()
param.product_format_new = {}
param.short_product_name = "商品短标题"
param.spec_name = "颜色分类"
param.spec_value = "红色"
param.quality_score_version = "100"
param.poi_use_condition = "无"
param.size_info_template_id = 123
param.props = 废弃
param.biz_kind = 0
param.desc_text = "详情文字"
param.risk_prop = "高危词判断"
param.product_type = 0
param.category = 24981
param.pic = ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_85c0dbe86f70bc22ccb3f20353ebc721_sx_318770_www800-800"]
param.product_id = 351111111111111
param.product_name = "商品名称"
param.product_biz = 1223233423232
param.is_template_opened = true
param.poi_notification = "废弃"
param.check_type = 0
param.brand_id = "122323"
param.desc_pic = [        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_bb06b738f66a8e34355a2f6d65856010_sx_592497_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_a3bd8b131292c606714addb42ac49994_sx_515811_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_1204eabbf5dd783f2763e8c2e448e4f8_sx_621215_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_c44f2b860c07f9391682c43acc60372d_sx_491669_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_776be48ff5bdc35311d0eb8ba18024fd_sx_578742_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_4730dfb87ade298e5bebf26224a5e7a2_sx_728745_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_b71a3bbdefc5cc1ee6342855ba2bf245_sx_646607_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_58956b9470b717a582797969f84ffbe5_sx_771903_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_0c8133579f1befff9493bf421740bff7_sx_824777_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_77878fc69879a331b916c3e253cace78_sx_894403_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_61b5b9a136704383a9482970d52478e8_sx_758447_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_692481144791458665a93017af20ad1b_sx_794850_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_48ba5b33e39dd2b7cbf80238caed839b_sx_691435_www800-800"    ]
param.cross_border = 0
param.brand_related_id = "0"
param.recommend_remark = "废弃"
param.only_base_score = 0
response = request.execute(accessToken)

```

### go

```go
request := product_diagnoseCheck_request.New()
param := request.GetParams()
param.ProductFormatNew = {}
param.ShortProductName = "商品短标题"
param.SpecName = "颜色分类"
param.SpecValue = "红色"
param.QualityScoreVersion = "100"
param.PoiUseCondition = "无"
param.SizeInfoTemplateId = 123
param.Props = 废弃
param.BizKind = 0
param.DescText = "详情文字"
param.RiskProp = "高危词判断"
param.ProductType = 0
param.Category = 24981
param.Pic = ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_85c0dbe86f70bc22ccb3f20353ebc721_sx_318770_www800-800"]
param.ProductId = 351111111111111
param.ProductName = "商品名称"
param.ProductBiz = 1223233423232
param.IsTemplateOpened = true
param.PoiNotification = "废弃"
param.CheckType = 0
param.BrandId = "122323"
param.DescPic = [        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_bb06b738f66a8e34355a2f6d65856010_sx_592497_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_a3bd8b131292c606714addb42ac49994_sx_515811_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_1204eabbf5dd783f2763e8c2e448e4f8_sx_621215_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_c44f2b860c07f9391682c43acc60372d_sx_491669_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_776be48ff5bdc35311d0eb8ba18024fd_sx_578742_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_4730dfb87ade298e5bebf26224a5e7a2_sx_728745_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_b71a3bbdefc5cc1ee6342855ba2bf245_sx_646607_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_58956b9470b717a582797969f84ffbe5_sx_771903_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_0c8133579f1befff9493bf421740bff7_sx_824777_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_77878fc69879a331b916c3e253cace78_sx_894403_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_61b5b9a136704383a9482970d52478e8_sx_758447_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_692481144791458665a93017af20ad1b_sx_794850_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_48ba5b33e39dd2b7cbf80238caed839b_sx_691435_www800-800"    ]
param.CrossBorder = 0
param.BrandRelatedId = "0"
param.RecommendRemark = "废弃"
param.OnlyBaseScore = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductDiagnoseCheckRequest();
var param = request.BuildParam();
param.ProductFormatNew = {};
param.ShortProductName = "商品短标题";
param.SpecName = "颜色分类";
param.SpecValue = "红色";
param.QualityScoreVersion = "100";
param.PoiUseCondition = "无";
param.SizeInfoTemplateId = 123;
param.Props = 废弃;
param.BizKind = 0;
param.DescText = "详情文字";
param.RiskProp = "高危词判断";
param.ProductType = 0;
param.Category = 24981;
param.Pic = ["https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_85c0dbe86f70bc22ccb3f20353ebc721_sx_318770_www800-800"];
param.ProductId = 351111111111111;
param.ProductName = "商品名称";
param.ProductBiz = 1223233423232;
param.IsTemplateOpened = true;
param.PoiNotification = "废弃";
param.CheckType = 0;
param.BrandId = "122323";
param.DescPic = [        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_bb06b738f66a8e34355a2f6d65856010_sx_592497_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_a3bd8b131292c606714addb42ac49994_sx_515811_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_1204eabbf5dd783f2763e8c2e448e4f8_sx_621215_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_c44f2b860c07f9391682c43acc60372d_sx_491669_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_776be48ff5bdc35311d0eb8ba18024fd_sx_578742_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_4730dfb87ade298e5bebf26224a5e7a2_sx_728745_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_b71a3bbdefc5cc1ee6342855ba2bf245_sx_646607_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_58956b9470b717a582797969f84ffbe5_sx_771903_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_0c8133579f1befff9493bf421740bff7_sx_824777_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_77878fc69879a331b916c3e253cace78_sx_894403_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_61b5b9a136704383a9482970d52478e8_sx_758447_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_692481144791458665a93017af20ad1b_sx_794850_www800-800",        "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/jpeg_m_48ba5b33e39dd2b7cbf80238caed839b_sx_691435_www800-800"    ];
param.CrossBorder = 0;
param.BrandRelatedId = "0";
param.RecommendRemark = "废弃";
param.OnlyBaseScore = 0;
var response = request.Execute<ProductDiagnoseCheckResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2030001 | 2030001:商品诊断失败 | 报错 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
