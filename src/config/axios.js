import Axios from 'axios'
import { Toast } from 'vant';

Axios.defaults.baseURL='https://sentrade.io/'

Axios.interceptors.response.use(
    res=>{
       if(res.data.resultCode){
            Toast(res.data.resultMsg)
       }
       return res.data
    }
)
Axios.interceptors.request.use(
    config=>{
        if(config.method==='get'){
            config.params = config.data
            delete config.data
        }
            return config
    },
   
)
export default Axios