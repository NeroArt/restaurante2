import React,{ useState } from 'react';
import {View, StyleSheet, Text,SafeAreaView, ScrollView, TextInput,
TouchableOpacity, FlatList} from 'react-native';
import Cabecera from './components/Cabecera';
import Viewer from './components/Viewer';


//Funcion App()
//Visualizara todo lo que este dentro de return
function App(){
  const[name, setName]= useState('Francisco');
  const[age, setAge]= useState('18');
  const[orden, setOrden]= useState('Especialidad');
  const[telefono, setTelefono]= useState('12456');
  

  const [ postres, setPostres ] = useState([
    { name: 'Helado', id: '1' },
    { name: 'Pastel', id: '2' },
    { name: 'Gelatinas', id: '3' },
    { name: 'Pay', id: '4' },
    { name: 'Bana Split', id: '5' },
    { name: 'Tartas', id: '6' },
    { name: 'Flan', id: '7' }
    ]);

    const borrar = (id) => {
      setPostres((postres) => {
      return postres.filter(() => postre.id != id);
      });
      };

return(
    <View style={styles.container}>
      
      <View style={styles.containerGreen}><Cabecera/></View>
      <View style={styles.containerPurple}>
        

      <View style={styles.containerViewer}><Viewer /></View>
        

      <View style={styles.containerFlat}>
        


      <FlatList
      
data={postres}
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<TouchableOpacity onPress={() => borrar(item.id)}>
<Text style={styles.item}>{item.name}</Text>
</TouchableOpacity>
)}
/>

</View>


      </View>
      
      



      <SafeAreaView style={styles.containerScroll}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.title4}>REGISTRO PARA TU ORDEN</Text>
      <Text>Agrega tu nombre:</Text>
 <TextInput
placeholder='ejemplo: Jose'
style={styles.entrada}
onChangeText={(value)=>setName(value)}
/>
<Text>Agrega tu edad:</Text>
<TextInput
placeholder='ejemplo: 18'
style={styles.entrada}
onChangeText={(value)=>setAge(value)}
/>

<Text>Agrega tu Orden:</Text>
<TextInput
placeholder='ejemplo: 123456'
style={styles.entrada}
onChangeText={(value)=>setOrden(value)}
/>

<Text>Agrega tu Telefono:</Text>
<TextInput
placeholder='ejemplo: 18'
style={styles.entrada}
onChangeText={(value)=>setTelefono(value)}
/>

      <Text style={styles.result}>Nombre: {name}, Edad: {age}</Text>
      <Text style={styles.result}>Orden: {orden}, Telefono: {telefono}</Text>
      
      </ScrollView>
    </SafeAreaView>


    </View>


);  


}
//Fin funcion App()


//Seccion de Estilos
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#804000',
    padding: 12,

  },


  containerGreen:{
    flex: 1,
    backgroundColor: '#FF8000',
    padding: 12,
    
  },


  containerPurple:{
    flex: 2,
    backgroundColor: 'purple',
    padding: 12,
    alignContent: 'center',
    
   flexDirection: 'column',
  },



  containerViewer:{
    flex: 1,
    
  },



  containerScroll:{
    flex: 2,
    backgroundColor: '#FF8000',
    padding: 2,
    
  },

  scrollView: {
    backgroundColor: '#75b313',
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 1,
  },
 

  containerFlat:{
    flex: 2,
    backgroundColor: '#FF8000',
    padding: 2,
    borderRadius: 10,
    
  },

  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 2,
    padding: 3,
    backgroundColor: '#FF420E',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 45,
  
    
    },

    title4:{
      flex: 1,
      backgroundColor: '#804000',
      padding: 12,
      borderRadius:10,
      textAlign: 'center',
  
    },


});


//Exportacion de funcion App
 export default App;