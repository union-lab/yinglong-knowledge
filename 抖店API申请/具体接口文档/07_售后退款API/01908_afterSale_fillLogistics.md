# /afterSale/fillLogistics

> 中文说明：售后商家填写物流信息  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/1908>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /afterSale/fillLogistics |
| 中文名称 | 售后商家填写物流信息 |
| 文档目录 | 售后退款API |
| Article ID | 1908 |
| 文档版本 | V3.05 |
| 官方更新时间 | 2024/3/22 13:52:14 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

适用场景：
send_type=1：用于补寄商家发货
send_type=3：超市预约上门取货；退货退款和换货场景下商家帮买家填写退货物流信息；
send_type=4：维修场景下商家帮买家填写退货物流信息；

## 权限包

- 售后 / 售后管理（packageType=1）；适用应用类目：卡券商工具、精选货源-微应用、创新应用大赛_微应用、COD服务、跨境供应链服务、售后管理、创新应用大赛_软件服务、教育服务、商家后台系统、即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、订单管理、商品供应链、电商ERP
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | afterSale.fillLogistics | 调用的API接口名称 | - | - |
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
| 0 | aftersale_id | AftersaleID | true | 0 | 7085126861562380588 | 售后单ID | - | - |
| 0 | send_type | sendType | true | 99 | 1 | 发货类型；适用场景： send_type=1：用于补寄商家发货 send_type=3：超市预约上门取货；退货退款和换货场景下商家帮买家填写退货物流信息； send_type=4：维修场景下商家帮买家填写退货物流信息； | - | - |
| 0 | company_code | CompanyCode | true | 2 | yuantong | 物流公司编号<br>pick_up_type 2:线下取货;3:用户退回，无需物流公司，可传 - | - | - |
| 0 | tracking_no | TrackingNo | true | 2 | YT1231231231 | 物流单号<br>pick_up_type 2:线下取货;3:用户退回，无需快递单号，可传 - | - | - |
| 0 | book_time_begin | BookTimeBegin | false | 99 | 1655955000 | 预约上门取货时间戳，单位：秒（目前抖超小时达店铺使用） | - | - |
| 0 | book_time_end | BookTimeEnd | false | 99 | 1655955600 | 预约上门取货时间戳，单位：秒（目前抖超小时达店铺使用） | - | - |
| 0 | store_id | StoreID | false | 0 | 门店ID | 门店ID | - | - |
| 0 | pick_up_type | PickUpType | false | 99 | 1 | 1:自行配送;2:线下取货;3:用户退回 ，不传默认自行配送；适用于send_type=3超市预约上门取货场景 | - | - |

## 响应参数

无。

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
AfterSaleFillLogisticsRequest request = new AfterSaleFillLogisticsRequest();
AfterSaleFillLogisticsParam param = request.getParam();
param.setAftersaleId(7085126861562380588L);
param.setSendType(1);
param.setCompanyCode("yuantong");
param.setTrackingNo("YT1231231231");
param.setBookTimeBegin(1655955000L);
param.setBookTimeEnd(1655955600L);
param.setStoreId(门店IDL);
param.setPickUpType(1);
AfterSaleFillLogisticsResponse response = request.execute(accessToken);

```

### php

```php
$request = new AfterSaleFillLogisticsRequest();
$param = new AfterSaleFillLogisticsParam();
$request->setParam($param);
$param->aftersale_id = 7085126861562380588;
$param->send_type = 1;
$param->company_code = "yuantong";
$param->tracking_no = "YT1231231231";
$param->book_time_begin = 1655955000;
$param->book_time_end = 1655955600;
$param->store_id = 门店ID;
$param->pick_up_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = AfterSaleFillLogisticsRequest()
param = request.getParams()
param.aftersale_id = 7085126861562380588
param.send_type = 1
param.company_code = "yuantong"
param.tracking_no = "YT1231231231"
param.book_time_begin = 1655955000
param.book_time_end = 1655955600
param.store_id = 门店ID
param.pick_up_type = 1
response = request.execute(accessToken)

```

### go

```go
request := afterSale_fillLogistics_request.New()
param := request.GetParams()
param.AftersaleId = 7085126861562380588
param.SendType = 1
param.CompanyCode = "yuantong"
param.TrackingNo = "YT1231231231"
param.BookTimeBegin = 1655955000
param.BookTimeEnd = 1655955600
param.StoreId = 门店ID
param.PickUpType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AfterSaleFillLogisticsRequest();
var param = request.BuildParam();
param.AftersaleId = 7085126861562380588;
param.SendType = 1;
param.CompanyCode = "yuantong";
param.TrackingNo = "YT1231231231";
param.BookTimeBegin = 1655955000;
param.BookTimeEnd = 1655955600;
param.StoreId = 门店ID;
param.PickUpType = 1;
var response = request.Execute<AfterSaleFillLogisticsResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:12000 | 12000:物流信息校验失败 | 填入有效物流信息 |
| 50002 | 业务处理失败 | isv.business-failed:602001 | 物流信息校验失败 | 填入有效物流信息 |
| 20000 | 系统错误 | isp.service-error:10000 | 网络异常稍后重试 | 重试 |
| 20000 | 系统错误 | isp.service-error:10002 | 网络异常稍后重试 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:50002 | 物流信息校验失败 | 填入有效物流信息 |
| 50002 | 业务处理失败 | isv.business-failed:11000 | 无效售后单 | 请检查售后单信息 |
| 50002 | 业务处理失败 | isv.business-failed:12001 | 12001:物流信息校验失败 | 检查物流信息，物流单号、地址等 |
| 50002 | 业务处理失败 | isv.business-failed:19009 | 19009:当前不支持此物流方式 | 请确认售后原因，用户责任场景才能发起到店退货；线下取货目前处于内测阶段，想要试用请联系抖音运营 |
| 50002 | 业务处理失败 | isv.business-failed:19001 | 19001:请求参数错误 | 19001:请求参数错误 |
| 50002 | 业务处理失败 | isv.business-failed:19002 | 19002:服务错误 | 19002:服务错误 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
