# /product/addSchema

> 中文说明：商品发布schema提交  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/6370>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/addSchema |
| 中文名称 | 商品发布schema提交 |
| 文档目录 | 商品API |
| Article ID | 6370 |
| 文档版本 | V1.04 |
| 官方更新时间 | 2025/5/27 15:12:45 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

商品发布schema提交
https://bytedance.larkoffice.com/docx/EjmSdsKvqoxCJkxAaAxcJz4Pnvf

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.addSchema | 调用的API接口名称 | - | - |
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
| 0 | commit | commit | true | 4 | true | 是否提审 | - | - |
| 0 | token | token | true | 2 | 202404031422030A385E6530D92E9754EA | 商品发布提交token，开发者自行生成的唯一字符串 | - | - |
| 0 | model | model | true | 2 | [{"id":"product_type","element_type":"select","select_values":[{"label":"","value":"0"}]},{"id":"pickup_method","element_type":"select","select_values":[{"label":"","value":"0"}]},{"id":"freight_id","element_type":"input","value":"3733036"},{"id":"supply_day_return_selector","element_type":"select","select_values":[{"label":"","value":"15-1"}]},{"id":"support_authentic_guaranteeV2","element_type":"input","value":"true"},{"id":"quality_problem_return","element_type":"input","value":"7"},{"id":"three_guarantees","element_type":"select","select_values":[{"label":"","value":"2"}]},{"id":"fix_duration","element_type":"select","select_values":[]},{"id":"extended_duration","element_type":"select","select_values":[{"label":"","value":"2190"}]},{"id":"presell_type","element_type":"select","select_values":[{"label":"","value":"0"}]},{"id":"delivery_delay_day","element_type":"select","select_values":[{"label":"","value":"1"}]},{"id":"delay_rule_switch","element_type":"input","value":"false"},{"id":"delay_rule_order_time","element_type":"array","values":[]},{"id":"delay_rule_delivery_date","element_type":"input","value":"0"},{"id":"presell_end_time_switch","element_type":"input","value":"true"},{"id":"presell_end_time","element_type":"input"},{"id":"category_properties","element_type":"complex","complex_value":[{"id":"2592","element_type":"select","select_values":[{"label":"甜美","value":"23925"}]},{"id":"4924","element_type":"input","value":"12","value_attr":{}},{"id":"3972","element_type":"input","value":"123","value_attr":{}},{"id":"4895","element_type":"input","value":"1册","value_attr":{}},{"id":"813","element_type":"select","select_values":[{"label":"H型","value":"24667"}]}]},{"id":"goods_category","element_type":"input","value":"20219"},{"id":"main_image_three_to_four","element_type":"array","values":[]},{"id":"size_info_template_id","element_type":"input"},{"id":"white_background_pic","element_type":"input"},{"id":"main_pic_video","element_type":"input"},{"id":"long_pic","element_type":"input"},{"id":"description","element_type":"input","value":"\u003cp\u003e\u003cimg src=\"https://p-boe.byted.org/obj/ecom-shop-material/v1_ayoJLG_70411191472075410360078_3a7acaa53895d9919efd07647b82e227_sx_2615868_www3840-2160\" style=\"max-width:100%;\"/\u003e\u003c/p\u003e"},{"id":"reduce_type","element_type":"select","select_values":[{"label":"","value":"1"}]},{"id":"start_sale_type","element_type":"select","select_values":[{"label":"","value":"0"}]},{"id":"sale_channel_type","element_type":"select","select_values":[]},{"id":"short_product_name","element_type":"input","value":""},{"id":"reference_price","element_type":"input"},{"id":"reference_price_certificate_type","element_type":"select","select_values":[]},{"id":"reference_price_certificate_urls","element_type":"array"},{"id":"total_buy_num","element_type":"input"},{"id":"max_buy_num","element_type":"input"},{"id":"min_buy_num","element_type":"input","value":"1"},{"id":"weight_unit","element_type":"select","select_values":[{"label":"","value":"0"}]},{"id":"weight_value","element_type":"input","value":"10"},{"id":"title","element_type":"input","value":"测试 女装半身裙123"},{"id":"title_prefix","element_type":"input","value":""},{"id":"title_suffix","element_type":"input","value":""},{"id":"title_use_brand_name","element_type":"input","value":"false"},{"id":"qualification","element_type":"complex","complex_value":[{"id":"3457058919409648559","element_type":"array","values":["https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661"]}]},{"id":"pic","element_type":"array","values":["https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661"]},{"id":"spec_detail","element_type":"custom"},{"id":"sku_detail","element_type":"table","table_value":[[{"id":"sku_id","element_type":"input","value":"3659179643336928"},{"id":"sku_sell_prop","element_type":"array","values":["乳白色","XXS"],"values_attr":[{"property_name":"颜色分类"},{"property_name":"尺码大小"}]},{"id":"sku_status","element_type":"input","value":"true"},{"id":"price","element_type":"input","value":"10000"},{"id":"sku_type","element_type":"input","value":"0"},{"id":"stock_info","element_type":"input","value":"0"},{"id":"step_stock_info","element_type":"input","value":"0"},{"id":"outer_sku_id","element_type":"input"},{"id":"code","element_type":"input","value":""}]]}] | schema数据、json协议 | - | - |
| 0 | product_id | product_id | false | 1 | 1 | 1 | - | - |
| 0 | recruit_info | recruit_info | false | 5 | - | 招商信息 | - | - |
| 1 | recruit_info.recruit_source | recruit_source | false | 2 | isv.appid | 发品源 | - | - |
| 1 | recruit_info.recruit_follow_id | recruit_follow_id | true | 2 | 28423315 | 线索ID | - | - |
| 1 | recruit_info.recruit_type | recruit_type | true | 2 | 99 | 招商类型 | - | - |
| 0 | recommend_ids | recommend_ids | false | 8 | {"category_recommend_id":"aqwrqwrq123"} | 预测记录id，类目预测记录key=category_recommend_id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | product_id | product_id | - | 1 | 123 | 商品ID | - | - |
| 0 | sku | sku | - | 3 | - | sku信息 | - | R1 |
| 1 | sku.sku_id | sku_id | - | 1 | 123 | skuID | - | - |
| 1 | sku.out_sku_id | out_sku_id | - | 1 | 123 | 外部skuID | - | - |
| 1 | sku.outer_sku_id | outer_sku_id | - | 2 | 1234 | 外部skuID | - | - |
| 1 | sku.code | code | - | 2 | 1234 | 外部skuID | - | - |

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
ProductAddSchemaRequest request = new ProductAddSchemaRequest();
ProductAddSchemaParam param = request.getParam();
param.setCommit(true);
param.setToken("202404031422030A385E6530D92E9754EA");
param.setModel("[{\"id\":\"product_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"pickup_method\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"freight_id\",\"element_type\":\"input\",\"value\":\"3733036\"},{\"id\":\"supply_day_return_selector\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"15-1\"}]},{\"id\":\"support_authentic_guaranteeV2\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"quality_problem_return\",\"element_type\":\"input\",\"value\":\"7\"},{\"id\":\"three_guarantees\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2\"}]},{\"id\":\"fix_duration\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"extended_duration\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2190\"}]},{\"id\":\"presell_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"delivery_delay_day\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"delay_rule_switch\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"delay_rule_order_time\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"delay_rule_delivery_date\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"presell_end_time_switch\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"presell_end_time\",\"element_type\":\"input\"},{\"id\":\"category_properties\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"2592\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"甜美\",\"value\":\"23925\"}]},{\"id\":\"4924\",\"element_type\":\"input\",\"value\":\"12\",\"value_attr\":{}},{\"id\":\"3972\",\"element_type\":\"input\",\"value\":\"123\",\"value_attr\":{}},{\"id\":\"4895\",\"element_type\":\"input\",\"value\":\"1册\",\"value_attr\":{}},{\"id\":\"813\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"H型\",\"value\":\"24667\"}]}]},{\"id\":\"goods_category\",\"element_type\":\"input\",\"value\":\"20219\"},{\"id\":\"main_image_three_to_four\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"size_info_template_id\",\"element_type\":\"input\"},{\"id\":\"white_background_pic\",\"element_type\":\"input\"},{\"id\":\"main_pic_video\",\"element_type\":\"input\"},{\"id\":\"long_pic\",\"element_type\":\"input\"},{\"id\":\"description\",\"element_type\":\"input\",\"value\":\"\\u003cp\\u003e\\u003cimg src=\\\"https://p-boe.byted.org/obj/ecom-shop-material/v1_ayoJLG_70411191472075410360078_3a7acaa53895d9919efd07647b82e227_sx_2615868_www3840-2160\\\" style=\\\"max-width:100%;\\\"/\\u003e\\u003c/p\\u003e\"},{\"id\":\"reduce_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"start_sale_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"sale_channel_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"short_product_name\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"reference_price\",\"element_type\":\"input\"},{\"id\":\"reference_price_certificate_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"reference_price_certificate_urls\",\"element_type\":\"array\"},{\"id\":\"total_buy_num\",\"element_type\":\"input\"},{\"id\":\"max_buy_num\",\"element_type\":\"input\"},{\"id\":\"min_buy_num\",\"element_type\":\"input\",\"value\":\"1\"},{\"id\":\"weight_unit\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"weight_value\",\"element_type\":\"input\",\"value\":\"10\"},{\"id\":\"title\",\"element_type\":\"input\",\"value\":\"测试 女装半身裙123\"},{\"id\":\"title_prefix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_suffix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_use_brand_name\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"qualification\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"3457058919409648559\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]}]},{\"id\":\"pic\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]},{\"id\":\"spec_detail\",\"element_type\":\"custom\"},{\"id\":\"sku_detail\",\"element_type\":\"table\",\"table_value\":[[{\"id\":\"sku_id\",\"element_type\":\"input\",\"value\":\"3659179643336928\"},{\"id\":\"sku_sell_prop\",\"element_type\":\"array\",\"values\":[\"乳白色\",\"XXS\"],\"values_attr\":[{\"property_name\":\"颜色分类\"},{\"property_name\":\"尺码大小\"}]},{\"id\":\"sku_status\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"price\",\"element_type\":\"input\",\"value\":\"10000\"},{\"id\":\"sku_type\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"step_stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"outer_sku_id\",\"element_type\":\"input\"},{\"id\":\"code\",\"element_type\":\"input\",\"value\":\"\"}]]}]");
param.setProductId(1L);
param.setRecommendIds({"category_recommend_id":"aqwrqwrq123"});
ProductAddSchemaResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductAddSchemaRequest();
$param = new ProductAddSchemaParam();
$request->setParam($param);
$param->commit = true;
$param->token = "202404031422030A385E6530D92E9754EA";
$param->model = "[{\"id\":\"product_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"pickup_method\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"freight_id\",\"element_type\":\"input\",\"value\":\"3733036\"},{\"id\":\"supply_day_return_selector\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"15-1\"}]},{\"id\":\"support_authentic_guaranteeV2\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"quality_problem_return\",\"element_type\":\"input\",\"value\":\"7\"},{\"id\":\"three_guarantees\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2\"}]},{\"id\":\"fix_duration\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"extended_duration\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2190\"}]},{\"id\":\"presell_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"delivery_delay_day\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"delay_rule_switch\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"delay_rule_order_time\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"delay_rule_delivery_date\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"presell_end_time_switch\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"presell_end_time\",\"element_type\":\"input\"},{\"id\":\"category_properties\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"2592\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"甜美\",\"value\":\"23925\"}]},{\"id\":\"4924\",\"element_type\":\"input\",\"value\":\"12\",\"value_attr\":{}},{\"id\":\"3972\",\"element_type\":\"input\",\"value\":\"123\",\"value_attr\":{}},{\"id\":\"4895\",\"element_type\":\"input\",\"value\":\"1册\",\"value_attr\":{}},{\"id\":\"813\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"H型\",\"value\":\"24667\"}]}]},{\"id\":\"goods_category\",\"element_type\":\"input\",\"value\":\"20219\"},{\"id\":\"main_image_three_to_four\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"size_info_template_id\",\"element_type\":\"input\"},{\"id\":\"white_background_pic\",\"element_type\":\"input\"},{\"id\":\"main_pic_video\",\"element_type\":\"input\"},{\"id\":\"long_pic\",\"element_type\":\"input\"},{\"id\":\"description\",\"element_type\":\"input\",\"value\":\"\\u003cp\\u003e\\u003cimg src=\\\"https://p-boe.byted.org/obj/ecom-shop-material/v1_ayoJLG_70411191472075410360078_3a7acaa53895d9919efd07647b82e227_sx_2615868_www3840-2160\\\" style=\\\"max-width:100%;\\\"/\\u003e\\u003c/p\\u003e\"},{\"id\":\"reduce_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"start_sale_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"sale_channel_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"short_product_name\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"reference_price\",\"element_type\":\"input\"},{\"id\":\"reference_price_certificate_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"reference_price_certificate_urls\",\"element_type\":\"array\"},{\"id\":\"total_buy_num\",\"element_type\":\"input\"},{\"id\":\"max_buy_num\",\"element_type\":\"input\"},{\"id\":\"min_buy_num\",\"element_type\":\"input\",\"value\":\"1\"},{\"id\":\"weight_unit\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"weight_value\",\"element_type\":\"input\",\"value\":\"10\"},{\"id\":\"title\",\"element_type\":\"input\",\"value\":\"测试 女装半身裙123\"},{\"id\":\"title_prefix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_suffix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_use_brand_name\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"qualification\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"3457058919409648559\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]}]},{\"id\":\"pic\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]},{\"id\":\"spec_detail\",\"element_type\":\"custom\"},{\"id\":\"sku_detail\",\"element_type\":\"table\",\"table_value\":[[{\"id\":\"sku_id\",\"element_type\":\"input\",\"value\":\"3659179643336928\"},{\"id\":\"sku_sell_prop\",\"element_type\":\"array\",\"values\":[\"乳白色\",\"XXS\"],\"values_attr\":[{\"property_name\":\"颜色分类\"},{\"property_name\":\"尺码大小\"}]},{\"id\":\"sku_status\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"price\",\"element_type\":\"input\",\"value\":\"10000\"},{\"id\":\"sku_type\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"step_stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"outer_sku_id\",\"element_type\":\"input\"},{\"id\":\"code\",\"element_type\":\"input\",\"value\":\"\"}]]}]";
$param->product_id = 1;
$param->recommend_ids = {"category_recommend_id":"aqwrqwrq123"};
$response = $request->execute(accessToken);

