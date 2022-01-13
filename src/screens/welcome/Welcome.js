import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import { WelcomeStyle } from './WelcomeStyle'
import { mainHeading, bulletText1, bulletText2, subHeading } from '../../component/Repeat'


export default function Welcome({ navigation }) {
    return (
        <View style={WelcomeStyle.root}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={WelcomeStyle.logo}>
                    <Image style={WelcomeStyle.image} source={require('../../assets/logo.png')} />
                </View>
                <View style={WelcomeStyle.btnContainer}>
                    <Image style={WelcomeStyle.welcomePic} source={require('../../assets/welcome.png')} />
                    <Text style={WelcomeStyle.welcomeText}>
                        Video Content Creation Made More Economically.
                    </Text>
                    <Text style={WelcomeStyle.detailText}>Custom Designed Video Platform to Share Meaningful Stories.</Text>
                    <View style={WelcomeStyle.rowBtnContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={WelcomeStyle.loginBtn}>
                            <Text style={WelcomeStyle.loginBtnTxt}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Singup')} style={[WelcomeStyle.loginBtn, { backgroundColor: 'white', elevation: 2, borderWidth: 0.2 }]}>
                            <Text style={WelcomeStyle.SingupBtnTxt}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}
