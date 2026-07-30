# /buyin/promotionStrategyList

> 中文说明：支持商家通过接口对已经开启推广的商品，查询商品配置的策略  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/5758>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/promotionStrategyList |
| 中文名称 | 支持商家通过接口对已经开启推广的商品，查询商品配置的策略 |
| 文档目录 | 精选联盟API |
| Article ID | 5758 |
| 文档版本 | V1.03 |
| 官方更新时间 | 2023/11/27 14:43:12 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5000 |

## 使用说明

支持商家通过接口对已经开启推广的商品，查询商品配置的策略

## 权限包

- 精选联盟 / 精选联盟商品推广（packageType=1）；适用应用类目：联盟自研、撮合服务商、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 商品 / 渠道商品管理（packageType=1）；适用应用类目：商家后台系统、AI智能客服-微应用、商品优化分析、电商ERP、商品基础工具
- 精选联盟 / 商家联盟推广（packageType=1）；适用应用类目：商家商品推广、店铺管理

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.promotionStrategyList | 调用的API接口名称 | - | - |
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
| 0 | product_id | product_id | false | 2 | 123456789 | 商品ID，和strategy_id二选一传入，不可同时传也不可同时不传。 | - | - |
| 0 | kol_buyin_ids | kol_buyin_ids | false | 3 | 7098765432 | 根据buyin_id搜索 | - | - |
| 0 | status | status | true | 1 | 0 | 状态 0：全部 1：生效中 2：已结束 3：已失效 | - | - |
| 0 | valid_kol_filter | valid_kol_filter | false | 1 | 1 | 生效达人范围 1：全部达人 2：指定达人 3：条件圈选 | - | - |
| 0 | cos_type | cos_type | false | 7 | 1 | 佣金规则 1：固定佣金 2：阶梯佣金 | - | - |
| 0 | end_time_filter | end_time_filter | false | 1 | 1 | 结束时间 1：1天内，2：3天内，3：7天内 | - | - |
| 0 | cos_range_filter | cos_range_filter | false | 5 | - | 佣金率范围 | - | - |
| 1 | cos_range_filter.type | type | true | 1 | 0 | 0：区间；1：大于上限；2：小于下限；3：不限 | - | - |
| 1 | cos_range_filter.low | low | true | 1 | 50 | 20%传20 | - | - |
| 1 | cos_range_filter.up | up | true | 1 | 45 | 20%传20 | - | - |
| 0 | strategy_id | strategy_id | false | 3 | 7654321 | 策略id，和product_id二选一传入，不可同时传也不可同时不传。 | - | - |
| 0 | page | page | true | 1 | 1 | 分页 | - | - |
| 0 | page_size | page_size | true | 1 | 20 | 分页大小 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 3 | - | 策略列表 | - | R1 |
| 1 | data.strategy_id | strategy_id | - | 2 | 7654321 | 策略id | - | - |
| 1 | data.status | status | - | 1 | 1 | 状态 1：生效中 2：已结束 3：已失效 | - | - |
| 1 | data.end_time_tip | end_time_tip | - | 1 | 1 | 结束时间提示 1：1天内，2：3天内，3：7天内 | - | - |
| 1 | data.valid_kol_info | valid_kol_info | - | 5 | - | 生效达人信息 | - | R1 |
| 2 | data.valid_kol_info.valid_kol_range | valid_kol_range | - | 1 | 1 | 生效达人范围 1：全部达人 2：指定达人 3：条件圈选 4：专属指定达人 | - | - |
| 2 | data.valid_kol_info.kol_infos | kol_infos | - | 3 | - | 指定达人列表，只返回三个达人 | - | R1 |
| 3 | data.valid_kol_info.kol_infos.buyin_id | buyin_id | - | 1 | 70987654321 | 百应ID | - | - |
| 3 | data.valid_kol_info.kol_infos.avatar_url | avatar_url | - | 2 | http://alliance.jinritemai.com/ | 达人头像 | - | - |
| 3 | data.valid_kol_info.kol_infos.account_name | account_name | - | 2 | 测试达人 | 达人昵称 | - | - |
| 3 | data.valid_kol_info.kol_infos.add_time | add_time | - | 2 | 2020-05-19 00:00:00 | 添加时间 | - | - |
| 2 | data.valid_kol_info.kol_num | kol_num | - | 1 | 3 | 指定达人数量 | - | - |
| 1 | data.cos_info | cos_info | - | 5 | - | 佣金信息 | - | R1 |
| 2 | data.cos_info.cos_type | cos_type | - | 7 | 1 | 佣金规则 1：固定佣金 2：阶梯佣金 | - | - |
| 2 | data.cos_info.cos_ratio | cos_ratio | - | 5 | - | 生效佣金率 | - | R1 |
| 3 | data.cos_info.cos_ratio.cos_ratio | cos_ratio | - | 1 | 30 | 佣金率 如果是阶梯佣金 存第一阶梯的佣金率 | - | - |
| 3 | data.cos_info.cos_ratio.ladder_bar | ladder_bar | - | 1 | 30 | 阶梯佣金率门槛 非阶梯为0 | - | - |
| 3 | data.cos_info.cos_ratio.ladder_cos_ratio | ladder_cos_ratio | - | 1 | 60 | 阶梯佣金率 非阶梯为0 | - | - |
| 2 | data.cos_info.cos_ratio_sug | cos_ratio_sug | - | 2 | 60 | 商品建议佣金率 | - | - |
| 2 | data.cos_info.similar_prd_count | similar_prd_count | - | 2 | 5 | 同叶子类目同品牌等级商品个数 | - | - |
| 2 | data.cos_info.feature_cos_ratio | feature_cos_ratio | - | 5 | - | 修改佣金率未来佣金率 | - | R1 |
| 3 | data.cos_info.feature_cos_ratio.cos_ratio | cos_ratio | - | 1 | 39 | 佣金率 如果是阶梯佣金 存第一阶梯的佣金率 | - | - |
| 3 | data.cos_info.feature_cos_ratio.ladder_bar | ladder_bar | - | 1 | 45 | 阶梯佣金率门槛 非阶梯为0 | - | - |
| 3 | data.cos_info.feature_cos_ratio.ladder_cos_ratio | ladder_cos_ratio | - | 1 | 45 | 阶梯佣金率 非阶梯为0 | - | - |
| 2 | data.cos_info.cos_valid_time | cos_valid_time | - | 2 | 2020-05-19 00:00:00 | 修改佣金率未来佣金率生效时间 | - | - |
| 2 | data.cos_info.higer_priority_cos_ratio | higer_priority_cos_ratio | - | 9 | 70 | 更高优佣金率 | - | - |
| 2 | data.cos_info.cos_ratio_level | cos_ratio_level | - | 8 | {"30":5} | 商品佣金率及所处竞争力百分位，key为佣金率 | - | R1 |
| 1 | data.start_time | start_time | - | 2 | 2020-05-19 00:00:00 | 开始时间 2020-05-19 00:00:00 | - | - |
| 1 | data.end_time | end_time | - | 2 | 2020-05-19 00:00:00 | 结束时间 2020-05-19 00:00:00 | - | - |
| 0 | total | total | - | 1 | 30 | 总数 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/yunc/cloudCreateOutboundOrder?app_key=your_appkey_here&method=yunc.cloudCreateOutboundOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/yunc/cloudCreateOutboundOrder?app_key=your_appkey_here&method=yunc.cloudCreateOutboundOrder&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinPromotionStrategyListRequest request = new BuyinPromotionStrategyListRequest();
BuyinPromotionStrategyListParam param = request.getParam();
param.setProductId("123456789");
param.setKolBuyinIds(7098765432);
param.setStatus(0L);
param.setValidKolFilter(1L);
param.setCosType(1);
param.setEndTimeFilter(1L);
param.setStrategyId(7654321);
param.setPage(1L);
param.setPageSize(20L);
BuyinPromotionStrategyListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinPromotionStrategyListRequest();
$param = new BuyinPromotionStrategyListParam();
$request->setParam($param);
$param->product_id = "123456789";
$param->kol_buyin_ids = 7098765432;
$param->status = 0;
$param->valid_kol_filter = 1;
$param->cos_type = 1;
$param->end_time_filter = 1;
$param->strategy_id = 7654321;
$param->page = 1;
$param->page_size = 20;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinPromotionStrategyListRequest()
param = request.getParams()
param.product_id = "123456789"
param.kol_buyin_ids = 7098765432
param.status = 0
param.valid_kol_filter = 1
param.cos_type = 1
param.end_time_filter = 1
param.strategy_id = 7654321
param.page = 1
param.page_size = 20
response = request.execute(accessToken)

