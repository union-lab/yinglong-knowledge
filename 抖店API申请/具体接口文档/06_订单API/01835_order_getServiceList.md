# /order/getServiceList

> 中文说明：获取服务单列表  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1835>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/getServiceList |
| 中文名称 | 获取服务单列表 |
| 文档目录 | 订单API |
| Article ID | 1835 |
| 文档版本 | V1.05 |
| 官方更新时间 | 2022/11/14 14:49:40 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 480 |

## 使用说明

获取售后平台客服工单列表，对应抖店功能：https://school.jinritemai.com/doudian/web/lark-doc/fdJHrykEbfsrM

## 权限包

- 订单 / 商家服务单管理（packageType=1）；适用应用类目：卡券商工具、售后管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、订单管理、电商ERP
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.getServiceList | 调用的API接口名称 | - | - |
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
| 0 | start_time | Start | true | 1 | 121312313 | 创建开始时间时间戳 | - | - |
| 0 | end_time | End | true | 1 | 123131221123 | 创建结束时间时间戳，必须大于开始时间 | - | - |
| 0 | status | ServiceStatus | false | 7 | 0 | 1、不传代表获取全部服务请求     2、操作状态：0 #待处理 10 #审核中 100 #已关闭 | - | - |
| 0 | order_id | OrderId | false | 1 | 212332343564454545 | 订单id | - | - |
| 0 | service_id | ServiceId | false | 1 | 12212121121212 | 服务单id | - | - |
| 0 | order_by | OrderBy | false | 2 | create_time | 1、默认按服务单创建时间搜索     2、值为“create_time”：按服务单创建时间；值为“update_time”：按服务单更新时间 | - | - |
| 0 | page | Page | false | 7 | 1 | 页数（默认值为1，第一页从1开始） | - | - |
| 0 | size | Size | false | 7 | 100 | 每页订单数（默认为10，最大100），超过100则会按照最大值100处理 | - | - |
| 0 | order | Order | false | 2 | ASC | 排序方式：ASC按时间升序，  DESC按时间降序     默认DESC | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | Total | - | 1 | 1122 | 总数 | - | - |
| 0 | list | OrderServiceList | - | 3 | - | 列表 | - | - |
| 1 | list.id | ServiceId | - | 1 | 11111 | 服务请求ID | - | - |
| 1 | list.order_id | OrderId | - | 1 | 11222332 | 订单号 | - | - |
| 1 | list.operate_status | ServiceStatus | - | 7 | 100 | 操作状态 | - | - |
| 1 | list.detail | Detail | - | 2 | 服务单详情 | 服务单详情 | - | - |
| 1 | list.reply | ReplyDetail | - | 2 | 我再来狡辩一次 | 回复内容 | - | - |
| 1 | list.create_time | CreateTimeStr | - | 2 | 2020-12-09 13:34:55 | 服务创建时间 | - | - |
| 1 | list.service_type | ServiceType | - | 1 | 3 | 服务类型，1-退款;<br>2-换货;<br>3-售后服务;<br>4-协商退款;<br>5-商品相关;<br>6-商家服务问题;<br>7-卡券类产品预约/使用问题;<br>8-快递问题;<br>9-风险商品;<br>10-二次投诉;<br>11-订单操作;<br>12-发货及物流问题;<br>13-价格相关;<br>16-商家问题;;<br>17-其他;<br>18-活动相关;<br>30-价格问题;<br>31-催促发货;<br>32-内容宣传;<br>33-发票问题;<br>34-售后处理;<br>35-商家服务;<br>36-安装维修;<br>37-快递配送;<br>38-投诉事件;<br>39-活动优惠;<br>40-订单问题;<br>41-货到付款;<br>42-运费问题;<br>43-高危风险;<br>45-发货问题;<br>46-催促物流;<br>47-商家托管;<br>48-已投诉至监管部门; | - | - |
| 1 | list.reply_time | ReplyTimeStr | - | 2 | 2020-12-09 13:34:55 | 回复时间 | - | - |
| 1 | list.operate_status_desc | ServiceStatusDesc | - | 2 | 已关闭 | 操作状态含义 | - | - |
| 1 | list.shop_id | ShopId | - | 1 | 1122 | 店铺id | - | - |
| 1 | list.update_time | UpdateTimeStr | - | 2 | 2020-12-09 13:34:55 | 服务更新时间时间 | - | - |

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
OrderGetServiceListRequest request = new OrderGetServiceListRequest();
OrderGetServiceListParam param = request.getParam();
param.setStartTime(121312313L);
param.setEndTime(123131221123L);
param.setStatus(0);
param.setOrderId(212332343564454545L);
param.setServiceId(12212121121212L);
param.setOrderBy("create_time");
param.setPage(1);
param.setSize(100);
param.setOrder("ASC");
OrderGetServiceListResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderGetServiceListRequest();
$param = new OrderGetServiceListParam();
$request->setParam($param);
$param->start_time = 121312313;
$param->end_time = 123131221123;
$param->status = 0;
$param->order_id = 212332343564454545;
$param->service_id = 12212121121212;
$param->order_by = "create_time";
$param->page = 1;
$param->size = 100;
$param->order = "ASC";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderGetServiceListRequest()
param = request.getParams()
param.start_time = 121312313
param.end_time = 123131221123
param.status = 0
param.order_id = 212332343564454545
param.service_id = 12212121121212
param.order_by = "create_time"
param.page = 1
param.size = 100
param.order = "ASC"
response = request.execute(accessToken)

```

### go

```go
request := order_getServiceList_request.New()
param := request.GetParams()
param.StartTime = 121312313
param.EndTime = 123131221123
param.Status = 0
param.OrderId = 212332343564454545
param.ServiceId = 12212121121212
param.OrderBy = "create_time"
param.Page = 1
param.Size = 100
param.Order = "ASC"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderGetServiceListRequest();
var param = request.BuildParam();
param.StartTime = 121312313;
param.EndTime = 123131221123;
param.Status = 0;
param.OrderId = 212332343564454545;
param.ServiceId = 12212121121212;
param.OrderBy = "create_time";
param.Page = 1;
param.Size = 100;
param.Order = "ASC";
var response = request.Execute<OrderGetServiceListResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:10002 | 时间格式不正确 | - |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
