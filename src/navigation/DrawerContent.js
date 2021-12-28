import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Avatar , Title , Caption , Text } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useSelector,useDispatch } from 'react-redux';

import { Colors, } from '../config/Utils';
import { dologout } from '../Store/actions/AuthActions';
export default function Drawercontent(props) {
    const userdata = useSelector(state => state.AuthReducer.userData)
    const dispatch = useDispatch()
  const ctaLogout=()=>{
dispatch(dologout())
  }
    return (
        <View style={{ flex: 1, backgroundColor: Colors.lightBlack }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, }}>
                            <Avatar.Image
                                source={{ uri: userdata.profile_img_path }}
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
                        <Image style={{ width: 22, height: 22, tintColor: Colors.white }} source={require('../assets/share.png')} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 10,
                                color: 'white'
                            }}>
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ctaLogout} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={{ width: 22, height: 22, tintColor: Colors.white }} source={require('../assets/logout.png')} />
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 10,
                                color: 'white'
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
        backgroundColor: Colors.lightBlack
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: Colors.lightBlack,
        marginBottom: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: Colors.white,
        textTransform: 'capitalize'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: Colors.white
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
        borderColor: Colors.white,
        marginTop: 15,
        backgroundColor: Colors.lightBlack
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderColor: Colors.white,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: Colors.lightBlack
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

