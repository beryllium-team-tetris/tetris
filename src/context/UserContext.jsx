import { createContext, useState } from "react";
import { getUser } from "../services/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    
    const currentUser = getUser();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [type, setType] = useState('sign-up');
    const [user, setUser] = useState(currentUser || {email: null});

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            email,
            setEmail,
            password,
            setPassword,
            error,
            setError,
            type,
            setType,
            currentUser,
        }}>
            {children}
        </UserContext.Provider>
    );
};