'use client';
import React, {ComponentType, useState, useEffect,FC} from "react";
import { useRouter } from 'next/navigation';
import { useLogin } from "@/providers/authProvider";

export interface WithAuthProps {wrappedComponent: any;}

// eslint-disable-next-line react/display-name
const withAuth =<P extends object>(WrappedComponent: ComponentType<P>): FC<P> => (props: P) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true); // State to track loading status
    const {userInfo} = useLogin();
    const isLoggedIn = userInfo?.isLoggedIn;
    
    useEffect(() => {
      if (userInfo == undefined){
        setLoading(true);
      }else {
        if (!userInfo || !isLoggedIn){
          router.push('/login');
        } else {
          setLoading(false);
        }
      }
      }, [isLoggedIn,router,userInfo]);

    return (<> 
          {(loading) ? <span></span>/* Render loading indicator here*/ : <WrappedComponent {...props} />  }
    </>);
}

export default withAuth;