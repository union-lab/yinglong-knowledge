import * as config from './config.js';
const envVersion =  wx.getAccountInfoSync().miniProgram.envVersion;
const service = {}
service.get = (url, data) => {
    if (data && typeof data === "object") {
        for (var item in data) {
            if (data[item] == null || data[item] == undefined) {
                delete data[item]
            }
        }
    }
    return service.request(url, data, "get");
}
service.post = (url, data) => {
    return service.request(url, data, "post");
}
service.put = (url, data) => {
    return service.request(url, data, "put");
}
service.delete = (url, data) => {
    return service.request(url, data, "delete");
}

const getBaseUrl = () => {
    return config.baseUrl[envVersion] || config.baseUrl.release;
}

const isMockEnabled = () => {
    return !!config.enableMock && envVersion === "develop";
}

const mockStoreVisibilityKey = "mock_store_visibility";
const mockClockRecordsKey = "mock_clock_records";

const getMockStoreVisibility = () => {
    try {
        return wx.getStorageSync(mockStoreVisibilityKey) || {};
    } catch (e) {
        return {};
    }
}

const setMockStoreVisibility = (id, isShow) => {
    if (!id && id !== 0) {
        return;
    }
    const visibility = getMockStoreVisibility();
    visibility[id] = isShow !== false;
    try {
        wx.setStorageSync(mockStoreVisibilityKey, visibility);
    } catch (e) {}
}

const applyMockStoreVisibility = (stores) => {
    const visibility = getMockStoreVisibility();
    return stores.map(item => {
        if (visibility[item.id] === undefined) {
            return item;
        }
        const isShow = visibility[item.id] !== false;
        return {
            ...item,
            isShow: isShow,
            show: isShow,
            hidden: !isShow
        }
    })
}

const createMockRecord = (id) => {
    return {
        id: id,
        userId: 1,
        realName: "演示用户",
        avatar: "/images/icon/default_avatar.svg",
        deptName: "巡店团队",
        storeId: 1,
        storeName: "善医演示门店",
        startTime: "2026-08-03 09:30:00",
        endTime: "2026-08-03 10:05:00",
        date: "2026-08-03",
        latitude: 31.2304,
        longitude: 121.4737,
        prevTime: null,
        prevDistance: 0,
        commentCount: 1,
        comments: [{
            id: 1,
            userId: 1,
            realName: "演示用户",
            content: "开发预览数据"
        }],
        detailList: [{
            image: "/images/add.jpg",
            address: "上海市黄浦区演示地址",
            addTime: "2026-08-03 09:30:00",
            note: "门店陈列检查完成"
        }],
        imgList: [{
            src: "/images/add.jpg"
        }]
    }
}

const getMockClockRecords = () => {
    try {
        return wx.getStorageSync(mockClockRecordsKey) || [];
    } catch (e) {
        return [];
    }
}

const saveMockClockRecord = (data) => {
    const now = new Date();
    const time = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
    const record = {
        id: now.getTime(),
        userId: 1,
        realName: "演示用户",
        avatar: "/images/icon/default_avatar.svg",
        storeId: data && (data.storeId || data.id) || "",
        storeName: data && data.storeName || "善医演示门店",
        chainName: data && data.chainName || "",
        chainLev: data && data.chainLev || "",
        shopTourType: data && data.shopTourType || "",
        startTime: time,
        endTime: time,
        date: time.substring(0, 10),
        latitude: data && data.latitude || 31.2304,
        longitude: data && data.longitude || 121.4737,
        prevTime: null,
        prevDistance: 0,
        commentCount: 0,
        comments: [],
        detailList: [{
            image: ((data && data.shopNameImgs && data.shopNameImgs[0]) || (data && data.otherImgs && data.otherImgs[0]) || "/images/add.jpg"),
            address: data && data.address || "演示地址",
            addTime: time,
            note: data && data.note || "打卡完成"
        }],
        imgList: [{
            src: ((data && data.shopNameImgs && data.shopNameImgs[0]) || (data && data.otherImgs && data.otherImgs[0]) || "/images/add.jpg")
        }]
    };
    const records = getMockClockRecords();
    records.unshift(record);
    try {
        wx.setStorageSync(mockClockRecordsKey, records);
    } catch (e) {}
    return record;
}

