# /instantShopping/getStoreAutoCallRider

> 中文说明：查询自动呼叫运力配置  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/7189>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /instantShopping/getStoreAutoCallRider |
| 中文名称 | 查询自动呼叫运力配置 |
| 文档目录 | 物流发货API |
| Article ID | 7189 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/1/2 17:36:06 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

查询自动呼叫运力配置

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | instantShopping.getStoreAutoCallRider | 调用的API接口名称 | - | - |
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
| 0 | store_id | storeID | true | 99 | 55106601 | 商家的门店编号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | autocall_info | autocallInfo | - | 5 | - | 自动呼叫设置信息 | - | R1 |
| 1 | autocall_info.service_type | serviceType | - | 99 | 1 | 自动呼叫运力策略； 0：接单后立即呼叫  1：接单后延迟呼叫 | - | - |
| 1 | autocall_info.delay_time | delayTime | - | 99 | 5 | 自动呼叫运力策略； 0：接单后立即呼叫  1：接单后延迟呼叫 | - | - |
| 1 | autocall_info.service_status | serviceStatus | - | 99 | 1 | 自动呼叫运力设置状态；1：关闭 2：开启 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/instantShopping/getStoreAutoCallRider?app_key=your_appkey_here&method=instantShopping.getStoreAutoCallRider&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/instantShopping/getStoreAutoCallRider?app_key=your_appkey_here&method=instantShopping.getStoreAutoCallRider&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
InstantShoppingGetStoreAutoCallRiderRequest request = new InstantShoppingGetStoreAutoCallRiderRequest();
InstantShoppingGetStoreAutoCallRiderParam param = request.getParam();
param.setStoreId(55106601L);
InstantShoppingGetStoreAutoCallRiderResponse response = request.execute(accessToken);

```

### php

```php
$request = new InstantShoppingGetStoreAutoCallRiderRequest();
$param = new InstantShoppingGetStoreAutoCallRiderParam();
$request->setParam($param);
$param->store_id = 55106601;
$response = $request->execute(accessToken);

```

### python

```python
request = InstantShoppingGetStoreAutoCallRiderRequest()
param = request.getParams()
param.store_id = 55106601
response = request.execute(accessToken)

```

### go

```go
request := instantShopping_getStoreAutoCallRider_request.New()
param := request.GetParams()
param.StoreId = 55106601
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new InstantShoppingGetStoreAutoCallRiderRequest();
var param = request.BuildParam();
param.StoreId = 55106601;
var response = request.Execute<InstantShoppingGetStoreAutoCallRiderResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:40011 | 店铺ID不能为空 | 店铺ID不能为空 |
| 40002 | 缺少必选参数 | isv.missing-parameter:40012 | 门店ID不能为空 | 门店ID不能为空 |
| 20000 | 系统错误 | isp.service-error:20201 | 系统繁忙，请稍后重试 | 系统繁忙，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:50114 | store_id不存在/错误 | 无需填写 |
| 50002 | 业务处理失败 | isv.business-failed:20112 | 系统错误，请稍后重试 | 无需填写 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
