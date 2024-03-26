import React from 'react';
import { AuthProvider } from '@/providers/authProvider';
import BookProvider from '../bookProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <AuthProvider>
            <BookProvider>
                {children}
            </BookProvider>
        </AuthProvider>
    );
};

export default AppProviders;
