import http from '../utils/http'
/**
 * 获取门店列表
 * @param {*} data 
 */
export function getStoreList(data) {
    return http.get("/store/list", data);
}

/**
 * 获取附近门店列表
 * @param {*} data 
 */
export function getNearStoreList(data) {
    return http.get("/store/NearStoreList", data);
}

export function GetStoreInfo(id) {
    return http.get(`/store/info/${id}`);
}

/**
 * 更新定位
 * @param {*} data 
 */
export function updateStoreLocation(data) {
    return http.put("/store/location", data);
}
/**
 * 更新门店
 * @param {*} data 
 */
export function updateStore(data) {
    return http.put("/store/info", data);
}
/**
 * 新建门店
 * @param {*} data
 */
export function createStore(data) {
    return http.post("/store/info", data);
}
/** 获取巡店方式*/
export function getShopTourTypelistList(data) {
    return http.get("/store/shoptourtypelist", data);
}
export function getChainLevList(data) {
    return http.get("/store/chainlevlist", data);
}
export function getUnionLevList(data) {
    return http.get("/store/unionlevlist", data);
}
