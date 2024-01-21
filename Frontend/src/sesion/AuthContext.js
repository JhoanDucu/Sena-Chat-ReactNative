import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { url } from "./config";

export const AuthContext = createContext();

export const AuthProvider = ({ children, navigation }) => {
  const [isLogIn, setLogIn] = useState(false);
  const [userData, setUserData] = useState({});

  const Login = (datos) => {
    axios.post(`${url}/usuario/login`, datos).then((res) => {
        if (res.data !== "No existe registro") {
          let { 0: ficha, 1: numerodoc, 2: rol } = res.data;
          setUserData({ ficha: ficha, numerodoc: numerodoc, rol: rol });
          AsyncStorage.setItem("userData", JSON.stringify(userData));
          console.log(navigation.navigate('Inicio'));
        }
      })
      .catch((e) => {
        console.log(`Error de: ${e}`);
      });
  };

  useEffect(() => {}, [userData]);

  const Logout = () => {
    setUserData({});
    setLogIn(false);
  };

  return (
    <AuthContext.Provider value={{ Login, Logout, isLogIn, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
