# /material/uploadImageSyncForIsv

> 中文说明：isv单个图片上传  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/2887>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/uploadImageSyncForIsv |
| 中文名称 | isv单个图片上传 |
| 文档目录 | 素材中心API |
| Article ID | 2887 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/1/11 11:02:12 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5600 |

## 使用说明

1、单个图片最大不能超过10M；支持的格式有：png/jpg/webp/gif；
2、接口上传成功，素材中心会对素材进行异步审核，审核时效：非风险图片99%在4s内完成审核，风险图片我们会在24h内审核完成；对于审核失败的素材，素材中心会在一定时间内将其删除。

## 权限包

- 素材中心 / 微应用素材上传（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、创新应用大赛_微应用、客服绩效-微应用、直播话术-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、搭配购-微应用、微应用-商详海报、微应用-主图视频、直播间AI导购、直播间导购-微应用、AI智能客服-微应用、AI售后挽单
- 创新应用 / 素材(创新应用)（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.uploadImageSyncForIsv | 调用的API接口名称 | - | - |
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
| 0 | folder_id | FolderId | true | 2 | 0 | 文件夹id，0为根目录 | - | - |
| 0 | url | URL | false | 2 | http://xxx.xxx | 图片url，必须是公网可访问。url和file_uri二选一，不能同时为空，如果2者都不为空取url | - | - |
| 0 | name | Name | true | 2 | 图片名称.jpg | 图片名称，开发者自定义，不得超过50个字符。 | - | - |
| 0 | file_uri | BinFileURL | false | 0 | 9e1df78157524c63abf7caa9bb1e88e0 | 二进制文件对应的uri，获取方式请参考：https://op.jinritemai.com/docs/guide-docs/171/1719 | - | - |
| 0 | need_distinct | NeedDistinct | true | 4 | true | 是否需要去重（true/false），默认为false。去重是指：存在已经审核通过且内容相同的图片，直接返回已存在的图片地址。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | material_id | MaterialId | - | 2 | 7000254886243811628 | 素材id | - | - |
| 0 | folder_id | FolderId | - | 2 | 0 | 素材所在文件夹id，0-素材中心的根目录；其他值-表示对应的文件夹id； | - | - |
| 0 | is_new | IsNew | - | 4 | true | 是否是新建，true-新建 | - | - |
| 0 | audit_status | AuditStatus | - | 7 | 3 | 素材审核状态; 1-等待审核; 2-审核中; 3-通过; 4-拒绝;注意：只有AuditStatus=3时ByteUrl才会返回； | - | - |
| 0 | byte_url | ByteUrl | - | 2 | "" | 非审核通过的图片，将不返回该字段。 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/uploadImageSyncForIsv?app_key=your_appkey_here&method=material.uploadImageSyncForIsv&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/uploadImageSyncForIsv?app_key=your_appkey_here&method=material.uploadImageSyncForIsv&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialUploadImageSyncForIsvRequest request = new MaterialUploadImageSyncForIsvRequest();
MaterialUploadImageSyncForIsvParam param = request.getParam();
param.setFolderId("0");
param.setUrl("http://xxx.xxx");
param.setName("图片名称.jpg");
param.setFileUri("9e1df78157524c63abf7caa9bb1e88e0");
param.setNeedDistinct(true);
MaterialUploadImageSyncForIsvResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialUploadImageSyncForIsvRequest();
$param = new MaterialUploadImageSyncForIsvParam();
$request->setParam($param);
$param->folder_id = "0";
$param->url = "http://xxx.xxx";
$param->name = "图片名称.jpg";
$param->file_uri = "9e1df78157524c63abf7caa9bb1e88e0";
$param->need_distinct = true;
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialUploadImageSyncForIsvRequest()
param = request.getParams()
param.folder_id = "0"
param.url = "http://xxx.xxx"
param.name = "图片名称.jpg"
param.file_uri = "9e1df78157524c63abf7caa9bb1e88e0"
param.need_distinct = true
response = request.execute(accessToken)

```

### go

```go
request := material_uploadImageSyncForIsv_request.New()
param := request.GetParams()
param.FolderId = "0"
param.Url = "http://xxx.xxx"
param.Name = "图片名称.jpg"
param.FileUri = "9e1df78157524c63abf7caa9bb1e88e0"
param.NeedDistinct = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialUploadImageSyncForIsvRequest();
var param = request.BuildParam();
param.FolderId = "0";
param.Url = "http://xxx.xxx";
param.Name = "图片名称.jpg";
param.FileUri = "9e1df78157524c63abf7caa9bb1e88e0";
param.NeedDistinct = true;
var response = request.Execute<MaterialUploadImageSyncForIsvResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 解析素材格式失败 | 素材的格式不是素材中心支持的 |
| 50002 | 业务处理失败 | isv.business-failed:10003 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:30001 | 素材库容量不足 | 删除无用素材 或 联系客服扩容 |
| 40004 | 非法的参数 | isv.parameter-invalid:310001 | 请求已生效，请勿重复请求 | 并发请求，勿重试 |
| 50002 | 业务处理失败 | isv.business-failed:10004 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:22007 | 素材涉嫌违规，不能上传 | 素材涉嫌违规，不能上传 |
| 40004 | 非法的参数 | isv.parameter-invalid:22001 | 素材大小超出限制 | 素材大小超出限制 |
| 50002 | 业务处理失败 | isv.business-failed:10010 | 素材下载失败，请重新上传 | 素材下载失败，请重新上传 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
