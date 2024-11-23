/* eslint-disable @typescript-eslint/ban-ts-comment */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

import Cookies from "js-cookie";
import {
    Dispatch,
    ReactNode,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useRouter } from "next/router";

type AuthProvider_TP = {
    children: ReactNode;
};

type User = {
    id: string;
    name: string;
    // Add other user properties as needed
};
type AuthContext_TP = {
    user: User | null;
    login: (data: never) => void;
    logout: () => void;
    setUser: Dispatch<never>;
};

const AuthContext = createContext<AuthContext_TP | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProvider_TP) => {
    const [user, setUser] = useLocalStorage<User | null>("user", null);
    const router = useRouter();
    const login = useCallback(
        async (data: User) => {
            if (setUser) setUser(data);
        },
        [setUser],
    );

    const logout = useCallback(async () => {
        Cookies.remove("token");
        if (setUser) setUser(null);
        //@ts-ignore
        router.push("/", { replace: true });
    }, [setUser]);

    const value = useMemo(
        () => ({
            user: user ?? null,
            setUser,
            login,
            logout,
        }),
        [login, logout, user, setUser],
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
