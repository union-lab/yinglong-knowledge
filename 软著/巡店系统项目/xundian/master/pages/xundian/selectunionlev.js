// pages/xundian/selectunionlev.js
var storeApi = require('../../api/store.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        unionLev:'',
        unionlevList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.loadList();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    loadList(){
        storeApi.getUnionLevList().then(res => {
            const list = (res.data || []).map(item => ({
                ...item,
                name: item.name || item.value || item.label || item.text || ""
            }))
            this.setData({
                unionlevList: list
            })
            console.log(list)
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    setUnionLev(e)
    {
        this.setData({
            unionLev:e.detail.value
        })
    },
    confirmUnionLev(e) {
        if (e && e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.item) {
            const item = e.currentTarget.dataset.item
            this.setData({
                unionLev:item.name,
            })
        }
        let pages = getCurrentPages(); // 当前页栈
        pages[pages.length - 2].setData({
            "model.unionLev":this.data.unionLev,
            "model.unionLevStr":this.data.unionLev,
        })
        console.log(this.data)
        wx.navigateBack()
    },
})
