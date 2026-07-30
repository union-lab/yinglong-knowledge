# /second/videoTop/mainPicVideo

> 中文说明：获取主图视频榜单接口  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7931>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/videoTop/mainPicVideo |
| 中文名称 | 获取主图视频榜单接口 |
| 文档目录 | 短视频API |
| Article ID | 7931 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/1/28 15:31:53 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20 |

## 使用说明

通过token以及各种条件获取对应的主图视频榜单，接口明细参考https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.videoTop/mainPicVideo | 调用的API接口名称 | - | - |
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
| 0 | sort | sort | false | 5 | - | 排序条件 | - | - |
| 1 | sort.field | field | false | 2 | prod_show_uv_30d | 排序字段，可使用字段参考https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh | - | - |
| 1 | sort.order | order | false | 2 | desc | 排序方式 asc - 升序， desc - 降序 | - | - |
| 0 | likes | likes | false | 3 | - | 搜索条件 | - | - |
| 1 | likes.like_value | like_value | false | 2 | 太阳 | 搜索方式 | - | - |
| 1 | likes.field | field | false | 2 | prod_name | 搜索字段，使用方式参考https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh | - | - |
| 0 | page | page | false | 99 | 1 | 页码 | - | - |
| 0 | page_size | page_size | false | 99 | 20 | 条数 | - | - |
| 0 | filters | filters | false | 3 | - | 过滤条件 | - | - |
| 1 | filters.option | option | false | 2 | >300 | 过滤方式，使用方式参考https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh | - | - |
| 1 | filters.field | field | false | 2 | prod_show_pv_30d | 过滤字段，可使用字段参考https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 返回值 | - | R1 |
| 1 | data.page | page | - | 99 | 1 | 页码 | - | - |
| 1 | data.page_size | page_size | - | 99 | 20 | 页码条数 | - | - |
| 1 | data.records | records | - | 3 | - | 主图视频列表 | - | R1 |
| 2 | data.records.id | id | - | 99 | 1 | 唯一id | - | - |
| 2 | data.records.prod_desc_backup | prod_desc_backup | - | 2 | xxxxxx | 商品描述 | - | - |
| 2 | data.records.screenshot | screenshot | - | 2 | xxxxx | 截图 | - | - |
| 2 | data.records.prod_name | prod_name | - | 2 | xxxx | 商品名称 | - | - |
| 2 | data.records.prod_id | prod_id | - | 99 | 1234565 | 商品id | - | - |
| 2 | data.records.shop_name | shop_name | - | 2 | xxxx | 店铺名 | - | - |
| 2 | data.records.prod_main_img | prod_main_img | - | 2 | xxxx | 商品主图 | - | - |
| 2 | data.records.prod_url | prod_url | - | 2 | xxx | 商品链接 | - | - |
| 1 | data.total | total | - | 99 | 20 | 总条数 | - | - |
| 0 | msg | msg | - | 2 | xxxxx | 返回消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/videoTop/mainPicVideo?app_key=your_appkey_here&method=second.videoTop.mainPicVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/videoTop/mainPicVideo?app_key=your_appkey_here&method=second.videoTop.mainPicVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondVideoTopMainPicVideoRequest request = new SecondVideoTopMainPicVideoRequest();
SecondVideoTopMainPicVideoParam param = request.getParam();
param.setPage(1);
param.setPageSize(20);
SecondVideoTopMainPicVideoResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondVideoTopMainPicVideoRequest();
$param = new SecondVideoTopMainPicVideoParam();
$request->setParam($param);
$param->page = 1;
$param->page_size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = SecondVideoTopMainPicVideoRequest()
param = request.getParams()
param.page = 1
param.page_size = 20
response = request.execute(accessToken)

```

### go

```go
request := second_videoTop_mainPicVideo_request.New()
param := request.GetParams()
param.Page = 1
param.PageSize = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondVideoTopMainPicVideoRequest();
var param = request.BuildParam();
param.Page = 1;
param.PageSize = 20;
var response = request.Execute<SecondVideoTopMainPicVideoResponse>(accessToken);

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
