# /warehouse/getFences

> 中文说明：获取电子围栏信息/列表  
> 所属类别：店铺API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/13/1783>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/getFences |
| 中文名称 | 获取电子围栏信息/列表 |
| 文档目录 | 店铺API |
| Article ID | 1783 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2024/6/11 11:27:01 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1000 |

## 使用说明

获取电子围栏信息/列表

## 权限包

- 仓储管理 / 电子围栏（packageType=1）
- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | warehouse.getFences | 调用的API接口名称 | - | - |
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
| 0 | out_fence_id_list | OutFenceIDList | false | 3 | fenceid2 | 外部围栏id列表，不填则查全部 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | fences | Fences | - | 3 | - | 围栏信息列表 | - | R1 |
| 1 | fences.out_fence_id | outFenceID | - | 2 | fence02 | 外部围栏id | - | R1 |
| 1 | fences.fence_id | fenceID | - | 99 | 1312312313 | 内部围栏id | - | R1 |
| 1 | fences.shape | shape | - | 99 | 2 | 形状 1. 圆  2:多边形  3:带洞多边形（兼容普通多边形 | - | R1 |
| 1 | fences.circular | circular | - | 5 | - | 形状为圆的经纬度信息 | - | R1 |
| 2 | fences.circular.center | center | - | 5 | - | 圆的中心经纬度 | - | R1 |
| 3 | fences.circular.center.longitude | longitude | - | 9 | 115.356445 | 经度 | - | R1 |
| 3 | fences.circular.center.latitude | latitude | - | 9 | 40.438585 | 纬度 | - | R1 |
| 2 | fences.circular.radius | radius | - | 9 | 1000 | 半径，单位 米 | - | R1 |
| 1 | fences.polygon | polygon | - | 5 | - | 普通多边形 | - | R1 |
| 2 | fences.polygon.vertices | vertices | - | 3 | - | 多边形顶点的经纬度：逆时针 | - | R1 |
| 3 | fences.polygon.vertices.longitude | longitude | - | 9 | 115.356445 | 经度 | - | R1 |
| 3 | fences.polygon.vertices.latitude | latitude | - | 9 | 40.438585 | 纬度 | - | R1 |
| 1 | fences.polygon_new | polygonNew | - | 5 | - | 带洞多边形，可兼容普通多边形 | - | R1 |
| 2 | fences.polygon_new.outer | outer | - | 5 | - | 带洞多边形的外圈数据 | - | R1 |
| 3 | fences.polygon_new.outer.vertices | vertices | - | 3 | - | 经纬度列表，外圈为逆时针 | - | R1 |
| 4 | fences.polygon_new.outer.vertices.longitude | longitude | - | 9 | 115.356445 | 经度 | - | R1 |
| 4 | fences.polygon_new.outer.vertices.latitude | latitude | - | 9 | 40.438585 | 纬度 | - | R1 |
| 2 | fences.polygon_new.inner | inner | - | 3 | - | 带洞多边形的内圈数据，空表示普通多边形 | - | R1 |
| 3 | fences.polygon_new.inner.vertices | vertices | - | 3 | - | 经纬度列表，内圈为顺时针 | - | R1 |
| 4 | fences.polygon_new.inner.vertices.longitude | longitude | - | 2 | 115.356445 | 经度 | - | R1 |
| 4 | fences.polygon_new.inner.vertices.latitude | latitude | - | 2 | 40.438585 | 纬度 | - | R1 |
| 1 | fences.multi_polygons | multiPolygons | - | 3 | - | 多个多边形 | - | R1 |
| 2 | fences.multi_polygons.outer | outer | - | 5 | - | 带洞多边形的外圈数据 | - | R1 |
| 3 | fences.multi_polygons.outer.vertices | vertices | - | 3 | - | 经纬度列表，外圈为逆时针 | - | R1 |
| 4 | fences.multi_polygons.outer.vertices.longitude | longitude | - | 9 | 115.356445 | 经度 | - | R1 |
| 4 | fences.multi_polygons.outer.vertices.latitude | latitude | - | 9 | 40.438585 | 纬度 | - | R1 |
| 2 | fences.multi_polygons.inner | inner | - | 3 | - | 带洞多边形的内圈数据，空表示普通多边形 | - | R1 |
| 3 | fences.multi_polygons.inner.vertices | vertices | - | 3 | - | 经纬度列表，内圈为顺时针 | - | R1 |
| 4 | fences.multi_polygons.inner.vertices.longitude | longitude | - | 9 | 115.356445 | 经度 | - | R1 |
| 4 | fences.multi_polygons.inner.vertices.latitude | latitude | - | 9 | 40.438585 | 纬度 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/warehouse/getFences?app_key=your_appkey_here&method=warehouse.getFences&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/warehouse/getFences?app_key=your_appkey_here&method=warehouse.getFences&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
WarehouseGetFencesRequest request = new WarehouseGetFencesRequest();
WarehouseGetFencesParam param = request.getParam();
param.setOutFenceIdList(fenceid2);
WarehouseGetFencesResponse response = request.execute(accessToken);

```

### php

```php
$request = new WarehouseGetFencesRequest();
$param = new WarehouseGetFencesParam();
$request->setParam($param);
$param->out_fence_id_list = fenceid2;
$response = $request->execute(accessToken);

```

### python

```python
request = WarehouseGetFencesRequest()
param = request.getParams()
param.out_fence_id_list = fenceid2
response = request.execute(accessToken)

```

### go

```go
request := warehouse_getFences_request.New()
param := request.GetParams()
param.OutFenceIdList = fenceid2
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new WarehouseGetFencesRequest();
var param = request.BuildParam();
param.OutFenceIdList = fenceid2;
var response = request.Execute<WarehouseGetFencesResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:9999 | 系统错误 | 重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:2122 | 参数错误 | 修改后重试 |
| 20000 | 系统错误 | isp.service-error:2129999 | 系统错误 | 重试 |
| 20000 | 系统错误 | isp.service-error:2121006 | 系统错误 | 重试，重试失败联系管理员 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
