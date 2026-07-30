# /freightTemplate/update

> 中文说明：更新运费模板  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1662>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /freightTemplate/update |
| 中文名称 | 更新运费模板 |
| 文档目录 | 物流发货API |
| Article ID | 1662 |
| 文档版本 | V5.01 |
| 官方更新时间 | 2025/3/17 16:50:50 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

更新运费模板

## 权限包

- 商品 / 运费模板信息查询（packageType=1）；适用应用类目：微应用-标题优化、AI拼图-微应用、营销管理-小程序定制、打单发货-微应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家后台系统、即时零售商品服务、微应用-主图视频、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、订单管理、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | freightTemplate.update | 调用的API接口名称 | - | - |
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
| 0 | template | template | true | 5 | - | 运费模板相关 | - | - |
| 1 | template.id | id | true | 99 | 281489 | 要更新的运费模板id | - | - |
| 1 | template.template_name | template_name | true | 2 | open测试模板名称 | 模板名称 | - | - |
| 1 | template.product_province | product_province | false | 99 | 32 | 发货省份 | - | - |
| 1 | template.product_city | product_city | false | 99 | 320100 | 发货城市 | - | - |
| 1 | template.calculate_type | calculate_type | false | 99 | 1 | 计价方式-1.按重量 2.按数量；模板类型为1、2、3时，计价类型传2 | - | - |
| 1 | template.transfer_type | transfer_type | false | 99 | 1 | 快递方式-1.快递 | - | - |
| 1 | template.rule_type | rule_type | false | 99 | 0 | 模板类型-0:阶梯计价 1:固定运费 2:卖家包邮 3:货到付款 | - | - |
| 1 | template.fixed_amount | fixed_amount | false | 99 | 1 | 固定运费金额(单位:分) 固定运费模板必填 1-9900之间的整数 | - | - |
| 0 | columns | columns | false | 3 | - | 运费模板规则信息；每种类型模板可创建的规则类型: 阶梯计价模板-默认规则，普通计价规则，包邮规则，限运规则;固定运费模板-包邮规则，限运规则;固定运费模板-包邮规则，限运规则;包邮模板-限运规则;货到付款模板-限运规则 | - | - |
| 1 | columns.rule_type | rule_type | false | 99 | 1 | 0:阶梯计价；1:固定运费；2:卖家包邮 | - | - |
| 1 | columns.fixed_amount | fixed_amount | false | 99 | 1 | 固定运费（仅在多种履约模式下生效该字段） | - | - |
| 1 | columns.delivery_fulfillment_mode | delivery_fulfillment_mode | false | 99 | 2 | 2:次日达；3:全国送；（仅在多种履约模式下生效该字段）；100：中转履约模式 | - | - |
| 1 | columns.end_time | end_time | false | 99 | 1736776360 | 限售规则解除时间戳，秒 | - | - |
| 1 | columns.reason | reason | false | 2 | other | 限售原因。枚举值<br>distance_shipping_cost_high：因配送距离导致运费过高<br>weight_shipping_cost_high：因商品重量导致运费过高<br>force_majeure：因不可抗力（如会议赛事、自然灾害）不配送<br>cooperation_express_not_deliver：合作快递不配送<br>cooperation_express_poor_service：合作快递该区域服务差<br>other：其他 | - | - |
| 1 | columns.first_weight | first_weight | false | 9 | 0.1 | 首重(单位:kg) 按重量计价必填 0.1-999.9之间的小数，小数点后一位 | - | - |
| 1 | columns.first_weight_price | first_weight_price | false | 9 | 0.01 | 首重价格(单位:元) 按重量计价必填 0.00-100.00之间的小数，小数点后两位 | - | - |
| 1 | columns.first_num | first_num | false | 99 | 1 | 首件数量(单位:个) 按数量计价必填 1-999的整数 | - | - |
| 1 | columns.first_num_price | first_num_price | false | 9 | 0.01 | 首件价格(单位:元)按数量计价必填 0.00-100.00之间的小数，小数点后两位 | - | - |
| 1 | columns.add_weight | add_weight | false | 9 | 0.1 | 续重(单位:kg) 按重量计价必填 0.1-999.9之间的小数，小数点后一位 | - | - |
| 1 | columns.add_weight_price | add_weight_price | false | 9 | 0.01 | 续重价格(单位:元) 按重量计价必填 0.00-100.00之间的小数，小数点后两位 | - | - |
| 1 | columns.add_num | add_num | false | 99 | 1 | 续件(单位：个)calculate_type=2必填 1-999的整数 | - | - |
| 1 | columns.add_num_price | add_num_price | false | 9 | 0.01 | 续件价格(单位:元) 按数量计价必填 0.00-100.00之间的小数，小数点后两位 | - | - |
| 1 | columns.is_default | is_default | false | 99 | 1 | 是否默认计价方式(1:是；0:不是) | - | - |
| 1 | columns.is_limited | is_limited | false | 4 | false | 是否限运规则 | - | - |
| 1 | columns.rule_address | rule_address | false | 2 | {"11":{"110000":{"110114":[110114116,110114007]}}} | 当前规则生效的地址，非默认规则必填。map<i64, map<i64, map<i64, list<i64>>>>的json格式，省->市->区->街道，填至选择到的层级即可，仅限售规则支持四级街道 | - | - |
| 1 | columns.is_over_free | is_over_free | false | 4 | false | 是否包邮规则 | - | - |
| 1 | columns.over_weight | over_weight | false | 9 | 0.1 | 满xx重量包邮(单位:kg)0.1-10.0之间的小数，小数点后一位 | - | - |
| 1 | columns.over_amount | over_amount | false | 99 | 10 | 满xx金额包邮(单位:分)10-99900的整数 | - | - |
| 1 | columns.over_num | over_num | false | 99 | 1 | 满xx件包邮 1-10之间的整数 | - | - |
| 1 | columns.min_sku_amount | min_sku_amount | false | 99 | 100 | 最小金额限制，单位分，不限制填-1 | - | - |
| 1 | columns.max_sku_amount | max_sku_amount | false | 99 | 500 | 最大金额限制，单位分，不限制填-1 | - | - |
| 1 | columns.province_infos | ProvinceInfos | false | 3 | - | 当前规则生效的地址，统一以List<Struct>结构返回，该结构为嵌套结构。对应的json格式为[{"id":"32","children":[{"id":"320500","children":[{"id":"320508","children":[{"id":"320508014"},{"id":"320508004"}]}]}]}] 注意：返回的为最新的四级地址版本（地址存储升级变更的可能，以最新的返回） | - | - |
| 2 | columns.province_infos.id | id | false | 99 | 22 | 地址id，第一级是省份、第二级是城市、第三级是区、第四级是街道 | - | - |
| 2 | columns.province_infos.children | children | false | 3 | - | 下一级地址信息 | - | - |
| 3 | columns.province_infos.children.id | id | false | 99 | 2222 | 地址id，第一级是省份、第二级是城市、第三级是区、第四级是街道 | - | - |
| 3 | columns.province_infos.children.children | children | false | 3 | - | 下一级地址信息 | - | - |
| 4 | columns.province_infos.children.children.id | id | false | 99 | 22222 | 地址id，第一级是省份、第二级是城市、第三级是区、第四级是街道 | - | - |
| 4 | columns.province_infos.children.children.children | children | false | 3 | - | 下一级地址信息 | - | - |
| 5 | columns.province_infos.children.children.children.id | id | false | 99 | 2222222 | 地址id，第一级是省份、第二级是城市、第三级是区、第四级是街道 | - | - |
| 0 | upsert_transfer_rule | UpsertTransferRule | false | 4 | false | 是否更新中转规则 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | template_id | template_id | - | 99 | 1234 | 运费模板id | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/freightTemplate/update?app_key=your_appkey_here&method=freightTemplate.update&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/freightTemplate/update?app_key=your_appkey_here&method=freightTemplate.update&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
FreightTemplateUpdateRequest request = new FreightTemplateUpdateRequest();
FreightTemplateUpdateParam param = request.getParam();
param.setUpsertTransferRule(false);
FreightTemplateUpdateResponse response = request.execute(accessToken);

