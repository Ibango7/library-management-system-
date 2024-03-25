'use client';
import React, {Component, ComponentType, useState, useEffect,FC} from "react";
import { useRouter } from 'next/navigation';


const checkIfAuthenticated = (): boolean =>{
    const user = localStorage.getItem('userId');
    return !!user;
}
export interface WithAuthProps {wrappedComponent: any;}

// eslint-disable-next-line react/display-name
const withAuth =<P extends object>(WrappedComponent: ComponentType<P>): FC<P> => (props: P) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true); // State to track loading status

    useEffect(() =>{
        const isAuthenticated = checkIfAuthenticated();
        if(!isAuthenticated){
            router.push("/login");
        } else {
            setLoading(false);
        }

    }, []);

    return (<> 
          {loading ? <span></span>/* Render loading indicator here*/ : <WrappedComponent {...props} />  }
    </>);
}

export default withAuth;