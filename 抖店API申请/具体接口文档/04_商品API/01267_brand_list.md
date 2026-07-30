# /brand/list

> 中文说明：根据类目id获取可选品牌  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1267>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /brand/list |
| 中文名称 | 根据类目id获取可选品牌 |
| 文档目录 | 商品API |
| Article ID | 1267 |
| 文档版本 | V5.01 |
| 官方更新时间 | 2023/5/30 19:25:04 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

返回某个叶子类目下的可用品牌列表，没有品牌授权限制的类目支持前缀搜索

## 权限包

- 店铺 / 店铺授权品牌查询（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、卡券商工具、撮合服务商、AI拼图-微应用、搭配购-微应用、微应用-商详海报、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播间AI导购、直播间导购-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | brand.list | 调用的API接口名称 | - | - |
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
| 0 | categories | Categories | false | 3 | [123] | （已停止使用）类目列表 | - | - |
| 0 | offset | Offset | false | 1 | 0 | （已停止使用）起始位 | - | - |
| 0 | size | Size | false | 1 | 10 | （已停止使用）单次最大条数 | - | - |
| 0 | sort | Sort | false | 7 | 0 | （已停止使用）排序顺序，默认为倒排 0:降序, 1:升序 | - | - |
| 0 | status | Status | false | 7 | 2 | （已停止使用）品牌状态 1:审核中, 2:审核通过, 3:审核拒绝 | - | - |
| 0 | full_brand_info | FullBrandInfo | false | 4 | true | （已停止使用）是否返回完全的品牌信息 | - | - |
| 0 | category_id | category_id | false | 1 | 123 | （推荐使用，必填）类目id | - | - |
| 0 | query | query | false | 2 | wu | 品牌前缀（中文或者英文），适用于不需要品牌资质的场景，根据前缀搜索品牌 | - | - |
| 0 | brand_ids | brand_ids | false | 3 | [123] | （选填）品牌ids，传了品牌ids默认直接拿品牌id搜索并返回结果(放在brand_list里)，不会使用其他入参 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | brand_ids | BrandIds | - | 3 | [] | （已停止使用）品牌id列表 | - | R1 |
| 0 | brand_infos | BrandInfos | - | 8 | - | （已停止使用）品牌信息 | - | R1 |
| 1 | brand_infos.brand_id | BrandId | - | 1 | 0 | 品牌id | - | R1 |
| 1 | brand_infos.brand_name_c_n | BrandNameCN | - | 2 | 这是个示例 | 品牌中文名 | - | R1 |
| 1 | brand_infos.brand_name_e_n | BrandNameEN | - | 2 | xxx | 品牌英文名 | - | R1 |
| 1 | brand_infos.level | Level | - | 7 | 0 | 品牌评级 0-4 | - | R1 |
| 1 | brand_infos.status | Status | - | 7 | 1 | 品牌状态 1:上线, 2:下线 | - | R1 |
| 1 | brand_infos.brand_alias | BrandAlias | - | 3 | yyy | 品牌别名 | - | R1 |
| 1 | brand_infos.create_timestamp | CreateTimestamp | - | 1 | 1632293792 | 创建时间 | - | R1 |
| 1 | brand_infos.update_timestamp | UpdateTimestamp | - | 1 | 1632293792 | 更新时间 | - | R1 |
| 1 | brand_infos.audit_status | AuditStatus | - | 7 | 2 | 品牌审核状态 1:审核中, 2:审核通过, 3:审核拒绝, 4:送审失败 | - | R1 |
| 1 | brand_infos.biz_type | BizType | - | 7 | 0 | 业务类型 0:国内, 1:跨境电商, 2:广告 | - | R1 |
| 1 | brand_infos.logo | Logo | - | 2 | xyz | 品牌logo地址 | - | R1 |
| 0 | total | Total | - | 1 | 0 | （已停止使用）总数 | - | R1 |
| 0 | has_more | HasMore | - | 4 | True | （已停止使用）还有更多 | - | R1 |
| 0 | auth_required | auth_required | - | 4 | true | 类目是否要求品牌有授权 | - | R1 |
| 0 | auth_brand_list | auth_brand_list | - | 3 | - | 授权的品牌列表 | - | R1 |
| 1 | auth_brand_list.brand_id | brand_id | - | 1 | 123 | 品牌id | - | R1 |
| 1 | auth_brand_list.name_cn | name_cn | - | 2 | 中文名 | 中文名 | - | R1 |
| 1 | auth_brand_list.name_en | name_en | - | 2 | xxx | 英文名 | - | R1 |
| 0 | brand_list | brand_list | - | 3 | - | 未授权的品牌列表 | - | R1 |
| 1 | brand_list.brand_id | brand_id | - | 1 | 123 | 品牌id | - | R1 |
| 1 | brand_list.name_cn | name_cn | - | 2 | 中文名 | 中文名 | - | R1 |
| 1 | brand_list.name_en | name_en | - | 2 | xxx | 英文名 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/brand/list?app_key=your_appkey_here&method=brand.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/brand/list?app_key=your_appkey_here&method=brand.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BrandListRequest request = new BrandListRequest();
BrandListParam param = request.getParam();
param.setCategories([123]);
param.setOffset(0L);
param.setSize(10L);
param.setSort(0);
param.setStatus(2);
param.setFullBrandInfo(true);
param.setCategoryId(123L);
param.setQuery("wu");
param.setBrandIds([123]);
BrandListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BrandListRequest();
$param = new BrandListParam();
$request->setParam($param);
$param->categories = [123];
$param->offset = 0;
$param->size = 10;
$param->sort = 0;
$param->status = 2;
$param->full_brand_info = true;
$param->category_id = 123;
$param->query = "wu";
$param->brand_ids = [123];
$response = $request->execute(accessToken);

```

### python

```python
request = BrandListRequest()
param = request.getParams()
param.categories = [123]
param.offset = 0
param.size = 10
param.sort = 0
param.status = 2
param.full_brand_info = true
param.category_id = 123
param.query = "wu"
param.brand_ids = [123]
response = request.execute(accessToken)

```

### go

```go
request := brand_list_request.New()
param := request.GetParams()
param.Categories = [123]
param.Offset = 0
param.Size = 10
param.Sort = 0
param.Status = 2
param.FullBrandInfo = true
param.CategoryId = 123
param.Query = "wu"
param.BrandIds = [123]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BrandListRequest();
var param = request.BuildParam();
param.Categories = [123];
param.Offset = 0;
param.Size = 10;
param.Sort = 0;
param.Status = 2;
param.FullBrandInfo = true;
param.CategoryId = 123;
param.Query = "wu";
param.BrandIds = [123];
var response = request.Execute<BrandListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 参数category_id缺失 | 请检查是否输入了category_id参数 |
| 20000 | 系统错误 | isp.service-error:2010001 | 查询数据失败，系统异常 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 2010013:获取账号信息失败 | 请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
