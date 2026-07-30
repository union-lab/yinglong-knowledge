# /material/batchUploadImageSync

> 中文说明：批量上传图片到素材中心  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1616>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/batchUploadImageSync |
| 中文名称 | 批量上传图片到素材中心 |
| 文档目录 | 素材中心API |
| Article ID | 1616 |
| 文档版本 | V3.13 |
| 官方更新时间 | 2022/12/16 15:49:17 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2500 |

## 使用说明

1、一次上传的数量限制50张图片且单个图片最大不能超过10M；   
2、接口上传成功，素材中心会对素材进行异步审核，审核时效：非风险图片99%在4s内完成审核，风险图片我们会在24h内审核完成；对于审核失败的素材，素材中心会在一定时间内将其删除；
3、上传时需要关注文件夹属性为0-文件夹和1-图片文件夹才可以上传图片，文件夹属性可通过【/material/getFolderInfo】和【/material/searchFolder】查看。
4、2022年11月-素材接口字段变更公告：https://op.jinritemai.com/docs/notice-docs/5/2668 响应参数ByteUrl字段废弃
5、单商家上传图片速度限制1000图/秒
6、图片地址不支持ipv4，不支持内网地址

## 权限包

- 商品 / 素材中心编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、创新应用大赛_微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 创新应用 / 素材(创新应用)（packageType=1）；适用应用类目：创新应用
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.batchUploadImageSync | 调用的API接口名称 | - | - |
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
| 0 | materials | Materials | true | 3 | - | 素材信息；一次上传的数量限制50张图片且单个图片最大不能超过10M； | - | - |
| 1 | materials.request_id | RequestId | true | 2 | 1234567890 | 该参数仅有2个作用：（1）一次请求中素材的唯一标示；（2）接口防并发，规则是：不同请求所有request_id排序之后拼接起来，若相同视为同一次请求 | - | - |
| 1 | materials.folder_id | FolderId | true | 2 | 0 | 文件夹id，0为素材中心根目录。若想创建文件夹，请参考：https://ehome.bytedance.net/djt/apiManage/doc/preview/946?doc=true | - | - |
| 1 | materials.name | Name | true | 2 | 这是一个图片 | 素材名称，长度限制为50个字符 | - | - |
| 1 | materials.url | URL | false | 2 | http://xxx/origin | 图片url，必须是公网可访问地址；如果是二进制上传，请使用file_uri字段。url和file_uri二选一，不能同时为空 | - | - |
| 1 | materials.file_uri | BinFileURL | false | 2 | tos-cn-i-7veqoeduo3/9e1df78157524c63abf7caa9bb1e88e0 | 二进制文件对应的uri，获取方式请参考：https://op.jinritemai.com/docs/guide-docs/171/1719 | - | - |
| 1 | materials.material_type | MaterialType | true | 2 | photo | 素材类型，请传固定值：photo | - | - |
| 0 | need_distinct | NeedDistinct | - | 4 | true | 是否去重，默认true:去重，不支持false:不去重，传false无效依旧会去重。去重是指：存在已经审核通过且内容相同的图片，直接返回已存在的图片地址。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success_map | SuccessMap | - | 8 | - | 成功上传的素材，key为参数中的request_id | - | R1 |
| 1 | success_map.MaterialId | MaterialId | - | 2 | 1230111 | 素材id，素材中心对素材的唯一编号；可MaterialId调用【/material/queryMaterialDetail】接口，当audit_status=3时获取byte_url； | - | R1 |
| 1 | success_map.Name | Name | - | 2 | 这是一个图片 | 素材名称，长度限制为50个字符 | - | R1 |
| 1 | success_map.FolderId | FolderId | - | 2 | “0” | 文件夹id，“0”表示将素材上传到了素材中心根目录 | - | R1 |
| 1 | success_map.OriginUrl | OriginUrl | - | 2 | http://xxx/origin | 上传素材时，传入参数url的取值 | - | R1 |
| 1 | success_map.ByteUrl | ByteUrl | - | 2 | https://xxxx | 【已下线】新的URL可使用下列方式获取：方式一：监听【店铺使用doudian_material_auditResultForShop】或【供应商使用doudian_material_auditResultForBSCP】audit_status=3时可以使用byte_url；方式二：根据响应参数调用【/material/queryMaterialDetail】接口，当audit_status=3时获取byte_url； | - | R1 |
| 1 | success_map.AuditStatus | AuditStatus | - | 7 | 3 | 审核状态 1-待审核 2-审核中 3-审核通过 4-审核拒绝审核状态 1-待审核 2-审核中 3-审核通过 4-审核拒绝；注意：只有AuditStatus=3时ByteUrl才会返回； | - | R1 |
| 1 | success_map.IsNew | IsNew | - | 4 | false | 是否为新建的素材，false-表示素材已经存在或者request_id重复使用，true-表示新建 | - | R1 |
| 0 | failed_map | FailedMap | - | 8 | - | 失败的素材，key为参数中的request_id | - | R1 |
| 1 | failed_map.ErrCode | ErrCode | - | 7 | 20001 | 失败的code | - | R1 |
| 1 | failed_map.ErrMsg | ErrMsg | - | 2 | URL无效，请上传有效的素材 | 失败的原因 | - | R1 |

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
MaterialBatchUploadImageSyncRequest request = new MaterialBatchUploadImageSyncRequest();
MaterialBatchUploadImageSyncParam param = request.getParam();
param.setNeedDistinct(true);
MaterialBatchUploadImageSyncResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialBatchUploadImageSyncRequest();
$param = new MaterialBatchUploadImageSyncParam();
$request->setParam($param);
$param->need_distinct = true;
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialBatchUploadImageSyncRequest()
param = request.getParams()
param.need_distinct = true
response = request.execute(accessToken)

