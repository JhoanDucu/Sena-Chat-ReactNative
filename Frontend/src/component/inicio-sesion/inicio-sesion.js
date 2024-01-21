import React, { useState, useContext } from "react";
import { Text, View, Image, TextInput, Alert, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import Contraseña from "../contrasena/contrasena";
import { AuthContext } from "../../sesion/AuthContext";
import { styles } from "./styles";

export default function IniciarSesion({ navigation }) {
  const [tipo, setTipo] = useState(null);
  const [numero, setNumero] = useState(null);
  const [contrasena, setContrasena] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(true);
  const [showRecuperarModal, setRecuperarModal] = useState(false);
  const tiposDocumento = [
    { label: "Cedula de Ciudadania", value: 1 },
    { label: "Tarjeta de Identidad", value: 2 },
    { label: "Permiso especial de Permanencia", value: 3 },
  ];
  const changeOpen = () => {
    setIsOpen(!isOpen);
  };
  const changeValue = (value) => {
    setTipo(value);
  };
  const seePassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const seeModal = () => {
    setRecuperarModal(!showRecuperarModal);
  };
  const { Login } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../img/Logo-sesion.png")}
        style={styles.logo}
      />
      <View style={styles.titulo}>
        <Text style={styles.textoTitulo}> Iniciar Sesion </Text>
      </View>
      <View style={styles.formulario}>
        <DropDownPicker
          items={tiposDocumento}
          open={isOpen}
          value={tipo}
          setOpen={changeOpen}
          setValue={changeValue}
          style={styles.dropdown}
          placeholder="Tipo de Documento"
        />
        <TextInput
          placeholder="Numero de Documento"
          placeholderTextColor={"#000000"}
          style={styles.campo}
          inputMode="numeric"
          onChangeText={(value) => setNumero(value)}
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor={"#000000"}
          style={styles.campo}
          secureTextEntry={isPasswordVisible}
          onChange={(value) => setContrasena(value.nativeEvent.text)}
        />
        <Pressable
          style={styles.eyeLine}
          onPressIn={seePassword}
          onPressOut={seePassword}
        >
          <Entypo name="eye-with-line" size={20} color="black" />
        </Pressable>
        <View style={styles.link}>
          <Text>¿Olvidaste tu contraseña?</Text>
          <Pressable onPress={seeModal}>
            <Text> Click aqui</Text>
          </Pressable>
          <Contraseña
            showModal={showRecuperarModal}
            setModal={setRecuperarModal}
          />
        </View>
        <Pressable
          style={styles.botonIngresar}
          onPress={() =>
            Login({ tipodoc: tipo, numerodoc: numero, contrasena: contrasena })
          }
        >
          <Text style={styles.textoIngresar}>INGRESAR</Text>
        </Pressable>
      </View>
    </View>
  );
}
