# /product/isv/queryClueAuditStatus

> 中文说明：查询线索提报审核结果  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2148>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/isv/queryClueAuditStatus |
| 中文名称 | 查询线索提报审核结果 |
| 文档目录 | 商品API |
| Article ID | 2148 |
| 文档版本 | V4.01 |
| 官方更新时间 | 2024/4/2 15:42:00 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

查询线索提报审核结果

## 权限包

- 商品 / 机会品线索管理（packageType=1）；适用应用类目：商家后台系统、商品供应链、商品优化分析、电商ERP、商品基础工具
- 商品 / 标题优化（packageType=1）；适用应用类目：创新应用大赛_微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.isv/queryClueAuditStatus | 调用的API接口名称 | - | - |
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
| 0 | clue_id | clue_id | true | 99 | 1 | 线索id | - | - |
| 0 | item_id | item_id | true | 99 | 1 | 商品id | - | - |
| 0 | page | page | true | 5 | - | 分页参数 | - | - |
| 1 | page.current | current | true | 99 | 1 | 页码，从1开始 | - | - |
| 1 | page.page_size | page_size | true | 99 | 10 | 页大小，不要超过500 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 提报记录列表 | - | R1 |
| 1 | data.audit_status | audit_status | - | 99 | 1 | 审核状态：0：待审核，1：人审通过[终态]；2：人审驳回[终态]；3：机审通过[终态]；4：人审待审核；5：申诉中(已下线)；6：机审驳回[终态] | - | - |
| 1 | data.refused_reason | refused_reason | - | 2 | 无 | 拒绝原因 | - | - |
| 1 | data.submit_id | submit_id | - | 99 | 1 | 提报记录id | - | - |
| 1 | data.shop_id | shop_id | - | 99 | 1 | 店铺id | - | - |
| 1 | data.shop_name | shop_name | - | 2 | 1 | 店铺名 | - | - |
| 1 | data.product_id | product_id | - | 99 | 1 | 商品id | - | - |
| 1 | data.product_name | product_name | - | 2 | 长裤 | 商品名 | - | - |
| 1 | data.pic_url | pic_url | - | 2 | http://xxxx.image | 商品图片链接 | - | - |
| 1 | data.submit_time | submit_time | - | 99 | 0 | 提交时间（时间戳(秒)） | - | - |
| 0 | total | total | - | 99 | 10 | 总记录数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/isv/queryClueAuditStatus?app_key=your_appkey_here&method=product.isv.queryClueAuditStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/isv/queryClueAuditStatus?app_key=your_appkey_here&method=product.isv.queryClueAuditStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductIsvQueryClueAuditStatusRequest request = new ProductIsvQueryClueAuditStatusRequest();
ProductIsvQueryClueAuditStatusParam param = request.getParam();
param.setClueId(1L);
param.setItemId(1L);
ProductIsvQueryClueAuditStatusResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductIsvQueryClueAuditStatusRequest();
$param = new ProductIsvQueryClueAuditStatusParam();
$request->setParam($param);
$param->clue_id = 1;
$param->item_id = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = ProductIsvQueryClueAuditStatusRequest()
param = request.getParams()
param.clue_id = 1
param.item_id = 1
response = request.execute(accessToken)

```

### go

```go
request := product_isv_queryClueAuditStatus_request.New()
param := request.GetParams()
param.ClueId = 1
param.ItemId = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductIsvQueryClueAuditStatusRequest();
var param = request.BuildParam();
param.ClueId = 1;
param.ItemId = 1;
var response = request.Execute<ProductIsvQueryClueAuditStatusResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:501 | 提报记录不存在 | 检查参数 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
