# /second/videoTop/shortVideo

> 中文说明：获取短视频榜单  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7932>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/videoTop/shortVideo |
| 中文名称 | 获取短视频榜单 |
| 文档目录 | 短视频API |
| Article ID | 7932 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2026/1/30 17:03:53 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 20 |

## 使用说明

通过条件以及token获取短视频榜单，https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.videoTop/shortVideo | 调用的API接口名称 | - | - |
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
| 0 | likes | likes | false | 3 | - | 搜索条件 | - | - |
| 1 | likes.like_value | like_value | false | 2 | 太阳 | 搜索方式 | - | - |
| 1 | likes.field | field | false | 2 | video_title | 搜索字段，使用方式参考https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh | - | - |
| 0 | page | page | false | 99 | 1 | 页码 | - | - |
| 0 | page_size | page_size | false | 99 | 20 | 条数 | - | - |
| 0 | filters | filters | false | 3 | - | 过滤条件 | - | - |
| 1 | filters.option | option | false | 2 | <1000 | 过滤方式，使用方式参考https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh | - | - |
| 1 | filters.field | field | false | 2 | vv_pv_7d | 过滤字段，可使用字段参考https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh | - | - |
| 0 | sort | sort | false | 5 | - | 排序条件 | - | - |
| 1 | sort.order | order | false | 2 | desc | 排序方式 asc - 升序， desc - 降序 | - | - |
| 1 | sort.field | field | false | 2 | finish_vv_pv_7d | 排序字段，可使用字段参考https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 数据 | - | R1 |
| 1 | data.total | total | - | 99 | 4 | 返回总条数 | - | - |
| 1 | data.page | page | - | 99 | 1 | 页码 | - | - |
| 1 | data.page_size | page_size | - | 99 | 20 | 条数 | - | - |
| 1 | data.records | records | - | 3 | - | 短视频列表 | - | R1 |
| 2 | data.records.id | id | - | 99 | 1 | 唯一id | - | - |
| 2 | data.records.product_name | product_name | - | 2 | xxxx | 商品名 | - | - |
| 2 | data.records.product_second_cat_name | product_second_cat_name | - | 2 | xxxxx | 商品二级类目 | - | - |
| 2 | data.records.video_url | video_url | - | 2 | xxxx | 视频url | - | - |
| 2 | data.records.video_id | video_id | - | 2 | 123 | 视频id | - | - |
| 2 | data.records.shop_name | shop_name | - | 2 | xxxx | 店铺名 | - | - |
| 2 | data.records.product_first_cat_name | product_first_cat_name | - | 2 | xxxx | 商品一级类目 | - | - |
| 2 | data.records.product_leaf_cat_name | product_leaf_cat_name | - | 2 | xxxx | 商品叶子类目 | - | - |
| 2 | data.records.video_create_date | video_create_date | - | 2 | xxxx | 视频创建日期 | - | - |
| 2 | data.records.video_title | video_title | - | 2 | xxxx | 视频标题 | - | - |
| 2 | data.records.share_cnt_all | share_cnt_all | - | 99 | 123 | 累计分享数 | - | - |
| 2 | data.records.comment_cnt_all | comment_cnt_all | - | 99 | 123 | 累计评论数 | - | - |
| 2 | data.records.favourite_cnt_all | favourite_cnt_all | - | 99 | 123 | 累计收藏数 | - | - |
| 2 | data.records.like_cnt_all | like_cnt_all | - | 99 | 123 | 累计点赞数 | - | - |
| 2 | data.records.video_second_tag_name | video_second_tag_name | - | 2 | xxx | 内容分类1级 | - | - |
| 2 | data.records.video_third_tag_name | video_third_tag_name | - | 2 | xxx | 内容分类2级 | - | - |
| 2 | data.records.video_first_tag_name | video_first_tag_name | - | 2 | xxx | 内容分类3级 | - | - |
| 0 | msg | msg | - | 2 | xxxxx | 消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/videoTop/shortVideo?app_key=your_appkey_here&method=second.videoTop.shortVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/videoTop/shortVideo?app_key=your_appkey_here&method=second.videoTop.shortVideo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondVideoTopShortVideoRequest request = new SecondVideoTopShortVideoRequest();
SecondVideoTopShortVideoParam param = request.getParam();
param.setPage(1);
param.setPageSize(20);
SecondVideoTopShortVideoResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondVideoTopShortVideoRequest();
$param = new SecondVideoTopShortVideoParam();
$request->setParam($param);
$param->page = 1;
$param->page_size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = SecondVideoTopShortVideoRequest()
param = request.getParams()
param.page = 1
param.page_size = 20
response = request.execute(accessToken)

```

### go

```go
request := second_videoTop_shortVideo_request.New()
param := request.GetParams()
param.Page = 1
param.PageSize = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondVideoTopShortVideoRequest();
var param = request.BuildParam();
param.Page = 1;
param.PageSize = 20;
var response = request.Execute<SecondVideoTopShortVideoResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:400 | 400: | 查看具体报错，无法解决可提供logid给对应管理员 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
