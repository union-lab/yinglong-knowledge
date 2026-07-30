# /shop/getShopCategory

> 中文说明：获取商品类目  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/1820>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/getShopCategory |
| 中文名称 | 获取商品类目 |
| 文档目录 | 店铺API |
| Article ID | 1820 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2026/1/21 16:40:51 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1500 |

## 使用说明

请一定使用最小层级类目id，发布商品或更新商品。
接口使用注意点：
1、第一次请求cid=0获取所有一级类目
2、先判断enable=true，如果enable=false表示该类目已经失效，请勿使用。
3、循环获取最小层级类目id方式：再判断is_leaf=true或false。is_leaf=true表示是叶子节点，最小层级类目id。is_leaf=false表示不是子节点，请求参数cid=上一次响应参数id，直到获取最小层级类目id。

## 权限包

- 商品 / 商品类目属性查询（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、卡券商工具、撮合服务商、客服绩效-微应用、直播话术-微应用、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播工具、直播间AI导购、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 三方客服 / 客服机器人（packageType=1）；适用应用类目：客服机器人、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.getShopCategory | 调用的API接口名称 | - | - |
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
| 0 | cid | parentCid | true | 1 | 0 | 父类目id，根据父id可以获取子类目。首次请求传值为0 可以获取所有一级类目。循环调用接口获取最小层级类目id，根据响应参数判断is_leaf=true或false。is_leaf=true表示是叶子节点，获取最小层级类目id，is_leaf=false表示不是子节点，请求参数cid=上一次响应参数id，直到获取最小层级类目id。 | - | - |
| 0 | channel | channel | false | 7 | 0 | 类目渠道，0：门捷列夫类目，1：标准类目； | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | categoryList | - | 3 | - | 返回参数列表 | - | R1 |
| 1 | data.id | id | - | 1 | 20005 | 类目id，用于商品发布和更新，对应请求参数category_leaf_id字段 | - | R1 |
| 1 | data.name | name | - | 2 | 女装 | 类目名称 | - | R1 |
| 1 | data.level | level | - | 1 | 1 | 类目级别：1，2，3级类目 | - | R1 |
| 1 | data.parent_id | parentId | - | 1 | 20215 | 类目父级父类目id | - | R1 |
| 1 | data.is_leaf | isLeaf | - | 4 | true | 是否是叶子节点；is_leaf=true表示是叶子节点，最小层级类目id。is_leaf=false表示不是子节点，请求参数cid=上一次响应参数id，直到获取最小层级类目id | - | R1 |
| 1 | data.enable | enable | - | 4 | true | 类目使用有效；enable=true有效，如果enable=false表示该类目已经失效，请勿使用 | - | R1 |
| 1 | data.channel | channel | - | 7 | 0 | 类目渠道，0：门捷列夫类目，1：标准类目 | - | - |

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
ShopGetShopCategoryRequest request = new ShopGetShopCategoryRequest();
ShopGetShopCategoryParam param = request.getParam();
param.setCid(0L);
param.setChannel(0);
ShopGetShopCategoryResponse response = request.execute(accessToken);

```

### php

```php
$request = new ShopGetShopCategoryRequest();
$param = new ShopGetShopCategoryParam();
$request->setParam($param);
$param->cid = 0;
$param->channel = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = ShopGetShopCategoryRequest()
param = request.getParams()
param.cid = 0
param.channel = 0
response = request.execute(accessToken)

```

### go

```go
request := shop_getShopCategory_request.New()
param := request.GetParams()
param.Cid = 0
param.Channel = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ShopGetShopCategoryRequest();
var param = request.BuildParam();
param.Cid = 0;
param.Channel = 0;
var response = request.Execute<ShopGetShopCategoryResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2012004 | 参数错误 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:2012013 | 获取类目信息失败 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:2012001 | 获取商家信息失败，请重试 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
