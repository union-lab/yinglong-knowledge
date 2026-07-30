# /material/searchMaterial

> 中文说明：素材中心--素材搜索接口  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1148>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/searchMaterial |
| 中文名称 | 素材中心--素材搜索接口 |
| 文档目录 | 素材中心API |
| Article ID | 1148 |
| 文档版本 | V6.05 |
| 官方更新时间 | 2022/11/17 11:47:18 |
| 授权主体 | ["店铺","供应商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 2000 |

## 使用说明

1、不会返回已经删除的素材；
2、请至少传入一个入参，如果没有任何搜索条件，即：除page_num、page_size、order_type之外的字段都为空，会返【查询失败，未上传任何查询参数】错误。
3、2022年11月-素材接口字段变更公告：https://op.jinritemai.com/docs/notice-docs/5/2668 响应参数ByteUrl字段废弃；当audit_status=3时才会返回byte_url；视频请使用vid字段

## 权限包

- 商品 / 素材中心查询（packageType=1）；适用应用类目：微应用-标题优化、创新应用大赛_微应用、任务玩法、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.searchMaterial | 调用的API接口名称 | - | - |
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
| 0 | material_id | MaterialId | false | 2 | 7000291764753940780 | 素材id；可使用【/material/batchUploadImageSync】【/material/uploadImageSync】【/material/searchMaterial  】接口获取 | - | - |
| 0 | material_name | Name | false | 2 | 模糊匹配, | 文件名称，支持模糊匹配 | - | - |
| 0 | material_type | MaterialType | false | 3 | photo | 素材类型，空-不限； photo-图片；video-视频； | - | - |
| 0 | operate_status | OperateStatus | false | 3 | [0,1,4] | 素材状态，0-待下载；1-有效；4-回收站中； | - | - |
| 0 | audit_status | AuditStatus | false | 3 | [1,2,3,4] | 审核状态，1-待审核；2-审核中；3-通过 ；4-拒绝；注意：只有AuditStatus=3时ByteUrl才会返回； | - | - |
| 0 | create_time_start | CreateTimeStart | false | 2 | 2012-08-12 12:00:12 | 搜索创建开始时间，格式：yyyy-MM-dd HH:mm:ss | - | - |
| 0 | create_time_end | CreateTimeEnd | false | 2 | 2022-11-12 12:00:12 | 搜索创建结束时间，格式：yyyy-MM-dd HH:mm:ss | - | - |
| 0 | folder_id | FolderId | false | 2 | 6999834643465781548 | 文件夹id，0-素材中心； -1-回收站； | - | - |
| 0 | material_id_list | MaterialIdList | false | 3 | [7000291764753940780,7000291764753940780] | 素材id列表 | - | - |
| 0 | page_num | PageNum | false | 7 | 1 | 第几页，1，2，……，默认值：1 | - | - |
| 0 | page_size | PageSize | false | 7 | 20 | 页大小，1，2，……，100，默认值：50 | - | - |
| 0 | order_type | OrderType | false | 7 | 1 | 排序方式，0-按照创建时间倒序 ；1-按照创建时间升序；6-按照素材大小降序；7-按照素材大小升序； | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | material_info_list | MaterialInfoList | - | 3 | - | 素材列表信息 | - | R1 |
| 1 | material_info_list.material_id | MaterialId | - | 2 | 7000291764753940780 | 素材id；可使用【/material/batchUploadImageSync】【/material/uploadImageSync】【/material/searchMaterial  】接口获取 | - | R1 |
| 1 | material_info_list.folder_id | FolderId | - | 2 | 6999834643465781548 | 父文件夹id | - | R1 |
| 1 | material_info_list.origin_url | OriginUrl | - | 2 | \"\" | 开发者创建素材时传入的公网可访问url | - | R1 |
| 1 | material_info_list.byte_url | ByteUrl | - | 2 | \"\" | 图片url；视频请使用vid； | - | R1 |
| 1 | material_info_list.material_name | Name | - | 2 | 素材名 | 素材名称 | - | R1 |
| 1 | material_info_list.material_type | MaterialType | - | 2 | photo | 素材类型，photo-图片；video-视频； | - | R1 |
| 1 | material_info_list.operate_status | OperateStatus | - | 7 | 1 | 素材状态，0-待下载；1-有效；4-回收站中；6-已删除； | - | R1 |
| 1 | material_info_list.audit_status | AuditStatus | - | 7 | 1 | 审核状态；1-待审核；2-审核中；3-通过 4-拒绝；注意：只有audit_status =3时才会返回byte_url； | - | R1 |
| 1 | material_info_list.audit_reject_desc | AuditStatusDesc | - | 2 | 不符合 | 审核失败的原因 | - | R1 |
| 1 | material_info_list.size | Size | - | 1 | 1234 | 文件大小，单位KB | - | R1 |
| 1 | material_info_list.create_time | CreateTime | - | 2 | 2021-08-12 12:00:12 | 创建素材的时间，格式：yyyy-MM-dd HH:mm:ss | - | R1 |
| 1 | material_info_list.update_time | UpdateTime | - | 2 | 2021-08-12 12:00:12 | 最近一次更新素材的时间，格式：yyyy-MM-dd HH:mm:ss | - | R1 |
| 1 | material_info_list.delete_time | DeleteTime | - | 2 | 2021-08-12 12:00:12 | 移动到回收站的时间，格式：yyyy-MM-dd HH:mm:ss | - | R1 |
| 1 | material_info_list.photoInfo | PhotoInfo | - | 5 | - | 图片信息 | - | R1 |
| 2 | material_info_list.photoInfo.height | Height | - | 7 | 255 | 图片高度，单位px | - | R1 |
| 2 | material_info_list.photoInfo.width | Width | - | 7 | 255 | 图片宽度，单位px | - | R1 |
| 2 | material_info_list.photoInfo.format | Format | - | 2 | jpg | 图片格式 | - | R1 |
| 1 | material_info_list.videoInfo | VideoInfo | - | 5 | - | 视频信息 | - | R1 |
| 2 | material_info_list.videoInfo.format | Format | - | 2 | mp3 | 视频格式 | - | R1 |
| 2 | material_info_list.videoInfo.duration | Duration | - | 9 | 12 | 视频时长，单位秒 | - | R1 |
| 2 | material_info_list.videoInfo.vid | Vid | - | 2 | 12345678 | vid，用于获取视频播放地址，接口文档见：https://op.jinritemai.com/docs/api-docs/69/2164 | - | R1 |
| 2 | material_info_list.videoInfo.video_cover_url | VideoCoverUrl | - | 2 | www.xxxxxxx.com | 视频封面地址 | - | R1 |
| 2 | material_info_list.videoInfo.height | Height | - | 7 | 23 | 视频高度，单位px | - | R1 |
| 2 | material_info_list.videoInfo.width | Width | - | 7 | 32 | 视频宽度，单位px | - | R1 |
| 2 | material_info_list.videoInfo.size | Size | - | 1 | 91226112 | 视频大小，单位B | - | R1 |
| 0 | total | Total | - | 1 | 3 | 总数 | - | R1 |

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
MaterialSearchMaterialRequest request = new MaterialSearchMaterialRequest();
MaterialSearchMaterialParam param = request.getParam();
param.setMaterialId("7000291764753940780");
param.setMaterialName("模糊匹配,");
param.setMaterialType(photo);
param.setOperateStatus([0,1,4]);
param.setAuditStatus([1,2,3,4]);
param.setCreateTimeStart("2012-08-12 12:00:12");
param.setCreateTimeEnd("2022-11-12 12:00:12");
param.setFolderId("6999834643465781548");
param.setMaterialIdList([7000291764753940780,7000291764753940780]);
param.setPageNum(1);
param.setPageSize(20);
param.setOrderType(1);
MaterialSearchMaterialResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialSearchMaterialRequest();
$param = new MaterialSearchMaterialParam();
$request->setParam($param);
$param->material_id = "7000291764753940780";
$param->material_name = "模糊匹配,";
$param->material_type = photo;
$param->operate_status = [0,1,4];
$param->audit_status = [1,2,3,4];
$param->create_time_start = "2012-08-12 12:00:12";
$param->create_time_end = "2022-11-12 12:00:12";
$param->folder_id = "6999834643465781548";
$param->material_id_list = [7000291764753940780,7000291764753940780];
$param->page_num = 1;
$param->page_size = 20;
$param->order_type = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialSearchMaterialRequest()
param = request.getParams()
param.material_id = "7000291764753940780"
param.material_name = "模糊匹配,"
param.material_type = photo
param.operate_status = [0,1,4]
param.audit_status = [1,2,3,4]
param.create_time_start = "2012-08-12 12:00:12"
param.create_time_end = "2022-11-12 12:00:12"
param.folder_id = "6999834643465781548"
param.material_id_list = [7000291764753940780,7000291764753940780]
param.page_num = 1
param.page_size = 20
param.order_type = 1
response = request.execute(accessToken)

```

### go

```go
request := material_searchMaterial_request.New()
param := request.GetParams()
param.MaterialId = "7000291764753940780"
param.MaterialName = "模糊匹配,"
param.MaterialType = photo
param.OperateStatus = [0,1,4]
param.AuditStatus = [1,2,3,4]
param.CreateTimeStart = "2012-08-12 12:00:12"
param.CreateTimeEnd = "2022-11-12 12:00:12"
param.FolderId = "6999834643465781548"
param.MaterialIdList = [7000291764753940780,7000291764753940780]
param.PageNum = 1
param.PageSize = 20
param.OrderType = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialSearchMaterialRequest();
var param = request.BuildParam();
param.MaterialId = "7000291764753940780";
param.MaterialName = "模糊匹配,";
param.MaterialType = photo;
param.OperateStatus = [0,1,4];
param.AuditStatus = [1,2,3,4];
param.CreateTimeStart = "2012-08-12 12:00:12";
param.CreateTimeEnd = "2022-11-12 12:00:12";
param.FolderId = "6999834643465781548";
param.MaterialIdList = [7000291764753940780,7000291764753940780];
param.PageNum = 1;
param.PageSize = 20;
param.OrderType = 1;
var response = request.Execute<MaterialSearchMaterialResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 文件夹ID错误，请输入正确的文件夹ID | 文件夹id不正确 |
| 20000 | 系统错误 | isp.service-error:10004 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:10003 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:31002 | 查询数量超出限制，请通过筛选素材名称/状态/日期等缩小范围 | 查询数量超出限制，请通过筛选素材名称/状态/日期等缩小范围 |
| 50002 | 业务处理失败 | isv.business-failed:10006 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
