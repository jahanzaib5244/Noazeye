import React from 'react'
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native';


// own components
import {font , size ,Colors} from '../config/Utils'

export default function Header({navigation}) {

    const route = useRoute().name;
    console.log(route)
    return (
            <View style={styles.header}>

                {/* // drawer button view */}
                <View style={styles.drawer}>
                   <TouchableOpacity style={styles.drawerBtn} onPress={()=>navigation.openDrawer()}>
                       <Image style={styles.drawerPic} source={require('../assets/menu.png')} />
                   </TouchableOpacity>
                </View>

                {/* // navigation button public private  */}
                <View style={styles.navigationBtn}>
                    <TouchableOpacity style={styles.privateBtn} onPress={()=>navigation.navigate('Private')} >
                        <Text style={[styles.privateText,{fontWeight:route !=='public' ? '700' : null,color:route !=='public' ? Colors.drawer : 'gray'} ]}>Private</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.publicBtn} onPress={()=>navigation.navigate('public')}>
                        <Text style={[styles.privateText,{fontWeight:route =='public' ? '700' : null,color:route =='public' ? Colors.drawer : 'gray'} ]} >Public</Text>
                        </TouchableOpacity>
                </View>

                {/* // noazeye logo on header */}
                <View style={styles.noazeyeLogo}>
                     <Image style={styles.logoStyle} source={require('../assets/logo.png')} />
                </View>
            </View>

    )
}


const styles = StyleSheet.create({
    header:{
        height:60,
        elevation:10,
        shadowColor:Colors.primary,
        flexDirection:'row',
        backgroundColor:'white',
        shadowColor: "#000",
backgroundColor:Colors.white,
 shadowOffset: {
     width: 0,
     height: 1,
 },
 shadowOpacity: 0.18,
 shadowRadius: 1.00,
 
 elevation: 3,
    },
    drawer:{
        flex:1,
        justifyContent:'center'
    },
    navigationBtn:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    noazeyeLogo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    drawerBtn:{
       padding:20,
    },
    drawerPic:{
        width:30,
        resizeMode:'contain'
    },
    logoStyle:{
        resizeMode:'contain',
        width:'100%',
        height:'100%',
        marginRight:30
    },
    publicBtn:{
        marginLeft:20
    },
    publicText:{
        fontSize:font.h2,
    },
    privateText:{
        fontSize:font.h2,
      
    }
})
