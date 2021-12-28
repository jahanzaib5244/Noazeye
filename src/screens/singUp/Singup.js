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
    const [selected, setselected] = useState('')
    const [getCompanies, setgetCompanies] = useState(false)
    const [loading, setloading] = useState(false)
    const [companyerror, setcompanyerror] = useState('')
    console.log(selected)
    const SelectedItem = (e) => {
        console.log('clicked', e)
        setselected(e)
    }

    useEffect(() => {
        console.log('useeffect')
        dispatch(listCompanies(setgetCompanies))
    }, [])


    const ctaSignUP = (val) => {
        setcompanyerror('')
         if(selected !== ''){
             dispatch(RegisterApi(setloading,val.ConfirmPassword,val.Email,val.Password,val.firstName,val.lastName,val.position,val.userName,selected))

         }else{
            setcompanyerror("Company is require field")
         }
    }

    return (
        <ScrollView contentContainerStyle={SingupStyle.root}>
            {/* //header component */}
            <View style={SingupStyle.uppercontainer}>
                <TouchableOpacity style={SingupStyle.back} onPress={() => navigation.goBack()}>
                    <Image style={SingupStyle.image} source={require('../../assets/back.png')} />
                </TouchableOpacity>
                <Text style={SingupStyle.singupText}>Sing Up</Text>
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
                            {touched.firstName !== '' ? <Text style={SingupStyle.error}>{errors.firstName}</Text> : null}
                            {touched.lastName !== '' ? <Text style={SingupStyle.error}>{errors.lastName}</Text> : null}

                            {/* {dropdown from component} */}
                            {getCompanies ?
                                <LoadingBussiness customstyle={SingupStyle.drop} />
                                :

                                <Dropdown customstyle={SingupStyle.drop} select={(e) => SelectedItem(e)} />
                            }
                          <Text style={SingupStyle.error}>{companyerror}</Text>
                            <Input
                                onchange={handleChange("Email")}
                                inputstyle={SingupStyle.email}
                                name='Email'
                                blur={() => setFieldTouched("Email")}
                                placeholder='Email...'
                            />
                            {!!touched.Email && <Text style={SingupStyle.error}>{errors.Email}</Text>}
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
                            {!!touched.ConfirmPassword && <Text style={SingupStyle.error}>{errors.ConfirmPassword}</Text>}
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
                            {!!touched.userName && <Text style={SingupStyle.error}>{errors.userName}</Text>}

                            {!!touched.position && <Text style={SingupStyle.error}>{errors.position}</Text>}
                            {/* // button */}
                            {loading ?
                                <LoadingButton BTstyle={SingupStyle.btn} />
                                :
                                <AppButton onPress={handleSubmit} name='Sing Up' BTstyle={SingupStyle.btn} />
                            }

                        </View>
                    </>
                )}
            </Formik>
        </ScrollView>
    )
}