```

### go

```go
request := buyin_promotionStrategyList_request.New()
param := request.GetParams()
param.ProductId = "123456789"
param.KolBuyinIds = 7098765432
param.Status = 0
param.ValidKolFilter = 1
param.CosType = 1
param.EndTimeFilter = 1
param.StrategyId = 7654321
param.Page = 1
param.PageSize = 20
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinPromotionStrategyListRequest();
var param = request.BuildParam();
param.ProductId = "123456789";
param.KolBuyinIds = 7098765432;
param.Status = 0;
param.ValidKolFilter = 1;
param.CosType = 1;
param.EndTimeFilter = 1;
param.StrategyId = 7654321;
param.Page = 1;
param.PageSize = 20;
var response = request.Execute<BuyinPromotionStrategyListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4141 | 无效page | 无效page |
| 40004 | 非法的参数 | isv.parameter-invalid:4372 | 最多支持20个buyinId | 最多支持20个buyinId |
| 40004 | 非法的参数 | isv.parameter-invalid:4173 | 无效百应ID | 无效百应ID |
| 50002 | 业务处理失败 | isv.business-failed:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 50002 | 业务处理失败 | isv.business-failed:-4100 | -4100:商品不属于该店铺 | -4100:商品不属于该店铺 |
| 50002 | 业务处理失败 | isv.business-failed:-4102 | -4102:商品无推广 | -4102:商品无推广 |
| 50002 | 业务处理失败 | isv.business-failed:-1 | -1:参数错误 | -1:参数错误 |
| 50002 | 业务处理失败 | isv.business-failed:-1025 | -1025:服务打瞌睡了 | -1025:服务打瞌睡了 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
