# /buyin/instituteOrderPick

> 中文说明：选品订单明细查询接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2008>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/instituteOrderPick |
| 中文名称 | 选品订单明细查询接口 |
| 文档目录 | 精选联盟API |
| Article ID | 2008 |
| 文档版本 | V2.03 |
| 官方更新时间 | 2023/3/22 10:53:48 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

接口用于查询机构指定日期的选品（通过抖店开放平台）订单明细信息。注意：不包括抖音应用选品GMV数据

## 权限包

- 精选联盟 / 联盟订单明细查询（packageType=1）；适用应用类目：联盟自研、创新应用大赛_微应用、财务管理、直播话术-微应用、创新应用大赛_软件服务、商家后台系统、直播工具、订单管理、电商ERP
- 精选联盟 / 联盟选品统计（packageType=1）；适用应用类目：商家商品推广、店铺管理、团长商品推广、团长管理、达人选品、联盟团长自研、联盟机构自研
- 教育培训 / 精选联盟（教育培训）（packageType=1）；适用应用类目：教育服务

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.instituteOrderPick | 调用的API接口名称 | - | - |
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
| 0 | size | size | false | 1 | 50 | 每页订单数目，取值区间： [1, 100] | - | - |
| 0 | cursor | cursor | false | 2 | 0 | 下一页索引（第一页传“0”） | - | - |
| 0 | start_time | start_time | false | 2 | 2006-01-02 15:04:05 | 支付时间开始，最早支持2022年01月01日 | - | - |
| 0 | end_time | end_time | false | 2 | 2006-01-02 15:04:05 | 支付时间结束，该时间不能超过start_time+90 | - | - |
| 0 | product_id | product_id | false | 2 | 492904930493023 | 商品ID | - | - |
| 0 | search_type | search_type | false | 1 | 1 | 查询粒度（1-查询当前应用，2-查询应用所属工具服务商，不包括抖音应用选品GMV数据） | - | - |
| 0 | order_ids | order_ids | false | 2 | 4737996432465788974,4737996432465780075 | 订单号。多个订单号用英文 "," 分隔，最多支持100个订单号 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 返回数据 | - | R1 |
| 1 | data.orders | orders | - | 3 | - | 订单列表 | - | R1 |
| 2 | data.orders.order_id | order_id | - | 2 | 54135234523454123 | 订单号 | - | R1 |
| 2 | data.orders.product_id | product_id | - | 2 | 2341821984321 | 商品ID | - | R1 |
| 2 | data.orders.GMV | total_pay_amount | - | 1 | 1000 | GMV | - | R1 |
| 2 | data.orders.estimate_amount | pay_goods_amount | - | 1 | 1000 | 百应订单显示金额，口径是预估结算金额（单位：分） | - | R1 |
| 2 | data.orders.pick_extra | pick_extra | - | 2 | 123_abc | 选品自定义参数 | - | R1 |
| 2 | data.orders.pay_success_time | pay_success_time | - | 2 | 2006-01-02 15:04:05 | 支付时间 | - | R1 |
| 1 | data.cursor | cursor | - | 2 | 43399183422493 | 下一页索引，返回空时结束 | - | R1 |

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
BuyinInstituteOrderPickRequest request = new BuyinInstituteOrderPickRequest();
BuyinInstituteOrderPickParam param = request.getParam();
param.setSize(50L);
param.setCursor("0");
param.setStartTime("2006-01-02 15:04:05");
param.setEndTime("2006-01-02 15:04:05");
param.setProductId("492904930493023");
param.setSearchType(1L);
param.setOrderIds("4737996432465788974,4737996432465780075");
BuyinInstituteOrderPickResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinInstituteOrderPickRequest();
$param = new BuyinInstituteOrderPickParam();
$request->setParam($param);
$param->size = 50;
$param->cursor = "0";
$param->start_time = "2006-01-02 15:04:05";
$param->end_time = "2006-01-02 15:04:05";
$param->product_id = "492904930493023";
$param->search_type = 1;
$param->order_ids = "4737996432465788974,4737996432465780075";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinInstituteOrderPickRequest()
param = request.getParams()
param.size = 50
param.cursor = "0"
param.start_time = "2006-01-02 15:04:05"
param.end_time = "2006-01-02 15:04:05"
param.product_id = "492904930493023"
param.search_type = 1
param.order_ids = "4737996432465788974,4737996432465780075"
response = request.execute(accessToken)

```

### go

```go
request := buyin_instituteOrderPick_request.New()
param := request.GetParams()
param.Size = 50
param.Cursor = "0"
param.StartTime = "2006-01-02 15:04:05"
param.EndTime = "2006-01-02 15:04:05"
param.ProductId = "492904930493023"
param.SearchType = 1
param.OrderIds = "4737996432465788974,4737996432465780075"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinInstituteOrderPickRequest();
var param = request.BuildParam();
param.Size = 50;
param.Cursor = "0";
param.StartTime = "2006-01-02 15:04:05";
param.EndTime = "2006-01-02 15:04:05";
param.ProductId = "492904930493023";
param.SearchType = 1;
param.OrderIds = "4737996432465788974,4737996432465780075";
var response = request.Execute<BuyinInstituteOrderPickResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:1031 | 无效size | 无效size |
| 40004 | 非法的参数 | isv.parameter-invalid:1033 | 请指定时间范围或订单号 | 请指定时间范围或订单号 |
| 40004 | 非法的参数 | isv.parameter-invalid:1034 | 无效开始时间 | 无效开始时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:1035 | 无效结束时间 | 无效结束时间 |
| 40004 | 非法的参数 | isv.parameter-invalid:1036 | 无效时间区间（开始时间不能大于结束时间，并且不能小于t-90d） | 无效时间区间（开始时间不能大于结束时间，并且不能小于t-90d） |
| 40004 | 非法的参数 | isv.parameter-invalid:4168 | 起始查询时间超过了最久查询限制 | 起始查询时间超过了最久查询限制 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:8192 | 未查询到应用对应工具服务商信息，请联系开发者解决 | 未查询到应用对应工具服务商信息，请联系开发者解决 |
| 50002 | 业务处理失败 | isv.business-failed:1032 | 1032:参数校验失败：无效order_ids | 1032:参数校验失败：无效order_ids |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
