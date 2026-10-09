import {
    WXlogin,
    getUserInfo
} from '/api/common.js';
App({
    onLaunch() {
        //自定义导航栏 获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
        let systemInfo = wx.getSystemInfoSync();
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.statusBarHeight = systemInfo.statusBarHeight;
        this.globalData.navBarHeight = custom.height + (custom.top - systemInfo.statusBarHeight) * 2;
        this.globalData.isWxWork = systemInfo.environment == "wxwork";
        this.updateManager()
    },
    onShow() {
        getUserInfo().then(res => {
            this.globalData.userInfo = res.data
        }, err => {
            WXlogin(res=>{
                wx.showToast({
                  title: '登录成功',
                })
            })
        })
    },
    updateManager(){
        const updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
          // 请求完新版本信息的回调
          console.log(res.hasUpdate)
        })
        updateManager.onUpdateReady(function () {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function (res) {
              if (res.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                updateManager.applyUpdate()
              }
            }
          })
        })
    },
    globalData: {
        userInfo: null,
        isWxWork: false,
        statusBarHeight: 0,
        navBarHeight: 0,
        adInfo:null,
    }
})