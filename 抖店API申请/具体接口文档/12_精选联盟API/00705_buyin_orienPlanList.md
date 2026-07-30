# /buyin/orienPlanList

> 中文说明：商品定向计划查询  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/705>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/orienPlanList |
| 中文名称 | 商品定向计划查询 |
| 文档目录 | 精选联盟API |
| Article ID | 705 |
| 文档版本 | V1.06 |
| 官方更新时间 | 2021/8/6 12:04:18 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

商家查看定向计划列表

## 权限包

- 精选联盟 / 精选联盟定向计划（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.orienPlanList | 调用的API接口名称 | - | - |
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
| 0 | page | page | false | 1 | 1 | 分页。最小值取1，最大取100 | - | - |
| 0 | page_size | page_size | false | 1 | 20 | 每页数目。默认20，最大40 | - | - |
| 0 | product_id | product_id | false | 1 | 3482204602722574252 | 按商品ID搜索 | - | - |
| 0 | product_name | product_name | false | 2 | 测试商品 | 按商品名称搜索 | - | - |
| 0 | orien_plan_id | orien_plan_id | false | 2 | 1231 | 定向计划ID | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 1 | 122 | 定向计划总数 | - | R1 |
| 0 | orien_plans | orien_plans | - | 3 | - | 商品定向计划列表 | - | R1 |
| 1 | orien_plans.product_id | product_id | - | 1 | 3482204602722574252 | 商品ID | - | R1 |
| 1 | orien_plans.orien_plans | orien_plans | - | 3 | - | 定向计划列表 | - | R1 |
| 2 | orien_plans.orien_plans.orien_plan_id | orien_plan_id | - | 2 | 111 | 定向计划ID | - | R1 |
| 2 | orien_plans.orien_plans.product_id | product_id | - | 1 | 3482204602722574252 | 商品ID | - | R1 |
| 2 | orien_plans.orien_plans.product_name | product_name | - | 2 | 测试商品 | 商品名称 | - | R1 |
| 2 | orien_plans.orien_plans.cover | cover | - | 2 | https://tosv.boe.byted.org/obj/temai/7e92a281163e33cedef99d8735d1e90bwww828-708 | 封面 | - | R1 |
| 2 | orien_plans.orien_plans.plan_status | plan_status | - | 7 | 2 | 计划状态。1：定向计划投放中；2：定向计划已关闭；3：定向计划关闭中（仍在投放中） | - | R1 |
| 2 | orien_plans.orien_plans.cos_ratio | cos_ratio | - | 9 | 50 | 佣金率X100。值为[0,80]之间的整数 | - | R1 |
| 2 | orien_plans.orien_plans.apply_type | apply_type | - | 7 | 1 | 申请设置。1：不可以申请（默认值）；2：可以申请 | - | R1 |
| 2 | orien_plans.orien_plans.restricted_type | restricted_type | - | 7 | 1 | 限制设置：1：无限制(默认值)；2；有限制 | - | R1 |
| 2 | orien_plans.orien_plans.author_level | author_level | - | 7 | 1 | 作者等级限制。restricted_type = 1 时不生效。0-无限制，3-大于等于level 3，4-大于等于level 4，5-大于等于level 5，6-大于等于level 6 | - | R1 |
| 2 | orien_plans.orien_plans.audit_type | audit_type | - | 7 | 1 | 审核设置。1：申请自动通过，2：申请需要审核 | - | R1 |
| 2 | orien_plans.orien_plans.start_time | start_time | - | 1 | 1625480546 | 定向计划开始时间 | - | R1 |
| 2 | orien_plans.orien_plans.end_time | end_time | - | 1 | 1625480546 | 定向计划过期时间 | - | R1 |
| 2 | orien_plans.orien_plans.create_time | create_time | - | 1 | 1625480546 | 定向计划创建时间 | - | R1 |
| 2 | orien_plans.orien_plans.kol_num | kol_num | - | 1 | 1 | 达人数 | - | R1 |
| 2 | orien_plans.orien_plans.price | price | - | 1 | 120 | 商品价格（单位：分） | - | R1 |
| 2 | orien_plans.orien_plans.new_cos_ratio | new_cos_ratio | - | 9 | 0 | 将要生效的佣金率 | - | R1 |
| 2 | orien_plans.orien_plans.new_cos_ratio_start_time | new_cos_ratio_start_time | - | 1 | 1625480546 | 将要生效佣金率的生效时间 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/orienPlanList?app_key=your_appkey_here&method=buyin.orienPlanList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/orienPlanList?app_key=your_appkey_here&method=buyin.orienPlanList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinOrienPlanListRequest request = new BuyinOrienPlanListRequest();
BuyinOrienPlanListParam param = request.getParam();
param.setPage(1L);
param.setPageSize(20L);
param.setProductId(3482204602722574252L);
param.setProductName("测试商品");
param.setOrienPlanId("1231");
BuyinOrienPlanListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinOrienPlanListRequest();
$param = new BuyinOrienPlanListParam();
$request->setParam($param);
$param->page = 1;
$param->page_size = 20;
$param->product_id = 3482204602722574252;
$param->product_name = "测试商品";
$param->orien_plan_id = "1231";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinOrienPlanListRequest()
param = request.getParams()
param.page = 1
param.page_size = 20
param.product_id = 3482204602722574252
param.product_name = "测试商品"
param.orien_plan_id = "1231"
response = request.execute(accessToken)

```

### go

```go
request := buyin_orienPlanList_request.New()
param := request.GetParams()
param.Page = 1
param.PageSize = 20
param.ProductId = 3482204602722574252
param.ProductName = "测试商品"
param.OrienPlanId = "1231"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinOrienPlanListRequest();
var param = request.BuildParam();
param.Page = 1;
param.PageSize = 20;
param.ProductId = 3482204602722574252;
param.ProductName = "测试商品";
param.OrienPlanId = "1231";
var response = request.Execute<BuyinOrienPlanListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:4102 | 商家已被关闭推广，无法使用平台功能 | 商家已被关闭推广，无法使用平台功能 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍候再试 | 服务打瞌睡了，请稍候再试 |
| 50002 | 业务处理失败 | isv.business-failed:4101 | 4101:商家未同意百应协议 | 4101:商家未同意百应协议 |
| 50002 | 业务处理失败 | isv.business-failed:4096 | 4096:获取店铺ID失败 | 4096:获取店铺ID失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
