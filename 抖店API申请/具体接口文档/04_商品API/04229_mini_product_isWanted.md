# /mini/product/isWanted

> 中文说明：查询是否收藏  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4229>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /mini/product/isWanted |
| 中文名称 | 查询是否收藏 |
| 文档目录 | 商品API |
| Article ID | 4229 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/7/8 13:30:01 |
| 授权主体 | ["店铺","小程序"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

查询是否收藏

## 权限包

- 小程序 / 电商小程序（packageType=1）；适用应用类目：售后/其他品牌服务、线下服务/线下活动、C2B定制、创意互动、推荐导购、测试类目、商品展示、特殊交易、任务玩法、权益营销、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电
- 小程序 / 电商小程序-商品关注组件（packageType=1）；适用应用类目：售后/其他品牌服务、线下服务/线下活动、C2B定制、创意互动、推荐导购、商品展示、特殊交易、任务玩法、权益营销、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | mini.product/isWanted | 调用的API接口名称 | - | - |
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
| 0 | product_id | productId | true | 2 | 111222 | 商品id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | is_wanted | isWanted | - | 4 | true | 是否想要 | - | - |
| 0 | product_id | productId | - | 2 | 11222 | 商品id | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/yunc/erpCargoSinglePush?app_key=your_appkey_here&method=yunc.erpCargoSinglePush&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/yunc/erpCargoSinglePush?app_key=your_appkey_here&method=yunc.erpCargoSinglePush&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MiniProductIsWantedRequest request = new MiniProductIsWantedRequest();
MiniProductIsWantedParam param = request.getParam();
param.setProductId("111222");
MiniProductIsWantedResponse response = request.execute(accessToken);

```

### php

```php
$request = new MiniProductIsWantedRequest();
$param = new MiniProductIsWantedParam();
$request->setParam($param);
$param->product_id = "111222";
$response = $request->execute(accessToken);

```

### python

```python
request = MiniProductIsWantedRequest()
param = request.getParams()
param.product_id = "111222"
response = request.execute(accessToken)

```

### go

```go
request := mini_product_isWanted_request.New()
param := request.GetParams()
param.ProductId = "111222"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MiniProductIsWantedRequest();
var param = request.BuildParam();
param.ProductId = "111222";
var response = request.Execute<MiniProductIsWantedResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:605013002 | 查询是否收藏失败 | 检查参数，重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