```

### python

```python
request = ProductAddSchemaRequest()
param = request.getParams()
param.commit = true
param.token = "202404031422030A385E6530D92E9754EA"
param.model = "[{\"id\":\"product_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"pickup_method\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"freight_id\",\"element_type\":\"input\",\"value\":\"3733036\"},{\"id\":\"supply_day_return_selector\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"15-1\"}]},{\"id\":\"support_authentic_guaranteeV2\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"quality_problem_return\",\"element_type\":\"input\",\"value\":\"7\"},{\"id\":\"three_guarantees\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2\"}]},{\"id\":\"fix_duration\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"extended_duration\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2190\"}]},{\"id\":\"presell_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"delivery_delay_day\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"delay_rule_switch\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"delay_rule_order_time\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"delay_rule_delivery_date\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"presell_end_time_switch\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"presell_end_time\",\"element_type\":\"input\"},{\"id\":\"category_properties\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"2592\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"甜美\",\"value\":\"23925\"}]},{\"id\":\"4924\",\"element_type\":\"input\",\"value\":\"12\",\"value_attr\":{}},{\"id\":\"3972\",\"element_type\":\"input\",\"value\":\"123\",\"value_attr\":{}},{\"id\":\"4895\",\"element_type\":\"input\",\"value\":\"1册\",\"value_attr\":{}},{\"id\":\"813\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"H型\",\"value\":\"24667\"}]}]},{\"id\":\"goods_category\",\"element_type\":\"input\",\"value\":\"20219\"},{\"id\":\"main_image_three_to_four\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"size_info_template_id\",\"element_type\":\"input\"},{\"id\":\"white_background_pic\",\"element_type\":\"input\"},{\"id\":\"main_pic_video\",\"element_type\":\"input\"},{\"id\":\"long_pic\",\"element_type\":\"input\"},{\"id\":\"description\",\"element_type\":\"input\",\"value\":\"\\u003cp\\u003e\\u003cimg src=\\\"https://p-boe.byted.org/obj/ecom-shop-material/v1_ayoJLG_70411191472075410360078_3a7acaa53895d9919efd07647b82e227_sx_2615868_www3840-2160\\\" style=\\\"max-width:100%;\\\"/\\u003e\\u003c/p\\u003e\"},{\"id\":\"reduce_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"start_sale_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"sale_channel_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"short_product_name\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"reference_price\",\"element_type\":\"input\"},{\"id\":\"reference_price_certificate_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"reference_price_certificate_urls\",\"element_type\":\"array\"},{\"id\":\"total_buy_num\",\"element_type\":\"input\"},{\"id\":\"max_buy_num\",\"element_type\":\"input\"},{\"id\":\"min_buy_num\",\"element_type\":\"input\",\"value\":\"1\"},{\"id\":\"weight_unit\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"weight_value\",\"element_type\":\"input\",\"value\":\"10\"},{\"id\":\"title\",\"element_type\":\"input\",\"value\":\"测试 女装半身裙123\"},{\"id\":\"title_prefix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_suffix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_use_brand_name\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"qualification\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"3457058919409648559\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]}]},{\"id\":\"pic\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]},{\"id\":\"spec_detail\",\"element_type\":\"custom\"},{\"id\":\"sku_detail\",\"element_type\":\"table\",\"table_value\":[[{\"id\":\"sku_id\",\"element_type\":\"input\",\"value\":\"3659179643336928\"},{\"id\":\"sku_sell_prop\",\"element_type\":\"array\",\"values\":[\"乳白色\",\"XXS\"],\"values_attr\":[{\"property_name\":\"颜色分类\"},{\"property_name\":\"尺码大小\"}]},{\"id\":\"sku_status\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"price\",\"element_type\":\"input\",\"value\":\"10000\"},{\"id\":\"sku_type\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"step_stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"outer_sku_id\",\"element_type\":\"input\"},{\"id\":\"code\",\"element_type\":\"input\",\"value\":\"\"}]]}]"
param.product_id = 1
param.recommend_ids = {"category_recommend_id":"aqwrqwrq123"}
response = request.execute(accessToken)

