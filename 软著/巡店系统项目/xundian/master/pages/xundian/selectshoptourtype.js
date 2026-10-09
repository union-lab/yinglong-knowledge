var storeApi = require('../../api/store.js')
const normalizeShopTourType = (value) => {
    const map = {
        "日常拜访": "日常巡查",
        "其它": "其他"
    }
    return map[value] || value || "";
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        shopTourType:'',
        shoptourtypeList:[]
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
        storeApi.getShopTourTypelistList().then(res => {
            const names = []
            const list = (res.data || []).map(item => ({
                ...item,
                name: normalizeShopTourType(item.name || item.value || item.label || item.text)
            })).filter(item => {
                if (item.name !== "日常巡查" && item.name !== "其他") {
                    return false;
                }
                if (names.indexOf(item.name) > -1) {
                    return false;
                }
                names.push(item.name);
                return true;
            })
            this.setData({
                shoptourtypeList: list
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
    setShopTourType(e)
    {
        this.setData({
            shopTourType:e.detail.value
        })
    },
    confirmShopTourType(e) {
        if (e && e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.item) {
            const item = e.currentTarget.dataset.item
            this.setData({
                shopTourType:item.name,
            })
        }
        let pages = getCurrentPages(); // 当前页栈
        pages[pages.length - 2].setData({
            "model.shopTourType":this.data.shopTourType,
            "model.shopTourTypeStr":this.data.shopTourType,
        })
        console.log(this.data)
        wx.navigateBack()
    },
    
})
