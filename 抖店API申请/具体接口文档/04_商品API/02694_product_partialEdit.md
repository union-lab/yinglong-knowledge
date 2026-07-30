# /product/partialEdit

> 中文说明：部分编辑商品信息  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2694>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/partialEdit |
| 中文名称 | 部分编辑商品信息 |
| 文档目录 | 商品API |
| Article ID | 2694 |
| 文档版本 | V1.07 |
| 官方更新时间 | 2025/7/31 16:35:57 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 400 |

## 使用说明

新增sku维度时效设置能力

## 权限包

- 商品 / 微应用商品编辑（packageType=1）；适用应用类目：微应用-标题优化、商品图文-微应用、创新应用大赛_微应用、AI拼图-微应用、自研微组件、搭配购-微应用、微应用-商详海报、自研微组件-直播复盘、直播间AI导购、直播间导购-微应用
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用
- 商品 / 商品编辑（D）（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.partialEdit | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 1 | 31314511114124151 | 商品id | - | - |
| 0 | name | name | false | 2 | 半身裙111 | 商品名称 | - | - |
| 0 | shop_category | shop_category | false | 5 | - | 店铺分类参数 | - | - |
| 1 | shop_category.leaf_category_ids | leaf_category_ids | false | 3 | [7184320140241125691,<br>            7184320140241142075,<br>            7184320198915129659,<br>            7184320198915146043] | 店铺叶子分类id，为[]表示清空商品店铺分类。【已废弃，请使用店铺装修侧，/shop/marketCategoryOpsProd 接口修改商品装修分类】 | - | - |
| 0 | short_product_name | short_product_name | false | 2 | aaa | 商品短标题 | - | - |
| 0 | title_info | title_info | false | 5 | - | 标题前缀，可通过/product/getRecommendName接口获取 | - | - |
| 1 | title_info.prefix | prefix | false | 2 | 钛钢木质耳饰 | 通过/product/getRecommendName接口推荐的商品标题前缀（注意系统根据类目属性生成前缀字符串时，末尾可能有一个空格） | - | - |
| 1 | title_info.suffix | suffix | false | 2 | 36.9度 | 通过/product/getRecommendName接口推荐的商品标题后缀（注意系统根据类目属性生成后缀字符串时，前面可能有一个空格） | - | - |
| 0 | outer_product_id | outer_product_id | false | 2 | bbb | 商品外部编码 | - | - |
| 0 | delivery_time_info | delivery_time_info | false | 5 | - | 商品发货时间信息，当前仅支持sku维度发货时效更新，仅限现货发货模式。 | - | - |
| 1 | delivery_time_info.sku_ship_times | sku_delivery_times | false | 3 | - | sku发货时间，注意该参数仅在现货发货模式且开启sku发货时效时有效，如果发货模式不符合要求则会校验报错。 发货时间和 commit_code 可分别单独更新，也可一起更新。多sku更新时，保证同时成功或失败。如果传入的skuId在商品下不存在，或者skuId存在重复，将报错。 | - | - |
| 2 | delivery_time_info.sku_ship_times.ship_time_type | delivery_time_type | false | 1 | 1 | 1 相对时间 ships in x days，2 固定日期 fixed date。更新ship_time时必传。 | - | - |
| 2 | delivery_time_info.sku_ship_times.commit_code | apple_commit_code | false | 2 | 3000 | commit code | - | - |
| 2 | delivery_time_info.sku_ship_times.ship_time | delivery_delay_day | false | 2 | 2 | 发货时间，如果是相对时间，填写数据 X。如果是固定日期，填写格式为yyyy-MM-dd，例如 "2025-09-01"。格式不正确或者时间校验不通过，将报错。 | - | - |
| 2 | delivery_time_info.sku_ship_times.sku_id | sku_id | false | 1 | 3508769879052802 | skuId | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/logisticsAddMultiPack?app_key=your_appkey_here&method=order.logisticsAddMultiPack&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/logisticsAddMultiPack?app_key=your_appkey_here&method=order.logisticsAddMultiPack&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductPartialEditRequest request = new ProductPartialEditRequest();
ProductPartialEditParam param = request.getParam();
param.setProductId(31314511114124151L);
param.setName("半身裙111");
param.setShortProductName("aaa");
param.setOuterProductId("bbb");
ProductPartialEditResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductPartialEditRequest();
$param = new ProductPartialEditParam();
$request->setParam($param);
$param->product_id = 31314511114124151;
$param->name = "半身裙111";
$param->short_product_name = "aaa";
$param->outer_product_id = "bbb";
$response = $request->execute(accessToken);

```

### python

```python
request = ProductPartialEditRequest()
param = request.getParams()
param.product_id = 31314511114124151
param.name = "半身裙111"
param.short_product_name = "aaa"
param.outer_product_id = "bbb"
response = request.execute(accessToken)