const createEmptyXundian = () => {
    return {
        id: 0,
        status: 2,
        storeName: "",
        storeId: "",
        chainName: "",
        chainLevStr: "",
        shopTourTypeStr: "",
        brandName: "",
        note: ""
    }
}

const mockData = (url, data, method) => {
    const now = new Date().getTime();
    if (url === "/user/info") {
        return {
            userId: 1,
            realName: "演示用户",
            nickName: "巡店员",
            avatar: "/images/icon/default_avatar.svg"
        }
    }
    if (url === "/user/login/miniprogram" || url === "/employee/login/WorkWeixin") {
        return "mock-token-" + now;
    }
    if (url === "/user/log/list") {
        const logs = [{
            id: 1,
            type: "login",
            typeName: "登录",
            title: "小程序登录",
            time: "2026-08-03 08:42:16",
            device: "iPhone 12/13",
            location: "上海市黄浦区",
            remark: "演示用户进入善医巡店"
        }, {
            id: 2,
            type: "clock",
            typeName: "打卡",
            title: "巡店打卡",
            time: "2026-08-03 09:30:00",
            storeName: "善医演示门店",
            location: "上海市黄浦区演示地址",
            remark: "日常巡查，优秀店"
        }, {
            id: 3,
            type: "clock",
            typeName: "打卡",
            title: "结束巡店任务",
            time: "2026-08-03 10:05:00",
            storeName: "善医演示门店",
            location: "上海市黄浦区演示地址",
            remark: "停留时间 35 分钟"
        }, {
            id: 4,
            type: "logout",
            typeName: "下线",
            title: "用户下线",
            time: "2026-08-03 18:12:44",
            device: "iPhone 12/13",
            location: "上海市黄浦区",
            remark: "退出或会话结束"
        }];
        const type = data && data.type;
        const filteredLogs = type && type !== "all" ? logs.filter(item => item.type === type) : logs;
        return {
            data: filteredLogs,
            total: filteredLogs.length
        }
    }
    if (url === "/xundian/indexview") {
        return createEmptyXundian();
    }
    if (url === "/xundian/saveClockIn") {
        saveMockClockRecord(data || {});
        return createEmptyXundian();
    }
    if (url === "/xundian/store/today-status") {
        const storeId = data && data.storeId;
        const storeName = data && data.storeName;
        const today = data && data.date;
        const records = getMockClockRecords().concat([createMockRecord(1), createMockRecord(2)]);
        const hasClocked = records.some(item => {
            const sameDate = !today || item.date === today;
            const sameStore = storeId ? String(item.storeId) === String(storeId) : item.storeName === storeName;
            return sameDate && sameStore;
        });
        return {
            hasClocked: hasClocked
        }
    }
    if (url === "/xundian/newEndTask/") {
        saveMockClockRecord(data || {});
        return createEmptyXundian();
    }
    if (url === "/xundian/list" || url === "/xundian/salesman/location/list") {
        const records = getMockClockRecords().concat([createMockRecord(1), createMockRecord(2)]).filter(item => {
            if (!data || !data.startTime) {
                return true;
            }
            const sameDate = item.date === data.startTime;
            const sameStore = data.storeId ? String(item.storeId) === String(data.storeId) : (!data.storeName || item.storeName === data.storeName);
            return sameDate && sameStore;
        });
        return {
            data: records,
            total: records.length
        }
    }
    if (url.indexOf("/xundian/info/") === 0) {
        return createMockRecord(Number(url.split("/").pop()) || 1);
    }
    if (url === "/xundian/comment") {
        return {
            id: now,
            userId: 1,
            realName: "演示用户",
            content: data && data.content
        }
    }
    if (url === "/xundian/comment/list") {
        return {
            data: [],
            total: 0
        }
    }
    if (url === "/xundian/getRankingData") {
        return [{
            userId: 1,
            realName: "演示用户",
            score: 100,
            count: 5
        }]
    }
    if (url === "/store/list" || url === "/store/NearStoreList") {
        const stores = [{
            id: 1,
            name: "善医演示门店",
            storeName: "善医演示门店",
            chainName: "演示连锁",
            chainLev: "优秀店",
            chainLevStr: "优秀店",
            unionLev: "一级",
            unionLevStr: "一级",
            latitude: 31.2304,
            longitude: 121.4737,
            provinceId: "31",
            cityId: "3101",
            districtId: "310101",
            provinceName: "上海市",
            cityName: "上海市",
            districtName: "黄浦区",
            townName: "",
            address: "上海市黄浦区演示地址",
            distance: 120,
            isShow: true,
            deleted: false,
            clockInCount: 2
        }, {
            id: 2,
            name: "善医越秀门店",
            storeName: "善医越秀门店",
            chainName: "演示连锁",
            chainLev: "普通店",
            chainLevStr: "普通店",
            unionLev: "二级",
            unionLevStr: "二级",
            latitude: 23.1291,
            longitude: 113.2644,
            provinceId: "44",
            cityId: "4401",
            districtId: "440104",
            provinceName: "广东省",
            cityName: "广州市",
            districtName: "越秀区",
            townName: "",
            address: "广州市越秀区演示地址",
            distance: 860,
            isShow: true,
            deleted: false,
            clockInCount: 0
        }, {
            id: 3,
            name: "善医天河门店",
            storeName: "善医天河门店",
            chainName: "善医直营",
            chainLev: "亏损店",
            chainLevStr: "亏损店",
            unionLev: "一级",
            unionLevStr: "一级",
            latitude: 23.1353,
            longitude: 113.3612,
            provinceId: "44",
            cityId: "4401",
            districtId: "440106",
            provinceName: "广东省",
            cityName: "广州市",
            districtName: "天河区",
            townName: "",
            address: "广州市天河区演示地址",
            distance: 1280,
            isShow: false,
            deleted: false,
            clockInCount: 0
        }];
        const storesWithVisibility = applyMockStoreVisibility(stores);
        const keyword = data && data.keyword;
        const filteredStores = storesWithVisibility.filter(item => {
            const provinceMatched = !data || !data.provinceId || String(item.provinceId) === String(data.provinceId);
            const cityMatched = !data || !data.cityId || String(item.cityId) === String(data.cityId);
            const districtMatched = !data || !data.districtId || String(item.districtId) === String(data.districtId);
            const keywordMatched = !keyword || item.storeName.indexOf(keyword) > -1 || item.chainName.indexOf(keyword) > -1;
            return provinceMatched && cityMatched && districtMatched && keywordMatched;
        });
        return {
            data: filteredStores,
            total: filteredStores.length
        }
    }
    if (url.indexOf("/store/info/") === 0) {
        return {
            id: Number(url.split("/").pop()) || 1,
            name: "善医演示门店",
            storeName: "善医演示门店",
            chainName: "演示连锁",
            chainLev: "优秀店",
            chainLevStr: "优秀店",
            address: "上海市黄浦区演示地址",
            latitude: 31.2304,
            longitude: 121.4737
        }
    }
    if (url === "/store/shoptourtypelist") {
        return [{
            id: 1,
            key: 1,
            name: "日常巡查",
            value: "日常巡查"
        }, {
            id: 2,
            key: 2,
            name: "其他",
            value: "其他"
        }]
    }
    if (url === "/store/chainlevlist") {
        return [{
            id: 1,
            key: 1,
            name: "优秀店",
            value: "优秀店"
        }, {
            id: 2,
            key: 2,
            name: "普通店",
            value: "普通店"
        }, {
            id: 3,
            key: 3,
            name: "亏损店",
            value: "亏损店"
        }]
    }
    if (url === "/store/unionlevlist") {
        return [{
            id: 1,
            key: 1,
            name: "一级",
            value: "一级"
        }, {
            id: 2,
            key: 2,
            name: "二级",
            value: "二级"
        }]
    }
    if (url === "/team/page") {
        return {
            teamList: [{
                key: 0,
                value: "默认团队"
            }]
        }
    }
    if (url === "/team/userlist") {
        return {
            data: [{
                userId: 1,
                realName: "演示用户",
                deptName: "巡店团队",
                avatar: "/images/icon/default_avatar.svg"
            }],
            total: 1
        }
    }
    if (url === "/store/info" && method === "put" && data && data.isShow !== undefined) {
        setMockStoreVisibility(data.id, data.isShow);
        return data || true;
    }
    if (method === "delete" || method === "put" || method === "post") {
        return data || true;
    }
    return {};
}

