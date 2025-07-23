import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Components/auth/AuthProvider';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();
    const localAuth = localStorage.getItem("isAuthenticated") === "true";

    return isAuthenticated || localAuth ? (
        <>{children}</>
    ) : (
        <Navigate to="/login" />
    );
};

export default PrivateRoute;
