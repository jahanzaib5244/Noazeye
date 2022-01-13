import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

import { Colors, font } from '../config/Utils'

export default function Input({ name, placeholder, inputstyle, onchange, blur, ...otherProps }) {
    return (
        <View style={[styles.Input, inputstyle]}>
            <Text style={styles.text}>{name}</Text>
            <TextInput
                {...otherProps}
                style={styles.textinput}
                placeholder={placeholder}
                onChangeText={(e) => onchange(e)}
                onBlur={(e) => blur(e)}
                autoCapitalize="none"
                numberOfLines={1}
                placeholderTextColor="gray" 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Input: {

        backgroundColor: Colors.white,
        elevation: 3,
        shadowColor:Colors.primary,
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
