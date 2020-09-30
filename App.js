// import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'

import ListaAlumnos from './componentes/lista-alumnos'
class Principal extends Component {
  render(){
    return (
      <ImageBackground source={require('./assets/fondo 2.jpg')} style={styles.container}>
        <View styles = {[styles.flex, styles.footerRight]}>
          <TouchableOpacity>
              <Image source= {require('./assets/images.jpg')}
                style={styles.logo}
              />
            
          </TouchableOpacity>
        </View>
            <ListaAlumnos/>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blancoModificado: {
    color: 'white',
    fontWeight: 'bold' ,
    fontSize: 30,
  }, logo:{
      width: 80,
      height: 80,
      resizeMode: 'contain',
      borderRadius: 30,
      marginTop:20
      },
  footerRight:{
    alignItems: 'flex-end',
    justifyContent: 'center'

  }
});
export default Principal;