# /product/qualityList

> 中文说明：店铺商品质量查询API  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/938>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/qualityList |
| 中文名称 | 店铺商品质量查询API |
| 文档目录 | 商品API |
| Article ID | 938 |
| 文档版本 | V3.07 |
| 官方更新时间 | 2025/3/10 21:16:13 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

查询店铺商品质量情况，对标后台商品成长中心

## 权限包

- 商品 / 商品成长中心（packageType=1）；适用应用类目：选品铺货-微应用、卡券商工具、撮合服务商、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.qualityList | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | false | 1 | 3502373827210525080 | 商品ID | - | - |
| 0 | product_name | product_name | false | 2 | 奈克牌皮鞋 | 商品名字 | - | - |
| 0 | order_by | sort_direction | false | 2 | desc | 排序方式，降序“desc”，升序“asc”， 不传默认降序 | - | - |
| 0 | page | page | true | 1 | 1 | 分页参数，页数从1开始 | - | - |
| 0 | page_size | page_size | true | 1 | 20 | 分页参数，每页大小，填写范围1~100； | - | - |
| 0 | task_id | task_id | true | 1 | 11013491 | 【已废弃】开发者可以传入：9999999999 | - | - |
| 0 | diagnose_status | diagnose_status | false | 3 | [1] | 商品诊断状态，0-待诊断；1-待优化；2-已修改审核中；3-已优化；以前的status 字段因为配置错误已经删除，请使用此新字段 | - | - |
| 0 | quality_score_version | quality_score_version | - | 2 | middle_score | 质量分版本，枚举：new_quality_score-新版，middle_score-旧版中标质量分已废弃。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | quality_list | product_diagnose_list | - | 3 | - | 商品质量列表 | - | R1 |
| 1 | quality_list.field_problem | field_problem | - | 3 | - | 可优化问题项 | - | R1 |
| 2 | quality_list.field_problem.suggestion | suggestion | - | 2 | 商品素材缺少，详情页的图片说明较少。促进商品购买的决策性信息过少，影响购买，建议丰富商品信息，上传不少于5张详情图片，将商品优势展示出来 | 问题建议 | - | - |
| 2 | quality_list.field_problem.problem_name | problem_name | - | 2 | 详情页图片较少 | 问题名 | - | - |
| 2 | quality_list.field_problem.problem_key | problem_key | - | 1 | 2002 | 问题编码 | - | - |
| 2 | quality_list.field_problem.field_name | field_name | - | 2 | 标题 | 字段名 | - | - |
| 2 | quality_list.field_problem.field_key | field_key | - | 2 | product_name | 字段key，category-类目、props-属性、product_name-标题、pic-主图、desc_pic-详情图片、desc_text-详情文字 | - | - |
| 1 | quality_list.quality_score | quality_score | - | 5 | - | 质量分数据 | - | R1 |
| 2 | quality_list.quality_score.version | version | - | 2 | middle_score | 质量分版本 | - | - |
| 2 | quality_list.quality_score.level | level | - | 2 | lv3 | 质量分等级 | - | - |
| 2 | quality_list.quality_score.score | score | - | 1 | 100 | 质量分 | - | - |
| 1 | quality_list.product_id | product_id | - | 1 | 3502373827210525080 | 商品ID | - | R1 |
| 1 | quality_list.product_name | product_name | - | 2 | 奈克牌皮鞋 | 商品名字 | - | R1 |
| 1 | quality_list.problem_num_to_improve | problem_num_to_improve | - | 1 | 2 | 待优化问题数量 | - | R1 |
| 1 | quality_list.problem_type_distribution | problem_type_distribution | - | 3 | - | 待优化问题分布列表，废弃不再用 | - | R1 |
| 2 | quality_list.problem_type_distribution.type_name | type_name | - | 2 | 关键信息需优化 | 待优化问题类型 | - | R1 |
| 2 | quality_list.problem_type_distribution.num | num | - | 1 | 1 | 问题数量 | - | R1 |
| 1 | quality_list.meet_standard | meet_standard | - | 1 | 2 | 商品是否达标，1达标，2不达标 | - | R1 |
| 1 | quality_list.base_score | base_score | - | 1 | 20 | 商品基础分，废弃不再用 | - | R1 |
| 0 | total | total | - | 1 | 50 | 店铺待优化商品总量 | - | R1 |

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
ProductQualityListRequest request = new ProductQualityListRequest();
ProductQualityListParam param = request.getParam();
param.setProductId(3502373827210525080L);
param.setProductName("奈克牌皮鞋");
param.setOrderBy("desc");
param.setPage(1L);
param.setPageSize(20L);
param.setTaskId(11013491L);
param.setDiagnoseStatus([1]);
param.setQualityScoreVersion("middle_score");
ProductQualityListResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductQualityListRequest();
$param = new ProductQualityListParam();
$request->setParam($param);
$param->product_id = 3502373827210525080;
$param->product_name = "奈克牌皮鞋";
$param->order_by = "desc";
$param->page = 1;
$param->page_size = 20;
$param->task_id = 11013491;
$param->diagnose_status = [1];
$param->quality_score_version = "middle_score";
$response = $request->execute(accessToken);

```

### python

```python
request = ProductQualityListRequest()
param = request.getParams()
param.product_id = 3502373827210525080
param.product_name = "奈克牌皮鞋"
param.order_by = "desc"
param.page = 1
param.page_size = 20
param.task_id = 11013491
param.diagnose_status = [1]
param.quality_score_version = "middle_score"
response = request.execute(accessToken)

```

### go

```go
request := product_qualityList_request.New()
param := request.GetParams()
param.ProductId = 3502373827210525080
param.ProductName = "奈克牌皮鞋"
param.OrderBy = "desc"
param.Page = 1
param.PageSize = 20
param.TaskId = 11013491
param.DiagnoseStatus = [1]
param.QualityScoreVersion = "middle_score"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductQualityListRequest();
var param = request.BuildParam();
param.ProductId = 3502373827210525080;
param.ProductName = "奈克牌皮鞋";
param.OrderBy = "desc";
param.Page = 1;
param.PageSize = 20;
param.TaskId = 11013491;
param.DiagnoseStatus = [1];
param.QualityScoreVersion = "middle_score";
var response = request.Execute<ProductQualityListResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:2030003 | 缺少必要参数 | 补充必要参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:2030004 | 参数值非法 | 按要求填写参数值 |
| 20000 | 系统错误 | isp.service-error:2030001 | 系统异常 | 等待后重试 |
| 20000 | 系统错误 | isp.service-error:2030201 | 读取数据失败 | 系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2030013 | 2030013:读取商品失败 | 系统异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
