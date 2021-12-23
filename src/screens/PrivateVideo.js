import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Image, SafeAreaView, ScrollVie, ToastAndroid } from 'react-native'
import { Videoes } from '../component/Videoes'
import Video from 'react-native-video';
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import VideoPlayer from 'react-native-video-player';
import { useIsFocused, useRoute } from '@react-navigation/native';
import Share from 'react-native-share';



const { height, width } = Dimensions.get('window')

export default function PrivateVideo({ navigation }) {

    const route = useRoute().name;
    console.log(route)
    const videoRef = useRef(null)

    //   console.log(isFocused)
    const fun = async (item) => {
        console.log(item)
        const shareOptions = {
            title: item.title,
            message: 'The video is share by noazeye app',
            url: item.sources,
            social: Share.Social.EMAIL,
        };

        try {
            const shareResponse = await Share.shareSingle(shareOptions)
            console.log(shareResponse)
        } catch (error) {
            console.log(error)
        }

    };

    const item = ({ item, index }) => {
        // console.log('rendring', currentIndex)
        return (
            <View style={{ flex: 0, backgroundColor: 'black', height: height, justifyContent: 'center', alignItems: 'center', width: width, }}>

                {/* <Video
            source={{ uri: item.sources }}
            ref={videoRef}
            poster={item.thumb}
            posterResizeMode='contain'
            onBuffer={onBuffer}
            onError={onError}
            bufferConfig={{
              minBufferMs: 1500,
              maxBufferMs: 5000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 5000
            }}
            repeat={true}
            resizeMode='contain'
            paused={stop ? true:  currentIndex !== index}
            style={styles.backgroundVideo} />
            <TouchableOpacity activeOpacity={1} onPress={()=>setstop(!stop)}  style={{height:400,width:width,position:'absolute',backgroundColor:'transparent'}} />
            {stop ? 
              <View style={{flex:1,alignItems:'center',justifyContent:'center',position:'absolute',height:30,width:50}}>
              <Image style={{height:60,width:60}} source={require("./src/assets/play.png")} />
              </View>
          :
          
          null} */}
                <VideoPlayer
                    ref={videoRef}
                    style={{ height: height, width: width, backgroundColor: 'black' }}
                    video={{ uri: item.sources }}
                    videoHeight={height}
                    pauseOnPress={true}
                    resizeMode='cover'

                    fullScreenOnLongPress={true}
                    thumbnail={{ uri: item.thumb }}
                />
                <View style={{ position: 'absolute', paddingVertical: 8, bottom: 48, width: '100%', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', minHeight: 60 }}>
                    <View style={{ paddingLeft: 18, flex: 4, }}>
                        <Text style={{ color: 'white', marginBottom: 3, fontSize: 16, fontWeight: '700' }}>{item.title}</Text>
                        <Text numberOfLines={5} style={{ color: 'white', width: '100%', }}>{item.description}</Text>
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', paddingLeft: 5, justifyContent: 'flex-end', paddingRight: 18, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => fun(item)} style={{ justifyContent: 'flex-end', }}>
                            <Image style={{ width: 35, height: 35, tintColor: 'rgba(256,256,256,0.9)' }} source={require('../assets/share.png')} />
                            <Text style={{ color: 'white', fontWeight: '700', marginTop: 3 }}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>

            <SwiperFlatList
                style={{ height: height, width: width, flexGrow: 0, backgroundColor: 'black' }}
                vertical={true}
                data={Videoes}
                renderItem={item}
                keyExtractor={(item, index) => index.toString()}
            //   onChangeIndex={indexChange}
            />
            <View style={{ flexDirection: 'row', position: 'absolute', top: 25, width: '100%' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Image style={{ height: 40, width: 80 }} source={require('../assets/logo.png')} />
                </View>
                <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Private')}>
                    <Text style={{ color: route == 'Private' ? 'white' : 'gray', fontWeight: '700', paddingHorizontal: 30, fontSize: 20 }}>Private</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={{ color: route !== 'Private' ? 'white' : 'gray', fontWeight: route !== 'Private' ? '700' : '100', paddingHorizontal: 0, fontSize: 20 }}>Public</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ color: 'white' }}>Log out</Text>
                </View>

            </View>


           
        </SafeAreaView>

    )
}

