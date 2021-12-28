import React, { useRef } from 'react'
import { View, Text,  TouchableOpacity,  Image, } from 'react-native'
import VideoPlayer from 'react-native-video-player';

import { SwiperFlatList } from 'react-native-swiper-flatlist'
import {size} from '../config/Utils'
import { Videoes } from './Videoes';

export default function VideoesComponent({ fun }) {
    const videoRef = useRef(null)
    const item = ({ item, index }) => {
          
        return (
            <View style={{ flex: 0, backgroundColor: 'black', height: size.height100, justifyContent: 'center', alignItems: 'center', width: size.width100, }}>
                <VideoPlayer
                    ref={videoRef}
                    style={{ height: size.height100, width: size.width100, backgroundColor: 'black' }}
                    video={{ uri: item.sources }}
                    // videoHeight={height}
                    pauseOnPress={true}
                    disableFullscreen={true}
                    resizeMode='contain'
                    showDuration={true}
                    showOnStart={true}
                    seekColor='#FFaFFd'
                    controlsTimeout={5000}
                    fullScreenOnLongPress={true}
                    thumbnail={{ uri: item.thumb }}
                />
                <View style={{ position: 'absolute', paddingVertical: 8, bottom: 48, width: '100%', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', minHeight: 60 }}>
                    <View style={{ paddingLeft: 18, flex: 4, }}>
                        <Text style={{ color: 'white', marginBottom: 3, fontSize: 16, fontWeight: '700' }}>{item.title}</Text>
                        <Text numberOfLines={5} style={{ color: 'white', width: '100%', }}>{item.description}</Text>
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', paddingLeft: 5, justifyContent: 'flex-end', paddingRight: 18, alignItems: 'center' }}>
                        <TouchableOpacity onPress={(item) => fun(item)} style={{ justifyContent: 'flex-end', }}>
                            <Image style={{ width: 35, height: 35, tintColor: 'rgba(256,256,256,0.9)' }} source={require('../assets/share.png')} />
                            <Text style={{ color: 'white', fontWeight: '700', marginTop: 3 }}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SwiperFlatList
            style={{ height: size.height100, width: size.width100, flexGrow: 0, backgroundColor: 'black' }}
            vertical={true}
            data={Videoes}
            renderItem={item}
            keyExtractor={(item, index) => index.toString()}
        />
    )
}
