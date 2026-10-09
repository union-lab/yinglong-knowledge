// components/case-imgs/index.js
import * as xundianApi from '../../api/xundian'
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      uploaderList: {
        type: Array,
        value: []
      },
      uploaderNum: {
        type: Number,
        value: 0
      },
      desc: {
        type: String,
        value: ''
      },
      title: {
        type: String,
        value: '补充图片'
      },
      type: {
        // false 开启图文咨询  补充咨询
        type: Boolean,
        value: false
      },
      localAddress:{
          type:String,
          value:''
      }
    },
   
    /**
     * 组件的初始数据
     */
    data: {
      showUpload: true,
      uploaderNowNum:0
    },
   
    /**
     * 组件的方法列表
     */
    methods: {
      // 删除图片
      clearImg: function(e) {
        var nowList = []; //新数据
   
        var uploaderList = this.data.uploaderList || []; //原数据
   
        for (let i = 0; i < uploaderList.length; i++) {
          if (i == e.currentTarget.dataset.index) {
            continue;
          } else {
            nowList.push(uploaderList[i])
            continue;
          }
        }
        this.setData({
          uploaderList: nowList,
          showUpload: true
        })
        this.triggerEvent('getUploaderList', {
          uploaderList: nowList
        })
      },
      //展示图片
      showImg: function(e) {
        var that = this;
        wx.previewImage({
          urls: that.data.uploaderList,
          current: that.data.uploaderList[e.currentTarget.dataset.index]
        })
      },
      //上传图片
      upload: function(e) {
        var that = this;
        var address=that.properties.localAddress;
        var currentList = that.data.uploaderList || [];
        var remaining = that.properties.uploaderNum - currentList.length;
        if (remaining <= 0) {
          that.setData({
            showUpload: false
          })
          return false;
        }
        wx.chooseImage({
          count: remaining,
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'],
          camera: 'back',
          success: function(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            let tempFilePaths =res.tempFilePaths;
            console.log(tempFilePaths)
            tempFilePaths.forEach(item => {
                //上传到云服务器
            xundianApi.uploadFile({localAddress:address},item).then(imgres=>{
                console.log(imgres)
                if(imgres.code==200)
                {
                    let imgUrl = item;
                    if (typeof imgres.data === "string") {
                      imgUrl = imgres.data;
                    } else if (imgres.data && typeof imgres.data === "object") {
                      imgUrl = imgres.data.url || imgres.data.src || imgres.data.path || item;
                    }
                    let uploaderList = (that.data.uploaderList || []).concat(imgUrl);
                    if (uploaderList.length >= that.properties.uploaderNum) {
                      that.setData({
                        showUpload: false
                      })
                    }
                    that.setData({
                      uploaderList: uploaderList,
                      //uploaderNum: uploaderList.length,
                    })
                    that.triggerEvent('getUploaderList', {
                      uploaderList: uploaderList
                    })
                }
            }).catch(err => {
                console.error(err)
                wx.showToast({
                  title: '图片上传失败',
                  icon: 'none'
                })
            })
            });
            
          },
          fail: function(err) {
            console.error(err)
            wx.showToast({
              title: '未选择图片',
              icon: 'none'
            })
          }
        })
      },
    }
  })
