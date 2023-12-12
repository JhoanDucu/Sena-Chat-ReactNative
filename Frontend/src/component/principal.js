import React from 'react';
import { StyleSheet, Text, View, Pressable, Alert, Image } from 'react-native';

export default function VistaPrincipal({navigation}) {
    const iniciarSesion = () => {
      navigation.navigate('Inicio');
    }
    const registrarse = () => {
      navigation.navigate('Registrarse');
    }
    return (
      <View style={styles.container}>
        <View>
          <Image source={require('../../src/img/Logo-sesion.png')} style={styles.logo} />
        </View>
        <View style={styles.central}>
          <Text style={styles.textoCentral}> Hola soy SENACHAT </Text>
          <Text style={styles.textoCentral}> Te doy la bienvenida </Text>
        </View>
        <View style={styles.botones}>
          <Pressable onPress={iniciarSesion} style={styles.boton}>
            <Text style={styles.textoBoton}> Iniciar Sesion </Text>
          </Pressable>
          <Pressable onPress={registrarse} style={styles.boton}>
            <Text style={styles.textoBoton}> Registrarse </Text>
          </Pressable>
        </View>
      </View>
      
    );
  }

 const styles = StyleSheet.create({
    container: {
      textAlign: 'center',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 238,
      height: 130,
      marginTop: 58,
    },
    central: {
      margin: 40,
      marginTop: 150,
      flex: 1
    },
    textoCentral: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#117311',
    },
    botones: {
      flex: 2,
    },
    boton:  {
      backgroundColor: '#117311',
      padding: 10,
      width: 256,
      height: 55,
      margin: 20,
      border: 1,
      borderRadius: 40,
    },
    textoBoton: {
      color: '#ffffff',
      fontSize: 25,
      textAlign: 'center'
    },
  });
  