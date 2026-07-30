# /sendHome/store/getStoreFence

> 中文说明：到家场景-查询门店配送电子围栏  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/6725>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /sendHome/store/getStoreFence |
| 中文名称 | 到家场景-查询门店配送电子围栏 |
| 文档目录 | 店铺API |
| Article ID | 6725 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2024/7/25 11:25:10 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

到家场景-查询门店配送电子围栏

## 权限包

- 到家开放 / 电子围栏（到家开放）（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | sendHome.store/getStoreFence | 调用的API接口名称 | - | - |
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
| 0 | store_id | store_id | false | 99 | 1138849171 | 门店id,store_id和outer_store_id二选一传输，优先store_id | - | - |
| 0 | outer_store_id | outer_store_id | false | 2 | 123 | 外部门店编码 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | fence_list | fence_list | - | 3 | - | 围栏列表，目前一个门店只会有一个围栏信息，结构保留扩展 | - | R1 |
| 1 | fence_list.fence_info | fence_info | - | 5 | - | 围栏信息 | - | R1 |
| 2 | fence_list.fence_info.shape | shape | - | 99 | 1 | 围栏类型，形状 1. 圆 使用circular 2:多边形，使用polygon 3:带洞多边形（兼容普通多边形），使用polygon_new 4:多个多边形，兼容带洞和不带洞，使用multi_polygons。注:平台会根据围栏数据情况，做类型转换，3有可能转为2，4有可能转为2或3。最终的围栏数据请调用查询门店围栏接口进行确认 | - | - |
| 2 | fence_list.fence_info.circular | circular | - | 5 | - | 1 形状为圆的经纬度信息，对应shape=1 | - | R1 |
| 3 | fence_list.fence_info.circular.center | center | - | 5 | - | 圆的中心经纬度 | - | R1 |
| 4 | fence_list.fence_info.circular.center.latitude | latitude | - | 9 | 30.28 | 纬度，坐标系 gcj02 | - | - |
| 4 | fence_list.fence_info.circular.center.longitude | longitude | - | 9 | 119.99 | 经度，坐标系 gcj02 | - | - |
| 3 | fence_list.fence_info.circular.radius | radius | - | 9 | 30.28 | 半径，单位 米 | - | - |
| 2 | fence_list.fence_info.polygon | polygon | - | 5 | - | 2 单普通多边形 ，对应shape=2, 逆时针 | - | R1 |
| 3 | fence_list.fence_info.polygon.vertices | vertices | - | 3 | - | 多边形顶点的经纬度 | - | R1 |
| 4 | fence_list.fence_info.polygon.vertices.longitude | longitude | - | 9 | 119.99 | 经度，坐标系 gcj02 | - | - |
| 4 | fence_list.fence_info.polygon.vertices.latitude | latitude | - | 9 | 30.28 | 纬度，坐标系 gcj02 | - | - |
| 2 | fence_list.fence_info.polygon_new | polygon_new | - | 5 | - | 3 （带洞）多边形，对应shape=3 | - | R1 |
| 3 | fence_list.fence_info.polygon_new.outer | outer | - | 5 | - | 带洞多边形的外圈数据， 逆时针 | - | R1 |
| 4 | fence_list.fence_info.polygon_new.outer.vertices | vertices | - | 3 | - | 多边形顶点的经纬度 | - | R1 |
| 5 | fence_list.fence_info.polygon_new.outer.vertices.longitude | longitude | - | 9 | 119.99 | 经度，坐标系 gcj02 | - | - |
| 5 | fence_list.fence_info.polygon_new.outer.vertices.latitude | latitude | - | 9 | 30.28 | 纬度，坐标系 gcj02 | - | - |
| 3 | fence_list.fence_info.polygon_new.inner | inner | - | 3 | - | 带洞多边形的内圈数据，可以有多个, 空表示普通多边形, 顺时针 | - | R1 |
| 4 | fence_list.fence_info.polygon_new.inner.vertices | vertices | - | 3 | - | 多边形顶点的经纬度 | - | R1 |
| 5 | fence_list.fence_info.polygon_new.inner.vertices.longitude | longitude | - | 9 | 119.99 | 经度，坐标系 gcj02 | - | - |
| 5 | fence_list.fence_info.polygon_new.inner.vertices.latitude | latitude | - | 9 | 30.28 | 纬度，坐标系 gcj02 | - | - |
| 2 | fence_list.fence_info.multi_polygons | multi_polygons | - | 3 | - | 4 多个(可带洞)多边形组合, 对应shape=4 | - | R1 |
| 3 | fence_list.fence_info.multi_polygons.outer | outer | - | 5 | - | 带洞多边形的外圈数据， 逆时针 | - | R1 |
| 4 | fence_list.fence_info.multi_polygons.outer.vertices | vertices | - | 3 | - | 多边形顶点的经纬度 | - | R1 |
| 5 | fence_list.fence_info.multi_polygons.outer.vertices.longitude | longitude | - | 9 | 119.99 | 经度，坐标系 gcj02 | - | - |
| 5 | fence_list.fence_info.multi_polygons.outer.vertices.latitude | latitude | - | 9 | 30.28 | 纬度，坐标系 gcj02 | - | - |
| 3 | fence_list.fence_info.multi_polygons.inner | inner | - | 3 | - | 带洞多边形的内圈数据，可以有多个, 空表示普通多边形, 顺时针 | - | R1 |
| 4 | fence_list.fence_info.multi_polygons.inner.vertices | vertices | - | 3 | - | 多边形顶点的经纬度 | - | R1 |
| 5 | fence_list.fence_info.multi_polygons.inner.vertices.longitude | longitude | - | 9 | 119.99 | 经度，坐标系 gcj02 | - | - |
| 5 | fence_list.fence_info.multi_polygons.inner.vertices.latitude | latitude | - | 9 | 30.28 | 纬度，坐标系 gcj02 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/sendHome/store/getStoreFence?app_key=your_appkey_here&method=sendHome.store.getStoreFence&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/sendHome/store/getStoreFence?app_key=your_appkey_here&method=sendHome.store.getStoreFence&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SendHomeStoreGetStoreFenceRequest request = new SendHomeStoreGetStoreFenceRequest();
SendHomeStoreGetStoreFenceParam param = request.getParam();
param.setStoreId(1138849171L);
param.setOuterStoreId("123");
SendHomeStoreGetStoreFenceResponse response = request.execute(accessToken);

