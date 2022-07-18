import axios from "axios";
import qs from 'qs'

// 封装全局的get方法
export function get(url,params = {},headers={"Content-Type": "application/json"}){
    return new Promise((resolve,reject) =>{
        axios.get(
            url,
            {
                headers,
                params
            }).then((response)=>{
                resolve(response.data)
            }).catch(err=>{
                reject(err)
            })
    })
}

// 封装全局的post方法
export function post(url,data={},headers={"Content-Type": "application/x-www-form-urlencoded"}){
    return new Promise((resolve,reject)=>{
        axios.post({
            url,
            headers,
            data:headers['Content-Type'] === 'application/x-www-form-urlencoded' ? qs.stringify(data) : data,
        }).then((response)=>{
            resolve(response)
        }).catch(err=>{
            reject(err)
        })
    })
}

// axios默认配置
// axios.default.timeout  超时时间
// 请求拦截器将请求全都带上token
axios.interceptors.request.use((config)=>{
            let token = window.sessionStorage.getItem('accessToken')
            // if(token && token != null){
                config.headers.Authorization = token
            // }
            if(config.method === 'get') config.data = true
        return config
    },
    (err)=>{
        return Promise.reject(err)
    }
   
)

// 响应拦截器将响应的结果进行处理
axios.interceptors.response.use((response)=>{
    // 拦截响应，进行统一的处理
    try{
        return response
    }catch(err){
        return Promise.reject(err)
    }
})


