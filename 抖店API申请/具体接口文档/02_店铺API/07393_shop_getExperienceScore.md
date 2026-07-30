# /shop/getExperienceScore

> 中文说明：查询店铺体验分  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/7393>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /shop/getExperienceScore |
| 中文名称 | 查询店铺体验分 |
| 文档目录 | 店铺API |
| Article ID | 7393 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/4/2 20:50:18 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

查询店铺体验分

## 权限包

- 店铺 / 查询店铺体验分（packageType=1）；适用应用类目：商家后台系统
- 订单 / AI搜（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | shop.getExperienceScore | 调用的API接口名称 | - | - |
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
| 0 | seller_rating_info | seller_rating_info | - | 5 | - | 体验分总分 | - | - |
| 1 | seller_rating_info.score | score | - | 9 | 4416981.0 | 分数 | - | - |
| 1 | seller_rating_info.score_weight | score_weight | - | 9 | 2607639.0 | 权重后分数 | - | - |
| 0 | prod_dsr | prod_dsr | - | 5 | - | 商品综合评价 | - | - |
| 1 | prod_dsr.node_score | node_score | - | 9 | 6130968.0 | 指标分数 | - | - |
| 1 | prod_dsr.score | score | - | 9 | 404277.0 | 指标值 | - | - |
| 1 | prod_dsr.node_score_weight | node_score_weight | - | 9 | 9330871.0 | 加权指标分数 | - | - |
| 0 | lgt_qreturn_rate | lgt_qreturn_rate | - | 5 | - | 发货物流品退率 | - | - |
| 1 | lgt_qreturn_rate.node_score | node_score | - | 9 | 6130968.0 | 指标分数 | - | - |
| 1 | lgt_qreturn_rate.score | score | - | 9 | 404277.0 | 指标值 | - | - |
| 1 | lgt_qreturn_rate.node_score_weight | node_score_weight | - | 9 | 9330871.0 | 加权指标分数 | - | - |
| 0 | quality_return_rate | quality_return_rate | - | 5 | - | 商品品质退货率得分 | - | - |
| 1 | quality_return_rate.node_score | node_score | - | 9 | 9442669.0 | 指标分数 | - | - |
| 1 | quality_return_rate.node_score_weight | node_score_weight | - | 9 | 3674114.0 | 加权指标分数 | - | - |
| 1 | quality_return_rate.score | score | - | 9 | 377566.0 | 指标值 | - | - |
| 0 | collect_ontime_rate | collect_ontime_rate | - | 5 | - | 揽收时效达成率 | - | - |
| 1 | collect_ontime_rate.node_score | node_score | - | 9 | 6544738.0 | 指标分数 | - | - |
| 1 | collect_ontime_rate.score | score | - | 9 | 1555411.0 | 当前维度分数 | - | - |
| 1 | collect_ontime_rate.node_score_weight | node_score_weight | - | 9 | 5014245.0 | 加权分数 | - | - |
| 0 | delivery_accomplish_rate | delivery_accomplish_rate | - | 5 | - | 运单配送时效达成率 | - | - |
| 1 | delivery_accomplish_rate.node_score_weight | node_score_weight | - | 9 | 3417194.0 | 加权分数 | - | - |
| 1 | delivery_accomplish_rate.node_score | node_score | - | 9 | 5005129.0 | 指标分数 | - | - |
| 1 | delivery_accomplish_rate.score | score | - | 9 | 6153298.0 | 指标值 | - | - |
| 0 | average_feedback_time | average_feedback_time | - | 5 | - | 飞鸽平均响应时长 | - | - |
| 1 | average_feedback_time.node_score | node_score | - | 9 | 7806532.0 | 指标分数 | - | - |
| 1 | average_feedback_time.node_score_weight | node_score_weight | - | 9 | 559086.0 | 加权分数 | - | - |
| 1 | average_feedback_time.score | score | - | 9 | 2809658.0 | 指标值 | - | - |
| 0 | aftersale_deal_reach_rate | aftersale_deal_reach_rate | - | 5 | - | 售后处理时长达成率 | - | - |
| 1 | aftersale_deal_reach_rate.node_score | node_score | - | 9 | 8841966.0 | 指标分数 | - | - |
| 1 | aftersale_deal_reach_rate.score | score | - | 9 | 8167889.0 | 指标值 | - | - |
| 1 | aftersale_deal_reach_rate.node_score_weight | node_score_weight | - | 9 | 5766932.0 | 加权分数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/shop/getExperienceScore?app_key=your_appkey_here&method=shop.getExperienceScore&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/shop/getExperienceScore?app_key=your_appkey_here&method=shop.getExperienceScore&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
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
| 20000 | 系统错误 | isp.service-error:300001 | 店铺ID不能为空 | 店铺ID不能为空 |
| 20000 | 系统错误 | isp.service-error:300002 | 查询店铺信息不存在 | 查询店铺信息不存在 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
