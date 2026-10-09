import {
    getList
} from '../../api/xundian.js';
import { date, dateFormat } from '../../utils/util.js';
var that;
const app = getApp();
Page({
    data: {
        latitude: 23.099994,
        longitude: 113.324520,
        search: {
            userId: null,
        },
        markers: [],
        points: [],
        polyline: [],
        date:dateFormat(new Date(), "yyyy-MM-dd")
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        that = this;
        if(options){
            this.data.search.userId = options.userId;
            this.data.search.startTime = options.date;
            this.data.search.endTime =  options.date;
            this.loadList();
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.mapCtx = wx.createMapContext("mapId");
        this.animation = wx.createAnimation();
    },
    selectDate(e) {
        this.setData({
            date: e.detail.value
        })
        this.data.search.startTime = e.detail.value;
        this.data.search.endTime = e.detail.value;
        this.loadList();
    },
    loadList(page) {
        this.data.search.pageIndex = page || 1
        getList(this.data.search).then(res => {
            this.total = res.data.total;
            var data = res.data.data || [];
            this.data.list = page > 1 ? this.data.list.concat(data) : data;
            const polyline = {
                points: [],
                arrowLine: true,
                color: "#fe3636",
                width: 10,
            }
            const markers = [],
                points = [];
                var totalResidenceTime=0;
            this.data.list.forEach((item, index) => {
                item.detailList = item.detailList || [];
                item.time = dateFormat(item.startTime,"HH:mm");
                if (item.prevTime && item.startTime) {
                    item.prevTime = this.getDateStr(new date(item.startTime) - new date(item.prevTime))
                }
                if (item.endTime && item.startTime) {
                    totalResidenceTime+=new date(item.endTime) - new date(item.startTime)
                    item.residenceTime = this.getDateStr(new date(item.endTime) - new date(item.startTime))
                }
                if(item.prevDistance>0){
                    if(item.prevDistance<100) item.prevDistance="100米内";
                    else if(item.prevDistance>1000) item.prevDistance=(item.prevDistance/1000).toFixed(1)+"公里";
                    else  item.prevDistance= item.prevDistance+"米"
                }
                points.push({
                    latitude: item.latitude,
                    longitude: item.longitude
                });
                markers.push({
                    id: item.id,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    joinCluster: true, // 指定了该参数才会参与聚合
                    width: 36,
                    height: 36,
                    iconPath: index == 0 ? "/images/icon/map_startpoint.png" : index == this.data.list.length - 1 ? "/images/icon/map_endpoint.png" : "/images/icon/map_marker_blue.png",
                    /*label: { //标签
                        bgColor: '#ffffff',
                        borderWidth: 1,
                        padding: 2,
                        borderRadius: 4,
                        content: item.storeName
                    },*/
                    customCallout: { //自定义气泡
                        anchorY: 0,
                        anchorX: 0,
                        display: 'ALWAYS'
                    },
                    calloutImg: item.detailList.length && item.detailList[0].image,
                    //calloutName: item.storeName
                });
            });
            totalResidenceTime=this.getDateStr(totalResidenceTime);
            polyline.points = points;
            if (this.data.list.length > 0) {
                var item=this.data.list[0];
                this.data.latitude = item.latitude;
                this.data.longitude = item.longitude;
                this.data.date = dateFormat(item.date,"yyyy-MM-dd");
                wx.setNavigationBarTitle({
                    title: item.realName,
                  });
            }
            this.setData({
                list:this.data.list,
                date:this.data.date,
                totalResidenceTime:totalResidenceTime,
                latitude: this.data.latitude,
                longitude: this.data.longitude,
                polyline: [polyline],
                markers: markers,
                //points: points

            }, () => {
                setTimeout(() => {
                    this.setData({
                        points: points
                    })
                }, 1000);
               
            })
        })
    },
     //获取间隔时间
     getDateStr(timestamp) {
        var seconds = timestamp / 1000;
        var days = Math.floor(seconds / 60 / 60 / 24);
        if (days >= 1) return days + "天";
        var hours = Math.floor(seconds / 60 / 60);
        if (hours >= 1) return hours + "小时" + (Math.floor(seconds / 60) - hours * 60) + "分钟";
        var minutes = Math.floor(seconds / 60);
        if (minutes >= 1) return minutes + "分钟";
        return seconds + "秒"
    },
    onPreview(e){
        var index = e.currentTarget.dataset.detailindex;
        if(index==null&&e.detail.markerId)
       index=   this.data.list.findIndex(item=>{return item.id==e.detail.markerId;});
        if (index < 0 || !this.data.list[index]) return;
        var urls = []
        var detailList = this.data.list[index].detailList || [];
        detailList.forEach(item => {
            if (item.image) {
                urls.push(item.image)
            }
        });
        if (!urls.length) return;
        wx.previewImage({
            urls: urls,
            current: urls[index],
            referrerPolicy: "origin"
        })
    },
    onTouchStart: function(e){
        // console.log(e.touches[0].pageX)
        let sx = e.touches[0].pageX
        let sy = e.touches[0].pageY
        this.data.touchS = [sx,sy]
      },
      onTouchMove: function(e){
        let sx = e.touches[0].pageX;
        let sy = e.touches[0].pageY;
        this.data.touchE = [sx, sy]
      },
      onTouchEnd: function(e){
        let start = this.data.touchS
        let end = this.data.touchE
        console.log(start)
        console.log(end)
        if(start[0] < end[0] - 50){
          console.log('右滑')
        }else if(start[0] > end[0] + 50){
          console.log('左滑')
        }else{
          console.log('静止')
        }
      }
})
