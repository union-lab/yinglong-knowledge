# /spu/getSpuRule

> 中文说明：获取SPU发布规则和模板  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2312>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /spu/getSpuRule |
| 中文名称 | 获取SPU发布规则和模板 |
| 文档目录 | 商品API |
| Article ID | 2312 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/2/11 16:22:11 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

发布商品和发布SPU前需要调用此接口查看类目是否为SPU类目，如果是，会返回对应的管控策略和SPU发布表单

## 权限包

- 商品 / 商品类目属性查询（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、卡券商工具、撮合服务商、客服绩效-微应用、直播话术-微应用、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播工具、直播间AI导购、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | spu.getSpuRule | 调用的API接口名称 | - | - |
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
| 0 | category_id | category_id | true | 99 | 23362 | 类目ID | - | - |
| 0 | channel | channel | false | 99 | 0或1 | 类目2.0渠道字段。<br>0为获取门捷列夫类目下的规则。1为获取标准类目的规则。注意类目ID号段要与channel匹配，否则会报错。如23362为门捷列夫类目ID，channl需要为0.<br>系统会根据category_id自身字段判断是门捷还是标准类目，但是channel优先级更高 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | spu_property_rule | spu_property_rule | - | 3 | - | SPU属性规则 | - | R1 |
| 1 | spu_property_rule.property_name | property_name | - | 2 | 书名 | 属性名 | - | R1 |
| 1 | spu_property_rule.property_id | property_id | - | 99 | 1831 | 属性ID | - | R1 |
| 1 | spu_property_rule.is_required | is_required | - | 99 | 1 | 是否必填，0:非必填，1:必填 | - | R1 |
| 1 | spu_property_rule.value_type | value_type | - | 2 | select | 输入类型 select:单选，multi_select:多选，text:输入框，timestamp:时间戳，timeframe:时间区间 | - | R1 |
| 1 | spu_property_rule.property_type | property_type | - | 99 | 0 | 属性类型，0 绑定属性 1关键属性 2销售属性 | - | R1 |
| 1 | spu_property_rule.diy_type | diy_type | - | 99 | 0 | 是否支持枚举可输入 | - | R1 |
| 1 | spu_property_rule.max_select_num | max_select_num | - | 99 | 0 | 最大可选数量，多选时需要用 | - | R1 |
| 1 | spu_property_rule.values | value_list | - | 3 | - | 属性值 | - | R1 |
| 2 | spu_property_rule.values.value_id | value_id | - | 99 | 0 | 属性值ID，对于输入框类型，填0即可 | - | R1 |
| 2 | spu_property_rule.values.value_name | value_name | - | 2 | 小王子 | 属性值，属性值的中文 | - | R1 |
| 0 | spu_images_rule | spu_image_rule | - | 5 | - | SPU图片规则(已废弃，请采用spu_material_rules字段) | - | R1 |
| 1 | spu_images_rule.is_required | is_required | - | 99 | 1 | 是否必填 | - | R1 |
| 1 | spu_images_rule.max_num | max_num | - | 99 | 5 | 最大数量 | - | R1 |
| 1 | spu_images_rule.min_num | min_num | - | 99 | 1 | 最小数量 | - | R1 |
| 0 | spu_actual_images_rule | spu_actual_image_rule | - | 5 | - | SPU实物图规则（已废弃，请采用spu_proof_rules字段） | - | R1 |
| 1 | spu_actual_images_rule.is_required | is_required | - | 99 | 1 | 是否必填 | - | R1 |
| 1 | spu_actual_images_rule.max_num | max_num | - | 99 | 5 | 最大数量 | - | R1 |
| 1 | spu_actual_images_rule.min_num | min_num | - | 99 | 1 | 最小数量 | - | R1 |
| 0 | control_type | control_type | - | 99 | 2 | 0-不管控，商家在该类目下发布商品时，不强制要求命中SPU。 - 1-弱管控，商家在该类目下发布商品时，强制要求命中SPU（即关键属性必须一致），但绑定属性不强制要求一致。 - 2-强管控，商家在该类目下发布商品时，强制要求命中SPU，且绑定属性必须一致。 | - | R1 |
| 0 | support_spu_product | support_spu_product | - | 4 | true | - true 表示商家在该类目基于SPU发布商品，发商品的管控策略见管控类型。 - false 表示商家在该类目不需要基于SPU发布商品。不用发布SPU，直接发布商品即可。 | - | R1 |
| 0 | support_create_spu | support_create_spu | - | 4 | true | true-可以发布SPU，false-不能发布SPU | - | R1 |
| 0 | spu_material_rules | spu_material_rules | - | 3 | - | SPU素材规则（素材类型：主图） | - | R1 |
| 1 | spu_material_rules.material_rule | material_rule | - | 5 | - | SPU素材的具体规则 | - | R1 |
| 2 | spu_material_rules.material_rule.name | name | - | 2 | 主图 | 素材名称 | - | - |
| 2 | spu_material_rules.material_rule.is_required | is_required | - | 99 | 0 | 是否必填，0:非必填，1:必填 | - | - |
| 2 | spu_material_rules.material_rule.min_num | min_num | - | 99 | 0 | 最小数量 | - | - |
| 2 | spu_material_rules.material_rule.max_num | max_num | - | 99 | 5 | 最大数量 | - | - |
| 2 | spu_material_rules.material_rule.max_size | max_size | - | 99 | 5 | 最大容量，单位为M | - | - |
| 2 | spu_material_rules.material_rule.aspect_ratio | aspect_ratio | - | 3 | ["1","1"] | 素材类型为图片时的尺寸比 | - | R1 |
| 2 | spu_material_rules.material_rule.pixel | pixel | - | 3 | [600,600] | 素材类型为图片时的像素比 | - | R1 |
| 2 | spu_material_rules.material_rule.data_format | data_format | - | 3 | ["png","jpg","jpeg"] | 数据格式类型，例如jpg、png等格式 | - | R1 |
| 1 | spu_material_rules.material_type | material_type | - | 99 | 1 | 素材类型枚举值：1-主图 | - | R1 |
| 0 | spu_proof_rules | spu_proof_rules | - | 3 | - | 证明材料规则（证明材料类型：实物图、版权页） | - | R1 |
| 1 | spu_proof_rules.proof_type | proof_type | - | 99 | 6 | 实物证明类型，枚举值：2-实物图、3-说明书图片、4-说明书PDF、5-医疗器械注册证、6-版权页。其中说明书PDF和说明书图片要求二者必填其一 | - | - |
| 1 | spu_proof_rules.proof_rule | proof_rule | - | 5 | - | SPU证明材料的具体规则 | - | R1 |
| 2 | spu_proof_rules.proof_rule.name | name | - | 2 | 版权页 | 证明材料名称 | - | - |
| 2 | spu_proof_rules.proof_rule.is_required | is_required | - | 99 | 1 | 是否必填，0:非必填，1:必填 | - | - |
| 2 | spu_proof_rules.proof_rule.min_num | min_num | - | 99 | 1 | 最小数量 | - | - |
| 2 | spu_proof_rules.proof_rule.max_num | max_num | - | 99 | 5 | 最大数量 | - | - |
| 2 | spu_proof_rules.proof_rule.max_size | max_size | - | 99 | 5 | 最大容量，单位为M | - | - |
| 2 | spu_proof_rules.proof_rule.aspect_ratio | aspect_ratio | - | 3 | ["1","1"] | 素材类型为图片时的尺寸比 | - | R1 |
| 2 | spu_proof_rules.proof_rule.pixel | pixel | - | 3 | [600,600] | 素材类型为图片时的像素比 | - | R1 |
| 2 | spu_proof_rules.proof_rule.data_format | data_format | - | 3 | ["png","jpg","jpeg"] | 数据格式类型 | - | R1 |
| 0 | spu_barcode_rule | spu_barcode_rule | - | 5 | - | 条码规则 | - | R1 |
| 1 | spu_barcode_rule.barcode_rule | barcode_rule | - | 5 | - | 条码值 | - | R1 |
| 2 | spu_barcode_rule.barcode_rule.is_required | is_required | - | 99 | 1 | 是否必填，0:非必填，1:必填 | - | - |
| 2 | spu_barcode_rule.barcode_rule.min_num | min_num | - | 99 | 1 | 最小数量 | - | - |
| 2 | spu_barcode_rule.barcode_rule.max_num | max_num | - | 99 | 1 | 最大数量 | - | - |
| 1 | spu_barcode_rule.barcode_image_rule | barcode_image_rule | - | 5 | - | 条码图 | - | R1 |
| 2 | spu_barcode_rule.barcode_image_rule.data_format | data_format | - | 3 | ["png","jpg","jpeg"] | 数据格式类型 | - | R1 |
| 2 | spu_barcode_rule.barcode_image_rule.is_required | is_required | - | 99 | 1 | 是否必填，0:非必填，1:必填 | - | - |
| 2 | spu_barcode_rule.barcode_image_rule.min_num | min_num | - | 99 | 1 | 最小数量 | - | - |
| 2 | spu_barcode_rule.barcode_image_rule.max_num | max_num | - | 99 | 5 | 最大数量 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/spu/getSpuRule?app_key=your_appkey_here&method=spu.getSpuRule&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/spu/getSpuRule?app_key=your_appkey_here&method=spu.getSpuRule&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SpuGetSpuRuleRequest request = new SpuGetSpuRuleRequest();
SpuGetSpuRuleParam param = request.getParam();
param.setCategoryId(23362L);
param.setChannel(0或1);
SpuGetSpuRuleResponse response = request.execute(accessToken);

```

### php

```php
$request = new SpuGetSpuRuleRequest();
$param = new SpuGetSpuRuleParam();
$request->setParam($param);
$param->category_id = 23362;
$param->channel = 0或1;
$response = $request->execute(accessToken);

```

### python

```python
request = SpuGetSpuRuleRequest()
param = request.getParams()
param.category_id = 23362
param.channel = 0或1
response = request.execute(accessToken)

```

### go

```go
request := spu_getSpuRule_request.New()
param := request.GetParams()
param.CategoryId = 23362
param.Channel = 0或1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SpuGetSpuRuleRequest();
var param = request.BuildParam();
param.CategoryId = 23362;
param.Channel = 0或1;
var response = request.Execute<SpuGetSpuRuleResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2012013 | 读取失败 | 检查参数入参 |
| 80000 | 风控拦截 | isv.risk-control-failed:20121002 | 操作人非法 | 查看操作人信息 |
| 50002 | 业务处理失败 | isv.business-failed:20121103 | 商家不存在 | 查看操作人信息 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
