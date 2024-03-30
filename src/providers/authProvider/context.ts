import { createContext } from "react";

export interface IAuthLogin{
    userNameOrEmailAddress: string;
    password: string;
    rememberClient?: string;
}

export interface IAuthResponse {
    result: {
        accessToken: string;
        encryptrdAccessToken: string;
        expireInSeconds: number;
        userId: number;
    };
    targertUrl: null | string;
    success: boolean;
    error: null | string;
    unAuthorizedRequest: boolean;
    _abp: boolean;
}

export interface IstateContext  {
    auth?: IAuthLogin;
    isInProgress?:any;
    error?:any;
    userInfo?:LoginPayload;
}

export interface IActionContext {
    login: (auth: IAuthLogin) => Promise<IAuthResponse>;
    logout?:() => void | {};
    // longinState?:LoginPayload;
}

export interface LoginPayload {
    accessToken: string;
    encryptedAccessToken: string;
    userId: number;
    isLoggedIn: boolean;
  }



export const AUTH_CONTEXT_INITIAL_STATE: IstateContext = {};
export const AuthStateContext = createContext<IstateContext>(AUTH_CONTEXT_INITIAL_STATE);
export const AuthActionContext = createContext<IActionContext>({} as any);

