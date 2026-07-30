# /buyin/allKolStrategyCreate

> 中文说明：创建全部达人策略  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/5762>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/allKolStrategyCreate |
| 中文名称 | 创建全部达人策略 |
| 文档目录 | 精选联盟API |
| Article ID | 5762 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2023/11/27 15:02:41 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5000 |

## 使用说明

支持商家通过接口对已经开启推广的商品，设置全部达人生效的策略，同时设置佣金率

## 权限包

- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理
- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.allKolStrategyCreate | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 1 | 123456789 | 商品id | - | - |
| 0 | cos_ratio | cos_ratio | true | 1 | 50 | 佣金率 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | success | - | 4 | true | 是否设置成功 | - | - |
| 0 | strategy_id | strategy_id | - | 1 | 123456 | 策略ID | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/yunc/adjustInventory?app_key=your_appkey_here&method=yunc.adjustInventory&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/yunc/adjustInventory?app_key=your_appkey_here&method=yunc.adjustInventory&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinAllKolStrategyCreateRequest request = new BuyinAllKolStrategyCreateRequest();
BuyinAllKolStrategyCreateParam param = request.getParam();
param.setProductId(123456789L);
param.setCosRatio(50L);
BuyinAllKolStrategyCreateResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinAllKolStrategyCreateRequest();
$param = new BuyinAllKolStrategyCreateParam();
$request->setParam($param);
$param->product_id = 123456789;
$param->cos_ratio = 50;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinAllKolStrategyCreateRequest()
param = request.getParams()
param.product_id = 123456789
param.cos_ratio = 50
response = request.execute(accessToken)

```

### go

```go
request := buyin_allKolStrategyCreate_request.New()
param := request.GetParams()
param.ProductId = 123456789
param.CosRatio = 50
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinAllKolStrategyCreateRequest();
var param = request.BuildParam();
param.ProductId = 123456789;
param.CosRatio = 50;
var response = request.Execute<BuyinAllKolStrategyCreateResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4106 | 无效商品ID | 无效商品ID |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4133 | 商品没有加入精选联盟 | 商品没有加入精选联盟 |
| 50002 | 业务处理失败 | isv.business-failed:-5123 | -5123:已存在全部达人策略 | -5123:已存在全部达人策略 |
| 50002 | 业务处理失败 | isv.business-failed:-2050 | -2050:商家店铺权限异常 | -2050:商家店铺权限异常 |
| 50002 | 业务处理失败 | isv.business-failed:-2051 | -2051:商家无法操作该商品 | -2051:商家无法操作该商品 |
| 50002 | 业务处理失败 | isv.business-failed:-5129 | -5129:佣金大小范围错误 | -5129:佣金大小范围错误 |
| 50002 | 业务处理失败 | isv.business-failed:-5137 | -5137:指定类目禁止设置全部达人策略 | -5137:指定类目禁止设置全部达人策略 |
| 50002 | 业务处理失败 | isv.business-failed:-5125 | -5125:存在专属佣金策略，无法创建新策略；请关闭后重试 <a href="https://buyin.jinritemai.com/dashboard/product/promote-manage?product_id=3673819468687081681&openStatus=1" target="_blank">去关闭</a> | -5125:存在专属佣金策略，无法创建新策略；请关闭后重试 <a href="https://buyin.jinritemai.com/dashboard/product/promote-manage?product_id=3673819468687081681&openStatus=1" target="_blank">去关闭</a> |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
