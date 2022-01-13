import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet, Image,Animated, Easing } from 'react-native'

import { Colors,size} from '../../config/Utils'

export default function Splash() {
  
    const image =useState( new Animated.Value(1))[0]

    const animateImage=()=>{
        Animated.timing(image , {
            toValue: 1,
            duration:500,
            easing: Easing.in(),
            useNativeDriver:true
        }).start(()=>{
            Animated.timing(image , {
                toValue: 0.3,
                duration:500,
                easing: Easing.in(),
                useNativeDriver:true
            }).start(()=>animateImage())
        } )
    }
    useEffect(() => {
        console.log('yes');
        animateImage()
    }, [])
    return (
        <View style={styles.root}>
            <Animated.View style={[styles.logo,{opacity:image}]}>
              <Image style={styles.image} source={require('../../assets/logo.png')} />
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:Colors.white,
    },
    logo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        
        height:size.height10,
        width:size.width90,
    }
})
