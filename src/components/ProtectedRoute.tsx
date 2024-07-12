import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    element: React.ComponentType<any>;
    isAuthenticated: boolean;
    [key: string]: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component, isAuthenticated, ...rest }) => {
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="login" />;
};

export default ProtectedRoute;
