# /buyin/bindChannelProduct

> 中文说明：渠道品绑定达人  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4425>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/bindChannelProduct |
| 中文名称 | 渠道品绑定达人 |
| 文档目录 | 商品API |
| Article ID | 4425 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/8/25 16:09:46 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

支持商家通过API给店铺&达人设置子商品

## 权限包

- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.bindChannelProduct | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 1 | 123456789 | 商品ID | - | - |
| 0 | channel_id | channel_id | true | 1 | 123456789 | 渠道ID | - | - |
| 0 | channel_type | channel_type | true | 7 | 1 | 渠道类型：1: 店铺自卖，2：达人带货 | - | - |
| 0 | is_all | is_all | false | 4 | false | 是否指定全部达人/全部店播达人 | - | - |
| 0 | author_ids | author_ids | false | 3 | 123456789 | 需要绑定的达人uid 指定特定达人（is_all参数为false）时，该参数生效 | - | - |
| 0 | buyin_ids | buyin_ids | false | 3 | 123456789 | 需要绑定的达人百应Id 指定特定达人（is_all参数为false）时，该参数生效 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | success | - | 1 | 6 | 成功绑定的数量 | - | - |
| 0 | failed | failed | - | 3 | - | 绑定失败的帐号和原因 | - | R1 |
| 1 | failed.id | id | - | 1 | 123456789 | 绑定失败的达人id，可能是uid或者buyinId，结合id_type字段使用 | - | - |
| 1 | failed.id_type | id_type | - | 1 | 1 | id字段的类型：0: 达人uid 1:buyinID | - | - |
| 1 | failed.reason | reason | - | 2 | 无效uid | 绑定失败的原因 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/bindChannelProduct?app_key=your_appkey_here&method=buyin.bindChannelProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/bindChannelProduct?app_key=your_appkey_here&method=buyin.bindChannelProduct&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinBindChannelProductRequest request = new BuyinBindChannelProductRequest();
BuyinBindChannelProductParam param = request.getParam();
param.setProductId(123456789L);
param.setChannelId(123456789L);
param.setChannelType(1);
param.setIsAll(false);
param.setAuthorIds(123456789);
param.setBuyinIds(123456789);
BuyinBindChannelProductResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinBindChannelProductRequest();
$param = new BuyinBindChannelProductParam();
$request->setParam($param);
$param->product_id = 123456789;
$param->channel_id = 123456789;
$param->channel_type = 1;
$param->is_all = false;
$param->author_ids = 123456789;
$param->buyin_ids = 123456789;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinBindChannelProductRequest()
param = request.getParams()
param.product_id = 123456789
param.channel_id = 123456789
param.channel_type = 1
param.is_all = false
param.author_ids = 123456789
param.buyin_ids = 123456789
response = request.execute(accessToken)

```

### go

```go
request := buyin_bindChannelProduct_request.New()
param := request.GetParams()
param.ProductId = 123456789
param.ChannelId = 123456789
param.ChannelType = 1
param.IsAll = false
param.AuthorIds = 123456789
param.BuyinIds = 123456789
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinBindChannelProductRequest();
var param = request.BuildParam();
param.ProductId = 123456789;
param.ChannelId = 123456789;
param.ChannelType = 1;
param.IsAll = false;
param.AuthorIds = 123456789;
param.BuyinIds = 123456789;
var response = request.Execute<BuyinBindChannelProductResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4133 | 商品没有加入精选联盟 | 商品没有加入精选联盟 |
| 40004 | 非法的参数 | isv.parameter-invalid:4371 | 非法渠道信息 | 非法渠道信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:4173 | 无效百应ID | 无效百应ID |
| 40004 | 非法的参数 | isv.parameter-invalid:1078 | 无效uid | 无效uid |
| 40004 | 非法的参数 | isv.parameter-invalid:4366 | 渠道品为全部达人，则不允许指定达人id | 渠道品为全部达人，则不允许指定达人id |
| 40004 | 非法的参数 | isv.parameter-invalid:4367 | 渠道品设置为专属达人，只能指定一个达人 | 渠道品设置为专属达人，只能指定一个达人 |
| 40004 | 非法的参数 | isv.parameter-invalid:4368 | 渠道品每次最多绑定500个达人 | 渠道品每次最多绑定500个达人 |
| 40004 | 非法的参数 | isv.parameter-invalid:4369 | 非法渠道/未查到该渠道达人信息 | 非法渠道/未查到该渠道达人信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:4370 | 渠道品只能绑定一个全部达人 | 渠道品只能绑定一个全部达人 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
