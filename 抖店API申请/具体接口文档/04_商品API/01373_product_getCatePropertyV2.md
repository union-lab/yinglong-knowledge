# /product/getCatePropertyV2

> 中文说明：查询商品类目id的属性列表  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1373>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/getCatePropertyV2 |
| 中文名称 | 查询商品类目id的属性列表 |
| 文档目录 | 商品API |
| Article ID | 1373 |
| 文档版本 | V8.08 |
| 官方更新时间 | 2026/5/22 14:03:56 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

1、调用【/product/addV2】创建商品和【/product/editV2】更新商品时，请求参数【product_format_new】字段需传入。

## 权限包

- 商品 / 商品类目属性查询（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、卡券商工具、撮合服务商、客服绩效-微应用、直播话术-微应用、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播工具、直播间AI导购、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.getCatePropertyV2 | 调用的API接口名称 | - | - |
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
| 0 | category_leaf_id | category_id | true | 1 | 1342353245 | 叶子类目id 1、传category_leaf_id ，则不需要传first_cid、second_cid、third_cid这三个字段 2、如果没传category_leaf_id，走之前的逻辑，需要传first_cid、second_cid、third_cid这三个字段 | - | - |
| 0 | product_format_new | product_format_new | false | 8 | 1 | 1 | - | - |
| 1 | product_format_new.value | value | false | 1 | 1 | 1 | - | - |
| 1 | product_format_new.measure_info | measure_info | false | 5 | - | 度量衡信息 | - | - |
| 2 | product_format_new.measure_info.template_id | template_id | false | 1 | 1 | 度量衡模板id | - | - |
| 2 | product_format_new.measure_info.extra | extra | false | 8 | 1 | 自定义度量衡扩展信息 | - | - |
| 2 | product_format_new.measure_info.values | values | false | 3 | - | 度量衡内容 | - | - |
| 3 | product_format_new.measure_info.values.extra | extra | false | 8 | 1 | 度量衡扩展信息 | - | - |
| 3 | product_format_new.measure_info.values.unit_name | unit_name | false | 2 | 1 | 度量衡单位名称 | - | - |
| 3 | product_format_new.measure_info.values.value | value | false | 2 | 1 | 值内容 | - | - |
| 3 | product_format_new.measure_info.values.prefix | prefix | false | 2 | 1 | 前缀 | - | - |
| 3 | product_format_new.measure_info.values.suffix | suffix | false | 2 | 1 | 后缀 | - | - |
| 3 | product_format_new.measure_info.values.prefix_id | prefix_id | false | 1 | 1 | 前缀id | - | - |
| 3 | product_format_new.measure_info.values.unit_id | unit_id | false | 1 | 1 | 度量衡单位id | - | - |
| 3 | product_format_new.measure_info.values.suffix_id | suffix_id | false | 1 | 1 | 后缀id | - | - |
| 3 | product_format_new.measure_info.values.module_id | module_id | false | 1 | 1 | 模块id | - | - |
| 3 | product_format_new.measure_info.values.value_required | value_required | false | 4 | 1 | 是否必填 | - | - |
| 3 | product_format_new.measure_info.values.value_id | value_id | false | 1 | 1 | 值id | - | - |
| 1 | product_format_new.name | name | false | 2 | 1 | 1 | - | - |
| 1 | product_format_new.diy_type | diy_type | false | 1 | 1 | 是否为商家自定义属性值，1为是，0为不是 | - | - |
| 0 | need_process_prop_cascade | need_process_prop_cascade | false | 4 | 1 | 1 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | product_format | - | 3 | - | 返回参数列表 | - | R1 |
| 1 | data.property_pic_rule | property_pic_rule | - | 5 | - | 属性图规则 | - | R1 |
| 2 | data.property_pic_rule.available | Available | - | 4 | true | 是否支持上传属性图 | - | - |
| 2 | data.property_pic_rule.required | Required | - | 4 | true | 属性图是否必填 | - | - |
| 1 | data.feature_type_list | feature_type_list | - | 3 | [48] | 属性feature类型列表 | - | R1 |
| 1 | data.measure_templates | measure_templates | - | 3 | - | 度量衡模版，可为多个，一般情况为一个 | - | R1 |
| 2 | data.measure_templates.input_rule | input_rule | - | 5 | - | 材质度量衡填写规则 | - | R1 |
| 3 | data.measure_templates.input_rule.dependency_check_rules | dependency_check_rules | - | 3 | - | 度量衡间校验规则 | - | R1 |
| 4 | data.measure_templates.input_rule.dependency_check_rules.rule_constraint | rule_constraint | - | 5 | - | 验证规则 | - | R1 |
| 5 | data.measure_templates.input_rule.dependency_check_rules.rule_constraint.err_msg | err_msg | - | 2 | "" | 报错文案 | - | - |
| 5 | data.measure_templates.input_rule.dependency_check_rules.rule_constraint.value | value | - | 2 | "" | 预期值 | - | - |
| 5 | data.measure_templates.input_rule.dependency_check_rules.rule_constraint.group_func | group_func | - | 2 | "" | 分组函数 | - | - |
| 5 | data.measure_templates.input_rule.dependency_check_rules.rule_constraint.operator | operator | - | 2 | "" | 运算符 | - | - |
| 5 | data.measure_templates.input_rule.dependency_check_rules.rule_constraint.module_id | module_id | - | 1 | 0 | 度量衡模版id | - | - |
| 4 | data.measure_templates.input_rule.dependency_check_rules.rule_condition | rule_condition | - | 5 | - | 触发条件 | - | R1 |
| 5 | data.measure_templates.input_rule.dependency_check_rules.rule_condition.value | value | - | 2 | "" | 预期值 | - | - |
| 5 | data.measure_templates.input_rule.dependency_check_rules.rule_condition.operator | operator | - | 2 | "" | 运算符 | - | - |
| 5 | data.measure_templates.input_rule.dependency_check_rules.rule_condition.module_id | module_id | - | 1 | 0 | 度量衡模块id | - | - |
| 4 | data.measure_templates.input_rule.dependency_check_rules.template_id | template_id | - | 1 | 0 | 度量衡模版id | - | - |
| 3 | data.measure_templates.input_rule.global_check_rules | global_check_rules | - | 3 | - | 全局校验规则 | - | R1 |
| 4 | data.measure_templates.input_rule.global_check_rules.err_msg | err_msg | - | 2 | "" | 报错文案 | - | - |
| 4 | data.measure_templates.input_rule.global_check_rules.operator | operator | - | 2 | "" | 运算符 | - | - |
| 4 | data.measure_templates.input_rule.global_check_rules.target_value | target_value | - | 2 | "" | 预期值 | - | - |
| 4 | data.measure_templates.input_rule.global_check_rules.module_id | module_id | - | 1 | 0 | 度量衡模块id | - | - |
| 4 | data.measure_templates.input_rule.global_check_rules.template_id | template_id | - | 1 | 0 | 模板id | - | - |
| 2 | data.measure_templates.display_name | display_name | - | 2 | xx模版 | 模版名称 | - | - |
| 2 | data.measure_templates.value_modules | value_modules | - | 3 | - | 度量衡模版下的模块，可为多个，一般情况为一个，一般情况一个模块就是一个值+单位形式 | - | R1 |
| 3 | data.measure_templates.value_modules.extra | extra | - | 8 | {} | 扩展信息：对应营养成分表属性，可用于获取reference_value 计算营养成分参考值占比 | - | R1 |
| 3 | data.measure_templates.value_modules.value_required | value_required | - | 4 | true | 模块是否必填，为false时表示这个模块可以不填 | - | - |
| 3 | data.measure_templates.value_modules.validate_rule | validate_rule | - | 5 | - | 填写规则 | - | R1 |
| 4 | data.measure_templates.value_modules.validate_rule.unit_rules | unit_rules | - | 3 | - | 不同单位下的值约束 | - | R1 |
| 5 | data.measure_templates.value_modules.validate_rule.unit_rules.max | max | - | 9 | 10 | 最大值 | - | - |
| 5 | data.measure_templates.value_modules.validate_rule.unit_rules.min | min | - | 9 | 2 | 最小值 | - | - |
| 5 | data.measure_templates.value_modules.validate_rule.unit_rules.unit_id | unit_id | - | 1 | 1 | 单位id | - | - |
| 4 | data.measure_templates.value_modules.validate_rule.time_format | time_format | - | 2 | YYYY-MM-DD | date_type = date 时，有值，如YYYY-MM-DD | - | - |
| 4 | data.measure_templates.value_modules.validate_rule.max | max | - | 9 | 10 | 最大值 | - | - |
| 4 | data.measure_templates.value_modules.validate_rule.min | min | - | 9 | 2 | 最小值 | - | - |
| 4 | data.measure_templates.value_modules.validate_rule.precision | precision | - | 1 | 2 | 小数位数，当data_type为float时有值 | - | - |
| 4 | data.measure_templates.value_modules.validate_rule.data_type | data_type | - | 2 | integer | 填写值的数据格式：integer, float, date | - | - |
| 3 | data.measure_templates.value_modules.units | units | - | 3 | - | 可选单位，可为空 | - | R1 |
| 4 | data.measure_templates.value_modules.units.unit_name | unit_name | - | 2 | 克 | 单位名称 | - | - |
| 4 | data.measure_templates.value_modules.units.unit_id | unit_id | - | 1 | 1 | 单位id | - | - |
| 3 | data.measure_templates.value_modules.values | values | - | 3 | - | 值的可选项，如材质属性可能会有：棉、麻等选项 | - | R1 |
| 4 | data.measure_templates.value_modules.values.value_name | value_name | - | 2 | 棉 | 值名称 | - | - |
| 3 | data.measure_templates.value_modules.input_type | input_type | - | 2 | input | 输入类型： 枚举、输入、枚举可输入： enum, input, enum_diy | - | - |
| 3 | data.measure_templates.value_modules.suffix | suffix | - | 2 | "" | 后缀 | - | - |
| 3 | data.measure_templates.value_modules.prefix | prefix | - | 2 | "" | 前缀 | - | - |
| 3 | data.measure_templates.value_modules.module_id | module_id | - | 1 | 123 | 模块id | - | - |
| 2 | data.measure_templates.template_id | template_id | - | 1 | 23 | 度量衡模版id | - | - |
| 1 | data.has_sub_property | has_sub_property | - | 4 | false | 是否有下级级联属性 | - | - |
| 1 | data.cid | cid | - | 1 | 31918 | 【已废弃】老类目id，请使用category_id字段 | - | R1 |
| 1 | data.property_name | name | - | 2 | "材质" | 属性名称 | - | R1 |
| 1 | data.options | options | - | 3 | - | 属性可选值列表，为空时需要手动填写 | - | R1 |
| 2 | data.options.name | name | - | 2 | ON:THE BODY/安宝笛 | 可选值名称 | - | R1 |
| 2 | data.options.value | value | - | 2 | 1062254699 | 可选值 | - | R1 |
| 2 | data.options.value_id | valueId | - | 1 | 1 | 值的id | - | R1 |
| 2 | data.options.sequence | sequence | - | 1 | 2 | 属性值顺序 | - | R1 |
| 1 | data.required | require | - | 1 | 0 | 1：创建商品时该属性字段必填 0：创建商品时该属性字段选填 | - | R1 |
| 1 | data.status | status | - | 1 | 1 | 属性状态，0：有效，1：失效 | - | R1 |
| 1 | data.type | type | - | 2 | text | 输入text、单选select、多选multi_select、时间戳timestamp、时间段timerange | - | R1 |
| 1 | data.category_id | category_id | - | 1 | 31918 | 新版类目id（优先使用） | - | R1 |
| 1 | data.multi_select_max | multi_select_max | - | 1 | 5 | 最大多选数 | - | R1 |
| 1 | data.property_type | property_type | - | 1 | 1 | 属性类型，0 绑定属性 1关键属性 2售卖属性 3 商品属性 | - | R1 |
| 1 | data.property_id | property_id | - | 1 | 14133 | 属性id | - | R1 |
| 1 | data.sequence | sequence | - | 1 | 2 | 属性顺序 | - | R1 |
| 1 | data.relation_id | relation_id | - | 1 | 1 | 关系id,SPU类目使用，表示自己的上一个关键属性ID | - | R1 |
| 1 | data.diy_type | diy_type | - | 1 | 1 | 商品属性是否有支持商家自定义，1=支持自定义，0=不支持自定义。 使用场景：当开发者传入自定义的属性值时需在创建或更新商品接口的属性时，需把【product_format_new】字段中传入diy_type=1并且value=0； | - | R1 |
| 1 | data.important_type | important_type | - | 1 | 1 | 0:非重要属性，1:重要属性 | - | R1 |
| 0 | tpl_type | tpl_type | - | 1 | 2 | 模板类型，SPU为1，结构化为2，默认为0（无特殊需求忽略该字段即可） | - | R1 |

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
ProductGetCatePropertyV2Request request = new ProductGetCatePropertyV2Request();
ProductGetCatePropertyV2Param param = request.getParam();
param.setCategoryLeafId(1342353245L);
param.setProductFormatNew(1);
param.setNeedProcessPropCascade(1);
ProductGetCatePropertyV2Response response = request.execute(accessToken);

