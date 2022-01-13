import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator, } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'


import { SingupStyle } from './SingupStyle'
import Input from '../../component/Input'
import Passwordinput from '../../component/PasswordInput'
import Dropdown, { LoadingBussiness } from '../../component/Dropdown'
import AppButton, { LoadingButton } from '../../component/AppButton'
import { listCompanies, RegisterApi } from '../../Store/actions/AuthActions';
import { SuccessAlerts } from '../../component/Alerts';

const validationschema = Yup.object().shape({
    Email: Yup.string().required().email().label("Email"),
    Password: Yup.string().required('Password is required'),
    ConfirmPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match'),
    firstName: Yup.string().required().trim().label("First Name"),
    lastName: Yup.string().required().trim().label("Last Name"),
    position: Yup.string().required().trim().label("Position"),
    userName: Yup.string().required().trim().label("User Name"),

});


export default function Singup({ navigation }) {

    const dispatch = useDispatch()
    const [selected, setselected] = useState(null)
    const [getCompanies, setgetCompanies] = useState(false)
    const [loading, setloading] = useState(false)
    const [show, setshow] = useState(false)
    const [alertMsg, setalertMsg] = useState('')
    const [companyerror, setcompanyerror] = useState(null)
    const [invalid, setinvalid] = useState(null)
    console.log(selected)
    const SelectedItem = (e) => {
        setselected(e)
        if (selected !== null) {
            setcompanyerror(null)
        }
    }

    useEffect(() => {
        console.log('useeffect')
        dispatch(listCompanies(setgetCompanies))
        return () => {
            setloading(false)
        }
        
    }, [])


    const ctaSignUP = (val) => {
        setcompanyerror(null)
        if (selected !== '') {
            dispatch(RegisterApi(setinvalid, setshow, setalertMsg, setloading, val.ConfirmPassword, val.Email, val.Password, val.firstName, val.lastName, val.position, val.userName, selected))

        } else {
            setcompanyerror("Company is require field")
        }
    }

    const confirm = () => {
        navigation.goBack()
    }

    return (
        <ScrollView contentContainerStyle={SingupStyle.root}>
            {/* //header component */}
            <View style={SingupStyle.uppercontainer}>
                <TouchableOpacity style={SingupStyle.back} onPress={() => navigation.goBack()}>
                    <Image style={SingupStyle.image} source={require('../../assets/back.png')} />
                </TouchableOpacity>
                <Text style={SingupStyle.singupText}>Sign up</Text>
            </View>
            <Formik
                initialValues={{ Email: '', Password: '', ConfirmPassword: '', firstName: '', lastName: '', position: '', userName: '' }}
                validationSchema={validationschema}
                onSubmit={values => ctaSignUP(values)}>
                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
                        <View style={SingupStyle.InputFieldContainer}>
                            <View style={SingupStyle.nameContainer}>
                                <Input
                                    onchange={handleChange("firstName")}
                                    inputstyle={SingupStyle.fname}
                                    name='First Name'
                                    placeholder='First Name...'
                                    blur={() => setFieldTouched("firstName")}
                                />

                                <Input
                                    onchange={handleChange("lastName")}
                                    inputstyle={SingupStyle.lname}
                                    name='Last Name'
                                    blur={() => setFieldTouched("lastName")}
                                    placeholder='Last Name...'
                                />
                            </View>
                            {touched.firstName && errors.firstName ? <Text style={SingupStyle.error}>{errors.firstName}</Text> : null}
                            {touched.lastName && errors.lastName ? <Text style={SingupStyle.error}>{errors.lastName}</Text> : null}

                            {/* {dropdown from component} */}
                            {getCompanies ?
                                <LoadingBussiness customstyle={SingupStyle.drop} />
                                :

                                <Dropdown customstyle={SingupStyle.drop} select={(e) => SelectedItem(e)} />
                            }
                            {companyerror && <Text style={SingupStyle.error}>{companyerror}</Text>}
                            <Input
                                onchange={handleChange("Email")}
                                inputstyle={SingupStyle.email}
                                name='Email'
                                blur={() => setFieldTouched("Email")}
                                placeholder='Email...'
                            />
                            {touched.Email && errors.Email ? <Text style={SingupStyle.error}>{errors.Email}</Text> : null}
                            <View style={SingupStyle.username}>
                                <Passwordinput
                                    onchange={handleChange("Password")}
                                    inputstyle={SingupStyle.Pass}
                                    name='Password'
                                    blur={() => setFieldTouched("Password")}
                                    placeholder='Password...'
                                />
                                {/* {!!touched.Password && <Text style={SingupStyle.error}>{errors.Password}</Text>} */}
                                <Passwordinput
                                    onchange={handleChange("ConfirmPassword")}
                                    inputstyle={SingupStyle.CPass}
                                    name='Confirm Password'
                                    blur={() => setFieldTouched("ConfirmPassword")}
                                    placeholder='Confirm Pass...'
                                />

                            </View>
                            {touched.ConfirmPassword && errors.ConfirmPassword ? <Text style={SingupStyle.error}>{errors.ConfirmPassword}</Text> : null}
                            <View style={SingupStyle.username}>
                                <Input
                                    onchange={handleChange("position")}
                                    inputstyle={SingupStyle.fname}
                                    name='Position Name'
                                    blur={() => setFieldTouched("position")}
                                    placeholder='Position Name...'
                                />

                                <Input
                                    onchange={handleChange("userName")}
                                    inputstyle={SingupStyle.lname}
                                    name='User Name'
                                    blur={() => setFieldTouched("userName")}
                                    placeholder='User Name...'
                                />
                            </View>
                            {touched.userName && errors.userName ? <Text style={SingupStyle.error}>{errors.userName}</Text> : null}

                            {touched.position && errors.position ? <Text style={SingupStyle.error}>{errors.position}</Text> : null}
                            {invalid && <Text style={SingupStyle.error}>{invalid}</Text>}
                            {/* // button */}
                            {loading ?
                                <LoadingButton BTstyle={SingupStyle.btn} />
                                :
                                <AppButton onPress={handleSubmit} name='Sign up' BTstyle={SingupStyle.btn} />
                            }
                            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
                                <View style={{ flexDirection: 'row', bottom: 20 }}>
                                    <Text style={{paddingVertical:10,color:'gray'}}>Already have an account ?</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{paddingVertical:10, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 5 }}><Text style={{ borderBottomWidth: 1, color: 'black' }}>Login</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </>
                )}
            </Formik>
            <SuccessAlerts title='Sign up' msg={alertMsg} showAlert={show} confirm={() => confirm()} />

        </ScrollView>
    )
}
