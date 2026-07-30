# /afterSale/List

> 中文说明：售后列表接口  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/1295>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/List |
| 中文名称 | 售后列表接口 |
| 文档目录 | 售后退款API |
| Article ID | 1295 |
| 文档版本 | V19.16 |
| 官方更新时间 | 2025/4/27 14:02:11 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 3000 |

## 使用说明

1、售后列表接口，可以支持多种筛选规则，详情见请求参数。
2、时间类型参数均为以秒为单位的时间戳，金额均以分为单位。
3、接口中page*size最多不能超过5万条数据。如果超过5万条，请使用时间参数分割数据。
4、默认情况下，只能查到近6个月以内的数据，超过6个月需要指定时间。

## 权限包

- 售后 / 售后信息查询（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、跨境电商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、营销管理-互动小程序定制、营销管理-小程序定制、打单发货-微应用、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、品牌会员通、即时零售商家自研、直播工具、互动营销定制、短信营销、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 定向权限 / 定向权限包（packageType=1）
- 抖音超市 / 抖音自营超市场景（packageType=10）
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电
- 开放平台 / 盲盒场景（packageType=10）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.List | 调用的API接口名称 | - | - |
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
| 0 | order_id | OrderID | false | 2 | 4821845786203981633 | 父订单号 | - | - |
| 0 | aftersale_type | AfterSaleType | false | 1 | 1 | 售后类型；0-退货退款；1-已发货退款；2-未发货退款；3-换货；6-价保；7-补寄；8-维修 | - | - |
| 0 | aftersale_status | AfterSaleStatus | false | 1 | 2 | 已废弃，推荐使用standard_aftersale_status字段。售后状态，枚举为6(待商家同意),7(待买家退货),8(待商家发货),11(待商家二次同意),12(售后成功),13(换货待买家收货),14(换货成功),27(商家一次拒绝),28(售后失败),29(商家二次拒绝) | - | - |
| 0 | reason | Reason | false | 1 | 1 | 售后理由；1-七天无理由退货；2-非七天无理由退货； | - | - |
| 0 | logistics_status | LogisticsStatus | false | 1 | 2 | 退货物流状态，枚举为1(全部),2(已发货),3(未发货) | - | - |
| 0 | pay_type | PayType | false | 1 | 2 | 付款方式，枚举为1(全部), 2(货到付款),3(线上付款) | - | - |
| 0 | refund_type | RefundType | false | 1 | 1 | 退款类型，枚举为0(原路退款),1(线下退款),2(备用金),3(保证金),4(无需退款) | - | - |
| 0 | arbitrate_status | ArbitrateStatus | false | 3 | 0 | 仲裁状态，枚举为0(未介入),1(客服处理中),2(仲裁结束-支持买家),3(仲裁结束-支持卖家),4(待商家举证),5(待与买家协商),6(仲裁结束),255(取消) | - | - |
| 0 | order_flag | OrderFlag | false | 3 | [1,2,3] | 插旗信息：0：灰 1：紫 2: 青 3：绿 4： 橙 5： 红 | - | - |
| 0 | start_time | ApplyTimeStart | false | 1 | 1626770133 | 申请时间开始，单位为秒（查询范围包含开始值） | - | - |
| 0 | end_time | ApplyTimeEnd | false | 1 | 1626856525 | 申请时间结束，单位为秒（查询范围不包含结束值） | - | - |
| 0 | amount_start | AmountStart | false | 1 | 300 | 金额下限，单位为分（查询范围包含开始值） | - | - |
| 0 | amount_end | AmountEnd | false | 1 | 1000 | 金额上限，单位为分（查询范围不包含结束值） | - | - |
| 0 | risk_flag | RiskFlag | false | 1 | -1 | 风控标签，枚举为-1(退货正常),1(退货异常) | - | - |
| 0 | order_by | OrderBy | false | 3 | ["status_deadline desc"] | 排序方式，优先级按照列表顺序从前往后依次减小，写法为"<字段名称> <排序方式>"，字段名称目前支持"status_deadline"（逾期时间）、"apply_time"（申请时间）和 "update_time"（更新时间），排序方式目前支持"asc"（升序）和"desc"（降序）。按照"逾期时间"升序排列，会优先返回临近逾期时间的数据。 | - | - |
| 0 | page | Page | true | 1 | 0 | 页数，从0开始 | - | - |
| 0 | size | Size | true | 1 | 50 | 每页数量，最多100个 | - | - |
| 0 | aftersale_id | AfterSaleID | false | 2 | 6987272148133888300 | 售后单号 | - | - |
| 0 | standard_aftersale_status | StandardAfterSaleStatus | false | 3 | [6,7,11] | 售后状态；6-待商家同意；7-待买家退货；8-待商家发货；11-待商家二次同意；12-售后成功；13-换货\补寄\维修待买家收货；14-换货\补寄\维修成功；27-商家一次拒绝；28-售后失败；29-商家二次拒绝；支持传多种状态，使用英文“,”分隔；注意：如传入非枚举值信息会被系统忽略，如传入都不合法则默认查询所有； | - | - |
| 0 | need_special_type | NeedSpecialType | false | 4 | true/false | 是否展示特殊售后 | - | - |
| 0 | update_start_time | UpdateTimeStart | false | 1 | 1626856525 | 更新时间开始，单位为秒（查询范围包含开始值）；当使用update_start_time和update_end_time时，请配合传入order_by= update_time否则会导致基于更新时间查询售后列表轮询数据遗漏； | - | - |
| 0 | update_end_time | UpdateTimeEnd | false | 1 | 1626856525 | 更新时间结束，单位为秒（查询范围包含开始值）；当使用update_start_time和update_end_time时，请配合传入order_by= update_time否则会导致基于更新时间查询售后列表轮询数据遗漏； | - | - |
| 0 | order_logistics_tracking_no | OrderLogisticsTrackingNo | false | 3 | ["SF12345678910"] | 正向物流单号 | - | - |
| 0 | order_logistics_state | OrderLogisticsState | false | 3 | [1,2,3,4] | 正向物流状态（仅支持拒签场景下的状态筛选，状态更新有一定时延。1：买家已拒签；2：买家已签收；3：快递退回中，运往商家，包含快递拦截成功；4：商家已签收） | - | - |
| 0 | agree_refuse_sign | AgreeRefuseSign | false | 3 | [1,2] | 是否拒签后退款（1：已同意拒签, 2：未同意拒签） | - | - |
| 0 | aftersale_sub_type | AfterSaleSubType | false | 1 | 8001 | 售后子类型；8001-以换代修。 | - | - |
| 0 | aftersale_status_to_final_start_time | AfterSaleStatusToFinalTimeStart | false | 1 | 1626856525 | 售后完结时间开始，单位为秒（查询范围包含开始值），仅支持售后完结时间在近6个月内的售后单，按完结时间筛选；售后完结时间生成规则是平台根据商品的类型，售后状态等综合判断生成，当售后单有完结时间返回时售后单不可再做任何操作； | - | - |
| 0 | aftersale_status_to_final_end_time | AfterSaleStatusToFinalTimeEnd | false | 1 | 1626856525 | 售后完结时间结束，单位为秒（查询范围包含开始值），仅支持售后完结时间在近6个月内的售后单，按完结时间筛选；售后完结时间生成规则是平台根据商品的类型，售后状态等综合判断生成，当售后单有完结时间返回时售后单不可再做任何操作； | - | - |
| 0 | store_id_list | store_id_list | false | 3 | [1626856525,1123416] | 即时零售专用, 查询门店id list入参 其中最多传入50个门店id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | items | Items | - | 3 | - | 售后列表元素 | - | R1 |
| 1 | items.aftersale_info | AfterSaleInfo | - | 5 | - | 售后信息 | - | R1 |
| 2 | items.aftersale_info.aftersale_status_to_final_time | AfterSaleStatusToFinalTime | - | 1 | 1626753592 | 售后完结时间，完结时间是平台根据商品的类型，售后状态等综合判断生成，当售后单有完结时间返回时售后单不可再做任何操作；未完结售后单的该字段值为0；Unix时间戳：秒 | 56 | - |
| 2 | items.aftersale_info.aftersale_id | AfterSaleID | - | 2 | 6986853269519810849 | 售后单号 | 56 | R1 |
| 2 | items.aftersale_info.aftersale_order_type | AfterSaleOrderType | - | 1 | 1 | 售后订单类型，枚举为-1(历史订单),1(商品单),2(店铺单) | 56 | R1 |
| 2 | items.aftersale_info.aftersale_type | AfterSaleType | - | 1 | 0 | 售后类型，枚举为0(退货退款),1(已发货退款),2(未发货退款),3(换货),6(价保),7(补寄) | 56 | R1 |
| 2 | items.aftersale_info.aftersale_status | AfterSaleStatus | - | 1 | 11 | 售后状态和请求参数standard_aftersale_status字段对应；3-换货待买家收货；6-待商家同意；7-待买家退货；8-待商家发货；11-待商家二次同意；12-售后成功；14-换货成功；27-商家一次拒绝；28-售后失败；29-商家二次拒绝； | 56 | R1 |
| 2 | items.aftersale_info.related_id | RelatedID | - | 2 | "4821780700279174718" | 关联的订单ID | 31 | R1 |
| 2 | items.aftersale_info.apply_time | ApplyTime | - | 1 | 1626753592 | 申请时间 | 56 | R1 |
| 2 | items.aftersale_info.update_time | UpdateTime | - | 1 | 1626860666 | 最近更新时间 | 56 | R1 |
| 2 | items.aftersale_info.status_deadline | StatusDeadline | - | 1 | 1626926420 | 当前节点逾期时间 | 56 | R1 |
| 2 | items.aftersale_info.refund_amount | RefundAmount | - | 1 | 20 | 售后退款金额，单位为分 | - | R1 |
| 2 | items.aftersale_info.refund_post_amount | RefundPostAmount | - | 1 | 0 | 售后退运费金额，单位为分 | - | R1 |
| 2 | items.aftersale_info.aftersale_num | AfterSaleQuantity | - | 1 | 1 | 售后数量 | 56 | R1 |
| 2 | items.aftersale_info.part_type | PartType | - | 1 | 0 | 部分退类型 | - | R1 |
| 2 | items.aftersale_info.aftersale_refund_type | AfterSaleRefundType | - | 1 | 0 | 售后退款类型，枚举为-1(历史数据默认值),0(订单货款/原路退款),1(货到付款线下退款),2(备用金),3(保证金),4(无需退款),5(平台垫付) | 56 | R1 |
| 2 | items.aftersale_info.refund_type | RefundType | - | 1 | 0 | 退款方式，枚举为1(极速退款助手)、2(售后小助手)、3(售后急速退)、4(闪电退货) | 56 | R1 |
| 2 | items.aftersale_info.arbitrate_status | ArbitrateStatus | - | 1 | 0 | 仲裁状态，枚举为0(无仲裁记录),1(仲裁中),2(客服同意),3(客服拒绝),4(待商家举证),5(协商期),255(仲裁结束) | 56 | R1 |
| 2 | items.aftersale_info.create_time | CreateTime | - | 1 | 1626753592 | 售后单创建时间 | 56 | R1 |
| 2 | items.aftersale_info.refund_tax_amount | RefundTaxAmount | - | 1 | 0 | 退税费 | 54 | R1 |
| 2 | items.aftersale_info.left_urge_sms_count | LeftUrgeSMSCount | - | 1 | 0 | 商家剩余发送短信（催用户寄回）次数 | 28 | R1 |
| 2 | items.aftersale_info.return_logistics_code | ReturnLogisticsCode | - | 2 | "XY123123123" | 退货物流单号 | 64 | R1 |
| 2 | items.aftersale_info.risk_decision_code | RiskDecisionCode | - | 1 | 0 | 风控码 | 77 | R1 |
| 2 | items.aftersale_info.risk_decision_reason | RiskDecisionReason | - | 2 | "" | 风控理由 | 77 | R1 |
| 2 | items.aftersale_info.risk_decision_description | RiskDecisionDescription | - | 2 | "" | 风控描述 | 77 | R1 |
| 2 | items.aftersale_info.return_promotion_amount | ReturnPromotionAmount | - | 1 | 0 | 退优惠金额 | 51 | R1 |
| 2 | items.aftersale_info.refund_status | RefundStatus | - | 1 | 1 | 退款状态；1-待退款;2-退款中;3-退款成功;4-退款失败;5-追缴成功; | 56 | R1 |
| 2 | items.aftersale_info.arbitrate_blame | ArbitrateBlame | - | 1 | 1:商家责任,2:买家责任,3:双方有责,4:平台责任,5:达人责任 | 仲裁责任方 | 56 | R1 |
| 2 | items.aftersale_info.exchange_sku_info | ExchangeSkuInfo | - | 5 | - | 换货SKU信息 | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.sku_id | SkuId | - | 2 | "1709160688834615" | 换货SkuID | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.code | Code | - | 2 | "10000" | 换货SKU code | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.num | Num | - | 1 | 1 | 换货数目 | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.out_sku_id | OutSkuId | - | 2 | "10000" | 商家编号 | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.out_warehouse_id | WarehouseId | - | 2 | "10000" | 区域库存仓ID | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.supplier_id | SupplierId | - | 2 | "10000" | sku外部供应商编码供应商ID | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.url | Url | - | 2 | "http://xxxxx" | 商品图片url | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.name | Name | - | 2 | "xxx" | 商品名称 | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.price | Price | - | 2 | "100" | 换货商品的价格，单位分 | 78 | R1 |
| 3 | items.aftersale_info.exchange_sku_info.spec_desc | SpecDesc | - | 2 | "xx/xx/xx" | sku规格信息 | 78 | R1 |
| 2 | items.aftersale_info.return_logistics_company_name | ReturnLogisticsCompanyName | - | 2 | 顺丰速运 | 退货物流公司名称 | 30 | R1 |
| 2 | items.aftersale_info.exchange_logistics_company_name | ExchangeLogisticsCompanyName | - | 2 | 韵达快递 | 换货物流公司名称 | 30 | R1 |
| 2 | items.aftersale_info.remark | Remark | - | 2 | 买家不想要了 | 售后商家备注 | 81 | R1 |
| 2 | items.aftersale_info.got_pkg | GotPkg | - | 1 | 1 | 买家是否收到货物，0表示未收到，1表示收到 | 56 | R1 |
| 2 | items.aftersale_info.order_logistics | OrderLogistics | - | 3 | - | 商家首次发货的正向物流信息 | - | R1 |
| 3 | items.aftersale_info.order_logistics.tracking_no | TrackingNo | - | 2 | SF12345678910 | 物流单号 | 64 | R1 |
| 3 | items.aftersale_info.order_logistics.company_name | CompanyName | - | 2 | 顺丰 | 物流公司名称 | 30 | R1 |
| 3 | items.aftersale_info.order_logistics.company_code | CompanyCode | - | 2 | shunfeng | 物流公司编码 | 30 | R1 |
| 3 | items.aftersale_info.order_logistics.logistics_time | LogisticsTime | - | 1 | 1637586290 | 物流状态到达时间 | 64 | R1 |
| 3 | items.aftersale_info.order_logistics.logistics_state | LogisticsState | - | 1 | 6 | 正向物流状态 | 64 | R1 |
| 2 | items.aftersale_info.is_agree_refuse_sign | IsAgreeRefuseSign | - | 1 | 1 | 是否拒签后退款（1：已同意拒签, 2：未同意拒签） | 56 | R1 |
| 2 | items.aftersale_info.reason_second_labels | ReasonSecondLabels | - | 3 | - | 用户申请售后时选择的二级原因标签 | - | R1 |
| 3 | items.aftersale_info.reason_second_labels.code | Code | - | 1 | 1 | 二级原因标签编号 | 56 | R1 |
| 3 | items.aftersale_info.reason_second_labels.name | Name | - | 2 | 衣服买大 | 二级原因标签名称 | 56 | R1 |
| 2 | items.aftersale_info.aftersale_tags | AftersaleTags | - | 3 | - | 售后标签（含时效延长、风险预警、豁免体验分等标签）标签在平台侧会有更新，标签仅做展示使用，请勿作为系统判断依赖。 | 79 | R1 |
| 3 | items.aftersale_info.aftersale_tags.tag_detail | TagDetail | - | 2 | 风险预警 | 标签名称 | 79 | R1 |
| 3 | items.aftersale_info.aftersale_tags.tag_detail_en | TagDetailEn | - | 2 | risk_warning | 标签关键字 | 79 | R1 |
| 3 | items.aftersale_info.aftersale_tags.tag_detail_text | TagDetailText | - | 2 | 该售后单【xxx预警原因】请根据物流/商品状态进行核实。若确认有风险，请及时保存举证${relate_doc}，可在${asset_prevent}操作批量拒绝售后；若无风险，可同意售后。 | 标签悬浮文案（其中${key}占位符对应placeholder中的key对应内容） | 79 | R1 |
| 3 | items.aftersale_info.aftersale_tags.tag_link_url | TagLinkUrl | - | 2 | 略 | 标签跳转链接 | 79 | R1 |
| 3 | items.aftersale_info.aftersale_tags.placeholder | Placeholder | - | 8 | - | 标签悬浮文案的占位符定义 | 79 | R1 |
| 4 | items.aftersale_info.aftersale_tags.placeholder.text | Text | - | 2 | 防控中心 | 占位符文案 | 79 | R1 |
| 4 | items.aftersale_info.aftersale_tags.placeholder.url | Url | - | 2 | 略 | 占位符跳转链接 | 79 | R1 |
| 2 | items.aftersale_info.store_id | StoreID | - | 1 | 3592 | 门店ID | 80 | R1 |
| 2 | items.aftersale_info.store_name | StoreName | - | 2 | xxx朝阳分店 | 门店名称 | 80 | R1 |
| 2 | items.aftersale_info.aftersale_sub_type | AfterSaleSubType | - | 1 | 8001 | 售后子类型；8001-以换代修。 | 56 | R1 |
| 2 | items.aftersale_info.auto_audit_bits | AutoAuditbits | - | 3 | [1, 2] | 自动审核方式：1-发货前极速退；2-小助手自动同意退款；3-发货后极速退；4-闪电退货；5-跨境零秒退；6-云仓拦截自动退；7-小助手自动同意退货；8-小助手自动同意拒签后退款；9-商家代客填写卡片发起售后；10-治理未发货自动同意退款；11-治理已发货自动同意退款；12-商家快递拦截成功自动退款；13-质检商品免审核；14-协商方案自动同意退款；15-平台卡券自动同意退款；16-三方卡券自动同意退款；17-治理一审自动同意退货退款；21-物流异常极速退；27-发货后签收前垫资极速退 | 56 | R1 |
| 1 | items.order_info | OrderInfo | - | 5 | - | 订单信息 | - | R1 |
| 2 | items.order_info.shop_order_id | ShopOrderID | - | 2 | "4821780700279174718" | 店铺单订单ID | 31 | R1 |
| 2 | items.order_info.related_order_info | RelatedOrderInfo | - | 3 | - | 售后关联的订单信息 | - | R1 |
| 3 | items.order_info.related_order_info.delivery_infos | delivery_infos | - | 3 | - | 称重品信息 | - | R1 |
| 4 | items.order_info.related_order_info.delivery_infos.info_unit | info_unit | - | 2 | 单位 | g | - | - |
| 4 | items.order_info.related_order_info.delivery_infos.info_value | info_value | - | 2 | 值 | 220 | - | - |
| 4 | items.order_info.related_order_info.delivery_infos.info_type | info_type | - | 2 | 类型 | weight | - | - |
| 3 | items.order_info.related_order_info.sku_order_id | SKUOrderID | - | 2 | "4821780700279174718" | 商品单信息 | 31 | R1 |
| 3 | items.order_info.related_order_info.order_status | OrderStatus | - | 1 | 3 | 订单状态，枚举为2(未发货),3(已发货),5(已收货或已完成),255(已完成,废弃) | 31 | R1 |
| 3 | items.order_info.related_order_info.pay_amount | PayAmount | - | 1 | 20 | 付款金额 | 49 | R1 |
| 3 | items.order_info.related_order_info.post_amount | PostAmount | - | 1 | 0 | 付运费金额 | 49 | R1 |
| 3 | items.order_info.related_order_info.item_num | ItemQuantity | - | 1 | 1 | 购买数量 | 31 | R1 |
| 3 | items.order_info.related_order_info.create_time | CreateTime | - | 1 | 1626753467 | 下单时间 | 31 | R1 |
| 3 | items.order_info.related_order_info.tax_amount | TaxAmount | - | 1 | 0 | 税费 | 54 | R1 |
| 3 | items.order_info.related_order_info.is_oversea_order | IsOverseaOrder | - | 1 | 0 | 是否为海外订单 | 54 | R1 |
| 3 | items.order_info.related_order_info.product_name | ProductName | - | 2 | 小兔子T恤 | 商品名称 | 39 | R1 |
| 3 | items.order_info.related_order_info.product_id | ProductID | - | 1 | 9999888777666 | 商品ID | 39 | R1 |
| 3 | items.order_info.related_order_info.product_image | ProductImage | - | 2 | https://bytedance.com/image/rabbit.jpg | 商品图片 | 39 | R1 |
| 3 | items.order_info.related_order_info.tags | Tags | - | 3 | - | 订单标签；标签在平台侧会有更新，标签仅做展示使用，请勿作为系统判断依赖。 | - | R1 |
| 4 | items.order_info.related_order_info.tags.tag_detail | TagDetail | - | 2 | 超级售后 | 标签中文名称 | - | R1 |
| 4 | items.order_info.related_order_info.tags.tag_detail_en | TagDetailEn | - | 2 | super_after_sale | 标签编号 | - | R1 |
| 4 | items.order_info.related_order_info.tags.tag_link_url | TagLinkUrl | - | 2 | http://what_is_super_after_sale.bytedance.com/faq | 标签链接 | - | R1 |
| 3 | items.order_info.related_order_info.sku_spec | SKUSpec | - | 3 | - | 商品规格 | - | R1 |
| 4 | items.order_info.related_order_info.sku_spec.name | Name | - | 2 | 颜色 | 规格类型名称 | 39 | R1 |
| 4 | items.order_info.related_order_info.sku_spec.value | Value | - | 2 | 白 | 规格值 | 39 | R1 |
| 3 | items.order_info.related_order_info.shop_sku_code | ShopSKUCode | - | 2 | "" | 商家SKU编码 | 39 | R1 |
| 3 | items.order_info.related_order_info.logistics_code | LogisticsCode | - | 2 | "RABBIT123123" | 发货物流编码 | 30 | R1 |
| 3 | items.order_info.related_order_info.aftersale_pay_amount | AfterSalePayAmount | - | 1 | 20 | 售后退款金额 | 76 | R1 |
| 3 | items.order_info.related_order_info.aftersale_post_amount | AfterSalePostAmount | - | 1 | 0 | 售后退运费金额 | 76 | R1 |
| 3 | items.order_info.related_order_info.aftersale_tax_amount | AfterSaleTaxAmount | - | 1 | 0 | 售后退税费金额 | 54 | R1 |
| 3 | items.order_info.related_order_info.aftersale_item_num | AfterSaleItemQuantity | - | 1 | 1 | 售后商品数量 | 56 | R1 |
| 3 | items.order_info.related_order_info.promotion_pay_amount | PromotionPayAmount | - | 1 | 0 | 优惠券金额 | 51 | R1 |
| 3 | items.order_info.related_order_info.price | Price | - | 1 | 20 | 价格 | 49 | R1 |
| 3 | items.order_info.related_order_info.logistics_company_name | LogisticsCompanyName | - | 2 | 顺丰速运 | 【已废弃】正向物流公司名称,替代字段：aftersale_info.order_logistics.company_name字段 | - | R1 |
| 3 | items.order_info.related_order_info.given_sku_order_ids | GivenSkuOrderIds | - | 3 | 4863025593329976686 | 赠品订单id | 58 | R1 |
| 2 | items.order_info.order_flag | OrderFlag | - | 1 | 0 | 订单插旗 | 75 | R1 |
| 1 | items.text_part | TextPart | - | 5 | - | 文案部分 | - | R1 |
| 2 | items.text_part.logistics_text | LogisticsShippedText | - | 2 | "已发货" | 正向物流发货状态文案 | 74 | R1 |
| 2 | items.text_part.aftersale_status_text | AfterSaleStatusText | - | 2 | "待商家审核" | 售后状态文案 | 74 | R1 |
| 2 | items.text_part.aftersale_type_text | AfterSaleTypeText | - | 2 | "退货退款" | 售后类型文案 | 74 | R1 |
| 2 | items.text_part.return_logistics_text | ReturnLogisticsShippedText | - | 2 | "已发货" | 退货物流发货状态文案 | 74 | R1 |
| 2 | items.text_part.aftersale_refund_type_text | AfterSaleRefundTypeText | - | 2 | "保证金" | 售后退款类型文案 | 74 | R1 |
| 2 | items.text_part.reason_text | ReasonText | - | 2 | "无理由退款" | 售后理由文案 | 74 | R1 |
| 2 | items.text_part.bad_item_text | AfterSaleBadItemCountText | - | 2 | "" | 坏单比例文案 | 74 | R1 |
| 2 | items.text_part.arbitrate_status_text | ArbitrateStatusText | - | 2 | "" | 仲裁状态文案 | 74 | R1 |
| 1 | items.seller_logs | SellerLogs | - | 3 | - | 卖家插旗日志 | - | R1 |
| 2 | items.seller_logs.content | Content | - | 2 | "买家觉得小兔子太可爱了，不想要了" | 插旗日志内容 | 75 | R1 |
| 2 | items.seller_logs.op_name | OpName | - | 2 | "兔子店铺CEO" | 插旗操作人 | 75 | R1 |
| 2 | items.seller_logs.create_time | CreateTime | - | 2 | 2001-01-01 03:04:05 | 插旗时间（字符串格式） | 75 | R1 |
| 2 | items.seller_logs.star | Star | - | 1 | 0 | 插旗信息；0：灰 1：紫 2: 青 3：绿 4： 橙 5： 红 | 75 | R1 |
| 0 | has_more | HasMore | - | 4 | true | 是否还有更多 | 29 | R1 |
| 0 | total | Total | - | 1 | 1025 | 当前搜索条件下，匹配到的总数量 | 29 | R1 |
| 0 | page | Page | - | 1 | 0 | 页码，从0开始 | 29 | R1 |
| 0 | size | Size | - | 1 | 10 | 当前返回售后数量 | 29 | R1 |

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
AfterSaleListRequest request = new AfterSaleListRequest();
AfterSaleListParam param = request.getParam();
param.setOrderId("4821845786203981633");
param.setAftersaleType(1L);
param.setAftersaleStatus(2L);
param.setReason(1L);
param.setLogisticsStatus(2L);
param.setPayType(2L);
param.setRefundType(1L);
param.setArbitrateStatus(0);
param.setOrderFlag([1,2,3]);
param.setStartTime(1626770133L);
param.setEndTime(1626856525L);
param.setAmountStart(300L);
param.setAmountEnd(1000L);
param.setRiskFlag(-1L);
param.setOrderBy(["status_deadline desc"]);
param.setPage(0L);
param.setSize(50L);
param.setAftersaleId("6987272148133888300");
param.setStandardAftersaleStatus([6,7,11]);
param.setNeedSpecialType(true/false);
param.setUpdateStartTime(1626856525L);
param.setUpdateEndTime(1626856525L);
param.setOrderLogisticsTrackingNo(["SF12345678910"]);
param.setOrderLogisticsState([1,2,3,4]);
param.setAgreeRefuseSign([1,2]);
param.setAftersaleSubType(8001L);
param.setAftersaleStatusToFinalStartTime(1626856525L);
param.setAftersaleStatusToFinalEndTime(1626856525L);
param.setStoreIdList([1626856525,1123416]);
AfterSaleListResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleListRequest();
$param = new AfterSaleListParam();
$request->setParam($param);
$param->order_id = "4821845786203981633";
$param->aftersale_type = 1;
$param->aftersale_status = 2;
$param->reason = 1;
$param->logistics_status = 2;
$param->pay_type = 2;
$param->refund_type = 1;
$param->arbitrate_status = 0;
$param->order_flag = [1,2,3];
$param->start_time = 1626770133;
$param->end_time = 1626856525;
$param->amount_start = 300;
$param->amount_end = 1000;
$param->risk_flag = -1;
$param->order_by = ["status_deadline desc"];
$param->page = 0;
$param->size = 50;
$param->aftersale_id = "6987272148133888300";
$param->standard_aftersale_status = [6,7,11];
$param->need_special_type = true/false;
$param->update_start_time = 1626856525;
$param->update_end_time = 1626856525;
$param->order_logistics_tracking_no = ["SF12345678910"];
$param->order_logistics_state = [1,2,3,4];
$param->agree_refuse_sign = [1,2];
$param->aftersale_sub_type = 8001;
$param->aftersale_status_to_final_start_time = 1626856525;
$param->aftersale_status_to_final_end_time = 1626856525;
$param->store_id_list = [1626856525,1123416];
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleListRequest()
param = request.getParams()
param.order_id = "4821845786203981633"
param.aftersale_type = 1
param.aftersale_status = 2
param.reason = 1
param.logistics_status = 2
param.pay_type = 2
param.refund_type = 1
param.arbitrate_status = 0
param.order_flag = [1,2,3]
param.start_time = 1626770133
param.end_time = 1626856525
param.amount_start = 300
param.amount_end = 1000
param.risk_flag = -1
param.order_by = ["status_deadline desc"]
param.page = 0
param.size = 50
param.aftersale_id = "6987272148133888300"
param.standard_aftersale_status = [6,7,11]
param.need_special_type = true/false
param.update_start_time = 1626856525
param.update_end_time = 1626856525
param.order_logistics_tracking_no = ["SF12345678910"]
param.order_logistics_state = [1,2,3,4]
param.agree_refuse_sign = [1,2]
param.aftersale_sub_type = 8001
param.aftersale_status_to_final_start_time = 1626856525
param.aftersale_status_to_final_end_time = 1626856525
param.store_id_list = [1626856525,1123416]
response = request.execute(accessToken)

