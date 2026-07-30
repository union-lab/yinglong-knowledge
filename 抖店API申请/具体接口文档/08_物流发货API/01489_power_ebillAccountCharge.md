# /power/ebillAccountCharge

> 中文说明：面单余额充值/撤销（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1489>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/ebillAccountCharge |
| 中文名称 | 面单余额充值/撤销（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1489 |
| 文档版本 | V1.04 |
| 官方更新时间 | 2021/11/24 16:56:52 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

商家在网点充值面单余额时，物流商需要通过此接口通过给抖音；

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.ebillAccountCharge | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | access_token | - | true | 2 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | unique_code | uniqueCode | true | 2 | test26 | 唯一编码 | - | - |
| 0 | shop_id_compatible | shopId | true | 2 | 95250 | 商家ID | - | - |
| 0 | net_code | netCode | true | 2 | 3025100 | 网点编码 | - | - |
| 0 | quantity | quantity | true | 7 | 10 | 充值数量 若为正数，代表充值； 若为负数，代表撤销； 若为0，则为非法 | - | - |
| 0 | product_type | productType | false | 2 | 000000 | 具有独立库存时，必填 产品类型编码 | - | - |
| 0 | service_code | serviceCode | false | 2 | 000000 | 具有独立库存时，必填 增值服务编码 | - | - |
| 0 | recharge_type | rechargeType | true | 2 | 1 | 充值类型（1-业务人工充值/撤回、2-系统自动回收/返还，主要用于1.0切换到2.0版本后，1.0中取走的单号符合回收要求但未给商家返还单量的场景） | - | - |
| 0 | operator_id | operatorId | true | 2 | 0000 | 操作员ID | - | - |
| 0 | operator_name | operatorName | true | 2 | test011203 | 操作员名称 | - | - |
| 0 | op_timestamp | opTimestamp | true | 1 | 1629278247813 | 操作时间戳（毫秒级） | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | reslut | reslut | - | 2 | 空 | 返回结果 | - | R1 |
| 0 | msg | msg | - | 2 | 空 | 返回消息 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/power/ebillAccountCharge?app_key=your_appkey_here&method=power.ebillAccountCharge&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/power/ebillAccountCharge?app_key=your_appkey_here&method=power.ebillAccountCharge&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
PowerEbillAccountChargeRequest request = new PowerEbillAccountChargeRequest();
PowerEbillAccountChargeParam param = request.getParam();
param.setUniqueCode("test26");
param.setShopIdCompatible("95250");
param.setNetCode("3025100");
param.setQuantity(10);
param.setProductType("000000");
param.setServiceCode("000000");
param.setRechargeType("1");
param.setOperatorId("0000");
param.setOperatorName("test011203");
param.setOpTimestamp(1629278247813L);
PowerEbillAccountChargeResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerEbillAccountChargeRequest();
$param = new PowerEbillAccountChargeParam();
$request->setParam($param);
$param->unique_code = "test26";
$param->shop_id_compatible = "95250";
$param->net_code = "3025100";
$param->quantity = 10;
$param->product_type = "000000";
$param->service_code = "000000";
$param->recharge_type = "1";
$param->operator_id = "0000";
$param->operator_name = "test011203";
$param->op_timestamp = 1629278247813;
$response = $request->execute(accessToken);

```

### python

```python
request = PowerEbillAccountChargeRequest()
param = request.getParams()
param.unique_code = "test26"
param.shop_id_compatible = "95250"
param.net_code = "3025100"
param.quantity = 10
param.product_type = "000000"
param.service_code = "000000"
param.recharge_type = "1"
param.operator_id = "0000"
param.operator_name = "test011203"
param.op_timestamp = 1629278247813
response = request.execute(accessToken)

```

### go

```go
request := power_ebillAccountCharge_request.New()
param := request.GetParams()
param.UniqueCode = "test26"
param.ShopIdCompatible = "95250"
param.NetCode = "3025100"
param.Quantity = 10
param.ProductType = "000000"
param.ServiceCode = "000000"
param.RechargeType = "1"
param.OperatorId = "0000"
param.OperatorName = "test011203"
param.OpTimestamp = 1629278247813
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerEbillAccountChargeRequest();
var param = request.BuildParam();
param.UniqueCode = "test26";
param.ShopIdCompatible = "95250";
param.NetCode = "3025100";
param.Quantity = 10;
param.ProductType = "000000";
param.ServiceCode = "000000";
param.RechargeType = "1";
param.OperatorId = "0000";
param.OperatorName = "test011203";
param.OpTimestamp = 1629278247813;
var response = request.Execute<PowerEbillAccountChargeResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:14025 | 14025:撤销数量不能大于库存数量 | 请检查请求数量 |
| 50002 | 业务处理失败 | isv.business-failed:14023 | 14023:电子面单账户不存在, 请申请开通 | 请先申请电子面单账户 |
| 50002 | 业务处理失败 | isv.business-failed:11201 | 11201:uniqueCode重复 | 请检查uniqueCode |
| 50002 | 业务处理失败 | isv.business-failed:14039 | 14039:超过扣减库存最大重试次数 | 请检查库存数 |
| 50002 | 业务处理失败 | isv.business-failed:14037 | 14037:Redis操作异常 | 请重试 |
| 50002 | 业务处理失败 | isv.business-failed:4006 | 4006:充值数量不能为0 | 4006:充值数量不能为0 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
