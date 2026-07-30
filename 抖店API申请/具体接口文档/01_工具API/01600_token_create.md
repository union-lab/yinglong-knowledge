# /token/create

> 中文说明：生成token API  
> 所属类别：工具API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/162/1600>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /token/create |
| 中文名称 | 生成token API |
| 文档目录 | 工具API |
| Article ID | 1600 |
| 文档版本 | V2.13 |
| 官方更新时间 | 2025/1/6 17:44:12 |
| 授权主体 | [] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 600 |

## 使用说明

生成token API。创建token成功即可，可以定期调/token/refresh接口来刷新token避免过期，请不要频繁的调用！
推荐使用SDK进行token获取：https://op.jinritemai.com/docs/guide-docs/1041/1072#doc_anchor0.2150107369828258

## 权限包

- 平台工具 / 基础包（packageType=10）；适用应用类目：服务市场按次订购-模板服务、服务市场按次订购-微应用、即时零售ERP
- 平台工具 / 平台工具（packageType=1）；适用应用类目：跨境金服、官方服务、独立部署、装修设计、物流应用（仅用于兼容老物流网关）、物流连接平台、批量修改-微应用、图片拍摄、主图视频拍摄、微应用-标题优化、商品图文-微应用、卡券商工具、售后/其他品牌服务、线下服务/线下活动、C2B定制、创意互动、推荐导购、精选货源-微应用、商品展示、COD服务、特殊交易、跨境供应链服务、即时零售接力送自研、微应用的测试类目、到家外卖云打印、到家外卖订单配送、联盟抖客分销、即配配送商-平台物流、商标服务、手机行业定制交易、商家自研模版、商家自研组件、跨境电商、互联网医院、撮合服务商、客服绩效-微应用、到家外卖ERP、联盟抖客直播间分销、生活电器、售后管理、任务玩法、财务管理、企业协同工具、企业财税服务、达人短信营销、直播数据微应用、直播话术-微应用、AI拼图-微应用、微应用-图文模版、模版服务-图文模版、模版服务-主图视频、营销管理-互动小程序定制、营销管理-小程序定制、仓储物流-跨境4PL服务商、打单发货-微应用、到家外卖商家自研、创新应用大赛_软件服务、权益营销、搭配购-微应用、微应用-商详海报、厂商代发、抖店云持续集成CI/CD、教育服务、短视频工具、数据洞察微应用、自研微组件-直播复盘、商家商品推广、云仓本地部署、数据服务、合作快递（即时零售）、达人营销小程序、订单处理-供应商、创新应用、创新业务、云桌面运营、仓储管理、供销平台-供应商自研、商家后台系统、即配配送商-聚合发单、上门安装、即时零售商品服务、到店安装、店铺管理、微应用-主图视频、电商-商家工具-店铺定制、C2B购前定制、电商-商家工具-3C数码、电商-商家工具-母婴图书、电商-商家工具-酒类、电商-商家工具-生鲜、电商-商家工具-本地生活及虚拟、电商-商家工具-食品饮料、电商-商家工具-美妆、电商-商家工具-个护家清、电商-商家工具-家居家电、装修模板、定制装修、装修组件、即时零售订单配送、即时零售ebill订单管理（临时）、AIGC视频创作、即时零售ERP、3C数码回收、大家电回收、客服机器人、穿山甲电商联盟、AIGC视频洞察、虚拟充值、即时零售仓储自研、品牌会员通、即时零售商家自研、直播工具、互动营销定制、团长商品推广、团长管理、机构选品、机构管理、达人选品、联盟团长自研、联盟机构工具型、联盟机构自研、直播间导购-微应用、短信营销、订单管理、盲盒互动、逆退上门检测、AI智能客服-微应用、商品供应链、商品优化分析、电商ERP、商品基础工具、AI售后挽单、送装一体、AI 商品运营、智能外呼
- 定向权限 / 定向权限包（packageType=1）

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | token.create | 调用的API接口名称 | - | - |
| 0 | app_key | - | true | 2 | 6839996111118329223 | 应用创建完成后被分配的key | - | - |
| 0 | param_json | - | true | 2 | {cid:12,page:1} | 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | - | - |
| 0 | timestamp | - | true | 2 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | - | - |
| 0 | v | - | true | 2 | 2 | API协议版本，当前版本为2 | - | - |
| 0 | sign | - | true | 2 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | - | - |
| 0 | sign_method | - | false | 2 | hmac-sha256 | 签名算法类型推荐使用hmac-sha256后续会下线md5（不传则默认为"md5"）1. md5:表示用md5算法加密字符串 2. hmac-sha256:表示用hmac_sha_256算法加密字符串 | - | - |

