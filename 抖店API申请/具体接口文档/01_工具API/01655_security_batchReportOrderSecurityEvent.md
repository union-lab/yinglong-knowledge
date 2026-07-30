# /security/batchReportOrderSecurityEvent

> 中文说明：批量上报订单安全事件接口  
> 所属类别：工具API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/162/1655>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /security/batchReportOrderSecurityEvent |
| 中文名称 | 批量上报订单安全事件接口 |
| 文档目录 | 工具API |
| Article ID | 1655 |
| 文档版本 | V5.03 |
| 官方更新时间 | 2022/12/12 11:28:46 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

电商云批量上报订单安全事件接口

## 权限包

- 安全 / 风控安全上报（packageType=1）；适用应用类目：卡券商工具、售后管理、分销品工具-供应商、订单处理-供应商、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、虚拟充值、即时零售商家自研、短信营销、订单管理、商品供应链、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | security.batchReportOrderSecurityEvent | 调用的API接口名称 | - | - |
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
| 0 | event_type | eventType | true | 7 | 1 | 订单事件类型 1:订单访问事件, 2:订单流出事件 | - | - |
| 0 | events | events | true | 3 | - | 订单事件列表 | - | - |
| 1 | events.event_id | eventId | true | 2 | "1649843080000603" | HTTP 请求头里的 doudian-event-id 对应的值 | - | - |
| 1 | events.account_id | accountId | true | 2 | "101234567" | 商户的账户ID，每个ISV下需要保证唯一。独立生成的账户唯一标识 | - | - |
| 1 | events.account_type | accountType | true | 2 | "main_account" | main_account 服务商账号体系中的主账号、子账号 main_account/sub_account | - | - |
| 1 | events.order_related_shop_id | shopId | true | 2 | "10001" | orderIds 实际归属的店铺id | - | - |
| 1 | events.shop_ids | shopIds | false | 3 | ["1","2","3"] | 选填 ，account_id 关联的店铺 ID 列表 | - | - |
| 1 | events.order_ids | orderIds | true | 3 | ["111","222","333"] | 订单 ids, 单次最大数量 50, 超过 50 需分批上传 | - | - |
| 1 | events.operation_type | operationType | true | 7 | 1 | 操作类型.支持操作类型:      1:view_order (查看订单)      2:view_order_list (查看订单列表)      3:download_order (下载订单)      4:download_order_list (下载订单列表)      5:print_order (打印订单)      6:print_order_list (打印订单列表)      7:export_order (导出订单)      8:export_order_list (导出订单列表)      9:delete_order (删除订单) | - | - |
| 1 | events.operate_time | operateTime | true | 2 | "1522555200" | 精确到秒的操作时间戳，格林威治时间，如1522555200 | - | - |
| 1 | events.url | url | true | 2 | "/torder/check" | isv请求url | - | - |
| 1 | events.ip | ip | true | 2 | "42.120.74.21" | 客户端IP，须为用户操作时真实客户端外网IP 若使用SLB，客户端IP添加在HTTP请求的X-Forwarded-For末尾；若使用CWAF，客户端IP放在 X-Real-Ip 属性 | - | - |
| 1 | events.mac | mac | false | 2 | "5489-98f6-16c0" | 登录设备的mac地址 | - | - |
| 1 | events.identify_info_list | identifyInfoList | true | 3 | - | 对外发送的订单信息明细格式 场景:商家来调解密接口，同时解密接口里面包含了敏感信息 | - | - |
| 2 | events.identify_info_list.name | name | true | 2 | orderId | 代表订单某个信息的字段名 (可直接取抖店开放平台返回的订单信息中的字段名) | - | - |
| 2 | events.identify_info_list.encrypted | encrypted | true | 4 | false | 代表此字段在发送给第三方时是否为加密状态 | - | - |
| 1 | events.device_type | deviceType | false | 2 | "iOS" | iOS / Android / Windows	商户在什么设备上使用 ISV 的软件 | - | - |
| 1 | events.device_id | deviceId | false | 2 | "12345" | 设备id，标识唯一设备 | - | - |
| 1 | events.referer | referer | true | 2 | "https://www.abc.com/" | HTTP 请求头里referer对应的值,参考链接 | - | - |
| 1 | events.user_agent | userAgent | false | 2 | "Mozilla/5.0" | HTTP 请求头里的 userAgent对应的值 | - | - |
| 1 | events.purchase_product_info_list | purchaseProductInfoList | false | 3 | - | 采购商品信息 | - | - |
| 2 | events.purchase_product_info_list.purchase_platform_type | purchasePlatformType | false | 7 | 1 | 采购平台，枚举值如下：1、拼多多，2、淘宝，3、1688，4、其他，5、淘特，6、天猫，7、京东，8、快手，9、小红书，10、得物，11、苏宁，12、抖音 | - | - |
| 2 | events.purchase_product_info_list.purchase_product_url | purchaseProductUrl | false | 2 | "https://www.abc.com/" | 采购商品链接 | - | - |
| 2 | events.purchase_product_info_list.external_purchaser_id | externalPurchaserId | false | 2 | "12345" | 采购人id（外部） | - | - |
| 2 | events.purchase_product_info_list.product_name | productName | false | 2 | "商品名" | 本平台订单的商品名称 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | CustomError | CustomError | - | 5 | - | 错误信息 | - | R1 |
| 1 | CustomError.ErrNo | ErrNo | - | 1 | 错误码 | 错误码 | - | R1 |
| 1 | CustomError.ErrMsg | ErrMsg | - | 2 | 错误原因 | 错误原因 | - | R1 |

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
SecurityBatchReportOrderSecurityEventRequest request = new SecurityBatchReportOrderSecurityEventRequest();
SecurityBatchReportOrderSecurityEventParam param = request.getParam();
param.setEventType(1);
SecurityBatchReportOrderSecurityEventResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecurityBatchReportOrderSecurityEventRequest();
$param = new SecurityBatchReportOrderSecurityEventParam();
$request->setParam($param);
$param->event_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = SecurityBatchReportOrderSecurityEventRequest()
param = request.getParams()
param.event_type = 1
response = request.execute(accessToken)

```

### go

```go
request := security_batchReportOrderSecurityEvent_request.New()
param := request.GetParams()
param.EventType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecurityBatchReportOrderSecurityEventRequest();
var param = request.BuildParam();
param.EventType = 1;
var response = request.Execute<SecurityBatchReportOrderSecurityEventResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:602 | 参数不正确 | 请检查入参 |
| 20000 | 系统错误 | isp.service-error:100 | 100:服务器错误 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
