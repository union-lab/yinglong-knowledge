# /power/netsiteUpdate

> 中文说明：网点信息更新（仅用于兼容老物流网关）  
> 所属类别：物流发货API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/16/1471>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /power/netsiteUpdate |
| 中文名称 | 网点信息更新（仅用于兼容老物流网关） |
| 文档目录 | 物流发货API |
| Article ID | 1471 |
| 文档版本 | V3.02 |
| 官方更新时间 | 2023/3/20 14:10:26 |
| 授权主体 | ["物流商"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 10000 |

## 使用说明

根据netCode为唯一键新增和更新为同一个接口，不存在则新增否则为更新。
该接口为批量接口， 每次可以同步更新最多100条记录。

## 权限包

- 物流发货 / 物流应用（仅用于兼容老物流网关）（packageType=1）；适用应用类目：物流应用（仅用于兼容老物流网关）
- 物流连接平台 / 电子面单对接（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | power.netsiteUpdate | 调用的API接口名称 | - | - |
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
| 0 | net_sites | netSites | true | 3 | - | 网点信息 | - | - |
| 1 | net_sites.father_net_code | fatherNetCode | - | 2 | 029648 | 父网点编码 | - | - |
| 1 | net_sites.organization_type | organizationType | - | 2 | 承包区 | 组织类型 | - | - |
| 1 | net_sites.company | company | true | 2 | bytedance | 物流公司 | - | - |
| 1 | net_sites.net_name | netName | false | 2 | 八方城 | 网点名称 | - | - |
| 1 | net_sites.net_code | netCode | false | 2 | 200120 | 网点编码 | - | - |
| 1 | net_sites.net_area | netArea | false | 7 | 100 | 网点作业面积 | - | - |
| 1 | net_sites.address | address | false | 5 | - | 网点地址信息 | - | - |
| 2 | net_sites.address.country_code | countryCode | true | 2 | CHN | 国家编码 | - | - |
| 2 | net_sites.address.province_code | provinceCode | false | 2 | 330000 | 省份code，网点查询、更新、停用时code必传，其他接口可不传 | - | - |
| 2 | net_sites.address.province_name | provinceName | true | 2 | 浙江省 | 省份，段码/路由信息相关接口该字段可传入1，表示全国 | - | - |
| 2 | net_sites.address.city_code | cityCode | false | 2 | 330100 | 城市code，网点查询、更新、停用时code必传，其他接口可不传 | - | - |
| 2 | net_sites.address.city_name | cityName | true | 2 | 杭州市 | 城市，段码相关接口需要传空字符串 | - | - |
| 2 | net_sites.address.district_code | districtCode | false | 2 | 330110 | 区县code，网点查询、更新、停用时code必传，其他接口可不传 | - | - |
| 2 | net_sites.address.district_name | districtName | true | 2 | 余杭区 | 区县，段码相关接口需要传空字符串 | - | - |
| 2 | net_sites.address.street_code | streetCode | false | 2 | 330111 | 街道code | - | - |
| 2 | net_sites.address.street_name | streetName | false | 2 | 良渚街道 | 街道，段码相关接口需要传空字符串 | - | - |
| 2 | net_sites.address.detail_address | detailAddress | true | 2 | 良渚路166号 | 详细地址，段码相关接口需要传空字符串 | - | - |
| 2 | net_sites.address.address_id | addressId | false | 1 | 0 | - | - | - |
| 1 | net_sites.contact | contact | false | 5 | - | 网点联系人 | - | - |
| 2 | net_sites.contact.name | name | true | 2 | 张三 | 姓名 | - | - |
| 2 | net_sites.contact.phone | phone | false | 2 | 0571-88888888 | 固定电话 | - | - |
| 2 | net_sites.contact.mobile | mobile | false | 2 | 13282160694 | 手机号 | - | - |
| 2 | net_sites.contact.email | email | false | 2 | zhangsan@163.com | 邮箱 | - | - |
| 1 | net_sites.facility_type | facilityType | false | 7 | 1 | 1-普通网点；2-分拨中心 不传默认是普通网点 | - | - |

## 响应参数

无。

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
PowerNetsiteUpdateRequest request = new PowerNetsiteUpdateRequest();
PowerNetsiteUpdateParam param = request.getParam();
PowerNetsiteUpdateResponse response = request.execute(accessToken);

```

### php

```php
$request = new PowerNetsiteUpdateRequest();
$param = new PowerNetsiteUpdateParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = PowerNetsiteUpdateRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := power_netsiteUpdate_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new PowerNetsiteUpdateRequest();
var param = request.BuildParam();
var response = request.Execute<PowerNetsiteUpdateResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:4006 | 参数错误 | 修正入参 |
| 50002 | 业务处理失败 | isv.business-failed:4009 | 调用物流商超时 | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:4007 | 4007:202022联系人Phone或者Mobile必须有一个 | 4007:202022联系人Phone或者Mobile必须有一个 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
