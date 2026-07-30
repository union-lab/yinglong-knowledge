# /material/searchFolder

> 中文说明：搜索文件夹  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/1149>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/searchFolder |
| 中文名称 | 搜索文件夹 |
| 文档目录 | 素材中心API |
| Article ID | 1149 |
| 文档版本 | V5.01 |
| 官方更新时间 | 2022/12/28 16:01:07 |
| 授权主体 | ["店铺","供应商","小程序"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

搜索文件夹，（1）不会返回已经删除的文件夹，（2）如果没有任何搜索条件，即：除page_num、page_size、order_type之外的字段都为空，会返【查询失败，未上传任何查询参数】错误。

## 权限包

- 商品 / 素材中心查询（packageType=1）；适用应用类目：微应用-标题优化、创新应用大赛_微应用、任务玩法、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、短视频工具、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 小程序 / 电商小程序（抖店业务）（packageType=1）；适用应用类目：电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-滋补保健、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-服装鞋包、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.searchFolder | 调用的API接口名称 | - | - |
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
| 0 | order_by | OrderBy | true | 7 | 1 | 排序方式 0-创建时间倒序 1-创建时间正序 2-修改时间倒序 3-修改时间正序 4-文件夹名倒序 5-文件夹名正序 | - | - |
| 0 | page_num | PageNum | true | 7 | 1 | 分页的页数，从1开始 | - | - |
| 0 | page_size | PageSize | true | 7 | 40 | 每页返回的数量。最大为100，默认为50 | - | - |
| 0 | name | Name | false | 2 | 图片 | 需要搜索的文件名片段 | - | - |
| 0 | folder_id | FolderId | false | 2 | "70032596029638413241510" | 文件夹id | - | - |
| 0 | create_time_start | CreateTimeStart | false | 2 | 2020-09-03 18:28:00 | 创建时间最小值，包含这一秒 | - | - |
| 0 | create_time_end | CreateTimeEnd | false | 2 | 2020-09-03 18:28:01 | 创建时间最大值，包含这一秒 | - | - |
| 0 | parent_folder_id | ParentFolderId | false | 2 | "70032596029638413241510" | 父文件夹id | - | - |
| 0 | operate_status | OperateStatus | false | 3 | 1 | 文件夹状态。1-有效 4-在回收站中 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | folder_info_list | FolderInfoList | - | 3 | - | 文件夹列表 | - | R1 |
| 1 | folder_info_list.folder_id | FolderId | - | 2 | "70032596029638413241510" | 文件夹id | - | R1 |
| 1 | folder_info_list.folder_type | FolderType | - | 7 | 0 | 文件夹类型 0-用户创建 1-默认 2-系统文件夹 | - | R1 |
| 1 | folder_info_list.name | Name | - | 2 | 我是文件夹 | 文件夹名称 | - | R1 |
| 1 | folder_info_list.operate_status | OperateStatus | - | 7 | 1 | 文件夹状态。1-有效 4-在回收站中 | - | R1 |
| 1 | folder_info_list.parent_folder_id | ParentFolderId | - | 2 | 70032596029638413241510 | 父文件夹id | - | R1 |
| 1 | folder_info_list.create_time | CreateTime | - | 2 | 2020-09-03 18:28:01 | 文件夹创建时间 | - | R1 |
| 1 | folder_info_list.update_time | UpdateTime | - | 2 | 2020-09-03 18:28:01 | 文件夹最近一次编辑时间 | - | R1 |
| 1 | folder_info_list.delete_time | DeleteTime | - | 2 | 2020-09-03 18:28:01 | 文件夹删除时间。当文件夹在回收站时返回，未删除时为"" | - | R1 |
| 1 | folder_info_list.folder_attr | Attr | - | 2 | 0 | 文件夹属性，0-文件夹（不限素材类型），1-图片文件夹（只能上传图片），2-视频文件夹（只能上传视频） | - | R1 |
| 0 | total | Total | - | 1 | 200 | 符合筛选条件的文件夹数量 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/material/searchFolder?app_key=your_appkey_here&method=material.searchFolder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/material/searchFolder?app_key=your_appkey_here&method=material.searchFolder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MaterialSearchFolderRequest request = new MaterialSearchFolderRequest();
MaterialSearchFolderParam param = request.getParam();
param.setOrderBy(1);
param.setPageNum(1);
param.setPageSize(40);
param.setName("图片");
param.setFolderId("\"70032596029638413241510\"");
param.setCreateTimeStart("2020-09-03 18:28:00");
param.setCreateTimeEnd("2020-09-03 18:28:01");
param.setParentFolderId("\"70032596029638413241510\"");
param.setOperateStatus(1);
MaterialSearchFolderResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialSearchFolderRequest();
$param = new MaterialSearchFolderParam();
$request->setParam($param);
$param->order_by = 1;
$param->page_num = 1;
$param->page_size = 40;
$param->name = "图片";
$param->folder_id = "\"70032596029638413241510\"";
$param->create_time_start = "2020-09-03 18:28:00";
$param->create_time_end = "2020-09-03 18:28:01";
$param->parent_folder_id = "\"70032596029638413241510\"";
$param->operate_status = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialSearchFolderRequest()
param = request.getParams()
param.order_by = 1
param.page_num = 1
param.page_size = 40
param.name = "图片"
param.folder_id = "\"70032596029638413241510\""
param.create_time_start = "2020-09-03 18:28:00"
param.create_time_end = "2020-09-03 18:28:01"
param.parent_folder_id = "\"70032596029638413241510\""
param.operate_status = 1
response = request.execute(accessToken)

```

### go

```go
request := material_searchFolder_request.New()
param := request.GetParams()
param.OrderBy = 1
param.PageNum = 1
param.PageSize = 40
param.Name = "图片"
param.FolderId = "\"70032596029638413241510\""
param.CreateTimeStart = "2020-09-03 18:28:00"
param.CreateTimeEnd = "2020-09-03 18:28:01"
param.ParentFolderId = "\"70032596029638413241510\""
param.OperateStatus = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialSearchFolderRequest();
var param = request.BuildParam();
param.OrderBy = 1;
param.PageNum = 1;
param.PageSize = 40;
param.Name = "图片";
param.FolderId = "\"70032596029638413241510\"";
param.CreateTimeStart = "2020-09-03 18:28:00";
param.CreateTimeEnd = "2020-09-03 18:28:01";
param.ParentFolderId = "\"70032596029638413241510\"";
param.OperateStatus = 1;
var response = request.Execute<MaterialSearchFolderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 文件夹ID无效或文件夹已被彻底删除 | 文件夹不存在的原因有：（1）主从延迟导致；（2）已被删除 |
| 20000 | 系统错误 | isp.service-error:10004 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 20000 | 系统错误 | isp.service-error:10006 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
