# /material/get_cap_info

> 中文说明：获取商家容量详情  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1694>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/get_cap_info |
| 中文名称 | 获取商家容量详情 |
| 文档目录 | 素材中心API |
| Article ID | 1694 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2022/11/17 11:18:18 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 800 |

## 使用说明

1. 返回的容量单位都是KB，如果想转成G，请除以 1024*1024；
2. 目前权益类型（equity_type）有：Free-免费容量，B-B类商家独有权益，JBP-JBP类商家独有权益 这三类，后续会慢慢增加。

## 权限包

- 商品 / 素材中心查询（packageType=1）；适用应用类目：微应用-标题优化、创新应用大赛_微应用、任务玩法、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.get_cap_info | 调用的API接口名称 | - | - |
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
| 0 | total_capacity | LimitCap | - | 1 | 188743680 | 总容量，单位KB | - | R1 |
| 0 | total_capacity_used | UsedCap | - | 1 | 681717 | 已使用容量，单位KB | - | R1 |
| 0 | photo_capacity | PhotoLimitCap | - | 1 | 83886080 | 图片总容量，单位KB | - | R1 |
| 0 | photo_capacity_used | PhotoUsedCap | - | 1 | 74280 | 图片已使用容量，单位KB | - | R1 |
| 0 | video_capacity | VideoLimitCap | - | 1 | 104857600 | 视频总容量，单位KB | - | R1 |
| 0 | video_capacity_used | VideoUsedCap | - | 1 | 607437 | 视频已使用容量，单位KB | - | R1 |
| 0 | equity_info | EquityInfo | - | 3 | - | 当前生效的权益列表 | - | R1 |
| 1 | equity_info.equity_type | EquityType | - | 2 | B | 权益类型 | - | R1 |
| 1 | equity_info.equity_type_desc | EquityTypeDesc | - | 2 | B类商家权益 | 权益描述 | - | R1 |
| 1 | equity_info.begin_time | BeginTime | - | 1 | 1641034518 | 权益开始时间 | - | R1 |
| 1 | equity_info.end_time | EndTime | - | 1 | 1672570518 | 权益结束时间 | - | R1 |
| 1 | equity_info.total_capacity | LimitCap | - | 1 | 41943040 | 该权益对应的总容量，单位KB | - | R1 |
| 1 | equity_info.photo_capacity | PhotoLimitCap | - | 1 | 20971520 | 该权益对应的图片总容量，单位KB | - | R1 |
| 1 | equity_info.video_capacity | VideoLimitCap | - | 1 | 20971520 | 该权益对应的视频总容量，单位KB | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/get_cap_info?app_key=your_appkey_here&method=material.get_cap_info&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/get_cap_info?app_key=your_appkey_here&method=material.get_cap_info&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
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
| 40002 | 缺少必选参数 | isv.missing-parameter:20001 | 店铺ID错误，请输入正确的店铺ID | 补充ShopId |
| 20000 | 系统错误 | isp.service-error:10004 | 系统异常，请稍后重试 | 稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:30004 | 素材中心已失效，请联系客服处理 | 联系客服 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
