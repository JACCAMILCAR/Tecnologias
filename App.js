// import { StatusBar } from 'expo-status-bar'
import React, { Component, Fragment } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ColorPropType  } from 'react-native'

import ListaAlumnos from './componentes/lista-alumnos'
import colores from './app/src/utils/colores';
import Formulario from './app/src/components/form';
import FormularioResumen from './app/src/components/form2';
import ButtonForm from './app/src/components/button';
class Principal extends Component {

  render(){
    return (
      // <ImageBackground source={require('./assets/fondo 2.jpg')} style={styles.container}>
      //   <View styles = {[styles.flex, styles.footerRight]}>
      //     <TouchableOpacity>
      //         <Image source= {require('./assets/images.jpg')}
      //           style={styles.logo}
      //         />
            
      //     </TouchableOpacity>
      //   </View>
      //       <ListaAlumnos/>
      // </ImageBackground>
    <Fragment>
      <View style={styles.estiloTitulo}>
        <Text style={styles.titulo}>COTIZADOR DE PRESTAMO</Text>
        <Formulario/>
      </View>    
      <View style={styles.estiloTitulo2}>
        <Text style={styles.titulo}>RESUMEN</Text>
        <FormularioResumen/>
      </View> 

      <View style={styles.estiloTitulo3}>
        <ButtonForm/>
      </View> 
    </Fragment> 
      
      
      
      
      
      )
  }
}

const styles = StyleSheet.create({
  estiloTitulo:{
    backgroundColor: colores.COLOR_OSCURO,
    height:200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    alignItems:"center",
  },
  titulo:{
    fontSize:30,
    fontWeight: 'bold',
    color:'#fff',
    marginTop:25
  },
  estiloTitulo2:{
    backgroundColor: colores.COLOR_OSCURO,
    height:280,
    top:-30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    alignItems:"center",
  },
  estiloTitulo3:{
    backgroundColor: colores.COLOR_OSCURO,
    height:100,
    top:-30,
    borderRadius: 30,
    alignItems:"center",
  },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // blancoModificado: {
  //   color: 'white',
  //   fontWeight: 'bold' ,
  //   fontSize: 30,
  // }, logo:{
  //     width: 80,
  //     height: 80,
  //     resizeMode: 'contain',
  //     borderRadius: 30,
  //     marginTop:20
  //     },
  // footerRight:{
  //   alignItems: 'flex-end',
  //   justifyContent: 'center'

  // }
});
export default Principal;