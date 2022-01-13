import React,{useState} from 'react'
import { View, TextInput, StyleSheet, Text,Image, TouchableOpacity } from 'react-native'

import { Colors, font } from '../config/Utils'

export default function Passwordinput({ name, placeholder, inputstyle, onchange, blur }) {
    const [show, setshow] = useState(true)
    return (
        <View style={[inputstyle, styles.Input]}>
            <Text style={styles.text}>{name}</Text>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TextInput
                style={styles.textinput}
                secureTextEntry={show}
                placeholder={placeholder}
                onChangeText={(e)=>onchange(e)}
                onBlur={(e) => blur(e)}
                autoCapitalize="none"
                numberOfLines={1}
                placeholderTextColor="gray" 
            />
            <TouchableOpacity onPress={()=>setshow(!show)}>
                {show ? 
                <Image style={{height:15,width:20}} source={require('../assets/eyeoff.png')}/>
                :
                <Image style={{height:15,width:20}} source={require('../assets/eye.png')}/>
                }
            
            </TouchableOpacity>
            </View>
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
       flex:1,
        marginVertical: 5,
        marginHorizontal: 5,
        fontSize: font.h3,
        padding: 0,
        paddingHorizontal: 10,
        marginTop: 5,
    }
})
