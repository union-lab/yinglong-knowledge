import * as xundianApi from '../../api/xundian.js';
import {
    date,
    dateFormat,
    timeAgo
} from '../../utils/util.js';
import config from '../../utils/config.js';
var that;
Page({
    data: {
        userInfo:null,
        item: null
    },

    onLoad(options) {
        that=this;
        this.id = 0;
        if (options) {
            this.id = options.id
        }
        this.windowWidth = wx.getSystemInfoSync().windowWidth;
        this.setData({
            userInfo:getApp().globalData.userInfo
        })
        this.loadData();
    },
    loadData(){
        xundianApi.getInfo(this.id).then(res => {
            wx.stopPullDownRefresh();
            var item = res.data || {};
            item.detailList = item.detailList || [];
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
            this.setData({
                item: item
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
    priview(e) {
        var urls = []
        var detailList = e.currentTarget.dataset.item.detailList || [];
        detailList.forEach(item => {
            if (item.image) {
                urls.push(item.image)
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
        this.loadData();
    },
    onDelete(e) {
        const id = this.id;
        wx.showModal({
            title: "提示",
            content: "确定要删除记录吗？",
            success(e) {
                if (e.confirm) {
                    wx.showLoading({
                        title: '正在删除',
                    })
                    xundianApi.del(id).then(res => {
                        wx.navigateBack();
                    }).finally(() => {
                        wx.hideLoading()
                    })
                }
            }
        })
    },
    onComment(e){
        this.currentCommentIndex = e.currentTarget.dataset.commentindex;
        this.setData({
            showCommentView:true,
            replyComment: this.currentCommentIndex>=0? (this.data.item.comments || [])[this.currentCommentIndex]:{}
        })
    },
    onCommentConfirm(e){
        var item = this.data.item;
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
                ['item.comments']: item.comments,
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
        var item = this.data.item;
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
                ['item.comments']: item.comments,
            })
        })
    },
    onOpenLine(e){
        var item = this.data.item;
        if (!item) return;
        wx.navigateTo({
          url: `/pages/xundian/polyline?userId=${item.userId}&date=${item.date}`,
        })
    }
})
