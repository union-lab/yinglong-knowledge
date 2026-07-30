# /trade/TopSearchQueryPredict

> 中文说明：商品标题热搜词推荐  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2677>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /trade/TopSearchQueryPredict |
| 中文名称 | 商品标题热搜词推荐 |
| 文档目录 | 商品API |
| Article ID | 2677 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2022/11/3 16:56:59 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 600 |

## 使用说明

商家发布商品时，根据上传主图进行热搜词推荐，帮助商家标题填写，提升商品曝光及GMV；
接口申请条件：该能力仅限微应用场景开放，如您想作为微应用开发者对接，可联系您的类目运营。详见：https://op.jinritemai.com/docs/mona-docs/1186/2728

## 权限包

- 商品 / 商品标题热词（packageType=1）；适用应用类目：创新应用大赛_微应用、直播间AI导购、直播间导购-微应用、AI 商品运营
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | trade.TopSearchQueryPredict | 调用的API接口名称 | - | - |
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
| 0 | category_id | category_id | false | 1 | 25108 | 叶子类目ID；通过【/shop/getShopCategory】接口获取，填写错误id接口返回为空。 | - | - |
| 0 | image | image | false | 5 | - | 首图信息 | - | - |
| 1 | image.image_url | image_url | false | 2 | "https://p9-aio.ecombdimg.com/obj/ecom-shop-material/vGQQPXed_m_00512396211e8d0f6d4cacecea4597e7_sx_138896_www960-960" | 首图url，url公网可访问地址即可。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | result | result | - | 3 | ['面料', '防油', '防水', '围裙', '工作服', '成人', '围腰', '罩衣', '时尚', '无袖', '做饭', '家用', '韩版', '防污', '透气', '背带', '薄款', '可爱', '袖套', '洋气'] | 推荐热搜词 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/coupons/cancelVerify?app_key=your_appkey_here&method=coupons.cancelVerify&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/coupons/cancelVerify?app_key=your_appkey_here&method=coupons.cancelVerify&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
TradeTopSearchQueryPredictRequest request = new TradeTopSearchQueryPredictRequest();
TradeTopSearchQueryPredictParam param = request.getParam();
param.setCategoryId(25108L);
TradeTopSearchQueryPredictResponse response = request.execute(accessToken);

```

### php

```php
$request = new TradeTopSearchQueryPredictRequest();
$param = new TradeTopSearchQueryPredictParam();
$request->setParam($param);
$param->category_id = 25108;
$response = $request->execute(accessToken);

```

### python

```python
request = TradeTopSearchQueryPredictRequest()
param = request.getParams()
param.category_id = 25108
response = request.execute(accessToken)

```

### go

```go
request := trade_TopSearchQueryPredict_request.New()
param := request.GetParams()
param.CategoryId = 25108
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new TradeTopSearchQueryPredictRequest();
var param = request.BuildParam();
param.CategoryId = 25108;
var response = request.Execute<TradeTopSearchQueryPredictResponse>(accessToken);

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

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
