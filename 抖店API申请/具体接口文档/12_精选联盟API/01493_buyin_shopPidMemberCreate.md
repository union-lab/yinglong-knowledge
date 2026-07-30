# /buyin/shopPidMemberCreate

> 中文说明：店铺会员绑定渠道关系创建  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1493>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/shopPidMemberCreate |
| 中文名称 | 店铺会员绑定渠道关系创建 |
| 文档目录 | 精选联盟API |
| Article ID | 1493 |
| 文档版本 | V5.01 |
| 官方更新时间 | 2025/6/26 10:19:07 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

本接口服务于商家会员绑定指定人店一体主账号PID，可以通过接口获取所需的二维码和跳转链接

## 权限包

- 精选联盟 / 精选联盟直播间分销会员绑定（packageType=1）；适用应用类目：联盟抖客直播间分销、联盟机构自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.shopPidMemberCreate | 调用的API接口名称 | - | - |
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
| 0 | pid | pid | true | 2 | dy_123_345_456 | 人店一体达人PID | - | - |
| 0 | member_available_time | member_available_time | true | 99 | 365 | 会员绑定有效天数，至少30天 | - | - |
| 0 | external_info | external_info | false | 2 | external_info_test | 自定义字段，只允许 数字、字母和_，限制长度为40 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | qrcode | qrcode | - | 2 | https://p26.douyinpic.com/img/aweme-qrcode/eZlDuG70339820345906863~c5_360x360.webp?from=1723184 | 入会二维码 | - | R1 |
| 0 | member_join_url | member_join_url | - | 2 | https://aweme.snssdk.com/ecom_member/facade_douyin/v1/join_member_link/?sec_shop_uid=MS4wLjABAAAAgRxF3bIh9bhDhDjEeQBkUQpyn-zXyLjZf6bt5y8UW-0Kc8yuRezI&page_from=dy_lm&pid=dy_123_345_456&pid_extra=eyJtZW1iZXJfYXZxhYmxlX3RpbWUiOjfQ&pid_sign=b16b975bab337c552651e35ff97c7b | 入会跳转URL | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/shopPidMemberCreate?app_key=your_appkey_here&method=buyin.shopPidMemberCreate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/shopPidMemberCreate?app_key=your_appkey_here&method=buyin.shopPidMemberCreate&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinShopPidMemberCreateRequest request = new BuyinShopPidMemberCreateRequest();
BuyinShopPidMemberCreateParam param = request.getParam();
param.setPid("dy_123_345_456");
param.setMemberAvailableTime(365L);
param.setExternalInfo("external_info_test");
BuyinShopPidMemberCreateResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinShopPidMemberCreateRequest();
$param = new BuyinShopPidMemberCreateParam();
$request->setParam($param);
$param->pid = "dy_123_345_456";
$param->member_available_time = 365;
$param->external_info = "external_info_test";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinShopPidMemberCreateRequest()
param = request.getParams()
param.pid = "dy_123_345_456"
param.member_available_time = 365
param.external_info = "external_info_test"
response = request.execute(accessToken)

```

### go

```go
request := buyin_shopPidMemberCreate_request.New()
param := request.GetParams()
param.Pid = "dy_123_345_456"
param.MemberAvailableTime = 365
param.ExternalInfo = "external_info_test"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinShopPidMemberCreateRequest();
var param = request.BuildParam();
param.Pid = "dy_123_345_456";
param.MemberAvailableTime = 365;
param.ExternalInfo = "external_info_test";
var response = request.Execute<BuyinShopPidMemberCreateResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4097 | 参数校验失败 | 检查参数是否正确 |
| 40004 | 非法的参数 | isv.parameter-invalid:4103 | 会员绑定有效期必须大于30天 | 检查参数是否正确 |
| 50002 | 业务处理失败 | isv.business-failed:4105 | 当前机构或商家尚未开通分销权限 | 当前机构或商家尚未开通分销权限 |
| 50002 | 业务处理失败 | isv.business-failed:4106 | 当前商家暂未开通会员 | 当前商家暂未开通会员 |
| 50002 | 业务处理失败 | isv.business-failed:255 | 未知错误 | 未知错误 |
| 50002 | 业务处理失败 | isv.business-failed:4107 | 当前商家未绑定人店一体官方账号 | 当前商家未绑定人店一体官方账号 |
| 40004 | 非法的参数 | isv.parameter-invalid:4108 | 当前pid非此店铺绑定官方达人所创建 | 当前pid非此店铺绑定官方达人所创建 |
| 40004 | 非法的参数 | isv.parameter-invalid:4102 | 无效 PID | 参数校验失败：无效 PID |
| 40004 | 非法的参数 | isv.parameter-invalid:4101 | 无效 external_info | 参数校验失败：无效 external_info |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
