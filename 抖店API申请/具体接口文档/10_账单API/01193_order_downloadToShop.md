# /order/downloadToShop

> 中文说明：结算账单文件下载-URL方式（境内）  
> 所属类别：账单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/46/1193>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/downloadToShop |
| 中文名称 | 结算账单文件下载-URL方式（境内） |
| 文档目录 | 账单API |
| Article ID | 1193 |
| 文档版本 | V2.09 |
| 官方更新时间 | 2022/9/28 21:41:11 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

1、通过【/order/downloadSettleItemToShop】接口返回的download_id。调用接口生成文件下载的URL链接时效为1小时，失效后需重新调此接口获取新的链接。
2、如需非url下载方式请调用【/order/getSettleBillDetailV3】

## 权限包

- 账单 / 账单明细查询（packageType=1）；适用应用类目：创新应用大赛_软件服务、商家后台系统、即时零售ERP、即时零售商家自研、电商ERP
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | order.downloadToShop | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为'md5'）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | download_id | download_id | true | 2 | DL202108191056192174226975 | 生成的download_id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | code | code | - | 2 | 100000 | 状态码    100000-成功   100002-下载记录不存在   100015-文件还未生成   100016-文件已经失效   100025-文件生成失败 | - | R1 |
| 0 | code_msg | code_msg | - | 2 | success | 状态说明 | - | R1 |
| 0 | url | url | - | 2 | https://lf6-tos-bill-center-sign.bytetos.com/ecom-paysettleinfo/data/download/item/DL202108191056192174226975.csv?x-expires=1629345425&x-signature=iaiLmiwJbc%2FMNKFrS6RaHzbdNwU%3D | 生成的下载链接，URL链接时效为1小时，失效后需重新调此接口获取新的链接。 | - | R1 |

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
OrderDownloadToShopRequest request = new OrderDownloadToShopRequest();
OrderDownloadToShopParam param = request.getParam();
param.setDownloadId("DL202108191056192174226975");
OrderDownloadToShopResponse response = request.execute(accessToken);

```

### php

```php
$request = new OrderDownloadToShopRequest();
$param = new OrderDownloadToShopParam();
$request->setParam($param);
$param->download_id = "DL202108191056192174226975";
$response = $request->execute(accessToken);

```

### python

```python
request = OrderDownloadToShopRequest()
param = request.getParams()
param.download_id = "DL202108191056192174226975"
response = request.execute(accessToken)

```

### go

```go
request := order_downloadToShop_request.New()
param := request.GetParams()
param.DownloadId = "DL202108191056192174226975"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OrderDownloadToShopRequest();
var param = request.BuildParam();
param.DownloadId = "DL202108191056192174226975";
var response = request.Execute<OrderDownloadToShopResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:100015 | 100015:文件还未生成成功 | 100015:文件还未生成成功 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
