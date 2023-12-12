import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, Alert, Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";
import Contraseña from "./contrasena";
import { AuthContext } from "../sesion/AuthContext";

export default function IniciarSesion({navigation}){
    const [tipo, setTipo] = useState(null);
    const [numero, setNumero] = useState(null);
    const [contrasena, setContrasena] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(true);
    const [showRecuperarModal, setRecuperarModal] = useState(false);
    const tiposDocumento = [
        {label: 'Cedula de Ciudadania', value: 1},
        {label: 'Tarjeta de Identidad', value: 2},
        {label: 'Permiso especial de Permanencia', value: 3},
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
            <Image source={require('../img/Logo-sesion.png')} style={styles.logo}/>
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
                    placeholderTextColor={'#000000'}
                    style={styles.campo}
                    inputMode='numeric'
                    onChangeText={value => setNumero(value)}
                />
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor={'#000000'}
                    style={styles.campo}
                    secureTextEntry={isPasswordVisible}
                    onChange={value => setContrasena(value.nativeEvent.text)}
                />
                <Pressable style={styles.eyeLine} onPressIn={seePassword} onPressOut={seePassword}>
                    <Entypo name="eye-with-line" size={20} color="black"/>
                </Pressable>
                <View style={styles.link}>
                    <Text>¿Olvidaste tu contraseña?</Text>
                    <Pressable onPress={seeModal}>
                        <Text>  Click aqui</Text>
                    </Pressable>
                <Contraseña showModal={showRecuperarModal} setModal={setRecuperarModal}/>
                </View>
                <Pressable style={styles.botonIngresar} onPress={()=>Login(tipo, numero, contrasena)}>
                    <Text style={styles.textoIngresar}>INGRESAR</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 160,
        height: 72,
        marginBottom: 60,
    },
    titulo: {
        marginBottom: 40
    },
    textoTitulo: {
        fontSize: 25,
        color: '#117311',
    },
    formulario: {
        margin: 30
    },
    dropdown: {
        
    },
    campo: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        height: 50,
        borderColor: '#000000',
        marginTop: 40,
        borderRadius: 8,
        paddingLeft: 12,
    },
    eyeLine: {
        bottom: 35,
        left: 285,
    },
    link: {
        flexDirection: 'row',
    },
    botonIngresar: {
        borderWidth: 1,
        width: 152,
        height: 50,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30,
    },
    textoIngresar: {
        textAlign: 'center',
        fontSize: 20,
    }
});