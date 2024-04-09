import { createContext } from "react";

export interface IUser {
    name?: string;
    surname?: string;
    userName?: string;
    emailAddress?: string;
    id?:number;
  }

export interface IUserStateContext {
    userInfo?: IUser;
    userActivity?:IUserActivity[];
    error?:any;
}

export interface IUserActivity {
    returned?: boolean,
    overdue?: boolean,
    dateBorrowed?:string,
    bookId?: string,
    userId?: string
}

export interface IUserActionContext {
    getUserInfo:(userId: IUser) => void;
    getUserActivity?:(userId:number) => Promise <any>;
}

export const USER_CONTEXT_INITIAL_STATE: IUserStateContext = {};
export const UserStateContext = createContext<IUserStateContext>(USER_CONTEXT_INITIAL_STATE);
export const UserActionContext = createContext<IUserActionContext>({} as any);