```

### go

```go
request := material_batchUploadImageSync_request.New()
param := request.GetParams()
param.NeedDistinct = true
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialBatchUploadImageSyncRequest();
var param = request.BuildParam();
param.NeedDistinct = true;
var response = request.Execute<MaterialBatchUploadImageSyncResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20002 | request_id无效 | 使用有效的request_id |
| 50002 | 业务处理失败 | isv.business-failed:31001 | 请求已生效，请勿重复请求 | 并发请求，不要重复请求 |
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 素材数量为空或者超出50个 | 参数错误 |
| 50002 | 业务处理失败 | isv.business-failed:30001 | 素材库容量不足 | 联系客服扩容 |
| 20000 | 系统错误 | isp.service-error:10003 | 系统异常，请稍后重试 | 内部错误，稍后重试 |
| 20000 | 系统错误 | isp.service-error:10004 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:22007 | 素材涉嫌违规，不能上传 | 素材涉嫌违规，不能上传 |
| 50002 | 业务处理失败 | isv.business-failed:31003 | 存在重复图片，请勿上传重复图片 | 本次请求中存在重复图片 |
| 50002 | 业务处理失败 | isv.business-failed:10010 | 素材下载失败，请重新上传 | 重新上传 |
| 40004 | 非法的参数 | isv.parameter-invalid:22001 | 素材大小超出限制 | 素材大小超出限制，不要重试 |
| 50002 | 业务处理失败 | isv.business-failed:30004 | 已退店商家不支持创建素材/文件夹 | 请联系客服，不要重复请求 |
| 50002 | 业务处理失败 | isv.business-failed:31004 | 31004:店铺超过每秒上传限制 | 31004:店铺超过每秒上传限制 |
| 50002 | 业务处理失败 | isv.business-failed:22006 | 22006:当前文件夹下不支持创建该类素材 | 22006:当前文件夹下不支持创建该类素材 |
| 50002 | 业务处理失败 | isv.business-failed:10009 | 10009:系统异常，请稍后重试 | 10009:系统异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
