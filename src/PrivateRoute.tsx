import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Components/auth/AuthProvider';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
