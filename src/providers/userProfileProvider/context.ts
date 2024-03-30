import { createContext } from "react";

export interface IUser {
    name?: string;
    surname?: string;
    userName?: string;
    emailAddress?: string;
    id?:Number;
  }

export interface IUserStateContext {
    userInfo?: IUser
    error?:any;
}

export interface IUserActionContext {
    getUserInfo:(userId: IUser) => void;
}

export const USER_CONTEXT_INITIAL_STATE: IUserStateContext = {};
export const UserStateContext = createContext<IUserStateContext>(USER_CONTEXT_INITIAL_STATE);
export const UserActionContext = createContext<IUserActionContext>({} as any);