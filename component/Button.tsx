import { View,StyleSheet, TouchableOpacity,Text, ImageBackground, StatusBar } from 'react-native'
import React, { useState } from 'react'


export default function button() {
// function APP():JSX.Element{
    const [preview,setpreview]=useState("#ffffff");

    const generate=()=>{
      const hexavalue="0123456789ABCDEF"
      let color='#'
      for (let i = 0; i< 6; i++) {
        color += hexavalue[Math.floor(Math.random()*16)]
        
      }
      setpreview(color)
    }
  
     


  return (
    <>
    <StatusBar backgroundColor={preview}/>
    <View style={[styles.colorchanger,{backgroundColor:preview}]} >
      <TouchableOpacity onPress={generate}>
        <View style={styles.actbutton}>
          <Text>Press Me</Text>
        </View>
      </TouchableOpacity>

    </View>
    </>
  )
    
    
}

const styles = StyleSheet.create({
    colorchanger:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:800,
        
    },
    actbutton:{
      borderRadius:10,
      backgroundColor:'#3d39a3',
      paddingVertical:10,
      paddingHorizontal:40,
    }
})

// export default APP;