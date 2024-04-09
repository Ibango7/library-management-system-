import {handleActions} from 'redux-actions';
import { actionType } from './actions';
import { USER_CONTEXT_INITIAL_STATE} from './context';

export const userReducer = handleActions({
    [actionType.GET_USER_INFO]:(state, action) => {
        // console.log("get user info action triggered...");
        return {
            ...state,
            ...action.payload
        }
    },

    [actionType.GET_USER_ACTIVITY]:(state, action) => {
        //  console.log("get user Activity  action triggered...", action.payload);
        return {
            ...state,
        //    userActivity: action.payload
        }
    }
    
}, USER_CONTEXT_INITIAL_STATE);