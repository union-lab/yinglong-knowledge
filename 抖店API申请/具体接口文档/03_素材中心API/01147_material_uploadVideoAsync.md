# /material/uploadVideoAsync

> 中文说明：素材中心--异步上传视频接口  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1147>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/uploadVideoAsync |
| 中文名称 | 素材中心--异步上传视频接口 |
| 文档目录 | 素材中心API |
| Article ID | 1147 |
| 文档版本 | V3.02 |
| 官方更新时间 | 2022/10/11 17:34:08 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 600 |

## 使用说明

1. 视频大小限200M;
2. 接口同步接受上传视频的请求，异步处理：视频的下载、格式校验、审核等过程；
3. 视频的审核时间根据素材中心素材数量而定，大部分视频在1分钟内能审核完，小部分视频审核时间会达到天级别，请耐心等待；
4、上传时需要关注文件夹属性，只有0（文件夹）和2（视频文件夹）才可以上传视频。文件夹属性可通过【/material/getFolderInfo】和【/material/searchFolder】查看。
5. 审核拒绝的视频将在15日内被定期清理，请慎用。
其他问题请参考：https://op.jinritemai.com/docs/guide-docs/171/1719

## 权限包

- 商品 / 素材中心文件传输（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、创新应用大赛_微应用、任务玩法、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.uploadVideoAsync | 调用的API接口名称 | - | - |
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
| 0 | folder_id | FolderId | true | 2 | 0 | 父文件夹id，0为根目录。若需要创建文件夹，请参考：https://ehome.bytedance.net/djt/apiManage/doc/preview/946?doc=true | - | - |
| 0 | url | URL | false | 2 | https://xxxx.xxx.xx | 视频url，url和file_uri二选一，不能同时为空，如果2者都传则取url | - | - |
| 0 | name | Name | true | 2 | 视频.mp4 | 视频名称，不得超过50个字符，最好带上后缀 | - | - |
| 0 | file_uri | BinFileURL | false | 0 | tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0 | 二进制文件对应的uri，获取方式请参考：https://op.jinritemai.com/docs/guide-docs/171/1719 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | material_id | MaterialId | - | 2 | 7000254886243811628 | 素材id | - | R1 |
| 0 | folder_id | FolderId | - | 2 | 0 | 素材所在文件夹id，0-素材中心的根目录 | - | R1 |
| 0 | is_new | IsNew | - | 4 | true | 是否是新建，false-重复请求 true-新建 | - | R1 |
| 0 | audit_status | AuditStatus | - | 7 | 1 | 素材审核状态 0-下载中 1-等待审核 2-审核中 3-通过 4-拒绝 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com?app_key=your_appkey_here&method=&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialUploadVideoAsyncRequest request = new MaterialUploadVideoAsyncRequest();
MaterialUploadVideoAsyncParam param = request.getParam();
param.setFolderId("0");
param.setUrl("https://xxxx.xxx.xx");
param.setName("视频.mp4");
param.setFileUri("tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0");
MaterialUploadVideoAsyncResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialUploadVideoAsyncRequest();
$param = new MaterialUploadVideoAsyncParam();
$request->setParam($param);
$param->folder_id = "0";
$param->url = "https://xxxx.xxx.xx";
$param->name = "视频.mp4";
$param->file_uri = "tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0";
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialUploadVideoAsyncRequest()
param = request.getParams()
param.folder_id = "0"
param.url = "https://xxxx.xxx.xx"
param.name = "视频.mp4"
param.file_uri = "tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0"
response = request.execute(accessToken)

```

### go

```go
request := material_uploadVideoAsync_request.New()
param := request.GetParams()
param.FolderId = "0"
param.Url = "https://xxxx.xxx.xx"
param.Name = "视频.mp4"
param.FileUri = "tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialUploadVideoAsyncRequest();
var param = request.BuildParam();
param.FolderId = "0";
param.Url = "https://xxxx.xxx.xx";
param.Name = "视频.mp4";
param.FileUri = "tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0";
var response = request.Execute<MaterialUploadVideoAsyncResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 参数错误 | 请检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:10004 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:22001 | 素材大小超出限制 | 视频大小超出限制，勿重复操作 |
| 40004 | 非法的参数 | isv.parameter-invalid:31001 | 请求已生效，请勿重复请求 | 并发请求导致，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:30001 | 素材库容量不足 | 容量不足，删除部分素材后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10010 | 素材下载失败，请重新上传 | 素材下载失败，请重新上传 |
| 50002 | 业务处理失败 | isv.business-failed:31004 | 31004:店铺超过每秒上传限制 | 31004:店铺超过每秒上传限制 |
| 50002 | 业务处理失败 | isv.business-failed:22006 | 22006:当前文件夹下不支持创建该类素材 | 22006:当前文件夹下不支持创建该类素材 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
