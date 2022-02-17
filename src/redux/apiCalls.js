import { loginStart, loginFailure, loginSuccess } from "./userLogin"

import { publicRequest } from "../AxiosRequest"

export const login = async (dispatch, user)=>{
    dispatch(loginStart())
    try{
        const res = await publicRequest.post('auth/login', user)
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure())
    }
}