# /product/batchGetCombination

> 中文说明：批量查询搭配详情  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/3367>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/batchGetCombination |
| 中文名称 | 批量查询搭配详情 |
| 文档目录 | 商品API |
| Article ID | 3367 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/3/28 20:43:23 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 40000 |

## 使用说明

根据搭配id批量查询搭配详情

## 权限包

- 微应用 / 搭配购-微应用（packageType=1）；适用应用类目：创新应用大赛_微应用
- 店铺 / 端店铺装修（packageType=4）；适用应用类目：商家自研模版、商家自研组件、装修模板、定制装修、装修组件

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.batchGetCombination | 调用的API接口名称 | - | - |
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
| 0 | params | params | true | 3 | - | 搭配id列表 | - | - |
| 1 | params.combination_id | combination_id | true | 1 | 1 | 搭配id，最多20个 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | combination_with_products | combination_with_products | - | 3 | - | 搭配信息列表 | - | R1 |
| 1 | combination_with_products.combination_info | combination_info | - | 5 | - | 搭配信息 | - | R1 |
| 2 | combination_with_products.combination_info.combination_id | combination_id | - | 1 | 1234567 | 搭配id | - | - |
| 2 | combination_with_products.combination_info.title | title | - | 2 | 时尚运动搭配 | 搭配标题 | - | - |
| 2 | combination_with_products.combination_info.description | description | - | 2 | 官搭官配春季新款 | 搭配推荐语 | - | - |
| 2 | combination_with_products.combination_info.image_url | image_url | - | 2 | https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_GhxlaZ_70518442764009474640419_9aee895e6a606b567d21db635f3affc5_sx_277318_www1170-1170 | 搭配主图 | - | - |
| 2 | combination_with_products.combination_info.anchor_image_info | anchor_image_info | - | 2 | {"image":{"url":"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/v1_GhxlaZ_70518442764009474640419_9aee895e6a606b567d21db635f3affc5_sx_277318_www1170-1170","width":1170,"height":1170},"image_hot_area":[{"point":{"x":677,"y":418},"detail_area":{"direction":"left","content":{"text":"测试搭配","product_id":"3538140403893156430"}}},{"point":{"x":677,"y":602},"detail_area":{"direction":"left","content":{"text":"测试搭配","product_id":"3538040543806386062"}}}]} | 搭配锚点信息 | - | - |
| 2 | combination_with_products.combination_info.creator_type | creator_type | - | 1 | 1 | 创建者类型 | - | - |
| 2 | combination_with_products.combination_info.creator_id | creator_id | - | 1 | 1234 | 创建者id | - | - |
| 2 | combination_with_products.combination_info.create_source | create_source | - | 1 | 1 | 创建源 | - | - |
| 2 | combination_with_products.combination_info.cross_store_combo | cross_store_combo | - | 1 | 1 | 是否跨店搭配。1：同店搭配。2：跨店搭配 | - | - |
| 2 | combination_with_products.combination_info.status | status | - | 1 | 1 | 状态。1：有效。2：失效。3：已删除 | - | - |
| 2 | combination_with_products.combination_info.offline_reason | offline_reason | - | 2 | 商品不合法 | 搭配下线原因 | - | - |
| 2 | combination_with_products.combination_info.create_time | create_time | - | 1 | 1679049965 | 搭配创建时间 | - | - |
| 2 | combination_with_products.combination_info.update_time | update_time | - | 1 | 1679049965 | 搭配更新时间 | - | - |
| 2 | combination_with_products.combination_info.product_ids | product_ids | - | 3 | 1234567 | 搭配关联的商品id | - | R1 |
| 2 | combination_with_products.combination_info.reject_reason | reject_reason | - | 2 | 商品不合法 | 搭配驳回原因 | - | - |
| 2 | combination_with_products.combination_info.combination_extra_info | combination_extra_info | - | 2 | 略 | 搭配扩展信息 | - | - |
| 2 | combination_with_products.combination_info.combination_type | combination_type | - | 1 | 1 | 搭配类型 | - | - |
| 2 | combination_with_products.combination_info.combination_sub_type | combination_sub_type | - | 1 | 1 | 搭配子类型 | - | - |
| 1 | combination_with_products.products | products | - | 3 | - | - | - | R1 |
| 2 | combination_with_products.products.product_id | ProductId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.name | Name | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.description | Description | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.main_img | MainImg | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.main_img.url | Url | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.main_img.width | Width | - | 6 | - | - | - | - |
| 3 | combination_with_products.products.main_img.height | Height | - | 6 | - | - | - | - |
| 3 | combination_with_products.products.main_img.track_info | TrackInfo | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.main_img.pic_type | pic_type | - | 6 | - | - | - | - |
| 2 | combination_with_products.products.sale_price | SalePrice | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.original_price | OriginalPrice | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.shop_id | ShopId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.mobile | Mobile | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.sell_num | SellNum | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.spec_id | SpecId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.status | Status | - | 6 | - | - | - | - |
| 2 | combination_with_products.products.check_status | CheckStatus | - | 6 | - | - | - | - |
| 2 | combination_with_products.products.recommend_remark | RecommendRemark | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.pay_type | PayType | - | 6 | - | - | - | - |
| 2 | combination_with_products.products.need_code | NeedCode | - | 6 | - | - | - | - |
| 2 | combination_with_products.products.biz_type | BizType | - | 6 | - | - | - | - |
| 2 | combination_with_products.products.presell_type | PresellType | - | 7 | - | - | - | - |
| 2 | combination_with_products.products.end_time | EndTime | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.show_place | ShowPlace | - | 7 | - | - | - | - |
| 2 | combination_with_products.products.product_type | ProductType | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.is_show | IsShow | - | 4 | - | - | - | - |
| 2 | combination_with_products.products.create_time | CreateTime | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.assoc_ids | AssocIds | - | 3 | - | - | - | - |
| 2 | combination_with_products.products.weight | Weight | - | 9 | - | - | - | - |
| 2 | combination_with_products.products.freight_id | FreightId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.presell_delay | PresellDelay | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.presell_end_time | PresellEndTime | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.img_list | ImgList | - | 3 | - | - | - | - |
| 3 | combination_with_products.products.img_list.url | Url | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.img_list.width | Width | - | 6 | - | - | - | - |
| 3 | combination_with_products.products.img_list.height | Height | - | 6 | - | - | - | - |
| 3 | combination_with_products.products.img_list.track_info | TrackInfo | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.img_list.pic_type | pic_type | - | 6 | - | - | - | - |
| 2 | combination_with_products.products.update_time | UpdateTime | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.user_limit | UserLimit | - | 4 | - | - | - | - |
| 2 | combination_with_products.products.start_time | StartTime | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.reduce_type | ReduceType | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.out_product_id | OutProductId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.delivery_delay_day | DeliveryDelayDay | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.after_sale_service | AfterSaleService | - | 8 | - | - | - | - |
| 2 | combination_with_products.products.market_store_id | MarketStoreId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.product_source | ProductSource | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.currency | Currency | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.category_id | CategoryId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.new_category | NewCategory | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.new_category.first_cid | FirstCid | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.new_category.second_cid | SecondCid | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.new_category.third_cid | ThirdCid | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.new_category.fourth_cid | FourthCid | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.new_category.first_c_name | FirstCName | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.new_category.second_c_name | SecondCName | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.new_category.third_c_name | ThirdCName | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.new_category.fourth_c_name | FourthCName | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.old_category | OldCategory | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.old_category.third_cid | ThirdCid | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.old_category.second_cid | SecondCid | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.old_category.first_cid | FirstCid | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.biz_kind | BizKind | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.delivery_delay_date | DeliveryDelayDate | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.appoint_delivery_day | AppointDeliveryDay | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.sell_channel | SellChannel | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.property_values | PropertyValues | - | 3 | - | - | - | - |
| 3 | combination_with_products.products.property_values.property | Property | - | 5 | - | - | - | - |
| 4 | combination_with_products.products.property_values.property.property_id | PropertyId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.property_values.property.property_name | PropertyName | - | 2 | - | - | - | - |
| 4 | combination_with_products.products.property_values.property.spec_type | SpecType | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.property_values.values | Values | - | 3 | - | - | - | - |
| 4 | combination_with_products.products.property_values.values.value_id | ValueId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.property_values.values.value_name | ValueName | - | 2 | - | - | - | - |
| 4 | combination_with_products.products.property_values.values.display_value_name | DisplayValueName | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.property_values.pair_id | PairId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.property_values.seq | Seq | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.biz_identity | BizIdentity | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.biz_identity.bmp_seller_type | BmpSellerType | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.biz_identity.bmp_vertical_market | BmpVerticalMarket | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.biz_identity.bmp_source | BmpSource | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.brand_id | BrandId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.product_biz | ProductBiz | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.image_detail_info | ImageDetailInfo | - | 3 | - | - | - | - |
| 3 | combination_with_products.products.image_detail_info.url | Url | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.image_detail_info.width | Width | - | 6 | - | - | - | - |
| 3 | combination_with_products.products.image_detail_info.height | Height | - | 6 | - | - | - | - |
| 3 | combination_with_products.products.image_detail_info.track_info | TrackInfo | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.image_detail_info.pic_type | pic_type | - | 6 | - | - | - | - |
| 2 | combination_with_products.products.skus | Skus | - | 3 | - | - | - | - |
| 3 | combination_with_products.products.skus.shop_id | ShopId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.id | Id | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.product_id | ProductId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.price | Price | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.code | Code | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.skus.spec_id | SpecId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.type | Type | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.supplier_id | SupplierId | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.skus.outer_sku_id | OuterSkuId | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.skus.sku_biz | SkuBiz | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.package_sub_sku_infos | PackageSubSkuInfos | - | 3 | - | - | - | - |
| 4 | combination_with_products.products.skus.package_sub_sku_infos.package_sub_sku_item | PackageSubSkuItem | - | 5 | - | - | - | - |
| 5 | combination_with_products.products.skus.package_sub_sku_infos.package_sub_sku_item.sku_id | SkuId | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.skus.package_sub_sku_infos.package_sub_sku_item.sub_sku_id | SubSkuId | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.skus.package_sub_sku_infos.package_sub_sku_item.short_name | ShortName | - | 2 | - | - | - | - |
| 5 | combination_with_products.products.skus.package_sub_sku_infos.package_sub_sku_item.num | Num | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.skus.package_sub_sku_infos.package_sub_sku_item.ori_price | OriPrice | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.skus.package_sub_sku_infos.package_sub_sku_item.shop_id | ShopId | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.skus.package_sub_sku_infos.package_sub_sku_item.sub_product_id | SubProductId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.package_sub_sku_infos.package_sub_sku_detail | PackageSubSkuDetail | - | 7 | - | - | - | - |
| 3 | combination_with_products.products.skus.sale_property_values | SalePropertyValues | - | 3 | - | - | - | - |
| 4 | combination_with_products.products.skus.sale_property_values.property | Property | - | 5 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.property.property_id | PropertyId | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.property.property_name | PropertyName | - | 2 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.property.spec_type | SpecType | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.sale_property_values.value | Value | - | 5 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.value.value_id | ValueId | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.value.value_name | ValueName | - | 2 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.value.display_value_name | DisplayValueName | - | 2 | - | - | - | - |
| 4 | combination_with_products.products.skus.sale_property_values.pair_id | PairId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.sale_property_values.seq | Seq | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.sale_property_values.pic | Pic | - | 5 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.pic.url | Url | - | 2 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.pic.width | Width | - | 6 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.pic.height | Height | - | 6 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.pic.track_info | TrackInfo | - | 2 | - | - | - | - |
| 5 | combination_with_products.products.skus.sale_property_values.pic.pic_type | pic_type | - | 6 | - | - | - | - |
| 3 | combination_with_products.products.skus.extra_info | ExtraInfo | - | 8 | - | - | - | - |
| 3 | combination_with_products.products.skus.status | Status | - | 6 | - | - | - | - |
| 3 | combination_with_products.products.skus.campaign_price | CampaignPrice | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.hit_channel | hitChannel | - | 4 | - | - | - | - |
| 3 | combination_with_products.products.skus.sellable | sellable | - | 4 | - | - | - | - |
| 3 | combination_with_products.products.skus.channel | channel | - | 5 | - | - | - | - |
| 4 | combination_with_products.products.skus.channel.channel_type | channelType | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.channel.channel_id | channelId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.sku_channel | skuChannel | - | 5 | - | - | - | - |
| 4 | combination_with_products.products.skus.sku_channel.channel | channel | - | 5 | - | - | - | - |
| 5 | combination_with_products.products.skus.sku_channel.channel.channel_type | channelType | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.skus.sku_channel.channel.channel_id | channelId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.sku_channel.shop_id | shopId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.sku_channel.product_id | productId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.sku_channel.sku_id | skuId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.sku_channel.extra | extra | - | 8 | - | - | - | - |
| 3 | combination_with_products.products.skus.presell_delay | presell_delay | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.presell_type | presell_type | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.poi_resource | poi_resource | - | 5 | - | - | - | - |
| 4 | combination_with_products.products.skus.poi_resource.product_id | ProductId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.poi_resource.sku_id | SkuId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.poi_resource.res_id | ResId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.poi_resource.res_order_id | ResOrderId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.poi_resource.res_order_secret | ResOrderSecret | - | 2 | - | - | - | - |
| 4 | combination_with_products.products.skus.poi_resource.code_type | CodeType | - | 7 | - | - | - | - |
| 4 | combination_with_products.products.skus.poi_resource.status | Status | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.skus.adapt_d_t_o | AdaptDTO | - | 5 | - | - | - | - |
| 4 | combination_with_products.products.skus.adapt_d_t_o.adapt_result | AdaptResult | - | 8 | - | - | - | - |
| 4 | combination_with_products.products.skus.adapt_d_t_o.have_adapt_data | HaveAdaptData | - | 4 | - | - | - | - |
| 3 | combination_with_products.products.skus.package_main_product_sku_info | packageMainProductSkuInfo | - | 3 | - | - | - | - |
| 4 | combination_with_products.products.skus.package_main_product_sku_info.product_id | ProductId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.package_main_product_sku_info.sku_id | SkuId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.package_main_product_sku_info.shop_id | ShopId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.skus.package_main_product_sku_info.package_id | PackageId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.extra_info | ExtraInfo | - | 8 | - | - | - | - |
| 2 | combination_with_products.products.tag_list | TagList | - | 3 | - | - | - | - |
| 2 | combination_with_products.products.sellable | Sellable | - | 4 | - | - | - | - |
| 2 | combination_with_products.products.video_item | VideoItem | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.video_item.vid | Vid | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.package_sub_products | PackageSubProducts | - | 3 | - | - | - | - |
| 3 | combination_with_products.products.package_sub_products.package_sub_product_item | PackageSubProductItem | - | 5 | - | - | - | - |
| 4 | combination_with_products.products.package_sub_products.package_sub_product_item.product_id | ProductId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.package_sub_products.package_sub_product_item.sub_product_id | SubProductId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.package_sub_products.package_sub_product_detail | PackageSubProductDetail | - | 7 | - | - | - | - |
| 2 | combination_with_products.products.product_videos | ProductVideos | - | 3 | - | - | - | - |
| 3 | combination_with_products.products.product_videos.product_id | ProductId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.product_videos.shop_id | ShopId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.product_videos.video_url | VideoUrl | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.product_videos.material_type | MaterialType | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.product_videos.extra | Extra | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.channel | channel | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.channel.channel_type | channelType | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.channel.channel_id | channelId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.hit_channel | hitChannel | - | 4 | - | - | - | - |
| 2 | combination_with_products.products.product_channel | productChannel | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.product_channel.channel | channel | - | 5 | - | - | - | - |
| 4 | combination_with_products.products.product_channel.channel.channel_type | channelType | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.product_channel.channel.channel_id | channelId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.product_channel.shop_id | shopId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.product_channel.product_id | productId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.product_channel.status | status | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.product_channel.extra | extra | - | 8 | - | - | - | - |
| 2 | combination_with_products.products.tag_info_str | TagInfoStr | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.presell_config_level | presell_config_level | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.presell_delivery_type | presell_delivery_type | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.reason | Reason | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.std_brand_name | StdBrandName | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.default_combination_id | default_combination_id | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.detail_brief | detail_brief | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.detail_brief.component_info | component_info | - | 3 | - | - | - | - |
| 4 | combination_with_products.products.detail_brief.component_info.component_type_id | component_type_id | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.detail_brief.component_info.image | image | - | 5 | - | - | - | - |
| 5 | combination_with_products.products.detail_brief.component_info.image.pic_url | pic_url | - | 2 | - | - | - | - |
| 5 | combination_with_products.products.detail_brief.component_info.image.width | width | - | 6 | - | - | - | - |
| 5 | combination_with_products.products.detail_brief.component_info.image.height | height | - | 6 | - | - | - | - |
| 5 | combination_with_products.products.detail_brief.component_info.image.track_info | TrackInfo | - | 2 | - | - | - | - |
| 4 | combination_with_products.products.detail_brief.component_info.component_name | component_name | - | 2 | - | - | - | - |
| 4 | combination_with_products.products.detail_brief.component_info.component_data | component_data | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.sell_terminal | SellTerminal | - | 3 | - | - | - | - |
| 2 | combination_with_products.products.mpu_mount_relations | MpuMountRelations | - | 3 | - | - | - | - |
| 3 | combination_with_products.products.mpu_mount_relations.cmpu_id | CmpuId | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.mpu_mount_relations.relation_skus | RelationSkus | - | 3 | - | - | - | - |
| 4 | combination_with_products.products.mpu_mount_relations.relation_skus.product_id | ProductId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.mpu_mount_relations.relation_skus.sku_id | SkuId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.priority_material_info | PriorityMaterialInfo | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.priority_material_info.main_img | MainImg | - | 5 | - | - | - | - |
| 4 | combination_with_products.products.priority_material_info.main_img.img_url | ImgUrl | - | 5 | - | - | - | - |
| 5 | combination_with_products.products.priority_material_info.main_img.img_url.url | Url | - | 2 | - | - | - | - |
| 5 | combination_with_products.products.priority_material_info.main_img.img_url.width | Width | - | 6 | - | - | - | - |
| 5 | combination_with_products.products.priority_material_info.main_img.img_url.height | Height | - | 6 | - | - | - | - |
| 5 | combination_with_products.products.priority_material_info.main_img.img_url.track_info | TrackInfo | - | 2 | - | - | - | - |
| 5 | combination_with_products.products.priority_material_info.main_img.img_url.pic_type | pic_type | - | 6 | - | - | - | - |
| 4 | combination_with_products.products.priority_material_info.main_img.img_props | ImgProps | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.store_id | StoreId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.product_relation | ProductRelation | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.product_relation.relation_type | relationType | - | 7 | - | - | - | - |
| 3 | combination_with_products.products.product_relation.relation_item | relationItem | - | 3 | - | - | - | - |
| 4 | combination_with_products.products.product_relation.relation_item.main_product | mainProduct | - | 5 | - | - | - | - |
| 5 | combination_with_products.products.product_relation.relation_item.main_product.channel | channel | - | 5 | - | - | - | - |
| 6 | combination_with_products.products.product_relation.relation_item.main_product.channel.channel_type | channelType | - | 1 | - | - | - | - |
| 6 | combination_with_products.products.product_relation.relation_item.main_product.channel.channel_id | channelId | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.product_relation.relation_item.main_product.product_id | productId | - | 1 | - | - | - | - |
| 4 | combination_with_products.products.product_relation.relation_item.sub_product | subProduct | - | 5 | - | - | - | - |
| 5 | combination_with_products.products.product_relation.relation_item.sub_product.channel | channel | - | 5 | - | - | - | - |
| 6 | combination_with_products.products.product_relation.relation_item.sub_product.channel.channel_type | channelType | - | 1 | - | - | - | - |
| 6 | combination_with_products.products.product_relation.relation_item.sub_product.channel.channel_id | channelId | - | 1 | - | - | - | - |
| 5 | combination_with_products.products.product_relation.relation_item.sub_product.product_id | productId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.package_main_product_info | packageMainProductInfo | - | 3 | - | - | - | - |
| 3 | combination_with_products.products.package_main_product_info.product_id | ProductId | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.price | Price | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.price.reference_price | ReferencePrice | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.sell_num_value | SellNumValue | - | 5 | - | - | - | - |
| 3 | combination_with_products.products.sell_num_value.outer_sell_num | OuterSellNum | - | 1 | - | - | - | - |
| 3 | combination_with_products.products.sell_num_value.total_sell_num | TotalSellNum | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.custom_value_tag_infos | CustomValueTagInfos | - | 3 | - | - | - | - |
| 3 | combination_with_products.products.custom_value_tag_infos.tag_code | TagCode | - | 2 | - | - | - | - |
| 3 | combination_with_products.products.custom_value_tag_infos.tag_value | TagValue | - | 2 | - | - | - | - |
| 2 | combination_with_products.products.spu_id | SpuId | - | 3 | - | - | - | - |
| 2 | combination_with_products.products.default_series_id | default_series_id | - | 1 | - | - | - | - |
| 2 | combination_with_products.products.return_policy_id | ReturnPolicyId | - | 2 | - | - | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/batchGetCombination?app_key=your_appkey_here&method=product.batchGetCombination&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/batchGetCombination?app_key=your_appkey_here&method=product.batchGetCombination&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductBatchGetCombinationRequest request = new ProductBatchGetCombinationRequest();
ProductBatchGetCombinationParam param = request.getParam();
ProductBatchGetCombinationResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductBatchGetCombinationRequest();
$param = new ProductBatchGetCombinationParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = ProductBatchGetCombinationRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := product_batchGetCombination_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductBatchGetCombinationRequest();
var param = request.BuildParam();
var response = request.Execute<ProductBatchGetCombinationResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:200002 | 请求缺少必传参数 | 检查参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:200003 | 超过最大查询数量 | 检查参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
