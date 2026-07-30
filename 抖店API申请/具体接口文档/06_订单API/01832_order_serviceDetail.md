# /order/serviceDetail

> 中文说明：商家服务单详情  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1832>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/serviceDetail |
| 中文名称 | 商家服务单详情 |
| 文档目录 | 订单API |
| Article ID | 1832 |
| 文档版本 | V1.05 |
| 官方更新时间 | 2024/7/9 15:49:40 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 480 |

## 使用说明

商家服务单详情

## 权限包

- 订单 / 商家服务单管理（packageType=1）；适用应用类目：卡券商工具、售后管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、电商ERP
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.serviceDetail | 调用的API接口名称 | - | - |
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
| 0 | service_id | ServiceId | true | 1 | 123 | 服务请求列表中获取的id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | detail | OrderService | - | 5 | - | 详情 | - | R1 |
| 1 | detail.id | ServiceId | - | 1 | 1 | 服务请求ID | - | - |
| 1 | detail.order_id | OrderId | - | 1 | 121232233232323232 | 订单号 | - | - |
| 1 | detail.operate_status | ServiceStatus | - | 7 | 10 | 操作状态，增加审核中状态码；枚举：0-待处理,5-用户确认中,10-平台介入中,100-已完结 | - | - |
| 1 | detail.detail | Detail | - | 2 | 阿迪锅还是个打瞌睡肯德基萨德好久撒1 | 服务单详情 | - | - |
| 1 | detail.reply | ReplyDetail | - | 2 | 283883 | 商家答复内容 | - | - |
| 1 | detail.create_time | CreateTimeStr | - | 2 | 2020-11-24 17:57:51 | 服务单创建时间 | - | - |
| 1 | detail.service_type | ServiceType | - | 1 | 3 | 服务单类型，1-退款;<br>2-换货;<br>3-售后服务;<br>4-协商退款;<br>5-商品相关;<br>6-商家服务问题;<br>7-卡券类产品预约/使用问题;<br>8-快递问题;<br>9-风险商品;<br>10-二次投诉;<br>11-订单操作;<br>12-发货及物流问题;<br>13-价格相关;<br>16-商家问题;;<br>17-其他;<br>18-活动相关;<br>30-价格问题;<br>31-催促发货;<br>32-内容宣传;<br>33-发票问题;<br>34-售后处理;<br>35-商家服务;<br>36-安装维修;<br>37-快递配送;<br>38-投诉事件;<br>39-活动优惠;<br>40-订单问题;<br>41-货到付款;<br>42-运费问题;<br>43-高危风险;<br>45-发货问题;<br>46-催促物流;<br>47-商家托管;<br>48-已投诉至监管部门; | - | - |
| 1 | detail.reply_time | ReplyTimeStr | - | 2 | 2020-11-26 14:10:53 | 最新回复时间 | - | - |
| 1 | detail.operate_status_desc | ServiceStatusDesc | - | 2 | 审核中 | 操作状态含义，增加审核中状态 | - | - |
| 1 | detail.shop_id | ShopId | - | 1 | 1122 | 店铺id | - | - |
| 1 | detail.is_reject | IsReject | - | 1 | 0 | 是否为被审核驳回的服务单 | - | - |
| 1 | detail.reject_detail | RejectDetail | - | 2 | 驳回内容 | 驳回内容 | - | - |
| 1 | detail.reject_time | RejectTimeStr | - | 2 | 2020-11-26 14:10:53 | 驳回时间 | - | - |
| 1 | detail.proof_demo | ProofDemo | - | 2 | 凭证demo url | 凭证demo url | - | - |
| 1 | detail.evidence_required | MustProof | - | 1 | 0 | 是否必须上传凭证 | - | - |
| 1 | detail.img_list | ImgList | - | 3 | [] | 图片url 数组json | - | R1 |
| 1 | detail.expiration_time | DelayEndTimeStr | - | 2 | 2020-11-25 17:57:51 | 超时时间 | - | - |
| 1 | detail.close_time | CloseTimeStr | - | 2 | 2020-11-25 17:57:51 | 关闭时间 | - | - |
| 1 | detail.close_detail | CloseDetail | - | 2 | 关闭原因 | 关闭原因 | - | - |
| 1 | detail.first_reply_time | FirstReplyTimeStr | - | 2 | 2020-11-26 14:10:53 | 首次回复时间 | - | - |
| 1 | detail.update_time | UpdateTimeStr | - | 2 | 2020-11-26 14:10:53 | 服务单更新时间时间 | - | - |
| 0 | logs | OrderServiceLogs | - | 3 | - | 日志 | - | R1 |
| 1 | logs.create_time | CreateTime | - | 1 | 1677824068 | 创建时间 | - | - |
| 1 | logs.content | Content | - | 2 | 关联订单号：4733127198026678040\n服务单类型:售后服务\n服务说明:阿迪锅还是个打瞌睡肯德基萨德好久撒1\n商家处理时长:24小时 | 内容 | - | - |
| 1 | logs.img_list | ImgList | - | 3 | [] | 图片列表 | - | R1 |
| 1 | logs.service_log_type | ServiceLogType | - | 7 | 1 | 日志类型 | - | - |
| 1 | logs.operate_name | OperateName | - | 2 | 平台客服 | 平台客服 | - | - |
| 1 | logs.service_detail | ServiceDetail | - | 2 | 服务详情 | 服务详情 | - | - |
| 1 | logs.reply_detail | ReplyDetail | - | 2 | 283883 | 回复内容 | - | - |
| 1 | logs.close_detail | CloseDetail | - | 2 | 关闭原因 | 关闭原因 | - | - |
| 1 | logs.reject_detail | RejectDetail | - | 2 | 驳回内容 | 驳回内容 | - | - |
| 1 | logs.deal_time | DealTime | - | 2 | 24小时 | 24小时 | - | - |

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
OrderServiceDetailRequest request = new OrderServiceDetailRequest();
OrderServiceDetailParam param = request.getParam();
param.setServiceId(123L);
OrderServiceDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderServiceDetailRequest();
$param = new OrderServiceDetailParam();
$request->setParam($param);
$param->service_id = 123;
$response = $request->execute(accessToken);

```

### python

```python
request = OrderServiceDetailRequest()
param = request.getParams()
param.service_id = 123
response = request.execute(accessToken)

```

### go

```go
request := order_serviceDetail_request.New()
param := request.GetParams()
param.ServiceId = 123
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderServiceDetailRequest();
var param = request.BuildParam();
param.ServiceId = 123;
var response = request.Execute<OrderServiceDetailResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10004 | 10004:无权限 | 10004:无权限 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
