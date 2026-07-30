# /mini/blindbox/merchantresult

> 中文说明：直播间主播抽盒回传盲盒结果  
> 所属类别：工具API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/162/7436>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /mini/blindbox/merchantresult |
| 中文名称 | 直播间主播抽盒回传盲盒结果 |
| 文档目录 | 工具API |
| Article ID | 7436 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2025/4/29 19:14:11 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

1、使用场景说明，主播在直播间抽完后把盲盒结果回传平台，商家可以再订单详情查看抽中结果，用户可以在订单详情查看抽中结果

## 权限包

- 平台工具 / 盲盒信息回传（packageType=1）；适用应用类目：盲盒互动

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | mini.blindbox/merchantresult | 调用的API接口名称 | - | - |
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
| 0 | blind_box_result_list | blindBoxResultList | true | 3 | - | 盲盒信息列表 | - | - |
| 1 | blind_box_result_list.sku_order_id | skuOrderId | true | 2 | 777 | sku单id | - | - |
| 1 | blind_box_result_list.blind_result_img | blindResultImg | true | 2 | https://xxx/1.jpg | 盲盒结果图片 | - | - |
| 1 | blind_box_result_list.blind_result_title | blindResultTitle | true | 2 | LV包 | 盲盒结果标题 | - | - |
| 1 | blind_box_result_list.blind_result_sub_title | blindResultSubTitle | true | 2 | 45671-3 | 盲盒信息备注字段，开发者自定义 | - | - |
| 1 | blind_box_result_list.blind_result_open_time | blindResultOpenTime | true | 1 | 1723631662789 | 盲盒结果开盒时间 | - | - |
| 0 | doudian_open_id | userId | true | 2 | 31341#1A123 | 抖店openid | - | - |
| 0 | shop_order_id | shopOrderId | true | 2 | 777 | 店铺单id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | is_success | isSuccess | - | 4 | true | 写入成功/失败 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/applyActivities?app_key=your_appkey_here&method=buyin.applyActivities&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/applyActivities?app_key=your_appkey_here&method=buyin.applyActivities&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MiniBlindboxMerchantresultRequest request = new MiniBlindboxMerchantresultRequest();
MiniBlindboxMerchantresultParam param = request.getParam();
param.setDoudianOpenId("31341#1A123");
param.setShopOrderId("777");
MiniBlindboxMerchantresultResponse response = request.execute(accessToken);

```

### php

```php
$request = new MiniBlindboxMerchantresultRequest();
$param = new MiniBlindboxMerchantresultParam();
$request->setParam($param);
$param->doudian_open_id = "31341#1A123";
$param->shop_order_id = "777";
$response = $request->execute(accessToken);

```

### python

```python
request = MiniBlindboxMerchantresultRequest()
param = request.getParams()
param.doudian_open_id = "31341#1A123"
param.shop_order_id = "777"
response = request.execute(accessToken)

```

### go

```go
request := mini_blindbox_merchantresult_request.New()
param := request.GetParams()
param.DoudianOpenId = "31341#1A123"
param.ShopOrderId = "777"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MiniBlindboxMerchantresultRequest();
var param = request.BuildParam();
param.DoudianOpenId = "31341#1A123";
param.ShopOrderId = "777";
var response = request.Execute<MiniBlindboxMerchantresultResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:606000102 | 606000102:RPCError{PSM:[ecom.trade.order_query] Method:[GetSkuOrderInfoGroupsBySkuOrder] ErrType:[RPC_STATUS_CODE_NOT_ZERO] OriginalErr:[<nil>] BizStatusCode:[110001] BizStatusMessage:[[FAIL,OQ10002,查询订单不存在]]} | 找平台同学 |
| 50002 | 业务处理失败 | isv.business-failed:606010000 | 606010000:入参店铺id非法 | 检查入参 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
