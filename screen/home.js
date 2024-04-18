import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png'

export default function Home({setNumPage}) {
  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.image}/>
        <TouchableOpacity onPress={()=> setNumPage(2)}>
            <Text style={styles.button}>LET'S START</Text>
        </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e8e8e6",
        paddingVertical: 50
    },
    image:{
        objectFit: "contain",
        width:300
    },
    button:{
        color: 'white',
        backgroundColor: '#d52729',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal:40,
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 1
    }
})