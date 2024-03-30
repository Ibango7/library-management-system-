import { createContext } from "react";

export interface IRegister{
    name: string;
    surname:string;
    userName:string;
    emailAddress: string;
    password: string;
    roleNames: string[];
}

export interface IRegisterStateContext {
    user?: IRegister;
    error?:any;
}

export interface IRegisterActionContext {
    registerUser: (userInfo:IRegister) => void;
}

export const REGISTER_USER_INITIAL_STATE:IRegisterStateContext = {};
export const RegisterStateContext = createContext<IRegisterStateContext>(REGISTER_USER_INITIAL_STATE);
export const RegisterActionContext = createContext<IRegisterActionContext>({} as any);