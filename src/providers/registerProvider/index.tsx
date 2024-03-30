'use client';
import React, { useReducer, FC, PropsWithChildren, useContext } from 'react';
import { IRegister, RegisterActionContext, RegisterStateContext, REGISTER_USER_INITIAL_STATE } from './context';
import { registerReducer } from './reducer';
import { registerUserAction } from './actions';
import { httpClient } from '../httpClients/httpClients';
import { notification, Alert } from 'antd';


const RegisterUserProvider: FC<PropsWithChildren<any>> = ({ children }) => {
    const [state, dispatch] = useReducer(registerReducer, REGISTER_USER_INITIAL_STATE);

    const warning = () => {
        notification.open({
            message: "Register user",
            description: <Alert message="warning"
                description="Something went wrong while registering user. Make sure it an non-existent user"
                type="warning"
                showIcon />
        })
    }

    const registerUser = async (user: IRegister) => {
        console.log("Before dispatching...");
        httpClient.post(`/User/Create`, user)
            .then(response => {
                console.log("Successful dispatch")
                dispatch(registerUserAction())
            }).catch(error => {
                warning();
                console.log("Error registering new user", error);
            })
    }

    return (
        <RegisterStateContext.Provider value={{ ...state }}>
            <RegisterActionContext.Provider
                value={{ registerUser }}>
                {children}
            </RegisterActionContext.Provider>
        </RegisterStateContext.Provider>
    )
}

const useActionsContext = () => {
    const context = useContext(RegisterStateContext);

    if (context == undefined) {
        //   throw new Error("RegisterUser context must be used within the book provider");
        console.log("RegisterUser context must be used within the register provider");
    }

    return context;
};

export default RegisterUserProvider;