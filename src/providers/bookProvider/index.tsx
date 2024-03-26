'use client';
import React, { useReducer, useEffect, useState, FC, PropsWithChildren, useContext } from 'react';
import { IBook, IbookGenre, BookActionContext, BookStateContext, BOOK_CONTEXT_INITIAL_STATE } from './context';
import { bookReducer } from './reducer';
import { getBooksAction } from './actions';
import { httpClient } from './httpClients';
import { error } from 'console';

const BookProvider: FC<PropsWithChildren<any>> = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, BOOK_CONTEXT_INITIAL_STATE);

    // Book/GetBooksByGenre?genre=economics
    const getBooksByGenre = (genre: IbookGenre) => {
        httpClient.get(`/Book/GetBooksByGenre?genre=${genre}`)
            .then(response => {
                console.log("Books response", response)
                dispatch(getBooksAction());

            }).catch(error => {
                console.log("error fetching books", error)
            })
    }

    return (
        <BookStateContext.Provider value={{ ...state }}>
            <BookActionContext.Provider 
                value={{ getBooksByGenre }}> 
                  {children}
                </BookActionContext.Provider>
        </BookStateContext.Provider>
    )
}



const useActionsContext = () => {
    const context = useContext(BookActionContext);
  
    if (context == undefined) {
    //   throw new Error("Book context must be used within the book provider");
      console.log("Book context must be used within the book provider");
    }

    return context;
  };

  export default BookProvider;