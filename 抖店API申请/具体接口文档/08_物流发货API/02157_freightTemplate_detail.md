# /freightTemplate/detail

> 中文说明：获取运费模板详情  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/2157>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /freightTemplate/detail |
| 中文名称 | 获取运费模板详情 |
| 文档目录 | 物流发货API |
| Article ID | 2157 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2025/3/11 14:50:13 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

open获取运费模板详情

## 权限包

- 商品 / 运费模板信息查询（packageType=1）；适用应用类目：微应用-标题优化、AI拼图-微应用、营销管理-小程序定制、打单发货-微应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家后台系统、即时零售商品服务、微应用-主图视频、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、订单管理、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 物流发货 / 即时零售物流发货（packageType=1）；适用应用类目：即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 物流发货 / 抖超商家运力（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | freightTemplate.detail | 调用的API接口名称 | - | - |
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
| 0 | freight_id | FreightId | true | 99 | 3748974 | 模板id | - | - |
| 0 | query_option | GetFreightOption | false | 5 | - | 查询请求 | - | - |
| 1 | query_option.query_transfer_rule | QueryTransferRule | true | 4 | false | 是否查询中转规则，默认false | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | Data | - | 11 | - | 模板详情 | - | R1 |
| 1 | data.template | template | - | 5 | - | 模板信息 | - | R1 |
| 2 | data.template.id | id | - | 99 | 342421 | 模板id | - | R1 |
| 2 | data.template.template_name | template_name | - | 2 | 限运模板一 | 模板名称 | - | R1 |
| 2 | data.template.product_province | product_province | - | 2 | 22 | 发货省份id | - | R1 |
| 2 | data.template.product_city | product_city | - | 2 | 2222 | 发货城市id | - | R1 |
| 2 | data.template.calculate_type | calculate_type | - | 99 | 1 | 计价方式-1.按重量计价 2.按数量计价 | - | R1 |
| 2 | data.template.transfer_type | transfer_type | - | 99 | 1 | 快递方式-1.快递 目前仅支持1 | - | R1 |
| 2 | data.template.rule_type | rule_type | - | 99 | 1 | 模板类型-0:阶梯计价 1:固定运费 2:卖家包邮 3:货到付款 | - | R1 |
| 2 | data.template.fixed_amount | fixed_amount | - | 99 | 1 | 固定运费金额(单位:分) 固定运费模板必填 1-9900之间的整数 | - | R1 |
| 1 | data.columns | columns | - | 3 | - | 规则 | - | R1 |
| 2 | data.columns.delivery_fulfillment_mode | delivery_fulfillment_mode | - | 99 | 100 | 中转履约模式 | - | - |
| 2 | data.columns.rule_type | rule_type | - | 99 | 1 | 运费模板类型，0：阶梯计价；1：固定运费；2：卖家包邮；（仅在多种履约模式下生效该字段） | - | - |
| 2 | data.columns.fixed_amount | fixed_amount | - | 99 | 1 | 固定运费：仅在多种履约模式下生效该字段 | - | - |
| 2 | data.columns.delivery_fulfillment_mode | delivery_fulfillment_mode | - | 99 | 1 | 2:次日达；3:全国送；仅在多种履约模式下生效该字段 | - | - |
| 2 | data.columns.end_time | end_time | - | 99 | 123456 | 限售自动解除时间戳，单位秒 | - | - |
| 2 | data.columns.reason | reason | - | 2 | other | 限售原因。枚举值<br>distance_shipping_cost_high：因配送距离导致运费过高<br>weight_shipping_cost_high：因商品重量导致运费过高<br>force_majeure：因不可抗力（如会议赛事、自然灾害）不配送<br>cooperation_express_not_deliver：合作快递不配送<br>cooperation_express_poor_service：合作快递该区域服务差<br>other：其他 | - | - |
| 2 | data.columns.first_weight | first_weight | - | 9 | 1.0 | 首重(单位:kg) 按重量计价必填 0.1-999.9之间的小数，小数点后一位 | - | R1 |
| 2 | data.columns.first_weight_price | first_weight_price | - | 9 | 1.01 | 首重价格(单位:元) 按重量计价必填 0.00-30.00之间的小数，小数点后两位 | - | R1 |
| 2 | data.columns.first_num | first_num | - | 99 | 1 | 首件数量(单位:个) 按数量计价必填 1-999的整数 | - | R1 |
| 2 | data.columns.first_num_price | first_num_price | - | 9 | 1.01 | 首件价格(单位:元)按数量计价必填 0.00-30.00之间的小数，小数点后两位 | - | R1 |
| 2 | data.columns.add_weight | add_weight | - | 9 | 1.01 | 续重(单位:kg) 按重量计价必填 0.1-999.9之间的小数，小数点后一位 | - | R1 |
| 2 | data.columns.add_weight_price | add_weight_price | - | 9 | 1.01 | 续重价格(单位:元) 按重量计价必填 0.00-30.00之间的小数，小数点后两位 | - | R1 |
| 2 | data.columns.add_num | add_num | - | 99 | 1 | 续件(单位:个) 按数量计价必填 1-999的整数 | - | R1 |
| 2 | data.columns.add_num_price | add_num_price | - | 9 | 1.01 | 续件价格(单位:元) 按数量计价必填 0.00-30.00之间的小数，小数点后两位 | - | R1 |
| 2 | data.columns.is_default | is_default | - | 99 | 1 | 是否默认计价方式(1:是；0:不是) | - | R1 |
| 2 | data.columns.is_limited | is_limited | - | 4 | true | 是否限运规则 | - | R1 |
| 2 | data.columns.is_over_free | is_over_free | - | 4 | true | 是否包邮规则 | - | R1 |
| 2 | data.columns.over_weight | over_weight | - | 9 | 1.0 | 满xx重量包邮(单位:kg)0.1-10.0之间的小数，小数点后一位 | - | R1 |
| 2 | data.columns.over_amount | over_amount | - | 99 | 1 | 满xx金额包邮(单位:分)10-99900的整数 | - | R1 |
| 2 | data.columns.over_num | over_num | - | 99 | 1 | 满xx件包邮 1-10之间的整数 | - | R1 |
| 2 | data.columns.province_infos | ProvinceInfos | - | 3 | - | 当前规则生效的地址，统一以List<Struct>结构返回，该结构为嵌套结构。对应的json格式为[{"id":"32","children":[{"id":"320500","children":[{"id":"320508","children":[{"id":"320508014"},{"id":"320508004"}]}]}]}] 注意：返回的为最新的四级地址版本（地址存储升级变更的可能，以最新的返回） | - | R1 |
| 3 | data.columns.province_infos.id | id | - | 2 | 1 | 地址id，第一级是省份、第二级是城市、第三级是区、第四级是街道 | - | R1 |
| 3 | data.columns.province_infos.children | children | - | 3 | - | 下一级地址信息 | - | R1 |
| 4 | data.columns.province_infos.children.id | id | - | 2 | 1 | 地址id，第一级是省份、第二级是城市、第三级是区、第四级是街道 | - | R1 |
| 4 | data.columns.province_infos.children.children | children | - | 3 | - | 下一级地址信息 | - | R1 |
| 5 | data.columns.province_infos.children.children.id | id | - | 2 | 1 | 地址id，第一级是省份、第二级是城市、第三级是区、第四级是街道 | - | R1 |
| 5 | data.columns.province_infos.children.children.children | children | - | 3 | - | 下一级地址信息 | - | R1 |
| 6 | data.columns.province_infos.children.children.children.id | id | - | 2 | 1 | 地址id，第一级是省份、第二级是城市、第三级是区、第四级是街道 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/freightTemplate/detail?app_key=your_appkey_here&method=freightTemplate.detail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/freightTemplate/detail?app_key=your_appkey_here&method=freightTemplate.detail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
FreightTemplateDetailRequest request = new FreightTemplateDetailRequest();
FreightTemplateDetailParam param = request.getParam();
param.setFreightId(3748974L);
FreightTemplateDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new FreightTemplateDetailRequest();
$param = new FreightTemplateDetailParam();
$request->setParam($param);
$param->freight_id = 3748974;
$response = $request->execute(accessToken);

```

### python

```python
request = FreightTemplateDetailRequest()
param = request.getParams()
param.freight_id = 3748974
response = request.execute(accessToken)

```

### go

```go
request := freightTemplate_detail_request.New()
param := request.GetParams()
param.FreightId = 3748974
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new FreightTemplateDetailRequest();
var param = request.BuildParam();
param.FreightId = 3748974;
var response = request.Execute<FreightTemplateDetailResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:3 | 模板丢失 | 模板丢失 |
| 20000 | 系统错误 | isp.service-error:2 | 模板未找到 | 模板未找到 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
