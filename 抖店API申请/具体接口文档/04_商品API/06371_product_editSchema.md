# /product/editSchema

> 中文说明：商品发布schema编辑接口  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/6371>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/editSchema |
| 中文名称 | 商品发布schema编辑接口 |
| 文档目录 | 商品API |
| Article ID | 6371 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/5/27 15:13:50 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 200 |

## 使用说明

商品发布schema编辑接口
https://bytedance.larkoffice.com/docx/EjmSdsKvqoxCJkxAaAxcJz4Pnvf

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.editSchema | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 99 | 123 | 商品ID | - | - |
| 0 | commit | commit | true | 4 | true | 是否提审 true提审、false保存草稿 | - | - |
| 0 | token | token | true | 2 | 1234 | 商品发布token | - | - |
| 0 | model | model | true | 2 | "" | schema数据 | - | - |
| 0 | recommend_ids | recommend_ids | false | 8 | {"category_recommend_id":"qwrqrw12341"} | 预测记录id，类目预测记录key=category_recommend_id | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/editSchema?app_key=your_appkey_here&method=product.editSchema&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/editSchema?app_key=your_appkey_here&method=product.editSchema&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductEditSchemaRequest request = new ProductEditSchemaRequest();
ProductEditSchemaParam param = request.getParam();
param.setProductId(123L);
param.setCommit(true);
param.setToken("1234");
param.setModel("\"\"");
param.setRecommendIds({"category_recommend_id":"qwrqrw12341"});
ProductEditSchemaResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductEditSchemaRequest();
$param = new ProductEditSchemaParam();
$request->setParam($param);
$param->product_id = 123;
$param->commit = true;
$param->token = "1234";
$param->model = "\"\"";
$param->recommend_ids = {"category_recommend_id":"qwrqrw12341"};
$response = $request->execute(accessToken);

```

### python

```python
request = ProductEditSchemaRequest()
param = request.getParams()
param.product_id = 123
param.commit = true
param.token = "1234"
param.model = "\"\""
param.recommend_ids = {"category_recommend_id":"qwrqrw12341"}
response = request.execute(accessToken)

