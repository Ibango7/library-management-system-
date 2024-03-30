import React from 'react';
import { AuthProvider } from '@/providers/authProvider';
import BookProvider from '../bookProvider';
import RegisterUserProvider from '../registerProvider';

interface AppProvidersProps {
    children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <AuthProvider>
            <BookProvider>
                <RegisterUserProvider>
                    {children}
                </RegisterUserProvider>
            </BookProvider>
        </AuthProvider>
    );
};

export default AppProviders;
