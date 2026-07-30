# /microapp/GetStaticFileUrlBatch

> 中文说明：ISV批量兑换文件url  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/2914>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /microapp/GetStaticFileUrlBatch |
| 中文名称 | ISV批量兑换文件url |
| 文档目录 | 素材中心API |
| Article ID | 2914 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/12/26 14:18:03 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

使用场景： 1、必须先调用【/microapp/UpdateStaticFileMeta 】接口，需先请求path路径成功上传后，并审核通过； 2、使用相同的path路径请求该接口；注意如返回为空表示未上传path或path不存在； 3、path：最大支持一次上传1000个，接口仅返回path路径存在并审核通过的链接，失败的不返回。

## 权限包

- 素材中心 / 微应用素材上传（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、创新应用大赛_微应用、客服绩效-微应用、直播话术-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、搭配购-微应用、微应用-商详海报、微应用-主图视频、直播间AI导购、直播间导购-微应用、AI智能客服-微应用、AI售后挽单

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | microapp.GetStaticFileUrlBatch | 调用的API接口名称 | - | - |
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
| 0 | store_type | storeType | true | 99 | 2 | 选择文件场景， 1：素材中心， 2：TOS临时文件，3: ImageX。 | - | - |
| 0 | path | path | true | 3 | ["xxx/1.jpg","xxx/2.png"] | 文件path路径，请先调用【/microapp/UpdateStaticFileMeta 】上传并审核通过的。 | - | - |
| 0 | bucket_name | bucketName | false | 2 | your-bucket-name | 【目前暂不支持，后续有规划开放】bucket名称，在后端tos场景才需要传 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | url_map | urlMap | - | 8 | {"xxx/1.jpg":"https://1","xxx/2.png":"https://2"} | 文件 信息。 ，  key为path，value为url；注意：批量获取时接口仅返回path路径存在并审核通过的链接，失败的不返回；单个获取时失败返回为空； | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/microapp/GetStaticFileUrlBatch?app_key=your_appkey_here&method=microapp.GetStaticFileUrlBatch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/microapp/GetStaticFileUrlBatch?app_key=your_appkey_here&method=microapp.GetStaticFileUrlBatch&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MicroappGetStaticFileUrlBatchRequest request = new MicroappGetStaticFileUrlBatchRequest();
MicroappGetStaticFileUrlBatchParam param = request.getParam();
param.setStoreType(2);
param.setPath(["xxx/1.jpg","xxx/2.png"]);
param.setBucketName("your-bucket-name");
MicroappGetStaticFileUrlBatchResponse response = request.execute(accessToken);

```

### php

```php
$request = new MicroappGetStaticFileUrlBatchRequest();
$param = new MicroappGetStaticFileUrlBatchParam();
$request->setParam($param);
$param->store_type = 2;
$param->path = ["xxx/1.jpg","xxx/2.png"];
$param->bucket_name = "your-bucket-name";
$response = $request->execute(accessToken);

```

### python

```python
request = MicroappGetStaticFileUrlBatchRequest()
param = request.getParams()
param.store_type = 2
param.path = ["xxx/1.jpg","xxx/2.png"]
param.bucket_name = "your-bucket-name"
response = request.execute(accessToken)

```

### go

```go
request := microapp_GetStaticFileUrlBatch_request.New()
param := request.GetParams()
param.StoreType = 2
param.Path = ["xxx/1.jpg","xxx/2.png"]
param.BucketName = "your-bucket-name"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MicroappGetStaticFileUrlBatchRequest();
var param = request.BuildParam();
param.StoreType = 2;
param.Path = ["xxx/1.jpg","xxx/2.png"];
param.BucketName = "your-bucket-name";
var response = request.Execute<MicroappGetStaticFileUrlBatchResponse>(accessToken);

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

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
