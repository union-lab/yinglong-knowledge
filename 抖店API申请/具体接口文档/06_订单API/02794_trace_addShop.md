# /trace/addShop

> 中文说明：订单链路监控添加用户  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/2794>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /trace/addShop |
| 中文名称 | 订单链路监控添加用户 |
| 文档目录 | 订单API |
| Article ID | 2794 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/12/13 19:05:00 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

在订单链路监控场景中，添加用户。 用户添加后能自动记录并统计监控状态信息

## 权限包

- 订单 / 订单轨迹回传（packageType=1）；适用应用类目：打单发货-微应用、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | trace.addShop | 调用的API接口名称 | - | - |
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
| 0 | shop_name | shopName | - | 2 | 测试店铺名称 | 店铺名称 | - | R1 |
| 0 | status | status | - | 2 | 正常 | 开通状态。正常，授权失效，已关闭 | - | R1 |
| 0 | create_at | createAt | - | 2 | 2022-11-30 10:52:53 | 开通时间；格式：yyyy-MM-dd HH:mm:ss | - | R1 |
| 0 | update_at | updateAt | - | 2 | 2022-11-30 10:52:53 | 最近更新时间；格式：yyyy-MM-dd HH:mm:ss | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/trace/addShop?app_key=your_appkey_here&method=trace.addShop&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/trace/addShop?app_key=your_appkey_here&method=trace.addShop&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
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
| 40004 | 非法的参数 | isv.parameter-invalid:605010102 | 当前应用与店铺间授权失效 | 请检查店铺授权 |
| 20000 | 系统错误 | isp.service-error:605090001 | 内部服务异常，请稍后重试 | 内部服务异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
