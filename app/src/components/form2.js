import React from 'react';
import { StyleSheet, TextInput, Text, View, Button  } from 'react-native';
import colores from '../utils/colores';
export default function Form(){
    return(
            <View style={stilo.formulario}>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Cantidad Solicitada
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    1000 Bs
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Interes             :
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    5%
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Plazos              :
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    12 Meses
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Pago Mensual:
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    87.5 Bs
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Total a pagar  :
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    1050
                    </Text>
                </View>
                
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
        height: 200,
        justifyContent: 'center'

    },
    inputPersonalizado:{
        width:"35%",
        marginLeft: 5
    },
    rowInput:{
        flexDirection:"row"
    },
    titulo:{
        fontSize:20,
        fontWeight: 'bold',
        color:'black',
        height:30,
        borderWidth:1,
        borderRadius:5,
        width:"60%",
        textAlign:"center",
    },
    fondoblue:{
        backgroundColor: colores.COLOR_BLUE,
        color:'white',
    },
    fondowith:{
        backgroundColor: colores.COLOR_WITH,
    },


})