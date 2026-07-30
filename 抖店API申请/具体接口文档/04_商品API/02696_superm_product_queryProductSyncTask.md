# /superm/product/queryProductSyncTask

> 中文说明：查询异步执行的根任务列表  
> 所属类别：商品API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/14/2696>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /superm/product/queryProductSyncTask |
| 中文名称 | 查询异步执行的根任务列表 |
| 文档目录 | 商品API |
| Article ID | 2696 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2023/4/10 15:26:12 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 500 |

## 使用说明

查询异步执行的根任务列表

## 权限包

- 订单 / 电商小时达专用-临时（packageType=1）；适用应用类目：即时零售ERP、即时零售商家自研
- 小时达 / 抖超小时达（packageType=1）；适用应用类目：即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | superm.product/queryProductSyncTask | 调用的API接口名称 | - | - |
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
| 0 | task_type | task_type | true | 2 | batch_redistribute_sub_product | 任务类型。支持的任务类型有：batch_redistribute_sub_product - 重新分配店铺主品对应的门店子品; sync_sub_products_price - 将店铺主品的价格应用至门店子品；sync_sub_products - 主商品变更后变更结果同步至子商品 | - | - |
| 0 | task_id | task_id | false | 1 | 7158439918014824735 | 任务ID | - | - |
| 0 | page | page | true | 1 | 0 | 起始页 (从0开始) | - | - |
| 0 | size | size | true | 1 | 10 | 每页尺寸 (最大值50) | - | - |
| 0 | product_id | product_id | - | 1 | 3xxxxxxxxxxxxxxxxxxx | 主商品ID，传入则查询该主商品的相关任务 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | task_list | task_list | - | 3 | - | 任务列表 | - | R1 |
| 1 | task_list.task_id | task_id | - | 1 | 7158439918014824735 | 任务ID | - | R1 |
| 1 | task_list.root_task_id | root_task_id | - | 1 | 7158439918014824735 | 根任务ID | - | R1 |
| 1 | task_list.task_status | task_status | - | 2 | completed | 任务执行状态。支持的枚举有：waiting - 待执行; running - 执行中；completed - 执行完成； cancelled - 任务取消；error - 执行出错； unknown - 未知状态 | - | R1 |
| 1 | task_list.sync_result | sync_result | - | 2 | success | 业务执行结果，任务执行状态为completed执行完成时生效。支持的枚举值有：success - 同步成功； fail - 同步失败 | - | R1 |
| 1 | task_list.err_msg | err_msg | - | 2 | 门店尚未绑定运费模板 | 错误信息 | - | R1 |
| 1 | task_list.main_product_id | main_product_id | - | 1 | 3576410646054571500 | 店铺主商品ID | - | R1 |
| 1 | task_list.store_id | store_id | - | 1 | 56386074 | 门店ID | - | R1 |
| 1 | task_list.sub_product_id | sub_product_id | - | 1 | 3576410646054571501 | 门店子商品ID | - | R1 |
| 0 | page | page | - | 1 | 0 | 起始页 (从0开始) | - | R1 |
| 0 | size | size | - | 1 | 10 | 每页尺寸 (最大值50) | - | R1 |
| 0 | total | total | - | 1 | 30 | 任务总数 | - | R1 |

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
SupermProductQueryProductSyncTaskRequest request = new SupermProductQueryProductSyncTaskRequest();
SupermProductQueryProductSyncTaskParam param = request.getParam();
param.setTaskType("batch_redistribute_sub_product");
param.setTaskId(7158439918014824735L);
param.setPage(0L);
param.setSize(10L);
param.setProductId(3xxxxxxxxxxxxxxxxxxxL);
SupermProductQueryProductSyncTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new SupermProductQueryProductSyncTaskRequest();
$param = new SupermProductQueryProductSyncTaskParam();
$request->setParam($param);
$param->task_type = "batch_redistribute_sub_product";
$param->task_id = 7158439918014824735;
$param->page = 0;
$param->size = 10;
$param->product_id = 3xxxxxxxxxxxxxxxxxxx;
$response = $request->execute(accessToken);

```

### python

```python
request = SupermProductQueryProductSyncTaskRequest()
param = request.getParams()
param.task_type = "batch_redistribute_sub_product"
param.task_id = 7158439918014824735
param.page = 0
param.size = 10
param.product_id = 3xxxxxxxxxxxxxxxxxxx
response = request.execute(accessToken)

```

### go

```go
request := superm_product_queryProductSyncTask_request.New()
param := request.GetParams()
param.TaskType = "batch_redistribute_sub_product"
param.TaskId = 7158439918014824735
param.Page = 0
param.Size = 10
param.ProductId = 3xxxxxxxxxxxxxxxxxxx
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SupermProductQueryProductSyncTaskRequest();
var param = request.BuildParam();
param.TaskType = "batch_redistribute_sub_product";
param.TaskId = 7158439918014824735;
param.Page = 0;
param.Size = 10;
param.ProductId = 3xxxxxxxxxxxxxxxxxxx;
var response = request.Execute<SupermProductQueryProductSyncTaskResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:2010001 | 2010001:查询Task信息出错，请稍后重试 | 请稍后重试 |
| 50002 | 业务处理失败 | isv.business-failed:2010004 | 2010004:当前登录的用户信息不合法 | 2010004:当前登录的用户信息不合法 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
