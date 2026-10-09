import {
    dateFormat
} from '../../utils/util'
import config from '../../utils/config'
import QQMapWX from '../../utils/qqmap-wx-jssdk.min'
import * as commonApi from '../../api/common'
import * as xundianApi from '../../api/xundian'
import * as storeApi from '../../api/store'
var qqmapsdk;
const app = getApp();
var that;
const normalizeChainLev = (value) => {
    const map = {
        A: "优秀店",
        B: "普通店",
        C: "亏损店"
    }
    return map[value] || value || "";
}
const normalizeShopTourType = (value) => {
    const map = {
        "日常拜访": "日常巡查",
        "其它": "其他"
    }
    return map[value] || value || "";
}
const normalizeBrandName = (value) => {
    const map = {
        BD: "碧迪",
        bd: "碧迪",
        "优益诺": "海氏海诺",
        "佛山": "九安"
    }
    return map[value] || value || "";
}
const isVisibleStore = (item) => {
    return item && item.isShow !== false && item.show !== false && !item.hidden && !item.deleted;
}
const getToday = () => {
    return dateFormat(new Date(), "yyyy-MM-dd");
}
Page({
    data: {
        /*nvabarData: {
            showCapsule: 1, 
            title: '我的',
          },*/
        devicePosition:"back",
        windowWidth: wx.getSystemInfoSync().windowWidth,
        tabbarHeight: 0,
        userInfo: null,
        model: {
            time: "",
            latitude: "",
            longitude: "",
            altitude: "",
            townId: "",
            townName: "",
            address: "",
            storeName: "",
            storeId:"",
            chainLev:"",
            shopTourType:"",
            chainName:"",
            brandName:"",
            brandImgs:[],
            competitorsImgs:[],//竞品图片
            excellentImgs:[],//优秀陈列/培训图片
            goodsDisplayImgs:[],//产品陈列图
            interviewDisplayImgs:[],//走访陈列图
            shopNameImgs:[],//门店名称图
            otherImgs:[],//其他
            classification:""
        },
        src: null,
        isShowPoiPage: false,
        poiList: [],
        currentTabIndex: 0,
        tabItemList: [{
                "text": "打卡",
                "iconPath": "/images/icon/store.svg",
                "selectedIconPath": "/images/icon/store.svg",
                "pagePath": "/pages/index/index"
            },
            {
                "text": "工作圈",
                "iconPath": "/images/icon/pengyouquan.svg",
                "selectedIconPath": "/images/icon/pengyouquan.svg",
                "pagePath": "/pages/xundian/record"
            },
            {
                "text": "我的",
                "iconPath": "/images/icon/my.svg",
                "selectedIconPath": "/images/icon/my.svg",
                "pagePath": "/pages/user/usercenter"
            }
        ],
        brandArray: ['欧姆龙', '小林', '海氏海诺', '碧迪','三诺','九安','其他','无'],
        brandCheckArray: [{name:'欧姆龙',value:'欧姆龙'},{name:'小林',value:'小林'},{name:'海氏海诺',value:'海氏海诺'},{name:'碧迪',value:'碧迪'},{name:'三诺',value:'三诺'},{name:'九安',value:'九安'},{name:'其他',value:'其他'},{name:'无',value:'无'}],
        storeOptions: [],
        filteredStoreOptions: [],
        storeNameOptions: [],
        chainNameOptions: [],
        showStoreSelector: false,
        storeClockStatus: "none",
        storeClockStatusText: "待打卡",
        chainLevOptions: ['优秀店', '普通店', '亏损店'],
        shopTourTypeOptions: ['日常巡查', '其他'],
        isShowOtherBrandNameInput:false,
        brandIndex: 0,
        brandImgs:[],//品牌合作图片
        competitorsAImgs:[],//竞品图片
        excellentImgs:[],//优秀陈列/培训图片
        goodsDisplayImgs:[],//产品陈列图
        competitorsBImgs:[],//竞品信息图2
        interviewDisplayImgs:[],//走访陈列图
        shopNameImgs:[],//门店名称图
        otherImgs:[],
    },
    onReady() {
        var that = this
        setInterval(() => {
            that.setData({
                "model.time": dateFormat(new Date(), "yyyy/MM/dd HH:mm:ss")
            });
            if (app.globalData.userInfo && !that.data.userInfo) {
                that.setData({
                    userInfo: app.globalData.userInfo
                })
            }
        }, 1000);
        this.createSelectorQuery().select('.tabbar').boundingClientRect(res => {
            this.setData({
                tabbarHeight: res.height
            })
        }).exec()
    },
    onLoad() {
        that = this;
        // 实例化API核心类
        qqmapsdk = new QQMapWX({
            key: config.qqMapKey
        });
        this.ctx = wx.createCameraContext()
        setInterval(() => {
            if (this.isGetLocation) {
                this.getLocation()
            }
        }, 1000 * 60*2);
        this.loadData();
        this.getLocation()
    },
    async loadData() {
        var res = await xundianApi.getPageData();
        this.xundianId = 0;
        this.setXundian(res.data)
        this.loadStoreOptions()
    },
    setXundian(data) {
        data = data || {}
        this.xundianId = data.id;
        const chainLev = normalizeChainLev(data.chainLevStr || data.chainLev)
        const shopTourType = normalizeShopTourType(data.shopTourTypeStr || data.shopTourType)
        this.setData({
            "model.storeName": data.storeName || "",
            "model.id": data.id || "",
            "model.status": data.status || 2,
            "model.chainName": data.chainName || "",
            "model.chainLev": chainLev,
            "model.shopTourType": shopTourType,
            "model.brandName": (data.brandName || "").split(',').map(item => normalizeBrandName(item)).filter(Boolean).join(','),
            "model.otherBrandName":data.otherBrandName||"",
            "model.note": data.note || "",
            "model.storeId":data.storeId||"",
            "model.brandImgs":data.brandImgs||[],
            "model.competitorsAImgs":data.competitorsAImgs||[],
            "model.excellentImgs":data.excellentImgs||[],
            "model.goodsDisplayImgs":data.goodsDisplayImgs||[],
            "model.competitorsBImgs":data.competitorsBImgs||[],
            "model.interviewDisplayImgs":data.interviewDisplayImgs||[],
            "model.shopNameImgs":data.shopNameImgs||[],
            "model.otherImgs":data.otherImgs||[],
           
        })
        if (!data.storeName && !data.storeId) {
            this.setStoreClockStatus("none");
        }
        if(that.data.model.otherBrandName)
        {
            this.setData({
                isShowOtherBrandNameInput:true
            })
        }
        if(that.data.model.brandName)
        {
            const brandNames=that.data.model.brandName;
            var brandNamesArray=brandNames.split(',').map(item => normalizeBrandName(item));
            const orginBrandNamesArray=that.data.brandCheckArray;
                if(brandNamesArray.length>0)
                {
                    for (let i = 0, lenI = orginBrandNamesArray.length; i < lenI; ++i) 
                    {
                        for (let j = 0, lenJ = brandNamesArray.length; j < lenJ; ++j) {
                            if (orginBrandNamesArray[i].value === brandNamesArray[j]) {
                                orginBrandNamesArray[i].checked = true;
                              break
                            }
                          }
                    }
                    this.setData({
                        brandCheckArray:orginBrandNamesArray
                    });
                }
        }
    },
    resetClockInForm() {
        this.xundianId = 0;
        const resetChecks = this.data.brandCheckArray.map(item => ({
            ...item,
            checked: false
        }));
        this.setData({
            "model.id": "",
            "model.status": 2,
            "model.storeName": "",
            "model.storeId": "",
            "model.chainName": "",
            "model.chainLev": "",
            "model.shopTourType": "",
            "model.brandName": "",
            "model.otherBrandName": "",
            "model.note": "",
            "model.brandImgs": [],
            "model.competitorsImgs": [],
            "model.competitorsAImgs": [],
            "model.competitorsBImgs": [],
            "model.excellentImgs": [],
            "model.goodsDisplayImgs": [],
            "model.interviewDisplayImgs": [],
            "model.shopNameImgs": [],
            "model.otherImgs": [],
            "model.classification": "",
            isShowOtherBrandNameInput: false,
            storeClockStatus: "none",
            storeClockStatusText: "待打卡",
            brandCheckArray: resetChecks
        })
        this.loadStoreOptions();
        this.getLocation();
    },
    getLocation(callback) {
        that.setData({
            getLocationing: true
        })
        wx.getLocation({
            type: "gcj02",
            isHighAccuracy: true,
            altitude: true,
            success(res) {
                //res.latitude=26.271680000
                //res.longitude=117.645790000

                that.data.model.latitude = res.latitude;
                that.data.model.longitude = res.longitude;
                that.data.model.altitude = res.altitude;
                qqmapsdk.reverseGeocoder({
                    location: {
                        latitude: res.latitude,
                        longitude: res.longitude
                    },
                    get_poi: 1,
                    poi_options: "radius=500",
                    success(res) {
                        var res = res.result;
                        app.globalData.adInfo = res.ad_info;
                        that.data.model.cityId = res.ad_info.adcode.substr(0,4);
                        that.data.model.cityName = res.ad_info.city;
                        that.data.model.districtId = res.ad_info.adcode;
                        that.data.model.districtName = res.ad_info.district;
                        that.data.model.townId = res.address_reference.town.id;
                        that.data.model.townName = res.address_reference.town.title;
                        that.data.model.street = res.address_component.street;
                        that.data.model.street_number = res.address_component.street_number;

                        const item = res.pois[0]
                        //that.data.model.latitude = item.location && item.location.lat;
                        //that.data.model.longitude = item.location && item.location.lng;
                        that.data.model.address = item.address.replace(item.ad_info.province + item.ad_info.city + item.ad_info.district, "");
                        that.data.model.addressWaterMark = that.data.model.cityName + "·" + item.title
                        that.setData({
                            model: that.data.model,
                            poiList: res.pois
                        })
                        that.loadStoreOptions()
                        if (typeof callback === "function") {
                            callback()
                        }
                    }
                })
            },
            fail() {
                wx.showToast({
                    title: '获取位置失败,可稍后再试',
                    icon: "none"
                })
            },
            complete() {
                that.setData({
                    getLocationing: false
                })
            }
        });
    },
    loadStoreOptions() {
        const model = this.data.model || {};
        const params = {
            townId: model.townId,
            latitude: model.latitude,
            longitude: model.longitude,
            storeName: ""
        }
        storeApi.getNearStoreList(params).then(res => {
            const list = ((res.data && res.data.data) || []).filter(item => isVisibleStore(item)).map(item => ({
                ...item,
                storeName: item.storeName || item.name || "",
                chainName: item.chainName || "",
                chainLev: normalizeChainLev(item.chainLevStr || item.chainLev),
                clockStatus: "unclocked",
                clockStatusText: "未打卡"
            })).filter(item => item.storeName)
            this.enrichStoreClockStatuses(list).then(markedList => {
                const chainNameOptions = []
                const selectedStoreVisible = !model.storeId || markedList.some(item => String(item.id || item.storeId) === String(model.storeId));
                markedList.forEach(item => {
                    if (item.chainName && chainNameOptions.indexOf(item.chainName) === -1) {
                        chainNameOptions.push(item.chainName)
                    }
                })
                if (model.chainName && selectedStoreVisible && chainNameOptions.indexOf(model.chainName) === -1) {
                    chainNameOptions.push(model.chainName)
                }
                const filteredStoreOptions = this.filterStoreOptions(markedList, model.chainName)
                const storeNameOptions = filteredStoreOptions.map(item => item.storeName)
                const patch = {
                    storeOptions: markedList,
                    chainNameOptions: chainNameOptions,
                    filteredStoreOptions: filteredStoreOptions,
                    storeNameOptions: storeNameOptions
                }
                if (model.storeName && selectedStoreVisible && storeNameOptions.indexOf(model.storeName) === -1) {
                    storeNameOptions.unshift(model.storeName)
                }
                if (model.storeName && !selectedStoreVisible && model.status != 1) {
                    patch["model.storeName"] = "";
                    patch["model.storeId"] = "";
                    patch["model.chainName"] = "";
                    patch["model.chainLev"] = "";
                }
                this.setData(patch)
            })
        }).catch(err => {
            console.error(err)
            wx.showToast({
                title: '门店列表加载失败',
                icon: 'none'
            })
        })
    },
    enrichStoreClockStatuses(list) {
        return xundianApi.getList({
            startTime: getToday(),
            endTime: getToday()
        }).then(res => {
            const records = (res.data && res.data.data) || [];
            return list.map(store => {
                const hasClocked = records.some(record => {
                    const storeId = store.id || store.storeId;
                    return storeId ? String(record.storeId) === String(storeId) : record.storeName === store.storeName;
                });
                return {
                    ...store,
                    clockStatus: hasClocked ? "clocked" : "unclocked",
                    clockStatusText: hasClocked ? "已打卡" : "未打卡"
                }
            })
        }).catch(() => {
            return list;
        })
    },
    filterStoreOptions(list, chainName) {
        if (!chainName) {
            return list;
        }
        const filtered = list.filter(item => item.chainName === chainName);
        return filtered.length ? filtered : list;
    },
    applyStoreSelection(item) {
        if (!item) {
            return;
        }
        that.setData({
            "model.storeName": item.storeName || "",
            "model.chainName": item.chainName || "",
            "model.chainLev": normalizeChainLev(item.chainLevStr || item.chainLev),
            "model.chainLevStr": normalizeChainLev(item.chainLevStr || item.chainLev),
            "model.storeId": item.id || item.storeId || ""
        })
        if (item.clockStatus) {
            that.setStoreClockStatus(item.clockStatus);
        }
        that.checkTodayStoreClockStatus(item);
    },
    checkTodayStoreClockStatus(item) {
        if (!item || !(item.id || item.storeId || item.storeName)) {
            this.setStoreClockStatus("none");
            return;
        }
        xundianApi.getTodayStoreClockStatus({
            storeId: item.id || item.storeId || "",
            storeName: item.storeName || "",
            date: getToday()
        }).then(res => {
            const data = res.data || {};
            this.setStoreClockStatus(data.hasClocked ? "clocked" : "unclocked");
        }).catch(() => {
            xundianApi.getList({
                startTime: getToday(),
                endTime: getToday(),
                storeId: item.id || item.storeId || "",
                storeName: item.storeName || ""
            }).then(res => {
                const list = (res.data && res.data.data) || [];
                const hasClocked = list.some(record => {
                    const sameStore = (item.id || item.storeId) ? String(record.storeId) === String(item.id || item.storeId) : record.storeName === item.storeName;
                    return sameStore || record.storeName === item.storeName;
                });
                this.setStoreClockStatus(hasClocked ? "clocked" : "unclocked");
            }).catch(() => {
                this.setStoreClockStatus("unclocked");
            })
        })
    },
    setStoreClockStatus(status) {
        const textMap = {
            clocked: "已打卡",
            unclocked: "未打卡",
            none: "待打卡"
        };
        this.setData({
            storeClockStatus: status,
            storeClockStatusText: textMap[status] || "待打卡"
        })
    },
    bindStorePickerChange(e) {
        if (that.data.model.status == 1) {
            wx.showToast({
                title: '请先结束本店巡店任务',
                icon: "none"
            })
            return false;
        }
        const index = Number(e.detail.value);
        const item = that.data.filteredStoreOptions[index];
        that.applyStoreSelection(item);
    },
    openStoreSelector() {
        if (this.data.model.status == 1) {
            wx.showToast({
                title: '请先结束本店巡店任务',
                icon: "none"
            })
            return false;
        }
        this.setData({
            showStoreSelector: true
        })
        if (!this.data.filteredStoreOptions.length) {
            this.loadStoreOptions();
        }
    },
    closeStoreSelector() {
        this.setData({
            showStoreSelector: false
        })
    },
    noop() {},
    selectStoreOption(e) {
        const index = Number(e.currentTarget.dataset.index);
        const item = that.data.filteredStoreOptions[index];
        that.applyStoreSelection(item);
        that.closeStoreSelector();
    },
    bindChainPickerChange(e) {
        if (that.data.model.status == 1) {
            wx.showToast({
                title: '请先结束本店巡店任务',
                icon: "none"
            })
            return false;
        }
        const chainName = that.data.chainNameOptions[Number(e.detail.value)] || "";
        const filteredStoreOptions = that.filterStoreOptions(that.data.storeOptions, chainName);
        that.setData({
            "model.chainName": chainName,
            "model.storeName": "",
            "model.storeId": "",
            storeClockStatus: "none",
            storeClockStatusText: "待打卡",
            filteredStoreOptions: filteredStoreOptions,
            storeNameOptions: filteredStoreOptions.map(item => item.storeName)
        })
        if (filteredStoreOptions.length === 1) {
            that.applyStoreSelection(filteredStoreOptions[0]);
        }
    },
    login() {
        if (!app.globalData.userInfo) {
            commonApi.WXlogin(res => {
                that.setData({
                    userInfo: app.globalData.userInfo
                })
            });
        } else if (!app.globalData.isWxWork && !app.globalData.userInfo.nickName) {
            wx.getUserProfile({
                desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    commonApi.updateBaseInfo(res.userInfo);
                    app.globalData.userInfo.nickName = res.userInfo.nickName;
                    app.globalData.userInfo.avatar = res.userInfo.avatarUrl;
                    that.setData({
                        userInfo: app.globalData.userInfo
                    })
                },
                fail: (err) => {
                    console.log(err)
                }
            })
        }
    },
    showPoiPage() {
        that.setData({
            isShowPoiPage: true
        });
    },
    selectPoi(e) {
        const item = e.currentTarget.dataset.item;
        //that.data.model.latitude = item.location && item.location.lat;
        //that.data.model.longitude = item.location && item.location.lng;
        that.data.model.address = item.address.replace(item.ad_info.province + item.ad_info.city + item.ad_info.district, "");
        that.data.model.addressWaterMark = that.data.model.cityName + "·" + item.title
        that.setData({
            model: that.data.model,
            isShowPoiPage: false
        })
    },
    showEditStorePage() {
        if(that.data.model.status==1)
        {
            wx.showToast({
                title: '请先结束本店巡店任务',
                icon: "error"
            })
            return false;
        }
        wx.navigateTo({
            url: `/pages/xundian/selectstore?townId=${that.data.model.townId}&latitude=${that.data.model.latitude}&longitude=${that.data.model.longitude}&storeName=${that.data.model.storeName}`,
        })
    },
    showEditShopTourTypePage()
    {
        if(that.data.model.status==1)
        {
            wx.showToast({
                title: '请先结束本店巡店任务',
                icon: "error"
            })
            return false;
        }
        wx.navigateTo({
            url: `/pages/xundian/selectshoptourtype`,
        })
    },
    showEditChainLevPage()
    {
        if((that.data.model.chainLev||that.data.model.chainLev=='0')&&that.data.model.storeId)
        {
            wx.showToast({
                title: '当前店铺已经设置了级别，不能重新选择',
                icon: "error"
            })
            return false;
        }
        wx.navigateTo({
            url: `/pages/xundian/selectchainlev`,
        })
    },
    setNote(e) {
        that.setData({
            "model.note": e.detail.value
        })
    },
    setStoreName(e){
        that.setData({
            "model.storeName": e.detail.value,
            "model.storeId": ""
        })
    },
    setChainName(e){
        that.setData({
            "model.chainName": e.detail.value
        })
    },
    setChainLev(e){
        that.setData({
            "model.chainLev": e.detail.value
        })
    },
    setShopTourType(e){
        that.setData({
            "model.shopTourType": e.detail.value
        })
    },
    selectChainLevByButton(e) {
        if (that.data.model.status == 1) {
            wx.showToast({
                title: '请先结束本店巡店任务',
                icon: "none"
            })
            return false;
        }
        const value = e.currentTarget.dataset.value;
        that.setData({
            "model.chainLev": value,
            "model.chainLevStr": value
        })
    },
    selectShopTourTypeByButton(e) {
        if (that.data.model.status == 1) {
            wx.showToast({
                title: '请先结束本店巡店任务',
                icon: "none"
            })
            return false;
        }
        const value = e.currentTarget.dataset.value;
        that.setData({
            "model.shopTourType": value,
            "model.shopTourTypeStr": value
        })
    },
    setOtherBrandName(e)
    {
        that.setData({
            "model.otherBrandName": e.detail.value
        })
    },
    takePhoto() {
        if (!that.data.model.storeName) {
            wx.showToast({
                title: '请确认巡店店名',
                icon: "error"
            })
            return false;
        }
        if(!that.data.model.chainName)
        {
            wx.showToast({
                title: '请填写连锁名称',
                icon: "error"
            })
            return false;
        }
        if(!that.data.model.shopTourType)
        {
            wx.showToast({
                title: '请选择巡店方式',
                icon: "error"
            })
            return false;
        }
        if (!that.data.model.latitude || !that.data.model.longitude || !that.data.model.address) {
            this.getLocation()
            wx.showToast({
                title: '位置获取失败，请稍后再试',
                icon: "none"
            })
            return false;
        }
        if (!that.data.model.townId) {
            wx.showToast({
                title: '获取详细位置失败，请稍后再试',
                icon: "none"
            })
            return false;
        }
        this.setData({
            loading: true
        });
        // xundianApi.test(that.data.model).then(res=>{

        // })
        this.ctx.takePhoto({
            quality: 'high',
            success(res) {
                wx.showLoading({
                    title: '打卡中...',
                })
                xundianApi.clockin(that.data.model, res.tempImagePath).then(res => {
                    that.setXundian(res.data)
                    wx.showToast({
                        title: '打卡成功',
                    })
                }).finally(() => {
                    wx.hideLoading()
                    that.setData({
                        loading: false
                    });
                });
            },
            complete() {
                that.setData({
                    loading: false
                });
            }
        })
        return false;
    },
    onEndTask() {
        wx.showModal({
            title: "提示",
            content: "确定要结束本店任务吗？",
            success(e) {
                if (e.confirm) {
                    if(that.data.model.shopNameImgs.length==0&&that.data.model.shopTourType!='其他')
                        {
                                wx.showToast({
                                    title: '请上传门店名称图',
                                    icon: "none"
                                })
                                return false;
                        }
                    if(that.data.model.shopTourType=='日常巡查'&&that.data.model.chainLev=='优秀店')
                        {
                            if(that.data.isShowOtherBrandNameInput&&!that.data.model.otherBrandName)
                            {
                                wx.showToast({
                                    title: '请填写其他品牌名称',
                                    icon: "none"
                                })
                                return false;
                            }
                            if(that.data.model.brandImgs.length==0&&that.data.model.brandName!='无')
                            {
                                wx.showToast({
                                    title: '请上传合作品牌图片信息',
                                    icon: "none"
                                })
                                return false;
                            }
                            if(that.data.model.brandImgs.length<3&&that.data.model.brandName!='无')
                            {
                                wx.showToast({
                                    title: '合作品牌图片不少于3张',
                                    icon: "none"
                                })
                                return false;
                            }
                            if(that.data.model.competitorsAImgs.length==0)
                            {
                                wx.showToast({
                                    title: '请上传竞品图片信息',
                                    icon: "none"
                                })
                                return false;
                            }
                            if(that.data.model.excellentImgs.length==0)
                            {
                                wx.showToast({
                                    title: '请上传优秀陈列/培训图片信息',
                                    icon: "none"
                                })
                                return false;
                            }
                            if(!that.data.model.note)
                            {
                                wx.showToast({
                                    title: '请填写走访总结',
                                    icon: "none"
                                })
                                return false;
                            }
                            that.data.model.competitorsImgs=that.data.model.competitorsAImgs;
                            //that.data.model.brandName=that.data.model.brandNameStr
                            that.data.model.classification= that.data.model.chainLev;
                        }
                        if(that.data.model.shopTourType=='日常巡查'&&that.data.model.chainLev=='普通店')
                        {
                            if(that.data.model.goodsDisplayImgs.length==0)
                            {
                                wx.showToast({
                                    title: '请上传产品陈列图片信息',
                                    icon: "none"
                                })
                                return false;
                            }
                            if(that.data.model.goodsDisplayImgs.length<2)
                            {
                                wx.showToast({
                                    title: '产品陈列图片不少于2张',
                                    icon: "none"
                                })
                                return false;
                            }
                            if(that.data.model.competitorsBImgs.length==0)
                            {
                                wx.showToast({
                                    title: '请上传竞品图片信息',
                                    icon: "none"
                                })
                                return false;
                            }
                            if(!that.data.model.note)
                            {
                                wx.showToast({
                                    title: '请填写走访总结',
                                    icon: "none"
                                })
                                return false;
                            }
                            that.data.model.competitorsImgs=that.data.model.competitorsBImgs;
                            that.data.model.classification= that.data.model.chainLev;
                        }
                        if(that.data.model.shopTourType=='日常巡查'&&that.data.model.chainLev=='亏损店')
                        {
                            if(that.data.model.interviewDisplayImgs.length==0)
                            {
                                wx.showToast({
                                    title: '请上传走访陈列图片信息',
                                    icon: "none"
                                })
                                return false;
                            }
                            if(!that.data.model.note)
                            {
                                wx.showToast({
                                    title: '请填写走访总结',
                                    icon: "none"
                                })
                                return false;
                            }
                            that.data.model.classification= that.data.model.chainLev;
                        }
                        if(that.data.model.shopTourType=='其他')
                        {
                            if(that.data.model.otherImgs.length==0)
                            {
                                wx.showToast({
                                  title: '请至少上传一张图片',
                                  icon:"none"
                                })
                                return false;
                            }
                            that.data.model.classification= that.data.model.chainLev;
                        }
                        that.data.model.id= that.xundianId;
                    xundianApi.newEndTask(that.data.model).then(res => {
                        wx.showToast({
                            title: '操作成功',
                            icon: "success"
                        })
                        if (res.data) {
                            that.onLoad()
                            that.setXundian({});
                            that.setData({
                                "model.note": "",
                                "model.chainName": "",
                                "model.shopTourType": "",
                                "model.chainLev":"",
                                "model.brandImgs":[],
                                "model.competitorsImgs":[],
                                "model.competitorsAImgs":[],
                                "model.competitorsBImgs":[],
                                "model.excellentImgs":[],
                                "model.goodsDisplayImgs":[],
                                "model.interviewDisplayImgs":[],
                                "model.shopNameImgs":[],
                                "model.otherImgs":[],
                                "model.classification":""
                            })
                            
                        }
                    })
                }
            }
        })
    },
    reverse(){
        this.devicePosition=this.devicePosition=="front"?"back":"front";
        this.setData({"devicePosition": this.devicePosition});
    },
    error(e) {
        this.setData({
            loading: false
        });
    },
    tabChange(e) {
        const item = e.currentTarget.dataset.item || e.detail.item;
        const index = Number(e.currentTarget.dataset.index);
        if (!item || item.pagePath === "/pages/index/index") {
            this.setData({
                currentTabIndex: 0
            })
            return;
        }
        this.setData({
            currentTabIndex: index > -1 ? index : 0
        })
        if (item.pagePath) {
            wx.navigateTo({
                url: item.pagePath,
            })
        }
    },
    onShow() {
        this.isGetLocation = true
        this.setData({
            currentTabIndex: 0
        })
        // 0为竖屏，1为横屏
        wx.startDeviceMotionListening({
            success:function(e){
              wx.onDeviceMotionChange(function(res){
                //console.log(res)
                var isHorizontal=0;
                //手机横屏使用
                if(res.gamma > 40){
                    isHorizontal=1;
                }
                if (res.gamma < -40){
                    isHorizontal=2;
                }
                that.data.model.isHorizontal=isHorizontal
                that.data.model.alpha=res.alpha
                that.data.model.beta=res.beta
                that.data.model.gamma=res.gamma
                //console.log(isHorizontal)
              })
            },
            fail:function(e){
              //关闭面板
            }
          })
    },
    onHide() {
        this.isGetLocation = false
        wx.stopDeviceMotionListening()
    },
    //下拉选中赋值
    bindPickerBrandChange: function(e) {
        var brandName= that.data.brandArray[e.detail.value]
        this.setData({
          "model.brandName": brandName
        })
      },
       getBrandUploaderList(e) {
        var brandImgs = this.data.brandImgs;
        var _this = this;
        _this.setData({
            "model.brandImgs": e.detail.uploaderList
        })
        if(_this.data.model.id>0)
        {
            _this.data.model.classification= _this.data.model.chainLev;
            _this.updataImgList();
        }
      },
      getCompetitorsUploaderList(e) {
        var competitorsAImgs = this.data.competitorsAImgs;
        var _this = this;
        _this.setData({
            "model.competitorsAImgs": e.detail.uploaderList
        })
        if(_this.data.model.id>0)
        {
            _this.data.model.competitorsImgs=_this.data.model.competitorsAImgs;
            _this.data.model.classification= _this.data.model.chainLev;
            _this.updataImgList();
        }
      },
      getExcellentUploaderList(e) {
        var excellentImgs = this.data.excellentImgs;
        var _this = this;
        _this.setData({
            "model.excellentImgs": e.detail.uploaderList
        })
        if(_this.data.model.id>0)
        {
            _this.data.model.classification= _this.data.model.chainLev;
            _this.updataImgList();
        }
      },
      getGoodsDisplayUploaderList(e) {
        var goodsDisplayImgs = this.data.goodsDisplayImgs;
        var _this = this;
        _this.setData({
            "model.goodsDisplayImgs": e.detail.uploaderList
        })
        if(_this.data.model.id>0)
        {
            _this.data.model.classification= _this.data.model.chainLev;
            _this.updataImgList();
        }
      },
      getCompetitorsBUploaderList(e) {
        var competitorsBImgs = this.data.competitorsBImgs;
        var _this = this;
        _this.setData({
            "model.competitorsBImgs": e.detail.uploaderList
        })
        if(_this.data.model.id>0)
        {
            _this.data.model.competitorsImgs=_this.data.model.competitorsBImgs;
            _this.data.model.classification= _this.data.model.chainLev;
            _this.updataImgList();
        }
      },
      getInterviewDisplayUploaderList(e) {
        var interviewDisplayImgs = this.data.interviewDisplayImgs;
        var _this = this;
        _this.setData({
            "model.interviewDisplayImgs": e.detail.uploaderList
        })
        if(_this.data.model.id>0)
        {
            _this.data.model.classification= _this.data.model.chainLev;
            _this.updataImgList();
        }
      },
      getshopNameImgList(e) {
        var shopNameImgs = this.data.shopNameImgs;
        var _this = this;
        _this.setData({
            "model.shopNameImgs": e.detail.uploaderList
        })
        if(_this.data.model.id>0)
        {
            _this.data.model.classification= _this.data.model.chainLev || _this.data.model.shopTourType;
            _this.updataImgList();
        }
      },
      getOtherUploaderList(e)
      {
        var otherImgs = this.data.otherImgs;
        var _this = this;
        _this.setData({
            "model.otherImgs": e.detail.uploaderList
        })
        if(_this.data.model.id>0)
        {
            _this.data.model.classification= _this.data.model.shopTourType;
            _this.updataImgList();
        }
      },
      saveClockIn(){
        if (!app.globalData.userInfo || !app.globalData.userInfo.userId) {
            commonApi.WXlogin(() => {
                that.setData({
                    userInfo: app.globalData.userInfo
                })
                that.saveClockIn()
            });
            return false;
        }
          if (this.data.model.status == 1) {
            wx.showToast({
                title: '请先结束本次巡店任务',
                icon: "none"
            });
            return false;
        }
        if (!that.data.model.storeName) {
            wx.showToast({
                title: '请确认巡店店名',
                icon: "error"
            })
            return false;
        }
        if(!that.data.model.chainName)
        {
            wx.showToast({
                title: '请填写连锁名称',
                icon: "error"
            })
            return false;
        }
        if(!that.data.model.chainLev||that.data.model.chainLev=='0')
        {
            wx.showToast({
                title: '请选择门店级别',
                icon: "error"
            })
            return false;
        }
        if(!that.data.model.shopTourType)
        {
            wx.showToast({
                title: '请填选择巡店方式',
                icon: "error"
            })
            return false;
        }
        if (!that.data.model.latitude || !that.data.model.longitude || !that.data.model.address) {
            this.getLocation()
            wx.showToast({
                title: '位置获取失败，请稍后再试',
                icon: "none"
            })
            return false;
        }
        if (!that.data.model.townId) {
            wx.showToast({
                title: '获取详细位置失败，请稍后再试',
                icon: "none"
            })
            return false;
        }
        if(that.data.model.shopTourType=='日常巡查'&&that.data.model.chainLev=='优秀店')
        {
            if(!that.data.model.brandName)
            {
                wx.showToast({
                    title: '请选择合作品牌',
                    icon: "none"
                })
                return false;
            }
            if(that.data.isShowOtherBrandNameInput&&!that.data.model.otherBrandName)
            {
                wx.showToast({
                    title: '请填写其他品牌名称',
                    icon: "none"
                })
                return false;
            }
            that.data.model.competitorsImgs=that.data.model.competitorsAImgs;
            that.data.model.classification= that.data.model.chainLev;
        }
        if(that.data.model.shopTourType=='日常巡查'&&that.data.model.chainLev=='普通店')
        {
            that.data.model.competitorsImgs=that.data.model.competitorsBImgs;
            that.data.model.classification= that.data.model.chainLev;
        }
        if(that.data.model.shopTourType=='日常巡查'&&that.data.model.chainLev=='亏损店')
        {
            that.data.model.classification= that.data.model.chainLev;
        }
        this.setData({
            loading: true
        });
        xundianApi.saveServiceClockIn(that.data.model).then(res=>{
            wx.setStorageSync("work_circle_need_refresh", true);
            that.resetClockInForm();
            wx.showToast({
                title: '打卡成功',
            })
        }).finally(()=>{
            wx.hideLoading()
            that.setData({
                loading: false
            });
        })
      },
      updataImgList()
      {
        if(that.data.model.chainLev=='优秀店'&&that.data.model.shopTourType=='日常巡查')
        {
            that.data.model.competitorsImgs=that.data.model.competitorsAImgs
        }
        if(that.data.model.chainLev=='普通店'&&that.data.model.shopTourType=='日常巡查')
        {
            that.data.model.competitorsImgs=that.data.model.competitorsBImgs
        }

        xundianApi.updataImgList(that.data.model).then(res=>{
            if(that.data.model.chainLev=='优秀店'&&that.data.model.shopTourType=='日常巡查')
            {
                res.data.otherBrandName=that.data.model.otherBrandName;
                res.data.brandName=that.data.model.brandName;
            }
           that.setXundian(res.data)
        }).finally(()=>{
            wx.hideLoading()
            that.setData({
                loading: false
            });
        })
      },
      checkBrand(e)
      {
        var brandNames="";
        const items = this.data.brandCheckArray
        const values = e.detail.value
        for (let i = 0, lenI = items.length; i < lenI; ++i) {
            items[i].checked = false
            for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
              if (items[i].value === values[j]) {
                items[i].checked = true;
                brandNames+=items[i].value+',';
                break
              }
            }
            if(items[i].value=='其他')
            {
                if(items[i].checked)
                {
                    this.setData({
                        isShowOtherBrandNameInput:true
                      })
                }else
                {
                    this.setData({
                        isShowOtherBrandNameInput:false,
                       
                      })
                }
            }
          }
          this.setData({
            brandCheckArray:items
          })
          this.setData({
              "model.brandName":brandNames.substring(0, brandNames.lastIndexOf(','))
          })
      }
})
