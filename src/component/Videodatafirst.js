import React, { useRef, useState, useEffect } from 'react'
import { View, Text, Easing, Image, Animated, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import Video from "react-native-video";
import ProgressBar from "react-native-progress/Bar";

// own component
import { size } from '../config/Utils'


export default function Videodatafirst({ full, item, share, thumbnail }) {
    const videoRef = useRef(null)
    // console.log(thumb)

    function secondsToTime(time) {
        return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
    }
    // states to control video player
    const [videoPaused, setvideoPaused] = useState(false)
    const [duration, setduration] = useState(0)
    const [current, setcurrent] = useState(0)
    const [loadingAnimation, setloadingAnimation] = useState(false)
    const [progress, setprogress] = useState(0)
    const [FullScreen, setFullScreen] = useState(false)
    const [show, setshow] = useState(false)
    const [loading, setloading] = useState(false)

    // full screen is enable or disable
    const handelFullScreen = () => {
        setFullScreen(!FullScreen)
        full(!FullScreen)
    }

    const loadingAnim = useState(new Animated.Value(60))[0]
    // loading animation custom
    const animatedLoading = async () => {
        Animated.timing(loadingAnim, {
            toValue: size.width100,
            duration: 1100,
            useNativeDriver: false

        }).start(() => {
            Animated.timing(loadingAnim, {
                toValue: 60,
                duration: 1100,

                useNativeDriver: false

            }).start(() => animatedLoading())
        })
    }

    // when play or paused button pressed
    const handleMainButtonTouch = () => {
        console.log(progress)
        if (progress >= 0.99) {
            videoRef.current.seek(0);
        }
        setvideoPaused(!videoPaused)
    };


    // progress control in progress bar
    const handleProgress = progress => {
        if (progress.currentTime == current) {
            setloading(true)
            setloadingAnimation(true)
        } else {
            setloading(false)
            setloadingAnimation(false)
        }
        // console.log(progress.currentTime)
        setcurrent(progress.currentTime)
        setprogress(progress.currentTime / duration)
    };
    // when video reached on end
    const handleEnd = () => {
        setvideoPaused(true)
    };


    // first the video wiil be loaded
    const handleLoad = (meta) => {

        console.log(meta.duration)
        setduration(meta.duration)
        console.log('loading')
        setloading(false)

    };


    // progress bar click to navigate the exact time
    const handleProgressPress = (e) => {
        console.log('clicked')
        const position = e.nativeEvent.locationX;
        const pro = ((position / (FullScreen ? (size.height70) : (size.width100 * 0.55)) * duration))
        console.log('progreess clicked', pro, !!videoRef.current)
        if (!!videoRef.current) {
            videoRef.current.seek(pro)
        }
    };
    // animation width 
    const boxStyle = {
        width: loadingAnim
    };


    // on bufeering
    const onBuffer = (e) => {
        console.log(e)
    }


    // shows custom controls
    const showControls = () => {
        if (show) {
            setshow(false)
        } else {
            setshow(true)
            setTimeout(() => {
                setshow(false)
            }, 10000);
        }

    }


    useEffect(() => {
        animatedLoading()
        return () => {
            setloading(false)
            setloadingAnimation(false)
            setvideoPaused(true)
            setshow(false)
        }
    }, [])

    return (
        <View style={styles.root}>

            <View style={{ height: FullScreen ? size.width100 : size.height100, width: FullScreen ? size.height100 : size.width100, transform: [{ rotate: FullScreen ? '270deg' : '0deg' }] }}>

                {/* // video player react native  */}
                <Video
                    ref={videoRef}
                    paused={videoPaused}
                    // paused={videoPaused}
                    onLoadStart={() => setloading(true)}
                    source={{ uri: item.video_URL }}
                    poster={thumbnail}
                    posterResizeMode={'contain'}
                    onBuffer={(e) => onBuffer(e)}
                    style={{ width: FullScreen ? size.height100 : size.width100, height: FullScreen ? size.width100 : size.height100, backgroundColor: 'black' }}
                    resizeMode={'contain'}
                    onLoad={(e) => handleLoad(e)}
                    onProgress={(e) => handleProgress(e)}
                    onEnd={(e) => handleEnd(e)}
                    autoplay={true}

                />

                {/* // handel full screen  */}
                {FullScreen ? null :
                    <View style={{ position: 'absolute', paddingVertical: 8, bottom: videoPaused || show ? 48 : 2, width: '100%', flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', minHeight: 60 }}>
                        <View style={{ paddingLeft: 18, flex: 4, }}>
                            <Text style={{ color: 'white', marginBottom: 3, fontSize: 16, fontWeight: '700' }}>{item.title}</Text>
                            <Text numberOfLines={5} style={{ color: 'white', width: '100%', }}>{item.description}</Text>
                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'column', paddingLeft: 5, paddingRight: 18, alignItems: 'center' }}>
                            <TouchableOpacity onPress={share} style={{ justifyContent: 'flex-end', }}>
                                <Image style={{ width: 35, height: 35, tintColor: 'rgba(256,256,256,1)' }} source={require('../assets/share.png')} />
                                <Text style={{ color: 'white', fontWeight: '700', marginTop: 3 }}>Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                {/* // when paused button pressed  */}
                {videoPaused || show ?
                    <View style={[styles.controls, { width: FullScreen ? size.height100 : size.width100 }]}>
                        <TouchableOpacity style={{ width: 35, height: 35, justifyContent: 'center', alignItems: 'center', }} onPress={() => handleMainButtonTouch()}>
                            {videoPaused ? <Image style={{ height: 40, width: 40, tintColor: '#FFF' }} source={require('../assets/play.png')} />
                                : <Image style={{ height: 40, width: 40, tintColor: '#FFF' }} source={require('../assets/paused.png')} />
                            }
                        </TouchableOpacity>

                        {/* // seek the time on seek bar */}
                        <TouchableOpacity activeOpacity={0.9} style={{ paddingVertical: 10 }} onPress={(e) => handleProgressPress(e)}>
                            <ProgressBar
                                progress={progress}
                                color="#FFF"
                                unfilledColor="rgba(255,255,255,.5)"
                                borderColor="#FFF"
                                width={FullScreen ? (size.height70) : (size.width100 * 0.55)}
                                endAngle={1}
                                height={10}
                                endAngle={1}
                            />
                        </TouchableOpacity>
                        {/* // time to shows on controll */}
                        <Text style={styles.duration}>
                            {secondsToTime(Math.floor(progress * duration))} / {secondsToTime(Math.floor(duration))}
                        </Text>
                        <TouchableOpacity style={{ paddingHorizontal: 10, paddingVertical: 6 }} onPress={() => handelFullScreen()}>
                            {FullScreen ?
                                <Image style={{ padding: 10, width: 18, height: 18, tintColor: 'rgba(256,256,256,0.8)' }} source={require('../assets/exitFullScreen.png')} />
                                :
                                <Image style={{ padding: 10, width: 18, height: 18, tintColor: 'rgba(256,256,256,0.8)' }} source={require('../assets/fullScreen.png')} />
                            }
                        </TouchableOpacity>
                    </View>
                    // when loading true animation to display
                    : loadingAnimation || loading ?
                        <View style={{ alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, width: '100%' }}><Animated.View style={[{ height: 1, backgroundColor: 'white', }, boxStyle]} /></View> :
                        <View style={{ position: 'absolute', bottom: 0 }}>
                            <ProgressBar
                                progress={progress}
                                color="#FFF"
                                unfilledColor="rgba(255,255,255,.5)"
                                borderColor="#000"
                                width={size.width100}
                                height={2}
                                endAngle={1}
                            />
                        </View>
                }

                {/* // when loading true this activity indicator will be shown  */}
                {loading ?
                    <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: "rgba(0, 0, 0, 0.5)", bottom: '45%', padding: 10, borderRadius: 50 }}>
                        <ActivityIndicator color='white' size={30} />
                    </View>
                    : null}

                {/* // when video paused when paused icon will be shown on video  */}
                {videoPaused ?
                    <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: "rgba(0, 0, 0, 0.5)", bottom: '45%', padding: 4, borderRadius: 50 }}>
                        <Image style={{ height: 40, width: 40, tintColor: '#FFF' }} source={require('../assets/play.png')} />
                    </View>
                    : null}

                {/* // button to shows/hide  controll  */}
                <TouchableOpacity activeOpacity={0.9} onPress={showControls} style={{ position: 'absolute', width: '100%', height: '70%', bottom: FullScreen ? '10%' : '20%', }} />
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingTop: 250,
    },
    videoContainer: {
        overflow: "hidden",
    },
    controls: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: 48,
        bottom: 0,

        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingHorizontal: 10,
    },
    mainButton: {
        marginRight: 15,
    },
    duration: {
        color: "#FFF",
        marginLeft: 0,
    },
});