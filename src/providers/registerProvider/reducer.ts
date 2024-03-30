import {handleActions} from 'redux-actions';
import { actionType } from './actions';
import { REGISTER_USER_INITIAL_STATE } from './context';

export const registerReducer = handleActions({
    [actionType.REGISTER_USER]:(state, action) => {
        console.log("Register user action triggered, user registered successfully");
        // console.log("get books by genre ACTION triggered", action.payload.books.result);
        return {
            ...state,
            ...action.payload
        }
    }
}, REGISTER_USER_INITIAL_STATE);