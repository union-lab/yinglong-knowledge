# /order/searchList

> 中文说明：订单列表查询  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1342>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/searchList |
| 中文名称 | 订单列表查询 |
| 文档目录 | 订单API |
| Article ID | 1342 |
| 文档版本 | V23.01 |
| 官方更新时间 | 2026/5/28 10:30:49 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5500 |

## 使用说明

根据条件检索满足要求的订单列表，支持下单时间和更新时间排序；最大支持查询近90天的数据

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 订单 / 微应用搭配购销量统计（临时）（packageType=1）
- 订单 / 订单信息查询（packageType=1）；适用应用类目：官方微应用、卡券商工具、创新应用大赛_微应用、COD服务、跨境供应链服务、手机行业定制交易、跨境电商、小票打印服务、撮合服务商、客服绩效-微应用、综合保修、碎屏保障、售后管理、任务玩法、财务管理、企业财税服务、直播话术-微应用、营销管理-互动小程序定制、营销管理-小程序定制、打单发货-微应用、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、强管控微应用、教育服务、商家商品推广、商家后台系统、TPA服务、店铺管理、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、品牌会员通、即时零售商家自研、直播工具、互动营销定制、短信营销、订单管理、商品供应链、电商ERP、AI 商品运营、智能外呼
- 内部二方开放 / 火山内容云（packageType=10）
- 定向权限 / 定向权限包（packageType=1）
- 抖音超市 / 抖音自营超市场景（packageType=10）
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电
- 订单 / 订单场景权限包（packageType=10）
- 即时零售 / 订单管理（即时零售）（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 开放平台 / 盲盒场景（packageType=10）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.searchList | 调用的API接口名称 | - | - |
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
| 0 | product | Product | false | 2 | 3473196049974326153 | 商品，number型代表商品ID，其它代表商品名称 | - | - |
| 0 | b_type | BType | false | 99 | 2 | 【下单端】 0、站外   1、火山   2、抖音   3、头条   4、西瓜   5、微信   6、值点app  7、头条lite   8、懂车帝  9、皮皮虾   11、抖音极速版   12、TikTok   13、musically   14、穿山甲   15、火山极速版   16、服务市场   26、番茄小说   27、UG教育营销电商平台   28、Jumanji   29、电商SDK | - | - |
| 0 | after_sale_status_desc | AfterSaleStatusDesc | false | 2 | refund_success | 售后状态：all-全部，in_aftersale-售后中，refund-退款中，refund_success-退款成功，refund_fail-退款失败，exchange_success-换货成功 aftersale_close-售后关闭 | - | - |
| 0 | tracking_no | TrackingNo | false | 2 | 435435 | 物流单号 | - | - |
| 0 | presell_type | PresellType | false | 99 | 0 | 预售类型：0-普通订单；1-全款预售；2-定金预售；3-定金找货； | - | - |
| 0 | order_type | OrderType | false | 99 | 1 | 订单类型 0、普通订单 2、虚拟商品订单 4、电子券（poi核销） 5、三方核销 | - | - |
| 0 | create_time_start | CreateTimeStart | false | 99 | 1617355413 | 下单时间：开始，秒级时间戳 | - | - |
| 0 | create_time_end | CreateTimeEnd | false | 99 | 1617355413 | 下单时间：截止，秒级时间戳 | - | - |
| 0 | abnormal_order | AbnormalOrder | false | 99 | 1 | 异常订单，1-异常取消，2-风控审核中 | - | - |
| 0 | trade_type | TradeType | false | 99 | 1 | 交易类型：0-普通；1-拼团；2-定金预售；3-订金找货；4-拍卖；5-0元单；6-回收；7-寄卖；10-寄样；11-0元抽奖(超级福袋)；12-达人买样；13-普通定制；16-大众竞拍；18-小时达；102-定金预售的赠品单；103-收款； | - | - |
| 0 | combine_status | CombineStatus | false | 3 | - | 状态组合查询，直接输入状态码（只支持一个元素） | - | - |
| 1 | combine_status.order_status | OrderStatus | false | 2 | 1 | 订单状态，","分隔多个状态；1-待支付；101-部分发货；105-已支付；2-待发货；3-已发货；4-已取消；5-已完成 | - | - |
| 1 | combine_status.main_status | MainStatus | false | 2 | 103 | 【已废弃，不推荐使用】主流程状态，","分隔多个状态； | - | - |
| 0 | update_time_start | UpdateTimeStart | false | 99 | 1617355413 | 更新时间：开始 | - | - |
| 0 | update_time_end | UpdateTimeEnd | false | 99 | 1617355413 | 更新时间：截止 | - | - |
| 0 | size | Size | true | 99 | 20 | 单页大小，限制100以内 | - | - |
| 0 | page | Page | true | 99 | 0 | 页码，0页开始 | - | - |
| 0 | order_by | OrderBy | false | 2 | create_time | 排序条件(create_time 订单创建时间；update_time 订单更新时间；默认create_time；) | - | - |
| 0 | order_asc | OrderAsc | false | 4 | false | 排序类型，小到大或大到小，默认大到小 | - | - |
| 0 | fulfil_status | FulfilStatus | false | 2 | no_accept | 履约状态；如小时达未接单"no_accept" | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | page | Page | - | 99 | 1 | 页数，从0开始 | 28 | R1 |
| 0 | total | Total | - | 99 | 1000 | 总订单数 | 28 | R1 |
| 0 | size | Size | - | 99 | 20 | 单页大小 | 28 | R1 |
| 0 | shop_order_list | ShopOrderList | - | 3 | - | 订单信息 | - | R1 |
| 1 | shop_order_list.actual_receive_amount_info | ActualReceiveAmountInfo | - | 5 | - | 商家收入金额信息 | - | R1 |
| 2 | shop_order_list.actual_receive_amount_info.actual_receive_amount_details | ActualReceiveAmountDetails | - | 3 | - | 商家收入金额明细项列表 | 49 | R1 |
| 3 | shop_order_list.actual_receive_amount_info.actual_receive_amount_details.type | type | - | 99 | 1 | 明细项类型：<br>1: 消费者实付金额<br>2: 平台承担优惠金额<br>3: 达人承担优惠金额<br>4: 三方平台承担优惠金额<br>5: 服务商承担优惠 | 49 | - |
| 3 | shop_order_list.actual_receive_amount_info.actual_receive_amount_details.amount | Amount | - | 99 | 1000 | 明细项金额（单位：分） | 49 | - |
| 2 | shop_order_list.actual_receive_amount_info.actual_receive_amount | ActualReceiveAmount | - | 99 | 9900 | 商家收入金额（单位：分） | 49 | - |
| 1 | shop_order_list.recommend_logistics_list | RecommendLogisticsList | - | 3 | - | 推荐物流商 | - | R1 |
| 2 | shop_order_list.recommend_logistics_list.logistics_company_code | LogisticsCompanyCode | - | 2 | shunfeng | 该订单推荐使用的物流公司code | 28 | - |
| 2 | shop_order_list.recommend_logistics_list.logistics_company_name | LogisticsCompanyName | - | 2 | 顺丰 | 该订单推荐使用的物流公司名称 | 28 | - |
| 2 | shop_order_list.recommend_logistics_list.logistics_product_type | LogisticsProductType | - | 2 | tekuai | 快递产品类型type | 28 | - |
| 2 | shop_order_list.recommend_logistics_list.logistics_product_type_name | LogisticsProductTypeName | - | 2 | 特快 | 快递产品类型名称 | 28 | - |
| 2 | shop_order_list.recommend_logistics_list.logistics_recommend_start_ship_time | LogisticsRecommendStartShipTime | - | 2 | 1730883081 | 该推荐快递下，建议最早发货时间（秒级时间戳，精确到分钟） | 28 | - |
| 2 | shop_order_list.recommend_logistics_list.logistics_recommend_end_ship_time | LogisticsRecommendEndShipTime | - | 2 | 1730883081 | 该推荐快递下，建议最晚发货时间（秒级时间戳，精确到分钟） | 28 | - |
| 2 | shop_order_list.recommend_logistics_list.logistics_collection_end_time | LogisticsCollectionEndTime | - | 2 | 1730883081 | 该物流最晚揽收时间（秒级时间戳，精确到分钟） | 28 | - |
| 2 | shop_order_list.recommend_logistics_list.logistics_delivery_end_time | LogisticsDeliveryEndTime | - | 2 | 1730883081 | 该物流最晚发货时间（秒级时间戳，精确到分钟） | 28 | - |
| 1 | shop_order_list.order_operate_record_list | OrderOperateRecordList | - | 3 | - | 订单操作记录 | - | R1 |
| 2 | shop_order_list.order_operate_record_list.operate_time | CreateTime | - | 2 | 2025-03-10 19:09:01 | 操作时间 | 28 | - |
| 2 | shop_order_list.order_operate_record_list.operator | Operator | - | 2 | 买家 | 操作人，买家、商家 | 28 | - |
| 2 | shop_order_list.order_operate_record_list.op_code | OpCode | - | 99 | 100008 | 操作记录类型，100008-改地址； | 28 | - |
| 2 | shop_order_list.order_operate_record_list.op_id | OpId | - | 2 | 6940199726097503849_1741604941_100008 | 订单操作记录唯一ID | 28 | - |
| 1 | shop_order_list.make_up_post_amount | MakeUpPostAmount | - | 99 | 10 | 运费补差金额（单位：分） | 28 | - |
| 1 | shop_order_list.promise_detail | PromiseDetail | - | 5 | - | 订单时效详情 | - | R1 |
| 2 | shop_order_list.promise_detail.promise_type | PromiseType | - | 99 | 2 | 1-承诺发货时效订单，2-承诺送达时效订单，5-预约送达时效订单，6-预约发货时效订单; | 28 | - |
| 2 | shop_order_list.promise_detail.promise_time_detail | PromiseTimeDetail | - | 5 | - | 时效类型的时间信息 | 28 | R1 |
| 3 | shop_order_list.promise_detail.promise_time_detail.promise_exp_ship_time | PromiseExpShipTime | - | 99 | 1730883081 | promise_type=1或者6，承诺发货时效订单/预约发货订的最晚发货时间; | 28 | - |
| 3 | shop_order_list.promise_detail.promise_time_detail.promise_latest_receipt_time | PromiseLatestReceiptTime | - | 99 | 1730883081 | promise_type=2或者5，承诺送达时效订单/预约送达时效订单的最晚送达时间； | 28 | - |
| 3 | shop_order_list.promise_detail.promise_time_detail.promise_appointment_ship_time | PromiseAppointmentShipTime | - | 99 | 1730883081 | 预约发货时间，promise_type=1或者6，消费者预约或者商家通过协商工具修改最晚发货时效后存在该值; | 28 | - |
| 3 | shop_order_list.promise_detail.promise_time_detail.promise_recommend_start_ship_time | PromiseRecommendStartShipTime | - | 99 | 1730883081 | promise_type=2，承诺送达时效订单的最早建议发货时间； | 28 | - |
| 3 | shop_order_list.promise_detail.promise_time_detail.promise_recommend_end_ship_time | PromiseRecommendEndShipTime | - | 99 | 1730883081 | promise_type=2，承诺送达时效订单的最晚建议发货时间； | 28 | - |
| 2 | shop_order_list.promise_detail.recommend_logistics_list | RecommendLogisticsList | - | 3 | - | 推荐的物流公司信息 | 28 | R1 |
| 3 | shop_order_list.promise_detail.recommend_logistics_list.logistics_latest_receipt_time | LogisticsDeliveryEndTime | - | 99 | 1730883081 | 该物流承诺送达时间（秒级时间戳，精确到分钟） | 28 | - |
| 3 | shop_order_list.promise_detail.recommend_logistics_list.logistics_collection_end_time | LogisticsCollectionEndTime | - | 99 | 1730883081 | 该物流最晚揽收时间（秒级时间戳，精确到分钟） | 28 | - |
| 3 | shop_order_list.promise_detail.recommend_logistics_list.logistics_company_code | LogisticsCompanyCode | - | 2 | shunfeng | 物流公司code | 28 | - |
| 3 | shop_order_list.promise_detail.recommend_logistics_list.logistics_company_name | LogisticsCompanyName | - | 2 | 顺丰 | 物流公司名称 | 28 | - |
| 3 | shop_order_list.promise_detail.recommend_logistics_list.logistics_company_product_type | LogisticsProductType | - | 2 | tekuai | 物流公司产品code | 28 | - |
| 3 | shop_order_list.promise_detail.recommend_logistics_list.logistics_company_product_type_name | LogisticsProductTypeName | - | 2 | 特快 | 物流公司产品名称; | 28 | - |
| 3 | shop_order_list.promise_detail.recommend_logistics_list.logistics_recommend_start_ship_time | LogisticsRecommendStartShipTime | - | 99 | 1730883081 | 物流公司建议最早发货时间; | 28 | - |
| 3 | shop_order_list.promise_detail.recommend_logistics_list.logistics_recommend_end_ship_time | LogisticsRecommendEndShipTime | - | 99 | 1730883081 | 物流公司建议最晚发货时间 | 28 | - |
| 1 | shop_order_list.bmp_source | BmpSource | - | 2 | flower | 业务身份-来源 | 28 | - |
| 1 | shop_order_list.bmp_vertical_market | BmpVerticalMarket | - | 2 | giftcard | 业务身份-垂类 | 28 | - |
| 1 | shop_order_list.bmp_seller_type | BmpSellerType | - | 2 | xiaodian | 业务身份-卖家身份 | 28 | - |
| 1 | shop_order_list.urge_deliver_Times | UrgeDeliverTimes | - | 99 | 1 | 催单次数 | 28 | - |
| 1 | shop_order_list.shop_period_purchase_info | ShopPeriodPurchaseInfo | - | 5 | - | 周期购信息（有值表示为周期购订单，空表示不是周期购订单） | - | R1 |
| 2 | shop_order_list.shop_period_purchase_info.period_num | PeriodNum | - | 99 | 4 | 总期数 | 28 | - |
| 2 | shop_order_list.shop_period_purchase_info.deliver_type | DeliverType | - | 99 | 5 | 类型（5预约送达，6预约发货） | 28 | - |
| 1 | shop_order_list.relation_shop_order_ids | RelationShopOrderIds | - | 3 | ["632743925435"] | 订单相关联的订单单号；如维修主商品单关联的维修单订单号 | 28 | R1 |
| 1 | shop_order_list.promotion_detail | PromotionDetail | - | 5 | - | 优惠信息，用户下单过程中享受到的优惠 | - | R1 |
| 2 | shop_order_list.promotion_detail.kol_discount_detail | KolDiscountDetail | - | 5 | - | 达人优惠信息 | 28 | R1 |
| 3 | shop_order_list.promotion_detail.kol_discount_detail.full_discount_info | FullDiscountInfo | - | 3 | - | 优惠活动信息 | 28 | R1 |
| 4 | shop_order_list.promotion_detail.kol_discount_detail.full_discount_info.extra_map | ExtraMap | - | 8 | 1 | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 3 | shop_order_list.promotion_detail.kol_discount_detail.redpack_info | RedpackInfo | - | 3 | - | 红包信息 | 28 | R1 |
| 4 | shop_order_list.promotion_detail.kol_discount_detail.redpack_info.extra_map | ExtraMap | - | 8 | 1 | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 3 | shop_order_list.promotion_detail.kol_discount_detail.coupon_info | CouponInfo | - | 3 | - | 优惠券信息 | 28 | R1 |
| 4 | shop_order_list.promotion_detail.kol_discount_detail.coupon_info.extra_map | ExtraMap | - | 8 | 1 | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 2 | shop_order_list.promotion_detail.platform_discount_detail | PlatformDiscountDetail | - | 5 | - | 平台优惠信息 | 28 | R1 |
| 3 | shop_order_list.promotion_detail.platform_discount_detail.redpack_info | RedpackInfo | - | 3 | - | 红包信息 | 28 | R1 |
| 4 | shop_order_list.promotion_detail.platform_discount_detail.redpack_info.extra_map | ExtraMap | - | 8 | 1 | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 3 | shop_order_list.promotion_detail.platform_discount_detail.full_discount_info | FullDiscountInfo | - | 3 | - | 优惠活动信息 | 28 | R1 |
| 4 | shop_order_list.promotion_detail.platform_discount_detail.full_discount_info.extra_map | ExtraMap | - | 8 | 1 | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 3 | shop_order_list.promotion_detail.platform_discount_detail.coupon_info | CouponInfo | - | 3 | - | 优惠券信息 | 28 | R1 |
| 4 | shop_order_list.promotion_detail.platform_discount_detail.coupon_info.extra_map | ExtraMap | - | 8 | 1 | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 2 | shop_order_list.promotion_detail.shop_discount_detail | ShopDiscountDetail | - | 5 | - | 店铺优惠信息 | 28 | R1 |
| 3 | shop_order_list.promotion_detail.shop_discount_detail.full_discount_info | FullDiscountInfo | - | 3 | - | 优惠活动信息 | 28 | R1 |
| 4 | shop_order_list.promotion_detail.shop_discount_detail.full_discount_info.extra_map | ExtraMap | - | 8 | 1 | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 3 | shop_order_list.promotion_detail.shop_discount_detail.coupon_info | CouponInfo | - | 3 | - | 优惠券信息 | 28 | R1 |
| 4 | shop_order_list.promotion_detail.shop_discount_detail.coupon_info.extra_map | ExtraMap | - | 8 | 1 | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 3 | shop_order_list.promotion_detail.shop_discount_detail.redpack_info | RedpackInfo | - | 3 | - | 红包明细 | 28 | R1 |
| 4 | shop_order_list.promotion_detail.shop_discount_detail.redpack_info.extra_map | ExtraMap | - | 8 | 1 | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 1 | shop_order_list.extra_promotion_amount_detail | ExtraPromotionAmountDetail | - | 3 | - | 运费等额外优惠信息详情；参考文档：https://bytedance.larkoffice.com/docx/G7UodvZY0ojuF9x7fL7ceVF9nSe | - | R1 |
| 2 | shop_order_list.extra_promotion_amount_detail.share_cost | ShareCost | - | 5 | - | 承担信息 | - | R1 |
| 3 | shop_order_list.extra_promotion_amount_detail.share_cost.author_cost | AuthorCost | - | 99 | 200 | 达人承担；分 | 49 | - |
| 3 | shop_order_list.extra_promotion_amount_detail.share_cost.shop_cost | ShopCost | - | 99 | 200 | 商家承担；分 | 49 | - |
| 3 | shop_order_list.extra_promotion_amount_detail.share_cost.platform_cost | PlatformCost | - | 99 | 200 | 平台承担；分 | 49 | - |
| 2 | shop_order_list.extra_promotion_amount_detail.promotion_type | PromotionType | - | 2 | freight_discount | 优惠活动code：<br>freight_discount--运费优惠<br>foodtakeout_shop_freight_discount--外卖运费优惠 | 49 | - |
| 2 | shop_order_list.extra_promotion_amount_detail.promotion_desc | promotion_desc | - | 2 | 满20减2元运费 | 优惠活动描述 | 49 | - |
| 1 | shop_order_list.order_tag | OrderTag | - | 8 | {"shop_delivery_appointment_company":"{"express_company_code":"shunfeng","express_company_name":"顺丰"}"<br>} | 订单的一些C端标签，如鲜花订单指定物流商<br>{"shop_delivery_appointment_company":"{"express_company_code":"shunfeng","express_company_name":"顺丰"}"<br>} | 28 | R1 |
| 1 | shop_order_list.fulfill_status | FulfillStatus | - | 2 | ACCEPTED | 接单状态 | 31 | - |
| 1 | shop_order_list.original_shop_id | OriginalShopId | - | 99 | 1234 | 即时零售订单对应的总店id | 44 | - |
| 1 | shop_order_list.free_interest | FreeInterest | - | 5 | - | 抖音月付免息信息 | - | R1 |
| 2 | shop_order_list.free_interest.trade_amount | TradeAmount | - | 99 | 1000 | 总交易金额 | 28 | - |
| 2 | shop_order_list.free_interest.total_free_interest_platform_clearing_amount | TotalFreeInterestPlatformClearingAmount | - | 99 | 200 | 抖音月付，平台承担免息金额，单位: 分; | 28 | - |
| 2 | shop_order_list.free_interest.total_free_interest_shop_clearing_amount | TotalFreeInterestPartnerClearingAmount | - | 99 | 100 | 抖音月付，商家承担免息金额，单位: 分; | 28 | - |
| 2 | shop_order_list.free_interest.period | Period | - | 99 | 12 | 免息期数 | 28 | - |
| 2 | shop_order_list.free_interest.refund_total_free_interest_platform_clearing_amount | RefundTotalFreeInterestPlatformClearingAmount | - | 99 | 0 | 抖音月付，退款部分平台承担免息金额，单位: 分; | 28 | - |
| 2 | shop_order_list.free_interest.refund_total_free_interest_shop_clearing_amount | RefundTotalFreeInterestPartnerClearingAmount | - | 99 | 0 | 抖音月付，退款部分商家承担免息金额，单位: 分; | 28 | - |
| 2 | shop_order_list.free_interest.free_interest_detail | FreeInterestDetail | - | 3 | - | 抖音月付明细 | 28 | R1 |
| 3 | shop_order_list.free_interest.free_interest_detail.sku_order_id | SkuOrderId | - | 2 | 商品单单号 | 12335 | 28 | - |
| 3 | shop_order_list.free_interest.free_interest_detail.platform_clearing_amount | PlatformClearingAmount | - | 99 | 200 | 抖音月付，平台承担免息金额，单位: 分; | 28 | - |
| 3 | shop_order_list.free_interest.free_interest_detail.shop_clearing_amount | PartnerClearingAmount | - | 99 | 100 | 抖音月付，商家承担免息金额，单位: 分; | 28 | - |
| 3 | shop_order_list.free_interest.free_interest_detail.trade_type | TradeType | - | 99 | 1 | 交易类型，1-支付，2-退款 | 28 | - |
| 1 | shop_order_list.receipt_time_map | ReceiptTimeMap | - | 8 | {<br>"RemindMerchantStockingTime":"2374893758943"<br>} | 时效信息（小时达）；<br>枚举值：RemindMerchantStockingTime-提醒商家开始备货时间；LatestStockingCompletionTime --最晚备货完成时间；RemindMerchantDeliveryTime--提醒商家发配送时间；EtaDuration--eta时长（小时达） | 28 | R1 |
| 1 | shop_order_list.consolidate_info | ConsolidateInfo | - | 5 | - | 订单中转信息 | - | R1 |
| 2 | shop_order_list.consolidate_info.consolidate_type | ConsolidateType | - | 99 | 1 | 中转类型，1-新疆中转 | 28 | - |
| 1 | shop_order_list.aweme_id | AwemeId | - | 2 | Youyou | 达人抖音号，样品订单场景下才会返回的申样达人信息； | 28 | - |
| 1 | shop_order_list.user_icon | UserIcon | - | 2 | https://p26.douyinpic.com/img/aweme-avatar | 达人抖音头像，样品订单场景下才会返回的申样达人信息； | 28 | - |
| 1 | shop_order_list.user_nick_name | UserNickName | - | 2 | 这是个名字 | 达人抖音昵称，样品订单场景下才会返回的申样达人信息； | 28 | - |
| 1 | shop_order_list.recommend_end_ship_time | RecommendEndShipTime | - | 99 | 1691063475 | 建议商家最晚发货时间，秒 | 28 | - |
| 1 | shop_order_list.recommend_start_ship_time | RecommendStartShipTime | - | 99 | 1691063475 | 建议商家最早发货时间，秒 | 28 | - |
| 1 | shop_order_list.receipt_date | ReceiptDate | - | 2 | 2023-08-03 | 用户选择的预约送达日期 | 28 | - |
| 1 | shop_order_list.accept_order_status | AcceptOrderStatus | - | 99 | 0 | 小时达订单接单状态；0-未接单；1-已接单；2-超时取消，或商家取消 | 28 | - |
| 1 | shop_order_list.shop_id | ShopId | - | 0 | 77977 | 店铺ID | 44 | R1 |
| 1 | shop_order_list.shop_name | ShopName | - | 0 | 刘好好严选 | 商户名称 | 44 | R1 |
| 1 | shop_order_list.open_id | OpenId | - | 2 | 23431434 | 抖音小程序ID | 45 | R1 |
| 1 | shop_order_list.order_id | OrderId | - | 2 | 4781320682406083640 | 店铺订单号 | 31 | R1 |
| 1 | shop_order_list.order_level | OrderLevel | - | 99 | 2 | 订单层级 | 28 | R1 |
| 1 | shop_order_list.biz | Biz | - | 99 | 1 | 【业务来源】 1、鲁班 2、小店 3、好好学习 4、ev 5、虚拟 6、建站 7、核销 8、玉石 9、ez 10、ep 11、虚拟卡券 12、服务市场 13、EP视频课 14、EP直播课 21、跨境BBC 22、跨境BC 23、跨境CC,UPC 24、手机充值 25、拍卖保证金 26、懂车帝抵扣券 27、懂车帝返现券 28、离岛免税 29、海南会员购 30、抽奖 32、dou+券 76、大闸蟹 99、保险 102、小店海外 | 46 | R1 |
| 1 | shop_order_list.biz_desc | BizDesc | - | 2 | 鲁班 | 业务来源描述 | 46 | R1 |
| 1 | shop_order_list.order_type | OrderType | - | 99 | 0 | 【订单类型】 0、普通订单 2、虚拟商品订单 4、电子券（poi核销） 5、三方核销 | 31 | R1 |
| 1 | shop_order_list.order_type_desc | OrderTypeDesc | - | 2 | 普通订单 | 订单类型描述 | 31 | R1 |
| 1 | shop_order_list.trade_type | TradeType | - | 99 | 1 | 【已废弃】请使用sku_order_list.trade_type | 28 | R1 |
| 1 | shop_order_list.trade_type_desc | TradeTypeDesc | - | 2 | 拼团 | 【已废弃】请使用sku_order_list. trade_type_desc | 28 | R1 |
| 1 | shop_order_list.order_status | OrderStatus | - | 99 | 3 | 订单状态;1 待确认/待支付-订单创建完毕;105-已支付; 2-备货中； 101-部分发货; 3-已发货（全部发货）;4- 已取消;5 已完成（已收货）; | 31 | R1 |
| 1 | shop_order_list.order_status_desc | OrderStatusDesc | - | 2 | 待支付 | 订单状态描述 | 31 | R1 |
| 1 | shop_order_list.main_status | MainStatus | - | 99 | 103 | 主流程状态 | 31 | R1 |
| 1 | shop_order_list.main_status_desc | MainStatusDesc | - | 2 | 部分支付 | 主流程状态描述 | 31 | R1 |
| 1 | shop_order_list.pay_time | PayTime | - | 99 | 1617355413 | 支付时间 | 31 | R1 |
| 1 | shop_order_list.order_expire_time | OrderExpireTime | - | 99 | 1800 | 订单过期时间 | 31 | R1 |
| 1 | shop_order_list.finish_time | FinishTime | - | 99 | 1617355413 | 订单完成时间 | 31 | R1 |
| 1 | shop_order_list.create_time | CreateTime | - | 99 | 1617355413 | 下单时间 | 31 | R1 |
| 1 | shop_order_list.update_time | UpdateTime | - | 99 | 1617355413 | 订单更新时间 | 31 | R1 |
| 1 | shop_order_list.cancel_reason | CancelReason | - | 2 | 不想要 | 取消原因 | 31 | R1 |
| 1 | shop_order_list.buyer_words | BuyerWords | - | 2 | 要xxx | 买家留言 | 28 | R1 |
| 1 | shop_order_list.seller_words | SellerWords | - | 2 | 注意XX | 商家备注 | 48 | R1 |
| 1 | shop_order_list.b_type | BType | - | 99 | 1 | 【下单端】 0、站外 1、火山 2、抖音 3、头条 4、西瓜 5、微信 6、值点app 7、头条lite 8、懂车帝 9、皮皮虾 11、抖音极速版 12、TikTok 13、musically 14、穿山甲 15、火山极速版 16、服务市场 26、番茄小说 27、UG教育营销电商平台 28、Jumanji 29、电商SDK | 46 | R1 |
| 1 | shop_order_list.b_type_desc | BTypeDesc | - | 2 | 抖音 | 下单端描述 | 46 | R1 |
| 1 | shop_order_list.sub_b_type | SubBType | - | 99 | 1 | 【下单场景】 0、未知 1、app内-原生 2、app内-小程序 3、H5 13、电商SDK-头条 35、电商SDK-头条lite | 46 | R1 |
| 1 | shop_order_list.sub_b_type_desc | SubBTypeDesc | - | 2 | 小程序 | 下单场景描述 | 46 | R1 |
| 1 | shop_order_list.app_id | AppId | - | 99 | 43545454556 | 具体某个小程序的ID | 45 | R1 |
| 1 | shop_order_list.pay_type | PayType | - | 99 | 1 | 支付类型；0=货到付款；1=微信；2=支付宝；3=小程序；4=银行卡；5=余额；7=无需支付（0元单）；8=DOU分期（信用支付）；9=新卡支付；12=先用后付；16=收银台支付 | 31 | R1 |
| 1 | shop_order_list.channel_payment_no | ChannelPaymentNo | - | 2 | PAY234532534534 | 支付渠道的流水号 | 31 | R1 |
| 1 | shop_order_list.order_amount | OrderAmount | - | 99 | 600 | 订单金额（单位：分） | 49 | R1 |
| 1 | shop_order_list.pay_amount | PayAmount | - | 99 | 500 | 支付金额（单位：分） | 49 | R1 |
| 1 | shop_order_list.post_amount | PostAmount | - | 99 | 10 | 快递费（单位：分） | 49 | R1 |
| 1 | shop_order_list.post_insurance_amount | PostInsuranceAmount | - | 99 | 10 | 运费险金额（单位：分） | 49 | R1 |
| 1 | shop_order_list.modify_amount | ModifyAmount | - | 99 | -10 | 改价金额变化量（单位：分） | 49 | R1 |
| 1 | shop_order_list.modify_post_amount | ModifyPostAmount | - | 99 | -1 | 改价运费金额变化量（单位：分） | 49 | R1 |
| 1 | shop_order_list.promotion_amount | PromotionAmount | - | 99 | 1000 | 订单优惠总金额（单位：分）= 店铺优惠金额+ 平台优惠金额+ 达人优惠金额 | 49 | R1 |
| 1 | shop_order_list.promotion_shop_amount | PromotionShopAmount | - | 99 | 100 | 店铺优惠金额（单位：分），属于店铺的优惠活动、优惠券、红包的总优惠金额 | 49 | R1 |
| 1 | shop_order_list.promotion_platform_amount | PromotionPlatformAmount | - | 99 | 100 | 平台优惠金额（单位：分），属于平台的优惠活动、优惠券、红包的总优惠金额 | 49 | R1 |
| 1 | shop_order_list.shop_cost_amount | ShopCostAmount | - | 99 | 100 | 商家承担金额（单位：分），订单参与活动和优惠中商家承担部分的总金额 | 49 | R1 |
| 1 | shop_order_list.platform_cost_amount | PlatformCostAmount | - | 99 | 100 | 平台承担金额（单位：分），订单参与活动和优惠中平台+作者（达人）承担部分的总金额,包含作者（达人）承担金额：platform_cost_amount = only_platform_cost_amount + author_cost_amount | 49 | R1 |
| 1 | shop_order_list.promotion_talent_amount | PromotionTalentAmount | - | 99 | 100 | 达人优惠金额（单位：分），属于达人的优惠活动、优惠券、红包的总优惠金额 | 49 | R1 |
| 1 | shop_order_list.promotion_pay_amount | PromotionPayAmount | - | 99 | 10 | 支付优惠金额（单位：分），支付渠道上的优惠金额 | 49 | R1 |
| 1 | shop_order_list.encrypt_post_tel | PostTel | - | 2 | 12345678911 | 收件人电话 | 38 | R2 |
| 1 | shop_order_list.encrypt_post_receiver | PostReceiver | - | 2 | 张三 | 收件人姓名 | 38 | R2 |
| 1 | shop_order_list.post_addr | PostAddr | - | 5 | - | 收件人地址 | - | R1 |
| 2 | shop_order_list.post_addr.province | province | - | 5 | - | 省/直辖市 | 28 | R1 |
| 3 | shop_order_list.post_addr.province.name | name | - | 2 | 北京市 | 名称 | 28 | R1 |
| 3 | shop_order_list.post_addr.province.id | id | - | 2 | 110000 | 地区ID | 28 | R1 |
| 2 | shop_order_list.post_addr.city | city | - | 5 | - | 市 | 28 | R1 |
| 3 | shop_order_list.post_addr.city.name | name | - | 2 | 市辖区 | 名称 | 28 | R1 |
| 3 | shop_order_list.post_addr.city.id | id | - | 2 | 110000 | 地区ID | 28 | R1 |
| 2 | shop_order_list.post_addr.town | town | - | 5 | - | 区县 | 28 | R1 |
| 3 | shop_order_list.post_addr.town.name | name | - | 2 | 海淀区 | 名称 | 28 | R1 |
| 3 | shop_order_list.post_addr.town.id | id | - | 2 | 110000 | 地区ID | 28 | R1 |
| 2 | shop_order_list.post_addr.street | street | - | 5 | - | 街道 | 28 | R1 |
| 3 | shop_order_list.post_addr.street.name | name | - | 2 | 中关村街道 | 名称 | 28 | R1 |
| 3 | shop_order_list.post_addr.street.id | id | - | 2 | 110000 | 地区ID | 28 | R1 |
| 2 | shop_order_list.post_addr.encrypt_detail | detail | - | 2 | 丹棱街1号 | 详细地址 | 28 | R2 |
| 1 | shop_order_list.exp_ship_time | ExpShipTime | - | 99 | 1617355413 | 预计发货时间 | 31 | R1 |
| 1 | shop_order_list.ship_time | ShipTime | - | 99 | 1617355413 | 发货时间 | 31 | R1 |
| 1 | shop_order_list.logistics_info | LogisticsInfo | - | 3 | - | 物流信息 | - | R1 |
| 2 | shop_order_list.logistics_info.reverse_express_info | ReverseExpressInfo | - | 5 | - | 该轨迹中转物流的退回单号信息 | - | R1 |
| 3 | shop_order_list.logistics_info.reverse_express_info.logistics_company_name | LogisticsCompanyName | - | 2 | 顺丰 | 物流公司中文 | 28 | - |
| 3 | shop_order_list.logistics_info.reverse_express_info.logistics_company | LogisticsCompany | - | 2 | shunfeng | 物流公司 | 28 | - |
| 3 | shop_order_list.logistics_info.reverse_express_info.logistics_code | LogisticsCode | - | 2 | sf7382942304 | 物流单号 | 28 | - |
| 2 | shop_order_list.logistics_info.transit_merge_type | TransitMergeType | - | 2 | merge | 是否为合单包裹<br>merge-合包<br>single-非合包 | 28 | - |
| 2 | shop_order_list.logistics_info.sp_total_price | SpTotalPrice | - | 99 | 700 | 即时零售订单使用平台运力时的配送应付金额；单位：分 | 28 | - |
| 2 | shop_order_list.logistics_info.sp_price | SpPrice | - | 99 | 400 | 即时零售订单使用平台运力时的配送实付金额；单位：分 | 28 | - |
| 2 | shop_order_list.logistics_info.sp_discount_price | SpDiscountPrice | - | 99 | 300 | 即时零售订单使用平台运力时的配送优惠金额；单位：分 | 28 | - |
| 2 | shop_order_list.logistics_info.tracking_no | TrackingNo | - | 2 | 3617355413 | 物流单号 | 28 | R1 |
| 2 | shop_order_list.logistics_info.company | Company | - | 2 | shunfeng | 物流公司 | 28 | R1 |
| 2 | shop_order_list.logistics_info.ship_time | ShipTime | - | 99 | 1617355413 | 发货时间 | 28 | R1 |
| 2 | shop_order_list.logistics_info.delivery_id | DeliveryId | - | 2 | shunfeng_3617355413 | 包裹id | 28 | R1 |
| 2 | shop_order_list.logistics_info.company_name | CompanyName | - | 2 | 顺丰 | 物流公司名称 | 28 | R1 |
| 2 | shop_order_list.logistics_info.product_info | ProductInfo | - | 3 | - | 商品信息 | 28 | R1 |
| 3 | shop_order_list.logistics_info.product_info.product_name | ProductName | - | 2 | 苹果 | 商品名称 | 28 | R1 |
| 3 | shop_order_list.logistics_info.product_info.price | Price | - | 99 | 1000 | 商品价格 | 28 | R1 |
| 3 | shop_order_list.logistics_info.product_info.outer_sku_id | OuterSkuId | - | 2 | sdfa | 商家编码 | 28 | R1 |
| 3 | shop_order_list.logistics_info.product_info.sku_id | SkuId | - | 99 | 3254535 | 商品skuId | 28 | R1 |
| 3 | shop_order_list.logistics_info.product_info.sku_specs | SkuSpecs | - | 3 | - | 规格信息 | 28 | R1 |
| 4 | shop_order_list.logistics_info.product_info.sku_specs.name | Name | - | 2 | 颜色 | 规格名称 | 28 | R1 |
| 4 | shop_order_list.logistics_info.product_info.sku_specs.value | Value | - | 2 | 蓝 | 规格值 | 28 | R1 |
| 3 | shop_order_list.logistics_info.product_info.product_count | ProductCount | - | 99 | 2 | 发货商品数量 | 28 | R1 |
| 3 | shop_order_list.logistics_info.product_info.product_id | ProductId | - | 99 | 3473196049974326153 | 商品ID，字符串型 | 28 | R1 |
| 3 | shop_order_list.logistics_info.product_info.sku_order_id | SkuOrderId | - | 2 | 4781320682406083640 | 商品单ID | 28 | R1 |
| 3 | shop_order_list.logistics_info.product_info.product_id_str | ProductId | - | 2 | 3473196049974326153 | 商品ID，字符串型 | 28 | R1 |
| 2 | shop_order_list.logistics_info.hour_up_pickup_code | HourUpPickUpCode | - | 2 | 7198 | 骑手取件码；触发场景①商家：抖超小时达商家通过平台运力发货并选择需要取件码时，该字段有值返回。应用场景①骑手到店后报流水号，门店员工根据流水号【示例值：流水号#1】找到对应包裹。②门店员工与骑手核对取件码，核对无误后交货给骑手； | 28 | - |
| 2 | shop_order_list.logistics_info.guarantee_amount | GuaranteeAmount | - | 99 | 100 | 小时达订单保价金额，单位：分 | 28 | - |
| 1 | shop_order_list.sku_order_list | SkuOrderList | - | 3 | - | 商品单信息 | - | R1 |
| 2 | shop_order_list.sku_order_list.shell_order_info | ShellOrderInfo | - | 5 | - | 借壳订单实际销售公司 | - | R1 |
| 3 | shop_order_list.sku_order_list.shell_order_info.supplier_shop_name | SupplierShopName | - | 2 | 浙江杭州测试主体 | 借壳订单实际销售公司名称 | - | - |
| 3 | shop_order_list.sku_order_list.shell_order_info.supplier_shop_id | SupplierShopId | - | 2 | 90419 | 借壳订单实际销售公司 id | - | - |
| 2 | shop_order_list.sku_order_list.inventory_list | InventoryList | - | 3 | - | 仓库信息 | - | R1 |
| 3 | shop_order_list.sku_order_list.inventory_list.warehouse_sub_type | WarehouseSubType | - | 99 | 1 | 仓库子类型 | - | - |
| 3 | shop_order_list.sku_order_list.inventory_list.group | Group | - | 2 | "" | 组 | - | - |
| 3 | shop_order_list.sku_order_list.inventory_list.warehouse_type | WarehouseType | - | 99 | 1 | 仓库类型 | - | - |
| 3 | shop_order_list.sku_order_list.inventory_list.count | Count | - | 99 | 1 | 数量 | - | - |
| 3 | shop_order_list.sku_order_list.inventory_list.warehouse_name | WarehouseName | - | 2 | "xx仓库" | 仓库名称 | - | - |
| 3 | shop_order_list.sku_order_list.inventory_list.inventory_type_desc | InventoryTypeDesc | - | 2 | "" | 仓库类型描述 | - | - |
| 3 | shop_order_list.sku_order_list.inventory_list.inventory_type | InventoryType | - | 99 | 1 | 仓库类型 | - | - |
| 3 | shop_order_list.sku_order_list.inventory_list.out_warehouse_id | OutWarehouseId | - | 2 | "1" | 仓库id | - | - |
| 3 | shop_order_list.sku_order_list.inventory_list.warehouse_id | WarehouseId | - | 2 | "1" | 仓库id | - | - |
| 2 | shop_order_list.sku_order_list.actual_receive_amount_info | ActualReceiveAmountInfo | - | 5 | - | 商家收入金额信息 | - | R1 |
| 3 | shop_order_list.sku_order_list.actual_receive_amount_info.actual_receive_amount_details | ActualReceiveAmountDetails | - | 3 | - | 商家收入金额明细项 | - | R1 |
| 4 | shop_order_list.sku_order_list.actual_receive_amount_info.actual_receive_amount_details.amount | Amount | - | 99 | 1000 | 明细项金额（单位：分） | 49 | - |
| 4 | shop_order_list.sku_order_list.actual_receive_amount_info.actual_receive_amount_details.type | type | - | 99 | 1 | 明细项类型：<br>1: 消费者实付金额<br>2: 平台承担优惠金额<br>3: 达人承担优惠金额<br>4: 三方平台承担优惠金额<br>5: 服务商承担优惠 | 49 | - |
| 3 | shop_order_list.sku_order_list.actual_receive_amount_info.actual_receive_amount | ActualReceiveAmount | - | 99 | 9900 | 商家收入金额（单位：分） | 49 | - |
| 2 | shop_order_list.sku_order_list.auction_info | AuctionInfo | - | 5 | - | 拍卖信息 | - | R1 |
| 3 | shop_order_list.sku_order_list.auction_info.auction_order_type | AutionOrderType | - | 2 | gov_auction_winning | 拍卖订单类型 | - | - |
| 3 | shop_order_list.sku_order_list.auction_info.related_order_ids | RelatedOrderIds | - | 3 | [] | 关联订单 | - | R1 |
| 3 | shop_order_list.sku_order_list.auction_info.starting_price | StartingPrice | - | 99 | 0 | 起拍价 | - | - |
| 3 | shop_order_list.sku_order_list.auction_info.auction_begin_time | AuctionBeginTime | - | 99 | 0 | 拍卖开始时间 | - | - |
| 3 | shop_order_list.sku_order_list.auction_info.auction_end_time | AuctionEndTime | - | 99 | 0 | 拍卖结束时间 | - | - |
| 2 | shop_order_list.sku_order_list.blind_box_info | BlindBoxInfo | - | 5 | - | 盲盒信息 | - | R1 |
| 3 | shop_order_list.sku_order_list.blind_box_info.is_opened | IsOpened | - | 4 | false | 是否已抽盒 | - | - |
| 3 | shop_order_list.sku_order_list.blind_box_info.blind_box_img | BlindBoxImg | - | 2 | "" | 抽盒结果图片url | - | - |
| 3 | shop_order_list.sku_order_list.blind_box_info.blind_box_title | BlindBoxTitle | - | 2 | "" | 抽盒结果主标题 | - | - |
| 3 | shop_order_list.sku_order_list.blind_box_info.blind_box_sub_title | BlindBoxSubTitle | - | 2 | "" | 抽盒结果副标题 | - | - |
| 3 | shop_order_list.sku_order_list.blind_box_info.open_time | OpenTime | - | 99 | 0 | 抽盒时间戳 | - | - |
| 2 | shop_order_list.sku_order_list.sku_info | SkuInfo | - | 5 | - | sku信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_info.commit_code | CommitCode | - | 2 | "12222" | 苹果发品id | 28 | - |
| 2 | shop_order_list.sku_order_list.given_exp_ship_time | GivenExpShipTime | - | 99 | 1750435199 | 赠品后发时间 | 28 | - |
| 2 | shop_order_list.sku_order_list.given_exp_ship_time_desc | GivenExpShipTimeDesc | - | 2 | 主商品发货后，赠品5天内发货 | 赠品后发描述 | 28 | - |
| 2 | shop_order_list.sku_order_list.gov_subsidy_detail | GovSubsidyDetail | - | 5 | - | 政府补贴信息，比如一品多地 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.gov_subsidy_detail.supplier_shop_name | SupplierShopName | - | 2 | abc 公司 | 实际销售公司 | 28 | - |
| 3 | shop_order_list.sku_order_list.gov_subsidy_detail.supplier_shop_id | SupplierShopId | - | 2 | 12345 | 实际销售公司 ID | 28 | - |
| 3 | shop_order_list.sku_order_list.gov_subsidy_detail.product_tag | ProductTag | - | 2 | government_subsidy_multis | government_subsidy_multis:一品多地订单 | 28 | - |
| 2 | shop_order_list.sku_order_list.serial_no_info | SerialNoInfo | - | 5 | - | 政府补贴序列号信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.serial_no_info.serial_no_list | SerialNoList | - | 3 | - | 绑定/发货操作回传/快递回传的序列号信息。 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.serial_no_info.serial_no_list.serial_no_list | SerialNoList | - | 3 | - | 每个阶段关联的SN/69/IMEI码信息。 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.serial_no_info.serial_no_list.serial_no_list.value | Value | - | 3 | [] | SN/69/IMEI码的值。 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.serial_no_info.serial_no_list.serial_no_list.key | Key | - | 2 | SN | SN/69/IMEI码类型。 | 28 | - |
| 4 | shop_order_list.sku_order_list.serial_no_info.serial_no_list.stage | Stage | - | 99 | 2 | 2-绑定操作的序列号；3-发货回传的序列号；4-快递小哥拍照胡穿的物流单号。如果之前在商家后台绑定了SN/69/IMEI码，并且发货的时候重新回传了SN/69/IMEI码，则会覆盖绑定的SN/69/IMEI码，接口返回的绑定阶段的SN/69/IMEI码和发货阶段返回的值一致。 | 28 | - |
| 3 | shop_order_list.sku_order_list.serial_no_info.all_lp_shop_code | AllLpShopCode | - | 8 | ["shunfeng":"1156"] | 物流公司及商家编码，key是物流公司code,value是商家编码; | 28 | R1 |
| 3 | shop_order_list.sku_order_list.serial_no_info.all_lp_task_code | AllLpTaskCode | - | 8 | ["shunfeng":"1222"] | 所有的物流公司及微派code,key是物流公司code,value是微派code; | 28 | R1 |
| 3 | shop_order_list.sku_order_list.serial_no_info.available_lp | AvailableLp | - | 3 | ["shunfeng"] | 可用的物流公司列表，国补订单发货时使用的物流公司code应该在该物流公司列表内。 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.serial_no_info.sku_bind_69_codes | SkuBind69Codes | - | 3 | ["1234"] | 商品发布时绑定在该sku上的69码。 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.serial_no_info.need_photo | NeedPhoto | - | 4 | true | true-需要，false-不需要。 | 28 | - |
| 3 | shop_order_list.sku_order_list.serial_no_info.shipping_need_check_codes | ShippingNeedCheckCodes | - | 3 | ["SN","69","IMEI"] | 发货需要回传的SN/69/IMEI码信息；SN-SN码，IMEI-IMEI码，69 - 69码; | 28 | R1 |
| 2 | shop_order_list.sku_order_list.bmp_seller_type | BmpSellerType | - | 2 | xiaodian | 业务身份-卖家身份 | 28 | - |
| 2 | shop_order_list.sku_order_list.bmp_vertical_market | BmpVerticalMarket | - | 2 | giftcard | 业务身份-垂类 | 28 | - |
| 2 | shop_order_list.sku_order_list.bmp_source | BmpSource | - | 2 | flower | 业务身份-来源 | 28 | - |
| 2 | shop_order_list.sku_order_list.sku_period_purchase_info | SkuPeriodPurchaseInfo | - | 5 | - | 周期购sku单信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_period_purchase_info.deliver_time | DeliverTime | - | 99 | 1730114000 | 预约时间（时间戳，单位 | 28 | - |
| 3 | shop_order_list.sku_order_list.sku_period_purchase_info.deliver_type | DeliverType | - | 99 | 5 | 类型（5预约送达，6预约发货） | 28 | - |
| 3 | shop_order_list.sku_order_list.sku_period_purchase_info.period_num | PeriodNum | - | 99 | 1 | 当前期数 | 28 | - |
| 2 | shop_order_list.sku_order_list.sp_product_id | SpProductId | - | 2 | "32467832" | 服务商品编码，如维修单的服务商品编码 | 28 | - |
| 2 | shop_order_list.sku_order_list.relation_sku_order_ids | RelationSkuOrderIds | - | 3 | ["6374932845093"] | 商品单相关联的商品单号，如维修主商品单关联的维修单商品单号 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.custom_properties | CustomProperties | - | 3 | - | 商品属性，适用于外卖或即时零售场景下商品存在属性的情况 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.custom_properties.name | Name | - | 2 | 正常糖 | 属性的Name | 28 | - |
| 2 | shop_order_list.sku_order_list.sku_cargo_future_stock | SkuCargoFutureStockFlag | - | 5 | - | 库存扣减信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_cargo_future_stock.supply_sku_snapshots | SupplySkuSnapshots | - | 3 | - | 库存扣减信息 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.sku_cargo_future_stock.supply_sku_snapshots.batch_detail | BatchDetail | - | 3 | - | 库存扣减信息列表 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.sku_cargo_future_stock.supply_sku_snapshots.batch_detail.stock_num | StockNum | - | 99 | 1 | 扣减库存数量 | 28 | - |
| 5 | shop_order_list.sku_order_list.sku_cargo_future_stock.supply_sku_snapshots.batch_detail.arrive_time | ArriveTime | - | 99 | 5 | 时效批次: X天后返货，只有库存类型为预售，该字段有意义。 | 28 | - |
| 5 | shop_order_list.sku_order_list.sku_cargo_future_stock.supply_sku_snapshots.batch_detail.arrive_time_type | ArriveTimeType | - | 99 | 1 | 时效类型：0-绝对时效，1-相对时效，只有库存类型为预售该字段有意义，目前只有相对时效 | 28 | - |
| 5 | shop_order_list.sku_order_list.sku_cargo_future_stock.supply_sku_snapshots.batch_detail.inventory_type | InventoryType | - | 99 | 1 | 库存类型：现货/0、预售/1 | 28 | - |
| 5 | shop_order_list.sku_order_list.sku_cargo_future_stock.supply_sku_snapshots.batch_detail.batch_id | BatchId | - | 99 | 146533163111263693 | 库存批次信息 | 28 | - |
| 4 | shop_order_list.sku_order_list.sku_cargo_future_stock.supply_sku_snapshots.inventory_type | InventoryType | - | 99 | 0 | 0-现货库存，1-预售库存 | 28 | - |
| 2 | shop_order_list.sku_order_list.promotion_detail | PromotionDetail | - | 5 | - | 优惠信息，用户下单过程中享受到的优惠 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.promotion_detail.kol_discount_detail | KolDiscountDetail | - | 5 | - | 达人优惠信息 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_detail.kol_discount_detail.redpack_info | RedpackInfo | - | 3 | - | 红包信息 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.promotion_detail.kol_discount_detail.redpack_info.extra_map | ExtraMap | - | 8 | {"aftersaleReturnType":"whole","business_scene_key":"","conditionType":"2","conditionValue":"500","couponType":"0","credit":"400","discountType":"2","discountValue":"400","instant_custom_info":"{\"instant_activity_id\":\"1111684352258\"}","promotion_desc":"满5减4","tool_code":"shop_coupon"} | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_detail.kol_discount_detail.full_discount_info | FullDiscountInfo | - | 3 | - | 优惠活动信息 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.promotion_detail.kol_discount_detail.full_discount_info.extra_map | ExtraMap | - | 8 | {"aftersaleReturnType":"whole","business_scene_key":"","conditionType":"2","conditionValue":"500","couponType":"0","credit":"400","discountType":"2","discountValue":"400","instant_custom_info":"{\"instant_activity_id\":\"1111684352258\"}","promotion_desc":"满5减4","tool_code":"shop_coupon"} | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_detail.kol_discount_detail.coupon_info | CouponInfo | - | 3 | - | 优惠券信息 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.promotion_detail.kol_discount_detail.coupon_info.extra_map | ExtraMap | - | 8 | {"aftersaleReturnType":"whole","business_scene_key":"","conditionType":"2","conditionValue":"500","couponType":"0","credit":"400","discountType":"2","discountValue":"400","instant_custom_info":"{\"instant_activity_id\":\"1111684352258\"}","promotion_desc":"满5减4","tool_code":"shop_coupon"} | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 3 | shop_order_list.sku_order_list.promotion_detail.platform_discount_detail | PlatformDiscountDetail | - | 5 | - | 平台优惠信息 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_detail.platform_discount_detail.redpack_info | RedpackInfo | - | 3 | - | 红包明细 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.promotion_detail.platform_discount_detail.redpack_info.extra_map | ExtraMap | - | 8 | {"aftersaleReturnType":"whole","business_scene_key":"","conditionType":"2","conditionValue":"500","couponType":"0","credit":"400","discountType":"2","discountValue":"400","instant_custom_info":"{\"instant_activity_id\":\"1111684352258\"}","promotion_desc":"满5减4","tool_code":"shop_coupon"} | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_detail.platform_discount_detail.coupon_info | CouponInfo | - | 3 | - | 优惠券信息 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.promotion_detail.platform_discount_detail.coupon_info.extra_map | ExtraMap | - | 8 | {"aftersaleReturnType":"whole","business_scene_key":"","conditionType":"2","conditionValue":"500","couponType":"0","credit":"400","discountType":"2","discountValue":"400","instant_custom_info":"{\"instant_activity_id\":\"1111684352258\"}","promotion_desc":"满5减4","tool_code":"shop_coupon"} | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_detail.platform_discount_detail.full_discount_info | FullDiscountInfo | - | 3 | - | 优惠活动信息 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.promotion_detail.platform_discount_detail.full_discount_info.extra_map | ExtraMap | - | 8 | {"aftersaleReturnType":"whole","business_scene_key":"","conditionType":"2","conditionValue":"500","couponType":"0","credit":"400","discountType":"2","discountValue":"400","instant_custom_info":"{\"instant_activity_id\":\"1111684352258\"}","promotion_desc":"满5减4","tool_code":"shop_coupon"} | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 3 | shop_order_list.sku_order_list.promotion_detail.shop_discount_detail | ShopDiscountDetail | - | 5 | - | 店铺优惠信息 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_detail.shop_discount_detail.full_discount_info | FullDiscountInfo | - | 3 | - | 优惠活动信息 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.promotion_detail.shop_discount_detail.full_discount_info.extra_map | ExtraMap | - | 8 | {"aftersaleReturnType":"whole","business_scene_key":"","conditionType":"2","conditionValue":"500","couponType":"0","credit":"400","discountType":"2","discountValue":"400","instant_custom_info":"{\"instant_activity_id\":\"1111684352258\"}","promotion_desc":"满5减4","tool_code":"shop_coupon"} | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_detail.shop_discount_detail.coupon_info | CouponInfo | - | 3 | - | 优惠券信息 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.promotion_detail.shop_discount_detail.coupon_info.extra_map | ExtraMap | - | 8 | {"aftersaleReturnType":"whole","business_scene_key":"","conditionType":"2","conditionValue":"500","couponType":"0","credit":"400","discountType":"2","discountValue":"400","instant_custom_info":"{\"instant_activity_id\":\"1111684352258\"}","promotion_desc":"满5减4","tool_code":"shop_coupon"} | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_detail.shop_discount_detail.redpack_info | RedpackInfo | - | 3 | - | 红包明细 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.promotion_detail.shop_discount_detail.redpack_info.extra_map | ExtraMap | - | 8 | {"aftersaleReturnType":"whole","business_scene_key":"","conditionType":"2","conditionValue":"500","couponType":"0","credit":"400","discountType":"2","discountValue":"400","instant_custom_info":"{\"instant_activity_id\":\"1111684352258\"}","promotion_desc":"满5减4","tool_code":"shop_coupon"} | 营销优惠扩展字段instant_activity_id是商家营销活动id | 28 | R1 |
| 2 | shop_order_list.sku_order_list.product_channel_info | ProductChannelInfo | - | 5 | - | 渠道商品信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.product_channel_info.product_channel_type | ProductChannelType | - | 99 | 4 | 3--商家自卖<br>4且skuordertagui有kol_exclusive_product<br>标签---专属达人带货<br>4且无标签--达人带货 | 28 | - |
| 3 | shop_order_list.sku_order_list.product_channel_info.product_channel_id | ProductChannelId | - | 2 | 6709347328 | 渠道商品id | 28 | - |
| 2 | shop_order_list.sku_order_list.low_price_info | LowPriceInfo | - | 5 | - | 超值购信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.low_price_info.low_price_product | LowPriceProduct | - | 5 | - | 超值购信息 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.low_price_info.low_price_product.product_id | ProductId | - | 99 | 3435495646 | 聚合商品id | 28 | - |
| 4 | shop_order_list.sku_order_list.low_price_info.low_price_product.product_name | ProductName | - | 2 | 超值购商品 | 聚合商品名称 | 28 | - |
| 4 | shop_order_list.sku_order_list.low_price_info.low_price_product.sku_specs | SkuSpec | - | 3 | - | 聚合商品规格 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.low_price_info.low_price_product.sku_specs.value | Value | - | 2 | 白色 | 规格 | 28 | - |
| 5 | shop_order_list.sku_order_list.low_price_info.low_price_product.sku_specs.name | Name | - | 2 | 颜色分类 | 规格名称 | 28 | - |
| 4 | shop_order_list.sku_order_list.low_price_info.low_price_product.sku_id | SkuId | - | 99 | 37489375 | 聚合商品skuid | 28 | - |
| 4 | shop_order_list.sku_order_list.low_price_info.low_price_product.img | Img | - | 2 | "https://p6-aio.ecombdimg.com/obj/ecom-shop-material/wYxIpQzK_m_5e47ebab4b3ca5681b89114c96a50666_sx_298973_www800-800" | 超值购聚合商品图片（用户下单时看到的图片） | 28 | - |
| 2 | shop_order_list.sku_order_list.packing_charge_amount | PackingChargeAmount | - | 99 | 100 | 打包费，单位：分 | 28 | - |
| 2 | shop_order_list.sku_order_list.extra_info | ExtraInfo | - | 8 | {<br>"barcodes": "[\"6970848860361\"]"<br>} | 商品单额外信息<br>如商品69码：<br>"barcodes": "[\"6970848860361\"]" | 28 | R1 |
| 2 | shop_order_list.sku_order_list.voucher_deduction_amount | VoucherDeductionAmount | - | 99 | 200 | 提货券商品抵扣金额；单位：分 | 28 | - |
| 2 | shop_order_list.sku_order_list.free_interest | FreeInterest | - | 5 | - | 商品单，抖音月付信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.free_interest.trade_amount | TradeAmount | - | 99 | 10000 | 总交易金额 | 28 | - |
| 3 | shop_order_list.sku_order_list.free_interest.total_free_interest_platform_clearing_amount | TotalFreeInterestPlatformClearingAmount | - | 99 | 200 | 商品单，抖音月付，平台承担免息金额，单位: 分; | 28 | - |
| 3 | shop_order_list.sku_order_list.free_interest.total_free_interest_shop_clearing_amount | TotalFreeInterestPartnerClearingAmount | - | 99 | 100 | 商品单，抖音月付，商家承担免息金额，单位: 分; | 28 | - |
| 3 | shop_order_list.sku_order_list.free_interest.period | Period | - | 99 | 12 | 免息期数 | 28 | - |
| 3 | shop_order_list.sku_order_list.free_interest.refund_total_free_interest_platform_clearing_amount | RefundTotalFreeInterestPlatformClearingAmount | - | 99 | 0 | 商品单，抖音月付，退款部分平台承担免息金额，单位: 分; | 28 | - |
| 3 | shop_order_list.sku_order_list.free_interest.refund_total_free_interest_shop_clearing_amount | RefundTotalFreeInterestPartnerClearingAmount | - | 99 | 0 | 商品单，抖音月付，退款部分商家承担免息金额，单位: 分; | 28 | - |
| 3 | shop_order_list.sku_order_list.free_interest.free_interest_detail | FreeInterestDetail | - | 3 | - | 商品单，抖音月付明细信息 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.free_interest.free_interest_detail.platform_clearing_amount | PlatformClearingAmount | - | 99 | 200 | 商品单，抖音月付，平台承担免息金额，单位: 分; | 28 | - |
| 4 | shop_order_list.sku_order_list.free_interest.free_interest_detail.shop_clearing_amount | PartnerClearingAmount | - | 99 | 100 | 商品单，抖音月付，商家承担免息金额，单位: 分; | 28 | - |
| 4 | shop_order_list.sku_order_list.free_interest.free_interest_detail.trade_type | TradeType | - | 99 | 1 | 交易类型，1-支付，2-退款 | 28 | - |
| 2 | shop_order_list.sku_order_list.promotion_pay_amount_details | PromotionPayAmountDetails | - | 3 | - | 支付优惠详情，与promotion_pay_amount对应 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.promotion_pay_amount_details.pay_promotion_type | PayPromotionType | - | 2 | 混合出资-mixed_charge；GovernmentReduce-政府补贴 | 支付优惠类型 | 28 | - |
| 3 | shop_order_list.sku_order_list.promotion_pay_amount_details.share_cost | ShareCost | - | 5 | - | 承担方详情 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.promotion_pay_amount_details.share_cost.extra_map | ExtraMap | - | 8 | {  "fxh_periods":"3,"interest_rate":"0.018"}" | 支持返回部分商家抖音月付分期信息，interest_rate：分期利率<br>fxh_periods：分期期数 | - | R1 |
| 4 | shop_order_list.sku_order_list.promotion_pay_amount_details.share_cost.shop_interest_cost | ShopInterestCost | - | 99 | 100 | 商家贴息金额（d单位：分） | 28 | - |
| 4 | shop_order_list.sku_order_list.promotion_pay_amount_details.share_cost.shop_cost | ShopCost | - | 99 | 300 | 商家承担金额（d单位：分） | 28 | - |
| 4 | shop_order_list.sku_order_list.promotion_pay_amount_details.share_cost.platform_cost | PlatformCost | - | 99 | 300 | 平台承担金额（d单位：分） | 28 | - |
| 2 | shop_order_list.sku_order_list.goods_price | GoodsPrice | - | 99 | 100 | 商品原价 | 28 | - |
| 2 | shop_order_list.sku_order_list.quality_inspection_status | QualityInspectionStatus | - | 99 | 0 | 质检状态；0-无需质检;1-可质检;2-必须质检 | 28 | - |
| 2 | shop_order_list.sku_order_list.order_id | OrderId | - | 2 | 4781320682406083640 | 商品订单号 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.parent_order_id | ParentOrderId | - | 2 | 4781320682406083640 | 父订单号（店铺订单号） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.order_level | OrderLevel | - | 99 | 3 | 订单层级 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.biz | Biz | - | 99 | 1 | 【业务来源】 1、鲁班 2、小店 3、好好学习 4、ev 5、虚拟 6、建站 7、核销 8、玉石 9、ez 10、ep 11、虚拟卡券 12、服务市场 13、EP视频课 14、EP直播课 21、跨境BBC 22、跨境BC 23、跨境CC,UPC 24、手机充值 25、拍卖保证金 26、懂车帝抵扣券 27、懂车帝返现券 28、离岛免税 29、海南会员购 30、抽奖 32、dou+券 76、大闸蟹 99、保险 102、小店海外 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.biz_desc | BizDesc | - | 2 | 鲁班 | 业务来源描述 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.order_type | OrderType | - | 99 | 0 | 【订单类型】 0、普通订单 2、虚拟商品订单 4、电子券（poi核销） 5、三方核销 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.order_type_desc | OrderTypeDesc | - | 2 | 普通订单 | 订单类型描述 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.trade_type | TradeType | - | 99 | 1 | 交易类型；0-普通；1-拼团；2-定金预售；3-订金找货；4-拍卖；5-0元单；6-回收；7-寄卖；10-寄样；11-零元抽奖；12-达人买样；13-普通定制；16-大众竞拍；18-小时达；102-定金预售的赠品单；103-收款；和trade_type_desc成对出现 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.trade_type_desc | TradeTypeDesc | - | 2 | 拼团 | 交易类型描述；和trade_type成对出现 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.order_status | OrderStatus | - | 99 | 3 | 订单状态 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.order_status_desc | OrderStatusDesc | - | 2 | 待支付 | 订单状态描述 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.main_status | MainStatus | - | 99 | 103 | 主流程状态 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.main_status_desc | MainStatusDesc | - | 2 | 部分支付 | 主流程状态描述 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.pay_time | PayTime | - | 99 | 1617355413 | 支付时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.order_expire_time | OrderExpireTime | - | 99 | 1800 | 订单过期时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.finish_time | FinishTime | - | 99 | 1617355413 | 订单完成时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.create_time | CreateTime | - | 99 | 1617355413 | 下单时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.update_time | UpdateTime | - | 99 | 1617355413 | 订单更新时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.cancel_reason | CancelReason | - | 2 | 不想要 | 取消原因 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.b_type | BType | - | 99 | 1 | 【下单端】 0、站外 1、火山 2、抖音 3、头条 4、西瓜 5、微信 6、值点app 7、头条lite 8、懂车帝 9、皮皮虾 11、抖音极速版 12、TikTok 13、musically 14、穿山甲 15、火山极速版 16、服务市场 26、番茄小说 27、UG教育营销电商平台 28、Jumanji 29、电商SDK | 28 | R1 |
| 2 | shop_order_list.sku_order_list.b_type_desc | BTypeDesc | - | 2 | 抖音 | 下单端描述 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.sub_b_type | SubBType | - | 99 | 1 | 【下单场景】 0、未知 1、app内-原生 2、app内-小程序 3、H5 13、电商SDK-头条 35、电商SDK-头条lite | 28 | R1 |
| 2 | shop_order_list.sku_order_list.sub_b_type_desc | SubBTypeDesc | - | 2 | 小程序 | 下单场景描述 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.send_pay | SendPay | - | 99 | 1 | 已废弃，不推荐使用。流量来源：1-鲁班广告 2-联盟 3-商城 4-自主经营 5-线索通支付表单 6-抖音门店 7-抖+ 8-穿山甲 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.send_pay_desc | SendPayDesc | - | 2 | 鲁班广告 | 已废弃，不推荐使用。流量来源描述 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.author_id | AuthorId | - | 99 | 324234453 | 直播主播id（达人） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.author_name | AuthorName | - | 2 | XXXX | 直播主播名称 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.theme_type | ThemeType | - | 2 | 1 | 【下单来源】 0、其他 1、直播间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.theme_type_desc | ThemeTypeDesc | - | 2 | 直播间 | 下单来源描述 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.app_id | AppId | - | 99 | 43545454556 | 小程序id | 28 | R1 |
| 2 | shop_order_list.sku_order_list.room_id | RoomId | - | 99 | 147319604997432615 | 直播房间ID，字符串类型 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.content_id | ContentId | - | 2 | 43545454556 | 内容id | 28 | R1 |
| 2 | shop_order_list.sku_order_list.video_id | VideoId | - | 2 | 43545454556 | 视频id | 28 | R1 |
| 2 | shop_order_list.sku_order_list.origin_id | OriginId | - | 2 | 43545454556 | 流量来源id | 28 | R1 |
| 2 | shop_order_list.sku_order_list.cid | Cid | - | 99 | 43545454556 | 创意id（creative_id） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.c_biz | CBiz | - | 99 | 1 | 【C端流量来源】 0-unknown 2-精选联盟 8-小店自卖 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.c_biz_desc | CBizDesc | - | 2 | 精选联盟 | C端流量来源业务类型描述 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.page_id | PageId | - | 99 | 43545454556 | 鲁班广告落地页ID | 28 | R1 |
| 2 | shop_order_list.sku_order_list.pay_type | PayType | - | 99 | 1 | 【支付类型】 0、货到付款 1 、微信 2、支付宝 3、小程序 4、银行卡 5、余额 7、无需支付（0元单） 8、DOU分期（信用支付） 9、新卡支付 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.channel_payment_no | ChannelPaymentNo | - | 2 | PAY234532534534 | 支付渠道的流水号 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.order_amount | OrderAmount | - | 99 | 600 | 订单金额（单位：分） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.pay_amount | PayAmount | - | 99 | 500 | 支付金额（单位：分） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.post_insurance_amount | PostInsuranceAmount | - | 99 | 10 | 运费险金额（单位：分） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.modify_amount | ModifyAmount | - | 99 | -10 | 改价金额变化量（单位：分） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.modify_post_amount | ModifyPostAmount | - | 99 | -1 | 改价运费金额变化量（单位：分） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.promotion_amount | PromotionAmount | - | 99 | 1000 | 订单优惠总金额（单位：分）= 店铺优惠金额+ 平台优惠金额+ 达人优惠金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.promotion_shop_amount | PromotionShopAmount | - | 99 | 100 | 店铺优惠金额（单位：分），属于店铺的优惠活动、优惠券、红包的总优惠金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.promotion_platform_amount | PromotionPlatformAmount | - | 99 | 100 | 平台优惠金额（单位：分），属于平台的优惠活动、优惠券、红包的总优惠金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.shop_cost_amount | ShopCostAmount | - | 99 | 100 | 商家承担金额（单位：分），订单参与活动和优惠中商家承担部分的总金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.platform_cost_amount | PlatformCostAmount | - | 99 | 100 | 平台承担金额（单位：分），订单参与活动和优惠中平台+作者（达人）承担部分的总金额,包含作者（达人）承担金额：platform_cost_amount = only_platform_cost_amount + author_cost_amount | 28 | R1 |
| 2 | shop_order_list.sku_order_list.promotion_talent_amount | PromotionTalentAmount | - | 99 | 100 | 达人优惠金额（单位：分），属于达人的优惠活动、优惠券、红包的总优惠金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.promotion_pay_amount | PromotionPayAmount | - | 99 | 10 | 支付优惠金额（单位：分），支付渠道上的优惠金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.code | Code | - | 2 | djfafj | 商家后台商品编码 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.encrypt_post_tel | PostTel | - | 2 | 12345678911 | 收件人电话 | 28 | R2 |
| 2 | shop_order_list.sku_order_list.encrypt_post_receiver | PostReceiver | - | 2 | 张三 | 收件人姓名 | 28 | R2 |
| 2 | shop_order_list.sku_order_list.post_addr | PostAddr | - | 5 | - | 收件人地址 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.post_addr.province | province | - | 5 | - | 省/直辖市 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.post_addr.province.name | name | - | 2 | 北京市 | 名称 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.post_addr.province.id | id | - | 2 | 110000 | 地区ID | 28 | R1 |
| 3 | shop_order_list.sku_order_list.post_addr.city | city | - | 5 | - | 市 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.post_addr.city.name | name | - | 2 | 市辖区 | 名称 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.post_addr.city.id | id | - | 2 | 110000 | 地区ID | 28 | R1 |
| 3 | shop_order_list.sku_order_list.post_addr.town | town | - | 5 | - | 区县 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.post_addr.town.name | name | - | 2 | 海淀区 | 名称 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.post_addr.town.id | id | - | 2 | 110000 | 地区ID | 28 | R1 |
| 3 | shop_order_list.sku_order_list.post_addr.street | street | - | 5 | - | 街道 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.post_addr.street.name | name | - | 2 | 中关村街道 | 名称 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.post_addr.street.id | id | - | 2 | 110000 | 地区ID | 28 | R1 |
| 3 | shop_order_list.sku_order_list.post_addr.encrypt_detail | detail | - | 2 | 丹棱街1号 | 详细地址 | 28 | R2 |
| 2 | shop_order_list.sku_order_list.exp_ship_time | ExpShipTime | - | 99 | 1617355413 | 预计发货时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.ship_time | ShipTime | - | 99 | 1617355413 | 发货时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.logistics_receipt_time | LogisticsReceiptTime | - | 99 | 1617355413 | 物流收货时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.confirm_receipt_time | ConfirmReceiptTime | - | 99 | 1617355413 | 用户确认收货时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.goods_type | GoodsType | - | 99 | 1 | 【商品类型】 0、实体 1、虚拟 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.product_id | ProductId | - | 99 | 3473196049974326153 | 商品ID，字符串型 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.sku_id | SkuId | - | 99 | 3254535 | 商品skuId | 28 | R1 |
| 2 | shop_order_list.sku_order_list.spec | Spec | - | 3 | - | 规格信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.spec.name | Name | - | 2 | 颜色 | 规格名称 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.spec.value | Value | - | 2 | 蓝 | 规格值 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.first_cid | FirstCid | - | 99 | 20005 | 一级类目 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.second_cid | SecondCid | - | 99 | 20174 | 二级类目 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.third_cid | ThirdCid | - | 99 | 20174 | 三级类目 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.fourth_cid | FourthCid | - | 99 | 20174 | 四级类目 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.out_sku_id | OutSkuId | - | 2 | 43564553 | 外部Skuid | 28 | R1 |
| 2 | shop_order_list.sku_order_list.supplier_id | SupplierId | - | 2 | fsgfgsdg | sku外部供应商编码 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.out_product_id | OutProductId | - | 2 | 432655662343 | 商品外部编码 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.warehouse_ids | WarehouseIds | - | 3 | [\"49574835439\",\"954764056\"] | 仓id，废弃，使用inventory_list | 28 | R1 |
| 2 | shop_order_list.sku_order_list.out_warehouse_ids | OutWarehouseIds | - | 3 | [\"49574835439\",\"954764056\"] | 外部仓id，废弃，使用inventory_list | 28 | R1 |
| 2 | shop_order_list.sku_order_list.inventory_type | InventoryType | - | 2 | 2 | 库存类型，普通库存/区域库存，废弃，使用inventory_list | 28 | R1 |
| 2 | shop_order_list.sku_order_list.inventory_type_desc | InventoryTypeDesc | - | 2 | 普通库存 | 库存类型描述，废弃，使用inventory_list | 28 | R1 |
| 2 | shop_order_list.sku_order_list.reduce_stock_type | ReduceStockType | - | 99 | 1 | 【库存扣减方式】 1、下单减库存 2、支付减库存 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.reduce_stock_type_desc | ReduceStockTypeDesc | - | 2 | 下单减库存 | 库存扣减方式名称 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.origin_amount | OriginAmount | - | 99 | 100 | 商品现价（单位：分） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.has_tax | HasTax | - | 4 | true | 是否包税 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.item_num | ItemNum | - | 99 | 2 | 订单商品数量 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.sum_amount | SumAmount | - | 99 | 200 | 商品现价*件数 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.source_platform | SourcePlatform | - | 2 | XXX | 商品来源平台 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.product_pic | ProductPic | - | 2 | https:xxxxx | 商品图片 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.is_comment | IsComment | - | 99 | 1 | 是否评价 :1已评价，0未评价，2表示追评 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.product_name | ProductName | - | 2 | 衣服 | 商品名称 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.inventory_list | InventoryList | - | 3 | - | 仓库信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.inventory_list.warehouse_id | WarehouseId | - | 2 | 3141234234324 | 仓id | 28 | R1 |
| 3 | shop_order_list.sku_order_list.inventory_list.out_warehouse_id | OutWarehouseId | - | 2 | 3254234234234 | 外部仓id | 28 | R1 |
| 3 | shop_order_list.sku_order_list.inventory_list.inventory_type | InventoryType | - | 99 | 1 | 库存类型，普通库存/区域库存 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.inventory_list.inventory_type_desc | InventoryTypeDesc | - | 2 | 普通库存 | 库存类型描述 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.inventory_list.count | Count | - | 99 | 2 | 库存变更数量 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.inventory_list.warehouse_type | WarehouseType | - | 99 | 0 | 仓类型：0-商家仓，1-跨境仓，2-云仓 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.post_amount | PostAmount | - | 99 | 1 | 运费（单位：分） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.pre_sale_type | PreSaleType | - | 99 | 1 | 预售类型 ，0 现货类型，1 全款预售 2 阶梯发货 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.after_sale_info | AfterSaleInfo | - | 5 | - | 售后信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.after_sale_info.after_sale_status | AfterSaleStatus | - | 99 | 6 | 售后状态，0-售后初始化， 6-售后申请， 7-售后退货中， 27-拒绝售后申请， 12-售后成功， 28-售后失败， 11-售后已发货， 29-退货后拒绝退款， 13-售后换货商家发货， 14-售后换货用户收货， 51-取消成功， 53-逆向交易完成 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.after_sale_info.after_sale_type | AfterSaleType | - | 99 | 1 | 售后类型:0 售后退货退款:1-售后退款 2-售前退款 3-换货 4-系统取消 5-用户取消 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.after_sale_info.refund_status | RefundStatus | - | 99 | 1 | 退款状态:1-待退款；3-退款成功； 4-退款失败；当买家发起售后后又主动取消售后，此时after_sale_status=28并且refund_status=1的状态不变，不会流转至4状态； | 28 | R1 |
| 2 | shop_order_list.sku_order_list.promotion_redpack_amount | PromotionRedpackAmount | - | 99 | 100 | 红包优惠金额（单位：分） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.promotion_redpack_platform_amount | PromotionRedpackPlatformAmount | - | 99 | 100 | 平台红包优惠金额（单位：分），属于平台的红包的优惠金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.promotion_redpack_talent_amount | PromotionRedpackTalentAmount | - | 99 | 100 | 达人红包优惠金额（单位：分），属于达人的红包的优惠金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.receive_type | ReceiveType | - | 99 | 1 | 1:邮寄，2:自提 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.need_serial_number | NeedSerialNumber | - | 4 | false | 是否需要上传序列号，用于判断发货时是否需要上传商品序列号（IMEI码或SN码），true 表示是3C数码商品，需要上传序列号 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.ad_env_type | AdEnvType | - | 2 | live | 广告来源，video：短视频 live：直播 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.sku_order_tag_ui | SkuOrderTagUi | - | 3 | - | 商品单标签 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_order_tag_ui.key | Key | - | 2 | pre_sale_label | 标签key | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_order_tag_ui.text | Text | - | 2 | 全款预售 | 标签文案 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_order_tag_ui.hover_text | HoverText | - | 2 | 该商品需要送到质检中心，质检完成后发给用户该商品需要送到质检中心，质检完成后发给用户 | 标签备注文案 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_order_tag_ui.tag_type | TagType | - | 2 | orange | 标签类型，如颜色 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_order_tag_ui.help_doc | HelpDoc | - | 2 | https://school.jinritemai.com/doudian/web/article/101835?from=shop_article | 帮助文档 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_order_tag_ui.sort | Sort | - | 99 | 1 | 排序 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_order_tag_ui.extra | extra | - | 2 | {\"key\":\"value\"} | 标签其他信息 | 131 | R1 |
| 2 | shop_order_list.sku_order_list.product_id_str | ProductId | - | 2 | 3473196049974326153 | 商品ID，字符串型 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.appointment_ship_time | AppointmentShipTime | - | 99 | 1617355413 | 预约发货时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.room_id_str | RoomId | - | 2 | 147319604997432615 | 直播房间ID，字符串类型 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.given_product_type | GivenProductType | - | 2 | FREE | 绑定类型 MASTER-主品单 FREE-免费赠品 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.master_sku_order_id | MasterSkuOrderId | - | 2 | 4781320682406083640 | 废弃，使用master_sku_order_id_list；绑定的主品sku单单号 如果given_product_type=FREE 则master_sku_order_id_list为主品sku单单号 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.card_voucher | CardVoucher | - | 5 | - | 商品卡券基本信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.card_voucher.valid_days | ValidDays | - | 99 | 15 | 自领取之日起有效天数(如果有值优先使用该字段) | 28 | R1 |
| 3 | shop_order_list.sku_order_list.card_voucher.valid_start | ValidStart | - | 99 | 1646063000 | 卡券开始时间 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.card_voucher.valid_end | ValidEnd | - | 99 | 1646063999 | 卡券截止日期 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.bundle_sku_info | BundleProductList | - | 3 | - | 组套商品子商品列表 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.bundle_sku_info.product_id | ProductId | - | 2 | 3520562294461467753 | 组套商品子商品ID | 28 | R1 |
| 3 | shop_order_list.sku_order_list.bundle_sku_info.sku_id | SkuId | - | 2 | 1719024557525047 | 组套商品子商品SKU_ID | 28 | R1 |
| 3 | shop_order_list.sku_order_list.bundle_sku_info.product_name | ProductName | - | 2 | 测试非卖品创建商品 | 组套商品子商品名称 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.bundle_sku_info.item_num | SkuNum | - | 99 | 1 | 组套商品子商品数量 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.bundle_sku_info.picture_url | PictureUrl | - | 2 | https://lf3-cm.ecombdstatic.com/obj/temai/df9426c9e41521588fe0ffbf424b6b72c559ad47www800-800 | 组商品子商品图片 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.bundle_sku_info.code | OutSubProductSkuCode | - | 2 | M8-1234-101 | 组套子商品外部编码 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.account_list | UserAccountInfo | - | 5 | - | 账号信息list | 28 | R1 |
| 3 | shop_order_list.sku_order_list.account_list.account_info | AccountInfo | - | 3 | - | 账号信息 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.account_list.account_info.account_name | AccountInfoName | - | 2 | 测试 | 账号名称 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.account_list.account_info.account_type | AccountInfoType | - | 2 | 1 | 账号类型；枚举值：Mobile ：手机号;Email ：邮箱 ; IdCard ：身份证; Passport ：护照; BankCard ：银行卡; Number ：纯数学; NumberLetter ：数字字母混合; | 28 | R1 |
| 4 | shop_order_list.sku_order_list.account_list.account_info.encrypt_account_id | AccountInfoValue | - | 2 | 15678909876 | 账号值 | 28 | R2 |
| 2 | shop_order_list.sku_order_list.sku_customization_info | SkuCustomizationInfo | - | 3 | - | 定制商品信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_customization_info.detail | detail | - | 5 | - | 定制详情 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.sku_customization_info.detail.pic | pic | - | 3 | - | 定制图片信息 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.sku_customization_info.detail.pic.id | id | - | 99 | 1 | id | 28 | R1 |
| 5 | shop_order_list.sku_order_list.sku_customization_info.detail.pic.url | url | - | 2 | https://www.xxx.xxx | url | 28 | R1 |
| 4 | shop_order_list.sku_order_list.sku_customization_info.detail.text | text | - | 3 | - | 定制文案信息 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.sku_customization_info.detail.text.id | id | - | 99 | 1 | id | 28 | R1 |
| 5 | shop_order_list.sku_order_list.sku_customization_info.detail.text.key | key | - | 2 | order_id | key | 28 | R1 |
| 5 | shop_order_list.sku_order_list.sku_customization_info.detail.text.content | content | - | 2 | 1234567 | content | 28 | R1 |
| 4 | shop_order_list.sku_order_list.sku_customization_info.detail.extra | extra | - | 2 | {\"key\":\"value\"} | 额外信息 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.author_cost_amount | AuthorCostAmount | - | 99 | 100 | 作者（达人）承担金额（单位：分），订单参与活动和优惠中作者（达人）承担部分的总金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.only_platform_cost_amount | OnlyPlatformCostAmount | - | 99 | 100 | 仅平台承担金额（单位：分），订单参与活动和优惠中平台承担部分的总金额 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.promise_info | PromiseInfo | - | 2 | {\\\"identifier\\\":\\\"R#2022-07-13\\\",\\\"receipt\\\":\\\"{\\\\\\\"FulfillDecisionId\\\\\\\":\\\\\\\"7117833576879604004\\\\\\\",\\\\\\\"LatestPushTime\\\\\\\":1657533600,\\\\\\\"PromiseTag\\\\\\\":\\\\\\\"ENUM:NEXT2_DAY\\\\\\\",\\\\\\\"ExpReceiptTime\\\\\\\":1657727999,\\\\\\\"RealWarehouseCode\\\\\\\":\\\\\\\"101\\\\\\\"}\\\"} | 履约时效信息(json串) | 28 | R1 |
| 2 | shop_order_list.sku_order_list.store_info | StoreInfo | - | 5 | - | 门店信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.store_info.store_tag_map | StoreTagMap | - | 8 | {"delivery_service_pkg": "1"} | 门店标签;delivery_service_pkg枚举值1=平配服务包 2=自配服务包 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.store_info.store_id | StoreId | - | 2 | 1 | 门店id | 28 | R1 |
| 3 | shop_order_list.sku_order_list.store_info.store_name | StoreName | - | 2 | 门店名称 | 门店名称 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.store_info.store_tel | StoreTel | - | 2 | 13888888888 | 门店电话 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.store_info.store_address | StoreAddress | - | 5 | - | 门店地址 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.store_info.store_address.province | province | - | 5 | - | 省 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.store_info.store_address.province.name | name | - | 2 | 北京市 | 名称 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.store_info.store_address.province.id | id | - | 2 | 11 | id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.store_info.store_address.city | city | - | 5 | - | 市 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.store_info.store_address.city.name | name | - | 2 | 北京市 | 名称 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.store_info.store_address.city.id | id | - | 2 | 110000 | id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.store_info.store_address.town | town | - | 5 | - | 县/区 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.store_info.store_address.town.name | name | - | 2 | 海淀 | 名称 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.store_info.store_address.town.id | id | - | 2 | 110108 | id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.store_info.store_address.street | street | - | 5 | - | 街道 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.store_info.store_address.street.name | name | - | 2 | 海淀街道 | 名称 | 28 | R1 |
| 5 | shop_order_list.sku_order_list.store_info.store_address.street.id | id | - | 2 | 110108012 | id | 28 | R1 |
| 4 | shop_order_list.sku_order_list.store_info.store_address.detail | detail | - | 2 | 互联网金融中心 | 详细信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.store_info.extra | extra | - | 2 | 扩展字段 | 扩展字段 | 131 | R1 |
| 2 | shop_order_list.sku_order_list.mask_post_receiver | MaskPostReceiver | - | 2 | 王** | 收件人姓名（脱敏后） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.mask_post_tel | MaskPostTel | - | 2 | 1********35 | 收件人电话（脱敏后） | 28 | R1 |
| 2 | shop_order_list.sku_order_list.mask_post_addr | MaskPostAddr | - | 5 | - | 收件人地址（脱敏后） | 28 | R1 |
| 3 | shop_order_list.sku_order_list.mask_post_addr.province | province | - | 5 | - | 省 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.mask_post_addr.province.name | name | - | 2 | 北京市 | 名称 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.mask_post_addr.province.id | id | - | 2 | 11 | id | 28 | R1 |
| 3 | shop_order_list.sku_order_list.mask_post_addr.city | city | - | 5 | - | 市 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.mask_post_addr.city.name | name | - | 2 | 北京市 | 名称 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.mask_post_addr.city.id | id | - | 2 | 110000 | id | 28 | R1 |
| 3 | shop_order_list.sku_order_list.mask_post_addr.town | town | - | 5 | - | 县/区 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.mask_post_addr.town.name | name | - | 2 | 海淀 | 名称 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.mask_post_addr.town.id | id | - | 2 | 110108 | id | 28 | R1 |
| 3 | shop_order_list.sku_order_list.mask_post_addr.street | street | - | 5 | - | 街道 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.mask_post_addr.street.name | name | - | 2 | 海淀街道 | 名称 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.mask_post_addr.street.id | id | - | 2 | 110108012 | id | 28 | R1 |
| 3 | shop_order_list.sku_order_list.mask_post_addr.detail | detail | - | 2 | *** | 详细地址 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.contract_info | ContractInfo | - | 5 | - | 合约信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.contract_info.contract_id | ContractId | - | 2 | 62e7af251e41002c | 签约ID | 28 | - |
| 3 | shop_order_list.sku_order_list.contract_info.encrypt_mobile_no | MobileNo | - | 2 | 13888888888 | 办理合约的手机号 | 28 | R2 |
| 2 | shop_order_list.sku_order_list.master_sku_order_id_list | MasterSkuOrderIdList | - | 3 | ["4781320682406083640"] | 绑定的主品sku单单号 如果given_product_type=FREE 则master_sku_order_id为主品sku单单号 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.given_product_activity_info | GivenProductActivityInfo | - | 5 | - | 赠品活动信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.given_product_activity_info.given_product_activity_type | GivenProductActivityType | - | 2 | NORMAL | NORMAL-普通的买赠，AMOUNT-满件赠，PRICE-满元赠 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.given_product_activity_info.given_product_activity_value | GivenProductActivityValue | - | 2 | 2 | 满几件赠或满几元赠，满几元赠场景单位是分 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.quality_check_info | QualityCheckInfo | - | 5 | - | 质检信息 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.quality_check_info.check_result_code | CheckResultCode | - | 2 | CHECK_FAIL | 质检结果 WATI_CHECT:待质检, CHECK_PASS:质检通过, CHECK_FAIL:质检不通过 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.quality_check_info.check_fail_msg | CheckFailMsg | - | 2 | 贵金属不符 | 质检异常信息描述文案 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.quality_check_info.resend_check_time | ResendCheckTime | - | 99 | 1664350911 | 重新送检截止时间 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.sku_yun_warehouse_info | SkuWarehouseInfo | - | 3 | - | sku云仓择仓信息（云仓业务使用，非商品区域仓功能使用） | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_yun_warehouse_info.pre_allocated_yun_warehouse_info | PreAllocatedWarehouseInfo | - | 5 | - | 预分配云仓信息 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.sku_yun_warehouse_info.pre_allocated_yun_warehouse_info.yun_warehouse_code | WarehouseCode | - | 2 | 001 | 云仓code | 28 | R1 |
| 4 | shop_order_list.sku_order_list.sku_yun_warehouse_info.pre_allocated_yun_warehouse_info.yun_warehouse_name | WarehouseName | - | 2 | 仓名称 | 云仓名称 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_yun_warehouse_info.real_yun_warehouse_info | RealWarehouseInfo | - | 5 | - | 云仓实仓信息 | 28 | R1 |
| 4 | shop_order_list.sku_order_list.sku_yun_warehouse_info.real_yun_warehouse_info.yun_warehouse_code | WarehouseCode | - | 2 | 001 | 云仓code | 28 | R1 |
| 4 | shop_order_list.sku_order_list.sku_yun_warehouse_info.real_yun_warehouse_info.yun_warehouse_name | WarehouseName | - | 2 | 仓名称 | 云仓名称 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_yun_warehouse_info.current_business_stage | CurrentBusinessStage | - | 99 | 2 | 当前业务阶段 1-未分配 2-已分配未发货 2-已发货 | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_yun_warehouse_info.sku_id | SkuId | - | 2 | 123 | 该仓对应的skuId | 28 | R1 |
| 3 | shop_order_list.sku_order_list.sku_yun_warehouse_info.sku_count | SkuCount | - | 99 | 1 | sku数量 | 28 | R1 |
| 2 | shop_order_list.sku_order_list.tax_amount | TaxAmount | - | 99 | 8 | 税费 | 28 | R1 |
| 1 | shop_order_list.seller_remark_stars | SellerRemarkStars | - | 99 | 1 | 卖家订单标记 小旗子star取值0～5，分别表示 灰紫青绿橙红 | 48 | R1 |
| 1 | shop_order_list.order_phase_list | OrderPhaseList | - | 3 | - | 定金预售阶段单 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_order_id | PhaseOrderId | - | 2 | 4781320682406083640 | 阶段单id | 61 | R1 |
| 2 | shop_order_list.order_phase_list.total_phase | TotalPhase | - | 99 | 2 | 总共有几阶段 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.current_phase | CurrentPhase | - | 99 | 1 | 第几阶段 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.pay_success | PaySuccess | - | 4 | true | 是否支付成功 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.sku_order_id | SkuOrderId | - | 2 | 4781320682406083640 | 商品单ID | 61 | R1 |
| 2 | shop_order_list.order_phase_list.campaign_id | CampaignId | - | 99 | 3214324342342 | 活动id | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_payable_price | PhasePayablePrice | - | 99 | 100 | 阶段价格：定金单价、尾款单价，单位：分 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_pay_type | PhasePayType | - | 99 | 1 | 支付类型:0-货到付款, 1-微信, 2-支付宝, 3-小程序, 4-银行卡, 5-余额, 7-无需支付, 8-放心花(信用支付), 9-新卡支付 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_open_time | PhaseOpenTime | - | 99 | 1617355413 | 阶段单开始开启支付时间，时间戳 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_pay_time | PhasePayTime | - | 99 | 1617355413 | 阶段单支付成功时间，时间戳 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_close_time | PhaseCloseTime | - | 99 | 1617355413 | 阶段单关闭时间，时间戳 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.channel_payment_no | ChannelPaymentNo | - | 2 | PAY34243247134325 | 渠道支付订单号 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_order_amount | PhaseOrderAmount | - | 99 | 100 | 阶段单总金额，单位分，为订单金额phase_sum_amount+运费phase_post_amount,为支付金额phase_pay_amount+优惠金额phase_promotion_amount | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_sum_amount | PhaseSumAmount | - | 99 | 100 | 阶段单订单金额，单位分 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_post_amount | PhasePostAmount | - | 99 | 100 | 阶段单运费金额，单位分 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_pay_amount | PhasePayAmount | - | 99 | 100 | 阶段单用户实际支付金额，单位分 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.phase_promotion_amount | PhasePromotionAmount | - | 99 | 100 | 阶段单总优惠金额，单位分 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.current_phase_status_desc | CurrentPhaseStatusDesc | - | 2 | 已开始但未支付 | 阶段状态描述 | 61 | R1 |
| 2 | shop_order_list.order_phase_list.sku_price | SkuPrice | - | 99 | 100 | sku单价，单位：分 | 61 | R1 |
| 1 | shop_order_list.doudian_open_id | UserId | - | 2 | #zuLyd4U4J3p+czzXkwg+ZQ673h7KTcrKOddb5iPGAAE0K3MYJmgXEXof9LDtoScAfMKvdVRqpAL4CEI3SrLwYATIzTF9Qw== | 用户唯一id，规则详见：https://op.jinritemai.com/docs/guide-docs/1368/4416 | 67 | R1 |
| 1 | shop_order_list.serial_number_list | SerialNumberList | - | 3 | [\"546443524543534\",\"646443524543534\"] | 商品序列号（IMEI码或SN码） | 28 | R1 |
| 1 | shop_order_list.promotion_redpack_amount | PromotionRedpackAmount | - | 99 | 100 | 红包优惠金额（单位：分） | 51 | R1 |
| 1 | shop_order_list.promotion_redpack_platform_amount | PromotionRedpackPlatformAmount | - | 99 | 100 | 平台红包优惠金额（单位：分），属于平台的红包的优惠金额 | 51 | R1 |
| 1 | shop_order_list.promotion_redpack_talent_amount | PromotionRedpackTalentAmount | - | 99 | 100 | 达人红包优惠金额（单位：分），属于达人的红包的优惠金额 | 51 | R1 |
| 1 | shop_order_list.user_id_info | UserIDInfo | - | 5 | - | 用户证件信息 | 65 | R1 |
| 2 | shop_order_list.user_id_info.encrypt_id_card_no | IdCardNo | - | 2 | #zuLyd4U4J3p+czzXkwg+ZQ673h7KTcrKOddb5iPGAAE0K3MYJmgXEXof9LDtoScAfMKvdVRqpAL4CEI3SrLwYATIzTF9Qw== | 证件号 | 65 | R2 |
| 2 | shop_order_list.user_id_info.encrypt_id_card_name | Name | - | 2 | #zuLyd4U4J3p+czzXkwg+ZQ673h7KTcrKOddb5iPGAAE0K3MYJmgXEXof9LDtoScAfMKvdVRqpAL4CEI3SrLwYATIzTF9Qw== | 证件姓名 | 65 | R2 |
| 1 | shop_order_list.appointment_ship_time | AppointmentShipTime | - | 99 | 1617355413 | 预约发货时间 | 31 | R1 |
| 1 | shop_order_list.d_car_shop_biz_data | DCarShopBizData | - | 5 | - | 懂车帝购车信息 | 62 | R1 |
| 2 | shop_order_list.d_car_shop_biz_data.poi_id | POIId | - | 2 | 22535659043973690 | 选择的门店ID | 62 | R1 |
| 2 | shop_order_list.d_car_shop_biz_data.poi_name | POIName | - | 2 | XXXX门店 | 选择的门店名称 | 62 | R1 |
| 2 | shop_order_list.d_car_shop_biz_data.poi_addr | POIAddr | - | 2 | 中关村XXX | 选择的门店地址 | 62 | R1 |
| 2 | shop_order_list.d_car_shop_biz_data.poi_tel | POITel | - | 2 | 12345678901 | 选择的门店电话 | 62 | R1 |
| 2 | shop_order_list.d_car_shop_biz_data.coupon_right | CouponRight | - | 3 | - | 权益信息 | 62 | R1 |
| 3 | shop_order_list.d_car_shop_biz_data.coupon_right.right_type | RightType | - | 99 | 1 | 权益类型 | 62 | R1 |
| 3 | shop_order_list.d_car_shop_biz_data.coupon_right.right_name | RightName | - | 2 | 现金抵扣 | 权益名称 | 62 | R1 |
| 3 | shop_order_list.d_car_shop_biz_data.coupon_right.quota | Quota | - | 99 | 1 | 权益面值 | 62 | R1 |
| 2 | shop_order_list.d_car_shop_biz_data.poi_pname | POIPName | - | 2 | 广西壮族自治区 | 选择的门店所在省 | 62 | R1 |
| 2 | shop_order_list.d_car_shop_biz_data.poi_city_name | POICityName | - | 2 | 河池市 | 选择的门店所在市 | 62 | R1 |
| 2 | shop_order_list.d_car_shop_biz_data.poi_adname | POIAdName | - | 2 | 金城江区 | 选择的门店所在区县 | 62 | R1 |
| 1 | shop_order_list.shop_order_tag_ui | ShopOrderTagUi | - | 3 | - | 店铺单标签 | 28 | R1 |
| 2 | shop_order_list.shop_order_tag_ui.extra | Extra | - | 2 | 标签额外信息 | 标签额外信息 | 131 | - |
| 2 | shop_order_list.shop_order_tag_ui.key | Key | - | 2 | sug_home_deliver | 标签Key | 28 | R1 |
| 2 | shop_order_list.shop_order_tag_ui.text | Text | - | 2 | 建议音尊达 | 标签说明 | 28 | R1 |
| 2 | shop_order_list.shop_order_tag_ui.help_doc | HelpDoc | - | 2 | http:// | 帮助文档地址 | 28 | R1 |
| 1 | shop_order_list.total_promotion_amount | TotalPromotionAmount | - | 99 | 100 | 总优惠金额（单位：分），total_promotion_amount = promotion_amount + post_promotion_amount | 49 | R1 |
| 1 | shop_order_list.post_origin_amount | PostOriginAmount | - | 99 | 100 | 运费原价（单位：分），post_origin_amount = post_amount + post_promotion_amount | 49 | R1 |
| 1 | shop_order_list.post_promotion_amount | PostPromotionAmount | - | 99 | 100 | 运费优惠金额（单位：分） | 49 | R1 |
| 1 | shop_order_list.user_tag_ui | UserProfileTagUI | - | 3 | - | 用户特征标签 | 63 | R1 |
| 2 | shop_order_list.user_tag_ui.key | Key | - | 2 | user_profile_buy_frequency | 标签key | 63 | R1 |
| 2 | shop_order_list.user_tag_ui.text | Text | - | 2 | 服务优先 | 标签名称 | 63 | R1 |
| 1 | shop_order_list.author_cost_amount | AuthorCostAmount | - | 99 | 100 | 作者（达人）承担金额（单位：分），订单参与活动和优惠中作者（达人）承担部分的总金额 | 28 | R1 |
| 1 | shop_order_list.only_platform_cost_amount | OnlyPlatformCostAmount | - | 99 | 100 | 仅平台承担金额（单位：分），订单参与活动和优惠中平台承担部分的总金额 | 28 | R1 |
| 1 | shop_order_list.promise_info | PromiseInfo | - | 2 | {\\\"receipt\\\":\\\"{\\\\\\\"FulfillDecisionId\\\\\\\":\\\\\\\"7117833576879604004\\\\\\\",\\\\\\\"LatestPushTime\\\\\\\":1657533600,\\\\\\\"PromiseTag\\\\\\\":\\\\\\\"ENUM:NEXT2_DAY\\\\\\\",\\\\\\\"ExpReceiptTime\\\\\\\":1657727999,\\\\\\\"RealWarehouseCode\\\\\\\":\\\\\\\"101\\\\\\\"}\\\"} | 履约时效信息(json串) | 28 | R1 |
| 1 | shop_order_list.mask_post_receiver | MaskPostReceiver | - | 2 | 王** | 收件人姓名（脱敏后） | 28 | R1 |
| 1 | shop_order_list.mask_post_tel | MaskPostTel | - | 2 | 1********35 | 收件人电话（脱敏后） | 28 | R1 |
| 1 | shop_order_list.mask_post_addr | MaskPostAddr | - | 5 | - | 收件人地址（脱敏后） | - | R1 |
| 2 | shop_order_list.mask_post_addr.province | province | - | 5 | - | 省 | 28 | R1 |
| 3 | shop_order_list.mask_post_addr.province.name | name | - | 2 | 北京市 | 名称 | 28 | R1 |
| 3 | shop_order_list.mask_post_addr.province.id | id | - | 2 | 11 | id | 28 | R1 |
| 2 | shop_order_list.mask_post_addr.city | city | - | 5 | - | 市 | 28 | R1 |
| 3 | shop_order_list.mask_post_addr.city.name | name | - | 2 | 北京市 | 名称 | 28 | R1 |
| 3 | shop_order_list.mask_post_addr.city.id | id | - | 2 | 110000 | id | 28 | R1 |
| 2 | shop_order_list.mask_post_addr.town | town | - | 5 | - | 县/区 | 28 | R1 |
| 3 | shop_order_list.mask_post_addr.town.name | name | - | 2 | 海淀 | 名称 | 28 | R1 |
| 3 | shop_order_list.mask_post_addr.town.id | id | - | 2 | 110108 | id | 28 | R1 |
| 2 | shop_order_list.mask_post_addr.street | street | - | 5 | - | 街道 | 28 | R1 |
| 3 | shop_order_list.mask_post_addr.street.name | name | - | 2 | 海淀街道 | 名称 | 28 | R1 |
| 3 | shop_order_list.mask_post_addr.street.id | id | - | 2 | 110108012 | id | 28 | R1 |
| 2 | shop_order_list.mask_post_addr.detail | detail | - | 2 | *** | 详细地址 | 28 | R1 |
| 1 | shop_order_list.user_coordinate | UserCoordinate | - | 5 | - | 买家收货地址经纬度信息，高德坐标系； | - | R1 |
| 2 | shop_order_list.user_coordinate.user_coordinate_longitude | UserCoordinateLongitude | - | 2 | 117.250076 | 买家收货地址经度信息，高德坐标系； | 28 | R1 |
| 2 | shop_order_list.user_coordinate.user_coordinate_latitude | UserCoordinateLatitude | - | 2 | 31.707203 | 买家收货地址纬度信息，高德坐标系； | 28 | R1 |
| 1 | shop_order_list.earliest_receipt_time | EarliestReceiptTime | - | 99 | 1660788000 | 预计最早送达时间，Unix时间戳：秒；当early_arrival=false时使用，仅小时达业务返回； | 28 | R1 |
| 1 | shop_order_list.latest_receipt_time | LatestReceiptTime | - | 99 | 1660791600 | latest_receipt_time：预计最晚送达时间，Unix时间戳：秒；当early_arrival=false时使用，仅小时达业务返回； | 28 | R1 |
| 1 | shop_order_list.early_arrival | EarlyArrival | - | 4 | true | early_arrival：是否尽快送达，true-是（配合target_arrival_time字段使用），false-否（配合earliest_receipt_time和latest_receipt_time使用），仅小时达业务返回； | 28 | R1 |
| 1 | shop_order_list.target_arrival_time | TargetArrivalTime | - | 99 | 1660788000 | 尽快送达的时间点，Unix时间戳：秒；当early_arrival=true时使用，仅小时达业务返回； | 28 | R1 |
| 1 | shop_order_list.packing_amount | PackingChargeAmount | - | 99 | 1 | 打包费，单位：分 | 28 | R1 |
| 1 | shop_order_list.supermarket_order_serial_no | SupermarketOrderSerialNo | - | 2 | 27 | 门店流水号；仅小时达业务返回 | 28 | R1 |
| 1 | shop_order_list.tax_amount | TaxAmount | - | 99 | 8 | 税费（子单税费之和） | 28 | R1 |
| 1 | shop_order_list.address_tag_ui | AddressTagUi | - | 3 | - | 地址标签列表 | - | R1 |
| 2 | shop_order_list.address_tag_ui.key | Key | - | 2 | double_address | 双地址标签 key | 28 | R1 |
| 2 | shop_order_list.address_tag_ui.text | Text | - | 2 | 双地址 | 双地址 | 28 | R1 |
| 2 | shop_order_list.address_tag_ui.hover_text | HoverText | - | 2 | 用户选择的省、市、区/县、街道与填写的详细地址层级不一致，可能为双地址 | 双地址 hover 提示 | 28 | R1 |
| 1 | shop_order_list.greet_words | GreetWords | - | 2 | 贺卡信息 | 鲜花订单的贺卡内容 | 28 | - |
| 1 | shop_order_list.mask_pay_tel | MaskPayTel | - | 2 | 18*******56 | 脱敏后的下单人手机号(鲜花订单) | - | - |
| 1 | shop_order_list.encrypt_pay_tel | PayTel | - | 2 | pcS3I1UOqlJ72TCuhVY4cmSNm8jUAoZmO52C | 加密后的下单人手机号（鲜花订单） | - | R2 |
| 1 | shop_order_list.open_address_id | - | - | 2 | #3hsyVdEpDQmtq+uGwUYO6SxRPVFHOyeBYWynrsCB8cPcQYek7nOh/4aIbxY6NN3PWN5x0U8evWQwIY4IEa6zz9edQBIuUcreZ88M/n1kIfeMswpnLqYMA5HP6PnrnhlOZLyXPKXv/CiR | 标识收件人地址的id，可用于合单 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/searchList?app_key=your_appkey_here&method=order.searchList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/searchList?app_key=your_appkey_here&method=order.searchList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OrderSearchListRequest request = new OrderSearchListRequest();
OrderSearchListParam param = request.getParam();
param.setProduct("3473196049974326153");
param.setBType(2L);
param.setAfterSaleStatusDesc("refund_success");
param.setTrackingNo("435435");
param.setPresellType(0L);
param.setOrderType(1L);
param.setCreateTimeStart(1617355413L);
param.setCreateTimeEnd(1617355413L);
param.setAbnormalOrder(1L);
param.setTradeType(1L);
param.setUpdateTimeStart(1617355413L);
param.setUpdateTimeEnd(1617355413L);
param.setSize(20L);
param.setPage(0L);
param.setOrderBy("create_time");
param.setOrderAsc(false);
param.setFulfilStatus("no_accept");
OrderSearchListResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderSearchListRequest();
$param = new OrderSearchListParam();
$request->setParam($param);
$param->product = "3473196049974326153";
$param->b_type = 2;
$param->after_sale_status_desc = "refund_success";
$param->tracking_no = "435435";
$param->presell_type = 0;
$param->order_type = 1;
$param->create_time_start = 1617355413;
$param->create_time_end = 1617355413;
$param->abnormal_order = 1;
$param->trade_type = 1;
$param->update_time_start = 1617355413;
$param->update_time_end = 1617355413;
$param->size = 20;
$param->page = 0;
$param->order_by = "create_time";
$param->order_asc = false;
$param->fulfil_status = "no_accept";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderSearchListRequest()
param = request.getParams()
param.product = "3473196049974326153"
param.b_type = 2
param.after_sale_status_desc = "refund_success"
param.tracking_no = "435435"
param.presell_type = 0
param.order_type = 1
param.create_time_start = 1617355413
param.create_time_end = 1617355413
param.abnormal_order = 1
param.trade_type = 1
param.update_time_start = 1617355413
param.update_time_end = 1617355413
param.size = 20
param.page = 0
param.order_by = "create_time"
param.order_asc = false
param.fulfil_status = "no_accept"
response = request.execute(accessToken)

```

### go

```go
request := order_searchList_request.New()
param := request.GetParams()
param.Product = "3473196049974326153"
param.BType = 2
param.AfterSaleStatusDesc = "refund_success"
param.TrackingNo = "435435"
param.PresellType = 0
param.OrderType = 1
param.CreateTimeStart = 1617355413
param.CreateTimeEnd = 1617355413
param.AbnormalOrder = 1
param.TradeType = 1
param.UpdateTimeStart = 1617355413
param.UpdateTimeEnd = 1617355413
param.Size = 20
param.Page = 0
param.OrderBy = "create_time"
param.OrderAsc = false
param.FulfilStatus = "no_accept"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderSearchListRequest();
var param = request.BuildParam();
param.Product = "3473196049974326153";
param.BType = 2;
param.AfterSaleStatusDesc = "refund_success";
param.TrackingNo = "435435";
param.PresellType = 0;
param.OrderType = 1;
param.CreateTimeStart = 1617355413;
param.CreateTimeEnd = 1617355413;
param.AbnormalOrder = 1;
param.TradeType = 1;
param.UpdateTimeStart = 1617355413;
param.UpdateTimeEnd = 1617355413;
param.Size = 20;
param.Page = 0;
param.OrderBy = "create_time";
param.OrderAsc = false;
param.FulfilStatus = "no_accept";
var response = request.Execute<OrderSearchListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20022 | 订单查询只支持查询最近90天内的数据 | 需要把下单开始时间设置为最近90天内的时间（如果没有传下单开始时间会默认设置当前时间90天前的时间为下单开始时间） |
| 40004 | 非法的参数 | isv.parameter-invalid:20013 | 订单查询最多支持查询5万 | 翻页查询最多支持查询到5万，需要缩短查询时间范围，降低查询的订单量 |
| 40004 | 非法的参数 | isv.parameter-invalid:20012 | 订单查询状态条件超过限制，只支持1个元素 | 状态查询条件是list，但现在只支持传入一个元素，重新组装参数查询 |
| 40004 | 非法的参数 | isv.parameter-invalid:20011 | 订单查询开始时间不能为空 | 时间为必传项，下单开始时间和更新开始时间必传一个 |
| 40004 | 非法的参数 | isv.parameter-invalid:20008 | 单次查询订单数超过限制 | 单页最大支持100，size设置需要 <= 100 |
| 20000 | 系统错误 | isp.service-error:20005 | 系统繁忙，请稍后重试 | 如遇到该报错，建议再30秒内重试3~5次，如还是报错可提交工单咨询 |
| 20000 | 系统错误 | isp.service-error:20004 | 系统繁忙，请稍后重试 | 如遇到该报错，建议再30秒内重试3~5次，如还是报错可提交工单咨询 |
| 40004 | 非法的参数 | isv.parameter-invalid:10035 | 查询订单列表页数不能小于0 | 查询页数从0开始，需要输入大于等于0的数 |
| 50002 | 业务处理失败 | isv.business-failed:20009 | 店铺ID不能为空 | 需要传入店铺ID |
| 40004 | 非法的参数 | isv.parameter-invalid:20045 | 查询结果中包含非该门店下订单 | 需传入合法的订单id |
| 50002 | 业务处理失败 | isv.business-failed:20059 | 20059:查询免息信息错误，请稍后重试 | 请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
