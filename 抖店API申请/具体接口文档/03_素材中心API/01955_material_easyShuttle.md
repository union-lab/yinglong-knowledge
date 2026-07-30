# /material/easyShuttle

> 中文说明：一键删除  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1955>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/easyShuttle |
| 中文名称 | 一键删除 |
| 文档目录 | 素材中心API |
| Article ID | 1955 |
| 文档版本 | V1.04 |
| 官方更新时间 | 2022/9/6 11:46:51 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 450 |

## 使用说明

批量删除或移动到回收站该文件夹下的子文件夹和素材，或只操作素材
规则如下：
1. 移动到回收站后，可执行恢复。文件夹下的素材仍占用空间
2. 恢复时默认恢复到移动到回收站前的父文件夹下。若父文件夹也在回收站中或被彻底删除，则恢复到根目录下
3. 彻底删除的素材不占用用户空间，不可恢复

## 权限包

- 商品 / 素材中心编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、创新应用大赛_微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.easyShuttle | 调用的API接口名称 | - | - |
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
| 0 | folder_id_list | FolderIdList | true | 3 | ["0"] | 文件夹ID列表，对该文件夹下的文件夹或素材进行操作；0:开放平台；1:图片根目录；2:视频根目录；-1:回收站 | - | - |
| 0 | operate_type | OperateType | true | 2 | to_recycle | 操作类型：移到回收站：to_recycle，彻底删除：delete_forever | - | - |
| 0 | material_type_list | MaterialTypeList | true | 3 | ["photo","video"] | 操作的素材类型 | - | - |
| 0 | only_material | OnlyMaterial | false | 4 | true | 是否只操作素材 | - | - |
| 0 | create_time_end | CreateTimeEnd | false | 2 | 2022-02-22 22:22:22 | 所操作的素材或文件夹的创建时间在该时间点之前 | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/easyShuttle?app_key=your_appkey_here&method=material.easyShuttle&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/easyShuttle?app_key=your_appkey_here&method=material.easyShuttle&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialEasyShuttleRequest request = new MaterialEasyShuttleRequest();
MaterialEasyShuttleParam param = request.getParam();
param.setFolderIdList(["0"]);
param.setOperateType("to_recycle");
param.setMaterialTypeList(["photo","video"]);
param.setOnlyMaterial(true);
param.setCreateTimeEnd("2022-02-22 22:22:22");
MaterialEasyShuttleResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialEasyShuttleRequest();
$param = new MaterialEasyShuttleParam();
$request->setParam($param);
$param->folder_id_list = ["0"];
$param->operate_type = "to_recycle";
$param->material_type_list = ["photo","video"];
$param->only_material = true;
$param->create_time_end = "2022-02-22 22:22:22";
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialEasyShuttleRequest()
param = request.getParams()
param.folder_id_list = ["0"]
param.operate_type = "to_recycle"
param.material_type_list = ["photo","video"]
param.only_material = true
param.create_time_end = "2022-02-22 22:22:22"
response = request.execute(accessToken)

```

### go

```go
request := material_easyShuttle_request.New()
param := request.GetParams()
param.FolderIdList = ["0"]
param.OperateType = "to_recycle"
param.MaterialTypeList = ["photo","video"]
param.OnlyMaterial = true
param.CreateTimeEnd = "2022-02-22 22:22:22"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialEasyShuttleRequest();
var param = request.BuildParam();
param.FolderIdList = ["0"];
param.OperateType = "to_recycle";
param.MaterialTypeList = ["photo","video"];
param.OnlyMaterial = true;
param.CreateTimeEnd = "2022-02-22 22:22:22";
var response = request.Execute<MaterialEasyShuttleResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 参数错误 | 修改参数 |
| 20000 | 系统错误 | isp.service-error:10007 | 系统内部错误 | 重试 |
| 20000 | 系统错误 | isp.service-error:10004 | 系统内部错误 | 重试 |
| 20000 | 系统错误 | isp.service-error:10003 | 系统内部错误 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:22004 | 22004:数据可能已被修改，请刷新后重新提交 | 22004:数据可能已被修改，请刷新后重新提交 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
