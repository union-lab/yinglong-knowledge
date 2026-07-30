# /material/uploadImageSync

> 中文说明：单个图片上传  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1146>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/uploadImageSync |
| 中文名称 | 单个图片上传 |
| 文档目录 | 素材中心API |
| Article ID | 1146 |
| 文档版本 | V7.11 |
| 官方更新时间 | 2024/6/11 11:20:17 |
| 授权主体 | ["店铺","供应商","小程序"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2500 |

## 使用说明

素材中心同步创建图片素材接口
1、如需上传多个素材，请使用批量上传图片接口：【/material/batchUploadImageSync】且单个图片最大不能超过10M；支持的格式有：png/jpg；
3、接口上传成功，素材中心会对素材进行异步审核，审核时效：非风险图片99%在4s内完成审核，风险图片我们会在24h内审核完成；对于审核失败的素材，素材中心会在一定时间内将其删除。
4、上传时需要关注文件夹属性，只有0（文件夹）和1（图片文件夹）才可以上传图片。文件夹属性可通过【/material/getFolderInfo】和【/material/searchFolder】查看；
5、2022年11月-素材接口字段变更公告：https://op.jinritemai.com/docs/notice-docs/5/2668 响应参数ByteUrl字段废弃；只有AuditStatus=3时ByteUrl才会返回；
6、2024年8月，增加限流控制，商家维度每秒不能超过1000张图片
7、图片链接不支持ipv4，不支持内网域名

## 权限包

- 商品 / 素材中心文件传输（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、创新应用大赛_微应用、任务玩法、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 创新应用 / 素材(创新应用)（packageType=1）；适用应用类目：创新应用
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.uploadImageSync | 调用的API接口名称 | - | - |
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
| 0 | folder_id | FolderId | true | 2 | 2 | 文件夹id，0为根目录 | - | - |
| 0 | url | URL | false | 2 | http://xxx.xxx | 图片url，必须是公网可访问。url和file_uri二选一，不能同时为空，如果2者都不为空取url | - | - |
| 0 | material_name | Name | true | 2 | 图片名称.jpg | 图片名称，开发者自定义，不得超过50个字符。 | - | - |
| 0 | file_uri | BinFileURL | false | 2 | tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0 | 二进制文件对应的uri，获取方式请参考：https://op.jinritemai.com/docs/guide-docs/171/1719 | - | - |
| 0 | need_distinct | NeedDistinct | - | 4 | true | 是否去重，默认true:去重，不支持false:不去重，传false无效依旧会去重。去重是指：存在已经审核通过且内容相同的图片，直接返回已存在的图片地址。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | material_id | MaterialId | - | 2 | 7000254886243811628 | 素材id；MaterialId调用【/material/queryMaterialDetail】接口，当audit_status=3时获取byte_url； | - | R1 |
| 0 | folder_id | FolderId | - | 2 | 2 | 素材所在文件夹id，0-素材中心的根目录；其他值-表示对应的文件夹id； | - | R1 |
| 0 | is_new | IsNew | - | 4 | true | 是否是新建，true-新建 | - | R1 |
| 0 | audit_status | AuditStatus | - | 7 | 2 | 素材审核状态; 1-等待审核; 2-审核中; 3-通过; 4-拒绝;注意：只有AuditStatus=3时ByteUrl才会返回； | - | R1 |
| 0 | byte_url | ByteUrl | - | 2 | https://xxx.xx | 【已下线】新的URL可使用下列方式获取：方式一：可监听【店铺使用doudian_material_auditResultForShop】或【供应商使用doudian_material_auditResultForBSCP】audit_status=3时可以使用byte_url；方式二：根据响应参数MaterialId调用【/material/queryMaterialDetail】接口，当audit_status=3时获取byte_url； | - | R1 |

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
MaterialUploadImageSyncRequest request = new MaterialUploadImageSyncRequest();
MaterialUploadImageSyncParam param = request.getParam();
param.setFolderId("2");
param.setUrl("http://xxx.xxx");
param.setMaterialName("图片名称.jpg");
param.setFileUri("tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0");
param.setNeedDistinct(true);
MaterialUploadImageSyncResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialUploadImageSyncRequest();
$param = new MaterialUploadImageSyncParam();
$request->setParam($param);
$param->folder_id = "2";
$param->url = "http://xxx.xxx";
$param->material_name = "图片名称.jpg";
$param->file_uri = "tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0";
$param->need_distinct = true;
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialUploadImageSyncRequest()
param = request.getParams()
param.folder_id = "2"
param.url = "http://xxx.xxx"
param.material_name = "图片名称.jpg"
param.file_uri = "tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0"
param.need_distinct = true
response = request.execute(accessToken)

```

### go

```go
request := material_uploadImageSync_request.New()
param := request.GetParams()
param.FolderId = "2"
param.Url = "http://xxx.xxx"
param.MaterialName = "图片名称.jpg"
param.FileUri = "tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0"
param.NeedDistinct = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialUploadImageSyncRequest();
var param = request.BuildParam();
param.FolderId = "2";
param.Url = "http://xxx.xxx";
param.MaterialName = "图片名称.jpg";
param.FileUri = "tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0";
param.NeedDistinct = true;
var response = request.Execute<MaterialUploadImageSyncResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:10003 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:30001 | 素材库容量不足 | 联系客服扩容 |
| 40004 | 非法的参数 | isv.parameter-invalid:31001 | 请求已生效，请勿重复请求 | 并发请求，勿重试 |
| 50002 | 业务处理失败 | isv.business-failed:10004 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:22007 | 素材涉嫌违规，不能上传 | 素材涉嫌违规，不能上传 |
| 50002 | 业务处理失败 | isv.business-failed:31003 | 存在重复图片，请勿上传重复图片 | 同一个请求中，存在重复图片 |
| 50002 | 业务处理失败 | isv.business-failed:22001 | 素材大小超出限制 | 素材大小超出限制 |
| 50002 | 业务处理失败 | isv.business-failed:10010 | 素材下载失败，请重新上传 | 素材下载失败，请重新上传 |
| 50002 | 业务处理失败 | isv.business-failed:22006 | 当前文件夹下不支持创建该类素材 | 请确定文件夹属性是否支持上传图片 |
| 50002 | 业务处理失败 | isv.business-failed:30004 | 30004:已退店商家不支持创建素材/文件夹 | 请检查店铺状态 |
| 50002 | 业务处理失败 | isv.business-failed:31004 | 31004:店铺超过每秒上传限制 | 31004:店铺超过每秒上传限制 |
| 50002 | 业务处理失败 | isv.business-failed:10009 | 10009:系统异常，请稍后重试 | 10009:系统异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
