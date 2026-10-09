import http from '../utils/http'
import * as config from '../utils/config'
export function login(data) {
    return http.get("/user/login/miniprogram", data);
}

export function loginForWork(data) {
    return http.post("/employee/login/WorkWeixin", data);
}

export function getUserInfo() {
    return http.get("/user/info");
}
export function updateBaseInfo(data) {
    return http.put("/user/baseinfo", data);
}

export function getUserLogList(data) {
    return http.get("/user/log/list", data);
}

/**
 * 微信登录
 * @param {*} callback 
 */
export function WXlogin(callback) {
    var app = getApp();
    wx.showLoading({
        title: '正在登录',
    })
    if (app.globalData.isWxWork) { //企业微信小程序
        wx.qy.login({
            success(res) {
                loginForWork({
                    agentId: config.agentId,
                    code: res.code,
                    isMiniProgram: true
                }).then(res => {
                    wx.setStorageSync(config.tokenKey, res.data)
                    getUserInfo().then(res => {
                        app.globalData.userInfo = res.data
                        if (typeof callback === "function") {
                            callback(res)
                        }
                    })
                }).finally(() => {
                    wx.hideLoading()
                })
            },
            fail() {
                wx.hideLoading()
            }
        })
    } else {
        wx.login({
            success(res) {
                login({
                    appId: __wxConfig.accountInfo.appId,
                    code: res.code
                }).then(res => {
                    wx.setStorageSync(config.tokenKey, res.data)
                    getUserInfo().then(res => {
                        app.globalData.userInfo = res.data
                        if (typeof callback === "function") {
                            callback(res)
                        }
                    })
                }).finally(() => {
                    wx.hideLoading()
                })
            },
            fail() {
                wx.hideLoading()
            }
        })
    }
}
