# /material/recoverMaterial

> 中文说明：从回收站中恢复素材  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/954>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/recoverMaterial |
| 中文名称 | 从回收站中恢复素材 |
| 文档目录 | 素材中心API |
| Article ID | 954 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2022/9/6 11:40:42 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 420 |

## 使用说明

（1）一次不得恢复超过20个素材；（2）如果原父目录不存在，会恢复到素材中心

## 权限包

- 商品 / 素材中心编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、创新应用大赛_微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.recoverMaterial | 调用的API接口名称 | - | - |
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
| 0 | material_ids | MaterialIdList | true | 3 | ["7000291764753940780"] | 素材id列表 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success_ids | SuccessIdList | - | 3 | [7000291764753940780] | 成功操作的素材id列表 | - | R1 |
| 0 | failed_map | FailedMap | - | 8 | - | 失败素材列表及失败原因 | - | R1 |
| 1 | failed_map.code | ErrCode | - | 7 | 20001 | 错误码 | - | R1 |
| 1 | failed_map.msg | ErrMsg | - | 2 | 参数错误 | 错误码描述 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/recoverMaterial?app_key=your_appkey_here&method=material.recoverMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/recoverMaterial?app_key=your_appkey_here&method=material.recoverMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialRecoverMaterialRequest request = new MaterialRecoverMaterialRequest();
MaterialRecoverMaterialParam param = request.getParam();
param.setMaterialIds(["7000291764753940780"]);
MaterialRecoverMaterialResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialRecoverMaterialRequest();
$param = new MaterialRecoverMaterialParam();
$request->setParam($param);
$param->material_ids = ["7000291764753940780"];
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialRecoverMaterialRequest()
param = request.getParams()
param.material_ids = ["7000291764753940780"]
response = request.execute(accessToken)

```

### go

```go
request := material_recoverMaterial_request.New()
param := request.GetParams()
param.MaterialIds = ["7000291764753940780"]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialRecoverMaterialRequest();
var param = request.BuildParam();
param.MaterialIds = ["7000291764753940780"];
var response = request.Execute<MaterialRecoverMaterialResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:20001 | 20001:素材ID无效，请输入正确的素材ID | 20001:素材ID无效，请输入正确的素材ID |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
