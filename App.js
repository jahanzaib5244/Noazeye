import React, { useRef, useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, StatusBar, Image, SafeAreaView, ScrollVie, ToastAndroid } from 'react-native'
import { Videoes } from './src/component/Videoes'
import Video from 'react-native-video';
import { SwiperFlatList } from 'react-native-swiper-flatlist'
import VideoPlayer from 'react-native-video-player';

const { height, width } = Dimensions.get('window')

export default function App() {

  const videoRef = useRef(null)
  const [currentIndex, setcurrentIndex] = useState(0)
  const [stop, setstop] = useState(false)

  const onBuffer = (e) => {
    console.log('buffer...', e)
  }

  const onError = () => {

  }

  // useEffect(() => {
  //  if(!!videoRef.current){
  //    videoRef.current.seek(0)
  //  }
  // }, [currentIndex])


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
          // autoplay={true}
          resizeMode='contain'
          duration={true}
          // disableSeek={true}

          fullScreenOnLongPress={true}

          thumbnail={{ uri: item.thumb }}
        />

      </View>
    )
  }
  const indexChange = ({ index }) => {
    console.log('props....', index)
    setcurrentIndex(index)
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>

      <SwiperFlatList
        style={{ height: height, width: width, flexGrow: 0, backgroundColor: 'black' }}
        vertical={true}
        data={Videoes}
        renderItem={item}
        keyExtractor={(item, index) => index.toString()}
        onChangeIndex={indexChange}
      />
    </SafeAreaView>

  )
}
var styles = StyleSheet.create({
  backgroundVideo: {
    height: height,
    width: width
  },
});