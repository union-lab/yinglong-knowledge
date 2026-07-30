# /buyin/channelBindAuthors

> 中文说明：查询渠道商品绑定的达人列表  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/4423>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/channelBindAuthors |
| 中文名称 | 查询渠道商品绑定的达人列表 |
| 文档目录 | 商品API |
| Article ID | 4423 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/8/25 16:05:39 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

查询渠道商品绑定的达人列表

## 权限包

- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.channelBindAuthors | 调用的API接口名称 | - | - |
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
| 0 | channel_id | channel_id | true | 1 | 123456789 | 渠道id | - | - |
| 0 | channel_type | channel_type | true | 7 | 1 | 渠道绑定类型 1: 店铺自卖，2：达人带货 | - | - |
| 0 | product_id | product_id | true | 1 | 123456789 | 商品id | - | - |
| 0 | page | page | false | 1 | 1 | 分页 从1开始 | - | - |
| 0 | page_size | page_size | false | 1 | 10 | 分页大小 最大值50 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | is_all | is_all | - | 4 | false | 是否绑定了全部达人/全部店播达人 | - | - |
| 0 | total | total | - | 1 | 20 | 绑定的达人数量 | - | - |
| 0 | authors | authors | - | 3 | - | 绑定的达人信息 | - | R1 |
| 1 | authors.author_app | app_id | - | 1 | 1128 | 达人帐号的客户端<br>1128：抖音<br>2329：抖音极速版<br>1112：火山<br>13：头条 | - | - |
| 1 | authors.author_id | author_id | - | 1 | 123456789 | 达人uid | - | - |
| 1 | authors.author_type | author_type | - | 7 | 1 | 0:店铺官方帐号 1:店铺渠道授权帐号 2: 普通达人帐号 | - | - |
| 1 | authors.buyin_id | buyin_id | - | 1 | 123456789 | 达人的百应id | - | - |
| 1 | authors.account_name | account_name | - | 2 | 测试账户 | 账户名称 | - | - |
| 1 | authors.avatar_url | avatar_url | - | 2 | https://www. | 达人头像 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/channelBindAuthors?app_key=your_appkey_here&method=buyin.channelBindAuthors&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/channelBindAuthors?app_key=your_appkey_here&method=buyin.channelBindAuthors&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinChannelBindAuthorsRequest request = new BuyinChannelBindAuthorsRequest();
BuyinChannelBindAuthorsParam param = request.getParam();
param.setChannelId(123456789L);
param.setChannelType(1);
param.setProductId(123456789L);
param.setPage(1L);
param.setPageSize(10L);
BuyinChannelBindAuthorsResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinChannelBindAuthorsRequest();
$param = new BuyinChannelBindAuthorsParam();
$request->setParam($param);
$param->channel_id = 123456789;
$param->channel_type = 1;
$param->product_id = 123456789;
$param->page = 1;
$param->page_size = 10;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinChannelBindAuthorsRequest()
param = request.getParams()
param.channel_id = 123456789
param.channel_type = 1
param.product_id = 123456789
param.page = 1
param.page_size = 10
response = request.execute(accessToken)

```

### go

```go
request := buyin_channelBindAuthors_request.New()
param := request.GetParams()
param.ChannelId = 123456789
param.ChannelType = 1
param.ProductId = 123456789
param.Page = 1
param.PageSize = 10
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinChannelBindAuthorsRequest();
var param = request.BuildParam();
param.ChannelId = 123456789;
param.ChannelType = 1;
param.ProductId = 123456789;
param.Page = 1;
param.PageSize = 10;
var response = request.Execute<BuyinChannelBindAuthorsResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4371 | 非法渠道信息 | 非法渠道信息 |
| 40004 | 非法的参数 | isv.parameter-invalid:4097 | 参数校验失败: 无效分页大小 | 参数校验失败: 无效分页大小 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:4369 | 非法渠道/未查到该渠道达人信息 | 非法渠道/未查到该渠道达人信息 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:1069 | 当前商品推广未开启，请更换商品推广 | 当前商品推广未开启，请更换商品推广 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
