import React from 'react'
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native'
function ListaAlumnos(props){
    const lista = [
        {   key:'1',
            nombre:'Marco',
            apellido:'Marca'
        },
        {
            key:'2',
            nombre:'Eber',
            apellido:'Kachi'
        },
        {
            key:'3',
            nombre:'Maeba',
            apellido:'Fernandez'
        },
        {
            key:'4',
            nombre:'Ariel',
            apellido:'Vargas'
        },
        {
            key:'5',
            nombre:'Erick',
            apellido:'Terrazas'
        }
    ];
    return (
        <TouchableOpacity>  
            <FlatList
                data = {lista}
                renderItem= {
                    ({item}) => <Text style={styles.texto}>{item.nombre} {item.apellido}</Text>
                }
            />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
  texto: {
    fontSize:20,
    alignItems: 'center',
    justifyContent: 'right',
    color: 'white'
  }
});
export default ListaAlumnos;