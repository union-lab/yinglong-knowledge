# /logistics/trackNoRouteDetail

> 中文说明：运单轨迹查询接口  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/1851>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/trackNoRouteDetail |
| 中文名称 | 运单轨迹查询接口 |
| 文档目录 | 电子面单API |
| Article ID | 1851 |
| 文档版本 | V1.06 |
| 官方更新时间 | 2021/8/18 16:59:39 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2500 |

## 使用说明

查询条件：
1、必须是通过抖音电子面单获取的单号并且调用过发货接口回传的运单号才可以查询到物流轨迹；

## 权限包

- 物流发货 / 运单轨迹查询（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、仓储管理、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、短信营销、订单管理、AI智能客服-微应用、商品供应链、电商ERP、AI售后挽单、智能外呼
- 订单 / 订单管理（packageType=10）；适用应用类目：内部测类目、任务玩法、强管控微应用、内部测试、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.trackNoRouteDetail | 调用的API接口名称 | - | - |
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
| 0 | logistics_code | company | true | 2 | shentong | 物流商编码；需使用【/order/logisticsCompanyList】接口响应参数中的code； | - | - |
| 0 | track_no | trackNo | true | 2 | 78393454 | 运单号；可使用电子面单接口获取返回的单号查询【/logistics/newCreateOrder】或商家店铺后台查看 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | route__node_list | routeNodeList | - | 3 | - | 轨迹信息 | - | - |
| 1 | route__node_list.content | content | - | 2 | 配送中 | 轨迹内容 | - | R1 |
| 1 | route__node_list.timestamp | timestamp | - | 2 | 161324234234 | 时间戳；单位：秒 | - | R1 |
| 1 | route__node_list.state | state | - | 2 | 1 | 轨迹状态code；枚举值详见：https://op.jinritemai.com/docs/question-docs/94/1642 | - | R1 |
| 1 | route__node_list.state_description | stateDescription | - | 2 | 配送 | 轨迹状态描述 | - | R1 |
| 1 | route__node_list.site_name | siteName | - | 2 | 北京 | 站点名称 | - | R1 |
| 0 | track_info | trackInfo | - | 5 | - | 运单信息 | - | - |
| 1 | track_info.track_no | trackNo | - | 2 | 234234234 | 运单号 | - | R1 |
| 1 | track_info.express | express | - | 2 | shentong | 物流商编码 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/logistics/trackNoRouteDetail?app_key=your_appkey_here&method=logistics.trackNoRouteDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/logistics/trackNoRouteDetail?app_key=your_appkey_here&method=logistics.trackNoRouteDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
LogisticsTrackNoRouteDetailRequest request = new LogisticsTrackNoRouteDetailRequest();
LogisticsTrackNoRouteDetailParam param = request.getParam();
param.setLogisticsCode("shentong");
param.setTrackNo("78393454");
LogisticsTrackNoRouteDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsTrackNoRouteDetailRequest();
$param = new LogisticsTrackNoRouteDetailParam();
$request->setParam($param);
$param->logistics_code = "shentong";
$param->track_no = "78393454";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsTrackNoRouteDetailRequest()
param = request.getParams()
param.logistics_code = "shentong"
param.track_no = "78393454"
response = request.execute(accessToken)

```

### go

```go
request := logistics_trackNoRouteDetail_request.New()
param := request.GetParams()
param.LogisticsCode = "shentong"
param.TrackNo = "78393454"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsTrackNoRouteDetailRequest();
var param = request.BuildParam();
param.LogisticsCode = "shentong";
param.TrackNo = "78393454";
var response = request.Execute<LogisticsTrackNoRouteDetailResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:10901 | 订单已取消，不允许变更 | - |
| 50002 | 业务处理失败 | isv.business-failed:10015 | 非抖音电商电子面单不支持查询轨迹 | - |
| 50002 | 业务处理失败 | isv.business-failed:4007 | 请求内部服务超时，请重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:-10004 | 记录不存在 | - |
| 50002 | 业务处理失败 | isv.business-failed:-10006 | 服务器开了小差，请稍后重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:4006 | 运单号不能为空 | 请检查运单号信息 |
| 50002 | 业务处理失败 | isv.business-failed:-10001 | 参数错误 | 请检查请求参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
