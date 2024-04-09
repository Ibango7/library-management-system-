import {IUserStateContext} from './context';
import {createAction} from 'redux-actions';
import {IUser, IUserActivity} from './context';

export const actionType = {
    GET_USER_INFO: "GET_USER_INFO",
    DELETE_USER: "DELETE_USER",
    GET_USER_ACTIVITY: "GET_USER_ACTIVITY"
}

export const getUserAction = createAction<IUserStateContext, IUser>(actionType.GET_USER_INFO, (userInfo)=>({userInfo}));
export const getUserActivityAction = createAction<IUserStateContext, IUserActivity[]>(actionType.GET_USER_ACTIVITY, (userActivity)=>({userActivity}));
