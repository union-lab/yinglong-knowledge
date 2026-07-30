# /order/invoiceUpload

> 中文说明：订单发票上传  
> 所属类别：订单API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/15/892>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /order/invoiceUpload |
| 中文名称 | 订单发票上传 |
| 文档目录 | 订单API |
| Article ID | 892 |
| 文档版本 | - |
| 官方更新时间 | 2025/12/10 14:18:13 |
| 授权主体 | [] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | - |
| 限流值（官方原值） | - |

## 使用说明

订单发票上传

## 权限包

- 账单 / 电子发票（packageType=1）；适用应用类目：创新应用大赛_微应用、售后管理、企业财税服务、创新应用大赛_软件服务、商家后台系统、即时零售ebill订单管理（临时）、即时零售ERP、即时零售商家自研、订单管理、电商ERP

## 公共请求参数

无。

## 业务请求参数

无。

## 响应参数

无。

## 请求示例

无。

## 响应示例

无。

## 错误码

无。

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。

> 内容 JSON 解析失败：SyntaxError: Unexpected token '#', "## 发票信息回传A"... is not valid JSON

```json
## 发票信息回传API
1、/order/invoiceList获取到待开票(status=1）时，可调此接口回传发票，回传完毕以后状态为已开票
	2、同一订单可以多次上传，相同订单会覆盖。只会给买家展示最后一次更新上来的发票信息。
## 公共参数
| 参数名称 | 参数类型 | 是否必须 | 示例值 | 参数描述 |
|--|--|--|--|--|
| method | String | 是 | order.stockUp | 调用的API接口名称 |
| app_key | String | 是 | 6839996111118329223 | 应用创建完成后被分配的key 
| access_token | String | 是 | edae7c30-8386-443b-88a1-031111596fdd | 用于调用 API 的 access_token 
| param_json | String | 是 | {"order_id":"4830014659379269385"}| 标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表 | 
| timestamp | String | 是 | 2020-09-15 14:48:13 | 时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00 | 
| v | String | 是 | 2 | API协议版本，当前版本为2 | 
| sign | String | 是 | 796559d40beb08a1a1113c456c5c5a62 | 输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23) | 


## 业务参数
| 参数名称 | 参数类型 | 是否必须 | 示例值 | 参数描述 | 
|--|--|--|--|--| 
| order_id | String | 是 | 6496679971677798670 | 父订单id，由/order/searchList接口返回；注意：同一订单可以多次上传，相同订单会覆盖。只会给买家展示最后一次更新上来的发票信息。 | 
| upload_file| String | 是 |/User/abc.pdf | 发票上传文件内容，如果传了upload_file参数，则支持最多上传上传1份文件，支持上传的文件格式为pdf，不超过10M，如果form-data文件参数有多个，则会批量上传，每次批量上传最多不超过3个文件；注意：符合要求的格式有 .pdf .PDF .ofd .OFD .xml .XML 不符合的格式会被直接拦截| 
| invoice_sub_type | Int64 | 否 | 1 | 支持传发票子类型, 可选, 1 蓝票 2 红票。缺省则默认传蓝票 |

## Curl请求示例 
```
POST 'https://openapi-fxg.jinritemai.com/order/invoiceUpload?app_key=6899692843447633416&method=order.invoiceUpload&access_token=3176d4e7-5df9-4dd7-b8bc-bba8b1056fb8&sign=0d2222e25806b6feb3dad9f72d9495db&timestamp=2006-01-02%2015%3A04%3A05&v=2&param_json=%7B%22order_id%22%3A%224830014659379269385%22%7D' --form 'upload_file=@"/Users/zng/Downloads/Doc2.pdf"' --form 'param_json="{\"order_id\":\"4814782476258575939\"}
``` 


## Java请求示例
``` 
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
  .addFormDataPart("upload_file","4ec7f773d3cadafe95325c010b95797f",
    RequestBody.create(MediaType.parse("application/octet-stream"),
    new File("/path/to/file")))
  .build();
Request request = new Request.Builder()
  .url("https://openapi-fxg.jinritemai.com/order/invoiceUpload?param_json={\"order_id\":\"xxxxx\"}&app_key=6899692843447633416&method=order.invoiceUpload&access_token=3176d4e7-5df9-4dd7-b8bc-bba8b1056fb8&sign=48404723435db1ee67f4e95676b7fa35&timestamp=2021-08-11 16:49:00&v=2")
  .method("POST", body)
  .build();
Response response = client.newCall(request).execute();

``` 


## 响应参数 
无

## 响应示例 
```
json {"code":10000,"err_no":0,"log_id":"2021123115421201015803608806686540","message":"success","msg":"success","sub_code":"","sub_msg":""}
```
```