```

### go

```go
request := afterSale_List_request.New()
param := request.GetParams()
param.OrderId = "4821845786203981633"
param.AftersaleType = 1
param.AftersaleStatus = 2
param.Reason = 1
param.LogisticsStatus = 2
param.PayType = 2
param.RefundType = 1
param.ArbitrateStatus = 0
param.OrderFlag = [1,2,3]
param.StartTime = 1626770133
param.EndTime = 1626856525
param.AmountStart = 300
param.AmountEnd = 1000
param.RiskFlag = -1
param.OrderBy = ["status_deadline desc"]
param.Page = 0
param.Size = 50
param.AftersaleId = "6987272148133888300"
param.StandardAftersaleStatus = [6,7,11]
param.NeedSpecialType = true/false
param.UpdateStartTime = 1626856525
param.UpdateEndTime = 1626856525
param.OrderLogisticsTrackingNo = ["SF12345678910"]
param.OrderLogisticsState = [1,2,3,4]
param.AgreeRefuseSign = [1,2]
param.AftersaleSubType = 8001
param.AftersaleStatusToFinalStartTime = 1626856525
param.AftersaleStatusToFinalEndTime = 1626856525
param.StoreIdList = [1626856525,1123416]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleListRequest();
var param = request.BuildParam();
param.OrderId = "4821845786203981633";
param.AftersaleType = 1;
param.AftersaleStatus = 2;
param.Reason = 1;
param.LogisticsStatus = 2;
param.PayType = 2;
param.RefundType = 1;
param.ArbitrateStatus = 0;
param.OrderFlag = [1,2,3];
param.StartTime = 1626770133;
param.EndTime = 1626856525;
param.AmountStart = 300;
param.AmountEnd = 1000;
param.RiskFlag = -1;
param.OrderBy = ["status_deadline desc"];
param.Page = 0;
param.Size = 50;
param.AftersaleId = "6987272148133888300";
param.StandardAftersaleStatus = [6,7,11];
param.NeedSpecialType = true/false;
param.UpdateStartTime = 1626856525;
param.UpdateEndTime = 1626856525;
param.OrderLogisticsTrackingNo = ["SF12345678910"];
param.OrderLogisticsState = [1,2,3,4];
param.AgreeRefuseSign = [1,2];
param.AftersaleSubType = 8001;
param.AftersaleStatusToFinalStartTime = 1626856525;
param.AftersaleStatusToFinalEndTime = 1626856525;
param.StoreIdList = [1626856525,1123416];
var response = request.Execute<AfterSaleListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:11000 | 参数错误 | 请检查输入参数是否合法 |
| 20000 | 系统错误 | isp.service-error:10000 | 系统超时 | 请重试 |
| 20000 | 系统错误 | isp.service-error:10002 | 系统处理失败 | 请重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:11003 | 数据不存在 | 请检查输入参数是否合法 |
| 50002 | 业务处理失败 | isv.business-failed:12001 | 系统处理失败 | 请检查输入参数是否合法 |
| 50002 | 业务处理失败 | isv.business-failed:12000 | 未知错误 | 请辛苦联系平台排障 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
