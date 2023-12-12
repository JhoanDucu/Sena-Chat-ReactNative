import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IniciarSesion from '../component/inicio-sesion';
import Registrarse from '../component/registrarse';
import VistaPrincipal from '../component/principal';
import Chat from '../component/chat';
import { AuthContext } from '../sesion/AuthContext';


const Stack = createNativeStackNavigator();

export default function AppNav () {
    const screenOptions = {
        headerShown: false,
    };
    const {isLogIn, userData } = useContext(AuthContext);

    if (isLogIn) {
        return (
            userData !== null ? <Chat /> : <VistaPrincipal /> 
        )
    }
    return (
        <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="Home" component={VistaPrincipal} options={screenOptions}/>
          <Stack.Screen name='Inicio' component={IniciarSesion} options={screenOptions}/>
          <Stack.Screen name='Registrarse' component={Registrarse} options={screenOptions}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}