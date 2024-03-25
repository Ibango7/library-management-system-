import { IstateContext } from './context';
import { createAction } from 'redux-actions';

export const AuthActionEnums = {
    USER_LOGIN: "LOGIN",
    USER_REGISTER: "REGISTER",
    USER_LOGOUT: "LOGOUT"
}

export const loginUserAction = createAction<IstateContext>(AuthActionEnums.USER_LOGIN, ()=>({}));
export const logOutUserAction = createAction(AuthActionEnums.USER_LOGOUT, ()=>({}));

// exportt const registerUserAction = createAction<>
// export const registerUserAction = createAction(AuthActionEnums.USER_REGISTER, (data) =>({data}))
