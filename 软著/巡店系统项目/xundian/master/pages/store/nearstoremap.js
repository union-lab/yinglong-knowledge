import * as storeApi from '../../api/store.js';
import * as xundianApi from '../../api/xundian.js';
var QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
const config = require("../../utils/config");
var that;
var qqmapsdk;
Page({
    data: {
        latitude: 23.099994,
        longitude: 113.324520,
        list: [],
        search: {
            pageIndex: 1,
            pageSize: 200,
            cityId: 0
        },
        markers: [],
        points: [],
        showName:false,
        showSalesman: false,
        singleStoreMode: false,
        selectedStore: null,
        actionTitle:"操作",
        showActionsheet: false,
        actionGroups: [{
                text: '导航到这里',
                value: 1
            }
        ],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        that = this;
        this.shopMarkers=[];
        this.salesmanMarkers=[];
        // 实例化API核心类
        qqmapsdk = new QQMapWX({
            key: config.qqMapKey
        });
        if (options && (options.storeId || options.storeName)) {
            this.initSingleStore(options);
            return;
        }
        wx.getLocation({
            type: "gcj02",
            isHighAccuracy: true,
            //altitude: true,
            success(res) {
                console.log(res)
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude,
                    //altitude:res.altitude,
                });
                qqmapsdk.reverseGeocoder({
                    location: {
                        latitude: res.latitude,
                        longitude: res.longitude
                    },
                    success(res) {
                        var res = res.result;
                        that.ad_info=res.ad_info;
                        that.data.search.cityId = res.address_reference.town.id.substring(0, 4);
                        that.loadList()            
                    }
                })
            },
            fail() {
                wx.showToast({
                    title: '获取位置失败',
                    icon: "error"
                })
            }
        });
    },
    initSingleStore(options) {
        const latitude = Number(options.latitude);
        const longitude = Number(options.longitude);
        if (!latitude || !longitude) {
            wx.showToast({
                title: '该门店暂无地图坐标',
                icon: 'none'
            })
            setTimeout(() => {
                wx.navigateBack();
            }, 600)
            return;
        }
        const item = {
            id: Number(options.storeId) || 1,
            storeName: decodeURIComponent(options.storeName || "门店"),
            address: decodeURIComponent(options.address || ""),
            latitude: latitude,
            longitude: longitude
        };
        this.currentItem = item;
        this.shopMarkers = [{
            id: item.id,
            latitude: latitude,
            longitude: longitude,
            width: 34,
            height: 34,
            iconPath: "/images/icon/map_marker_blue.png",
            label: {
                bgColor: '#ffffff',
                borderWidth: 1,
                padding: 6,
                borderRadius: 6,
                content: item.storeName
            }
        }];
        this.setData({
            singleStoreMode: true,
            selectedStore: item,
            latitude: latitude,
            longitude: longitude,
            list: [item],
            markers: this.shopMarkers,
            points: [{
                latitude: latitude,
                longitude: longitude
            }]
        })
        wx.setNavigationBarTitle({
            title: item.storeName
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.mapCtx = wx.createMapContext("mapId");
    },
    loadSalesmans(provinceId,cityId){
        xundianApi.getSalesmanlocationList({provinceId:provinceId,cityId:cityId}).then(res=>{
            this.salesmanMarkers=[];
            res.data.forEach((item, index) => {
                this.salesmanMarkers.push({
                    id: index,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    width: 30,
                    height: 30,
                    iconPath: item.avatar,
                    customCallout: { //自定义气泡
                        anchorY: 0,
                        anchorX: 0,
                        display: 'ALWAYS'
                    },
                    //calloutImg: item.avatar,
                    calloutName:item.realName
                });
            });
            this.setData({
                markers: this.shopMarkers.concat(this.salesmanMarkers),
            });
        })
    },
    loadList(page) {
        this.data.search.pageIndex = page || 1
        storeApi.getStoreList(this.data.search).then(res => {
            //wx.stopPullDownRefresh();
            this.total = res.data.total;
            this.data.list = page > 1 ? this.data.list.concat(res.data.data) : res.data.data;
            this.shopMarkers = [];
            const points = [];
            this.data.list.forEach(item => {
                this.shopMarkers.push({
                    id: item.id,
                    latitude:item.latitude,
                    longitude:item.longitude,
                    joinCluster: true, // 指定了该参数才会参与聚合
                    width:30,
                    height:30,
                    iconPath: "/images/icon/map_marker_blue.png",
                    oldLabel: {
                        bgColor: '#ffffff',
                        borderWidth: 1,
                        padding: 2,
                        borderRadius: 4,
                        content:item.storeName
                    }
                })
                points.push({
                    latitude: item.latitude,
                    longitude: item.longitude
                });
            });
            this.setData({
                markers: this.shopMarkers.concat(this.salesmanMarkers),
                points: points
            })
            //添加聚合
            /*if(this.mapCtx.addMarkers){
                this.mapCtx.addMarkers({
                    markers:this.data.markers,
                    clear: true
                })
            }*/
        })
    },
    //点击标记点
    onMarkerTap(e) {
        var item = this.data.list.find(temp => {
            return temp.id == e.detail.markerId
        });
        this.currentItem = item;
        this.setData({
            actionTitle:item.storeName,
            showActionsheet:true
        })
    },
    //显示、隐藏名称
    onShowName(){
        var  markers = this.data.markers;
        markers.forEach(item => {
            console.log(this.data.showName)
            if(this.data.showName){
                item.label={}
            }
            else{
                item.label=item.oldLabel
            }
        });
        this.setData({
            markers: markers,
            showName:!this.data.showName
        })
    },
    //操作
    selectAction(e) {
        this.setData({
            showActionsheet: false
        })
        switch (e.detail.value) {
            case 1:
                return this.openMap();
            case 2:
        }
    },
    //打开地图
    openMap() {
        var item = this.currentItem || this.data.selectedStore
        //打开地图
        wx.openLocation({
            latitude: item.latitude,
            longitude: item.longitude,
            name: item.storeName, //定位名称
            address: item.fullAddress || item.address || (item.districtName + item.townName + item.address), //具体地址
            scale: 15
        })
    },
    //是否显示业务员位置
    onShowSalesman(){
        if(this.data.showSalesman){
            this.setData({
                showSalesman:false,
                markers: this.shopMarkers,
            });
        }
        else{
            if(this.salesmanMarkers.length){
                this.setData({
                    showSalesman:true,
                    markers: this.shopMarkers.concat(this.salesmanMarkers),
                });
            }
            else{
                this.setData({
                    showSalesman:true,
                });
                that.loadSalesmans(this.ad_info.adcode.substring(0,2),this.ad_info.adcode.substring(0,4));
            }
        }   
    }
})
