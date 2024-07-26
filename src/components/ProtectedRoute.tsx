import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    element: React.ComponentType<any>;
    [key: string]: any;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element: Component, ...rest }) => {

    if (localStorage.getItem('user')) {
        return <Component {...rest} />;
    }
    else {
        return <Navigate to="login" />;
    }
};

export default ProtectedRoute;
