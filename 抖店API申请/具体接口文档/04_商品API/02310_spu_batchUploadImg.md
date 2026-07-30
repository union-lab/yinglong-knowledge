# /spu/batchUploadImg

> 中文说明：批量上传SPU详情图和实物图  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2310>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /spu/batchUploadImg |
| 中文名称 | 批量上传SPU详情图和实物图 |
| 文档目录 | 商品API |
| Article ID | 2310 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/8/8 14:11:59 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

上传SPU主图或实物图(用于将外部URL转为抖店URL)
- 支持jpg、jpeg、png格式图片url
- 每次最多5张
- 每张图片最大5M

## 权限包

- 商品 / 商品编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、商品图文-微应用、卡券商工具、创新应用大赛_微应用、撮合服务商、直播话术-微应用、AI拼图-微应用、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、自研微组件、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、自研微组件-直播复盘、商家商品推广、商家后台系统、即时零售商品服务、店铺管理、微应用-主图视频、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、直播工具、直播间AI导购、互动营销定制、直播间导购-微应用、短信营销、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营、智能外呼

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | spu.batchUploadImg | 调用的API接口名称 | - | - |
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
| 0 | image_url_list | image_url_list | true | 3 | - | 图片列表 | - | - |
| 1 | image_url_list.name | name | true | 2 | demo2 | 图片名 | - | - |
| 1 | image_url_list.url | url | true | 2 | https://static.runoob.com/images/demo/demo2.jpg | 公网可访问URL | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success_list | success_list | - | 3 | - | 成功列表 | - | R1 |
| 1 | success_list.name | name | - | 2 | demo2 | 图片名称 | - | R1 |
| 1 | success_list.origin_url | origin_url | - | 2 | https://static.runoob.com/images/demo/demo2.jpg | 入参URL | - | R1 |
| 1 | success_list.spu_url | byte_url | - | 2 | https://p-boe.byted.org/tos-boe-i-c1s52z2b8k/47aae92445314984b27c3854ce2ec569~tplv-c1s52z2b8k-image.image | 抖店SPU专用URL | - | R1 |
| 0 | failed_list | failed_list | - | 3 | - | 失败列表 | - | R1 |
| 1 | failed_list.name | name | - | 2 | demo2 | 图片名 | - | R1 |
| 1 | failed_list.origin_url | origin_url | - | 2 | https://static.runoob.com/images/demo/demo2.jpg | 入参URL | - | R1 |
| 1 | failed_list.err_code | err_code | - | 7 | 2010001 | 失败错误码 | - | R1 |
| 1 | failed_list.err_msg | err_msg | - | 2 | 网络超时 | 失败原因 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/spu/batchUploadImg?app_key=your_appkey_here&method=spu.batchUploadImg&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/spu/batchUploadImg?app_key=your_appkey_here&method=spu.batchUploadImg&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SpuBatchUploadImgRequest request = new SpuBatchUploadImgRequest();
SpuBatchUploadImgParam param = request.getParam();
SpuBatchUploadImgResponse response = request.execute(accessToken);

```

### php

```php
$request = new SpuBatchUploadImgRequest();
$param = new SpuBatchUploadImgParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = SpuBatchUploadImgRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := spu_batchUploadImg_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SpuBatchUploadImgRequest();
var param = request.BuildParam();
var response = request.Execute<SpuBatchUploadImgResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:20121002 | 20121002:商家不存在 | 20121002:商家不存在 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
