import * as storeApi from '../../api/store.js'
const normalizeChainLev = (value) => {
    const map = {
        A: "优秀店",
        B: "普通店",
        C: "亏损店"
    }
    return map[value] || value || "";
}
Page({
    data: {
        model: {},
        region: [],
        customItem: '请选择'
    },

    onLoad(options) {
        console.log(options)
        if (!options || !options.id) {
            wx.setNavigationBarTitle({
                title: '新建门店'
            })
            this.setData({
                model: {
                    storeName: "",
                    address: "",
                    tel: "",
                    chainName: "",
                    provinceName: "",
                    cityName: "",
                    districtName: "",
                    chainLev: "普通店",
                    latitude: "",
                    longitude: "",
                    isShow: true,
                    deleted: false
                }
            })
            return;
        }
        storeApi.GetStoreInfo(options.id).then(res => {
            const data = res.data || {};
            this.setData({
                model: data,
                region: [data.provinceName || "", data.cityName || "", data.districtName || ""],
                "model.chainLev": normalizeChainLev(data.chainLevStr || data.chainLev),
            })
        })
    },

    onReady() {

    },
    setStoreName(e) {
        this.setData({
            "model.storeName": e.detail.value
        })
    },
    setAddress(e) {
        this.setData({
            "model.address": e.detail.value
        })
    },
    setTel(e) {
        this.setData({
            "model.tel": e.detail.value
        })
    },
    setChainName(e){
        this.setData({
            "model.chainName": e.detail.value
        })
    },
    bindRegionChange(e) {
        this.setData({
            region: e.detail.value,
            "model.provinceName": e.detail.value[0] === this.data.customItem ? "" : e.detail.value[0],
            "model.cityName": e.detail.value[1] === this.data.customItem ? "" : e.detail.value[1],
            "model.districtName": e.detail.value[2] === this.data.customItem ? "" : e.detail.value[2],
            "model.provinceId": e.detail.code[0] ? e.detail.code[0].substring(0, 2) : "",
            "model.cityId": e.detail.code[1] ? e.detail.code[1].substring(0, 4) : "",
            "model.districtId": e.detail.code[2] || ""
        })
    },
    toChainLevPage()
    {
        wx.navigateTo({
            url: `/pages/xundian/selectchainlev`,
        })
    },
    // weui提交表单
    submit() {
        const model = this.data.model || {};
        if (!model.storeName) {
            wx.showToast({ title: '请填写门店名称', icon: 'none' })
            return;
        }
        if (!model.address) {
            wx.showToast({ title: '请填写详细地址', icon: 'none' })
            return;
        }
        wx.showLoading({
            title: '提交中',
        })
        const request = model.id ? storeApi.updateStore(model) : storeApi.createStore(model);
        request.then(res => {
            wx.showToast({
                title: '提交成功',
            })
            if (!model.id) {
                setTimeout(() => {
                    wx.navigateBack()
                }, 500)
            }
        }).finally(() => {
            wx.hideLoading()
        })
    }
})
