/*
 * @Author: KESHAOYE
 * @Date: 2022-11-21 00:21:52
 */
// 请求需要的api

import api from '../../utils/request.js'


export const getStock = (p)=> api({
    methods: 'get',
    url: 'apis/shop/fulfillment-messages',
    params: p
})

export const getProvide = ()=>api({
    methods: 'get',
    url: 'apis/shop/address-lookup'
})

export const getStore = () => api({
    methods: 'get',
    url: 'apis/rsp-web/store-list?locale=zh_CN'
})

export const sendServerChan = (p) => api({
    methods: 'get',
    url: `https://sctapi.ftqq.com/${p.sendkey}.send?title=${p.title}&desp=${p.content}`
})