# /trade/TopSearchQueryFilter

> 中文说明：商品标题热搜词推荐过滤  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2710>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /trade/TopSearchQueryFilter |
| 中文名称 | 商品标题热搜词推荐过滤 |
| 文档目录 | 商品API |
| Article ID | 2710 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/11/3 21:22:14 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

商家编辑商品时，根据商家自填的标题、属性、商详等信息，对TopSearchQueryPredict接口生成的推荐词进行过滤和新增，避免推荐词与已有标题重复、与自填属性冲突等问题。

## 权限包

- 商品 / 商品标题热词（packageType=1）；适用应用类目：创新应用大赛_微应用、直播间AI导购、直播间导购-微应用、AI 商品运营
- 创新应用 / 商品优化（创新应用）（packageType=1）；适用应用类目：创新应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | trade.TopSearchQueryFilter | 调用的API接口名称 | - | - |
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
| 0 | query | query | true | 3 | ['面霜', '晚霜', '舒缓', '活颜', '日霜', '紧致', '卸妆膏', '修复', '清洁', '眼霜', '保湿', '臻颜', '补水', '修护霜', '护肤', '深层', '滋养霜', '经典'] | 根据TopSearchQueryPredict接口获取推荐热搜词列表 | - | - |
| 0 | category_id | category_id | true | 1 | 27021 | 叶子类目ID | - | - |
| 0 | title | title | true | 2 | 'HR/赫莲娜白绷带面霜小样5ml' | 标题名称 | - | - |
| 0 | attr | attr | true | 8 | - | key:自填属性项ID, value:自填属性值列表 | - | - |
| 1 | attr.value | value | true | 1 | 341 | 自填属性值ID | - | - |
| 1 | attr.name | name | true | 2 | '修护' | 自填属性值名称 | - | - |
| 1 | attr.diy_type | diy_type | true | 1 | 0 | 自填属性值类型 | - | - |
| 0 | ocr_text | ocr_text | true | 3 | ['樱桃小丸子', 'BEDDYBEAR', 'IBI MARUKO CHAN'] | 商详图抽取OCR文字列表 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | result | result | - | 3 | ['晚霜', '舒缓', '活颜', '日霜', '紧致', '卸妆膏', '修复', '清洁', '眼霜', '保湿', '臻颜', '补水', '修护霜', '护肤', '深层', '滋养霜', '经典'] | 过滤后热搜词结果 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/trade/TopSearchQueryFilter?app_key=your_appkey_here&method=trade.TopSearchQueryFilter&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/trade/TopSearchQueryFilter?app_key=your_appkey_here&method=trade.TopSearchQueryFilter&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
TradeTopSearchQueryFilterRequest request = new TradeTopSearchQueryFilterRequest();
TradeTopSearchQueryFilterParam param = request.getParam();
param.setQuery(['面霜', '晚霜', '舒缓', '活颜', '日霜', '紧致', '卸妆膏', '修复', '清洁', '眼霜', '保湿', '臻颜', '补水', '修护霜', '护肤', '深层', '滋养霜', '经典']);
param.setCategoryId(27021L);
param.setTitle("'HR/赫莲娜白绷带面霜小样5ml'");
param.setOcrText(['樱桃小丸子', 'BEDDYBEAR', 'IBI MARUKO CHAN']);
TradeTopSearchQueryFilterResponse response = request.execute(accessToken);

```

### php

```php
$request = new TradeTopSearchQueryFilterRequest();
$param = new TradeTopSearchQueryFilterParam();
$request->setParam($param);
$param->query = ['面霜', '晚霜', '舒缓', '活颜', '日霜', '紧致', '卸妆膏', '修复', '清洁', '眼霜', '保湿', '臻颜', '补水', '修护霜', '护肤', '深层', '滋养霜', '经典'];
$param->category_id = 27021;
$param->title = "'HR/赫莲娜白绷带面霜小样5ml'";
$param->ocr_text = ['樱桃小丸子', 'BEDDYBEAR', 'IBI MARUKO CHAN'];
$response = $request->execute(accessToken);

```

### python

```python
request = TradeTopSearchQueryFilterRequest()
param = request.getParams()
param.query = ['面霜', '晚霜', '舒缓', '活颜', '日霜', '紧致', '卸妆膏', '修复', '清洁', '眼霜', '保湿', '臻颜', '补水', '修护霜', '护肤', '深层', '滋养霜', '经典']
param.category_id = 27021
param.title = "'HR/赫莲娜白绷带面霜小样5ml'"
param.ocr_text = ['樱桃小丸子', 'BEDDYBEAR', 'IBI MARUKO CHAN']
response = request.execute(accessToken)

```

### go

```go
request := trade_TopSearchQueryFilter_request.New()
param := request.GetParams()
param.Query = ['面霜', '晚霜', '舒缓', '活颜', '日霜', '紧致', '卸妆膏', '修复', '清洁', '眼霜', '保湿', '臻颜', '补水', '修护霜', '护肤', '深层', '滋养霜', '经典']
param.CategoryId = 27021
param.Title = "'HR/赫莲娜白绷带面霜小样5ml'"
param.OcrText = ['樱桃小丸子', 'BEDDYBEAR', 'IBI MARUKO CHAN']
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new TradeTopSearchQueryFilterRequest();
var param = request.BuildParam();
param.Query = ['面霜', '晚霜', '舒缓', '活颜', '日霜', '紧致', '卸妆膏', '修复', '清洁', '眼霜', '保湿', '臻颜', '补水', '修护霜', '护肤', '深层', '滋养霜', '经典'];
param.CategoryId = 27021;
param.Title = "'HR/赫莲娜白绷带面霜小样5ml'";
param.OcrText = ['樱桃小丸子', 'BEDDYBEAR', 'IBI MARUKO CHAN'];
var response = request.Execute<TradeTopSearchQueryFilterResponse>(accessToken);

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
