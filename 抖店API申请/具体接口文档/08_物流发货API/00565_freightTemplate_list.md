# /freightTemplate/list

> 中文说明：获取运费模板列表  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/565>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /freightTemplate/list |
| 中文名称 | 获取运费模板列表 |
| 文档目录 | 物流发货API |
| Article ID | 565 |
| 文档版本 | V2.02 |
| 官方更新时间 | 2021/6/4 14:25:20 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

获取运费模板列表

## 权限包

- 商品 / 运费模板信息查询（packageType=1）；适用应用类目：微应用-标题优化、AI拼图-微应用、营销管理-小程序定制、打单发货-微应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家后台系统、即时零售商品服务、微应用-主图视频、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、订单管理、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | freightTemplate.list | 调用的API接口名称 | - | - |
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
| 0 | name | name | false | 2 | 模版1 | 运费模板名称，支持模糊搜索 | - | - |
| 0 | page | page | false | 2 | 0 | 页数（默认为0，第一页从0开始） | - | - |
| 0 | size | size | false | 2 | 10 | 每页模板数（默认为10），最大值是100 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | List | List | - | 3 | - | 运费模版列表 | - | - |
| 1 | List.template | template | - | 5 | - | 运费模版 | - | - |
| 2 | List.template.id | id | - | 1 | 1 | 运费模板id，可用于商品发布接口使用 | - | R1 |
| 2 | List.template.template_name | template_name | - | 2 | 模版示例 | 运费模板名称 | - | R1 |
| 2 | List.template.product_province | product_province | - | 2 | "32" | 发货省份id | - | R1 |
| 2 | List.template.product_city | product_city | - | 2 | "320000" | 发货城市id | - | R1 |
| 2 | List.template.calculate_type | calculate_type | - | 1 | 1 | 计价方式-1.按重量计价 2.按数量计价 | - | R1 |
| 2 | List.template.transfer_type | transfer_type | - | 1 | 1 | 快递方式-1.快递 目前仅支持1 | - | R1 |
| 2 | List.template.rule_type | rule_type | - | 1 | 1 | 模板类型-0:阶梯计价 1:固定运费 2:卖家包邮 3:货到付款 | - | R1 |
| 2 | List.template.fixed_amount | fixed_amount | - | 1 | 1 | 固定运费金额(单位:分) 固定运费模板必填 1-9900之间的整数 | - | R1 |
| 0 | Count | Count | - | 1 | 1 | 总数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/freightTemplate/list?app_key=your_appkey_here&method=freightTemplate.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/freightTemplate/list?app_key=your_appkey_here&method=freightTemplate.list&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
FreightTemplateListRequest request = new FreightTemplateListRequest();
FreightTemplateListParam param = request.getParam();
param.setName("模版1");
param.setPage("0");
param.setSize("10");
FreightTemplateListResponse response = request.execute(accessToken);

```

### php

```php
$request = new FreightTemplateListRequest();
$param = new FreightTemplateListParam();
$request->setParam($param);
$param->name = "模版1";
$param->page = "0";
$param->size = "10";
$response = $request->execute(accessToken);

```

### python

```python
request = FreightTemplateListRequest()
param = request.getParams()
param.name = "模版1"
param.page = "0"
param.size = "10"
response = request.execute(accessToken)

```

### go

```go
request := freightTemplate_list_request.New()
param := request.GetParams()
param.Name = "模版1"
param.Page = "0"
param.Size = "10"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new FreightTemplateListRequest();
var param = request.BuildParam();
param.Name = "模版1";
param.Page = "0";
param.Size = "10";
var response = request.Execute<FreightTemplateListResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:20013 | 获取运费模板列表失败，请稍后重试 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:20012 | 20012:size参数格式错误 | 请检查size参数格式 |
| 50002 | 业务处理失败 | isv.business-failed:20011 | 20011:page参数格式错误 | 请检查page参数格式 |
| 50002 | 业务处理失败 | isv.business-failed:422 | 422:搜索超过最大字数限制 | 请检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:500 | 500:查询运费模版失败 | 请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
