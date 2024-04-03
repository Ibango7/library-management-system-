import { createContext } from "react";
export interface IBook {
    id: string;
    ISBN: string;
    title: string;
    description: string;
    content: string;
    author: string;
    genre: string;
    imageUrl: string;
    accessFrequency: number;
    quantity: number;
    shelf: number;
  }

export interface IbookGenre{
    genre:string;
}
export interface IBookstateContext {
    books?: IBook[];
    error?:any;
}

export interface IBookActionContext {
    getBooksByGenre:(bookInfo: IbookGenre) => void;
    rentBook?:(bookId:string, userId:number) => void;
    getQuantity?:(bookId:string) => Promise<any>;
    isBookRented?:(bookId:string, userId:number) => Promise<any>;
    getRecommended?:() => Promise<any>;
}

export const BOOK_CONTEXT_INITIAL_STATE: IBookstateContext = {books:[]};
export const BookStateContext = createContext<IBookstateContext>(BOOK_CONTEXT_INITIAL_STATE);
export const BookActionContext = createContext<IBookActionContext>({} as any);