// pages/xundian/selectchainlev.js
var storeApi = require('../../api/store.js')
const normalizeChainLev = (value) => {
    const map = {
        A: "优秀店",
        B: "普通店",
        C: "亏损店"
    }
    return map[value] || value || "";
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        chainlev:'',
        chainlevList:[]
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
        storeApi.getChainLevList().then(res => {
            const list = (res.data || []).map(item => ({
                ...item,
                name: normalizeChainLev(item.name || item.value || item.label || item.text)
            }))
            this.setData({
                chainlevList: list
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
    setChainLev(e)
    {
        this.setData({
            chainlev: e.detail.value
        })
    },
    confirmChainLev(e) {
        if (e && e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.item) {
            const item = e.currentTarget.dataset.item
            this.setData({
                chainlev:item.name,
            })
        }
        let pages = getCurrentPages(); // 当前页栈
        pages[pages.length - 2].setData({
            "model.chainLev":this.data.chainlev,
            "model.chainLevStr":this.data.chainlev,
        })
        wx.navigateBack()
    },
})
