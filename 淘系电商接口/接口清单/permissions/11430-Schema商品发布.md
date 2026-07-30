# 权限包 11430 · Schema商品发布

| 字段 | 值 |
|---|---|
| **权限包 ID** | `11430` |
| **分类** | 公共场景 |
| **名称** | Schema商品发布 |
| **API 数量** | 11 |
| **控制台 API 列表** | [api_list.htm?scopeId=11430](https://open.alitrip.com/docs/api_list.htm?scopeId=11430) |

## 包含接口

#### `tmall.product.schema.update`

**中文名**：产品更新接口

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=23433)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `product_id` | Number | 必须 | 123455 | 产品编号 |
| `xml_data` | String | 必须 | <itemrule><field id="prop_14837340 " name="体积 (含包装)" type="input "></field></itemrule> | 根据tmall.product.update.schema.get生成的产品更新规则入参数据 |

**常见错误码**

| 错误码 | 描述 | 解决方案 |
|---|---|---|
| `isv.invalid-parameter:prductId` | 产品不存在 | 无需更新,调整为发布 |
| `isv.invalid-parameter:cid` | 产品对应类目删除或者屏蔽 | 无需更新,更换产品 |
| `isv.parameter-parase-error:xml_data` | 入参数据无法被转换识别 | 按tmall.product.update.schema.get格式修改入参 |
| `isv.parameter-parase-error:` | 入参数据无法被转换识别 | 入参数据无法被转换识别 |
| `isv.invalid-parameter:barcode` | 条形码不存在或错误 | 条形码不存在或错误 |

---

#### `tmall.product.schema.get`

**中文名**：产品信息获取schema获取

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=23565)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `product_id` | Number | 必须 | 123 | 产品编号 |

**常见错误码**

| 错误码 | 描述 | 解决方案 |
|---|---|---|
| `isv.invalid-parameter:prductId` | 产品不存在 | 无需更新,调整为发布 |
| `isv.invalid-parameter:cid` | 产品对应类目删除或者屏蔽 | 无需更新,更换产品 |

---

#### `tmall.product.update.schema.get`

**中文名**：产品更新规则获取接口

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=23432)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `product_id` | Number | 必须 | 123 | 产品编号 |

**常见错误码**

| 错误码 | 描述 | 解决方案 |
|---|---|---|
| `isv.invalid-parameter:prductId` | 产品不存在 | 无需更新,调整为发布 |
| `isv.invalid-parameter:cid` | 产品对应类目删除或者屏蔽 | 无需更新,更换产品 |

---

#### `tmall.product.add.schema.get`

**中文名**：产品发布规则获取接口

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=23257)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `category_id` | Number | 必须 | 1512 | 商品发布的目标类目，必须是叶子类目 |
| `brand_id` | Number | 可选 | 1 | 品牌ID |

**常见错误码**

| 错误码 | 描述 | 解决方案 |
|---|---|---|
| `isv.invalid-parameter:cid` | 产品对应类目删除或者屏蔽 | 不能在该类目发布产品 |
| `isv.invalid-parameter` | 参数格式不正确，brand_id或category_id未添加 | 参数格式不正确，请检查brand_id、category_id参数信息 |

---

#### `tmall.item.calculate.hscode.get`

**中文名**：算法获取hscode

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=26569)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `item_id` | Number | 可选 | 12345 | 商品id |

---

#### `tmall.product.schema.match`

**中文名**：product匹配接口

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=23259)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `category_id` | Number | 必须 | 1512 | 商品发布的目标类目，必须是叶子类目 |
| `propvalues` | String | 必须 | <itemRule> <field id="prop_13021751" name="货号" type="input"><value>123</value> </field> <field id="prop_20000" name="品牌" type="singleCheck"><value>30111</value> </field> </itemRule> | 根据tmall.product.match.schema.get获取到的模板，ISV将需要的字段填充好相应的值结果XML。 |

**常见错误码**

| 错误码 | 描述 | 解决方案 |
|---|---|---|
| `isv.invalid-parameter:category-not-found` | 商品发布的目标类目不存在 | 商品发布的目标类目不存在，请检查参数 |
| `isp.service-unavailable` | 系统繁忙，请稍后重试 | 系统繁忙，请稍后重试 |

---

#### `tmall.product.match.schema.get`

**中文名**：获取匹配产品规则

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=23258)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `category_id` | Number | 必须 | 1512 | 商品发布的目标类目，必须是叶子类目 |

**常见错误码**

| 错误码 | 描述 | 解决方案 |
|---|---|---|
| `isv.invalid-parameter:category-not-found` | 商品发布的目标类目不存在 | 商品发布的目标类目不存在，请检查参数 |
| `isv.invalid-parameter:not-leaft-category` | 商品发布的目标类目非叶子类目 | 商品发布的目标类目非叶子类目，请检查参数 |
| `isp.service-unavailable` | 系统繁忙，请稍后重试 | 系统繁忙，请稍后重试 |

---

#### `tmall.product.schema.add`

**中文名**：使用Schema文件发布一个产品

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=23260)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `category_id` | Number | 必须 | 1512 | 商品发布的目标类目，必须是叶子类目 |
| `brand_id` | Number | 可选 | 12345 | 品牌ID |
| `xml_data` | String | 必须 | <itemrule><field id="prop_14837340 " name="体积 (含包装)" type="input "></field></itemrule> | 根据tmall.product.add.schema.get生成的产品发布规则入参数据 |

**常见错误码**

| 错误码 | 描述 | 解决方案 |
|---|---|---|
| `isv.invalid-parameter:cid` | 产品对应类目删除或者屏蔽 | 不能发布该类目的产品 |
| `isv.parameter-parase-error:xml_data` | 入参数据无法被转换识别 | 按tmall.product.add.schema.get格式修改入参 |

---

#### `tmall.item.add.simpleschema.get`

**中文名**：天猫发布商品规则获取

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=25456)

---

#### `tmall.item.hscode.detail.get`

**中文名**：通过hscode获取计量单位

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=30672)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `hscode` | String | 必须 | 9102120000 | hscode |

---

#### `tmall.item.hscode.audit.results.query`

**中文名**：商品hscode信息审核状态查询接口

**官方文档**：[链接](https://open.alitrip.com/docs/api.htm?scopeId=11430&apiId=45258)

**请求参数（业务参数，已排除公共参数）**

| 参数 | 类型 | 必填 | 示例 | 说明 |
|---|---|:---:|---|---|
| `item_id` | Number | 必须 | 12345678 | 商品ID |

---
