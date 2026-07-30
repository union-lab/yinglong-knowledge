# /material/createFolder

> 中文说明：创建文件夹  
> 所属类别：素材中心API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/69/946>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /material/createFolder |
| 中文名称 | 创建文件夹 |
| 文档目录 | 素材中心API |
| Article ID | 946 |
| 文档版本 | V4.03 |
| 官方更新时间 | 2024/6/12 11:08:59 |
| 授权主体 | ["店铺","供应商","小程序"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 60 |

## 使用说明

创建文件夹。
创建文件夹存在如下的限制：
1. 文件夹名称最多20个字符
2. 每个文件夹下最多包含100个子文件夹
3. 文件夹的最大层级为10层
4. 一个父文件夹下的子文件夹不允许重名
5. 累计创建的文件夹数量不能超过10万

## 权限包

- 商品 / 素材中心编辑（packageType=1）；适用应用类目：微应用-标题优化、选品铺货-微应用、创新应用大赛_微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、创新应用大赛_软件服务、搭配购-微应用、微应用-商详海报、教育服务、分销品工具-供应商、订单处理-供应商、供销平台-供应商自研、商家后台系统、即时零售商品服务、微应用-主图视频、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、AIGC视频洞察、即时零售商家自研、直播间AI导购、直播间导购-微应用、盲盒互动、商品供应链、商品优化分析、电商ERP、商品基础工具、AI 商品运营
- 创新应用 / 素材(创新应用)（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | material.createFolder | 调用的API接口名称 | - | - |
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
| 0 | name | Name | true | 2 | 商品图片素材 | 文件夹名称。最多20字符 | - | - |
| 0 | parent_folder_id | ParentFolderId | false | 2 | 70036799713989921721250 | 父文件夹id，根目录为0。不传该参数默认在根目录下创建文件夹 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | folder_id | FolderId | - | 2 | 7000254886243811628 | 文件夹id，全局唯一 | - | R1 |
| 0 | parent_folder_id | ParentFolderId | - | 2 | 7000254886243746092 | 父文件夹id，全局唯一 | - | R1 |
| 0 | name | Name | - | 2 | 商品图片素材 | 文件夹名称 | - | R1 |
| 0 | type | Type | - | 99 | 1 | 文件夹类型。0-用户自建 1-默认 2-系统文件夹 | - | R1 |
| 0 | is_new | IsNew | - | 4 | true | 判断文件夹是否为新创建的；<br>若父文件夹下存在同名文件夹，创建时返回该同名文件夹id，is_new为false；<br>若不存在同名文件夹且创建成功，则is_new为true，表示为新创建的文件夹。 | - | - |

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
MaterialCreateFolderRequest request = new MaterialCreateFolderRequest();
MaterialCreateFolderParam param = request.getParam();
param.setName("商品图片素材");
param.setParentFolderId("70036799713989921721250");
MaterialCreateFolderResponse response = request.execute(accessToken);

```

### php

```php
$request = new MaterialCreateFolderRequest();
$param = new MaterialCreateFolderParam();
$request->setParam($param);
$param->name = "商品图片素材";
$param->parent_folder_id = "70036799713989921721250";
$response = $request->execute(accessToken);

```

### python

```python
request = MaterialCreateFolderRequest()
param = request.getParams()
param.name = "商品图片素材"
param.parent_folder_id = "70036799713989921721250"
response = request.execute(accessToken)

```

### go

```go
request := material_createFolder_request.New()
param := request.GetParams()
param.Name = "商品图片素材"
param.ParentFolderId = "70036799713989921721250"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MaterialCreateFolderRequest();
var param = request.BuildParam();
param.Name = "商品图片素材";
param.ParentFolderId = "70036799713989921721250";
var response = request.Execute<MaterialCreateFolderResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:20001 | 参数错误，请调整参数 | 参数不正确，调整参数 |
| 20000 | 系统错误 | isp.service-error:10004 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:21001 | 同一父文件夹下，最多有100个子文件夹 | 同一父文件夹下，最多有100个子文件夹 |
| 40004 | 非法的参数 | isv.parameter-invalid:21007 | 待创建的文件夹属性和父级文件夹属性不一致 | 图片文件夹只能存文件，视频文件夹只能存视频 |
| 20000 | 系统错误 | isp.service-error:10003 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:21002 | 文件夹层数超出最大限制 | 文件夹层数超出最大限制 |
| 50002 | 业务处理失败 | isv.business-failed:30003 | 素材中心尚未初始化，请联系客服或稍后重试 | 素材中心尚未初始化，请联系客服或稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:30004 | 30004:仅支持正常运营的商家创建素材/文件夹 | 30004:仅支持正常运营的商家创建素材/文件夹 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
