import React,{useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import RootStack from './RootStack';
import {useSelector,useDispatch} from 'react-redux'

import Splash from '../screens/splash/Splash';
import {GetUser} from '../Store/actions/AuthActions';
import DrawerNavigation from './DrawerNavigation'


export default function Navigation() {


    const token = useSelector(state => state.AuthReducer.usertoken)
    const [loading, setloading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUser(setloading)) 
    }, [])

    return (
        <NavigationContainer>
            {loading ?
                <View style={{ flex: 1 }}>
                    <Splash />
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
