# /buyin/distributionRedpackDetailList

> 中文说明：达人抖客红包详情  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/2546>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/distributionRedpackDetailList |
| 中文名称 | 达人抖客红包详情 |
| 文档目录 | 精选联盟API |
| Article ID | 2546 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2025/6/26 10:17:33 |
| 授权主体 | ["机构","抖客"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

该接口用于查询达人抖客红包详情，需要获取抖客授权

## 权限包

- 精选联盟 / 精选联盟活动转链（packageType=1）；适用应用类目：联盟抖客分销
- 精选联盟 / 直播间分销物料（packageType=1）；适用应用类目：创新应用大赛_微应用、联盟抖客分销

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.distributionRedpackDetailList | 调用的API接口名称 | - | - |
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
| 0 | buyin_id | buyin_id | true | 2 | 1234567 | 查询达人的百应ID | - | - |
| 0 | page | page | false | 99 | 1 | 起始值为1，不传默认值为1 | - | - |
| 0 | page_size | page_size | false | 99 | 10 | 最大值20，不传默认值为10 | - | - |
| 0 | redpack_name | redpack_name | false | 2 | 红包 | 红包名称 | - | - |
| 0 | start_date | start_date | false | 2 | 2006-01-02 | 投放开始日期，格式2006-01-02 | - | - |
| 0 | end_date | end_date | false | 2 | 2006-01-02 | 投放结束日期，格式2006-01-02 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | redpack_list | redpack_list | - | 3 | - | 红包信息 | - | R1 |
| 1 | redpack_list.redpack_id | redpack_id | - | 2 | 123456789 | 123456789 | - | R1 |
| 1 | redpack_list.name | name | - | 2 | 红包 | 红包名称 | - | R1 |
| 1 | redpack_list.credit_type | credit_type | - | 99 | 1:固定面额 2:随机面额 | 红包面额类型 | - | R1 |
| 1 | redpack_list.left_amount | left_amount | - | 99 | 1000 | 剩余金额，单位分 | - | R1 |
| 1 | redpack_list.left_num | left_num | - | 99 | 10 | 剩余个数 | - | R1 |
| 1 | redpack_list.start_apply_time | start_apply_time | - | 2 | 2022-09-27 00:00:00 | 领取开始有效时间 | - | R1 |
| 1 | redpack_list.end_apply_time | end_apply_time | - | 2 | 2022-09-27 00:00:00 | 领取结束有效时间 | - | R1 |
| 1 | redpack_list.use_start_time | use_start_time | - | 2 | 2022-09-27 00:00:00 | 用户使用开始有效时间 | - | R1 |
| 1 | redpack_list.use_end_time | use_end_time | - | 2 | 2022-09-27 00:00:00 | 用户使用结束使用有效时间 | - | R1 |
| 1 | redpack_list.status | status | - | 99 | 1 | 1:未生效，待投放；2:生效中；3:已领完；4:已过期 | - | R1 |
| 0 | total | total | - | 99 | 10 | 总数 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/distributionRedpackDetailList?app_key=your_appkey_here&method=buyin.distributionRedpackDetailList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/distributionRedpackDetailList?app_key=your_appkey_here&method=buyin.distributionRedpackDetailList&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinDistributionRedpackDetailListRequest request = new BuyinDistributionRedpackDetailListRequest();
BuyinDistributionRedpackDetailListParam param = request.getParam();
param.setBuyinId("1234567");
param.setPage(1L);
param.setPageSize(10L);
param.setRedpackName("红包");
param.setStartDate("2006-01-02");
param.setEndDate("2006-01-02");
BuyinDistributionRedpackDetailListResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinDistributionRedpackDetailListRequest();
$param = new BuyinDistributionRedpackDetailListParam();
$request->setParam($param);
$param->buyin_id = "1234567";
$param->page = 1;
$param->page_size = 10;
$param->redpack_name = "红包";
$param->start_date = "2006-01-02";
$param->end_date = "2006-01-02";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinDistributionRedpackDetailListRequest()
param = request.getParams()
param.buyin_id = "1234567"
param.page = 1
param.page_size = 10
param.redpack_name = "红包"
param.start_date = "2006-01-02"
param.end_date = "2006-01-02"
response = request.execute(accessToken)

```

### go

```go
request := buyin_distributionRedpackDetailList_request.New()
param := request.GetParams()
param.BuyinId = "1234567"
param.Page = 1
param.PageSize = 10
param.RedpackName = "红包"
param.StartDate = "2006-01-02"
param.EndDate = "2006-01-02"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinDistributionRedpackDetailListRequest();
var param = request.BuildParam();
param.BuyinId = "1234567";
param.Page = 1;
param.PageSize = 10;
param.RedpackName = "红包";
param.StartDate = "2006-01-02";
param.EndDate = "2006-01-02";
var response = request.Execute<BuyinDistributionRedpackDetailListResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4097 | 参数校验失败 | 参数校验失败 |
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4113 | 当前抖客未开通直播间分销业务权限 | 当前抖客未开通直播间分销业务权限 |
| 40004 | 非法的参数 | isv.parameter-invalid:4127 | 参数校验失败: 无效分页大小 | 参数校验失败: 无效分页大小 |
| 40004 | 非法的参数 | isv.parameter-invalid:4296 | 参数校验失败：达人百应id无效 | 参数校验失败：达人百应id无效 |
| 40004 | 非法的参数 | isv.parameter-invalid:4297 | 参数校验失败：日期无效 | 参数校验失败：日期无效 |
| 40004 | 非法的参数 | isv.parameter-invalid:4298 | 红包参数校验失败 | 红包参数校验失败 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
