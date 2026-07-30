# /product/getComponentTemplate

> 中文说明：分页查询模板列表  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1990>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getComponentTemplate |
| 中文名称 | 分页查询模板列表 |
| 文档目录 | 商品API |
| Article ID | 1990 |
| 文档版本 | V2.04 |
| 官方更新时间 | 2022/6/11 12:28:48 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

分页查询模板列表

## 权限包

- 商品 / 商品尺码模板（packageType=1）；适用应用类目：撮合服务商、AI拼图-微应用、营销管理-小程序定制、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、互动营销定制、短信营销、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getComponentTemplate | 调用的API接口名称 | - | - |
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
| 0 | template_type | template_type | false | 2 | size_info | 模板类型: size_info(尺码表) | - | - |
| 0 | template_sub_type | template_sub_type | false | 2 | clothing | 组件模板子类型；clothing -饰；undies-内衣；shoes 鞋靴；children_clothing-童装 | - | - |
| 0 | template_id | template_id | false | 1 | 101 | 模板ID | - | - |
| 0 | shareable | shareable | false | 4 | true | 是否设置为公有模板(多个商品可共用)。true-是，false-不是；不传默认true | - | - |
| 0 | page_num | page_num | false | 1 | 0 | 页码，从0开始，最大支持100 | - | - |
| 0 | page_size | page_size | false | 1 | 20 | 每页条数，最大支持20；page_size和template_id二选一入参 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | component_template_info_list | componentTemplateInfoList | - | 3 | - | 尺码模板列表 | - | R1 |
| 1 | component_template_info_list.template_id | template_id | - | 1 | 101 | 模板ID | - | R1 |
| 1 | component_template_info_list.template_type | template_type | - | 2 | size_info | 模板类型: size_info(尺码表) | - | R1 |
| 1 | component_template_info_list.template_sub_type | template_sub_type | - | 2 | clothing | 组件模板子类型:clothing、undies、shoes、children_clothing | - | R1 |
| 1 | component_template_info_list.template_name | template_name | - | 2 | 模板名称1 | 模板名称 | - | R1 |
| 1 | component_template_info_list.component_data | component_data | - | 2 | {"title":"衣服尺码title","sub_title":"衣服尺码desc","selected_size":["XS","M"],"selected_specs":["身高（cm）","体重（斤）","胸围（cm）"],"config":{"M":{"体重（斤）":"70","胸围（cm）":"67","身高（cm）":"110"},"XS":{"体重（斤）":"55","胸围（cm）":"66","身高（cm）":"100"}}} | 模板数据 | - | R1 |
| 1 | component_template_info_list.image | image | - | 5 | - | 尺码模板图片 | - | R1 |
| 2 | component_template_info_list.image.url | url | - | 2 | http://xxxx | 图片url | - | R1 |
| 2 | component_template_info_list.image.width | width | - | 6 | 250 | 图片宽度 | - | R1 |
| 2 | component_template_info_list.image.height | height | - | 6 | 256 | 图片长度 | - | R1 |
| 1 | component_template_info_list.shareable | shareable | - | 4 | false | 是否可共享 是-false 否-true | - | R1 |
| 1 | component_template_info_list.category_id | category_id | - | 1 | 22465 | 类目ID | - | R1 |
| 1 | component_template_info_list.create_time | create_time | - | 1 | 1 | 创建时间 | - | R1 |
| 1 | component_template_info_list.update_time | update_time | - | 1 | 1 | 更新时间 | - | R1 |
| 1 | component_template_info_list.component_front_data | component_front_data | - | 2 | {"title":"衣服尺码title","desc":"衣服尺码desc","tempName":"0711衣服模板tempName","configTable":[{"size":"XS","specMap":{"身高（cm）":"100","体重（斤）":"55","胸围（cm）":"66"}},{"size":"M","specMap":{"身高（cm）":"110","体重（斤）":"70","胸围（cm）":"67"}}],"selectedSpecs":["身高（cm）","体重（斤）","胸围（cm）"],"specOptions":["身高1（cm）","体重1（斤）","胸围1（cm）"],"selectedSize":["XS","M"]} | 模板配置数据 | - | R1 |
| 0 | total_num | total_num | - | 1 | 100 | 总页数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/getComponentTemplate?app_key=your_appkey_here&method=product.getComponentTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/getComponentTemplate?app_key=your_appkey_here&method=product.getComponentTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductGetComponentTemplateRequest request = new ProductGetComponentTemplateRequest();
ProductGetComponentTemplateParam param = request.getParam();
param.setTemplateType("size_info");
param.setTemplateSubType("clothing");
param.setTemplateId(101L);
param.setShareable(true);
param.setPageNum(0L);
param.setPageSize(20L);
ProductGetComponentTemplateResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetComponentTemplateRequest();
$param = new ProductGetComponentTemplateParam();
$request->setParam($param);
$param->template_type = "size_info";
$param->template_sub_type = "clothing";
$param->template_id = 101;
$param->shareable = true;
$param->page_num = 0;
$param->page_size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetComponentTemplateRequest()
param = request.getParams()
param.template_type = "size_info"
param.template_sub_type = "clothing"
param.template_id = 101
param.shareable = true
param.page_num = 0
param.page_size = 20
response = request.execute(accessToken)

```

### go

```go
request := product_getComponentTemplate_request.New()
param := request.GetParams()
param.TemplateType = "size_info"
param.TemplateSubType = "clothing"
param.TemplateId = 101
param.Shareable = true
param.PageNum = 0
param.PageSize = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetComponentTemplateRequest();
var param = request.BuildParam();
param.TemplateType = "size_info";
param.TemplateSubType = "clothing";
param.TemplateId = 101;
param.Shareable = true;
param.PageNum = 0;
param.PageSize = 20;
var response = request.Execute<ProductGetComponentTemplateResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:每页数量必须大于0 | page_size改为大于0，不大于20的数字 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:查询失败 | 2010001:查询失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
