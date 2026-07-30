# /warehouse/adjustInventory

> 中文说明：库存调整(盘点和转移)  
> 所属类别：库存API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/34/760>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /warehouse/adjustInventory |
| 中文名称 | 库存调整(盘点和转移) |
| 文档目录 | 库存API |
| Article ID | 760 |
| 文档版本 | V1.01 |
| 官方更新时间 | 2021/8/2 20:30:49 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 0 |
| 限流等级（官方原值） | - |
| 限流值（官方原值） | - |

## 使用说明

无。

## 权限包

无

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

> 内容 JSON 解析失败：SyntaxError: Unexpected token '#', "## 库存调整(盘点"... is not valid JSON

```json
## 库存调整(盘点和转移)
库存调整(盘点和转移), 如云仓

## 公共参数
<TreeTable columns='[{"title":"参数名称","dataIndex":"argName","width":250},{"title":"参数类型","dataIndex":"argType"},{"title":"是否必须","dataIndex":"need"},{"title":"示例值","dataIndex":"demoValue"},{"title":"参数描述","dataIndex":"argDesc"}]' dataSource='[{"argName":"method","argType":"String","need":"是","demoValue":"/warehouse/adjustInventory","argDesc":"调用的API接口名称"},{"argName":"app_key","argType":"String","need":"是","demoValue":"6839996111118329223","argDesc":"应用创建完成后被分配的key"},{"argName":"access_token","argType":"String","need":"是","demoValue":"edae7c30-8386-443b-88a1-031111596fdd","argDesc":"用于调用 API 的 access_token"},{"argName":"param_json","argType":"String","need":"是","demoValue":"{cid:12,page:1}","argDesc":"标准json类型，里面是业务参数按照参数名的字符串大小排序具体参数值，参考每个接口的参数表"},{"argName":"timestamp","argType":"String","need":"是","demoValue":"2020-09-15 14:48:13","argDesc":"时间戳，格式为yyyy-MM-dd HH:mm:ss，时区为GMT+8，例如：2016-01-01 12:00:00"},{"argName":"v","argType":"String","need":"是","demoValue":"2","argDesc":"API协议版本，当前版本为2"},{"argName":"sign","argType":"String","need":"是","demoValue":"796559d40beb08a1a1113c456c5c5a62","argDesc":"输入参数签名结果，签名算法参照 [API调用指南](https://op.jinritemai.com/docs/guide-docs/10/23)"}]' childrenColumnName="children" />

## 请求入参
<TreeTable columns='[{"title":"参数名称","dataIndex":"argName","width":250},{"title":"参数类型","dataIndex":"argType"},{"title":"是否必须","dataIndex":"need"},{"title":"示例值","dataIndex":"demoValue"},{"title":"参数描述","dataIndex":"argDesc"}]' dataSource='[{"argName":"inventory_adjust_no","argType":"String","need":"是","demoValue":"xxx","argDesc":"库存调整单号"},{"argName":"warehouse_code","argType":"String","need":"是","demoValue":"xxx","argDesc":"仓库编码"},{"argName":"adjust_reason","argType":"String","need":"是","demoValue":"1","argDesc":"调整原因： 1-库存盘点 2-库存转移"},{"argName":"adjust_time","argType":"Number","need":"是","demoValue":"1626917115","argDesc":"调整时间"},{"argName":"remark","argType":"String","need":"是","demoValue":"货品丢失","argDesc":"备注"},{"argName":"details","argType":"List<Object>","need":"否","argDesc":"调整明细","children":[{"argName":"line_no","argType":"String","need":"是","demoValue":"1","argDesc":"行号"},{"argName":"cargo_code","argType":"String","need":"是","demoValue":"123","argDesc":"平台货品编码"},{"argName":"erp_sku_id","argType":"String","need":"否","demoValue":"123","argDesc":"ERP商品编码"},{"argName":"owner_id","argType":"Number","need":"否","demoValue":"123","argDesc":"货主编码"},{"argName":"owner_name","argType":"String","need":"否","demoValue":"xxx","argDesc":"货主名称"},{"argName":"shop_id","argType":"Number","need":"否","demoValue":"123","argDesc":"商家编码"},{"argName":"adjust_list","argType":"List<Object>","need":"是","argDesc":"调整列表","children":[{"argName":"inventory_type","argType":"","need":"是","demoValue":"1","argDesc":"库存类型 1:良品 2:次品"},{"argName":"inventory_status","argType":"","need":"是","demoValue":"1","argDesc":"库存状态 1:正常2:质检3:冻结"},{"argName":"batch_no","argType":"String","need":"否","demoValue":"xxxxx","argDesc":"批次号"},{"argName":"adjust_type","argType":"","need":"是","demoValue":"1","argDesc":"单据类型： 1-库存调增 2-库存调减"},{"argName":"adjust_qty","argType":"Number","need":"是","demoValue":"22","argDesc":"调整数量,正整数"},{"argName":"product_date","argType":"Number","need":"否","demoValue":"1626917115","argDesc":"生产日期"},{"argName":"expire_date","argType":"Number","need":"否","demoValue":"1626917115","argDesc":"过期日期"}]}]}]' childrenColumnName="children" />

## 响应参数
<TreeTable columns='[{"title":"参数名称","dataIndex":"argName","width":250},{"title":"参数类型","dataIndex":"argType"},{"title":"示例值","dataIndex":"demoValue"},{"title":"参数描述","dataIndex":"argDesc"},{"title":"加密等级","dataIndex":"securityLevel"}]' dataSource='[{"argName":"err_no","argType":"Number","demoValue":"-1","argDesc":"为0 表示成功","securityLevel":"R1"},{"argName":"message","argType":"String","demoValue":"系统异常","argDesc":"错误信息","securityLevel":"R1"},{"argName":"data","argType":"String","demoValue":"{}","argDesc":"响应数据","securityLevel":"R1"}]' childrenColumnName="children" />

## 请求示例
```http
https://openapi-fxg.jinritemai.com/warehouse/adjustInventory?app_key=your_appkey_here&method=warehouse.adjustInventory&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here
```

## 响应示例
```json
{"data":{"err_no":-1,"message":"系统异常","data":"{}"},"err_no": 0,"message": "success"}
```

```

