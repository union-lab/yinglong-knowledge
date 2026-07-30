# /material/getFolderInfo

> 中文说明：查看文件夹详情  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1150>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/getFolderInfo |
| 中文名称 | 查看文件夹详情 |
| 文档目录 | 素材中心API |
| Article ID | 1150 |
| 文档版本 | V3.01 |
| 官方更新时间 | 2022/12/28 17:29:45 |
| 授权主体 | ["店铺","供应商","小程序"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 720 |

## 使用说明

1、通过文件夹id，查询文件夹下的文件夹和素材。接口返回所有的子文件夹，分页返回素材。
2、2022年11月-素材接口字段变更公告：https://op.jinritemai.com/docs/notice-docs/5/2668 响应参数ByteUrl字段废弃；当audit_status=3时才会返回byte_url；视频请使用vid字段

## 权限包

- 商品 / 素材中心查询（packageType=1）；适用应用类目：微应用-标题优化、创新应用大赛_微应用、任务玩法、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 创新应用 / 素材(创新应用)（packageType=1）；适用应用类目：创新应用
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.getFolderInfo | 调用的API接口名称 | - | - |
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
| 0 | folder_id | FolderId | true | 2 | 70072571115706780601250 | 文件夹id | - | - |
| 0 | page_num | PageNum | true | 7 | 1 | 分页的页数，从1开始 | - | - |
| 0 | page_size | PageSize | true | 7 | 50 | 每页返回的数量。最大为100，默认为50 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | folder_info | FolderInfo | - | 5 | - | 文件夹信息 | - | R1 |
| 1 | folder_info.folder_id | FolderId | - | 2 | 70072571115706780601250 | 文件夹id | - | R1 |
| 1 | folder_info.folder_type | FolderType | - | 7 | 0 | 文件夹类型 | - | R1 |
| 1 | folder_info.folder_name | Name | - | 2 | 文件夹名称 | 文件夹名称 | - | R1 |
| 1 | folder_info.operate_status | OperateStatus | - | 7 | 1 | 文件夹状态，1-有效 4-在回收站中 | - | R1 |
| 1 | folder_info.child_folder | ChildFolder | - | 3 | - | 子文件夹列表 | - | R1 |
| 2 | folder_info.child_folder.folder_id | FolderId | - | 2 | 70072571115706780611250 | 文件夹id | - | R1 |
| 2 | folder_info.child_folder.folder_type | FolderType | - | 7 | 0 | 文件夹类型 | - | R1 |
| 2 | folder_info.child_folder.folder_name | Name | - | 2 | 子文件夹名称 | 文件夹名称 | - | R1 |
| 2 | folder_info.child_folder.operate_status | OperateStatus | - | 7 | 4 | 文件夹状态，1-有效 4-在回收站中 | - | R1 |
| 2 | folder_info.child_folder.parent_folder_id | ParentFolderId | - | 2 | 70072571115706780601250 | 父文件夹id | - | R1 |
| 2 | folder_info.child_folder.create_time | CreateTime | - | 2 | 2021-09-12 12:23:23 | 文件夹创建时间 | - | R1 |
| 2 | folder_info.child_folder.update_time | UpdateTime | - | 2 | 2021-09-12 12:23:23 | 文件夹最近一次修改时间 | - | R1 |
| 2 | folder_info.child_folder.delete_time | DeleteTime | - | 2 | 2021-09-12 12:23:23 | 文件夹移动到回收站的时间，只有在回收站中，该字段才有意义 | - | R1 |
| 2 | folder_info.child_folder.folder_attr | Attr | - | 7 | 0 | 文件夹属性，0-文件夹（不限素材类型），1-图片文件夹（只能上传图片），2-视频文件夹（只能上传视频） | - | R1 |
| 1 | folder_info.child_material | ChildMaterial | - | 3 | - | 素材列表 | - | R1 |
| 2 | folder_info.child_material.material_id | MaterialId | - | 2 | 70072571115707435960250 | 素材id | - | R1 |
| 2 | folder_info.child_material.folder_id | FolderId | - | 2 | 70072571115706780601250 | 文件夹id | - | R1 |
| 2 | folder_info.child_material.origin_url | OriginUrl | - | 2 | "" | 开发者创建素材是传入的公网可访问url | - | R1 |
| 2 | folder_info.child_material.byte_url | ByteUrl | - | 2 | "" | 图片url，当audit_status=3时才会返回byte_url；视频请使用vid字段； | - | R1 |
| 2 | folder_info.child_material.materil_name | Name | - | 2 | 名称 | 素材名称 | - | R1 |
| 2 | folder_info.child_material.material_type | MaterialType | - | 2 | photo | 素材类型，photo-图片；video-视频； | - | R1 |
| 2 | folder_info.child_material.operate_status | OperateStatus | - | 7 | 0 | 状态，0-待下载；1-有效；4-在回收站中； | - | R1 |
| 2 | folder_info.child_material.audit_status | AuditStatus | - | 7 | 1 | 审核状态，1-待审核；2-审核中；3-通过 4-拒绝；注意：只有audit_status =3时byte_url才会返回； | - | R1 |
| 2 | folder_info.child_material.audit_reject_desc | AuditStatusDesc | - | 2 | 文件大小超出限制 | 审核失败的原因 | - | R1 |
| 2 | folder_info.child_material.size | Size | - | 1 | 1234 | 大小，单位为byte | - | R1 |
| 2 | folder_info.child_material.photo_info | PhotoInfo | - | 5 | - | 图片信息 | - | R1 |
| 3 | folder_info.child_material.photo_info.height | Height | - | 7 | 255 | 图片高度 | - | R1 |
| 3 | folder_info.child_material.photo_info.width | Width | - | 7 | 255 | 图片宽度 | - | R1 |
| 3 | folder_info.child_material.photo_info.format | Format | - | 2 | jpg | 图片格式 | - | R1 |
| 2 | folder_info.child_material.video_info | VideoInfo | - | 5 | - | 视频信息 | - | R1 |
| 3 | folder_info.child_material.video_info.format | Format | - | 2 | mp3 | 视频格式 | - | R1 |
| 3 | folder_info.child_material.video_info.duration | Duration | - | 9 | 12 | 视频时长 | - | R1 |
| 3 | folder_info.child_material.video_info.vid | Vid | - | 2 | 123456789 | 视频云vid，根据该字段获取视频播放信息等https://op.jinritemai.com/docs/api-docs/69/2164 | - | R1 |
| 3 | folder_info.child_material.video_info.video_cover_url | VideoCoverUrl | - | 2 | https://xxxx.xxx | 视频封面 | - | R1 |
| 2 | folder_info.child_material.create_time | CreateTime | - | 2 | 2021-09-12 12:23:23 | 素材创建时间 | - | R1 |
| 2 | folder_info.child_material.update_time | UpdateTime | - | 2 | 2021-09-12 12:23:23 | 素材最近一次修改时间 | - | R1 |
| 2 | folder_info.child_material.delete_time | DeleteTime | - | 2 | 0 | 素材移动到回收站的时间，只有在回收站中，该字段才有意义 | - | R1 |
| 1 | folder_info.parent_folder_id | ParentFolderId | - | 2 | 0 | 父文件夹id，0-素材中心根目录 | - | R1 |
| 1 | folder_info.create_time | CreateTime | - | 2 | 2021-09-12 12:23:23 | 文件夹创建时间 | - | R1 |
| 1 | folder_info.update_time | UpdateTime | - | 2 | 2021-09-12 12:23:23 | 文件夹最近一次修改时间 | - | R1 |
| 1 | folder_info.delete_time | DeleteTime | - | 2 | 0 | 文件夹移动到回收站的时间，只有在回收站中，该字段才有意义 | - | R1 |
| 1 | folder_info.total_child_material_num | TotalChildMaterialNum | - | 1 | 12 | 文件夹下素材总数目 | - | R1 |
| 1 | folder_info.folder_attr | Attr | - | 7 | 0 | 文件夹属性，0-文件夹（不限素材类型），1-图片文件夹（只能上传图片），2-视频文件夹（只能上传视频） | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/getFolderInfo?app_key=your_appkey_here&method=material.getFolderInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/getFolderInfo?app_key=your_appkey_here&method=material.getFolderInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialGetFolderInfoRequest request = new MaterialGetFolderInfoRequest();
MaterialGetFolderInfoParam param = request.getParam();
param.setFolderId("70072571115706780601250");
param.setPageNum(1);
param.setPageSize(50);
MaterialGetFolderInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialGetFolderInfoRequest();
$param = new MaterialGetFolderInfoParam();
$request->setParam($param);
$param->folder_id = "70072571115706780601250";
$param->page_num = 1;
$param->page_size = 50;
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialGetFolderInfoRequest()
param = request.getParams()
param.folder_id = "70072571115706780601250"
param.page_num = 1
param.page_size = 50
response = request.execute(accessToken)

```

### go

```go
request := material_getFolderInfo_request.New()
param := request.GetParams()
param.FolderId = "70072571115706780601250"
param.PageNum = 1
param.PageSize = 50
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialGetFolderInfoRequest();
var param = request.BuildParam();
param.FolderId = "70072571115706780601250";
param.PageNum = 1;
param.PageSize = 50;
var response = request.Execute<MaterialGetFolderInfoResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 文件夹ID无效或文件夹已被彻底删除 | 文件夹id不存或已被彻底删除 |
| 40004 | 非法的参数 | isv.parameter-invalid:31002 | 查询数量超出限制，请通过筛选素材名称/状态/日期等缩小范围 | 查询数量超出限制，请通过筛选素材名称/状态/日期等缩小范围 |
| 20000 | 系统错误 | isp.service-error:10004 | 系统异常，请稍后重试 | 重试 |
| 20000 | 系统错误 | isp.service-error:10006 | 系统异常，请稍后重试 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
