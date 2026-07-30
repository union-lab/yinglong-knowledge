# /buyin/instPickSourceConvert

> 中文说明：商品选品来源转链  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1454>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/instPickSourceConvert |
| 中文名称 | 商品选品来源转链 |
| 文档目录 | 精选联盟API |
| Article ID | 1454 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2023/4/23 17:49:01 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

商品选品来源转链

## 权限包

- 精选联盟 / 精选联盟选品GMV（packageType=1）；适用应用类目：撮合服务商、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 联盟选品统计（packageType=1）；适用应用类目：商家商品推广、店铺管理、团长商品推广、团长管理、达人选品、联盟团长自研、联盟机构自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.instPickSourceConvert | 调用的API接口名称 | - | - |
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
| 0 | product_url | product_url | true | 2 | https://haohuo.jinritemai.com/views/product/item2?id=35119804196108 | 商品链接 | - | - |
| 0 | pick_extra | pick_extra | false | 2 | dsds_2ew | 自定义参数（只允许 数字、字母和 _，限制长度为20） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 结果 | - | R1 |
| 1 | data.product_url | product_url | - | 2 | https://haohuo.jinritemai.com/views/product/item2?id=35119804196108&pick_source=R9AhDER | 转链后的商品链接，链接后pick_source参数有效期为3个月 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/instPickSourceConvert?app_key=your_appkey_here&method=buyin.instPickSourceConvert&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/instPickSourceConvert?app_key=your_appkey_here&method=buyin.instPickSourceConvert&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinInstPickSourceConvertRequest request = new BuyinInstPickSourceConvertRequest();
BuyinInstPickSourceConvertParam param = request.getParam();
param.setProductUrl("https://haohuo.jinritemai.com/views/product/item2?id=35119804196108");
param.setPickExtra("dsds_2ew");
BuyinInstPickSourceConvertResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinInstPickSourceConvertRequest();
$param = new BuyinInstPickSourceConvertParam();
$request->setParam($param);
$param->product_url = "https://haohuo.jinritemai.com/views/product/item2?id=35119804196108";
$param->pick_extra = "dsds_2ew";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinInstPickSourceConvertRequest()
param = request.getParams()
param.product_url = "https://haohuo.jinritemai.com/views/product/item2?id=35119804196108"
param.pick_extra = "dsds_2ew"
response = request.execute(accessToken)

```

### go

```go
request := buyin_instPickSourceConvert_request.New()
param := request.GetParams()
param.ProductUrl = "https://haohuo.jinritemai.com/views/product/item2?id=35119804196108"
param.PickExtra = "dsds_2ew"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinInstPickSourceConvertRequest();
var param = request.BuildParam();
param.ProductUrl = "https://haohuo.jinritemai.com/views/product/item2?id=35119804196108";
param.PickExtra = "dsds_2ew";
var response = request.Execute<BuyinInstPickSourceConvertResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:1056 | 无效商品URL | 无效商品URL |
| 40004 | 非法的参数 | isv.parameter-invalid:4133 | 商品没有加入精选联盟 | 商品没有加入精选联盟 |
| 40004 | 非法的参数 | isv.parameter-invalid:4125 | 获取商品信息失败 | 获取商品信息失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
