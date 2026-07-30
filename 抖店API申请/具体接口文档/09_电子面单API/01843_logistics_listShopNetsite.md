# /logistics/listShopNetsite

> 中文说明：查询商家和物流商的订购关系以及物流单号使用情况  
> 所属类别：电子面单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1262/1843>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /logistics/listShopNetsite |
| 中文名称 | 查询商家和物流商的订购关系以及物流单号使用情况 |
| 文档目录 | 电子面单API |
| Article ID | 1843 |
| 文档版本 | V1.05 |
| 官方更新时间 | 2023/3/20 16:48:17 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1500 |

## 使用说明

本接口可以查询商家和物流商的订购关系以及物流单号使用情况

## 权限包

- 物流发货 / 抖音电子面单（packageType=1）；适用应用类目：打单发货-微应用、创新应用大赛_软件服务、厂商代发、教育服务、订单处理-供应商、仓储管理、供销平台-供应商自研、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | logistics.listShopNetsite | 调用的API接口名称 | - | - |
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
| 0 | logistics_code | company | true | 2 | 111 | 物流服务商编码（想获取全量物流，则传空字符串） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | netsites | netsites | - | 3 | - | 商家已开通的网点列表信息 | - | - |
| 1 | netsites.netsite_code | netSiteCode | - | 2 | 100010 | 网点Code | 71 | R1 |
| 1 | netsites.netsite_name | netSiteName | - | 2 | E世界 | 网点名称 | 71 | R1 |
| 1 | netsites.amount | amount | - | 2 | 1 | 电子面单余额数量，-1表示没有额度限制 | 71 | R1 |
| 1 | netsites.sender_address | senderAddress | - | 3 | - | 寄件人地址 | - | - |
| 2 | netsites.sender_address.province_name | provinceName | - | 2 | 北京 | 省名称 | 33 | R1 |
| 2 | netsites.sender_address.city_name | cityName | - | 2 | 北京市 | 市名称 | 33 | R1 |
| 2 | netsites.sender_address.district_name | districtName | - | 2 | 海淀区 | 区/县名称 | 33 | R1 |
| 2 | netsites.sender_address.street_name | streetName | - | 2 | E世界 | 街道名称 | 33 | R1 |
| 2 | netsites.sender_address.detail_address | detailAddress | - | 2 | E世界 | 剩余详细地址 | 33 | R1 |
| 1 | netsites.allocated_quantity | allocatedQuantity | - | 1 | 1 | 已取单号数量，若业务本身无值，则传-1，前端可展示为“-” | 29 | R1 |
| 1 | netsites.cancelled_quantity | cancelledQuantity | - | 1 | 1 | 已取消单号数量，若业务本身无值，则传-1，前端可展示为“-” | 29 | R1 |
| 1 | netsites.recycled_quantity | recycledQuantity | - | 1 | 1 | 已回收单号数量，若业务本身无值，则传-1，前端可展示为“-” | 29 | R1 |
| 1 | netsites.company | company | - | 2 | zhongtong | 快递公司编码 | 30 | R1 |
| 1 | netsites.company_type | companyType | - | 6 | 1 | 物流服务商业务类型 1：直营  2：加盟 3：落地配 4：直营带网点 | 30 | R1 |
| 0 | logistics_code | company | - | 2 | zhongtong | 快递公司编码 | 30 | R1 |
| 0 | company_type | companyType | - | 6 | 1 | 物流服务商业务类型 1：直营  2：加盟 3：落地配 4：直营带网点 | 30 | R1 |

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
LogisticsListShopNetsiteRequest request = new LogisticsListShopNetsiteRequest();
LogisticsListShopNetsiteParam param = request.getParam();
param.setLogisticsCode("111");
LogisticsListShopNetsiteResponse response = request.execute(accessToken);

```

### php

```php
$request = new LogisticsListShopNetsiteRequest();
$param = new LogisticsListShopNetsiteParam();
$request->setParam($param);
$param->logistics_code = "111";
$response = $request->execute(accessToken);

```

### python

```python
request = LogisticsListShopNetsiteRequest()
param = request.getParams()
param.logistics_code = "111"
response = request.execute(accessToken)

```

### go

```go
request := logistics_listShopNetsite_request.New()
param := request.GetParams()
param.LogisticsCode = "111"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new LogisticsListShopNetsiteRequest();
var param = request.BuildParam();
param.LogisticsCode = "111";
var response = request.Execute<LogisticsListShopNetsiteResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4006 | 4006:店铺ID非法 | 请检查您的店铺id是否正确 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
