# /material/deleteMaterial

> 中文说明：彻底删除素材  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1138>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/deleteMaterial |
| 中文名称 | 彻底删除素材 |
| 文档目录 | 素材中心API |
| Article ID | 1138 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2022/9/6 11:19:21 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1800 |

## 使用说明

彻底删除的素材不占用用户空间，不可恢复

## 权限包

- 商品 / 素材中心编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、创新应用大赛_微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 创新应用 / 素材(创新应用)（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.deleteMaterial | 调用的API接口名称 | - | - |
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
| 0 | material_ids | MaterialIdList | true | 3 | ["123"] | 要删除的素材id列表，最大不得超过100个，只支持删除同一级目录下的素材 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success_ids | SuccessIdList | - | 3 | ["123"] | 操作成功的素材id | - | R1 |
| 0 | failed_map | FailedMap | - | 8 | - | 操作失败的素材id和原因 | - | R1 |
| 1 | failed_map.code | ErrCode | - | 7 | 20001 | 失败code | - | R1 |
| 1 | failed_map.msg | ErrMsg | - | 2 | 素材id不存在 | 失败原因 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/deleteMaterial?app_key=your_appkey_here&method=material.deleteMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/deleteMaterial?app_key=your_appkey_here&method=material.deleteMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialDeleteMaterialRequest request = new MaterialDeleteMaterialRequest();
MaterialDeleteMaterialParam param = request.getParam();
param.setMaterialIds(["123"]);
MaterialDeleteMaterialResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialDeleteMaterialRequest();
$param = new MaterialDeleteMaterialParam();
$request->setParam($param);
$param->material_ids = ["123"];
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialDeleteMaterialRequest()
param = request.getParams()
param.material_ids = ["123"]
response = request.execute(accessToken)

```

### go

```go
request := material_deleteMaterial_request.New()
param := request.GetParams()
param.MaterialIds = ["123"]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialDeleteMaterialRequest();
var param = request.BuildParam();
param.MaterialIds = ["123"];
var response = request.Execute<MaterialDeleteMaterialResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:10004 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 素材ID无效或状态错误 | 素材不存在，原因有：已被删除或主从延迟导致素材不存在 |
| 40004 | 非法的参数 | isv.parameter-invalid:22004 | 数据可能已被修改，请刷新后重新提交 | 有并发请求，修改参数重新请求 |
| 40004 | 非法的参数 | isv.parameter-invalid:31001 | 请求已生效，请勿重复请求 | 并发请求，不要重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
