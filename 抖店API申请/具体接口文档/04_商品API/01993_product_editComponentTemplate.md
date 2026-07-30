# /product/editComponentTemplate

> 中文说明：编辑尺码模板  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/1993>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/editComponentTemplate |
| 中文名称 | 编辑尺码模板 |
| 文档目录 | 商品API |
| Article ID | 1993 |
| 文档版本 | V2.03 |
| 官方更新时间 | 2022/6/11 12:29:46 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

编辑尺码模板

## 权限包

- 商品 / 商品尺码模板（packageType=1）；适用应用类目：撮合服务商、AI拼图-微应用、营销管理-小程序定制、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、互动营销定制、短信营销、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.editComponentTemplate | 调用的API接口名称 | - | - |
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
| 0 | template_id | template_id | true | 1 | 101 | 模板ID | - | - |
| 0 | template_name | template_name | false | 2 | 模板名称2 | 模板名称 | - | - |
| 0 | component_data | component_front_data | false | 2 | {"title":"服装上衣模板","desc":"dy服装上衣模板","tempName":"dy服装上衣模板","configTable":[{"size":"XS","specMap":{"身高（cm）":"180","体重（斤）":"70","胸围（cm）":"80"}},{"size":"M","specMap":{"身高（cm）":"185","体重（斤）":"80","胸围（cm）":"85"}}],"selectedSpecs":["身高（cm）","体重（斤）","胸围（cm）"],"specOptions":["身高（cm）","体重（斤）","胸围（cm）"],"selectedSize":["xl","xxl"]} | 模板数据json | - | - |
| 0 | shareable | shareable | false | 4 | true | 是否为公有模板(多个商品可共用) | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/editComponentTemplate?app_key=your_appkey_here&method=product.editComponentTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/editComponentTemplate?app_key=your_appkey_here&method=product.editComponentTemplate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductEditComponentTemplateRequest request = new ProductEditComponentTemplateRequest();
ProductEditComponentTemplateParam param = request.getParam();
param.setTemplateId(101L);
param.setTemplateName("模板名称2");
param.setComponentData("{\"title\":\"服装上衣模板\",\"desc\":\"dy服装上衣模板\",\"tempName\":\"dy服装上衣模板\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"180\",\"体重（斤）\":\"70\",\"胸围（cm）\":\"80\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"185\",\"体重（斤）\":\"80\",\"胸围（cm）\":\"85\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"xl\",\"xxl\"]}");
param.setShareable(true);
ProductEditComponentTemplateResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductEditComponentTemplateRequest();
$param = new ProductEditComponentTemplateParam();
$request->setParam($param);
$param->template_id = 101;
$param->template_name = "模板名称2";
$param->component_data = "{\"title\":\"服装上衣模板\",\"desc\":\"dy服装上衣模板\",\"tempName\":\"dy服装上衣模板\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"180\",\"体重（斤）\":\"70\",\"胸围（cm）\":\"80\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"185\",\"体重（斤）\":\"80\",\"胸围（cm）\":\"85\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"xl\",\"xxl\"]}";
$param->shareable = true;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductEditComponentTemplateRequest()
param = request.getParams()
param.template_id = 101
param.template_name = "模板名称2"
param.component_data = "{\"title\":\"服装上衣模板\",\"desc\":\"dy服装上衣模板\",\"tempName\":\"dy服装上衣模板\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"180\",\"体重（斤）\":\"70\",\"胸围（cm）\":\"80\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"185\",\"体重（斤）\":\"80\",\"胸围（cm）\":\"85\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"xl\",\"xxl\"]}"
param.shareable = true
response = request.execute(accessToken)

```

### go

```go
request := product_editComponentTemplate_request.New()
param := request.GetParams()
param.TemplateId = 101
param.TemplateName = "模板名称2"
param.ComponentData = "{\"title\":\"服装上衣模板\",\"desc\":\"dy服装上衣模板\",\"tempName\":\"dy服装上衣模板\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"180\",\"体重（斤）\":\"70\",\"胸围（cm）\":\"80\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"185\",\"体重（斤）\":\"80\",\"胸围（cm）\":\"85\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"xl\",\"xxl\"]}"
param.Shareable = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductEditComponentTemplateRequest();
var param = request.BuildParam();
param.TemplateId = 101;
param.TemplateName = "模板名称2";
param.ComponentData = "{\"title\":\"服装上衣模板\",\"desc\":\"dy服装上衣模板\",\"tempName\":\"dy服装上衣模板\",\"configTable\":[{\"size\":\"XS\",\"specMap\":{\"身高（cm）\":\"180\",\"体重（斤）\":\"70\",\"胸围（cm）\":\"80\"}},{\"size\":\"M\",\"specMap\":{\"身高（cm）\":\"185\",\"体重（斤）\":\"80\",\"胸围（cm）\":\"85\"}}],\"selectedSpecs\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"specOptions\":[\"身高（cm）\",\"体重（斤）\",\"胸围（cm）\"],\"selectedSize\":[\"xl\",\"xxl\"]}";
param.Shareable = true;
var response = request.Execute<ProductEditComponentTemplateResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:2010001 | 系统处理异常 | 系统处理异常，咨询研发人员 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010003 | 参数缺失 | 根据返回信息提示检查参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 参数错误 | 根据返回信息提示检查参数 |
| 20000 | 系统错误 | isp.service-error:2010011 | 系统错误 | 系统处理异常，咨询研发人员 |
| 20000 | 系统错误 | isp.service-error:2010012 | 系统错误 | 系统处理异常，咨询研发人员 |
| 50002 | 业务处理失败 | isv.business-failed:110250103 | 110250103:该类目商品需上传完整尺码表信息，目前缺失规格：身高，请补充！<a href='https://school.jinritemai.com/doudian/web/article/aHUksMr1bwtF' target='_blank'>规则介绍</a> | 110250103:该类目商品需上传完整尺码表信息，目前缺失规格：身高，请补充！<a href='https://school.jinritemai.com/doudian/web/article/aHUksMr1bwtF' target='_blank'>规则介绍</a> |
| 50002 | 业务处理失败 | isv.business-failed:110250142 | 110250142:尺码信息区间值中最大值需要大于最小值 | 110250142:尺码信息区间值中最大值需要大于最小值 |
| 50002 | 业务处理失败 | isv.business-failed:110250138 | 110250138:模板列数超过上限 | 110250138:模板列数超过上限 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
