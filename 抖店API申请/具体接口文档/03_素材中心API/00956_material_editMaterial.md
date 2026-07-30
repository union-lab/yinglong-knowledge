# /material/editMaterial

> 中文说明：编辑素材  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/956>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/editMaterial |
| 中文名称 | 编辑素材 |
| 文档目录 | 素材中心API |
| Article ID | 956 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/9/6 11:52:58 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 460 |

## 使用说明

支持编辑素材名称，移动素材到新的文件夹下

## 权限包

- 商品 / 素材中心编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、创新应用大赛_微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.editMaterial | 调用的API接口名称 | - | - |
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
| 0 | material_id | MaterialId | true | 2 | "7000291764753940780" | 素材id | - | - |
| 0 | material_name | MaterialName | false | 2 | 编辑功能.jpg | 素材名称，不得超过50个字符 | - | - |
| 0 | to_folder_id | ToFolderId | false | 2 | "6999833978756661548" | 目标文件夹id，"0"--素材中心 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/editMaterial?app_key=your_appkey_here&method=material.editMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/editMaterial?app_key=your_appkey_here&method=material.editMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialEditMaterialRequest request = new MaterialEditMaterialRequest();
MaterialEditMaterialParam param = request.getParam();
param.setMaterialId("\"7000291764753940780\"");
param.setMaterialName("编辑功能.jpg");
param.setToFolderId("\"6999833978756661548\"");
MaterialEditMaterialResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialEditMaterialRequest();
$param = new MaterialEditMaterialParam();
$request->setParam($param);
$param->material_id = "\"7000291764753940780\"";
$param->material_name = "编辑功能.jpg";
$param->to_folder_id = "\"6999833978756661548\"";
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialEditMaterialRequest()
param = request.getParams()
param.material_id = "\"7000291764753940780\""
param.material_name = "编辑功能.jpg"
param.to_folder_id = "\"6999833978756661548\""
response = request.execute(accessToken)

```

### go

```go
request := material_editMaterial_request.New()
param := request.GetParams()
param.MaterialId = "\"7000291764753940780\""
param.MaterialName = "编辑功能.jpg"
param.ToFolderId = "\"6999833978756661548\""
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialEditMaterialRequest();
var param = request.BuildParam();
param.MaterialId = "\"7000291764753940780\"";
param.MaterialName = "编辑功能.jpg";
param.ToFolderId = "\"6999833978756661548\"";
var response = request.Execute<MaterialEditMaterialResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:20001 | 素材不存在或已被删除 | 素材不存在或已被彻底删除 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
