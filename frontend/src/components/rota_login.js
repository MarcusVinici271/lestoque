import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ isAuthenticated }) {
    console.log("PrivateRoute - isAuthenticated recebido:", isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