```

### php

```php
$request = new FreightTemplateUpdateRequest();
$param = new FreightTemplateUpdateParam();
$request->setParam($param);
$param->upsert_transfer_rule = false;
$response = $request->execute(accessToken);

```

### python

```python
request = FreightTemplateUpdateRequest()
param = request.getParams()
param.upsert_transfer_rule = false
response = request.execute(accessToken)

```

### go

```go
request := freightTemplate_update_request.New()
param := request.GetParams()
param.UpsertTransferRule = false
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new FreightTemplateUpdateRequest();
var param = request.BuildParam();
param.UpsertTransferRule = false;
var response = request.Execute<FreightTemplateUpdateResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:422 | 入参校验未通过 | - |
| 40004 | 非法的参数 | isv.parameter-invalid:425 | 运费规则和普通运费规则选择的地址有冲突 | - |
| 40004 | 非法的参数 | isv.parameter-invalid:426 | 模板被锁定 | - |
| 40004 | 非法的参数 | isv.parameter-invalid:428 | 发货地址为空 | 补充发货省份或者城市 |
| 40004 | 非法的参数 | isv.parameter-invalid:429 | 非拍卖资质的商家不可创建运费到付的模板 | - |
| 20000 | 系统错误 | isp.service-error:500 | 内部异常，请重试 | - |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
