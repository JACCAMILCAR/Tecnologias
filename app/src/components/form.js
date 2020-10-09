import React from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View  } from 'react-native';
import colores from '../utils/colores';
import RNPickerSelect from 'react-native-picker-select';
export default function Form(props){
    // console.log("Props", props);
    const {setCapital, setInteres, setMeses} = props;
    return(
            <View style={stilo.formulario}>
                <View style={stilo.rowInput}>
                    <TextInput 
                    style={stilo.input}
                    placeholder = "cantidad"
                    onChange={(e)=>setCapital(e.nativeEvent.text)}
                    />
                    <TextInput
                    style={[stilo.input, stilo.inputPersonalizado]}
                    placeholder = "interes"
                    onChange={(e)=>setInteres(e.nativeEvent.text)}
                    />
                </View>
                
                <RNPickerSelect
                onValueChange={(value) => setMeses(value)}
                items={[
                    { label: '3 meses', value: '3' },
                    { label: '6 meses', value: '6' },
                    { label: '12 meses', value: '12' },
                    { label: '24 meses', value: '24' },
                ]}
                />
            </View>
        
        
    )
}
const stilo = StyleSheet.create({
    formulario:{
        position:"relative",
        bottom: 0,
        width: "100%",
        paddingHorizontal: 50,
        backgroundColor: colores.COLOR_PRIMARIO,
        borderRadius: 20,
        height: 100,
        justifyContent: 'center'

    },
    input:{
        height:50,
        backgroundColor:"white",
        borderWidth:1,
        borderRadius:5,
        width:"60%",
        marginRight:5,
        marginLeft:5,
        marginBottom:10,
        color:"#000",
        paddingHorizontal:20
    },
    inputPersonalizado:{
        width:"35%",
        marginLeft: 5
    },
    rowInput:{
        flexDirection:"row"
    },
    titulo:{
        fontSize:30,
        fontWeight: 'bold',
        color:'#fff',
        marginTop:25
      },
      formulario2:{
        position:"absolute",
        bottom: 0,
        width: "100%",
        paddingHorizontal: 50,
        backgroundColor: colores.COLOR_PRIMARIO,
        borderRadius: 20,
        height: 100,
        top:399,
        justifyContent: 'center'
    }

})