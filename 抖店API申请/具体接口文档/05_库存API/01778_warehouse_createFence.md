# /warehouse/createFence

> 中文说明：创建电子围栏  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/1778>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/createFence |
| 中文名称 | 创建电子围栏 |
| 文档目录 | 库存API |
| Article ID | 1778 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/6/11 11:27:30 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

创建电子围栏

## 权限包

- 仓储管理 / 电子围栏（packageType=1）
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研
- 到家开放 / 电子围栏（外卖）（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.createFence | 调用的API接口名称 | - | - |
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
| 0 | fence_info | FenceInfo | true | 5 | - | 围栏信息 | - | - |
| 1 | fence_info.out_fence_id | outFenceID | true | 2 | fenceid01 | 外部围栏id，必传 | - | - |
| 1 | fence_info.shape | shape | true | 99 | 1 | 形状 1. 圆 使用circular 2:多边形，使用polygon  3:带洞多边形（兼容普通多边形），使用polygon_new  4:多个多边形，兼容带洞和不带洞，使用multi_polygons | - | - |
| 1 | fence_info.circular | circular | false | 5 | - | 形状为圆的经纬度信息，对应shape=1 | - | - |
| 2 | fence_info.circular.center | center | true | 5 | - | 圆的中心经纬度 | - | - |
| 3 | fence_info.circular.center.longitude | longitude | true | 9 | 115.35644 | 经度 | - | - |
| 3 | fence_info.circular.center.latitude | latitude | true | 9 | 40.438585 | 纬度 | - | - |
| 2 | fence_info.circular.radius | radius | true | 9 | 1000 | 半径，单位 米 | - | - |
| 1 | fence_info.polygon | polygon | false | 5 | - | 普通多边形 ，对应shape=2 | - | - |
| 2 | fence_info.polygon.vertices | vertices | true | 3 | - | 多边形顶点的经纬度：逆时针 | - | - |
| 3 | fence_info.polygon.vertices.longitude | longitude | true | 9 | 115.356445 | 经度 | - | - |
| 3 | fence_info.polygon.vertices.latitude | latitude | true | 9 | 40.438585 | 纬度 | - | - |
| 1 | fence_info.polygon_new | polygonNew | false | 5 | - | 带洞多边形，可兼容普通多边形 ，对应shape=3 | - | - |
| 2 | fence_info.polygon_new.outer | outer | true | 5 | - | 带洞多边形的外圈数据 | - | - |
| 3 | fence_info.polygon_new.outer.vertices | vertices | true | 3 | - | 经纬度列表，外圈为逆时针 | - | - |
| 4 | fence_info.polygon_new.outer.vertices.longitude | longitude | true | 9 | 115.356445 | 经度 | - | - |
| 4 | fence_info.polygon_new.outer.vertices.latitude | latitude | true | 9 | 40.438585 | 纬度 | - | - |
| 2 | fence_info.polygon_new.inner | inner | false | 3 | - | 带洞多边形的内圈数据，空表示普通多边形 | - | - |
| 3 | fence_info.polygon_new.inner.vertices | vertices | false | 3 | - | 经纬度列表，内圈为顺时针 | - | - |
| 4 | fence_info.polygon_new.inner.vertices.longitude | longitude | false | 9 | 115.356445 | 经度 | - | - |
| 4 | fence_info.polygon_new.inner.vertices.latitude | latitude | false | 9 | 40.438585 | 纬度 | - | - |
| 1 | fence_info.multi_polygons | multiPolygons | false | 3 | - | 多个多边形 ，对应shape=4 | - | - |
| 2 | fence_info.multi_polygons.outer | outer | true | 5 | - | 带洞多边形的外圈数据 | - | - |
| 3 | fence_info.multi_polygons.outer.vertices | vertices | true | 3 | - | 经纬度列表，外圈为逆时针 | - | - |
| 4 | fence_info.multi_polygons.outer.vertices.longitude | longitude | true | 9 | 115.356445 | 经度 | - | - |
| 4 | fence_info.multi_polygons.outer.vertices.latitude | latitude | true | 9 | 40.438585 | 纬度 | - | - |
| 2 | fence_info.multi_polygons.inner | inner | false | 3 | - | 带洞多边形的内圈数据，空表示普通多边形 | - | - |
| 3 | fence_info.multi_polygons.inner.vertices | vertices | false | 3 | - | 经纬度列表，内圈为顺时针 | - | - |
| 4 | fence_info.multi_polygons.inner.vertices.longitude | longitude | false | 9 | 115.356445 | 经度 | - | - |
| 4 | fence_info.multi_polygons.inner.vertices.latitude | latitude | false | 9 | 115.356445 | 纬度 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | fence_id | FenceID | - | 2 | 49227991164292065165 | 内部围栏id | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/createFence?app_key=your_appkey_here&method=warehouse.createFence&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/createFence?app_key=your_appkey_here&method=warehouse.createFence&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseCreateFenceRequest request = new WarehouseCreateFenceRequest();
WarehouseCreateFenceParam param = request.getParam();
WarehouseCreateFenceResponse response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseCreateFenceRequest();
$param = new WarehouseCreateFenceParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseCreateFenceRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := warehouse_createFence_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseCreateFenceRequest();
var param = request.BuildParam();
var response = request.Execute<WarehouseCreateFenceResponse>(accessToken);

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
| 40002 | 缺少必选参数 | isv.missing-parameter:2 | 参数错误 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:1006 | 该电子围栏已经存在 | 使用修改接口 |
| 20000 | 系统错误 | isp.service-error:9999 | 内部错误（如果是 edge xx crosses edge xx，那就是围栏数据不对，边有交叉，不是个合法的多边形，检查数据） | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:1212030362 | 保存失败 | 检查数据 |
| 40002 | 缺少必选参数 | isv.missing-parameter:2122 | 参数错误 | 检查参数 |
| 50002 | 业务处理失败 | isv.business-failed:2121006 | 该电子围栏已经存在 | 使用修改接口 |
| 20000 | 系统错误 | isp.service-error:2129999 | 内部错误 | 重试 |
| 20000 | 系统错误 | isp.service-error:6001001 | 服务器打瞌睡了，请稍后再试。 | 重试 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
