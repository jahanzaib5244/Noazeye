import React, { useRef } from 'react'
import { View, Text ,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import VideoPlayer from 'react-native-video-player';

import { size, font, Colors } from '../../config/Utils';

export default function FullScreen({ route ,navigation}) {
    const { item,refrence } = route.params;
    console.log(refrence)
    const videoRef = useRef(refrence)
    return (
        <View style={{ backgroundColor: 'black', height: size.height100, width: size.width100, flex: 1 }}>
            <View style={{ backgroundColor: 'green', height: size.height100, width: size.width100, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'red', height: size.width100, width: size.height100, transform: [{ rotate: '270deg' }] }}>
                    <VideoPlayer
                        ref={videoRef}
                        style={{ backgroundColor: 'black', height: size.width100, width: size.height100 }}
                        video={{ uri: item.sources }}
                        pauseOnPress={true}
                        disableFullscreen={true}
                        resizeMode='cover'
                        showDuration={true}
                        showOnStart={true}
                        seekColor='#FFaFFd'
                        controlsTimeout={5000}
                        fullScreenOnLongPress={true}
                        thumbnail={{ uri: item.thumb }}
                    />
                    <View style={{position:'absolute',padding:10}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()} >
                        <Image style={{height:30,width:30,tintColor:'white'}} source={require('../../assets/back.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
