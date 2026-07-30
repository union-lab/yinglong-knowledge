# /spu/createSpu

> 中文说明：发布SPU  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2311>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /spu/createSpu |
| 中文名称 | 发布SPU |
| 文档目录 | 商品API |
| Article ID | 2311 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/2/2 17:16:09 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

需要新发SPU时，根据SPU的规则，填写属性、图片相关信息，然后提交发布。该接口适用于SPU类目商品使用；

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | spu.createSpu | 调用的API接口名称 | - | - |
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
| 0 | category_leaf_id | categoryId | true | 99 | 23362 | 叶子类目ID | - | - |
| 0 | spu_images | spuImages | false | 3 | ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"] | SPU图片（已废弃，请采用materials字段） | - | - |
| 0 | property_infos | propertyInfos | true | 3 | - | 属性信息（/spu/getSpuRule接口可获取） | - | - |
| 1 | property_infos.values | values | true | 3 | - | 属性值 | - | - |
| 2 | property_infos.values.value_name | valueName | true | 2 | 小王子 | 属性值 | - | - |
| 2 | property_infos.values.value_id | valueId | true | 99 | 0 | 属性值ID | - | - |
| 2 | property_infos.values.channel | channel | false | 99 | 0 | 0：门捷列夫，1：标准类目2.0 | - | - |
| 1 | property_infos.property_id | propertyId | true | 99 | 1618 | 属性ID | - | - |
| 0 | spu_actual_images | spuActualImages | false | 3 | ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"] | SPU实物图（已废弃，请采用proofs字段） | - | - |
| 0 | materials | materials | false | 3 | - | SPU素材 | - | - |
| 1 | materials.content | content | true | 3 | - | 素材的实际内容 | - | - |
| 2 | materials.content.content | content | true | 2 | https://p3-ecom-spu.byteimg.com/tos-cn-i-89jsre2ap7/dc491713470d4d6c8e49733f20283e18~tplv-89jsre2ap7-image.image | 素材内容（/spu/batchUploadImg返回的URL） | - | - |
| 2 | materials.content.name | name | true | 2 | 主图1 | 文件的名称 | - | - |
| 1 | materials.name | name | true | 2 | 主图 | 素材类型名称 | - | - |
| 1 | materials.description | description | true | 2 | 该主图用于xxx | 描述信息 | - | - |
| 1 | materials.type | type | true | 99 | 1 | 素材类型，枚举值：1-主图 | - | - |
| 0 | proofs | proofs | false | 3 | - | 证明信息 | - | - |
| 1 | proofs.description | description | true | 2 | 该实物图用于xxx | 描述信息 | - | - |
| 1 | proofs.name | proof_name | true | 2 | 实物图 | 证明信息类型，枚举值：2-实物图、6-版权页 | - | - |
| 1 | proofs.content | content | true | 3 | - | 证明材料的实际内容 | - | - |
| 2 | proofs.content.name | name | true | 2 | 实物图1 | 文件的名称 | - | - |
| 2 | proofs.content.content | content | true | 2 | https://p3-ecom-spu.byteimg.com/tos-cn-i-89jsre2ap7/dc491713470d4d6c8e49733f20283e18~tplv-89jsre2ap7-image.image | 证明信息内容（/spu/batchUploadImg返回的URL） | - | - |
| 1 | proofs.type | proof_type | true | 99 | 2 | 证明信息（类型：实物图、版权页） | - | - |
| 0 | barcodes | barcodes | false | 3 | - | 条码 | - | - |
| 1 | barcodes.barcode | barcode | false | 2 | 6900388851185 | 条码值 | - | - |
| 1 | barcodes.barcode_type | barcode_type | false | 99 | 1 | 条码类型，1-69码 | - | - |
| 1 | barcodes.barcode_image | barcode_image | false | 3 | - | 条码图 | - | - |
| 2 | barcodes.barcode_image.content | content | false | 2 | https://lf3-cm.ecombdstatic.com/obj/ecom-ecop/168223854898b464cf2268f14ec6ae01ce05d0745ad3914371.jpeg | 条码图链接 | - | - |
| 2 | barcodes.barcode_image.name | name | false | 2 | 条码图名称 | 条码图名称 | - | - |
| 0 | channel | channel | false | 99 | 0 | 0：门捷列夫，1：标准类目2.0 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | spu_id | spuId | - | 2 | 7120712486076088620 | SPU的ID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/spu/createSpu?app_key=your_appkey_here&method=spu.createSpu&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/spu/createSpu?app_key=your_appkey_here&method=spu.createSpu&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SpuCreateSpuRequest request = new SpuCreateSpuRequest();
SpuCreateSpuParam param = request.getParam();
param.setCategoryLeafId(23362L);
param.setSpuImages(["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"]);
param.setSpuActualImages(["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"]);
param.setChannel(0);
SpuCreateSpuResponse response = request.execute(accessToken);

```

### php

```php
$request = new SpuCreateSpuRequest();
$param = new SpuCreateSpuParam();
$request->setParam($param);
$param->category_leaf_id = 23362;
$param->spu_images = ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"];
$param->spu_actual_images = ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"];
$param->channel = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = SpuCreateSpuRequest()
param = request.getParams()
param.category_leaf_id = 23362
param.spu_images = ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"]
param.spu_actual_images = ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"]
param.channel = 0
response = request.execute(accessToken)

```

### go

```go
request := spu_createSpu_request.New()
param := request.GetParams()
param.CategoryLeafId = 23362
param.SpuImages = ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"]
param.SpuActualImages = ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"]
param.Channel = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SpuCreateSpuRequest();
var param = request.BuildParam();
param.CategoryLeafId = 23362;
param.SpuImages = ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"];
param.SpuActualImages = ["https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image"];
param.Channel = 0;
var response = request.Execute<SpuCreateSpuResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:20121017 | 图片格式错误 | 检查图片链接是否满足要求 |
| 20000 | 系统错误 | isp.service-error:2012001 | 系统错误 | 重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2012004 | 参数错误 | 检查请求参数 |
| 50002 | 业务处理失败 | isv.business-failed:20121020 | 证明信息参数错误 | 检查请求参数中的证明信息 |
| 50002 | 业务处理失败 | isv.business-failed:20121009 | 属性信息有误 | 检查请求参数中的属性信息 |
| 50002 | 业务处理失败 | isv.business-failed:2012013 | 数据加载异常 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:20121015 | 触发限流,请稍后再试 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:20121013 | 读取数据失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:20121008 | 属性不能为空 | 检查请求参数 |
| 50002 | 业务处理失败 | isv.business-failed:20121042 | SPU已存在 | 检查请求参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
