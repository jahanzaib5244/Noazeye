import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Image, SafeAreaView, ScrollVie, ToastAndroid } from 'react-native'
import { Videoes } from '../../component/Videoes'
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import {useSelector} from 'react-redux'
import VideoPlayer from 'react-native-video-player';
import { useIsFocused, useRoute } from '@react-navigation/native';
import Share from 'react-native-share';
import { useDispatch } from 'react-redux'

import VideoesComponent from '../../component/VideoesComponent'


export default function PublicVideo({ navigation }) {
    const publicVideo = useSelector(state => state.AuthReducer.PublicVideo)

    const isFocused = useIsFocused('Private');
    const route = useRoute().name;
const dispatch = useDispatch()
    console.log(isFocused)

    const fun = async (item) => {
        // console.log(item)
        const options = {
            title: item.title,
            url: item.sources,
            type: 'mp4'
        }

        try {
            const shareResponse = await Share.open(options);
            console.log(shareResponse)
        } catch (error) {
            console.log(error)
        }

    };
    const ctaLogout=()=>{
        dispatch(dologout())
       
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
            {/* // video player from component */}
            <VideoesComponent  fun={(item)=>fun(item)} />
            {/* // Header of video player */}
            <View style={{ flexDirection: 'row', position: 'absolute', top: 25, width: '100%' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Image style={{tintColor:'white', height: 30, width: 30,marginLeft:30 }} source={require('../../assets/menu.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Private')}>
                        <Text style={{ color: route !== 'public' ? 'white' : 'gray', fontSize: 20 }}>Private</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('public')}>
                        <Text style={{ color: route == 'public' ? 'white' : 'gray', fontWeight: '700', fontSize: 20, paddingLeft: 18 }}>Public</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',alignItems:'center' }}>
                    {/* <Text style={{ color: 'white' }}>Log out</Text> */}
                    <Image style={{height:40,width:80,marginRight:15}} source={require('../../assets/logo.png')} />
                </View>

            </View>
        </SafeAreaView>

    )
}

