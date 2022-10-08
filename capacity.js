import request from '@/utils/request'

// 运力系统配置，公共模块
export function getSysConfig() {
  return request({
    url: '/api/other/sysConfig',
    method: 'post'
  })
}

export function getCarLen() {
  return request({
    url: '/api/other/getCarLen',
    method: 'post'
  })
}

export function getCarType() {
  return request({
    url: '/api/other/getCarType',
    method: 'post'
  })
}

// 轴数
export function getCarAxle() {
  return request({
    url: '/api/other/getCarAxle',
    method: 'post'
  })
}

// 归属部门
export function getGroup(data) {
  return request({
    url: '/api/other/getGroup',
    method: 'post',
    data
  })
}

// 查询物流公司下员工-归属人
export function getUserInfo(data) {
  return request({
    url: '/api/user/userInfo',
    method: 'post',
    data
  })
}

export function getPhone(data) {
  return request({
    url: '/api/correlation/getPhoneCorrelation',
    method: 'post',
    data
  })
}

// 承运商管理
export function getCapacList(data, query) {
  return request({
    url: '/api/correlation/getCarrierList',
    method: 'post',
    data,
    params: query
  })
}

export function delCorrelation(data) {
  return request({
    url: '/api/correlation/delCorrelation',
    method: 'post',
    data
  })
}

export function addCarpa(data) {
  return request({
    url: '/api/correlation/addCarrier',
    method: 'post',
    data
  })
}

// 司机管理
export function getDriverList(data, query) {
  return request({
    url: '/api/correlation/getDriverList',
    method: 'post',
    data,
    params: query
  })
}

export function addDriver(data) {
  return request({
    url: '/api/correlation/addDriver',
    method: 'post',
    data
  })
}

// get baidu ocr token
// 参考网址:https://cloud.baidu.com/doc/OCR/s/skruaza7j
export function baiduOCRToken() {
  return request({
    // url: '/apihttps://aip.baidubce.com/oauth/2.0/token',
    url: '/api/oauth/2.0/token',
    method: 'post',
    headers: {
      dataType: 'x-www-form-urlencoded'
    },
    params: {
      grant_type: 'client_credentials', // 固定参数
      client_id: 'xUAdzPdPB1DiXfP6QrFHizyA', // API Key
      client_secret: '7XfL7aykRlE15e7SDSOdHYaXa0R4oPvI' // Secret key
    }
  })
}

// 车辆管理
export function getCarList(data, query) {
  return request({
    url: '/api/correlation/getCarList',
    method: 'post',
    data,
    params: query
  })
}

export function getNumCar(data) {
  return request({
    url: '/api/correlation/getNumCar',
    method: 'post',
    data
  })
}

export function addCar(data) {
  return request({
    url: '/api/correlation/addCar',
    method: 'post',
    data
  })
}

export function delCar(data) {
  return request({
    url: '/api/correlation/delCar',
    method: 'post',
    data
  })
}

// 司机群组管理
export function getDriverGroupList(data, query) {
  return request({
    url: '/api/transport/driverGroupList',
    method: 'post',
    data,
    params: query
  })
}

// 创建司机群组
export function createDriverGroup(data) {
  return request({
    url: '/api/transport/createDriverGroup',
    method: 'post',
    data
  })
}

// 修改司机群组
export function editDriverGroup(data) {
  return request({
    url: '/api/transport/editDriverGroup',
    method: 'post',
    data
  })
}

// 司机群组详情
export function driverGroupDetail(data) {
  return request({
    url: '/api/transport/driverGroupDetail',
    method: 'post',
    data
  })
}

// 删除司机群组
export function delDriverGroup(data) {
  return request({
    url: '/api/transport/delDriverGroup',
    method: 'post',
    data
  })
}

// 外包线路列表
export function contractLineList(data) {
  return request({
    url: '/api/transport/contractLineList',
    method: 'post',
    data
  })
}

// 运力合同列表
export function contractList(data) {
  return request({
    url: '/api/transport/contractList',
    method: 'post',
    data
  })
}

export function contractDetail(data) {
  return request({
    url: '/api/transport/contractDetail',
    method: 'post',
    data
  })
}

// 生成单号
export function createCode(data) {
  return request({
    url: '/api/finance/createCode',
    method: 'post',
    data
  })
}

// 新建运力合同
export function createCapacityContract(data) {
  return request({
    url: '/api/transport/createCapacityContract',
    method: 'post',
    data
  })
}

// 删除运力合同
export function delContract(data) {
  return request({
    url: '/api/transport/delContract',
    method: 'post',
    data
  })
}

// 修改运力合同
export function editContract(data) {
  return request({
    url: '/api/transport/editContract',
    method: 'post',
    data
  })
}

// 启用、禁用运力合同
export function setUseStatus(data) {
  return request({
    url: '/api/transport/setUseStatus',
    method: 'post',
    data
  })
}

// 删除附件
export function delContractFile(data) {
  return request({
    url: '/api/transport/delContractFile',
    method: 'post',
    data
  })
}

// 好友审核
export function handleFriend(data) {
  return request({
    url: '/api/correlation/handleFriend',
    method: 'post',
    data
  })
}

