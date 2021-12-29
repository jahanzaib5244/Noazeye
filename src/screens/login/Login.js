import React from 'react'
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup'

import AppButton, { LoadingButton } from '../../component/AppButton'
import Input from '../../component/Input'
import Passwordinput from '../../component/PasswordInput'

import { LoginStyle } from './LoginStyle'
import Uselogin from './Uselogin'

const validationschema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(3).label('Password')
});


export default function Login({ navigation }) {
    const [isinvalid, loading, doSigninUser, setsecureText, secureText] = Uselogin()
    return (
        <ScrollView contentContainerStyle={LoginStyle.root}>
            <View style={LoginStyle.logo}>
                <Image style={LoginStyle.image} source={require('../../assets/logo.png')} />
            </View>
            <View style={LoginStyle.input}>
                <Text style={LoginStyle.loginText}>Login</Text>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationschema}
                    onSubmit={values => doSigninUser(values)}>
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <>
                            <Input
                                onchange={handleChange("email")}
                                inputstyle={LoginStyle.inputfield}
                                placeholder='Enter Your Email...'
                                name='Email'
                                blur={() => setFieldTouched("email")}
                            />
                            { errors.email && touched.email ? <Text style={LoginStyle.error}>{errors.email}</Text>:null}
                            <Passwordinput
                                inputstyle={LoginStyle.inputfield}
                                placeholder='Enter Your Password...'
                                name='Password'
                                onchange={handleChange("password")}
                                blur={() => setFieldTouched("password")}
                            />
                            {errors.password && touched.password ? <Text style={LoginStyle.error}>{errors.password}</Text> : null}
                            {isinvalid && <Text style={LoginStyle.error}>{isinvalid}</Text>}
                            <View style={LoginStyle.forget}>
                                <TouchableOpacity style={LoginStyle.forgetBtn} onPress={() => navigation.navigate('ForgetPassword')} >
                                    <Text style={LoginStyle.forgettext}>Forget Password ?</Text>
                                </TouchableOpacity>
                            </View>
                           
                           {loading ? 
                        <LoadingButton  BTstyle={LoginStyle.btn}/>   
                        :
                        <AppButton name='Log In' BTstyle={LoginStyle.btn}  onPress={handleSubmit}/>

                        }
                            
                        </>)}
                </Formik>
            </View>
        </ScrollView>
    )
}
