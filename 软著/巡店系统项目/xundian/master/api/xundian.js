import http from '../utils/http'

/**
 * 获取巡店页面数据
 */
export function getPageData(){
    return http.get("/xundian/indexview")
}
/**
 * 巡店打卡
 * @param {*} data 
 * @param {*} filePath 
 */
export function clockin(data, filePath) {
    return http.uploadFile('/xundian/clockin',filePath,data);
}
//上传图片至云服务器
export function uploadFile(data,filePath)
{
    return http.uploadImgFile('/xundian/uploadfile',filePath,data);
}
//保存打卡记录
export function saveServiceClockIn(data)
{
    return http.post("/xundian/saveClockIn", data);
}
export function updataImgList(data)
{
    return http.post("/xundian/updataImgList", data);
}
// export function test(data)
// {
//     console.log(data)
//     return http.post('/xundian/testadd',data)
// }
/**
 * 结束巡店任务
 * @param {Number} id 
 */
export function endTask(id){
    return http.post("/xundian/endTask/"+(id||""))
}
export function newEndTask(data){
    return http.post("/xundian/newEndTask/",data)
}

/**
 * 获取巡店详情
 * @param {Number} id 
 */
export function getInfo(id) {
    return http.get("/xundian/info/"+(id||""));
}
/**
 * 获取巡店列表
 * @param {*} data 
 */
export function getList(data) {
    return http.get("/xundian/list", data);
}

export function getTodayStoreClockStatus(data) {
    return http.get("/xundian/store/today-status", data);
}

/**
 * 删除记录
 * @param {Number} id 
 */
export function del(id) {
    return http.delete("/xundian/delete/"+(id||""));
}

/**
 * 评论/回复
 * @param {Object} data 
 */
export function comment(data) {
    return http.post("/xundian/comment",data);
}
/**
 * 获取评论列表
 * @param {Object} data 
 */
export function getCommentList(data) {
    return http.get("/xundian/comment/list",data);
}

/**
 * 获取业务员位置
 */
export function getSalesmanlocationList(data) {
   return http.get("/xundian/salesman/location/list",data);
}