## 业务请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | code | code | false | 2 | 82bdc687-eff1-4f63-8444-0b43086c25fd | 授权码；参数必传，工具型应用: 传code值；自用型应用:传"" | - | - |
| 0 | grant_type | grantType | true | 2 | authorization_code | 授权类型 ；【工具型应用:authorization_code  自用型应用:authorization_self】，如果自用型应用有授权code，传authorization_code | - | - |
| 0 | test_shop | testShop | false | 2 | 2 | 判断测试店铺标识 ，非必传，若新增测试店铺传1，若不是则不必传 | - | - |
| 0 | shop_id | shopId | false | 2 | 17239 | 店铺ID，抖店自研应用使用。当auth_subject_type不为空时，该字段请勿传值，请将值传入到auth_id字段中 | - | - |
| 0 | auth_id | authId | false | 2 | 112334 | 授权id，配合auth_subject_type字段使用。当auth_subject_type不为空时，请使用auth_id字段传值，shop_id请勿使用。 | - | - |
| 0 | auth_subject_type | authSubjectType | false | 2 | WuLiuShang | 授权主体类型，配合auth_id字段使用，YunCang -云仓；WuLiuShang -物流商；WLGongYingShang -物流供应商；MiniApp -小程序；MCN-联盟MCN机构；DouKe-联盟抖客 ；Colonel-联盟团长； | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | access_token | accessToken | - | 2 | 5a3bd7d0-1b48-46d6-811e-7e05ace08a2f | token值。 Tips： 1. 在 access_token 过期前1h之前，ISV使用 refresh_token 刷新时，会返回原来的 access_token 和 refresh_token，但是二者有效期不会变； 2. 在 access_token 过期前1h之内，ISV使用 refresh_token 刷新时，会返回新的 access_token 和 refresh_token，但是原来的 access_token 和 refresh_token 继续有效一个小时； 3. 在 access_token 过期后，ISV使用 refresh_token 刷新时，将获得新的 acces_token 和 refresh_token，同时原来的 acces_token 和 refresh_token 失效； | 122 | R1 |
| 0 | expires_in | expiresIn | - | 1 | 412219354 | 过期时间(秒级时间戳) | 122 | R1 |
| 0 | refresh_token | refreshToken | - | 2 | 50b6ae40-ed8f-4b60-a4af-2ed743a4b903 | 刷新token值。用于刷新access_token的刷新令牌（有效期：14 天） | 122 | R1 |
| 0 | scope | scope | - | 2 | SCOPE | 范围 | 122 | R1 |
| 0 | shop_id | shopId | - | 1 | 11111172 | 店铺ID | 44 | R1 |
| 0 | shop_name | shopName | - | 2 | 李飞测试放心花人店一体 | 店铺名称 | 44 | R1 |
| 0 | authority_id | authorityId | - | 2 | 3445403781179769176 | 授权ID | 122 | R1 |
| 0 | auth_subject_type | authSubjectType | - | 2 | WuLiuShang | 授权主体类型 | 122 | R1 |
| 0 | encrypt_operator | encryptOperator | - | 2 | x123xxxxxxxxxx | 操作店铺账号（加密），不支持解密 | 122 | - |
| 0 | operator_name | operatorName | - | 2 | *磊 | 操作店铺账号昵称（脱敏） | 122 | - |
| 0 | shop_biz_type | shopBizType | - | 1 | 0 | 店铺业务类型。0：普通店铺，1：即时零售连锁店，2：即时零售个体店 | 44 | - |
| 0 | toutiao_id | authSubUserId | - | 2 | 121212 | token生成对应的账号 | 122 | - |
| 0 | token_type | tokenType | - | 1 | 0 | 0表示token是由主账号生成，1表示token由子账号生成 | 122 | - |

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
TokenCreateRequest request = new TokenCreateRequest();
TokenCreateParam param = request.getParam();
param.setCode("82bdc687-eff1-4f63-8444-0b43086c25fd");
param.setGrantType("authorization_code");
param.setTestShop("2");
param.setShopId("17239");
param.setAuthId("112334");
param.setAuthSubjectType("WuLiuShang");
TokenCreateResponse response = request.execute(accessToken);

