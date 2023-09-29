import { request } from '../api/request';

export const login = (data) => request.post('user/registration/', data);
export const userlogin = (data) => request.post('user/login/', data);


