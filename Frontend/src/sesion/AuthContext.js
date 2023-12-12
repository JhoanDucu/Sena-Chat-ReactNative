import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useState} from "react";
import { url } from "./config";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLogIn, setLogIn] = useState(false);
    const [userData, setUserData] = useState({});

    const Login = (tipodoc, numerodoc, contrasena) => {
        axios.post(`${url}/login`, {
            tipodoc: tipodoc,
            numerodoc: numerodoc,
            contrasena: contrasena
        }).then( res => {
            let data = res.data;
            console.log(data);
            setUserData(data);
            AsyncStorage.setItem('userData', JSON.stringify(userData));
            setLogIn(false);
        }).catch( e => {
            console.log(`Error de: ${e}`);
        });
    };
    
    const Logout = () => {
        setUserData(null);
        setLogIn(false);
    };
    return (
        <AuthContext.Provider value={{Login, Logout, isLogIn, userData}}>
            {children}
        </AuthContext.Provider>
    );
}