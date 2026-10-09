import { getUserLogList } from '../../api/common.js';

const getTypeMeta = (type) => {
    const map = {
        login: {
            label: "登录",
            className: "login"
        },
        logout: {
            label: "下线",
            className: "logout"
        },
        clock: {
            label: "打卡",
            className: "clock"
        }
    };
    return map[type] || {
        label: "记录",
        className: "default"
    };
}

const normalizeLog = (item) => {
    const meta = getTypeMeta(item.type);
    return {
        ...item,
        typeName: item.typeName || meta.label,
        typeClass: meta.className,
        displayTime: item.time || item.addTime || item.createTime || "",
        displayTitle: item.title || item.typeName || meta.label,
        displaySub: item.storeName || item.device || "",
        displayLocation: item.location || item.address || "",
        displayRemark: item.remark || item.note || ""
    };
}

const getResponseList = (res) => {
    if (Array.isArray(res && res.data)) {
        return res.data;
    }
    return (res && res.data && res.data.data) || [];
}

Page({
    data: {
        currentType: "all",
        tabs: [{
            text: "全部",
            value: "all"
        }, {
            text: "登录",
            value: "login"
        }, {
            text: "下线",
            value: "logout"
        }, {
            text: "打卡",
            value: "clock"
        }],
        list: [],
        stats: {
            login: 0,
            logout: 0,
            clock: 0
        },
        total: 0,
        loading: false
    },

    onLoad() {
        this.loadList();
    },

    onPullDownRefresh() {
        this.loadList();
    },

    selectType(e) {
        const type = e.currentTarget.dataset.type;
        if (type === this.data.currentType) {
            return;
        }
        this.setData({
            currentType: type
        })
        this.loadList();
    },

    loadList() {
        this.setData({
            loading: true
        })
        Promise.all([
            getUserLogList({
                type: this.data.currentType
            }),
            getUserLogList({
                type: "all"
            })
        ]).then(([res, allRes]) => {
            const rawList = getResponseList(res);
            const rawAllList = getResponseList(allRes).length ? getResponseList(allRes) : rawList;
            const list = rawList.map(item => normalizeLog(item));
            const allList = rawAllList.map(item => normalizeLog(item));
            const stats = {
                login: 0,
                logout: 0,
                clock: 0
            };
            allList.forEach(item => {
                if (stats[item.type] !== undefined) {
                    stats[item.type] += 1;
                }
            })
            this.setData({
                list: list,
                total: res.data && res.data.total || list.length,
                stats: stats
            })
        }).catch(err => {
            console.error(err)
            wx.showToast({
                title: '日志加载失败',
                icon: 'none'
            })
        }).finally(() => {
            this.setData({
                loading: false
            })
            wx.stopPullDownRefresh();
        })
    }
})
