import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, Image, Animated, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'


export default function FullScreen({  navigation }) {
    const profilePic = useSelector(state => state.AuthReducer.ProfilePic)

return( 
    <View style={{flex:1,backgroundColor:'black'}}>
       
        <Image resizeMode='contain' style={{width:'100%',height:'100%'}} source={{uri : `${profilePic}` }}  />
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{position:'absolute',padding:20}}>
            <Image style={{height:30,width:30,tintColor:'white',}} source={require('../../assets/back.png')} /> 
        </TouchableOpacity>
    </View>
)

}