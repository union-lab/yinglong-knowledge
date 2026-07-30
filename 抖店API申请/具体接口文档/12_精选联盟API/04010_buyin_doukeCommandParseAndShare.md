# /buyin/doukeCommandParseAndShare

> 中文说明：口令解析&转链  
> 所属类别：精选联盟API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/61/4010>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /buyin/doukeCommandParseAndShare |
| 中文名称 | 口令解析&转链 |
| 文档目录 | 精选联盟API |
| Article ID | 4010 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2025/6/26 10:18:25 |
| 授权主体 | ["抖客"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 1500 |

## 使用说明

该接口用于 解析&转链 抖口令和短链。
1. 可用于解析转链、抖音分享的抖口令和短链，获取口令类型及对应口令信息。
2. 提供对应口令类型的转链能力

## 权限包

- 精选联盟 / 精选联盟商品物料（packageType=1）；适用应用类目：联盟抖客分销、联盟抖客直播间分销、团长商品推广、团长管理、达人选品、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研
- 精选联盟 / 分销口令解析（packageType=1）；适用应用类目：联盟抖客分销
- 精选联盟 / 精选联盟物料查询（packageType=1）；适用应用类目：联盟自研、微应用-标题优化、创新应用大赛_微应用、联盟抖客分销、撮合服务商、联盟抖客直播间分销、直播间AI导购、团长管理、联盟团长自研、团长自研、联盟机构工具型、联盟机构自用型、联盟机构自研、直播间导购-微应用

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | buyin.doukeCommandParseAndShare | 调用的API接口名称 | - | - |
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
| 0 | command | command | true | 2 | 3.:/ hO长[抱拳]按????墆此条消息，搭[呲牙]揩ƿȎƲ[拥抱]ȳɫǹ搜索，查看商品详情ηηcuTRuYrzTv8Я\t##cuTRuYrzTv8## | 抖口令或短链 | - | - |
| 0 | share_params | share_params | false | 5 | - | 转链参数，无需转链可不传 | - | - |
| 1 | share_params.pid | pid | false | 2 | dy_123_233_2222 | 抖客PID | - | - |
| 1 | share_params.external_info | external_info | false | 2 | 111_222 | 自定义字段，只允许 数字、字母和_，限制长度为40 | - | - |
| 1 | share_params.need_share_info_field | need_share_info_field | false | 5 | - | 所需的转链分享物料，默认仅返回deeplink（建议按需获取，获取多种会导致响应耗时增加） | - | - |
| 2 | share_params.need_share_info_field.need_share_command | need_share_command | false | 4 | false | 是否需要口令 | - | - |
| 2 | share_params.need_share_info_field.need_qrcode | need_qrcode | false | 4 | false | 是否需要二维码 | - | - |
| 2 | share_params.need_share_info_field.need_zlink | need_zlink | false | 4 | false | 是否需要zlink | - | - |
| 2 | share_params.need_share_info_field.need_share_link | need_share_link | false | 4 | false | 是否需要站外H5链接（仅商品生效） | - | - |
| 1 | share_params.platform | platform | false | 99 | 0 | 回流端标识 0：抖音 1：抖音极速版 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | command_info | command_info | - | 5 | - | 口令信息 | - | R1 |
| 1 | command_info.command_type | command_type | - | 99 | 1 | 口令类型 1:商品 2:直播间 3:直播预告 4:活动页 5:抖客红包 6:商品优惠 | - | - |
| 1 | command_info.product_info | product_info | - | 5 | - | 商品信息，command_type为1或6返回该项 | - | R1 |
| 2 | command_info.product_info.product_id | product_id | - | 99 | 123456 | 商品ID | - | - |
| 2 | command_info.product_info.ins_activity_param | ins_activity_param | - | 2 | abc | 团长参数 | - | - |
| 2 | command_info.product_info.share_info | share_info | - | 5 | - | 转链分享物料 | - | R1 |
| 3 | command_info.product_info.share_info.deeplink | deeplink | - | 2 | snssdk1128://ec_goods_detail/?promotion_id=3471556980941674&kol_id=99575927 | deeplink | - | - |
| 3 | command_info.product_info.share_info.share_command | share_command | - | 2 | 长按覆[呲牙]zhi此条消息，咑[玫瑰]搜[烟花]，查看商品详情Ig9FOHrrl8ηη | 抖口令 | - | - |
| 3 | command_info.product_info.share_info.qrcode | qrcode | - | 5 | - | 二维码 | - | R1 |
| 4 | command_info.product_info.share_info.qrcode.url | url | - | 2 | https://p3.douyinpic.com/img/aweme-qrcode/PqFhya700510763792421~c5_360x360.webp?from=1723184 | 图片地址 | - | - |
| 4 | command_info.product_info.share_info.qrcode.width | width | - | 99 | 360 | 宽度 | - | - |
| 4 | command_info.product_info.share_info.qrcode.height | height | - | 99 | 360 | 高度 | - | - |
| 3 | command_info.product_info.share_info.zlink | zlink | - | 2 | https://z.douyin.com/xxxxxxx | Zlink，允许外部APP直接唤起抖音直播间，未安装抖音应用用户，唤起抖音下载页，有效期60天 | - | - |
| 3 | command_info.product_info.share_info.share_link | share_link | - | 2 | https://haohuo.jinritemai.com/ecommerce/trade/detail/index.html?id= | 商品站外H5链接 | - | - |
| 1 | command_info.live_info | live_info | - | 5 | - | 直播间信息，仅command_type为2返回该项 | - | R1 |
| 2 | command_info.live_info.author_buyin_id | author_buyin_id | - | 2 | 112233 | 主播百应ID | - | - |
| 2 | command_info.live_info.product_id | product_id | - | 99 | 123456 | 直播间绑定的商品ID，product_id专属于该直播间，可能已经失效 | - | - |
| 2 | command_info.live_info.share_info | share_info | - | 5 | - | 转链分享物料 | - | R1 |
| 3 | command_info.live_info.share_info.deeplink | deeplink | - | 2 | snssdk1128://ec_goods_detail/?promotion_id=3471556980941674&kol_id=99575927 | deeplink | - | - |
| 3 | command_info.live_info.share_info.share_command | share_command | - | 2 | 长按覆[呲牙]zhi此条消息，咑[玫瑰]搜[烟花]，查看商品详情Ig9FOHrrl8ηη | 抖口令 | - | - |
| 3 | command_info.live_info.share_info.qrcode | qrcode | - | 5 | - | 二维码 | - | R1 |
| 4 | command_info.live_info.share_info.qrcode.url | url | - | 2 | https://p3.douyinpic.com/img/aweme-qrcode/PqFhya700510763792421~c5_360x360.webp?from=1723184 | 图片地址 | - | - |
| 4 | command_info.live_info.share_info.qrcode.width | width | - | 99 | 360 | 宽度 | - | - |
| 4 | command_info.live_info.share_info.qrcode.height | height | - | 99 | 360 | 高度 | - | - |
| 3 | command_info.live_info.share_info.zlink | zlink | - | 2 | https://z.douyin.com/xxxxxxx | Zlink，允许外部APP直接唤起抖音直播间，未安装抖音应用用户，唤起抖音下载页，有效期60天 | - | - |
| 1 | command_info.live_appoint_info | live_appoint_info | - | 5 | - | 直播预告信息，仅command_type为3返回该项 | - | R1 |
| 2 | command_info.live_appoint_info.author_buyin_id | author_buyin_id | - | 2 | 112233 | 直播预告对应的达人百应ID | - | - |
| 2 | command_info.live_appoint_info.live_appointment_id | live_appointment_id | - | 2 | 123456 | 直播预告对应的达人百应ID | - | - |
| 2 | command_info.live_appoint_info.share_info | share_info | - | 5 | - | 转链分享物料 | - | R1 |
| 3 | command_info.live_appoint_info.share_info.deeplink | deeplink | - | 2 | snssdk1128://ec_goods_detail/?promotion_id=3471556980941674&kol_id=99575927 | deeplink | - | - |
| 3 | command_info.live_appoint_info.share_info.share_command | share_command | - | 2 | 长按覆[呲牙]zhi此条消息，咑[玫瑰]搜[烟花]，查看商品详情Ig9FOHrrl8ηη | 抖口令 | - | - |
| 3 | command_info.live_appoint_info.share_info.qrcode | qrcode | - | 5 | - | 二维码 | - | R1 |
| 4 | command_info.live_appoint_info.share_info.qrcode.url | url | - | 2 | https://p3.douyinpic.com/img/aweme-qrcode/PqFhya700510763792421~c5_360x360.webp?from=1723184 | 图片地址 | - | - |
| 4 | command_info.live_appoint_info.share_info.qrcode.width | width | - | 99 | 360 | 宽度 | - | - |
| 4 | command_info.live_appoint_info.share_info.qrcode.height | height | - | 99 | 360 | 高度 | - | - |
| 1 | command_info.activity_info | activity_info | - | 5 | - | 活动页信息，仅command_type为4返回该项 | - | R1 |
| 2 | command_info.activity_info.material_id | material_id | - | 99 | 123456 | 活动物料ID | - | - |
| 2 | command_info.activity_info.extra_params | extra_params | - | 2 | {"product_id":"12345678"}" | 活动页自定义参数，对应活动页转链接口的同名参数 | - | - |
| 2 | command_info.activity_info.share_info | share_info | - | 5 | - | 转链分享物料 | - | R1 |
| 3 | command_info.activity_info.share_info.deeplink | deeplink | - | 2 | snssdk1128://ec_goods_detail/?promotion_id=3471556980941674&kol_id=99575927 | deeplink | - | - |
| 3 | command_info.activity_info.share_info.share_command | share_command | - | 2 | 长按覆[呲牙]zhi此条消息，咑[玫瑰]搜[烟花]，查看商品详情Ig9FOHrrl8ηη | 抖口令 | - | - |
| 3 | command_info.activity_info.share_info.qrcode | qrcode | - | 5 | - | 二维码 | - | R1 |
| 4 | command_info.activity_info.share_info.qrcode.url | url | - | 2 | https://p3.douyinpic.com/img/aweme-qrcode/PqFhya700510763792421~c5_360x360.webp?from=1723184 | 图片地址 | - | - |
| 4 | command_info.activity_info.share_info.qrcode.width | width | - | 99 | 360 | 宽度 | - | - |
| 4 | command_info.activity_info.share_info.qrcode.height | height | - | 99 | 360 | 高度 | - | - |
| 3 | command_info.activity_info.share_info.zlink | zlink | - | 2 | https://z.douyin.com/xxxxxxx | Zlink，允许外部APP直接唤起抖音直播间，未安装抖音应用用户，唤起抖音下载页，有效期60天 | - | - |
| 1 | command_info.redpack_info | redpack_info | - | 5 | - | 抖客红包信息，仅command_type为5返回该项 | - | R1 |
| 2 | command_info.redpack_info.redpack_id | redpack_id | - | 2 | 123456 | 抖客红包ID | - | - |
| 2 | command_info.redpack_info.share_info | share_info | - | 5 | - | 转链分享物料 | - | R1 |
| 3 | command_info.redpack_info.share_info.deeplink | deeplink | - | 2 | snssdk1128://ec_goods_detail/?promotion_id=3471556980941674&kol_id=99575927 | deeplink | - | - |
| 3 | command_info.redpack_info.share_info.share_command | share_command | - | 2 | 长按覆[呲牙]zhi此条消息，咑[玫瑰]搜[烟花]，查看商品详情Ig9FOHrrl8ηη | 抖口令 | - | - |
| 3 | command_info.redpack_info.share_info.qrcode | qrcode | - | 5 | - | 二维码 | - | R1 |
| 4 | command_info.redpack_info.share_info.qrcode.url | url | - | 2 | https://p3.douyinpic.com/img/aweme-qrcode/PqFhya700510763792421~c5_360x360.webp?from=1723184 | 图片地址 | - | - |
| 4 | command_info.redpack_info.share_info.qrcode.width | width | - | 99 | 360 | 宽度 | - | - |
| 4 | command_info.redpack_info.share_info.qrcode.height | height | - | 99 | 360 | 高度 | - | - |
| 1 | command_info.pid | pid | - | 2 | "" | 口令携带的抖客pid，如为当前请求用户，则展示完整pid，其他抖客pid则展示“0”，非抖客口令则不展示 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/buyin/doukeCommandParseAndShare?app_key=your_appkey_here&method=buyin.doukeCommandParseAndShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/buyin/doukeCommandParseAndShare?app_key=your_appkey_here&method=buyin.doukeCommandParseAndShare&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
BuyinDoukeCommandParseAndShareRequest request = new BuyinDoukeCommandParseAndShareRequest();
BuyinDoukeCommandParseAndShareParam param = request.getParam();
param.setCommand("3.:/ hO长[抱拳]按????墆此条消息，搭[呲牙]揩ƿȎƲ[拥抱]ȳɫǹ搜索，查看商品详情ηηcuTRuYrzTv8Я\\t##cuTRuYrzTv8##");
BuyinDoukeCommandParseAndShareResponse response = request.execute(accessToken);

```

### php

```php
$request = new BuyinDoukeCommandParseAndShareRequest();
$param = new BuyinDoukeCommandParseAndShareParam();
$request->setParam($param);
$param->command = "3.:/ hO长[抱拳]按????墆此条消息，搭[呲牙]揩ƿȎƲ[拥抱]ȳɫǹ搜索，查看商品详情ηηcuTRuYrzTv8Я\\t##cuTRuYrzTv8##";
$response = $request->execute(accessToken);

```

### python

```python
request = BuyinDoukeCommandParseAndShareRequest()
param = request.getParams()
param.command = "3.:/ hO长[抱拳]按????墆此条消息，搭[呲牙]揩ƿȎƲ[拥抱]ȳɫǹ搜索，查看商品详情ηηcuTRuYrzTv8Я\\t##cuTRuYrzTv8##"
response = request.execute(accessToken)

```

### go

```go
request := buyin_doukeCommandParseAndShare_request.New()
param := request.GetParams()
param.Command = "3.:/ hO长[抱拳]按????墆此条消息，搭[呲牙]揩ƿȎƲ[拥抱]ȳɫǹ搜索，查看商品详情ηηcuTRuYrzTv8Я\\t##cuTRuYrzTv8##"
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new BuyinDoukeCommandParseAndShareRequest();
var param = request.BuildParam();
param.Command = "3.:/ hO长[抱拳]按????墆此条消息，搭[呲牙]揩ƿȎƲ[拥抱]ȳɫǹ搜索，查看商品详情ηηcuTRuYrzTv8Я\\t##cuTRuYrzTv8##";
var response = request.Execute<BuyinDoukeCommandParseAndShareResponse>(accessToken);

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
| 40004 | 非法的参数 | isv.parameter-invalid:4446 | 当前口令无效 | 当前口令无效 |
| 40004 | 非法的参数 | isv.parameter-invalid:4447 | 当前口令无效 | 当前口令无效 |
| 40004 | 非法的参数 | isv.parameter-invalid:4448 | 无效直播预告口令 | 无效直播预告口令 |
| 40004 | 非法的参数 | isv.parameter-invalid:4449 | 无效红包口令 | 无效红包口令 |
| 40004 | 非法的参数 | isv.parameter-invalid:4450 | 无效活动口令 | 无效活动口令 |
| 40004 | 非法的参数 | isv.parameter-invalid:4451 | 当前口令暂不支持解析 | 当前口令暂不支持解析 |
| 40004 | 非法的参数 | isv.parameter-invalid:4147 | 无效直播间口令 | 无效直播间口令 |
| 40004 | 非法的参数 | isv.parameter-invalid:4148 | 无效商品口令 | 无效商品口令 |
| 20001 | 内部服务超时 | isp.service-timeout-error:256 | 服务打瞌睡了，请稍后再试 | 服务打瞌睡了，请稍后再试 |
| 40004 | 非法的参数 | isv.parameter-invalid:8196 | 需对应角色正确授权后访问 | 需对应角色正确授权后访问 |
| 50002 | 业务处理失败 | isv.business-failed:454 | 454:无效口令 | 454:无效口令 |
| 50002 | 业务处理失败 | isv.business-failed:448 | 448:当前口令无效 | 448:当前口令无效 |
| 50002 | 业务处理失败 | isv.business-failed:446 | 446:当前口令暂不支持解析 | 446:当前口令暂不支持解析 |
| 50002 | 业务处理失败 | isv.business-failed:513 | 513:当前抖客暂不支持该功能 | 513:当前抖客暂不支持该功能 |
| 50002 | 业务处理失败 | isv.business-failed:4132 | 4132:商品没有加入精选联盟 | 4132:商品没有加入精选联盟 |
| 50002 | 业务处理失败 | isv.business-failed:4133 | 4133:商品已下架 | 4133:商品已下架 |
| 50002 | 业务处理失败 | isv.business-failed:4097 | 4097:参数校验失败 | 4097:参数校验失败 |
| 50002 | 业务处理失败 | isv.business-failed:4112 | 4112:当前达人未开通分销采买业务权限 | 4112:当前达人未开通分销采买业务权限 |
| 50002 | 业务处理失败 | isv.business-failed:449 | 449:无效直播间口令 | 449:无效直播间口令 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
