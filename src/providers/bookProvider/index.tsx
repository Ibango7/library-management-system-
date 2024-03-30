'use client';
import React, { useReducer, useEffect, useState, FC, PropsWithChildren, useContext } from 'react';
import { IBook, IbookGenre, BookActionContext, BookStateContext, BOOK_CONTEXT_INITIAL_STATE } from './context';
import { bookReducer } from './reducer';
import { getBooksAction } from './actions';
import { httpClient } from '../httpClients/httpClients';


const BookProvider: FC<PropsWithChildren<any>> = ({ children }) => {
    const [state, dispatch] = useReducer(bookReducer, BOOK_CONTEXT_INITIAL_STATE);
    
    // useEffect(() => {
    //     // Load state from local storage if available
    //     const bookList = localStorage.getItem('books')
    //     if(bookList){
    //         const payLoad:IBook[] = JSON.parse(bookList);
    //         // console.log("Payload astructure",payLoad);
    //         dispatch(getBooksAction(payLoad));
    //         // console.log('State after dispatching book action:', state);
    //     }
    // }, []); // Execute once when the component mounts

    // Book/GetBooksByGenre?genre=economics
    const getBooksByGenre = async (genre: IbookGenre) => {
        httpClient.get(`/Book/GetBooksByGenre?genre=${genre.genre.toString()}`)
            .then(response => {
                // console.log("genre passed:",genre);
                // console.log("Books response", response.data.result)
                dispatch(getBooksAction(response.data.result));
                // store books in local storage
                localStorage.setItem('books', JSON.stringify(response.data.result));
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