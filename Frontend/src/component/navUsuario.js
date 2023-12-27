import React, { useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, StyleSheet, Image } from "react-native";

export default function NavUsuario({ headerText, headerColor }) {
    const [searchText, setSearchText] = useState("");
    const [usuarios, setUsuarios] = useState([
        { id: 1, nombre: "Usuario 1" },
        { id: 2, nombre: "Usuario 2" },
        { id: 3, nombre: "Usuario 3" },
        { id: 4, nombre: "Usuario 4" },
        { id: 5, nombre: "Usuario 5" },
        { id: 6, nombre: "Usuario 6" },
        { id: 7, nombre: "Usuario 7" },
        { id: 8, nombre: "Usuario 8" },
        { id: 9, nombre: "Usuario 9" },
        { id: 10, nombre: "Usuario 10" },
        { id: 11, nombre: "Usuario 11" },
        { id: 12, nombre: "Usuario 12" },
    ]);

    const handleSearch = () => {
        // Lógica de búsqueda con el texto ingresado (searchText)
        console.log("Realizar búsqueda con:", searchText);
    };

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Usuarios</Text>
                <Image source={require('../img/sena chat.png')} style={styles.logo}/>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.container}
                    placeholder="Buscar Usuario..."
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <Pressable onPress={handleSearch}>
                    <View style={styles.boton}>
                        <Text style={styles.texto}>
                            <Image source={require('../img/lupa.png')} style={styles.lupa}/>
                        </Text>
                    </View>
                </Pressable>
            </View>

            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listaItem}>
                        <Text>{item.nombre}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 15,
        alignItems: "center",
        backgroundColor: "green",
    },
    headerText: {
        fontSize: 20,
        color: "white",
    },
    inputContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 10,
    },
    container: {
        flex: 2,
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
    },
    boton: {
        padding: 15,
        alignItems: "center",
    },
    texto: {
        color: "white",
    },
    listaItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    logo: {
        width: 140,
        height: 60,
    },
    lupa: {
        width: 30,
        height: 30,
    },
});
