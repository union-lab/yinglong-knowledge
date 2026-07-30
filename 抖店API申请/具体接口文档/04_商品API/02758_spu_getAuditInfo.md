# /spu/getAuditInfo

> 中文说明：查询SPU审核记录  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2758>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /spu/getAuditInfo |
| 中文名称 | 查询SPU审核记录 |
| 文档目录 | 商品API |
| Article ID | 2758 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2022/11/18 17:41:46 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

使用场景： 1、使用【/spu/createSpu】创建spuid创建成功后，可以使用spu_id查询审核状态；建议场景成功后间隔1小时后再查询审核结果；

## 权限包

- 商品 / 商品类目属性查询（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、卡券商工具、撮合服务商、客服绩效-微应用、直播话术-微应用、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播工具、直播间AI导购、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | spu.getAuditInfo | 调用的API接口名称 | - | - |
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
| 0 | spu_id | spu_id | true | 1 | 7166887849936109828 | SPU编号；使用【/spu/createSpu】创建spuid创建成功后，可以使用spu_id查询审核状态；建议场景成功后间隔1小时后再查询审核结果； | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | spu_id | spu_id | - | 1 | 7166887849936109828 | SPU编号 | - | R1 |
| 0 | spu_status | spu_status | - | 1 | 4 | SPU状态，1:已上线，2:已下线，3:审核中，4:审核不通过 | - | R1 |
| 0 | reject_reason | reject_reason | - | 2 | 您好，请严格按照版权页中的书名进行SPU提报。参考提报书名为：我是猫 | 审核驳回原因 | - | R1 |
| 0 | create_time | create_time | - | 2 | 2022-11-17 18:30:08 | 审核记录创建时间 | - | R1 |
| 0 | update_time | update_time | - | 2 | 2022-11-17 18:38:04 | 审核记录更新时间 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/order/logisticsAddSinglePack?app_key=your_appkey_here&method=order.logisticsAddSinglePack&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/order/logisticsAddSinglePack?app_key=your_appkey_here&method=order.logisticsAddSinglePack&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SpuGetAuditInfoRequest request = new SpuGetAuditInfoRequest();
SpuGetAuditInfoParam param = request.getParam();
param.setSpuId(7166887849936109828L);
SpuGetAuditInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new SpuGetAuditInfoRequest();
$param = new SpuGetAuditInfoParam();
$request->setParam($param);
$param->spu_id = 7166887849936109828;
$response = $request->execute(accessToken);

```

### python

```python
request = SpuGetAuditInfoRequest()
param = request.getParams()
param.spu_id = 7166887849936109828
response = request.execute(accessToken)

```

### go

```go
request := spu_getAuditInfo_request.New()
param := request.GetParams()
param.SpuId = 7166887849936109828
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SpuGetAuditInfoRequest();
var param = request.BuildParam();
param.SpuId = 7166887849936109828;
var response = request.Execute<SpuGetAuditInfoResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2012004 | 2012004:spu_id必须大于0 | 请检查spu_id是否正确 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
