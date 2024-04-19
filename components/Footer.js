import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import colors from "../assets/colors";

export default function Footer(props) {
    const { calculate } = props;
    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calculate}>
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 100,
        backgroundColor: colors.PRIMARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: '75%'
    }
})