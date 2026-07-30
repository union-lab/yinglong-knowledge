# /buyin/MCNSearchKolExclusiveProductList

> 中文说明：MCN机构查询达人专属活动商品列表  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2863>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/MCNSearchKolExclusiveProductList |
| 中文名称 | MCN机构查询达人专属活动商品列表 |
| 文档目录 | 精选联盟API |
| Article ID | 2863 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/12/26 16:34:54 |
| 授权主体 | ["MCN机构"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

MCN机构查询结算绑定的达人的专属活动商品列表，包括平台和商家的专属价活动商品。可通过/buyin/MCNSearchKolExclusiveActivityList 查询商家专属价活动列表

## 权限包

- 精选联盟 / 精选联盟活动转链（packageType=1）；适用应用类目：联盟抖客分销
- 精选联盟 / 机构达人管理（packageType=1）；适用应用类目：机构选品、机构管理、联盟机构自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.MCNSearchKolExclusiveProductList | 调用的API接口名称 | - | - |
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
| 0 | kol_buyin_id | kol_buyin_id | true | 2 | 7942326897690870024 | 具有结算绑定关系的达人百应ID | - | - |
| 0 | page | page | true | 1 | 1 | 分页数，从1开始 | - | - |
| 0 | page_size | page_size | true | 1 | 20 | 每页大小，最大20 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | kol_exclusive_product_infos | kol_exclusive_product_infos | - | 3 | - | 专属商品列表，包括商家配置专属商品和平台专属商品 | - | R1 |
| 1 | kol_exclusive_product_infos.product_id | product_id | - | 2 | 3588227155844278633 | 商品ID | - | - |
| 1 | kol_exclusive_product_infos.shop_id | shop_id | - | 1 | 77822 | 店铺ID | - | - |
| 0 | total | total | - | 1 | 10 | 总数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/MCNSearchKolExclusiveProductList?app_key=your_appkey_here&method=buyin.MCNSearchKolExclusiveProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/MCNSearchKolExclusiveProductList?app_key=your_appkey_here&method=buyin.MCNSearchKolExclusiveProductList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinMCNSearchKolExclusiveProductListRequest request = new BuyinMCNSearchKolExclusiveProductListRequest();
BuyinMCNSearchKolExclusiveProductListParam param = request.getParam();
param.setKolBuyinId("7942326897690870024");
param.setPage(1L);
param.setPageSize(20L);
BuyinMCNSearchKolExclusiveProductListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinMCNSearchKolExclusiveProductListRequest();
$param = new BuyinMCNSearchKolExclusiveProductListParam();
$request->setParam($param);
$param->kol_buyin_id = "7942326897690870024";
$param->page = 1;
$param->page_size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinMCNSearchKolExclusiveProductListRequest()
param = request.getParams()
param.kol_buyin_id = "7942326897690870024"
param.page = 1
param.page_size = 20
response = request.execute(accessToken)

```

### go

```go
request := buyin_MCNSearchKolExclusiveProductList_request.New()
param := request.GetParams()
param.KolBuyinId = "7942326897690870024"
param.Page = 1
param.PageSize = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinMCNSearchKolExclusiveProductListRequest();
var param = request.BuildParam();
param.KolBuyinId = "7942326897690870024";
param.Page = 1;
param.PageSize = 20;
var response = request.Execute<BuyinMCNSearchKolExclusiveProductListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:4141 | 无效page | 无效page |
| 40004 | 非法的参数 | isv.parameter-invalid:4097 | 无效分页大小 | 无效分页大小 |
| 40004 | 非法的参数 | isv.parameter-invalid:4173 | 无效百应ID | 无效百应ID |
| 50002 | 业务处理失败 | isv.business-failed:4397 | 仅支持抖音、火山达人 | 仅支持抖音、火山达人 |
| 50002 | 业务处理失败 | isv.business-failed:4396 | 请确认结算绑定关系 | 请确认结算绑定关系 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
