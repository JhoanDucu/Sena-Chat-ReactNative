import React from "react";
import { Text, View, Pressable, Alert, Image } from "react-native";
import { styles } from "./styles";

export default function VistaPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../../src/img/Logo-sesion.png")} style={styles.logo} />
      </View>
      <View style={styles.central}>
        <Text style={styles.textoCentral}> Hola soy SENACHAT </Text>
        <Text style={styles.textoCentral}> Te doy la bienvenida </Text>
      </View>
      <View style={styles.botones}>
        <Pressable onPress={() => navigation.navigate("Inicio")} style={styles.boton}>
          <Text style={styles.textoBoton}> Iniciar Sesion </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Registrarse")} style={styles.boton}>
          <Text style={styles.textoBoton}> Registrarse </Text>
        </Pressable>
      </View>
    </View>
  );
}
