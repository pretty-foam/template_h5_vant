import Axios from 'axios'
import { Toast } from 'vant';
import qs from 'qs'   


const request = Axios.create({
    baseURL:process.env.VUE_APP_BASE_API,
    timeout:1000*30,
})

//响应拦截
request.interceptors.response.use(
    res=>{
       if(res.data.resultCode){
            Toast(res.data.resultMsg)
            throw new Error(res.data.errMsg||"系统开小差了，请稍后重试~~")
       }
       return res.data
    }
)

//请求拦截
request.interceptors.request.use(
    config=>{
        if(config.method==='get'){
            config.params = config.data
            delete config.data
        }else{
            // res.data = qs.stringify(res.data)  //参数表单化
        }
            return config
    },
   
)
export default request