# /afterSale/rejectReasonCodeList

> 中文说明：查询商家拒绝原因列表  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/1540>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/rejectReasonCodeList |
| 中文名称 | 查询商家拒绝原因列表 |
| 文档目录 | 售后退款API |
| Article ID | 1540 |
| 文档版本 | V4.07 |
| 官方更新时间 | 2022/9/7 16:45:39 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

使用场景：
1、不传aftersale_id查询抖店支持的全量拒绝原因列表
2、传aftersale_id，商家查询该笔售后单可选的拒绝原因列表，注意：仅支持已发货的售后查询，备货中未发货订单返回为空。
3、如返回为空,有如下场景：
1)该售后单已完结或已审核，处于非可拒绝状态。
2)系统查询超时，建议重试。
3)仅支持已发货的售后查询，备货中未发货订单返回为空。
注意：备货中未发货订单如需拒绝请使用物流发货接口拒绝即可。
常见问题：https://op.jinritemai.com/docs/question-docs/93/2823

## 权限包

- 售后 / 售后信息查询（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、跨境电商、客服绩效-微应用、售后管理、任务玩法、财务管理、直播话术-微应用、营销管理-互动小程序定制、营销管理-小程序定制、打单发货-微应用、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、品牌会员通、即时零售商家自研、直播工具、互动营销定制、短信营销、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单、智能外呼
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP
- 定向权限 / 定向权限包（packageType=1）
- 开放平台 / 盲盒互动（服务商）（packageType=1）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.rejectReasonCodeList | 调用的API接口名称 | - | - |
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
| 0 | aftersale_id | AftersaleID | false | 1 | 7140522277954699533 | 传入售后单id时，返回该笔售后单可选择的拒绝原因列表；仅支持已发货的售后查询，备货中未发货订单返回为空。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | items | Items | - | 3 | - | 售后商家拒绝原因详情列表 | - | R1 |
| 1 | items.reject_reason_code | RejectReasonCode | - | 1 | 1 | 售后审核拒绝原因枚举编码 | 56 | R1 |
| 1 | items.reason | Reason | - | 2 | 多拍/错拍/不想要 | 售后审核拒绝原因文案 | 56 | R1 |
| 1 | items.evidence_description | EvidenceDescription | - | 2 | 请提供发货物流进度截图 | 凭证描述文案 | 56 | R1 |
| 1 | items.evidence_need | EvidenceNeed | - | 2 | Y | 是否需要上传凭证，Y必填，N非必填 | 56 | R1 |
| 1 | items.image | Image | - | 2 | /obj/ecom-aftersale-image-example/vsfguUuWBsXzjgyexWJRoBUMVORQBnmvMQHBRFom.png | 凭证示例图片链接 | 56 | R1 |
| 1 | items.order_type | OrderType | - | 1 | 1 | 订单类型，即订单信息中order_type   枚举：0-普通实物订单 1-全款预售订单  2-虚拟商品订单 3-快闪店订单 4-电子券  5-三方核销 6-服务市场 -1-通用,不考虑订单类型 | 56 | R1 |
| 1 | items.pkg | Pkg | - | 1 | 1 | 是否收到货，0未收到 1收到 -1通用,不考虑是否收到货 | 56 | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/afterSale/rejectReasonCodeList?app_key=your_appkey_here&method=afterSale.rejectReasonCodeList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/afterSale/rejectReasonCodeList?app_key=your_appkey_here&method=afterSale.rejectReasonCodeList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AfterSaleRejectReasonCodeListRequest request = new AfterSaleRejectReasonCodeListRequest();
AfterSaleRejectReasonCodeListParam param = request.getParam();
param.setAftersaleId(7140522277954699533L);
AfterSaleRejectReasonCodeListResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleRejectReasonCodeListRequest();
$param = new AfterSaleRejectReasonCodeListParam();
$request->setParam($param);
$param->aftersale_id = 7140522277954699533;
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleRejectReasonCodeListRequest()
param = request.getParams()
param.aftersale_id = 7140522277954699533
response = request.execute(accessToken)

```

### go

```go
request := afterSale_rejectReasonCodeList_request.New()
param := request.GetParams()
param.AftersaleId = 7140522277954699533
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleRejectReasonCodeListRequest();
var param = request.BuildParam();
param.AftersaleId = 7140522277954699533;
var response = request.Execute<AfterSaleRejectReasonCodeListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10000 | 10000:系统错误，请重试 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
