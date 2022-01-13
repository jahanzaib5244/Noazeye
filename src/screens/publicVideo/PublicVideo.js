import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Image, SafeAreaView, ScrollVie, ToastAndroid } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useIsFocused, useRoute } from '@react-navigation/native';
import Share from 'react-native-share';
import { PublicVideoApi } from '../../Store/actions/AuthActions'
import { size } from '../../config/Utils';
import { useFocusEffect } from '@react-navigation/native';

import VideoPlayer from '../../component/Videodatafirst';
import { Videoes } from '../../component/Videoes';
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import { PublicVideoStyle } from './PublicVideoStyle';

export default function PublicVideo({ navigation, route }) {
    const publicVideo = useSelector(state => state.AuthReducer.PublicVideo)
    const { item ,thumb} = (route.params)
    console.log(thumb)
    const [fullScreen, setfullScreen] = useState(false)

    const [currentIndex, setcurrentIndex] = useState(0)

    const sharing = async (item) => {
        console.log(item)
        const options = {
            title: item.title,
            url: item.video_path,
            type: 'mp4'
        }

        try {
            const shareResponse = await Share.open(options);
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
        <View style={PublicVideoStyle.root}>
            {/* // custom player component from components folder */}
            <VideoPlayer
                item={item}
                share={() => sharing(item)}
                full={setfullScreen}
                thumbnail={thumb}
            />
            {/* // player top button container close or back button with text // update fullScreen state from Video player to show control on full screen */}
            {fullScreen ? null :
                <View style={PublicVideoStyle.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image style={PublicVideoStyle.back} source={require('../../assets/back.png')} />

                    </TouchableOpacity>
                    <Text style={PublicVideoStyle.Text} >Public Video</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()} >

                        <Image style={PublicVideoStyle.close} source={require('../../assets/close.png')} />
                    </TouchableOpacity>

                </View>
            }
        </View>
        // <SafeAreaView style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
        //     {/* // video player from component */}
        //     <SwiperFlatList
        //     style={{ height: size.height100, width: size.width100, flexGrow: 0, backgroundColor: 'black' }}
        //     vertical={true}
        //     data={publicVideo}
        //     renderItem={({item,index})=>{
        //         return(<Videodatafirst  fun={(item)=>fun(item)} index={index}  currentIndex={currentIndex}   navigation={navigation}   item={item} /> )}  }
        //     onChangeIndex={chnageIndex}
        //     keyExtractor={(item, index) => index.toString()}
        // />
        //     {/* <VideoesComponent  fullScreen={(val)=>setfullScreen(val)}  fun={(item)=>fun(item)} navigation={navigation} /> */}

        //      {/* // Header of video player */}
        //      <View style={{ flexDirection: 'row', position: 'absolute', top: 25, width: '100%' }}>
        //      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
        //          <TouchableOpacity onPress={()=>navigation.openDrawer()}>
        //          <Image style={{tintColor:'white', height: 30, width: 30,marginLeft:30 }} source={require('../../assets/menu.png')} />
        //          </TouchableOpacity>
        //      </View>
        //      <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        //          <TouchableOpacity onPress={() => navigation.navigate('Private')}>
        //              <Text style={{ color: route !== 'public' ? 'white' : 'gray', fontSize: 20 }}>Private</Text>
        //          </TouchableOpacity>
        //          <TouchableOpacity onPress={() => navigation.navigate('public')}>
        //              <Text style={{ color: route == 'public' ? 'white' : 'gray', fontWeight: '700', fontSize: 20, paddingLeft: 18 }}>Public</Text>
        //          </TouchableOpacity>
        //      </View>
        //      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',alignItems:'center' }}>
        //          {/* <Text style={{ color: 'white' }}>Log out</Text> */}
        //          <Image style={{height:40,width:80,marginRight:15,resizeMode:'contain',tintColor:'white'}} source={require('../../assets/logo.png')} />
        //      </View>

        //  </View>


        // </SafeAreaView>

    )
}

