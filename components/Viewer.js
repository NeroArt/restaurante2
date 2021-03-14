import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

export default function Viewer() {
  return (
   
    <View style={styles.menutitle}>
    <Text style={styles.title3}>MENU DE POSTRES</Text>
    
   </View>
  
 
  );
}

const styles = StyleSheet.create({
 
  menutitle: {
    height: 80,
    paddingTop: 1,
    backgroundColor: 'yellow',
    borderRadius:10,
    alignContent: 'flex-start',
    justifyContent: 'center',
  },

  title3: {
      textAlign: 'center',
      color: '#332f2c',
      fontSize: 24,
      fontStyle: 'italic',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
  

}); 



































