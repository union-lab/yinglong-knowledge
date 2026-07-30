# /second/ecomInsight/createTask

> 中文说明：创建task任务接口  
> 所属类别：短视频API  
> 官方文档：<https://op.jinritemai.com/docs/api-docs/1568/7935>  
> 本地归档日期：2026-07-14

## 接口元数据

| 项目 | 内容 |
|---|---|
| 接口路径 | /second/ecomInsight/createTask |
| 中文名称 | 创建task任务接口 |
| 文档目录 | 短视频API |
| Article ID | 7935 |
| 文档版本 | V2.01 |
| 官方更新时间 | 2026/4/2 17:35:22 |
| 授权主体 | ["店铺"] |
| 收费类型（官方原值） | 1 |
| 限流等级（官方原值） | 1 |
| 限流值（官方原值） | 100 |

## 使用说明

通过条件创建对应视频创建、理解，图片生成等任务，接口明细https://bytedance.sg.larkoffice.com/docx/CdM7dD8FVoub3VxpnFdlPk7zglh

## 权限包

- 短视频 / 短视频（packageType=1）；适用应用类目：短视频工具、AIGC视频创作、AIGC视频洞察、直播工具、直播间AI导购、直播间导购-微应用、电商ERP、商品基础工具

## 公共请求参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | method | - | true | 2 | second.ecomInsight/createTask | 调用的API接口名称 | - | - |
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
| 0 | video_by_pic_first_frame_request | videoByPicFirstFrameRequest | false | 5 | - | 视频生成-基于首帧 | - | - |
| 1 | video_by_pic_first_frame_request.base | base | true | 5 | - | 基础信息 | - | - |
| 2 | video_by_pic_first_frame_request.base.model | model | true | 2 | Doubao-Seedance-1.0-pro-fast | 首帧生成视频支持模型：<br>Doubao-Seedance-1.0-pro-fast | - | - |
| 2 | video_by_pic_first_frame_request.base.task_type | task_type | true | 2 | VideoByPicFirstFrame | 任务类型 | - | - |
| 2 | video_by_pic_first_frame_request.base.name | name | true | 2 | 电商任务1 | 任务名（不可重复） | - | - |
| 1 | video_by_pic_first_frame_request.fps | fps | true | 2 | 25 | 帧数 | - | - |
| 1 | video_by_pic_first_frame_request.first_frame_asset | first_frame_asset | true | 5 | - | 首帧素材 | - | - |
| 2 | video_by_pic_first_frame_request.first_frame_asset.file_element | file_element | true | 2 | xxxxxx | 文件，内容包括视频url、商品id、图片url、素材id等，根据type传入 | - | - |
| 2 | video_by_pic_first_frame_request.first_frame_asset.type | type | true | 2 | path | asset(素材，fileElement使用素材id)，path（图片或视频url，必须是公网可访问的），video_id（抖音视频id）， product_id（商品id（主图视频）） | - | - |
| 1 | video_by_pic_first_frame_request.text | text | true | 2 | 示例：指定生成视频的宽高比为16:9，时长为 5 秒，帧率为 24 fps，分辨率为720p，包含水印，不固定摄像头<br>一位身穿绿色亮片礼服的女性站在粉红色背景前，周围飘落着五彩斑斓的彩纸 --rt 16:9 --dur 5 --fps 24 --rs 720p --wm true --cf false | 文生视频、图生视频中在text后添加--参数的方式添加对应视频参数（参数必填）。   --rt 比例 --dur 视频时长  --fps 视频帧数  --rs 清晰度  --wm 是否包含水印 -- cf 是否固定摄像头 | - | - |
| 1 | video_by_pic_first_frame_request.generate_audio | generate_audio | false | 4 | true | 是否生成对应音频 | - | - |
| 1 | video_by_pic_first_frame_request.return_last_frame | return_last_frame | false | 4 | true | 是否返回尾帧 | - | - |
| 0 | video_by_pic_first_last_frame_request | videoByPicFirstLastFrameRequest | false | 5 | - | 视频生成-基于首尾帧 | - | - |
| 1 | video_by_pic_first_last_frame_request.text | text | true | 2 | 示例：指定生成视频的宽高比为16:9，时长为 5 秒，帧率为 24 fps，分辨率为720p，包含水印，不固定摄像头<br>一位身穿绿色亮片礼服的女性站在粉红色背景前，周围飘落着五彩斑斓的彩纸 --rt 16:9 --dur 5 --fps 24 --rs 720p --wm true --cf false | 文生视频、图生视频中在text后添加--参数的方式添加对应视频参数（参数必填）。   --rt 比例 --dur 视频时长  --fps 视频帧数  --rs 清晰度  --wm 是否包含水印 -- cf 是否固定摄像头 | - | - |
| 1 | video_by_pic_first_last_frame_request.generate_audio | generate_audio | false | 4 | true | 是否返回音频 | - | - |
| 1 | video_by_pic_first_last_frame_request.last_frame_asset | last_frame_asset | true | 5 | - | 尾帧素材 | - | - |
| 2 | video_by_pic_first_last_frame_request.last_frame_asset.file_element | file_element | true | 2 | xxxxx | 文件，内容包括视频url、商品id、图片url、素材id等，根据type传入 | - | - |
| 2 | video_by_pic_first_last_frame_request.last_frame_asset.type | type | true | 2 | path | asset(素材，fileElement使用素材id)，path（图片或视频url，必须是公网可访问的），video_id（抖音视频id）， product_id（商品id（主图视频）） | - | - |
| 1 | video_by_pic_first_last_frame_request.return_last_frame | return_last_frame | false | 4 | true | 是否返回尾帧数 | - | - |
| 1 | video_by_pic_first_last_frame_request.first_frame_asset | first_frame_asset | true | 5 | - | 首帧素材 | - | - |
| 2 | video_by_pic_first_last_frame_request.first_frame_asset.type | type | true | 2 | path | asset(素材，fileElement使用素材id)，path（图片或视频url，必须是公网可访问的），video_id（抖音视频id）， product_id（商品id（主图视频）） | - | - |
| 2 | video_by_pic_first_last_frame_request.first_frame_asset.file_element | file_element | true | 2 | xxxx | 文件，内容包括视频url、商品id、图片url、素材id等，根据type传入 | - | - |
| 1 | video_by_pic_first_last_frame_request.base | base | true | 5 | - | 基础信息 | - | - |
| 2 | video_by_pic_first_last_frame_request.base.name | name | true | 2 | 电商任务1 | 任务名 | - | - |
| 2 | video_by_pic_first_last_frame_request.base.model | model | true | 2 | Doubao-Seedance-1.0-pro | 首尾帧支持模型：<br>Doubao-Seedance-1.0-pro | - | - |
| 2 | video_by_pic_first_last_frame_request.base.task_type | task_type | true | 2 | VideoByPicFirstLastFrame | 任务类型 | - | - |
| 1 | video_by_pic_first_last_frame_request.fps | fps | false | 2 | 25 | 帧数 | - | - |
| 0 | video_understand_request | videoUnderstandRequest | false | 5 | - | 视频理解 | - | - |
| 1 | video_understand_request.fps | fps | true | 2 | 25 | 视频理解的帧数，会根据输入的帧数抽帧进行视频理解 | - | - |
| 1 | video_understand_request.text | text | true | 2 | 视频中有几个人？ | 描述 | - | - |
| 1 | video_understand_request.standard_prompt | standard_prompt | false | 4 | false | 是否使用标准模版输出 | - | - |
| 1 | video_understand_request.max_tokens | max_tokens | false | 2 | 4096 | 结果最大tokens，默认4096，最大32000 | - | - |
| 1 | video_understand_request.video_asset | video_asset | true | 5 | - | 理解视频素材 | - | - |
| 2 | video_understand_request.video_asset.type | type | true | 2 | video_id | asset(素材，fileElement使用素材id)，path（图片或视频url，必须是公网可访问的），video_id（抖音视频id）， product_id（商品id（主图视频）） | - | - |
| 2 | video_understand_request.video_asset.file_element | file_element | true | 2 | xxxx | 文件，内容包括视频url、商品id、图片url、素材id等，根据type传入 | - | - |
| 1 | video_understand_request.base | base | true | 5 | - | 基础信息 | - | - |
| 2 | video_understand_request.base.name | name | true | 2 | xxxxxx | 任务名 | - | - |
| 2 | video_understand_request.base.task_type | task_type | true | 2 | VideoUnderstand | 任务类型 | - | - |
| 2 | video_understand_request.base.model | model | true | 2 | Doubao-Seed-1.6-vision | 视频理解支持模型：<br>Doubao-Seed-1.6-vision | - | - |
| 0 | video_by_pic_ref_and_video_request | videoByPicRefAndVideoRequest | false | 5 | - | VideoPilot生成视频参数 | - | - |
| 1 | video_by_pic_ref_and_video_request.ratio | ratio | false | 2 | 16:9 | 生成视频的宽高比例。不同宽高比对应的宽高像素值见下方:<br>- 16:9 <br>- 4:3<br>- 1:1<br>- 3:4<br>- 9:16<br>- 21:9<br>- adaptive：根据输入自动选择最合适的宽高比 | - | - |
| 1 | video_by_pic_ref_and_video_request.generate_audio | generate_audio | false | 4 | true | 是否返回音频 | - | - |
| 1 | video_by_pic_ref_and_video_request.watermark | watermark | false | 4 | true | 是否添加水印 | - | - |
| 1 | video_by_pic_ref_and_video_request.tools | tools | false | 3 | - | 使用联网搜索 | - | - |
| 2 | video_by_pic_ref_and_video_request.tools.type | type | false | 2 | web_search | web_search | - | - |
| 1 | video_by_pic_ref_and_video_request.return_last_frame | return_last_frame | false | 4 | true | 是否返回尾帧 | - | - |
| 1 | video_by_pic_ref_and_video_request.duration | duration | false | 99 | 10 | 生成视频时长，仅支持整数，单位：秒。<br>取值范围：[4,15] 或设置为-1(自动适配时长) | - | - |
| 1 | video_by_pic_ref_and_video_request.content | content | false | 3 | - | 请求数据 | - | - |
| 2 | video_by_pic_ref_and_video_request.content.text | text | false | 2 | 生成一个视频 | 提示词 | - | - |
| 2 | video_by_pic_ref_and_video_request.content.type | type | false | 2 | text | 传入content类型：text（图片）、image_url（图片）、video_url(视频) | - | - |
| 2 | video_by_pic_ref_and_video_request.content.video_url | video_url | false | 5 | - | 视频url信息 | - | - |
| 3 | video_by_pic_ref_and_video_request.content.video_url.type | type | false | 2 | path | 根据类型在url中传入对应的信息，path（图片或视频url，必须是公网可访问的），video_id（抖音视频id）， product_id（商品id（主图视频）） | - | - |
| 3 | video_by_pic_ref_and_video_request.content.video_url.url | url | false | 2 | xxxx | 视频url地址（公网可访问，不可以直接传图片文件）、抖音视频id、主图榜单商品id | - | - |
| 2 | video_by_pic_ref_and_video_request.content.audio_url | audio_url | false | 5 | - | 音频url信息 | - | - |
| 3 | video_by_pic_ref_and_video_request.content.audio_url.url | url | false | 2 | xxxx | 音频url地址（公网可访问，不可以直接传音频文件） | - | - |
| 2 | video_by_pic_ref_and_video_request.content.image_url | image_url | false | 5 | - | 图片数据 | - | - |
| 3 | video_by_pic_ref_and_video_request.content.image_url.url | url | false | 2 | xxxx | 图片url地址（公网可访问，不可以直接传图片文件） | - | - |
| 2 | video_by_pic_ref_and_video_request.content.role | role | false | 2 | reference_video | 图片或者视频的位置或用途。<br>图片：first_frame（首帧）、last_frame（尾帧）、reference_image（参考图1～9张）<br>视频：reference_video（参考视频，单个视频时长 [2, 15] s，最多传入 3 个参考视频，所有视频总时长不超过 15s）<br>音频：reference_audio（单个音频时长 [2, 15] s，最多传入 3 段参考音频，所有音频总时长不超过 15 s） | - | - |
| 1 | video_by_pic_ref_and_video_request.resolution | resolution | false | 2 | 720p | 分辨率:<br>480p、720p | - | - |
| 1 | video_by_pic_ref_and_video_request.base | base | true | 5 | - | 基础信息 | - | - |
| 2 | video_by_pic_ref_and_video_request.base.name | name | true | 2 | xxxxx | 任务名 | - | - |
| 2 | video_by_pic_ref_and_video_request.base.model | model | true | 2 | 无 | 传入对应model | - | - |
| 2 | video_by_pic_ref_and_video_request.base.task_type | task_type | true | 2 | VideoByPicRefAndVideo | 任务类型 | - | - |
| 0 | pic_by_text_request | picByTextRequest | false | 5 | - | 文生图 | - | - |
| 1 | pic_by_text_request.size | size | true | 2 | 2K | 生成图片的大小：2K | - | - |
| 1 | pic_by_text_request.prompt | prompt | true | 2 | 生成一张老虎晒太阳的图片 | 需要进行的图片风格的描述 | - | - |
| 1 | pic_by_text_request.watermark | watermark | true | 4 | true | 是否生成水印 | - | - |
| 1 | pic_by_text_request.base | base | true | 5 | - | 基础信息 | - | - |
| 2 | pic_by_text_request.base.task_type | task_type | true | 2 | PicByText | 任务类型：<br>PicByText | - | - |
| 2 | pic_by_text_request.base.name | name | true | 2 | xxxxx | 任务名（不可重复） | - | - |
| 2 | pic_by_text_request.base.model | model | true | 2 | Doubao-Seedream-4.0 | 文生图支持模型：<br>Doubao-Seedream-4.0 | - | - |
| 1 | pic_by_text_request.sequential_image_generation | sequential_image_generation | true | 2 | disabled | 是否生成组图 disabled - 不生成，auto - 生成 | - | - |
| 1 | pic_by_text_request.image | image | false | 3 | - | 图片素材 | - | - |
| 2 | pic_by_text_request.image.type | type | false | 2 | path | asset(素材，fileElement使用素材id)，path（图片或视频url，必须是公网可访问的），video_id（抖音视频id）， product_id（商品id（主图视频）） | - | - |
| 2 | pic_by_text_request.image.file_element | file_element | false | 2 | xxxxx | 文件，内容包括视频url、商品id、图片url、素材id等，根据type传入 | - | - |
| 0 | video_by_text_request | videoByTextRequest | false | 5 | - | 文生视频 | - | - |
| 1 | video_by_text_request.base | base | true | 5 | - | 基础信息 | - | - |
| 2 | video_by_text_request.base.task_type | task_type | true | 2 | VideoByText | 任务类型：VideoByText | - | - |
| 2 | video_by_text_request.base.name | name | true | 2 | xxxxx | 任务名（不可重复） | - | - |
| 2 | video_by_text_request.base.model | model | true | 2 | Doubao-Seedance-1.0-pro-fast | 文生视频支持模型：<br>Doubao-Seedance-1.0-pro-fast | - | - |
| 1 | video_by_text_request.generate_audio | generate_audio | false | 4 | true | 是否返回音频 | - | - |
| 1 | video_by_text_request.return_last_frame | return_last_frame | false | 4 | true | 是否返回尾帧 | - | - |
| 1 | video_by_text_request.text | text | true | 2 | 指定生成视频的宽高比为16:9，时长为 5 秒，帧率为 24 fps，分辨率为720p，包含水印，不固定摄像头<br>对应text：一位身穿绿色亮片礼服的女性站在粉红色背景前，周围飘落着五彩斑斓的彩纸 --rt 16:9 --dur 5 --fps 24 --rs 720p --wm true --cf false | 文生视频、图生视频中在text后添加--参数的方式添加对应视频参数（参数必填） --rt 比例、 --dur 视频时长、--fps 视频帧数、--rs 清晰度  --wm 是否包含水印 -- cf 是否固定摄像头 | - | - |
| 0 | pic_edit_request | picEditRequest | false | 5 | - | 图片修改 | - | - |
| 1 | pic_edit_request.image | image | true | 2 | https://ark-project.tos-cn-beijing.volces.com/doc_image/seedream4_imageToimage.png | 图片文件的url | - | - |
| 1 | pic_edit_request.prompt | prompt | true | 2 | 将图中的小狗替换为一只老虎 | 文本 | - | - |
| 1 | pic_edit_request.base | base | true | 5 | - | 基础信息 | - | - |
| 2 | pic_edit_request.base.task_type | task_type | true | 2 | PicEdit | 任务类型 | - | - |
| 2 | pic_edit_request.base.name | name | true | 2 | xxx | 任务名 | - | - |
| 2 | pic_edit_request.base.model | model | true | 2 | Doubao-SeedEdit-3.0-i2i | 模型名 | - | - |
| 1 | pic_edit_request.watermark | watermark | true | 4 | true | 是否生成水印 | - | - |
| 1 | pic_edit_request.seed | seed | true | 99 | 123 | 随机数种子，用于控制模型生成内容的随机性。取值范围为 [-1, 2147483647] | - | - |
| 1 | pic_edit_request.guidance_scale | guidance_scale | true | 9 | 7.5 | 模型输出结果与prompt的一致程度，生成图像的自由度，又称为文本权重；值越大，模型自由度越小，与用户输入的提示词相关性越强。取值范围1-10 | - | - |
| 0 | speech_by_text_request | speechByTextRequest | false | 5 | - | 语音生成结构 | - | - |
| 1 | speech_by_text_request.text | text | true | 2 | xxxx | 文本 | - | - |
| 1 | speech_by_text_request.loudness_rate | loudness_rate | false | 2 | 0 | 音量，取值范围[-50,100]，100代表2.0倍音量，-50代表0.5倍音量（mix音色暂不支持），默认值0 | - | - |
| 1 | speech_by_text_request.section_id | section_id | false | 2 | xxxx | 其他合成语音的会话id(session_id)，用于辅助当前语音合成，提供更多的上下文信息；<br>取值，参见接口交互中的session_id<br>示例：<br>1. section_id="bf5b5771-31cd-4f7a-b30c-f4ddcbf2f9da"<br>注意：<br>1. 该字段仅适用于"豆包语音合成模型2.0"的音色<br>2. 历史上下文的session_id 有效期：<br>  1. 最长30轮<br>  2. 最长10分钟 | - | - |
| 1 | speech_by_text_request.post_process_pitch | post_process_pitch | false | 2 | 0 | 音调取值范围是[-12,12]，默认0 | - | - |
| 1 | speech_by_text_request.aigc_watermark | aigc_watermark | false | 4 | false | 默认：false<br>是否在合成结尾增加音频节奏标识 | - | - |
| 1 | speech_by_text_request.disable_emoji_filter | disable_emoji_filter | false | 4 | false | 开启emoji表情在文本中不过滤显示，默认为false，建议搭配时间戳参数一起使用。 | - | - |
| 1 | speech_by_text_request.enable_language_detector | enable_language_detector | false | 4 | false | 自动识别语种，默认值false | - | - |
| 1 | speech_by_text_request.aigc_metadata_enable | aigc_metadata_enable | false | 4 | false | 是否启用隐式水印，默认false | - | - |
| 1 | speech_by_text_request.explicit_language | explicit_language | false | 2 | zh | - 不给定参数，启用多语种前端zh,en,ja,es-mx,id,pt-br,de,fr<br>- zh,en,ja,es-mx,id,pt-br,de,fr 启用多语种前端<br>- zh-cn 中文为主，支持中英混<br>- en 仅英文<br>- ja 仅日文<br>- es-mx 仅墨西<br>- id 仅印尼<br>- pt-br 仅巴葡<br>- de 仅德语<br>- fr 仅法语 | - | - |
| 1 | speech_by_text_request.base | base | true | 5 | - | 基础参数 | - | - |
| 2 | speech_by_text_request.base.model | model | true | 2 | Seed-TTS-2.0 | 模型：Seed-TTS-2.0 Seed-TTS-1.0 | - | - |
| 2 | speech_by_text_request.base.name | name | true | 2 | xxxx | 任务名 | - | - |
| 2 | speech_by_text_request.base.task_type | task_type | true | 2 | SpeechByText | 任务类型 | - | - |
| 1 | speech_by_text_request.voice | voice | true | 2 | zh_female_vv_uranus_bigtts | 嗓音支持2.0部分语言，https://www.volcengine.com/docs/6561/1257544?lang=zh | - | - |
| 1 | speech_by_text_request.emotion | emotion | false | 2 | shy | 情感设置，可设置angry等，https://www.volcengine.com/docs/6561/1257544?lang=zh | - | - |
| 1 | speech_by_text_request.speech_rate | speech_rate | false | 2 | 0 | 语速，取值范围[-50,100]，100代表2.0倍速，-50代表0.5倍数，默认值0 | - | - |
| 1 | speech_by_text_request.disable_markdown_filter | disable_markdown_filter | false | 4 | false | 是否开启markdown解析过滤，<br>为true时，解析并过滤markdown语法，例如，你好，会读为“你好”，<br>为false时，不解析不过滤，例如，你好，会读为“星星‘你好’星星”，默认值false | - | - |
| 1 | speech_by_text_request.silence_duration | silence_duration | false | 2 | 0 | 设置该参数可在句尾增加静音时长，范围0~30000ms。（注：增加的句尾静音主要针对传入文本最后的句尾，而非每句话的句尾），默认值0 | - | - |
| 1 | speech_by_text_request.context_language | context_language | false | 2 | pt | - 不给定 西欧语种采用英语<br>- id 西欧语种采用印尼<br>- es 西欧语种采用墨西<br>- pt 西欧语种采用巴葡 | - | - |
| 1 | speech_by_text_request.sample_rate | sample_rate | false | 2 | 24000 | 音频采样率，可选值 [8000,16000,22050,24000,32000,44100,48000]，默认值24000 | - | - |
| 1 | speech_by_text_request.max_length_to_filter_parenthesis | max_length_to_filter_parenthesis | false | 99 | 100 | 是否过滤括号内的部分，0为不过滤，100为过滤，默认值100 | - | - |
| 1 | speech_by_text_request.context_texts | context_texts | false | 3 | ["你可以说慢一点吗？"] | 语音合成的辅助信息，用于模型对话式合成，能更好的体现语音情感；<br>可以探索，比如常见示例有以下几种：<br>1. 语速调整<br>  1. 比如：context_texts: ["你可以说慢一点吗？"]<br>2. 情绪/语气调整<br>  1. 比如：context_texts=["你可以用特别特别痛心的语气说话吗?"]<br>  2. 比如：context_texts=["嗯，你的语气再欢乐一点"]<br>3. 音量调整<br>  1. 比如：context_texts=["你嗓门再小点。"]<br>4. 音感调整<br>  1. 比如：context_texts=["你能用骄傲的语气来说话吗？"]<br>注意：<br>1. 该字段仅适用于"豆包语音合成模型2.0"的音色<br>2. 当前字符串列表只第一个值有效<br>3. 该字段文本不参与计费 | - | - |
| 1 | speech_by_text_request.emotion_scale | emotion_scale | false | 2 | 4 | 调用emotion设置情感参数后可使用emotion_scale进一步设置情绪值，范围1~5，不设置时默认值为4。<br>注：理论上情绪值越大，情感越明显。但情绪值1~5实际为非线性增长，可能存在超过某个值后，情绪增加不明显，例如设置3和5时情绪值可能接近。 | - | - |
| 1 | speech_by_text_request.unsupported_char_ratio_thresh | unsupported_char_ratio_thresh | false | 2 | 0.3 | 默认: 0.3，最大值: 1.0<br>检测出不支持合成的文本超过设置的比例，则会返回错误。 | - | - |
| 1 | speech_by_text_request.encoding | encoding | false | 2 | mp3 | 音频编码格式，mp3/ogg_opus/pcm，默认mp3 | - | - |
| 1 | speech_by_text_request.bit_rate | bit_rate | false | 2 | 8000 | 音频比特率，可传16000、32000等。bit_rate默认设置范围为64k～160k，默认值8000 | - | - |
| 0 | pic_understand_request | picUnderstandRequest | false | 5 | - | 图片理解 | - | - |
| 1 | pic_understand_request.max_tokens | max_tokens | false | 2 | 4096 | 结果最大tokens，默认4096，最大32000 | - | - |
| 1 | pic_understand_request.detail | detail | true | 2 | low | - low：“低分辨率”模式，处理速度会提高，适合图片本身细节较少或者只需模型理解图片大致信息或者对速度有要求的场景。<br>- high：“高分辨率”模式，模型可感知图片更多的细节，但是处理图片速度会降低，适合图像像素值高且需关注细节信息的场景，如街道地图分析等。 | - | - |
| 1 | pic_understand_request.text | text | true | 2 | 图中的动物是什么？ | 文本 | - | - |
| 1 | pic_understand_request.image | image | false | 2 | xxxx | 图片url，image或images参数最少一个有数据 | - | - |
| 1 | pic_understand_request.images | images | false | 3 | [xxxx,xxxx] | 图片url集合，image或images参数最少一个有数据 | - | - |
| 1 | pic_understand_request.base | base | true | 5 | - | 基础参数 | - | - |
| 2 | pic_understand_request.base.name | name | true | 2 | xxx | 任务名 | - | - |
| 2 | pic_understand_request.base.task_type | task_type | true | 2 | PicUnderstand | 任务类型 | - | - |
| 2 | pic_understand_request.base.model | model | true | 2 | Doubao-Seed-1.6 | 模型 | - | - |
| 0 | deep_think_request | deepThinkRequest | false | 5 | - | 深度思考 | - | - |
| 1 | deep_think_request.previous_response_id | previous_response_id | false | 2 | xxxxx | 上次深度思考返回的id | - | - |
| 1 | deep_think_request.base | base | true | 5 | - | 基础参数 | - | - |
| 2 | deep_think_request.base.model | model | true | 2 | Doubao-Seed-1.6-thinking | Doubao-Seed-1.6-thinking,<br>Doubao-Seed-1.6-flash | - | - |
| 2 | deep_think_request.base.task_type | task_type | true | 2 | DeepThink | 任务类型 | - | - |
| 2 | deep_think_request.base.name | name | true | 2 | xxxx | 任务名 | - | - |
| 1 | deep_think_request.messages | messages | false | 3 | - | message消息结构 | - | - |
| 2 | deep_think_request.messages.content | content | false | 3 | - | 内容结构 | - | - |
| 3 | deep_think_request.messages.content.video_url | video_url | false | 5 | - | 视频参数结构 | - | - |
| 4 | deep_think_request.messages.content.video_url.fps | fps | false | 9 | 25 | 视频理解的帧数，会根据输入的帧数抽帧进行视频理解 | - | - |
| 4 | deep_think_request.messages.content.video_url.url | url | false | 2 | https://ark-project.tos-cn-beijing.volces.com/xxxxx.mp4 | 视频文件url | - | - |
| 3 | deep_think_request.messages.content.text | text | false | 2 | 文艺复兴三杰是？ | type为text类型时，使用的文本 | - | - |
| 3 | deep_think_request.messages.content.image_url | image_url | false | 5 | - | 图片参数结构 | - | - |
| 4 | deep_think_request.messages.content.image_url.detail | detail | false | 2 | high | - low：“低分辨率”模式，处理速度会提高，适合图片本身细节较少或者只需模型理解图片大致信息或者对速度有要求的场景。<br>- high：“高分辨率”模式，模型可感知图片更多的细节，但是处理图片速度会降低，适合图像像素值高且需关注细节信息的场景，如街道地图分析等。 | - | - |
| 4 | deep_think_request.messages.content.image_url.url | url | false | 2 | https://ark-project.tos-cn-beijing.volces.com/doc_image/ark_demo_img_1.png | 图片文件url | - | - |
| 3 | deep_think_request.messages.content.type | type | false | 2 | text | 消息输入的类型，<br>image_url、text、video_url | - | - |
| 2 | deep_think_request.messages.role | role | false | 2 | user | 角色：<br>输入消息的角色，可以是 user，system ，assistant或 developer。 | - | - |
| 1 | deep_think_request.thinking | thinking | true | 2 | enabled | disabled：强制关闭深度思考能力，模型不输出思维链内容。<br>enabled：强制开启深度思考能力，模型强制输出思维链内容。<br>Doubao-Seed-1.6-thinking只支持enabled<br>Doubao-Seed-1.6-flash支持enabled或disabled<br>auto：模型自行判断是否需要进行深度思考。 | - | - |
| 1 | deep_think_request.max_tokens | max_tokens | false | 2 | 4096 | 结果最大tokens，默认4096，最大32000 | - | - |
| 1 | deep_think_request.text | text | false | 2 | xxx | 文本 | - | - |
| 1 | deep_think_request.reasoning | reasoning | false | 2 | medium | 限制深度思考的工作量。减少深度思考工作量可使响应速度更快，并且深度思考的 token 用量更小。<br>minimal：关闭思考，直接回答。<br>low：轻量思考，侧重快速响应。<br>medium：均衡模式，兼顾速度与深度。<br>high：深度分析，处理复杂问题。<br>仅模型 doubao-seed-1-8-251228、doubao-seed-1-6-lite-251015、doubao-seed-1-6-251015 支持该字段。 | - | - |

