# /order/review

> 中文说明：商家回传订单审核结果  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/1785>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/review |
| 中文名称 | 商家回传订单审核结果 |
| 文档目录 | 订单API |
| Article ID | 1785 |
| 文档版本 | V1.05 |
| 官方更新时间 | 2024/6/12 10:41:48 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

商家回传订单审核结果

## 权限包

- 订单 / 订单信息查询（packageType=1）；适用应用类目：官方微应用、卡券商工具、创新应用大赛_微应用、COD服务、跨境供应链服务、手机行业定制交易、跨境电商、小票打印服务、撮合服务商、客服绩效-微应用、综合保修、碎屏保障、售后管理、任务玩法、财务管理、企业财税服务、直播话术-微应用、营销管理-互动小程序定制、营销管理-小程序定制、打单发货-微应用、品牌数据洞察-三方应用、品牌数据洞察-二方应用、创新应用大赛_软件服务、强管控微应用、教育服务、商家商品推广、商家后台系统、TPA服务、店铺管理、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、品牌会员通、即时零售商家自研、直播工具、互动营销定制、短信营销、订单管理、商品供应链、电商ERP、AI 商品运营、智能外呼
- 订单 / 订单信息管理（packageType=1）；适用应用类目：AI智能客服-微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.review | 调用的API接口名称 | - | - |
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
| 0 | task_type | TaskType | true | 1 | 3001 | 表示订单审核的类型 3001 通信卡审核 | - | - |
| 0 | reject_code | RejectCode | true | 1 | 0 | 0 审核通过 <br>200001 下单身份信息180天内重复下单<br>200002 超过下单身份信息可办理数量<br>200003 下单身份信息年龄不符合要求 <br>200004 下单地址为运营商禁售地区 <br>200005 未通过运营商审核，具体可联系商家<br>200006 地址模糊无法发货 | - | - |
| 0 | object_id | ObjectId | true | 2 | 4921300864966120582 | 审核的单id取决于什么审核 通信卡审核 店铺单id | - | - |

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
OrderReviewRequest request = new OrderReviewRequest();
OrderReviewParam param = request.getParam();
param.setTaskType(3001L);
param.setRejectCode(0L);
param.setObjectId("4921300864966120582");
OrderReviewResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderReviewRequest();
$param = new OrderReviewParam();
$request->setParam($param);
$param->task_type = 3001;
$param->reject_code = 0;
$param->object_id = "4921300864966120582";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderReviewRequest()
param = request.getParams()
param.task_type = 3001
param.reject_code = 0
param.object_id = "4921300864966120582"
response = request.execute(accessToken)

```

### go

```go
request := order_review_request.New()
param := request.GetParams()
param.TaskType = 3001
param.RejectCode = 0
param.ObjectId = "4921300864966120582"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderReviewRequest();
var param = request.BuildParam();
param.TaskType = 3001;
param.RejectCode = 0;
param.ObjectId = "4921300864966120582";
var response = request.Execute<OrderReviewResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:20002 | 20002:参数错误:找不到订单的审核任务 | 修改入参 |
| 50002 | 业务处理失败 | isv.business-failed:20003 | 20003:调用交易失败 | 请检查请求参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
