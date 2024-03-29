import {handleActions} from 'redux-actions';
import { actionType } from './actions';
import { BOOK_CONTEXT_INITIAL_STATE, IBook, IBookstateContext } from './context';

export const bookReducer = handleActions({
    [actionType.GET_BOOK_BY_GENRE]:(state, action) => {
        // console.log("get books_______________", action.payload.books);
        // console.log("get books by genre ACTION triggered", action.payload.books.result);
        return {
            ...state,
            books:action.payload.books
        }
    }
    
}, BOOK_CONTEXT_INITIAL_STATE);