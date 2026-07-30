# /order/invoiceList

> 中文说明：查看商家开票列表  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1842>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/invoiceList |
| 中文名称 | 查看商家开票列表 |
| 文档目录 | 订单API |
| Article ID | 1842 |
| 文档版本 | V1.05 |
| 官方更新时间 | 2026/3/18 15:29:41 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1600 |

## 使用说明

查看商家开票列表
查看商家开票列表，支持订单号、开票状态、订单状态、开票申请创建开始时间、开票申请创建结束时间筛选

## 权限包

- 账单 / 电子发票（packageType=1）；适用应用类目：创新应用大赛_微应用、售后管理、企业财税服务、创新应用大赛_软件服务、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.invoiceList | 调用的API接口名称 | - | - |
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
| 0 | order_id | OrderId | false | 2 | 4718699311644951110 | 父订单ID | - | - |
| 0 | order_status | OrderStatus | false | 2 | 3,5 | 订单状态，逗号分割 | - | - |
| 0 | start_time | StartTime | false | 1 | 1625638841 | 申请创建开始时间，时间戳，秒 | - | - |
| 0 | end_time | EndTime | false | 1 | 1625638841 | 申请创建结束时间，时间戳，秒 | - | - |
| 0 | status | status | false | 7 | 1 | 开票状态：1待开票、2已开票、3已关闭 | - | - |
| 0 | page_no | PageNo | false | 7 | 0 | 页数（默认为0，第一页从0开始），page_no* page_size不超过1万 | - | - |
| 0 | page_size | PageSize | false | 7 | 20 | 请求每页返回的数量，默认20，最多50 | - | - |
| 0 | order_by | OrderBy | false | 2 | asc | 默认排序规则为desc； 排序方式支持asc/desc | - | - |
| 0 | order_field | OrderField | false | 2 | create_time | 排序规则： 创建时间排序create_time，不传默认创建时间 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | invoice_list | InvoiceList | - | 3 | - | 发票信息清单 | - | R1 |
| 1 | invoice_list.invoice_sub_status | InvoiceSubStatus | - | 7 | 200 | 开票子状态：200 已开票；201  待红冲；202  已红冲待开票；203  红冲后已开票；204  红冲后已完成;205 用户撤销开票 | - | - |
| 1 | invoice_list.latest_invoice_time | LatestInvoiceTime | - | 1 | 123455 | 最晚开票时间，单位: 秒 | - | - |
| 1 | invoice_list.apply_scene | ApplyScene | - | 1 | 2 | 2-政府补贴订单 | - | - |
| 1 | invoice_list.invoice_file_list | InvoiceFileList | - | 3 | - | 发票文件列表 | - | R1 |
| 2 | invoice_list.invoice_file_list.file_name | FileName | - | 2 | 123.OFD | 发票文件名称 | - | - |
| 2 | invoice_list.invoice_file_list.tos_url | Url | - | 2 | https://lf26-ecom-shop-sign.bytetos.com/ecom-shop-order-invoice/21084d0102dc458be261deebb2f2064b?x-expires=1625495766&x-signature=a8QxsaOnBkSSeVEe%2Brv45NmB%2B%2BU%3D | 发票文件链接 | - | - |
| 1 | invoice_list.invoice_detail_extra | InvocieDetailExtra | - | 5 | - | 开票明细额外信息 | - | R1 |
| 2 | invoice_list.invoice_detail_extra.none_government_subsidy_backdoor_order | NoneGovernmentSubsidyBackDoorOrder | - | 4 | true | 是否是自营借壳订单(国补);<br>无该字段表示不是自营借壳订单 | - | - |
| 2 | invoice_list.invoice_detail_extra.government_subsidy_backdoor_order | GovernmentSubsidyBackDoorOrder | - | 4 | true | 是否是自营借壳订单(非国补)；<br>无该字段表示不是自营借壳订单 | - | - |
| 2 | invoice_list.invoice_detail_extra.urge_invoice | UrgeInvoice | - | 2 | "1" | 是否催开票 | - | - |
| 2 | invoice_list.invoice_detail_extra.government_subsidy_major_category_name | GovernmentSubsidyMajorCategoryName | - | 2 | 家装厨卫 | 补贴类目 | - | - |
| 2 | invoice_list.invoice_detail_extra.government_subsidy_area_name | GovernmentSubsidyAreaName | - | 2 | 浙江宁波 | 补贴地区名称 | - | - |
| 2 | invoice_list.invoice_detail_extra.government_subsidy_item_name | GovernmentSubsidyItemName | - | 2 | 洗衣机 | 建议项目名称 | - | - |
| 2 | invoice_list.invoice_detail_extra.government_subsidy_invoice_remark | GovernmentSubsidyInvoiceRemark | - | 2 | 订单号：6941940048635500445；购机日期：2025.04.27；手机号：19821877291；69码：6922122913683；政府补贴金额0.06元；SN码：mockflow | 建议发票备注 | - | - |
| 2 | invoice_list.invoice_detail_extra.payment_no | PaymentNo | - | 2 | 12345678910 | 交易流水号 | - | - |
| 2 | invoice_list.invoice_detail_extra.post_receiver_info | GovernmentSubsidyPostReceiver | - | 5 | - | 收件人信息 | - | R1 |
| 3 | invoice_list.invoice_detail_extra.post_receiver_info.post_addr_text | PostAddrText | - | 2 | 安徽省安庆市安阳区安阳街道4 号楼 5 单元 | 收件人地址 | - | - |
| 3 | invoice_list.invoice_detail_extra.post_receiver_info.buyer_mobile | BuyerMobile | - | 2 | 12345678910 | 购买人手机号 | - | - |
| 2 | invoice_list.invoice_detail_extra.refund_amount | RealRefundAmount | - | 1 | 100 | 订单退款成功金额，单位：分 | - | - |
| 2 | invoice_list.invoice_detail_extra.actual_pay_amount | ActualPayAmount | - | 1 | 100 | 订单实付金额，单位：分 | - | - |
| 2 | invoice_list.invoice_detail_extra.gov_subsidy_city_code | GovernmentSubsidyCityCode | - | 2 | government_subsidy_bj_bj | 补贴的城市信息；<br>government_subsidy_bj_bj  北京补贴 | - | - |
| 2 | invoice_list.invoice_detail_extra.gov_subsidy_uninvoice_amount | GovSubsidyUnInvoiceAmount | - | 2 | 100 | 政府补贴订单未开票金额；单位：分 | - | - |
| 2 | invoice_list.invoice_detail_extra.recycle_credit_deduction_amount | RecycleCreditDeductionAmount | - | 1 | 100 | 以旧换新-信用抵扣金额；单位：分 | - | - |
| 2 | invoice_list.invoice_detail_extra.post_amount | PostAmount | - | 1 | 600 | 运费开票金额 | - | - |
| 1 | invoice_list.registation_id | RegistationId | - | 2 | 6981804344242176269 | 开票id | - | R1 |
| 1 | invoice_list.shop_id | ShopId | - | 1 | 77977 | 店铺id | - | R1 |
| 1 | invoice_list.shop_order_id | ShopOrderId | - | 2 | 4816720996870743609 | 主订单号 | - | R1 |
| 1 | invoice_list.invoice_type | InvoiceType | - | 7 | 1 | 发票种类 <br>1-增值税普通电子<br>2-数电（普通发票）<br>3-增值税专用发票<br>4-数电（专用发票） | - | R1 |
| 1 | invoice_list.apply_time | ApplyTime | - | 1 | 1625638841 | 开票申请创建时间 | - | R1 |
| 1 | invoice_list.invoice_status_type | InvoiceStatusType | - | 7 | 1 | 发票类型 1-蓝票 | - | R1 |
| 1 | invoice_list.title_type | TitleType | - | 7 | 1 | 抬头类型 1-个人；2-企业；3-数电发票-个人；4-数电发票-事业单位 | - | R1 |
| 1 | invoice_list.title | Title | - | 2 | 法国发四十分 | 抬头 | - | R1 |
| 1 | invoice_list.tax_no | TaxNo | - | 2 | 11752825826826826 | 税号 | - | R1 |
| 1 | invoice_list.bank_name | BankName | - | 2 | 中国银行 | 开户银行 | - | R1 |
| 1 | invoice_list.bank_no | BankNo | - | 2 | 338923123627 | 银行编号 | - | R1 |
| 1 | invoice_list.company_address | CompanyAddress | - | 2 | 北京市平谷区林荫北街13号12幢 | 企业地址 | - | R1 |
| 1 | invoice_list.company_mobile | CompanyMobile | - | 2 | 010-58323810 | 企业电话 | - | R1 |
| 1 | invoice_list.invoice_amount | InvoiceAmount | - | 1 | 10000 | 可开票金额，单位分 | - | R1 |
| 1 | invoice_list.invoice_detail | InvoiceDetail | - | 2 | {"4817040770060371513":{"ProductId":3490890566424762040,"ProductCount":1,"ProductName":"一单多品测试 人字拖","ProductPrice":1,"SkuSpecs":[{"Name":"尺码-欧码","Value":"1"}],"SkuCode":""}} | 开票详情 | - | R1 |
| 1 | invoice_list.invoice_status | InvoiceStatus | - | 7 | 2 | 开票状态 1待开票 2开票完成 3已关闭 | - | R1 |
| 1 | invoice_list.order_status | OrderStatus | - | 7 | 2 | 订单状态 | - | R1 |
| 1 | invoice_list.end_reason | EndReason | - | 7 | 1 | 关闭原因枚举 1退款完成 | - | R1 |
| 1 | invoice_list.tos_url | TosUrl | - | 2 | https://lf26-ecom-shop-sign.bytetos.com/ecom-shop-order-invoice/21084d0102dc458be261deebb2f2064b?x-expires=1625495766&x-signature=a8QxsaOnBkSSeVEe%2Brv45NmB%2B%2BU%3D | 发票url，2小时失效 | - | R1 |
| 1 | invoice_list.file_name | FileName | - | 2 | 发票.pdf | 发票文件名称 | - | R1 |
| 1 | invoice_list.upload_time | UploadTime | - | 1 | 1625638841 | 首次发票上传时间 | - | R1 |
| 1 | invoice_list.end_time | EndTime | - | 1 | 1625638841 | 关闭时间 | - | R1 |
| 1 | invoice_list.latest_upload_time | LatestUploadTime | - | 1 | 1625638841 | 最新发票上传时间 | - | R1 |
| 0 | total | Total | - | 1 | 10 | 总数 | - | R1 |

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
OrderInvoiceListRequest request = new OrderInvoiceListRequest();
OrderInvoiceListParam param = request.getParam();
param.setOrderId("4718699311644951110");
param.setOrderStatus("3,5");
param.setStartTime(1625638841L);
param.setEndTime(1625638841L);
param.setStatus(1);
param.setPageNo(0);
param.setPageSize(20);
param.setOrderBy("asc");
param.setOrderField("create_time");
OrderInvoiceListResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderInvoiceListRequest();
$param = new OrderInvoiceListParam();
$request->setParam($param);
$param->order_id = "4718699311644951110";
$param->order_status = "3,5";
$param->start_time = 1625638841;
$param->end_time = 1625638841;
$param->status = 1;
$param->page_no = 0;
$param->page_size = 20;
$param->order_by = "asc";
$param->order_field = "create_time";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderInvoiceListRequest()
param = request.getParams()
param.order_id = "4718699311644951110"
param.order_status = "3,5"
param.start_time = 1625638841
param.end_time = 1625638841
param.status = 1
param.page_no = 0
param.page_size = 20
param.order_by = "asc"
param.order_field = "create_time"
response = request.execute(accessToken)

```

### go

```go
request := order_invoiceList_request.New()
param := request.GetParams()
param.OrderId = "4718699311644951110"
param.OrderStatus = "3,5"
param.StartTime = 1625638841
param.EndTime = 1625638841
param.Status = 1
param.PageNo = 0
param.PageSize = 20
param.OrderBy = "asc"
param.OrderField = "create_time"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderInvoiceListRequest();
var param = request.BuildParam();
param.OrderId = "4718699311644951110";
param.OrderStatus = "3,5";
param.StartTime = 1625638841;
param.EndTime = 1625638841;
param.Status = 1;
param.PageNo = 0;
param.PageSize = 20;
param.OrderBy = "asc";
param.OrderField = "create_time";
var response = request.Execute<OrderInvoiceListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:8888 | 8888：系统繁忙，请稍后重试 | 稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:10009 | 10009：PageSize 超过 100 | PageSize设置为50 |
| 50002 | 业务处理失败 | isv.business-failed:40007 | 40007：批量获取政府补贴订单发票规则信息失败 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10049 | 10049: 开始时间错误 | 修改开始时间 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
