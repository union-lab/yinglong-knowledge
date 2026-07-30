# /order/downloadShopAccountItemFile

> 中文说明：资金流水明细文件下载(境内)  
> 所属类别：账单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/46/1433>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/downloadShopAccountItemFile |
| 中文名称 | 资金流水明细文件下载(境内) |
| 文档目录 | 账单API |
| Article ID | 1433 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2025/6/27 11:32:45 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

1、通过download_id下载文件,download_id从【order/downloadShopAccountItem】接口获取
2、download_id有效期24小时
3、url链接时效为1小时
【应用维度限流（QPS）：20】

## 权限包

- 账单 / 资金流水明细（packageType=1）；适用应用类目：创新应用大赛_微应用、财务管理、打单发货-微应用、创新应用大赛_软件服务、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

无。

## 业务请求参数

无。

## 响应参数

无。

## 请求示例

无。

## 响应示例

无。

## 错误码

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。

> 内容 JSON 解析失败：SyntaxError: Bad control character in string literal in JSON at position 4279 (line 1 column 4280)

```json
{"request":{"publicParam":[{"requestName":"method","mustNeed":true,"type":2,"style":1,"example":"order.downloadShopAccountItemFile","description":"调用的API接口名称"},{"requestName":"app_key","mustNeed":true,"type":2,"style":1,"example":"6839996111118329223","description":"应用创建完成后被分配的key"},{"requestName":"access_token","mustNeed":true,"type":2,"style":1,"example":"edae7c30-8386-443b-88a1-031111596fdd","description":"用于调用 API 的 access_token","hiddenForInterfaceName":["/token/create"]},{"requestName":"param_json","mustNeed":true,"type":2,"style":1,"example":"{cid:12,page:1}","description":"标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表"},{"requestName":"timestamp","mustNeed":true,"type":2,"style":1,"example":"2020-09-15 14:48:13","description":"时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00"},{"requestName":"v","mustNeed":true,"type":2,"style":1,"example":"2","description":"API协议版本，当前版本为2"},{"requestName":"sign","mustNeed":true,"type":2,"style":1,"example":"796559d40beb08a1a1113c456c5c5a62","description":"输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23)"},{"requestName":"sign_method","mustNeed":false,"type":2,"style":1,"example":"hmac-sha256","description":"签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为'md5'）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串"}],"requestParam":[{"requestName":"download_id","toName":"download_id","mustNeed":true,"type":2,"style":1,"example":"DL202111041446472412450342","description":"下载id，有效期24小时；","cipherTextType":1}]},"response":{"constTableList":[{"tableName":"文件字段含义","tableHeader":["字段名称","字段含义"],"tableData":[["shop_id","店铺id"],["bill_time","动账时间"],["account_trade_no","动账流水号(唯一)"],["fund_flow","动账方向 0:入账 1:出账"],["fund_flow_desc","动账方向描述 出账、入账"],["account_amount","动账金额(元)"],["account_type","动账账户 1: 微信 2:支付宝 3:合众支付 4:聚合支付"],["account_type_desc","动账账户"],["account_bill_desc","动账摘要"],["account_bill_desc_tag","动账摘要 0：其他 1：达人带货佣金 2：达人佣金退款 3：订单结算 4：部分结算 5：运费单结算 6：服务费返还 7：平台补贴扣回 8：退款失败退票 9：结算重复扣款调账 10：保证金退款 11：提现 12：提现退票 13：极速退款分账 14：小额打款(原因:补差价) 15：小额打款(原因:其他) 16：小额打款(原因:商品补偿) 17：小额打款(原因:运费补偿) 18：小额打款退票 19：已退款 20：保费扣除（x笔保单扣费，明细详见保费扣除明细） 21：支付BIC服务费 22：BIC服务费退票 23: 原路退"],["biz_type","计费类型 0:全部 1:巨量千川 2:精选联盟 3:值点商城 4:小店自卖 5:橙子建站 6:POI 7:抖+ 8:穿山甲 9:服务市场 10:服务市场外包客服 11:学浪"],["biz_type_desc","计费类型描述"],["shop_order_id","店铺单号"],["order_id","订单号"],["after_sale_service_no","售后编号"],["business_order_create_time","下单时间"],["product_id","商品ID"],["order_type","订单类型 0：普通订单 1：定金(已退款) 2：定金(尾款已支付) 3：定金(尾款未支付) 4：尾款(尾款已支付) 5：尾款(已退款)"],["order_type_desc","订单类型描述"],["pay_amount","订单实付应结(元)"],["post_amount","运费(元)"],["promotion_amount","实际平台补贴(元)"],["author_coupon_subsidy","实际达人补贴(元)"],["actual_zt_pay_promotion","实际抖音支付补贴(元)"],["actual_zr_pay_promotion","实际DOU分期营销补贴(元)"],["refund_amount","订单退款(元)"],["platform_service_fee","平台服务费(元)"],["commission","佣金(元)"],["channel_fee","渠道分成(元)"],["colonel_service_fee","招商服务费(元)"],["channel_promotion_fee","直播间站外推广(元)"],["other_sharing_amount","其他分成金额(元)"],["trans_scene_tag","动账场景 枚举值对应含义请参考文档：https://bytedance.larkoffice.com/docx/FefRdbxoPoSUBYx4YHhc5a5rnrh"],["packing_amount","打包费"],["trans_scene","动账场景"],["remark","备注"],["free_commission_flag","是否免佣,枚举值为是/否或为空"],["real_free_commission_amount","免佣金额（元）"],["recycler_amount","以旧换新抵扣(元)"],["bank_pay_promotion_amount","银行补贴(元)"],["post_promotion_amount","平台补贴运费(元)"],["partner_commission_amount","服务商佣金(元)"],["gov_promotion_amount","政府补贴平台垫资(元)"],["product_name","商品名称"],["author_id","达人id"],["author_name","达人名称"],["other_platform_promotion_amount","其他平台补贴(元)"]]}],"responseData":[{"responseName":"url","fromName":"url","type":2,"example":"https://lf9-tos-bill-center-sign.bytetos.com/ecom-paysettleinfo/data/download/item/DL202111041446472412450342.csv?x-expires=1636012061\u0026x-signature=yz1M9N%2BXGMtBXyMFT9O75buK26w%3D","description":"文件url，链接时效为1小时","securityLevel":"R1"}]},"demo":{"requestDemo":{"curl":{"reqUrl":"https://openapi-fxg.jinritemai.com/order/downloadShopAccountItemFile?app_key=your_appkey_here\u0026method=order.downloadShopAccountItemFile\u0026access_token=your_accesstoken_here\u0026param_json={}\u0026timestamp=2018-06-19%2016:06:59\u0026v=2\u0026sign=your_sign_here"},"java":{"code":"OrderDownloadShopAccountItemFileRequest request = new OrderDownloadShopAccountItemFileRequest();
OrderDownloadShopAccountItemFileParam param = request.getParam();
param.setDownloadId('DL202111041446472412450342');
OrderDownloadShopAccountItemFileResponse response = request.execute(accessToken);
"},"php":{"code":"$request = new OrderDownloadShopAccountItemFileRequest();
$param = new OrderDownloadShopAccountItemFileParam();
$request-\u003esetParam($param);
$param-\u003edownload_id = 'DL202111041446472412450342';
$response = $request-\u003eexecute(accessToken);
"},"python":{"code":"request = OrderDownloadShopAccountItemFileRequest()
param = request.getParams()
param.download_id = 'DL202111041446472412450342'
response = request.execute(accessToken)
"},"go":{"code":"request := order_downloadShopAccountItemFile_request.New()
param := request.GetParams()
param.DownloadId = 'DL202111041446472412450342'
response := request.Execute(accessToken)
"},"dotNetCore":{"code":"var request = new OrderDownloadShopAccountItemFileRequest();
var param = request.BuildParam();
param.DownloadId = 'DL202111041446472412450342';
var response = request.Execute\u003cOrderDownloadShopAccountItemFileResponse\u003e(accessToken);
"},"js":{}},"responseDemo":{"responseSuccess":{"data":{"url":"https://lf9-tos-bill-center-sign.bytetos.com/ecom-paysettleinfo/data/download/item/DL202111041446472412450342.csv?x-expires=1636012061\u0026x-signature=yz1M9N%2BXGMtBXyMFT9O75buK26w%3D"},"code":10000,"msg":"success","sub_code":"","sub_msg":""},"responseError":{"sub_code":"","sub_msg":""}}},"error":{"errCodeList":[{"msg":"success","code":10000},{"msg":"非法的参数","code":40004,"subMsg":"下载记录不存在","subCode":"isv.parameter-invalid:100002","solution":"重新生成download_id去下载文件"},{"msg":"业务处理失败","code":50002,"subMsg":"文件还未生成","subCode":"isv.business-failed:100015","solution":"等待文件生成完成"},{"msg":"业务处理失败","code":50002,"subMsg":"下载文件失败","subCode":"isv.business-failed:100025","solution":"重新下载"},{"msg":"非法的参数","code":40004,"subMsg":"文件已经失效","subCode":"isv.parameter-invalid:100016","solution":"重新生成download_id去下载文件"}]}}
```

