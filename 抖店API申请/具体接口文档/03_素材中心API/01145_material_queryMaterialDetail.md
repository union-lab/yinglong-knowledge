# /material/queryMaterialDetail

> 中文说明：根据素材id查素材详情  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1145>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/queryMaterialDetail |
| 中文名称 | 根据素材id查素材详情 |
| 文档目录 | 素材中心API |
| Article ID | 1145 |
| 文档版本 | V6.01 |
| 官方更新时间 | 2022/12/28 17:30:27 |
| 授权主体 | ["店铺","供应商","小程序"] |
| 收费类型（官方原值） | 2 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 8000 |

## 使用说明

1、 已经被删除的素材，会返回空；
2、只支持查看本店铺的素材
3、2022年11月-素材接口字段变更公告：https://op.jinritemai.com/docs/notice-docs/5/2668 响应参数ByteUrl字段废弃；当audit_status=3时才会返回byte_url；视频请使用vid字段；

## 权限包

- 商品 / 素材中心查询（packageType=1）；适用应用类目：微应用-标题优化、创新应用大赛_微应用、任务玩法、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 创新应用 / 素材(创新应用)（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.queryMaterialDetail | 调用的API接口名称 | - | - |
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
| 0 | material_id | MaterialId | true | 2 | 70031975314170022840250 | 素材id；可使用【/material/batchUploadImageSync】【/material/uploadImageSync】【/material/searchMaterial  】接口获取 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | material_info | MaterialInfo | - | 5 | - | 素材详情 | - | R1 |
| 1 | material_info.material_id | MaterialId | - | 2 | 70072571115707435960250 | 素材id；可使用【/material/batchUploadImageSync】【/material/uploadImageSync】【/material/searchMaterial  】接口获取 | - | R1 |
| 1 | material_info.folder_id | FolderId | - | 2 | 70072571115706780601250 | 文件夹id | - | R1 |
| 1 | material_info.origin_url | OriginUrl | - | 2 | "" | 开发者上传时传入的公网可访问地址 | - | R1 |
| 1 | material_info.byte_url | ByteUrl | - | 2 | "" | 图片url；当audit_status=3时获取byte_url；有值返回； | - | R1 |
| 1 | material_info.materil_name | Name | - | 2 | 名称 | 素材名称 | - | R1 |
| 1 | material_info.material_type | MaterialType | - | 2 | video | 素材类型，photo-图片；video-视频； | - | R1 |
| 1 | material_info.operate_status | OperateStatus | - | 7 | 0 | 素材状态，0-待下载；1-有效； 4-在回收站中； | - | R1 |
| 1 | material_info.audit_status | AuditStatus | - | 7 | 5 | 审核状态，1-待审核 2-审核中 3-通过 4-拒绝；注意：只有AuditStatus=3时ByteUrl才会返回； | - | R1 |
| 1 | material_info.audit_reject_desc | AuditStatusDesc | - | 2 | 文件大小超出限制 | 审核失败的原因 | - | R1 |
| 1 | material_info.size | Size | - | 1 | 1234 | 大小，单位为byte | - | R1 |
| 1 | material_info.photo_info | PhotoInfo | - | 5 | - | 图片信息 | - | R1 |
| 2 | material_info.photo_info.height | Height | - | 7 | 255 | 图片高度 | - | R1 |
| 2 | material_info.photo_info.width | Width | - | 7 | 255 | 图片宽度 | - | R1 |
| 2 | material_info.photo_info.format | Format | - | 2 | jpg | 图片格式 | - | R1 |
| 1 | material_info.video_info | VideoInfo | - | 5 | - | 视频信息 | - | R1 |
| 2 | material_info.video_info.format | Format | - | 2 | mp3 | 视频格式 | - | R1 |
| 2 | material_info.video_info.duration | Duration | - | 9 | 12 | 视频时长，单位秒 | - | R1 |
| 2 | material_info.video_info.vid | Vid | - | 2 | 12345678 | vid，用于获取视频播放地址，接口文档见：https://op.jinritemai.com/docs/api-docs/69/2164 | - | R1 |
| 2 | material_info.video_info.height | Height | - | 7 | 32 | 视频高度 | - | R1 |
| 2 | material_info.video_info.width | Width | - | 7 | 23 | 视频宽度 | - | R1 |
| 2 | material_info.video_info.video_cover_url | VideoCoverUrl | - | 2 | www.xxxxxxx.com | 视频封面地址 | - | R1 |
| 1 | material_info.create_time | CreateTime | - | 2 | 2021-09-12 12:23:23 | 素材创建时间 | - | R1 |
| 1 | material_info.update_time | UpdateTime | - | 2 | 2021-09-12 12:23:23 | 素材最近一次修改时间 | - | R1 |
| 1 | material_info.delete_time | DeleteTime | - | 2 | 0 | 素材移动到回收站的时间，只有在回收站中，该字段才有意义 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/queryMaterialDetail?app_key=your_appkey_here&method=material.queryMaterialDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/queryMaterialDetail?app_key=your_appkey_here&method=material.queryMaterialDetail&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialQueryMaterialDetailRequest request = new MaterialQueryMaterialDetailRequest();
MaterialQueryMaterialDetailParam param = request.getParam();
param.setMaterialId("70031975314170022840250");
MaterialQueryMaterialDetailResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialQueryMaterialDetailRequest();
$param = new MaterialQueryMaterialDetailParam();
$request->setParam($param);
$param->material_id = "70031975314170022840250";
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialQueryMaterialDetailRequest()
param = request.getParams()
param.material_id = "70031975314170022840250"
response = request.execute(accessToken)

```

### go

```go
request := material_queryMaterialDetail_request.New()
param := request.GetParams()
param.MaterialId = "70031975314170022840250"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialQueryMaterialDetailRequest();
var param = request.BuildParam();
param.MaterialId = "70031975314170022840250";
var response = request.Execute<MaterialQueryMaterialDetailResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:22002 | 素材不存在或已被删除 | 素材不存在或已被删除 |
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 参数错误 | 参数错误 |
| 50002 | 业务处理失败 | isv.business-failed:10004 | 系统异常，请稍后重试 | 稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
