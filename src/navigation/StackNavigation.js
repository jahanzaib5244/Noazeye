import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import PublicVideo from '../screens/publicVideo/PublicVideo';
import PrivateVideo from '../screens/privateVideo/PrivateVideo';
import FullScreen from '../screens/fullScreen/FullScreen';
import PublicScreen from '../screens/publicScreen/PublicScreen';
import PrivateScreen from '../screens/privateScreen/PrivateScreen';




export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="public" component={PublicScreen} />
        <Stack.Screen options={{ headerShown: false }} name="publicVideo" component={PublicVideo} />
        <Stack.Screen options={{ headerShown: false }} name="Private" component={PrivateScreen} />
        <Stack.Screen options={{ headerShown: false }} name="privateVideo" component={PrivateVideo} />
        <Stack.Screen options={{ headerShown: false }} name="fullScreen" component={FullScreen} />
        
      </Stack.Navigator>
    )
}
