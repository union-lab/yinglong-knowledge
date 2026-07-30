# /afterSale/Detail

> 中文说明：提供给商家获取售后单详情信息  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/1095>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/Detail |
| 中文名称 | 提供给商家获取售后单详情信息 |
| 文档目录 | 售后退款API |
| Article ID | 1095 |
| 文档版本 | V19.35 |
| 官方更新时间 | 2025/12/31 11:19:29 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 4000 |

## 使用说明

商家获取售后单详细信息

## 权限包

- 售后 / 售后信息查询（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、跨境电商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、营销管理-互动小程序定制、营销管理-小程序定制、打单发货-微应用、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、品牌会员通、即时零售商家自研、直播工具、互动营销定制、短信营销、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单、智能外呼
- 飞鸽 / 飞鸽工单（packageType=1）；适用应用类目：工单管理、强管控微应用、AI智能客服-微应用、AI售后挽单
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 定向权限 / 定向权限包（packageType=1）
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电
- 开放平台 / 盲盒场景（packageType=10）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.Detail | 调用的API接口名称 | - | - |
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
| 0 | after_sale_id | AfterSaleId | true | 2 | 147278669040204930 | 售后单ID | - | - |
| 0 | need_operation_record | NeedOperationRecord | false | 4 | false | 是否需要协商记录 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | process_info | ProcessInfo | - | 5 | - | 售后单及相关信息 | - | R1 |
| 1 | process_info.after_sale_info | AfterSaleInfo | - | 5 | - | 售后单信息 | - | R1 |
| 2 | process_info.after_sale_info.government_channel_subsidy_amount | GovernmentChannelSubsidyAmount | - | 1 | 100 | 政府渠道补贴金额 | 76 | - |
| 2 | process_info.after_sale_info.kol_post_discount_return_amount | KolPostDiscountReturnAmount | - | 2 | 100 | 达人回收运费补贴 | - | - |
| 2 | process_info.after_sale_info.shop_post_discount_return_amount | ShopPostDiscountReturnAmount | - | 1 | 100 | 商家回收运费补贴 | - | - |
| 2 | process_info.after_sale_info.after_sale_id | AfterSaleId | - | 1 | 6965315853751632172 | 售后单ID | 56 | R1 |
| 2 | process_info.after_sale_info.after_sale_status | AfterSaleStatus | - | 1 | 6 | 售后状态：6-售后申请；7-售后退货中；8-【补寄\维修返回：售后待商家发货】；11-售后已发货；12-售后成功；13-【换货\补寄\维修返回：售后商家已发货，待用户收货】； 14-【换货\补寄\维修返回：售后用户已收货】 ；27-拒绝售后申请；28-售后失败；29-售后退货拒绝；51-订单取消成功；53-逆向交易已完成； | 56 | R1 |
| 2 | process_info.after_sale_info.after_sale_status_desc | AfterSaleStatusDesc | - | 2 | 售后成功 | 售后状态文案 | 56 | R1 |
| 2 | process_info.after_sale_info.refund_type | RefundType | - | 1 | 无需退款 | 退款方式 | 56 | R1 |
| 2 | process_info.after_sale_info.refund_type_text | RefundTypeText | - | 2 | 无需退款 | 退款方式文案 | 56 | R1 |
| 2 | process_info.after_sale_info.refund_status | RefundStatus | - | 1 | 1 | 退款状态;1-待退款;2-退款中;3-退款成功;4退款失败;5追缴成功; | 56 | R1 |
| 2 | process_info.after_sale_info.refund_total_amount | RefundTotalAmount | - | 1 | 1000 | 售后总金额（含运费） | 76 | R1 |
| 2 | process_info.after_sale_info.refund_post_amount | RefundPostAmount | - | 1 | 10 | 售后运费 | 76 | R1 |
| 2 | process_info.after_sale_info.refund_promotion_amount | RefundPromotionAmount | - | 1 | 10 | 退款补贴总金额（此字段只有退款成功后才会记录实际支付补贴回收的金额） | 76 | R1 |
| 2 | process_info.after_sale_info.apply_time | ApplyTime | - | 1 | 1735660800 | 售后单申请时间 | 56 | R1 |
| 2 | process_info.after_sale_info.update_time | UpdateTime | - | 1 | 1735660800 | 售后单更新时间 | 56 | R1 |
| 2 | process_info.after_sale_info.reason | Reason | - | 2 | 无理由退款 | 申请原因 | 56 | R1 |
| 2 | process_info.after_sale_info.reason_code | ReasonCode | - | 1 | 2 | 原因码；通过【afterSale/rejectReasonCodeList】接口获取 | 56 | R1 |
| 2 | process_info.after_sale_info.after_sale_type | AfterSaleType | - | 1 | 0 | 售后类型： 0-售后退货退款；1-售后仅退款；2-发货前退款；3-换货；4-系统取消；5-用户取消；6-价保；7-补寄；8-维修 | 56 | R1 |
| 2 | process_info.after_sale_info.after_sale_type_text | AfterSaleTypeText | - | 2 | 补寄 | 售后单类型文案 | 56 | R1 |
| 2 | process_info.after_sale_info.reason_remark | ReasonRemark | - | 2 | 不喜欢这件商品 | 申请描述 | 56 | R1 |
| 2 | process_info.after_sale_info.evidence | Evidence | - | 3 | [ "http://p6-aftersale-sign.ecombdimg.com/douyin-user-image-file/869bed93812154773403174c5feae63c~tplv-51d71q3p2z-q75-jpeg.jpeg?x-expires=1676015949\u0026x-signature=R%2Fbr7Gcl3s2Opfboss66qdY2CWc%3D"] | 买家申请退款图片凭证；仅支持图片，最大返回8张图片。 | 56 | R1 |
| 2 | process_info.after_sale_info.after_sale_apply_count | AfterSaleApplyCount | - | 1 | 1 | 用户申请售后件数 | 56 | R1 |
| 2 | process_info.after_sale_info.need_return_count | NeedReturnCount | - | 1 | 1 | 用户需退回件数, 数值为用户申请售后件数 - 商家未发货件数 | 56 | R1 |
| 2 | process_info.after_sale_info.deduction_amount | DeductionAmount | - | 1 | 10000 | 平台需要回收的金额（分） | 76 | R1 |
| 2 | process_info.after_sale_info.disable_coupon_id | DisableCouponId | - | 2 | 12345 | 作废的券ID | 56 | R1 |
| 2 | process_info.after_sale_info.platform_discount_return_amount | PlatformDiscountReturnAmount | - | 1 | 100 | 平台优惠退回金额 | 76 | R1 |
| 2 | process_info.after_sale_info.platform_discount_return_status | PlatformDiscountReturnStatus | - | 1 | 1 | [字段无效]平台优惠退回状态，枚举：0:待退补贴；1:退补贴成功；2:退补贴失败 | 56 | R1 |
| 2 | process_info.after_sale_info.kol_discount_return_amount | KolDiscountReturnAmount | - | 1 | 100 | 达人优惠退回金额 | 76 | R1 |
| 2 | process_info.after_sale_info.kol_discount_return_status | KolDiscountReturnStatus | - | 1 | 1 | 达人优惠退回状态，枚举：0:待退补贴；1:退补贴成功；2:退补贴失败 | 56 | R1 |
| 2 | process_info.after_sale_info.post_receiver | PostReceiver | - | 2 | \"张三\" | 换货、补寄时的收货人名字（只有换货、补寄时，这个字段才会有值），此字段已加密，使用前需要解密 | 85 | R2 |
| 2 | process_info.after_sale_info.post_tel_sec | PostTelSec | - | 2 | \"18740098531\" | 换货、补寄时的收货人的联系电话（只有换货、补寄时，这个字段才会有值），此字段已加密，使用前需要解密 | 85 | R2 |
| 2 | process_info.after_sale_info.post_address | PostAddr | - | 5 | - | 换货、补寄时的收货四级地址（只有换货、补寄时，这个字段才会有值） | - | R1 |
| 3 | process_info.after_sale_info.post_address.province | Province | - | 5 | - | 省 | - | R1 |
| 4 | process_info.after_sale_info.post_address.province.id | Id | - | 2 | 34 | 省ID | 32 | R1 |
| 4 | process_info.after_sale_info.post_address.province.name | Name | - | 2 | 山东省 | 省名字 | 32 | R1 |
| 3 | process_info.after_sale_info.post_address.city | City | - | 5 | - | 市 | - | R1 |
| 4 | process_info.after_sale_info.post_address.city.id | Id | - | 2 | 34 | 市ID | 32 | R1 |
| 4 | process_info.after_sale_info.post_address.city.name | Name | - | 2 | 菏泽市 | 市名字 | 32 | R1 |
| 3 | process_info.after_sale_info.post_address.town | Town | - | 5 | - | 县 | - | R1 |
| 4 | process_info.after_sale_info.post_address.town.id | Id | - | 2 | 34 | 县ID | 32 | R1 |
| 4 | process_info.after_sale_info.post_address.town.name | Name | - | 2 | 曹县 | 县名字 | 32 | R1 |
| 3 | process_info.after_sale_info.post_address.detail | Detail | - | 2 | 23432 | 地址详情，此字段已加密，使用前需要解密 | - | R2 |
| 3 | process_info.after_sale_info.post_address.landmark | Landmark | - | 2 | 2432 | 收件地址标志物 | 32 | R1 |
| 3 | process_info.after_sale_info.post_address.street | Street | - | 5 | - | 街道 | 32 | R1 |
| 4 | process_info.after_sale_info.post_address.street.id | Id | - | 2 | 342 | 街道ID | 32 | R1 |
| 4 | process_info.after_sale_info.post_address.street.name | Name | - | 2 | name | 街道名字 | 32 | R1 |
| 2 | process_info.after_sale_info.risk_decsison_code | RiskDecisionCode | - | 1 | 1 | 物流异常风控编码 | 86 | R1 |
| 2 | process_info.after_sale_info.risk_decsison_reason | RiskDecisionReason | - | 2 | 多个售后单同一单号 | 物流异常风控理由 | 86 | R1 |
| 2 | process_info.after_sale_info.risk_decsison_description | RiskDecisionDescription | - | 2 | 退货物流可能存在异常，多个售后单物流单号一致，请仔细核对或与买家核实后尽快处理。 | 物流异常风控描述 | 86 | R1 |
| 2 | process_info.after_sale_info.return_address | ReturnAddress | - | 5 | - | 退货地址 | - | R1 |
| 3 | process_info.after_sale_info.return_address.province | Province | - | 5 | - | 省 | 32 | R1 |
| 4 | process_info.after_sale_info.return_address.province.id | Id | - | 2 | 32 | 省ID | 32 | R1 |
| 4 | process_info.after_sale_info.return_address.province.name | Name | - | 2 | 浙江省 | 省名字 | 32 | R1 |
| 3 | process_info.after_sale_info.return_address.city | City | - | 5 | - | 市 | 32 | R1 |
| 4 | process_info.after_sale_info.return_address.city.id | Id | - | 2 | 432 | 市ID | 32 | R1 |
| 4 | process_info.after_sale_info.return_address.city.name | Name | - | 2 | 杭州市 | 市名称 | 32 | R1 |
| 3 | process_info.after_sale_info.return_address.town | Town | - | 5 | - | 县/区 | 32 | R1 |
| 4 | process_info.after_sale_info.return_address.town.id | Id | - | 2 | 432 | 县区ID | 28 | R1 |
| 4 | process_info.after_sale_info.return_address.town.name | Name | - | 2 | 西湖区 | 县区名字 | 28 | R1 |
| 3 | process_info.after_sale_info.return_address.street | Street | - | 5 | - | 街道 | 32 | R1 |
| 4 | process_info.after_sale_info.return_address.street.id | Id | - | 2 | 43 | 街道ID | 32 | R1 |
| 4 | process_info.after_sale_info.return_address.street.name | Name | - | 2 | 解放路 | 街道名称 | 32 | R1 |
| 3 | process_info.after_sale_info.return_address.landmark | Landmark | - | 2 | "" | 收件地址标志物 | 32 | R1 |
| 3 | process_info.after_sale_info.return_address.detail | Detail | - | 2 | 新华书店门口左转一米 | 详细地址 | 32 | R1 |
| 2 | process_info.after_sale_info.real_refund_amount | RealRefundAmount | - | 1 | 300 | 实际退款金额;单位：分（此字段只有退款成功后才会记录实际减去支付补贴回收的金额） | 76 | R1 |
| 2 | process_info.after_sale_info.got_pkg | Gotpkg | - | 1 | 1 | 买家是否收到货，0-表示未收到货；1-表示收到货 | 56 | R1 |
| 2 | process_info.after_sale_info.status_deadline | StatusDeadline | - | 1 | 1735660800 | 逾期时间 | 56 | R1 |
| 2 | process_info.after_sale_info.return_address_id | ReturnAddressID | - | 1 | 123123 | 退货地址ID | 87 | R1 |
| 2 | process_info.after_sale_info.exchange_sku_info | ExchangeSkuInfo | - | 5 | - | 换货SKU信息 | 78 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.sku_id | SkuId | - | 2 | 10000 | 商品skuid | 78 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.code | Code | - | 2 | \"10000\" | 商品编码 | 78 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.num | Num | - | 1 | 1 | 替换数量 | 78 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.out_sku_id | OutSkuId | - | 2 | \"10000\" | 商家编号 | 78 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.out_warehouse_id | WarehouseId | - | 2 | \"10000\" | 区域库存仓ID | 78 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.supplier_id | SupplierId | - | 2 | \"10000\" | sku外部供应商编码供应商ID | 28 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.url | Url | - | 2 | \"10000\" | 商品图片url | 78 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.name | Name | - | 2 | \"10000\" | 商品名称 | 78 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.price | Price | - | 2 | \"10000\" | 换货商品的价格，单位分 | 78 | R1 |
| 3 | process_info.after_sale_info.exchange_sku_info.spec_desc | SpecDesc | - | 2 | \"xx/xx/xx\" | sku规格信息 | 78 | R1 |
| 2 | process_info.after_sale_info.post_discount_return_amount | PostDiscountReturnAmount | - | 1 | 100 | 平台回收运费补贴 | 76 | R1 |
| 2 | process_info.after_sale_info.post_discount_return_status | PostDiscountReturnStatus | - | 1 | 1 | 运费优惠退回状态，枚举：0:待退补贴；1:退补贴成功；2:退补贴失败 | 56 | R1 |
| 2 | process_info.after_sale_info.part_type | PartType | - | 1 | 1 | 部分退状态，0为全额退款，1为部分退 | 56 | R1 |
| 2 | process_info.after_sale_info.reason_second_labels | ReasonSecondLabels | - | 3 | - | 用户申请售后选择的二级原因标签 | 79 | R1 |
| 3 | process_info.after_sale_info.reason_second_labels.code | Code | - | 1 | 1 | 二级原因标签编码 | 79 | R1 |
| 3 | process_info.after_sale_info.reason_second_labels.name | Name | - | 2 | 衣服买大 | 二级原因标签名称 | 79 | R1 |
| 2 | process_info.after_sale_info.refund_voucher_num | RefundVoucherNum | - | 1 | 1 | 卡券商品申请退款的张数 | 57 | R1 |
| 2 | process_info.after_sale_info.refund_voucher_times | RefundVoucherTimes | - | 1 | 3 | 多次券商品申请退款的次数，对于单次券，此字段值与refund_voucher_num相同 | 57 | R1 |
| 2 | process_info.after_sale_info.gold_coin_return_amount | GoldCoinReturnAmount | - | 1 | 10 | 退金币金额 | 28 | R1 |
| 2 | process_info.after_sale_info.refund_fail_reason | RefundFailReason | - | 2 | \"用户账户异常，平台处理中\" | 退款失败文案 | 28 | R1 |
| 2 | process_info.after_sale_info.aftersale_tags | AftersaleTags | - | 3 | - | 售后标签 | 79 | R1 |
| 3 | process_info.after_sale_info.aftersale_tags.tag_detail | TagDetail | - | 2 | 风险预警 | 标签名称 | 79 | R1 |
| 3 | process_info.after_sale_info.aftersale_tags.tag_detail_en | TagDetailEn | - | 2 | risk_warning | 标签关键字 | 79 | R1 |
| 3 | process_info.after_sale_info.aftersale_tags.tag_detail_text | TagDetailText | - | 2 | 该售后单【xxx预警原因】请根据物流/商品状态进行核实。若确认有风险，请及时保存举证${relate_doc}，可在${asset_prevent}操作批量拒绝售后；若无风险，可同意售后。 | 标签悬浮文案的占位符定义 | 79 | R1 |
| 3 | process_info.after_sale_info.aftersale_tags.tag_link_url | TagLinkUrl | - | 2 | 略 | 标签跳转链接 | 79 | R1 |
| 3 | process_info.after_sale_info.aftersale_tags.placeholder | Placeholder | - | 8 | - | 标签悬浮文案的占位符定义 | 79 | R1 |
| 4 | process_info.after_sale_info.aftersale_tags.placeholder.text | Text | - | 2 | 防控中心 | 占位符文案 | 76 | R1 |
| 4 | process_info.after_sale_info.aftersale_tags.placeholder.url | Url | - | 2 | 略 | 占位符跳转链接 | 76 | R1 |
| 2 | process_info.after_sale_info.store_id | StoreID | - | 2 | 121323 | 门店ID | 80 | R1 |
| 2 | process_info.after_sale_info.store_name | StoreName | - | 2 | 海底捞昌阳店 | 门店名称 | 80 | R1 |
| 2 | process_info.after_sale_info.after_sale_order_type | AfterSaleOrderType | - | 1 | 1 | 售后订单类型，枚举为-1(历史订单),1(商品单),2(店铺单) | 56 | R1 |
| 2 | process_info.after_sale_info.refund_packing_charge_amount | RefundPackingChargeAmount | - | 1 | 100 | 售后打包费退款金额，单位：分，商家退给用户打包费后，该字段则有值；仅小时达店铺使用； | 76 | R1 |
| 2 | process_info.after_sale_info.shop_discount_return_amount | ShopDiscountReturnAmount | - | 1 | 10 | 商家优惠退回金额（包含供应商优惠退回金额） | 76 | R1 |
| 2 | process_info.after_sale_info.after_sale_sub_type | AfterSaleSubType | - | 1 | 8001 | 售后子类型：8001-以换代修 | 56 | R1 |
| 2 | process_info.after_sale_info.agree_refuse_sign | AgreeRefuseSign | - | 1 | 1 | 商家是否同意拒签后退款（0-默认值；1-同意拒签后退款；2-不同意拒签后退款；257-拒签上标；258-拒签下标） | 56 | - |
| 2 | process_info.after_sale_info.apply_role | ApplyRole | - | 1 | 1 | 售后申请角色：1-买家；2-商家；3-客服；4-系统 | - | - |
| 2 | process_info.after_sale_info.refund_time | RefundTime | - | 1 | 1735660800 | 退款成功时间，即平台最后原路退回金额到用户账户的成功时间，Unix时间戳：秒 | 56 | - |
| 2 | process_info.after_sale_info.aftersale_status_to_final_time | AfterSaleStatusToFinalTime | - | 1 | 1735660800 | 售后完结时间，完结时间是平台根据商品的类型，售后状态等综合判断生成，当售后单有完结时间返回时售后单不可再做做任何操作；未完结售后单的该字段值为0；Unix时间戳：秒 | 56 | - |
| 2 | process_info.after_sale_info.return_method | ReturnMethod | - | 1 | 1 | 用户申请时的退货方式：0-未选择，1-用户上传物流，2-上门取件，4-用户到店退货，5-商家自有运力上门取货，6-平台运力上门取货，7-商家线下取货，10-到家场景下商家同意退货后默认为10，确定具体取货方式后流转到4、5、6。（具体以实际用户选择为准） | - | - |
| 2 | process_info.after_sale_info.auto_audit_bits | AutoAuditbits | - | 3 | [1, 2] | 自动审核方式：1-发货前极速退；2-小助手自动同意退款；3-发货后极速退；4-闪电退货；5-跨境零秒退；6-云仓拦截自动退；7-小助手自动同意退货；8-小助手自动同意拒签后退款；9-商家代客填写卡片发起售后；10-治理未发货自动同意退款；11-治理已发货自动同意退款；12-商家快递拦截成功自动退款；13-质检商品免审核；14-协商方案自动同意退款；15-平台卡券自动同意退款；16-三方卡券自动同意退款；17-治理一审自动同意退货退款 | - | R1 |
| 2 | process_info.after_sale_info.return_book_info | ReturnBookInfo | - | 5 | - | 用户退货物流偏好 | - | R1 |
| 3 | process_info.after_sale_info.return_book_info.book_time_end_ts | BookTimeEndTs | - | 1 | 1762232400 | 上门取件精确日历：截止时间戳，单位秒 | - | - |
| 3 | process_info.after_sale_info.return_book_info.book_time_begin_ts | BookTimeBeginTs | - | 1 | 1762228800 | 上门取件精确日历：开始时间戳，单位秒 | - | - |
| 3 | process_info.after_sale_info.return_book_info.return_type | ReturnType | - | 7 | 1 | 寄回类型，  1-自行寄回， 2-上门取件，4-到店退货，5-商家自有运力上门取货，3-快递柜，8-驿站， 10-商家上门取货 【商家取货的统称：自有运力、平台运力、线下自取】 | - | - |
| 3 | process_info.after_sale_info.return_book_info.book_time_begin | BookTimeBegin | - | 2 | 09:00 | 上门取件预约开始时间段 | - | - |
| 3 | process_info.after_sale_info.return_book_info.book_time_end | BookTimeEnd | - | 2 | 13:00 | 上门取件预约结束时间段 | - | - |
| 3 | process_info.after_sale_info.return_book_info.contact_info | ContactInfo | - | 5 | - | 上门取件地址信息 | - | R1 |
| 4 | process_info.after_sale_info.return_book_info.contact_info.addr | Addr | - | 5 | - | 联系地址 | - | R1 |
| 5 | process_info.after_sale_info.return_book_info.contact_info.addr.province | Province | - | 5 | - | 省 | - | R1 |
| 6 | process_info.after_sale_info.return_book_info.contact_info.addr.province.id | Id | - | 2 | - | - | - | - |
| 6 | process_info.after_sale_info.return_book_info.contact_info.addr.province.name | Name | - | 2 | - | - | - | - |
| 5 | process_info.after_sale_info.return_book_info.contact_info.addr.city | City | - | 5 | - | 市 | - | R1 |
| 6 | process_info.after_sale_info.return_book_info.contact_info.addr.city.id | Id | - | 2 | - | - | - | - |
| 6 | process_info.after_sale_info.return_book_info.contact_info.addr.city.name | Name | - | 2 | - | - | - | - |
| 5 | process_info.after_sale_info.return_book_info.contact_info.addr.town | Town | - | 5 | - | 区 | - | R1 |
| 6 | process_info.after_sale_info.return_book_info.contact_info.addr.town.id | Id | - | 2 | - | - | - | - |
| 6 | process_info.after_sale_info.return_book_info.contact_info.addr.town.name | Name | - | 2 | - | - | - | - |
| 5 | process_info.after_sale_info.return_book_info.contact_info.addr.detail | Detail | - | 2 | - | 详细地址,此字段已加密，使用前需要解密 | - | R2 |
| 5 | process_info.after_sale_info.return_book_info.contact_info.addr.street | Street | - | 5 | - | 街道 | - | R1 |
| 6 | process_info.after_sale_info.return_book_info.contact_info.addr.street.id | Id | - | 2 | - | - | - | - |
| 6 | process_info.after_sale_info.return_book_info.contact_info.addr.street.name | Name | - | 2 | - | - | - | - |
| 5 | process_info.after_sale_info.return_book_info.contact_info.addr.address_id | AddressID | - | 2 | - | 地址ID | - | - |
| 4 | process_info.after_sale_info.return_book_info.contact_info.name | Name | - | 2 | - | 姓名 | - | - |
| 4 | process_info.after_sale_info.return_book_info.contact_info.tel | Tel | - | 2 | - | 电话 | - | R2 |
| 3 | process_info.after_sale_info.return_book_info.sender_address_id | SenderAddressId | - | 2 | - | 地址id | - | - |
| 3 | process_info.after_sale_info.return_book_info.station_id | StationId | - | 2 | - | 驿站id | - | - |
| 2 | process_info.after_sale_info.open_address_id | - | - | 2 | #3hsyVdEpDQmtq+uGwUYO6SxRPVFHOyeBYWynrsCB8cPcQYek7nOh/4aIbxY6NN3PWN5x0U8evWQwIY4IEa6zz9edQBIuUcreZ88M/n1kIfeMswpnLqYMA5HP6PnrnhlOZLyXPKXv/CiR | 标识收件人地址的id，可用于合单 | - | - |
| 1 | process_info.arbitrate_info | ArbitrateInfo | - | 5 | - | 仲裁信息 | - | R1 |
| 2 | process_info.arbitrate_info.arbitrate_id | ArbitrateId | - | 2 | 12345 | 仲裁单id | 88 | R1 |
| 2 | process_info.arbitrate_info.arbitrate_status | ArbitrateStatus | - | 1 | 0 : \"无需仲裁\" | 仲裁状态 | 88 | R1 |
| 2 | process_info.arbitrate_info.is_required_evidence | IsRequiredEvidence | - | 4 | 1 : \"需要上传凭证\" | 是否需要上传凭证 | 88 | R1 |
| 2 | process_info.arbitrate_info.arbitrate_status_deadline | ArbitrateStatusDeadline | - | 2 | 1735660800 | 仲裁截止时间 | 88 | R1 |
| 2 | process_info.arbitrate_info.arbitrate_opinion | ArbitrateOpinion | - | 2 | 仲裁原因描述 | 仲裁原因 | 88 | R1 |
| 2 | process_info.arbitrate_info.arbitrate_conclusion | ArbitrateConclusion | - | 1 | 0 | 仲裁结果 | 88 | R1 |
| 2 | process_info.arbitrate_info.arbitrate_create_time | ArbitrateCreateTime | - | 1 | 1735660800 | 仲裁单创建时间 | 88 | R1 |
| 2 | process_info.arbitrate_info.arbitrate_update_time | ArbitrateUpdateTime | - | 1 | 1735660800 | 仲裁单更新时间 | 88 | R1 |
| 2 | process_info.arbitrate_info.arbitrate_evidence_tmpl | ArbitrateEvidenceTmpl | - | 5 | - | 凭证示例 | - | R1 |
| 3 | process_info.arbitrate_info.arbitrate_evidence_tmpl.images | Images | - | 3 | 仲裁图片示例 | 仲裁图片示例 | 88 | R1 |
| 3 | process_info.arbitrate_info.arbitrate_evidence_tmpl.describe | Describe | - | 2 | 仲裁描述 | 仲裁描述 | 88 | R1 |
| 3 | process_info.arbitrate_info.arbitrate_evidence_tmpl.dead_line | DeadLine | - | 1 | 1735660800 | 示例截止时间 | 88 | R1 |
| 2 | process_info.arbitrate_info.arbitrate_evidence | ArbitrateEvidence | - | 5 | - | 仲裁证据 | - | R1 |
| 3 | process_info.arbitrate_info.arbitrate_evidence.images | Images | - | 3 | 仲裁图片示例 | 仲裁图片 | 88 | R1 |
| 3 | process_info.arbitrate_info.arbitrate_evidence.describe | Describe | - | 2 | 仲裁描述 | 仲裁图片描述 | 88 | R1 |
| 2 | process_info.arbitrate_info.arbitrate_blame | ArbitrateBlame | - | 1 | 1:商家责任,2:买家责任,3:双方有责,4:平台责任,5:达人责任,6:双方无责,7:物流商责任 | 仲裁责任方 | 88 | R1 |
| 1 | process_info.after_sale_service_tag | AfterSaleServiceTag | - | 5 | - | 售后标签 | 79 | R1 |
| 2 | process_info.after_sale_service_tag.after_sale_service_tag | AfterSaleServiceTag | - | 3 | - | 售后服务标签 | 79 | R1 |
| 3 | process_info.after_sale_service_tag.after_sale_service_tag.tag_detail | TagDetail | - | 2 | \"7天\" | 服务标签名称 | 64 | R1 |
| 3 | process_info.after_sale_service_tag.after_sale_service_tag.tag_detail_en | TagDetailEn | - | 2 | \"supply_7day_return\" | 服务标签英文代号 | 64 | R1 |
| 3 | process_info.after_sale_service_tag.after_sale_service_tag.tag_link_url | TagLinkUrl | - | 2 | \"https://school.jinritemai.com/doudian/web/article/101835?from=shop_article\" | 服务跳转地址 | 64 | R1 |
| 1 | process_info.logistics_info | LogisticsInfo | - | 5 | - | 物流信息 | - | R1 |
| 2 | process_info.logistics_info.return | Return | - | 5 | - | 买家退货物流信息 | - | R1 |
| 3 | process_info.logistics_info.return.tracking_no | TrackingNo | - | 2 | 12345 | 物流单号 | - | R1 |
| 3 | process_info.logistics_info.return.company_name | CompanyName | - | 2 | 顺丰 | 物流公司名称 | 30 | R1 |
| 3 | process_info.logistics_info.return.company_code | CompanyCode | - | 2 | shunfeng | 物流公司编码 | 30 | R1 |
| 3 | process_info.logistics_info.return.logistics_time | LogisticsTime | - | 1 | 1735660800 | 买家填写退货物流时间 | 56 | R1 |
| 2 | process_info.logistics_info.exchange | Exchange | - | 5 | - | 卖家换货物流信息 | - | R1 |
| 3 | process_info.logistics_info.exchange.tracking_no | TrackingNo | - | 2 | 12345 | 物流单号 | 64 | R1 |
| 3 | process_info.logistics_info.exchange.company_name | CompanyName | - | 2 | 顺丰 | 物流公司名称 | 64 | R1 |
| 3 | process_info.logistics_info.exchange.company_code | CompanyCode | - | 2 | shunfeng | 物流公司编码 | 64 | R1 |
| 3 | process_info.logistics_info.exchange.logistics_time | LogisticsTime | - | 1 | 1735660800 | 卖家填写换货物流时间 | 64 | R1 |
| 2 | process_info.logistics_info.order | Order | - | 3 | - | 卖家发货正向物流信息 | 64 | R1 |
| 3 | process_info.logistics_info.order.merge_delivery | MergeDelivery | - | 1 | 1 | 1. 是合包发货  0：不是合包发货 | 64 | - |
| 3 | process_info.logistics_info.order.is_transit | IsTransit | - | 1 | 1 | 1. 是中转服务  0：不是中转服务 | 64 | - |
| 3 | process_info.logistics_info.order.is_remote_service | IsRemoteService | - | 1 | 1 | 1. 是偏远服务  0：不是偏远服务 | 64 | - |
| 3 | process_info.logistics_info.order.tracking_no | TrackingNo | - | 2 | SF12345678910 | 物流单号 | 35 | R1 |
| 3 | process_info.logistics_info.order.company_name | CompanyName | - | 2 | 顺丰 | 物流公司名称 | 35 | R1 |
| 3 | process_info.logistics_info.order.company_code | CompanyCode | - | 2 | shunfeng | 物流公司编码 | 35 | R1 |
| 3 | process_info.logistics_info.order.logistics_time | LogisticsTime | - | 1 | 1637586290 | 物流状态到达时间 | 35 | R1 |
| 3 | process_info.logistics_info.order.logistics_state | LogisticsState | - | 1 | 6 | 正向物流状态 | 35 | R1 |
| 3 | process_info.logistics_info.order.value_added_services | ValueAddedServices | - | 3 | - | 增值服务标签 | 35 | R1 |
| 4 | process_info.logistics_info.order.value_added_services.code | Code | - | 2 | SVC-WBHOMEDELIVERY | 标签编码 | 35 | R1 |
| 4 | process_info.logistics_info.order.value_added_services.name | Name | - | 2 | 送货上门 | 标签名称 | 35 | R1 |
| 2 | process_info.logistics_info.resend | Resend | - | 5 | - | 补寄物流 | - | R1 |
| 3 | process_info.logistics_info.resend.tracking_no | TrackingNo | - | 2 | 12345 | 物流单号 | 31 | R1 |
| 3 | process_info.logistics_info.resend.company_name | CompanyName | - | 2 | 顺丰 | 物流公司名称 | 31 | R1 |
| 3 | process_info.logistics_info.resend.company_code | CompanyCode | - | 2 | shunfeng | 物流公司编码 | 31 | R1 |
| 3 | process_info.logistics_info.resend.logistics_time | LogisticsTime | - | 1 | 1735660800 | 卖家填写补寄物流时间 | 31 | R1 |
| 1 | process_info.after_sale_shop_remarks | AftersaleShopRemarks | - | 3 | - | 售后备注 | - | R1 |
| 2 | process_info.after_sale_shop_remarks.order_id | OrderId | - | 1 | 12345 | 备注关联的订单ID | 31 | R1 |
| 2 | process_info.after_sale_shop_remarks.after_sale_id | AfterSaleId | - | 1 | 54321 | 备注关联的售后ID | 56 | R1 |
| 2 | process_info.after_sale_shop_remarks.remark | Remark | - | 2 | \"你好\" | 备注内容 | 28 | R1 |
| 2 | process_info.after_sale_shop_remarks.create_time | CreateTime | - | 1 | 173566080 | 创建时间 | 28 | R1 |
| 2 | process_info.after_sale_shop_remarks.operator | Operator | - | 2 | \"小亮\" | 操作人 | 28 | R1 |
| 1 | process_info.price_protection_detail | PriceProtectionDetail | - | 5 | - | 价保详情 | - | R1 |
| 2 | process_info.price_protection_detail.title | Title | - | 2 | 大促价保计算明细 | 价保文案标题 | 91 | R1 |
| 2 | process_info.price_protection_detail.price_protection_formulas | PriceProtectionFormulas | - | 2 | 实退差价=原订单商品总价（非实付价）-当前商品预计总价-已退差价-支付优惠回收金额 | 价保计算公式 | 91 | R1 |
| 2 | process_info.price_protection_detail.standard_price | StandardPrice | - | 5 | - | 基准价 | - | R1 |
| 3 | process_info.price_protection_detail.standard_price.actual_amount | ActualAmount | - | 5 | - | 总价 | - | R1 |
| 4 | process_info.price_protection_detail.standard_price.actual_amount.price_text | PriceText | - | 2 | 原订单商品总价（非实付价） | 金额明细 | 91 | R1 |
| 4 | process_info.price_protection_detail.standard_price.actual_amount.amount | Amount | - | 1 | 894 | 金额 | 91 | R1 |
| 3 | process_info.price_protection_detail.standard_price.origin_amount | OriginAmount | - | 5 | - | 原价 | - | R1 |
| 4 | process_info.price_protection_detail.standard_price.origin_amount.price_text | PriceText | - | 2 | 商品合计原价 | 金额明细 | 91 | R1 |
| 4 | process_info.price_protection_detail.standard_price.origin_amount.amount | Amount | - | 1 | 1000 | 金额 | 91 | R1 |
| 3 | process_info.price_protection_detail.standard_price.deduction_price_detail | DeductionPriceDetail | - | 3 | - | 减数明细 | - | R1 |
| 4 | process_info.price_protection_detail.standard_price.deduction_price_detail.price_text | PriceText | - | 2 | 店铺满减 | 金额明细 | 91 | R1 |
| 4 | process_info.price_protection_detail.standard_price.deduction_price_detail.amount | Amount | - | 1 | 100 | 金额 | 91 | R1 |
| 2 | process_info.price_protection_detail.check_price | CheckPrice | - | 5 | - | 核准价 | - | R1 |
| 3 | process_info.price_protection_detail.check_price.actual_amount | ActualAmount | - | 5 | - | 总价 | - | R1 |
| 4 | process_info.price_protection_detail.check_price.actual_amount.price_text | PriceText | - | 2 | 当前商品预计总价 | 金额明细 | 91 | R1 |
| 4 | process_info.price_protection_detail.check_price.actual_amount.amount | Amount | - | 1 | 400 | 金额 | 91 | R1 |
| 3 | process_info.price_protection_detail.check_price.origin_amount | OriginAmount | - | 5 | - | 原价 | - | R1 |
| 4 | process_info.price_protection_detail.check_price.origin_amount.price_text | PriceText | - | 2 | 商品合计原价 | 金额明细 | 76 | R1 |
| 4 | process_info.price_protection_detail.check_price.origin_amount.amount | Amount | - | 1 | 1000 | 金额 | 76 | R1 |
| 3 | process_info.price_protection_detail.check_price.deduction_price_detail | DeductionPriceDetail | - | 3 | - | 减数明细 | - | R1 |
| 4 | process_info.price_protection_detail.check_price.deduction_price_detail.price_text | PriceText | - | 2 | 店铺券 | 金额明细 | 91 | R1 |
| 4 | process_info.price_protection_detail.check_price.deduction_price_detail.amount | Amount | - | 1 | 600 | 金额 | 91 | R1 |
| 2 | process_info.price_protection_detail.refund_detail | RefundDetail | - | 5 | - | 退款明细 | - | R1 |
| 3 | process_info.price_protection_detail.refund_detail.actual_amount | ActualAmount | - | 5 | - | 总价 | - | R1 |
| 4 | process_info.price_protection_detail.refund_detail.actual_amount.price_text | PriceText | - | 2 | 实退差价 | 金额明细 | 91 | R1 |
| 4 | process_info.price_protection_detail.refund_detail.actual_amount.amount | Amount | - | 1 | 494 | 金额 | 91 | R1 |
| 3 | process_info.price_protection_detail.refund_detail.origin_amount | OriginAmount | - | 5 | - | 原价 | - | R1 |
| 4 | process_info.price_protection_detail.refund_detail.origin_amount.price_text | PriceText | - | 2 | 合计差价 | 金额明细 | 28 | R1 |
| 4 | process_info.price_protection_detail.refund_detail.origin_amount.amount | Amount | - | 1 | 494 | 金额 | 28 | R1 |
| 3 | process_info.price_protection_detail.refund_detail.deduction_price_detail | DeductionPriceDetail | - | 3 | - | 减数明细 | - | R1 |
| 4 | process_info.price_protection_detail.refund_detail.deduction_price_detail.price_text | PriceText | - | 2 | 已退差价 | 金额明细 | 91 | R1 |
| 4 | process_info.price_protection_detail.refund_detail.deduction_price_detail.amount | Amount | - | 1 | 0 | 金额 | 91 | R1 |
| 2 | process_info.price_protection_detail.refund_bearer_list | RefundBearerList | - | 3 | - | 钱款承担方 | - | R1 |
| 3 | process_info.price_protection_detail.refund_bearer_list.price_text | PriceText | - | 2 | 商家实退差价 | 文案 | 28 | R1 |
| 3 | process_info.price_protection_detail.refund_bearer_list.amount | Amount | - | 1 | 124 | 金额 | 28 | R1 |
| 2 | process_info.price_protection_detail.platform_to_merchant_refund_status | PlatformMakeupStatus | - | 1 | 1 | 平台价保补贴商家金额进度状态，1表示成功 | 91 | R1 |
| 2 | process_info.price_protection_detail.platform_recycle_amount | PlatformRecycleAmount | - | 1 | 123 | 平台价保回收金额 | 91 | R1 |
| 1 | process_info.record_logs_list | RecordLogsList | - | 3 | - | 协商记录 | - | R1 |
| 2 | process_info.record_logs_list.operator | Operator | - | 2 | 商家 | 操作人 | 93 | R1 |
| 2 | process_info.record_logs_list.time | Time | - | 2 | 2022-09-05 21:34:24 | 操作时间 | 93 | R1 |
| 2 | process_info.record_logs_list.text | Text | - | 2 | 买家举证 | 操作内容 | 93 | R1 |
| 2 | process_info.record_logs_list.images | Images | - | 3 | 图片链接 | 图片列表 | 93 | R1 |
| 2 | process_info.record_logs_list.desc_kvs | DescKVs | - | 3 | - | 额外信息 | - | R1 |
| 3 | process_info.record_logs_list.desc_kvs.key | Key | - | 2 | 举证说明 | 行头 | 93 | R1 |
| 3 | process_info.record_logs_list.desc_kvs.value | Value | - | 2 | 测试 | 内容 | 93 | R1 |
| 3 | process_info.record_logs_list.desc_kvs.highlight | Highlight | - | 4 | false | 是否高亮展示 | 93 | R1 |
| 3 | process_info.record_logs_list.desc_kvs.notice | Notice | - | 2 | 空 | 额外提示 | 93 | R1 |
| 2 | process_info.record_logs_list.action | Action | - | 2 | 仲裁举证 | 动作 | 93 | R1 |
| 2 | process_info.record_logs_list.role | Role | - | 1 | 2 | 角色；1-买家，2-商家，3-平台客服，4-系统 | 93 | R1 |
| 2 | process_info.record_logs_list.all_evidence | allEvidence | - | 3 | - | 所有类型凭证 | - | R1 |
| 3 | process_info.record_logs_list.all_evidence.type | Type | - | 7 | 1 | 证据类型  1:图片 2:视频 3:视频 4:文本 5:pdf | 93 | R1 |
| 3 | process_info.record_logs_list.all_evidence.urls | Urls | - | 3 | 图片链接 | 资源地址 | 93 | R1 |
| 3 | process_info.record_logs_list.all_evidence.desc | Desc | - | 2 | 描述 | 证据描述 | 93 | R1 |
| 0 | order_info | OrderInfo | - | 5 | - | 售后单关联订单信息 | - | R1 |
| 1 | order_info.order_voucher_code_st_name | OrderVoucherCodeStName | - | 2 | 未核销 | 核销状态文案 | 31 | - |
| 1 | order_info.order_voucher_code_st | OrderVoucherCodeSt | - | 1 | 1 | 核销状态码 1: "未核销", 2: "已核销", 3: "已过期", | 31 | - |
| 1 | order_info.shop_order_id | ShopOrderId | - | 1 | 12345 | 店铺单ID | 31 | R1 |
| 1 | order_info.sku_order_infos | SkuOrderInfos | - | 3 | - | sku单信息 | - | R1 |
| 2 | order_info.sku_order_infos.delivery_infos | delivery_infos | - | 3 | - | 称重品信息 | - | R1 |
| 3 | order_info.sku_order_infos.delivery_infos.info_unit | info_unit | - | 2 | 单位 | g | - | - |
| 3 | order_info.sku_order_infos.delivery_infos.info_value | info_value | - | 2 | 值 | 220 | - | - |
| 3 | order_info.sku_order_infos.delivery_infos.info_type | info_type | - | 2 | 类型 | weight | - | - |
| 2 | order_info.sku_order_infos.order_pkg_type | order_pkg_type | - | 2 | 1 | 仅即时零售使用, 判断是否是小时达, 次日达 | - | - |
| 2 | order_info.sku_order_infos.custom_property_list | CustomPropertyList | - | 3 | - | 商品属性，适用于外卖或即时零售场景下商品存在属性的情况 | - | R1 |
| 3 | order_info.sku_order_infos.custom_property_list.property_details | PropertyDetails | - | 3 | - | 属性详情列表 | - | R1 |
| 4 | order_info.sku_order_infos.custom_property_list.property_details.name | Name | - | 2 | 正常冰 | 属性名称 | - | - |
| 3 | order_info.sku_order_infos.custom_property_list.group_name | GroupName | - | 2 | 温度 | 属性组名称 | - | - |
| 2 | order_info.sku_order_infos.sku_order_id | SKUOrderId | - | 1 | 12345 | sku单ID | 31 | R1 |
| 2 | order_info.sku_order_infos.order_status | OrderStatus | - | 1 | 4:\"订单取消\" | 订单状态 | 31 | R1 |
| 2 | order_info.sku_order_infos.pay_amount | PayAmount | - | 1 | 1000 | 买家实付金额（分） | 49 | R1 |
| 2 | order_info.sku_order_infos.post_amount | PostAmount | - | 1 | 100 | 买家购买运费（分） | 49 | R1 |
| 2 | order_info.sku_order_infos.item_quantity | ItemQuantity | - | 1 | 1 | 订单件数 | 31 | R1 |
| 2 | order_info.sku_order_infos.create_time | CreateTime | - | 1 | 1735660800 | 订单创建时间 | 31 | R1 |
| 2 | order_info.sku_order_infos.tax_amount | TaxAmount | - | 1 | 100 | 购买税费（分） | 54 | R1 |
| 2 | order_info.sku_order_infos.is_oversea_order | IsOverseaOrder | - | 1 | 0：不是 1：是 | 是否为跨境业务 | - | R1 |
| 2 | order_info.sku_order_infos.product_name | ProductName | - | 2 | \"耐克球鞋\" | 商品名称 | 39 | R1 |
| 2 | order_info.sku_order_infos.product_id | ProductID | - | 1 | 12345 | 商品ID | 39 | R1 |
| 2 | order_info.sku_order_infos.product_image | ProductImage | - | 2 | 商品图片链接 | 商品图片 | 39 | R1 |
| 2 | order_info.sku_order_infos.tags | Tags | - | 3 | - | 商品标签 | 79 | R1 |
| 3 | order_info.sku_order_infos.tags.tag_detail | TagDetail | - | 2 | \"极速退\" | 服务标签名称 | 79 | R1 |
| 3 | order_info.sku_order_infos.tags.tag_detail_en | TagDetailEn | - | 2 | \"refund_auto_deal\" | 服务标签英文代号 | 79 | R1 |
| 3 | order_info.sku_order_infos.tags.tag_link_url | TagLinkUrl | - | 2 | \"https://school.jinritemai.com/doudian/web/article/101792?from=shop_article\" | 服务跳转地址 | 79 | R1 |
| 2 | order_info.sku_order_infos.sku_spec | SKUSpec | - | 3 | - | 商品规格信息 | 39 | R1 |
| 3 | order_info.sku_order_infos.sku_spec.name | Name | - | 2 | \"数量\" | 规格名称 | 39 | R1 |
| 3 | order_info.sku_order_infos.sku_spec.value | Value | - | 2 | 12 | 规格值 | 39 | R1 |
| 2 | order_info.sku_order_infos.shop_sku_code | ShopSKUCode | - | 2 | \"12345\" | 商家sku自定义编码 | 39 | R1 |
| 2 | order_info.sku_order_infos.sku_id | SkuId | - | 1 | 12345 | skuID | 39 | R1 |
| 2 | order_info.sku_order_infos.item_sum_amount | ItemSumAmount | - | 1 | 1000 | sku商品总原价（不含优惠） | 49 | R1 |
| 2 | order_info.sku_order_infos.sku_pay_amount | SkuPayAmount | - | 1 | 900 | 商品实际支付金额 | 49 | R1 |
| 2 | order_info.sku_order_infos.promotion_amount | PromotionAmount | - | 1 | 100 | 优惠总金额 | 51 | R1 |
| 2 | order_info.sku_order_infos.pay_type | PayType | - | 1 | 0 : \"货到付款\" 1：\"在线支付\" | 支付方式 | 31 | R1 |
| 2 | order_info.sku_order_infos.insurance_tags | InsuranceTags | - | 3 | - | 保险及其状态 | 79 | R1 |
| 3 | order_info.sku_order_infos.insurance_tags.tag_detail | TagDetail | - | 2 | \"运费险\" | 服务标签名称 | 79 | R1 |
| 3 | order_info.sku_order_infos.insurance_tags.tag_detail_en | TagDetailEn | - | 2 | returnfreight | 服务标签英文代号 | 79 | R1 |
| 3 | order_info.sku_order_infos.insurance_tags.tag_link_url | TagLinkUrl | - | 2 | 服务跳转链接 | 服务跳转地址 | 79 | R1 |
| 2 | order_info.sku_order_infos.after_sale_item_count | AfterSaleItemCount | - | 1 | 1 | 商品单对应的售后数量 | 56 | R1 |
| 2 | order_info.sku_order_infos.given_sku_details | GivenSkuDetails | - | 3 | - | 赠品信息 | - | R1 |
| 3 | order_info.sku_order_infos.given_sku_details.item_order_num | ItemOrderNum | - | 1 | 1 | 赠品个数 | 58 | - |
| 3 | order_info.sku_order_infos.given_sku_details.shop_sku_code | ShopSKUCode | - | 2 | 123 | 赠品商家编码 | 58 | - |
| 3 | order_info.sku_order_infos.given_sku_details.product_id | ProductID | - | 2 | 361124732503867950 | 赠品商品ID | 58 | - |
| 3 | order_info.sku_order_infos.given_sku_details.sku_order_id | SKUOrderID | - | 2 | 4866736775786465058 | 赠品商品订单ID | 58 | R1 |
| 3 | order_info.sku_order_infos.given_sku_details.product_name | ProductName | - | 2 | 赠品1衣服 | 赠品名称 | 58 | R1 |

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
AfterSaleDetailRequest request = new AfterSaleDetailRequest();
AfterSaleDetailParam param = request.getParam();
param.setAfterSaleId("147278669040204930");
param.setNeedOperationRecord(false);
AfterSaleDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleDetailRequest();
$param = new AfterSaleDetailParam();
$request->setParam($param);
$param->after_sale_id = "147278669040204930";
$param->need_operation_record = false;
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleDetailRequest()
param = request.getParams()
param.after_sale_id = "147278669040204930"
param.need_operation_record = false
response = request.execute(accessToken)

```

### go

```go
request := afterSale_Detail_request.New()
param := request.GetParams()
param.AfterSaleId = "147278669040204930"
param.NeedOperationRecord = false
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleDetailRequest();
var param = request.BuildParam();
param.AfterSaleId = "147278669040204930";
param.NeedOperationRecord = false;
var response = request.Execute<AfterSaleDetailResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:11000 | 参数错误，售后单ID错误 | 检查参数后重试 |
| 20000 | 系统错误 | isp.service-error:10000 | 系统内部错误，请重试 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10002 | 返回内容为空，重试后若错误继续存在，请联系平台 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:12000 | 12000:无效的店铺ID，请检查此店铺ID是否正确并重试 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:12001 | 12001:映射错误，当前操作不支持，适用于售后状态、类型、金额等校验未通过 | 检查参数后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
