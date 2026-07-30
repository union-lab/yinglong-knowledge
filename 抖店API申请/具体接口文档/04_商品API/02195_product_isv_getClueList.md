# /product/isv/getClueList

> 中文说明：提供给isv，根据店铺获取线索  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2195>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/isv/getClueList |
| 中文名称 | 提供给isv，根据店铺获取线索 |
| 文档目录 | 商品API |
| Article ID | 2195 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2024/2/28 14:28:01 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 15 |

## 使用说明

提供给isv，根据店铺获取线索

## 权限包

- 商品 / 机会品线索管理（packageType=1）；适用应用类目：商家后台系统、商品供应链、商品优化分析、电商ERP、商品基础工具
- 商品 / 标题优化（packageType=1）；适用应用类目：创新应用大赛_微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.isv/getClueList | 调用的API接口名称 | - | - |
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
| 0 | source_channel_code | SourceChannelCode | true | 2 | competitive | 渠道，competitive：搜索热招商机，shop_exclusive：店铺专属商机，query_none_less：搜索蓝海商机，industry_selected：行业趋势商机 | - | - |
| 0 | first_cid | FirstCid | false | 99 | 20005 | 一级类目id | - | - |
| 0 | second_cid | SecondCid | false | 99 | 20224 | 二级类目id | - | - |
| 0 | clue_info | ClueInfo | false | 2 | 线索名称 | 品牌名或线索名 | - | - |
| 0 | current | Current | true | 99 | 1 | 当前页(从1开始) | - | - |
| 0 | page_size | PageSize | true | 99 | 100 | 每页条数 | - | - |
| 0 | competitive_clue_type | CompetitiveClueType | false | 99 | 0 | 爆款类型，0：趋势爆款，1：行业爆款，2：品牌爆款，3：货源地爆款 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | Data | - | 3 | - | 返回值 | - | R1 |
| 1 | data.clue_id | ClueId | - | 99 | 29979 | 线索id | - | R1 |
| 1 | data.clue_name | ClueName | - | 2 | 线索名称 | 线索名 | - | R1 |
| 1 | data.pic_url | PicUrl | - | 2 | http://p3-tt.byteimg.com/image-pair-videos/sensitivejudge/130d697b314832c67631e8ab92f74017~tplv-sfvsc053ke-image.image | 图片链接 | - | R1 |
| 1 | data.first_cid | FirstCid | - | 99 | 20005 | 一级类目id | - | R1 |
| 1 | data.first_name | FirstName | - | 2 | 女装 | 一级类目名称 | - | R1 |
| 1 | data.second_cid | SecondCid | - | 99 | 20224 | 二级类目id | - | R1 |
| 1 | data.second_name | SecondName | - | 2 | 连衣裙 | 二级类目名称 | - | R1 |
| 1 | data.brand_id | BrandId | - | 99 | 100002 | 品牌id | - | R1 |
| 1 | data.brand_name_cn | BrandNameCn | - | 2 | 示例品牌名称 | 品牌中文名 | - | R1 |
| 1 | data.brand_name_en | BrandNameEn | - | 2 | Example Brand Name | 品牌英文名 | - | R1 |
| 0 | total | Total | - | 99 | 100 | 总条数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/isv/getClueList?app_key=your_appkey_here&method=product.isv.getClueList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/isv/getClueList?app_key=your_appkey_here&method=product.isv.getClueList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductIsvGetClueListRequest request = new ProductIsvGetClueListRequest();
ProductIsvGetClueListParam param = request.getParam();
param.setSourceChannelCode("competitive");
param.setFirstCid(20005L);
param.setSecondCid(20224L);
param.setClueInfo("线索名称");
param.setCurrent(1L);
param.setPageSize(100L);
param.setCompetitiveClueType(0);
ProductIsvGetClueListResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductIsvGetClueListRequest();
$param = new ProductIsvGetClueListParam();
$request->setParam($param);
$param->source_channel_code = "competitive";
$param->first_cid = 20005;
$param->second_cid = 20224;
$param->clue_info = "线索名称";
$param->current = 1;
$param->page_size = 100;
$param->competitive_clue_type = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductIsvGetClueListRequest()
param = request.getParams()
param.source_channel_code = "competitive"
param.first_cid = 20005
param.second_cid = 20224
param.clue_info = "线索名称"
param.current = 1
param.page_size = 100
param.competitive_clue_type = 0
response = request.execute(accessToken)

```

### go

```go
request := product_isv_getClueList_request.New()
param := request.GetParams()
param.SourceChannelCode = "competitive"
param.FirstCid = 20005
param.SecondCid = 20224
param.ClueInfo = "线索名称"
param.Current = 1
param.PageSize = 100
param.CompetitiveClueType = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductIsvGetClueListRequest();
var param = request.BuildParam();
param.SourceChannelCode = "competitive";
param.FirstCid = 20005;
param.SecondCid = 20224;
param.ClueInfo = "线索名称";
param.Current = 1;
param.PageSize = 100;
param.CompetitiveClueType = 0;
var response = request.Execute<ProductIsvGetClueListResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:501 | 查询店铺失败 | 联系开发者 |
| 20000 | 系统错误 | isp.service-error:502 | 系统异常 | 联系开发者 |
| 20000 | 系统错误 | isp.service-error:503 | 系统异常 | 联系开发者 |
| 40004 | 非法的参数 | isv.parameter-invalid:504 | 分页参数不合法 | 分页参数不合法 |
| 40004 | 非法的参数 | isv.parameter-invalid:505 | 渠道类型不存在 | 渠道类型不存在 |
| 50002 | 业务处理失败 | isv.business-failed:500 | 系统异常 | 联系开发者 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