const mockRequest = (url, data, method) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                code: 200,
                msg: "ok",
                data: mockData(url, data, method)
            })
        }, 100)
    })
}

service.request = (url, data, method) => {
    if (isMockEnabled()) {
        return mockRequest(url, data, method);
    }
    var token = wx.getStorageSync(config.tokenKey);
    return new Promise((resolve, reject) => {
        wx.request({
            url: getBaseUrl() + url,
            header: {
                Authorization: `Bearer ${token}`
            },
            method: method,
            data: data,
            success(res) {
                return success(res, resolve, reject)
            },
            fail(err) {
                return fail(err, resolve, reject)
            }
        })
    });
}
service.uploadFile = (url, filePath, data) => {
    if (isMockEnabled()) {
        return mockRequest(url, data, "post");
    }
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            filePath: filePath,
            name: 'imageFile',
            //url: config.baseUrl + url+(url.indexOf("?")>-1?":":"?")+jsonToParam(data),
            url: getBaseUrl() + url,
            formData: data,
            header: {
                Authorization: `Bearer ${wx.getStorageSync(config.tokenKey)}`
            },
            dataType: "json",
            success(res) {
                if (res.statusCode === 200 && typeof res.data === "string") {
                    res.data = JSON.parse(res.data);
                }
                return success(res, resolve, reject)
            },
            fail(err) {
                return fail(err, resolve, reject)
            }
        })
    });
}
service.uploadImgFile = (url, filePath,data) => {
    if (isMockEnabled()) {
        return mockRequest(url, {
            src: filePath,
            localAddress: data && data.localAddress
        }, "post");
    }
    return new Promise((resolve, reject) => {
        wx.uploadFile({
            filePath: filePath,
            name: 'imageFile',
            formData: data,
            //url: config.baseUrl + url+(url.indexOf("?")>-1?":":"?")+jsonToParam(data),
            url: getBaseUrl() + url,
            header: {
                Authorization: `Bearer ${wx.getStorageSync(config.tokenKey)}`
            },
            dataType: "json",
            success(res) {
                if (res.statusCode === 200 && typeof res.data === "string") {
                    res.data = JSON.parse(res.data);
                }
                return success(res, resolve, reject)
            },
            fail(err) {
                return fail(err, resolve, reject)
            }
        })
    });
}
const success = (response, resolve, reject) => {
    var res = response.data;
    if (response.statusCode == 200) {
        if (res.code == 200) {
            return resolve(res);
        } else if (res.code == 401) {
            wx.setStorageSync(config.tokenKey, "");
            var app = getApp();
            app.globalData.userInfo = null
        }
    }

    const msg = (res && res.msg) || `StatusCode:${response.statusCode}`;
    if (res && res.code == 401) {
        wx.showToast({
            title: '登录信息已失效',
            icon: "error",
            duration: 3000
        })
    } else {
        wx.showModal({
            title: "错误",
            content: msg,
            showCancel: false
        })
    }
    return reject(new Error(msg));
}
const fail = (error, resolve, reject) => {
    const msg = error && error.errMsg ? error.errMsg : "网络请求失败";
    wx.showModal({
        title: "错误",
        content: msg,
        showCancel: false
    })
    return reject(error);
}
export default service;