```

### go

```go
request := product_partialEdit_request.New()
param := request.GetParams()
param.ProductId = 31314511114124151
param.Name = "半身裙111"
param.ShortProductName = "aaa"
param.OuterProductId = "bbb"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductPartialEditRequest();
var param = request.BuildParam();
param.ProductId = 31314511114124151;
param.Name = "半身裙111";
param.ShortProductName = "aaa";
param.OuterProductId = "bbb";
var response = request.Execute<ProductPartialEditResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2010004 | 非法参数 | 请检查参数后重试 |
| 60000 | 触发限流，请稍后重试 | isp.traffic-limited:2010067 | 更新商品太频繁，操作失败请重试 | 稍后重试 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2010003 | 缺少参数 | 重新进入页面进行补充 |
| 50002 | 业务处理失败 | isv.business-failed:2010041 | 该商品在审核中 | 不允许编辑 |
| 50002 | 业务处理失败 | isv.business-failed:2010042 | 该商品已删除 | 不允许编辑 |
| 50002 | 业务处理失败 | isv.business-failed:2010043 | 该商品已封禁 | 不允许编辑 |
| 20000 | 系统错误 | isp.service-error:2010001 | 系统错误 | 稍后重试 |
| 20000 | 系统错误 | isp.service-error:2010002 | 请求超时 | 稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010005 | 无访问权限 | 核对后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2010011 | 编辑商品失败 | 稍后重试 |
| 20000 | 系统错误 | isp.service-error:2010012 | 保存商品失败 | 稍后重试 |
| 20000 | 系统错误 | isp.service-error:2010013 | 读取失败 | 稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010022 | 商品状态错误 | 检查状态后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010045 | 商品正在参加活动 | 暂不支持修改 |
| 20000 | 系统错误 | isp.service-error:2010201 | 获取类目信息失败 | 重试 |
| 20000 | 系统错误 | isp.service-error:2010202 | 获取类目配置失败 | 重试 |
| 20000 | 系统错误 | isp.service-error:2010206 | 查询品牌库失败 | 重试 |
| 20000 | 系统错误 | isp.service-error:2010207 | 查询商家资质失败 | 查询商家资质失败，请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010501 | 2010501:商品标题未明确描述商品品名，请重新填写 | 商品标题未明确描述商品品名，请重新填写 |
| 50002 | 业务处理失败 | isv.business-failed:2010326 | 2010326:因为店铺受到处罚，限制发品，更多请到商家后台奖惩中心查看 | 因为店铺受到处罚，限制发品，更多请到商家后台奖惩中心查看 |
| 50002 | 业务处理失败 | isv.business-failed:2010316 | 2010316:该类目需要支持7天无理由退货 | 因为店铺受到处罚，限制发品，更多请到商家后台奖惩中心查看 |
| 50002 | 业务处理失败 | isv.business-failed:110214003 | 110214003:分组操作失败：category_id(7209859568560554243)不存在,请核查 | 110214003:分组操作失败：category_id(7209859568560554243)不存在,请核查 |
| 50002 | 业务处理失败 | isv.business-failed:110101150 | 110101150:商品标题最长不能超过30个汉字（60个字符） | 110101150:商品标题最长不能超过30个汉字（60个字符） |
| 50002 | 业务处理失败 | isv.business-failed:2010102 | 2010102:系统检测审核不通过，内容未做修改，请修改后提交审核 | 2010102:系统检测审核不通过，内容未做修改，请修改后提交审核 |
| 50002 | 业务处理失败 | isv.business-failed:2010058 | 2010058:商品不存在 | 2010058:商品不存在 |
| 50002 | 业务处理失败 | isv.business-failed:110102123 | 110102123:open侧暂不允许设置分销商品 | 110102123:open侧暂不允许设置分销商品 |
| 50002 | 业务处理失败 | isv.business-failed:2010320 | 2010320:品牌必填，请重新选择品牌 | 2010320:品牌必填，请重新选择品牌 |
| 50002 | 业务处理失败 | isv.business-failed:2010318 | 2010318:当前商品选择的品牌信息已过期，请更新品牌资质信息，或更换商品品牌后，再提交商品发布。 | 2010318:当前商品选择的品牌信息已过期，请更新品牌资质信息，或更换商品品牌后，再提交商品发布。 |
| 50002 | 业务处理失败 | isv.business-failed:110270180 | 110270180:校验预售发货信息失败暂不支持该发货模式 | 110270180:校验预售发货信息失败暂不支持该发货模式 |
| 50002 | 业务处理失败 | isv.business-failed:2010329 | 2010329:当前店铺类型下, 使用/品牌，需要去资质中心上传品牌资质。去上传>https://zjsms.com/NEvh47E/ | 2010329:当前店铺类型下, 使用/品牌，需要去资质中心上传品牌资质。去上传>https://zjsms.com/NEvh47E/ |
| 50002 | 业务处理失败 | isv.business-failed:110102129 | 110102129:当前商品仅支持在百应后台编辑 | 110102129:当前商品仅支持在百应后台编辑 |
| 50002 | 业务处理失败 | isv.business-failed:110101145 | 110101145:“商品标题”不可含有换行符 | 110101145:“商品标题”不可含有换行符 |
| 50002 | 业务处理失败 | isv.business-failed:110330102 | 110330102:请修改“售后服务“，该类目已不再支持该售后政策 | 110330102:请修改“售后服务“，该类目已不再支持该售后政策 |
| 50002 | 业务处理失败 | isv.business-failed:110370101 | 110370101:商品属性[面料成分含量]填写格式不正确，不支持发布 | 110370101:商品属性[面料成分含量]填写格式不正确，不支持发布 |
| 50002 | 业务处理失败 | isv.business-failed:110260145 | 110260145:当前选择的货品(7428984621309657395)不存在，请重新选择货品完成商货品绑定，或删除货品取消绑定，维护商品库存信息。 | 110260145:当前选择的货品(7428984621309657395)不存在，请重新选择货品完成商货品绑定，或删除货品取消绑定，维护商品库存信息。 |
| 50002 | 业务处理失败 | isv.business-failed:2010339 | 2010339:存在审批中素材(主图视频)，请等待审批 | 2010339:存在审批中素材(主图视频)，请等待审批 |
| 50002 | 业务处理失败 | isv.business-failed:110405001 | 110405001:该商品商详页描述（含标题、主图和商品详情）与属性栏选择的材质不一致，请修改。规则详见https://school.jinritemai.com/doudian/web/question/50 | 110405001:该商品商详页描述（含标题、主图和商品详情）与属性栏选择的材质不一致，请修改。规则详见https://school.jinritemai.com/doudian/web/question/50 |
| 50002 | 业务处理失败 | isv.business-failed:110101131 | 110101131:短标题必须在4~12个字 | 110101131:短标题必须在4~12个字 |
| 50002 | 业务处理失败 | isv.business-failed:110102120 | 110102120:无法直接通过该接口创建或编辑有价券类商品 | 110102120:无法直接通过该接口创建或编辑有价券类商品 |
| 50002 | 业务处理失败 | isv.business-failed:110270179 | 110270179:校验预售发货信息失败发货时间配置不满足要求 | 110270179:校验预售发货信息失败发货时间配置不满足要求 |
| 50002 | 业务处理失败 | isv.business-failed:110270110 | 110270110:运费模板不存在 | 110270110:运费模板不存在 |
| 50002 | 业务处理失败 | isv.business-failed:2010063 | 2010063:为保障消费者权益，“0元入驻”试运营期间的商家店铺会进行发品数量的限制，商品已达上限，暂不支持添加商品，您可通过【抖店-资金-店铺保证金】缴纳保证金至足额后继续此操作，相关详情可查阅《抖音电商“0元入驻”试运营规范》。 | 2010063:为保障消费者权益，“0元入驻”试运营期间的商家店铺会进行发品数量的限制，商品已达上限，暂不支持添加商品，您可通过【抖店-资金-店铺保证金】缴纳保证金至足额后继续此操作，相关详情可查阅《抖音电商“0元入驻”试运营规范》。 |
| 50002 | 业务处理失败 | isv.business-failed:110290001 | 110290001:请上传食品生产许可证 | 110290001:请上传食品生产许可证 |
| 50002 | 业务处理失败 | isv.business-failed:2010055 | 2010055:因服务器升级，商品价格展示可能异常，请修改价格后重试 | 2010055:因服务器升级，商品价格展示可能异常，请修改价格后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110250121 | 110250121:尺码表需包含所有规格中的尺码，请补充尺码 | 110250121:尺码表需包含所有规格中的尺码，请补充尺码 |
| 50002 | 业务处理失败 | isv.business-failed:110270139 | 110270139:商品关联未结束的限时特卖活动，仅支持现货发货模式和阶梯发货模式 | 110270139:商品关联未结束的限时特卖活动，仅支持现货发货模式和阶梯发货模式 |
| 50002 | 业务处理失败 | isv.business-failed:110240102 | 110240102:库存数量支持范围：0-10000000 | 110240102:库存数量支持范围：0-10000000 |
| 50002 | 业务处理失败 | isv.business-failed:110250118 | 110250118:尺码模板不支持当前类目 | 110250118:尺码模板不支持当前类目 |
| 50002 | 业务处理失败 | isv.business-failed:110270152 | 110270152:校验预售发货信息失败预售结束时间小于当前时间 | 110270152:校验预售发货信息失败预售结束时间小于当前时间 |
| 50002 | 业务处理失败 | isv.business-failed:110220210 | 110220210:commit code不合法 | 110220210:commit code不合法 |
| 50002 | 业务处理失败 | isv.business-failed:110360101 | 110360101：品牌不存在或者未审核通过 | 110360101：品牌不存在或者未审核通过 |
| 50002 | 业务处理失败 | isv.business-failed:110201001 | 110201001：未查询到该类目 | 110201001：未查询到该类目 |
| 50002 | 业务处理失败 | isv.business-failed:110101267 | 110101267：商品草稿删除失败，请重试 | 110101267：商品草稿删除失败，请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
