import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { createThumbnail } from "react-native-create-thumbnail";


import { font, size, Colors } from '../config/Utils'

export default function VideoCard({ item, index, navigation, share }) {

    const [numberOfLines, setnumberOfLines] = useState(3)
    const [ShowMore, setShowMore] = useState(false)
    const [thumb, setthumb] = useState(null)
    const [ImageHeight, setImageHeight] = useState(0)



    useEffect(() => {

        createThumbnail({
            url: item.video_URL,
            timeStamp: 3000,
        })
            .then(response => {
                console.log(response)
                setthumb(response.path)
              
                const ratio = size.width95 / (response.width);
                setImageHeight((response.height * ratio) - 250)

            })
            .catch((err) => {
                
                console.log(err)});
          
               
    }, [])


     // navigate to media video player screen 
    const navigateToPlayer = () => {
        if (item.type == 'public') {
            console.log('puclic') 
            navigation.navigate('publicVideo', { item, thumb })
        } else {
            if (item.type == "private") {
                console.log('Private')
                navigation.navigate('privateVideo', { item, thumb })

            }
        }
    }
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.title}>{item.title}</Text>
      {/* // card pic container */}
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigateToPlayer()} style={{ justifyContent: 'center', backgroundColor: 'black', width: size.width95, minHeight: size.height40, }} >
                {thumb == null ? <ActivityIndicator size={80} color={'white'} /> :
                    <Image style={[styles.image, { height: ImageHeight }]} source={{uri : `${thumb}`}} />}
                <View style={styles.playBtn}>

                    <Image style={{ tintColor: 'white', }} source={require('../assets/play.png')} />
                </View>
            </TouchableOpacity>
{/* // see more functionality on text component */}
            <View>
                <Text
                    onTextLayout={({ nativeEvent: { lines } }) => {
                        lines.length <= 3 ? setShowMore(true) : setShowMore(false)
                    }}
                    numberOfLines={numberOfLines} style={[styles.description, { marginBottom: ShowMore ? 20 : 0 }]}>{item.description}</Text>
                {ShowMore ? null :
                    <TouchableOpacity onPress={() => {
                        if (numberOfLines == 3) {
                            setnumberOfLines(0)
                        } else {
                            if (numberOfLines == 0) {
                                setnumberOfLines(3)
                            }
                        }
                    }}
                        style={{ marginBottom: 20, marginHorizontal: 20 }}>
                        <Text style={{ color: 'black', }}>{numberOfLines !== 0 ? 'Show More' : 'Show less'}</Text>
                    </TouchableOpacity>
                }
            </View>
            <TouchableOpacity style={styles.shareBtn} onPress={share}>
                <Text style={{ fontSize: font.h2, color: 'gray' }}>Share</Text>
                <Image    resizeMode='contain' style={styles.shareimage} source={require('../assets/share.png')} />
            </TouchableOpacity>
        </View>


    )
}
const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 0,
        marginHorizontal: '2.5%',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: "#000",
        backgroundColor: Colors.white,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        width: size.width95,
        borderTopWidth: 1,
        borderColor: Colors.primary,
        marginTop: 10,
        elevation: 15,

    },
    title: {
        marginTop: 15,
        fontSize: font.h2,
        color: Colors.black,
        alignSelf: 'center',
        fontWeight: '700',
        marginBottom: 10,
        marginHorizontal: 10,
        elevation: 10,
        textShadowColor: Colors.primary
    },
    image: {
        width: size.width95,
        resizeMode: 'cover',
        alignSelf: 'center',
        minHeight:size.height40
    },
    description: {
        paddingHorizontal: 20,
        marginTop: 10,
        color: 'gray'

    },
    shareBtn: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shareimage: {
     
        tintColor: 'gray',
        height: 20,
        width: 20,
        marginTop: 5,
        marginLeft:5
    },
    playBtn: {
        position: 'absolute', alignSelf: 'center', padding: 3, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 50 / 2
    }

})
