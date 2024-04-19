import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, TextInput, View, } from "react-native";
import colors from "../assets/colors";
import Footer from "../components/Footer"

export default function Form(props) {
    const { setCapital, setInterest, setMonths, selectedValue, setSelectedValue } = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Cantidad a pedir"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={e => setCapital(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Interes %"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                    onChange={e => setInterest(e.nativeEvent.text)}
                />

            </View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => { setSelectedValue(itemValue); setMonths(itemValue) }}
                    style={styles.picker}
                >
                    <Picker.Item label="Selecciona los meses" value={null} />
                    <Picker.Item label="3 meses" value={3} />
                    <Picker.Item label="6 meses" value={6} />
                    <Picker.Item label="12 meses" value={12} />
                    <Picker.Item label="24 meses" value={24} />
                </Picker>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
        width: '85%',
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
        zIndex: 0
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        width: '60%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 15
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5
    },
    pickerContainer: {
        borderColor: colors.PRIMARY_COLOR,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    picker: {
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        color: '#000',
    }
})

const pickerSelectStyles = StyleSheet.create({

})