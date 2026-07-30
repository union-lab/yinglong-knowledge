# /product/isv/batchGetClueSubmitStatus

> 中文说明：批量查询线索的提报状态  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2318>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /product/isv/batchGetClueSubmitStatus |
| 中文名称 | 批量查询线索的提报状态 |
| 文档目录 | 商品API |
| Article ID | 2318 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2022/8/23 20:01:57 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

批量查询线索的提报状态

## 权限包

- 定向API / 定向权限（packageType=1）
- 商品 / 标题优化（packageType=1）；适用应用类目：创新应用大赛_微应用
- 商品 / 机会品线索管理（packageType=1）；适用应用类目：商家后台系统、商品供应链、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | product.isv/batchGetClueSubmitStatus | 调用的API接口名称 | - | - |
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
| 0 | productid_clueid_pair | productid_clueid_pair | true | 3 | - | 线索ID和商品ID | - | - |
| 1 | productid_clueid_pair.clue_id | clue_id | true | 1 | 无 | 线索ID | - | - |
| 1 | productid_clueid_pair.product_id | product_id | true | 1 | 无 | 商品ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 返回数据 | - | R1 |
| 1 | data.clue_id | clue_id | - | 1 | 无需填写 | 线索ID | - | R1 |
| 1 | data.product_id | product_id | - | 1 | 无需填写 | 商品ID | - | R1 |
| 1 | data.audit_status | audit_status | - | 1 | 无需填写 | 状态，-1-提报失败；0-待审核；1-人审通过；2-人审已驳回；3-机审通过；4-机审驳回；5-申诉中 | - | R1 |
| 1 | data.refused_reason | refused_reason | - | 2 | 无需填写 | 审核驳回的理由 | - | R1 |
| 1 | data.submit_id | submit_id | - | 1 | 无需填写 | 提报ID | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/product/isv/batchGetClueSubmitStatus?app_key=your_appkey_here&method=product.isv.batchGetClueSubmitStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/product/isv/batchGetClueSubmitStatus?app_key=your_appkey_here&method=product.isv.batchGetClueSubmitStatus&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
ProductIsvBatchGetClueSubmitStatusRequest request = new ProductIsvBatchGetClueSubmitStatusRequest();
ProductIsvBatchGetClueSubmitStatusParam param = request.getParam();
ProductIsvBatchGetClueSubmitStatusResponse response = request.execute(accessToken);

```

### php

```php
$request = new ProductIsvBatchGetClueSubmitStatusRequest();
$param = new ProductIsvBatchGetClueSubmitStatusParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = ProductIsvBatchGetClueSubmitStatusRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := product_isv_batchGetClueSubmitStatus_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new ProductIsvBatchGetClueSubmitStatusRequest();
var param = request.BuildParam();
var response = request.Execute<ProductIsvBatchGetClueSubmitStatusResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:501 | 批量查询的数据不得超过100 | 批量查询的数据不得超过100 |
| 20000 | 系统错误 | isp.service-error:502 | 系统异常 | 联系管理员 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
