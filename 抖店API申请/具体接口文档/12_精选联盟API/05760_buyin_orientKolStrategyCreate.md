# /buyin/orientKolStrategyCreate

> 中文说明：指定达人策略创建  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/5760>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/orientKolStrategyCreate |
| 中文名称 | 指定达人策略创建 |
| 文档目录 | 精选联盟API |
| Article ID | 5760 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/11/27 14:59:08 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 30 |

## 使用说明

支持商家通过接口对已经开启推广的商品，设置定向达人生效的策略，同时设置佣金率

## 权限包

- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理
- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.orientKolStrategyCreate | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | true | 1 | 12345678 | 商品id | - | - |
| 0 | kol_buyin_ids | kol_buyin_ids | true | 3 | 7012123456 | 达人百应ID | - | - |
| 0 | cos_ratio_type | CosRatioType | true | 7 | 1 | 佣金类型：1固定佣金率 2阶梯佣金率 | - | - |
| 0 | cos_ratio | cos_ratio | true | 5 | - | 佣金率 | - | - |
| 1 | cos_ratio.cos_ratio | cos_ratio | true | 1 | 50 | 佣金率 如果是阶梯佣金 存第一阶梯的佣金率 | - | - |
| 1 | cos_ratio.ladder_bar | ladder_bar | true | 1 | 20 | 阶梯佣金率门槛 非阶梯为0 | - | - |
| 1 | cos_ratio.ladder_cos_ratio | ladder_cos_ratio | true | 1 | 50 | 阶梯佣金率 非阶梯为0 | - | - |
| 0 | long_term | long_term | false | 4 | false | 是否长期有效，和end_time互斥 | - | - |
| 0 | end_time | end_time | false | 2 | 2020-05-19 00:00:00 | 结束时间 例：2020-05-19 00:00:00 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | success | - | 4 | true | 策略是否设置成功; | - | - |
| 0 | strategy_id | strategy_id | - | 1 | 34567541 | 策略ID | - | - |
| 0 | failed | failed | - | 3 | - | 失败的达人维度结果信息 | - | R1 |
| 1 | failed.buyin_id | buyin_id | - | 1 | 70986456432 | 达人百应ID | - | - |
| 1 | failed.reason | reason | - | 2 | 达人ID错误 | 失败原因 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/iop/sellerCancleDistribute?app_key=your_appkey_here&method=iop.sellerCancleDistribute&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/iop/sellerCancleDistribute?app_key=your_appkey_here&method=iop.sellerCancleDistribute&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinOrientKolStrategyCreateRequest request = new BuyinOrientKolStrategyCreateRequest();
BuyinOrientKolStrategyCreateParam param = request.getParam();
param.setProductId(12345678L);
param.setKolBuyinIds(7012123456);
param.setCosRatioType(1);
param.setLongTerm(false);
param.setEndTime("2020-05-19 00:00:00");
BuyinOrientKolStrategyCreateResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinOrientKolStrategyCreateRequest();
$param = new BuyinOrientKolStrategyCreateParam();
$request->setParam($param);
$param->product_id = 12345678;
$param->kol_buyin_ids = 7012123456;
$param->cos_ratio_type = 1;
$param->long_term = false;
$param->end_time = "2020-05-19 00:00:00";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinOrientKolStrategyCreateRequest()
param = request.getParams()
param.product_id = 12345678
param.kol_buyin_ids = 7012123456
param.cos_ratio_type = 1
param.long_term = false
param.end_time = "2020-05-19 00:00:00"
response = request.execute(accessToken)

```

### go

```go
request := buyin_orientKolStrategyCreate_request.New()
param := request.GetParams()
param.ProductId = 12345678
param.KolBuyinIds = 7012123456
param.CosRatioType = 1
param.LongTerm = false
param.EndTime = "2020-05-19 00:00:00"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinOrientKolStrategyCreateRequest();
var param = request.BuildParam();
param.ProductId = 12345678;
param.KolBuyinIds = 7012123456;
param.CosRatioType = 1;
param.LongTerm = false;
param.EndTime = "2020-05-19 00:00:00";
var response = request.Execute<BuyinOrientKolStrategyCreateResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4106 | 无效商品ID | 无效商品ID |
| 40004 | 非法的参数 | isv.parameter-invalid:4174 | 无效百应ID | 无效百应ID |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 40004 | 非法的参数 | isv.parameter-invalid:1035 | 参数校验失败：无效结束时间 | 参数校验失败：无效结束时间 |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4133 | 商品没有加入精选联盟 | 商品没有加入精选联盟 |
| 50002 | 业务处理失败 | isv.business-failed:-5155 | -5155:本次创建绑定的达人无电商权限或已被其他策略绑定，策略创建失败 | -5155:本次创建绑定的达人无电商权限或已被其他策略绑定，策略创建失败 |
| 50002 | 业务处理失败 | isv.business-failed:4173 | 4173:无效百应ID | 4173:无效百应ID |
| 50002 | 业务处理失败 | isv.business-failed:-3075 | -3075:策略缺少达人信息 | -3075:策略缺少达人信息 |
| 50002 | 业务处理失败 | isv.business-failed:-4104 | -4104:商品状态异常 | -4104:商品状态异常 |
| 50002 | 业务处理失败 | isv.business-failed:-2050 | -2050:商家店铺权限异常 | -2050:商家店铺权限异常 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