## 响应参数

| 层级 | 字段 | 映射字段 | 必填 | 类型（官方原值） | 示例 | 说明 | 数据标签 | 安全级别 |
|---:|---|---|---|---|---|---|---|---|
| 0 | data | data | - | 5 | - | 返回结构体 | - | R1 |
| 1 | data.update_time | update_time | - | 2 | xxxx | 更新时间 | - | - |
| 1 | data.msg | msg | - | 2 | success | 消息 | - | - |
| 1 | data.name | name | - | 2 | xxxx | 任务名 | - | - |
| 1 | data.create_info | create_info | - | 2 | xxxx | 创建结构体 | - | - |
| 1 | data.model_task_id | model_task_id | - | 2 | xxxx | 模型taskId | - | - |
| 1 | data.pilot_task_id | pilot_task_id | - | 2 | xxx | pilotTaskId | - | - |
| 1 | data.id | id | - | 99 | 123 | 任务id | - | - |
| 1 | data.status | status | - | 99 | 0 | 状态：0-失败、1-创建、2-运行中、3-成功、4-取消 | - | - |
| 1 | data.task_type | task_type | - | 2 | VideoByText | 任务类型 | - | - |
| 1 | data.task_result | task_result | - | 2 | xxxx | 任务返回值 | - | - |
| 1 | data.create_time | create_time | - | 2 | xxxxx | 创建时间 | - | - |
| 0 | msg | msg | - | 2 | xxxx | 消息 | - | - |
| 0 | code | code | - | 99 | 0 | 状态码 | - | - |

