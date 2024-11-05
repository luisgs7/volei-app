import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Caixa({ color, title, valorInicial=0 }) {
    const [value, setValue] = useState(valorInicial) // Inicializa o valor do contador

    const subtrair = () => {
        if (value > 0) {
            setValue(prevValue => prevValue - 1);
        }
    }

    const somar = () => {
        setValue(prevValue => prevValue + 1);
    }

    return (
        <View>

            <View style={styles.boxTitle}>
                <Text style={styles.result}>{title}</Text>
            </View>

            <View style={[styles.container, { backgroundColor: color }]}>
                <Text style={styles.text}>{value}</Text>
            </View>

            <View style={styles.calcular}>
                <TouchableOpacity onPress={subtrair}>
                    <Text style={styles.sub}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={somar}>
                    <Text style={styles.somar}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        marginTop: 40,
        width: 150,
        height: 150,
        borderRadius: 40,
    },
    text: {
        fontSize: 50,
        color: '#fff',
    },
    result: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    boxTitle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    calcular: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    somar: {
        fontSize: 38,
        backgroundColor: '#2196f3',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        color: 'white',
    },
    sub: {
        fontSize: 38,
        backgroundColor: '#4cb051',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        fontWeight: 'bold',
        color: 'white',
    },
})
