import * as xundianApi from '../../api/xundian.js';
import config from '../../utils/config.js';
import {
    date,
    dateFormat,
    timeAgo
} from '../../utils/util.js';
var that;
Page({
    data: {
        userInfo:null,
        search: {
            pageIndex: 1,
            pageSize: 10,
            startTime: dateFormat(new Date(), "yyyy-MM-dd"),
            endTime: dateFormat(new Date(), "yyyy-MM-dd")
        },
        list: [],
        date: dateFormat(new Date(), "yyyy-MM-dd")
    },
    onLoad(options) {
        that=this;
        this.windowWidth = wx.getSystemInfoSync().windowWidth;
        if (options && options.userId) {
            this.data.search.userId = options.userId;
        }
        this.setData({
            userInfo:getApp().globalData.userInfo
        })
        wx.startPullDownRefresh();
    },
    onShow() {
        if (wx.getStorageSync("work_circle_need_refresh")) {
            wx.removeStorageSync("work_circle_need_refresh");
            wx.startPullDownRefresh();
        }
    },
    selectDate(e) {
        this.setData({
            date: e.detail.value
        })
        this.data.search.startTime = e.detail.value
        this.data.search.endTime = e.detail.value
        wx.startPullDownRefresh();
    },
    loadList(page) {
        this.data.search.pageIndex = page || 1
        xundianApi.getList(this.data.search).then(res => {
            wx.stopPullDownRefresh();
            var data = res.data.data || [];
            data.forEach(item => {
                item.detailList = item.detailList || [];
                item.imgList = item.imgList || item.detailList.map(detail => {
                    return {
                        src: detail.src || detail.image,
                        addTime: detail.addTime
                    }
                });
                item.comments = item.comments || [];
                if (item.detailList.length) {
                    item.detailList.forEach(detail => {
                        detail.addTime = dateFormat(detail.addTime, "HH:mm")
                    });
                    item.imageWidth = (item.detailList.length >= 2 ? this.windowWidth * 0.35 : this.windowWidth * 0.6) + "px"
                }
                item.addTime = timeAgo(item.startTime)
                if (item.prevTime && item.startTime) {
                    item.prevTime = this.getDateStr(new date(item.startTime) - new date(item.prevTime))
                }
                if (item.endTime && item.startTime) {
                    item.residenceTime = this.getDateStr(new date(item.endTime) - new date(item.startTime))
                }
                if(item.prevDistance>0){
                    if(item.prevDistance<100) item.prevDistance="100米内";
                    else if(item.prevDistance>1000) item.prevDistance=(item.prevDistance/1000).toFixed(1)+"公里";
                    else  item.prevDistance= item.prevDistance+"米"
                }
            });
            var list = page > 1 ? this.data.list.concat(data) : data;
            this.setData({
                list: list,
                total: res.data.total
            })
        }).finally(() => {
            wx.stopPullDownRefresh();
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
    priview(e) {
        var urls = []
        var item = e.currentTarget.dataset.item || {};
        var detailList = item.detailList && item.detailList.length ? item.detailList : (item.imgList || []);
        detailList.forEach(item => {
            var image = item.image || item.src;
            if (image) {
                urls.push(image)
            }
        });
        if (!urls.length) return;
        wx.previewImage({
            urls: urls,
            current: urls[e.currentTarget.dataset.index],
            referrerPolicy: "origin"
        })
    },

    onPullDownRefresh() {
        this.loadList();
    },

    onReachBottom() {
        if (this.data.total > this.data.search.pageIndex * this.data.search.pageSize) {
            this.loadList(this.data.search.pageIndex + 1);
        }
    },
    onDelete(e) {
        const index = e.currentTarget.dataset.index;
        if (!this.data.list[index]) return;
        const id = this.data.list[index].id;
        wx.showModal({
            title: "提示",
            content: "确定要删除记录吗？",
            success(e) {
                if (e.confirm) {
                    wx.showLoading({
                        title: '正在删除',
                    })
                    xundianApi.del(id).then(res => {
                        that.data.list.splice(index, 1);
                        that.setData({
                            list: that.data.list
                        })
                    }).finally(() => {
                        wx.hideLoading()
                    })
                }
            }
        })
    },
    onComment(e){
        this.currentIndex = e.currentTarget.dataset.index;
        this.currentCommentIndex = e.currentTarget.dataset.commentindex;
        this.setData({
            showCommentView:true,
            replyComment: this.currentCommentIndex>=0? (this.data.list[this.currentIndex].comments || [])[this.currentCommentIndex]:{}
        })
    },
    onCommentConfirm(e){
        var index=this.currentIndex;
        if (!this.data.list[index]) return;
        var item = this.data.list[index];
        var commentIndex = this.currentCommentIndex;
        item.comments = item.comments || [];
        var commentItem =commentIndex>=0? item.comments[commentIndex]:{};
        if(!e.detail.value){
            wx.showToast({
              title: '请填写内容',
              icon:"error"
            })
            return ;
        }
        var param ={
            agentId:config.agentId,
            appId: __wxConfig.accountInfo.appId,
            xundianId: item.id,
            commentId:commentItem.id,
            toUserId:commentItem.userId,
            content:e.detail.value,
            redirectPage:"/pages/xundian/detail?id="+item.id
        }
        wx.showLoading({
          title: '提交中',
        })
        xundianApi.comment(param).then(res => {
            item.comments.push(res.data)
            that.setData({
                ['list['+index+'].comments']: item.comments,
                showCommentView:false,
                commentValue:""
            });
        }).finally(() => {
            wx.hideLoading()
        })
    },
    onCommentBlur(){
        this.setData({
            showCommentView:false,
            replyComment: {}
        })
    },
    onMoreComments(e){
        var index = e.currentTarget.dataset.index;
        if (!this.data.list[index]) return;
        var item = this.data.list[index];
        if(!item.commentSearch){
            item.commentSearch={
                pageIndex:1,
                pageSize:item.comments.length || 10,
                xundianId:item.id
            }
        }
        item.commentSearch.pageIndex++
        xundianApi.getCommentList(item.commentSearch).then(res=>{
            item.comments=item.comments.concat(res.data.data)
            that.setData({
                ['list['+index+'].comments']: item.comments,
            })
        })
    },
    onOpenLine(e){
        var index = e.currentTarget.dataset.index;
        if (!this.data.list[index]) return;
        var item = this.data.list[index];
        wx.navigateTo({
          url: `/pages/xundian/polyline?userId=${item.userId}&date=${item.date}`,
        })
    },
})
