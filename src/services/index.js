import {get} from '@/axios/index'
let host = 'http://localhost:7008'
// 接口部分
export const userLogin = async(username,password) =>{
    return await get(`${host}/user/check`,{},{token:''}).then(res => res)
}