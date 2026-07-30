# /buyin/updateSampleConfs

> 中文说明：批量设置达人买样返款规则  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/5908>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/updateSampleConfs |
| 中文名称 | 批量设置达人买样返款规则 |
| 文档目录 | 精选联盟API |
| Article ID | 5908 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/12/14 16:12:25 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 30 |

## 使用说明

该接口用于批量（上限50 个商品）设置商品是否支持达人买样返款，以及达人买样返款门槛；

查看达人买样返款设置信息使用/buyin/queryShopAllianceProducts接口

## 权限包

- 定向API / 定向权限（packageType=1）
- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.updateSampleConfs | 调用的API接口名称 | - | - |
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
| 0 | product_sample_configs | product_sample_configs | true | 3 | - | 达人买样返款设置 | - | - |
| 1 | product_sample_configs.product_id | product_id | true | 99 | 34312324232145 | 商品 id | - | - |
| 1 | product_sample_configs.buy_style | buy_style | true | 99 | 1 | 商品是否支持达人买样返款；1-支持达人买样返款，2-不支持达人买样返款。除特殊类目（虚拟充值、奢侈品、汽车整车、二手类目）外其他所有商品需填 1，特殊类目商品可自主选择是否支持达人买样返款 | - | - |
| 1 | product_sample_configs.buy_volume_limit | buy_volume_limit | false | 99 | 5 | 达人买样返款订单量门槛，值需在3-10000范围内。达人带货结算订单量≥所设订单量，返还达人买样全款；如果不支持达人买样返款此字段无意义 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | failed_reason | failed_reason | - | 8 | null | 部分处理失败的商品id和对应原因 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/updateSampleConfs?app_key=your_appkey_here&method=buyin.updateSampleConfs&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/updateSampleConfs?app_key=your_appkey_here&method=buyin.updateSampleConfs&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinUpdateSampleConfsRequest request = new BuyinUpdateSampleConfsRequest();
BuyinUpdateSampleConfsParam param = request.getParam();
BuyinUpdateSampleConfsResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinUpdateSampleConfsRequest();
$param = new BuyinUpdateSampleConfsParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinUpdateSampleConfsRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := buyin_updateSampleConfs_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinUpdateSampleConfsRequest();
var param = request.BuildParam();
var response = request.Execute<BuyinUpdateSampleConfsResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:-1025 | 查询商品信息失败 | 输入的商品 id 有误 |
| 40004 | 非法的参数 | isv.parameter-invalid:-1 | 参数不合法 | 根据报错信息调整参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
