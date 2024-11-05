import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Caixa from './src/Caixa';

export default function App() {
  return (
    <View style={{ flex: 3, backgroundColor: '#cbcbcb' }}>

      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text style={styles.texto}>PARTIDA DE VÔLEI</Text>
      </View>

      <View style={styles.container}>
        <Caixa color='#4cb051' title='TIME 1' />

        <View style={styles.result}>
          <Text style={styles.text}>X</Text>
        </View>
        
        <Caixa color='#2196f3' title='TIME 2' />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  text: {
    fontSize: 80,
  },
  result: {
    height: 150,
    marginTop: 100,
  },
  texto: {
    fontSize: 30,
    fontWeight: '500',
    alignContent: 'space-between'
  }
});
