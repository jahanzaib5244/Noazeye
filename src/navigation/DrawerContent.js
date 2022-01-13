import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar , Title , Caption , Text } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSelector,useDispatch } from 'react-redux';

import { Colors, } from '../config/Utils';
import { dologout } from '../Store/actions/AuthActions';
export default function Drawercontent(props) {
    const userdata = useSelector(state => state.AuthReducer.userData)
    const profilePic = useSelector(state => state.AuthReducer.ProfilePic)
    const dispatch = useDispatch()
  const ctaLogout=()=>{
dispatch(dologout())
console.log(profilePic)
  }
    return (
        <View style={{ flex: 1, backgroundColor: Colors.primary }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, }}>
                            <Avatar.Image
                                source={{ uri: `${profilePic}` }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title numberOfLines={1} style={styles.title}>{userdata.username}</Title>
                                <Caption numberOfLines={1} style={styles.caption}>{userdata.user_email}</Caption>
                            </View>
                        </View>


                    </View>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
            <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 22, height: 22, tintColor: Colors.black }} source={require('../assets/rate.png')} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 10,
                                color: Colors.black,
                              
                            }}>
                            Rate us
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 22, height: 22, tintColor: Colors.black }} source={require('../assets/share.png')} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 10,
                                color: Colors.black,
                              
                            }}>
                            Share With Friend
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ctaLogout} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 22, height: 22, tintColor: Colors.black }} source={require('../assets/logout.png')} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 10,
                                color: Colors.black,
                              
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: Colors.primary,
        marginBottom: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: Colors.black,
        textTransform: 'capitalize'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: Colors.black
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        borderTopWidth: 1,
        borderColor: Colors.lightBlack,
        marginTop: 15,
        backgroundColor: Colors.primary
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderColor: Colors.white,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: Colors.primary
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

