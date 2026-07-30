# /alliance/colonelActivityProductExtension

> 中文说明：专属团长活动商品延时接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1881>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /alliance/colonelActivityProductExtension |
| 中文名称 | 专属团长活动商品延时接口 |
| 文档目录 | 精选联盟API |
| Article ID | 1881 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/11/22 14:02:48 |
| 授权主体 | ["机构","团长"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 300 |

## 使用说明

专属团长活动商品延时接口

## 权限包

- 精选联盟 / 精选联盟机构团长（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 团长活动管理（packageType=1）；适用应用类目：撮合服务商、团长商品推广、团长管理、联盟团长自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | alliance.colonelActivityProductExtension | 调用的API接口名称 | - | - |
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
| 0 | activity_id | activity_id | true | 99 | 111 | 团长活动id | - | - |
| 0 | product_ids | product_ids | true | 3 | [3553361443837581161] | 商品id 用,隔开,少于20个 | - | - |
| 0 | extend_time | extend_time | true | 2 | 2021-09-02 | 延长的时长 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 延迟失败原因列表 | - | R1 |
| 1 | data.product_id | product_id | - | 99 | 3553361443837581161 | 商品ID | - | R1 |
| 1 | data.msg | msg | - | 2 | 商品不支持延长推广 | 失败原因。包括但不限于：“当前申请正在审核中，审核结束后可操作”，“商品不支持延长推广”，“已经取消合作的推广商品无法再申请延长推广”，“该商品已经托管给其他机构，或者正在等待托管的机构进行审核”， “申请延长的截止时间应该大于原推广截止时间”， “当前商品还未开始推广，不支持申请延长推广”， “当前商品已达到最长推广时间，不支持申请延长推广” | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/alliance/colonelActivityProductExtension?app_key=your_appkey_here&method=alliance.colonelActivityProductExtension&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/alliance/colonelActivityProductExtension?app_key=your_appkey_here&method=alliance.colonelActivityProductExtension&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AllianceColonelActivityProductExtensionRequest request = new AllianceColonelActivityProductExtensionRequest();
AllianceColonelActivityProductExtensionParam param = request.getParam();
param.setActivityId(111L);
param.setProductIds([3553361443837581161]);
param.setExtendTime("2021-09-02");
AllianceColonelActivityProductExtensionResponse response = request.execute(accessToken);

```

### php

```php
$request = new AllianceColonelActivityProductExtensionRequest();
$param = new AllianceColonelActivityProductExtensionParam();
$request->setParam($param);
$param->activity_id = 111;
$param->product_ids = [3553361443837581161];
$param->extend_time = "2021-09-02";
$response = $request->execute(accessToken);

```

### python

```python
request = AllianceColonelActivityProductExtensionRequest()
param = request.getParams()
param.activity_id = 111
param.product_ids = [3553361443837581161]
param.extend_time = "2021-09-02"
response = request.execute(accessToken)

```

### go

```go
request := alliance_colonelActivityProductExtension_request.New()
param := request.GetParams()
param.ActivityId = 111
param.ProductIds = [3553361443837581161]
param.ExtendTime = "2021-09-02"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AllianceColonelActivityProductExtensionRequest();
var param = request.BuildParam();
param.ActivityId = 111;
param.ProductIds = [3553361443837581161];
param.ExtendTime = "2021-09-02";
var response = request.Execute<AllianceColonelActivityProductExtensionResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4137 | 推广延长时间小于当前时间或小于设置的推广结束时间 | 请检查延长时间 |
| 50002 | 业务处理失败 | isv.business-failed:4197 | 需【招商团长】角色授权后访问 | 需【招商团长】角色授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:4140 | 活动不是处在报名中，不能审核 | 活动不是处在报名中，不能审核 |
| 50002 | 业务处理失败 | isv.business-failed:4139 | 当前用户不是创建活动的用户 | 当前用户不是创建活动的用户 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 256:服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:4200 | 4200:账号状态异常，请检查账号状态 | 账号状态异常，请检查账号状态 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
