'use client';
import React, { useReducer, FC, PropsWithChildren, useContext } from 'react';
import { IUser, UserActionContext, UserStateContext, USER_CONTEXT_INITIAL_STATE } from './context';
import { userReducer } from './reducer';
import { getUserAction, getUserActivityAction } from './actions';
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

    // /BookManager/GetRentedBooksByUser?userId=22
    const getUserActivity = (userId:number): Promise<any> => new Promise((resolve, reject) =>{
        httpClient.get(`BookManager/GetRentedBooksByUser?userId=${userId}`)
        .then((response) =>{
            // console.log("In provider test 2");
            resolve(response.data);
            // console.log("In provider test 3");
            // console.log("Response of user activity", response.data);
            // dispatch will be done here
            dispatch(getUserActivityAction(response.data))
        })
        .catch(error =>{
            // console.log("In provider test 4");
            reject(error);
            console.log("Error getting user activity");
        })
    })

    /**    // Get the quantity of this book available
    const getQuantity = (bookId:string): Promise<any> => new Promise((resolve, reject) => {
        httpClient.get(`/Book/GetBookQuantity?bookId=${bookId}`)
        .then((response) =>{
            // book quantity
            resolve(response.data)
        })
        .catch(error => {
            reject(error)
            console.log("Error getting book quantity");
        })
    }) */

    return (
        <UserStateContext.Provider value={{ ...state }}>
            <UserActionContext.Provider 
                value={{ getUserInfo, getUserActivity }}> 
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