import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

import { Colors, font } from '../config/Utils'

export default function ProfileItem({ name, value,itemStyle}) {
    return (
        <View style={[styles.Input, itemStyle]}>
            <Text style={styles.text}>{name}</Text>
            <Text  style={styles.textinput} >{value}</Text>
               
                
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {

        backgroundColor: Colors.white,
        elevation: 3,
        borderRadius: 10,
        padding: 10,
    },
    text: {
        paddingLeft: 15,
        color: Colors.black,
        fontSize: font.h3,
        fontWeight: '700',
        letterSpacing: 1
    },
    textinput: {
        color: Colors.black,
        marginVertical: 5,
        marginHorizontal: 5,
        fontSize: font.h3,
        padding: 0,
        paddingHorizontal: 10,
        marginTop: 5
    }
})
