# /product/addCombination

> 中文说明：创建商品搭配  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/3392>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/addCombination |
| 中文名称 | 创建商品搭配 |
| 文档目录 | 商品API |
| Article ID | 3392 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/3/31 11:56:17 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20 |

## 使用说明

创建商品搭配

## 权限包

- 微应用 / 搭配购-微应用（packageType=1）；适用应用类目：创新应用大赛_微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.addCombination | 调用的API接口名称 | - | - |
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
| 0 | title | title | true | 2 | 护肤套装 | 搭配标题名称 | - | - |
| 0 | description | description | true | 2 | XX水+XX精华 | 搭配描述语 | - | - |
| 0 | anchor_image_info | anchor_image_info | false | 2 | {\"image\":{\"url\":\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/bMLccs_m_ec6cec24222b0480d0e5018d5320e6f0_sx_240038_www1276-1276\",\"width\":1276,\"height\":1276},\"image_hot_area\":[{\"point\":{\"x\":734,\"y\":452},\"detail_area\":{\"direction\":\"right\",\"content\":{\"text\":\"11\",\"product_id\":\"3606641789454421201\"}}},{\"point\":{\"x\":449,\"y\":643},\"detail_area\":{\"direction\":\"left\",\"content\":{\"text\":\"22\",\"product_id\":\"3606641537326441072\"}}}]} | 搭配主图与锚点信息。image中三个字段分别代表图片地址（抖店素材中心地址）、宽、高。<br>image_hot_area是一个表示锚点信息的数组，数组中每一个元素表示一个锚点，内部包含坐标（point结构）和细节信息。细节信息包括展示内容（商品ID、展示名称）以及朝向（direction字段，值枚举为left，right）。<br>只有店铺搭配可以填写。 | - | - |
| 0 | creator_type | creator_type | true | 1 | 1 | 创建者类型，店铺创建传1，客服创建传3 | - | - |
| 0 | creator_id | creator_id | true | 1 | 12345 | 和creator_type保持联动，如果creator_type为1则是店铺ID，如果creator_type为则是客服ID | - | - |
| 0 | create_source | create_source | true | 1 | 99 | 固定传99，否则校验出错 | - | - |
| 0 | product_ids | product_ids | true | 3 | [1,2,3] | 商品ID列表 | - | - |
| 0 | combination_type | combination_type | true | 7 | 1 | 搭配类型，1表示店铺搭配，3表示客服搭配 | - | - |
| 0 | combination_subtype | combination_subtype | true | 7 | 1 | 搭配子类型，总共可以填写0，1，3三个值。<br>与combination_type保持联动，如果搭配类型为店铺搭配，则对应值可以填写为1（表示有主图的搭配），2（表示无主图）。如果搭配类型为客服搭配，请固定传0。 | - | - |
| 0 | owner_type | owner_type | true | 7 | 1 | 搭配归属者类型，请固定传1 | - | - |
| 0 | sku_info | sku_info | false | 3 | - | SKU信息，仅客服搭配可以填写 | - | - |
| 1 | sku_info.product_id | product_id | true | 1 | 123456789 | 商品ID | - | - |
| 1 | sku_info.sku_num_info | sku_num_info | false | 3 | - | SKU数量信息 | - | - |
| 2 | sku_info.sku_num_info.sku_id | sku_id | true | 1 | 123456789 | SKU ID | - | - |
| 2 | sku_info.sku_num_info.num | num | true | 1 | 1 | SKU个数 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | combination_id | combination_id | - | 1 | 12356789 | 搭配ID | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/searchList?app_key=your_appkey_here&method=order.searchList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/searchList?app_key=your_appkey_here&method=order.searchList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductAddCombinationRequest request = new ProductAddCombinationRequest();
ProductAddCombinationParam param = request.getParam();
param.setTitle("护肤套装");
param.setDescription("XX水+XX精华");
param.setAnchorImageInfo("{\\\"image\\\":{\\\"url\\\":\\\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/bMLccs_m_ec6cec24222b0480d0e5018d5320e6f0_sx_240038_www1276-1276\\\",\\\"width\\\":1276,\\\"height\\\":1276},\\\"image_hot_area\\\":[{\\\"point\\\":{\\\"x\\\":734,\\\"y\\\":452},\\\"detail_area\\\":{\\\"direction\\\":\\\"right\\\",\\\"content\\\":{\\\"text\\\":\\\"11\\\",\\\"product_id\\\":\\\"3606641789454421201\\\"}}},{\\\"point\\\":{\\\"x\\\":449,\\\"y\\\":643},\\\"detail_area\\\":{\\\"direction\\\":\\\"left\\\",\\\"content\\\":{\\\"text\\\":\\\"22\\\",\\\"product_id\\\":\\\"3606641537326441072\\\"}}}]}");
param.setCreatorType(1L);
param.setCreatorId(12345L);
param.setCreateSource(99L);
param.setProductIds([1,2,3]);
param.setCombinationType(1);
param.setCombinationSubtype(1);
param.setOwnerType(1);
ProductAddCombinationResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductAddCombinationRequest();
$param = new ProductAddCombinationParam();
$request->setParam($param);
$param->title = "护肤套装";
$param->description = "XX水+XX精华";
$param->anchor_image_info = "{\\\"image\\\":{\\\"url\\\":\\\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/bMLccs_m_ec6cec24222b0480d0e5018d5320e6f0_sx_240038_www1276-1276\\\",\\\"width\\\":1276,\\\"height\\\":1276},\\\"image_hot_area\\\":[{\\\"point\\\":{\\\"x\\\":734,\\\"y\\\":452},\\\"detail_area\\\":{\\\"direction\\\":\\\"right\\\",\\\"content\\\":{\\\"text\\\":\\\"11\\\",\\\"product_id\\\":\\\"3606641789454421201\\\"}}},{\\\"point\\\":{\\\"x\\\":449,\\\"y\\\":643},\\\"detail_area\\\":{\\\"direction\\\":\\\"left\\\",\\\"content\\\":{\\\"text\\\":\\\"22\\\",\\\"product_id\\\":\\\"3606641537326441072\\\"}}}]}";
$param->creator_type = 1;
$param->creator_id = 12345;
$param->create_source = 99;
$param->product_ids = [1,2,3];
$param->combination_type = 1;
$param->combination_subtype = 1;
$param->owner_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductAddCombinationRequest()
param = request.getParams()
param.title = "护肤套装"
param.description = "XX水+XX精华"
param.anchor_image_info = "{\\\"image\\\":{\\\"url\\\":\\\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/bMLccs_m_ec6cec24222b0480d0e5018d5320e6f0_sx_240038_www1276-1276\\\",\\\"width\\\":1276,\\\"height\\\":1276},\\\"image_hot_area\\\":[{\\\"point\\\":{\\\"x\\\":734,\\\"y\\\":452},\\\"detail_area\\\":{\\\"direction\\\":\\\"right\\\",\\\"content\\\":{\\\"text\\\":\\\"11\\\",\\\"product_id\\\":\\\"3606641789454421201\\\"}}},{\\\"point\\\":{\\\"x\\\":449,\\\"y\\\":643},\\\"detail_area\\\":{\\\"direction\\\":\\\"left\\\",\\\"content\\\":{\\\"text\\\":\\\"22\\\",\\\"product_id\\\":\\\"3606641537326441072\\\"}}}]}"
param.creator_type = 1
param.creator_id = 12345
param.create_source = 99
param.product_ids = [1,2,3]
param.combination_type = 1
param.combination_subtype = 1
param.owner_type = 1
response = request.execute(accessToken)

```

### go

```go
request := product_addCombination_request.New()
param := request.GetParams()
param.Title = "护肤套装"
param.Description = "XX水+XX精华"
param.AnchorImageInfo = "{\\\"image\\\":{\\\"url\\\":\\\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/bMLccs_m_ec6cec24222b0480d0e5018d5320e6f0_sx_240038_www1276-1276\\\",\\\"width\\\":1276,\\\"height\\\":1276},\\\"image_hot_area\\\":[{\\\"point\\\":{\\\"x\\\":734,\\\"y\\\":452},\\\"detail_area\\\":{\\\"direction\\\":\\\"right\\\",\\\"content\\\":{\\\"text\\\":\\\"11\\\",\\\"product_id\\\":\\\"3606641789454421201\\\"}}},{\\\"point\\\":{\\\"x\\\":449,\\\"y\\\":643},\\\"detail_area\\\":{\\\"direction\\\":\\\"left\\\",\\\"content\\\":{\\\"text\\\":\\\"22\\\",\\\"product_id\\\":\\\"3606641537326441072\\\"}}}]}"
param.CreatorType = 1
param.CreatorId = 12345
param.CreateSource = 99
param.ProductIds = [1,2,3]
param.CombinationType = 1
param.CombinationSubtype = 1
param.OwnerType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductAddCombinationRequest();
var param = request.BuildParam();
param.Title = "护肤套装";
param.Description = "XX水+XX精华";
param.AnchorImageInfo = "{\\\"image\\\":{\\\"url\\\":\\\"https://p3-aio.ecombdimg.com/obj/ecom-shop-material/bMLccs_m_ec6cec24222b0480d0e5018d5320e6f0_sx_240038_www1276-1276\\\",\\\"width\\\":1276,\\\"height\\\":1276},\\\"image_hot_area\\\":[{\\\"point\\\":{\\\"x\\\":734,\\\"y\\\":452},\\\"detail_area\\\":{\\\"direction\\\":\\\"right\\\",\\\"content\\\":{\\\"text\\\":\\\"11\\\",\\\"product_id\\\":\\\"3606641789454421201\\\"}}},{\\\"point\\\":{\\\"x\\\":449,\\\"y\\\":643},\\\"detail_area\\\":{\\\"direction\\\":\\\"left\\\",\\\"content\\\":{\\\"text\\\":\\\"22\\\",\\\"product_id\\\":\\\"3606641537326441072\\\"}}}]}";
param.CreatorType = 1;
param.CreatorId = 12345;
param.CreateSource = 99;
param.ProductIds = [1,2,3];
param.CombinationType = 1;
param.CombinationSubtype = 1;
param.OwnerType = 1;
var response = request.Execute<ProductAddCombinationResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:2010001 | 系统错误 | 参考返回信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:anchorImageInfo不合法 | 2010004:anchorImageInfo不合法 |
| 50002 | 业务处理失败 | isv.business-failed:2010328 | 2010328:该商品组合已存在搭配(ID#7438996363171381515)，不可重复创建 | 2010328:该商品组合已存在搭配(ID#7438996363171381515)，不可重复创建 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
