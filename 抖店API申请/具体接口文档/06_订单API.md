# 订单API 具体接口索引

> 官方目录：<https://op.jinritemai.com/docs/api-docs/15/1343>  
> 本地归档日期：2026-07-14  
> 当前目录可见接口：37 个。

| 序号 | 接口路径 | 中文说明 | 版本 | 官方更新时间 | 本地文档 | 官方文档 |
|---:|---|---|---|---|---|---|
| 1 | /order/orderDetail | 订单详情查询 | V30.01 | 2026/6/30 | [查看](./06_订单API/01343_order_orderDetail.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1343) |
| 2 | /order/searchList | 订单列表查询 | V23.01 | 2026/5/28 | [查看](./06_订单API/01342_order_searchList.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1342) |
| 3 | /order/invoiceList | 查看商家开票列表 | V1.05 | 2026/3/18 | [查看](./06_订单API/01842_order_invoiceList.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1842) |
| 4 | /coupons/SendCodeByPlatform | 商家接单（触发平台发码） | V2.01 | 2025/9/11 | [查看](./06_订单API/07110_coupons_SendCodeByPlatform.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/7110) |
| 5 | /order/batchBindSerialNumber | 上传序列号 | V1.01 | 2025/3/27 | [查看](./06_订单API/07383_order_batchBindSerialNumber.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/7383) |
| 6 | /address/delAftersaleAddress | 删除商家地址库单条地址。 | V1.01 | 2025/3/3 | [查看](./06_订单API/07024_address_delAftersaleAddress.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/7024) |
| 7 | /order/addOrderRemark | 为商家提供订单备注接口 | V3.01 | 2024/8/15 | [查看](./06_订单API/00568_order_addOrderRemark.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/568) |
| 8 | /order/addressModify | 用于卖家和买家沟通后，主动帮买家修改收货信息 | V1.06 | 2024/7/31 | [查看](./06_订单API/00290_order_addressModify.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/290) |
| 9 | /order/serviceDetail | 商家服务单详情 | V1.05 | 2024/7/9 | [查看](./06_订单API/01832_order_serviceDetail.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1832) |
| 10 | /order/AddressAppliedSwitch | 支持调用后打开（或关闭）卖家针对买家收货地址变更的审核流程 | V2.01 | 2024/6/24 | [查看](./06_订单API/00500_order_AddressAppliedSwitch.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/500) |
| 11 | /order/addressConfirm | 买家地址变更确认 | V1.02 | 2024/6/24 | [查看](./06_订单API/01836_order_addressConfirm.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1836) |
| 12 | /order/review | 商家回传订单审核结果 | V1.05 | 2024/6/12 | [查看](./06_订单API/01785_order_review.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1785) |
| 13 | /order/batchDecrypt | 批量解密接口 | V6.15 | 2023/12/25 | [查看](./06_订单API/00982_order_batchDecrypt.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/982) |
| 14 | /order/merge | 合单校验接口 | V1.04 | 2023/6/15 | [查看](./06_订单API/04042_order_merge.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/4042) |
| 15 | /order/batchEncrypt | 批量加密接口 | V4.01 | 2023/6/14 | [查看](./06_订单API/00487_order_batchEncrypt.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/487) |
| 16 | /order/searchByReceiver | 根据收件人姓名、手机号查询订单 | V1.01 | 2023/5/26 | [查看](./06_订单API/03615_order_searchByReceiver.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/3615) |
| 17 | /trace/batchRecord | 订单链路监控批量回传轨迹信息 | V1.03 | 2022/12/19 | [查看](./06_订单API/02797_trace_batchRecord.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/2797) |
| 18 | /trace/checkShop | 订单链路监控检查用户是否开通 | V1.02 | 2022/12/13 | [查看](./06_订单API/02795_trace_checkShop.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/2795) |
| 19 | /trace/cancelShop | 订单链路监控删除用户 | V1.01 | 2022/12/13 | [查看](./06_订单API/02793_trace_cancelShop.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/2793) |
| 20 | /trace/addShop | 订单链路监控添加用户 | V1.01 | 2022/12/13 | [查看](./06_订单API/02794_trace_addShop.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/2794) |
| 21 | /logistics/virtualServicePushCallRecord | 虚拟号服务商通话记录回传 | V1.01 | 2022/11/14 | [查看](./06_订单API/02735_logistics_virtualServicePushCallRecord.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/2735) |
| 22 | /order/getServiceList | 获取服务单列表 | V1.05 | 2022/11/14 | [查看](./06_订单API/01835_order_getServiceList.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1835) |
| 23 | /order/replyService | 回复服务请求 | V6.01 | 2022/11/14 | [查看](./06_订单API/01917_order_replyService.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1917) |
| 24 | /order/batchSensitive | 批量脱敏接口 | V2.03 | 2021/7/14 | [查看](./06_订单API/00508_order_batchSensitive.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/508) |
| 25 | /order/invoiceUpload | 订单发票上传 | - | 2025/12/10 | [查看](./06_订单API/00892_order_invoiceUpload.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/892) |
| 26 | /order/addSerialNumber | 订单商品的序列号上传 | V3.02 | 2021/9/27 | [查看](./06_订单API/01289_order_addSerialNumber.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1289) |
| 27 | /order/ordeReportList | 明文手机号报备接口 | V2.04 | 2021/12/20 | [查看](./06_订单API/01550_order_ordeReportList.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1550) |
| 28 | /order/getUserOrderList | 按用户id查询订单简要信息 | V2.02 | 2022/5/12 | [查看](./06_订单API/01915_order_getUserOrderList.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1915) |
| 29 | /antispam/orderQuery | 用户在ISV查看订单、下载订单时, 上报事件到风控系统 | V1.02 | 2021/7/5 | [查看](./06_订单API/01841_antispam_orderQuery.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1841) |
| 30 | /antispam/orderSend | 支持使用在ISV系统商户发送（外部系统或模块，如快递平台）场景 | V1.02 | 2021/7/5 | [查看](./06_订单API/01840_antispam_orderSend.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1840) |
| 31 | /order/getCrossBorderFulfillInfo | 获取跨境承运单信息 | V1.01 | 2021/6/9 | [查看](./06_订单API/01837_order_getCrossBorderFulfillInfo.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1837) |
| 32 | /order/addresSwitchConfig | 获取App对于商家订单修改地址的审核权限 | V1.02 | 2021/5/12 | [查看](./06_订单API/01838_order_addresSwitchConfig.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/1838) |
| 33 | /bigCustomer/queryCounting | 查询统计销量结果 | V1.01 | 2025/7/31 | [查看](./06_订单API/07650_bigCustomer_queryCounting.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/7650) |
| 34 | /coupons/CertSyncFailedCancelOrder | 商家主动取消 | V1.03 | 2024/7/2 | [查看](./06_订单API/06662_coupons_CertSyncFailedCancelOrder.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/6662) |
| 35 | /order/mergeV2 | 合单校验接口 | V1.01 | 2024/6/21 | [查看](./06_订单API/06649_order_mergeV2.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/6649) |
| 36 | /order/orderCancel | 商家取消待支付订单 | V1.01 | 2023/3/30 | [查看](./06_订单API/03381_order_orderCancel.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/3381) |
| 37 | /logistics/virtualServicePushSms | 短信回传 | V1.01 | 2022/10/31 | [查看](./06_订单API/02676_logistics_virtualServicePushSms.md) | [官方](https://op.jinritemai.com/docs/api-docs/15/2676) |
