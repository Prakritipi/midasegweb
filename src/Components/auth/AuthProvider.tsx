// AuthProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isAuthenticated") === "true"
    );

    const login = async (enteredUsername: string, enteredPassword: string) => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");

            const apiUsername = res.data.username; // "Bret"
            const apiPassword = res.data.name;     // "Leanne Graham"

            if (
                enteredUsername.trim() === apiUsername &&
                enteredPassword.trim() === apiPassword
            ) {
                localStorage.setItem("isAuthenticated", "true");
                setIsAuthenticated(true);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Login error:", error);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("isAuthenticated");
        setIsAuthenticated(false);
    };

    const value = {
        isAuthenticated,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
