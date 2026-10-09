var xundianApi = require('../../api/xundian.js')
var storeApi = require('../../api/store.js')
const normalizeChainLev = (value) => {
    const map = {
        A: "优秀店",
        B: "普通店",
        C: "亏损店"
    }
    return map[value] || value || "";
}
const isVisibleStore = (item) => {
    return item && item.isShow !== false && item.show !== false && !item.hidden && !item.deleted;
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        storeName: "",
        chainName:"",
        shopId:"",
        chainLev:"",
        shopTourType:"",
        storeList: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //townId=350503007&latitude=24.888891&longitude=118.613556&storeName=
        this.search=options||{};
        this.setData({
            storeName: options.storeName,
        })
        this.loadList();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    loadList(){
        storeApi.getNearStoreList(this.search).then(res => {
            this.setData({
                storeList: ((res.data && res.data.data) || []).filter(item => isVisibleStore(item))
            })
        })
    },
    setStoreName(e) {
        this.setData({
            storeName: e.detail.value
        })
        if(this.timer){
            clearTimeout(this.timer)
        }
        this.timer=setTimeout(() => {
            this.search.storeName=this.data.storeName
            this.loadList();
        }, 300);
    },
    confirmStore(e) {
        if (e && e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.item) {
            const item = e.currentTarget.dataset.item
            console.log(item)
            this.setData({
                storeName: item.storeName,
                chainName:item.chainName,
                shopId:item.id,
                chainLev: normalizeChainLev(item.chainLevStr || item.chainLev),
            })
        }
        let pages = getCurrentPages(); // 当前页栈
        pages[pages.length - 2].setData({
            "model.storeName": this.data.storeName,
            "model.chainName":this.data.chainName,
            "model.chainLev":this.data.chainLev,
            "model.shopTourType":this.data.shopTourType,
            "model.storeId":this.data.shopId
        })
        console.log(this.data)
        wx.navigateBack()
    },
})
