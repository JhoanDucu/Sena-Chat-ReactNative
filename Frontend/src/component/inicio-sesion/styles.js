import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 160,
        height: 72,
        marginBottom: 60,
    },
    titulo: {
        marginBottom: 40,
    },
    textoTitulo: {
        fontSize: 25,
        color: "#117311",
    },
    formulario: {
        margin: 30,
    },
    dropdown: {},
    campo: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        height: 50,
        borderColor: "#000000",
        marginTop: 40,
        borderRadius: 8,
        paddingLeft: 12,
    },
    eyeLine: {
        bottom: 35,
        left: 285,
    },
    link: {
        flexDirection: "row",
    },
    botonIngresar: {
        borderWidth: 1,
        width: 152,
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 30,
    },
    textoIngresar: {
        textAlign: "center",
        fontSize: 20,
    },
});
