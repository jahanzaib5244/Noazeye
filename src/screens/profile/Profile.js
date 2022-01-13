import React, { useState } from 'react'
import { Image, View, Text, ScrollView, ActivityIndicator, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import ProfileItem from '../../component/ProfileItem'
import ImageViewer from 'react-native-image-zoom-viewer';
import PImage from 'react-native-image-progress';
import { ProfileStyle } from './ProfileStyle'
import Progress from 'react-native-progress';



export default function Profile({ navigation }) {
    const userdata = useSelector(state => state.AuthReducer.userData)
    const profilePic = useSelector(state => state.AuthReducer.ProfilePic)
    const [model, setmodel] = useState(false)
    const images = [{
        url: profilePic
    }]
    return (
        <ScrollView contentContainerStyle={ProfileStyle.root}>
            <View style={ProfileStyle.upperContainer}>
                <TouchableOpacity onPress={() => setmodel(true)} style={ProfileStyle.cardImageContainer}  >
                    <PImage
                        source={{uri: `${profilePic}`  }}
                        indicator={Progress}
                        indicatorProps={{
                            size: 80,
                            borderWidth: 0,
                            color: 'rgba(150, 150, 150, 1)',
                            unfilledColor: 'rgba(200, 200, 200, 0.2)'
                          }}
                        style={ProfileStyle.cardImage}  />

                    

                </TouchableOpacity>
                <Text style={ProfileStyle.cardText} >{userdata.username}</Text>
                <Text style={ProfileStyle.cardText2} >{userdata.user_email}</Text>
            </View>
            <View style={ProfileStyle.lowerContainer}>
                <ProfileItem name='First Name' value={userdata.user_first_name} itemStyle={ProfileStyle.fName} />
                <ProfileItem name='Last Name' value={userdata.user_last_name} itemStyle={ProfileStyle.textData} />
                <ProfileItem name='Phone' value={userdata.user_phone} itemStyle={ProfileStyle.textData} />
                <ProfileItem name='Address' value={userdata.user_address} itemStyle={ProfileStyle.textData} />
                <ProfileItem name='Date Of Birth' value={userdata.user_dob} itemStyle={ProfileStyle.textData} />
            </View>
            <Modal visible={model} transparent={true}>

                <ImageViewer
                    enableSwipeDown={true}
                    onSwipeDown={() => setmodel(false)}
                    imageUrls={images} />


            </Modal>
        </ScrollView>

    )
}