```

### php

```php
$request = new ProductGetCatePropertyV2Request();
$param = new ProductGetCatePropertyV2Param();
$request->setParam($param);
$param->category_leaf_id = 1342353245;
$param->product_format_new = 1;
$param->need_process_prop_cascade = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductGetCatePropertyV2Request()
param = request.getParams()
param.category_leaf_id = 1342353245
param.product_format_new = 1
param.need_process_prop_cascade = 1
response = request.execute(accessToken)

```

### go

```go
request := product_getCatePropertyV2_request.New()
param := request.GetParams()
param.CategoryLeafId = 1342353245
param.ProductFormatNew = 1
param.NeedProcessPropCascade = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductGetCatePropertyV2Request();
var param = request.BuildParam();
param.CategoryLeafId = 1342353245;
param.ProductFormatNew = 1;
param.NeedProcessPropCascade = 1;
var response = request.Execute<ProductGetCatePropertyV2Response>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2010003 | 当前类目不存在，请重新选择类目 | 类目已经不存在，业务预期内，不透出属于正常case |
| 40004 | 非法的参数 | isv.parameter-invalid:2010044 | 此类目已调整升级，请重新选择类目进行商品发布 | 切换类目 |
| 50002 | 业务处理失败 | isv.business-failed:2010202 | 获取类目配置失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 获取可选品牌失败 | 重新调用接口获取 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 系统异常 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:未指定类目ID | 2010004:未指定类目ID |
| 50002 | 业务处理失败 | isv.business-failed:110210112 | 110210112:商品类目不符合平台规则，请重新选择商品类目 | 请重新选择 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