```

### php

```php
$request = new TokenCreateRequest();
$param = new TokenCreateParam();
$request->setParam($param);
$param->code = "82bdc687-eff1-4f63-8444-0b43086c25fd";
$param->grant_type = "authorization_code";
$param->test_shop = "2";
$param->shop_id = "17239";
$param->auth_id = "112334";
$param->auth_subject_type = "WuLiuShang";
$response = $request->execute(accessToken);

```

### python

```python
request = TokenCreateRequest()
param = request.getParams()
param.code = "82bdc687-eff1-4f63-8444-0b43086c25fd"
param.grant_type = "authorization_code"
param.test_shop = "2"
param.shop_id = "17239"
param.auth_id = "112334"
param.auth_subject_type = "WuLiuShang"
response = request.execute(accessToken)

```

### go

```go
request := token_create_request.New()
param := request.GetParams()
param.Code = "82bdc687-eff1-4f63-8444-0b43086c25fd"
param.GrantType = "authorization_code"
param.TestShop = "2"
param.ShopId = "17239"
param.AuthId = "112334"
param.AuthSubjectType = "WuLiuShang"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new TokenCreateRequest();
var param = request.BuildParam();
param.Code = "82bdc687-eff1-4f63-8444-0b43086c25fd";
param.GrantType = "authorization_code";
param.TestShop = "2";
param.ShopId = "17239";
param.AuthId = "112334";
param.AuthSubjectType = "WuLiuShang";
var response = request.Execute<TokenCreateResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:31006 | 31006:生成token失败, 店铺授权已失效，请重新引导商家完成店铺授权 | 店铺授权已失效 |
| 50002 | 业务处理失败 | isv.business-failed:31020 | 31020:authCode对应的授权不存在 | 授权不存在 |
| 50002 | 业务处理失败 | isv.business-failed:31005 | 31005:根据appId和shopId未找到授权记录 | 授权不存在 |
| 50002 | 业务处理失败 | isv.business-failed:31021 | 31021:authCode已失效，请重新点击去使用按钮 | authCode不存在或者过期失效，请重新在商家后台获取code |
| 50002 | 业务处理失败 | isv.business-failed:31007 | 31007:生成token失败，code已经失效（code的有效期为10分钟） | authCode已经过期 |
| 50002 | 业务处理失败 | isv.business-failed:31012 | 31012:刷新token失败，有并发请求 | create/token接口有并发请求，请减少并发次数 |
| 50002 | 业务处理失败 | isv.business-failed:31003 | 31003:生成token失败 | grant_type参数取值不正确,请参照文档根据应用类型填写不同的值 |
| 50002 | 业务处理失败 | isv.business-failed:4 | 4:非自用型应用code不能为空 | 非自用型应用code不能为空 |
| 50002 | 业务处理失败 | isv.business-failed:31011 | 31011:生成token失败, 当前应用不存在 | 当前应用不存在，请检查请求参数app_key的值 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
