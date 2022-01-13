import React,{useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import RootStack from './RootStack';
import {useSelector,useDispatch} from 'react-redux'

import Splash from '../screens/splash/Splash';
import {GetUser} from '../Store/actions/AuthActions';
import DrawerNavigation from './DrawerNavigation'
import OfflineScreen from '../component/OfflineScreen'

export default function Navigation() {


    const token = useSelector(state => state.AuthReducer.usertoken)
    const offline = useSelector(state => state.AuthReducer.offline)
    // const [loading, setloading] = useState(true)
    const loading = useSelector(state => state.AuthReducer.loading)
    console.log(loading,offline)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUser()) 
    }, [])

    return (
        <NavigationContainer>
            {loading ?
                <View style={{ flex: 1 }}>
                    
                    <Splash />
                </View>
                :
                offline ? 
                <View style={{flex:1}}>
                <OfflineScreen />
                </View>
                :
                token !== null ?
                <DrawerNavigation />
                :
                <RootStack />
            }

        </NavigationContainer>
    )
}
