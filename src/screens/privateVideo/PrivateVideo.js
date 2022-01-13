import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Image, SafeAreaView, ScrollVie, ToastAndroid } from 'react-native'
import { Videoes } from '../../component/Videoes'
import { SwiperFlatList } from 'react-native-swiper-flatlist'

import { useIsFocused, useRoute } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import Share from 'react-native-share';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { PrivateVideoApi } from '../../Store/actions/AuthActions';

import VideoPlayer from '../../component/Videodatafirst';

import { PrivateVideoStyle } from './PrivateVideoStyle';
import { size } from '../../config/Utils';


export default function PrivateVideo({ navigation, route }) {

    const { item,thumb } = (route.params)
    const [fullScreen, setfullScreen] = useState(false)
    // when user click on video player share button 
    const sharing = async (item) => {
        console.log(item)
        const shareOptions = {
            title: item.title,
            subject: "Noazeye Video",
            url: item.video_URL,
            social: Share.Social.EMAIL,
        };

        try {
            const shareResponse = await Share.shareSingle(shareOptions)
            console.log(shareResponse)
        } catch (error) {
            console.log(error)
        }

    };

    useFocusEffect(() => {
        // This will run when component is `focused` or mounted.
        StatusBar.setHidden(true);
      
        // This will run when component is `blured` or unmounted.
        return () => {
          StatusBar.setHidden(false);
        }
      });

    return (
        <View style={PrivateVideoStyle.root}>
            {/* // custom player from component folder */}
            <VideoPlayer
                item={item}
                share={() => sharing(item)}
                full={setfullScreen}
                thumbnail={thumb}
            />
            {/* // player top button container close or back button with text // update fullScreen state from Video player to show control on full screen */}
            {fullScreen ? null :
                <View style={PrivateVideoStyle.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image style={PrivateVideoStyle.back} source={require('../../assets/back.png')} />

                    </TouchableOpacity>
                    <Text style={PrivateVideoStyle.Text} >Private Video</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()} >

                        <Image style={PrivateVideoStyle.close} source={require('../../assets/close.png')} />
                    </TouchableOpacity>

                </View>
            }
        </View>
    

    )
}

