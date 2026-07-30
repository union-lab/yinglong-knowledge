# /microapp/generateCombination

> 中文说明：生成组合购  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2787>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /microapp/generateCombination |
| 中文名称 | 生成组合购 |
| 文档目录 | 商品API |
| Article ID | 2787 |
| 文档版本 | V1.02 |
| 官方更新时间 | 2022/12/12 19:23:08 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

生成组合购，返回最终链接

## 权限包

- 微应用 / 组合购-微应用（packageType=1）；适用应用类目：创新应用大赛_微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | microapp.generateCombination | 调用的API接口名称 | - | - |
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
| 0 | title | title | true | 2 | 组合购标题 | 当前生成组合购的标题，长度为6-10个字符 | - | - |
| 0 | creator | creatorId | true | 1 | 11111 | 操作者账号id，飞鸽客服场景下即飞鸽客服id | - | - |
| 0 | comment | comment | false | 2 | 这是商品组合购 | 卖家留言，用于展示在C端组件首页上 | - | - |
| 0 | items | items | false | 3 | - | 商品信息 | - | - |
| 1 | items.product_id | productId | true | 2 | 11 | 商品id | - | - |
| 1 | items.sku_id | comboId | true | 2 | 11 | sku id | - | - |
| 1 | items.sku_num | comboNum | true | 1 | 1 | sku数量 | - | - |
| 1 | items.price | price | false | 2 | 111 | 价格 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | combo_link | comboLink | - | 2 | https://v.douyin.com/dfadfsd | 生成的组合购短链接 | - | R1 |
| 0 | biz_error | BizError | - | 5 | - | 返回错误 | - | R1 |
| 1 | biz_error.code | code | - | 7 | 0 | 错误码 | - | R1 |
| 1 | biz_error.message | message | - | 2 | 请求成功 | 错误信息 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/coupons/syncV2?app_key=your_appkey_here&method=coupons.syncV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/coupons/syncV2?app_key=your_appkey_here&method=coupons.syncV2&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
MicroappGenerateCombinationRequest request = new MicroappGenerateCombinationRequest();
MicroappGenerateCombinationParam param = request.getParam();
param.setTitle("组合购标题");
param.setCreator(11111L);
param.setComment("这是商品组合购");
MicroappGenerateCombinationResponse response = request.execute(accessToken);

```

### php

```php
$request = new MicroappGenerateCombinationRequest();
$param = new MicroappGenerateCombinationParam();
$request->setParam($param);
$param->title = "组合购标题";
$param->creator = 11111;
$param->comment = "这是商品组合购";
$response = $request->execute(accessToken);

```

### python

```python
request = MicroappGenerateCombinationRequest()
param = request.getParams()
param.title = "组合购标题"
param.creator = 11111
param.comment = "这是商品组合购"
response = request.execute(accessToken)

```

### go

```go
request := microapp_generateCombination_request.New()
param := request.GetParams()
param.Title = "组合购标题"
param.Creator = 11111
param.Comment = "这是商品组合购"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new MicroappGenerateCombinationRequest();
var param = request.BuildParam();
param.Title = "组合购标题";
param.Creator = 11111;
param.Comment = "这是商品组合购";
var response = request.Execute<MicroappGenerateCombinationResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:10001 | 系统错误 | 系统错误，联系平台 |
| 40004 | 非法的参数 | isv.parameter-invalid:10010 | 参数非法 | 检查参数 |
| 40002 | 缺少必选参数 | isv.missing-parameter:10011 | 参数非法 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:10012 | 业务处理失败 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:10013 | 业务处理失败 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:搭配名称不能超过10个字符 | 检查搭配名称参数，6-10个字符之间 |
| 50002 | 业务处理失败 | isv.business-failed:10014 | 10014:商品数量不能为空 | 搭配商品数量不能为空 |
| 50002 | 业务处理失败 | isv.business-failed:2010013 | 2010013:获取商品信息失败 | 校验商品信息状态 |
| 50002 | 业务处理失败 | isv.business-failed:10015 | 10015:商品Sku非法 | 检查商品sku信息 |
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:系统异常,请重试 | 2010001:系统异常,请重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
