# /open/getAuthInfo

> 中文说明：查询授权信息  
> 所属类别：工具API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/162/3582>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /open/getAuthInfo |
| 中文名称 | 查询授权信息 |
| 文档目录 | 工具API |
| Article ID | 3582 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/4/18 11:16:00 |
| 授权主体 | [] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 5000 |

## 使用说明

查询当前App下商家授权信息

## 权限包

- 平台工具 / 平台工具（packageType=1）；适用应用类目：跨境金服、官方服务、独立部署、装修设计、物流应用（仅用于兼容老物流网关）、物流连接平台、批量修改-微应用、图片拍摄、主图视频拍摄、微应用-标题优化、商品图文-微应用、卡券商工具、售后/其他品牌服务、线下服务/线下活动、C2B定制、创意互动、推荐导购、精选货源-微应用、商品展示、COD服务、特殊交易、跨境供应链服务、即时零售接力送自研、微应用的测试类目、到家外卖云打印、到家外卖订单配送、联盟抖客分销、即配配送商-平台物流、商标服务、手机行业定制交易、商家自研模版、商家自研组件、跨境电商、互联网医院、撮合服务商、客服绩效-微应用、到家外卖ERP、联盟抖客直播间分销、生活电器、售后管理、任务玩法、财务管理、企业协同工具、企业财税服务、达人短信营销、直播数据微应用、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、仓储物流-跨境4PL服务商、打单发货-微应用、到家外卖商家自研、创新应用大赛_软件服务、权益营销、搭配购-微应用、微应用-商详海报、厂商代发、抖店云持续集成CI/CD、教育服务、短视频工具、数据洞察微应用、自研微组件-直播复盘、商家商品推广、云仓本地部署、数据服务、合作快递（即时零售）、达人营销小程序、订单处理-供应商、创新应用、创新业务、云桌面运营、仓储管理、供销平台-供应商自研、商家后台系统、即配配送商-聚合发单、上门安装、即时零售商品服务、到店安装、店铺管理、微应用-主图视频、电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电、装修模板、定制装修、装修组件、即时零售订单配送、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、3C数码回收、大家电回收、客服机器人、穿山甲电商联盟、AIGC视频洞察、虚拟充值、即时零售仓储自研、品牌会员通、即时零售商家自研、直播工具、互动营销定制、团长商品推广、团长管理、机构选品、机构管理、达人选品、联盟团长自研、联盟机构工具型、联盟机构自研、直播间导购-微应用、短信营销、订单管理、盲盒互动、逆退上门检测、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、送装一体、AI 商品运营、智能外呼
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | open.getAuthInfo | 调用的API接口名称 | - | - |
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
| 0 | auth_id | authId | true | 2 | 12121321212 | 授权主体ID，这里为店铺ID | - | - |
| 0 | auth_subject_type | authSubjectTypeName | - | 2 | WuLiuShang | 授权主体类型，默认为店铺授权，不需要填写。<br>其他类型枚举值如下：YunCang -云仓；WuLiuShang -物流商；WLGongYingShang -物流供应商；MiniApp -小程序 MCN-联盟MCN机构 DouKe-联盟抖客 Colonel-联盟团长 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | status | status | - | 7 | 1 | 授权状态，1为正常。枚举为<br>0:待商家确认，1:正常，2:取消，3:过期。<br>授权状态为正常时，需额外判断auth_end_time | - | - |
| 0 | auth_success_time | authSuccessTime | - | 1 | 1681351741 | 授权生效时间 | - | - |
| 0 | auth_end_time | authEndTime | - | 1 | 1681351741 | 授权截止时间 | - | - |
| 0 | auth_id | authId | - | 2 | 12121212 | 授权主体ID | - | - |
| 0 | auth_update_time | updateTime | - | 1 | 1681351741 | 授权最近一次更新时间 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/open/getAuthInfo?app_key=your_appkey_here&method=open.getAuthInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/open/getAuthInfo?app_key=your_appkey_here&method=open.getAuthInfo&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
OpenGetAuthInfoRequest request = new OpenGetAuthInfoRequest();
OpenGetAuthInfoParam param = request.getParam();
param.setAuthId("12121321212");
param.setAuthSubjectType("WuLiuShang");
OpenGetAuthInfoResponse response = request.execute(accessToken);

```

### php

```php
$request = new OpenGetAuthInfoRequest();
$param = new OpenGetAuthInfoParam();
$request->setParam($param);
$param->auth_id = "12121321212";
$param->auth_subject_type = "WuLiuShang";
$response = $request->execute(accessToken);

```

### python

```python
request = OpenGetAuthInfoRequest()
param = request.getParams()
param.auth_id = "12121321212"
param.auth_subject_type = "WuLiuShang"
response = request.execute(accessToken)

```

### go

```go
request := open_getAuthInfo_request.New()
param := request.GetParams()
param.AuthId = "12121321212"
param.AuthSubjectType = "WuLiuShang"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new OpenGetAuthInfoRequest();
var param = request.BuildParam();
param.AuthId = "12121321212";
param.AuthSubjectType = "WuLiuShang";
var response = request.Execute<OpenGetAuthInfoResponse>(accessToken);

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
| 20000 | 系统错误 | isp.service-error:100001 | 系统异常，请稍后重试 | 系统异常，请稍后重试 |
| 40004 | 非法的参数 | isv.parameter-invalid:100003 | auth_subject_type值非法 | 请填写正确的auth_subject_type |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
