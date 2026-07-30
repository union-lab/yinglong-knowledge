# /shop/reputation

> 中文说明：查询商家评分  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/2658>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/reputation |
| 中文名称 | 查询商家评分 |
| 文档目录 | 店铺API |
| Article ID | 2658 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/10/26 17:41:42 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

支持查询商家评分，包括商家体验分、商品体验分、物流体验分和商家服务分。需店铺授权

## 权限包

- 店铺 / 店铺评分查询（packageType=1）；适用应用类目：微应用-标题优化、创新应用大赛_微应用、客服绩效-微应用、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、商家商品推广、商家后台系统、店铺管理、微应用-主图视频、AIGC视频创作、AIGC视频洞察、直播间AI导购、直播间导购-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.reputation | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

无。

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | shop_id | shop_id | - | 1 | 52143 | 店铺 id | - | R1 |
| 0 | shop_name | shop_name | - | 2 | 测试店铺 | 店铺名称 | - | R1 |
| 0 | shop_score | shop_score | - | 2 | 4.90 | 商家体验分 | - | R1 |
| 0 | product_score | product_score | - | 2 | 4.90 | 商品体验分 | - | R1 |
| 0 | logistics_score | logistics_score | - | 2 | 4.90 | 物流体验分 | - | R1 |
| 0 | service_score | service_score | - | 2 | 4.90 | 商家服务分 | - | R1 |

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
{}
```

### php

```php
{}
```

### python

```python
{}
```

### go

```go
{}
```

### dotNetCore

```dotNetCore
{}
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
| 50002 | 业务处理失败 | isv.business-failed:256 | 256:服务打瞌睡了，请稍后再试 | 256:服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:257 | 257:参数校验失败 | 257:参数校验失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
