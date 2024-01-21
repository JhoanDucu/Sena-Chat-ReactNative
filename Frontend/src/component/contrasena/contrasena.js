import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Modal, View, Text, Pressable } from "react-native";

export default function Contraseña ({showModal, setModal}) {
    const hideModal = () => setModal(!showModal);
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!setModalVisible);
                }}
            >
                <View style={styles.fondo}>
                    <Text>Si se veeeeeeeeeeeeeeeee</Text>
                    <Pressable onPress={hideModal} >
                        <Text style={styles.botonCerrar}>AQUI CREAR RECUPERAR CONTRASEÑA</Text>
                    </Pressable>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#000000',
        height: '100%'
    },
    botonCerrar: {
        color: '#ffffff',
    }
});