# /superm/product/createSubProduct

> 中文说明：基于店铺主品创建门店子品 (同步创建)  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2698>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /superm/product/createSubProduct |
| 中文名称 | 基于店铺主品创建门店子品 (同步创建) |
| 文档目录 | 商品API |
| Article ID | 2698 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2024/11/22 15:06:03 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

基于店铺主品创建门店子品 (同步创建)

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 即时零售 / 商品管理（即时零售）（packageType=1）；适用应用类目：即时零售商品服务、即时零售订单配送、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | superm.product/createSubProduct | 调用的API接口名称 | - | - |
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
| 0 | main_product_id | main_product_id | true | 99 | 3576410646054571500 | 店铺主商品ID | - | - |
| 0 | store_id | store_id | true | 99 | 56386074 | 门店ID | - | - |
| 0 | sku_info | sku_info | false | 3 | - | 子商品SKU的库存、价格信息 | - | - |
| 1 | sku_info.sell_property_names | sell_property_names | true | 3 | 红色,XL | 子商品规格值列表 | - | - |
| 1 | sku_info.price | price | false | 99 | 100 | 子商品SKU价格 (单位：分) | - | - |
| 1 | sku_info.stock | stock | false | 99 | 1000 | 子商品SKU库存 | - | - |
| 0 | start_sale_type | StartSaleType | false | 99 | 1 | 审核通过后上架售卖时间配置：0-立即上架售卖 1-放入仓库 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | sub_product_id | sub_product_id | - | 99 | 3576410646054571501 | 门店子商品ID | - | R1 |
| 0 | sub_sku_infos | sub_sku_infos | - | 3 | - | sku信息 | - | R1 |
| 1 | sub_sku_infos.sku_id | sku_id | - | 2 | 123456 | 门店子商品skuid | - | - |
| 1 | sub_sku_infos.outer_sku_id | outer_sku_id | - | 2 | abc | 外部skuid | - | - |
| 1 | sub_sku_infos.sale_property_values | sale_property_values | - | 3 | - | SKU的销售属性 | - | R1 |
| 2 | sub_sku_infos.sale_property_values.Value | Value | - | 5 | - | 属性值 | - | R1 |
| 3 | sub_sku_infos.sale_property_values.Value.ValueName | ValueName | - | 2 | 默认值 | 属性值 | - | - |
| 2 | sub_sku_infos.sale_property_values.Property | Property | - | 5 | - | 属性名 | - | R1 |
| 3 | sub_sku_infos.sale_property_values.Property.PropertyName | PropertyName | - | 2 | 默认值 | 属性名 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/dutyFree/orderList?app_key=your_appkey_here&method=dutyFree.orderList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/dutyFree/orderList?app_key=your_appkey_here&method=dutyFree.orderList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SupermProductCreateSubProductRequest request = new SupermProductCreateSubProductRequest();
SupermProductCreateSubProductParam param = request.getParam();
param.setMainProductId(3576410646054571500L);
param.setStoreId(56386074L);
param.setStartSaleType(1L);
SupermProductCreateSubProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new SupermProductCreateSubProductRequest();
$param = new SupermProductCreateSubProductParam();
$request->setParam($param);
$param->main_product_id = 3576410646054571500;
$param->store_id = 56386074;
$param->start_sale_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = SupermProductCreateSubProductRequest()
param = request.getParams()
param.main_product_id = 3576410646054571500
param.store_id = 56386074
param.start_sale_type = 1
response = request.execute(accessToken)

```

### go

```go
request := superm_product_createSubProduct_request.New()
param := request.GetParams()
param.MainProductId = 3576410646054571500
param.StoreId = 56386074
param.StartSaleType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SupermProductCreateSubProductRequest();
var param = request.BuildParam();
param.MainProductId = 3576410646054571500;
param.StoreId = 56386074;
param.StartSaleType = 1;
var response = request.Execute<SupermProductCreateSubProductResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4100003 | 参数非法 | 请参考能力文档传入合法参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:4100002 | 参数非法 | 请参考能力文档传入合法参数 |
| 40002 | 缺少必选参数 | isv.missing-parameter:4100001 | 缺少必填参数 | 请参考能力文档传入合法参数 |
| 50002 | 业务处理失败 | isv.business-failed:5000001 | 业务系统异常，请联系开平人员 | 业务处理失败 |
| 20000 | 系统错误 | isp.service-error:5000002 | 系统异常，可尝试重试 | 系统异常，可尝试重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010005 | 2010005:<span>该商品的类目【奶粉/辅食/营养品/零食/宝宝辅食/果/菜/肉/混合泥】无资质授权,请前往<a href='/ffa/grs/qualification/list' target='_blank'>【店铺-店铺信息设置-店铺资质-行业资质】</a>中申请授权</span> | 2010005:<span>该商品的类目【奶粉/辅食/营养品/零食/宝宝辅食/果/菜/肉/混合泥】无资质授权,请前往<a href='/ffa/grs/qualification/list' target='_blank'>【店铺-店铺信息设置-店铺资质-行业资质】</a>中申请授权</span> |
| 50002 | 业务处理失败 | isv.business-failed:110103017 | 110103017:重复创建渠道商品 | 110103017:重复创建渠道商品 |
| 50002 | 业务处理失败 | isv.business-failed:110102119 | 110102119:主商品非在线审核通过状态，不允许操作子商品 | 110102119:主商品非在线审核通过状态，不允许操作子商品 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:获取账号信息失败 | 2010001:获取账号信息失败 |
| 50002 | 业务处理失败 | isv.business-failed:110210021 | 110210021:该商品对应的类目已处于禁发状态，需先修改商品对应类目为合适类目 | 110210021:该商品对应的类目已处于禁发状态，需先修改商品对应类目为合适类目 |
| 50002 | 业务处理失败 | isv.business-failed:2010053 | 2010053:所选类目经营资质已失效，您可以选择保存草稿，待资质审核通过后再提交 | 2010053:所选类目经营资质已失效，您可以选择保存草稿，待资质审核通过后再提交 |
| 50002 | 业务处理失败 | isv.business-failed:110101199 | 110101199:只支持门店创建子品 | 110101199:只支持门店创建子品 |
| 50002 | 业务处理失败 | isv.business-failed:2010058 | 2010058:商品不存在 | 2010058:商品不存在 |
| 50002 | 业务处理失败 | isv.business-failed:110103015 | 110103015:唯一码：4137397，唯一类型：外部商品ID 已被商品[3704216150360588337]占用 | 110103015:唯一码：4137397，唯一类型：外部商品ID 已被商品[3704216150360588337]占用 |
| 50002 | 业务处理失败 | isv.business-failed:110101198 | 110101198:门店不在主品店铺组织层级下 | 110101198:门店不在主品店铺组织层级下 |
| 50002 | 业务处理失败 | isv.business-failed:110102118 | 110102118:主品信息不合法 | 110102118:主品信息不合法 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:传入SKU价格为0 | 2010004:传入SKU价格为0 |
| 50002 | 业务处理失败 | isv.business-failed:110103013 | 110103013:获取主子品差异化规则失败 | 110103013:获取主子品差异化规则失败 |
| 50002 | 业务处理失败 | isv.business-failed:2010012 | 2010012:当前商品的部分SKU库存不得低于活动/达人专属价设置的0，可到营销中心修改对应的活动/达人专属价库存，或直接修改当前商品库存数。 | 2010012:当前商品的部分SKU库存不得低于活动/达人专属价设置的0，可到营销中心修改对应的活动/达人专属价库存，或直接修改当前商品库存数。 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
