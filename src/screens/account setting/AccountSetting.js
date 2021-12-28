import React, { useState } from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { Formik } from 'formik';
import * as Yup from 'yup'
import {useDispatch } from 'react-redux'



import Input from '../../component/Input'
import { AccountSettingStyle } from './AccountSettingStyle'
import AppButton, { LoadingButton } from '../../component/AppButton'
import {SuccessAlerts} from '../../component/Alerts'
import {UpdateProfileApi} from '../../Store/actions/AuthActions'
 
const validationschema = Yup.object().shape({
    Phone: Yup.number().required().label("Phone"),
    firstName: Yup.string().required().trim().label("First Name"),
    lastName: Yup.string().required().trim().label("Last Name"),
    Address: Yup.string().required().trim().label("Adress"),
    DOB: Yup.string().required().label('Date Of Birth')

});


export default function AccountSetting() {
    const dispatch = useDispatch()
    const userdata = useSelector(state => state.AuthReducer.userData)



    const [loading, setloading] = useState(false)
    const [invalid, setinvalid] = useState(null)
    const [userDOB, setuserDOB] = useState(userdata.user_dob )
    const [alertmsg, setalertmsg] = useState('')
    const [alertShow, setalertShow] = useState(false)



    const ctaUpdateProfile = (val) => {
        console.log('clicked',val)
        dispatch(UpdateProfileApi(setinvalid,setalertShow,setalertmsg ,setloading,val.firstName , val.lastName ,val.Phone ,val.Address ,val.DOB ))
    }
    const confirm=()=>{
        setalertShow(false)
    }
    return (
        <ScrollView contentContainerStyle={AccountSettingStyle.root}>
            <View style={AccountSettingStyle.uppercontainer} >
                <Image style={AccountSettingStyle.image} source={{ uri: userdata.profile_img_path }} />
            </View>
            <View style={AccountSettingStyle.lowerContainer}>
                <Formik
                    initialValues={{ firstName:userdata.user_first_name, lastName:userdata.user_last_name , Phone:userdata.user_phone, Address:userdata.user_address, DOB:userDOB }}
                    validationSchema={validationschema}
                    onSubmit={values => ctaUpdateProfile(values)}>
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <>
                            <View style={AccountSettingStyle.InputFieldContainer}>
                                <Input
                                    defaultValue={userdata.user_first_name}
                                    onchange={handleChange("firstName")}
                                    inputstyle={AccountSettingStyle.fname}
                                    name='First Name'
                                    placeholder='First Name...'
                                    blur={() => setFieldTouched("firstName")}
                                />
                                {touched.firstName && <Text style={AccountSettingStyle.error}>{errors.firstName}</Text>}

                                <Input
                                    defaultValue={userdata.user_last_name}
                                    onchange={handleChange("lastName")}
                                    inputstyle={AccountSettingStyle.inputfields}
                                    name='Last Name'
                                    blur={() => setFieldTouched("lastName")}
                                    placeholder='Last Name...'
                                />
                                {touched.lastName && <Text style={AccountSettingStyle.error}>{errors.lastName}</Text>}

                                <Input
                                    defaultValue={userdata.user_phone}
                                    onchange={handleChange("Phone")}
                                    inputstyle={AccountSettingStyle.inputfields}
                                    name='Phone'
                                    
                                    blur={() => setFieldTouched("Phone")}
                                    placeholder='Phone...'
                                />
                                {!!touched.Phone && <Text style={AccountSettingStyle.error}>{errors.Phone}</Text>}

                                <Input
                                    defaultValue={userdata.user_address}
                                    onchange={handleChange("Address")}
                                    inputstyle={AccountSettingStyle.inputfields}
                                    name='Address'
                                    blur={() => setFieldTouched("Address")}
                                    placeholder='Address...'
                                />
                                {!!touched.Address && <Text style={AccountSettingStyle.error}>{errors.Address}</Text>}
                                <Input
                                    defaultValue={userdata.user_dob}
                                    onchange={handleChange("DOB")}
                                    inputstyle={AccountSettingStyle.inputfields}
                                    name='Date Of Birth'
                                    blur={() => setFieldTouched("DOB")}
                                    placeholder='Date Of Birth...'
                                />
                                {!!touched.DOB && <Text style={AccountSettingStyle.error}>{errors.DOB}</Text>}
                                {!!invalid && <Text style={AccountSettingStyle.error}>{invalid}</Text>}
                                {/* // button */}
                                {loading ?
                                    <LoadingButton BTstyle={AccountSettingStyle.btn} />
                                    :
                                    <AppButton onPress={handleSubmit} name='Update Profile' BTstyle={AccountSettingStyle.btn} />
                                }

                            </View>
                        </>
                    )}
                </Formik>
                <SuccessAlerts title='profile'msg={alertmsg} confirm={()=>confirm()} showAlert={alertShow} />
            </View>
        </ScrollView>
    )
}
