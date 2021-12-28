import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'

import { Colors } from '../../config/Utils'

export default function Splash() {
    return (
        <View style={styles.root}>
            <View style={styles.logo}>
              <Image style={styles.image} source={require('../../assets/logo.png')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:Colors.black,
    },
    logo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        
        height:150,
        width:300,
    }
})
