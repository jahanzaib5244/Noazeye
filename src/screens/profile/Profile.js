import React from 'react'
import { Image, View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import ProfileItem from '../../component/ProfileItem'

import { ProfileStyle } from './ProfileStyle'

export default function Profile() {
    const userdata = useSelector(state => state.AuthReducer.userData)
    return (
        <ScrollView contentContainerStyle={ProfileStyle.root}>
            <View style={ProfileStyle.upperContainer}>
            <Image style={ProfileStyle.cardImage} source={{uri : userdata.profile_img_path }} />
                    <Text style={ProfileStyle.cardText} >{userdata.username}</Text>
                    <Text style={ProfileStyle.cardText2} >{userdata.user_email}</Text>
            </View>
            <View style={ProfileStyle.lowerContainer}>
              <ProfileItem name='First Name' value={userdata.user_first_name} itemStyle={ProfileStyle.fName} /> 
              <ProfileItem name='Last Name' value={userdata.user_last_name} itemStyle={ProfileStyle.textData}/> 
              <ProfileItem name='Phone' value={userdata.user_phone} itemStyle={ProfileStyle.textData}/> 
              <ProfileItem name='Address' value={userdata.user_address} itemStyle={ProfileStyle.textData}/> 
              <ProfileItem name='Date Of Birth' value={userdata.user_dob} itemStyle={ProfileStyle.textData}/> 
            </View>
        </ScrollView>
    )
}
