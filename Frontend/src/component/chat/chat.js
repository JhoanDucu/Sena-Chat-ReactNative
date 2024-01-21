import React, { useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { AuthContext } from "../../sesion/AuthContext";

export default function Chat() {
    const { Logout } = useContext(AuthContext);
    return (
        <View>
            <Text>CHAT FUNCIONA PERFECTAMENTE CON MANEJO DE SESIONES Y CONSUMO DE API</Text>
            <Pressable onPress={Logout}>
                <Text>Cerrar Sesion</Text>
            </Pressable>
        </View>
    );
}