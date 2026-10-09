import http from '../utils/http'
/**
 * 获取团队页面数据
 */
export function getTeamPage() {
    return http.get("/team/page");
}
/**
 * 获取团队成员列表
 * @param {*} data 
 */
export function getTeamUserList(data) {
    return http.get("/team/userlist", data);
}