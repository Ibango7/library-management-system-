import {IBookstateContext} from './context';
import {createAction} from 'redux-actions';
import {IBook} from './context';

export const actionType = {
    GET_BOOKS: "GET_BOOKS",
    GET_BOOK_BY_GENRE: "GET_BOOK_BY_GENRE",
    RENT_BOOK: "RENT_BOOK",
    GET_QUANTITY: "GET_QUANTITY",
    GET_BOOK_RENT_STATUS: "GET_BOOK_RENT_STATUS",
    GET_RECOMMENDED_BOOKS: "GET_RECOMMENDED_BOOKS",
    GET_MOST_BORROWED_BOOKS: "GET_MOST_BORROWED_BOOKS",

}

export const getBooksAction = createAction<IBookstateContext, IBook[]>(actionType.GET_BOOK_BY_GENRE, (books)=>({books}));
export const rentBookAction = createAction<IBookstateContext>(actionType.RENT_BOOK, ()=>({}));
export const getBookQuantity = createAction<IBookstateContext>(actionType.GET_QUANTITY);
export const getBookRentStatusAction = createAction<IBookstateContext>(actionType.GET_BOOK_RENT_STATUS);
export const getRecommendationAction = createAction<IBookstateContext>(actionType.GET_RECOMMENDED_BOOKS);