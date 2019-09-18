import Axios from './axios'
/**
 * 
 * 登录
 */
export const login = data => Axios({method: 'get',url: 'api/v1/user/login',data})