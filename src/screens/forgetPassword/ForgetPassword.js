import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';



import { ForgetPasswordStyle } from './ForgetPasswordStyle'
import Input from '../../component/Input'
import AppButton, { LoadingButton } from '../../component/AppButton'
import {ForgetPasswordApi} from '../../Store/actions/AuthActions'
import { SuccessAlerts } from '../../component/Alerts';

const validationschema = Yup.object().shape({
    Email: Yup.string().required().email().trim().label("Email"),
});

export default function ForgetPassword({ navigation }) {
    const dispatch = useDispatch()
    const [isinvalid, setisinvalid] = useState(null)
    const [loading, setloading] = useState(false)
    const [show, setshow] = useState(false)
    const [alertMsg, setalertMsg] = useState('')

    const ctaForgetPass = (val) => {
        console.log(val)
        dispatch(ForgetPasswordApi(val.Email, setisinvalid, setloading,setalertMsg,setshow))
    }

    const confirm=()=>{
        setshow(false)
        console.log('changed')
    }

    return (
        <ScrollView contentContainerStyle={ForgetPasswordStyle.root}>
            <View style={ForgetPasswordStyle.uppercontainer}>
                <TouchableOpacity style={ForgetPasswordStyle.back} onPress={() => navigation.goBack()}>
                    <Image style={ForgetPasswordStyle.image} source={require('../../assets/back.png')} />
                </TouchableOpacity>
                <Text style={ForgetPasswordStyle.singupText}>Forget Password</Text>
            </View>
            <View style={ForgetPasswordStyle.InputFieldContainer}>
                <View style={ForgetPassword}>
                    <Formik
                        initialValues={{ Email: '' }}
                        validationSchema={validationschema}
                        onSubmit={values => ctaForgetPass(values)}>
                        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                            <>
                                <Input
                                    inputstyle={ForgetPasswordStyle.email}
                                    name='Email'
                                    placeholder='Email...'
                                    onchange={handleChange("Email")}
                                    blur={() => setFieldTouched("Email")}
                                />
                                {!!touched.Email && <Text style={ForgetPasswordStyle.error}>{errors.Email}</Text>}
                                {!!isinvalid && <Text style={ForgetPasswordStyle.error}>{isinvalid}</Text>}
                                <View style={ForgetPasswordStyle.btnContainer}>
                                    {loading ?
                                        <LoadingButton  BTstyle={ForgetPasswordStyle.btn}/>
                                        :
                                        <AppButton onPress={handleSubmit} name='Forget Password' BTstyle={ForgetPasswordStyle.btn} />
                                    }
                                </View>
                            </>)}
                    </Formik>
                   <SuccessAlerts title='Password' msg={alertMsg} showAlert={show} confirm={()=>confirm()} />
                </View>
            </View>
        </ScrollView>
    )
}
