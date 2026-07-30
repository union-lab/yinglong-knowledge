# /product/isv/scanClue

> 中文说明：扫描获取商机中心全量线索信息  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4801>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/isv/scanClue |
| 中文名称 | 扫描获取商机中心全量线索信息 |
| 文档目录 | 商品API |
| Article ID | 4801 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/10/20 10:32:20 |
| 授权主体 | [] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

扫描获取商机中心全量线索信息

## 权限包

- 商品 / 铺货代发-商品信息查询（packageType=1）；适用应用类目：商家后台系统、AIGC视频洞察
- 商品 / 商机选品（packageType=1）；适用应用类目：AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.isv/scanClue | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | false | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | clue_id | ClueId | true | 1 | 123 | 线索Id（游标id） | - | - |
| 0 | source_channel_code | SourceChannelCode | true | 3 | ["query_none_less","industry_selected"] | 渠道code，搜索热招：competitive，蓝海：query_none_less，行业趋势：industry_selected，低价：choice_low_price | - | - |
| 0 | page_size | PageSize | true | 1 | 100 | 限制200 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | Data | - | 3 | - | 线索列表 | - | R1 |
| 1 | data.clue_id | ClueId | - | 1 | 123 | 线索ID | - | - |
| 1 | data.clue_name | ClueName | - | 2 | 我是线索 | 线索名 | - | - |
| 1 | data.pic_url | PicUrl | - | 2 | "https://p3-aio.ecombdimg.com/obj/ecom-shop-material/SVCpeIZ_m_eb5bf8ba296491e6ed50bf4d5f4cb291_sx_38409_www" | 线索图片URL | - | - |
| 1 | data.first_cid | FirstCid | - | 1 | 20029 | 一级类目ID | - | - |
| 1 | data.first_name | FirstName | - | 2 | 彩妆/香水/美妆工具 | 一级类目名 | - | - |
| 1 | data.second_cid | SecondCid | - | 1 | 20570 | 二级类目ID | - | - |
| 1 | data.second_name | SecondName | - | 2 | 男士彩妆 | 二级类目名 | - | - |
| 1 | data.brand_id | BrandId | - | 1 | 0 | 品牌ID | - | - |
| 1 | data.brand_name_cn | BrandNameCn | - | 2 | "" | 品牌名-中文 | - | - |
| 1 | data.brand_name_en | BrandNameEn | - | 2 | "" | 品牌名-英文 | - | - |
| 1 | data.price_min | PriceMin | - | 1 | 1890 | 建议售价最小值, 单位 分 | - | - |
| 1 | data.price_max | PriceMax | - | 1 | 3990 | 建议售价最大值, 单位 分 | - | - |
| 1 | data.search_heat | SearchHeat | - | 1 | 577 | 搜索热度-根据搜索人数进行指数化处理，热度越高代表搜索人数越多 | - | - |
| 1 | data.demand_and_supply_rate | DemandAndSupplyRate | - | 9 | 4.56 | 需供比-根据近30天的用户搜索量 / 商品数量进行指数化处理，需供比越大代表当前商机潜力越大（供不应求） | - | - |
| 1 | data.third_cid | ThirdCid | - | 1 | 0 | 三级类目ID | - | - |
| 1 | data.third_name | ThirdName | - | 2 | "" | 三级类目名 | - | - |
| 1 | data.fourth_cid | FourthCid | - | 1 | 0 | 四级类目ID | - | - |
| 1 | data.fourth_name | FourthName | - | 2 | "" | 四级类目名 | - | - |
| 1 | data.query_name_cut_list | QueryNameCutList | - | 3 | ["加绒","加厚"] | 线索名的分词列表-底层是搜索审核打分的分词规则 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/isv/scanClue?app_key=your_appkey_here&method=product.isv.scanClue&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/isv/scanClue?app_key=your_appkey_here&method=product.isv.scanClue&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductIsvScanClueRequest request = new ProductIsvScanClueRequest();
ProductIsvScanClueParam param = request.getParam();
param.setClueId(123L);
param.setSourceChannelCode(["query_none_less","industry_selected"]);
param.setPageSize(100L);
ProductIsvScanClueResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductIsvScanClueRequest();
$param = new ProductIsvScanClueParam();
$request->setParam($param);
$param->clue_id = 123;
$param->source_channel_code = ["query_none_less","industry_selected"];
$param->page_size = 100;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductIsvScanClueRequest()
param = request.getParams()
param.clue_id = 123
param.source_channel_code = ["query_none_less","industry_selected"]
param.page_size = 100
response = request.execute(accessToken)

```

### go

```go
request := product_isv_scanClue_request.New()
param := request.GetParams()
param.ClueId = 123
param.SourceChannelCode = ["query_none_less","industry_selected"]
param.PageSize = 100
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductIsvScanClueRequest();
var param = request.BuildParam();
param.ClueId = 123;
param.SourceChannelCode = ["query_none_less","industry_selected"];
param.PageSize = 100;
var response = request.Execute<ProductIsvScanClueResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:501 | 系统异常 | 联系开发者 |
| 40004 | 非法的参数 | isv.parameter-invalid:502 | 渠道code限制错误 | 联系开发者 |
| 40004 | 非法的参数 | isv.parameter-invalid:503 | 分页参数错误 | pageSize不能小于等于0，不能超过限制值200 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
