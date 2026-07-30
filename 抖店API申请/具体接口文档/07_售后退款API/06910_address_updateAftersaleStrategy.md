# /address/updateAftersaleStrategy

> 中文说明：更新地址策略  
> 所属类别：售后退款API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/17/6910>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /address/updateAftersaleStrategy |
| 中文名称 | 更新地址策略 |
| 文档目录 | 售后退款API |
| Article ID | 6910 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/10/8 11:01:42 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

对已经创建的地址策略更新，包括覆盖全部的策略内容、增加绑定商品、删除绑定商品三种操作。

## 权限包

- 售后 / 售后地址退货策略（packageType=1）；适用应用类目：售后管理、商家后台系统、订单管理、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | address.updateAftersaleStrategy | 调用的API接口名称 | - | - |
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
| 0 | aftersale_strategy | AftersaleStrategy | false | 5 | - | 售后策略; | - | - |
| 1 | aftersale_strategy.strategy_type | StrategyType | false | 99 | 1 | 必传。策略类型。静态策略类型和用户收货地址无关，只是将商品和退货地址绑定，无论消费者收货地址在哪里，该策略绑定的商品全部退往同一地址。动态策略类型绑定的商品可以指定不同的消费者收货区域退往不同的退货地址，比如指定消费者收货地址在北京、天津、河北的订单退往华北仓，指定消费者收货地址在山东、江苏的订单退往华东仓。静态类型策略和动态类型策略都可以绑定多个商品。 | - | - |
| 1 | aftersale_strategy.strategy_id | StrategyId | false | 2 | AFS7418493389946110223 | 必传，策略id，需要更改的策略ID。 | - | - |
| 1 | aftersale_strategy.address | Address | false | 3 | - | 售后策略绑定的地址列表; | - | - |
| 2 | aftersale_strategy.address.city_id | CityId | false | 99 | 110000 | 非必传，消费者收货地址的市ID。如果operation=0，并且是动态退货策略，则必传；如果是operation=0，但是是静态策略，不是必传。 | - | - |
| 2 | aftersale_strategy.address.province_id | ProvinceId | false | 99 | 11 | 非必传，省ID。如果operation=0，并且是动态退货策略，则必传；如果是operation=0，但是是静态策略，不是必传。通过/address/getAreasByProvince获取是ID。 | - | - |
| 2 | aftersale_strategy.address.id | Id | false | 99 | 地址ID | 非必传，地址ID。商家通过抖店后台-订单管理-物流工具-地址库管理或者通过三方服务商平台在抖店后台创建地址生成的ID，可以通过接入/address/list获取商家地址列表。如果是operation=0，则必传。通过/address/provinceList获取。 | - | - |
| 1 | aftersale_strategy.strategy_name | StrategyName | false | 2 | 新的策略名称 | 策略名称，不能超过10个字。 | - | - |
| 1 | aftersale_strategy.to_add_product_id | to_add_product_id | false | 3 | [3709205448604385763] | 需绑定的商品列表 | - | - |
| 1 | aftersale_strategy.to_del_product_id | to_del_product_id | false | 3 | [3709080842971250761] | 需解绑的商品列表 | - | - |
| 0 | operation | Operation | false | 99 | 0 | 操作类型，必传。0-全覆盖地址策略，会用传递过来的请求中的信息覆盖已有的信息；1-只是增加绑定商品；2-只是删除绑定商品。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success_add_product_list | success_add_product_list | - | 3 | ["3709080842971250761"] | 成功添加的商品ID列表; | - | R1 |
| 0 | success_del_product_list | success_del_product_list | - | 3 | ["3709069364713095169"] | 成功删除的商品ID列表; | - | R1 |
| 0 | fail_add_product_list | fail_add_product_list | - | 3 | - | 添加失败的商品ID列表; | - | R1 |
| 1 | fail_add_product_list.product_id | product_id | - | 2 | 3708870048258064673 | 商品ID; | - | - |
| 1 | fail_add_product_list.fail_reason | fail_reason | - | 2 | 系统更新失败 | 失败原因 | - | - |
| 1 | fail_add_product_list.fail_code | fail_code | - | 99 | 10001 | 失败code | - | - |
| 0 | fail_del_product_list | fail_del_product_list | - | 3 | - | 添加失败的商品ID列表; | - | R1 |
| 1 | fail_del_product_list.product_id | product_id | - | 2 | 3709239428372365627 | 商品ID; | - | - |
| 1 | fail_del_product_list.fail_reason | fail_reason | - | 2 | 商品正在审核中，禁止操作 | 失败原因 | - | - |
| 1 | fail_del_product_list.fail_code | fail_code | - | 99 | 10002 | 失败code | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/address/updateAftersaleStrategy?app_key=your_appkey_here&method=address.updateAftersaleStrategy&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/address/updateAftersaleStrategy?app_key=your_appkey_here&method=address.updateAftersaleStrategy&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
AddressUpdateAftersaleStrategyRequest request = new AddressUpdateAftersaleStrategyRequest();
AddressUpdateAftersaleStrategyParam param = request.getParam();
param.setOperation(0);
AddressUpdateAftersaleStrategyResponse response = request.execute(accessToken);

```

### php

```php
$request = new AddressUpdateAftersaleStrategyRequest();
$param = new AddressUpdateAftersaleStrategyParam();
$request->setParam($param);
$param->operation = 0;
$response = $request->execute(accessToken);

```

### python

```python
request = AddressUpdateAftersaleStrategyRequest()
param = request.getParams()
param.operation = 0
response = request.execute(accessToken)

```

### go

```go
request := address_updateAftersaleStrategy_request.New()
param := request.GetParams()
param.Operation = 0
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new AddressUpdateAftersaleStrategyRequest();
var param = request.BuildParam();
param.Operation = 0;
var response = request.Execute<AddressUpdateAftersaleStrategyResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4000 | 请输入正确的参数 | 根据返回的错误信息，调整参数后重试；如果重试无法成功，可以向抖店咨询。 |
| 50002 | 业务处理失败 | isv.business-failed:3000 | 系统繁忙，请稍后重试 | 重试，如果一直报错，可以向抖店寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:3001 | 系统繁忙，请稍后重试 | 重试，如果一直报错，可以向抖店寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:5001 | 系统繁忙，请稍后重试 | 重试，如果一直报错，可以向抖店寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:7000 | 系统繁忙，请稍后重试 | 重试，如果一直报错，可以向抖店寻求帮助。 |
| 50002 | 业务处理失败 | isv.business-failed:100008 | 所选地址信息不完整，请前往「物流-地址库管理」重新编辑地址信息后重试 | 商家在三方平台或者抖店「订单-物流工具-地址库管理」对策略绑定的地址进行编辑修改。 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
