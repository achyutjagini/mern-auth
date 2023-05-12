import React, { useState, createContext } from 'react';

export const AuthContext = createContext();
//AuthProvider is put around the whole <App/> in index.js

//Authcontext imported in other components that need to access user state

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userObj) => {
        setUser(userObj);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
