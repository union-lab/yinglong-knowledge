# /microapp/UpdateStaticFileMeta

> 中文说明：ISV上传静态资源后绑定相对路径  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/2884>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /microapp/UpdateStaticFileMeta |
| 中文名称 | ISV上传静态资源后绑定相对路径 |
| 文档目录 | 素材中心API |
| Article ID | 2884 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/12/25 10:22:34 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

ISV上传静态资源后绑定相对路径

## 权限包

- 素材中心 / 微应用素材上传（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、创新应用大赛_微应用、客服绩效-微应用、直播话术-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、搭配购-微应用、微应用-商详海报、微应用-主图视频、直播间AI导购、直播间导购-微应用、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | microapp.UpdateStaticFileMeta | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | false | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | store_type | storeType | false | 99 | 1 | 存储类型。 1: 素材中心。 3:ImageX | - | - |
| 0 | path | path | true | 2 | /test/path/1.jpg | 文件相对路径，前端请求获取文件时需填该值 | - | - |
| 0 | material_id | materialId | false | 2 | 1111111111 | 素材id，由素材中心接口返回 | - | - |
| 0 | file_size | fileSize | false | 99 | 123 | 文件大小, 单位为B | - | - |

## 响应参数

无。

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/microapp/UpdateStaticFileMeta?app_key=your_appkey_here&method=microapp.UpdateStaticFileMeta&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/microapp/UpdateStaticFileMeta?app_key=your_appkey_here&method=microapp.UpdateStaticFileMeta&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MicroappUpdateStaticFileMetaRequest request = new MicroappUpdateStaticFileMetaRequest();
MicroappUpdateStaticFileMetaParam param = request.getParam();
param.setStoreType(1);
param.setPath("/test/path/1.jpg");
param.setMaterialId("1111111111");
param.setFileSize(123L);
MicroappUpdateStaticFileMetaResponse response = request.execute(accessToken);

```

### php

```php
$request = new MicroappUpdateStaticFileMetaRequest();
$param = new MicroappUpdateStaticFileMetaParam();
$request->setParam($param);
$param->store_type = 1;
$param->path = "/test/path/1.jpg";
$param->material_id = "1111111111";
$param->file_size = 123;
$response = $request->execute(accessToken);

```

### python

```python
request = MicroappUpdateStaticFileMetaRequest()
param = request.getParams()
param.store_type = 1
param.path = "/test/path/1.jpg"
param.material_id = "1111111111"
param.file_size = 123
response = request.execute(accessToken)

```

### go

```go
request := microapp_UpdateStaticFileMeta_request.New()
param := request.GetParams()
param.StoreType = 1
param.Path = "/test/path/1.jpg"
param.MaterialId = "1111111111"
param.FileSize = 123
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MicroappUpdateStaticFileMetaRequest();
var param = request.BuildParam();
param.StoreType = 1;
param.Path = "/test/path/1.jpg";
param.MaterialId = "1111111111";
param.FileSize = 123;
var response = request.Execute<MicroappUpdateStaticFileMetaResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:8000002 | 参数有误 | 请参考文档填写正确参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:8000006 | appKey参数有误 | 请填写正确的 appKey |
| 20000 | 系统错误 | isp.service-error:8000001 | 内部错误 | 联系开放平台同学解决 |
| 20000 | 系统错误 | isp.service-error:8000004 | 内部错误 | 联系开放平台同学解决 |
| 50002 | 业务处理失败 | isv.business-failed:9900007 | 静态资源path字段有重复值，请检查 | 使用新的path |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
