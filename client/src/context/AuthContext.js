import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

//AuthProvider is put around the whole <App/> in index.js
//Authcontext imported in other components that need to access user state
export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(true)
        //return () => setUser(null);

    }, []);

    const login = (userObj) => {
        localStorage.setItem('user', JSON.stringify(userObj));
        setUser(userObj)
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
