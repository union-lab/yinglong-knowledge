# /warehouse/setFence

> 中文说明：更新电子围栏接口  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/1784>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/setFence |
| 中文名称 | 更新电子围栏接口 |
| 文档目录 | 店铺API |
| Article ID | 1784 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/8/20 19:53:02 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

更新电子围栏。用户请保证输入参数的门店id和外部围栏id至少一个有效。输入门店id时，请把外部围栏id的值填为0。

## 权限包

- 仓储管理 / 电子围栏（packageType=1）
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.setFence | 调用的API接口名称 | - | - |
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
| 0 | fence_info | FenceInfo | false | 5 | - | 围栏信息 | - | - |
| 1 | fence_info.out_fence_id | outFenceID | true | 2 | fence01 | 外部围栏id，如果传入门店id，该字段请填为0。 | - | - |
| 1 | fence_info.shape | shape | true | 99 | 形状 | 形状 1. 圆  2:多边形  3:带洞多边形（兼容普通多边形）4:多个多边形，兼容带洞和不带洞 | - | - |
| 1 | fence_info.circular | circular | false | 5 | - | 形状为圆的经纬度信息 | - | - |
| 2 | fence_info.circular.center | center | true | 5 | - | 圆的中心经纬度 | - | - |
| 3 | fence_info.circular.center.longitude | longitude | true | 9 | 115.35644 | 经度 | - | - |
| 3 | fence_info.circular.center.latitude | latitude | true | 9 | 40.438585 | 纬度 | - | - |
| 2 | fence_info.circular.radius | radius | true | 9 | 1000 | 半径，单位 米 | - | - |
| 1 | fence_info.polygon | polygon | false | 5 | - | 普通多边形 | - | - |
| 2 | fence_info.polygon.vertices | vertices | true | 3 | - | 多边形顶点的经纬度：逆时针 | - | - |
| 3 | fence_info.polygon.vertices.longitude | longitude | true | 9 | 115.356445 | 经度 | - | - |
| 3 | fence_info.polygon.vertices.latitude | latitude | true | 9 | 40.438585 | 纬度 | - | - |
| 1 | fence_info.polygons | polygons | false | 3 | - | 该字段已废弃，如需使用多多边形，请使用polygon_new | - | - |
| 2 | fence_info.polygons.vertices | vertices | true | 3 | - | 多边形顶点 | - | - |
| 3 | fence_info.polygons.vertices.longitude | longitude | false | 9 | dd | 无用字段 | - | - |
| 3 | fence_info.polygons.vertices.latitude | latitude | false | 9 | dd | 无用字段 | - | - |
| 1 | fence_info.polygon_new | polygonNew | false | 5 | - | 带洞多边形，可兼容普通多边形 | - | - |
| 2 | fence_info.polygon_new.outer | outer | true | 5 | - | 带洞多边形的外圈数据 | - | - |
| 3 | fence_info.polygon_new.outer.vertices | vertices | true | 3 | - | 经纬度列表，外圈为逆时针 | - | - |
| 4 | fence_info.polygon_new.outer.vertices.longitude | longitude | false | 9 | 115.356445 | 经度 | - | - |
| 4 | fence_info.polygon_new.outer.vertices.latitude | latitude | false | 9 | 40.438585 | 纬度 | - | - |
| 2 | fence_info.polygon_new.inner | inner | false | 3 | - | 带洞多边形的内圈数据，空表示普通多边形 | - | - |
| 3 | fence_info.polygon_new.inner.vertices | vertices | true | 3 | - | 经纬度列表，内圈为顺时针 | - | - |
| 4 | fence_info.polygon_new.inner.vertices.longitude | longitude | false | 9 | 115.356445 | 经度 | - | - |
| 4 | fence_info.polygon_new.inner.vertices.latitude | latitude | false | 9 | 40.438585 | 纬度 | - | - |
| 1 | fence_info.multi_polygons | multiPolygons | false | 3 | - | 多个多边形 | - | - |
| 2 | fence_info.multi_polygons.outer | outer | true | 5 | - | 带洞多边形的外圈数据 | - | - |
| 3 | fence_info.multi_polygons.outer.vertices | vertices | true | 3 | - | 经纬度列表，外圈为逆时针 | - | - |
| 4 | fence_info.multi_polygons.outer.vertices.longitude | longitude | false | 9 | 115.356445 | 经度 | - | - |
| 4 | fence_info.multi_polygons.outer.vertices.latitude | latitude | false | 9 | 40.438585 | 纬度 | - | - |
| 2 | fence_info.multi_polygons.inner | inner | false | 3 | - | 带洞多边形的内圈数据，空表示普通多边形 | - | - |
| 3 | fence_info.multi_polygons.inner.vertices | vertices | true | 3 | - | 经纬度列表，内圈为顺时针 | - | - |
| 4 | fence_info.multi_polygons.inner.vertices.longitude | longitude | false | 9 | 115.356445 | 经度 | - | - |
| 4 | fence_info.multi_polygons.inner.vertices.latitude | latitude | false | 9 | 40.438585 | 纬度 | - | - |
| 1 | fence_info.fence_i_d | fenceID | false | 99 | 12823223 | 服务内部生成的围栏id，一定会生成 | - | - |
| 1 | fence_info.properties | properties | false | 8 | {key:value} | 围栏的相关的一些抽象属性（围栏名称，围栏属性：学校商圈，小区） | - | - |
| 0 | auto_opt | AutoOpt | false | 4 | false | 是否允许平台自动处理(超出平台最大限制会被纠正), 默认不处理 | - | - |
| 0 | store_id | StoreId | false | 99 | 1232322 | 门店id | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | limit_fence | LimitFence | - | 3 | - | 围栏限制 | - | R1 |
| 1 | limit_fence.longitude | longitude | - | 9 | 116.12 | 经度 | - | - |
| 1 | limit_fence.latitude | latitude | - | 9 | 24.5 | 纬度 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/setFence?app_key=your_appkey_here&method=warehouse.setFence&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/setFence?app_key=your_appkey_here&method=warehouse.setFence&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseSetFenceRequest request = new WarehouseSetFenceRequest();
WarehouseSetFenceParam param = request.getParam();
param.setAutoOpt(false);
param.setStoreId(1232322L);
WarehouseSetFenceResponse response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseSetFenceRequest();
$param = new WarehouseSetFenceParam();
$request->setParam($param);
$param->auto_opt = false;
$param->store_id = 1232322;
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseSetFenceRequest()
param = request.getParams()
param.auto_opt = false
param.store_id = 1232322
response = request.execute(accessToken)

```

### go

```go
request := warehouse_setFence_request.New()
param := request.GetParams()
param.AutoOpt = false
param.StoreId = 1232322
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseSetFenceRequest();
var param = request.BuildParam();
param.AutoOpt = false;
param.StoreId = 1232322;
var response = request.Execute<WarehouseSetFenceResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:2 | 参数错误 | 修改后重试 |
| 20000 | 系统错误 | isp.service-error:9999 | 系统错误（如果是 edge xx crosses edge xx，那就是围栏数据不对，边有交叉，不是个合法的多边形，检查数据） | 重试 |
| 50002 | 业务处理失败 | isv.business-failed:20012 | 调用围栏空间计算服务失败 | 检查围栏是否合法 |
| 50002 | 业务处理失败 | isv.business-failed:1009 | 围栏距离门店位置太远 | 检查围栏大小位置是否合理 |
| 40004 | 非法的参数 | isv.parameter-invalid:2122 | 参数错误 | 修改后重试 |
| 20000 | 系统错误 | isp.service-error:2129999 | 参数错误 | 修改后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2121006 | 检查围栏大小是否合理 | 调整围栏大小 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
