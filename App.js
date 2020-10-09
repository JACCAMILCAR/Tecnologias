// import { StatusBar } from 'expo-status-bar'
import React, { Component, Fragment, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Button  } from 'react-native';

import ListaAlumnos from './componentes/lista-alumnos';
import colores from './app/src/utils/colores';
import Formulario from './app/src/components/form';
import FormularioResumen from './app/src/components/form2';
import ButtonForm from './app/src/components/button';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);

  const calcular = () =>{
    console.log("total->", total);
    if(!capital){
      console.log("ingrese capital");
    }else if(!interes){
      console.log("ingrese interes");
    }
    else if(!meses){
      console.log("selecciones meses");
    }
    else{
      console.log("OK");
    }
    const i = interes/100;

    const datoCalcular = capital / ((1 - Math.pow(i + 1, -meses)) / i);
    console.log(datoCalcular.toFixed(2).replace('.',','));
    setTotal({
      montoMes:datoCalcular.toFixed(2).replace('.',','),
      totalPagdo: (datoCalcular * meses).toFixed(2).replace('.',',')
    })
    console.log(total);
  }
  return (
    <Fragment>
    <View style={styles.estiloTitulo}>
      <Text style={styles.titulo}>COTIZADOR DE PRESTAMO</Text>
      <Formulario setCapital={setCapital} setInteres={setInteres} setMeses={setMeses}/>
    </View>    
    <View style={styles.estiloTitulo2}>
      <Text style={styles.titulo}>RESUMEN</Text>
      <FormularioResumen capital={capital} interes={interes} meses={meses} total={total}/>
    </View> 

    <View style={styles.estiloTitulo3}>
      <ButtonForm calcular={calcular}/>
    </View> 
  </Fragment> 

  );
}
// const styles = StyleSheet.create({
//   contenedorTitulo: {
//   backgroundColor: colores.COLOR_OSCURO,
//   height: 200,
//   borderBottomLeftRadius: 30,
//   borderBottomRightRadius: 30,
//   alignItems: "center",
//  },
//  titulo: {
//    fontSize: 30,
//    fontWeight: 'bold',
//    color: '#fff',
//    marginTop: 25
//  }
// });


// class Principal extends Component {

//   render(){
//     const [capital, setCapital] = useState(null);
//     const [interes, setInterers] = useState(null);
//     const [meses, setMeses] = useState(null);
//     const calcular = () =>{
//     console.log("capital",capital);
//     console.log("interes",interes);
//     console.log("meses",meses);
//     }
//     return (
//       // <ImageBackground source={require('./assets/fondo 2.jpg')} style={styles.container}>
//       //   <View styles = {[styles.flex, styles.footerRight]}>
//       //     <TouchableOpacity>
//       //         <Image source= {require('./assets/images.jpg')}
//       //           style={styles.logo}
//       //         />
            
//       //     </TouchableOpacity>
//       //   </View>
//       //       <ListaAlumnos/>
//       // </ImageBackground>
//     <Fragment>
//       <View style={styles.estiloTitulo}>
//         <Text style={styles.titulo}>COTIZADOR DE PRESTAMO</Text>
//         <Formulario setCapital={setCapital} setInterers={setInterers} setMeses={setMeses}/>
//       </View>    
//       <View style={styles.estiloTitulo2}>
//         <Text style={styles.titulo}>RESUMEN</Text>
//         <FormularioResumen/>
//       </View> 

//       <View style={styles.estiloTitulo3}>
//         <Button title="Calcular" onPress={calcular} ></Button>
//         {/* <ButtonForm/> */}
//       </View> 
//     </Fragment> 
      
      
      
      
      
//       )
//   }
// }

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
// export default Principal;