```

### go

```go
request := product_addSchema_request.New()
param := request.GetParams()
param.Commit = true
param.Token = "202404031422030A385E6530D92E9754EA"
param.Model = "[{\"id\":\"product_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"pickup_method\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"freight_id\",\"element_type\":\"input\",\"value\":\"3733036\"},{\"id\":\"supply_day_return_selector\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"15-1\"}]},{\"id\":\"support_authentic_guaranteeV2\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"quality_problem_return\",\"element_type\":\"input\",\"value\":\"7\"},{\"id\":\"three_guarantees\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2\"}]},{\"id\":\"fix_duration\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"extended_duration\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2190\"}]},{\"id\":\"presell_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"delivery_delay_day\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"delay_rule_switch\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"delay_rule_order_time\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"delay_rule_delivery_date\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"presell_end_time_switch\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"presell_end_time\",\"element_type\":\"input\"},{\"id\":\"category_properties\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"2592\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"甜美\",\"value\":\"23925\"}]},{\"id\":\"4924\",\"element_type\":\"input\",\"value\":\"12\",\"value_attr\":{}},{\"id\":\"3972\",\"element_type\":\"input\",\"value\":\"123\",\"value_attr\":{}},{\"id\":\"4895\",\"element_type\":\"input\",\"value\":\"1册\",\"value_attr\":{}},{\"id\":\"813\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"H型\",\"value\":\"24667\"}]}]},{\"id\":\"goods_category\",\"element_type\":\"input\",\"value\":\"20219\"},{\"id\":\"main_image_three_to_four\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"size_info_template_id\",\"element_type\":\"input\"},{\"id\":\"white_background_pic\",\"element_type\":\"input\"},{\"id\":\"main_pic_video\",\"element_type\":\"input\"},{\"id\":\"long_pic\",\"element_type\":\"input\"},{\"id\":\"description\",\"element_type\":\"input\",\"value\":\"\\u003cp\\u003e\\u003cimg src=\\\"https://p-boe.byted.org/obj/ecom-shop-material/v1_ayoJLG_70411191472075410360078_3a7acaa53895d9919efd07647b82e227_sx_2615868_www3840-2160\\\" style=\\\"max-width:100%;\\\"/\\u003e\\u003c/p\\u003e\"},{\"id\":\"reduce_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"start_sale_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"sale_channel_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"short_product_name\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"reference_price\",\"element_type\":\"input\"},{\"id\":\"reference_price_certificate_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"reference_price_certificate_urls\",\"element_type\":\"array\"},{\"id\":\"total_buy_num\",\"element_type\":\"input\"},{\"id\":\"max_buy_num\",\"element_type\":\"input\"},{\"id\":\"min_buy_num\",\"element_type\":\"input\",\"value\":\"1\"},{\"id\":\"weight_unit\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"weight_value\",\"element_type\":\"input\",\"value\":\"10\"},{\"id\":\"title\",\"element_type\":\"input\",\"value\":\"测试 女装半身裙123\"},{\"id\":\"title_prefix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_suffix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_use_brand_name\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"qualification\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"3457058919409648559\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]}]},{\"id\":\"pic\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]},{\"id\":\"spec_detail\",\"element_type\":\"custom\"},{\"id\":\"sku_detail\",\"element_type\":\"table\",\"table_value\":[[{\"id\":\"sku_id\",\"element_type\":\"input\",\"value\":\"3659179643336928\"},{\"id\":\"sku_sell_prop\",\"element_type\":\"array\",\"values\":[\"乳白色\",\"XXS\"],\"values_attr\":[{\"property_name\":\"颜色分类\"},{\"property_name\":\"尺码大小\"}]},{\"id\":\"sku_status\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"price\",\"element_type\":\"input\",\"value\":\"10000\"},{\"id\":\"sku_type\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"step_stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"outer_sku_id\",\"element_type\":\"input\"},{\"id\":\"code\",\"element_type\":\"input\",\"value\":\"\"}]]}]"
param.ProductId = 1
param.RecommendIds = {"category_recommend_id":"aqwrqwrq123"}
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductAddSchemaRequest();
var param = request.BuildParam();
param.Commit = true;
param.Token = "202404031422030A385E6530D92E9754EA";
param.Model = "[{\"id\":\"product_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"pickup_method\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"freight_id\",\"element_type\":\"input\",\"value\":\"3733036\"},{\"id\":\"supply_day_return_selector\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"15-1\"}]},{\"id\":\"support_authentic_guaranteeV2\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"quality_problem_return\",\"element_type\":\"input\",\"value\":\"7\"},{\"id\":\"three_guarantees\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2\"}]},{\"id\":\"fix_duration\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"extended_duration\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"2190\"}]},{\"id\":\"presell_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"delivery_delay_day\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"delay_rule_switch\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"delay_rule_order_time\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"delay_rule_delivery_date\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"presell_end_time_switch\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"presell_end_time\",\"element_type\":\"input\"},{\"id\":\"category_properties\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"2592\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"甜美\",\"value\":\"23925\"}]},{\"id\":\"4924\",\"element_type\":\"input\",\"value\":\"12\",\"value_attr\":{}},{\"id\":\"3972\",\"element_type\":\"input\",\"value\":\"123\",\"value_attr\":{}},{\"id\":\"4895\",\"element_type\":\"input\",\"value\":\"1册\",\"value_attr\":{}},{\"id\":\"813\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"H型\",\"value\":\"24667\"}]}]},{\"id\":\"goods_category\",\"element_type\":\"input\",\"value\":\"20219\"},{\"id\":\"main_image_three_to_four\",\"element_type\":\"array\",\"values\":[]},{\"id\":\"size_info_template_id\",\"element_type\":\"input\"},{\"id\":\"white_background_pic\",\"element_type\":\"input\"},{\"id\":\"main_pic_video\",\"element_type\":\"input\"},{\"id\":\"long_pic\",\"element_type\":\"input\"},{\"id\":\"description\",\"element_type\":\"input\",\"value\":\"\\u003cp\\u003e\\u003cimg src=\\\"https://p-boe.byted.org/obj/ecom-shop-material/v1_ayoJLG_70411191472075410360078_3a7acaa53895d9919efd07647b82e227_sx_2615868_www3840-2160\\\" style=\\\"max-width:100%;\\\"/\\u003e\\u003c/p\\u003e\"},{\"id\":\"reduce_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"1\"}]},{\"id\":\"start_sale_type\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"sale_channel_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"short_product_name\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"reference_price\",\"element_type\":\"input\"},{\"id\":\"reference_price_certificate_type\",\"element_type\":\"select\",\"select_values\":[]},{\"id\":\"reference_price_certificate_urls\",\"element_type\":\"array\"},{\"id\":\"total_buy_num\",\"element_type\":\"input\"},{\"id\":\"max_buy_num\",\"element_type\":\"input\"},{\"id\":\"min_buy_num\",\"element_type\":\"input\",\"value\":\"1\"},{\"id\":\"weight_unit\",\"element_type\":\"select\",\"select_values\":[{\"label\":\"\",\"value\":\"0\"}]},{\"id\":\"weight_value\",\"element_type\":\"input\",\"value\":\"10\"},{\"id\":\"title\",\"element_type\":\"input\",\"value\":\"测试 女装半身裙123\"},{\"id\":\"title_prefix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_suffix\",\"element_type\":\"input\",\"value\":\"\"},{\"id\":\"title_use_brand_name\",\"element_type\":\"input\",\"value\":\"false\"},{\"id\":\"qualification\",\"element_type\":\"complex\",\"complex_value\":[{\"id\":\"3457058919409648559\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]}]},{\"id\":\"pic\",\"element_type\":\"array\",\"values\":[\"https://p-boe.byted.org/obj/ecom-shop-material/ayoJLG_m_a8966c7358a3ec2f6cfbd8d6036d4e1f_sx_60496_www661-661\"]},{\"id\":\"spec_detail\",\"element_type\":\"custom\"},{\"id\":\"sku_detail\",\"element_type\":\"table\",\"table_value\":[[{\"id\":\"sku_id\",\"element_type\":\"input\",\"value\":\"3659179643336928\"},{\"id\":\"sku_sell_prop\",\"element_type\":\"array\",\"values\":[\"乳白色\",\"XXS\"],\"values_attr\":[{\"property_name\":\"颜色分类\"},{\"property_name\":\"尺码大小\"}]},{\"id\":\"sku_status\",\"element_type\":\"input\",\"value\":\"true\"},{\"id\":\"price\",\"element_type\":\"input\",\"value\":\"10000\"},{\"id\":\"sku_type\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"step_stock_info\",\"element_type\":\"input\",\"value\":\"0\"},{\"id\":\"outer_sku_id\",\"element_type\":\"input\"},{\"id\":\"code\",\"element_type\":\"input\",\"value\":\"\"}]]}]";
param.ProductId = 1;
param.RecommendIds = {"category_recommend_id":"aqwrqwrq123"};
var response = request.Execute<ProductAddSchemaResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010501 | 2010501:该商品各SKU售卖价，最高价需在最低价的2.0倍以内，请修改后再提交。平台规范合理设置SKU价格以保障消费者体验，规则详见：https://school.jinritemai.com/doudian/web/article/aJ6KJLrLcZv3 | 2010501:该商品各SKU售卖价，最高价需在最低价的2.0倍以内，请修改后再提交。平台规范合理设置SKU价格以保障消费者体验，规则详见：https://school.jinritemai.com/doudian/web/article/aJ6KJLrLcZv3 |
| 50002 | 业务处理失败 | isv.business-failed:2010020 | 2010020:CCC证书编号：填写内容不得包含非法字符/空格，请重新输入正确编号 | 2010020:CCC证书编号：填写内容不得包含非法字符/空格，请重新输入正确编号 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:系统异常,请重试 | 2010001:系统异常,请重试 |
| 50002 | 业务处理失败 | isv.business-failed:110370101 | 110370101:商品属性[型号]填写格式不正确，不支持发布 | 110370101:商品属性[型号]填写格式不正确，不支持发布 |
| 50002 | 业务处理失败 | isv.business-failed:2010003 | 2010003:类目属性填写不完整，请补充：饰面材质 | 2010003:类目属性填写不完整，请补充：饰面材质 |
| 50002 | 业务处理失败 | isv.business-failed:2010329 | 2010329:当前店铺类型下, 使用/品牌，需要去资质中心上传品牌资质。去上传>https://zjsms.com/NEvh47E/ | 2010329:当前店铺类型下, 使用/品牌，需要去资质中心上传品牌资质。去上传>https://zjsms.com/NEvh47E/ |
| 50002 | 业务处理失败 | isv.business-failed:110200024 | 110200024:须补缴保证金<b>¥9,000.00</b>(保证金余额<b>¥1,000.00</b>；发布此商品应缴纳类目基础保证金<b>¥10,000.00</b>)，点击“<a href='/ffa/content/shop_deposit' target="_blank">立即充值</a>”补充保证金后可发布商品，详见<a href='https://school.jinritemai.com/doudian/web/article/101830?from=shop_table&btm_pp | 110200024:须补缴保证金<b>¥9,000.00</b>(保证金余额<b>¥1,000.00</b>；发布此商品应缴纳类目基础保证金<b>¥10,000.00</b>)，点击“<a href='/ffa/content/shop_deposit' target="_blank">立即充值</a>”补充保证金后可发布商品，详见<a href='https://school.jinritemai.com/doudian/web/article/101830?from=shop_table&btm_pp |
| 50002 | 业务处理失败 | isv.business-failed:110220139 | 110220139:规格填写不符合要求,允许填写:[6XL,160/84A,43码,32,125,34码,200,210,165/92A,180/94A,170/96A,170/98A,44cm,55cm,36码,165/84A,36,160/72B,均码,29码,215,200/108A,190/112C,170/78B,180/102B,35码,148cm,161cm,170/78A,64,180/106C,L,150/72A,190/108B,185/106C,175/87B,47cm,132cm, | 110220139:规格填写不符合要求,允许填写:[6XL,160/84A,43码,32,125,34码,200,210,165/92A,180/94A,170/96A,170/98A,44cm,55cm,36码,165/84A,36,160/72B,均码,29码,215,200/108A,190/112C,170/78B,180/102B,35码,148cm,161cm,170/78A,64,180/106C,L,150/72A,190/108B,185/106C,175/87B,47cm,132cm, |
| 50002 | 业务处理失败 | isv.business-failed:2010318 | 2010318:当前商品选择的品牌信息已过期，请更新品牌资质信息，或更换商品品牌后，再提交商品发布。 | 2010318:当前商品选择的品牌信息已过期，请更新品牌资质信息，或更换商品品牌后，再提交商品发布。 |
| 50002 | 业务处理失败 | isv.business-failed:110101150 | 110101150:商品标题最长不能超过30个汉字（60个字符） | 110101150:商品标题最长不能超过30个汉字（60个字符） |
| 50002 | 业务处理失败 | isv.business-failed:110220138 | 110220138:规格填写不符合要求:[尺码大小]必填 | 110220138:规格填写不符合要求:[尺码大小]必填 |
| 50002 | 业务处理失败 | isv.business-failed:110250121 | 110250121:尺码表需包含所有规格中的尺码，请补充尺码 | 110250121:尺码表需包含所有规格中的尺码，请补充尺码 |
| 50002 | 业务处理失败 | isv.business-failed:110220153 | 110220153:规格值的备注:100*150-儿童毯-【升级加厚 双面加绒 可铺可盖】 长度不能大于18,请修改后重试 | 110220153:规格值的备注:100*150-儿童毯-【升级加厚 双面加绒 可铺可盖】 长度不能大于18,请修改后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010063 | 2010063:为保障消费者权益，“0元入驻”试运营期间的商家店铺会进行发品数量的限制，商品已达上限，暂不支持添加商品，您可通过【抖店-资金-店铺保证金】缴纳保证金至足额后继续此操作，相关详情可查阅《抖音电商“0元入驻”试运营规范》。 | 2010063:为保障消费者权益，“0元入驻”试运营期间的商家店铺会进行发品数量的限制，商品已达上限，暂不支持添加商品，您可通过【抖店-资金-店铺保证金】缴纳保证金至足额后继续此操作，相关详情可查阅《抖音电商“0元入驻”试运营规范》。 |
| 50002 | 业务处理失败 | isv.business-failed:110220165 | 110220165:属性填写不符合要求,面料材质属性值含量之和要求为100%, 请至抖店商品编辑页面刷新页面重试 | 110220165:属性填写不符合要求,面料材质属性值含量之和要求为100%, 请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220161 | 110220161:规格“规格“的填写格式已升级，规格值“精选大颗粒辣木籽250克“不符合填写格式要求，请点击规格值输入框重新填写 | 110220161:规格“规格“的填写格式已升级，规格值“精选大颗粒辣木籽250克“不符合填写格式要求，请点击规格值输入框重新填写 |
| 50002 | 业务处理失败 | isv.business-failed:110215011 | 110215011:类目属性「CCC证书编号」存在属性值「1111111111111111」含有连续相同的数字，请修改后重试； | 110215011:类目属性「CCC证书编号」存在属性值「1111111111111111」含有连续相同的数字，请修改后重试； |
| 50002 | 业务处理失败 | isv.business-failed:110210021 | 110210021:该商品对应的类目已处于禁发状态，需先修改商品对应类目为合适类目 | 110210021:该商品对应的类目已处于禁发状态，需先修改商品对应类目为合适类目 |
| 50002 | 业务处理失败 | isv.business-failed:110290001 | 110290001:请上传质检报告 | 110290001:请上传质检报告 |
| 50002 | 业务处理失败 | isv.business-failed:110220112 | 110220112:SKU数量超过450上限，请删除任意规格属性项后添加 | 110220112:SKU数量超过450上限，请删除任意规格属性项后添加 |
| 50002 | 业务处理失败 | isv.business-failed:110250142 | 110250142:尺码表填写有误，您的尺码中包含均码，不能同时设置其他尺码，请修改后发布 | 110250142:尺码表填写有误，您的尺码中包含均码，不能同时设置其他尺码，请修改后发布 |
| 50002 | 业务处理失败 | isv.business-failed:2010055 | 2010055:因服务器升级，商品价格展示可能异常，请修改价格后重试 | 2010055:因服务器升级，商品价格展示可能异常，请修改价格后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220137 | 110220137:规格填写不符合要求:支持填写[[颜色分类 尺寸大小]],实际填写[[层数 颜色分类]] | 110220137:规格填写不符合要求:支持填写[[颜色分类 尺寸大小]],实际填写[[层数 颜色分类]] |
| 50002 | 业务处理失败 | isv.business-failed:110220109 | 110220109:规格图片长宽比非1:1 | 110220109:规格图片长宽比非1:1 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:单张详情图大小≤5M内 | 2010004:单张详情图大小≤5M内 |
| 50002 | 业务处理失败 | isv.business-failed:110280111 | 110280111:每次限购件数不能超过累计限购件数 | 110280111:每次限购件数不能超过累计限购件数 |
| 50002 | 业务处理失败 | isv.business-failed:110250015 | 110250015:白底图比例要求1:1 | 110250015:白底图比例要求1:1 |
| 50002 | 业务处理失败 | isv.business-failed:110215009 | 110215009:类目属性生产许可证编号仅包含特殊字符，请修改并输入有效信息； | 110215009:类目属性生产许可证编号仅包含特殊字符，请修改并输入有效信息； |
| 50002 | 业务处理失败 | isv.business-failed:2010320 | 2010320:品牌必填，请重新选择品牌 | 2010320:品牌必填，请重新选择品牌 |
| 50002 | 业务处理失败 | isv.business-failed:110220016 | 110220016:规格颜色分类对应的规格值-仅包含特殊字符，请修改并输入有效信息； | 110220016:规格颜色分类对应的规格值-仅包含特殊字符，请修改并输入有效信息； |
| 50002 | 业务处理失败 | isv.business-failed:110220188 | 110220188:规格:规格填写不符合要求,1g*部分必填模块信息缺失,请至抖店商品编辑页面刷新页面重试 | 110220188:规格:规格填写不符合要求,1g*部分必填模块信息缺失,请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110270179 | 110270179:校验预售发货信息失败阶梯发货时间配置不满足要求 | 110270179:校验预售发货信息失败阶梯发货时间配置不满足要求 |
| 50002 | 业务处理失败 | isv.business-failed:110250122 | 110250122:请上传1~5张商品主图 | 110250122:请上传1~5张商品主图 |
| 50002 | 业务处理失败 | isv.business-failed:110215103 | 110215103:结构及组成属性填写不符合规范:标品管控要求：本品由二氧化硅、藻酸盐、聚乙烯醇、甘油、山梨醇、丙二醇、纤维素、氯化钠、糖精钠、色素、纯化水组成。在两种相同或不同的材料之间或材料与模具之间形成隔离膜，使材料与材料或材料与模具不发生粘连。,实际填写：本品由二氧化硅藻酸盐聚乙烯醇甘油山梨醇丙二醇纤维素氯化钠糖精钠色素纯化水组成在两种相同或不同的材料之间或材料与模具之间形成隔离膜使材料与材料或材料与模具不发生粘连 | 110215103:结构及组成属性填写不符合规范:标品管控要求：本品由二氧化硅、藻酸盐、聚乙烯醇、甘油、山梨醇、丙二醇、纤维素、氯化钠、糖精钠、色素、纯化水组成。在两种相同或不同的材料之间或材料与模具之间形成隔离膜，使材料与材料或材料与模具不发生粘连。,实际填写：本品由二氧化硅藻酸盐聚乙烯醇甘油山梨醇丙二醇纤维素氯化钠糖精钠色素纯化水组成在两种相同或不同的材料之间或材料与模具之间形成隔离膜使材料与材料或材料与模具不发生粘连 |
| 50002 | 业务处理失败 | isv.business-failed:110250110 | 110250110:表格内的尺码和选中尺码列表不匹配 | 110250110:表格内的尺码和选中尺码列表不匹配 |
| 50002 | 业务处理失败 | isv.business-failed:110220114 | 110220114:单张规格图大小≤5M内 | 110220114:单张规格图大小≤5M内 |
| 50002 | 业务处理失败 | isv.business-failed:110220151 | 110220151:属性:面料材质填写不符合要求,聚酯纤维11100%中11100数值须不高于:100, 请至抖店商品编辑页面刷新页面重试 | 110220151:属性:面料材质填写不符合要求,聚酯纤维11100%中11100数值须不高于:100, 请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110270166 | 110270166:请填写重量 | 110270166:请填写重量 |
| 50002 | 业务处理失败 | isv.business-failed:110220164 | 110220164:属性:面料材质填写不符合要求, 聚酯纤维99%必须与measure_info匹配, 请至抖店商品编辑页面刷新页面重试 | 110220164:属性:面料材质填写不符合要求, 聚酯纤维99%必须与measure_info匹配, 请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220155 | 110220155:规格值:[高端米白色【今年流行早秋/费尔岛初秋/高级感超好看/软糯慵懒风/美拉德/韩系氛围感穿搭爆款/复古独特别致/小众设计感内搭打底/秋冬】]超过64个字符,请修改后重试 | 110220155:规格值:[高端米白色【今年流行早秋/费尔岛初秋/高级感超好看/软糯慵懒风/美拉德/韩系氛围感穿搭爆款/复古独特别致/小众设计感内搭打底/秋冬】]超过64个字符,请修改后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010326 | 2010326:因为店铺受到处罚，限制发品，更多请到商家后台奖惩中心查看 | 2010326:因为店铺受到处罚，限制发品，更多请到商家后台奖惩中心查看 |
| 50002 | 业务处理失败 | isv.business-failed:110215012 | 110215012:类目属性「颜色分类」长度过长，请修改后重试； | 110215012:类目属性「颜色分类」长度过长，请修改后重试； |
| 50002 | 业务处理失败 | isv.business-failed:2010005 | 2010005:<span>该商品的类目【自行车/骑行装备/零配件/骑行服饰/骑行装备/防风/尘保暖面罩】无资质授权,请前往<a href='/ffa/grs/qualification/list' target='_blank'>【店铺-店铺信息设置-店铺资质-行业资质】</a>中申请授权</span> | 2010005:<span>该商品的类目【自行车/骑行装备/零配件/骑行服饰/骑行装备/防风/尘保暖面罩】无资质授权,请前往<a href='/ffa/grs/qualification/list' target='_blank'>【店铺-店铺信息设置-店铺资质-行业资质】</a>中申请授权</span> |
| 50002 | 业务处理失败 | isv.business-failed:110220143 | 110220143:属性:面料材质填写不符合要求,面料材质样式已调整,请至抖店商品编辑页面刷新页面重试 | 110220143:属性:面料材质填写不符合要求,面料材质样式已调整,请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220119 | 110220119:规格值不能超过200个 | 110220119:规格值不能超过200个 |
| 50002 | 业务处理失败 | isv.business-failed:110405001 | 110405001:商品标题/商品图片中描述旗舰店与店铺实际类型不一致，请修改，规则详见<a href="https://school.jinritemai.com/doudian/web/article/101936?rank=2&fromPage=search_result&searchInfo=5956133973977486125%3A0%3A0%3A2595538224%3A20240905193840E9D508ABBA45B606A1B8&query=%E8%99%9A%E5%81%87%E | 110405001:商品标题/商品图片中描述旗舰店与店铺实际类型不一致，请修改，规则详见<a href="https://school.jinritemai.com/doudian/web/article/101936?rank=2&fromPage=search_result&searchInfo=5956133973977486125%3A0%3A0%3A2595538224%3A20240905193840E9D508ABBA45B606A1B8&query=%E8%99%9A%E5%81%87%E |
| 50002 | 业务处理失败 | isv.business-failed:110250118 | 110250118:尺码模板不支持当前类目 | 110250118:尺码模板不支持当前类目 |
| 50002 | 业务处理失败 | isv.business-failed:110220019 | 110220019:规格「规格」对应的规格值存在非法字符，请修改后重试； | 110220019:规格「规格」对应的规格值存在非法字符，请修改后重试； |
| 50002 | 业务处理失败 | isv.business-failed:110101108 | 110101108:该类目必须为虚拟商品 | 110101108:该类目必须为虚拟商品 |
| 50002 | 业务处理失败 | isv.business-failed:110270180 | 110270180:校验预售发货信息失败暂不支持该发货模式 | 110270180:校验预售发货信息失败暂不支持该发货模式 |
| 50002 | 业务处理失败 | isv.business-failed:110200118 | 110200118:发布当前刀具类商品，需要签署《刀具合规经营承诺函》，前往https://fxg.jinritemai.com/ffa/w/contract/manage完成承诺书阅读并签署后方可发布商品。 | 110200118:发布当前刀具类商品，需要签署《刀具合规经营承诺函》，前往https://fxg.jinritemai.com/ffa/w/contract/manage完成承诺书阅读并签署后方可发布商品。 |
| 50002 | 业务处理失败 | isv.business-failed:110220166 | 110220166:属性填写不符合要求,面料材质属性值含量必须全填写或全不填写，且材质不能重复, 请至抖店商品编辑页面刷新页面重试 | 110220166:属性填写不符合要求,面料材质属性值含量必须全填写或全不填写，且材质不能重复, 请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110250128 | 110250128:主图3：4比例要求3:4 | 110250128:主图3：4比例要求3:4 |
| 50002 | 业务处理失败 | isv.business-failed:110215121 | 110215121:功能最多选择5项 | 110215121:功能最多选择5项 |
| 50002 | 业务处理失败 | isv.business-failed:110220149 | 110220149:规格:规格填写不符合要求,g必须填写小数, 请至抖店商品编辑页面刷新页面重试 | 110220149:规格:规格填写不符合要求,g必须填写小数, 请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220144 | 110220144:规格:枚数填写不符合要求,25枚1包部分模块信息不存在,请至抖店商品编辑页面刷新页面重试 | 110220144:规格:枚数填写不符合要求,25枚1包部分模块信息不存在,请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110105004 | 110105004:标题勾选品牌名时，标题前缀必须一起更新 | 110105004:标题勾选品牌名时，标题前缀必须一起更新 |
| 50002 | 业务处理失败 | isv.business-failed:110270110 | 110270110:运费模板不存在 | 110270110:运费模板不存在 |
| 50002 | 业务处理失败 | isv.business-failed:110220101 | 110220101:type现货时效规格不存在 | 110220101:type现货时效规格不存在 |
| 50002 | 业务处理失败 | isv.business-failed:110215124 | 110215124:注册证有效期至属性未填写 | 110215124:注册证有效期至属性未填写 |
| 50002 | 业务处理失败 | isv.business-failed:110215120 | 110215120:面料材质选项重复 | 110215120:面料材质选项重复 |
| 50002 | 业务处理失败 | isv.business-failed:110220150 | 110220150:规格:规格填写不符合要求,12*30.121g*1盒必须填写2位小数数值, 请至抖店商品编辑页面刷新页面重试 | 110220150:规格:规格填写不符合要求,12*30.121g*1盒必须填写2位小数数值, 请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110250103 | 110250103:该类目商品需上传完整尺码表信息，目前缺失规格：身高，请补充！<a href='https://school.jinritemai.com/doudian/web/article/aHUksMr1bwtF' target='_blank'>规则介绍</a> | 110250103:该类目商品需上传完整尺码表信息，目前缺失规格：身高，请补充！<a href='https://school.jinritemai.com/doudian/web/article/aHUksMr1bwtF' target='_blank'>规则介绍</a> |
| 50002 | 业务处理失败 | isv.business-failed:110220148 | 110220148:属性:包数填写不符合要求,包必须填写整数, 请至抖店商品编辑页面刷新页面重试 | 110220148:属性:包数填写不符合要求,包必须填写整数, 请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110250124 | 110250124:第1张商品主图1:1中包含非法链接地址（如外部跳转链接、从外部直接复制过来的图片链接等），请修改 | 110250124:第1张商品主图1:1中包含非法链接地址（如外部跳转链接、从外部直接复制过来的图片链接等），请修改 |
| 50002 | 业务处理失败 | isv.business-failed:110215105 | 110215105:属性值“文字”不在“图案”的最新可选范围，请删除后重新选择 | 110215105:属性值“文字”不在“图案”的最新可选范围，请删除后重新选择 |
| 50002 | 业务处理失败 | isv.business-failed:110101145 | 110101145:“商品标题”不可含有非法字符 | 110101145:“商品标题”不可含有非法字符 |
| 50002 | 业务处理失败 | isv.business-failed:110310119 | 110310119:设置参考价时须提供相关凭证 | 110310119:设置参考价时须提供相关凭证 |
| 50002 | 业务处理失败 | isv.business-failed:110220018 | 110220018:规格「颜色分类」对应的规格值「2111111111休闲」含有连续相同的数字，请修改后重试； | 110220018:规格「颜色分类」对应的规格值「2111111111休闲」含有连续相同的数字，请修改后重试； |
| 50002 | 业务处理失败 | isv.business-failed:110250123 | 110250123:您上传的商品主图存在重复，请核对后重新上传 | 110250123:您上传的商品主图存在重复，请核对后重新上传 |
| 50002 | 业务处理失败 | isv.business-failed:110220156 | 110220156:颜色对应的规格值不能重复，请核对 | 110220156:颜色对应的规格值不能重复，请核对 |
| 50002 | 业务处理失败 | isv.business-failed:110330102 | 110330102:请修改“售后服务“，该类目已不再支持该售后政策 | 110330102:请修改“售后服务“，该类目已不再支持该售后政策 |
| 50002 | 业务处理失败 | isv.business-failed:110220113 | 110220113:sku数量和规格组合数不匹配，请重新选择规格 | 110220113:sku数量和规格组合数不匹配，请重新选择规格 |
| 50002 | 业务处理失败 | isv.business-failed:110101149 | 110101149:请检查品牌前缀字段是否有误，若未勾选品牌前缀，name_prefix字段请置空 | 110101149:请检查品牌前缀字段是否有误，若未勾选品牌前缀，name_prefix字段请置空 |
| 50002 | 业务处理失败 | isv.business-failed:110220017 | 110220017:规格「颜色分类」对应的规格值「TTTTTTTTTTTTTTTT」含有连续相同字母，请修改后重试； | 110220017:规格「颜色分类」对应的规格值「TTTTTTTTTTTTTTTT」含有连续相同字母，请修改后重试； |
| 50002 | 业务处理失败 | isv.business-failed:110101146 | 110101146:“短标题”不可含有emoji表情等特殊符号 | 110101146:“短标题”不可含有emoji表情等特殊符号 |
| 50002 | 业务处理失败 | isv.business-failed:110250126 | 110250126:您上传的商品主图存在重复，请核对后重新上传 | 110250126:您上传的商品主图存在重复，请核对后重新上传 |
| 50002 | 业务处理失败 | isv.business-failed:110220162 | 110220162:至少启用一个SKU，不允许所有SKU都为下架 | 110220162:至少启用一个SKU，不允许所有SKU都为下架 |
| 50002 | 业务处理失败 | isv.business-failed:2010340 | 2010340:当前商品使用的品牌未关联当前类目，请切换品牌或者前往商家资质中心补全品牌资质信息，之后再上架商品。 | 2010340:当前商品使用的品牌未关联当前类目，请切换品牌或者前往商家资质中心补全品牌资质信息，之后再上架商品。 |
| 50002 | 业务处理失败 | isv.business-failed:110270152 | 110270152:校验预售发货信息失败预售结束时间小于当前时间 | 110270152:校验预售发货信息失败预售结束时间小于当前时间 |
| 50002 | 业务处理失败 | isv.business-failed:110310118 | 110310118:售卖价需大于等于20元 | 110310118:售卖价需大于等于20元 |
| 50002 | 业务处理失败 | isv.business-failed:110102146 | 110102146:当前店铺近期发品量过多，1小时内仅限创建20000个商品 | 110102146:当前店铺近期发品量过多，1小时内仅限创建20000个商品 |
| 50002 | 业务处理失败 | isv.business-failed:2010401 | 2010401:请求被限流, 请稍后再试(时间段内请求次数超过限制) | 2010401:请求被限流, 请稍后再试(时间段内请求次数超过限制) |
| 50002 | 业务处理失败 | isv.business-failed:110215137 | 110215137:属性“面料材质“的填写格式已升级，属性值“其他材质%“不符合填写格式要求，请点击属性输入框重新填写 | 110215137:属性“面料材质“的填写格式已升级，属性值“其他材质%“不符合填写格式要求，请点击属性输入框重新填写 |
| 50002 | 业务处理失败 | isv.business-failed:110220145 | 110220145:规格:单果规格填写不符合要求,1g-2g单位名称g或单位id2不合法,请至抖店商品编辑页面刷新页面重试 | 110220145:规格:单果规格填写不符合要求,1g-2g单位名称g或单位id2不合法,请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110101116 | 110101116:前缀不匹配 | 110101116:前缀不匹配 |
| 50002 | 业务处理失败 | isv.business-failed:110220157 | 110220157:规格名称不能重复，请核对 | 110220157:规格名称不能重复，请核对 |
| 50002 | 业务处理失败 | isv.business-failed:110215010 | 110215010:类目属性「尺寸」存在属性值「1mmmmmmmmmmmm」含有连续相同字母，请修改后重试； | 110215010:类目属性「尺寸」存在属性值「1mmmmmmmmmmmm」含有连续相同字母，请修改后重试； |
| 50002 | 业务处理失败 | isv.business-failed:110215013 | 110215013:类目属性「购买规格」存在非法字符，请修改后重试； | 110215013:类目属性「购买规格」存在非法字符，请修改后重试； |
| 50002 | 业务处理失败 | isv.business-failed:110220163 | 110220163:属性:生产日期填写不符合要求,2022.8,2022.8必须填写YYYY-MM-DD日期格式, 请至抖店商品编辑页面刷新页面重试 | 110220163:属性:生产日期填写不符合要求,2022.8,2022.8必须填写YYYY-MM-DD日期格式, 请至抖店商品编辑页面刷新页面重试 |
| 50002 | 业务处理失败 | isv.business-failed:110220154 | 110220154:备注含有emoji等特殊字符,请修改后重试 | 110220154:备注含有emoji等特殊字符,请修改后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010341 | 2010341:阶梯库存模式不合法 | 2010341:阶梯库存模式不合法 |
| 50002 | 业务处理失败 | isv.business-failed:110101131 | 110101131:短标题必须在4~12个字 | 110101131:短标题必须在4~12个字 |
| 50002 | 业务处理失败 | isv.business-failed:110250127 | 110250127:图片长宽比非1:1 | 110250127:图片长宽比非1:1 |
| 50002 | 业务处理失败 | isv.business-failed:110215123 | 110215123:标品管控:类目属性参数必填 | 110215123:标品管控:类目属性参数必填 |
| 50002 | 业务处理失败 | isv.business-failed:110330126 | 110330126:三包服务售后天数不合法 | 110330126:三包服务售后天数不合法 |
| 50002 | 业务处理失败 | isv.business-failed:110215119 | 110215119:属性“玩具类型”中，属性值“塑料玩具”与Id“2108”不匹配，请更正后重试 | 110215119:属性“玩具类型”中，属性值“塑料玩具”与Id“2108”不匹配，请更正后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110215118 | 110215118:属性水效等级的属性值不在属性值选项列表中，属性值的自定义类型diy_type需要=1 | 110215118:属性水效等级的属性值不在属性值选项列表中，属性值的自定义类型diy_type需要=1 |
| 50002 | 业务处理失败 | isv.business-failed:110405002 | 110405002:治理校验失败 | 110405002:治理校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:110270193 | 110270193:该商品当前不支持设置延迟发货 | 110270193:该商品当前不支持设置延迟发货 |
| 50002 | 业务处理失败 | isv.business-failed:110102161 | 110102161:当前一级类目近期发品量过多，超过当天发品上限，建议合理调整店铺商品数量，如有发品需求，可前往抖店工作台继续发品 | 110102161:当前一级类目近期发品量过多，超过当天发品上限，建议合理调整店铺商品数量，如有发品需求，可前往抖店工作台继续发品 |
| 50002 | 业务处理失败 | isv.business-failed:110330125 | 110330125:三包服务类型不合法 | 110330125:三包服务类型不合法 |
| 50002 | 业务处理失败 | isv.business-failed:110220176 | 110220176:规格和sku信息不匹配，请修改后重试 | 110220176:规格和sku信息不匹配，请修改后重试 |
| 50002 | 业务处理失败 | isv.business-failed:110102160 | 110102160:当前店铺近期发品量过多，超过当天发品上限，建议合理调整店铺商品数量，如有发品需求，可前往抖店工作台继续发品 | 110102160:当前店铺近期发品量过多，超过当天发品上限，建议合理调整店铺商品数量，如有发品需求，可前往抖店工作台继续发品 |
| 50002 | 业务处理失败 | isv.business-failed:110250016 | 110250016:不支持动图发品，请更换为JPG、GPEG、PNG格式图片 | 110250016:不支持动图发品，请更换为JPG、GPEG、PNG格式图片 |
| 50002 | 业务处理失败 | isv.business-failed:110102162 | 110102162:单店铺上限50000，您的店铺中已有50013个售卖中商品，<span style='color: #FF3B52;'>超出13个</span>，暂时无法上架新的商品，请先下架部分商品，以释放上架额度。如有疑问请查看 <a href='https://school.jinritemai.com/doudian/web/article/aJKTnzaZtC1h'>管控说明</a> | 110102162:单店铺上限50000，您的店铺中已有50013个售卖中商品，<span style='color: #FF3B52;'>超出13个</span>，暂时无法上架新的商品，请先下架部分商品，以释放上架额度。如有疑问请查看 <a href='https://school.jinritemai.com/doudian/web/article/aJKTnzaZtC1h'>管控说明</a> |
| 50002 | 业务处理失败 | isv.business-failed:110250163 | 110250163:该类目商品暂不支持发布主图视频 | 110250163:该类目商品暂不支持发布主图视频 |
| 50002 | 业务处理失败 | isv.business-failed:110215133 | 110215133:标品品牌[*]与品牌参数[*]不一致 | 110215133:标品品牌[*]与品牌参数[*]不一致 |
| 50002 | 业务处理失败 | isv.business-failed:110104141 | 110104141:当前类目机构质检必须勾选 | 110104141:当前类目机构质检必须勾选 |
| 50002 | 业务处理失败 | isv.business-failed:110220133 | 110220133:时效规格须按照时间排序 | 110220133:时效规格须按照时间排序 |
| 50002 | 业务处理失败 | isv.business-failed:110360101 | 110360101:品牌不存在或者未审核通过，id:225377344 | 110360101:品牌不存在或者未审核通过，id:225377344 |
| 50002 | 业务处理失败 | isv.business-failed:110250113 | 110250113:标题注释不能超过50个字 | 110250113:标题注释不能超过50个字 |
| 50002 | 业务处理失败 | isv.business-failed:110240102 | 110240102:库存数量支持范围：0-10000000 | 110240102:库存数量支持范围：0-10000000 |
| 50002 | 业务处理失败 | isv.business-failed:110102163 | 110102163:您的店铺今日已达到发品上限，请明天0点后再试 | 110102163:您的店铺今日已达到发品上限，请明天0点后再试 |
| 50002 | 业务处理失败 | isv.business-failed:110280114 | 110280114:限购值最大可设置200 | 110280114:限购值最大可设置200 |
| 50002 | 业务处理失败 | isv.business-failed:110103015 | 110103015:外部商品ID重复 | 110103015:外部商品ID重复 |
| 50002 | 业务处理失败 | isv.business-failed:110290102 | 110290102:最多支持上传40张质检报告图片 | 110290102:最多支持上传40张质检报告图片 |
| 50002 | 业务处理失败 | isv.business-failed:110330124 | 110330124:该商品必须配置三包服务承诺 | 110330124:该商品必须配置三包服务承诺 |
| 50002 | 业务处理失败 | isv.business-failed:110101219 | 110101219:“价格”超出系统最小值限制 | 110101219:“价格”超出系统最小值限制 |
| 50002 | 业务处理失败 | isv.business-failed:110220167 | 110220167:SKUCODE超出长度限制128字符 | 110220167:SKUCODE超出长度限制128字符 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
