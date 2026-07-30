# /material/uploadVideoAsyncForIsv

> 中文说明：isv单个视频上传  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/3241>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/uploadVideoAsyncForIsv |
| 中文名称 | isv单个视频上传 |
| 文档目录 | 素材中心API |
| Article ID | 3241 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/3/16 11:42:07 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 560 |

## 使用说明

1. 视频大小限200M; 2. 接口同步接受上传视频的请求，异步处理：视频的下载、格式校验、审核等过程； 3. 视频的审核时间根据素材中心素材数量而定，大部分视频在1分钟内能审核完，小部分视频审核时间会达到天级别，请耐心等待；  4. 审核拒绝的视频将在15日内被定期清理，请慎用。 其他问题请参考：https://op.jinritemai.com/docs/guide-docs/171/1719

## 权限包

- 素材中心 / 微应用素材上传（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、创新应用大赛_微应用、客服绩效-微应用、直播话术-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、搭配购-微应用、微应用-商详海报、微应用-主图视频、直播间AI导购、直播间导购-微应用、AI智能客服-微应用、AI售后挽单
- 创新应用 / 素材(创新应用)（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.uploadVideoAsyncForIsv | 调用的API接口名称 | - | - |
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
| 0 | url | URL | - | 2 | http://xxx.xxx | 图片url，必须是公网可访问。url和file_uri二选一，不能同时为空，如果2者都不为空取url | - | - |
| 0 | name | Name | true | 2 | 视频名称.mp4 | 视频名称，开发者自定义，不得超过50个字符。 | - | - |
| 0 | file_uri | BinFileURL | - | 0 | 9e1df78157524c63abf7caa9bb1e88e0 | 二进制文件对应的uri，获取方式请参考：https://op.jinritemai.com/docs/guide-docs/171/1719 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | material_id | MaterialId | - | 2 | 7000254886243811628 | 素材id | - | - |
| 0 | folder_id | FolderId | - | 2 | 0 | 素材所在文件夹id，0-素材中心的根目录；其他值-表示对应的文件夹id； | - | - |
| 0 | is_new | IsNew | - | 4 | true | 是否是新建，true-新建 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/uploadVideoAsyncForIsv?app_key=your_appkey_here&method=material.uploadVideoAsyncForIsv&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/uploadVideoAsyncForIsv?app_key=your_appkey_here&method=material.uploadVideoAsyncForIsv&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialUploadVideoAsyncForIsvRequest request = new MaterialUploadVideoAsyncForIsvRequest();
MaterialUploadVideoAsyncForIsvParam param = request.getParam();
param.setFolderId("0");
param.setUrl("http://xxx.xxx");
param.setName("视频名称.mp4");
param.setFileUri("9e1df78157524c63abf7caa9bb1e88e0");
MaterialUploadVideoAsyncForIsvResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialUploadVideoAsyncForIsvRequest();
$param = new MaterialUploadVideoAsyncForIsvParam();
$request->setParam($param);
$param->folder_id = "0";
$param->url = "http://xxx.xxx";
$param->name = "视频名称.mp4";
$param->file_uri = "9e1df78157524c63abf7caa9bb1e88e0";
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialUploadVideoAsyncForIsvRequest()
param = request.getParams()
param.folder_id = "0"
param.url = "http://xxx.xxx"
param.name = "视频名称.mp4"
param.file_uri = "9e1df78157524c63abf7caa9bb1e88e0"
response = request.execute(accessToken)

```

### go

```go
request := material_uploadVideoAsyncForIsv_request.New()
param := request.GetParams()
param.FolderId = "0"
param.Url = "http://xxx.xxx"
param.Name = "视频名称.mp4"
param.FileUri = "9e1df78157524c63abf7caa9bb1e88e0"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialUploadVideoAsyncForIsvRequest();
var param = request.BuildParam();
param.FolderId = "0";
param.Url = "http://xxx.xxx";
param.Name = "视频名称.mp4";
param.FileUri = "9e1df78157524c63abf7caa9bb1e88e0";
var response = request.Execute<MaterialUploadVideoAsyncForIsvResponse>(accessToken);

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
