import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import { WelcomeStyle } from './WelcomeStyle'
import { mainHeading, bulletText1, bulletText2, subHeading } from '../../component/Repeat'


export default function Welcome({ navigation }) {
    return (
        <View style={WelcomeStyle.root}>
            <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={WelcomeStyle.logo}>
                <Image style={WelcomeStyle.image} source={require('../../assets/logo.png')} />
            </View>
            <View style={WelcomeStyle.btnContainer}>
                <Text style={WelcomeStyle.welcomeText}>
                    {mainHeading}
                </Text>
                <Text style={WelcomeStyle.detailText}>{subHeading.first}</Text>
                {bulletText1.map((item, index) => {
                    return (
                        <View key={index} style={WelcomeStyle.bullet}>
                            <Image style={WelcomeStyle.BulletImage} source={require('../../assets/dot.png')} />
                            <Text style={WelcomeStyle.BulletText}>{item}</Text>
                        </View>
                    )
                })}

                <Text style={WelcomeStyle.detailText}>{subHeading.Second}</Text>
                {bulletText2.map((item, index) => {
                    return (
                        <View key={index} style={WelcomeStyle.bullet}>
                            <Image style={WelcomeStyle.BulletImage} source={require('../../assets/dot.png')} />
                            <Text style={WelcomeStyle.BulletText}>{item}</Text>
                        </View>
                    )
                })}
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
