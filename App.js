import React, {state} from "react";
import {View, Text, StyleSheet } from 'react-native';

const HolaMundo = (props) =>{



  // usando hooks
  // primero con handle states --> lo importamos arriba

  return(
    <View>
          <Text>props.nombre </Text>
    </View>

  )
}

// estilos ahora --> importamos StyleSheet

const diseño = StyleSheet.create({
  item_centrados_y_alineados:{
          flex: 1,
          justifyContent: "center" ,
          alignItems:"center"
  },

  solo_centrado:{



  }
})

// componentes --> llamo al componente HolaMundo

const saludando =()=>{

  return(

    <View
        style={diseño.item_centrados_y_alineados} 
          >
          <HolaMundo nombre = "Hola 1"/>
          <HolaMundo nombre = "Hola 2"/>
          <HolaMundo nombre = "Hola 3"/>
    </View>
  )

}



export default saludando;