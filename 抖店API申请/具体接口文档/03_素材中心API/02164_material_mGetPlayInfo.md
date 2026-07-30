# /material/mGetPlayInfo

> 中文说明：批量获取视频信息  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/2164>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/mGetPlayInfo |
| 中文名称 | 批量获取视频信息 |
| 文档目录 | 素材中心API |
| Article ID | 2164 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2022/11/9 17:42:32 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2800 |

## 使用说明

该接口用于获取素材中心审核通过的视频的播放信息：
1. 视频的播放地址和封面地址带有效时间，超过有效期限将不能访问，有效时间的具体值见接口返回；
2. 如何上传视频到素材中心，请参考视频上传接口：https://op.jinritemai.com/docs/api-docs/69/1147 或 https://op.jinritemai.com/docs/api-docs/69/1617
3. 上传完视频后，如何获取素材中心视频的vid以及审核状态，请参考素材查询接口 https://op.jinritemai.com/docs/api-docs/69/1148 或 https://op.jinritemai.com/docs/api-docs/69/1145

## 权限包

- 商品 / 素材中心查询（packageType=1）；适用应用类目：微应用-标题优化、创新应用大赛_微应用、任务玩法、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 内部二方开放 / 搜广内部定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.mGetPlayInfo | 调用的API接口名称 | - | - |
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
| 0 | vid_list | VidList | true | 3 | ["asd123asdqw" ,"asd1wdsadas"] | vid列表，列表长度(1, 20) | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success_map | SuccessMap | - | 8 | - | 获取成功map，key为vid，value是视频的播放信息 | - | R1 |
| 1 | success_map.Vid | Vid | - | 2 | asdas123 | vid，素材中心搜索素材或者查素材详情接口返回的vid字段 | - | R1 |
| 1 | success_map.Height | Height | - | 7 | 23 | 视频高度 | - | R1 |
| 1 | success_map.Width | Width | - | 7 | 32 | 视频宽度 | - | R1 |
| 1 | success_map.Format | Format | - | 2 | mp4 | 视频格式 | - | R1 |
| 1 | success_map.Size | Size | - | 1 | 91226112 | 视频大小，单位B | - | R1 |
| 1 | success_map.URI | URI | - | 2 | www.xxxxxxx.com | 视频原地址 | - | R1 |
| 1 | success_map.Duration | Duration | - | 9 | 532.651 | 视频长度(s) | - | R1 |
| 1 | success_map.VideoCoverUrl | VideoCoverUrl | - | 2 | www.xxxxxxx.com | 视频封面地址 | - | R1 |
| 1 | success_map.MainUrl | MainUrl | - | 2 | www.xxxxxxx.com | 视频播放地址 | - | R1 |
| 1 | success_map.MainUrlExpire | MainUrlExpire | - | 1 | 1657616683 | 视频播放地址和视频封面地址的过期时间 | - | R1 |
| 0 | failed_map | FailedMap | - | 8 | - | 获取失败map，key为vid | - | R1 |
| 1 | failed_map.ErrCode | ErrCode | - | 7 | 10001 | 错误码 | - | R1 |
| 1 | failed_map.ErrMsg | ErrMsg | - | 2 | 参数错误 | 错误信息 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/mGetPlayInfo?app_key=your_appkey_here&method=material.mGetPlayInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/mGetPlayInfo?app_key=your_appkey_here&method=material.mGetPlayInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialMGetPlayInfoRequest request = new MaterialMGetPlayInfoRequest();
MaterialMGetPlayInfoParam param = request.getParam();
param.setVidList(["asd123asdqw" ,"asd1wdsadas"]);
MaterialMGetPlayInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialMGetPlayInfoRequest();
$param = new MaterialMGetPlayInfoParam();
$request->setParam($param);
$param->vid_list = ["asd123asdqw" ,"asd1wdsadas"];
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialMGetPlayInfoRequest()
param = request.getParams()
param.vid_list = ["asd123asdqw" ,"asd1wdsadas"]
response = request.execute(accessToken)

```

### go

```go
request := material_mGetPlayInfo_request.New()
param := request.GetParams()
param.VidList = ["asd123asdqw" ,"asd1wdsadas"]
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialMGetPlayInfoRequest();
var param = request.BuildParam();
param.VidList = ["asd123asdqw" ,"asd1wdsadas"];
var response = request.Execute<MaterialMGetPlayInfoResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 参数错误 | 检查参数是否符合要求 |
| 40004 | 非法的参数 | isv.parameter-invalid:20005 | 审核中/审核不通过的视频不支持预览 | 等素材审核通过之后再查询 |
| 50002 | 业务处理失败 | isv.business-failed:10003 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
