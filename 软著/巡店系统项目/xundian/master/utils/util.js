function date(value){
    if(!value){
        return null;
    }
    return new Date(value.replace(/-/g,"/"));
}
const dateFormat = (value, fmt) => {
    if (!value) return value;
    var date =
        typeof value === "object" ? value : new Date(value.replace(/-/g, "/"));
    var o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "H+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
            );
    }
    return fmt;
}

/**
 * 
 * @param {JSON} data 
 */
const jsonToParam = data => {
    var str = "";
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
            str += (str ? "&" : "") + `${key}=${data[key]}`
        }
    }
    return str;
}

/**
 * 
 * @param {String} updateTime 
 */
const timeAgo = (updateTime) => {
    if (updateTime === null) {
        return ''
    }
    let now = new Date().getTime()
    let second = Math.floor((now - new Date(updateTime.replace(/-/g,"/"))) / (1000))
    let minute = Math.floor(second / 60)
    let hour = Math.floor(minute / 60)
    let day = Math.floor(hour / 24)
    let month = Math.floor(day / 31)
    let year = Math.floor(month / 12)

    console.log(hour);
    console.log(minute);
    if (year > 0) {
        return year + '年前'
    } else if (month > 0) {
        return month + '月前'
    } else if (day > 0) {
        let ret = day + '天前'
        if (day >= 7 && day < 14) {
            ret = '1周前'
        } else if (day >= 14 && day < 21) {
            ret = '2周前'
        } else if (day >= 21 && day < 28) {
            ret = '3周前'
        } else if (day >= 28 && day < 31) {
            ret = '4周前'
        }
        return ret
    } else if (hour > 0) {
        return hour + '小时前'
    } else if (minute > 0) {
        return minute + '分钟前'
    } else if (second > 0) {
        return second + '秒前'
    } else {
        return '刚刚'
    }
}

module.exports = {
    date,
    dateFormat,
    jsonToParam,
    timeAgo
}