```

### go

```go
request := product_editSchema_request.New()
param := request.GetParams()
param.ProductId = 123
param.Commit = true
param.Token = "1234"
param.Model = "\"\""
param.RecommendIds = {"category_recommend_id":"qwrqrw12341"}
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductEditSchemaRequest();
var param = request.BuildParam();
param.ProductId = 123;
param.Commit = true;
param.Token = "1234";
param.Model = "\"\"";
param.RecommendIds = {"category_recommend_id":"qwrqrw12341"};
var response = request.Execute<ProductEditSchemaResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:schemaV2解析失败 | 2010001:schemaV2解析失败 |
| 50002 | 业务处理失败 | isv.business-failed:2010501 | 2010501:商品短标题未明确描述商品品名，请重新填写。 | 2010501:商品短标题未明确描述商品品名，请重新填写。 |
| 50002 | 业务处理失败 | isv.business-failed:2010041 | 2010041:商品信息审核中，不可编辑 | 2010041:商品信息审核中，不可编辑 |
| 50002 | 业务处理失败 | isv.business-failed:110215137 | 110215137:属性“面料材质“的填写格式已升级，属性值“棉“不符合填写格式要求，请点击属性输入框重新填写 | 110215137:属性“面料材质“的填写格式已升级，属性值“棉“不符合填写格式要求，请点击属性输入框重新填写 |
| 50002 | 业务处理失败 | isv.business-failed:2010102 | 2010102:系统检测审核不通过，内容未做修改，请修改后提交审核 | 2010102:系统检测审核不通过，内容未做修改，请修改后提交审核 |
| 50002 | 业务处理失败 | isv.business-failed:110250121 | 110250121:尺码表需包含所有规格中的尺码，请补充尺码 | 110250121:尺码表需包含所有规格中的尺码，请补充尺码 |
| 50002 | 业务处理失败 | isv.business-failed:110215105 | 110215105:属性值“超迁”不在“帮面材质”的最新可选范围，请删除后重新选择 | 110215105:属性值“超迁”不在“帮面材质”的最新可选范围，请删除后重新选择 |
| 50002 | 业务处理失败 | isv.business-failed:2010042 | 2010042:商品已删除，请先将商品恢复，再做修改 | 2010042:商品已删除，请先将商品恢复，再做修改 |
| 50002 | 业务处理失败 | isv.business-failed:110250127 | 110250127:图片长宽比非1:1 | 110250127:图片长宽比非1:1 |
| 50002 | 业务处理失败 | isv.business-failed:110250015 | 110250015:白底图比例要求1:1 | 110250015:白底图比例要求1:1 |
| 50002 | 业务处理失败 | isv.business-failed:110101150 | 110101150:商品标题最长不能超过30个汉字（60个字符） | 110101150:商品标题最长不能超过30个汉字（60个字符） |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:商品详情内容不能为空 | 2010004:商品详情内容不能为空 |
| 50002 | 业务处理失败 | isv.business-failed:2010003 | 2010003:类目属性填写不完整，请补充：CCC证书编号 | 2010003:类目属性填写不完整，请补充：CCC证书编号 |
| 50002 | 业务处理失败 | isv.business-failed:110370101 | 110370101:商品属性[面料成分含量]填写格式不正确，不支持发布 | 110370101:商品属性[面料成分含量]填写格式不正确，不支持发布 |
| 50002 | 业务处理失败 | isv.business-failed:110290001 | 110290001:请上传食品生产许可证 | 110290001:请上传食品生产许可证 |
| 50002 | 业务处理失败 | isv.business-failed:2010316 | 2010316:该类目需要支持7天无理由退货 | 2010316:该类目需要支持7天无理由退货 |
| 50002 | 业务处理失败 | isv.business-failed:110330102 | 110330102:请修改“售后服务“，该类目已不再支持该售后政策 | 110330102:请修改“售后服务“，该类目已不再支持该售后政策 |
| 50002 | 业务处理失败 | isv.business-failed:2010020 | 2010020:型号：该型号填写非法，请按商品对应的实际型号填写 | 2010020:型号：该型号填写非法，请按商品对应的实际型号填写 |
| 50002 | 业务处理失败 | isv.business-failed:110250128 | 110250128:主图3：4比例要求3:4 | 110250128:主图3：4比例要求3:4 |
| 50002 | 业务处理失败 | isv.business-failed:110200024 | 110200024:须补缴保证金<b>¥9.00</b>(保证金余额<b>¥1,991.00</b>；发布此商品应缴纳类目基础保证金<b>¥2,000.00</b>)，点击“<a href='/ffa/content/shop_deposit' target="_blank">立即充值</a>”补充保证金后可发布商品，详见<a href='https://school.jinritemai.com/doudian/web/article/101830?from=shop_table&btm_ppre=a4 | 110200024:须补缴保证金<b>¥9.00</b>(保证金余额<b>¥1,991.00</b>；发布此商品应缴纳类目基础保证金<b>¥2,000.00</b>)，点击“<a href='/ffa/content/shop_deposit' target="_blank">立即充值</a>”补充保证金后可发布商品，详见<a href='https://school.jinritemai.com/doudian/web/article/101830?from=shop_table&btm_ppre=a4 |
| 50002 | 业务处理失败 | isv.business-failed:110270180 | 110270180:校验预售发货信息失败暂不支持该发货模式 | 110270180:校验预售发货信息失败暂不支持该发货模式 |
| 50002 | 业务处理失败 | isv.business-failed:110220132 | 110220132:当前商品从现货+预售模式切换，请移除发货时效规 | 110220132:当前商品从现货+预售模式切换，请移除发货时效规 |
| 50002 | 业务处理失败 | isv.business-failed:110220109 | 110220109:规格图片长宽比非1:1 | 110220109:规格图片长宽比非1:1 |
| 50002 | 业务处理失败 | isv.business-failed:110250123 | 110250123:您上传的商品主图存在重复，请核对后重新上传 | 110250123:您上传的商品主图存在重复，请核对后重新上传 |
| 50002 | 业务处理失败 | isv.business-failed:110220165 | 110220165:属性填写不符合要求,面料材质属性值含量之和要求为100%, 请至抖店商品编辑页面刷新页面重试 | 110220165:属性填写不符合要求,面料材质属性值含量之和要求为100%, 请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 2010013:查询品牌信息失败 | 2010013:查询品牌信息失败 |
| 50002 | 业务处理失败 | isv.business-failed:110101131 | 110101131:短标题必须在4~12个字 | 110101131:短标题必须在4~12个字 |
| 50002 | 业务处理失败 | isv.business-failed:110105004 | 110105004:规格信息和sku信息必须同时更新 | 110105004:规格信息和sku信息必须同时更新 |
| 50002 | 业务处理失败 | isv.business-failed:2010063 | 2010063:为保障消费者权益，“0元入驻”试运营期间的商家店铺会进行发品数量的限制，商品已达上限，暂不支持添加商品，您可通过【抖店-资金-店铺保证金】缴纳保证金至足额后继续此操作，相关详情可查阅《抖音电商“0元入驻”试运营规范》。 | 2010063:为保障消费者权益，“0元入驻”试运营期间的商家店铺会进行发品数量的限制，商品已达上限，暂不支持添加商品，您可通过【抖店-资金-店铺保证金】缴纳保证金至足额后继续此操作，相关详情可查阅《抖音电商“0元入驻”试运营规范》。 |
| 50002 | 业务处理失败 | isv.business-failed:110240107 | 110240107:该商品已报名限时特卖，不可修改库存类型 | 110240107:该商品已报名限时特卖，不可修改库存类型 |
| 50002 | 业务处理失败 | isv.business-failed:110220162 | 110220162:至少启用一个SKU，不允许所有SKU都为下架 | 110220162:至少启用一个SKU，不允许所有SKU都为下架 |
| 50002 | 业务处理失败 | isv.business-failed:110270179 | 110270179:校验预售发货信息失败发货时间配置不满足要求 | 110270179:校验预售发货信息失败发货时间配置不满足要求 |
| 50002 | 业务处理失败 | isv.business-failed:110250142 | 110250142:区间值前后至少有一个数字 | 110250142:区间值前后至少有一个数字 |
| 50002 | 业务处理失败 | isv.business-failed:2010043 | 2010043:商品已被封禁 | 2010043:商品已被封禁 |
| 50002 | 业务处理失败 | isv.business-failed:110215118 | 110215118:属性厚度的属性值不在属性值选项列表中，属性值的自定义类型diy_type需要=1 | 110215118:属性厚度的属性值不在属性值选项列表中，属性值的自定义类型diy_type需要=1 |
| 50002 | 业务处理失败 | isv.business-failed:110220153 | 110220153:规格值的备注:350g辣炒料*1袋（大包装）【保质期至24年12月】 长度不能大于18,请修改后重试 | 110220153:规格值的备注:350g辣炒料*1袋（大包装）【保质期至24年12月】 长度不能大于18,请修改后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110270166 | 110270166:请填写重量 | 110270166:请填写重量 |
| 50002 | 业务处理失败 | isv.business-failed:2010022 | 2010022:【状态非法】商品审核状态错误, 当前状态: 待审核 | 2010022:【状态非法】商品审核状态错误, 当前状态: 待审核 |
| 50002 | 业务处理失败 | isv.business-failed:110310110 | 110310110:当前商品正在参与活动 30-秒杀20241117 20:28:18，商品sku价格不得低于活动到手价格￥503.49元，请修改后重新提交。 | 110310110:当前商品正在参与活动 30-秒杀20241117 20:28:18，商品sku价格不得低于活动到手价格￥503.49元，请修改后重新提交。 |
| 50002 | 业务处理失败 | isv.business-failed:2010340 | 2010340:当前商品使用的品牌未关联当前类目，请切换品牌或者前往商家资质中心补全品牌资质信息，之后再上架商品。 | 2010340:当前商品使用的品牌未关联当前类目，请切换品牌或者前往商家资质中心补全品牌资质信息，之后再上架商品。 |
| 50002 | 业务处理失败 | isv.business-failed:2010021 | 2010021:提交商品失败 | 2010021:提交商品失败 |
| 50002 | 业务处理失败 | isv.business-failed:2010005 | 2010005:<span>该商品的类目【服饰配件/皮带/帽子/围巾/围巾/丝巾/披肩】无资质授权,请前往<a href='/ffa/grs/qualification/list' target='_blank'>【店铺-店铺信息设置-店铺资质-行业资质】</a>中申请授权</span> | 2010005:<span>该商品的类目【服饰配件/皮带/帽子/围巾/围巾/丝巾/披肩】无资质授权,请前往<a href='/ffa/grs/qualification/list' target='_blank'>【店铺-店铺信息设置-店铺资质-行业资质】</a>中申请授权</span> |
| 50002 | 业务处理失败 | isv.business-failed:2010329 | 2010329:当前店铺类型下, 使用/品牌，需要去资质中心上传品牌资质。去上传>https://zjsms.com/NEvh47E/ | 2010329:当前店铺类型下, 使用/品牌，需要去资质中心上传品牌资质。去上传>https://zjsms.com/NEvh47E/ |
| 50002 | 业务处理失败 | isv.business-failed:110215012 | 110215012:类目属性「层数」长度过长，请修改后重试； | 110215012:类目属性「层数」长度过长，请修改后重试； |
| 50002 | 业务处理失败 | isv.business-failed:110220143 | 110220143:属性:面料材质填写不符合要求,面料材质样式已调整,请至抖店商品编辑页面刷新页面重试 | 110220143:属性:面料材质填写不符合要求,面料材质样式已调整,请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110210021 | 110210021:该商品对应的类目已处于禁发状态，需先修改商品对应类目为合适类目 | 110210021:该商品对应的类目已处于禁发状态，需先修改商品对应类目为合适类目 |
| 50002 | 业务处理失败 | isv.business-failed:2010320 | 2010320:品牌必填，请重新选择品牌 | 2010320:品牌必填，请重新选择品牌 |
| 50002 | 业务处理失败 | isv.business-failed:110101214 | 110101214:商品被处罚下架且未修改商品信息，请先修改商品再重新提交上架 | 110101214:商品被处罚下架且未修改商品信息，请先修改商品再重新提交上架 |
| 50002 | 业务处理失败 | isv.business-failed:110270152 | 110270152:校验预售发货信息失败预售结束时间小于当前时间 | 110270152:校验预售发货信息失败预售结束时间小于当前时间 |
| 50002 | 业务处理失败 | isv.business-failed:2010318 | 2010318:当前商品选择的品牌信息已过期，请更新品牌资质信息，或更换商品品牌后，再提交商品发布。 | 2010318:当前商品选择的品牌信息已过期，请更新品牌资质信息，或更换商品品牌后，再提交商品发布。 |
| 50002 | 业务处理失败 | isv.business-failed:110101145 | 110101145:“商品标题”不可含有Tab符 | 110101145:“商品标题”不可含有Tab符 |
| 50002 | 业务处理失败 | isv.business-failed:110220137 | 110220137:规格填写不符合要求:支持填写[[口味分类 总净重]],实际填写[[总净含量 总净重]] | 110220137:规格填写不符合要求:支持填写[[口味分类 总净重]],实际填写[[总净含量 总净重]] |
| 50002 | 业务处理失败 | isv.business-failed:110220138 | 110220138:规格填写不符合要求:[总净重]必填 | 110220138:规格填写不符合要求:[总净重]必填 |
| 50002 | 业务处理失败 | isv.business-failed:110250126 | 110250126:您上传的商品主图存在重复，请核对后重新上传 | 110250126:您上传的商品主图存在重复，请核对后重新上传 |
| 50002 | 业务处理失败 | isv.business-failed:110101146 | 110101146:“短标题”不可含有emoji表情等特殊符号 | 110101146:“短标题”不可含有emoji表情等特殊符号 |
| 50002 | 业务处理失败 | isv.business-failed:2010339 | 2010339:存在审批中素材(白底图)，请等待审批 | 2010339:存在审批中素材(白底图)，请等待审批 |
| 50002 | 业务处理失败 | isv.business-failed:110330124 | 110330124:该商品必须配置三包服务承诺 | 110330124:该商品必须配置三包服务承诺 |
| 50002 | 业务处理失败 | isv.business-failed:110405002 | 110405002:治理校验失败 | 110405002:治理校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:110220161 | 110220161:规格*的填写格式已升级，规格值*不符合填写格式要求，请点击规格值输入框重新填写 | 110220161:规格*的填写格式已升级，规格值*不符合填写格式要求，请点击规格值输入框重新填写 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
