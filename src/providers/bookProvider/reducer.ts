import {handleActions} from 'redux-actions';
import { actionType } from './actions';

export const bookReducer = handleActions({
    [actionType.GET_BOOK_BY_GENRE]:(state, action) => {
        console.log("get books by genre ACTION triggered");
        return {
            ...state,
            ...action.payload
        }
    }
    
}, {});