## 请求示例

### curl
请求地址：https://openapi-fxg.jinritemai.com/second/ecomInsight/createTask?app_key=your_appkey_here&method=second.ecomInsight.createTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here

```bash
{
  "reqUrl": "https://openapi-fxg.jinritemai.com/second/ecomInsight/createTask?app_key=your_appkey_here&method=second.ecomInsight.createTask&access_token=your_accesstoken_here&param_json={}&timestamp=2018-06-19%2016:06:59&v=2&sign=your_sign_here"
}
```

### java

```java
SecondEcomInsightCreateTaskRequest request = new SecondEcomInsightCreateTaskRequest();
SecondEcomInsightCreateTaskParam param = request.getParam();
SecondEcomInsightCreateTaskResponse response = request.execute(accessToken);

```

### php

```php
$request = new SecondEcomInsightCreateTaskRequest();
$param = new SecondEcomInsightCreateTaskParam();
$request->setParam($param);
$response = $request->execute(accessToken);

```

### python

```python
request = SecondEcomInsightCreateTaskRequest()
param = request.getParams()
response = request.execute(accessToken)

```

### go

```go
request := second_ecomInsight_createTask_request.New()
param := request.GetParams()
response := request.Execute(accessToken)

```

### dotNetCore

```dotNetCore
var request = new SecondEcomInsightCreateTaskRequest();
var param = request.BuildParam();
var response = request.Execute<SecondEcomInsightCreateTaskResponse>(accessToken);

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
| 50002 | 业务处理失败 | isv.business-failed:400 | 处理失败 | 查看具体报错信息 |

## 原始资料

归档根目录的 `_原始JSON/` 中保留了官方接口返回，供字段完整性复核。
