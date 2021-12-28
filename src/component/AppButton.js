import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'

import { Colors, font, size } from '../config/Utils'

export default function AppButton({ name, onPress, BTstyle }) {
    
    return (
        <TouchableOpacity onPress={onPress} style={[BTstyle, styles.btn]}   >
            <Text style={styles.btntxt}>{name}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.black,
        height: 60,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntxt: {
        color: Colors.white,
        fontSize: font.h2,
        fontWeight:'700'
    }

})
export const LoadingButton=({BTstyle})=>{
    return(
        <View style={[BTstyle, styles.btn]}   >
        <ActivityIndicator color={Colors.white} size='small' />
    </View>
    )
}