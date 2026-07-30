# /second/ecomInsight/createAssetTask

> 中文说明：创建素材任务  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/8183>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/ecomInsight/createAssetTask |
| 中文名称 | 创建素材任务 |
| 文档目录 | 短视频API |
| Article ID | 8183 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/4/21 16:49:50 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10 |

## 使用说明

创建素材任务

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.ecomInsight/createAssetTask | 调用的API接口名称 | - | - |
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
| 0 | name | name | false | 2 | xxx | 任务名 | - | - |
| 0 | url | url | false | 2 | xxxx | 传入图像、音频、视频素材时，仅支持上传 URL ，不支持 base64。<br>将人脸、服装细节单独分割出来，作为单独的图片传给模型，可以有效避免参考不准的问题，具体可参考如下规则及示例：<br>传入单个图像要求<br>- 格式：jpeg、png、webp、bmp、tiff、gif、heic/heif<br>- 宽高比（宽/高）： (0.4, 2.5) <br>- 宽高长度（px）：(300, 6000)<br>- 大小：单张图片小于 30 MB<br>传入单个视频要求<br>- 格式：mp4、mov<br>- 分辨率：480p、720p<br>- 时长：单个视频时长 [2, 15] s<br>- 尺寸：<br>  - 宽高比（宽/高）：[0.4, 2.5]<br>  - 宽高长度（px）：[300, 6000]<br>  - 总像素数：[640×640=409600, 834×1112=927408]，即宽和高的乘积符合 [409600, 927408] 的区间要求。<br>- 大小：单个视频不超过 50 MB<br>- 帧率 (FPS)：[24, 60] <br>传入单个音频要求<br>- 格式：wav、mp3<br>- 时长：单个音频时长 [2, 15] s<br>- 大小：单个音频不超过 15 MB | - | - |
| 0 | asset_type | asset_type | false | 2 | Image | Image、Video、Audio | - | - |
| 0 | group_id | group_id | false | 2 | xxxxx | 活体对应group_id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 返回对象 | - | R1 |
| 1 | data.task_id | task_id | - | 99 | 12312 | 任务id | - | - |
| 0 | msg | msg | - | 2 | xxx | 消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/ecomInsight/createAssetTask?app_key=your_appkey_here&method=second.ecomInsight.createAssetTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/ecomInsight/createAssetTask?app_key=your_appkey_here&method=second.ecomInsight.createAssetTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondEcomInsightCreateAssetTaskRequest request = new SecondEcomInsightCreateAssetTaskRequest();
SecondEcomInsightCreateAssetTaskParam param = request.getParam();
param.setName("xxx");
param.setUrl("xxxx");
param.setAssetType("Image");
param.setGroupId("xxxxx");
SecondEcomInsightCreateAssetTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondEcomInsightCreateAssetTaskRequest();
$param = new SecondEcomInsightCreateAssetTaskParam();
$request->setParam($param);
$param->name = "xxx";
$param->url = "xxxx";
$param->asset_type = "Image";
$param->group_id = "xxxxx";
$response = $request->execute(accessToken);

```

### python

```python
request = SecondEcomInsightCreateAssetTaskRequest()
param = request.getParams()
param.name = "xxx"
param.url = "xxxx"
param.asset_type = "Image"
param.group_id = "xxxxx"
response = request.execute(accessToken)

```

### go

```go
request := second_ecomInsight_createAssetTask_request.New()
param := request.GetParams()
param.Name = "xxx"
param.Url = "xxxx"
param.AssetType = "Image"
param.GroupId = "xxxxx"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondEcomInsightCreateAssetTaskRequest();
var param = request.BuildParam();
param.Name = "xxx";
param.Url = "xxxx";
param.AssetType = "Image";
param.GroupId = "xxxxx";
var response = request.Execute<SecondEcomInsightCreateAssetTaskResponse>(accessToken);

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

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
