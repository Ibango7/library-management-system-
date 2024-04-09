import {handleActions } from "redux-actions";
import { AuthActionEnums } from "./actions";

export const authReducer = handleActions({
    [AuthActionEnums.USER_LOGIN]:(state, action) => {
        // Login user
        // console.log("login action triggered");
        return {
            ...state,
            ...action.payload
            }
    },
    [AuthActionEnums.USER_LOGOUT]: (state, action) =>{
        // console.log("Logout action triggered");
        // clear authentication state, reset user, data
        return {};
    }
}, {});