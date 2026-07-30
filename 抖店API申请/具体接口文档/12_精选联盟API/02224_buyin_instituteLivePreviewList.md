# /buyin/instituteLivePreviewList

> 中文说明：获取直播预告及商品信息列表  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2224>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/instituteLivePreviewList |
| 中文名称 | 获取直播预告及商品信息列表 |
| 文档目录 | 精选联盟API |
| Article ID | 2224 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/6/26 10:13:25 |
| 授权主体 | ["机构","抖客"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

抖客获取直播预告及直播预告商品信息列表

## 权限包

- 精选联盟 / 精选联盟直播间分销（机构）（packageType=1）；适用应用类目：联盟抖客直播间分销、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 直播间分销物料（packageType=1）；适用应用类目：创新应用大赛_微应用、联盟抖客分销

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.instituteLivePreviewList | 调用的API接口名称 | - | - |
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
| 0 | buyin_id | buyin_id | true | 2 | 6945289506111766791 | 要查询的达人的百应ID | - | - |
| 0 | need_product_info | need_product_info | false | 4 | false | 是否需要预告对应的商品信息。需要商品信息会增加接口耗时，默认false | - | - |
| 0 | page | page | false | 99 | 1 | 页码，从1开始 | - | - |
| 0 | page_size | page_size | false | 99 | 20 | 每页直播预告数量，最大100 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 1 | 预告总数 | - | R1 |
| 0 | previews | previews | - | 3 | - | 直播预告及商品信息列表 | - | R1 |
| 1 | previews.preview_id | preview_id | - | 99 | 1234567 | 预告ID | - | R1 |
| 1 | previews.booking_num | booking_num | - | 99 | 20 | 预约预告人数 | - | R1 |
| 1 | previews.start_time | start_time | - | 99 | 1658095200 | 直播开始时间 | - | R1 |
| 1 | previews.product_count | product_count | - | 99 | 6 | 商品数量 | - | R1 |
| 1 | previews.products | products | - | 3 | - | 商品详情列表 | - | R1 |
| 2 | previews.products.list_num | list_num | - | 99 | 1 | 商品在列表序号 | - | R1 |
| 2 | previews.products.product_id | product_id | - | 0 | 3094093204930502 | 商品ID | 39 | R1 |
| 2 | previews.products.title | title | - | 2 | 测试商品岩烧芝士脆饼干 | 商品名称 | 39 | R1 |
| 2 | previews.products.price | price | - | 99 | 1000 | 商品售价（原价，单位为分） | 123 | R1 |
| 2 | previews.products.first_cid | first_cid | - | 99 | 20018 | 商品一级类目 | 39 | R1 |
| 2 | previews.products.first_cname | first_cname | - | 2 | 零食/坚果/特产 | 一级类目名称 | 39 | R1 |
| 2 | previews.products.second_cid | second_cid | - | 99 | 20313 | 商品二级类目 | 39 | R1 |
| 2 | previews.products.second_cname | second_cname | - | 2 | 饼干/膨化 | 二级类目名称 | 39 | R1 |
| 2 | previews.products.third_cid | third_cid | - | 99 | 22977 | 商品三级类目 | 39 | R1 |
| 2 | previews.products.third_cname | third_cname | - | 2 | 饼干 | 三级类目名称 | 39 | R1 |
| 2 | previews.products.category_id | category_id | - | 99 | 29187 | 行业类目 | 39 | R1 |
| 2 | previews.products.ads_promotion_ratio | ads_promotion_ratio | - | 5 | - | 渠道推广费率 | - | R1 |
| 3 | previews.products.ads_promotion_ratio.share_ratio | share_ratio | - | 99 | 1000 | 新客推广费率，返回结果X10000，如10%返回1000 | - | R1 |
| 3 | previews.products.ads_promotion_ratio.old_fans_ratio | old_fans_ratio | - | 99 | 500 | 老客推广费率，返回结果X10000，如10%返回1000 | - | R1 |
| 2 | previews.products.cover | cover | - | 2 | https://p6-aio.ecombdimg.com/obj/temai/6ef6ccb6699c9865be7e68c325bf22e7w | 商品主图 | - | R1 |
| 2 | previews.products.preview_price | preview_price | - | 99 | 1000 | 商品预告开播价，单位分 | - | R1 |
| 2 | previews.products.product_desc | product_desc | - | 2 | 满100减20 | 商品卖点 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/instituteLivePreviewList?app_key=your_appkey_here&method=buyin.instituteLivePreviewList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/instituteLivePreviewList?app_key=your_appkey_here&method=buyin.instituteLivePreviewList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinInstituteLivePreviewListRequest request = new BuyinInstituteLivePreviewListRequest();
BuyinInstituteLivePreviewListParam param = request.getParam();
param.setBuyinId("6945289506111766791");
param.setNeedProductInfo(false);
param.setPage(1);
param.setPageSize(20);
BuyinInstituteLivePreviewListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinInstituteLivePreviewListRequest();
$param = new BuyinInstituteLivePreviewListParam();
$request->setParam($param);
$param->buyin_id = "6945289506111766791";
$param->need_product_info = false;
$param->page = 1;
$param->page_size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinInstituteLivePreviewListRequest()
param = request.getParams()
param.buyin_id = "6945289506111766791"
param.need_product_info = false
param.page = 1
param.page_size = 20
response = request.execute(accessToken)

```

### go

```go
request := buyin_instituteLivePreviewList_request.New()
param := request.GetParams()
param.BuyinId = "6945289506111766791"
param.NeedProductInfo = false
param.Page = 1
param.PageSize = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinInstituteLivePreviewListRequest();
var param = request.BuildParam();
param.BuyinId = "6945289506111766791";
param.NeedProductInfo = false;
param.Page = 1;
param.PageSize = 20;
var response = request.Execute<BuyinInstituteLivePreviewListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4127 | 无效分页大小 | 参数校验失败: 无效分页大小 |
| 40004 | 非法的参数 | isv.parameter-invalid:4097 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:4098 | 无效百应ID | 无效百应ID |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，下游服务调用错误 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4129 | 达人未开通分销业务 | 请输入开通分销业务的达人buyinId |
| 40004 | 非法的参数 | isv.parameter-invalid:4109 | 当前达人没有直播预告功能权限 | 请输入开通直播预告权限的达人buyinId |
| 50002 | 业务处理失败 | isv.business-failed:8194 | 需【抖客】角色授权后访问 | 需【抖客】角色授权后访问 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
