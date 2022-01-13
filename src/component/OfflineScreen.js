import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { Colors, font, size } from '../config/Utils'
import Splash from '../screens/splash/Splash'
import { offfline } from '../Store/actions/AuthActions'
import AppButton from './AppButton'

export default function OfflineScreen() {
    const dispatch = useDispatch()
    const [loading, setloading] = React.useState(false)
    const offline = () => {
        dispatch(offfline(setloading))
    }
    return (
        <View style={styles.root}>
            {loading ? <Splash /> :
                <View style={{ flex: 1 }}>
                    <View style={styles.upper}>
                        <View>
                            <Image resizeMode='contain' style={styles.img} source={require('../assets/offline.png')} />
                            <Text style={styles.txt} >No Internet Connection</Text>
                            <Text style={styles.des}>You are not connected to the internet.</Text>
                            <Text style={styles.des}>Make sure WI-Fi is on,Airplain Mode is off</Text>
                            <Text style={styles.des}>and try again</Text>
                        </View>
                    </View>
                    <View style={styles.lower}>
                        <View style={{marginHorizontal:30}} >

                        <AppButton name='Reload App' onPress={offline} />
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 2,
        backgroundColor: Colors.white
    },
    img: {
        width: size.width60,
        height: size.height30,
        alignSelf: 'center',
        tintColor:'rgba(0,0,0,0.3)'
    },
    txt: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: font.h1,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'center',

    },
    des: {
        marginTop: 5,
        alignSelf: 'center',
        fontSize: 16,
        marginHorizontal: 30,
        alignSelf: 'center'
    },
    upper: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

    },
    lower: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        borderTopLeftRadius:80,
        borderTopRightRadius:80,
        elevation:14

    }
})
