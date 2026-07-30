# /buyin/kolStrategyEdit

> 中文说明：策略修改&关闭接口  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/5759>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/kolStrategyEdit |
| 中文名称 | 策略修改&关闭接口 |
| 文档目录 | 精选联盟API |
| Article ID | 5759 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/11/27 14:55:53 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 50 |

## 使用说明

修改全部达人&定向达人策略

## 权限包

- 精选联盟 / 精选联盟商品推广（packageType=1）；适用应用类目：联盟自研、撮合服务商、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具
- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.kolStrategyEdit | 调用的API接口名称 | - | - |
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
| 0 | status | status | true | 1 | 1 | 1:修改 2关闭 3 策略恢复 4:删除 | - | - |
| 0 | strategy_id | strategy_id | true | 2 | 3456782 | 策略ID | - | - |
| 0 | add_buyin_ids | add_buyin_ids | false | 3 | 709876544321 | 需要新增的达人百应账号 | - | - |
| 0 | del_buyin_ids | del_buyin_ids | false | 3 | 9876544321 | 需要删除的达人百应账号 | - | - |
| 0 | end_time | end_time | false | 2 | 2020-05-19 00:00:00 | 结束时间 2020-05-19 00:00:00 | - | - |
| 0 | long_term | long_term | false | 4 | false | 是否长期有效，和end_time互斥；全部达人佣金策略不允许指定该字段 | - | - |
| 0 | cos_ratio | cos_ratio | false | 1 | 50 | 佣金率 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | success | success | - | 4 | true | 请求结果 | - | - |
| 0 | failed | failed | - | 3 | - | 失败的达人维度结果信息 | - | R1 |
| 1 | failed.buyin_id | buyin_id | - | 1 | 70987654321 | 达人百应ID | - | - |
| 1 | failed.reason | reason | - | 2 | 达人账号错误 | 失败原因 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/iop/sellerSupplierList?app_key=your_appkey_here&method=iop.sellerSupplierList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/iop/sellerSupplierList?app_key=your_appkey_here&method=iop.sellerSupplierList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinKolStrategyEditRequest request = new BuyinKolStrategyEditRequest();
BuyinKolStrategyEditParam param = request.getParam();
param.setStatus(1L);
param.setStrategyId("3456782");
param.setAddBuyinIds(709876544321);
param.setDelBuyinIds(9876544321);
param.setEndTime("2020-05-19 00:00:00");
param.setLongTerm(false);
param.setCosRatio(50L);
BuyinKolStrategyEditResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinKolStrategyEditRequest();
$param = new BuyinKolStrategyEditParam();
$request->setParam($param);
$param->status = 1;
$param->strategy_id = "3456782";
$param->add_buyin_ids = 709876544321;
$param->del_buyin_ids = 9876544321;
$param->end_time = "2020-05-19 00:00:00";
$param->long_term = false;
$param->cos_ratio = 50;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinKolStrategyEditRequest()
param = request.getParams()
param.status = 1
param.strategy_id = "3456782"
param.add_buyin_ids = 709876544321
param.del_buyin_ids = 9876544321
param.end_time = "2020-05-19 00:00:00"
param.long_term = false
param.cos_ratio = 50
response = request.execute(accessToken)

```

### go

```go
request := buyin_kolStrategyEdit_request.New()
param := request.GetParams()
param.Status = 1
param.StrategyId = "3456782"
param.AddBuyinIds = 709876544321
param.DelBuyinIds = 9876544321
param.EndTime = "2020-05-19 00:00:00"
param.LongTerm = false
param.CosRatio = 50
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinKolStrategyEditRequest();
var param = request.BuildParam();
param.Status = 1;
param.StrategyId = "3456782";
param.AddBuyinIds = 709876544321;
param.DelBuyinIds = 9876544321;
param.EndTime = "2020-05-19 00:00:00";
param.LongTerm = false;
param.CosRatio = 50;
var response = request.Execute<BuyinKolStrategyEditResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4133 | 策略id参数错误 | 策略id参数错误 |
| 40004 | 非法的参数 | isv.parameter-invalid:4134 | 不支持对该策略进行操作 | 不支持对该策略进行操作 |
| 40004 | 非法的参数 | isv.parameter-invalid:4135 | 该策略只能修改固定佣金 | 该策略只能修改固定佣金 |
| 40004 | 非法的参数 | isv.parameter-invalid:4136 | 结束事件和长期字段只能传一个 | 结束事件和长期字段只能传一个 |
| 40004 | 非法的参数 | isv.parameter-invalid:4137 | 该策略不在生效状态，无需关闭 | 该策略不在生效状态，无需关闭 |
| 40004 | 非法的参数 | isv.parameter-invalid:4138 | 该策略已经生效状态，无需恢复 | 该策略已经生效状态，无需恢复 |
| 40004 | 非法的参数 | isv.parameter-invalid:4139 | 指定达人阶梯佣金，不可关闭 | 指定达人阶梯佣金，不可关闭 |
| 40004 | 非法的参数 | isv.parameter-invalid:4140 | 指定达人阶梯佣金，不可删除达人 | 指定达人阶梯佣金，不可删除达人 |
| 40004 | 非法的参数 | isv.parameter-invalid:4141 | 指定达人阶梯佣金，不可修改佣金率 | 指定达人阶梯佣金，不可修改佣金率 |
| 40004 | 非法的参数 | isv.parameter-invalid:4142 | 指定达人阶梯佣金，不可长期佣金 | 指定达人阶梯佣金，不可长期佣金 |
| 40004 | 非法的参数 | isv.parameter-invalid:4143 | 专属指定达人策略，只允许关闭策略 | 专属指定达人策略，只允许关闭策略 |
| 40004 | 非法的参数 | isv.parameter-invalid:4144 | 该策略在生效状态，无法删除 | 该策略在生效状态，无法删除 |
| 50002 | 业务处理失败 | isv.business-failed:-4104 | -4104:商品状态异常 | -4104:商品状态异常 |
| 50002 | 业务处理失败 | isv.business-failed:-5130 | -5130:已经关闭的策略不能操作 | -5130:已经关闭的策略不能操作 |
| 50002 | 业务处理失败 | isv.business-failed:4384 | 4384:该策略在生效状态，无法删除 | 4384:该策略在生效状态，无法删除 |
| 50002 | 业务处理失败 | isv.business-failed:-5131 | -5131:延迟关闭的策略不能操作 | -5131:延迟关闭的策略不能操作 |
| 50002 | 业务处理失败 | isv.business-failed:-2050 | -2050:商家店铺权限异常 | -2050:商家店铺权限异常 |
| 50002 | 业务处理失败 | isv.business-failed:-1 | -1:参数错误 | -1:参数错误 |
| 50002 | 业务处理失败 | isv.business-failed:4377 | 4377:该策略不在生效状态，无需关闭 | 4377:该策略不在生效状态，无需关闭 |
| 50002 | 业务处理失败 | isv.business-failed:-5133 | -5133:策略已经恢复 | -5133:策略已经恢复 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
