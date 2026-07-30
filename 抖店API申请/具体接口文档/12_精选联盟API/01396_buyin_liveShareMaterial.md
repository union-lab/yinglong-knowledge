# /buyin/liveShareMaterial

> 中文说明：直播间分销物料查询  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/1396>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/liveShareMaterial |
| 中文名称 | 直播间分销物料查询 |
| 文档目录 | 精选联盟API |
| Article ID | 1396 |
| 文档版本 | V6.01 |
| 官方更新时间 | 2025/6/26 10:15:35 |
| 授权主体 | ["机构","抖客"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 30 |

## 使用说明

抖客查询开通直播间分销业务的达人列表

## 权限包

- 精选联盟 / 精选联盟直播间分销（机构）（packageType=1）；适用应用类目：联盟抖客直播间分销、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 直播间分销物料（packageType=1）；适用应用类目：创新应用大赛_微应用、联盟抖客分销

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.liveShareMaterial | 调用的API接口名称 | - | - |
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
| 0 | author_type | author_type | false | 99 | 1 | 1 品牌 2 达人(默认值) | - | - |
| 0 | author_levels | author_levels | false | 3 | 1 | 作者电商等级，0-7级 | - | - |
| 0 | frist_cids | frist_cids | false | 3 | 23 | 商品行业类目，列表类型；使用【/alliance/activityProductCategoryList】接口获取 | - | - |
| 0 | author_info | author_info | false | 2 | 我的昵称 | 达人昵称或者账号 | - | - |
| 0 | page | page | true | 99 | 1 | 分页，1开始 | - | - |
| 0 | page_size | page_size | true | 99 | 10 | 分页大小 | - | - |
| 0 | sort_by | sort_by | false | 99 | 1 | 排序字段: 1-综合；2-销量；3-佣金率；4-粉丝数 | - | - |
| 0 | sort_type | sort_type | false | 99 | 0 | 排序方式：0-降序；1-升序 | - | - |
| 0 | live_status | status | false | 99 | 1 | 开关播状态：0:所有，1:开播，2:关播 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | total | total | - | 99 | 20 | 总数 | - | R1 |
| 0 | data | data | - | 3 | - | 列表 | - | R1 |
| 1 | data.author_openid | author_openid | - | 2 | fdfwe | 达人open_id（该字段废弃使用，请使用buyin_id） | - | R1 |
| 1 | data.author_name | author_name | - | 2 | 我是kol | 达人昵称 | - | R1 |
| 1 | data.author_pic | author_pic | - | 2 | http://fake.png | 头像 | - | R1 |
| 1 | data.author_level | author_level | - | 99 | 1 | 达人等级 | - | R1 |
| 1 | data.product_category | product_category | - | 3 | 测试类目 | 商品类别 | - | R1 |
| 1 | data.province | province | - | 2 | 广东 | 作者省份 | - | R1 |
| 1 | data.city | city | - | 2 | 广州 | 作者城市 | - | R1 |
| 1 | data.average_gmv | average_gmv | - | 2 | 1111111 | 场均gmv | - | R1 |
| 1 | data.fans_num | fans_num | - | 99 | 222 | 粉丝数量 | - | R1 |
| 1 | data.average_commission_rate | average_commission_rate | - | 2 | 30 | 平均佣金率 | - | R1 |
| 1 | data.room_id | room_id | - | 2 | 1234567890 | 直播间id | - | R1 |
| 1 | data.is_live | is_live | - | 4 | true | 正在直播 | - | R1 |
| 1 | data.is_ecom | is_ecom | - | 4 | true | 正在带货直播 | - | R1 |
| 1 | data.gender | gender | - | 2 | male | 性别 male/ female/ 未知 | - | R1 |
| 1 | data.buyin_id | buyin_id | - | 2 | 6523908954358943 | 主播百应ID | - | R1 |
| 1 | data.live_preview_auth | live_preview_auth | - | 4 | false | 该达人是否开通了直播预告权限 | - | R1 |
| 1 | data.has_redpack | has_redpack | - | 4 | false | 该达人是否配置了生效中的抖客红包 | - | R1 |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/liveShareMaterial?app_key=your_appkey_here&method=buyin.liveShareMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/liveShareMaterial?app_key=your_appkey_here&method=buyin.liveShareMaterial&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinLiveShareMaterialRequest request = new BuyinLiveShareMaterialRequest();
BuyinLiveShareMaterialParam param = request.getParam();
param.setAuthorType(1);
param.setAuthorLevels(1);
param.setFristCids(23);
param.setAuthorInfo("我的昵称");
param.setPage(1L);
param.setPageSize(10L);
param.setSortBy(1);
param.setSortType(0);
param.setLiveStatus(1L);
BuyinLiveShareMaterialResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinLiveShareMaterialRequest();
$param = new BuyinLiveShareMaterialParam();
$request->setParam($param);
$param->author_type = 1;
$param->author_levels = 1;
$param->frist_cids = 23;
$param->author_info = "我的昵称";
$param->page = 1;
$param->page_size = 10;
$param->sort_by = 1;
$param->sort_type = 0;
$param->live_status = 1;
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinLiveShareMaterialRequest()
param = request.getParams()
param.author_type = 1
param.author_levels = 1
param.frist_cids = 23
param.author_info = "我的昵称"
param.page = 1
param.page_size = 10
param.sort_by = 1
param.sort_type = 0
param.live_status = 1
response = request.execute(accessToken)

```

### go

```go
request := buyin_liveShareMaterial_request.New()
param := request.GetParams()
param.AuthorType = 1
param.AuthorLevels = 1
param.FristCids = 23
param.AuthorInfo = "我的昵称"
param.Page = 1
param.PageSize = 10
param.SortBy = 1
param.SortType = 0
param.LiveStatus = 1
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinLiveShareMaterialRequest();
var param = request.BuildParam();
param.AuthorType = 1;
param.AuthorLevels = 1;
param.FristCids = 23;
param.AuthorInfo = "我的昵称";
param.Page = 1;
param.PageSize = 10;
param.SortBy = 1;
param.SortType = 0;
param.LiveStatus = 1;
var response = request.Execute<BuyinLiveShareMaterialResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:4097 | 无效分页大小 | 无效分页大小 |
| 40004 | 非法的参数 | isv.parameter-invalid:257 | 参数校验失败 | 参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:4198 | 需【抖客】角色授权后访问 | 需【抖客】角色授权后访问 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
