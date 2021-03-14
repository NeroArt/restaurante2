import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export default function Cabecera() {
  return (
   
       <View style={styles.header}>
     
      <Text style={styles.title}>RESTAURANTE 
      </Text>
      <Text style={styles.title2}>LA BUENA VIDA</Text>
    </View>
  
 
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 5,
    backgroundColor: '#eed09d',
    borderRadius: 10,
    
  },
  title: {
    textAlign: 'left',
    color: '#332f2c',
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    
  },

  title2: {
    textAlign: 'right',
    color: '#332f2c',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  }


}); 