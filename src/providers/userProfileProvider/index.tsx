'use client';
import React, { useReducer, FC, PropsWithChildren, useContext } from 'react';
import { IUser, UserActionContext, UserStateContext, USER_CONTEXT_INITIAL_STATE } from './context';
import { userReducer } from './reducer';
import { getUserAction } from './actions';
import { httpClient } from '../httpClients/httpClients';


const UserProvider: FC<PropsWithChildren<any>> = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, USER_CONTEXT_INITIAL_STATE);
    
    const getUserInfo = async (userId: IUser) => {
        httpClient.get(`/User/GetUserById?userId=${userId.id}`)
            .then(response => {
                dispatch(getUserAction(response.data.result));
                localStorage.setItem('userDetails', JSON.stringify(response.data.result));
            }).catch(error => {
                console.log("error fetching user info", error)
            })
    }

    return (
        <UserStateContext.Provider value={{ ...state }}>
            <UserActionContext.Provider 
                value={{ getUserInfo }}> 
                  {children}
                </UserActionContext.Provider>
        </UserStateContext.Provider>
    )
}



const useActionsContext = () => {
    const context = useContext(UserActionContext);
  
    if (context == undefined) {
    //   throw new Error("User context must be used within the user provider");
      console.log("user context must be used within the user provider");
    }

    return context;
  };

  export default UserProvider;