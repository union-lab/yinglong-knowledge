# /product/setOffline

> 中文说明：商品下架接口  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/252>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/setOffline |
| 中文名称 | 商品下架接口 |
| 文档目录 | 商品API |
| Article ID | 252 |
| 文档版本 | V1.07 |
| 官方更新时间 | 2024/3/5 19:45:13 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1500 |

## 使用说明

1、支持所有类型商品下架
2、接口调用成功，商品会放到仓库中

## 权限包

- 商品 / 商品上下架（packageType=1）；适用应用类目：选品铺货-微应用、卡券商工具、撮合服务商、AI拼图-微应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、测试类目、即时零售商家自研、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.setOffline | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 1 | 356654869456454 | 商品ID | - | - |
| 0 | outer_product_id | outer_product_id | - | 2 | 2333424 | 推荐使用，外部商家编码，支持字符串。 | - | - |
| 0 | store_id | store_id | - | 1 | 12345 | 小时达二期店铺场景才可以传，小时达二期场景可以通过传入主品id+门店id对该门店下的子品进行操作 | - | - |

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
ProductSetOfflineRequest request = new ProductSetOfflineRequest();
ProductSetOfflineParam param = request.getParam();
param.setProductId(356654869456454L);
param.setOuterProductId("2333424");
param.setStoreId(12345L);
ProductSetOfflineResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductSetOfflineRequest();
$param = new ProductSetOfflineParam();
$request->setParam($param);
$param->product_id = 356654869456454;
$param->outer_product_id = "2333424";
$param->store_id = 12345;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductSetOfflineRequest()
param = request.getParams()
param.product_id = 356654869456454
param.outer_product_id = "2333424"
param.store_id = 12345
response = request.execute(accessToken)

```

### go

```go
request := product_setOffline_request.New()
param := request.GetParams()
param.ProductId = 356654869456454
param.OuterProductId = "2333424"
param.StoreId = 12345
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductSetOfflineRequest();
var param = request.BuildParam();
param.ProductId = 356654869456454;
param.OuterProductId = "2333424";
param.StoreId = 12345;
var response = request.Execute<ProductSetOfflineResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2010022 | 【状态非法】商品状态错误, 当前状态: 删除 | 请重新选择商品 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010021 | 【重复操作】商品操作重复，当前状态：下架 | 请重新选择商品 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010005 | 下架失败，该商品正在参加平台秒杀-抖in好物池（自播专入），暂不支持下架 | 请重新选择商品 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 奖品商品不支持下架 | 请重新选择商品 |
| 40004 | 非法的参数 | isv.parameter-invalid:20024 | 缺少必要参数 | 请检查参数后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:10008 | 商户状态不合法 | 请检查店铺状态 |
| 50002 | 业务处理失败 | isv.business-failed:2010002 | 请求超时 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 更新商品失败 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010045 | 商品正在参加平台活动，无法下架商品 | 商品正在参加平台活动，无法下架商品 |
| 50002 | 业务处理失败 | isv.business-failed:2010064 | 商品不存在 | 请检查product_id信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010058 | 2010058:商品不存在 | 请检查product_id信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010401 | 2010401:请求被限流, 请稍后再试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 2010013:获取账号信息失败 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:7 | 7:获取子商品信息失败 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310134 | 110310134:奖品下架失败, 该奖品有合作中的权益活动 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110101052 | 110101052:赠品有关联未失效的赠品活动、不可下架 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110310132 | 110310132:奖品下架失败, 该奖品已绑定抽奖活动 | 请检查入参信息 |
| 50002 | 业务处理失败 | isv.business-failed:110211010 | 110211010:已有库存占用，无法修改绑定关系 | 110211010:已有库存占用，无法修改绑定关系 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
