import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Protected({ children }) {
    const { user, loading } = useContext(AuthContext);

    // console.log(user)

    //if no loading then login renders when on dashboard and refreshed
    //this is because login is returned before the user is set from the localStorage

    if (!user && loading) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default Protected;
