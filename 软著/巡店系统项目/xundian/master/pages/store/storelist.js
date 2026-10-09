import * as storeApi from '../../api/store.js';
var app = getApp();
const normalizeStoreStatus = (item) => {
    const isVisible = item.isShow !== false && item.show !== false && !item.hidden;
    const deleted = !!item.deleted;
    const clockInCount = Number(item.clockInCount || item.xundianCount || item.recordCount || item.visitCount || item.clockCount || 0);
    const hasClockRecords = clockInCount > 0 || item.hasClockRecords === true || item.hasXundianRecord === true;
    return {
        ...item,
        isShow: isVisible,
        isVisible: isVisible,
        deleted: deleted,
        clockInCount: clockInCount,
        hasClockRecords: hasClockRecords,
        visibleLabel: isVisible ? "是否显示：是" : "是否显示：否",
        deletedLabel: hasClockRecords ? "有记录不可删" : (deleted ? "是否删除：是" : "是否删除：否")
    }
}
const matchSelectedRegion = (item, search) => {
    if (!item || !search) {
        return true;
    }
    const match = (idField, nameField, idValue, nameValue) => {
        if (!idValue && !nameValue) {
            return true;
        }
        if (item[idField] !== undefined && item[idField] !== null) {
            return String(item[idField]) === String(idValue);
        }
        if (item[nameField] !== undefined && item[nameField] !== null) {
            return !nameValue || String(item[nameField]) === String(nameValue);
        }
        return true;
    }
    return match("provinceId", "provinceName", search.provinceId, search.provinceName) &&
        match("cityId", "cityName", search.cityId, search.cityName) &&
        match("districtId", "districtName", search.districtId, search.districtName);
}
Page({
    data: {
        search: {
            pageIndex: 1,
            pageSize: 10,
            keyword:""
        },
        list: [],
        region: null,
        customItem: '全部'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        if(app.globalData.adInfo){
            this.setData({
                "search.districtId":app.globalData.adInfo.adcode,
                "search.provinceName":app.globalData.adInfo.province,
                "search.cityName":app.globalData.adInfo.city,
                "search.districtName":app.globalData.adInfo.district,
                region:[app.globalData.adInfo.province, app.globalData.adInfo.city, app.globalData.adInfo.district]
            })
        }
        wx.startPullDownRefresh();
    },

    bindRegionChange(e){
        this.setData({
            "search.provinceId":e.detail.code[0]?e.detail.code[0].substring(0,2):0,
            "search.cityId":e.detail.code[1]?e.detail.code[1].substring(0,4):0,
            "search.districtId":e.detail.code[2] || 0,
            "search.provinceName":e.detail.value[0] === this.data.customItem ? "" : e.detail.value[0],
            "search.cityName":e.detail.value[1] === this.data.customItem ? "" : e.detail.value[1],
            "search.districtName":e.detail.value[2] === this.data.customItem ? "" : e.detail.value[2],
            region:e.detail.value
        })
        wx.startPullDownRefresh();
    },
    setKeyword(e) {
        this.setData({
            "search.keyword": e.detail.value
        })
    },
    onSearchConfirm(){
        wx.startPullDownRefresh();
    },
    goCreateStore() {
        wx.navigateTo({
            url: '/pages/store/storeedit'
        })
    },
    loadList(page) {
        this.data.search.pageIndex = page || 1
        storeApi.getStoreList(this.data.search).then(res => {
            var data = (res.data && res.data.data) || [];
            data = data.filter(item => matchSelectedRegion(item, this.data.search)).map(item => normalizeStoreStatus(item))
            var list = page > 1 ? this.data.list.concat(data) : data;
            this.setData({
                list: list,         
                total: res.data.total
            })
        }).finally(() => {
            wx.stopPullDownRefresh();
        })
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        this.loadList();
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if (this.data.total > this.data.search.pageIndex*this.data.search.pageSize) {
            this.loadList(this.data.search.pageIndex + 1);
        }
    },
    selectItem(e) {
        const item = e.currentTarget.dataset.item;
        const latitude = Number(item && item.latitude);
        const longitude = Number(item && item.longitude);
        if (!item || !latitude || !longitude) {
            wx.showToast({
                title: '该门店暂无地图坐标',
                icon: 'none'
            })
            return;
        }
        const address = [
            item.provinceName,
            item.cityName,
            item.districtName,
            item.townName,
            item.address
        ].filter(Boolean).join("");
        wx.navigateTo({
            url: `/pages/store/nearstoremap?storeId=${item.id || ''}&storeName=${encodeURIComponent(item.storeName || '')}&latitude=${latitude}&longitude=${longitude}&address=${encodeURIComponent(address)}`
        })
    },
    toggleStoreVisible(e) {
        const index = e.currentTarget.dataset.index;
        const item = this.data.list[index];
        if (!item) return;
        const nextValue = !item.isVisible;
        this.updateStoreStatus(index, {
            id: item.id,
            isShow: nextValue,
            show: nextValue,
            hidden: !nextValue
        }, "显示状态已更新");
    },
    toggleStoreDeleted(e) {
        const index = e.currentTarget.dataset.index;
        const item = this.data.list[index];
        if (!item) return;
        if (item.hasClockRecords) {
            wx.showToast({
                title: '有打卡记录，只能隐藏门店',
                icon: 'none'
            })
            return false;
        }
        const nextValue = !item.deleted;
        wx.showModal({
            title: '提示',
            content: nextValue ? '确定标记该门店为已删除吗？' : '确定恢复该门店吗？',
            success: res => {
                if (!res.confirm) return;
                this.updateStoreStatus(index, {
                    id: item.id,
                    deleted: nextValue
                }, nextValue ? "门店已标记删除" : "门店已恢复");
            }
        })
    },
    updateStoreStatus(index, payload, title) {
        wx.showLoading({
            title: '提交中',
        })
        storeApi.updateStore(payload).then(() => {
            const patch = {};
            if (payload.isShow !== undefined) {
                patch[`list[${index}].isShow`] = payload.isShow;
                patch[`list[${index}].isVisible`] = payload.isShow;
                patch[`list[${index}].visibleLabel`] = payload.isShow ? "是否显示：是" : "是否显示：否";
                patch[`list[${index}].show`] = payload.show;
                patch[`list[${index}].hidden`] = payload.hidden;
            }
            if (payload.deleted !== undefined) {
                patch[`list[${index}].deleted`] = payload.deleted;
                patch[`list[${index}].deletedLabel`] = payload.deleted ? "是否删除：是" : "是否删除：否";
            }
            this.setData(patch);
            wx.showToast({
                title: title,
                icon: 'none'
            })
        }).finally(() => {
            wx.hideLoading();
        })
    },
})
