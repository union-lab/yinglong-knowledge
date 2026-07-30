# /buyin/mHandleTrusteeshipApply

> 中文说明：团长托管商品审核  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2138>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/mHandleTrusteeshipApply |
| 中文名称 | 团长托管商品审核 |
| 文档目录 | 精选联盟API |
| Article ID | 2138 |
| 文档版本 | V2.03 |
| 官方更新时间 | 2022/9/7 15:31:40 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

支持团长托管计划商品审核。需要团长授权

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.mHandleTrusteeshipApply | 调用的API接口名称 | - | - |
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
| 0 | product_ids | product_ids | true | 3 | 7843162348237 | 商品 id 列表，最多20个商品ID | - | - |
| 0 | op_type | op_type | true | 7 | 1 | 操作类型（1：通过，2：拒绝） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | fail_item | fail_item | - | 8 | - | 添加失败的记录（key：商品id，value：失败原因） | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/mHandleTrusteeshipApply?app_key=your_appkey_here&method=buyin.mHandleTrusteeshipApply&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/mHandleTrusteeshipApply?app_key=your_appkey_here&method=buyin.mHandleTrusteeshipApply&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinMHandleTrusteeshipApplyRequest request = new BuyinMHandleTrusteeshipApplyRequest();
BuyinMHandleTrusteeshipApplyParam param = request.getParam();
param.setProductIds(7843162348237);
param.setOpType(1);
BuyinMHandleTrusteeshipApplyResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinMHandleTrusteeshipApplyRequest();
$param = new BuyinMHandleTrusteeshipApplyParam();
$request->setParam($param);
$param->product_ids = 7843162348237;
$param->op_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinMHandleTrusteeshipApplyRequest()
param = request.getParams()
param.product_ids = 7843162348237
param.op_type = 1
response = request.execute(accessToken)

```

### go

```go
request := buyin_mHandleTrusteeshipApply_request.New()
param := request.GetParams()
param.ProductIds = 7843162348237
param.OpType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinMHandleTrusteeshipApplyRequest();
var param = request.BuildParam();
param.ProductIds = 7843162348237;
param.OpType = 1;
var response = request.Execute<BuyinMHandleTrusteeshipApplyResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:8192 | 8192:当前托管商品数已达上限，无法新增托管商品 | 8192:当前托管商品数已达上限，无法新增托管商品 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
