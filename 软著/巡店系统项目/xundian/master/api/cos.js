var COS = require('../utils/cos-wx-sdk-v5')
import http from '../utils/http'

var cos = new COS({
    // 必选参数
    getAuthorization: function (options, callback) {
        // 服务端 JS 和 PHP 示例：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
        // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
        // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048
        http.post("/common/CosCredential").then(result => {
            var data = result.data || {};
            var credentials = data.credentials || data;
            if (!credentials) return console.error('credentials invalid');
            callback({
                TmpSecretId: credentials.TmpSecretId || credentials.tmpSecretId,
                TmpSecretKey: credentials.TmpSecretKey || credentials.tmpSecretKey,
                XCosSecurityToken: credentials.Token || credentials.sessionToken,
                // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
                StartTime: data.startTime, // 时间戳，单位秒，如：1580000000
                ExpiredTime: data.expiredTime, // 时间戳，单位秒，如：1580000900
            });
        }).catch(err => {
            console.error('get cos credential failed', err);
        })
    }
});
export function getObjectUrl(key){
    return new Promise((resolve, reject)=>{
        http.get("/common/OssConfig").then(res=>{
            cos.getObjectUrl({
                Bucket: res.data.bucket, /* 填入您自己的存储桶，必须字段 */
                Region: res.data.region,  /* 存储桶所在地域，例如ap-beijing，必须字段 */
                Key: key.replace(/^https?:\/\/[^/]+\//,"") ,  /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */
                Sign: true,    /* 获取带签名的对象URL */
            }, function(err, data) {
                if (err) return reject(err);
                return resolve(data);
            });
        }).catch(reject)
    });
}
