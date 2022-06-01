import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { signUpUser, signInUser, signOutUser } from "../services/users";

export const useAuth = () => {

    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within a useProvider');
    }
}