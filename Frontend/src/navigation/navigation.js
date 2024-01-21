import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IniciarSesion from "../component/inicio-sesion/inicio-sesion";
import Registrarse from "../component/registrarse/registrarse";
import VistaPrincipal from "../component/principal/principal";
import Chat from "../component/chat/chat";
import { AuthContext } from "../sesion/AuthContext";
import Contraseña from "../component/contrasena/contrasena";
import Grupos from "../component/grupos/grupos";

const Stack = createNativeStackNavigator();

export default function AppNav() {
  const screenOptions = {
    headerShown: false,
  };
  const { isLogIn, userData } = useContext(AuthContext);

  // if (isLogIn) {
  //   return userData !== null ? <Grupos /> : <VistaPrincipal />;
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={VistaPrincipal}
          options={screenOptions}
        />
        <Stack.Screen
          name="Inicio"
          component={IniciarSesion}
          options={screenOptions}
        />
        <Stack.Screen
          name="Registrarse"
          component={Registrarse}
          options={screenOptions}
        />
        <Stack.Screen
          name="Grupos"
          component={Grupos}
          options={screenOptions}
        ></Stack.Screen>
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={screenOptions}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