```

### php

```php
$request = new SendHomeStoreGetStoreFenceRequest();
$param = new SendHomeStoreGetStoreFenceParam();
$request->setParam($param);
$param->store_id = 1138849171;
$param->outer_store_id = "123";
$response = $request->execute(accessToken);

```

### python

```python
request = SendHomeStoreGetStoreFenceRequest()
param = request.getParams()
param.store_id = 1138849171
param.outer_store_id = "123"
response = request.execute(accessToken)

```

### go

```go
request := sendHome_store_getStoreFence_request.New()
param := request.GetParams()
param.StoreId = 1138849171
param.OuterStoreId = "123"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SendHomeStoreGetStoreFenceRequest();
var param = request.BuildParam();
param.StoreId = 1138849171;
param.OuterStoreId = "123";
var response = request.Execute<SendHomeStoreGetStoreFenceResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4100003 | 参数非法 | 请参考能力文档传入合法参数 |
| 40004 | 非法的参数 | isv.parameter-invalid:4100002 | 参数类型错误 | 请参考能力文档传入合法参数 |
| 40002 | 缺少必选参数 | isv.missing-parameter:4100001 | 缺少必填参数 | 请参考能力文档传入必填参数 |
| 50002 | 业务处理失败 | isv.business-failed:5000001 | 业务系统异常，请联系开平人员 | 业务系统异常，请联系开平人员 |
| 20000 | 系统错误 | isp.service-error:5100002 | 系统异常，可尝试重试 | 系统异常，可尝试重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
