'use client';
import React, { useReducer, useEffect, useState, FC, PropsWithChildren, useContext } from 'react';
import { loginUserAction, logOutUserAction} from './actions';
import { IAuthLogin, AuthActionContext, AuthStateContext, AUTH_CONTEXT_INITIAL_STATE, IAuthResponse } from './context';
import { authReducer } from './reducer';
import axios from 'axios';  
import { useRouter } from 'next/navigation'

const AuthProvider: FC<PropsWithChildren<any>> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, AUTH_CONTEXT_INITIAL_STATE);
    const [isInprogress, setIsInProgress] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const router = useRouter();

    const login = (userInput: IAuthLogin): Promise<IAuthResponse> =>
      new Promise((resolve, reject) => {
        {
          dispatch(loginUserAction());
          axios.post('https://localhost:44311/api/TokenAuth/Authenticate', userInput)
          .then((response) =>{
            setErrorLogin('');
            setIsInProgress(false)
            resolve(response.data);
          })
          .catch(e => {
            setErrorLogin(e.message);
            alert('Invalid Email or password');
          });
        }
      });

      const logout = () => {
        dispatch(logOutUserAction());
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        router.push('/login');

      }
    //#endregion
    return (
        <AuthStateContext.Provider
        value={{
          ...state,
          isInProgress: { isInprogress },
          error: { errorLogin},
        }}
      >
        <AuthActionContext.Provider
          value={{
            login,
            logout
          }}
        >
          {children}
        </AuthActionContext.Provider>
      </AuthStateContext.Provider>
    );
  };
  

  const useStateContext = () => {
    const context = useContext(AuthStateContext);
  
    if (context == undefined) {
      throw new Error("useAuthState must be used within a AuthProvider");
      console.log("useAuthState must be used within a AuthProvider");
    }
  
    return context;
  };
  
  const useActionsContext = () => {
    const context = useContext(AuthActionContext);
  
    if (context == undefined) {
      throw new Error("useAuthActions must be used within a AuthProvider");
      console.log("useAuthActions must be used within a AuthProvider");
    }
  
    return context;
  };
  
  const useLogin = () => {
    return { ...useStateContext(), ...useActionsContext() };
  };
  
  export { useLogin, AuthProvider };