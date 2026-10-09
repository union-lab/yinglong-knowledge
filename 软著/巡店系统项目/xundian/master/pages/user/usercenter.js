import { WXlogin } from '../../api/common.js';
var app=getApp();
var that;
Page({
    data: {
        userInfo:null
    },

    onLoad(options) {
        that=this;
        this.setData({
            userInfo:app.globalData.userInfo
        })
    },
    onReady() {

    },
    login(){
        WXlogin(()=>{
            this.setData({
                userInfo:app.globalData.userInfo
            })
        })
    },
    goStoreList() {
        wx.navigateTo({
            url: '/pages/store/storelist'
        })
    },
    goLoginLog() {
        wx.navigateTo({
            url: '/pages/user/loginlog'
        })
    }
})
