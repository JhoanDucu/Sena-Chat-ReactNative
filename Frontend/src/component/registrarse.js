import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Registrarse() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titulo}>
                <Text> Registrarse Works </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        
    },

});