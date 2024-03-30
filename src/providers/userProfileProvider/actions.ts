import {IUserStateContext} from './context';
import {createAction} from 'redux-actions';
import {IUser} from './context';

export const actionType = {
    GET_USER_INFO: "GET_USER_INFO",
    DELETE_USER: "DELETE_USER",
}

export const getUserAction = createAction<IUserStateContext, IUser>(actionType.GET_USER_INFO, (userInfo)=>({userInfo}));
