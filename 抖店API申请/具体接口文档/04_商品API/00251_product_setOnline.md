# /product/setOnline

> 中文说明：拍卖商品上架接口-仅限拍卖商品使用  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/251>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/setOnline |
| 中文名称 | 拍卖商品上架接口-仅限拍卖商品使用 |
| 文档目录 | 商品API |
| Article ID | 251 |
| 文档版本 | V1.08 |
| 官方更新时间 | 2024/2/1 15:49:59 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

1、仅限拍卖类型商品上架使用
2、其他类型商品，请使用【product/editV2】商品更新接口，请求参数传值commit=true即表示提交上架。

## 权限包

- 商品 / 商品上下架（packageType=1）；适用应用类目：选品铺货-微应用、卡券商工具、撮合服务商、AI拼图-微应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、测试类目、即时零售商家自研、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.setOnline | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 0 | 355653216545615442145 | 商品id | - | - |

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
ProductSetOnlineRequest request = new ProductSetOnlineRequest();
ProductSetOnlineParam param = request.getParam();
param.setProductId(355653216545615442145L);
ProductSetOnlineResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductSetOnlineRequest();
$param = new ProductSetOnlineParam();
$request->setParam($param);
$param->product_id = 355653216545615442145;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductSetOnlineRequest()
param = request.getParams()
param.product_id = 355653216545615442145
response = request.execute(accessToken)

```

### go

```go
request := product_setOnline_request.New()
param := request.GetParams()
param.ProductId = 355653216545615442145
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductSetOnlineRequest();
var param = request.BuildParam();
param.ProductId = 355653216545615442145;
var response = request.Execute<ProductSetOnlineResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2010001 | 【重复操作】商品操作重复，当前状态：上架 | 请重新选择商品 |
| 40004 | 非法的参数 | isv.parameter-invalid:10008 | 商户状态不合法 | 请检查店铺状态 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 获取店铺标签错误 | 请检查店铺状态 |
| 50002 | 业务处理失败 | isv.business-failed:2010005 | 获取类目信息失败 | 检查参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010326 | 因为店铺受到处罚，限制发品，更多请到商家后台奖惩中心查看 | 请检查店铺状态 |
| 50002 | 业务处理失败 | isv.business-failed:20024 | 缺少必要参数 | 请检查必填参数后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010021 | 【重复操作】商品操作重复，当前状态：上架 | 请检查商品状态 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:组合商品无法直接上线 | 组合商品无法直接上线，请检查 |
| 50002 | 业务处理失败 | isv.business-failed:2010050 | 2010050:由于您尚未进行店铺官方账号绑定，店铺部分功能不可用，当前无法发布或上架商品，请前往【店铺】-【店铺设置】-【店铺官方账号】页面完成绑定 | 由于您尚未进行店铺官方账号绑定，店铺部分功能不可用，当前无法发布或上架商品，请前往【店铺】-【店铺设置】-【店铺官方账号】页面完成绑定 |
| 50002 | 业务处理失败 | isv.business-failed:2010022 | 2010022:【状态非法】商品状态错误, 当前状态: 删除 | 2010022:【状态非法】商品状态错误, 当前状态: 删除 |
| 50002 | 业务处理失败 | isv.business-failed:110200024 | 110200024:发布当前类目商品，还需缴纳1983.37元保证金，点击“<a href='/ffa/content/shop_deposit' target="_blank">立即充值</a>”补全对应保证金后方可发布商品，详见<a href='https://school.jinritemai.com/doudian/web/article/101830?from=shop_table&btm_ppre=a4977.b4369.c0.d0&btm_pre=a4977.b6444.c0.d0&btm_ | 110200024:发布当前类目商品，还需缴纳1983.37元保证金，点击“<a href='/ffa/content/shop_deposit' target="_blank">立即充值</a>”补全对应保证金后方可发布商品，详见<a href='https://school.jinritemai.com/doudian/web/article/101830?from=shop_table&btm_ppre=a4977.b4369.c0.d0&btm_pre=a4977.b6444.c0.d0&btm_ |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
